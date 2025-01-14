//<script type="text/javascript" src="./content.js"></script>
//<base target="_blank">
var ws_Topics =  [
	{ "name": "hotmail", "url": "https://outlook.live.com", "memo": ""},

	{ "name": "kali.training", "url": "https://kali.training", "memo": ""},
	{ "name": "开发者武器库", "url": "https://devtool.tech/", "memo": ""},

	{ "name": "gitclone", "url": "https://gitclone.com/", "memo": "."},
	{ "name": "HelloGitHub", "url": "https://github.com/521xueweihan/HelloGitHub", "memo": "."},
	{ "name": "HelloGitHub - host", "url": "https://raw.hellogithub.com/hosts", "memo": "."},
	{ "name": "GitHubDaily", "url": "https://github.com/GitHubDaily/GitHubDaily", "memo": "."},

	/* xr news */
	{ "name": "映维网-快讯", "url": "https://news.nweon.com/xr", "memo": ""},
	{ "name": "掘金网", "url": "https://juejin.cn/", "memo": "."},
	{ "name": "慕课网", "url": "https://www.imooc.com/", "memo": "."},
	{ "name": "极客时间", "url": "https://time.geekbang.org/columns", "memo": "."},

	{ "name": "Bellard-Blog", "url": "https://bellard.org/", "memo": "."},
];

var wl_OverseaTech = [
	{ "name":"ACCU", "url": "https://www.accu.org", "memo": ""},
	{ "name":"ioccc", "url": "https://www.ioccc.org", "memo": ""},
	{ "name":"js13kgames", "url": "https://js13kgames.com/", "memo": ""},
	{ "name":"Gmail", "url": "https://mail.google.com", "memo": ""},
	{ "name":"r/prgramming", "url": "https://www.reddit.com/r/programming/", "memo": "."},
	{ "name":"r/gamedev", "url": "https://www.reddit.com/r/gamedev/", "memo": "."},
	{ "name":"medium", "url": "https://medium.com/", "memo": "."},
	{ "name":"ycombinator", "url": "https://news.ycombinator.com/", "memo": "."},
	{ "name":".quora.", "url": "https://www.quora.com/", "memo": "."},
	{ "name":"Maxidea极创意", "url": "https://www.youtube.com/channel/UCYUR8tqC_492K1TrD5rS59g", "memo": "."},
	{ "name":"gadgets360", "url": "https://gadgets.ndtv.com/mobiles/news", "memo": "."},
	{ "name":"venturebeat", "url": "https://venturebeat.com/", "memo": "."},
	{ "name":"Twitter", "url": "https://twitter.com/", "memo": "."},
];

var ws_WebTech =  [	
	{ "name": "MDN-docs", "url": "https://developer.mozilla.org/en-US/docs/Web", "memo": ""},
	{ "name": "Mozilla Blog", "url": "https://blog.mozilla.org/", "memo": ""},
	{ "name": "Opera Blog", "url": "https://blogs.opera.com/news/", "memo": ""},
	{ "name": "Chromium Blog", "url": "https://blog.chromium.org/", "memo": ""},
	{ "name": "CSS-Tricks", "url": "https://css-tricks.com/", "memo": "."},

	{ "name": "ExtFans", "url": "https://www.extfans.com/", "memo": "."},
	{ "name": "html5test", "url": "https://html5test.com", "memo": "."},
	{ "name": "WebGL_API", "url": "https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API", "memo": "."},
	{ "name": "W3C-Weekly-News", "url": "https://www.w3.org/News/Public/", "memo": "."},

	{ "name": "killed-by-google", "url": "https://killedbygoogle.com/", "memo": "."},
	{ "name": "smashingmagazine", "url": "https://www.smashingmagazine.com/", "memo": "."},
];

var ws_XRLins =  [
	/* webxr app */
	{ "name": "a-painter", "url": "https://aframe.io/a-painter/", "memo": ""},
	{ "name": "WebXR-Glitch", "url": "https://webxr-experiment.glitch.me/", "memo": ""},
	
	/* webxr test case */
	{ "name": "WebXR-Samples", "url": "https://immersive-web.github.io/webxr-samples/", "memo": ""},
	{ "name": "360Video", "url": "https://www.youtube.com/watch?v=hNAbQYU0wpg", "memo": ""},
	{ "name": "WebXR-Game", "url": "https://webxr.games/", "memo": ""},
	
	/* webxr news */
	{ "name": "WebXR News", "url": "https://webxrnews.com/", "memo": ""},
	{ "name": "Road-to-VR", "url": "https://www.roadtovr.com/", "memo": ""},
	{ "name": "Upload-VR", "url": "https://uploadvr.com/", "memo": ""},

	/* webxr dev */
	{ "name": "MDN-WebXR", "url": "https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API", "memo": ""},
	{ "name": "G-WebXR-Dev", "url": "https://web.dev/tags/webxr/", "memo": ""},
	{ "name": "Immersive-Web", "url": "https://immersiveweb.dev/", "memo": ""},
	{ "name": "XR-Swim", "url": "https://xrswim.com/", "memo": ""},
];

var ws_ChromiumBrowser =  [
	{ "name": "谷歌中文", "url": "https://developers.google.cn/", "memo": ""},
	{ "name": "Chrome-Status", "url": "https://www.chromestatus.com/features", "memo": ""},
	{ "name": "Chromium", "url": "https://github.com/chromium/chromium/", "memo": ""},
	{ "name": "Android-Dev", "url": "https://developer.android.google.cn/", "memo": ""},
	// CEF
	{ "name": "CEF-Download", "url": "https://cef-builds.spotifycdn.com/index.html", "memo": "."},
	{ "name": "CEF-Github", "url": "https://github.com/chromiumembedded/cef", "memo": "."},
	// WPE
	{ "name": "Flatpak-WPE", "url": "https://wpewebkit.org/about/flatpak.html", "memo": "."},
	// Electron
	{ "name": "ElectronJS", "url": "https://www.electronjs.org/", "memo": "."},
	// Utilities
	{ "name": "Windows-cmd", "url": "https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/dir", "memo": "."},
	{ "name": "Batch-guide", "url": "https://www.tutorialspoint.com/batch_script/batch_script_quick_guide.htm", "memo": "."},
	{ "name": "离线Chrome下载", "url": "https://www.iplaysoft.com/tools/chrome/", "memo": "."},
];

