(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);a(61),a(86);var n=a(0),s=a.n(n),r=a(32),c=a.n(r),i=a(6),o=a.n(i),l=a(55),d=a(56),m=a(58),u=a(57),p=a(59),b=a(1),h=(a(110),a(22)),f=(a(111),function(e){var t=e.id,a=e.message,n=e.fetchedUser,r=e.groupinvite;return s.a.createElement(b.Panel,{id:t},s.a.createElement(b.PanelHeader,null,"\u041f\u0445\u0443\u043a\u0435\u0442"),n&&s.a.createElement(b.Group,{title:"\u0414\u043e\u0431\u0440\u043e \u041f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u043d\u0430 \u041f\u0445\u0443\u043a\u0435\u0442!"},s.a.createElement(b.ListItem,{before:n.photo_200?s.a.createElement(b.Avatar,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),s.a.createElement(b.Group,{title:"\u041f\u043e\u0434\u043f\u0438\u0448\u0438\u0441\u044c \u043d\u0430 \u0420\u0443\u0441\u0441\u043a\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e"},s.a.createElement(b.Div,null,s.a.createElement(b.Button,{size:"xl",level:"2",onClick:r,"data-to":"groupinvite"},"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"))),s.a.createElement(b.Group,{title:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u041f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u043e\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430"},s.a.createElement(b.Div,null,s.a.createElement(b.Button,{size:"xl",level:"2",onClick:a,"data-to":"groupinvite"},"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435!"))),s.a.createElement(b.Group,{title:"\u0421\u0430\u0439\u0442 \u0441 \u042d\u043a\u0441\u043a\u0441\u0443\u0440\u0441\u0438\u044f\u043c\u0438"},s.a.createElement(b.Div,null,s.a.createElement(b.Link,{className:"link-website",href:"https://exmax.store",target:"_blank"},"\u041d\u0430\u0448 \u0441\u0430\u0439\u0442"))),s.a.createElement(b.Group,{title:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043d\u0430\u043c \u0432 \u043c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440"},s.a.createElement(b.Div,null,s.a.createElement(b.Link,{className:"button-wharsapp",href:"https://wa.me/66805380333",target:"_blank"},"WhatsApp"),s.a.createElement(b.Link,{className:"button-viber",href:"viber://pa?chatURI=surgut./",target:"_blank"},"Viber"),s.a.createElement(b.Link,{className:"button-telegtam",href:"https://t.me/exkursii_bot",target:"_blank"},"Telegram"))))}),v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).message=function(e){o.a.send("VKWebAppAllowMessagesFromGroup",{group_id:52628657,key:"dBuBKe1kFcdemzB"}),o.a.subscribe(function(e){switch(e.detail.type){case"VKWebAppAllowMessagesFromGroupResult":o.a.send("VKWebAppCallAPIMethod",{method:"messages.send",params:{user_id:a.state.fetchedUser.id,random_id:7868979707988080,message:"\u041f\u0440\u0438\u0432\u0435\u0442! \u0425\u043e\u0442\u0438\u0442\u0435 \u042d\u043a\u0441\u043a\u0443\u0440\u0441\u0438\u044e?",v:"5.101",access_token:h.token}})}})},a.groupinvite=function(e){o.a.send("VKWebAppJoinGroup",{group_id:52628657})},a.state={activePanel:"home",fetchedUser:null},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;o.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data}),o.a.send("VKWebAppGetPhoneNumber",{}),o.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetPhoneNumberResult":e.setState({activePanel:"home"}),o.a.send("VKWebAppCallAPIMethod",{method:"messages.send",params:{user_id:161935002,random_id:Math.random(),message:"\u041d\u043e\u0432\u044b\u0439 \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u041f\u0445\u0443\u043a\u0435\u0442\n\n\n\u0418\u043c\u044f: ".concat(e.state.fetchedUser.first_name,", \n\u0424\u0430\u043c\u0438\u043b\u0438\u044f: ").concat(e.state.fetchedUser.last_name,", \n\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430: +").concat(t.detail.data.phone_number,", \n\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0432 \u0412\u041a: vk.me/id").concat(e.state.fetchedUser.id,", \n\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0432 WhatsApp: https://wa.me/").concat(t.detail.data.phone_number,", \n\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0432 Viber: \nviber://chat?number=+").concat(t.detail.data.phone_number),v:"5.101",access_token:h.service_token}});break;case"VKWebAppGetPhoneNumberFailed":e.setState({activePanel:"home"}),o.a.send("VKWebAppCallAPIMethod",{method:"messages.send",params:{user_id:161935002,random_id:Math.random(),message:"\u041d\u043e\u0432\u044b\u0439 \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u041f\u0445\u0443\u043a\u0435\u0442\n\n\n\u0418\u043c\u044f: ".concat(e.state.fetchedUser.first_name,", \n\u0424\u0430\u043c\u0438\u043b\u0438\u044f: ").concat(e.state.fetchedUser.last_name,", \n\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430: \u041e\u0422\u041a\u041b\u041e\u041d\u0418\u041b \u0420\u0410\u0417\u0420\u0415\u0428\u0415\u041d\u0418\u0415, \n\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0432 \u0412\u041a: vk.me/id").concat(e.state.fetchedUser.id,"\n\n\n"),v:"5.101",access_token:h.service_token}})}})}}),o.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return s.a.createElement(b.View,{activePanel:this.state.activePanel},s.a.createElement(f,{id:"home",fetchedUser:this.state.fetchedUser,groupinvite:this.groupinvite,message:this.message}))}}]),t}(s.a.Component);o.a.send("VKWebAppInit",{}),c.a.render(s.a.createElement(v,null),document.getElementById("root"))},22:function(e){e.exports={token:"f9018a6d2ef851a91dbfbd180d8b2dd4c8dd73dea38e310fdbd0952b66632f3e731067d825410a141261f",service_token:"423c87e4365fea5d8f0006d424a20cf8a42da145bb4b7d610ec06471ad77fa83281488207b79698f55617"}},60:function(e,t,a){e.exports=a(112)}},[[60,1,2]]]);
//# sourceMappingURL=main.a99026c9.chunk.js.map