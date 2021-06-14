(this["webpackJsonpcv-felipe"]=this["webpackJsonpcv-felipe"]||[]).push([[0],{16:function(e,s,c){},27:function(e,s,c){},37:function(e,s,c){"use strict";c.r(s);var l=c(1),t=c(20),i=c.n(t),a=(c(27),c(11)),n=c(2),r=(c(16),c(9)),o=c(10),d=c(13),j=c(12),h=(c(19),c(39)),b=c(0),v=function(e){Object(d.a)(c,e);var s=Object(j.a)(c);function c(){var e;return Object(r.a)(this,c),(e=s.call(this)).state={numberOfRepos:0},e}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.github.com/users/Moreno092/repos").then((function(e){return e.json()})).then((function(s){console.log(s.length),e.setState({numberOfRepos:s.length})}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"landing",children:[Object(b.jsx)("div",{class:"overlay"}),Object(b.jsx)("div",{className:"container",id:"Background",children:Object(b.jsxs)("div",{class:"B1",children:[Object(b.jsx)(h.a,{children:Object(b.jsx)("div",{className:"animated-text",children:Object(b.jsx)("h1",{children:"Awesome , Student  & Developer"})})}),Object(b.jsx)("p",{className:"About",children:'A social and driven guy who is passionate about fixing problem solutions I am very easy to learn new things and adapted well. Works well in a group but can also take responsibility. I think my previous experiences can be helpful in my job as a system developer! Because I have worked in web design, I am passionate about fixing problem solutions. But of course I am also nice and helpful. From my latest job in wordpress design, I have learned to work fast and efficiently, under stress and pressure. I hope you find what you read interesting! If you want to contact me regarding jobs etc, you can just click on the "Contact me" link below'}),Object(b.jsx)("i",{class:"bi bi-phone"})]})}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"Repo",children:[Object(b.jsxs)("p",{children:["Number of repos right now: ",this.state.numberOfRepos]}),Object(b.jsx)("p",{children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-down",viewBox:"0 0 16 16",children:Object(b.jsx)("path",{"fill-rule":"evenodd",d:"M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"})})})]}),Object(b.jsx)("hr",{class:"linedivader"}),Object(b.jsx)("div",{class:"container",id:"conteiner2",children:Object(b.jsxs)("div",{class:"row",children:[Object(b.jsxs)("div",{class:"col-sm-3",children:[Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"90",fill:"currentColor",class:"bi bi-award",viewBox:"0 0 16 16",children:[Object(b.jsx)("path",{d:"M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"}),Object(b.jsx)("path",{d:"M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"})]}),Object(b.jsx)("p",{children:"Education"})]}),Object(b.jsx)("div",{class:"col-sm-9",children:Object(b.jsxs)("div",{class:"row",children:[Object(b.jsx)("div",{class:"col-8 col-sm-6"}),Object(b.jsxs)("div",{class:"col-4 col-sm-6",children:[Object(b.jsx)("h1",{children:"Art Collage"}),Object(b.jsx)("p",{children:"A diploma course where I got to study html5, Wordpress, SEO and how to structure your own website."})]})]})})]})}),Object(b.jsx)("div",{class:"container",id:"conteiner2",children:Object(b.jsxs)("div",{class:"row",children:[Object(b.jsxs)("div",{class:"col-sm-3",children:[Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"90",fill:"currentColor",class:"bi bi-book",viewBox:"0 0 16 16",children:Object(b.jsx)("path",{d:"M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"})}),Object(b.jsx)("p",{children:"Education"})]}),Object(b.jsx)("div",{class:"col-sm-9",children:Object(b.jsxs)("div",{class:"row",children:[Object(b.jsx)("div",{class:"col-8 col-sm-6"}),Object(b.jsxs)("div",{class:"col-4 col-sm-6",children:[Object(b.jsx)("h1",{children:"Handelsakademin"}),Object(b.jsx)("p",{children:"At Handelsakademin I studied Object Oriented Programming (OOP) where I learned to be a complete programmer during my two years where I learned to handle c #, javascript, html, css, and also work in the same way as you do in working life with scrum ."})]})]})})]})}),Object(b.jsx)("hr",{class:"linedivader"}),Object(b.jsx)("div",{class:"container",id:"conteiner2",children:Object(b.jsxs)("div",{class:"row",children:[Object(b.jsxs)("div",{class:"col-sm-3",children:[Object(b.jsx)("h1",{children:"Self-employed"}),Object(b.jsx)("p",{children:" I had my own company in wordpress web design where I designed and made websites for customers around Gothenburg"})]}),Object(b.jsx)("div",{class:"col-sm-9",children:Object(b.jsxs)("div",{class:"row",children:[Object(b.jsx)("div",{class:"col-8 col-sm-6"}),Object(b.jsxs)("div",{class:"col-4 col-sm-6",children:[Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"90",fill:"currentColor",class:"bi bi-journal-medical",viewBox:"0 0 16 16",children:[Object(b.jsx)("path",{"fill-rule":"evenodd",d:"M8 4a.5.5 0 0 1 .5.5v.634l.549-.317a.5.5 0 1 1 .5.866L9 6l.549.317a.5.5 0 1 1-.5.866L8.5 6.866V7.5a.5.5 0 0 1-1 0v-.634l-.549.317a.5.5 0 1 1-.5-.866L7 6l-.549-.317a.5.5 0 0 1 .5-.866l.549.317V4.5A.5.5 0 0 1 8 4zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"}),Object(b.jsx)("path",{d:"M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"}),Object(b.jsx)("path",{d:"M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"})]}),Object(b.jsx)("p",{children:"Experience"})]})]})})]})}),Object(b.jsx)("div",{class:"container",id:"conteiner2",children:Object(b.jsxs)("div",{class:"row",children:[Object(b.jsxs)("div",{class:"col-sm-3",children:[Object(b.jsx)("h1",{children:"Freelancer"}),Object(b.jsx)("p",{children:" Right now I freelance most at a large web development company in sthlm called EmpireWebbByr\xe5 where I help design and code websites"})]}),Object(b.jsx)("div",{class:"col-sm-9",children:Object(b.jsxs)("div",{class:"row",children:[Object(b.jsx)("div",{class:"col-8 col-sm-6"}),Object(b.jsx)("div",{class:"col-4 col-sm-6",children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"90",fill:"currentColor",class:"bi bi-laptop",viewBox:"0 0 16 16",children:Object(b.jsx)("path",{d:"M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"})})})]})})]})}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{class:"container",id:"conteiner2",children:[Object(b.jsxs)("div",{class:"row",children:[Object(b.jsx)("div",{class:"col-sm-3"}),Object(b.jsx)("div",{class:"col-sm-9",id:"conteiner2",children:Object(b.jsxs)("div",{class:"row",children:[Object(b.jsx)("div",{class:"col-8 col-sm-6",children:Object(b.jsx)("h1",{className:"Contact1",children:"Contact Me"})}),Object(b.jsx)("div",{class:"col-4 col-sm-6",id:"contact"})]})})]}),Object(b.jsxs)("div",{class:"container",id:"conteiner2",children:[Object(b.jsxs)("div",{class:"row",children:[Object(b.jsx)("div",{class:"col-sm-3"}),Object(b.jsx)("div",{class:"col-sm-9",children:Object(b.jsxs)("div",{class:"row",children:[Object(b.jsx)("div",{class:"col-8 col-sm-6",children:Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"90",fill:"currentColor",class:"bi bi-phone",viewBox:"0 0 16 16",children:[Object(b.jsx)("path",{d:"M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"}),Object(b.jsx)("path",{d:"M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"})]})}),Object(b.jsx)("div",{class:"col-4 col-sm-6",id:"contact",children:Object(b.jsx)("a",{href:"tel:0761740977",children:"Telefon"})})]})})]}),Object(b.jsx)("div",{class:"container",id:"conteiner2",children:Object(b.jsxs)("div",{class:"row",children:[Object(b.jsx)("div",{class:"col-sm-3"}),Object(b.jsx)("div",{class:"col-sm-9",children:Object(b.jsxs)("div",{class:"row",children:[Object(b.jsx)("div",{class:"col-8 col-sm-6",children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"90",fill:"currentColor",class:"bi bi-envelope",viewBox:"0 0 16 16",children:Object(b.jsx)("path",{d:"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"})})}),Object(b.jsx)("div",{class:"col-4 col-sm-6",id:"contact",children:Object(b.jsx)("a",{href:"mailto: felipe_moreno@live.se",children:"Email"})})]})})]})}),Object(b.jsx)("div",{class:"container",id:"conteiner2",children:Object(b.jsxs)("div",{class:"row",children:[Object(b.jsx)("div",{class:"col-sm-3"}),Object(b.jsx)("div",{class:"col-sm-9",children:Object(b.jsxs)("div",{class:"row",children:[Object(b.jsx)("div",{class:"col-8 col-sm-6",children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"90",fill:"currentColor",class:"bi bi-linkedin",viewBox:"0 0 16 16",children:Object(b.jsx)("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})})}),Object(b.jsx)("div",{class:"col-4 col-sm-6",id:"contact",children:Object(b.jsx)("a",{href:"https://www.linkedin.com/in/felipe-nyberg/",children:"LinkedIn"})})]})})]})})]}),Object(b.jsx)("div",{class:"container",id:"conteiner2",children:Object(b.jsxs)("div",{class:"row",children:[Object(b.jsx)("div",{class:"col-sm-3"}),Object(b.jsx)("div",{class:"col-sm-9",children:Object(b.jsxs)("div",{class:"row",children:[Object(b.jsx)("div",{class:"col-8 col-sm-6",children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"90",fill:"currentColor",class:"bi bi-github",viewBox:"0 0 16 16",children:Object(b.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})})}),Object(b.jsx)("div",{class:"col-4 col-sm-6",id:"contact",children:Object(b.jsx)("a",{"data-cy":"Link-github-test",href:"https://github.com/Moreno092",rel:"noopener noreferrer",target:"_blank",children:Object(b.jsx)("p",{children:"Github"})})})]})})]})})]})]})}}]),c}(l.Component),x=function(e){Object(d.a)(c,e);var s=Object(j.a)(c);function c(){return Object(r.a)(this,c),s.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(b.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",id:"Mynavbar",children:Object(b.jsxs)("div",{class:"container-fluid",children:[Object(b.jsx)("a",{class:"navbar-brand",href:"http://localhost:3000/cvfelipe",children:Object(b.jsx)("b",{children:"Felipes CV"})}),Object(b.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{class:"navbar-toggler-icon"})}),Object(b.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(b.jsxs)("div",{class:"navbar-nav",children:[Object(b.jsx)("a",{class:"nav-link active","aria-current":"page"}),Object(b.jsx)("a",{class:"nav-link",href:"http://localhost:3000/cvfelipe"}),Object(b.jsx)("a",{class:"nav-link",href:"http://localhost:3000/cvfelipe"}),Object(b.jsx)("a",{class:"nav-link disabled",href:"http://localhost:3000/cvfelipe",tabindex:"-1","aria-disabled":"true"})]})})]})})}}]),c}(l.Component),O=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(x,{}),Object(b.jsx)(a.a,{children:Object(b.jsx)(n.c,{children:Object(b.jsx)(n.a,{path:"/cvfelipe",component:v})})})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(s){var c=s.getCLS,l=s.getFID,t=s.getFCP,i=s.getLCP,a=s.getTTFB;c(e),l(e),t(e),i(e),a(e)}))};i.a.render(Object(b.jsx)(a.a,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),m()}},[[37,1,2]]]);
//# sourceMappingURL=main.26e48377.chunk.js.map