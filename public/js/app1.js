$(function () {
    var sTop = $(window).scrollTop();
    var w_h = $(window).height() / 2 - 110 - 50;
    var mTop = 110;
    $(".customerServices_").css({
        "bottom": mTop + "px"
    });
    $(".customerParter").css({
        "bottom": mTop + 180 + "px"
    });
    $(window).scroll(function () {
        sTop = $(window).scrollTop();
        mTop = sTop + 110;
        if (sTop >= w_h) {
            mTop = $(window).height() / 2 - 50;
        }
        $(".customerServices_").css({
            "bottom": mTop + "px"
        });
        $(".customerParter").css({
            "bottom": mTop + 180 + "px"
        });
    })
});

//头部导航
$('.menu1').has('.drop-main-menu-wrap').mouseenter(function () {
    $(this).children('.drop-main-menu-wrap').stop().slideDown(200);
    $(this).stop().children('a').addClass('hover');
}).mouseleave(function () {
    $(this).stop().children('.drop-main-menu-wrap').stop().slideUp(200);
    $(this).stop().children('a').removeClass('hover');
});
$('.user-infor-menu').mouseenter(function (event) {
    $('.drop-down-menu').fadeIn(100);
}).mouseleave(function (event) {
    $('.drop-down-menu').fadeOut(100);
});

$('.xinlin').mouseenter(function () {
    $('#xlscy0').stop().slideDown(200);

}).mouseleave(function () {
    $('#xlscy0').stop().slideUp(200);

});


//    返回顶部
$(function () {
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 100) {
                $(".back_top").fadeIn(500);
            } else {
                $(".back_top").fadeOut(500);
            }
        });
        //当点击跳转链接后，回到页面顶部位置
        $(".back_top").click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    });
});


