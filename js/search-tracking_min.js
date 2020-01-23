!function(e) {
    function t(e, t) {
        r(h("category", t) || h("previousCategory", t) || h("f", t) || h("author", t) || h("sort", t) ? !0 : !1)
    }
    function n(e) {
        r(!0)
    }
    function r(e) {
        "undefined" != typeof window.sessionStorage && window.sessionStorage.setItem("searchFilterApplied", e)
    }
    function a() {
        var e = !1;
        if ("undefined" != typeof window.sessionStorage) {
            var t = window.sessionStorage.getItem("searchFilterApplied");
            "undefined" != typeof t && null !== t && (e = "true" == t)
        }
        return e
    }
    function i(t, n) {
        var r = e(n)
          , i = o()
          , c = lynda.searchTrackingData;
        if (c) {
            c.rawSearchId = i,
            c.isMemberAppliedFilter = a(),
            c.searchOrigin = s(c),
            c.filterLevel = "ALL",
            c.filterContentBy = "ALL";
            var l = u(r);
            null != l && (l.learningResult && l.learningResult.resultType && "no-result" === l.learningResult.resultType ? c.results = [] : c.results = [l],
            y.trigger("li.track.action", ["LearningSearchImpressionEvent", c, "LyndaSearchImpressionEvent"]))
        }
    }
    function s(e) {
        return e.isMemberAppliedFilter ? "FILTER_SEARCH" : "GLOBAL_SEARCH_HEADER"
    }
    function c() {
        var e = lynda.generateTrackingId();
        return "undefined" != typeof window.sessionStorage && window.sessionStorage.setItem("rawSearchId", e),
        e
    }
    function o() {
        var e = null;
        return "undefined" != typeof window.sessionStorage && (e = window.sessionStorage.getItem("rawSearchId")),
        "undefined" != typeof e && null !== e || (e = c()),
        e
    }
    function l(e, t) {
        if ("undefined" != typeof t) {
            var n = t.clickedItem
              , r = o()
              , a = n.data("urn")
              , i = n.data("trackingId");
            if (lynda) {
                var s = lynda.generateTrackingId();
                window.sessionStorage.setItem("rawSearchId", s)
            }
            y.trigger("li.track.action", ["LearningSearchActionEvent", {
                actionType: lynda.searchTrackingActionTypes.VIEW,
                rawSearchId: r,
                result: {
                    objectUrn: a,
                    trackingId: i
                }
            }, "LyndaSearchActionEvent"])
        }
    }
    function d(t, n, r) {
        var a = e(n);
        if ("undefined" != typeof a) {
            var i = o()
              , s = {
                filterContentBy: "ALL",
                filterEntity: "ALL",
                filterLevel: "ALL",
                filterOrder: "MOST_RELEVANT",
                isMemberAppliedFilter: !1,
                platformType: "TYPEAHEAD",
                searchOrigin: "GLOBAL_SEARCH_HEADER"
            };
            s.query = r,
            s.rawSearchId = i,
            s.results = [],
            e.each(a, function() {
                var t = u(e(this));
                null != t && s.results.push(t)
            }),
            s.results.length > 0 && y.trigger("li.track.action", ["LearningSearchImpressionEvent", s, "LyndaSearchImpressionEvent"])
        }
    }
    function u(e, t) {
        var n = lynda.generateTrackingId()
          , r = e.data("urn")
          , a = t || e.data("position")
          , i = e.data("result-type");
        if ("undefined" == typeof r || "undefined" == typeof a || "undefined" == typeof i)
            return null;
        e.data("trackingId", n);
        var s = {
            learningResult: {
                resultObject: {
                    trackingId: n,
                    objectUrn: r
                },
                resultType: i,
                position: {
                    index: a
                }
            },
            startTime: 0,
            duration: 0,
            size: {
                width: 0,
                height: 0
            }
        };
        return s
    }
    function f(e, t, n) {
        var r = t.data("trackingId")
          , a = o()
          , i = e.data("urn");
        "undefined" == typeof i && (i = t.data("urn")),
        y.trigger("li.track.action", ["LearningSearchActionEvent", {
            actionType: n,
            rawSearchId: a,
            result: {
                objectUrn: i,
                trackingId: r
            }
        }, "LyndaSearchActionEvent"])
    }
    function p(t, n) {
        var r = n.activeElements
          , a = o()
          , i = {
            filterContentBy: "ALL",
            filterEntity: "ALL",
            filterLevel: "ALL",
            filterOrder: "MOST_RELEVANT",
            isMemberAppliedFilter: !1,
            platformType: "RELATED_COURSES",
            searchOrigin: "GLOBAL_SEARCH_HEADER"
        };
        i.query = lynda.searchTrackingData.query,
        i.rawSearchId = a,
        i.results = [],
        e.each(r, function() {
            var t = u(e(this).find(".card"), e(this).data("position"));
            null != t && i.results.push(t)
        }),
        i.results.length > 0 && y.trigger("li.track.action", ["LearningSearchImpressionEvent", i, "LyndaSearchImpressionEvent"])
    }
    var y = e("body")
      , g = (e(window),
    e(".autocomplete").attr("autocomplete", "off"));
    g.on("focus", function(e) {
        c(),
        r(!1)
    }),
    y.bind("search.track.ac.impression", d),
    y.bind("search.track.ac.click", l),
    y.bind("search.track.impression", i),
    y.bind("search.track.filter.click", n),
    y.bind("search.track.filter.clickremove", t),
    y.bind("search.track.re.impression", p),
    e("[data-track-impression]").appear(function() {
        var t = e(this);
        t.attr("tracked") || (t.attr("tracked", !0),
        i(null, t))
    }),
    e(y).on("playlist.item.add", function(t, n, r) {
        if ("featuredCourses" !== lynda.jsPlaylistPosition) {
            var a = "li[data-urn='urn:li:lyndaCourse:" + r + "'][data-track-impression]"
              , i = e(a);
            0 !== i.length && f(i, i, lynda.searchTrackingActionTypes.ADD_TO_COLLECTION)
        }
    }),
    e(y).on("playlist.item.delete", function(t, n, r) {
        if ("featuredCourses" !== lynda.jsPlaylistPosition) {
            var a = "li[data-urn='urn:li:lyndaCourse:" + r + "'][data-track-impression]"
              , i = e(a);
            0 !== i.length && f(i, i, lynda.searchTrackingActionTypes.REMOVE_FROM_COLLECTION)
        }
    }),
    e("#search-results-list .card").on("click", function(t) {
        var n = e(t.target);
        if (!n.hasClass("related-courses") && !n.hasClass("playlist-status-icon")) {
            var r = e(this).closest("li");
            f(n, r, lynda.searchTrackingActionTypes.VIEW)
        }
    }),
    e("#category-courses .card").on("click", function(t) {
        var n = e(t.target);
        if (!n.hasClass("related-courses") && !n.hasClass("playlist-status-icon")) {
            var r = e(this).closest("li");
            f(n, r, lynda.searchTrackingActionTypes.VIEW)
        }
    });
    var h = function(e, t) {
        var n = t.indexOf("?");
        if (n !== -1) {
            var r, a, i = decodeURIComponent(t.substring(n + 1)), s = i.split("&");
            for (a = 0; a < s.length; a++)
                if (r = s[a].split("="),
                r[0] === e)
                    return void 0 === r[1] || r[1]
        }
    };
    y.on("click", "#search-results-list .carousel-content .card", function(t) {
        var n = e(t.target)
          , r = e(this).closest("li");
        f(n, r, lynda.searchTrackingActionTypes.VIEW)
    }),
    y.on("autocomplete.submit", function(e) {
        if (lynda) {
            var t = lynda.generateTrackingId();
            window.sessionStorage.setItem("rawSearchId", t)
        }
    }),
    y.on("scrolly.scrollComplete", function(t, n) {
        p(null, {
            activeElements: e(n).find("[data-active=1]")
        })
    }),
    y.on("scrolly.initComplete", function(t, n) {
        p(null, {
            activeElements: e(n).find("[data-active=1]")
        })
    }),
    e(".related-carousel-cont .card").on("click", function(t) {
        var n = e(this);
        f(n, n, lynda.searchTrackingActionTypes.VIEW)
    })
}(jQuery);
