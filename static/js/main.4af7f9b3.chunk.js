(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(8),s=a.n(o),r=a(13),i=a(6),c=a(9),u=a(11),h=a(10),m=a(12),p=a(49),d=a.n(p),b=a(50),f=a.n(b),g=(a(81),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).handleClick=function(e){e.preventDefault()},a.handleChange=function(e){(0,a.props.search)(e)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.createElement("header",{className:"header"},n.createElement("a",{href:"/",className:"logo",onClick:this.handleClick},n.createElement("img",{src:f.a,className:"logo__img",alt:"logo"})),n.createElement(d.a,{placeholder:"Search",view:"line",size:"l",onChange:this.handleChange}))}}]),t}(n.Component)),v=Object(r.b)(function(e){return{search:e.appStore.search}})(Object(r.c)(g)),j=(a(82),function(e){return l.a.createElement("footer",{className:"footer"})}),O=a(51),y=a.n(O),E=a(14),k=a.n(E),w=(a(122),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={images:[],isValid:!1},a.updatePhotos=function(){var e=a.props.album,t=[];new Promise(function(a,n){e.photos.map(function(n){var l=new Image(150,150);return l.src=n.thumbnailUrl,l.onload=function(){t.push(l),t.length===e.photos.length&&a(t)},l})}).then(function(e){return a.setState({isValid:!0})})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.updatePhotos()}},{key:"componentDidUpdate",value:function(e){e.album.id!==this.props.album.id&&(this.setState({isValid:!1}),this.updatePhotos())}},{key:"render",value:function(){var e=this,t=this.props.album;return this.state.isValid?n.createElement(n.Fragment,null,n.createElement("ul",{className:"gallery"},t.photos.map(function(t){return n.createElement("li",{key:t.id,className:"gallery__item",onClick:e.handleClick},n.createElement("img",{src:t.thumbnailUrl,alt:t.title}),n.createElement("span",{className:"gallery__title"},t.title))}))):n.createElement(k.a,{size:"l",visible:!0,className:"loader"})}}]),t}(n.Component)),C=(a(123),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={images:[],isValid:!1,result:null},a.updatePhotos=function(){var e=a.props.results;if(0===e.photos.length)return a.setState({result:"Not found"});var t=[];new Promise(function(a,n){e.photos.map(function(n){var l=new Image(150,150);return l.src=n.thumbnailUrl,l.onload=function(){t.push(l),t.length===e.photos.length&&a(t)},l})}).then(function(e){return a.setState({isValid:!0,result:null})})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.updatePhotos()}},{key:"componentDidUpdate",value:function(e){var t=this.props.results;e.results.searchId!==t.searchId&&this.updatePhotos()}},{key:"render",value:function(){var e=this,t=this.props.results,a=this.state,l=a.isValid,o=a.result;return o?n.createElement("span",null,o):l?n.createElement("ul",{className:"gallery"},t.photos.map(function(t){return n.createElement("li",{key:t.id,className:"gallery__item",onClick:e.handleClick},n.createElement("img",{src:t.thumbnailUrl,alt:t.title}),n.createElement("span",{className:"gallery__title"},t.title))})):n.createElement(k.a,{size:"l",visible:!0,className:"loader"})}}]),t}(n.Component)),S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).handleChange=function(e){(0,a.props.setAlbumId)(e[0])},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.fetchData)()}},{key:"render",value:function(){var e=this.props,t=e.isLoading,a=e.selectOptions,l=e.isValid,o=e.album,s=e.searchResult;return l?n.createElement("main",{className:"container"},n.createElement(y.a,{mode:"radio-check",hideTick:!0,placeholder:"Choose Album",options:a,onChange:this.handleChange,className:"select"}),o&&!s?n.createElement(w,{album:o}):null,s?n.createElement(C,{results:s}):null):t?n.createElement(k.a,{size:"l",visible:!0,className:"loader"}):null}}]),t}(n.Component),I=Object(r.b)(function(e){var t=e.appStore.photos.albums.map(function(e){return{value:e.id,text:"Album - #".concat(e.id)}});return{isLoading:e.appStore.isLoading,searchResult:e.appStore.searchResult,fetchData:e.appStore.fetchData,setAlbumId:e.appStore.setAlbumId,album:e.appStore.album,photos:e.appStore.photos.albums,isValid:e.appStore.isValid,part:e.appStore.part,getPart:e.appStore.getPart,selectOptions:t}})(Object(r.c)(S)),N=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,null),l.a.createElement(I,null),l.a.createElement(j,null))},V=a(26),D=a(52),A=a(1),P=function e(){var t=this;Object(i.a)(this,e),this.photos={albums:[]},this.isLoading=!1,this.isValid=!1,this.albumId=null,this.album=null,this.fetchData=function(){t.isLoading=!0,fetch("https://jsonplaceholder.typicode.com/photos").then(function(e){return e.json()}).then(function(e){Object(A.d)(function(){t.photos=e.reduce(function(e,t){return e.albums.length||(e.albums.push({id:t.albumId}),e.albums[e.albums.length-1].photos=[]),e.albums[e.albums.length-1].id!==t.albumId&&(e.albums.push({id:t.albumId}),e.albums[e.albums.length-1].photos=[]),e.albums[e.albums.length-1].photos.push({id:t.id,url:t.url,title:t.title,thumbnailUrl:t.thumbnailUrl}),e},{albums:[]}),t.isLoading=!1,t.isValid=!0})()}).catch(function(e){t.isLoading=!1})},this.search=function(e){if(e.length<=2)t.searchResult=null;else{var a=t.photos.albums.reduce(function(t,a){var n=a.photos.reduce(function(t,a){return a.title.includes(e)?(t.push(a),t):t},[]);return Object(D.a)({},t,{photos:[].concat(Object(V.a)(t.photos),Object(V.a)(n))})},{searchId:+new Date,photos:[]});t.searchResult=a}},this.setAlbumId=function(e){t.albumId=e,t.searchResult=null,t.album=t.photos.albums.filter(function(t){return t.id===e})[0]}};Object(A.g)(P,{searchResult:A.l,albumId:A.l,album:A.l,isValid:A.l,photos:A.l,isLoading:A.l,fetchData:A.d,search:A.d});var _=new P;a(124),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L={appStore:_};s.a.render(l.a.createElement(r.a,L,l.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},50:function(e,t,a){e.exports=a.p+"static/media/gallery.f84c4cf2.svg"},53:function(e,t,a){e.exports=a(125)},81:function(e,t,a){},82:function(e,t,a){}},[[53,1,2]]]);
//# sourceMappingURL=main.4af7f9b3.chunk.js.map