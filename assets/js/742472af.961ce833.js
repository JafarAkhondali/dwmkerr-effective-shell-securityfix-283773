"use strict";(self.webpackChunkeffective_shell=self.webpackChunkeffective_shell||[]).push([[2253],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6965:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={title:"Recording Terminal Sessions"},o=void 0,s={unversionedId:"zz-developer-guide/recording-terminal-sessions",id:"zz-developer-guide/recording-terminal-sessions",title:"Recording Terminal Sessions",description:"There are a couple of techniques that can be useful to record terminal sessions. The first is the asciinema too. The second is the script and scriptreplay commands, which can be used to record the actual keystrokes typed and then replay them.",source:"@site/docs/zz-developer-guide/recording-terminal-sessions.mdx",sourceDirName:"zz-developer-guide",slug:"/zz-developer-guide/recording-terminal-sessions",permalink:"/zz-developer-guide/recording-terminal-sessions",draft:!1,editUrl:"https://github.com/dwmkerr/effective-shell/edit/main/docs/zz-developer-guide/recording-terminal-sessions.mdx",tags:[],version:"current",frontMatter:{title:"Recording Terminal Sessions"},sidebar:"anotherSidebar",previous:{title:"Images and Diagrams",permalink:"/zz-developer-guide/images-and-diagrams"}},c={},l=[{value:"Asciinema",id:"asciinema",level:2},{value:"Script Recording",id:"script-recording",level:2}],p={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are a couple of techniques that can be useful to record terminal sessions. The first is the ",(0,a.kt)("a",{parentName:"p",href:"https://asciinema.org"},(0,a.kt)("inlineCode",{parentName:"a"},"asciinema"))," too. The second is the ",(0,a.kt)("inlineCode",{parentName:"p"},"script")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"scriptreplay")," commands, which can be used to record the actual keystrokes typed and then replay them."),(0,a.kt)("h2",{id:"asciinema"},"Asciinema"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://asciinema.org"},(0,a.kt)("inlineCode",{parentName:"a"},"asciinema"))," tool can record the output of terminal sessions. You can see the results in action in pages like ",(0,a.kt)("a",{parentName:"p",href:"/part-6-advanced-techniques/master-the-multiplexer/"},"Chapter 33 - Master the Multiplexer"),"."),(0,a.kt)("p",null,"Some tips for working with ",(0,a.kt)("inlineCode",{parentName:"p"},"asciinema"),":"),(0,a.kt)("p",null,"To record a Tmux session, you will need to start ",(0,a.kt)("em",{parentName:"p"},"detached")," from Tmux and then attach. You can do this by hand, simply using ",(0,a.kt)("inlineCode",{parentName:"p"},"tmux attach"),", but this adds some noise to the beginning of the recording. A better way is to use the command below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'asciinema rec --command "tmux attach [-t session-name]"\n')),(0,a.kt)("h2",{id:"script-recording"},"Script Recording"),(0,a.kt)("p",null,"Record a shell session by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Start recording...\nscript recording.txt\n\n# ...run your commands...\n\n# Finish the recording.\nexit\n")),(0,a.kt)("p",null,"Once you have this recording, you can use it to rapidly record an ",(0,a.kt)("inlineCode",{parentName:"p"},"asciinema")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'asciinema rec --command "tmux attach [-t session-name] && scriptreplay recording.txt"\n')),(0,a.kt)("p",null,"It can be helpful to ",(0,a.kt)("em",{parentName:"p"},"not")," record a timing file for the keystrokes. If your typing is slow or irregular, or you have to look something up halfway through a script, then having a consistent typing speed provided via a script is better. One way to do this is with the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/scoopex/scriptreplay_ng"},(0,a.kt)("inlineCode",{parentName:"a"},"scriptreplay_ng"))," tool."))}d.isMDXComponent=!0}}]);