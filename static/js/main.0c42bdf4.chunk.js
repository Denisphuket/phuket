(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(e,t,a){},125:function(e,t,a){"use strict";a.r(t);a(70),a(95);var n=a(0),l=a.n(n),o=a(25),s=a.n(o),i=a(2),c=a.n(i),r=a(19),p=a(20),u=a(22),d=a(21),m=a(23),b=a(1),g=(a(117),a(118),function(e){var t=e.id,a=e.go,n=e.fetchedUser;return l.a.createElement(b.Panel,{id:t},l.a.createElement(b.PanelHeader,null,"Example"),n&&l.a.createElement(b.Group,{title:"User Data Fetched with VK Connect"},l.a.createElement(b.ListItem,{before:n.photo_200?l.a.createElement(b.Avatar,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),l.a.createElement(b.Group,{title:"Navigation Example"},l.a.createElement(b.Div,null,l.a.createElement(b.Button,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"Show me the Persik, please"))))}),h=a(67),f=a.n(h),v=(a(123),a(68)),k=a.n(v),P=a(39),y=a.n(P),E=Object(b.platform)(),G=function(e){return l.a.createElement(b.Panel,{id:e.id},l.a.createElement(b.PanelHeader,{left:l.a.createElement(b.HeaderButton,{onClick:e.go,"data-to":"home"},E===b.IOS?l.a.createElement(k.a,null):l.a.createElement(y.a,null))},"Persik"),l.a.createElement("img",{className:"Persik",src:f.a,alt:"Persik The Cat"}))},A=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;c.a.send("VKWebAppGetGeodata",{}),c.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetGeodataResult":console.log(t.detail),e.props.setState({activePanel:"message"});break;default:console.log(t.detail.type),console.log(t.detail),console.log("this.props.activePanel",e.props.activePanel),e.props.setState({activePanel:"message"})}})}},{key:"render",value:function(){return l.a.createElement(b.Panel,{id:this.props.id},l.a.createElement(b.PanelHeader,null,"\u0413\u0435\u043e\u043f\u043e\u0437\u0438\u0446\u0438\u044f"),l.a.createElement(b.Group,{title:"\u0414\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043d\u0443\u0436\u043d\u0430 \u0413\u0435\u043e\u043f\u043e\u0437\u0438\u0446\u0438\u044f"},l.a.createElement(b.Div,null,l.a.createElement(b.Button,{size:"xl",level:"2",onClick:this.props.geo,"data-to":"geo-button"},"\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0413\u0435\u043e"))))}}]),t}(l.a.Component),w=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;c.a.send("VKWebAppAllowMessagesFromGroup",{group_id:52628657,key:"dBuBKe1kFcdemzB"}),c.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppAllowMessagesFromGroupResult":console.log(t.detail.data),console.log("this.props.activePanel",e.props.activePanel),e.props.setState({activePanel:"home"});break;default:console.log(t.detail.type)}})}},{key:"render",value:function(){return l.a.createElement(b.Panel,{id:this.props.id},l.a.createElement(b.PanelHeader,null,"\u0413\u0435\u043e\u043f\u043e\u0437\u0438\u0446\u0438\u044f"),l.a.createElement(b.Group,{title:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"},l.a.createElement(b.Div,null,l.a.createElement(b.Button,{size:"xl",level:"2",onClick:this.props.message,"data-to":"persik"},"\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0443"))))}}]),t}(l.a.Component),K=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).message=function(e){c.a.send("VKWebAppAllowMessagesFromGroup",{group_id:52628657,key:"dBuBKe1kFcdemzB"}),c.a.subscribe(function(e){switch(e.detail.type){case"VKWebAppAllowMessagesFromGroupResult":console.log(e.detail.data),a.setState({activePanel:"message"});break;default:console.log(e.detail.type),e.detail.type.result&&a.setState({activePanel:"message"})}})},a.geo=function(e){c.a.send("VKWebAppGetGeodata",{}),c.a.subscribe(function(e){switch(e.detail.type){case"VKWebAppGetGeodataResult":console.log(e.detail.data),a.setState({activePanel:"message"});break;default:console.log(e.detail.type)}})},a.go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"home",fetchedUser:null},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;c.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data}),console.log(t.detail.data),c.a.send("VKWebAppGetPhoneNumber",{}),c.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetPhoneNumberResult":e.setState({activePanel:"home"}),console.log(t.detail.data.phone_number),c.a.send("VKWebAppGetGeodata",{}),c.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGeodataResult":console.log(t.detail.data),e.setState({activePanel:"home"}),c.a.send("VKWebAppAllowMessagesFromGroup",{group_id:52628657,key:"dBuBKe1kFcdemzB"}),c.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppAllowMessagesFromGroupResult":console.log(t.detail.data),e.setState({activePanel:"home"}),c.a.send("VKWebAppJoinGroup",{group_id:52628657}),c.a.subscribe(function(e){switch(e.detail.type){case"VKWebAppJoinGroupResult":console.log(e.detail.data);break;default:console.log(e.detail.type)}});break;default:console.log(t.detail.type)}});break;default:console.log(t.detail.type)}});break;default:console.log(t.detail.type),console.log(t.detail)}});break;default:console.log(t.detail.type)}}),c.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return l.a.createElement(b.View,{activePanel:this.state.activePanel},l.a.createElement(g,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go}),l.a.createElement(G,{id:"persik",go:this.go}),l.a.createElement(A,{id:"geo",geo:this.geo,go:this.go,activePanel:this.state.activePanel}),l.a.createElement(w,{id:"message",message:this.message,go:this.go,activePanel:this.state.activePanel}))}}]),t}(l.a.Component);c.a.send("VKWebAppInit",{}),s.a.render(l.a.createElement(K,null),document.getElementById("root"))},67:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},69:function(e,t,a){e.exports=a(125)}},[[69,1,2]]]);
//# sourceMappingURL=main.0c42bdf4.chunk.js.map