var ws_QuickSearch =  [
	{ "name": "papers-with-code", "url": "https://paperswithcode.com/", "memo": "."},
	{ "name": "科塔学术", "url": "https://site.sciping.com/", "memo": ""},
	{ "name": "rfc-html", "url": "https://tools.ietf.org/html/rfc1866", "memo": ""},
	{ "name": "arXiv", "url": "https://arxiv.org/", "memo": ""},
	{ "name": "Wikipedia", "url": "https://en.wikipedia.org/wiki/Main_Page", "memo": "."},
	{ "name": "learn-anything", "url": "https://learn-anything.xyz/", "memo": "."},
	{ "name": "learn-x-in-y-mins", "url": "https://learnxinyminutes.com/", "memo": "."},

	{ "name": "yandex", "url": "https://yandex.com/", "memo": ""},
	{ "name": "MBALib-智库", "url": "http://wiki.mbalib.com/wiki/", "memo": "."},
	{ "name": "Bing", "url": "https://www.bing.com/", "memo": ""},
	{ "name": "Sogou", "url": "https://www.sogou.com", "memo": ""},
	{ "name": "百度学术", "url": "http://xueshu.baidu.com/", "memo": "."},
];

var ws_ProgrammingLang = [
	{ "name": "牛客网-找工作神器", "url": "https://www.nowcoder.com/", "memo": ""},
	{ "name": "Leetcode", "url": "https://leetcode.com/", "memo": ""},
	{ "name": "Kaggle", "url": "https://www.kaggle.com/", "memo": ""},

	{ "name":"awesome-cloudnative", "url": "https://github.com/wh211212/awesome-cloudnative", "memo": "."},
	{ "name":"LLVM-Ref", "url": "https://llvm.org/docs/LangRef.html", "memo": "."},
	{ "name":"type-script", "url": "https://www.typescriptlang.org/", "memo": "."},
	{ "name":"code-mentor", "url": "https://www.codementor.io/", "memo": "."},
	{ "name":"devrant", "url": "https://devrant.com/", "memo": "."},

	// ws_CodingQuiz 
	{ "name": "Rust-playground", "url": "https://play.rust-lang.org/", "memo": ""},
	{ "name": "- KDD -", "url": "https://www.kdd.org/", "memo": ""},
	{ "name": "蓝桥杯", "url": "http://www.lanqiao.org/", "memo": ""},
	{ "name": "OI-dotcpp", "url": "https://www.dotcpp.com/oj/", "memo": ""},
	{ "name": "九章算法", "url": "http://www.jiuzhang.com/", "memo": ""},
	{ "name": "qwiklabs", "url": "https://run.qwiklabs.com/", "memo": ""},
	{ "name": "nathansmith", "url": "https://github.com/nathansmith/javascript-quiz", "memo": ""},
	{ "name": "ECMA262-quiz", "url": "http://dmitrysoshnikov.com/ecmascript/the-quiz/", "memo": ""},
	{ "name": "nczonline", "url": "http://www.nczonline.net/blog/2010/02/16/my-javascript-quiz/", "memo": ""},
	{ "name": "Perfection-kills", "url": "http://perfectionkills.com/javascript-quiz/", "memo": ""},
];

var ws_SoftwareNews = [
	{ "name":"Solidot", "url": "http://www.solidot.org/", "memo": "."},
	{ "name":"博客园", "url": "https://news.cnblogs.com/", "memo": "."},
	{ "name":"小众软件", "url": "https://www.appinn.com/", "memo": "."},
	{ "name":"少数派", "url": "https://sspai.com", "memo": "."},
	// "科技新闻"
	{ "name":"0DayDown", "url": "http://www.0daydown.com/", "memo": "."},
	{ "name":"水木社区", "url": "https://www.mysmth.net/", "memo": "."},

	{ "name":"cnet", "url": "https://www.cnet.com/topics/mobile/", "memo": "."},
	{ "name":"techradar", "url": "https://www.techradar.com/news/phone-and-communications/mobile-phones", "memo": "."},
	{ "name":"DigitalTV Europe", "url": "https://www.digitaltveurope.com/news/", "memo": "."},	
	{ "name":"slashdot", "url": "https://slashdot.org/", "memo": "."},
	{ "name":"TechNode", "url": "https://technode.com/", "memo": "."},
	{ "name":"infoQ", "url": "http://www.infoq.com/", "memo": "."},
	{ "name":"hackernoon", "url": "https://hackernoon.com/", "memo": "."},
	{ "name":"segmentFault", "url": "https://segmentfault.com/", "memo": "."}, 
	{ "name":"SE-daily", "url": "https://softwareengineeringdaily.com/", "memo": "."}, 
];

var ws_ProductNews = [
	{ "name":"dog250-通信", "url": "https://blog.csdn.net/dog250", "memo": "."},
	{ "name":"DigitalTV News", "url": "http://www.digitaltvnews.net/", "memo": "."},
	{ "name":"network-world", "url": "https://www.networkworld.com/", "memo": "."},
	{ "name":"computer-world", "url": "https://www.computerworld.com/", "memo": "."},
	{ "name":"电信c114", "url": "http://www.c114.com.cn", "memo": "."},
	{ "name":"中广互联", "url": "http://www.tvoao.com/", "memo": "."},
	{ "name":"IDC圈", "url": "http://www.idcquan.com", "memo": "."},
	{ "name":"顺电", "url": "https://www.sundan.com/", "memo": "."},
	{ "name":"dailydot", "url": "https://www.dailydot.com/", "memo": "."},

	{ "name":"zdnet", "url": "https://www.zdnet.com/", "memo": "."},
	{ "name":"arstechnica", "url": "https://arstechnica.com/", "memo": "."},
	{ "name":"TheVerge", "url": "https://www.theverge.com/", "memo": "."},
	{ "name":"wired", "url": "https://www.wired.com/", "memo": "."},
	{ "name":"Mashable", "url": "https://mashable.com/", "memo": "."},
	{ "name":"eBay", "url": "https://www.ebay.com/", "memo": "."},
];

var ws_DevConsole = [
	{ "name":"Azure Portal", "url": "https://portal.azure.com/", "memo": "."},
	{ "name":"-AWS-", "url": "https://console.aws.amazon.com", "memo": "."},
	{ "name":"-GCP-", "url": "https://console.cloud.google.com", "memo": "."},
	{ "name":"ali-yun", "url": "https://home.console.aliyun.com", "memo": "."},
	{ "name":"tencent-cloud", "url": "https://intl.cloud.tencent.com/login", "memo": "."},
	{ "name":"AppleDev", "url": "https://developer.apple.com/develop/", "memo": "."},

	{ "name":"MS-Docs", "url": "https://docs.microsoft.com/en-us/", "memo": "."},
	{ "name":"Wins-Central", "url": "https://www.windowscentral.com/", "memo": "."},
	{ "name":"-LFS-", "url": "http://www.linuxfromscratch.org/", "memo": "."},
	{ "name":"谷歌开发社区", "url": "https://chinagdg.org/blog/", "memo": "."},
]; 

