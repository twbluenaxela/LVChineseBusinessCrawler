(this.webpackJsonppachong=this.webpackJsonppachong||[]).push([[0],{49:function(e,t,n){"use strict";n.r(t);var c=n(18),r=n.n(c),s=n(5),a=n(2),j=n.n(a),i=n(0),l=n(26);function h(e){var t=e.jsonData,n=Object.keys(t[0]);return Object(i.jsxs)("table",{className:"table",children:[Object(i.jsx)("thead",{style:{backgroundColor:"blue"},children:Object(i.jsx)("tr",{children:n.map((function(e){return Object(i.jsx)("th",{children:e},e)}))})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsx)("tr",{children:n.map((function(t){return Object(i.jsx)("td",{children:e[t]})}))})}))})]})}var u=function(){var e=j.a.useState(null),t=Object(s.a)(e,2),n=t[0],c=t[1],r=j.a.useState({}),a=Object(s.a)(r,2),u=a[0],b=a[1],d=j.a.useState(0),o=Object(s.a)(d,2),p=o[0],O=o[1];return j.a.useEffect((function(){var e;n&&(e=n,l.post("/api/scrape",{url:e}).then((function(e){return b(e.data)})))}),[p]),Object(i.jsxs)("div",{className:"pachong",children:[Object(i.jsxs)("header",{className:"App-header",children:[Object(i.jsx)("h1",{children:"\u62c9\u65af\u7dad\u52a0\u65af\u5546\u696d\u5730\u5340\u722c\u87f2"}),Object(i.jsx)("h2",{children:"\u4f7f\u7528\u8aac\u660e Instructions"}),Object(i.jsxs)("p",{children:["\u5148\u8a2a\u554f\u9019\u500b\u7db2\u7ad9 First visit this website",Object(i.jsx)("a",{href:"https://www.lvcnn.com/list.php",children:" LVCNN "})]}),Object(i.jsx)("p",{children:"\u7136\u5f8c\u9ede\u64ca\u4e00\u500b\u985e\u578b(\u5982:\u5ee3\u544a\u8a2d\u8a08)Then choose a category (ex: Advertising) "}),Object(i.jsx)("p",{children:"\u7136\u5f8c\u628a\u4e0a\u9762\u7684\u7db2\u5740\u8907\u88fd\u4e00\u4e0b\uff0c\u4e4b\u5f8c\u53ef\u4ee5\u7c98\u8cbc\u5230\u4e0b\u9762\u7684\u8f38\u5165\u6846\u6846\u88cf\u9762"}),Object(i.jsx)("p",{children:"Then copy the url at the top, and put it in the input box below"}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements.urlInput.value;c(t),O(+new Date)},children:[Object(i.jsxs)("label",{children:["LVCNN Crawler:",Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"url",id:"urlInput",name:"urlInput",placeholder:"Enter url here..."})]}),Object(i.jsx)("button",{type:"submit",children:"Submit"})]})]}),Object(i.jsx)(h,{jsonData:u[0]?u:[{COMPANY_CHINESE_FIELD_NAME:"\u806f\u5408\u5f8b\u5e2b\u4e8b\u52d9\u6240",COMPANY_ENGLISH_FIELD_NAME:"Parke Law Firm",ADDRESS_FIELD_NAME:"4455 S. Jones Blvd., #1 Las Vegas, NV 89103",PHONE_NUMBER_FIELD_NAME:"702-321-1187"}]})]})};var b=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)("header",{className:"App-header",children:Object(i.jsx)(u,{})})})};r.a.render(Object(i.jsx)(b,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.245eb47a.chunk.js.map