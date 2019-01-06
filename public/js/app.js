!function(t,e){var n=e(t,t.document);t.lazySizes=n,"object"==typeof module&&module.exports&&(module.exports=n)}(window,function(t,e){"use strict";if(e.getElementsByClassName){var n,i,a=e.documentElement,r=t.Date,s=t.HTMLPictureElement,o="addEventListener",l="getAttribute",c=t[o],u=t.setTimeout,d=t.requestAnimationFrame||u,f=t.requestIdleCallback,m=/^picture$/i,z=["load","error","lazyincluded","_lazyloaded"],g={},v=Array.prototype.forEach,y=function(t,e){return g[e]||(g[e]=new RegExp("(\\s|^)"+e+"(\\s|$)")),g[e].test(t[l]("class")||"")&&g[e]},h=function(t,e){y(t,e)||t.setAttribute("class",(t[l]("class")||"").trim()+" "+e)},p=function(t,e){var n;(n=y(t,e))&&t.setAttribute("class",(t[l]("class")||"").replace(n," "))},C=function(t,e,n){var i=n?o:"removeEventListener";n&&C(t,e),z.forEach(function(n){t[i](n,e)})},b=function(t,i,a,r,s){var o=e.createEvent("CustomEvent");return a||(a={}),a.instance=n,o.initCustomEvent(i,!r,!s,a),t.dispatchEvent(o),o},A=function(e,n){var a;!s&&(a=t.picturefill||i.pf)?a({reevaluate:!0,elements:[e]}):n&&n.src&&(e.src=n.src)},E=function(t,e){return(getComputedStyle(t,null)||{})[e]},w=function(t,e,n){for(n=n||t.offsetWidth;n<i.minSize&&e&&!t._lazysizesWidth;)n=e.offsetWidth,e=e.parentNode;return n},M=function(){var t,n,i=[],a=[],r=i,s=function(){var e=r;for(r=i.length?a:i,t=!0,n=!1;e.length;)e.shift()();t=!1},o=function(i,a){t&&!a?i.apply(this,arguments):(r.push(i),n||(n=!0,(e.hidden?u:d)(s)))};return o._lsFlush=s,o}(),N=function(t,e){return e?function(){M(t)}:function(){var e=this,n=arguments;M(function(){t.apply(e,n)})}},_=function(t){var e,n=0,a=125,s=i.ricTimeout,o=function(){e=!1,n=r.now(),t()},l=f&&i.ricTimeout?function(){f(o,{timeout:s}),s!==i.ricTimeout&&(s=i.ricTimeout)}:N(function(){u(o)},!0);return function(t){var i;(t=t===!0)&&(s=33),e||(e=!0,i=a-(r.now()-n),0>i&&(i=0),t||9>i&&f?l():u(l,i))}},W=function(t){var e,n,i=99,a=function(){e=null,t()},s=function(){var t=r.now()-n;i>t?u(s,i-t):(f||a)(a)};return function(){n=r.now(),e||(e=u(s,i))}};!function(){var e,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:300};i=t.lazySizesConfig||t.lazysizesConfig||{};for(e in n)e in i||(i[e]=n[e]);t.lazySizesConfig=i,u(function(){i.init&&B()})}();var x=function(){var s,d,f,z,g,w,x,B,F,S,L,R,k,H,O=/^img$/i,P=/^iframe$/i,$="onscroll"in t&&!/glebot/.test(navigator.userAgent),D=0,I=0,q=0,j=-1,G=function(t){q--,t&&t.target&&C(t.target,G),(!t||0>q||!t.target)&&(q=0)},J=function(t,n){var i,r=t,s="hidden"==E(e.body,"visibility")||"hidden"!=E(t,"visibility");for(B-=n,L+=n,F-=n,S+=n;s&&(r=r.offsetParent)&&r!=e.body&&r!=a;)s=(E(r,"opacity")||1)>0,s&&"visible"!=E(r,"overflow")&&(i=r.getBoundingClientRect(),s=S>i.left&&F<i.right&&L>i.top-1&&B<i.bottom+1);return s},K=function(){var t,r,o,c,u,f,m,g,v,y=n.elements;if((z=i.loadMode)&&8>q&&(t=y.length)){r=0,j++,null==k&&("expand"in i||(i.expand=a.clientHeight>500&&a.clientWidth>500?500:370),R=i.expand,k=R*i.expFactor),k>I&&1>q&&j>2&&z>2&&!e.hidden?(I=k,j=0):I=z>1&&j>1&&6>q?R:D;for(;t>r;r++)if(y[r]&&!y[r]._lazyRace)if($)if((g=y[r][l]("data-expand"))&&(f=1*g)||(f=I),v!==f&&(w=innerWidth+f*H,x=innerHeight+f,m=-1*f,v=f),o=y[r].getBoundingClientRect(),(L=o.bottom)>=m&&(B=o.top)<=x&&(S=o.right)>=m*H&&(F=o.left)<=w&&(L||S||F||B)&&(i.loadHidden||"hidden"!=E(y[r],"visibility"))&&(d&&3>q&&!g&&(3>z||4>j)||J(y[r],f))){if(ee(y[r]),u=!0,q>9)break}else!u&&d&&!c&&4>q&&4>j&&z>2&&(s[0]||i.preloadAfterLoad)&&(s[0]||!g&&(L||S||F||B||"auto"!=y[r][l](i.sizesAttr)))&&(c=s[0]||y[r]);else ee(y[r]);c&&!u&&ee(c)}},Q=_(K),U=function(t){h(t.target,i.loadedClass),p(t.target,i.loadingClass),C(t.target,X),b(t.target,"lazyloaded")},V=N(U),X=function(t){V({target:t.target})},Y=function(t,e){try{t.contentWindow.location.replace(e)}catch(n){t.src=e}},Z=function(t){var e,n=t[l](i.srcsetAttr);(e=i.customMedia[t[l]("data-media")||t[l]("media")])&&t.setAttribute("media",e),n&&t.setAttribute("srcset",n)},te=N(function(t,e,n,a,r){var s,o,c,d,z,g;(z=b(t,"lazybeforeunveil",e)).defaultPrevented||(a&&(n?h(t,i.autosizesClass):t.setAttribute("sizes",a)),o=t[l](i.srcsetAttr),s=t[l](i.srcAttr),r&&(c=t.parentNode,d=c&&m.test(c.nodeName||"")),g=e.firesLoad||"src"in t&&(o||s||d),z={target:t},g&&(C(t,G,!0),clearTimeout(f),f=u(G,2500),h(t,i.loadingClass),C(t,X,!0)),d&&v.call(c.getElementsByTagName("source"),Z),o?t.setAttribute("srcset",o):s&&!d&&(P.test(t.nodeName)?Y(t,s):t.src=s),r&&(o||d)&&A(t,{src:s})),t._lazyRace&&delete t._lazyRace,p(t,i.lazyClass),M(function(){(!g||t.complete&&t.naturalWidth>1)&&(g?G(z):q--,U(z))},!0)}),ee=function(t){var e,n=O.test(t.nodeName),a=n&&(t[l](i.sizesAttr)||t[l]("sizes")),r="auto"==a;(!r&&d||!n||!t[l]("src")&&!t.srcset||t.complete||y(t,i.errorClass)||!y(t,i.lazyClass))&&(e=b(t,"lazyunveilread").detail,r&&T.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,q++,te(t,e,r,a,n))},ne=function(){if(!d){if(r.now()-g<999)return void u(ne,999);var t=W(function(){i.loadMode=3,Q()});d=!0,i.loadMode=3,Q(),c("scroll",function(){3==i.loadMode&&(i.loadMode=2),t()},!0)}};return{_:function(){g=r.now(),n.elements=e.getElementsByClassName(i.lazyClass),s=e.getElementsByClassName(i.lazyClass+" "+i.preloadClass),H=i.hFac,c("scroll",Q,!0),c("resize",Q,!0),t.MutationObserver?new MutationObserver(Q).observe(a,{childList:!0,subtree:!0,attributes:!0}):(a[o]("DOMNodeInserted",Q,!0),a[o]("DOMAttrModified",Q,!0),setInterval(Q,999)),c("hashchange",Q,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(t){e[o](t,Q,!0)}),/d$|^c/.test(e.readyState)?ne():(c("load",ne),e[o]("DOMContentLoaded",Q),u(ne,2e4)),n.elements.length?(K(),M._lsFlush()):Q()},checkElems:Q,unveil:ee}}(),T=function(){var t,n=N(function(t,e,n,i){var a,r,s;if(t._lazysizesWidth=i,i+="px",t.setAttribute("sizes",i),m.test(e.nodeName||""))for(a=e.getElementsByTagName("source"),r=0,s=a.length;s>r;r++)a[r].setAttribute("sizes",i);n.detail.dataAttr||A(t,n.detail)}),a=function(t,e,i){var a,r=t.parentNode;r&&(i=w(t,r,i),a=b(t,"lazybeforesizes",{width:i,dataAttr:!!e}),a.defaultPrevented||(i=a.detail.width,i&&i!==t._lazysizesWidth&&n(t,r,a,i)))},r=function(){var e,n=t.length;if(n)for(e=0;n>e;e++)a(t[e])},s=W(r);return{_:function(){t=e.getElementsByClassName(i.autosizesClass),c("resize",s)},checkElems:s,updateElem:a}}(),B=function(){B.i||(B.i=!0,T._(),x._())};return n={cfg:i,autoSizer:T,loader:x,init:B,uP:A,aC:h,rC:p,hC:y,fire:b,gW:w,rAF:M}}});

