/* Craic language picker: free Google Translate website element, no key. Shared by craiccoin.com and exchange.craiccoin.com */
(function(){
if(window.__ccLang)return;window.__ccLang=1;
var KEY="cc_lang",D=document,H=D.documentElement;
var L=[["en","English"],["af","Afrikaans"],["sq","Shqip"],["am","አማርኛ"],["ar","العربية"],["hy","Հայերեն"],["as","অসমীয়া"],["ay","Aymar"],["az","Azərbaycan"],["bm","Bamanankan"],["eu","Euskara"],["be","Беларуская"],["bn","বাংলা"],["bho","भोजपुरी"],["bs","Bosanski"],["bg","Български"],["ca","Català"],["ceb","Cebuano"],["ny","Chichewa"],["zh-CN","中文(简体)"],["zh-TW","中文(繁體)"],["co","Corsu"],["hr","Hrvatski"],["cs","Čeština"],["da","Dansk"],["dv","ދިވެހި"],["doi","डोगरी"],["nl","Nederlands"],["eo","Esperanto"],["et","Eesti"],["ee","Eʋegbe"],["tl","Filipino"],["fi","Suomi"],["fr","Français"],["fy","Frysk"],["gl","Galego"],["ka","ქართული"],["de","Deutsch"],["el","Ελληνικά"],["gn","Avañe'ẽ"],["gu","ગુજરાતી"],["ht","Kreyòl ayisyen"],["ha","Hausa"],["haw","ʻŌlelo Hawaiʻi"],["iw","עברית"],["hi","हिन्दी"],["hmn","Hmoob"],["hu","Magyar"],["is","Íslenska"],["ig","Igbo"],["ilo","Ilokano"],["id","Bahasa Indonesia"],["ga","Gaeilge"],["it","Italiano"],["ja","日本語"],["jw","Basa Jawa"],["kn","ಕನ್ನಡ"],["kk","Қазақ"],["km","ខ្មែរ"],["rw","Kinyarwanda"],["gom","कोंकणी"],["ko","한국어"],["kri","Krio"],["ku","Kurdî"],["ckb","کوردی (سۆرانی)"],["ky","Кыргызча"],["lo","ລາວ"],["la","Latina"],["lv","Latviešu"],["ln","Lingála"],["lt","Lietuvių"],["lg","Luganda"],["lb","Lëtzebuergesch"],["mk","Македонски"],["mai","मैथिली"],["mg","Malagasy"],["ms","Bahasa Melayu"],["ml","മലയാളം"],["mt","Malti"],["mi","Māori"],["mr","मराठी"],["mni-Mtei","ꯃꯤꯇꯩꯂꯣꯟ"],["lus","Mizo"],["mn","Монгол"],["my","မြန်မာ"],["ne","नेपाली"],["no","Norsk"],["or","ଓଡ଼ିଆ"],["om","Oromoo"],["ps","پښتو"],["fa","فارسی"],["pl","Polski"],["pt","Português"],["pa","ਪੰਜਾਬੀ"],["qu","Runasimi"],["ro","Română"],["ru","Русский"],["sm","Gagana Sāmoa"],["sa","संस्कृतम्"],["gd","Gàidhlig"],["nso","Sepedi"],["sr","Српски"],["st","Sesotho"],["sn","ChiShona"],["sd","سنڌي"],["si","සිංහල"],["sk","Slovenčina"],["sl","Slovenščina"],["so","Soomaali"],["es","Español"],["su","Basa Sunda"],["sw","Kiswahili"],["sv","Svenska"],["tg","Тоҷикӣ"],["ta","தமிழ்"],["tt","Татар"],["te","తెలుగు"],["th","ไทย"],["ti","ትግርኛ"],["ts","Xitsonga"],["tr","Türkçe"],["tk","Türkmen"],["ak","Twi"],["uk","Українська"],["ur","اردو"],["ug","ئۇيغۇرچە"],["uz","Oʻzbek"],["vi","Tiếng Việt"],["cy","Cymraeg"],["xh","isiXhosa"],["yi","ייִדיש"],["yo","Yorùbá"],["zu","isiZulu"]];
var OK={};L.forEach(function(x){OK[x[0]]=x[1]});
var RTL={ar:1,iw:1,fa:1,ur:1,ps:1,sd:1,yi:1,ug:1,ckb:1,dv:1};
function map(c){if(!c)return"en";c=String(c).replace("_","-");var lc=c.toLowerCase(),b=lc.split("-")[0];
 if(b==="zh")return /tw|hk|mo|hant/.test(lc)?"zh-TW":"zh-CN";if(b==="he")return"iw";if(b==="jv")return"jw";if(b==="nb"||b==="nn")return"no";if(b==="fil")return"tl";if(b==="mni")return"mni-Mtei";
 return OK[b]?b:"en";}
function ls(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){return null}}
function doms(){var h=location.hostname,p=h.split("."),r=[h,"."+h];if(p.length>2)r.push("."+p.slice(-2).join("."));return r;}
function cookie(v){var ex=v?"; max-age=31536000":"; expires=Thu, 01 Jan 1970 00:00:00 GMT",val=v?"/en/"+v:"";
 D.cookie="googtrans="+val+"; path=/"+ex;doms().forEach(function(d){D.cookie="googtrans="+val+"; path=/; domain="+d+ex});}
var saved=ls(KEY),lang=saved&&(saved==="en"||OK[saved])?saved:null;
if(!lang){lang=map((navigator.languages&&navigator.languages[0])||navigator.language);ls(KEY,lang);}
/* styles */
var css=".goog-te-banner-frame,iframe.skiptranslate,body>.skiptranslate,#goog-gt-tt,.goog-te-balloon-frame,.goog-tooltip,.VIpgJd-ZVi9od-ORHb-OEVmcd,.VIpgJd-ZVi9od-aZ2wEe-wOHMyf,.VIpgJd-ZVi9od-aZ2wEe-OiiCO,.VIpgJd-yAWNEb-L7lbkb,#cc_gt{display:none!important}"
+"html,body{top:0!important}body{position:static}.goog-text-highlight,.VIpgJd-yAWNEb-VIpgJd-fmcmS-sn54Q{background:none!important;box-shadow:none!important;border:0!important}"
+".cclg{position:relative;flex:none;display:inline-flex;align-items:center}"
+".cclg>button{display:inline-flex;align-items:center;justify-content:center;gap:3px;height:34px;min-width:34px;padding:0 7px;border-radius:999px;border:1px solid rgba(255,210,63,.55);background:rgba(0,0,0,.25);color:#ffd23f;font:700 12px/1 system-ui,-apple-system,sans-serif;cursor:pointer;white-space:nowrap}"
+".cclg>button .g{font-size:16px;line-height:1}.cclg>button:focus-visible{outline:2px solid #ffd23f;outline-offset:2px}"
+".cclgp{position:fixed;z-index:2147483000;top:60px;right:8px;width:min(300px,calc(100vw - 16px));max-height:min(70vh,520px);display:flex;flex-direction:column;background:#0b1d10;border:1px solid #2c5a36;border-radius:14px;box-shadow:0 14px 40px rgba(0,0,0,.6);font:14px/1.3 system-ui,-apple-system,sans-serif;color:#e8f5e9;direction:ltr;text-align:left}"
+".cclgp[hidden]{display:none}.cclgp .hd{display:flex;gap:6px;padding:10px;border-bottom:1px solid #1d3b24}.cclgp input{flex:1;min-width:0;padding:8px 10px;border-radius:10px;border:1px solid #2c5a36;background:#06140a;color:#e8f5e9;font-size:15px}"
+".cclgp .en{padding:8px 10px;border-radius:10px;border:1px solid #ffd23f;background:#ffd23f;color:#0b1d10;font-weight:800;cursor:pointer}"
+".cclgp ul{list-style:none;margin:0;padding:4px;overflow:auto;-webkit-overflow-scrolling:touch}.cclgp li{margin:0}.cclgp li button{display:block;width:100%;text-align:left;padding:9px 10px;border:0;border-radius:8px;background:none;color:inherit;font:inherit;cursor:pointer}"
+".cclgp li button:hover,.cclgp li button.on{background:#163020;color:#ffd23f}.cclgp .ft{padding:6px 10px;font-size:11px;color:#8fb59a;border-top:1px solid #1d3b24}"
+"html.translated-ltr th,html.translated-rtl th{white-space:normal!important}html.translated-ltr td,html.translated-rtl td{overflow-wrap:anywhere}"
+".cclg.fl{position:fixed;left:10px;bottom:10px;z-index:2147482000}"
+"html.cc-rtl p,html.cc-rtl h1,html.cc-rtl h2,html.cc-rtl h3,html.cc-rtl h4,html.cc-rtl li,html.cc-rtl summary,html.cc-rtl dd,html.cc-rtl blockquote{direction:rtl}"
+"html.cc-rtl .notranslate,html.cc-rtl code,html.cc-rtl #jupiter-plugin,html.cc-rtl table,html.cc-rtl .cclgp{direction:ltr;unicode-bidi:isolate}";
var st=D.createElement("style");st.textContent=css;(D.head||H).appendChild(st);
if(lang!=="en"){cookie(lang);if(RTL[lang])H.classList.add("cc-rtl");}else cookie("");
/* never-translate rules */
var NOSEL="code,kbd,.ca,#ca,#ca-sec .ca,.ccf-cabox,.ccbrand,a.brand,.brand b,#jupiter-plugin,#iframe-widget,[id^=jupiter],[class*=jupiter],.tok,.sci,.fci,#gres,.cclgp,.cclg,input,textarea,select,svg,script,style";
var RX=/(\$[A-Z][A-Za-z0-9]{1,11}\b|\b[1-9A-HJ-NP-Za-km-z]{32,44}\b|\b0x[a-fA-F0-9]{40}\b|\b[1-9A-HJ-NP-Za-km-z]{3,6}(?:…|\.\.\.)[1-9A-HJ-NP-Za-km-z]{3,6}\b|Craic (?:Coin|Hub|Swap|Wallet|Bot)|\bCRAIC\b)/;
var NUM=/^[\s$€£+\-−~≈<>]*[\d][\d.,\s]*(%|[KMBTkmbt]|x|SOL|USD|USDC)?[\s%+]*$/;
var INL={B:1,STRONG:1,SPAN:1,A:1,EM:1,I:1,U:1,SMALL:1,KBD:1};
function pad(el){if(lang==="en"||!INL[el.tagName])return;var ns=el.nextSibling,ps=el.previousSibling,lt=el.lastChild,ft=el.firstChild;
 if(ns&&ns.nodeType===3&&/^\s/.test(ns.nodeValue)&&lt&&lt.nodeType===3&&!/\s$/.test(lt.nodeValue)){lt.nodeValue+=" ";ns.nodeValue=ns.nodeValue.replace(/^\s+/,"");}
 if(ps&&ps.nodeType===3&&/\s$/.test(ps.nodeValue)&&ft&&ft.nodeType===3&&!/^\s/.test(ft.nodeValue)){ft.nodeValue=" "+ft.nodeValue;ps.nodeValue=ps.nodeValue.replace(/\s+$/,"");}}
function mark(el){if(el.nodeType===1&&!el.classList.contains("notranslate")){el.classList.add("notranslate");el.setAttribute("translate","no");pad(el);}}
function skip(n){for(var e=n.parentNode;e&&e!==D.body;e=e.parentNode){if(e.nodeType!==1)continue;if(e.classList&&e.classList.contains("notranslate"))return true;var t=e.tagName;if(t==="FONT"||t==="SCRIPT"||t==="STYLE"||t==="TEXTAREA")return true;}return false;}
function scan(root){if(!root||!D.body)return;root=root.nodeType===1?root:root.parentNode;if(!root||!root.querySelectorAll)return;
 try{if(root.matches&&root.matches(NOSEL))mark(root);root.querySelectorAll(NOSEL).forEach(mark);
 root.querySelectorAll("td,th").forEach(function(td){if(NUM.test(td.textContent))mark(td)});}catch(e){}
 var w=D.createTreeWalker(root,NodeFilter.SHOW_TEXT,null),n,todo=[];
 while(n=w.nextNode()){var v=n.nodeValue;if(v&&v.length>2&&RX.test(v)&&!skip(n))todo.push(n);}
 todo.forEach(function(t){var v=t.nodeValue,p=t.parentNode;if(!p)return;
  if(p.childNodes.length===1&&v.replace(new RegExp(RX.source,"g"),"").trim()===""){mark(p);return;}
  var f=D.createDocumentFragment(),parts=v.split(new RegExp("(\\s?(?:"+RX.source.slice(1,-1)+")\\s?)","g"));
  for(var i=0;i<parts.length;i++){if(!parts[i])continue;if(i%2){var s=D.createElement("span");s.className="notranslate";s.setAttribute("translate","no");s.textContent=parts[i];f.appendChild(s);}else f.appendChild(D.createTextNode(parts[i]));}
  p.replaceChild(f,t);});}
var pend=[],tm=0;
function queue(n){pend.push(n);if(!tm)tm=setTimeout(function(){tm=0;var q=pend;pend=[];q.forEach(function(x){if(x.isConnected)scan(x)})},0);}
/* picker UI */
var box,btn,pan;
function label(){return lang==="en"?"EN":lang.split("-")[0].toUpperCase().slice(0,3);}
function build(){
 box=D.createElement("div");box.className="cclg notranslate";box.setAttribute("translate","no");
 btn=D.createElement("button");btn.type="button";btn.setAttribute("aria-label","Language");btn.setAttribute("aria-haspopup","true");btn.title="Language";
 btn.innerHTML='<span class="g" aria-hidden="true">🌐</span><span class="c">'+label()+'</span>';box.appendChild(btn);
 pan=D.createElement("div");pan.className="cclgp notranslate";pan.setAttribute("translate","no");pan.hidden=true;pan.setAttribute("role","dialog");pan.setAttribute("aria-label","Choose language");
 pan.innerHTML='<div class="hd"><input type="search" placeholder="Search language…" aria-label="Search language"><button type="button" class="en">English</button></div><ul></ul><div class="ft">Automatic translation by Google. Addresses, tickers and names stay as they are.</div>';
 var ul=pan.querySelector("ul");
 L.forEach(function(x){var li=D.createElement("li"),b=D.createElement("button");b.type="button";b.textContent=x[1];b.dataset.l=x[0];b.lang=x[0];if(x[0]===lang)b.className="on";li.appendChild(b);ul.appendChild(li);});
 ul.addEventListener("click",function(e){var b=e.target.closest("button");if(b)choose(b.dataset.l)});
 pan.querySelector(".en").addEventListener("click",function(){choose("en")});
 var inp=pan.querySelector("input");inp.addEventListener("input",function(){var q=inp.value.toLowerCase().trim();ul.querySelectorAll("li").forEach(function(li){var b=li.firstChild;li.hidden=!!q&&b.textContent.toLowerCase().indexOf(q)<0&&b.dataset.l.toLowerCase().indexOf(q)!==0;})});
 btn.addEventListener("click",function(e){e.stopPropagation();toggle(pan.hidden)});
 D.addEventListener("click",function(e){if(!pan.hidden&&!pan.contains(e.target)&&!box.contains(e.target))toggle(false)});
 D.addEventListener("keydown",function(e){if(e.key==="Escape"&&!pan.hidden)toggle(false)});
 D.body.appendChild(pan);place();}
function toggle(o){if(o){var r=btn.getBoundingClientRect();pan.style.top=Math.min(r.bottom+6,innerHeight-200)+"px";var vw=(window.visualViewport&&visualViewport.width)||D.documentElement.clientWidth||innerWidth,pw=Math.min(300,vw-16);pan.style.width=pw+"px";pan.style.right="auto";pan.style.left=Math.max(8,Math.min(r.right-pw,vw-pw-8))+"px";if(box.classList.contains("fl")){pan.style.top="auto";pan.style.bottom="54px";pan.style.left="8px";pan.style.right="auto";}}
 pan.hidden=!o;btn.setAttribute("aria-expanded",o?"true":"false");if(o){var on=pan.querySelector("li .on");if(on){var u=pan.querySelector("ul");u.scrollTop=Math.max(0,on.offsetTop-u.clientHeight/2);}}}
function place(){var t;
 if((t=D.querySelector(".ccnav-in .cchb"))){t.parentNode.insertBefore(box,t);return;}
 if((t=D.querySelector("header .bar .wal"))){t.parentNode.insertBefore(box,t);return;}
 box.classList.add("fl");D.body.appendChild(box);}
/* google element */
var loaded=0;
function loadGT(){if(loaded)return;loaded=1;var d=D.createElement("div");d.id="cc_gt";D.body.appendChild(d);
 window.ccGTInit=function(){try{new google.translate.TranslateElement({pageLanguage:"en",autoDisplay:false},"cc_gt")}catch(e){}};
 var s=D.createElement("script");s.src="https://translate.google.com/translate_a/element.js?cb=ccGTInit";s.async=true;D.body.appendChild(s);}
function choose(l){toggle(false);if(l===lang&&l!=="en")return;var prev=lang;lang=l;ls(KEY,l);
 if(l==="en"){cookie("");location.reload();return;}
 cookie(l);H.classList.toggle("cc-rtl",!!RTL[l]);btn.querySelector(".c").textContent=label();
 pan.querySelectorAll("li button").forEach(function(b){b.classList.toggle("on",b.dataset.l===l)});
 var c=D.querySelector("select.goog-te-combo");
 if(c&&prev!=="en"){c.value=l;c.dispatchEvent(new Event("change"));}else if(!loaded){loadGT();}else location.reload();}
window.ccSetLang=choose;
function init(){scan(D.body);new MutationObserver(function(ms){ms.forEach(function(m){m.addedNodes.forEach(function(n){if(n.nodeType===1||n.nodeType===3)queue(n)})})}).observe(D.body,{childList:true,subtree:true});
 build();if(lang!=="en")loadGT();}
if(D.readyState==="loading")D.addEventListener("DOMContentLoaded",init);else init();
})();
