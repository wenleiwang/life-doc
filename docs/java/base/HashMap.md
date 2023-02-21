# HashMap

## HashMap特点

## HashMap底层实现原理

### 步骤描述

HashMap对象在实例化后，底层创建了一个长度为16的一维数组 Entry[ ] table

当执行方法 put(key1，value1) 添加数据时，HashMap底层的实现原理如下（此前可能已经执行过多次put()方法）：

首先，调用key1所在类的hashCode()计算key1的哈希值，此哈希值经过底层算法的计算以后，可以得到在Entry数组中的存放位置，接下来又分为三种情况。

情况1：如果此位置上的数据为空，此时的key1-value1添加成功。

情况2：如果此位置上数据不为空（意味着此位置上存在一个或多个数据（多个数据以链表的形式存在）），则比较key1和已经存在的数据的哈希值，如果key1的哈希值与已经存在的数据的哈希值都不相同，此时key1-value1添加成功，即key1-value1和原来的数据会以链表的形式存储。

情况3：与情况二类似，在比较key1和已经存在的数据的哈希值时，如果key1的哈希值和某个已经存在的数据（如key2-value2）的哈希值相同，则调用key1所在类的equals()方法，返回key1和key2的比较结果，如果返回的是false，此时key1-value1添加成功，同样也是和原来的数据以链表的形式存储；如果返回的是true，则会使用value1替换value2。

在不断添加数据的过程中，会涉及到数组的扩容问题。当添加数据超出临界值(且数据要存放的位置非空)时，需要对数组扩容。默认的扩容方式：扩容为原来容量的2倍，并将原来的数据复制过来。

> java8在第二步之前多了一步，判断是否是数结构。如果是结构，使用红黑树的putVlaue方法。
>
> 在第二步时也多了一个处理。判读如果链表节点超过8变成红黑树结构

### put值代码解读

```java
/**
*
* @param hash key求hash的值
* @param key 目标key
* @param value 目标value
* @param onlyIfAbsent 如果为真，则不更改现有值，put函数丢过来的是false
* @param evict 如果为 false，则表处于创建模式，put函数丢过来true
* @return 前一个值，如果没有，则为 null
*/
final V putVal(int hash, K key, V value, boolean onlyIfAbsent,
                boolean evict) {
    // 接收map的节点数组
    Node<K,V>[] tab; 
    // 
    Node<K,V> p; 
    //
    int n;
    // 
    int i;
    // 把成员变量赋值给tab并判断是否为null；如果不为null，把节点数组长度赋值给n并判断长度是否为0
    if ((tab = table) == null || (n = tab.length) == 0)
        // 条件成立，初始化节点数组。分别把初始化后的节点数组和长度赋值给tab、n
        n = (tab = resize()).length;

    // 最后节点位置和hash数求与值赋值给i，从节点数组中取出节点给p并判断p是否为null
    // 这个i = (n - 1) & hash 是一个很值得关注的点，看下面的“为啥要用&运算”小节
    if ((p = tab[i = (n - 1) & hash]) == null)
        // 没有节点生成一个新的节点，直接放入
        tab[i] = newNode(hash, key, value, null);
    else {
        Node<K,V> e; 
        K k;
        // 节点的hash值与当前key的hash值比较；（节点的key值赋值给k，与目标key比较）
        if (p.hash == hash &&
            ((k = p.key) == key || (key != null && key.equals(k))))
            // 取出节点给e
            e = p;
        else if (p instanceof TreeNode)
            // p是树结构，直接使用数结构操作节点。e是putTreeVal的返回值
            e = ((TreeNode<K,V>)p).putTreeVal(this, tab, hash, key, value);
        else {
            for (int binCount = 0; ; ++binCount) {
                // e是最后一个结点
                if ((e = p.next) == null) {
                    p.next = newNode(hash, key, value, null);
                    // 循环次数超过7，从第8次开始
                    if (binCount >= TREEIFY_THRESHOLD - 1) // -1 for 1st
                        // 改使用红黑数
                        treeifyBin(tab, hash);
                    break;
                }
                // 中间有key相等
                if (e.hash == hash &&
                    ((k = e.key) == key || (key != null && key.equals(k))))
                    break;
                // 取到下一个节点
                p = e;
            }
        }
        if (e != null) { // 存在key的映射
            // 老值
            V oldValue = e.value;
            // 是否替换新值
            if (!onlyIfAbsent || oldValue == null)
                e.value = value;
            afterNodeAccess(e);
            // 返回老值
            return oldValue;
        }
    }
    // 修改计数加1
    ++modCount;
    // 节点总数大于临界值，重新构建
    if (++size > threshold)
        resize();
    afterNodeInsertion(evict);
    // 返回null
    return null;
}
```

### 为什么要 >>> 16

