# 通用唯一词典分类标识符ULID

在分布式系统中，唯一标识符（UUID）是非常常见的，它是用于标识数据或者实体的一种方式，它是基于算法生成的一个固定长度的字符串。然而，UUID也有一些缺点，例如它们很难被排序，因为它们是随机生成的，这导致了一些性能问题。而ULID则是一种新的方案，它解决了这些问题并提供了一些额外的优势。

## 什么是ULID
ULID（Universally Unique Lexicographically Sortable Identifier，通用唯一的词典可排序标识符）是一种可排序、唯一的标识符，由Alizain Feerasta在2016年提出，它结合了时间戳和随机数生成器来生成一个32位的标识符，适用于分布式系统中标识数据实体和事件等场景。

特性：
* 与 UUID 的 128 位兼容性
* 每毫秒 1.21e+24 个唯一 ULID
* 词典可排序！
* 规范编码为 26 个字符的字符串，而不是 36 个字符的 UUID
* 使用 Crockford 的 base32 以提高效率和可读性（每个字符 5 位）
* 不区分大小写
* 无特殊字符（URL 安全）
* 单调排序顺序（正确检测和处理相同的毫秒）

## 规范

### ulid/javascript 中实现的 ULID 的当前规范

```js
 01AN4Z07BY      79KA1307SR9X4MV3

|----------|    |----------------|
 Timestamp          Randomness
   48bits             80bits
```

#### 组成
时间戳
* 48 位整数
* UNIX 时间（以毫秒为单位）
* 直到公元 10889 年才会用完空间。

随机性
* 80 位
* 如果可能，加密安全的随机性来源

#### 排序
最左边的字符必须首先排序，最右边的字符必须最后排序（词法顺序）。必须使用默认的 ASCII 字符集。在同一毫秒内，不保证排序顺序

> 哈哈，这里。我曾向别人发起提问说：我有一不解。排序节说同一个毫秒内，不能保证排序顺序。在应用中全局唯一且毫秒精度有序。哪个是对的？
> 他是这么回答：额。这语文。都对的啊，毫秒精度有序，就是在毫秒以内无序，但全局唯一


#### 规范字符串表示形式
```js
ttttttttttrrrrrrrrrrrrrrrr

where
t is Timestamp (10 characters)
r is Randomness (16 characters)
```

编码
Crockford 的 Base32 如图所示使用。此字母表不包括字母 I、L、O 和 U，以避免混淆和滥用。
```
0123456789ABCDEFGHJKMNPQRSTVWXYZ
```

#### 单调
当在同一毫秒内生成 ULID 时，我们可以提供一些关于排序顺序的保证。也就是说，如果检测到相同的毫秒， `random` 则分量在最低有效位位置递增 1 位（带进位）。例如：

```js
import { monotonicFactory } from 'ulid'

const ulid = monotonicFactory()

// 假设这些调用发生在相同毫秒内
ulid() // 01BX5ZZKBKACTAV9WEVGEMMVRZ
ulid() // 01BX5ZZKBKACTAV9WEVGEMMVS0
```

如果在极不可能的情况下，您设法在同一毫秒内生成了 2 个以上的 ULID，或者导致随机分量以更少的 80 ULID 溢出，则生成将失败。

```js
import { monotonicFactory } from 'ulid'

const ulid = monotonicFactory()

// 假设这些调用发生在相同毫秒内
ulid() // 01BX5ZZKBKACTAV9WEVGEMMVRY
ulid() // 01BX5ZZKBKACTAV9WEVGEMMVRZ
ulid() // 01BX5ZZKBKACTAV9WEVGEMMVS0
ulid() // 01BX5ZZKBKACTAV9WEVGEMMVS1
...
ulid() // 01BX5ZZKBKZZZZZZZZZZZZZZZX
ulid() // 01BX5ZZKBKZZZZZZZZZZZZZZZY
ulid() // 01BX5ZZKBKZZZZZZZZZZZZZZZZ
ulid() // throw new Error()!
```

解析 Base32 字符串时出现溢出错误

从技术上讲，一个 26 个字符的 Base32 编码字符串可以包含 130 位信息，而 ULID 只能包含 128 位信息。因此，在 Base32 中编码的最大有效 ULID 是 `7ZZZZZZZZZZZZZZZZZZZZZZZZZ` ，它对应于 `281474976710655` 或 `2 ^ 48 - 1` 的纪元时间。

所有实现都应拒绝任何对大于此值的 ULID 进行解码或编码的尝试，以防止溢出错误。

### 二进制布局和字节顺序
这些组件编码为 16 个八位字节。每个组件都首先使用最高有效字节（网络字节顺序）进行编码。

```
0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                      32_bit_uint_time_high                    |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|     16_bit_uint_time_low      |       16_bit_uint_random      |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                       32_bit_uint_random                      |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                       32_bit_uint_random                      |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```


---


> [Github关于ULID项目的地址](https://github.com/ulid/spec)
