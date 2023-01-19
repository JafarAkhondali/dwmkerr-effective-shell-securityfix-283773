"use strict";(self.webpackChunkeffective_shell=self.webpackChunkeffective_shell||[]).push([[2736],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=h(n),m=o,u=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var h=2;h<r;h++)i[h]=n[h];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var a=n(7462),o=(n(7294),n(3905));const r={title:"Navigating Your System",slug:"/part-1-transitioning-to-the-shell/navigating-your-system/"},i=void 0,s={unversionedId:"transitioning-to-the-shell/navigating-your-system/index",id:"transitioning-to-the-shell/navigating-your-system/index",title:"Navigating Your System",description:"Switching from a graphical user interface to the shell can take some getting used to. First we'll take a look at how to navigate your system using the shell, and get information on files and folders in the system.",source:"@site/docs/01-transitioning-to-the-shell/02-navigating-your-system/index.md",sourceDirName:"01-transitioning-to-the-shell/02-navigating-your-system",slug:"/part-1-transitioning-to-the-shell/navigating-your-system/",permalink:"/part-1-transitioning-to-the-shell/navigating-your-system/",draft:!1,editUrl:"https://github.com/dwmkerr/effective-shell/edit/main/docs/01-transitioning-to-the-shell/02-navigating-your-system/index.md",tags:[],version:"current",frontMatter:{title:"Navigating Your System",slug:"/part-1-transitioning-to-the-shell/navigating-your-system/"},sidebar:"anotherSidebar",previous:{title:"Getting Started",permalink:"/part-1-transitioning-to-the-shell/getting-started/"},next:{title:"Managing Your Files",permalink:"/part-1-transitioning-to-the-shell/managing-your-files/"}},l={},h=[{value:"The Working Directory",id:"the-working-directory",level:2},{value:"Listing the Contents of the Working Directory",id:"listing-the-contents-of-the-working-directory",level:2},{value:"Changing the Directory",id:"changing-the-directory",level:2},{value:"Understanding Paths",id:"understanding-paths",level:2},{value:"The Special Dot and Dot Dot Folders",id:"the-special-dot-and-dot-dot-folders",level:2},{value:"The Home Directory",id:"the-home-directory",level:2},{value:"Pushing and Popping the Working Directory",id:"pushing-and-popping-the-working-directory",level:2},{value:"Going Back",id:"going-back",level:2},{value:"Summary",id:"summary",level:2}],p={toc:h};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Switching from a graphical user interface to the shell can take some getting used to. First we'll take a look at how to navigate your system using the shell, and get information on files and folders in the system."),(0,o.kt)("p",null,"This section will introduce the ",(0,o.kt)("inlineCode",{parentName:"p"},"pwd"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ls"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"cd"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"pushd")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"popd"),' commands, as well as the concepts of the "working directory" and "environment variables". We\'ll also take a bit of a look into how "Paths" work.'),(0,o.kt)("p",null,"If these commands are familiar to you then feel free to jump to the next chapter! Otherwise, let's get started."),(0,o.kt)("h2",{id:"the-working-directory"},"The Working Directory"),(0,o.kt)("p",null,"Perhaps the easiest way to start to understand how to navigate your system using the shell is to use a graphical interface as an illustration of how we often navigate. Open your shell, and enter the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pwd\n")),(0,o.kt)("p",null,"You should see something like this:"),(0,o.kt)("img",{alt:"Screenshot: pwd",src:n(3993).Z,width:"800px"}),(0,o.kt)("p",null,"When we open a folder in a graphical user interface, we are always viewing the contents of a folder, or directory. When you open the shell, the same applies - we are always sitting in a specific directory."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"pwd")," command is the ",(0,o.kt)("em",{parentName:"p"},"Print Working Directory")," command. It shows the full path of the directory that you are in."),(0,o.kt)("p",null,"There's one more way to find the working directory. It is stored in an ",(0,o.kt)("em",{parentName:"p"},"Environment Variable")," called ",(0,o.kt)("inlineCode",{parentName:"p"},"PWD"),"."),(0,o.kt)("p",null,"An environment variable is just a bit of data that you can access from your shell. You can create them, you can change them, and there are some which are set for you by the system or the shell to help you out."),(0,o.kt)("p",null,"Try the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'echo "My current working directory is: $PWD"\n')),(0,o.kt)("p",null,"You should see something like this:"),(0,o.kt)("img",{alt:"Screenshot: PWD Environment Variable",src:n(2028).Z,width:"800px"}),(0,o.kt)("p",null,"The dollar symbol is used to tell the shell we want to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"PWD")," variable, not write out the ",(0,o.kt)("em",{parentName:"p"},"text")," ",(0,o.kt)("inlineCode",{parentName:"p"},"PWD"),". We'll see a lot more about environment variables as we continue through the book. "),(0,o.kt)("h2",{id:"listing-the-contents-of-the-working-directory"},"Listing the Contents of the Working Directory"),(0,o.kt)("p",null,"In the graphical user interface, we can also see the files and folders in the current directory. In the shell, we don't see this content. But we can show the contents of the current working directory with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ls\n")),(0,o.kt)("p",null,"You should see something like this:"),(0,o.kt)("img",{alt:"Screenshot: ls",src:n(4282).Z,width:"800px"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ls")," command is the ",(0,o.kt)("em",{parentName:"p"},"List Directory Contents")," command. It will show the contents of a directory. If we don't give it any parameters, it will show the contents of the current directory."),(0,o.kt)("p",null,"There are a lot of options for the ",(0,o.kt)("inlineCode",{parentName:"p"},"ls")," command. For now, let's look at one of the most common options ",(0,o.kt)("inlineCode",{parentName:"p"},"-l"),". This shows the contents as a list:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ls -l\n")),(0,o.kt)("img",{alt:"Screenshot: ls -l",src:n(1742).Z,width:"800px"}),(0,o.kt)("p",null,"A little like the 'details' view in a graphical user interface, this list view shows us more details, such as who owns the file or folder, when it was modified, and more. Again, we'll see more details on this later."),(0,o.kt)("h2",{id:"changing-the-directory"},"Changing the Directory"),(0,o.kt)("p",null,"In a graphical user interface, you move to a different directory by clicking on it."),(0,o.kt)("p",null,"In the shell, you run the ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," command. Try it out with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Move to the pictures directory...\ncd Pictures\n\n# ...then list the contents of the directory.\n# Note that the '-al' flags mean show *all* files, as a *list*.\nls -al\n")),(0,o.kt)("p",null,'Note that when you see shell commands, everything which starts with a hash symbol is a comment. These comments are just for readability, you don\'t need to include them. But if you are saving your own shell snippets (or "scripts"), then you might find comments a useful way to remind yourself of what you are hoping to achieve with the commands, or to make the script more readable.'),(0,o.kt)("p",null,"On my system, we'll see the following output:"),(0,o.kt)("img",{alt:"Screenshot: cd",src:n(7964).Z,width:"800px"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," command is the ",(0,o.kt)("em",{parentName:"p"},"Change Directory")," command. You might see a pattern here - shell commands often are very short (to make it easier to type them quickly) and are often made up of the first letters of the description of the command (",(0,o.kt)("inlineCode",{parentName:"p"},"pwd")," for ",(0,o.kt)("em",{parentName:"p"},"Print Working Directory"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," for ",(0,o.kt)("em",{parentName:"p"},"Change Directory"),")."),(0,o.kt)("p",null,"Now that you know how the ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," command works, you will be able to move around to different folders. At this stage, it's important to talk a little bit about how ",(0,o.kt)("em",{parentName:"p"},"paths")," work in systems."),(0,o.kt)("h2",{id:"understanding-paths"},"Understanding Paths"),(0,o.kt)("p",null,"In Linux, Windows and MacOS (and most other operating systems), ",(0,o.kt)("em",{parentName:"p"},"paths")," are the 'addresses' of files or folders."),(0,o.kt)("p",null,"There are two types of paths - ",(0,o.kt)("em",{parentName:"p"},"Absolute Paths")," and ",(0,o.kt)("em",{parentName:"p"},"Relative Paths"),". An absolute path is one which gives the exact location of a file. For example, on my computer, the absolute path to the folder I am writing this book in is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/Users/dwmkerr/repos/github/dwmkerr/effective-shell\n")),(0,o.kt)("p",null,"Absolute paths ",(0,o.kt)("em",{parentName:"p"},"always")," start with a slash. That's how the system knows it is an absolute path. The ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," is the ",(0,o.kt)("em",{parentName:"p"},"root")," of the file system - basically it's the folder which ",(0,o.kt)("em",{parentName:"p"},"everything")," else lives in."),(0,o.kt)("p",null,"If I have an absolute path, I know ",(0,o.kt)("em",{parentName:"p"},"exactly")," where the file or folder is. Let's compare this to a ",(0,o.kt)("em",{parentName:"p"},"relative path"),". Below is the ",(0,o.kt)("em",{parentName:"p"},"relative path")," in my shell for the file I'm writing right now:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"website/content/docs/part-1-transitioning-to-the-shell\n")),(0,o.kt)("p",null,"This path is ",(0,o.kt)("em",{parentName:"p"},"relative")," to my current working directory in the shell. This means that this path only makes sense if you use it from a specific directory. If I am in my ",(0,o.kt)("inlineCode",{parentName:"p"},"Pictures")," folder, and I want to move to the ",(0,o.kt)("inlineCode",{parentName:"p"},"2020-photos")," folder, I could do it in two ways. The first is with an absolute path:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd /Users/dwmkerr/Pictures/2020-photos\n")),(0,o.kt)("p",null,"The second is with a relative path:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd 2020-photos\n")),(0,o.kt)("p",null,"In short - relative paths are often useful if you want to move to something ",(0,o.kt)("em",{parentName:"p"},"within the current directory")," and absolute paths are useful if you need to move to ",(0,o.kt)("em",{parentName:"p"},"somewhere completely different"),"."),(0,o.kt)("h2",{id:"the-special-dot-and-dot-dot-folders"},"The Special Dot and Dot Dot Folders"),(0,o.kt)("p",null,"As you experiment with these commands, you might have noticed that  every folder contains two other folders, one with the name ",(0,o.kt)("inlineCode",{parentName:"p"},".")," and one with the name ",(0,o.kt)("inlineCode",{parentName:"p"},".."),". Run ",(0,o.kt)("inlineCode",{parentName:"p"},"ls -al")," on the ",(0,o.kt)("inlineCode",{parentName:"p"},"pictures")," folder to see an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ls -al pictures\n")),(0,o.kt)("p",null,"You should see something like this:"),(0,o.kt)("img",{alt:"Screenshot: Special Dot Folders",src:n(7590).Z,width:"800px"}),(0,o.kt)("p",null,"This picture highlights two special folders - ",(0,o.kt)("inlineCode",{parentName:"p"},".")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".."),". These are special folders which exist in ",(0,o.kt)("em",{parentName:"p"},"every")," folder in the system."),(0,o.kt)("p",null,"The first folder, ",(0,o.kt)("inlineCode",{parentName:"p"},"."),', represents the folder it is in. Why would this be useful? Well, sometimes we just want a quick way to say the equivalent of "right here" in a command. For example, if I wanted to copy the current folder to a backup folder, I could do this:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cp . /backup\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cp")," command is the ",(0,o.kt)("em",{parentName:"p"},"Copy")," command, and we'll see it in the next chapter. But the key thing to note is that we can use ",(0,o.kt)("inlineCode",{parentName:"p"},".")," to tell the command to copy the folder we are in right now."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"..")," folder means ",(0,o.kt)("em",{parentName:"p"},"the parent folder"),'. You can use this to "go up" to the parent folder, for example:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ..\nls .\n")),(0,o.kt)("p",null,"Would give:"),(0,o.kt)("img",{alt:"Screenshot: cd dot dot",src:n(7341).Z,width:"800px"}),(0,o.kt)("p",null,"Note that we've used ",(0,o.kt)("inlineCode",{parentName:"p"},"cd ..")," to ",(0,o.kt)("em",{parentName:"p"},"change directory to the parent folder")," then ",(0,o.kt)("inlineCode",{parentName:"p"},"ls")," to ",(0,o.kt)("em",{parentName:"p"},"list the contents of the current folder"),". We could also just have used ",(0,o.kt)("inlineCode",{parentName:"p"},"ls")," on its own as it defaults to the current folder."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"..")," folder can be helpful if you need to navigate to a location which is outside of your current folder. For example, if I am in the ",(0,o.kt)("inlineCode",{parentName:"p"},"pictures")," folder and I want to move to the ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts")," folder, I can just use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ../scripts\nls\n")),(0,o.kt)("p",null,"And we'll see this:"),(0,o.kt)("img",{alt:"Screenshot: cd dot dot scripts",src:n(9194).Z,width:"800px"}),(0,o.kt)("h2",{id:"the-home-directory"},"The Home Directory"),(0,o.kt)("p",null,"There is one more special part of the file system we have to know about. That is the ",(0,o.kt)("em",{parentName:"p"},"Home Directory"),". In Linux-like systems every user has their own personal directory where they can keep their files and folders."),(0,o.kt)("p",null,"This directory can always be accessed through the ",(0,o.kt)("inlineCode",{parentName:"p"},"~")," character. For example, no matter where I am in the system, I can run the following command to move to my home directory and show the contents:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~\nls\n")),(0,o.kt)("p",null,"This would show something like this:"),(0,o.kt)("img",{alt:"Screenshot: cd home",src:n(2065).Z,width:"800px"}),(0,o.kt)("p",null,"This makes moving around your home directory very easy. For example, on a Mac, to go to your pictures folder from anywhere, you can always just run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/Pictures\n")),(0,o.kt)("p",null,"Your home directory on most computers will be where you keep your documents, pictures, videos and so on. Normally this directory is ",(0,o.kt)("em",{parentName:"p"},"not accessible")," to other users of the system. Each user in a system gets their own home directory."),(0,o.kt)("p",null,"You can also see the home directory by using the special ",(0,o.kt)("inlineCode",{parentName:"p"},"HOME")," environment variable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'echo "My home directory is: $HOME"\n')),(0,o.kt)("p",null,"This would show something like this:"),(0,o.kt)("img",{alt:"Screenshot: echo home",src:n(5478).Z,width:"800px"}),(0,o.kt)("p",null,"One useful trick - running ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," without any parameters will always take you home! So to go home, just run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd\n")),(0,o.kt)("p",null,"Now that we know about relative paths, absolute paths, and the special dot and dot dot folders, and the home directory we can continue learning how to navigate the shell!"),(0,o.kt)("h2",{id:"pushing-and-popping-the-working-directory"},"Pushing and Popping the Working Directory"),(0,o.kt)("p",null,"One thing we might want to do is quickly move from one location to another, then go back again. Let's say for example I am working in on this chapter, but I want to check my downloads. One way to do this is with this ",(0,o.kt)("inlineCode",{parentName:"p"},"pushd")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pushd ~/Downloads\nls\npopd\n")),(0,o.kt)("p",null,"After I've checked my downloads, I can run ",(0,o.kt)("inlineCode",{parentName:"p"},"popd")," to go back to where I was:"),(0,o.kt)("img",{alt:"Screenshot: pushd and popd",src:n(171).Z,width:"800px"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"pushd")," command 'pushes' a new working directory onto a stack - moving you there. The ",(0,o.kt)("inlineCode",{parentName:"p"},"popd")," command 'pops' the working directory off the top of the stack. A stack is a structure often used in computers; we can actually push lots of different files to the working directory stack."),(0,o.kt)("p",null,"Why is it called a stack? Well, the reason is that if we were to visualise the structure, it might look like a stack of plates or similar. Here's how ",(0,o.kt)("inlineCode",{parentName:"p"},"pushd")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"popd")," would look if we were to visualise it:"),(0,o.kt)("img",{alt:"Screenshot: pushd popd stack",src:n(2766).Z,width:"800px"}),(0,o.kt)("p",null,"These commands can be useful if you need to move to other locations but want to be able to quickly go back to where you were before afterwards."),(0,o.kt)("h2",{id:"going-back"},"Going Back"),(0,o.kt)("p",null,"One last trick which can save time is the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd -\n")),(0,o.kt)("p",null,"This is a special parameter for ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," which tells it to ",(0,o.kt)("em",{parentName:"p"},"go back")," to the last location you moved to. Here's how it might look if you use it:"),(0,o.kt)("img",{alt:"Screenshot: cd dash",src:n(2619).Z,width:"800px"}),(0,o.kt)("p",null,"This can only be used to go back to the last directory. If you need to be able to go backwards multiple times or through a history of directories, you might need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"pushd")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"popd")," instead."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"In this chapter we introduced the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"pwd")," (",(0,o.kt)("em",{parentName:"li"},"print working directory"),") command shows the current working directory"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"$PWD")," environment variable holds the current working directory"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"ls")," (",(0,o.kt)("em",{parentName:"li"},"list"),") command shows the contents of the current directory or a given directory"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"ls -l")," command shows the contents of the current directory as list"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"cd")," (",(0,o.kt)("em",{parentName:"li"},"change directory"),") changes the current working directory"),(0,o.kt)("li",{parentName:"ul"},"Absolute paths are paths which specify the exact location of a file or folder..."),(0,o.kt)("li",{parentName:"ul"},"...Relative paths are paths which are relative to the current directory"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},".")," special folder means 'this folder'"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"..")," special folder means 'the parent folder'"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"~")," special folder is the 'home directory'"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"$HOME")," environment variable holds the user's home directory"),(0,o.kt)("li",{parentName:"ul"},"You can run ",(0,o.kt)("inlineCode",{parentName:"li"},"cd")," at any time to quickly go to your home directory"),(0,o.kt)("li",{parentName:"ul"},"You can use ",(0,o.kt)("inlineCode",{parentName:"li"},"pushd")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"popd")," to push and pop the working directory stack"),(0,o.kt)("li",{parentName:"ul"},"You can use the ",(0,o.kt)("inlineCode",{parentName:"li"},"cd -")," command to go back to the last location")))}d.isMDXComponent=!0},2619:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cd-dash-53e29f0f8230e4ec479620a71dc61a77.png"},9194:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cd-dot-dot-scripts-4fddc6579b157b2474429d88080cdad5.png"},7341:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cd-dot-dot-c778020499ddc2c49509232cdc15c9f1.png"},2065:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cd-home-cb88b95f55c0104849cff3bdd76f0e6a.png"},7964:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cd-11037ff9f63cacc208544113f72c2910.png"},5478:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/echo-home-6c8165310a37202fc6efe3eaa14a8456.png"},1742:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ls-l-feba8ca271f4f43e1580bd6445adfba3.png"},4282:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ls-620b55bfd11e8f1bbb53da22b569b2ee.png"},2766:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pushd-popd-stack-ccd34132d513841c5b1d97c842b0413f.png"},171:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pushd-popd-f69004387269ce04326a8d62cc60a635.png"},2028:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pwd-env-var-6f01c6f9ac876cd2d9f8c91b2ed141b6.png"},3993:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pwd-b4ec8f59e6ea3997888a4919fdd3dbb0.png"},7590:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/special-dot-folders-3e278df76dd750bfb6f0fec3d003bd97.png"}}]);