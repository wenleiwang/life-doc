# HashMap

## HashMap特点

## HashMap底层实现原理

HashMap对象在实例化后，底层创建了一个长度为16的一维数组 Entry[ ] table

当执行方法 put(key1，value1) 添加数据时，HashMap底层的实现原理如下（此前可能已经执行过多次put()方法）：

首先，调用key1所在类的hashCode()计算key1的哈希值，此哈希值经过底层算法的计算以后，可以得到在Entry数组中的存放位置，接下来又分为三种情况。

情况1：如果此位置上的数据为空，此时的key1-value1添加成功。

情况2：如果此位置上数据不为空（意味着此位置上存在一个或多个数据（多个数据以链表的形式存在）），则比较key1和已经存在的数据的哈希值，如果key1的哈希值与已经存在的数据的哈希值都不相同，此时key1-value1添加成功，即key1-value1和原来的数据会以链表的形式存储。

情况3：与情况二类似，在比较key1和已经存在的数据的哈希值时，如果key1的哈希值和某个已经存在的数据（如key2-value2）的哈希值相同，则调用key1所在类的equals()方法，返回key1和key2的比较结果，如果返回的是false，此时key1-value1添加成功，同样也是和原来的数据以链表的形式存储；如果返回的是true，则会使用value1替换value2。

在不断添加数据的过程中，会涉及到数组的扩容问题。当添加数据超出临界值(且数据要存放的位置非空)时，需要对数组扩容。默认的扩容方式：扩容为原来容量的2倍，并将原来的数据复制过来。


## JDK7与JDK8中HashMap有什么区别？
1. 使用空参构造器创建HashMap对象时，底层没有直接创建一个长度为16的数组。
2. jdk8底层存储数据的数组使用的是Node[ ]，而不是Entry[ ] 。
3. jdk8在首次调用put()方法时，底层才会创建长度为16的数组。
4. jdk7中底层存储数据的结构是：数组+链表。jdk8中底层存储数据的结构是：数组+链表+红黑树。
5.当存储数据形成链表时，链表的结构不相同，jdk7的链表结构是：新的数据指向旧的数据。jdk8的链表结构是：旧的数据指向新的数据。
6.当底层数组的某一个索引位置上的元素以链表形式存在的数据个数大于8 ，且当前数组的长度大于64时，此时这个索引位置上的数据改为使用红黑树存储。

## HashMap中的循环链表是如何产生的
多线程同时put时，如果同时调用了resize操作，可能会导致循环链表产生，进而使得后面get的时候，会死循环。下面详细阐述循环链表如何形成的。
ransfer逻辑是遍历旧数组，将旧数组元素通过头插法的方式，迁移到新数组的对应位置问题出就出在头插法。

举个例子：


## HashMap是如何解决哈希冲突的？