(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t,n){},127:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(8),s=n.n(o),i=n(13),r=n(6),c=n(9),u=n(11),h=n(10),m=n(12),p=n(1),d=n(50),f=n.n(d),b=n(51),g=n.n(b),v=(n(81),function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).handleChange=function(e){console.log(e),(0,n.props.search)(e)},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.createElement("header",{className:"header"},a.createElement("a",{href:"/",className:"logo"},a.createElement("img",{src:g.a,className:"logo__img",alt:"logo"})),a.createElement(f.a,{placeholder:"Search",view:"line",size:"l",onChange:this.handleChange}))}}]),t}(a.Component)),j=Object(i.b)(function(e,t,n){return console.log(e),{search:e.appStore.search}})(Object(i.c)(v)),O=(n(82),function(e){return l.a.createElement("footer",{className:"footer"})}),y=n(52),E=n.n(y),w=n(16),k=n.n(w),S=(n(122),n(126),function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={images:[],isValid:!1},n.handleClick=function(e){console.log(e)},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.album,n=[];new Promise(function(e,a){t.photos.map(function(a){var l=new Image(150,150);return l.src=a.thumbnailUrl,l.onload=function(){n.push(l),n.length===t.photos.length&&e(n)},l})}).then(function(t){return e.setState({isValid:!0})})}},{key:"componentDidUpdate",value:function(e,t){var n=this;if(e.album.id!==this.props.album.id){this.setState({isValid:!1});var a=this.props.album,l=[];new Promise(function(e,t){a.photos.map(function(t){var n=new Image(150,150);n.src=t.thumbnailUrl,n.onload=function(){l.push(n),l.length===a.photos.length&&e(l)}})}).then(function(e){return n.setState({isValid:!0})})}}},{key:"render",value:function(){var e=this,t=this.props.album;return this.state.isValid?a.createElement("ul",{className:"gallery"},t.photos.map(function(t){return a.createElement("li",{key:t.id,className:"gallery__item",onClick:e.handleClick},a.createElement("img",{src:t.thumbnailUrl,alt:t.title}),a.createElement("span",{className:"gallery__title"},t.title))})):a.createElement(k.a,{size:"l",visible:!0,className:"loader"})}}]),t}(a.Component)),C=(n(127),function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={images:[],isValid:!1,result:null},n.handleClick=function(e){console.log(e)},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.results;if(0===t.length)return this.setState({result:"Not found"});var n=[];new Promise(function(e,a){t.map(function(a){var l=new Image(150,150);return l.src=a.thumbnailUrl,l.onload=function(){n.push(l),n.length===t.length&&e(n)},l})}).then(function(t){return e.setState({isValid:!0})})}},{key:"componentDidUpdate",value:function(e){var t=this;if(e.results.length!==this.props.results.length){if(0===this.props.results.length)return this.setState({result:"Not found"});var n=this.props.results,a=[];new Promise(function(e,t){n.map(function(t){var l=new Image(150,150);return l.src=t.thumbnailUrl,l.onload=function(){a.push(l),a.length===n.length&&e(a)},l})}).then(function(e){return t.setState({isValid:!0})})}}},{key:"render",value:function(){var e=this,t=this.props.results,n=this.state,l=n.isValid,o=n.result;return console.log(o),o?a.createElement("span",null,o):l?a.createElement("ul",{className:"gallery"},t.map(function(t){return a.createElement("li",{key:t.id,className:"gallery__item",onClick:e.handleClick},a.createElement("img",{src:t.thumbnailUrl,alt:t.title}),a.createElement("span",{className:"gallery__title"},t.title))})):a.createElement(k.a,{size:"l",visible:!0,className:"loader"})}}]),t}(a.Component)),N=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).iteration=0,n.handleChange=function(e){(0,n.props.setAlbumId)(e[0]),console.log(e)},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.fetchData)()}},{key:"render",value:function(){var e=this.props,t=e.isLoading,n=e.selectOptions,l=e.isValid,o=e.album,s=e.searchResult;return console.log(Object(p.n)(o)),l?a.createElement("main",{className:"container"},a.createElement(E.a,{mode:"radio-check",hideTick:!0,placeholder:"Choose Album",options:n,onChange:this.handleChange,className:"select"}),o&&!s?a.createElement(S,{album:o}):null,s?a.createElement(C,{results:s}):null):t?a.createElement(k.a,{size:"l",visible:!0,className:"loader"}):null}}]),t}(a.Component);Object(p.g)(N,{iteration:p.l});var I=Object(i.b)(function(e,t,n){console.log(e);var a=e.appStore.photos.albums.map(function(e){return{value:e.id,text:"Album - #".concat(e.id)}});return{isLoading:e.appStore.isLoading,searchResult:e.appStore.searchResult,fetchData:e.appStore.fetchData,setAlbumId:e.appStore.setAlbumId,album:e.appStore.album,photos:e.appStore.photos.albums,isValid:e.appStore.isValid,selectOptions:a}})(Object(i.c)(N)),V=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(j,null),l.a.createElement(I,null),l.a.createElement(O,null))},A=n(27),D=function e(){var t=this;Object(r.a)(this,e),this.photos={albums:[]},this.part=[],this.iteration=0,this.isLoading=!1,this.isValid=!1,this.albumId=null,this.album=null,this.fetchData=function(){t.isLoading=!0,fetch("https://jsonplaceholder.typicode.com/photos").then(function(e){return e.json()}).then(function(e){Object(p.d)(function(){t.photos=e.reduce(function(e,t){return e.albums.length||(e.albums.push({id:t.albumId}),e.albums[e.albums.length-1].photos=[]),e.albums[e.albums.length-1].id!==t.albumId&&(e.albums.push({id:t.albumId}),e.albums[e.albums.length-1].photos=[]),e.albums[e.albums.length-1].photos.push({id:t.id,url:t.url,title:t.title,thumbnailUrl:t.thumbnailUrl}),e},{albums:[]}),t.isLoading=!1,t.isValid=!0})()}).catch(function(e){t.isLoading=!1,console.log(e)})},this.search=function(e){if(!(e.length<=3&&0!==e.length)){var n=t.photos.albums.reduce(function(t,n){var a=n.photos.reduce(function(t,n){return n.title.includes(e)?(t.push(n),t):t},[]);return[].concat(Object(A.a)(t),Object(A.a)(a))},[]);if(""===e)return console.log("asasa"),void(t.searchResult=null);t.searchResult=n}},this.setAlbumId=function(e){t.albumId=e,t.album=t.photos.albums.filter(function(t){return t.id===e})[0]},this.getPart=function(e,n){t.part=t.photos.slice(e,n)}};Object(p.g)(D,{iteration:p.l,searchResult:p.l,albumId:p.l,album:p.l,isValid:p.l,part:p.l,photos:p.l,isLoading:p.l,fetchData:p.d,getPart:p.d,search:p.d});var U=new D;n(128),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _={appStore:U};s.a.render(l.a.createElement(i.a,_,l.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},51:function(e,t,n){e.exports=n.p+"static/media/gallery.70619ac9.svg"},53:function(e,t,n){e.exports=n(129)},81:function(e,t,n){},82:function(e,t,n){}},[[53,1,2]]]);
//# sourceMappingURL=main.f4ec9e85.chunk.js.map