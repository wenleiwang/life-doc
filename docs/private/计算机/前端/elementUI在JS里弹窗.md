# elementUI在JS里弹窗

## JS弹框

```js
import { MessageBox } from 'element-ui'


MessageBox.confirm('请选择登录的平台', {  
  showCancelButton: true,  
  confirmButtonText: '监管货主',  
  cancelButtonText: '后台管理',  
}).then(() => {  
  window.location.href = import.meta.env.VITE_CangUrl+'/login'  
}).catch(() => {  
  window.location.href = import.meta.env.VITE_PtdCloudUrl+'/login'  
});
```

## 弹消息
```js
import { Message,MessageBox } from 'element-ui'

Message({  
  message: message,  
  type: 'info'  
});
```
