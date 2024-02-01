# postman前置处理器之添加headers

```js
// 更新到请求头部

pm.request.headers.add({

    key:"sign",

    value:sign

});
```