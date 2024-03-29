# Java中字符串、byte、16进制

## 有符号数、无符号数

- 无符号数中，所有的位都用于表示该值的大小
- 有符号数中，最高位用于表示正负

无符号数： 1111 1111 值：`255 1*2^7+1*2^6+1*2^5+1*2^4+1*2^3+1*2^2+1*2^1+1*2^0`

有符号数： 0111 1111 值：`127 1*2^6+1*2^5+1*2^4+1*2^3+1*2^2+1*2^1+1*2^0`

同样是一个字节，无符号数的最大值是255，而有符号数的最大值是127。原因是有符号数中的最高位被挪去表示符号了(第一位0表示正数，1表示负数)。并且，我们知道，最高位的权值也是最高的（对于1字节数来说是2的7次方=128），所以仅仅少于一位，最大值一下子减半。

有符号数： 1000 0000 值：`-128 1*2^6+1*2^5+1*2^4+1*2^3+1*2^2+1*2^1+1*2^0`

不过，有符号数的长处是它可以表示负数。因此，虽然它的在最大值缩水了，却在负值的方向出现了伸展。我们仍一个字节的数值对比：

无符号数： `0` —————– `255`

有符号数： `-128` ——— `0` ———`127`

同样是一个字节，无符号的最小值是 0 ，而有符号数的最小值是-128。所以二者能表达的不同的数值的个数都一样是256个。只不过前者表达的是 `0` 到 `255` 这256个数，后者表达的是 `-128` 到 `+127` 这256个数。

> 由于Java中的`byte`是有符号类型，所以在使用时需要确保转换结果是符合预期的。如果你希望将`byte`视为无符号类型，可以通过与`0xFF`按位与操作来清除符号位。
## java中的 byte 与 16 进制

java 中 byte 用二进制表示占 8 位（一个字节），而 16 进制的每个字符需要用 4 位来表示，所以可以把每个 byte 转换成两个 16 进制的字符，也就是把 byte 的高 4 位和低 4 位分别转成 16 进制字符的H和L，并组合起来得到 byte 转成 16 进制字符串的结果是 `new String(H) + new String(L)` 。即 byte 用 16 进制表示只占 2 位。

```java
//byte转换成16进制
char[] HEX_ARRAY = "0123456789ABCDEF".toCharArray();

byte b = -86;
int v = b & 0xFF;//转成int
System.out.println(v);
System.out.println(HEX_ARRAY[(b&0xFF)>>>4]);//输出A   提取高位字节**b&0xFF必须括号括起来，不然后面的>>>会先操作**
System.out.println(HEX_ARRAY[b&0xff&0x0f]);//输出A    提前低位字节
System.out.println(HEX_ARRAY[b&255&15]);//输出A       0xff、0xFF、255是表示同一个值，0x0f、15是同一个值
System.out.println(HEX_ARRAY[(b&0xff)>>>4]+""+HEX_ARRAY[b&0xff&0x0f]);
```


16进制：0x06 
十进制：6 
二进制：00000110 
二进制转10进制的方法：`Math.pow(2,1)+Math.pow(2,2) `

16进制：0x41 
十进制：65 
二进制：01000001 
二进制转10进制的方法：`Math.pow(2,0)+Math.pow(2,6) `

16进制：0x06-0x41 （高位在前低位再后） 
十进制：1601
二进制是：00000110 01000001 
二进制转10进制的方法：`Math.pow(2,0)+Math.pow(2,6)+Math.pow(2,9)+Math.pow(2,10)`


(-7,-78)=-1614 ，其中(-7,-78)是2个byte
-7 原码:10000111 反码:11111000 补码:11111001
-78 原码:11001110 反码:10110001 补码:10110010

-7是高位，-78是低位 
原码:11111001 10110010 
反码:10000110 01001101 
补码:10000110 01001110 

`Math.pow(2,1)+Math.pow(2,2)+Math.pow(2,3)+Math.pow(2,6) +Math.pow(2,9)+Math.pow(2,10)`



```java
//byte h = -7,l=-78;//-1614
//byte h = 5,l=-100;//1436
//byte h = 7,l=-1;//2047
byte h =7,l=-69;//1979
int i = ((h)<<8)|((l&0xff));
System.out.println(i);
```