(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);a(63),a(88);var n=a(0),r=a.n(n),l=a(31),c=a.n(l),o=a(8),i=a.n(o),s=a(55),d=a(56),p=a(60),u=a(57),m=a(61),h=a(1),f=(a(111),function(e){var t=e.id,a=e.go,n=e.fetchedUser;return r.a.createElement(h.Panel,{id:t},r.a.createElement(h.PanelHeader,null,"Example"),n&&r.a.createElement(h.Group,{title:"User Data Fetched with VK Connect"},r.a.createElement(h.ListItem,{before:n.photo_200?r.a.createElement(h.Avatar,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),r.a.createElement(h.Group,{title:"Navigation Example"},r.a.createElement(h.Div,null,r.a.createElement(h.Button,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"Show me the Persik, please"))))}),E=a(58),b=a.n(E),g=(a(112),a(59)),k=a.n(g),v=a(32),P=a.n(v),w=Object(h.platform)(),y=function(e){return r.a.createElement(h.Panel,{id:e.id},r.a.createElement(h.PanelHeader,{left:r.a.createElement(h.HeaderButton,{onClick:e.go,"data-to":"home"},w===h.IOS?r.a.createElement(k.a,null):r.a.createElement(P.a,null))},"Persik"),r.a.createElement("img",{className:"Persik",src:b.a,alt:"Persik The Cat"}))},A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(p.a)(this,Object(u.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"home",fetchedUser:null},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;i.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data}),console.log(t.detail.data),i.a.send("VKWebAppGetPersonalCard",{type:["phone","email"]}),i.a.send("VKWebAppGetGeodata",{}),i.a.send("VKWebAppAllowMessagesFromGroup",{group_id:1,key:"dBuBKe1kFcdemzB"}),i.a.send("VKWebAppJoinGroup",{group_id:52628657});break;default:console.log(t.detail.type)}}),i.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return r.a.createElement(h.View,{activePanel:this.state.activePanel},r.a.createElement(f,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go}),r.a.createElement(y,{id:"persik",go:this.go}))}}]),t}(r.a.Component);i.a.send("VKWebAppInit",{}),c.a.render(r.a.createElement(A,null),document.getElementById("root"))},58:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},62:function(e,t,a){e.exports=a(113)}},[[62,1,2]]]);
//# sourceMappingURL=main.d458d28c.chunk.js.map