(this.webpackJsonpgitfographic3=this.webpackJsonpgitfographic3||[]).push([[0],{29:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}));var o=n(2),a=n.n(o),r=a.a.createContext(),i=function(e){var t=e.machineInstance,n=e.children;return a.a.createElement(r.Provider,{value:t},n)}},62:function(e,t,n){e.exports=n(77)},67:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var o=n(2),a=n.n(o),r=n(43),i=n.n(r),c=(n(67),n(57)),s=n(29),l=n(28),d=n(46),m=n(4),u={introductionScene:"introductionScene",overviewScene:"overviewScene",gitignoreScene:"gitignoreScene",commitScene:"commitScene",branchScene:"branchScene",resetCheckoutScene:"resetCheckoutScene",workingAloneScene:"workingAloneScene",githubScene:"githubScene"},h={id:"introductionScene",initial:"whatIsThis",on:u,states:{whatIsThis:{on:{next:"navigation"}},navigation:{on:{next:"whatIsGit",prev:"whatIsThis"}},whatIsGit:{on:{next:"whyGit",prev:"navigation"}},whyGit:{on:{next:"metaphoresUsed",prev:"navigation"}},metaphoresUsed:{on:{next:"isItHard",prev:"whyGit"}},isItHard:{on:{next:[{target:"#overviewScene",cond:{type:"hasUnlocked",scene:"overviewScene"}},{actions:[{type:"fireworks",msg:"introduction"},{type:"unlockScene",scene:"overviewScene"},Object(m.q)("overviewScene",{delay:3e3})]}],prev:"whyGit"}}}},g={entry:{type:"setBox",x:100,y:100},id:"overviewScene",initial:"first",on:u,states:{first:{on:{next:"drawLocalBox",prev:"#introductionScene.isItHard"}},drawLocalBox:{entry:{type:"setBox",x:100,y:120},on:{next:"drawRemoteBox",prev:"first"}},drawRemoteBox:{entry:{type:"setBox",x:750,y:120},on:{next:"workingArea",prev:"drawLocalBox"}},workingArea:{entry:{type:"setBox",x:200,y:200},on:{next:"stagingArea",prev:"drawRemoteBox"}},stagingArea:{entry:{type:"setBox",x:450,y:200},on:{next:"localRepository",prev:"workingArea"}},localRepository:{entry:{type:"setBox",x:130,y:200},on:{next:"remoteRepository",prev:"stagingArea"}},remoteRepository:{entry:{type:"setBox",x:450,y:200},on:{next:"addCommand",prev:"localRepository"}},addCommand:{entry:{type:"setBox",x:200,y:100},on:{next:"addCommandMoveFile1",prev:"remoteRepository"}},addCommandMoveFile1:{on:{next:"addCommandMoveFile2and3",prev:"addCommand"}},addCommandMoveFile2and3:{on:{next:"addCommandMoveFile3Back",prev:"addCommandMoveFile1"}},addCommandMoveFile3Back:{on:{next:"commitCommand",prev:"addCommandMoveFile2and3"}},commitCommand:{entry:{type:"setBox",x:450,y:100},on:{next:"resetCommand",prev:"addCommandMoveFile3Back"}},resetCommand:{entry:{type:"setBox",x:150,y:200},on:{next:"pushCommand",prev:"commitCommand"}},pushCommand:{entry:{type:"setBox",x:650,y:100},on:{next:"pullCommand",prev:"commitCommand"}},pullCommand:{entry:{type:"setBox",x:450,y:200},on:{next:"takeAScreenshot",prev:"pushCommand"}},takeAScreenshot:{entry:{type:"setBox",x:300,y:300},on:{next:[{target:"#gitignoreScene",cond:{type:"hasUnlocked",scene:"gitignoreScene"}},{actions:[{type:"fireworks",msg:"Overview"},{type:"unlockScene",scene:"gitignoreScene"},Object(m.q)("gitignoreScene",{delay:3e3})]}],prev:"pullCommand"}}}},y={initial:"opening",id:"gitignoreScene",on:u,states:{opening:{always:"gitIgnoreSceneSet"},gitIgnoreSceneSet:{entry:{type:"setBox",x:200,y:0},on:{next:"gitIgnoreSceneSet2",prev:"#overviewScene.pullCommand"}},gitIgnoreSceneSet2:{entry:{type:"setBox",x:200,y:0},on:{next:"gitIgnoreFile",prev:"gitIgnoreSceneSet"}},gitIgnoreFile:{entry:[{type:"setBox",x:435,y:50},"toggleTypewriter"],on:{next:"gitIgnoreFileMovedBack",prev:"gitIgnoreSceneSet2"},exit:"toggleTypewriter"},gitIgnoreFileMovedBack:{entry:{type:"setBox",x:200,y:0},on:{next:[{target:"#commitScene",cond:{type:"hasUnlocked",scene:"commitScene"}},{actions:[{type:"fireworks",msg:".gitignore"},{type:"unlockScene",scene:"commitScene"},Object(m.q)("commitScene",{delay:3e3})]}],prev:"gitIgnoreFile"}}}},p={id:"commitScene",initial:"opening",on:u,states:{opening:{entry:["resetCount"],always:"beforeCommits"},beforeCommits:{entry:{type:"setBox",x:50,y:100},on:{next:{target:"commits1",actions:"countUp"},prev:{target:"#gitignoreScene.gitIgnoreFileMovedBack",actions:"countDown"}}},commits1:{entry:{type:"setBox",x:50,y:180},on:{next:{target:"commits2",actions:"countUp"},prev:{target:"beforeCommits",actions:"countDown"}}},commits2:{on:{next:{target:"commits3",actions:"countUp"},prev:{target:"commits1",actions:"countDown"}}},commits3:{on:{next:{target:"commits4",actions:"countUp"},prev:{target:"commits2",actions:"countDown"}}},commits4:{on:{next:{target:"commits5",actions:"countUp"},prev:{target:"commits3",actions:"countDown"}}},commits5:{entry:{type:"setBox",x:50,y:180},on:{next:{target:"commits6",actions:"countUp"},prev:{target:"commits4",actions:"countDown"}}},commits6:{entry:{type:"setBox",x:300,y:120},on:{next:{target:"commits7",actions:"countUp"},prev:{target:"commits5",actions:"countDown"}}},commits7:{on:{next:[{target:"#branchScene",cond:{type:"hasUnlocked",scene:"branchScene"}},{actions:[{type:"fireworks",msg:"Commits"},{type:"unlockScene",scene:"branchScene"},Object(m.q)("branchScene",{delay:3e3})]}],prev:{target:"commits6",actions:"countDown"}}}}},v={id:"branchScene",initial:"opening",on:u,states:{opening:{entry:["resetBranchOverlay",{type:"setBox",x:100,y:150}],on:{next:{target:"master",actions:"incrementBranchOverlay"},prev:{target:"#commitScene.commits7",actions:"setCountEnd"}}},master:{entry:[{type:"setBox",x:300,y:200}],on:{next:{target:"branchToFeature1",actions:"incrementBranchOverlay"},prev:{target:"opening",actions:"decrementBranchOverlay"}}},branchToFeature1:{entry:[{type:"setBox",x:300,y:200}],on:{next:{target:"feature1",actions:"incrementBranchOverlay"},prev:{target:"master",actions:"decrementBranchOverlay"}}},feature1:{entry:[{type:"setBox",x:400,y:200}],on:{next:{target:"feature1MergeToMaster",actions:"incrementBranchOverlay"},prev:{target:"branchToFeature1",actions:"decrementBranchOverlay"}}},feature1MergeToMaster:{entry:[{type:"setBox",x:100,y:350}],on:{next:{target:"branchToFeature2Cards",actions:"incrementBranchOverlay"},prev:{target:"feature1",actions:"decrementBranchOverlay"}}},branchToFeature2Cards:{on:{next:{target:"feature2Cards",actions:"incrementBranchOverlay"},prev:{target:"feature1MergeToMaster",actions:"decrementBranchOverlay"}}},feature2Cards:{on:{next:{target:"feature2MergeToMaster",actions:"incrementBranchOverlay"},prev:{target:"branchToFeature2Cards",actions:"decrementBranchOverlay"}}},feature2MergeToMaster:{on:{next:{target:"branchToNav",actions:"incrementBranchOverlay"},prev:{target:"feature2Cards",actions:"decrementBranchOverlay"}}},branchToNav:{on:{next:{target:"developmentComplete",actions:"incrementBranchOverlay"},prev:{target:"feature2MergeToMaster",actions:"decrementBranchOverlay"}}},developmentComplete:{on:{next:[{target:"#resetCheckoutScene",cond:{type:"hasUnlocked",scene:"resetCheckoutScene"}},{actions:[{type:"fireworks",msg:"Branches"},{type:"unlockScene",scene:"resetCheckoutScene"},Object(m.q)("resetCheckoutScene",{delay:3e3})]}],prev:{target:"branchToNav",actions:"decrementBranchOverlay"}}}}},w={id:"resetCheckoutScene",initial:"opening",on:u,states:{opening:{entry:[{type:"setBox",x:100,y:120}],on:{next:"spreadOut",prev:{target:"#branchScene.developmentComplete",actions:["setBranchOverlayEnd"]}}},spreadOut:{entry:[{type:"setBox",x:100,y:120}],on:{next:"filesAddedToProject",prev:"opening"}},filesAddedToProject:{entry:[{type:"setBox",x:250,y:120}],on:{next:"firstAddCommand",prev:"spreadOut"}},firstAddCommand:{entry:[{type:"setBox",x:600,y:120}],on:{next:"firstCommitCommand",prev:"filesAddedToProject"}},firstCommitCommand:{entry:[{type:"setCssFileStep",value:0},{type:"setBox",x:600,y:120}],on:{next:"firstChangeToFiles",prev:"firstAddCommand"}},firstChangeToFiles:{entry:[{type:"setCssFileStep",value:1},{type:"setBox",x:200,y:120}],on:{next:"secondAddCommand",prev:"firstCommitCommand"}},secondAddCommand:{entry:{type:"setBox",x:600,y:220},on:{next:"secondCommitCommand",prev:"firstChangeToFiles"}},secondCommitCommand:{entry:{type:"setBox",x:600,y:220},on:{next:"resetIntro",prev:"secondAddCommand"}},resetIntro:{entry:{type:"setBox",x:200,y:120},on:{next:"reset",prev:"secondCommitCommand"}},reset:{entry:{type:"setCssFileStep",value:0},on:{next:"restored",prev:"resetIntro"}},restored:{entry:{type:"setCssFileStep",value:1},on:{next:"checkout",prev:"reset"}},checkout:{entry:{type:"setCssFileStep",value:0},on:{next:"ending",prev:"restored"}},ending:{on:{next:[{target:"#workingAloneScene",cond:{type:"hasUnlocked",scene:"workingAloneScene"}},{actions:[{type:"fireworks",msg:"Reset/Checkout"},{type:"unlockScene",scene:"workingAloneScene"},Object(m.q)("workingAloneScene",{delay:3e3})]}],prev:{target:"checkout"}}}}},f={id:"workingAloneScene",initial:"opening",on:u,states:{opening:{entry:[{type:"setBox",x:100,y:120},"resetWorkingAloneCount"],on:{next:{target:"countLoop",actions:"incrementWorkingAloneCount"},prev:{target:"#resetCheckoutScene.ending",actions:["setBranchOverlayEnd"]}}},countLoop:{entry:{type:"setBox",x:100,y:40},meta:{texts:["Start each day by pulling master","Find a feature to work on","and create a branch for that","try to do one feature per branch","commit and push often","... every time something is working","write meaningfull commit messages","once you're done with your feature, push it","then merge into master","repeat the process"]},on:{next:[{target:"countLoop",actions:"incrementWorkingAloneCount",cond:"hasMoreTexts"},{target:"ending"}],prev:[{target:"countLoop",actions:"decrementWorkingAloneCount",cond:{type:"greaterThanZero",prop:"workingAloneCount"}},{target:"opening"}]}},ending:{entry:{type:"setBox",x:100,y:40},on:{next:[{target:"#githubScene",cond:{type:"hasUnlocked",scene:"githubScene"}},{actions:[{type:"fireworks",msg:"Working Alone"},{type:"unlockScene",scene:"githubScene"},Object(m.q)("githubScene",{delay:3e3})]}],prev:"countLoop"}}}},b={id:"githubScene",initial:"opening",on:u,states:{opening:{entry:[{type:"setBox",x:100,y:120}],on:{next:{target:"github"},prev:{target:"#workingAloneScene.ending",actions:[]}}},github:{on:{next:"pushing",prev:"opening"}},pushing:{on:{next:"pulling",prev:"github"}},pulling:{on:{next:"cloning",prev:"pushing"}},cloning:{on:{next:"",prev:"pulling"}},ending:{entry:{type:"setBox",x:100,y:40},on:{next:[{target:"",cond:{type:"hasUnlocked",scene:"workingAloneScene"}},{actions:[{type:"fireworks",msg:"Working Alone"},{type:"unlockScene",scene:""},Object(m.q)("",{delay:3e3})]}],prev:""}}}},k={hasUnlocked:function(e,t,n){var o=n.cond;return e.unlocks[o.scene]},greaterThanZero:function(e,t,n){var o=n.cond;return console.log(e[o.prop]),e[o.prop]>0},hasMoreTexts:function(e,t){return e.workingAloneCount<9}},x=n(55),S=n.n(x),C={fireworks:function(e,t,n){var o=n.action;function a(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,t=0;t<e;t++)S()({x:window.innerWidth/2+200*Math.random()-100,y:window.innerHeight/2+200*Math.random()-100})}a(),setTimeout(a,1e3),setTimeout(a,2e3),document.body.dataset.fireworks="true";var r=document.createElement("h1");r.textContent="Congratulations, you've completed the ".concat(o.msg," scene"),r.style.position="absolute",r.style.textAlign="center",r.style.top="45vh",document.body.appendChild(r),setTimeout((function(){r.remove(),document.body.dataset.fireworks="false"}),3e3)},toggleTypewriter:Object(m.b)({description:function(e,t){var n=Object(l.a)({},e.description);return n.typewriter=!n.typewriter,n}}),setBox:Object(m.b)({description:function(e,t,n){var o=n.action,a=Object(l.a)({},e.description);return a.x=o.x,a.y=o.y,a}}),setCountEnd:Object(m.b)({commitListStep:function(e,t){return 6}}),countUp:Object(m.b)({commitListStep:function(e,t){return e.commitListStep+1}}),countDown:Object(m.b)({commitListStep:function(e,t){return e.commitListStep-1}}),resetCount:Object(m.b)({commitListStep:function(e,t){return-1}}),resetBranchOverlay:Object(m.b)({branchOverlayStep:function(e,t){return 0}}),setBranchOverlayEnd:Object(m.b)({branchOverlayStep:function(e,t){return 9}}),incrementBranchOverlay:Object(m.b)({branchOverlayStep:function(e,t){return e.branchOverlayStep+1}}),decrementBranchOverlay:Object(m.b)({branchOverlayStep:function(e,t){return e.branchOverlayStep-1}}),setBranchOverlay:Object(m.b)({branchOverlayStep:function(e,t,n){return n.action.x}}),setCssFileStep:Object(m.b)({cssFileStep:function(e,t,n){return n.action.value}}),resetWorkingAloneCount:Object(m.b)({workingAloneCount:function(e,t){return-1}}),incrementWorkingAloneCount:Object(m.b)({workingAloneCount:function(e,t){return e.workingAloneCount+1}}),decrementWorkingAloneCount:Object(m.b)({workingAloneCount:function(e,t){return e.workingAloneCount-1}}),unlockScene:Object(m.b)({unlocks:function(e,t,n){var o=n.action,a=Object(l.a)({},e.unlocks);a[o.scene]=!0;var r=JSON.parse(localStorage.getItem("gitUnlock"));return r[o.scene]=!0,localStorage.setItem("gitUnlock",JSON.stringify(r)),a}})},O={introductionScene:h,overviewScene:g,gitignoreScene:y,commitScene:p,branchScene:v,resetCheckoutScene:w,workingAloneScene:f,githubScene:b},E=Object(l.a)({},O),B=JSON.parse(localStorage.getItem("gitUnlock"));Object.keys(E).map((function(e,t){var n;return E[e]=(null===(n=B)||void 0===n?void 0:n[e])||!1,""})),E.introductionScene=!0,localStorage.setItem("gitUnlock",JSON.stringify(Object(l.a)({},E))),B=JSON.parse(localStorage.getItem("gitUnlock"));var A={id:"gitMachine",strict:!0,initial:"introductionScene",context:{description:{x:100,y:100,typewriter:!1},unlocks:Object(l.a)({},E),commitListStep:-1,branchOverlayStep:0,cssFileStep:0,htmlFileStep:0,workingAloneCount:-1},states:Object(l.a)({},O)},T=Object(d.a)(A,{guards:k,actions:C}),j=n(12),I=n(79),L=n(80),F=n(81),M={initial:"introductionScene",states:{introductionScene:{name:"Introduction",whatIsThis:{desc:"Welcome to Gitfographic<3\n        \n        This little project is meant to help you get up and running in the crazy world of Git.\n        \n        It is not meant to teach you how to actually do all the Git stuff, but rather:\n        - give you an introduction to what it is,\n        - why we use it\n        - a vocabulary to make learning it easier\n \n        Find the next button, and click it\n \n        Btw, for now, Safari is a total NO-GO...\n        "},navigation:{desc:"Well done, you found it, did you click the up-arrow as well?\n        \n        That one gives you an overview of the \"levels\" you've completed.\n        \n        You can always jump between completed levels.\n        \n        Please read all the texts carefully, I've spent a lot of time making them short and to the point\n \n        Instead of clicking, you can use the arrow keys\n\n        Try it"},whatIsGit:{desc:'What is Git?\n        \n        Git is what is called a "version control system"\n        \n        In English that means: A system to track changes in documents.\n        \n        In our case, that means HTML / CSS / JS etc\n        \n        '},whyGit:{desc:'Git and why bother.\n        \n        "I don\'t need that" is a common objection to Git, "I can just copy my folder" is another.\n\n        And that is true, but soon that\'s going to be a real mess. \n        So let\'s take a look at the major selling points for Git:\n \n  - Git gives you "incremental backups", meaning you can make a "save game" when you feel like it\n - You can always go back to a "save game" later\n - Did you mess something up? Just go back\n - You can make different versions so you can try out ideas safely\n - You can collaborate with others WITHOUT overwriting each others work\n - With a push on a button, all your work is backed up on a service called GitHub.com"\n        '},metaphoresUsed:{desc:"I'll be using a few metaphores here and there.\n        \n        Save Games: Those are the points in time you can go back to. Technically, they are called commits.\n        \n        Timelines: Those are the different versions of your site/program etc. It's a series of those save games."},isItHard:{desc:"Is Git hard?\n        \n        Well, here's a quote I found somewhere:\n        \n        Git is \"Made by geeks, for geeks\"\n        \n        And that is the sad truth.\n        \n        BUT. It's just a matter of memorizing a few new workflows. \n\n        So if you can do that and you can be consistent in using those,\n        \n        Then the advantages outweigh the disadvantages.... a lot.\n        \n        Have fun, and ask when you're stuck\n         - Jonas"}},overviewScene:{name:"Overview",first:{desc:"From a top view, git is just\n        moving stuff between four boxes"},drawLocalBox:{desc:"Boxes on our own computer"},drawRemoteBox:{desc:"and a box up in the cloud.\nUsually GitHub"},workingArea:{desc:'The folder where we have our development files\n        is called the "working area"'},stagingArea:{desc:'The staging area is a temporary "folder"\n            Where you gather the files \n            you would like to store in the next "save game" / commit.\n            \n            We\'ll get back to what a commit is shortly'},localRepository:{desc:'The Local Repository, or local repo,\n      is where all your local \n      commits, branches etc are stored.\n    This is where your "save games" are located.\n    \n    And a branch? We\'ll get back to that'},remoteRepository:{desc:"This is your online backup,\n        it's a copy of your local repository.\n        This is also where team members\n        gets your code"},addCommand:{desc:'Files are marked to be staged using the "add" command'},addCommandMoveFile1:{desc:"You can mark individual files"},addCommandMoveFile2and3:{desc:"or multiple"},addCommandMoveFile3Back:{desc:'If you are not satisfied with your choices\n        you can "unstage" a file again'},commitCommand:{desc:'When you have staged all the files you need to\n        You can make a "save game" containing\n        - all your previous code\n        - everything you\'ve staged\n        Once commited, the staged files becomes "unstaged"'},resetCommand:{desc:'If you ever mess up, or if you\'re feeling curious.\n        \n        You can "load a previous save game" by issuing the "reset" command'},pushCommand:{desc:'To back up your work,\n        or share it with your team,\n        use the "push" command to put \n        everything online.\n        Usually on GitHub.\n        Now it\'s available for your team.\n        AND you have a copy online'},pullCommand:{desc:'To get back your code (when you\'ve messed up \n        or when a team mate has pushed something you need),\n        issue a "pull" command'},takeAScreenshot:{desc:"NOW would be a good time to take a screenshot or some notes :-)"}},gitignoreScene:{name:".gitignore",gitIgnoreSceneSet:{desc:"Let's explore our working copy a bit more\n        It's the files as they are on our computer.\n        \n        All files you add to the folder is waiting to be either \n        - tracked\n        - excluded from tracking"},gitIgnoreSceneSet2:{desc:'Tracking was done by "adding" the file. Thereby telling git to keep track of it.\n          Excluding a file is done by\n          - not adding it (which is error prone, I have added files by accident countless times)\n          - or writing the file name in a special file called ".gitignore"\n          Let\'s take a look at this file'},gitIgnoreFile:{desc:"#in this file we list the\n        #files/folders that should\n        # never be tracked, like:\n        notes.txt\n        *.psd\n        wireframes/\n        node_modules/\n        myWeekendPlans.*\n        \n        #once written here, they\n        #can no longer be added \n        #to staging"},gitIgnoreFileMovedBack:{desc:"In general, add files to .gitignore that are\n          - not needed for the project to run\n          - generated by the code\n          - not needed by other team members"}},commitScene:{name:"Commits",beforeCommits:{desc:"That was the overview. \n        Let's take a look at what happens inside the repository"},commits1:{desc:"Inside our repository, we have commits.\n          Commits are usually visualized as a circle"},commits2:{desc:"Everytime we do another commit, we're modifying a timeline"},commits3:{desc:"After two commits, our timeline looks like this"},commits4:{desc:"We can keep doing this forever"},commits5:{desc:"Don't worry, that was the last one.\n          \n          Now for the beautiful part. We can travel in time!"},commits6:{desc:"Using the reset command, we can go back to any commit we've made.\n          \n          Undoing all changes after that commit!\n          That is why I call them save games. \n          - Save before you enter the boss-fight. \n          - Save before something dangerous"},commits7:{desc:"ready to dive a bit deeper? Take a break, I'm not going anywhere!"}},branchScene:{name:"Branches",opening:{desc:'Branches allows us to make multiple timelines\n(those things with the commits)\n \n\nThis provides us with a lot of benefits:\n- When working together we can have our own timelines (no overwriting each other)\n- If a timeline fails, we can just go back, ignoring that timeline\n- We can "merge" two timelines, combining the work of developer A & B'},master:{desc:'Our initial branch is called "master"\n      (although it will at some point be renamed to main or similar).\n\n      Master should always contain working code'},branchToFeature1:{desc:'From the master branch, we can "branch out",\nor "snap a branch" as it\'s sometimes called.\n\nThe new branch is identical to the master branch at that point in time (commit)'},feature1:{desc:"We now have two separate timelines.\n        Master, that holds our working code.\n        And feature1."},feature1MergeToMaster:{desc:'When development is complete on the feature1 branch,\n        we can "merge" the code from feature1 into master.\n        \n        Now master and feature1 are identical'},branchToFeature2Cards:{desc:"Let's add another developer. \n        Each developer makes her own branch."},feature2Cards:{desc:"Three timelines!\n        \n        Master is unchanged. \n        And developer A & B can work on their own features, \n        without risking destroying each other's work!\n        \n        Bloody Awesome"},feature2MergeToMaster:{desc:"Dev A is done, and merges his code into master.\n        \n        Dev B is not done yet, and continues to work on her own branch"},branchToNav:{desc:"Dev A get's a nother task and immediately branches out.\n        \n        Dev B, well, her task is a bit bigger"},developmentComplete:{desc:"The nav branch turns out to be a dead end, \n        and it's never merged into master.\n        \n        In the meantime, developer B finishes her work\n        and merges into master"}},resetCheckoutScene:{name:"Reset / Checkout",opening:{desc:"Let's take a deeper look at how resetting works\n        \n        And then, when we get that, its best friend: checkout"},spreadOut:{desc:"Remember what the three boxes were?\n        \n        Let's do a little roleplay here"},filesAddedToProject:{desc:"You have just started a new project and have created a few files"},firstAddCommand:{desc:'You "add" both files, moving them to the staging area.\n        \n        The files in your folder are unchanged!'},firstCommitCommand:{desc:"You commit the files on master.\n        \n        And your working copy? unchanged"},firstChangeToFiles:{desc:"Your first commit is done, and you continue working on your project.\n        \n        Changing the CSS"},secondAddCommand:{desc:"You add the only file that has changed"},secondCommitCommand:{desc:"You commit your changes, \n        and your timeline now has two commits.\n        \n        Your development files? Well what do you think?\n        \n        (take a look)"},resetIntro:{desc:'Regretting your radical design changes, you wish to go back\n        And you just happens to remember that the command is called "reset".\n        \n        So, click next to reset to the previous commit'},reset:{desc:"Wow it worked. That Jonas guy must be on to something.\n        \n        You look to your left and see that your files are back to their earlier state.\n        \n        And to your right, you notice that the commit is gone. FOREVER.\n        \n        Reset is a destructive action!!\n        \n        So let's imagine we hadn't reset and learn about another command (next)"},restored:{desc:"With a long line of commits, it's hard to remember which one to reset to.\n        \n        That's why we have the \"checkout\" command.\n        \n        Checkout changes out working files so we can see what we had at that time.\n        \n        But it does NOT change out timeline (we're going back in time?)"},checkout:{desc:"See your files and your timeline? \n        The files are reverted, and I've indicated that the timeline is still there \n        by making it opaque"},ending:{desc:"Being very perceptive, and feeling awefully good about yourself, \n        you realize that the best idea is to\n        1. Use checkout to find the commit you're looking for\n        2. THEN use reset to go back to that point"}},workingAloneScene:{name:"Working Alone",opening:{desc:"When working alone there are a few best practices you should remember"},countLoop:{desc:"This is my suggested workflow"},ending:{desc:"How you do it exactly is not the most important thing.\n        \n        And most companies have their own way. \n        \n        But being consistent WILL help you in the long run.\n        \n        As long as you remember to commit and push, your work is saved and can be restored"}},githubScene:{name:"GitHub",opening:{desc:"The remote repository serves (at least) two purposes.\n        - it is our online backup\n        - it is how we share code with our team.\n        \n        Let's take a look at a few words we need to know"},github:{desc:"GitHub: \n        \n        We have chosen GitHub (github.com) as our remote repository.\n        \n        It is the most widely used, and it's free.\n        \n        I just wanted you to know that alternatives exists"},pushing:{desc:'Push:\n        \n        Pushing was the act of "uploading" our code to the server'},pulling:{desc:"Pull:\n        \n        Pull was how we downloaded the code again"},cloning:{desc:'Cloning:\n        \n        That one we havn\'t covered yet.\n        Cloning means "take a remote repository and download the files"\n        \n        The diference between pulling and cloning is subtle.\n        \n        Cloning is something you do once (initially), \n        whereas pulling is done whenever there are changes in the remote'}}}};function W(e){var t=e.setLevelsOpen,n=Object(o.useContext)(s.a),r=Object(j.a)(n,2),i=r[0],c=r[1];return a.a.createElement("ol",{className:"levels"},a.a.createElement("li",null,a.a.createElement("button",{disabled:!i.context.unlocks.introductionScene,onClick:function(){t(!1),c("introductionScene")}},i.context.unlocks.introductionScene?"Introduction":"Locked")),a.a.createElement("li",null,a.a.createElement("button",{disabled:!i.context.unlocks.overviewScene,onClick:function(){t(!1),c("overviewScene")}},i.context.unlocks.overviewScene?"Overview":"Locked")),a.a.createElement("li",null,a.a.createElement("button",{disabled:!i.context.unlocks.gitignoreScene,onClick:function(){t(!1),c("gitignoreScene")}},i.context.unlocks.gitignoreScene?".gitignore":"Locked")),a.a.createElement("li",null,a.a.createElement("button",{disabled:!i.context.unlocks.commitScene,onClick:function(){t(!1),c("commitScene")}},i.context.unlocks.commitScene?"Commits":"Locked")),a.a.createElement("li",null,a.a.createElement("button",{disabled:!i.context.unlocks.branchScene,onClick:function(){t(!1),c("branchScene")}},i.context.unlocks.branchScene?"Branches":"Locked")),a.a.createElement("li",null,a.a.createElement("button",{disabled:!i.context.unlocks.resetCheckoutScene,onClick:function(){t(!1),c("resetCheckoutScene")}},i.context.unlocks.resetCheckoutScene?"Reset / Checkout":"Locked")),a.a.createElement("li",null,a.a.createElement("button",{disabled:!i.context.unlocks.workingAloneScene,onClick:function(){t(!1),c("workingAloneScene")}},i.context.unlocks.workingAloneScene?"Working Alone":"Locked")),a.a.createElement("li",null,a.a.createElement("button",{disabled:!i.context.unlocks.githubScene,onClick:function(){t(!1),c("githubScene")}},i.context.unlocks.githubScene?"GitHub":"Locked")),a.a.createElement("li",{className:"close"},a.a.createElement("button",{onClick:function(){return t(!1)}},"X")))}function U(e){var t=Object(o.useContext)(s.a),n=Object(j.a)(t,2),r=n[0],i=n[1],c=Object(o.useState)(!1),l=Object(j.a)(c,2),d=l[0],m=l[1];Object(o.useEffect)((function(){function e(e){document.body.dataset.fireworks&&"false"!==document.body.dataset.fireworks||(" "===e.key||"ArrowRight"===e.key?i("next"):"ArrowLeft"===e.key?i("prev"):"ArrowUp"===e.key?m(!0):"ArrowDown"===e.key&&m(!1))}function t(e){(" "===e.key||"ArrowDown"===e.key&&d)&&e.preventDefault()}return window.addEventListener("keyup",e),window.addEventListener("keydown",t),function(){window.removeEventListener("keyup",e),window.removeEventListener("keydown",t)}}));var u=M.states[r.toStrings()[0]].name,h=(d?"open":"")+" navWrapper";return a.a.createElement("div",{className:h},a.a.createElement(W,{setLevelsOpen:m}),a.a.createElement("nav",null,a.a.createElement("h2",null,u),a.a.createElement("button",{onClick:function(){return m(!d)}},a.a.createElement(I.a,{className:"up",size:50})),a.a.createElement("button",{disabled:!r.nextEvents.includes("prev"),onClick:function(){return i("prev")}},a.a.createElement(L.a,{className:"prev",size:50})),a.a.createElement("button",{disabled:!r.nextEvents.includes("next"),onClick:function(){return i("next")}},a.a.createElement(F.a,{className:"next",size:50}))))}function G(){return a.a.createElement("defs",null,a.a.createElement("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"8",refY:"3.5",orient:"auto"},a.a.createElement("polygon",{points:"0 0, 10 3.5, 0 7"})))}var N=n(48);function D(e){var t=e.x,n=e.y,o=e.text,r=Object(N.useSpring)({from:{transform:"translate(100px, 100px)"},to:{transform:"translate(".concat(t,"px, ").concat(n,"px)")},config:{duration:200}});return o?a.a.createElement(N.animated.g,{id:"Description",style:r},a.a.createElement("text",{x:0,y:0},o.split("\n").map((function(e,t){return a.a.createElement("tspan",{key:t,x:0,dy:"1.2em"},e)})))):a.a.createElement("g",{id:"Description",style:r})}function R(e){var t=e.x,n=e.y,r=e.text,i=e.startDelay,c=e.doneCallback,s=Object(o.useState)(0),l=Object(j.a)(s,2),d=l[0],m=l[1],u=Object(o.useState)(""),h=Object(j.a)(u,2),g=h[0],y=h[1],p=Object(o.useState)(!1),v=Object(j.a)(p,2),w=v[0],f=v[1],b=15;return Object(o.useEffect)((function(){setTimeout((function(){f(!0)}),i)}),[i]),function(e,t){var n=Object(o.useRef)();Object(o.useEffect)((function(){n.current=e}),[e]),Object(o.useEffect)((function(){if(t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){w&&(m(d+1),y(r.slice(0,d)),d>r.length&&(b=null,c()))}),b),r?a.a.createElement("g",{id:"TypewriterDescription",transform:"translate(".concat(t," ").concat(n,")")},a.a.createElement("text",{x:t,y:n},g.split("\n").map((function(e,t){return a.a.createElement("tspan",{key:t,x:0,dy:"1.2em"},e)})))):a.a.createElement("g",{transform:"translate(".concat(t," ").concat(n,")")})}function H(){return a.a.createElement("g",{className:"GitLogo",transform:"matrix(1.25,0,0,-1.25,0,114.8625)"},a.a.createElement("g",{transform:"scale(0.1,0.1)"},a.a.createElement("path",{d:"M 901.547,500.352 500.355,901.527 c -23.093,23.11 -60.566,23.11 -83.691,0 L 333.363,818.211 439.039,712.535 c 24.559,8.293 52.723,2.727 72.293,-16.847 19.688,-19.696 25.207,-48.102 16.699,-72.75 L 629.887,521.094 c 24.648,8.496 53.066,3.004 72.754,-16.711 27.5,-27.492 27.5,-72.059 0,-99.574 -27.52,-27.516 -72.078,-27.516 -99.61,0 -20.683,20.703 -25.801,51.097 -15.312,76.582 l -95,94.992 0,-249.969 c 6.699,-3.32 13.027,-7.742 18.613,-13.312 27.5,-27.497 27.5,-72.059 0,-99.598 -27.5,-27.488 -72.09,-27.488 -99.57,0 -27.5,27.539 -27.5,72.101 0,99.598 6.797,6.789 14.668,11.925 23.066,15.363 l 0,252.281 c -8.398,3.438 -16.25,8.531 -23.066,15.367 -20.828,20.821 -25.84,51.395 -15.157,76.977 L 292.426,777.285 17.3281,502.211 c -23.10544,-23.129 -23.10544,-60.602 0,-83.711 L 418.539,17.3242 c 23.098,-23.10545 60.559,-23.10545 83.691,0 L 901.547,416.641 c 23.117,23.113 23.117,60.605 0,83.711"})))}n(72);function Y(){return a.a.createElement("g",{id:"sceneIntroduction"},a.a.createElement(H,null))}var z=a.a.lazy((function(){return n.e(4).then(n.bind(null,94))})),J=a.a.lazy((function(){return n.e(3).then(n.bind(null,92))})),P=a.a.lazy((function(){return n.e(6).then(n.bind(null,95))})),q=a.a.lazy((function(){return n.e(5).then(n.bind(null,96))})),X=a.a.lazy((function(){return n.e(8).then(n.bind(null,97))})),Z=a.a.lazy((function(){return n.e(9).then(n.bind(null,98))})),V=a.a.lazy((function(){return n.e(7).then(n.bind(null,93))}));function $(e){e.children;var t,n,r=Object(o.useContext)(s.a),i=Object(j.a)(r,1)[0],c=i.toStrings(),l=Object(j.a)(c,2),d=l[0],m=l[1],u=m&&m.split(".")[1]||"";document.body.dataset.parentstate=d,document.body.dataset.substate=u||"";var h=(null===(t=M.states[d])||void 0===t||null===(n=t[u])||void 0===n?void 0:n.desc)||M.states[d].desc;return a.a.createElement("svg",{id:"viz",viewBox:"0 0 1000 500",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement(G,null),i.matches("introductionScene")&&a.a.createElement(Y,null),i.matches("overviewScene")&&a.a.createElement(o.Suspense,{fallback:a.a.createElement("div",null,"Loading...")},a.a.createElement(z,null)),i.matches("gitignoreScene")&&a.a.createElement(o.Suspense,{fallback:a.a.createElement("div",null,"Loading...")},a.a.createElement(J,null)),i.matches("commitScene")&&a.a.createElement(o.Suspense,{fallback:a.a.createElement("div",null,"Loading...")},a.a.createElement(P,null)),i.matches("branchScene")&&a.a.createElement(o.Suspense,{fallback:a.a.createElement("div",null,"Loading...")},a.a.createElement(q,null)),i.matches("resetCheckoutScene")&&a.a.createElement(o.Suspense,{fallback:a.a.createElement("div",null,"Loading...")},a.a.createElement(X,null)),i.matches("workingAloneScene")&&a.a.createElement(o.Suspense,{fallback:a.a.createElement("div",null,"Loading...")},a.a.createElement(Z,null)),i.matches("githubScene")&&a.a.createElement(o.Suspense,{fallback:a.a.createElement("div",null,"Loading...")},a.a.createElement(V,null)),!i.context.description.typewriter&&a.a.createElement(D,{x:i.context.description.x,y:i.context.description.y,text:h}),i.context.description.typewriter&&a.a.createElement(R,{x:i.context.description.x,y:i.context.description.y,text:h,typewriter:i.context.description.typewriter,startDelay:2e3,doneCallback:function(e){}}))}function _(){var e=Object(o.useState)(!1),t=Object(j.a)(e,2),n=t[0],r=t[1];return a.a.createElement("label",{className:"switch"},a.a.createElement("input",{type:"checkbox",checked:n,onChange:function(e){r(e.target.checked),e.target.checked?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode")}}),a.a.createElement("span",{className:"slider round"}))}n(73),n(74);var K=function(){var e=Object(c.useMachine)(T);return a.a.createElement("div",{className:"App"},a.a.createElement(s.b,{machineInstance:e},a.a.createElement(U,null),a.a.createElement($,null),a.a.createElement("footer",null,a.a.createElement(_,null)," Dark mode (experimental, stuff might be missing)")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.3bb4dd77.chunk.js.map