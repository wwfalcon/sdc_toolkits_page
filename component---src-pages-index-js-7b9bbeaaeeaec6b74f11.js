(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"20cp":function(e,t,r){"use strict";r("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var o,n=r("x5XP"),a=(o=n)&&o.__esModule?o:{default:o};t.default=a.default},"2NuI":function(e,t,r){"use strict";r("f3/d"),r("pIFo");e.exports=function(e,t,r,o,n,a,i,l){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,o,n,a,i,l],p=0;(s=new Error(t.replace(/%s/g,(function(){return c[p++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},"2mcs":function(e,t,r){"use strict";r("V+eJ"),r("pIFo");var o=r("ohE5");e.exports=o},GiYv:function(e,t,r){"use strict";r("91GP"),r("2Spj"),r("/SS/"),r("hHhE"),r("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var o,n=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),a=r("ZVIt"),i=(o=a)&&o.__esModule?o:{default:o},l=r("17x9");var s=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.getStyles=e.getStyles.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"getStyles",value:function(){var e=this.props,t=e.activeColor,r=e.completeColor,o=e.defaultColor,n=e.circleFontColor,a=e.activeTitleColor,i=e.completeTitleColor,l=e.defaultTitleColor,s=e.size,c=e.circleFontSize,p=e.titleFontSize,u=e.circleTop,f=e.titleTop,d=e.width,m=e.completeOpacity,y=e.activeOpacity,b=e.defaultOpacity,h=e.completeTitleOpacity,g=e.activeTitleOpacity,v=e.defaultTitleOpacity,E=e.barStyle,_=e.defaultBarColor,T=e.completeBarColor,w=e.defaultBorderColor,C=e.completeBorderColor,N=e.activeBorderColor,P=e.defaultBorderStyle,x=e.completeBorderStyle,k=e.activeBorderStyle,S=e.lineMarginOffset,O=e.defaultBorderWidth;return{step:{width:d+"%",display:"table-cell",position:"relative",paddingTop:u},circle:{width:s,height:s,margin:"0 auto",backgroundColor:o,borderRadius:"50%",textAlign:"center",padding:1,fontSize:c,color:n,display:"block",opacity:b,borderWidth:w?O:0,borderColor:w,borderStyle:P},activeCircle:{backgroundColor:t,opacity:y,borderWidth:N?O:0,borderColor:N,borderStyle:k},completedCircle:{backgroundColor:r,opacity:m,borderWidth:C?O:0,borderColor:C,borderStyle:x},index:{lineHeight:s+c/4+"px",color:n},title:{marginTop:f,fontSize:p,fontWeight:"300",textAlign:"center",display:"block",color:l,opacity:v},activeTitle:{color:a,opacity:g},completedTitle:{color:i,opacity:h},leftBar:{position:"absolute",top:u+s/2,height:1,borderTopStyle:E,borderTopWidth:1,borderTopColor:_,left:0,right:"50%",marginRight:s/2+S,opacity:b},rightBar:{position:"absolute",top:u+s/2,height:1,borderTopStyle:E,borderTopWidth:1,borderTopColor:_,right:0,left:"50%",marginLeft:s/2+S,opacity:b},completedBar:{borderTopStyle:E,borderTopWidth:1,borderTopColor:T,opacity:m}}}},{key:"render",value:function(){var e=this.props,t=e.title,r=e.icon,o=e.index,n=e.active,a=e.completed,l=e.first,s=e.isLast,c=e.href,p=e.onClick,u=this.getStyles(),f=Object.assign(u.circle,a?u.completedCircle:{},n?u.activeCircle:{}),d=Object.assign(u.title,a?u.completedTitle:{},n?u.activeTitle:{}),m=Object.assign(u.leftBar,n||a?u.completedBar:{}),y=Object.assign(u.rightBar,a?u.completedBar:{}),b=r?i.default.createElement("img",{src:r,alt:o+1}):o+1;return i.default.createElement("div",{style:u.step},i.default.createElement("div",{style:f},n||a?i.default.createElement("a",{href:c,onClick:p,style:u.index},b):i.default.createElement("span",{style:u.index},b)),n||a?i.default.createElement("a",{href:c,onClick:p,style:d},t):i.default.createElement("div",{style:d},t),!l&&i.default.createElement("div",{style:m}),!s&&i.default.createElement("div",{style:y}))}}]),t}(a.Component);t.default=s,s.defaultProps={activeColor:"#5096FF",completeColor:"#5096FF",defaultColor:"#E0E0E0",activeTitleColor:"#000",completeTitleColor:"#000",defaultTitleColor:"#757575",circleFontColor:"#FFF",size:32,circleFontSize:16,titleFontSize:16,circleTop:24,titleTop:8,defaultBarColor:"#E0E0E0",barStyle:"solid",borderStyle:"solid",lineMarginOffset:4,defaultBorderWidth:3},s.propTypes={width:l.PropTypes.number.isRequired,activeColor:l.PropTypes.string,completeColor:l.PropTypes.string,defaultColor:l.PropTypes.string,activeTitleColor:l.PropTypes.string,completeTitleColor:l.PropTypes.string,defaultTitleColor:l.PropTypes.string,circleFontColor:l.PropTypes.string,size:l.PropTypes.number,circleFontSize:l.PropTypes.number,titleFontSize:l.PropTypes.number,circleTop:l.PropTypes.number,titleTop:l.PropTypes.number,title:l.PropTypes.string,index:l.PropTypes.number,active:l.PropTypes.bool,completed:l.PropTypes.bool,first:l.PropTypes.bool,isLast:l.PropTypes.bool,completeOpacity:l.PropTypes.string,activeOpacity:l.PropTypes.string,defaultOpacity:l.PropTypes.string,completeTitleOpacity:l.PropTypes.string,activeTitleOpacity:l.PropTypes.string,defaultTitleOpacity:l.PropTypes.string,barStyle:l.PropTypes.string,defaultBarColor:l.PropTypes.string,completeBarColor:l.PropTypes.string,defaultBorderColor:l.PropTypes.string,completeBorderColor:l.PropTypes.string,activeBorderColor:l.PropTypes.string,defaultBorderStyle:l.PropTypes.string,completeBorderStyle:l.PropTypes.string,activeBorderStyle:l.PropTypes.string,lineMarginOffset:l.PropTypes.number,defaultBorderWidth:l.PropTypes.number}},RXBc:function(e,t,r){"use strict";r.r(t);var o=r("q1tI"),n=r.n(o),a=r("Wbzz"),i=r("1Qp6"),l=r("vcKG"),s=r("CX7Z"),c=r("DO11"),p=(r("84bF"),function(e){var t=e.to,r=e.title,o=e.color,l=e.icon,s=e.children;return n.a.createElement(a.Link,{to:t,className:"col-12 col-4-ns pa5 pa8-ns pa10-l pt8-l flex flex-column-ns items-start tdn content-stretch home-main-box-shadow db br4 bg-white"},n.a.createElement(i.b,{name:l,className:"w10 h-auto w12-ns stroke-w--1-5 mr3 mb2 stroke-"+o}),n.a.createElement("div",{className:"flex flex-column justify-between flex-auto"},n.a.createElement("div",null,n.a.createElement("h2",{className:c.a.h4+" mt0 mt2-ns darkgrey flex-shrink-1"},r),n.a.createElement("p",{className:c.a.small+" midgrey"},s)),n.a.createElement("span",{className:o+" dib mt2 link fw5 f7 f5-ns flex items-center"},"了解更多",n.a.createElement(i.b,{name:"arrow-right",className:"w3 h3 ml2 fill-"+o}))))}),u=function(){return n.a.createElement("div",{className:"gh-bg-home bb b--whitegrey"},n.a.createElement("header",{className:"top-0 left-0 right-0 z-9999"},n.a.createElement(i.d,{theme:"light"})),n.a.createElement("div",{className:c.a.page.xl+" pb5 pt10 pt15-ns pt20-l pb10-ns pb15-l flex flex-column items-center bt bn-ns b--white-10"},n.a.createElement("h1",{className:"ma0 pa0 f2 f1-ns f-headline-l white header-heading-shadow"},"产品企划工具包（Toolkits for Product Plan）"),n.a.createElement(s.a,{isHome:!0}),n.a.createElement("section",{className:"grid-12 gutter-row-20 gutter-36-ns mt10 mt20-ns mt25-l miw-100 miw-auto-ns home-main-box-margin-ns z-999"},n.a.createElement(p,{to:"/concepts/product-strategy-setting-your-strategic-vision-for-product-offerings_zh_CN",title:"起步",icon:"rocket",color:"purple"},"产品企划（策略规划）描绘了产品最终的愿景，产品的终止之地。通过构建产品策略，你可以决定产品的努力方向。"),n.a.createElement(p,{to:"/",title:"指南",icon:"blocks",color:"blue"},"产品企划涉及到很多相关的主题，如：策略、市场营销、销售等。"),n.a.createElement(p,{to:"/",title:"模版",icon:"typing",color:"tutorial-green"},"获取产品企划相关的工作模版，包括工作检核表、流程图等。"))))},f=r("wCQ3"),d=r("20cp"),m=r.n(d);r.d(t,"pageQuery",(function(){return y}));t.default=function(e){var t=e.data,r=e.location,o=Object(f.b)(),s=[{title:"要卖给谁?",href:"concepts/Who_are_you_selling_to_zh_CN"},{title:"卖的是什么?",href:"concepts/What_are_you_selling_zh_CN"},{title:"有何价值?",href:"concepts/What_value_do_you_provide_your_customers_zh_CN"},{title:"如何定价?",href:"concepts/How_will_you_price_your_product_zh_CN"},{title:"如何分发?",href:"concepts/How_will_you_distribute_your_product_zh_CN"}];return n.a.createElement(n.a.Fragment,null,n.a.createElement(f.a,{data:t,location:r,type:"website",title:"SDC Toolkits for Product Plan ",description:"SDC Toolkits for Product Plan",image:o}),n.a.createElement(l.a,{headerDividerStyle:"shadow",bodyClass:"bg-white",mainClass:"bg-whitegrey-l2 pb-vw6 pb-vw3-ns",header:n.a.createElement(u,null)},n.a.createElement("div",{className:"pt-vw3 home-main-box-padding-ns"},n.a.createElement("section",{className:c.a.page.xl+" col-12 mt2 mt-vw1-ns bt bn-ns b--whitegrey pt2 pt0-ns"},n.a.createElement(a.Link,{to:"concepts/product-strategy-setting-your-strategic-vision-for-product-offerings_zh_CN",className:c.a.h3+" link darkgrey hover-midgrey"},"产品企划要素"),n.a.createElement("p",{className:c.a.p+" mt2 midgrey flex flex-column flex-row-ns justify-between items-center-ns"},"当定义产品策略时，要明确已回答了如下问题。"),n.a.createElement("div",null,n.a.createElement(m.a,{steps:s,size:48,activeStep:5,circleFontSize:16,defaultBorderWidth:6,completeColor:"#AD56B4",completeBarColor:"#AD56B4",lineMarginOffset:0}))),n.a.createElement("section",{className:c.a.page.xl+" col-12 mt8 mt-vw3-ns bt bn-ns b--whitegrey pt5 pt0-ns"},n.a.createElement(a.Link,{to:"#",className:c.a.h3+" link darkgrey hover-midgrey"},"著作"),n.a.createElement("p",{className:c.a.p+" mt2 midgrey flex flex-column flex-row-ns justify-between items-center-ns"},"国内外经典图书、教材等。",n.a.createElement(a.Link,{to:"#",className:"blue link din nb1 mt2 mt0-ns hover-underline-blue"},n.a.createElement("span",{className:"flex items-center fw5"},"了解更多著作",n.a.createElement(i.b,{name:"arrow-right",className:"w3 h3 ml1 fill-blue"})))),n.a.createElement("div",{className:"grid-integrations-index mt4 mt6-l f8"},n.a.createElement(i.a,{href:"https://wwfalcon.github.io/ebooks_for_sdc/md/mba_qing_song_du_-_shi_chang_ying_xiao/ch001.html",className:"flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn tc",elevation:"2",radius:"4"},n.a.createElement(i.b,{name:"blocks",className:"w10 h-auto w12-ns stroke-w--1-5 mb2 stroke-blue"}),"MBA轻松读 - 市场营销，日本商学院"),n.a.createElement(i.a,{href:"https://wwfalcon.github.io/ebooks_for_sdc/md/ke_te_le_-_ying_xiao_guan_li_-_di_13_ban/ch002.html",className:"flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn tc",elevation:"2",radius:"4"},n.a.createElement(i.b,{name:"blocks",className:"w10 h-auto w12-ns stroke-w--1-5 mb2 stroke-blue"}),"科特勒《营销管理》(第13版)"),n.a.createElement(i.a,{href:"https://wwfalcon.github.io/ebooks_for_sdc/md/the_fifth_discipline/ch002.html",className:"flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn tc",elevation:"2",radius:"4"},n.a.createElement(i.b,{name:"blocks",className:"w10 h-auto w12-ns stroke-w--1-5 mb2 stroke-blue"}),"彼得·圣吉《第五项修炼》"),n.a.createElement(i.a,{href:"https://wwfalcon.github.io/ebooks_for_sdc/md/i_know_what_he_want_to_read/part0000.html",className:"flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn tc",elevation:"2",radius:"4"},n.a.createElement(i.b,{name:"blocks",className:"w10 h-auto w12-ns stroke-w--1-5 mb2 stroke-blue"}),"我知道他想看什么 - 用内容营销打造品牌影响力"),n.a.createElement(i.a,{href:"https://wwfalcon.github.io/ebooks_for_sdc/md/focus_the_future_of_your_company_depends_on_it/zuo_zhe_de_hua.html",className:"flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn tc",elevation:"2",radius:"4"},n.a.createElement(i.b,{name:"blocks",className:"w10 h-auto w12-ns stroke-w--1-5 mb2 stroke-blue"}),"聚焦：决定你企业的未来"),n.a.createElement(i.a,{href:"https://wwfalcon.github.io/ebooks_for_sdc/md/leananalytics/index.html",className:"flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn tc",elevation:"2",radius:"4"},n.a.createElement(i.b,{name:"blocks",className:"w10 h-auto w12-ns stroke-w--1-5 mb2 stroke-blue"}),"精益数据分析"),n.a.createElement(i.a,{href:"https://wwfalcon.github.io/ebooks_for_sdc/md/positioning_in_the_21st_century/index.html",className:"flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn tc",elevation:"2",radius:"4"},n.a.createElement(i.b,{name:"blocks",className:"w10 h-auto w12-ns stroke-w--1-5 mb2 stroke-blue"}),'21世纪的定位：定位之父重新定义"定位"'),n.a.createElement(i.a,{href:"sdc_toolkits_page/_book/",className:"flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn",elevation:"2",radius:"4"},n.a.createElement(i.b,{name:"more",className:"w8 nudge-top--6"}),"了解更多"))),n.a.createElement("section",{className:c.a.page.xl+" col-12 mt8 mt-vw3-ns bt bn-ns b--whitegrey pt5 pt0-ns"},n.a.createElement(a.Link,{to:"#",className:c.a.h3+" link darkgrey hover-midgrey"},"快速参考"),n.a.createElement("p",{className:c.a.p+" mt2 midgrey flex flex-column flex-row-ns justify-between items-center-ns"},"仅保存从互联网公开渠道获取的信息，并利用 gitbook 形态发布，方便浏览及检索。",n.a.createElement(a.Link,{to:"#",className:"blue link din nb1 mt2 mt0-ns hover-underline-blue"},n.a.createElement("span",{className:"flex items-center fw5"},"了解更多著作",n.a.createElement(i.b,{name:"arrow-right",className:"w3 h3 ml1 fill-blue"})))),n.a.createElement("div",{className:"grid-integrations-index mt4 mt6-l f8"},n.a.createElement(i.a,{href:"https://wwfalcon.github.io/fastref_for_sdc/md/china_telcom_opt/",className:"flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn tc",elevation:"2",radius:"4"},n.a.createElement(i.b,{name:"blocks",className:"w10 h-auto w12-ns stroke-w--1-5 mb2 stroke-blue"}),"中国电信运营商组织机构"),n.a.createElement(i.a,{href:"sdc_toolkits_page/_book/",className:"flex flex-column justify-between items-center middarkgrey pa2 pt5 pb5 tdn",elevation:"2",radius:"4"},n.a.createElement(i.b,{name:"more",className:"w8 nudge-top--6"}),"了解更多"))))))};var y="1531574144"},lT4e:function(e,t,r){"use strict";r("8+KV"),r("LK8F"),r("f3/d"),r("2Spj");var o=r("MgzW"),n=r("t33a"),a=r("2NuI");e.exports=function(e,t,r){var i=[],l={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},s={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},c={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var r=0;r<t.length;r++)u(e,t[r])},childContextTypes:function(e,t){e.childContextTypes=o({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=o({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=d(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=o({},e.propTypes,t)},statics:function(e,t){!function(e,t){if(!t)return;for(var r in t){var o=t[r];if(t.hasOwnProperty(r)){if(a(!(r in c),'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',r),r in e){var n=s.hasOwnProperty(r)?s[r]:null;return a("DEFINE_MANY_MERGED"===n,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",r),void(e[r]=d(e[r],o))}e[r]=o}}}(e,t)},autobind:function(){}};function p(e,t){var r=l.hasOwnProperty(t)?l[t]:null;g.hasOwnProperty(t)&&a("OVERRIDE_BASE"===r,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&a("DEFINE_MANY"===r||"DEFINE_MANY_MERGED"===r,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function u(e,r){if(r){a("function"!=typeof r,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),a(!t(r),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var o=e.prototype,n=o.__reactAutoBindPairs;for(var i in r.hasOwnProperty("mixins")&&c.mixins(e,r.mixins),r)if(r.hasOwnProperty(i)&&"mixins"!==i){var s=r[i],u=o.hasOwnProperty(i);if(p(u,i),c.hasOwnProperty(i))c[i](e,s);else{var f=l.hasOwnProperty(i);if("function"==typeof s&&!f&&!u&&!1!==r.autobind)n.push(i,s),o[i]=s;else if(u){var y=l[i];a(f&&("DEFINE_MANY_MERGED"===y||"DEFINE_MANY"===y),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",y,i),"DEFINE_MANY_MERGED"===y?o[i]=d(o[i],s):"DEFINE_MANY"===y&&(o[i]=m(o[i],s))}else o[i]=s}}}else;}function f(e,t){for(var r in a(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects."),t)t.hasOwnProperty(r)&&(a(void 0===e[r],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",r),e[r]=t[r]);return e}function d(e,t){return function(){var r=e.apply(this,arguments),o=t.apply(this,arguments);if(null==r)return o;if(null==o)return r;var n={};return f(n,r),f(n,o),n}}function m(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function y(e,t){return t.bind(e)}var b={componentDidMount:function(){this.__isMounted=!0}},h={componentWillUnmount:function(){this.__isMounted=!1}},g={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},v=function(){};return o(v.prototype,e.prototype,g),function(e){var t=function(e,o,i){this.__reactAutoBindPairs.length&&function(e){for(var t=e.__reactAutoBindPairs,r=0;r<t.length;r+=2){var o=t[r],n=t[r+1];e[o]=y(e,n)}}(this),this.props=e,this.context=o,this.refs=n,this.updater=i||r,this.state=null;var l=this.getInitialState?this.getInitialState():null;a("object"==typeof l&&!Array.isArray(l),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=l};for(var o in t.prototype=new v,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],i.forEach(u.bind(null,t)),u(t,b),u(t,e),u(t,h),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),a(t.prototype.render,"createClass(...): Class specification must implement a `render` method."),l)t.prototype[o]||(t.prototype[o]=null);return t}}},oVyQ:function(e,t,r){"use strict";r("f3/d"),r("2Spj");function o(e,t,r,o,n){}o.resetWarningCache=function(){0},e.exports=o},ohE5:function(e,t,r){"use strict";function o(e){return function(){return e}}var n=function(){};n.thatReturns=o,n.thatReturnsFalse=o(!1),n.thatReturnsTrue=o(!0),n.thatReturnsNull=o(null),n.thatReturnsThis=function(){return this},n.thatReturnsArgument=function(e){return e},e.exports=n},sHIV:function(e,t,r){"use strict";r("Oyvg"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("LK8F"),r("f3/d"),r("rE2o"),r("ioFf"),r("2Spj");var o=r("TOwV"),n=r("MgzW"),a=r("WbBG"),i=r("oVyQ"),l=Function.call.bind(Object.prototype.hasOwnProperty);function s(){return null}e.exports=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator;var c={array:d("array"),bool:d("boolean"),func:d("function"),number:d("number"),object:d("object"),string:d("string"),symbol:d("symbol"),any:f(s),arrayOf:function(e){return f((function(t,r,o,n,i){if("function"!=typeof e)return new u("Property `"+i+"` of component `"+o+"` has invalid PropType notation inside arrayOf.");var l=t[r];if(!Array.isArray(l))return new u("Invalid "+n+" `"+i+"` of type `"+y(l)+"` supplied to `"+o+"`, expected an array.");for(var s=0;s<l.length;s++){var c=e(l,s,o,n,i+"["+s+"]",a);if(c instanceof Error)return c}return null}))},element:f((function(t,r,o,n,a){var i=t[r];return e(i)?null:new u("Invalid "+n+" `"+a+"` of type `"+y(i)+"` supplied to `"+o+"`, expected a single ReactElement.")})),elementType:f((function(e,t,r,n,a){var i=e[t];return o.isValidElementType(i)?null:new u("Invalid "+n+" `"+a+"` of type `"+y(i)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return f((function(t,r,o,n,a){if(!(t[r]instanceof e)){var i=e.name||"<<anonymous>>";return new u("Invalid "+n+" `"+a+"` of type `"+function(e){if(!e.constructor||!e.constructor.name)return"<<anonymous>>";return e.constructor.name}(t[r])+"` supplied to `"+o+"`, expected instance of `"+i+"`.")}return null}))},node:f((function(e,t,r,o,n){return m(e[t])?null:new u("Invalid "+o+" `"+n+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return f((function(t,r,o,n,i){if("function"!=typeof e)return new u("Property `"+i+"` of component `"+o+"` has invalid PropType notation inside objectOf.");var s=t[r],c=y(s);if("object"!==c)return new u("Invalid "+n+" `"+i+"` of type `"+c+"` supplied to `"+o+"`, expected an object.");for(var p in s)if(l(s,p)){var f=e(s,p,o,n,i+"."+p,a);if(f instanceof Error)return f}return null}))},oneOf:function(e){if(!Array.isArray(e))return s;return f((function(t,r,o,n,a){for(var i=t[r],l=0;l<e.length;l++)if(p(i,e[l]))return null;var s=JSON.stringify(e,(function(e,t){return"symbol"===b(t)?String(t):t}));return new u("Invalid "+n+" `"+a+"` of value `"+String(i)+"` supplied to `"+o+"`, expected one of "+s+".")}))},oneOfType:function(e){if(!Array.isArray(e))return s;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return h(r),s}return f((function(t,r,o,n,i){for(var l=0;l<e.length;l++){if(null==(0,e[l])(t,r,o,n,i,a))return null}return new u("Invalid "+n+" `"+i+"` supplied to `"+o+"`.")}))},shape:function(e){return f((function(t,r,o,n,i){var l=t[r],s=y(l);if("object"!==s)return new u("Invalid "+n+" `"+i+"` of type `"+s+"` supplied to `"+o+"`, expected `object`.");for(var c in e){var p=e[c];if(p){var f=p(l,c,o,n,i+"."+c,a);if(f)return f}}return null}))},exact:function(e){return f((function(t,r,o,i,l){var s=t[r],c=y(s);if("object"!==c)return new u("Invalid "+i+" `"+l+"` of type `"+c+"` supplied to `"+o+"`, expected `object`.");var p=n({},t[r],e);for(var f in p){var d=e[f];if(!d)return new u("Invalid "+i+" `"+l+"` key `"+f+"` supplied to `"+o+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=d(s,f,o,i,l+"."+f,a);if(m)return m}return null}))}};function p(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function u(e){this.message=e,this.stack=""}function f(e){function r(r,o,n,i,l,s,c){if((i=i||"<<anonymous>>",s=s||n,c!==a)&&t){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}return null==o[n]?r?null===o[n]?new u("The "+l+" `"+s+"` is marked as required in `"+i+"`, but its value is `null`."):new u("The "+l+" `"+s+"` is marked as required in `"+i+"`, but its value is `undefined`."):null:e(o,n,i,l,s)}var o=r.bind(null,!1);return o.isRequired=r.bind(null,!0),o}function d(e){return f((function(t,r,o,n,a,i){var l=t[r];return y(l)!==e?new u("Invalid "+n+" `"+a+"` of type `"+b(l)+"` supplied to `"+o+"`, expected `"+e+"`."):null}))}function m(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(m);if(null===t||e(t))return!0;var o=function(e){var t=e&&(r&&e[r]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!o)return!1;var n,a=o.call(t);if(o!==t.entries){for(;!(n=a.next()).done;)if(!m(n.value))return!1}else for(;!(n=a.next()).done;){var i=n.value;if(i&&!m(i[1]))return!1}return!0;default:return!1}}function y(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function b(e){if(null==e)return""+e;var t=y(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function h(e){var t=b(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return u.prototype=Error.prototype,c.checkPropTypes=i,c.resetWarningCache=i.resetWarningCache,c.PropTypes=c,c}},t33a:function(e,t,r){"use strict";r("DW2E");e.exports={}},tmr8:function(e,t,r){"use strict";var o=r("sHIV");e.exports=function(e){return o(e,!1)}},x5XP:function(e,t,r){"use strict";r("Z2Ku"),r("L9s1"),r("bWfx"),r("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var o=i(r("ZVIt")),n=r("17x9"),a=i(r("GiYv"));function i(e){return e&&e.__esModule?e:{default:e}}var l={root:{width:"100%",minHeight:0,padding:0},stepper:{display:"table",width:"100%",margin:"0 auto"}};function s(e){var t=e.activeStep,r=e.steps,n=e.disabledSteps,i=e.activeColor,s=e.completeColor,c=e.defaultColor,p=e.circleFontColor,u=e.activeTitleColor,f=e.completeTitleColor,d=e.defaultTitleColor,m=e.size,y=e.circleFontSize,b=e.titleFontSize,h=e.circleTop,g=e.titleTop,v=e.completeOpacity,E=e.activeOpacity,_=e.defaultOpacity,T=e.completeTitleOpacity,w=e.activeTitleOpacity,C=e.defaultTitleOpacity,N=e.barStyle,P=e.defaultBorderColor,x=e.completeBorderColor,k=e.activeBorderColor,S=e.defaultBorderStyle,O=e.completeBorderStyle,B=e.activeBorderStyle,F=e.defaultBarColor,I=e.completeBarColor,D=e.lineMarginOffset,j=e.defaultBorderWidth;return o.default.createElement("div",{style:l.root},o.default.createElement("div",{style:l.stepper},r.map((function(e,l){return o.default.createElement(a.default,{key:l,width:100/r.length,title:e.title,icon:e.icon,href:e.href,onClick:e.onClick,active:!(n||[]).includes(l)&&l===t,completed:!(n||[]).includes(l)&&l<t,first:0===l,isLast:l===r.length-1,index:l,activeColor:i,completeColor:s,defaultColor:c,circleFontColor:p,activeTitleColor:u,completeTitleColor:f,defaultTitleColor:d,size:m,circleFontSize:y,titleFontSize:b,circleTop:h,titleTop:g,defaultOpacity:_,completeOpacity:v,activeOpacity:E,defaultTitleOpacity:C,completeTitleOpacity:T,activeTitleOpacity:w,barStyle:N,defaultBorderColor:P,completeBorderColor:x,activeBorderColor:k,defaultBorderStyle:S,defaultBorderWidth:j,completeBorderStyle:O,activeBorderStyle:B,defaultBarColor:F,completeBarColor:I,lineMarginOffset:D})}))))}s.defaultProps={activeStep:0},s.propTypes={activeStep:n.PropTypes.number,steps:n.PropTypes.array,activeColor:n.PropTypes.string,completeColor:n.PropTypes.string,defaultColor:n.PropTypes.string,activeTitleColor:n.PropTypes.string,completeTitleColor:n.PropTypes.string,defaultTitleColor:n.PropTypes.string,circleFontColor:n.PropTypes.string,size:n.PropTypes.number,circleFontSize:n.PropTypes.number,titleFontSize:n.PropTypes.number,circleTop:n.PropTypes.number,titleTop:n.PropTypes.number,defaultOpacity:n.PropTypes.string,completeOpacity:n.PropTypes.string,activeOpacity:n.PropTypes.string,defaultTitleOpacity:n.PropTypes.string,completeTitleOpacity:n.PropTypes.string,activeTitleOpacity:n.PropTypes.string,barStyle:n.PropTypes.string,defaultBarColor:n.PropTypes.string,completeBarColor:n.PropTypes.string,defaultBorderColor:n.PropTypes.string,completeBorderColor:n.PropTypes.string,activeBorderColor:n.PropTypes.string,defaultBorderStyle:n.PropTypes.string,completeBorderStyle:n.PropTypes.string,activeBorderStyle:n.PropTypes.string,lineMarginOffset:n.PropTypes.number,defaultBorderWidth:n.PropTypes.number},t.default=s}}]);
//# sourceMappingURL=component---src-pages-index-js-7b9bbeaaeeaec6b74f11.js.map