(this.webpackJsonppachong=this.webpackJsonppachong||[]).push([[0],{49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var s=n(18),a=n.n(s),c=n(4),r=n(2),l=n.n(r),i=n(0),o=n(26);function d(e){var t=e.jsonData,n=Object.keys(t[0]);return Object(i.jsxs)("table",{className:"border-separate border-spacing-x-2",children:[Object(i.jsx)("thead",{children:Object(i.jsx)("tr",{children:n.map((function(e){return Object(i.jsx)("th",{className:"border border-green-400 bg-green-300 ",children:e},e)}))})}),Object(i.jsx)("tbody",{className:"tabledata",children:t.map((function(e){return Object(i.jsx)("tr",{children:n.map((function(t){return Object(i.jsx)("td",{className:"border border-green-200 bg-green-100 m-3",children:e[t].replace(/[&]amp[;]/gi,"&")})}))})}))})]})}function u(){return Object(i.jsxs)("div",{className:"bg-amber-100 p-3 mt-3 mb-3 shadow-md transition-all duration-200",children:[Object(i.jsx)("h2",{className:"text-xl font-bold",children:"\u4f7f\u7528\u8aac\u660e Instructions"}),Object(i.jsxs)("ul",{className:"list-disc list-inside",children:[Object(i.jsxs)("li",{className:"font-medium",children:["\u5148\u8a2a\u554f\u9019\u500b\u7db2\u7ad9 First visit this website",Object(i.jsx)("a",{href:"https://www.lvcnn.com/list.php",target:"_blank",className:"font-extrabold underline decoration-amber-300",children:" LVCNN"})]}),Object(i.jsx)("li",{className:"font-medium",children:"\u7136\u5f8c\u9ede\u64ca\u4e00\u500b\u985e\u578b(\u5982:\u5ee3\u544a\u8a2d\u8a08)Then choose a category (ex: Advertising)"}),Object(i.jsx)("li",{className:"font-medium",children:"\u7136\u5f8c\u628a\u4e0a\u9762\u7684\u7db2\u5740\u8907\u88fd\u4e00\u4e0b\uff0c\u4e4b\u5f8c\u53ef\u4ee5\u7c98\u8cbc\u5230\u4e0b\u9762\u7684\u8f38\u5165\u6846\u6846\u88cf\u9762"}),Object(i.jsx)("li",{className:"font-medium",children:"Then copy the url at the top, and put it in the input box below"}),Object(i.jsx)("li",{className:"font-medium"})]}),Object(i.jsx)("h2",{className:"text-xl font-bold",children:"\u9078\u64c7\u985e\u578b"}),Object(i.jsx)("ul",{className:"list-disc list-inside",children:Object(i.jsx)("li",{className:"font-medium",children:"\u60a8\u4e5f\u53ef\u4ee5\u5617\u8a66\u76f4\u63a5\u9078\u64c7\u4e00\u500b\u985e\u578b\u3002\u9078\u64c7\u4e4b\u5f8c\uff0c\u6703\u99ac\u4e0a\u7d66\u4f60\u6253\u51fa\u4e00\u500b\u8868\u683c\u3002"})})]})}function b(e){var t=e.categories,n=e.setUrlToPost,s=e.setTrigger;return Object(i.jsxs)("div",{className:"w-full md:w-auto ml-3 mb-2",children:[Object(i.jsx)("h1",{className:"text-xl font-bold",children:"\u8acb\u9078\u64c7\u8981\u641c\u5c0b\u7684\u985e\u578b"}),Object(i.jsx)("select",{id:"chooseCategory",onChange:function(e){var t=e.target.value;console.log("This is what you selected: "),console.log(t),n("https://www.lvcnn.com/"+t),s(+new Date)},className:"outline outline-4 outline-offset-2 outline-blue-300",children:t.map((function(e){return Object(i.jsx)("option",{value:e.CATEGORY_PAGE_LINK,name:e.CATEGORY_CHINESE_NAME,id:e.CATEGORY_CHINESE_NAME,children:e.CATEGORY_CHINESE_NAME+" "+e.CATEGORY_ENGLISH_NAME.replace(/[&]amp[;]/gi,"&")})}))})]})}var j=function(){var e=l.a.useState(""),t=Object(c.a)(e,2),n=t[0],s=t[1],a=l.a.useState({}),r=Object(c.a)(a,2),j=r[0],h=r[1],m=l.a.useState(0),x=Object(c.a)(m,2),p=x[0],O=x[1],f=l.a.useState(!1),g=Object(c.a)(f,2),N=g[0],v=g[1],w=l.a.useState((function(){return function(){var e="https://www.lvcnn.com/list.php";o.post("/api/category",{url:e}).then((function(e){A(e.data)}))}()})),E=Object(c.a)(w,2),y=E[0],A=E[1];return l.a.useEffect((function(){var e;n&&(e=n,o.post("/api/scrape",{url:e}).then((function(e){return h(e.data)})))}),[p]),Object(i.jsxs)("div",{className:"pachong",children:[Object(i.jsxs)("header",{className:"App-header",children:[Object(i.jsxs)("nav",{className:"flex justify-start p-3 bg-sky-200 rounded-md mb-3 shadow-lg ",children:[Object(i.jsx)("h1",{className:"self-auto text-3xl font-bold hover:underline ",children:"\u62c9\u65af\u7dad\u52a0\u65af\u5546\u696d\u5730\u5340\u722c\u87f2\ud83d\udc1b"}),Object(i.jsx)("button",{className:"transition ease-in-out delay-150 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 shadow-indigo-500/50 duration-300",onClick:function(e){e.preventDefault(),v((function(e){return!e}))},children:"\ud83d\ude4d\ud83c\udffb\u200d\u2640\ufe0f\u2753"})]}),N&&Object(i.jsx)(u,{}),y&&Object(i.jsx)(b,{categories:y,setUrlToPost:s,setTrigger:O})]}),Object(i.jsx)("button",{className:"outline outline-offset-2 outline-green-400 rounded-md m-3 bg-green-300",onClick:function(e){e.preventDefault();var t=document.querySelector("tbody").innerText;console.log(t),navigator.clipboard.writeText(t)},children:"Copy data \u8907\u88fd\u5230\u526a\u8cbc\u677f\ud83d\udccb"}),Object(i.jsx)(d,{jsonData:j[0]?j:[{"\u4e2d\u6587\u5e97\u540d Chinese":"\u806f\u5408\u5f8b\u5e2b\u4e8b\u52d9\u6240","English Name":"Parke Law Firm","\u5730\u5740 Address":"4455 S. Jones Blvd., #1 Las Vegas, NV 89103","\u96fb\u8a71\u865f\u78bc Phone Number":"702-321-1187"}]})]})};var h=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)("header",{className:"App-header",children:Object(i.jsx)(j,{})})})};n(49);a.a.render(Object(i.jsx)(h,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.d084075a.chunk.js.map