> 算数以为右移 (>>>) ：也是无符号移位，高位无论正负都补0

HashMap类中获取hash值得方法

```java
static final int hash(Object key) {
    int h;
    return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
}
```

想：1的二进制是1，2的二进制是10，3的二进制是11依次类推，越大的数低位1就越多

那么：对象的hash值在HashMap容量低时如果直接&运算产生碰撞的概率要高一些，因为低位都是***1111111111与一个小容量的011111运算得到的都是011111。说明是容量垃圾，影响到了这个运算

Java的解决方案：把hash值的高位右移16位与自己异或一下。这样就很低成本的让自己的低位有规律的变化了。这样再去&运算产生碰撞的概率就要低一些了。

### 为什么要用&运算

在putVal方法中确定数组位置的逻辑

```java
i = (n - 1) & hash
```
先知条件：
* hash是一个int为32位
* HashMap的容量是2的倍数
* HashMap初始默认容量16 (1 << 4)，用二进制：1 0000

其实这里的&运算就是在模拟模运算（%）

>  模运算：一个再大的数与一个小的数进行模运算，得到的数都会小于小的数。即：a % b = c，c一定小于b。常用作分组，把一堆东西，分成多少组。

上面&替换模运算：节省了非常多的计算开销。但是为什么能替换？

**当 lenth = 2n 时，X % length = X & (length - 1)**

容量n减去1用二进制表示为01111，如下公式

```
     10100101 11000100 00100101
 &   00000000 00000000 00001111
----------------------------------
     00000000 00000000 00000101    //高位全部归零，只保留末四位
```

> 位运算相同为1，不同为0


### 树结构put值

```java
// map：目标使用的map对象
// tab：节点数组
// h：目标key的hash值
// k：目标key
// v：目标value
final TreeNode<K,V> putTreeVal(HashMap<K,V> map, Node<K,V>[] tab,
                                int h, K k, V v) {
    // 
    Class<?> kc = null;
    // 搜索开关
    boolean searched = false;
    // 有父节点，向上找到根结点给root；没有父节点，本节点就是根节点
    TreeNode<K,V> root = (parent != null) ? root() : this;
    // 从根节点开始循环
    for (TreeNode<K,V> p = root;;) {
        int dir, ph; K pk;
        if ((ph = p.hash) > h)
            // 当前节点的hsah值比目标key的hash值大
            dir = -1;
        else if (ph < h)
            // 当前节点的hsah值比目标key的hash值小
            dir = 1;
        else if ((pk = p.key) == k || (k != null && k.equals(pk)))
            //当前节点的hsah值比目标key的hash值一致，且key一致。返回当前节点
            return p;
        else if ((kc == null &&
                    (kc = comparableClassFor(k)) == null) ||
                    (dir = compareComparables(kc, k, pk)) == 0) {
            // 当前节点的hsah值比目标key的hash值一致，且key不一致。
            // 目标key不可比较 或 可比较但比较结果相等
            if (!searched) {
                // 没有搜索过
                TreeNode<K,V> q, ch;
                // 设为搜索过
                searched = true;
                // 当前节点的左孩子不为空，左边能找到，找到节点赋值给q
                // 或者
                // 右边不为空，右边能找到，找到节点赋值给q
                if (((ch = p.left) != null &&
                        (q = ch.find(h, k, kc)) != null) ||
                    ((ch = p.right) != null &&
                        (q = ch.find(h, k, kc)) != null))
                    // 找到直接返回
                    return q;
            }
            // 目标key不可比较 或 可比较但比较结果相等 的解决方法。
            // 解决办法：只需要一致的插入规则来保持重新平衡之间的等价性
            // 类名比较得到结果。
            // 类名还一致通过:(System.identityHashCode(k) <= System.identityHashCode(pk) ?-1 : 1)
            dir = tieBreakOrder(k, pk);
        }

        // 当前节点赋值给xp
        TreeNode<K,V> xp = p;
        // p 去到左节点或右节点。
        if ((p = (dir <= 0) ? p.left : p.right) == null) {
            // 节点为null，xp的next节点赋值给xpn
            Node<K,V> xpn = xp.next;
            // 新建一个结点x
            TreeNode<K,V> x = map.newTreeNode(h, k, v, xpn);
            if (dir <= 0)
                // dir小于0，放在左节点
                xp.left = x;
            else
                // 大于0，放在右节点
                xp.right = x;
            // xp的naxt指向新节点
            xp.next = x;
            // x的父节点指向x的前一个结点
            // x的前一个结点指向xp
            x.parent = x.prev = xp;
            if (xpn != null)
                ((TreeNode<K,V>)xpn).prev = x;
            // 做调整重新找到root，修改节点数组。确保给定的根是其 bin 的第一个节点。
            moveRootToFront(tab, balanceInsertion(root, x));
            return null;
        }
    }
}
```

