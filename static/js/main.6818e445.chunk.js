(this["webpackJsonpgh-portfolio"]=this["webpackJsonpgh-portfolio"]||[]).push([[0],[,,,,,,,,,,,,,,,function(A,e,t){},function(A,e,t){},,,,,,function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){"use strict";t.r(e);var g=t(2),n=t.n(g),a=t(7),i=t.n(a),c=(t(15),t(16),t.p+"static/media/navbarLogo.6a38bb3f.png"),s=t(8),I=t(9),C=t(0),l=function(A){return Object(C.jsxs)("nav",{id:"navbarContainer",children:[Object(C.jsxs)("div",{id:"logoAndToggleDiv",children:[Object(C.jsxs)("a",{href:"#Home",children:["",Object(C.jsx)("img",{alt:"logo",src:c,id:"logo"})]}),Object(C.jsx)("span",{className:"navbarToggle",id:"js-navbar-toggle",onClick:function(){document.getElementById("menu").classList.toggle("active")},children:Object(C.jsx)(s.a,{id:"fontAwesomeIcon",icon:I.a})})]}),Object(C.jsx)("ul",{className:"mainNavbar",id:"menu",children:A.navbarData.map((function(A,e){return Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"#".concat(A),children:A},"".concat(A).concat(e))},A.toString())}))})]})},B=t.p+"static/media/linkedIn.60581a02.svg",j=t.p+"static/media/github.6e10867b.svg",P=t.p+"static/media/AM_Cut.d968861b.png",d=(t(22),function(A){var e=A.homepageData,t=e.devName,g=e.devTitle,n=e.linkedIn,a=e.github;return Object(C.jsxs)("section",{id:"Home",children:[Object(C.jsxs)("div",{id:"homeContent",children:[Object(C.jsx)("h1",{id:"devName",children:t}),Object(C.jsx)("h2",{id:"devTitle",children:g}),Object(C.jsx)("a",{href:"".concat(n),target:"_blank",children:Object(C.jsx)("img",{alt:"linkedInLogo",src:B})}),Object(C.jsx)("a",{href:"".concat(a),target:"_blank",children:Object(C.jsx)("img",{alt:"githubLogo",src:j})})]}),Object(C.jsx)("div",{id:"bgImageDiv",children:Object(C.jsx)("img",{alt:"logo",id:"backgroundImage",src:P})}),Object(C.jsx)("a",{href:"#Skills",className:"nextSectionLink",id:"skillsSectionLink",children:Object(C.jsx)("b",{children:"\u2193"})})]})}),m=(t(23),function(A){var e=A.skill,t=e.skillName,g=e.skillImage;return Object(C.jsxs)("div",{className:"skillsCard",children:[Object(C.jsx)("div",{className:"imageDiv",children:Object(C.jsx)("img",{src:g,alt:"".concat(t," Logo")})}),Object(C.jsx)("b",{children:t})]})}),b=t(10),r=t.n(b),Q=function(A){return Object(C.jsxs)("section",{id:"Skills",children:[Object(C.jsx)("h2",{children:"Skills"}),Object(C.jsx)("div",{id:"skillsContent",children:A.skillsData.map((function(A){return Object(C.jsx)(m,{skill:A},r()())}))})]})},f=(t(24),function(A){var e=A.homepageData,t=e.linkedIn,g=e.github;e.resume;return Object(C.jsxs)("section",{id:"Contact",children:[Object(C.jsx)("h2",{children:"Contact"}),Object(C.jsxs)("div",{id:"contactDiv",children:[Object(C.jsxs)("form",{id:"contactForm",name:"contact",method:"POST","data-netlify":"true",children:[Object(C.jsx)("input",{type:"hidden",name:"form-name",value:"contact"}),Object(C.jsxs)("label",{htmlFor:"name",children:["Name:",Object(C.jsx)("input",{id:"name",name:"name",type:"text",required:!0})]}),Object(C.jsxs)("label",{htmlFor:"email",children:["Email:",Object(C.jsx)("input",{id:"email",type:"email",name:"email",required:!0})]}),Object(C.jsxs)("label",{htmlFor:"subject",children:["Subject:",Object(C.jsx)("input",{id:"subject",type:"text",name:"subject",required:!0})]}),Object(C.jsxs)("label",{htmlFor:"message",children:["Message:",Object(C.jsx)("textarea",{id:"message",type:"text",name:"message",required:!0})]}),Object(C.jsx)("button",{type:"submit",children:Object(C.jsx)("b",{children:"Send"})})]}),Object(C.jsxs)("div",{id:"linksDiv",children:[Object(C.jsx)("a",{href:"".concat(t),target:"_blank",children:Object(C.jsx)("img",{alt:"linkedInLogo",src:B})}),Object(C.jsx)("a",{href:"".concat(g),target:"_blank",children:Object(C.jsx)("img",{alt:"linkedInLogo",src:j})})]})]}),Object(C.jsx)("div",{id:"homeSectionLinkDiv",children:Object(C.jsx)("a",{href:"#Home",className:"nextSectionLink",id:"homeSectionLink",children:Object(C.jsx)("b",{children:"\u2191"})})})]})}),o=(t(25),function(){return Object(C.jsxs)("div",{id:"footer",children:[Object(C.jsx)("b",{children:"Created by Aaron McCready"}),Object(C.jsxs)("p",{children:["Logo by ","",Object(C.jsx)("a",{href:"https://www.linkedin.com/in/jimmy-tran007",target:"_blank",children:"Jimmy Tran"})]})]})}),h=t.p+"static/media/html.52629b5a.svg",p=t.p+"static/media/css.3585a563.svg",D=t.p+"static/media/javascript.9afca26a.png",E=t.p+"static/media/react.73ac128a.png",x=t.p+"static/media/sass.4f6d501b.png",k=t.p+"static/media/bootstrap.c087539f.svg",O=t.p+"static/media/ruby.a85cf9bb.svg",u=t.p+"static/media/csharp.cfedfa3f.svg",v=["Home","Skills","Contact"],w=[{skillName:"HTML",skillImage:h},{skillName:"CSS",skillImage:p},{skillName:"Javascript",skillImage:D},{skillName:"React",skillImage:E},{skillName:"Bootstrap",skillImage:k},{skillName:"C#",skillImage:u},{skillName:"Ruby",skillImage:O},{skillName:"SASS/SCSS",skillImage:x},{skillName:"Styled Components",skillImage:"data:image/png;base64,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"},{skillName:"NPM",skillImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAE3CAMAAABl4tVQAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAclBMVEUAAADfh4fzzs7TVFPXZGTbdnbORUTwysrZbWzijY3pra3SUU///f3++vr+/f3//v7////+/v7////78/P34+P+/f335uTdgH7PSUjUWVjNQkHNPj312dnORUXMOzrSUVDRTUzLODbLODfKODfLODf////BodYLAAAAJHRSTlMAyMHj2M/xwdTHwefp4Obw9/T71MfnyMzt4PT3w/D75umS58dvCH2nAAAAAWJLR0QQlbINLAAAAAd0SU1FB+EICQUWBTaN5X8AAATNSURBVHja7dRNTgJREIXR7gZtUFEQf1BURGH/W3TCQBNNvINneO35FlB5Vc2h2Un6scYJJEAkQCRAJEAkQCRAJEAkQCRAJAEiASIBIgEiASIBIgEiASIBIgEiCRAJEAkQCRAJEAkQCRAJEAkQSYBIgEiASIBIgEiASIBIgEiASIBIAkQCRAJEAkSqCkjb1dYo2G5c3XYnwXannQ61xYD0+9qaBNtNq9vuLNjufK9DPSCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIGAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggADyfRez33dZHZCrYLtZdUDmyXbzYPAiGXw9bCDT4BGT6oBEH6Q6IMtku2Uw+CYZfAsIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAwSyN19ECCA/DcgxQIEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEC+tnoo1GPwiHUyeH0MQJ5Kne052O6l1CM2yS9oEwx+TQaPgsGrYkCGXTEgvdvWGyCACBBABAggAgQQAQKIAAFEgAACCCCAAAIIIIAAAgggAgQQAQKIAAFEgAAiQAARIIAIEEAAAQQQQAABBBBABIgAAUSAACJAABEggAgQQAQIIG4LCCCAAAIIIIAAAogAAUSAACJAABEggAgQQAQIIAIEEEAAAQQQQAABBBABIkAAESCACBBA9EdAtoPuLTjFuCtUm3yQrY6qZti91/ePJQECiAABRIAAIkAAESCACBBAJEAkQCRAJEAAESCACBBABAggAgQQAQKIAAFEAkQCRAJEAgQQAQKIAAFEgAAiQAARIIBIgEiASIBIgAAiQAARIIAIEEAECCACBBABAogEiASIBIgECCACBBABAogAAUSAAKLPfQCYJMCFiyrlqgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0wOC0wOVQwNToyMjowNSswMDowMNj0h5wAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMDgtMDlUMDU6MjI6MDUrMDA6MDCpqT8gAAAAAElFTkSuQmCC"},{skillName:"Git",skillImage:"data:image/png;base64,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"}],J={devName:"Aaron McCready",devTitle:"Web Developer",linkedIn:"https://www.linkedin.com",github:"https://github.com/paperspeaker",resume:""},S=function(){return Object(C.jsxs)("div",{id:"appContainer",children:[Object(C.jsx)(l,{navbarData:v}),Object(C.jsxs)("main",{id:"content",children:[Object(C.jsx)(d,{homepageData:J}),Object(C.jsx)(Q,{skillsData:w}),Object(C.jsx)(f,{homepageData:J})]}),Object(C.jsx)(o,{})]})},U=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,27)).then((function(e){var t=e.getCLS,g=e.getFID,n=e.getFCP,a=e.getLCP,i=e.getTTFB;t(A),g(A),n(A),a(A),i(A)}))};i.a.render(Object(C.jsx)(n.a.StrictMode,{children:Object(C.jsx)(S,{})}),document.getElementById("root")),U()}],[[26,1,2]]]);
//# sourceMappingURL=main.6818e445.chunk.js.map