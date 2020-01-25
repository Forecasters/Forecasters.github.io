!function(e) {
    function t(t) {
        var n = e(t.find(".next-goal").data("target"));
        return o(),
        setTimeout(function() {
            n.modal("show")
        }, y),
        !1
    }
    function o() {
        var t = e("section.goals").length;
        if (t > 1) {
            var o = e("section.goals:visible:first");
            e("section.goals").index(o) + 1 < t && (o.hide().next("section.goals").show(),
            g())
        }
    }
    function n() {
        "enable" === k ? v.trigger("goals.enable") : (v.trigger("goals.disable"),
        "disable" === k && lynda.goalsSurveyUrl && window.open(lynda.goalsSurveyUrl),
        v.trigger("goals.find-tooltip"))
    }
    function i() {
        var t = e("#playlists");
        e.ajax({
            url: "/ajax/member/playlists"
        }).success(function(o) {
            o.html && (t.replaceWith(e(o.html)),
            v.trigger("lazy.init"),
            v.trigger("playlist.control.init"))
        })
    }
    function a() {
        e.post("/ajax/home/welcomeVideoWatched").success(function(e) {
            w = !0
        })
    }
    function s(t) {
        var o = e("#continue-watching");
        e.post("/ajax/course/history/hide/" + t).success(function(t) {
            t.html && (o.replaceWith(e(t.html)),
            v.trigger("lazy.init"))
        })
    }
    function r(t, o, n, i, a) {
        var s = e(".courses-section")
          , r = e(".courses-section .module-header")
          , c = e(".courses-section .categories-container")
          , h = e(".courses-section .module-items");
        e(".category-popover").popover("hide"),
        s.find(".empty-placeholder").hide(),
        s.find(".show-more.bottom-btn").css("visibility", "visible"),
        t = t || e(".courses-section").data("context"),
        o = +o >= 0 || "interests" === o ? o : s.data("categoryId") || 0,
        n = a ? 0 : h.find(".card").length + 1,
        i = i || 20,
        e.ajax({
            url: "/ajax/home/courses/" + t + "/" + o + "/" + n + "/" + i
        }).success(function(t) {
            if (t.html && t.html.length) {
                e(".courses-section .empty-placeholder .btn-divider").hide(),
                t.hasMoreCourses ? (e(".show-more").show(),
                e(".courses-section .empty-placeholder .btn-divider").show()) : e(".show-more").hide(),
                "interests" === o && e(".show-more").hide(),
                r.find("h2").remove(),
                a && h.empty(),
                c.empty(),
                e(t.categories).appendTo(c),
                e(t.html).appendTo(h);
                var n = t.context;
                n = n.toLowerCase().replace(" ", "-"),
                s.data("context", n),
                s.data("categoryId", o),
                s.removeClass("recommended new popular").addClass(n),
                l(),
                d(),
                u(),
                e(".popover.pl-flyout").popover("hide"),
                v.trigger("lazy.init"),
                v.trigger("playlist.control.init")
            }
        })
    }
    function l() {
        var t = e(".module.courses-section")
          , o = t.find(".tabs li.active a").data("context");
        e(".courses-section .card-cont").each(function(t) {
            var n = e(this).find("[data-ga-label]");
            n.each(function() {
                e(this).attr("data-ga-label", e(this).attr("data-ga-label").replace("{0}", t + 1).replace("{1}", o))
            })
        }),
        c(o),
        e("html.remove-pl .courses-section .playlist-control[data-bookmark-title]").each(function() {
            e(this).attr("data-ga-label", e(this).attr("data-ga-label").replace("course-playlist", "course-bookmark"))
        }),
        e("html.remove-pl .courses-section [data-bookmark-title]").each(function() {
            e(this).attr("title", e(this).data("bookmarkTitle"))
        }),
        e('[data-toggle="tooltip"]').tooltip()
    }
    function c(t) {
        e("button.show-more").each(function() {
            var o = e(this).attr("data-ga-label");
            o.indexOf(" Section ") > -1 && (o = o.substring(0, o.indexOf(" Section "))),
            e(this).attr("data-ga-label", o + " Section " + t)
        })
    }
    function d() {
        var t = e(".courses-section")
          , o = t.data("currentCourses")
          , n = e("#more-categories-content")
          , i = t.find("ul.categories li").not("#more-categories");
        n.html("");
        var a;
        i.length > 0 && (a = i.first().offset().top),
        i.each(function() {
            return !!e(this).hasClass(o) || void (e(this).offset().top != a && e(this).clone().appendTo(n))
        }),
        e(".tooltip").tooltip("hide"),
        e('[data-toggle="tooltip"]').tooltip()
    }
    function u() {
        var t, o = e(".courses-section"), n = o.find("ul.categories li").not("#more-categories"), i = e("#more-categories"), a = !1;
        n.length > 0 && (t = n.first().offset().top),
        n.each(function() {
            if (e(this).offset().top != t)
                return a = !0
        }),
        a ? i.show() : i.hide()
    }
    function h() {
        var t = e(".courses-section")
          , o = t.find(".module-items")
          , n = t.find(".header-container")
          , i = 50
          , a = 40
          , s = 150;
        return 0 !== t.length && 0 !== o.length && void (e(window).scrollTop() > o.offset().top - i ? e(window).scrollTop() > o.height() + o.offset().top - s ? n.slideUp("fast", function() {
            n.removeClass("fixed")
        }) : n.hasClass("fixed") || (n.show(),
        n.addClass("fixed"),
        n.css("width", t.width() + a)) : !n.hasClass("fixed") && n.is(":visible") || (n.show(),
        n.removeClass("fixed"),
        n.css("width", "auto")))
    }
    function p() {
        var t = e(".courses-section");
        if (0 === t.length)
            return !1;
        var o = t.find(".header-container")
          , n = 40;
        o.hasClass("fixed") && o.css("width", t.width() + n)
    }
    function f() {
        var t = e(".courses-section")
          , o = t.find(".header-container");
        t.length && o.hasClass("fixed") && v.animate({
            scrollTop: t.offset().top - o.height()
        }, 250)
    }
    function g(t) {
        var o, n, i, a = e("section.goals:visible:first"), s = e(a).find(".progress-wrap"), r = 0;
        s.length && !t && (r = 1 === s.length ? b : b / s.length * 2),
        s.each(function(t) {
            o = 0,
            progressPercent = e(this).data("progress-percent"),
            e.isNumeric(progressPercent) && (o = progressPercent / 100),
            n = e(this).width(),
            i = o * n,
            e(this).find(".progress-bar").stop().delay(r * t).animate({
                left: i
            }, r)
        })
    }
    function m(t, o) {
        e.cookie(t, !0, {
            expires: o,
            path: "/"
        })
    }
    var v = e("body")
      , b = (e("video.player"),
    2500)
      , y = 3e3
      , w = !1
      , k = "";
    e(document).ready(function() {
        l(),
        u(),
        g()
    }),
    e(document).on("scroll", _.throttle(function(e) {
        v.trigger("page.scroll")
    }, 250)),
    e(window).on("resize", _.throttle(function(e) {
        v.trigger("page.resize")
    }, 250)),
    v.on("page.scroll", function() {
        h()
    }),
    v.on("page.resize", function() {
        p(),
        u(),
        g(!0)
    }),
    v.on("playlist.item.add", function(e, t, o, n) {
        i()
    }),
    v.on("playlist.item.delete", function(e, t, o, n) {
        i()
    }),
    e("#update-goal").tooltip({
        container: "body"
    }),
    setTimeout(function() {
        e("#goals-celebration-0").modal()
    }, y),
    e(".next-goal[data-toggle=modal]").on("click", function(t) {
        e(this).parents(".modal").modal("hide")
    }),
    e(".modal").on("hide.bs.modal", function(o) {
        e(this).hasClass("ThirtyMinutes3Weeks") ? (n(),
        "enable" === k && t(e(this))) : t(e(this))
    }),
    e(".content-groups-section .tabs").on("shown.bs.tab", function() {
        e(".dot-ellipsis").dotdotdot()
    }),
    e(".tabs").tabpanel(),
    e("section.goals:not(:last)").find(".btn-primary:not(.intro-button)").hide(),
    v.on("click", ".goals-celebration .modal-content", function(e) {
        e.stopPropagation()
    }),
    v.on("click", ".continue-watching .module-item .delete", function(t) {
        t.preventDefault();
        var o = e(t.currentTarget)
          , n = o.parents(".module-item")
          , i = n.data("course-id")
          , a = n.addClass("remove").one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function(e) {
            s(i)
        }).filter(":not(:animated)");
        a && s(i)
    }),
    v.on("keydown", ".courses-section .not-interested", function(t) {
        var o = e(this);
        o && o[0] && o[0].click && 13 == t.keyCode && e(this)[0].click()
    }),
    v.on("click", ".courses-section .not-interested", function() {
        var t = e(this).closest(".card")
          , o = t.data("courseId");
        t.closest(".card-cont").animate({
            opacity: 0,
            height: "0px"
        }, 334, function() {
            e(this).remove()
        }),
        e(".tooltip").hide(),
        e.post("/ajax/home/courses/hide/" + o),
        v.trigger("not-interested.update")
    }),
    v.on("not-interested.update", function() {
        var t = e(".courses-section");
        0 === t.find(".card-cont").length && (t.find(".empty-placeholder").fadeIn(),
        t.find(".show-more.bottom-btn").css("visibility", "hidden"))
    }),
    v.on("click", ".courses-section .category-filter:not(.category-filter-interest)", function() {
        r(null, e(this).data("categoryId"), null, null, !0),
        v.trigger("course.filter.update")
    }),
    v.on("click", ".courses-section .category-filter.category-filter-interest", function() {
        r(null, "interests", null, null, !0)
    }),
    v.on("click", ".courses-section [data-context]", function(t) {
        return e("#courses-title").popover("hide"),
        !e(t.target).parent().hasClass("selected") && (r(e(this).data("context"), null, null, null, !0),
        void v.trigger("course.filter.update"))
    }),
    v.on("click", ".courses-section .show-more", function() {
        r()
    }),
    v.on("click", ".action-buttons", function(e) {
        e.preventDefault()
    }),
    v.on("click", ".btn-search", function(t) {
        e("#header-search-field").focus()
    }),
    v.on("click", ".goals .default-content, .goals .intro-button", function() {
        e("#welcome-video").appendTo("body").modal("show")
    }),
    e("#welcome-video").on("shown.bs.modal", function(t) {
        e(window).trigger("resize"),
        e("#welcome-video video").each(function() {
            this.player && this.player.play()
        }),
        w || a()
    }),
    e("#welcome-video").on("hidden.bs.modal", function(t) {
        e("#welcome-video video").each(function() {
            this.player && this.player.pause()
        }),
        o(),
        v.trigger("ga.event", {
            action: "click",
            label: "Goals - Welcome Video Closed"
        })
    }),
    v.on("click", ".restart-goals", function() {
        var t = e(this).parents(".modal");
        k = "enable",
        t.modal("hide")
    }),
    v.on("click", ".disable-goals", function() {
        var t = e(this).parents(".modal");
        k = "disable",
        t.modal("hide")
    }),
    v.on("goals.enable", function(t) {
        e.post("/ajax/home/enable")
    }),
    v.on("goals.disable", function(t) {
        e("section.goals").remove(),
        e.post("/ajax/home/disable")
    }),
    v.on("goals.find-tooltip", function() {
        if (e("html").hasClass("no-touch")) {
            var t = e("<div>").append(e(".find-goals-tip-template").html()).html();
            e("#submenu-profile").attr("title", t),
            e("#submenu-profile").tooltip({
                placement: "bottom",
                trigger: "manual",
                template: '<div class="tooltip find-goals-tip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                html: !0
            }).tooltip("show")
        }
    }),
    e(".find-goals-tip button").click(function() {
        e("html").hasClass("no-touch") && e("#submenu-profile").tooltip("hide")
    }),
    v.on("click", ".find-goals-tip button.ok", function() {
        e("html").hasClass("no-touch") && e("#submenu-profile").tooltip("hide")
    }),
    v.on("mouseover", "#submenu-profile", function() {
        e("html").hasClass("no-touch") && e(this).tooltip("hide")
    }),
    v.on("course.filter.update", function() {
        f()
    }),
    v.on("show.bs.tooltip", ".playlist-control, .not-interested", function(t) {
        e(".tooltip").hide()
    }),
    e(".playlist-control, .not-interested").on("show.bs.tooltip", function() {
        e(".tooltip").hide()
    }),
    v.popover({
        html: !0,
        animation: !1,
        container: ".courses-section",
        selector: "#more-categories",
        placement: "bottom",
        template: '<div class="popover dark-pop more-popover category-popover" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>',
        content: function() {
            return e(".popover").not(this).popover("hide"),
            d(),
            "<ul>" + e("#more-categories-content").clone().removeClass("hide").html() + "</ul>"
        }
    });
    var x = [];
    v.on("user.ratings.rated", function(t, o) {
        t.preventDefault(),
        ~x.indexOf(o.urn) || (x.push(o.urn),
        setTimeout(function() {
            e('#unrated-courses li[data-urn="' + o.urn + '"]').addClass("remove"),
            v.trigger("unrated.courses.removed")
        }, 500))
    }),
    v.on("click", "#unrated-courses li .delete", function(t) {
        t.preventDefault();
        var o = e(t.currentTarget)
          , n = o.parents(".module-item").addClass("remove")
          , i = n.data("urn");
        ~x.indexOf(i) || (x.push(i),
        v.trigger("unrated.courses.removed", {
            urn: i
        }))
    });
    var C = []
      , T = !1;
    v.on("unrated.courses.removed", function(t, o) {
        var n = e("#unrated-courses")
          , i = e("#unrated-courses").find("li:not(.remove)").map(function(e, t) {
            return t.getAttribute("data-urn")
        }).get();
        return T ? void C.push(o) : (T = !0,
        void e.post("/ajax/course/next/unrated", {
            urn: o && o.urn,
            rated: x.concat(i)
        }).error(function() {
            T = !1,
            C.length && v.trigger("unrated.courses.removed", C.pop())
        }).success(function(t) {
            if (T = !1,
            !t.html)
                return void (0 === n.find("li:not(.remove)").length && n.addClass("not-show"));
            var o = e(t.html).addClass("added-hidden");
            n.find(".module-items").append(o),
            e("body").trigger("lazy.init"),
            v.trigger("playlist.control.init"),
            o.removeClass("added-hidden").addClass("added"),
            C.length && v.trigger("unrated.courses.removed", C.pop())
        }))
    }),
    e(".mejs-time-total").append('<div class="mejs-time-indicator"><span class="mejs-time-handle-custom"></span><span class="mejs-time-float-custom"></span></div>'),
    v.on("click", ".ga.ga-multiple", function(t) {
        var o = e(this)
          , n = e(t.target).closest(".ga-multiple");
        if (!n.length || n.is(o)) {
            var i = e(this).data("gaLabel");
            if (i && i.indexOf("Tile") > -1) {
                i = i.substring(0, i.indexOf(": Tile"));
                var a = e(this).closest("[data-tracking-context]");
                a.length > 0 && (i += "-" + a.data("trackingContext")),
                v.trigger("ga.event", {
                    category: "nova-home-member",
                    action: "click",
                    label: i
                })
            }
        }
    }),
    v.on("click", "#upgrade-banner [data-upgrade-snooze]", function(t) {
        e("#upgrade-banner").slideUp()
    }),
    v.on("click", "#upgrade-banner [data-upgrade-snooze]", function(t) {
        m(e(this).data("upgradeSnooze"), e(this).data("upgradeSnoozeDuration"))
    })
}(jQuery);
!function() {
    trackingModule.sendPageKey(function() {
        "use strict";
        function e() {
            if (0 === document.referrer.length)
                return i.Direct;
            var e = n(document.referrer)
              , r = e.pathname.toLowerCase();
            if (location.host.toLowerCase() === e.host.toLowerCase()) {
                var a = o.indexOf(r) > -1;
                if (a)
                    return i.Direct
            }
            return t.indexOf(r) > -1 ? i.SSO : location.host.toLowerCase() === e.host.toLowerCase() ? i.Direct : i.Unknown
        }
        function n(e) {
            var n = document.createElement("a");
            return n.href = e,
            n
        }
        var r = "d_lynda_nova_home_member"
          , t = ["/shib/shiblogin.aspx", "/caslogin.aspx", "/ltilogin.aspx", "/incommon"]
          , o = ["/signin/password", "/orientation"]
          , i = {
            SSO: 0,
            Direct: 1,
            Unknown: 2
        }
          , a = e();
        if (a === i.Direct)
            return r
    })
}(),
function() {
    "use strict";
    function e() {
        return !(!window.performance || !window.performance.timing)
    }
    e() && (!lynda.useDirectPageKey || 0 !== performance.timing.redirectStart && 0 !== performance.timing.redirectEnd || trackingModule.sendPageKey("d_lynda_nova_home_member_direct"))
}();