var ws_BuinessDev = [
	{ "name":"雪球网", "url": "https://xueqiu.com/", "memo": "."},
	{ "name":"艾瑞网", "url": "http://news.iresearch.cn/", "memo": "."},
	{ "name":"quandl", "url": "https://www.quandl.com/", "memo": "."},

	{ "name":"创头条", "url": "http://www.ctoutiao.com", "memo": "."},
	{ "name":"哈佛商业评论", "url": "https://www.hbrchina.org/", "memo": "."},
	{ "name":"看商界", "url": "http://www.kanshangjie.com/", "memo": "."},
	{ "name":"品途商业评论", "url": "https://www.pintu360.com/", "memo": "."},
	// DomesticNews
	{ "name":"南方周末", "url": "http://www.infzm.com/", "memo": "."},
	{ "name":"三联生活周刊", "url": "http://www.lifeweek.com.cn/", "memo": "."},
	{ "name":"FT中文网", "url": "http://www.ftchinese.com/", "memo": "."}, // TODO
	{ "name":"联合早报", "url": "http://www.zaobao.com", "memo": "."},

	// IOT
	{ "name": "IoT Journal", "url": "http://www.iotjournal.com/", "memo": ""},
	{ "name": "IoT Tech", "url": "http://www.iottech.dk/", "memo": ""},
	{ "name": "postscapes IoT guide", "url": "https://www.postscapes.com/internet-of-things-technologies/", "memo": ""},
	{ "name": "中国物联网", "url": "http://iot.ofweek.com/", "memo": ""},
	{ "name": "知乎-物联网", "url": "https://www.zhihu.com/topic/19551271/hot", "memo": ""},
	{ "name": "物联网智能家居系统实现", "url": "https://www.zhihu.com/question/264323254/answer/279812979", "memo": ""},

	// Product News 
	{ "name":"深圳湾", "url": "https://www.shenzhenware.com/", "memo": "."},
	{ "name":"虎嗅网", "url": "https://www.huxiu.com/", "memo": "."},
	{ "name":"36Kr", "url": "http://36kr.com/", "memo": "."},
	{ "name":"Kickstarter", "url": "https://www.kickstarter.com/", "memo": "."},
	{ "name":"快公司", "url": "https://www.fastcompany.com/", "memo": "."},
	{ "name":"curiosity-stream", "url": "https://curiositystream.com/", "memo": "."},
	{ "name":"ifanr", "url": "http://www.ifanr.com/", "memo": "."},
	{ "name":"pmcaff", "url": "http://www.pmcaff.com/", "memo": "."},
	{ "name":"IT经理网", "url": "https://www.ctocio.com/", "memo": "."},
	{ "name":"IDC-Analyze The Future", "url": "https://www.idc.com/", "memo": "."},
	{ "name":"gartner", "url": "https://www.gartner.com/en", "memo": "."},
	{ "name":"emarketer", "url": "https://www.emarketer.com/articles/", "memo": "."},
	{ "name":"statista", "url": "https://www.statista.com", "memo": "."},
	{ "name":"找类似网站", "url": "https://www.similarsites.com/", "memo": "."},
];

var ws_UEX = [
	{ "name":"红点设计", "url": "http://www.red-dot.sg/zh/", "memo": "."},
	{ "name":"ECharts", "url": "https://echarts.apache.org/zh/index.html", "memo": "."},
	{ "name":"Naotu", "url": "https://naotu.baidu.com/", "memo": "."},
	{ "name":"ProcessOn", "url": "https://www.processon.com", "memo": ""},
	{ "name":"GraphFree", "url": "http://www.graphfree.com/", "memo": "."},
	{ "name":"DrawIo", "url": "https://www.draw.io/", "memo": "."},
	{ "name":"plantuml", "url": "http://plantuml.com/", "memo": "."},
	{ "name":"graphviz", "url": "http://graphviz.org", "memo": "."},
	{ "name":"protoPencil", "url": "https://pencil.evolus.vn/", "memo": "."},
	{ "name":"gliffy", "url": "https://www.gliffy.com", "memo": "."},
	{ "name":"gephi", "url": "https://gephi.org/", "memo": "."},
	{ "name":"Dribbble", "url": "http://dribbble.com/", "memo": "."},
];

var ws_SystemSecurity = [
	{ "name":"首单 - ShoDan", "url": "https://www.shodan.io/", "memo": "."},
	{ "name":"Kali-Linux", "url": "https://www.kali.org/", "memo": "."},
	{ "name":"Vulnhub", "url": "https://vulnhub.com/", "memo": "."},
	{ "name":"Live-Overflow", "url": "https://liveoverflow.com/", "memo": "."},
	{ "name":"CTF领域指南", "url": "https://www.kancloud.cn/wizardforcel/ctf-field-guide/141826", "memo": "."},
	{ "name":"吾爱破解", "url": "https://www.52pojie.cn", "memo": "."},
	{ "name":"看雪学院", "url": "https://www.kanxue.com/", "memo": "."},
	{ "name":"易破解", "url": "http://www.ypojie.com/", "memo": "."},
	{ "name":"- OWASP -", "url": "https://www.owasp.org", "memo": "."},
	{ "name":"CVE Entries", "url": "http://cve.mitre.org/", "memo": "."},
	{ "name":"Torrent Freak", "url": "https://torrentfreak.com/", "memo": "."},
	{ "name":"IDA-pro", "url": "https://hex-rays.com/", "memo": "."},
	{ "name":"Pentest-tools", "url": "https://pentest-tools.com/home", "memo": "."},
	{ "name":"FreeBuf", "url": "http://www.freebuf.com/", "memo": "."},
	{ "name":"cyberciti", "url": "https://www.cyberciti.biz/", "memo": "."},
	{ "name":"Seebug", "url": "https://www.seebug.org/", "memo": "."},
	{ "name":"Blackhat", "url": "https://www.blackhat.com/", "memo": "."},
	{ "name":"安全脉搏", "url": "https://www.secpulse.com/", "memo": "."},
	{ "name":"安全客", "url": "https://www.anquanke.com/", "memo": "."},
];

var ws_BlogsOnlineEdu = [
	{ "name":"酷壳", "url": "http://coolshell.cn/", "memo": "."},
	{ "name":"RaymondCamden", "url": "http://www.raymondcamden.com/", "memo": ""},

	{ "name":"云风", "url": "https://blog.codingnow.com/", "memo": "."},
	{ "name":"月光博客", "url": "https://www.williamlong.info", "memo": "."},
	{ "name":"Kyle", "url": "https://kyle.ai", "memo": "."},
	{ "name":"廖雪峰", "url": "http://www.liaoxuefeng.com/", "memo": "."},

	{ "name":"DataCamp", "url": "https://www.datacamp.com/", "memo": "."},
	{ "name":"Udacity", "url": "https://classroom.udacity.com/", "memo": "."},
	{ "name":"Coursera", "url": "https://www.coursera.org/", "memo": "."},
	{ "name":"objc中国", "url": "https://objccn.io/", "memo": "."},
	{ "name":"网易公开课", "url": "http://open.163.com/", "memo": "."},

	{ "name":"王垠", "url": "http://www.yinwang.org/", "memo": "."},
	{ "name":"nalaginrut", "url": "https://nalaginrut.com/index", "memo": ""},
	{ "name":"szdiy", "url": "http://szdiy.org/", "memo": ""},
];

