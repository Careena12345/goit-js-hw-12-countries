(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(n,e,a){},QfWi:function(n,e,a){"use strict";a.r(e);a("L1EO"),a("lYjL"),a("4owi"),a("IvQZ"),a("D/wG"),a("4NM0"),a("WoWj"),a("JBxO"),a("FdtR");var t=function(){return fetch("https://restcountries.eu/rest/v2/").then((function(n){return n.json()}))},l=a("xV2K"),o=a.n(l),r=a("vn+x"),u=a.n(r),i=a("dIfx");a("IlkV");i.a.defaults.styling="material",i.a.defaults.icons="material";var s=function(n){return i.a.error({text:n})},c=function(n){return i.a.notice({text:n})},p={warningMissingMatches:"No match found!\nPlease, enter another query",warningTooManyMatches:"Too many matches found!\nPlease, enter a more specific query"},f={input:document.querySelector(".input-js"),searchResults:document.querySelector(".search-results"),foundContry:document.querySelector(".country-description-js")},m=a("jffb");function h(){f.searchResults.innerHTML="",f.foundContry.innerHTML=""}f.input.addEventListener("input",m((function(n){n.preventDefault();var e=n.target.value.toLowerCase();t(e).then((function(n){return n.filter((function(n){return n.name.toLowerCase().includes(e)}))})).then((function(n){var a,t,l=Array.from(n);0===l.length?s(p.warningMissingMatches):0===e.length?h():1===l.length?(h(),t=u()(n[0]),f.foundContry.insertAdjacentHTML("afterbegin",t)):l.length>1&&l.length<=10?(h(),a=o()(n),f.searchResults.insertAdjacentHTML("beforeend",a)):(h(),c(p.warningTooManyMatches))})).catch((function(n){return console.log(n)}))}),500))},"vn+x":function(n,e,a){var t=a("mp5j");n.exports=(t.default||t).template({1:function(n,e,a,t,l){return"                <li>"+n.escapeExpression(n.lambda(null!=e?e.name:e,e))+"</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(n,e,a,t,l){var o,r,u=null!=e?e:n.nullContext||{},i=n.hooks.helperMissing,s=n.escapeExpression;return'<p class="country-name">'+s("function"==typeof(r=null!=(r=a.name||(null!=e?e.name:e))?r:i)?r.call(u,{name:"name",hash:{},data:l,loc:{start:{line:1,column:24},end:{line:1,column:32}}}):r)+'</p>\r\n<div class="description">\r\n    <div>\r\n        <p><span class="headline">Capital:</span> '+s("function"==typeof(r=null!=(r=a.capital||(null!=e?e.capital:e))?r:i)?r.call(u,{name:"capital",hash:{},data:l,loc:{start:{line:4,column:50},end:{line:4,column:61}}}):r)+'</p>\r\n        <p><span class="headline">Population:</span> '+s("function"==typeof(r=null!=(r=a.population||(null!=e?e.population:e))?r:i)?r.call(u,{name:"population",hash:{},data:l,loc:{start:{line:5,column:53},end:{line:5,column:67}}}):r)+'</p>\r\n        <p><span class="headline">Languages:</span>\r\n            <ul>\r\n'+(null!=(o=a.each.call(u,null!=e?e.languages:e,{name:"each",hash:{},fn:n.program(1,l,0),inverse:n.noop,data:l,loc:{start:{line:8,column:16},end:{line:10,column:25}}}))?o:"")+'            </ul>\r\n        </p>\r\n    </div>\r\n    <img src="'+s("function"==typeof(r=null!=(r=a.flag||(null!=e?e.flag:e))?r:i)?r.call(u,{name:"flag",hash:{},data:l,loc:{start:{line:14,column:14},end:{line:14,column:22}}}):r)+'" alt="This is the flag!" class="flag" width="300px">\r\n</div>'},useData:!0})},xV2K:function(n,e,a){var t=a("mp5j");n.exports=(t.default||t).template({1:function(n,e,a,t,l){var o;return"<li>"+n.escapeExpression("function"==typeof(o=null!=(o=a.name||(null!=e?e.name:e))?o:n.hooks.helperMissing)?o.call(null!=e?e:n.nullContext||{},{name:"name",hash:{},data:l,loc:{start:{line:2,column:4},end:{line:2,column:12}}}):o)+"</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(n,e,a,t,l){var o;return null!=(o=a.each.call(null!=e?e:n.nullContext||{},e,{name:"each",hash:{},fn:n.program(1,l,0),inverse:n.noop,data:l,loc:{start:{line:1,column:0},end:{line:3,column:9}}}))?o:""},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.f0f830747cd61632fd47.js.map