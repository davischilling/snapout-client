(this["webpackJsonpsnapout-client"]=this["webpackJsonpsnapout-client"]||[]).push([[9],{159:function(e,t,i){"use strict";i.r(t);var o=i(6),a=i(1),r=i(132),n=i.n(r),c=i(18),l=i(38);!function(e,t){void 0===t&&(t={});var i=t.insertAt;if(e&&"undefined"!==typeof document){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===i&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}('.embed-responsive{position:relative!important;display:block!important;height:0!important;padding:0!important;overflow:hidden!important}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;left:0;bottom:0;height:100%;width:100%;border:0}.aspect-ratio-none{padding-bottom:0!important}.aspect-ratio-square{padding-bottom:100%!important}.aspect-ratio-16\\/9{padding-bottom:56.25%!important}.aspect-ratio-4\\/3{padding-bottom:75%!important}.aspect-ratio-21\\/9{padding-bottom:42.86%!important}.ryt-lite{background-color:#000;position:relative;display:block;contain:content;background-position:50%;background-size:cover;cursor:pointer}.ryt-lite:before{content:"";display:block;position:absolute;top:0;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==);background-position:top;background-repeat:repeat-x;height:60px;padding-bottom:50px;width:100%;transition:all .2s cubic-bezier(0,0,.2,1)}.ryt-lite:after{content:"";display:block;padding-bottom:56.25%}.ryt-lite>iframe{width:100%;height:100%;position:absolute;top:0;left:0}.ryt-lite>.lty-playbtn{width:70px;height:46px;background-color:#212121;z-index:1;opacity:.8;border-radius:14%;transition:all .2s cubic-bezier(0,0,.2,1)}.ryt-lite:hover>.lty-playbtn{background-color:red;opacity:1}.ryt-lite>.lty-playbtn:before{content:"";border-color:transparent transparent transparent #fff;border-style:solid;border-width:11px 0 11px 19px}.ryt-lite>.lty-playbtn,.ryt-lite>.lty-playbtn:before{position:absolute;top:50%;left:50%;transform:translate3d(-50%,-50%,0)}.ryt-lite.lyt-activated{cursor:unset}.ryt-lite.lyt-activated:before,.ryt-lite.lyt-activated>.lty-playbtn{opacity:0;pointer-events:none}');var s=function(e){var t=e.adNetwork,i=void 0===t||t,o=e.url,r=void 0===o?"":o,n=e.playlist,c=void 0!==n&&n,l=e.poster,s=void 0===l?"hqdefault":l,d=e.title,b=void 0===d?"React YouTube Lite":d,p=e.noCookie,m=void 0!==p&&p,u=e.activatedClass,y=void 0===u?"lyt-activated":u,h=e.iframeClass,j=void 0===h?"embed-responsive-item":h,v=e.playerClass,g=void 0===v?"lty-playbtn":v,f=e.wrapperClass,O=void 0===f?"ryt-lite embed-responsive":f,x=e.aspectRatio,A=void 0===x?"aspect-ratio-16/9":x,k=Object(a.useState)(!1),w=k[0],E=k[1],C=Object(a.useState)(!1),N=C[0],F=C[1],B=encodeURIComponent(function(e){var t=e.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/);return t&&11==t[7].length?t[7]:""}(r)),S=b,T="https://i.ytimg.com/vi/"+B+"/"+s+".jpg",R=m?"https://www.youtube-nocookie.com":"https://www.youtube.com",U=c?R+"/embed/videoseries?list="+B:R+"/embed/"+B+"?autoplay=1";return Object(a.createElement)(a.Fragment,null,Object(a.createElement)("link",{rel:"preload",href:T,as:"image"}),Object(a.createElement)(a.Fragment,null,w&&Object(a.createElement)(a.Fragment,null,Object(a.createElement)("link",{rel:"preconnect",href:R}),Object(a.createElement)("link",{rel:"preconnect",href:"https://www.google.com"}),i&&Object(a.createElement)(a.Fragment,null,Object(a.createElement)("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),Object(a.createElement)("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),Object(a.createElement)("div",{onPointerOver:function(){w||E(!0)},onClick:function(){N||F(!0)},className:O+" "+A+" "+(N?y:""),"data-title":S,style:{backgroundImage:"url("+T+")"}},Object(a.createElement)("div",{className:g}),N&&Object(a.createElement)("iframe",{className:j,title:S,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:U})))},d=i(0);t.default=function(){var e,t=Object(a.useContext)(l.a).data,i=Object(a.useState)(void 0),r=Object(o.a)(i,2),b=r[0],p=r[1];return Object(a.useEffect)((function(){t.sections.length>0&&t.sections.find((function(e){"medias"===e.entityName&&p(e.sectionTitle)}))}),[t.sections]),0===Object.keys(t.medias).length?Object(d.jsxs)("div",{id:"media",children:[Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(c.e,{children:Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(d.jsx)(n.a,{type:"Puff",color:"#e21f2f",height:80,width:80})})})]}):Object(d.jsxs)("div",{id:"media",children:[Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(c.f,{title:b||"",style:"01",pageTitle:"01"}),Object(d.jsx)(c.e,{children:null===(e=t.medias)||void 0===e?void 0:e.map((function(e){var t=e.id,i=e.youtubeUrlId,o=e.videoTitle;return Object(d.jsx)("div",{className:"col-md-6 col-xs-12 mb-0",style:{marginBottom:20,paddingBottom:30},children:Object(d.jsxs)("div",{className:"video-item",children:[Object(d.jsx)("div",{className:"video-media",children:Object(d.jsx)("div",{className:"yt-lite",children:Object(d.jsx)(s,{url:"https://www.youtube.com/embed/".concat(i),title:o})})}),Object(d.jsx)("h2",{children:o})]})},t)}))})]})}}}]);
//# sourceMappingURL=9.51c7dbbc.chunk.js.map