## JDK7与JDK8中HashMap有什么区别？

1. 使用空参构造器创建HashMap对象时，底层没有直接创建一个长度为16的数组。
2. jdk8底层存储数据的数组使用的是Node[ ]，而不是Entry[ ] 。
3. jdk8在首次调用put()方法时，底层才会创建长度为16的数组。
4. jdk7中底层存储数据的结构是：数组+链表。jdk8中底层存储数据的结构是：数组+链表+红黑树。
   5.当存储数据形成链表时，链表的结构不相同，jdk7的链表结构是：新的数据指向旧的数据。jdk8的链表结构是：旧的数据指向新的数据。
   6.当底层数组的某一个索引位置上的元素以链表形式存在的数据个数大于8 ，且当前数组的长度大于64时，此时这个索引位置上的数据改为使用红黑树存储。

## HashMap中的循环链表是如何产生的

### 在Java8之前多线程操作resize()会导致循环链表

多线程同时put时，如果同时调用了resize操作，可能会导致循环链表产生，进而使得后面get的时候，会死循环。下面详细阐述循环链表如何形成的。
ransfer逻辑是遍历旧数组，将旧数组元素通过头插法的方式，迁移到新数组的对应位置问题出就出在头插法。

[逐步解释](https://blog.csdn.net/dingjianmin/article/details/79780350)

resize源码介绍：

```java
// 初始化或加倍表大小。如果为空，则按照字段阈值中保存的初始容量目标进行分配。
// 否则，因为我们使用二次幂展开，每个 bin 中的元素必须保持相同的索引，或者在新表中以二次幂的偏移量移动。
final Node<K,V>[] resize() {
    Node<K,V>[] oldTab = table;
    int oldCap = (oldTab == null) ? 0 : oldTab.length;
    int oldThr = threshold;
    int newCap, newThr = 0;
    if (oldCap > 0) {
        if (oldCap >= MAXIMUM_CAPACITY) {
            threshold = Integer.MAX_VALUE;
            return oldTab;
        }
        else if ((newCap = oldCap << 1) < MAXIMUM_CAPACITY &&
                    oldCap >= DEFAULT_INITIAL_CAPACITY)
            newThr = oldThr << 1; // double threshold
    }
    else if (oldThr > 0) // initial capacity was placed in threshold
        newCap = oldThr;
    else {               // zero initial threshold signifies using defaults
        newCap = DEFAULT_INITIAL_CAPACITY;
        newThr = (int)(DEFAULT_LOAD_FACTOR * DEFAULT_INITIAL_CAPACITY);
    }
    if (newThr == 0) {
        float ft = (float)newCap * loadFactor;
        newThr = (newCap < MAXIMUM_CAPACITY && ft < (float)MAXIMUM_CAPACITY ?
                    (int)ft : Integer.MAX_VALUE);
    }
    threshold = newThr;
    @SuppressWarnings({"rawtypes","unchecked"})
        Node<K,V>[] newTab = (Node<K,V>[])new Node[newCap];
    table = newTab;
    if (oldTab != null) {
        for (int j = 0; j < oldCap; ++j) {
            Node<K,V> e;
            if ((e = oldTab[j]) != null) {
                oldTab[j] = null;
                if (e.next == null)
                    newTab[e.hash & (newCap - 1)] = e;
                else if (e instanceof TreeNode)
                    ((TreeNode<K,V>)e).split(this, newTab, j, oldCap);
                else { // preserve order
                    Node<K,V> loHead = null, loTail = null;
                    Node<K,V> hiHead = null, hiTail = null;
                    Node<K,V> next;
                    do {
                        next = e.next;
                        if ((e.hash & oldCap) == 0) {
                            if (loTail == null)
                                loHead = e;
                            else
                                loTail.next = e;
                            loTail = e;
                        }
                        else {
                            if (hiTail == null)
                                hiHead = e;
                            else
                                hiTail.next = e;
                            hiTail = e;
                        }
                    } while ((e = next) != null);
                    if (loTail != null) {
                        loTail.next = null;
                        newTab[j] = loHead;
                    }
                    if (hiTail != null) {
                        hiTail.next = null;
                        newTab[j + oldCap] = hiHead;
                    }
                }
            }
        }
    }
    return newTab;
}
```

### JDK8也会出现死循环

[并发-HashMap在jdk1.8也会出现死循环](https://www.cnblogs.com/xuwc/p/14044664.html)

## HashMap是如何解决哈希冲突的？

解决Has冲突的方法有开放定制法、链地址法、公共溢出区法、再散列法。HashMap使用的是链地址法，如果出现了哈希冲突且key不一样就新建一个结点，超过一定长度修改为红黑树结构