var ws_HardwareDev = [
	// Hardware IP/EDA
	{ "name":"circuito-io", "url": "https://www.circuito.io", "memo": "."},
	{ "name":"OpenCores", "url": "https://opencores.org/", "memo": "."},
	{ "name":"96Boards", "url": "https://www.96boards.org/", "memo": "."},
	{ "name":"waveshare", "url": "https://www.waveshare.com/", "memo": "."},

	// EE News 
	{ "name":"电子工程专辑", "url": "http://www.eet-china.com/", "memo": "."},
	{ "name":"eeworld", "url": "http://www.eeworld.com.cn/", "memo": "."},
	{ "name":"EDA工具与设计资讯", "url": "https://www.ednchina.com/", "memo": "."},

	// Hardware Dev Forum 
	{ "name":"华秋-电子发烧友", "url": "http://www.elecfans.com/", "memo": "."},
	{ "name":"野火电子论坛", "url": "http://www.firebbs.cn/forum.php", "memo": "."},
	{ "name":"正点原子", "url": "http://www.openedv.com/", "memo": "."},
	{ "name":"电路城", "url": "https://www.cirmall.com/", "memo": "."},
	{ "name":"面包板社区", "url": "https://mbb.eet-china.com/", "memo": "."},
];

var ws_GameDev = [
	{ "name":"MDN-Game-Dev", "url": "https://developer.mozilla.org/en-US/docs/Games", "memo": "."},
	{ "name":"Indie-Nova", "url": "https://indienova.com/", "memo": "."},
	{ "name":"Game-Res", "url": "https://www.gameres.com/", "memo": "."},
	{ "name":"nga-泥潭", "url": "https://bbs.nga.cn/", "memo": "."},
	{ "name":"TapTap-发现好游戏", "url": "https://www.taptap.com/", "memo": "."},
	{ "name":"4399页游", "url": "http://www.4399.com/", "memo": "."},
	{ "name":"CrazyGames", "url": "https://www.crazygames.com/", "memo": "."},
	{ "name":"游戏开发-知乎", "url": "https://www.zhihu.com/search?type=content&q=%E6%B8%B8%E6%88%8F%E5%BC%80%E5%8F%91", "memo": "."},
	{ "name":"游戏社区-腾讯", "url": "https://www.ign.com.cn/", "memo": "."},

	// Game dev forum 
	{ "name":"gamasutra", "url": "https://www.gamasutra.com/", "memo": "."},
	{ "name":"Gamedev", "url": "https://www.gamedev.net/", "memo": "."},
	
	{ "name":"gamedev.stackexchange", "url": "https://gamedev.stackexchange.com/", "memo": "."},
	{ "name":"tig/forums", "url": "https://forums.tigsource.com/index.php", "memo": "."},
	{ "name":"kaidus-community", "url": "http://kaidus.com/community/", "memo": "."},
	{ "name":"indie-gamer", "url": "http://forums.indiegamer.com/", "memo": "."},

	{ "name":"pinoy-gamer", "url": "https://pinoygamer.ph/", "memo": "."},
	{ "name":"pixelprospector", "url": "https://pixelprospector.com", "memo": "."},

	// game engine provider
	{ "name":"godot-engine", "url": "https://godotengine.org", "memo": "."},
	{ "name":"Unity3d", "url": "https://unity3d.com/", "memo": "."},
	{ "name":"Unreal", "url": "https://unrealengine.com/", "memo": "."},
	{ "name":"cocos2d-x", "url": "https://cocos2d-x.org/", "memo": "."},
	{ "name":"Allegro", "url": "https://liballeg.org/", "memo": "."},
];
var ws_BrowserDev = [
	{ "name":"webkit", "url": "https://webkit.org", "memo": "."},
	{ "name":"Mozilla", "url": "https://www.mozilla.org/en-US/firefox/developer/", "memo": "."},
	{ "name":"chromium-dev", "url": "https://www.chromium.org/getting-involved/dev-channel", "memo": "."},
	{ "name":"chrome-extension", "url": "https://developer.chrome.com/home", "memo": "."},
	{ "name":"qt5-dev", "url": "https://doc.qt.io/qt-5/", "memo": "."},
	{ "name":"http-archive", "url": "https://httparchive.org", "memo": "."},
	
	//ws_HTMLTech
	{ "name":"jscompress-online", "url": "https://jscompress.com/", "memo": "."}, 
	{ "name":"packer-online", "url": "http://dean.edwards.name/packer/", "memo": "."}, 
	{ "name":"yuicompressor", "url": "https://yui.github.io/yuicompressor/", "memo": "."}, 

	{ "name": "WHATWG", "url": "https://whatwg.org/", "memo": "."},
	{ "name": "HTML-URL编码", "url": "http://www.w3school.com.cn/tags/html_ref_urlencode.html", "memo": ""},
	{ "name": "W3CSS Test", "url": "https://www.w3.org/Style/CSS/Test/", "memo": "."},
	{ "name": "w3c-test", "url": "https://github.com/w3c", "memo": "."},
	{ "name": "videojs", "url": "https://github.com/videojs/", "memo": ""},
	{ "name": "yay-github", "url": "https://github.com/yay", "memo": ""},

	{ "name": "MathML-ts", "url": "https://www.w3.org/Math/testsuite/", "memo": "."},
];


var wl_ComputerScience = [
	{ "name": "Turing Award", "url": "https://amturing.acm.org/", "memo": ""},
	{ "name": "acm-queue", "url": "https://queue.acm.org/", "memo": ""},
	{ "name": "learn-computer-science", "url": "https://learn-anything.xyz/computer-science", "memo": ""},
	{ "name": "learn-computer-vision", "url": "https://learn-anything.xyz/computer-vision", "memo": ""},

	{ "name": "Mark Miodownik", "url": "http://www.markmiodownik.net/", "memo": ""},
	{ "name": "Quanta Magazine", "url": "https://www.quantamagazine.org/computer-science/", "memo": ""},
	{ "name": "Computing Engineering", "url": "https://publications.computer.org/cise/", "memo": ""},

	{ "name": "PC Magazine", "url": "https://www.pcmag.com", "memo": ""},
	{ "name": "PC World", "url": "https://www.pcworld.com/", "memo": ""},
	{ "name": "Mac World", "url": "https://www.macworld.com/", "memo": ""},
];
var  wl_AI = [
	{ "name": "cs231n-stanford", "url": "http://cs231n.stanford.edu/", "memo": ""},
	{ "name": "NumpyTutor", "url": "http://cs231n.github.io/python-numpy-tutorial/", "memo": ""},
	{ "name": "machinelearningmastery", "url": "https://machinelearningmastery.com/tutorial-first-neural-network-python-keras/", "memo": ""},
	{ "name": "-datacamp-", "url": "https://www.datacamp.com/community/tutorials/deep-learning-python", "memo": ""},
	{ "name": "Anaconda", "url": "https://www.continuum.io/downloads", "memo": ""},
	{ "name": "python-xy", "url": "https://python-xy.github.io/", "memo": ""},
	{ "name": "jupyter-notebook", "url": "https://jupyter.readthedocs.io/en/latest/running.html", "memo": ""},
	{ "name": "ActivePython", "url": "https://www.activestate.com/activepython", "memo": ""},
	{ "name": "Pi-spark-supercomputer", "url": "https://www.raspberrypi.org/magpi/pi-spark-supercomputer/", "memo": ""},
	{ "name": "人工智能学习资料汇总 - csdn", "url": "http://blog.csdn.net/augusdi/article/details/20238157", "memo": ""},
	{ "name": "加州理工-机器学习与数据挖掘 - 163", "url": "http://open.163.com/special/opencourse/learningfromdata.html", "memo": ""},
	{ "name": "- IMDb - ", "url": "http://www.imdb.com/", "memo": ""},
	{ "name": "Image Net - ", "url": "http://image-net.org/", "memo": ""},
	{ "name": "DSmodules", "url": "https://ds-modules.github.io/DS-Modules/", "memo": "."},
];



