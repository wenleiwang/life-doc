# 基于Netty搭建WebSocket服务

## WebSocket与Netty的关系
WebSocket和Netty之间存在一定的关系，但它们并非直接相关的概念。

WebSocket是一种通信协议，它建立在HTTP协议之上，为客户端和服务器之间提供了一种持久连接的通信方式。在WebSocket协议下，一旦连接建立，客户端和服务器之间就可以直接进行双向通信，而不需要每次发送请求都建立新的连接。这种机制可以大大提高通信效率。

Netty是一个Java网络编程框架，它提供了丰富的API和功能，方便开发者快速构建网络应用，如TCP/UDP服务器、HTTP应用等。Netty内部实现了很多网络协议的细节，包括对HTTP协议的支持，因此我们可以利用Netty实现WebSocket通信。

在WebSocket应用中，我们可以使用Netty作为底层的网络通信框架，实现WebSocket协议的通信。Netty提供了WebSocket的实现，可以方便地集成到应用中。通过使用Netty，我们可以更专注于业务逻辑的实现，而不必深入到底层的网络协议细节中。

总结来说，WebSocket是一种通信协议，而Netty是一个Java网络编程框架，我们可以利用Netty实现WebSocket通信，但WebSocket本身与Netty并不是直接相关的概念。

## Netty提供的WebSocket怎么使用
Netty 提供了对 WebSocket 的支持，你可以通过以下步骤使用 Netty 提供的 WebSocket：

1. 添加 Netty 依赖：

如果你使用 Maven，可以将以下代码添加到你的 `pom.xml` 文件中：

```xml
<dependency>  
	<groupId>io.netty</groupId>  
	<artifactId>netty-all</artifactId>  
	<version>4.1.68.Final</version>  
</dependency>
```

如果你使用 Gradle，可以将以下代码添加到你的 `build.gradle` 文件中：

```groovy
implementation 'io.netty:netty-all:4.1.68.Final'
```

2. 创建 WebSocket 服务器：

创建一个新的 Java 类，并添加以下代码：

```java
import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelPipeline;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import io.netty.handler.codec.http.HttpObjectAggregator;
import io.netty.handler.codec.http.HttpServerCodec;
import io.netty.handler.codec.http.websocketx.WebSocketServerProtocolHandler;
import io.netty.handler.stream.ChunkedWriteHandler;

public class WebSocketServer {
    public static void main(String[] args) throws Exception {
        EventLoopGroup bossGroup = new NioEventLoopGroup();
        EventLoopGroup workerGroup = new NioEventLoopGroup();
        try {
            ServerBootstrap bootstrap = new ServerBootstrap();
            bootstrap.group(bossGroup, workerGroup).channel(NioServerSocketChannel.class).childHandler(new ChannelInitializer<SocketChannel>() {
                @Override
                public void initChannel(SocketChannel ch) throws Exception {
                    ChannelPipeline pipeline = ch.pipeline();
                    pipeline.addLast(new HttpServerCodec());
                    pipeline.addLast(new ChunkedWriteHandler());
                    pipeline.addLast(new HttpObjectAggregator(8192));
                    pipeline.addLast(new WebSocketServerProtocolHandler("/ws"));
                    // 添加自定义的 WebSocket 处理器，继承 WebSocketFrameHandler 类并重写其方法即可
                    pipeline.addLast(new WebSocketFrameHandler()); 
                }
            });
            ChannelFuture future = bootstrap.bind(8080).sync(); // 绑定端口号为 8080 并开始监听连接请求
            future.channel().closeFuture().sync();
            // 等待服务器通道关闭，即等待客户端关闭连接或发生异常导致关闭连接时退出程序。
            // 如果不想要一直等待关闭连接，可以调用 future.channel().closeFuture().sync() 来等待关闭连接事件发生。
            // 如果想要设置超时时间，可以在调用该方法时传入超时时间即可。例如：future.channel().closeFuture().sync(10000)
            // 表示等待 10 秒后超时退出程序。注意：在 Netty 中，默认情况下，服务器不会自动关闭连接，
            // 需要手动调用 ChannelHandlerContext 的 close() 方法来关闭连接。
            // 因此，在实现 WebSocket 处理器时，需要手动关闭连接。
        } finally {
	        // 优雅地关闭 bossGroup 和 workerGroup 中的所有线程和资源。
            bossGroup.shutdownGracefully(); 
            // 优雅地关闭 bossGroup 和 workerGroup 中的所有线程和资源。
            workerGroup.shutdownGracefully(); 
        }
    }
}
```

## 服务端怎么接收消息

在 WebSocket 中，服务器端使用 Netty 框架可以这样接收消息：

首先，您需要在 ChannelHandler 中实现 WebSocketFrameListener 接口，这个接口定义了处理 WebSocket 消息的方法。例如：
```java
public class MyWebSocketFrameHandler extends SimpleChannelInboundHandler<WebSocketFrame> implements WebSocketFrameListener {  
  
    @Override  
    protected void channelRead0(ChannelHandlerContext ctx, WebSocketFrame msg) throws Exception {  
        // 处理接收到的 WebSocket 消息  
        if (msg instanceof TextWebSocketFrame) {  
            TextWebSocketFrame textFrame = (TextWebSocketFrame) msg;  
            String text = textFrame.text();  
            System.out.println("Received text message: " + text);  
            // 处理接收到的文本消息  
        } else if (msg instanceof BinaryWebSocketFrame) {  
            BinaryWebSocketFrame binaryFrame = (BinaryWebSocketFrame) msg;  
            byte[] bytes = binaryFrame.content().array();  
            // 处理接收到的二进制消息  
        } else if (msg instanceof PingWebSocketFrame) {  
            // 处理收到的 Ping 消息  
        } else if (msg instanceof PongWebSocketFrame) {  
            // 处理收到的 Pong 消息  
        } else if (msg instanceof CloseWebSocketFrame) {  
            // 处理收到的 Close 消息，并关闭连接  
        }  
    }  
  
    @Override  
    public void onTextMessage(TextWebSocketFrame msg) {  
        // 处理接收到的文本消息  
        channelRead0(ctx, msg);  
    }  
  
    @Override  
    public void onBinaryMessage(BinaryWebSocketFrame msg) {  
        // 处理接收到的二进制消息  
        channelRead0(ctx, msg);  
    }  
  
    @Override  
    public void onPingMessage(PingWebSocketFrame msg) {  
        // 处理收到的 Ping 消息  
    }  
  
    @Override  
    public void onPongMessage(PongWebSocketFrame msg) {  
        // 处理收到的 Pong 消息  
    }  
  
    @Override  
    public void onCloseMessage(CloseWebSocketFrame msg) {  
        // 处理收到的 Close 消息，并关闭连接  
    }  
}
```

---
完~

#Netty #IO 