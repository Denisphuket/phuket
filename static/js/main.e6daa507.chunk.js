(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);a(63),a(88);var n=a(0),l=a.n(n),c=a(31),r=a.n(c),i=a(10),o=a.n(i),s=a(55),d=a(56),u=a(60),m=a(57),p=a(61),h=a(1),f=(a(111),function(e){var t=e.id,a=e.go,n=e.fetchedUser;return l.a.createElement(h.Panel,{id:t},l.a.createElement(h.PanelHeader,null,"Example"),n&&l.a.createElement(h.Group,{title:"User Data Fetched with VK Connect"},l.a.createElement(h.ListItem,{before:n.photo_200?l.a.createElement(h.Avatar,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),l.a.createElement(h.Group,{title:"Navigation Example"},l.a.createElement(h.Div,null,l.a.createElement(h.Button,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"Show me the Persik, please"))))}),b=a(58),E=a.n(b),g=(a(112),a(59)),k=a.n(g),v=a(32),P=a.n(v),w=Object(h.platform)(),y=function(e){return l.a.createElement(h.Panel,{id:e.id},l.a.createElement(h.PanelHeader,{left:l.a.createElement(h.HeaderButton,{onClick:e.go,"data-to":"home"},w===h.IOS?l.a.createElement(k.a,null):l.a.createElement(P.a,null))},"Persik"),l.a.createElement("img",{className:"Persik",src:E.a,alt:"Persik The Cat"}))},U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"home",fetchedUser:null},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;o.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data}),console.log(t.detail.data),o.a.send("VKWebAppGetPhoneNumber",{}),o.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetPhoneNumberResult":e.setState({fetchedUser:t.detail.data}),console.log(t.detail.data);break;default:console.log(t.detail.type)}});break;default:console.log(t.detail.type)}}),o.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return l.a.createElement(h.View,{activePanel:this.state.activePanel},l.a.createElement(f,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go}),l.a.createElement(y,{id:"persik",go:this.go}))}}]),t}(l.a.Component);o.a.send("VKWebAppInit",{}),r.a.render(l.a.createElement(U,null),document.getElementById("root"))},58:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},62:function(e,t,a){e.exports=a(113)}},[[62,1,2]]]);
//# sourceMappingURL=main.e6daa507.chunk.js.map