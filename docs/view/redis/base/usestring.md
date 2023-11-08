# Redis基础数据类型——string(字符串)
[[toc]]

## 单个键值对

### 插入
输入set查看提示

![输入set查看提](img/unit2/ebe01495939f8bf13ece1df287a24eb7.png)

输入命令：`set name wenlei`

![set name wenlei](img/unit2/7b9d92d15d209c7a8b6595e18aded02c.png)
```java
@SpringBootTest
class SetString {
    @Autowired
    RedisUtil redisUtil;
    @Test
    void setString(){
        redisUtil.set("aaa","aaa");
    }
}
```

### 获取
输入命令：`get name`

![get name](img/unit2/44f99b0e89926bcd94b3e4a5e2b98f65.png)
```java
@SpringBootTest
class SetString {
    @Autowired
    RedisUtil redisUtil;
    @Test
    void setString(){
        System.out.println(redisUtil.get("aaa"));
    }
}
```

### 删除
![](img/unit2/11d650b588faea72f45b5b82fb49dbe0.png)
```java
@SpringBootTest
class SetString {
    @Autowired
    RedisUtil redisUtil;
    @Test
    void setString(){
        redisUtil.del("aaa");
    }
}
```
### 过期
![过期](img/unit2/710fcafd336357890ddb8b182a63a3d7.png)
```java
public boolean set(String key, Object value, long time) {
    try {
        if (time > 0) {
            redisTemplate.opsForValue().set(key, value, time, TimeUnit.SECONDS);
        } else {
            set(key, value);
        }
        return true;
    } catch (Exception e) {
        e.printStackTrace();
        return false;
    }
}
```

## 批量键值对
### 批量插入
![](img/unit2/c7240a697369f931bbdf991dc4d16946.png)
```java
@SpringBootTest
class SetString {
    @Autowired
    RedisUtil redisUtil;
    @Test
    void setString(){
        Map<String,String> map = new HashMap<>();
        map.put("jK1","jV1");
        map.put("jK2","jV2");
        map.put("jK3","jV3");
        redisUtil.mSet(map);
    }
}

@Component
public class RedisUtil {

    @Autowired
    private RedisTemplate<String, Object> redisTemplate;

    public void mSet(Map<String,String> map) {
        redisTemplate.executePipelined(new RedisCallback<String>() {
            @Override
            public String doInRedis(RedisConnection connection) throws DataAccessException {
                if (map != null) {
                    map.forEach((key,value) -> {
                        connection.set(key.getBytes(),value.getBytes());
                    });
                }
                return null;
            }
        });
    }

    public RedisUtil(RedisTemplate<String, Object> redisTemplate) {
        this.redisTemplate = redisTemplate;
    }
}
```
#### 插入效果展示
db4是java插入，db1是CLI插入
![](img/unit2/471709094bb69d330632c8545634043c.png)

### 批量查询
![CLI批量查询](img/unit2/250f52e85214aa942347dd51400acc71.png)
```java
@SpringBootTest
class SetString {
    @Autowired
    RedisUtil redisUtil;
    @Test
    void setString(){
        List<String> keys = new ArrayList<>();
        keys.add("jK1");
        keys.add("jK2");
        keys.add("jK3");
        List<Object> objects = redisUtil.mGet(keys);
        for (int i = 0 ; i < objects.size() ; i++) {
            System.out.println((String)objects.get(i));
        }
    }
}

public List<Object> mGet(List<String> keys) {
    List<Object> list = redisTemplate.executePipelined(new RedisCallback<String>() {
        @Override
        public String doInRedis(RedisConnection connection) throws DataAccessException {
            for (String key : keys) {
                connection.get(key.getBytes());
            }
                return null;
        }
    });
    return list;
}
```
![Java批量查询](img/unit2/c784bf5e005ed1b8d78761068bd7a487.png)
::: danger 注意
Java的RedisConfig中的序列化配置会影响插入和查询

遇到
`
org.springframework.data.redis.serializer.SerializationException: Could not read JSON
`
问题

修改配置类：`redisTemplate.setValueSerializer(new StringRedisSerializer());`
:::

### 批量删除
```java
@SpringBootTest
class SetString {
    @Autowired
    RedisUtil redisUtil;
    @Test
    void setString(){
        redisUtil.del("jK1","jK2","jK3");
    }
}
```

### 字符串描述
Redis的字符串是动态字符串，是可以修改的字符串，内部结构的实现类似于Java的ArrayList，采用预分配冗余空间的方式来减少内存的频繁分配。
当字符串长度小于1M时，扩容都是加倍现有的空间。
如果字符串长度超过1M时，扩容一次只会扩1MB的空间。
注意：字符串的最大长度为512M

#### embstr VS raw
Redis 的字符串有两种存储方式，在长度特别短时，使用embstr形式存储。而长度超过44字节时，使用raw形式存储。

```c
// Redis对象头结构
struct RedisObject {
    int4 type;              // 4bit
    int4 encoding;          // 4bit
    int24 lru;              //3字节
    int32 refcount;         //4字节
    void *ptr;              //8字节
}
// Redis字符串 就是Simple Dynamic String
struct SDS{
    int8 capacity;          // 1字节
    int8 len;               // 1字节
    int8 flags;             // 1字节
    byte[] content;         // 内联数组长度为capacity
}
```

所以留给content的长度最多只有45字节（64-19），字符串又是NULL结尾所以就44字节是界限。

---
完~
