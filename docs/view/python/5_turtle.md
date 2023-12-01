# turtle库的使用

这是一个图形绘制库


## 画笔控制

成对出现
![](img/img_20231118_6.png)

![](img/img_20231118_7.png)

![](img/img_20231118_8.png)

![](img/img_20231118_9.png)

### RGB色彩体系
![](img/img_20231118_4.png)

![](img/img_20231118_5.png)

## 画笔运动控制函数
### 绝对坐标
![](img/img_20231118.png)

### 相对坐标

前行：forward简称fd
后退：简称bk
弧形：circle，第一个参数半径，第二个参数绘制多少角度（没有第二个参数绘制圆形）
![](img/img_20231118_1.png)
> 理解circle
> 第一个参数不是圆的中心，是两条红线的交叉处。以海龟头朝向为x轴正方向，垂直海龟左侧为半径的正数大小，海龟右侧为半径的负数大小
> ![](img/img_20231118_12.png)
> 第二个参数，行进方向和，行进角度。正数头朝向行进，负数倒着行进。
### 运行方向
setheading简称seth
![](img/img_20231118_2.png)

> 这个角度是绝对角度，即直角坐标的方向，不论海龟在什么角度，再次设值都是依据直角坐标
![](img/img_20231118_10.png)

向左或向右
![](img/img_20231118_3.png)

### 绘制一个汉字

.write('年', font=("Arial", 18, "normal")) # 字体
.pencolor("blue") # 颜色
.fd(40) # 大小
## 绘制七段数码管

![](img/img_20231119_4.png)