$('.function .code').mouseenter(function () {
    $('.code-big').show()
}).mouseleave(function () {
    $('.code-big').hide();
})
$('.guanbi').click(function (event) {
    /* Act on the event */
    $('.unfold').animate({
        bottom: "-100%"
    }, 700);
    $('.rightbar-consu').animate({
        right: "-16px"
    }, 500);
    $('.footer').addClass('footer315').removeClass('footer390')
});
$('.pinpai').click(function () {
        $('.unfold').animate({
            bottom: 0
        }, 700);
        //        $('.rightbar-consu').animate({right:"-100%"},500);
        $('.footer').removeClass('footer315').addClass('footer390')
    })

    ! function (o) {
        o.isScrollToFixed = function (i) {
            return !!o(i).data("ScrollToFixed")
        }, o.ScrollToFixed = function (i, e) {
            function t() {
                v.trigger("preUnfixed.ScrollToFixed"), p(), v.trigger("unfixed.ScrollToFixed"), C = -1, U = v.offset()
                    .top, z = v.offset().left, g.options.offsets && (z += v.offset().left - v.position().left),
                    -1 == A && (A = z), T = v.css("position"), h = !0, -1 != g.options.bottom && (v.trigger(
                        "preFixed.ScrollToFixed"), d(), v.trigger("fixed.ScrollToFixed"))
            }

            function n() {
                var o = g.options.limit;
                return o ? "function" == typeof o ? o.apply(v) : o : 0
            }

            function s() {
                return "fixed" === T
            }

            function l() {
                return "absolute" === T
            }

            function r() {
                return !(s() || l())
            }

            function d() {
                if (!s()) {
                    var o = v[0].getBoundingClientRect();
                    O.css({
                            display: v.css("display"),
                            width: o.width,
                            height: o.height,
                            "float": v.css("float")
                        }), cssOptions = {
                            "z-index": g.options.zIndex,
                            position: "fixed",
                            top: -1 == g.options.bottom ? f() : "",
                            bottom: -1 == g.options.bottom ? "" : g.options.bottom,
                            "margin-left": "0px"
                        }, g.options.dontSetWidth || (cssOptions.width = v.css("width")), v.css(cssOptions), v.addClass(
                            g.options.baseClassName), g.options.className && v.addClass(g.options.className), T =
                        "fixed"
                }
            }

            function c() {
                var o = n(),
                    i = z;
                g.options.removeOffsets && (i = "", o -= U), cssOptions = {
                        position: "absolute",
                        top: o,
                        left: i,
                        "margin-left": "0px",
                        bottom: ""
                    }, g.options.dontSetWidth || (cssOptions.width = v.css("width")), v.css(cssOptions), T =
                    "absolute"
            }

            function p() {
                r() || (C = -1, O.css("display", "none"), v.css({
                    "z-index": w,
                    width: "",
                    position: S,
                    left: "",
                    top: m,
                    "margin-left": ""
                }), v.removeClass("scroll-to-fixed-fixed"), g.options.className && v.removeClass(g.options
                    .className), T = null)
            }

            function x(o) {
                o != C && (v.css("left", z - o), C = o)
            }

            function f() {
                var o = g.options.marginTop;
                return o ? "function" == typeof o ? o.apply(v) : o : 0
            }

            function u() {
                if (o.isScrollToFixed(v) && !v.is(":hidden")) {
                    var i = h,
                        e = r();
                    h ? r() && (U = v.offset().top, z = v.offset().left) : t();
                    var u = o(window).scrollLeft(),
                        T = o(window).scrollTop(),
                        b = n();
                    g.options.minWidth && o(window).width() < g.options.minWidth ? r() && i || (F(), v.trigger(
                            "preUnfixed.ScrollToFixed"), p(), v.trigger("unfixed.ScrollToFixed")) : g.options.maxWidth &&
                        o(window).width() > g.options.maxWidth ? r() && i || (F(), v.trigger(
                            "preUnfixed.ScrollToFixed"), p(), v.trigger("unfixed.ScrollToFixed")) : -1 == g.options
                        .bottom ? b > 0 && T >= b - f() ? e || l() && i || (F(), v.trigger(
                            "preAbsolute.ScrollToFixed"), c(), v.trigger("unfixed.ScrollToFixed")) : T >= U - f() ?
                        (s() && i || (F(), v.trigger("preFixed.ScrollToFixed"), d(), C = -1, v.trigger(
                            "fixed.ScrollToFixed")), x(u)) : r() && i || (F(), v.trigger(
                            "preUnfixed.ScrollToFixed"), p(), v.trigger("unfixed.ScrollToFixed")) : b > 0 ? T +
                        o(window).height() - v.outerHeight(!0) >= b - (f() || -a()) ? s() && (F(), v.trigger(
                            "preUnfixed.ScrollToFixed"), "absolute" === S ? c() : p(), v.trigger(
                            "unfixed.ScrollToFixed")) : (s() || (F(), v.trigger("preFixed.ScrollToFixed"), d()),
                            x(u), v.trigger("fixed.ScrollToFixed")) : x(u)
                }
            }

            function a() {
                return g.options.bottom ? g.options.bottom : 0
            }

            function F() {
                var o = v.css("position");
                v.trigger("absolute" == o ? "postAbsolute.ScrollToFixed" : "fixed" == o ?
                    "postFixed.ScrollToFixed" : "postUnfixed.ScrollToFixed")
            }
            var g = this;
            g.$el = o(i), g.el = i, g.$el.data("ScrollToFixed", g);
            var T, S, b, m, w, h = !1,
                v = g.$el,
                U = 0,
                z = 0,
                A = -1,
                C = -1,
                O = null,
                y = function () {
                    v.is(":visible") ? (h = !1, u()) : p()
                },
                N = function () {
                    window.requestAnimationFrame ? requestAnimationFrame(u) : u()
                },
                W = function (o) {
                    o = o || window.event, o.preventDefault && o.preventDefault(), o.returnValue = !1
                };
            g.init = function () {
                g.options = o.extend({}, o.ScrollToFixed.defaultOptions, e), w = v.css("z-index"), g.$el.css(
                        "z-index", g.options.zIndex), O = o("<div />"), T = v.css("position"), S = v.css(
                        "position"), b = v.css("float"), m = v.css("top"), r() && g.$el.after(O), o(window)
                    .bind("resize.ScrollToFixed", y), o(window).bind("scroll.ScrollToFixed", N),
                    "ontouchmove" in window && o(window).bind("touchmove.ScrollToFixed", u), g.options.preFixed &&
                    v.bind("preFixed.ScrollToFixed", g.options.preFixed), g.options.postFixed && v.bind(
                        "postFixed.ScrollToFixed", g.options.postFixed), g.options.preUnfixed && v.bind(
                        "preUnfixed.ScrollToFixed", g.options.preUnfixed), g.options.postUnfixed && v.bind(
                        "postUnfixed.ScrollToFixed", g.options.postUnfixed), g.options.preAbsolute && v.bind(
                        "preAbsolute.ScrollToFixed", g.options.preAbsolute), g.options.postAbsolute && v.bind(
                        "postAbsolute.ScrollToFixed", g.options.postAbsolute), g.options.fixed && v.bind(
                        "fixed.ScrollToFixed", g.options.fixed), g.options.unfixed && v.bind(
                        "unfixed.ScrollToFixed", g.options.unfixed), g.options.spacerClass && O.addClass(g.options
                        .spacerClass), v.bind("resize.ScrollToFixed", function () {
                        O.height(v.height())
                    }), v.bind("scroll.ScrollToFixed", function () {
                        v.trigger("preUnfixed.ScrollToFixed"), p(), v.trigger("unfixed.ScrollToFixed"),
                            u()
                    }), v.bind("detach.ScrollToFixed", function (i) {
                        W(i), v.trigger("preUnfixed.ScrollToFixed"), p(), v.trigger(
                                "unfixed.ScrollToFixed"), o(window).unbind("resize.ScrollToFixed", y),
                            o(window).unbind("scroll.ScrollToFixed", N), v.unbind(".ScrollToFixed"), O.remove(),
                            g.$el.removeData("ScrollToFixed")
                    }), y()
            }, g.init()
        }, o.ScrollToFixed.defaultOptions = {
            marginTop: 0,
            limit: 0,
            bottom: -1,
            zIndex: 1e3,
            baseClassName: "scroll-to-fixed-fixed"
        }, o.fn.scrollToFixed = function (i) {
            return this.each(function () {
                new o.ScrollToFixed(this, i)
            })
        }
    }(jQuery);

$(document).ready(function () {
    $('.chapter_nav').scrollToFixed();
});