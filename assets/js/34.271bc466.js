(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{613:function(a,t,e){"use strict";e.r(t);var s=e(7),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h3",{attrs:{id:"tls握手知识前提"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tls握手知识前提"}},[a._v("#")]),a._v(" TLS握手知识前提")]),a._v(" "),e("ol",[e("li",[e("font",{attrs:{color:"#e93011"}},[a._v("所需要的时长是多少")])],1)]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("通常经过四个消息就可以完成TLS握手，也就是需要2个RTT的时延，然后就可以在安全的通信环境里发送HTTP报文实现HTTPS协议\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[e("font",{attrs:{color:"#e93011"}},[a._v("TLS握手的前提条件是什么")])],1)]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("HTTPS是应用层协议，需要先完成TCP连接建立，然后走TLS握手过程后，才能建立通信安全的连接\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[e("font",{attrs:{color:"#e93011"}},[a._v("密钥交换算法的作用")])],1)]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("对称加密：\n\n  特点：密钥既可以用来加密，又可以解密 \n\n  考虑到性能的问题，所以双方在加密应用信息时使用的是对称加密密钥【加解密效率比较高】\n\n非对称加密：\n\n  特点： 公钥加密，必须要私钥解密 \n  \n  对称加密的密钥是不能被泄漏的，为了保证对称加密密钥的安全性，所以使用非对称加密的方式来保护对称加密密钥的协商，这个工作就是密钥交换算法负责的\n")])])]),e("h3",{attrs:{id:"tls-第一次握手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tls-第一次握手"}},[a._v("#")]),a._v(" TLS 第一次握手")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("客户端首先会发一个【Client Hello】消息，向服务器打声招呼，消息里面有客户端使用的TLS版本号，支持的密码套件列表，以及生成的随机数【Client Random】，这个随机数会被服务端保留，它是生成对称加密密钥的材料之一 <br/>\n\nTLS版本号 + 支持的密码套件列表 + Client Random\n")])])]),e("h3",{attrs:{id:"tls-第二次握手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tls-第二次握手"}},[a._v("#")]),a._v(" TLS 第二次握手")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("当服务端收到客户端的【Client Hello】消息后，会确认TLS版本号是否支持，和从密码套件列表中选择一个密码套件，以及生成随机数【Server random】<br/>\n接着，返回【Server Hello】消息，消息里面有服务器确认的TLS版本号，也给出了随机数【Server Random】， 然后从客户端的密码套件中选择一个合适的密码套件<br/>\n\n这样客户端与服务端便有了对方的随机数，以及自己生成的随机数，已经有两个随机数了<br/>\n\n随后，服务端为了证明自己的身份，会发送【Server Certificate】给客户端，这个消息里含有数字证书，\n\n最后 发送【Server Hello Done】 告诉客户端，已经把该给的东西都给你了，本次打招呼完毕。\n")])])]),e("h3",{attrs:{id:"数字证书与验证证书"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数字证书与验证证书"}},[a._v("#")]),a._v(" 数字证书与验证证书")]),a._v(" "),e("ol",[e("li",[a._v("数字证书包含：")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("- 公钥\n- 持有者信息\n- 证书认证机构（CA）的信息\n- CA对这份文件的数字签名及使用的算法\n- 证书有效期\n- 还有一些其他额外的信息\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[e("p",[a._v("数字证书的作用")]),a._v(" "),e("p",[a._v("用来认证公钥持有者的身份，以防止第三方进行冒充，简单讲，证书就是用来告诉客户端，该服务端是否是合法的，因为只有证书合法，才代表服务端身份是可信的 "),e("br")]),a._v(" "),e("p",[a._v("为了让服务端的公钥被大家信任，服务端的证书都是有CA（Certificate Authority，证书认证机构）签名的，CA就是网络世界的公安局，公证中心，具有极高的可信度，所以由它来给各个公钥签名，信任的一方签发的证书，那必然证书也是被信任的 "),e("br")]),a._v(" "),e("p",[a._v("之所以要签名，是因为签名的作用可以避免中间人在获取证书时对证书内容的篡改")])]),a._v(" "),e("li",[e("p",[a._v("证书签名过程")])])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("- 首先CA会把持有者的公钥，用途，颁发者，有效时间等信息打成一个包，然后对这些信息进行Hash计算，得到一个Hash值\n- 然后CA会使用自己的私钥将该Hash值加密，生成 Certificate Signature，也就是CA对证书做了签名\n- 最后将 Certificate Signature 添加在文件证书上，形成数字证书\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[a._v("客户端校验服务端的数字证书的过程")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("- 首先客户端会使用同样的Hash算法获取该证书的 Hash值 H1\n- 通常浏览器和操作系统中集成了CA的公钥信息，浏览器收到证书后可以使用CA的公钥解密 Certificate Signature 内容，得到一个 Hash值 H2\n- 最后比较 H1 和 H2，如果值相同，则为可信赖的证书，否则则认为证书不可信\n")])])]),e("ol",{attrs:{start:"5"}},[e("li",[a._v("证书连")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("证书的验证过程中还存在一个证书信任链的问题，因为我们向CA申请的证书一般不是根证书签发的，而是由中间证书签发的，中间证书由根证书信任签发，导致中间证书也是可信任的 <br/>\n\n为了确保根证书的绝对安全性，将根证书隔离的越严格越好，不然根证书如果失守了，那么整个信任链都会有问题\n")])])]),e("h3",{attrs:{id:"tls-第三次握手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tls-第三次握手"}},[a._v("#")]),a._v(" TLS 第三次握手")]),a._v(" "),e("p",[a._v("客户端验证完证书后，认为可信则继续往下走，接着，客户端就会生成一个新的随机数【pre-master】，用服务器的RSA公钥加密该随机数，通过 【Change Cipher Key Exchange】 消息传给服务端 "),e("br")]),a._v(" "),e("p",[a._v("服务端收到后 ，用RSA私钥解密，得到客户端发来的随机数【pre-master】"),e("br")]),a._v(" "),e("p",[a._v("至此，客户端和服务端双方都共享了三个随机数，分别是 Client Random、Server Random、pre-master。"),e("br"),a._v("\n于是，双方根据已经得到的三个随机数，生成会话密钥【Master Secret】，它是对称密钥，用于后续的HTTP请求/响应的数据加解密。"),e("br"),a._v("\n生成完会话密钥后，然后客户端发一个【Change Cipher Spec】，告诉服务端开始使用加密方式发送消息，然后客户端再发一个【Encrypted Handshake Message（Finishd】消息，把之前的所有发送的数据做个摘要，再用会话密钥【Master secret】加密一下，让服务器做个验证，验证加密通信是否可用和之前的握手信息是否有被篡改过。")]),a._v(" "),e("h3",{attrs:{id:"tls-第四次握手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tls-第四次握手"}},[a._v("#")]),a._v(" TLS 第四次握手")]),a._v(" "),e("p",[a._v("服务器也是同样的操作，发 【Change Cipher Spec】和【Encrypted Handshake Message】消息，如果双发都验证加密和解密没问题，那么握手正式完成 "),e("br")]),a._v(" "),e("p",[a._v("最后，就用【会话密钥】 加解密 HTTP 请求和响应了。")])])}),[],!1,null,null,null);t.default=r.exports}}]);