var wl_eBooks = [
	{ "name":"Goodreads - meet your next favorite book", "url": "https://www.goodreads.com/", "memo": "."},
	{ "name":"豆瓣读书", "url": "https://book.douban.com/", "memo": "."},
	{ "name":"packpub(qqmail-S*n1??)", "url": "https://www.packtpub.com/free-learning", "memo": "."},
	{ "name":"All Books and eBooks - Packt", "url": "https://www.packtpub.com/all/?search=html5", "memo": "."},

	{ "name":"图灵社区", "url": "http://www.ituring.com.cn/", "memo": "."},
	{ "name":"O&#39;Reilly 北京", "url": "http://www.oreilly.com.cn/", "memo": "."},
	{ "name":"Project Gutenberg", "url": "http://www.gutenberg.org/", "memo": "."},
	{ "name":"Packt-on-github", "url": "https://github.com/PacktPublishing", "memo": "."},
	{ "name":"SaltTiger - 每天一本编程书，每天进步一点点。", "url": "http://www.salttiger.com/", "memo": "."},
	{ "name":"Greentea-press", "url": "https://greenteapress.com", "memo": "."},
	
	{ "name":"雅书ebook", "url": "https://yabook.org/", "memo": "."},
	{ "name":"PDF-Drive", "url": "https://www.pdfdrive.com", "memo": "."},
	{ "name":"用python做科学计算 - gitbook", "url": "https://www.gitbook.com/book/wizardforcel/hyry-studio-scipy/details", "memo": "."},
	{ "name":"Free e-books 777", "url": "http://www.ebook777.com/", "memo": "."},
	{ "name":"avxhm se ebooks", "url": "https://avxhm.se/ebooks/programming_development", "memo": "."},
	{ "name":"fox ebooks", "url": "http://www.foxebook.net/", "memo": "."},
	{ "name":"coder prog", "url": "https://coderprog.com/", "memo": "."},
	{ "name":"free book centre", "url": "http://www.freebookcentre.net/", "memo": "."},
	{ "name":"java1234", "url": "http://www.java1234.com", "memo": "."},
];

var wl_EnglishWorld = [
	// news & stories
	{ "name":"News of Gateway to Guangdong", "url": "https://www.newsgd.com/", "memo": "."},
	{ "name":"HongKong-news", "url": "https://hongkongnews.com.hk", "memo": "."},
	{ "name":"China Daily Website ", "url": "http://www.chinadaily.com.cn/", "memo": "."},
	{ "name":"CRIENGLISH", "url": "http://english.cri.cn/", "memo": "."},
	{ "name":"USA TODAY: Latest World and US News - USATODAY.com", "url": "https://www.usatoday.com/", "memo": "."},

	// Fashion
	{ "name":"chinaSMACK - Hot internet stories, pictures, &amp; videos in China", "url": "https://www.chinasmack.com/", "memo": "."},
	{ "name":"Vanity Fair", "url": "https://www.vanityfair.com/", "memo": "."},
	{ "name":"Discount Broadway Tickets - Save up to 50% off Broadway Shows", "url": "https://www.broadwaybox.com/", "memo": "."},

	// kids stories
	{ "name":"Short kid Stories", "url": "https://www.shortkidstories.com/", "memo": "."},
	{ "name":"DailyForest | Entertainment, Travel and More", "url": "https://www.dailyforest.com/", "memo": "."},
	{ "name":"Fresh Entertainment, Hobbies, Sports and Humor", "url": "https://www.liveabout.com/", "memo": "."},

	// intresting and entertainment 
	{ "name":"Showbiz, entertainment and media news - Digital Spy", "url": "https://www.digitalspy.com/", "memo": "."},
	{ "name":"Reader Digest", "url": "https://www.readersdigest.co.uk/", "memo": "."},
	{ "name":"BoredPanda - pandas against boredom!", "url": "https://www.boredpanda.com/", "memo": "."},

	// Chinese media 
	{ "name":"MSN - YueDuTianXia", "url": "https://www.msn.cn/zh-cn/news/englisheducation", "memo": "."},
	{ "name":"21英语 - 中国日报社21世纪英文报系官方网站", "url": "https://www.i21st.cn/", "memo": "."},
	{ "name":"BBC Radio 4 谈话台在线收听", "url": "http://www.tingroom.com/radio/92968.html", "memo": "."},
	{ "name":"恒星英语-WallStreetEng", "url": "http://www.hxen.com/", "memo": "."},

	{ "name":"IELTS-Online-Test", "url": "https://ieltsonlinetests.com/", "memo": "."},
];

var wl_OtherTech = [
	{ "name":"Linux Journal", "url": "https://www.linuxjournal.com/", "memo": "."}, 
	{ "name":"Linux org", "url": "https://www.linux.org/", "memo": "."},
	{ "name":"Kernel org", "url": "https://www.kernel.org/", "memo": "."},
	{ "name":"the Free Country", "url": "https://www.thefreecountry.com/", "memo": "."},
	{ "name":"Nvideo cuda", "url": "https://developer.nvidia.com/cuda-gpus", "memo": "."},

	{ "name":"guru99", "url": "https://www.guru99.com/", "memo": "."},

	{ "name":"Projs-Slns", "url": "https://github.com/karan/Projects-Solutions", "memo": "."},
	{ "name":"anaconda", "url": "http://www.anaconda.com", "memo": "."},
	{ "name":"pycharm", "url": "https://www.jetbrains.com/pycharm/", "memo": "."},
	{ "name":"ActiveState", "url": "https://github.com/ActiveState/code", "memo": "."},
	{ "name":"scikit-learn", "url": "https://scikit-learn.org/stable/index.html", "memo": "."},
	{ "name":"realpython", "url": "https://realpython.com/", "memo": "."},

	{ "name":"thenextweb", "url": "https://thenextweb.com/", "memo": "."},
	{ "name":"dev.to", "url": "https://dev.to/", "memo": "."},
];