// 获取懒加载图片路径添加为背景
$(function() {
    $('.item').mouseover(function() {
      var i = $(this).index() - 1;

      if (i > 0 && i < 7) {
        var pic = $('.slide')
          .eq(i)
          .children('.banBgPic')
          .attr('data-src');
        $('.slide')
          .eq(i)
          .css({
            'background-image': 'url(' + pic + ')',
            'background-repeat': 'no-repeat',
            'background-size': 'cover'
          });
      } else if ((i = 7)) {
        var pic = $('.slide')
          .eq(i)
          .children('.banBgPic')
          .attr('data-src');
        $('.slide')
          .eq(i)
          .css({
            'background-image': 'url(' + pic + ')',
            'background-repeat': 'repeat-y',
            'background-size': '100% 100%'
          });
      }
    });
  });

  $('.down .box')
        .mouseenter(function() {
          $(this)
            .children('.float')
            .show();
        })
        .mouseleave(function() {
          $(this)
            .children('.float')
            .hide();
        });

      $('.item').mouseover(function() {
        $('.slideCons_ a').css({ display: 'block' });
      });

      $('.beijing').addClass('beijing2');
      $('.item').mouseover(function() {
        $(this)
          .addClass('beijing1')
          .siblings()
          .removeClass('beijing1')
          .removeClass('beijing2');
      });
      $('.beijing').mouseover(function() {
        $(this).addClass('beijing2');
      });

      //解决首屏图片加载慢问题
      var ele = document.querySelector('.shouyeimg2');
      var imgUrl = document.querySelector('.item01').getAttribute('data-src');
      var imgObject = new Image();
      imgObject.src = imgUrl;
      imgObject.onload = function() {
        ele.src = imgUrl;
        // ele.setAttribute('class', 'thumbnails complete');
      };

    //   var ele1 = document.querySelector('.shouyeimg3');
    //   var imgUrl1 = document.querySelector('.item02').getAttribute('data-src');
    //   var imgObject1 = new Image();
    //   imgObject1.src = imgUrl1;
    //   imgObject1.onload = function() {
    //     ele1.src = imgUrl1;
    //     // ele.setAttribute('class', 'thumbnails complete');
    //   };

      $('.slide')
        .eq(0)
        .removeClass('qmhide')
        .addClass('qmshow')
        .siblings('.slide')
        .removeClass('qmshow')
        .addClass('qmhide');
      $('.banner-tab .item').mouseenter(function() {
        var index = $(this).index();
        // debugger;
        $('.slide')
          .eq(index - 1)
          .removeClass('qmhide')
          .addClass('qmshow')
          .siblings('.slide')
          .removeClass('qmshow')
          .addClass('qmhide');
      });


      $(function () {
        var sTop = $(window).scrollTop();
        var w_h = $(window).height() / 2 - 110 - 50;
        var mTop = 110;
        $(".customerServices_").css({ "bottom": mTop + "px" });
        $(".customerParter").css({ "bottom": mTop + 180 + "px" });
        $(window).scroll(function () {
            sTop = $(window).scrollTop();
            mTop = sTop + 110;
            if (sTop >= w_h) {
                mTop = $(window).height() / 2 - 50;
            }
            $(".customerServices_").css({ "bottom": mTop + "px" });
            $(".customerParter").css({ "bottom": mTop + 180 + "px" });
        })
    })