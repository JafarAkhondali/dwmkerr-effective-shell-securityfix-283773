"use strict";(self.webpackChunkeffective_shell=self.webpackChunkeffective_shell||[]).push([[3829],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),h=p(n),c=i,u=h["".concat(l,".").concat(c)]||h[c]||d[c]||o;return n?a.createElement(u,r(r({ref:t},m),{},{components:n})):a.createElement(u,r({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},729:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={title:"Finding Files",slug:"/part-2-core-skills/finding-files"},r=void 0,s={unversionedId:"core-skills/finding-files/index",id:"core-skills/finding-files/index",title:"Finding Files",description:"Searching through a system to find files or folders can be complex and time consuming, even with a graphical user interface. In this chapter we'll look at how to use the shell to search for files and folders and some quick ways to accomplish common tasks.",source:"@site/docs/02-core-skills/11-finding-files/index.md",sourceDirName:"02-core-skills/11-finding-files",slug:"/part-2-core-skills/finding-files",permalink:"/part-2-core-skills/finding-files",draft:!1,editUrl:"https://github.com/dwmkerr/effective-shell/edit/main/docs/02-core-skills/11-finding-files/index.md",tags:[],version:"current",frontMatter:{title:"Finding Files",slug:"/part-2-core-skills/finding-files"},sidebar:"anotherSidebar",previous:{title:"Understanding Commands",permalink:"/part-2-core-skills/understanding-commands"},next:{title:"What is a Shell?",permalink:"/part-2-core-skills/what-is-a-shell"}},l={},p=[{value:"Introducing the Find Command",id:"introducing-the-find-command",level:2},{value:"Searching for Files or Folders only",id:"searching-for-files-or-folders-only",level:2},{value:"Searching by Name",id:"searching-by-name",level:2},{value:"Searching by Path",id:"searching-by-path",level:2},{value:"Combining Searches - the AND and OR operators",id:"combining-searches---the-and-and-or-operators",level:2},{value:"Case Insensitive Searches",id:"case-insensitive-searches",level:2},{value:"Grouping and the NOT operator",id:"grouping-and-the-not-operator",level:2},{value:"Printing Paths",id:"printing-paths",level:2},{value:"Deleting Files",id:"deleting-files",level:2},{value:"Execute a Command",id:"execute-a-command",level:2},{value:"Execute a Command with a Confirmation",id:"execute-a-command-with-a-confirmation",level:2}],m={toc:p};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Searching through a system to find files or folders can be complex and time consuming, even with a graphical user interface. In this chapter we'll look at how to use the shell to search for files and folders and some quick ways to accomplish common tasks."),(0,i.kt)("h2",{id:"introducing-the-find-command"},"Introducing the Find Command"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," (search for files) command is used to search for files and folders and to perform operations on the results. Let's see it in action by running it in the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/effective-shell")," folder."),(0,i.kt)("admonition",{title:"Downloading the Samples",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Run the following command in your shell to download the samples:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl effective.sh | sh\n"))),(0,i.kt)("p",null,"Let's set the current working directory to the ",(0,i.kt)("inlineCode",{parentName:"p"},"effective-shell")," folder and run the ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ cd ~/effective-shell\n$ find\n.\n./text\n./text/simpsons-characters.txt\n./scripts\n./scripts/show-info.sh\n./websites\n./websites/simple\n./websites/simple/index.html\n./websites/simple/styles.css\n./websites/simple/code.js\n...\n")),(0,i.kt)("p",null,"By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," will list all of the files and folders which are present in the current working directory. It will also show the ",(0,i.kt)("em",{parentName:"p"},"children")," of any folders it finds, meaning that it shows the full hierarchy of files and folders."),(0,i.kt)("admonition",{title:"Find not working on MacOS",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you are running these samples on MacOS, you will probably see the following output:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"$ find\nusage: find [-H | -L | -P] [-EXdsx] [-f path] path ... [expression]\n")),(0,i.kt)("p",{parentName:"admonition"},"This is the ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," command telling you what parameters can be used. On MacOS the default ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," command does ",(0,i.kt)("em",{parentName:"p"},"not")," assume the current working directory."),(0,i.kt)("p",{parentName:"admonition"},"This is because there is a difference between the MacOS and GNU versions of ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," and in this book I will use GNU wherever possible as it will be more compatible (MacOS is based on the BSD operating system, most Linux distributions use a set of tools which are part of the GNU project - there are sometimes differences)."),(0,i.kt)("p",{parentName:"admonition"},"To run the equivalent command on MacOS, just provide the current directory as a parameter:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"$ find .\n")),(0,i.kt)("p",{parentName:"admonition"},"A better solution is to install the ",(0,i.kt)("inlineCode",{parentName:"p"},"findtools")," package, which will install the GNU versions of the tools we'll be using:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"$ brew install findtools\n$ gfind\n")),(0,i.kt)("p",{parentName:"admonition"},"If you do install ",(0,i.kt)("inlineCode",{parentName:"p"},"findtools"),", remember that all of the GNU versions of the tools start with ",(0,i.kt)("inlineCode",{parentName:"p"},"g")," - so when reading this chapter substitute ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"gfind"),"."),(0,i.kt)("p",{parentName:"admonition"},"For more details on what BSD and GNU are, you can check ",(0,i.kt)("a",{parentName:"p",href:"../../work-in-progress"},"Chapter - Unix, Linux, GNU and POSIX"),", which covers these concepts in detail.")),(0,i.kt)("p",null,"So this is the ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," command - you can provide it a directory (or let it use the current directory) and the command will list all of files and folders in the given directory, including all children."),(0,i.kt)("p",null,"You can also provide multiple directories:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ find /usr/bin /usr/sbin\n/usr/bin\n/usr/bin/fwupdtool\n/usr/bin/gnome-keyring\n...\n/usr/sbin\n/usr/sbin/cupsd\n/usr/sbin/pppdump\n...\n")),(0,i.kt)("p",null,"This is the most basic use of ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," - showing a file and folder hierarchy. Now let's look at how to search using this command."),(0,i.kt)("h1",{id:"searching-with-find"},"Searching with Find"),(0,i.kt)("p",null,"Perhaps the most common use for ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," is to search for files. There are a number of options which can be used to filter the results shown, which allow us to search for files. Let's look at some common ways to refine our searches, using the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/effective-shell")," folder as a playground to search in."),(0,i.kt)("h2",{id:"searching-for-files-or-folders-only"},"Searching for Files or Folders only"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"-type")," parameter can be used to search either for files or folders. Let's see both in action. First, we'll search for files only, using ",(0,i.kt)("inlineCode",{parentName:"p"},"-type f"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ find . -type f\n./text/simpsons-characters.txt\n./scripts/show-info.sh\n./websites/simple/index.html\n./websites/simple/styles.css\n./websites/simple/code.js\n...\n")),(0,i.kt)("p",null,"And for folders, using ",(0,i.kt)("inlineCode",{parentName:"p"},"-type d")," (remember, ",(0,i.kt)("inlineCode",{parentName:"p"},"d")," is for directory!):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ find . -type d\n.\n./text\n./scripts\n./websites\n./websites/simple\n...\n")),(0,i.kt)("p",null,"It's important to note that when searching for folders, the ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," command shows folders which are normally hidden, such as the special 'dot' folder",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,i.kt)("p",null,"In both commands, I specified the 'dot' folder as the place to search. I could omit this parameter; I just think it makes it a little more readable."),(0,i.kt)("h2",{id:"searching-by-name"},"Searching by Name"),(0,i.kt)("p",null,"We can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"-name")," parameter to search for files and folders by name. For example, this is how we would search for anything with the letters ",(0,i.kt)("inlineCode",{parentName:"p"},"log")," in the name:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ find . -name "*log*"\n./logs\n./logs/web-server-logs.txt\n./logs/apm-logs\n./logs/apm-logs/apm05.logs\n./logs/apm-logs/apm02.logs\n./logs/apm-logs/apm03.logs\n./logs/apm-logs/apm00.logs\n./logs/apm-logs/apm01.logs\n./logs/apm-logs/apm04.logs\n')),(0,i.kt)("p",null,"You can see I've used a ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," wildcard before and after the letters ",(0,i.kt)("inlineCode",{parentName:"p"},"log")," - this means that I have actually supplied a ",(0,i.kt)("em",{parentName:"p"},"pattern"),", which could be read as 'any characters (including nothing), followed by the characters ",(0,i.kt)("inlineCode",{parentName:"p"},"log"),", followed by any other characters (including no characters)'."),(0,i.kt)("p",null,"If I don't use a wildcard, the ",(0,i.kt)("inlineCode",{parentName:"p"},"logs")," folder will not be found - because it doesn't match the ",(0,i.kt)("em",{parentName:"p"},"pattern")," ",(0,i.kt)("inlineCode",{parentName:"p"},"log")," - without using a wildcard, the pattern is explicitly looking for an ",(0,i.kt)("em",{parentName:"p"},"exact")," match:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ find . -name "log"\n')),(0,i.kt)("p",null,"Note the output - no files or folders were found, as none have the ",(0,i.kt)("em",{parentName:"p"},"exact")," name ",(0,i.kt)("inlineCode",{parentName:"p"},"log"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"-name")," parameter is very specific - it will only match files or folders with the ",(0,i.kt)("em",{parentName:"p"},"name")," provided. Here's an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ find . -name "apm00.logs"\n./logs/apm-logs/apm00.logs\n')),(0,i.kt)("p",null,"Here I have used ",(0,i.kt)("inlineCode",{parentName:"p"},"-name")," to search for an ",(0,i.kt)("em",{parentName:"p"},"exact")," name. What about if I search for ",(0,i.kt)("inlineCode",{parentName:"p"},"apm-logs"),"?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ find . -name "apm-logs"\n./logs/apm-logs\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"folder")," named ",(0,i.kt)("inlineCode",{parentName:"p"},"apm-logs")," is found, but not the ",(0,i.kt)("em",{parentName:"p"},"files")," in the folder - the names of those files don't match the pattern ",(0,i.kt)("inlineCode",{parentName:"p"},"apm-logs"),". What if we make it a wildcard pattern?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ find . -name "*apm-logs*"\n./logs/apm-logs\n')),(0,i.kt)("p",null,"The same results! This is because for the ",(0,i.kt)("em",{parentName:"p"},"files")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"apm-logs")," folder they don't have ",(0,i.kt)("inlineCode",{parentName:"p"},"apm-logs")," in their name anywhere - that is in their ",(0,i.kt)("em",{parentName:"p"},"path"),", i.e. the full address of the file including its folder. So let's look at how to search by path next!"),(0,i.kt)("admonition",{title:"An Important Note on Quotes",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Make sure you use quotes when building your patterns. This command:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},'$ find . -name "*log*"\n')),(0,i.kt)("p",{parentName:"admonition"},"Will give different output to this command:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"$ find . -name *log*\n")),(0,i.kt)("p",{parentName:"admonition"},"Why is this? In the first case, we explicitly pass the text ",(0,i.kt)("inlineCode",{parentName:"p"},"*log*")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," command and let it deal with it. It uses the wildcards to build a pattern. Because we've surrounded the parameter with quotes, the shell itself doesn't try to do anything clever with the wildcard."),(0,i.kt)("p",{parentName:"admonition"},"In the second case, ",(0,i.kt)("em",{parentName:"p"},"the shell itself")," tries to deal with the wildcards, then passes the results to ",(0,i.kt)("inlineCode",{parentName:"p"},"find"),". And the shell deals with them differently. You can see exactly what the shell expands them to with this snippet:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"$ parameter=(*log*)\n$ echo $parameter\nlogs\n")),(0,i.kt)("p",{parentName:"admonition"},"In the second case the shell is performing its own expansion of the wildcard and not searching through all of the child directories. We need to wrap the parameter with quotes so that the shell knows ",(0,i.kt)("em",{parentName:"p"},"not")," to interfere with the text and instead pass it to ",(0,i.kt)("inlineCode",{parentName:"p"},"find"),", so that find can deal with the wildcard."),(0,i.kt)("p",{parentName:"admonition"},"The shell is using ",(0,i.kt)("em",{parentName:"p"},"globbing")," in the second case, which is covered in a later chapter.")),(0,i.kt)("h2",{id:"searching-by-path"},"Searching by Path"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"-path")," parameter can be used to filter the results based on a pattern in the ",(0,i.kt)("em",{parentName:"p"},"path")," of the file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ find . -path "*apm-logs*"\n./logs/apm-logs\n./logs/apm-logs/apm05.logs\n./logs/apm-logs/apm02.logs\n./logs/apm-logs/apm03.logs\n./logs/apm-logs/apm00.logs\n./logs/apm-logs/apm01.logs\n./logs/apm-logs/apm04.logs\n')),(0,i.kt)("p",null,"Again, note that this is very specific, we've added wildcards to the pattern, making it ",(0,i.kt)("inlineCode",{parentName:"p"},"*apm-logs*"),". Without the wildcards we would find nothing, because none of the results have the ",(0,i.kt)("em",{parentName:"p"},"exact")," path ",(0,i.kt)("inlineCode",{parentName:"p"},"apm-logs"),"."),(0,i.kt)("h2",{id:"combining-searches---the-and-and-or-operators"},"Combining Searches - the AND and OR operators"),(0,i.kt)("p",null,"We can provide multiple search options. For example, if we want to search ",(0,i.kt)("em",{parentName:"p"},"only")," for files which end in ",(0,i.kt)("inlineCode",{parentName:"p"},".logs"),", we can do this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ find . -type f -name "*.logs"\n./logs/apm-logs/apm05.logs\n./logs/apm-logs/apm02.logs\n./logs/apm-logs/apm03.logs\n./logs/apm-logs/apm00.logs\n./logs/apm-logs/apm01.logs\n./logs/apm-logs/apm04.logs\n')),(0,i.kt)("p",null,"By using both the ",(0,i.kt)("inlineCode",{parentName:"p"},"-type")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"-name")," parameters, we've created an 'AND' style search - i.e. we're looking for items which match ",(0,i.kt)("em",{parentName:"p"},"both")," of the given criteria."),(0,i.kt)("p",null,"What if we want to perform a search which returns items which match ",(0,i.kt)("em",{parentName:"p"},"either")," of the patterns (i.e an 'OR' search)? For that we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"-or")," parameter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ find . -name "*.js" -or -name "*.html"\n./websites/simple/index.html\n./websites/simple/code.js\n./programs/web-server/web-server.js\n')),(0,i.kt)("p",null,"In this case we show results which match either of the expressions."),(0,i.kt)("h2",{id:"case-insensitive-searches"},"Case Insensitive Searches"),(0,i.kt)("p",null,"Any one of the search parameters you've seen so far can be made case-insensitive by putting the letter ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," before the parameter name."),(0,i.kt)("p",null,"This means that the following commands are identical:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ find . -name "*.js" -or -name "*.Js" -or -name "*.jS" -or name "*.JS"\n')),(0,i.kt)("p",null,"And:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ find . -iname "*.js"\n')),(0,i.kt)("p",null,"I know which one I'd rather type! You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"-iname")," for case-insensitive name searches, or ",(0,i.kt)("inlineCode",{parentName:"p"},"-ipath")," for case-insensitive path searches."),(0,i.kt)("h2",{id:"grouping-and-the-not-operator"},"Grouping and the NOT operator"),(0,i.kt)("p",null,"We can build more complex expressions by grouping together patterns using brackets, or by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"-not")," pattern. Here's an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ find . \\( -name "*.js" -or -name "*.html" \\) -and -not -path "*programs*"\n./websites/simple/index.html\n./websites/simple/code.js\n')),(0,i.kt)("p",null,'The first section groups together two expressions, meaning "files with names which match ',(0,i.kt)("inlineCode",{parentName:"p"},"*.js")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"*.html"),', the second section then says "and also the text ',(0,i.kt)("inlineCode",{parentName:"p"},"programs"),' must not be in the path".'),(0,i.kt)("p",null,"The only annoying thing about grouping is that you must ",(0,i.kt)("em",{parentName:"p"},"escape")," the brackets, by putting a ",(0,i.kt)("inlineCode",{parentName:"p"},"\\")," backslash before them, as brackets have a special meaning in the shell and we're telling the shell not to do anything smart with them but instead pass them to the ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," command."),(0,i.kt)("h1",{id:"why-the-weird-parameters"},"Why the Weird Parameters?"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," command bothered me for years. The parameters looked odd - for example why is it ",(0,i.kt)("inlineCode",{parentName:"p"},"-name")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"-n")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"--name"),", which would be more standard",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),"?"),(0,i.kt)("p",null,"Also, why is it that I cannot type this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'find -name "something.txt" /home/\n')),(0,i.kt)("p",null,"But instead have to put the folder name ",(0,i.kt)("em",{parentName:"p"},"before")," the parameters, which again is non-standard?"),(0,i.kt)("p",null,"The reason is actually quite simple - most of what we've seen so far are not parameters in the normal sense, they're just elements of a ",(0,i.kt)("em",{parentName:"p"},"search expression"),"."),(0,i.kt)("p",null,"The structure of the ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," command is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"find <options> [starting point...] [expression]\n")),(0,i.kt)("p",null,"The options (or parameters) for the ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," command ",(0,i.kt)("em",{parentName:"p"},"are")," short, one-letter options which go before the file name. The ",(0,i.kt)("inlineCode",{parentName:"p"},"-L")," (",(0,i.kt)("em",{parentName:"p"},"follow links"),") option is an example - it goes before the starting point of the search:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'find -L /usr/bin -name "*sh"\n')),(0,i.kt)("p",null,"All of the other things we've seen so far which we've described as parameters are actually used to build the ",(0,i.kt)("em",{parentName:"p"},"expression")," - the actual search pattern."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"-name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"-and"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"-or"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"-ipath")," and similar constructs we've looked at are actually part of a mini 'search language', they're not parameters to the command."),(0,i.kt)("p",null,"This might seem obvious, or it might seem silly, but either way, remembering that the structure of the ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," command is ",(0,i.kt)("inlineCode",{parentName:"p"},"find <options> [starting points...] [expression]")," may help you remember what order to write each part of the command in."),(0,i.kt)("p",null,"It certainly took a few years for me to realise this was the reason, and until that point I used to get frustrated with ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," as I could never seem to remember how to use it properly! Once the structure of the command clicked it became far easier to quickly use the command in day-to-day work."),(0,i.kt)("p",null,"You can find details on this in the manpage for find, open it with ",(0,i.kt)("inlineCode",{parentName:"p"},"man find"),"."),(0,i.kt)("h1",{id:"performing-actions-on-search-results"},"Performing Actions on Search Results"),(0,i.kt)("p",null,"A lot of the time you are not just going to be searching for a file or folder - you'll be searching so that you can do something with what you find. It might be to delete, copy, edit, move or whatever."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," command can perform operations on the files which are found."),(0,i.kt)("p",null,"Now before we continue, I'll warn that I'm ",(0,i.kt)("em",{parentName:"p"},"not")," going to go into much detail here. The reason is that I actually recommend not using these operations. Instead, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"xargs")," command which is covered in ",(0,i.kt)("a",{parentName:"p",href:"../../work-in-progress"},"Chapter 14 - Build Commands on the Fly with Xargs"),". The Xargs command lets you take the list of files from ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," and create any command you can think of. I think this is far more sensible than trying to learn all of the options for ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," - and it is closer to the Unix Philosophy of having the ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," command 'do one thing and do it well'."),(0,i.kt)("p",null,"However, you'll see these operations in other books and articles, or perhaps in scripts you have to work with, so let's take a quick look at some of the common operations and how they are used. Just remember that later on we'll see a more flexible (and easier to remember!) way of operating on the files we've found!"),(0,i.kt)("h2",{id:"printing-paths"},"Printing Paths"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"-print")," action is the default action and doesn't need to be explicitly specified. But if you feel it makes your scripts or code more readable, you can always include it, and it gives us a way to show the syntax for actions."),(0,i.kt)("p",null,"Here's how we'd find all files in the user's home directory with the ending ",(0,i.kt)("inlineCode",{parentName:"p"},".tmp")," and show their path:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ find ~ -name "*.tmp" -print\n/home/dwmkerr/commands1.tmp\n/home/dwmkerr/commands2.tmp\n/home/dwmkerr/commands3.tmp\n')),(0,i.kt)("p",null,"You are unlikely to need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"-print")," - but it will come in handy to know it exists later on when we look at the ",(0,i.kt)("inlineCode",{parentName:"p"},"-print0")," option (we'll see this in Chapter 14). Let's look at the other actions we can perform."),(0,i.kt)("h2",{id:"deleting-files"},"Deleting Files"),(0,i.kt)("p",null,"We can delete the files and folders found by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"-delete")," action:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ find ~ -name "*.tmp" -delete\n')),(0,i.kt)("p",null,"This ",(0,i.kt)("em",{parentName:"p"},"can")," be a convenient way to delete files, but I would recommend ",(0,i.kt)("em",{parentName:"p"},"extreme caution"),". This command does not show what has been deleted and does not ask for confirmation. It also slightly changes the order of results processed so that the ",(0,i.kt)("em",{parentName:"p"},"children")," of folders are deleted where necessary before the folders themselves. This might not be what you expect because that's not what the ",(0,i.kt)("inlineCode",{parentName:"p"},"-print")," output would show (although you can force this behaviour with the ",(0,i.kt)("inlineCode",{parentName:"p"},"-depth")," option)."),(0,i.kt)("p",null,"Check Chapter 14 for a better solution - in short we can use ",(0,i.kt)("inlineCode",{parentName:"p"},'find ~ -name "*.tmp" -print0 | xargs -p -0 rm')," to instead pass the files to ",(0,i.kt)("inlineCode",{parentName:"p"},"rm")," and ask the user to confirm before the deletion happens. This will be explained in a lot more detail in Chapter 14."),(0,i.kt)("h2",{id:"execute-a-command"},"Execute a Command"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"-exec")," action to execute an arbitrary command. Use the special characters ",(0,i.kt)("inlineCode",{parentName:"p"},"{}")," as a placeholder for the filename."),(0,i.kt)("p",null,"Here's an example - we'll find all text files and count the number of words in each one:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ find ~/effective-shell -name "*.txt" -exec wc -w {} \\;\n29 /home/parallels/effective-shell/text/simpsons-characters.txt\n20 /home/parallels/effective-shell/quotes/iain-banks.txt\n16 /home/parallels/effective-shell/quotes/ursula-le-guin.txt\n10373 /home/parallels/effective-shell/logs/web-server-logs.txt\n')),(0,i.kt)("p",null,"We use ",(0,i.kt)("inlineCode",{parentName:"p"},"-exec")," to tell ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," we want to execute a command. Then we use ",(0,i.kt)("inlineCode",{parentName:"p"},"wc -w {}"),' to say "call the ',(0,i.kt)("inlineCode",{parentName:"p"},"wc")," (word count) command with the ",(0,i.kt)("inlineCode",{parentName:"p"},"-w")," (words) flag. The ",(0,i.kt)("inlineCode",{parentName:"p"},"{}")," text is expanded to the list of files. Finally, we need a semi-colon to tell ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," where the ",(0,i.kt)("em",{parentName:"p"},"end")," of the ",(0,i.kt)("inlineCode",{parentName:"p"},"exec")," command is. And because the semi-colon has a special meaning in the shell, we have to ",(0,i.kt)("em",{parentName:"p"},"escape")," this semi-colon by putting a ",(0,i.kt)("inlineCode",{parentName:"p"},"\\")," backslash before it."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"-exec")," action is very powerful - we can construct almost any arbitrary command with it, which can be really useful. But remember we'll see what I think is a more flexible way to build commands a little later."),(0,i.kt)("h2",{id:"execute-a-command-with-a-confirmation"},"Execute a Command with a Confirmation"),(0,i.kt)("p",null,"Now if there is one action to learn, it is the ",(0,i.kt)("inlineCode",{parentName:"p"},"-ok")," action, which works just like ",(0,i.kt)("inlineCode",{parentName:"p"},"-exec"),", but asks the user for a confirmation first. Here's how it might look if I use it to try and delete all files which end in ",(0,i.kt)("inlineCode",{parentName:"p"},"*.txt"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ find ~/effective-shell -name "*.txt" -ok rm {} \\;\n< rm ... /home/parallels/effective-shell/text/simpsons-characters.txt > ? n\n< rm ... /home/parallels/effective-shell/quotes/iain-banks.txt > ? n\n< rm ... /home/parallels/effective-shell/quotes/ursula-le-guin.txt > ? n\n< rm ... /home/parallels/effective-shell/logs/web-server-logs.txt > ? n\n')),(0,i.kt)("p",null,"Note that each operation which will be performed is first printed, then I am asked for confirmation before the operation runs. In each case I've typed ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," (for 'no'). Type ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," (for 'yes') if you want to run the command."),(0,i.kt)("h1",{id:"handling-symlinks"},"Handling Symlinks"),(0,i.kt)("p",null,"It is worth briefly mentioning symlinks - because if you don't understand how ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," handles symlinks then you might be surprised."),(0,i.kt)("p",null,"As an example of how this might surprise you, compare the output of the two commands below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ find /usr/bin\n/usr/bin\n/usr/bin/uux\n/usr/bin/cpan\n/usr/bin/BuildStrings\n/usr/bin/loads.d\n/usr/bin/write\n...\n$ find /bin\n/bin\n")),(0,i.kt)("p",null,"It seems that ",(0,i.kt)("inlineCode",{parentName:"p"},"/bin")," doesn't contain any files - but is that the case? Running ",(0,i.kt)("inlineCode",{parentName:"p"},"ls /bin")," will probably show that you have quite a few files. If you are on MacOS instead try running ",(0,i.kt)("inlineCode",{parentName:"p"},"find /tmp")," to show the same oddity - the ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," program doesn't seem to show the contents of the files."),(0,i.kt)("p",null,"So why did ",(0,i.kt)("inlineCode",{parentName:"p"},"find /bin")," not show the files in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/bin")," folder?"),(0,i.kt)("p",null,"The answer is that ",(0,i.kt)("inlineCode",{parentName:"p"},"/bin")," is a symlink (or if you are on MacOS and want to test the same behaviour and are using ",(0,i.kt)("inlineCode",{parentName:"p"},"/tmp"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"/tmp")," is a symlink). You can see this by running the command below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ls -l / /usr | grep bin\nlrwxrwxrwx   1 root root          7 Aug  7 18:06 bin -> usr/bin\nlrwxrwxrwx   1 root root          8 Aug  7 18:06 sbin -> usr/sbin\ndrwxr-xr-x   2 root root 40960 Jan 25 17:17 bin\ndrwxr-xr-x   2 root root 20480 Jan 25 16:42 sbin\n")),(0,i.kt)("p",null,"Note how the root ",(0,i.kt)("inlineCode",{parentName:"p"},"bin")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"sbin")," folders are actually just symlinks to ",(0,i.kt)("inlineCode",{parentName:"p"},"usr/bin")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"usr/sbin")," respectively."),(0,i.kt)("p",null,"When using the ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," command just remember that it won't follow symlinks by default - provide the ",(0,i.kt)("inlineCode",{parentName:"p"},"-L")," option to follow symlinks:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ find -L /bin\n/bin\n/bin/fwupdtool\n/bin/gnome-keyring\n/bin/dpkg-gencontrol\n/bin/prltoolsd\n...\n")),(0,i.kt)("p",null,"There are more options which control how ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," works with links, check ",(0,i.kt)("inlineCode",{parentName:"p"},"man find")," for the details."),(0,i.kt)("h1",{id:"scratching-the-surface"},"Scratching the Surface"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," command is ",(0,i.kt)("em",{parentName:"p"},"incredibly")," powerful. To go into detail on all of the options or potential ways these options can be combined to create operations could fill an entire book!"),(0,i.kt)("p",null,"My recommendation is to ensure that you know at least the basics we've shown so far. But just as a hint of what can be done with ",(0,i.kt)("inlineCode",{parentName:"p"},"find"),", which might make you want to learn more, here are a few commands which show just how versatile it can be!"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Find large files")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"-size")," test can be used to search by file size - note how with a ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"-")," we can set the minimum and maximum sizes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"find / -size +1G -500G\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Find recently edited files")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"-mtime")," test can be used to find files which were recently modified:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'find . -not -path "*/\\.*" -mtime -2\n')),(0,i.kt)("p",null,"Note how a ",(0,i.kt)("inlineCode",{parentName:"p"},"-not -path")," test is used to skip anything which starts with a ",(0,i.kt)("inlineCode",{parentName:"p"},".")," dot (i.e files and folders which are normally considered hidden)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Find files which have had permissions changed")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"-ctime")," test can be used to find files which have had their attributes (such as permissions) changed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"find ~/.ssh -ctime -30\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Find any executable scripts and make them non-executable")),(0,i.kt)("p",null,"We can search by permissions, as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"find ~ -perm /a=x -exec chmod -x {} +\n")),(0,i.kt)("p",null,"This example uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"-perm")," test, checking if 'all' (users, the owner and group) have the ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," (executable) bit set, then executes the ",(0,i.kt)("inlineCode",{parentName:"p"},"chmod -x")," command to remove the executable bit. We also end the command with ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," rather than ",(0,i.kt)("inlineCode",{parentName:"p"},";"),", which means we will execute ",(0,i.kt)("inlineCode",{parentName:"p"},"chmod")," once with each file passed to the command (rather than running ",(0,i.kt)("inlineCode",{parentName:"p"},"chmod")," for ",(0,i.kt)("em",{parentName:"p"},"each")," file). Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," operator can cause an error if the list of files is too big for the command you pass it to to handle!"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Find empty folders and remove them with a confirmation")),(0,i.kt)("p",null,"We can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"-empty")," test to find empty folders:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"find ~ -type d -maxdepth 3 -empty -ok rmdir {} \\;\n")),(0,i.kt)("p",null,"This example uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"-empty")," test, as well as the ",(0,i.kt)("inlineCode",{parentName:"p"},"-maxdepth")," parameter to limit the search to only three folders deep."),(0,i.kt)("p",null,"These examples just scratch the surface of what ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," can do. The goal of this chapter is not to have an exhaustive description of the ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," command, but equip you with the essentials. When you feel comfortable with the essentials you can then build on your knowledge of ",(0,i.kt)("inlineCode",{parentName:"p"},"find"),"."),(0,i.kt)("h1",{id:"summary"},"Summary"),(0,i.kt)("p",null,"In this chapter we introduced the ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," command, an incredibly powerful tool that lets us search for files and folders using simple or complex expressions. It also allows us to perform actions on the search results."),(0,i.kt)("p",null,"In the next chapter we'll take a look in a bit more detail into what a shell actually is!"),(0,i.kt)("hr",null),(0,i.kt)("p",null,'Share - with "why the hell are the parameters so stupid"\nBlog post on linux essentials, refer to alpine for an example of why find is important\nTest work in progress page'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Footnotes")),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"If you are not sure what the 'dot' folder is, check ",(0,i.kt)("a",{parentName:"li",href:"https://effective-shell.com/docs/part-1-transitioning-to-the-shell/2-navigating-your-system/"},"Chapter 2 - Navigating Your System"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"This is not just a personal preference thing; this is based on the POSIX standard: ",(0,i.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/libc/manual/html_node/Argument-Syntax.html"},"https://www.gnu.org/software/libc/manual/html_node/Argument-Syntax.html")," which recommends a specific set of patterns to make commands consistent and intuitive for user.",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0}}]);