var wl_IndustryObservation = [
	{ "name":"att research", "url": "http://www.research.att.com/", "memo": "."},
	{ "name":"Incognito Blog", "url": "http://www.incognito.com/blog/", "memo": "."},
	{ "name":"tvtechnology", "url": "http://www.tvtechnology.com/", "memo": "."},
	{ "name":"Broadband TV News", "url": "http://www.broadbandtvnews.com/", "memo": "."},
	{ "name":"Fierce Cable", "url": "http://www.fiercecable.com/", "memo": "."},
	
	{ "name":"Digital TV Research", "url": "https://www.digitaltvresearch.com/", "memo": "."},
	{ "name":" ITVT ", "url": "http://itvt.com/", "memo": "."},

	{ "name":"MythTV - Wikipedia, the free encyclopedia", "url": "https://en.wikipedia.org/wiki/MythTV", "memo": "."},
	{ "name":"Digital television - Wikipedia, the free encyclopedia", "url": "https://en.wikipedia.org/wiki/Digital_television", "memo": "."},
	{ "name":"Multimedia over Coax Alliance - Wikipedia, the free encyclopedia", "url": "https://en.wikipedia.org/wiki/Multimedia_over_Coax_Alliance", "memo": "."},

	{ "name":"OpenWrt", "url": "https://openwrt.org/", "memo": "."},
	{ "name":"NAB Show - April 22 - 27 2017, Exhibits April 24 - 27Las Vegas Convention Center", "url": "http://www.nabshow.com/", "memo": "."},
	{ "name":"Welcome - IBC 2016", "url": "http://www.ibc.org/", "memo": "."},
	{ "name":"Home - CES 2017", "url": "https://www.ces.tech/", "memo": "."},
	{ "name":"List of multiple-system operators - Wikipedia, the free encyclopedia", "url": "https://en.wikipedia.org/wiki/List_of_multiple-system_operators", "memo": "."},

	{ "name":"Downloadable Conditional Access System - Wikipedia, the free encyclopedia", "url": "https://en.wikipedia.org/wiki/Downloadable_Conditional_Access_System", "memo": "."},
	{ "name":"csi-magazine", "url": "http://www.csimagazine.com/csi/aboutus.php", "memo": "."},
	{ "name":"Thiago Fuzaro | 领英", "url": "https://www.linkedin.com/in/thiago-fuzaro-20498015", "memo": "."},
	{ "name":"George Hotz - LinkedIn", "url": "https://www.linkedin.com/in/george-hotz-b3866476", "memo": "."},
	{ "name":"advanced-television.com", "url": "http://advanced-television.com/", "memo": "."},

	{ "name":"Enterprise Mobile App", "url": "http://www.agileinfoways.com/", "memo": "."},

	// wl_SoCVendors 
	{ "name":"电子工程专辑 EE Times China - 提供有关电子工程及电子设计的最新资讯和科技趋势", "url": "http://www.eet-cn.com/", "memo": "."},
	{ "name":"EE Times - Electronic Engineering Times - Connecting the Global Electronics Community", "url": "http://www.eetimes.com/", "memo": "."},
	{ "name":"Cypress", "url": "http://www.cypress.com/", "memo": "."},
	{ "name":"Broadcom Ltd. - Analog and digital semiconductor solutions for the wired infrastructure, wireless communications, enterprise storage and industrial markets", "url": "http://zh-cn.broadcom.com/", "memo": "."},
	{ "name":"海思首页", "url": "http://www.hisilicon.com/cn/", "memo": "."},
	{ "name":"Availink.Inc.", "url": "http://www.availink.com.cn/", "memo": "."},
	{ "name":"Amlogic", "url": "http://www.amlogic.com/", "memo": "."},
	{ "name":"MStar芯片销售商", "url": "http://www.mstaric.com/", "memo": "."},	
	{ "name":"NXP-恩智浦", "url": "https://www.nxp.com/", "memo": "."},
	{ "name":"清华紫光-展讯", "url": "http://www.unisoc.com/", "memo": "."},
	{ "name":"高通 - Qualcomm", "url": "http://www.qualcomm.cn/", "memo": "."},
	{ "name":"微芯科技 - microchip", "url": "https://www.microchip.com/", "memo": "."},	
	{ "name":"联发科MTK", "url": "http://www.mediatek.com/", "memo": "."},
	{ "name":"STMicroelectronics", "url": "http://www.st.com/content/st_com/en.html", "memo": "."},
	{ "name":"台积电", "url": "http://www.tsmc.com/english/default.htm", "memo": "."},
	{ "name":"中芯国际", "url": "http://www.smics.com/", "memo": "."},
	{ "name":"ALiTech", "url": "http://www.alitech.com", "memo": "."},
	{ "name":"澜起科技", "url": "http://www.montage-tech.com/cn/index.html", "memo": "."},
	{ "name":"Home – ARM", "url": "https://www.arm.com/", "memo": "."},
	{ "name":"RISC-V.org", "url": "https://riscv.org/", "memo": "."},
	{ "name":"中国RISC-V联盟", "url": "http://crva.ict.ac.cn/", "memo": "."},
	{ "name":"中芯网-ic服务平台", "url": "http://www.chinesechip.com/", "memo": "."},
	{ "name":"珠海全志科技股份有限公司", "url": "http://www.allwinnertech.com/", "memo": "."},
	{ "name":"Rockchip-瑞芯微电子股份有限公司", "url": "http://www.rock-chips.com/", "memo": "."},
	{ "name":"NVIDIA 引领人工智能计算 - NVIDIA", "url": "http://www.nvidia.cn/page/home.html", "memo": "."},
	{ "name":"Telechips", "url": "https://www.telechips.com/", "memo": "."},
	{ "name":"地平线ai-边缘计算SoC", "url": "https://www.horizon.ai/", "memo": "."},
	{ "name":"寒武纪ai", "url": "http://www.cambricon.com/", "memo": "."},
	{ "name":"平头哥-玄铁910", "url": "https://www.zhihu.com/question/336848389", "memo": "."},
	
	// wl_IndustryCorporation
	{ "name":"RDK Community | RDK Central | Reference Design Kit", "url": "http://rdkcentral.com/rdkcommunity/", "memo": "."},
	{ "name":"Alticast", "url": "http://www.alticast.com/", "memo": "."},
	{ "name":"Kudelski Group", "url": "https://www.nagra.com/", "memo": "."},
	{ "name":"Verimatrix", "url": "http://www.verimatrix.com/", "memo": "."},
	{ "name":"NDS E2E solutions for the pay television industry.", "url": "http://www.china.nds.com/", "memo": "."},
	{ "name":"National Association of Broadcasters", "url": "http://www.nab.org/", "memo": "."},
	{ "name":"Corpus :: Turning Ideas into Revenue", "url": "http://www.corpus.com/", "memo": "."},
	{ "name":"Ekioh", "url": "http://www.ekioh.com/", "memo": "."},
	{ "name":"About Technicolor", "url": "http://www.technicolor.com/en/who-we-are", "memo": "."},
	{ "name":"HUMAX", "url": "http://www.humaxdigital.com/home/", "memo": "."},
	{ "name":"Pace Set-Tops - ARRIS", "url": "http://www.arris.com/Products/pace-set-tops", "memo": "."},
	{ "name":"Hitron Technologies Americas Inc.", "url": "http://www.hitron-americas.com/", "memo": "."},
	{ "name":"Optiva Media", "url": "http://www.optivamedia.com/", "memo": "."},
	{ "name":"TeleIDEA", "url": "http://www.teleidea.com/", "memo": "."},
	{ "name":"Oregan Networks", "url": "http://www.oregan.net/", "memo": "."},
	{ "name":"Espial - Multiscreen and Smart TV Solutions ", "url": "http://www.espial.com/", "memo": "."},
	{ "name":"WYPLAY - Play the difference", "url": "http://www.wyplay.com/", "memo": "."},
	{ "name":"iWedia - iWedia", "url": "http://www.iwedia.com/", "memo": "."},
];
var wl_Science = [
	{ "name":"MIT-TechReview", "url": "https://www.technologyreview.com", "memo": "."},
	{ "name":"环球科学", "url": "https://www.scientificamerican.com/", "memo": "."},
	{ "name":"equation-of-everything", "url": "https://physics.stackexchange.com/questions/77663/equation-of-everything", "memo": "."},
	{ "name":"Nobel Prize", "url": "https://www.nobelprize.org/", "memo": "."},

	{ "name":"Science", "url": "http://www.sciencemag.org/", "memo": "."},
	{ "name":"Nature", "url": "https://www.nature.com/", "memo": "."},
	{ "name":"Cells", "url": "http://www.cell.com/", "memo": "."},

	{ "name":"Vernier", "url": "https://www.vernier.com", "memo": "."},

	{ "name":"Science News – Science Articles and Current Events | LiveScience", "url": "http://www.livescience.com/", "memo": "."},
	{ "name":"Wolfram MathWorld: The Web&#39;s Most Extensive Mathematics Resource", "url": "http://mathworld.wolfram.com/", "memo": "."},
	{ "name":"U S Food and Drug Administration Home Page", "url": "http://www.fda.gov/", "memo": "."},
	{ "name":"New Technology, Science News, The Future Now | Popular Science", "url": "http://www.popsci.com/", "memo": "."},
	{ "name":"WHO - World Health Organization", "url": "http://www.who.int/en/", "memo": "."},
	{ "name":"World Trade Organization - Home page", "url": "https://www.wto.org/", "memo": "."},
	{ "name":"Gapminder: Unveiling the beauty of statistics for a fact based world view.", "url": "http://www.gapminder.org/", "memo": "."},

	{ "name":"U S Food and Drug Administration Home Page", "url": "https://www.fda.gov/", "memo": "."},
	{ "name":"NASA", "url": "https://www.nasa.gov/", "memo": "."},
	{ "name":"Time Converter and World Clock", "url": "https://www.worldtimebuddy.com/", "memo": "."},
	
	// McGraw Hill Education 
	{ "name":"MH - Physics", "url": "http://glencoe.mheducation.com/sites/0078458137/sitemap.html", "memo": "."},
	{ "name":"MH - Chemistry", "url": "http://glencoe.mheducation.com/sites/0078617987/sitemap.html", "memo": "."},
	{ "name":"MH - Biology", "url": "http://glencoe.mheducation.com/sites/0078665809/sitemap.html", "memo": "."},
	{ "name":"MH - Earth Science", "url": "http://glencoe.mheducation.com/sites/0078664233/sitemap.html", "memo": "."},
	{ "name":"MH - Science Course List", "url": "http://www.glencoe.com/sites/california/student/science/index.html", "memo": "."},

	// US K12 Math courses
	{ "name":"US-K12-math", "url": "https://blog.prepscholar.com/the-high-school-math-classes-you-should-take", "memo": "."},
	{ "name":"ck12 org ", "url": "https://www.ck12.org/student/", "memo": "."},
	{ "name":"Online K12-Math Courses", "url": "https://study.com/academy/popular/free-online-high-school-math-courses.html", "memo": "."},
	{ "name":"NCERT-Books-India", "url": "https://www.flexiprep.com/Subject-Wise-NCERT-Books-PDF/", "memo": "."},
	{ "name":"westminster-public-schools", "url": "https://www.westminsterpublicschools.org/", "memo": "."},
	{ "name":"free-math-textbooks", "url": "http://www.openculture.com/free-math-textbooks", "memo": "."},
];

