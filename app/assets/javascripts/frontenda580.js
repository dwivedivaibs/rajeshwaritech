!function(){"use strict";var e,t=function(e,t){for(var n=0;n<e.length;n++)t(e[n])},n=e=>{var t=e.split("#");return t.length>1?t[0]:e},r=(e,t,n)=>{for(var r=e instanceof NodeList?e:[e],o=0;o<r.length;o++)r[o]&&r[o].addEventListener(t,n)},o=(e,t)=>{l(e,t,"toggle")},i=(e,t)=>{l(e,t,"add")},a=(e,t)=>{l(e,t,"remove")},l=(e,t,n)=>{for(var r=t.split(" "),o=e instanceof NodeList?e:[e],i=0;i<o.length;i++)o[i]&&o[i].classList[n].apply(o[i].classList,r)},d=null,u=2,s=()=>{var{masonryStatus:e,masonryColumns:t,blogLayout:n}=NeveProperties;"enabled"!==e||t<2||null!==(d=document.querySelector(".nv-index-posts .posts-wrapper"))&&imagesLoaded(d,()=>{window.nvMasonry=new Masonry(d,{itemSelector:"article.layout-".concat(n),columnWidth:"article.layout-".concat(n),percentPosition:!0})})},c=()=>{"enabled"===NeveProperties.infScroll&&null!==document.querySelector(".nv-index-posts .posts-wrapper")&&function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5,r=new IntersectionObserver(r=>{if(!(r[0].intersectionRatio<=n)){t();var o=setInterval(()=>{var n=e.getBoundingClientRect(),{top:r,left:i,right:a,bottom:l}=n,{innerWidth:d,innerHeight:u}=window;r>=0&&i>=0&&a<=d&&l<=u?t():clearInterval(o)},750)}});r.observe(e)}(document.querySelector(".infinite-scroll-trigger"),()=>{if(parent.wp.customize)return parent.wp.customize.requestChangesetUpdate().then(()=>{v()}),!1;v()})},v=()=>{var e=document.querySelector(".infinite-scroll-trigger");if(null!==e){if(document.querySelector(".nv-loader").style.display="block",u>NeveProperties.maxPages)return e.parentNode.removeChild(e),void(document.querySelector(".nv-loader").style.display="none");var t,n,r,o,i=document.querySelector(".nv-index-posts .posts-wrapper"),a=NeveProperties.lang,l=NeveProperties.endpoint+u,d=p(a?l+"/"+a:l);u++,t=d,n=e=>{if(i.innerHTML+=JSON.parse(e),"enabled"!==NeveProperties.masonryStatus)return!1;window.nvMasonry.reloadItems(),window.nvMasonry.layout()},r=NeveProperties.query,(o=new XMLHttpRequest).onload=()=>{4===o.readyState&&200===o.status&&n(o.response)},o.onerror=()=>{},o.open("courses/postman-certified-expert/index.html",t,!0),o.setRequestHeader("Content-Type","application/json; charset=UTF-8"),o.send(r)}},p=e=>void 0===wp.customize?e:(e+="?customize_changeset_uuid="+wp.customize.settings.changeset.uuid+"&customize_autosaved=on","undefined"==typeof _wpCustomizeSettings?e:e+="&customize_preview_nonce="+_wpCustomizeSettings.nonce.preview),m=()=>{var r;e=window.location.href,y(),function(){var r=document.querySelectorAll(".nv-nav-wrap a");if(0===r.length)return;t(r,t=>{t.addEventListener("click",t=>{var r=t.target.getAttribute("href");if(null===r)return!1;n(r)===n(e)&&window.HFG.toggleMenuSidebar(!1)})})}(),g(),w(),h(),!0===/(Trident|MSIE|Edge)/.test(window.navigator.userAgent)&&(r=document.querySelectorAll('.header--row[data-show-on="desktop"] .sub-menu'),t(r,e=>{var t=e.parentNode;t.addEventListener("mouseenter",()=>{i(e,"dropdown-open")}),t.addEventListener("mouseleave",()=>{a(e,"dropdown-open")})})),window.HFG.initSearch=function(){w(),g()}},y=()=>{var e,n,{isRTL:r}=NeveProperties,o=document.querySelectorAll(".sub-menu, .minimal .nv-nav-search");if(0!==o.length){var i=window.innerWidth;t(o,t=>{var o=t.getBoundingClientRect(),a=o.left;a<0&&(e=r?"auto":0,n=r?"-100%":"auto",t.style.right=n,t.style.left=e),a+o.width>=i&&(n=r?0:"100%",e="auto",t.style.right=n,t.style.left=e)})}};function g(){var e=document.querySelectorAll(".caret-wrap");t(e,e=>{e.addEventListener("click",t=>{t.preventDefault(),t.stopPropagation();var n=e.parentNode.parentNode.querySelector(".sub-menu");o(e,"dropdown-open"),o(n,"dropdown-open"),f(document.querySelectorAll(".dropdown-open"),"dropdown-open")})})}function w(){var e=document.querySelectorAll(".nv-nav-search"),n=document.querySelectorAll(".menu-item-nav-search"),r=document.querySelectorAll(".close-responsive-search");t(n,e=>{e.addEventListener("click",t=>{t.preventDefault(),t.stopPropagation(),o(e,"active"),setTimeout(()=>{e.querySelector(".search-field").focus()},50),window.innerWidth<=960||f(e,"active")})}),t(e,e=>{e.addEventListener("click",e=>{e.stopPropagation()})}),t(r,e=>{e.addEventListener("click",e=>{e.preventDefault(),t(n,e=>{a(e,"active")});var r=document.querySelector(".nav-clickaway-overlay");null!==r&&r.parentNode.removeChild(r)})})}function h(){var e=document.querySelector(".header--row .menu-item-nav-cart");if(null!==e){var t=e.querySelector(".nv-nav-cart");null!==t&&(t.style.left=e.getBoundingClientRect().left<350?0:null)}}function f(e,t){var n=document.querySelector(".nav-clickaway-overlay");null!==n&&n.parentNode.removeChild(n),n=document.createElement("div"),i(n,"nav-clickaway-overlay");var r=document.querySelector("header.header");r.parentNode.insertBefore(n,r),n.addEventListener("click",()=>{a(e,t),n.parentNode.removeChild(n)})}window.addEventListener("resize",h);var S,b=function(){this.options={menuToggleDuration:300},this.init()};function q(){window.HFG=new b,(()=>{if(null===document.querySelector(".blog.nv-index-posts"))return!1;s(),c()})(),m()}function L(){y()}b.prototype.init=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!1===e){var t=document.querySelectorAll(".close-sidebar-panel .navbar-toggle");r(t,"click",()=>{this.toggleMenuSidebar(!1)})}var n=document.querySelectorAll(".menu-mobile-toggle");r(n,"click",()=>{this.toggleMenuSidebar(!0)});var o=document.querySelector(".header-menu-sidebar-overlay");r(o,"click",function(){this.toggleMenuSidebar(!1)}.bind(this))},b.prototype.toggleMenuSidebar=function(e){var t=document.querySelectorAll(".menu-mobile-toggle");if(a(document.body,"hiding-header-menu-sidebar"),!NeveProperties.isCustomize&&document.body.classList.contains("is-menu-sidebar")||!1===e){var n=document.querySelector(".nav-clickaway-overlay");null!==n&&n.parentNode.removeChild(n),i(document.body,"hiding-header-menu-sidebar"),a(document.body,"is-menu-sidebar"),a(t,"is-active"),setTimeout(function(){a(document.body,"hiding-header-menu-sidebar")}.bind(this),1e3)}else i(document.body,"is-menu-sidebar"),i(t,"is-active")},window.addEventListener("load",()=>{q()}),window.addEventListener("resize",()=>{clearTimeout(S),S=setTimeout(L,500)})}();
