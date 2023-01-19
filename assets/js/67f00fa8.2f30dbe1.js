"use strict";(self.webpackChunkeffective_shell=self.webpackChunkeffective_shell||[]).push([[9696],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=h(n),u=o,d=c["".concat(l,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var h=2;h<r;h++)i[h]=n[h];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7348:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var a=n(7462),o=(n(7294),n(3905));const r={title:"The Renaissance of the Shell",slug:"/part-1-transitioning-to-the-shell/the-renaissance-of-the-shell/"},i=void 0,s={unversionedId:"transitioning-to-the-shell/the-renaissance-of-the-shell/index",id:"transitioning-to-the-shell/the-renaissance-of-the-shell/index",title:"The Renaissance of the Shell",description:'This is the first of the "interludes" which end each section of the book. They don\'t teach any specific skills but instead give a little flavour and background about the world of the shell, Linux and modern computing.',source:"@site/docs/01-transitioning-to-the-shell/06-the-renaissance-of-the-shell/index.md",sourceDirName:"01-transitioning-to-the-shell/06-the-renaissance-of-the-shell",slug:"/part-1-transitioning-to-the-shell/the-renaissance-of-the-shell/",permalink:"/part-1-transitioning-to-the-shell/the-renaissance-of-the-shell/",draft:!1,editUrl:"https://github.com/dwmkerr/effective-shell/edit/main/docs/01-transitioning-to-the-shell/06-the-renaissance-of-the-shell/index.md",tags:[],version:"current",frontMatter:{title:"The Renaissance of the Shell",slug:"/part-1-transitioning-to-the-shell/the-renaissance-of-the-shell/"},sidebar:"anotherSidebar",previous:{title:"Getting Help",permalink:"/part-1-transitioning-to-the-shell/getting-help/"},next:{title:"Part 2 - Core Skills",permalink:"/part-2-core-skill/"}},l={},h=[{value:"Is there a Renaissance of the Shell?",id:"is-there-a-renaissance-of-the-shell",level:2},{value:"The Changing Technology Landscape",id:"the-changing-technology-landscape",level:2},{value:"The Diversity of Programming Languages",id:"the-diversity-of-programming-languages",level:3},{value:"Convergence of Operating Platforms",id:"convergence-of-operating-platforms",level:3},{value:"DevOps",id:"devops",level:3}],p={toc:h};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'This is the first of the "interludes" which end each section of the book. They don\'t teach any specific skills but instead give a little flavour and background about the world of the shell, Linux and modern computing.'),(0,o.kt)("p",null,"In this first interlude we'll look at just why the shell is experiencing something of a renaissance in the modern age of IT."),(0,o.kt)("h2",{id:"is-there-a-renaissance-of-the-shell"},"Is there a Renaissance of the Shell?"),(0,o.kt)("p",null,"To be honest, it is hard to know whether there is an increase in popularity of the use of the shell and command-line tooling in general. There are data sources which indicate there is more widespread usage amongst the technical community - Stack Overflow tag popularity is one. LinkedIn data on desired skillsets is another. However, disassociating whether there is a general increase in the need for diverse technical skillsets and whether there is a ",(0,o.kt)("em",{parentName:"p"},"specific")," increase in the popularity of keyboard and script operated systems is a challenge."),(0,o.kt)("p",null,"For the purposes of this chapter, we'll instead examine changes in the technology landscape over the last few decades and consider what those changes might mean for the shell, the command-line and similar tools."),(0,o.kt)("p",null,"We'll look at three specific developments in technology:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Diversity of programming languages"),(0,o.kt)("li",{parentName:"ul"},"Convergence of operating platforms"),(0,o.kt)("li",{parentName:"ul"},"DevOps")),(0,o.kt)("p",null,"Each of these developments has a potentially profound impact on how we work with computers, and might hint at the long term need for shell skills."),(0,o.kt)("h2",{id:"the-changing-technology-landscape"},"The Changing Technology Landscape"),(0,o.kt)("p",null,"So let's look at some of the key changes in the technology landscape over recent years and consider how they might affect the popularity and importance of the shell."),(0,o.kt)("h3",{id:"the-diversity-of-programming-languages"},"The Diversity of Programming Languages"),(0,o.kt)("p",null,"There have been many programming languages and platforms over the years. But in recent years it is possible that the diversity has increased at a greater rate than ever before."),(0,o.kt)("p",null,"With the advent of the internet and the increase in the size of the online technical community, programming has in a sense become more democratised (which we will discuss a little more in the 'citizen coder' section). When in the past it was necessary to find physical books or teachers and tutors to learn a programming language, students can now find a wealth of resources online."),(0,o.kt)("p",null,"It is perhaps this democratisation which has led to a startlingly diverse world of programming languages. For many years, there were a small number of 'general purpose' languages, and a larger number of highly specialised languages (and associated platforms)."),(0,o.kt)("p",null,'"C", and later, "C++" were the go-to languages for systems programming (sometimes backed up by assembly language). This was the language which kernels and compilers were written in.'),(0,o.kt)("p",null,"Alongside these giants were the workhorses for specific use cases. Erlang was (and is) a language which is highly popular in the telecommunications industry, where high availability and reliability were paramount. COBOL was the language for the financial industry, where mission critical systems ran on mainframes (and many still do)."),(0,o.kt)("p",null,"Of course there were many other languages, but many of these other languages were highly specific, in a sense C, Java, PHP and later C# dominated the landscape."),(0,o.kt)("p",null,"Transition to the time of writing. In the Stack Overflow 2020 Technology Survey",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),", the top ten languages most wanted by employers are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Python"),(0,o.kt)("li",{parentName:"ul"},"JavaScript"),(0,o.kt)("li",{parentName:"ul"},"Go"),(0,o.kt)("li",{parentName:"ul"},"TypeScript"),(0,o.kt)("li",{parentName:"ul"},"Rust"),(0,o.kt)("li",{parentName:"ul"},"Kotlin"),(0,o.kt)("li",{parentName:"ul"},"Java"),(0,o.kt)("li",{parentName:"ul"},"C++"),(0,o.kt)("li",{parentName:"ul"},"SQL"),(0,o.kt)("li",{parentName:"ul"},"C#")),(0,o.kt)("p",null,"Some of our old friends are there, but there are many new languages, languages which are evolving quickly. Later on in the list we will see Swift, Dart, Ruby, Haskell, Scala. There are many programming languages which are extremely popular today."),(0,o.kt)("p",null,"Why does this matter for the shell? The answer is that for ",(0,o.kt)("em",{parentName:"p"},"many")," new languages, developer tooling is not as mature (some might say bloated) as it is for the 'Workhorse' languages. Java developers are likely very familiar with the Eclipse IDE, Microsoft shops will be familiar with Visual Studio. These are products which have been evolving for years (or decades) to support developers with rich integrated development environments."),(0,o.kt)("p",null,"For server-side JavaScript, Golang, Rust, Python and other languages, the development environment really is the shell. Modern editors like Visual Studio Code, Atom and so on provide a vast amount of support and tooling, encompassing the features of a full fledged IDE if the user wants. But for modern programming languages, users often have ",(0,o.kt)("em",{parentName:"p"},"had")," to rely on the shell to compile, transpile, manage packages, bundle and so on. The average developer today is perhaps much more likely to have to use the shell - to manage Python virtual environments one day, to run Node.js another, to install packages for Golang another."),(0,o.kt)("p",null,"In time tooling will likely catch up and provide a 'friendly' interface on top of these operations, but many engineers have realised (or always known) that direct access to simple command line tools can be ",(0,o.kt)("em",{parentName:"p"},"extremely efficient")," when working, and that overly featured IDEs can get in the way and hide complexity."),(0,o.kt)("p",null,"The modern programming is often polyglot - having to be at least familiar in a number of languages. The shell provides a common environment and interface for tooling, which is accessible by all, without installing many complex components, for both development and runtime environments."),(0,o.kt)("h3",{id:"convergence-of-operating-platforms"},"Convergence of Operating Platforms"),(0,o.kt)("p",null,"Whilst the variety in programming languages and developer tooling may have increased, in many ways the ",(0,o.kt)("em",{parentName:"p"},"operating platforms")," engineers use have become more homogeneous."),(0,o.kt)("p",null,"In the early days of computing, each operating environment was highly diverse. There were many systems which were used for production and many of them were highly proprietary. Even popular application servers were often closed source and highly specialised."),(0,o.kt)("p",null,"The modern execution environment however is often fairly uniform. A Linux-like system, with few customisations, which the developer or operator can tweak to suit their needs."),(0,o.kt)("p",null,"More and more enterprise users have moved away from proprietary Unix platforms to Linux platforms (whether commercial or non-commercial). The earliest cloud environments were using open-source Linux distributions as the available operating systems."),(0,o.kt)("p",null,"Even Windows has increasing support for Linux-like operation, in the form of the Windows Subsystem for Linux."),(0,o.kt)("p",null,"Perhaps the greatest movement in this area has been the rapid adoption of Docker as a common container technology. Containers, or container-like systems have been around for a long time, but Docker brought containers to the masses. With Docker, engineers expect operating environments to be even more uniform and Linux-like."),(0,o.kt)("p",null,"This has made knowledge of the shell extremely valuable. For any containerised workloads, Linux and shell skills are crucial. Kubernetes (as an execution environment) has standardised things even more."),(0,o.kt)("p",null,"Whilst there are still many workloads which run on proprietary systems, modern solutions are often built to run in containers on Linux. The shell has historically been the most common way to manage Linux systems, and the standardisation of operating environments around Linux, or Linux-like systems has made shell skills even more critical."),(0,o.kt)("h3",{id:"devops"},"DevOps"),(0,o.kt)("p",null,"Love it or hate it, DevOps has exploded in popularity. DevOps engineers, site-reliability engineers, these kinds of roles may have been unheard of in companies not that long ago and are now becoming ubiquitous."),(0,o.kt)("p",null,"In attempting to unify the goals of development and operation of software, DevOps represents an organisational and cultural change. Rather than having one group focus on feature development and another group focus on reliable software operations, a single group is responsible for both. The theory is that this encourages software engineers to also consider security, reliability, maintainability etc, and operators to also consider speed of delivery."),(0,o.kt)("p",null,"Regardless of whether teams are genuinely combined, or specialised roles are added to teams, or even if teams are still separated, the lines between development and operations blur somewhat. Software developers are expected to build and plan with knowledge of the execution environment, operators are expected to work with developers to build features which support reliability."),(0,o.kt)("p",null,"The intersection of these two roles often is in the realm of automation. Automated deployments after testing, automated failover in case of errors, automated alerting when potential issues are discovered, automated provisioning of environments, automated scaling of systems when load increases."),(0,o.kt)("p",null,"The world of automation is intimately linked to the world of the shell and in particular shell scripting. Many tasks which require automation can be easily achieved using shell scripts. Many aspects of modern environments (such as cloud environments) support provisioning and management of services via scripting. In fact, services which ",(0,o.kt)("em",{parentName:"p"},"cannot")," be managed via shell scripts or simple interfaces are increasingly becoming obsolete. If it cannot be scripted, it cannot be automated, and the increasingly complex systems we build ",(0,o.kt)("em",{parentName:"p"},"require")," automation."),(0,o.kt)("p",null,"In practice, this means software engineers are far more likely to have to build shell scripts (or at least understand how to interface with systems via the shell) than they perhaps might have been. Similarly, operators are far more likely to have to ",(0,o.kt)("em",{parentName:"p"},"program")," automated routines to manage high availability and so on. Again, the shell and shell scripts are a common way to manage this (even if they are simply entrypoints to more complex systems, such as scripts which execute programs)."),(0,o.kt)("p",null,"The rise in popularity of DevOps as a set of practices and beliefs has perhaps made the shell more popular, and more important, than any other recent developments in software engineering."),(0,o.kt)("p",null,"And for these reasons and many more, learning how to use the shell effectively has never been more relevant or practical."),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},(0,o.kt)("a",{parentName:"li",href:"https://insights.stackoverflow.com/survey/2020"},"https://insights.stackoverflow.com/survey/2020"),(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0}}]);