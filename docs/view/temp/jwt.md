# JWT
[[toc]]

## 0.概念
JWT 全称 JSON Web Tokens ，是一种规范化的 token。是对 token 这一技术提出一套规范。

## 1.结构
头部（header）
载荷（Payload）
签名（Signature）

### 1.1头部
头部包含了两部分，采用的签名算法和token 类型
```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

### 1.2载荷
这部分就是我们存放信息的地方了，你可以把用户 ID 等信息放在这里(当然用户ID推荐加密后存放)，JWT 规范里面对这部分有进行了比较详细的介绍，常用的由 iss（签发者），iat（签发时间），exp（过期时间），sub（面向的用户），aud（接收方）。
```json
{
    "iss": "lion1ou JWT",
    "iat": 1441593502,
    "exp": 1441594722,
    "aud": "www.example.com",
    "sub": "example@163.com"
}
```

### 1.3签名
Header 和 Payload 编码后的字符串拼接后再用HS256签名算法（Header中alg指明的算法）加密，在加密的过程中还需加上secret（密钥），最后得到签名

> Tips：Base64是一种编码，并不是一种加密过程，不具备安全性，所以敏感信息别放入其中

## 2.JWT生成TOKEN
1. header json 的 base64 编码为令牌第一部分
2. payload json 的 base64 编码为令牌第二部分
3. 拼装第一、第二部分编码后的 json 以及 secret 进行签名的令牌的第三部分

```js
// 头部
header = '{"alg":"HS256","typ":"JWT"}'

// 载荷
payload = '{"loggedInAs":"admin","iat":1422779638}'

// 对 header 和 payload 分别进行 base64 编码后拼接起来进行 hash 运算得到签名
signature = HMAC-SHA256(encodeBase64Url(header) + "." + encodeBase64Url(payload)，secret)

// 最后将三部分进行 base64 编码后再拼接即可得到 token。
json_web_token = encodeBase64Url(header) + '.' + encodeBase64Url(payload) + '.' + encodeBase64Url(signature)
```
## 3.JWT 使用
### 3.1请求
* url 参数：?token=你的token
* header 中：Authorization:Bearer \<token\>（推荐）

> 注意Bearer和token之间有一个空格

### 3.2接收
前端接收到后端返回的 token 后进行存储，一般存储在：

* LocalStorage
* SessionStorage
* Cookie

## 4.JWT 的优势和问题
优势
* 防 CSRF
* 适合移动应用
* 无状态的 RESTful API
* 一次性验证（如邮件激活）

问题
* 续签问题
* 注销问题

## 5.JWT 安全
* 使用 HTTPS
* 缩短 token 有效时间
* 定期更新密钥
* 使用HttpOnly属性来防止Cookie被JavaScript读取，防止 XSS 攻击窃取 cookie
* 不要在token中编码敏感信息，如果一定会有那必须先加密再进行编码
* 根据需要可将用户 IP 放入 Payload 进行校验

