(this.webpackJsonppachong=this.webpackJsonppachong||[]).push([[0],{248:function(e,t){},436:function(e,t){},736:function(e,t){},738:function(e,t){},813:function(e,t,n){},814:function(e,t,n){"use strict";n.r(t);var s=n(359),r=n.n(s),a=n(84),c=n(52),i=n.n(c),l=n(14),o=n(366);n(198).JSDOM;function u(e){var t=e.jsonData,n=Object.keys(t[0]);return Object(l.jsxs)("table",{className:"border-separate border-spacing-x-2",children:[Object(l.jsx)("thead",{children:Object(l.jsx)("tr",{children:n.map((function(e){return Object(l.jsx)("th",{className:"border border-green-400 bg-green-300 ",children:e},e)}))})}),Object(l.jsx)("tbody",{children:t.map((function(e){return Object(l.jsx)("tr",{children:n.map((function(t){return Object(l.jsx)("td",{className:"border border-green-200 bg-green-100",children:e[t]})}))})}))})]})}function d(){return Object(l.jsxs)("div",{className:"bg-amber-100 p-3 mt-3 mb-3 shadow-md transition-all duration-200",children:[Object(l.jsx)("h2",{className:"text-xl font-bold",children:"\u4f7f\u7528\u8aac\u660e Instructions"}),Object(l.jsxs)("ul",{className:"list-disc list-inside",children:[Object(l.jsxs)("li",{className:"font-medium",children:["\u5148\u8a2a\u554f\u9019\u500b\u7db2\u7ad9 First visit this website",Object(l.jsx)("a",{href:"https://www.lvcnn.com/list.php",target:"_blank",className:"font-extrabold underline decoration-amber-300",children:" LVCNN"})]}),Object(l.jsx)("li",{className:"font-medium",children:"\u7136\u5f8c\u9ede\u64ca\u4e00\u500b\u985e\u578b(\u5982:\u5ee3\u544a\u8a2d\u8a08)Then choose a category (ex: Advertising)"}),Object(l.jsx)("li",{className:"font-medium",children:"\u7136\u5f8c\u628a\u4e0a\u9762\u7684\u7db2\u5740\u8907\u88fd\u4e00\u4e0b\uff0c\u4e4b\u5f8c\u53ef\u4ee5\u7c98\u8cbc\u5230\u4e0b\u9762\u7684\u8f38\u5165\u6846\u6846\u88cf\u9762"}),Object(l.jsx)("li",{className:"font-medium",children:"Then copy the url at the top, and put it in the input box below"})]})]})}function b(e){var t=e.categories,n=e.setUrlToPost,s=e.setTrigger;return Object(l.jsxs)("div",{children:[Object(l.jsx)("select",{id:"chooseCategory",onChange:function(e){var t=e.target.value;console.log("This is what you selected: "),console.log(t),n("https://www.lvcnn.com/"+t),s(+new Date)},children:t.map((function(e){return Object(l.jsx)("option",{value:e.CATEGORY_PAGE_LINK,name:e.CATEGORY_CHINESE_NAME,id:e.CATEGORY_CHINESE_NAME,children:e.CATEGORY_CHINESE_NAME+" "+e.CATEGORY_ENGLISH_NAME})}))}),Object(l.jsx)("button",{className:"ring ring-offset-2 ring-blue-500 bg-slate-400 rounded-sm ml-2",type:"submit",children:"Submit"})]})}var j=function(){var e=i.a.useState(""),t=Object(a.a)(e,2),n=t[0],s=t[1],r=i.a.useState({}),c=Object(a.a)(r,2),j=c[0],h=c[1],m=i.a.useState(0),p=Object(a.a)(m,2),O=p[0],f=p[1],x=i.a.useState(!1),N=Object(a.a)(x,2),g=N[0],E=N[1],v=i.a.useState((function(){var e=function(){var e="https://www.lvcnn.com/list.php";o.post("/api/category",{url:e}).then((function(e){A(e.data)}))}();return e})),w=Object(a.a)(v,2),_=w[0],A=w[1];return i.a.useEffect((function(){var e;n&&(e=n,o.post("/api/scrape",{url:e}).then((function(e){return h(e.data)})))}),[O]),Object(l.jsxs)("div",{className:"pachong",children:[Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsxs)("div",{className:"flex justify-start p-3 bg-sky-200 rounded-md mb-3 shadow-lg ",children:[Object(l.jsx)("h1",{className:"self-auto text-3xl font-bold hover:underline ",children:"\u62c9\u65af\u7dad\u52a0\u65af\u5546\u696d\u5730\u5340\u722c\u87f2\ud83d\udc1b"}),Object(l.jsx)("button",{className:"transition ease-in-out delay-150 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 shadow-indigo-500/50 duration-300",onClick:function(e){e.preventDefault(),E((function(e){return!e}))},children:"\ud83d\ude4d\ud83c\udffb\u200d\u2640\ufe0f\u2753"})]}),g&&Object(l.jsx)(d,{}),_&&Object(l.jsx)(b,{categories:_,setUrlToPost:s,setTrigger:f}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements.urlInput.value;s(t),f(+new Date)},className:"mb-4",children:[Object(l.jsxs)("label",{children:[Object(l.jsx)("a",{href:"https://www.lvcnn.com/list.php",target:"_blank",className:"font-extrabold underline",children:"LVCNN"})," Crawler:",Object(l.jsx)("br",{}),Object(l.jsx)("input",{className:"outline outline-offset-2 outline-sky-200 rounded-sm shadow-inner ",type:"url",id:"urlInput",name:"urlInput",placeholder:"Enter url here..."})]}),Object(l.jsx)("button",{className:"ring ring-offset-2 ring-blue-500 bg-slate-400 rounded-sm ml-2 ",type:"submit",children:"Submit"})]})]}),Object(l.jsx)(u,{jsonData:j[0]?j:[{COMPANY_CHINESE_FIELD_NAME:"\u806f\u5408\u5f8b\u5e2b\u4e8b\u52d9\u6240",COMPANY_ENGLISH_FIELD_NAME:"Parke Law Firm",ADDRESS_FIELD_NAME:"4455 S. Jones Blvd., #1 Las Vegas, NV 89103",PHONE_NUMBER_FIELD_NAME:"702-321-1187"}]})]})};var h=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)("header",{className:"App-header",children:Object(l.jsx)(j,{})})})};n(813);r.a.render(Object(l.jsx)(h,{}),document.getElementById("root"))}},[[814,1,2]]]);
//# sourceMappingURL=main.67481db8.chunk.js.map