var wl_OnlineTools = [
	{ "name": "gitee-projs", "url": "https://gitee.com/explorer_ading/projects", "memo": ""},
	{ "name": "1024tools", "url": "https://1024tools.com/", "memo": ""},
	{ "name": "html-to-pdf", "url": "https://www.sejda.com/html-to-pdf", "memo": ""},
	{ "name": "SpeedTest", "url": "http://www.speedtest.net/", "memo": ""},
	{ "name": "Dictionary", "url": "http://www.dictionary.com/", "memo": ""},
	{ "name": "bingDict", "url": "http://cn.bing.com/dict/", "memo": ""},
	{ "name": "有道词典", "url": "http://www.youdao.com/", "memo": ""},
	{ "name":"古诗文网-古诗文查询平台", "url": "https://www.gushiwen.cn/", "memo": "."},
	{ "name":"在线成语词典", "url": "http://cy.5156edu.com/", "memo": "."},
	{ "name":"汉语语料库", "url": "http://corpus.zhonghuayuwen.org/", "memo": "."},
	{ "name":"Dictionary-reference", "url": "https://www.dictionary.com/", "memo": "."},
	{ "name":"WeChat", "url": "https://wx.qq.com/", "memo": "."},
	
	{ "name":"ETS托业 全球最大的商务和职业英语考试", "url": "http://toeic.cn/", "memo": "."},
	{ "name":"YDNote", "url": "http://note.youdao.com/web/list", "memo": "."},
	{ "name":"explorer.ading (explorer_ading) - Git@OSC - OSChina.Net", "url": "https://git.oschina.net/explorer_ading/", "memo": "."},
	{ "name":"网上图书馆 - 深圳图书馆", "url": "http://www.szlib.org.cn/page/online-library.html", "memo": "."},
	{ "name":"键货蓝小丁 [http://53453367.qzone.qq.com]", "url": "http://user.qzone.qq.com/53453367/2", "memo": "."},
	{ "name":"登录欢喜云", "url": "https://cloud.smartisan.com/#/login?return_app=notes", "memo": "."},
	{ "name":"印象笔记", "url": "https://www.yinxiang.com/", "memo": "."},
]; 

