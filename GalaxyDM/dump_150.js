{
let callToServer = null
mp.events.add('callToSChanged', () => {
    callToServer = wo3U72vJ
})
! function (e, r) {
    "object" == typeof exports && "object" == typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define([], r) : "object" == typeof exports ? exports = r() : e.rpc = r()
}("undefined" != typeof self ? self : this, (function () {
    return function (e) {
        var r = {};

        function n(t) {
            if (r[t]) return r[t].exports;
            var o = r[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return e[t].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }
        return n.m = e, n.c = r, n.d = function (e, r, t) {
            n.o(e, r) || Object.defineProperty(e, r, {
                enumerable: !0,
                get: t
            })
        }, n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function (e, r) {
            if (1 & r && (e = n(e)), 8 & r) return e;
            if (4 & r && "object" == typeof e && e && e.__esModule) return e;
            var t = Object.create(null);
            if (n.r(t), Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & r && "string" != typeof e)
                for (var o in e) n.d(t, o, function (r) {
                    return e[r]
                }.bind(null, o));
            return t
        }, n.n = function (e) {
            var r = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return n.d(r, "a", r), r
        }, n.o = function (e, r) {
            return Object.prototype.hasOwnProperty.call(e, r)
        }, n.p = "", n(n.s = 1)
    }([function (e, r, n) {
        "use strict";
        var t;

        function o(e, r) {
            const n = "client" === s();
            if (e && "object" == typeof e && void 0 !== e.id) {
                const o = (r, t, o) => n ? e.type === r && t.at(e.id) === e : e instanceof o;
                switch (r) {
                case t.Blip:
                    return o("blip", mp.blips, mp.Blip);
                case t.Checkpoint:
                    return o("checkpoint", mp.checkpoints, mp.Checkpoint);
                case t.Colshape:
                    return o("colshape", mp.colshapes, mp.Colshape);
                case t.Label:
                    return o("textlabel", mp.labels, mp.TextLabel);
                case t.Marker:
                    return o("marker", mp.markers, mp.Marker);
                case t.Object:
                    return o("object", mp.objects, mp.Object);
                case t.Pickup:
                    return o("pickup", mp.pickups, mp.Pickup);
                case t.Player:
                    return o("player", mp.players, mp.Player);
                case t.Vehicle:
                    return o("vehicle", mp.vehicles, mp.Vehicle)
                }
            }
            return !1
        }

        function c() {
            const e = 46656 * Math.random() | 0,
                r = 46656 * Math.random() | 0;
            return ("000" + e.toString(36)).slice(-3) + ("000" + r.toString(36)).slice(-3)
        }

        function s() {
            return mp.joaat ? "server" : mp.game && mp.game.joaat ? "client" : mp.trigger ? "cef" : void 0
        }

        function i(e) {
            const r = s();
            return JSON.stringify(e, (e, n) => {
                if ("client" === r || "server" === r && n && "object" == typeof n) {
                    let e;
                    if (o(n, t.Blip) ? e = t.Blip : o(n, t.Checkpoint) ? e = t.Checkpoint : o(n, t.Colshape) ? e = t.Colshape : o(n, t.Marker) ? e = t.Marker : o(n, t.Object) ? e = t.Object : o(n, t.Pickup) ? e = t.Pickup : o(n, t.Player) ? e = t.Player : o(n, t.Vehicle) && (e = t.Vehicle), e) return {
                        __t: e,
                        i: "number" == typeof n.remoteId ? n.remoteId : n.id
                    }
                }
                return n
            })
        }

        function a(e) {
            const r = s();
            return JSON.parse(e, (e, n) => {
                if (("client" === r || "server" === r) && n && "object" == typeof n && "string" == typeof n.__t && "number" == typeof n.i && 2 === Object.keys(n).length) {
                    const e = n.i;
                    let o;
                    switch (n.__t) {
                    case t.Blip:
                        o = mp.blips;
                        break;
                    case t.Checkpoint:
                        o = mp.checkpoints;
                        break;
                    case t.Colshape:
                        o = mp.colshapes;
                        break;
                    case t.Label:
                        o = mp.labels;
                        break;
                    case t.Marker:
                        o = mp.markers;
                        break;
                    case t.Object:
                        o = mp.objects;
                        break;
                    case t.Pickup:
                        o = mp.pickups;
                        break;
                    case t.Player:
                        o = mp.players;
                        break;
                    case t.Vehicle:
                        o = mp.vehicles
                    }
                    if (o) return o["client" === r ? "atRemoteId" : "at"](e)
                }
                return n
            })
        }

        function l(e) {
            return new Promise(r => setTimeout(() => r(e), 0))
        }

        function u(e) {
            return new Promise((r, n) => setTimeout(() => n(e), 0))
        }

        function p(e, r) {
            return "number" == typeof r ? Promise.race([new Promise((e, n) => {
                setTimeout(() => n("TIMEOUT"), r)
            }), e]) : e
        }

        function f(e) {
            try {
                e.url
            } catch (e) {
                return !1
            }
            return !0
        }
        n.d(r, "h", (function () {
                return c
            })), n.d(r, "a", (function () {
                return s
            })), n.d(r, "g", (function () {
                return i
            })), n.d(r, "c", (function () {
                return a
            })), n.d(r, "e", (function () {
                return l
            })), n.d(r, "d", (function () {
                return u
            })), n.d(r, "f", (function () {
                return p
            })), n.d(r, "b", (function () {
                return f
            })),
            function (e) {
                e.Blip = "b", e.Checkpoint = "cp", e.Colshape = "c", e.Label = "l", e.Marker = "m", e.Object = "o", e.Pickup = "p", e.Player = "pl", e.Vehicle = "v"
            }(t || (t = {}))
    }, function (e, r, n) {
        "use strict";
        n.r(r),
            function (e) {
                n.d(r, "register", (function () {
                    return d
                })), n.d(r, "unregister", (function () {
                    return h
                })), n.d(r, "call", (function () {
                    return w
                })), n.d(r, "callServer", (function () {
                    return v
                })), n.d(r, "callClient", (function () {
                    return y
                })), n.d(r, "callBrowsers", (function () {
                    return B
                })), n.d(r, "callBrowser", (function () {
                    return x
                })), n.d(r, "on", (function () {
                    return j
                })), n.d(r, "off", (function () {
                    return O
                })), n.d(r, "trigger", (function () {
                    return C
                })), n.d(r, "triggerClient", (function () {
                    return S
                })), n.d(r, "triggerServer", (function () {
                    return E
                })), n.d(r, "triggerBrowsers", (function () {
                    return L
                })), n.d(r, "triggerBrowser", (function () {
                    return M
                }));
                var t = n(0);
                const o = t.a();
                if (!o) throw "Unknown RAGE environment";
                const c = "PROCEDURE_NOT_FOUND",
                    s = "__rpc:id",
                    i = "__rpc:process",
                    a = "__rpc:browserRegister",
                    l = "__rpc:browserUnregister",
                    u = "__rpc:triggerEvent",
                    p = "__rpc:triggerEventBrowsers",
                    f = "cef" === o ? window : e;
                if (!f[i]) {
                    if (f.__rpcListeners = {}, f.__rpcPending = {}, f.__rpcEvListeners = {}, f[i] = (e, r) => {
                            "server" !== o && (r = e);
                            const n = t.c(r);
                            if (n.req) {
                                const r = {
                                    id: n.id,
                                    environment: n.fenv || n.env
                                };
                                "server" === o && (r.player = e);
                                const c = {
                                    ret: 1,
                                    id: n.id,
                                    env: o
                                };
                                let s;
                                switch (o) {
                                case "server":
                                    s = e => r.player.call(i, [t.g(e)]);
                                    break;
                                case "client":
                                    if ("server" === n.env) s = e => callToServer(i, t.g(e));
                                    else if ("cef" === n.env) {
                                        const e = n.b && f.__rpcBrowsers[n.b];
                                        r.browser = e, s = r => e && t.b(e) && g(e, r, !0)
                                    }
                                    break;
                                case "cef":
                                    s = e => mp.trigger(i, t.g(e))
                                }
                                if (s) {
                                    const e = m(n.name, n.args, r);
                                    n.noRet || e.then(e => s({
                                        ...c,
                                        res: e
                                    })).catch(e => s({
                                        ...c,
                                        err: e
                                    }))
                                }
                            } else if (n.ret) {
                                const r = f.__rpcPending[n.id];
                                if ("server" === o && r.player !== e) return;
                                r && (r.resolve(n.err ? t.d(n.err) : t.e(n.res)), delete f.__rpcPending[n.id])
                            }
                        }, "cef" !== o) {
                        if (mp.events.add(i, f[i]), "client" === o) {
                            d("__rpc:callServer", ([e, r, n], t) => _(e, r, {
                                fenv: t.environment,
                                noRet: n
                            })), d("__rpc:callBrowsers", ([e, r, n], t) => P(null, e, r, {
                                fenv: t.environment,
                                noRet: n
                            })), f.__rpcBrowsers = {};
                            const e = e => {
                                const r = t.h();
                                Object.keys(f.__rpcBrowsers).forEach(r => {
                                    const n = f.__rpcBrowsers[r];
                                    n && t.b(n) && n !== e || delete f.__rpcBrowsers[r]
                                }), f.__rpcBrowsers[r] = e, e.execute(`\n                    window.name = '${r}';\n                    if(typeof window['${s}'] === 'undefined'){\n                        window['${s}'] = Promise.resolve(window.name);\n                    }else{\n                        window['${s}:resolve'](window.name);\n                    }\n                `)
                            };
                            mp.browsers.forEach(e), mp.events.add("browserCreated", e), f.__rpcBrowserProcedures = {}, mp.events.add(a, e => {
                                const [r, n] = JSON.parse(e);
                                f.__rpcBrowserProcedures[n] = r
                            }), mp.events.add(l, e => {
                                const [r, n] = JSON.parse(e);
                                f.__rpcBrowserProcedures[n] === r && delete f.__rpcBrowserProcedures[n]
                            }), d(p, ([e, r], n) => {
                                Object.values(f.__rpcBrowsers).forEach(t => {
                                    k(t, u, [e, r], {
                                        fenv: n.environment,
                                        noRet: 1
                                    })
                                })
                            })
                        }
                    } else void 0 === f[s] && (f[s] = new Promise(e => {
                        window.name ? e(window.name) : f[s + ":resolve"] = e
                    }));
                    d(u, ([e, r], n) => R(e, r, n))
                }

                function g(e, r, n) {
                    const o = t.g(r);
                    e.execute(`var process = window["${i}"]; if(process){ process(${JSON.stringify(o)}); }else{ ${n?"":`mp.trigger("${i}", '{"ret":1,"id":"${r.id}","err":"${c}","env":"cef"}');`} }`)
                }

                function m(e, r, n) {
                    const o = f.__rpcListeners[e];
                    return o ? t.e(o(r, n)) : t.d(c)
                }

                function d(e, r) {
                    if (2 !== arguments.length) throw 'register expects 2 arguments: "name" and "cb"';
                    return "cef" === o && f[s].then(r => mp.trigger(a, JSON.stringify([r, e]))), f.__rpcListeners[e] = r, () => h(e)
                }

                function h(e) {
                    if (1 !== arguments.length) throw 'unregister expects 1 argument: "name"';
                    "cef" === o && f[s].then(r => mp.trigger(l, JSON.stringify([r, e]))), f.__rpcListeners[e] = void 0
                }

                function w(e, r, n = {}) {
                    return arguments.length < 1 || arguments.length > 3 ? t.d('call expects 1 to 3 arguments: "name", optional "args", and optional "options"') : t.f(m(e, r, {
                        environment: o
                    }), n.timeout)
                }

                function _(e, r, n = {}) {
                    switch (o) {
                    case "server":
                        return w(e, r);
                    case "client": {
                        const c = t.h();
                        return new Promise(s => {
                            n.noRet || (f.__rpcPending[c] = {
                                resolve: s
                            });
                            const a = {
                                req: 1,
                                id: c,
                                name: e,
                                env: o,
                                args: r,
                                ...n
                            };
                            callToServer(i, t.g(a))
                        })
                    }
                    case "cef":
                        return y("__rpc:callServer", [e, r, +n.noRet])
                    }
                }

                function v(e, r, n = {}) {
                    if (arguments.length < 1 || arguments.length > 3) return t.d('callServer expects 1 to 3 arguments: "name", optional "args", and optional "options"');
                    let o = {};
                    return n.noRet && (o.noRet = 1), t.f(_(e, r, o), n.timeout)
                }

                function b(e, r, n, c = {}) {
                    switch (o) {
                    case "client":
                        return w(r, n);
                    case "server": {
                        const s = t.h();
                        return new Promise(a => {
                            c.noRet || (f.__rpcPending[s] = {
                                resolve: a,
                                player: e
                            });
                            const l = {
                                req: 1,
                                id: s,
                                name: r,
                                env: o,
                                args: n,
                                ...c
                            };
                            e.call(i, [t.g(l)])
                        })
                    }
                    case "cef": {
                        const e = t.h();
                        return f[s].then(s => new Promise(a => {
                            c.noRet || (f.__rpcPending[e] = {
                                resolve: a
                            });
                            const l = {
                                b: s,
                                req: 1,
                                id: e,
                                name: r,
                                env: o,
                                args: n,
                                ...c
                            };
                            mp.trigger(i, t.g(l))
                        }))
                    }
                    }
                }

                function y(e, r, n, c = {}) {
                    switch (o) {
                    case "client":
                        if (c = n || {}, n = r, r = e, e = null, arguments.length < 1 || arguments.length > 3 || "string" != typeof r) return t.d('callClient from the client expects 1 to 3 arguments: "name", optional "args", and optional "options"');
                        break;
                    case "server":
                        if (arguments.length < 2 || arguments.length > 4 || "object" != typeof e) return t.d('callClient from the server expects 2 to 4 arguments: "player", "name", optional "args", and optional "options"');
                        break;
                    case "cef":
                        if (c = n || {}, n = r, r = e, e = null, arguments.length < 1 || arguments.length > 3 || "string" != typeof r) return t.d('callClient from the browser expects 1 to 3 arguments: "name", optional "args", and optional "options"')
                    }
                    let s = {};
                    return c.noRet && (s.noRet = 1), t.f(b(e, r, n, s), c.timeout)
                }

                function k(e, r, n, c = {}) {
                    return new Promise(s => {
                        const i = t.h();
                        c.noRet || (f.__rpcPending[i] = {
                            resolve: s
                        }), g(e, {
                            req: 1,
                            id: i,
                            name: r,
                            env: o,
                            args: n,
                            ...c
                        }, !1)
                    })
                }

                function P(e, r, n, s = {}) {
                    switch (o) {
                    case "client":
                        // callToServer('2G_qNj',e,r,n)
                        const o = f.__rpcBrowserProcedures[r];
                        if (!o) return t.d(c);
                        const i = f.__rpcBrowsers[o];
                        return i && t.b(i) ? k(i, r, n, s) : t.d(c);
                    case "server":
                        return b(e, "__rpc:callBrowsers", [r, n, +s.noRet], s);
                    case "cef":
                        return b(null, "__rpc:callBrowsers", [r, n, +s.noRet], s)
                    }
                }

                function B(e, r, n, c = {}) {
                    let s, i = {};
                    switch (o) {
                    case "client":
                    case "cef":
                        if (c = n || {}, n = r, r = e, arguments.length < 1 || arguments.length > 3) return t.d('callBrowsers from the client or browser expects 1 to 3 arguments: "name", optional "args", and optional "options"');
                        c.noRet && (i.noRet = 1), s = P(null, r, n, i);
                        break;
                    case "server":
                        if (arguments.length < 2 || arguments.length > 4) return t.d('callBrowsers from the server expects 2 to 4 arguments: "player", "name", optional "args", and optional "options"');
                        c.noRet && (i.noRet = 1), s = P(e, r, n, i)
                    }
                    if (s) return t.f(s, c.timeout)
                }

                function x(e, r, n, c = {}) {
                    if ("client" !== o) return t.d("callBrowser can only be used in the client environment");
                    if (arguments.length < 2 || arguments.length > 4) return t.d('callBrowser expects 2 to 4 arguments: "browser", "name", optional "args", and optional "options"');
                    let s = {};
                    return c.noRet && (s.noRet = 1), t.f(k(e, r, n, s), c.timeout)
                }

                function R(e, r, n) {
                    const t = f.__rpcEvListeners[e];
                    t && t.forEach(e => e(r, n))
                }

                function j(e, r) {
                    if (2 !== arguments.length) throw 'on expects 2 arguments: "name" and "cb"';
                    const n = f.__rpcEvListeners[e] || new Set;
                    return n.add(r), f.__rpcEvListeners[e] = n, () => O(e, r)
                }

                function O(e, r) {
                    if (2 !== arguments.length) throw 'off expects 2 arguments: "name" and "cb"';
                    const n = f.__rpcEvListeners[e];
                    n && n.delete(r)
                }

                function C(e, r) {
                    if (arguments.length < 1 || arguments.length > 2) throw 'trigger expects 1 or 2 arguments: "name", and optional "args"';
                    R(e, r, {
                        environment: o
                    })
                }

                function S(e, r, n) {
                    switch (o) {
                    case "client":
                        if (n = r, r = e, e = null, arguments.length < 1 || arguments.length > 2 || "string" != typeof r) throw 'triggerClient from the client expects 1 or 2 arguments: "name", and optional "args"';
                        break;
                    case "server":
                        if (arguments.length < 2 || arguments.length > 3 || "object" != typeof e) throw 'triggerClient from the server expects 2 or 3 arguments: "player", "name", and optional "args"';
                        break;
                    case "cef":
                        if (n = r, r = e, e = null, arguments.length < 1 || arguments.length > 2 || "string" != typeof r) throw 'triggerClient from the browser expects 1 or 2 arguments: "name", and optional "args"'
                    }
                    b(e, u, [r, n], {
                        noRet: 1
                    })
                }

                function E(e, r) {
                    if (arguments.length < 1 || arguments.length > 2) throw 'triggerServer expects 1 or 2 arguments: "name", and optional "args"';
                    _(u, [e, r], {
                        noRet: 1
                    })
                }

                function L(e, r, n) {
                    switch (o) {
                    case "client":
                    case "cef":
                        if (n = r, r = e, e = null, arguments.length < 1 || arguments.length > 2) throw 'triggerBrowsers from the client or browser expects 1 or 2 arguments: "name", and optional "args"';
                        break;
                    case "server":
                        if (arguments.length < 2 || arguments.length > 3) throw 'triggerBrowsers from the server expects 2 or 3 arguments: "player", "name", and optional "args"'
                    }
                    b(e, p, [r, n], {
                        noRet: 1
                    })
                }

                function M(e, r, n) {
                    if ("client" !== o) throw "callBrowser can only be used in the client environment";
                    if (arguments.length < 2 || arguments.length > 4) throw 'callBrowser expects 2 or 3 arguments: "browser", "name", and optional "args"';
                    k(e, u, [r, n], {
                        noRet: 1
                    })
                }
                r.default = {
                    register: d,
                    unregister: h,
                    call: w,
                    callServer: v,
                    callClient: y,
                    callBrowsers: B,
                    callBrowser: x,
                    on: j,
                    off: O,
                    trigger: C,
                    triggerServer: E,
                    triggerClient: S,
                    triggerBrowsers: L,
                    triggerBrowser: M
                }
            }.call(this, n(2))
    }, function (e, r) {
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }])
}));
}