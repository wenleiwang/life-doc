# 为什么重写equals时必须重写hashCode方法？

做开发有很久了，但一致没有接触到需要手动重写 equals 的场景，平时直接用 lombok 的 @Data 代替了。

今天用到了，只要用一个对象中几个字段判断对象相等，需要单独重写 equals


## 原因

因为Hash比equals方法的开销要小，速度更快，所以在涉及到hashcode的容器中（比如HashSet），判断自己是否持有该对象时，会先检查hashCode是否相等，如果hashCode不相等，就会直接认为不相等，并存入容器中，不会再调用equals进行比较。

这样就会导致，即使该对象已经存在HashSet中，但是因为hashCode不同，还会再次被存入。

因此要重写hashCode保证：如果equals判断是相等的，那hashCode值也要相等

> hashCode相同对象不一定相同，hashCode不同对象一定不同。
> 如果重写了 equals 改变了比较对象的比较模式，按照原来的hashCode可能会出现，现在比较模式相同的两个对象但他们hashCode不同。

## 代码测试
编写一个只重写equals的实体类，不重写hashCode进行测试
我们希望只要id是一样的，就认定为是一个对象，集合中同一个对象只存一个

```java

import java.util.HashSet;
import java.util.Objects;

public class Product {
    private Integer id;
    private String name;

    public Product(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    // 重写equals
    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Product product = (Product) o;
        return Objects.equals(id, product.id);
    }

    
    public static void main(String[] args) {
        Product product1 = new Product(1, "包子");
        Product product2 = new Product(1, "馒头");

        HashSet<Product> products = new HashSet<Product>();
        products.add(product1);
        products.add(product2);
        // 使用equals判断是否相等
        System.out.println(product1.equals(product2));
        // 查看HashSet中元素个数
        System.out.println(products.size());

    }
}
```

```java
【测试结果】
true // 可以看到判断是相等的
2 // 但是还是存到了HashSet中
```

重写hashCode,再次测试
```java
@Override
public int hashCode() {
    return Objects.hash(id);
}
```

```java
【测试结果】
true // 可以看到判断是相等的
1 // 并且第二个值并没有存到HashSet中
```


#哈希 