var wl_MultimediaEntertainment = [
	{ "name": "url-got", "url": "https://www.urlgot.com", "memo": "."},
	{ "name": "NBC国家广播公司", "url": "https://www.nbc.com/", "memo": "."},
	{ "name": "ABC美国广播公司", "url": "https://abc.go.com/", "memo": "."},
	{ "name": "FOX福克斯广播公司", "url": "https://www.fox.com", "memo": "."},
	{ "name": "PBS公共广播服务", "url": "https://www.pbs.org/", "memo": "."},
	{ "name": "CBS商业广播服务", "url": "https://www.cbs.com", "memo": "."},
	{ "name": "CNN线缆网络新闻", "url": "https://edition.cnn.com", "memo": "."},
	{ "name": "ESPN娱乐运动频道", "url": "https://global.espn.com", "memo": "."},
	{ "name": "HBO优质电视网络", "url": "https://www.hbo.com/", "memo": "."},
	{ "name": "Netflix", "url": "https://www.netflix.com", "memo": "."},
	{ "name": "BBC英国广播公司", "url": "https://www.bbc.com/", "memo": "."},

	{ "name": "Trevor Noah - The Daily Show", "url": "http://www.cc.com/shows/the-daily-show-with-trevor-noah", "memo": ""},
	{ "name": "腾迅视频－记录片", "url": "https://v.qq.com/x/channel/doco", "memo": ""},

	
	// 影视休闲
	{ "name": "雅拉伊", "url": "https://www.yalayi.com/", "memo": ""},

	{ "name": "小柠檬TV", "url": "https://www.xnmyl.com/", "memo": ""},
	{ "name": "美剧天堂", "url": "http://www.kppt.cc/", "memo": "."},

	// 记录片
	{ "name": "Documentary tube", "url": "http://www.documentarytube.com/", "memo": ""},
	{ "name": "BBC-食物的秘密", "url": "https://www.bilibili.com/video/av18740738/", "memo": ""},
	{ "name": "猛犸君侯", "url": "http://mmjh2008.lofter.com/", "memo": ""},

	{ "name":"NoVIP-Noad", "url": "https://www.novipnoad.com/", "memo": "."},
	{ "name":"zzzfun", "url": "http://www.zzzfun.com/", "memo": "."},
	{ "name":"bimi动漫", "url": "http://www.bimiacg.com/", "memo": "."},

	{ "name":"记录天堂", "url": "http://www.ummu.net", "memo": "."},
	{ "name":"盗火记录片(exp*r.a*g - s*n)", "url": "http://www.daofire.com", "memo": "."},

	// Novel 
	{ "name":"鬼吹灯-精绝古城", "url": "http://www.daomuxiaoshuowang.com/guichuidengzhijingjuegucheng/", "memo": "."},
	{ "name":"水浒传", "url": "http://www.dushu369.com/gudianmingzhu/shz/", "memo": "."},
	{ "name":"三言二拍", "url": "https://www.xiaoshuodaquan.com/sanyanerpai/", "memo": "."},
	{ "name":"科幻小说网-1", "url": "http://www.00txt.com/", "memo": "."},
	{ "name":"科幻小说网-2", "url": "http://www.kehuan.net.cn/", "memo": "."},
	{ "name":"online-novels", "url": "https://allnovel.net/", "memo": "."},

	// Oversea News 
	{ "name":"新加坡-联合早报", "url": "https://www.zaobao.com", "memo": "."},
	{ "name":"香港-谷歌新闻", "url": "https://news.google.com.hk", "memo": "."},
	{ "name":"中国数字时代", "url": "https://chinadigitaltimes.net/chinese/", "memo": "."},
	{ "name":"Nikkei Asia", "url": "https://asia.nikkei.com/", "memo": "."},
	{ "name":"路透社", "url": "https://cn.reuters.com/", "memo": "."},
	{ "name":"纽约时报中文网", "url": "https://cn.nytimes.com/", "memo": "."},
	{ "name":"法新社-RFI", "url": "http://www.chinese.rfi.fr/", "memo": "."},
	{ "name":"德国之声-dw", "url": "https://www.dw.com/zh/", "memo": "."},
	{ "name":"BBC News", "url": "https://www.bbc.com/zhongwen/simp", "memo": "."},
	{ "name":"美国之音", "url": "https://www.voachinese.com/", "memo": "."},
	{ "name":"theguardian food", "url": "https://www.theguardian.com/food", "memo": "."},
	{ "name":"recipes", "url": "https://www.allrecipes.com/recipes/", "memo": "."},
	{ "name":"Bloomberg", "url":"http://www.bloomberg.com/", "memo": "."},
	{ "name":"BBC - Home", "url": "https://www.bbc.com/news", "memo": "."},
	{ "name":"The Economist", "url": "http://www.economist.com/", "memo": "."},
	{ "name":"WallStreetJournal", "url": "http://cn.wsj.com/gb/index.asp", "memo": "."},
	{ "name":"businessInsider", "url": "http://www.businessinsider.com/", "memo": "."},
	{ "name":"Facebook", "url": "https://www.facebook.com/", "memo": "."},
];

var wsites = {
	"热点追踪": ws_Topics, 
	"海外信息": wl_OverseaTech, 
	"软件新闻": ws_SoftwareNews,

	"Chromium": ws_ChromiumBrowser,
	"虚拟现实": ws_XRLins,
	"前端技术": ws_WebTech,

	"快速搜索": ws_QuickSearch ,
	"技术博客": ws_BlogsOnlineEdu,
	"DevConsole": ws_DevConsole,

	"ProdNews": ws_ProductNews,
};

var wlinks = {
	"产品经理": ws_BuinessDev, 

	"UEXDesign": ws_UEX,
	"编程语言": ws_ProgrammingLang,
	"硬件开发": ws_HardwareDev,
	"游戏开发": ws_GameDev,
	"Browser": ws_BrowserDev,

	"系统安全": ws_SystemSecurity,	
	"科学": wl_Science,
	"计算机科学": wl_ComputerScience,
	"人工智能": wl_AI,

	"电子图书":wl_eBooks,
	"英语社论": wl_EnglishWorld,
	"其他技术讨论": wl_OtherTech,
	"行业观察": wl_IndustryObservation,	

	"在线工具": wl_OnlineTools,
	"音视频娱乐": wl_MultimediaEntertainment,
};

var wTags = [
	{"name": "Kali", "url": "https://www.kali.org/"},
	{"name": "游戏", "url": "https://developer.mozilla.org/en-US/docs/Games"},
	{"name": "语言",  "url": "http://chinaplus.cri.cn/"},   
	{"name": "Note", "url": "data:text/html%2c%20%3chtml%20contenteditable%3e"},
];


