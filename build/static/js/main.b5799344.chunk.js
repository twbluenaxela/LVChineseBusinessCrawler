(this.webpackJsonppachong=this.webpackJsonppachong||[]).push([[0],{49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var r=n(18),s=n.n(r),c=n(4),a=n(2),i=n.n(a),l=n(0),o=n(26);function j(e){var t=e.jsonData,n=Object.keys(t[0]);return Object(l.jsxs)("table",{className:"border-separate border-spacing-x-2",children:[Object(l.jsx)("thead",{children:Object(l.jsx)("tr",{children:n.map((function(e){return Object(l.jsx)("th",{className:"border border-green-400 bg-green-300 ",children:e},e)}))})}),Object(l.jsx)("tbody",{children:t.map((function(e){return Object(l.jsx)("tr",{children:n.map((function(t){return Object(l.jsx)("td",{className:"border border-green-200 bg-green-100",children:e[t]})}))})}))})]})}function d(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"\u4f7f\u7528\u8aac\u660e Instructions"}),Object(l.jsxs)("p",{className:"",children:["\u5148\u8a2a\u554f\u9019\u500b\u7db2\u7ad9 First visit this website",Object(l.jsx)("a",{href:"https://www.lvcnn.com/list.php",target:"_blank",children:" LVCNN "})]}),Object(l.jsx)("p",{children:"\u7136\u5f8c\u9ede\u64ca\u4e00\u500b\u985e\u578b(\u5982:\u5ee3\u544a\u8a2d\u8a08)Then choose a category (ex: Advertising) "}),Object(l.jsx)("p",{children:"\u7136\u5f8c\u628a\u4e0a\u9762\u7684\u7db2\u5740\u8907\u88fd\u4e00\u4e0b\uff0c\u4e4b\u5f8c\u53ef\u4ee5\u7c98\u8cbc\u5230\u4e0b\u9762\u7684\u8f38\u5165\u6846\u6846\u88cf\u9762"}),Object(l.jsx)("p",{className:"text-blue-400 font-extrabold",children:"Then copy the url at the top, and put it in the input box below"})]})}var b=function(){var e=i.a.useState(""),t=Object(c.a)(e,2),n=t[0],r=t[1],s=i.a.useState({}),a=Object(c.a)(s,2),b=a[0],u=a[1],h=i.a.useState(0),p=Object(c.a)(h,2),x=p[0],O=p[1],N=i.a.useState(!1),f=Object(c.a)(N,2),m=f[0],g=f[1];return i.a.useEffect((function(){var e;n&&(e=n,o.post("/api/scrape",{url:e}).then((function(e){return u(e.data)})))}),[x]),Object(l.jsxs)("div",{className:"pachong",children:[Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsxs)("div",{className:"flex justify-start p-3 bg-sky-200 rounded-md drop-shadow-xl ",children:[Object(l.jsx)("h1",{className:"self-auto text-3xl font-bold hover:underline ",children:"\u62c9\u65af\u7dad\u52a0\u65af\u5546\u696d\u5730\u5340\u722c\u87f2\ud83d\udc1b"}),Object(l.jsx)("button",{className:"transition ease-in-out delay-150 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 shadow-indigo-500/50 duration-300",onClick:function(e){e.preventDefault(),g((function(e){return!e}))},children:"\u2753"})]}),m&&Object(l.jsx)(d,{}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements.urlInput.value;r(t),O(+new Date)},children:[Object(l.jsxs)("label",{children:["LVCNN Crawler:",Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"url",id:"urlInput",name:"urlInput",placeholder:"Enter url here..."})]}),Object(l.jsx)("button",{type:"submit",children:"Submit"})]})]}),Object(l.jsx)(j,{jsonData:b[0]?b:[{COMPANY_CHINESE_FIELD_NAME:"\u806f\u5408\u5f8b\u5e2b\u4e8b\u52d9\u6240",COMPANY_ENGLISH_FIELD_NAME:"Parke Law Firm",ADDRESS_FIELD_NAME:"4455 S. Jones Blvd., #1 Las Vegas, NV 89103",PHONE_NUMBER_FIELD_NAME:"702-321-1187"}]})]})};var u=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)("header",{className:"App-header",children:Object(l.jsx)(b,{})})})};n(49);s.a.render(Object(l.jsx)(u,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.b5799344.chunk.js.map