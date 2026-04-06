var JE = { exports: {} }, zh = {}, eC = { exports: {} }, Dt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ow;
function wL() {
  if (Ow) return Dt;
  Ow = 1;
  var o = Symbol.for("react.element"), l = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), v = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), b = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), _ = Symbol.iterator;
  function O(j) {
    return j === null || typeof j != "object" ? null : (j = _ && j[_] || j["@@iterator"], typeof j == "function" ? j : null);
  }
  var U = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, H = Object.assign, X = {};
  function Z(j, re, tt) {
    this.props = j, this.context = re, this.refs = X, this.updater = tt || U;
  }
  Z.prototype.isReactComponent = {}, Z.prototype.setState = function(j, re) {
    if (typeof j != "object" && typeof j != "function" && j != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, j, re, "setState");
  }, Z.prototype.forceUpdate = function(j) {
    this.updater.enqueueForceUpdate(this, j, "forceUpdate");
  };
  function ne() {
  }
  ne.prototype = Z.prototype;
  function ae(j, re, tt) {
    this.props = j, this.context = re, this.refs = X, this.updater = tt || U;
  }
  var oe = ae.prototype = new ne();
  oe.constructor = ae, H(oe, Z.prototype), oe.isPureReactComponent = !0;
  var ve = Array.isArray, J = Object.prototype.hasOwnProperty, Ce = { current: null }, ge = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ye(j, re, tt) {
    var Je, gt = {}, ht = null, dt = null;
    if (re != null) for (Je in re.ref !== void 0 && (dt = re.ref), re.key !== void 0 && (ht = "" + re.key), re) J.call(re, Je) && !ge.hasOwnProperty(Je) && (gt[Je] = re[Je]);
    var vt = arguments.length - 2;
    if (vt === 1) gt.children = tt;
    else if (1 < vt) {
      for (var St = Array(vt), Gt = 0; Gt < vt; Gt++) St[Gt] = arguments[Gt + 2];
      gt.children = St;
    }
    if (j && j.defaultProps) for (Je in vt = j.defaultProps, vt) gt[Je] === void 0 && (gt[Je] = vt[Je]);
    return { $$typeof: o, type: j, key: ht, ref: dt, props: gt, _owner: Ce.current };
  }
  function je(j, re) {
    return { $$typeof: o, type: j.type, key: re, ref: j.ref, props: j.props, _owner: j._owner };
  }
  function Ne(j) {
    return typeof j == "object" && j !== null && j.$$typeof === o;
  }
  function wt(j) {
    var re = { "=": "=0", ":": "=2" };
    return "$" + j.replace(/[=:]/g, function(tt) {
      return re[tt];
    });
  }
  var Tt = /\/+/g;
  function Ie(j, re) {
    return typeof j == "object" && j !== null && j.key != null ? wt("" + j.key) : re.toString(36);
  }
  function Ot(j, re, tt, Je, gt) {
    var ht = typeof j;
    (ht === "undefined" || ht === "boolean") && (j = null);
    var dt = !1;
    if (j === null) dt = !0;
    else switch (ht) {
      case "string":
      case "number":
        dt = !0;
        break;
      case "object":
        switch (j.$$typeof) {
          case o:
          case l:
            dt = !0;
        }
    }
    if (dt) return dt = j, gt = gt(dt), j = Je === "" ? "." + Ie(dt, 0) : Je, ve(gt) ? (tt = "", j != null && (tt = j.replace(Tt, "$&/") + "/"), Ot(gt, re, tt, "", function(Gt) {
      return Gt;
    })) : gt != null && (Ne(gt) && (gt = je(gt, tt + (!gt.key || dt && dt.key === gt.key ? "" : ("" + gt.key).replace(Tt, "$&/") + "/") + j)), re.push(gt)), 1;
    if (dt = 0, Je = Je === "" ? "." : Je + ":", ve(j)) for (var vt = 0; vt < j.length; vt++) {
      ht = j[vt];
      var St = Je + Ie(ht, vt);
      dt += Ot(ht, re, tt, St, gt);
    }
    else if (St = O(j), typeof St == "function") for (j = St.call(j), vt = 0; !(ht = j.next()).done; ) ht = ht.value, St = Je + Ie(ht, vt++), dt += Ot(ht, re, tt, St, gt);
    else if (ht === "object") throw re = String(j), Error("Objects are not valid as a React child (found: " + (re === "[object Object]" ? "object with keys {" + Object.keys(j).join(", ") + "}" : re) + "). If you meant to render a collection of children, use an array instead.");
    return dt;
  }
  function Lt(j, re, tt) {
    if (j == null) return j;
    var Je = [], gt = 0;
    return Ot(j, Je, "", "", function(ht) {
      return re.call(tt, ht, gt++);
    }), Je;
  }
  function Ut(j) {
    if (j._status === -1) {
      var re = j._result;
      re = re(), re.then(function(tt) {
        (j._status === 0 || j._status === -1) && (j._status = 1, j._result = tt);
      }, function(tt) {
        (j._status === 0 || j._status === -1) && (j._status = 2, j._result = tt);
      }), j._status === -1 && (j._status = 0, j._result = re);
    }
    if (j._status === 1) return j._result.default;
    throw j._result;
  }
  var xe = { current: null }, de = { transition: null }, ze = { ReactCurrentDispatcher: xe, ReactCurrentBatchConfig: de, ReactCurrentOwner: Ce };
  function Se() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Dt.Children = { map: Lt, forEach: function(j, re, tt) {
    Lt(j, function() {
      re.apply(this, arguments);
    }, tt);
  }, count: function(j) {
    var re = 0;
    return Lt(j, function() {
      re++;
    }), re;
  }, toArray: function(j) {
    return Lt(j, function(re) {
      return re;
    }) || [];
  }, only: function(j) {
    if (!Ne(j)) throw Error("React.Children.only expected to receive a single React element child.");
    return j;
  } }, Dt.Component = Z, Dt.Fragment = c, Dt.Profiler = y, Dt.PureComponent = ae, Dt.StrictMode = p, Dt.Suspense = R, Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ze, Dt.act = Se, Dt.cloneElement = function(j, re, tt) {
    if (j == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + j + ".");
    var Je = H({}, j.props), gt = j.key, ht = j.ref, dt = j._owner;
    if (re != null) {
      if (re.ref !== void 0 && (ht = re.ref, dt = Ce.current), re.key !== void 0 && (gt = "" + re.key), j.type && j.type.defaultProps) var vt = j.type.defaultProps;
      for (St in re) J.call(re, St) && !ge.hasOwnProperty(St) && (Je[St] = re[St] === void 0 && vt !== void 0 ? vt[St] : re[St]);
    }
    var St = arguments.length - 2;
    if (St === 1) Je.children = tt;
    else if (1 < St) {
      vt = Array(St);
      for (var Gt = 0; Gt < St; Gt++) vt[Gt] = arguments[Gt + 2];
      Je.children = vt;
    }
    return { $$typeof: o, type: j.type, key: gt, ref: ht, props: Je, _owner: dt };
  }, Dt.createContext = function(j) {
    return j = { $$typeof: v, _currentValue: j, _currentValue2: j, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, j.Provider = { $$typeof: T, _context: j }, j.Consumer = j;
  }, Dt.createElement = ye, Dt.createFactory = function(j) {
    var re = ye.bind(null, j);
    return re.type = j, re;
  }, Dt.createRef = function() {
    return { current: null };
  }, Dt.forwardRef = function(j) {
    return { $$typeof: E, render: j };
  }, Dt.isValidElement = Ne, Dt.lazy = function(j) {
    return { $$typeof: k, _payload: { _status: -1, _result: j }, _init: Ut };
  }, Dt.memo = function(j, re) {
    return { $$typeof: b, type: j, compare: re === void 0 ? null : re };
  }, Dt.startTransition = function(j) {
    var re = de.transition;
    de.transition = {};
    try {
      j();
    } finally {
      de.transition = re;
    }
  }, Dt.unstable_act = Se, Dt.useCallback = function(j, re) {
    return xe.current.useCallback(j, re);
  }, Dt.useContext = function(j) {
    return xe.current.useContext(j);
  }, Dt.useDebugValue = function() {
  }, Dt.useDeferredValue = function(j) {
    return xe.current.useDeferredValue(j);
  }, Dt.useEffect = function(j, re) {
    return xe.current.useEffect(j, re);
  }, Dt.useId = function() {
    return xe.current.useId();
  }, Dt.useImperativeHandle = function(j, re, tt) {
    return xe.current.useImperativeHandle(j, re, tt);
  }, Dt.useInsertionEffect = function(j, re) {
    return xe.current.useInsertionEffect(j, re);
  }, Dt.useLayoutEffect = function(j, re) {
    return xe.current.useLayoutEffect(j, re);
  }, Dt.useMemo = function(j, re) {
    return xe.current.useMemo(j, re);
  }, Dt.useReducer = function(j, re, tt) {
    return xe.current.useReducer(j, re, tt);
  }, Dt.useRef = function(j) {
    return xe.current.useRef(j);
  }, Dt.useState = function(j) {
    return xe.current.useState(j);
  }, Dt.useSyncExternalStore = function(j, re, tt) {
    return xe.current.useSyncExternalStore(j, re, tt);
  }, Dt.useTransition = function() {
    return xe.current.useTransition();
  }, Dt.version = "18.3.1", Dt;
}
var Bh = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Bh.exports;
var Lw;
function bL() {
  return Lw || (Lw = 1, function(o, l) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var c = "18.3.1", p = Symbol.for("react.element"), y = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), b = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), X = Symbol.for("react.offscreen"), Z = Symbol.iterator, ne = "@@iterator";
      function ae(x) {
        if (x === null || typeof x != "object")
          return null;
        var L = Z && x[Z] || x[ne];
        return typeof L == "function" ? L : null;
      }
      var oe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ve = {
        transition: null
      }, J = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Ce = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ge = {}, ye = null;
      function je(x) {
        ye = x;
      }
      ge.setExtraStackFrame = function(x) {
        ye = x;
      }, ge.getCurrentStack = null, ge.getStackAddendum = function() {
        var x = "";
        ye && (x += ye);
        var L = ge.getCurrentStack;
        return L && (x += L() || ""), x;
      };
      var Ne = !1, wt = !1, Tt = !1, Ie = !1, Ot = !1, Lt = {
        ReactCurrentDispatcher: oe,
        ReactCurrentBatchConfig: ve,
        ReactCurrentOwner: Ce
      };
      Lt.ReactDebugCurrentFrame = ge, Lt.ReactCurrentActQueue = J;
      function Ut(x) {
        {
          for (var L = arguments.length, G = new Array(L > 1 ? L - 1 : 0), q = 1; q < L; q++)
            G[q - 1] = arguments[q];
          de("warn", x, G);
        }
      }
      function xe(x) {
        {
          for (var L = arguments.length, G = new Array(L > 1 ? L - 1 : 0), q = 1; q < L; q++)
            G[q - 1] = arguments[q];
          de("error", x, G);
        }
      }
      function de(x, L, G) {
        {
          var q = Lt.ReactDebugCurrentFrame, me = q.getStackAddendum();
          me !== "" && (L += "%s", G = G.concat([me]));
          var Ke = G.map(function(Re) {
            return String(Re);
          });
          Ke.unshift("Warning: " + L), Function.prototype.apply.call(console[x], console, Ke);
        }
      }
      var ze = {};
      function Se(x, L) {
        {
          var G = x.constructor, q = G && (G.displayName || G.name) || "ReactClass", me = q + "." + L;
          if (ze[me])
            return;
          xe("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", L, q), ze[me] = !0;
        }
      }
      var j = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(x) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(x, L, G) {
          Se(x, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(x, L, G, q) {
          Se(x, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(x, L, G, q) {
          Se(x, "setState");
        }
      }, re = Object.assign, tt = {};
      Object.freeze(tt);
      function Je(x, L, G) {
        this.props = x, this.context = L, this.refs = tt, this.updater = G || j;
      }
      Je.prototype.isReactComponent = {}, Je.prototype.setState = function(x, L) {
        if (typeof x != "object" && typeof x != "function" && x != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, x, L, "setState");
      }, Je.prototype.forceUpdate = function(x) {
        this.updater.enqueueForceUpdate(this, x, "forceUpdate");
      };
      {
        var gt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ht = function(x, L) {
          Object.defineProperty(Je.prototype, x, {
            get: function() {
              Ut("%s(...) is deprecated in plain JavaScript React classes. %s", L[0], L[1]);
            }
          });
        };
        for (var dt in gt)
          gt.hasOwnProperty(dt) && ht(dt, gt[dt]);
      }
      function vt() {
      }
      vt.prototype = Je.prototype;
      function St(x, L, G) {
        this.props = x, this.context = L, this.refs = tt, this.updater = G || j;
      }
      var Gt = St.prototype = new vt();
      Gt.constructor = St, re(Gt, Je.prototype), Gt.isPureReactComponent = !0;
      function Nn() {
        var x = {
          current: null
        };
        return Object.seal(x), x;
      }
      var Ar = Array.isArray;
      function xn(x) {
        return Ar(x);
      }
      function sr(x) {
        {
          var L = typeof Symbol == "function" && Symbol.toStringTag, G = L && x[Symbol.toStringTag] || x.constructor.name || "Object";
          return G;
        }
      }
      function Wn(x) {
        try {
          return $n(x), !1;
        } catch {
          return !0;
        }
      }
      function $n(x) {
        return "" + x;
      }
      function qr(x) {
        if (Wn(x))
          return xe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", sr(x)), $n(x);
      }
      function Ea(x, L, G) {
        var q = x.displayName;
        if (q)
          return q;
        var me = L.displayName || L.name || "";
        return me !== "" ? G + "(" + me + ")" : G;
      }
      function yi(x) {
        return x.displayName || "Context";
      }
      function er(x) {
        if (x == null)
          return null;
        if (typeof x.tag == "number" && xe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof x == "function")
          return x.displayName || x.name || null;
        if (typeof x == "string")
          return x;
        switch (x) {
          case T:
            return "Fragment";
          case y:
            return "Portal";
          case E:
            return "Profiler";
          case v:
            return "StrictMode";
          case _:
            return "Suspense";
          case O:
            return "SuspenseList";
        }
        if (typeof x == "object")
          switch (x.$$typeof) {
            case b:
              var L = x;
              return yi(L) + ".Consumer";
            case R:
              var G = x;
              return yi(G._context) + ".Provider";
            case k:
              return Ea(x, x.render, "ForwardRef");
            case U:
              var q = x.displayName || null;
              return q !== null ? q : er(x.type) || "Memo";
            case H: {
              var me = x, Ke = me._payload, Re = me._init;
              try {
                return er(Re(Ke));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Rn = Object.prototype.hasOwnProperty, Gn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Rr, ea, Pn;
      Pn = {};
      function wr(x) {
        if (Rn.call(x, "ref")) {
          var L = Object.getOwnPropertyDescriptor(x, "ref").get;
          if (L && L.isReactWarning)
            return !1;
        }
        return x.ref !== void 0;
      }
      function gi(x) {
        if (Rn.call(x, "key")) {
          var L = Object.getOwnPropertyDescriptor(x, "key").get;
          if (L && L.isReactWarning)
            return !1;
        }
        return x.key !== void 0;
      }
      function ta(x, L) {
        var G = function() {
          Rr || (Rr = !0, xe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        G.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: G,
          configurable: !0
        });
      }
      function Ca(x, L) {
        var G = function() {
          ea || (ea = !0, xe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        G.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: G,
          configurable: !0
        });
      }
      function Ee(x) {
        if (typeof x.ref == "string" && Ce.current && x.__self && Ce.current.stateNode !== x.__self) {
          var L = er(Ce.current.type);
          Pn[L] || (xe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L, x.ref), Pn[L] = !0);
        }
      }
      var Be = function(x, L, G, q, me, Ke, Re) {
        var qe = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: p,
          // Built-in properties that belong on the element
          type: x,
          key: L,
          ref: G,
          props: Re,
          // Record the component responsible for creating this element.
          _owner: Ke
        };
        return qe._store = {}, Object.defineProperty(qe._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(qe, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: q
        }), Object.defineProperty(qe, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: me
        }), Object.freeze && (Object.freeze(qe.props), Object.freeze(qe)), qe;
      };
      function mt(x, L, G) {
        var q, me = {}, Ke = null, Re = null, qe = null, Rt = null;
        if (L != null) {
          wr(L) && (Re = L.ref, Ee(L)), gi(L) && (qr(L.key), Ke = "" + L.key), qe = L.__self === void 0 ? null : L.__self, Rt = L.__source === void 0 ? null : L.__source;
          for (q in L)
            Rn.call(L, q) && !Gn.hasOwnProperty(q) && (me[q] = L[q]);
        }
        var Pt = arguments.length - 2;
        if (Pt === 1)
          me.children = G;
        else if (Pt > 1) {
          for (var ln = Array(Pt), qt = 0; qt < Pt; qt++)
            ln[qt] = arguments[qt + 2];
          Object.freeze && Object.freeze(ln), me.children = ln;
        }
        if (x && x.defaultProps) {
          var yt = x.defaultProps;
          for (q in yt)
            me[q] === void 0 && (me[q] = yt[q]);
        }
        if (Ke || Re) {
          var Zt = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          Ke && ta(me, Zt), Re && Ca(me, Zt);
        }
        return Be(x, Ke, Re, qe, Rt, Ce.current, me);
      }
      function Yt(x, L) {
        var G = Be(x.type, L, x.ref, x._self, x._source, x._owner, x.props);
        return G;
      }
      function rn(x, L, G) {
        if (x == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + x + ".");
        var q, me = re({}, x.props), Ke = x.key, Re = x.ref, qe = x._self, Rt = x._source, Pt = x._owner;
        if (L != null) {
          wr(L) && (Re = L.ref, Pt = Ce.current), gi(L) && (qr(L.key), Ke = "" + L.key);
          var ln;
          x.type && x.type.defaultProps && (ln = x.type.defaultProps);
          for (q in L)
            Rn.call(L, q) && !Gn.hasOwnProperty(q) && (L[q] === void 0 && ln !== void 0 ? me[q] = ln[q] : me[q] = L[q]);
        }
        var qt = arguments.length - 2;
        if (qt === 1)
          me.children = G;
        else if (qt > 1) {
          for (var yt = Array(qt), Zt = 0; Zt < qt; Zt++)
            yt[Zt] = arguments[Zt + 2];
          me.children = yt;
        }
        return Be(x.type, Ke, Re, qe, Rt, Pt, me);
      }
      function vn(x) {
        return typeof x == "object" && x !== null && x.$$typeof === p;
      }
      var un = ".", tr = ":";
      function an(x) {
        var L = /[=:]/g, G = {
          "=": "=0",
          ":": "=2"
        }, q = x.replace(L, function(me) {
          return G[me];
        });
        return "$" + q;
      }
      var Kt = !1, Qt = /\/+/g;
      function Si(x) {
        return x.replace(Qt, "$&/");
      }
      function br(x, L) {
        return typeof x == "object" && x !== null && x.key != null ? (qr(x.key), an("" + x.key)) : L.toString(36);
      }
      function Oi(x, L, G, q, me) {
        var Ke = typeof x;
        (Ke === "undefined" || Ke === "boolean") && (x = null);
        var Re = !1;
        if (x === null)
          Re = !0;
        else
          switch (Ke) {
            case "string":
            case "number":
              Re = !0;
              break;
            case "object":
              switch (x.$$typeof) {
                case p:
                case y:
                  Re = !0;
              }
          }
        if (Re) {
          var qe = x, Rt = me(qe), Pt = q === "" ? un + br(qe, 0) : q;
          if (xn(Rt)) {
            var ln = "";
            Pt != null && (ln = Si(Pt) + "/"), Oi(Rt, L, ln, "", function(Ud) {
              return Ud;
            });
          } else Rt != null && (vn(Rt) && (Rt.key && (!qe || qe.key !== Rt.key) && qr(Rt.key), Rt = Yt(
            Rt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            G + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Rt.key && (!qe || qe.key !== Rt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Si("" + Rt.key) + "/"
            ) : "") + Pt
          )), L.push(Rt));
          return 1;
        }
        var qt, yt, Zt = 0, mn = q === "" ? un : q + tr;
        if (xn(x))
          for (var Uo = 0; Uo < x.length; Uo++)
            qt = x[Uo], yt = mn + br(qt, Uo), Zt += Oi(qt, L, G, yt, me);
        else {
          var gu = ae(x);
          if (typeof gu == "function") {
            var eo = x;
            gu === eo.entries && (Kt || Ut("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Kt = !0);
            for (var Su = gu.call(eo), wl, Pd = 0; !(wl = Su.next()).done; )
              qt = wl.value, yt = mn + br(qt, Pd++), Zt += Oi(qt, L, G, yt, me);
          } else if (Ke === "object") {
            var Vc = String(x);
            throw new Error("Objects are not valid as a React child (found: " + (Vc === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : Vc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Zt;
      }
      function qa(x, L, G) {
        if (x == null)
          return x;
        var q = [], me = 0;
        return Oi(x, q, "", "", function(Ke) {
          return L.call(G, Ke, me++);
        }), q;
      }
      function ml(x) {
        var L = 0;
        return qa(x, function() {
          L++;
        }), L;
      }
      function yl(x, L, G) {
        qa(x, function() {
          L.apply(this, arguments);
        }, G);
      }
      function Do(x) {
        return qa(x, function(L) {
          return L;
        }) || [];
      }
      function _o(x) {
        if (!vn(x))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return x;
      }
      function gl(x) {
        var L = {
          $$typeof: b,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: x,
          _currentValue2: x,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        L.Provider = {
          $$typeof: R,
          _context: L
        };
        var G = !1, q = !1, me = !1;
        {
          var Ke = {
            $$typeof: b,
            _context: L
          };
          Object.defineProperties(Ke, {
            Provider: {
              get: function() {
                return q || (q = !0, xe("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), L.Provider;
              },
              set: function(Re) {
                L.Provider = Re;
              }
            },
            _currentValue: {
              get: function() {
                return L._currentValue;
              },
              set: function(Re) {
                L._currentValue = Re;
              }
            },
            _currentValue2: {
              get: function() {
                return L._currentValue2;
              },
              set: function(Re) {
                L._currentValue2 = Re;
              }
            },
            _threadCount: {
              get: function() {
                return L._threadCount;
              },
              set: function(Re) {
                L._threadCount = Re;
              }
            },
            Consumer: {
              get: function() {
                return G || (G = !0, xe("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), L.Consumer;
              }
            },
            displayName: {
              get: function() {
                return L.displayName;
              },
              set: function(Re) {
                me || (Ut("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Re), me = !0);
              }
            }
          }), L.Consumer = Ke;
        }
        return L._currentRenderer = null, L._currentRenderer2 = null, L;
      }
      var Or = -1, Lr = 0, ur = 1, Ta = 2;
      function na(x) {
        if (x._status === Or) {
          var L = x._result, G = L();
          if (G.then(function(Ke) {
            if (x._status === Lr || x._status === Or) {
              var Re = x;
              Re._status = ur, Re._result = Ke;
            }
          }, function(Ke) {
            if (x._status === Lr || x._status === Or) {
              var Re = x;
              Re._status = Ta, Re._result = Ke;
            }
          }), x._status === Or) {
            var q = x;
            q._status = Lr, q._result = G;
          }
        }
        if (x._status === ur) {
          var me = x._result;
          return me === void 0 && xe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, me), "default" in me || xe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, me), me.default;
        } else
          throw x._result;
      }
      function xa(x) {
        var L = {
          // We use these fields to store the result.
          _status: Or,
          _result: x
        }, G = {
          $$typeof: H,
          _payload: L,
          _init: na
        };
        {
          var q, me;
          Object.defineProperties(G, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return q;
              },
              set: function(Ke) {
                xe("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), q = Ke, Object.defineProperty(G, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return me;
              },
              set: function(Ke) {
                xe("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), me = Ke, Object.defineProperty(G, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return G;
      }
      function Ra(x) {
        x != null && x.$$typeof === U ? xe("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof x != "function" ? xe("forwardRef requires a render function but was given %s.", x === null ? "null" : typeof x) : x.length !== 0 && x.length !== 2 && xe("forwardRef render functions accept exactly two parameters: props and ref. %s", x.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), x != null && (x.defaultProps != null || x.propTypes != null) && xe("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var L = {
          $$typeof: k,
          render: x
        };
        {
          var G;
          Object.defineProperty(L, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return G;
            },
            set: function(q) {
              G = q, !x.name && !x.displayName && (x.displayName = q);
            }
          });
        }
        return L;
      }
      var N;
      N = Symbol.for("react.module.reference");
      function le(x) {
        return !!(typeof x == "string" || typeof x == "function" || x === T || x === E || Ot || x === v || x === _ || x === O || Ie || x === X || Ne || wt || Tt || typeof x == "object" && x !== null && (x.$$typeof === H || x.$$typeof === U || x.$$typeof === R || x.$$typeof === b || x.$$typeof === k || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        x.$$typeof === N || x.getModuleId !== void 0));
      }
      function we(x, L) {
        le(x) || xe("memo: The first argument must be a component. Instead received: %s", x === null ? "null" : typeof x);
        var G = {
          $$typeof: U,
          type: x,
          compare: L === void 0 ? null : L
        };
        {
          var q;
          Object.defineProperty(G, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return q;
            },
            set: function(me) {
              q = me, !x.name && !x.displayName && (x.displayName = me);
            }
          });
        }
        return G;
      }
      function Le() {
        var x = oe.current;
        return x === null && xe(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), x;
      }
      function ut(x) {
        var L = Le();
        if (x._context !== void 0) {
          var G = x._context;
          G.Consumer === x ? xe("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : G.Provider === x && xe("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return L.useContext(x);
      }
      function ot(x) {
        var L = Le();
        return L.useState(x);
      }
      function xt(x, L, G) {
        var q = Le();
        return q.useReducer(x, L, G);
      }
      function Et(x) {
        var L = Le();
        return L.useRef(x);
      }
      function wn(x, L) {
        var G = Le();
        return G.useEffect(x, L);
      }
      function on(x, L) {
        var G = Le();
        return G.useInsertionEffect(x, L);
      }
      function cn(x, L) {
        var G = Le();
        return G.useLayoutEffect(x, L);
      }
      function cr(x, L) {
        var G = Le();
        return G.useCallback(x, L);
      }
      function ra(x, L) {
        var G = Le();
        return G.useMemo(x, L);
      }
      function ia(x, L, G) {
        var q = Le();
        return q.useImperativeHandle(x, L, G);
      }
      function ct(x, L) {
        {
          var G = Le();
          return G.useDebugValue(x, L);
        }
      }
      function pt() {
        var x = Le();
        return x.useTransition();
      }
      function aa(x) {
        var L = Le();
        return L.useDeferredValue(x);
      }
      function Sl() {
        var x = Le();
        return x.useId();
      }
      function El(x, L, G) {
        var q = Le();
        return q.useSyncExternalStore(x, L, G);
      }
      var ko = 0, ds, Mo, Zr, hu, Nr, Pc, Uc;
      function ps() {
      }
      ps.__reactDisabledLog = !0;
      function Ao() {
        {
          if (ko === 0) {
            ds = console.log, Mo = console.info, Zr = console.warn, hu = console.error, Nr = console.group, Pc = console.groupCollapsed, Uc = console.groupEnd;
            var x = {
              configurable: !0,
              enumerable: !0,
              value: ps,
              writable: !0
            };
            Object.defineProperties(console, {
              info: x,
              log: x,
              warn: x,
              error: x,
              group: x,
              groupCollapsed: x,
              groupEnd: x
            });
          }
          ko++;
        }
      }
      function Ei() {
        {
          if (ko--, ko === 0) {
            var x = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: re({}, x, {
                value: ds
              }),
              info: re({}, x, {
                value: Mo
              }),
              warn: re({}, x, {
                value: Zr
              }),
              error: re({}, x, {
                value: hu
              }),
              group: re({}, x, {
                value: Nr
              }),
              groupCollapsed: re({}, x, {
                value: Pc
              }),
              groupEnd: re({}, x, {
                value: Uc
              })
            });
          }
          ko < 0 && xe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var oa = Lt.ReactCurrentDispatcher, la;
      function hs(x, L, G) {
        {
          if (la === void 0)
            try {
              throw Error();
            } catch (me) {
              var q = me.stack.trim().match(/\n( *(at )?)/);
              la = q && q[1] || "";
            }
          return `
` + la + x;
        }
      }
      var Cl = !1, Oo;
      {
        var vs = typeof WeakMap == "function" ? WeakMap : Map;
        Oo = new vs();
      }
      function ms(x, L) {
        if (!x || Cl)
          return "";
        {
          var G = Oo.get(x);
          if (G !== void 0)
            return G;
        }
        var q;
        Cl = !0;
        var me = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ke;
        Ke = oa.current, oa.current = null, Ao();
        try {
          if (L) {
            var Re = function() {
              throw Error();
            };
            if (Object.defineProperty(Re.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Re, []);
              } catch (mn) {
                q = mn;
              }
              Reflect.construct(x, [], Re);
            } else {
              try {
                Re.call();
              } catch (mn) {
                q = mn;
              }
              x.call(Re.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (mn) {
              q = mn;
            }
            x();
          }
        } catch (mn) {
          if (mn && q && typeof mn.stack == "string") {
            for (var qe = mn.stack.split(`
`), Rt = q.stack.split(`
`), Pt = qe.length - 1, ln = Rt.length - 1; Pt >= 1 && ln >= 0 && qe[Pt] !== Rt[ln]; )
              ln--;
            for (; Pt >= 1 && ln >= 0; Pt--, ln--)
              if (qe[Pt] !== Rt[ln]) {
                if (Pt !== 1 || ln !== 1)
                  do
                    if (Pt--, ln--, ln < 0 || qe[Pt] !== Rt[ln]) {
                      var qt = `
` + qe[Pt].replace(" at new ", " at ");
                      return x.displayName && qt.includes("<anonymous>") && (qt = qt.replace("<anonymous>", x.displayName)), typeof x == "function" && Oo.set(x, qt), qt;
                    }
                  while (Pt >= 1 && ln >= 0);
                break;
              }
          }
        } finally {
          Cl = !1, oa.current = Ke, Ei(), Error.prepareStackTrace = me;
        }
        var yt = x ? x.displayName || x.name : "", Zt = yt ? hs(yt) : "";
        return typeof x == "function" && Oo.set(x, Zt), Zt;
      }
      function Za(x, L, G) {
        return ms(x, !1);
      }
      function Ld(x) {
        var L = x.prototype;
        return !!(L && L.isReactComponent);
      }
      function Ja(x, L, G) {
        if (x == null)
          return "";
        if (typeof x == "function")
          return ms(x, Ld(x));
        if (typeof x == "string")
          return hs(x);
        switch (x) {
          case _:
            return hs("Suspense");
          case O:
            return hs("SuspenseList");
        }
        if (typeof x == "object")
          switch (x.$$typeof) {
            case k:
              return Za(x.render);
            case U:
              return Ja(x.type, L, G);
            case H: {
              var q = x, me = q._payload, Ke = q._init;
              try {
                return Ja(Ke(me), L, G);
              } catch {
              }
            }
          }
        return "";
      }
      var zt = {}, ys = Lt.ReactDebugCurrentFrame;
      function Nt(x) {
        if (x) {
          var L = x._owner, G = Ja(x.type, x._source, L ? L.type : null);
          ys.setExtraStackFrame(G);
        } else
          ys.setExtraStackFrame(null);
      }
      function vu(x, L, G, q, me) {
        {
          var Ke = Function.call.bind(Rn);
          for (var Re in x)
            if (Ke(x, Re)) {
              var qe = void 0;
              try {
                if (typeof x[Re] != "function") {
                  var Rt = Error((q || "React class") + ": " + G + " type `" + Re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[Re] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Rt.name = "Invariant Violation", Rt;
                }
                qe = x[Re](L, Re, q, G, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Pt) {
                qe = Pt;
              }
              qe && !(qe instanceof Error) && (Nt(me), xe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", q || "React class", G, Re, typeof qe), Nt(null)), qe instanceof Error && !(qe.message in zt) && (zt[qe.message] = !0, Nt(me), xe("Failed %s type: %s", G, qe.message), Nt(null));
            }
        }
      }
      function wa(x) {
        if (x) {
          var L = x._owner, G = Ja(x.type, x._source, L ? L.type : null);
          je(G);
        } else
          je(null);
      }
      var at;
      at = !1;
      function gs() {
        if (Ce.current) {
          var x = er(Ce.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
      function fr(x) {
        if (x !== void 0) {
          var L = x.fileName.replace(/^.*[\\\/]/, ""), G = x.lineNumber;
          return `

Check your code at ` + L + ":" + G + ".";
        }
        return "";
      }
      function ba(x) {
        return x != null ? fr(x.__source) : "";
      }
      var Pr = {};
      function Da(x) {
        var L = gs();
        if (!L) {
          var G = typeof x == "string" ? x : x.displayName || x.name;
          G && (L = `

Check the top-level render call using <` + G + ">.");
        }
        return L;
      }
      function fn(x, L) {
        if (!(!x._store || x._store.validated || x.key != null)) {
          x._store.validated = !0;
          var G = Da(L);
          if (!Pr[G]) {
            Pr[G] = !0;
            var q = "";
            x && x._owner && x._owner !== Ce.current && (q = " It was passed a child from " + er(x._owner.type) + "."), wa(x), xe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', G, q), wa(null);
          }
        }
      }
      function Xt(x, L) {
        if (typeof x == "object") {
          if (xn(x))
            for (var G = 0; G < x.length; G++) {
              var q = x[G];
              vn(q) && fn(q, L);
            }
          else if (vn(x))
            x._store && (x._store.validated = !0);
          else if (x) {
            var me = ae(x);
            if (typeof me == "function" && me !== x.entries)
              for (var Ke = me.call(x), Re; !(Re = Ke.next()).done; )
                vn(Re.value) && fn(Re.value, L);
          }
        }
      }
      function Lo(x) {
        {
          var L = x.type;
          if (L == null || typeof L == "string")
            return;
          var G;
          if (typeof L == "function")
            G = L.propTypes;
          else if (typeof L == "object" && (L.$$typeof === k || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          L.$$typeof === U))
            G = L.propTypes;
          else
            return;
          if (G) {
            var q = er(L);
            vu(G, x.props, "prop", q, x);
          } else if (L.PropTypes !== void 0 && !at) {
            at = !0;
            var me = er(L);
            xe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", me || "Unknown");
          }
          typeof L.getDefaultProps == "function" && !L.getDefaultProps.isReactClassApproved && xe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Kn(x) {
        {
          for (var L = Object.keys(x.props), G = 0; G < L.length; G++) {
            var q = L[G];
            if (q !== "children" && q !== "key") {
              wa(x), xe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", q), wa(null);
              break;
            }
          }
          x.ref !== null && (wa(x), xe("Invalid attribute `ref` supplied to `React.Fragment`."), wa(null));
        }
      }
      function Ur(x, L, G) {
        var q = le(x);
        if (!q) {
          var me = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (me += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ke = ba(L);
          Ke ? me += Ke : me += gs();
          var Re;
          x === null ? Re = "null" : xn(x) ? Re = "array" : x !== void 0 && x.$$typeof === p ? (Re = "<" + (er(x.type) || "Unknown") + " />", me = " Did you accidentally export a JSX literal instead of a component?") : Re = typeof x, xe("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Re, me);
        }
        var qe = mt.apply(this, arguments);
        if (qe == null)
          return qe;
        if (q)
          for (var Rt = 2; Rt < arguments.length; Rt++)
            Xt(arguments[Rt], x);
        return x === T ? Kn(qe) : Lo(qe), qe;
      }
      var Li = !1;
      function Tl(x) {
        var L = Ur.bind(null, x);
        return L.type = x, Li || (Li = !0, Ut("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(L, "type", {
          enumerable: !1,
          get: function() {
            return Ut("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: x
            }), x;
          }
        }), L;
      }
      function mu(x, L, G) {
        for (var q = rn.apply(this, arguments), me = 2; me < arguments.length; me++)
          Xt(arguments[me], q.type);
        return Lo(q), q;
      }
      function yu(x, L) {
        var G = ve.transition;
        ve.transition = {};
        var q = ve.transition;
        ve.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          x();
        } finally {
          if (ve.transition = G, G === null && q._updatedFibers) {
            var me = q._updatedFibers.size;
            me > 10 && Ut("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), q._updatedFibers.clear();
          }
        }
      }
      var No = !1, xl = null;
      function Nd(x) {
        if (xl === null)
          try {
            var L = ("require" + Math.random()).slice(0, 7), G = o && o[L];
            xl = G.call(o, "timers").setImmediate;
          } catch {
            xl = function(me) {
              No === !1 && (No = !0, typeof MessageChannel > "u" && xe("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Ke = new MessageChannel();
              Ke.port1.onmessage = me, Ke.port2.postMessage(void 0);
            };
          }
        return xl(x);
      }
      var Ni = 0, sa = !1;
      function _a(x) {
        {
          var L = Ni;
          Ni++, J.current === null && (J.current = []);
          var G = J.isBatchingLegacy, q;
          try {
            if (J.isBatchingLegacy = !0, q = x(), !G && J.didScheduleLegacyUpdate) {
              var me = J.current;
              me !== null && (J.didScheduleLegacyUpdate = !1, Po(me));
            }
          } catch (yt) {
            throw Pi(L), yt;
          } finally {
            J.isBatchingLegacy = G;
          }
          if (q !== null && typeof q == "object" && typeof q.then == "function") {
            var Ke = q, Re = !1, qe = {
              then: function(yt, Zt) {
                Re = !0, Ke.then(function(mn) {
                  Pi(L), Ni === 0 ? Ss(mn, yt, Zt) : yt(mn);
                }, function(mn) {
                  Pi(L), Zt(mn);
                });
              }
            };
            return !sa && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Re || (sa = !0, xe("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), qe;
          } else {
            var Rt = q;
            if (Pi(L), Ni === 0) {
              var Pt = J.current;
              Pt !== null && (Po(Pt), J.current = null);
              var ln = {
                then: function(yt, Zt) {
                  J.current === null ? (J.current = [], Ss(Rt, yt, Zt)) : yt(Rt);
                }
              };
              return ln;
            } else {
              var qt = {
                then: function(yt, Zt) {
                  yt(Rt);
                }
              };
              return qt;
            }
          }
        }
      }
      function Pi(x) {
        x !== Ni - 1 && xe("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ni = x;
      }
      function Ss(x, L, G) {
        {
          var q = J.current;
          if (q !== null)
            try {
              Po(q), Nd(function() {
                q.length === 0 ? (J.current = null, L(x)) : Ss(x, L, G);
              });
            } catch (me) {
              G(me);
            }
          else
            L(x);
        }
      }
      var Es = !1;
      function Po(x) {
        if (!Es) {
          Es = !0;
          var L = 0;
          try {
            for (; L < x.length; L++) {
              var G = x[L];
              do
                G = G(!0);
              while (G !== null);
            }
            x.length = 0;
          } catch (q) {
            throw x = x.slice(L + 1), q;
          } finally {
            Es = !1;
          }
        }
      }
      var Rl = Ur, Cs = mu, Ts = Tl, ua = {
        map: qa,
        forEach: yl,
        count: ml,
        toArray: Do,
        only: _o
      };
      l.Children = ua, l.Component = Je, l.Fragment = T, l.Profiler = E, l.PureComponent = St, l.StrictMode = v, l.Suspense = _, l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lt, l.act = _a, l.cloneElement = Cs, l.createContext = gl, l.createElement = Rl, l.createFactory = Ts, l.createRef = Nn, l.forwardRef = Ra, l.isValidElement = vn, l.lazy = xa, l.memo = we, l.startTransition = yu, l.unstable_act = _a, l.useCallback = cr, l.useContext = ut, l.useDebugValue = ct, l.useDeferredValue = aa, l.useEffect = wn, l.useId = Sl, l.useImperativeHandle = ia, l.useInsertionEffect = on, l.useLayoutEffect = cn, l.useMemo = ra, l.useReducer = xt, l.useRef = Et, l.useState = ot, l.useSyncExternalStore = El, l.useTransition = pt, l.version = c, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Bh, Bh.exports)), Bh.exports;
}
process.env.NODE_ENV === "production" ? eC.exports = wL() : eC.exports = bL();
var Ge = eC.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nw;
function DL() {
  if (Nw) return zh;
  Nw = 1;
  var o = Ge, l = Symbol.for("react.element"), c = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, y = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(E, R, b) {
    var k, _ = {}, O = null, U = null;
    b !== void 0 && (O = "" + b), R.key !== void 0 && (O = "" + R.key), R.ref !== void 0 && (U = R.ref);
    for (k in R) p.call(R, k) && !T.hasOwnProperty(k) && (_[k] = R[k]);
    if (E && E.defaultProps) for (k in R = E.defaultProps, R) _[k] === void 0 && (_[k] = R[k]);
    return { $$typeof: l, type: E, key: O, ref: U, props: _, _owner: y.current };
  }
  return zh.Fragment = c, zh.jsx = v, zh.jsxs = v, zh;
}
var Fh = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pw;
function _L() {
  return Pw || (Pw = 1, process.env.NODE_ENV !== "production" && function() {
    var o = Ge, l = Symbol.for("react.element"), c = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), E = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), U = Symbol.for("react.offscreen"), H = Symbol.iterator, X = "@@iterator";
    function Z(N) {
      if (N === null || typeof N != "object")
        return null;
      var le = H && N[H] || N[X];
      return typeof le == "function" ? le : null;
    }
    var ne = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ae(N) {
      {
        for (var le = arguments.length, we = new Array(le > 1 ? le - 1 : 0), Le = 1; Le < le; Le++)
          we[Le - 1] = arguments[Le];
        oe("error", N, we);
      }
    }
    function oe(N, le, we) {
      {
        var Le = ne.ReactDebugCurrentFrame, ut = Le.getStackAddendum();
        ut !== "" && (le += "%s", we = we.concat([ut]));
        var ot = we.map(function(xt) {
          return String(xt);
        });
        ot.unshift("Warning: " + le), Function.prototype.apply.call(console[N], console, ot);
      }
    }
    var ve = !1, J = !1, Ce = !1, ge = !1, ye = !1, je;
    je = Symbol.for("react.module.reference");
    function Ne(N) {
      return !!(typeof N == "string" || typeof N == "function" || N === p || N === T || ye || N === y || N === b || N === k || ge || N === U || ve || J || Ce || typeof N == "object" && N !== null && (N.$$typeof === O || N.$$typeof === _ || N.$$typeof === v || N.$$typeof === E || N.$$typeof === R || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      N.$$typeof === je || N.getModuleId !== void 0));
    }
    function wt(N, le, we) {
      var Le = N.displayName;
      if (Le)
        return Le;
      var ut = le.displayName || le.name || "";
      return ut !== "" ? we + "(" + ut + ")" : we;
    }
    function Tt(N) {
      return N.displayName || "Context";
    }
    function Ie(N) {
      if (N == null)
        return null;
      if (typeof N.tag == "number" && ae("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof N == "function")
        return N.displayName || N.name || null;
      if (typeof N == "string")
        return N;
      switch (N) {
        case p:
          return "Fragment";
        case c:
          return "Portal";
        case T:
          return "Profiler";
        case y:
          return "StrictMode";
        case b:
          return "Suspense";
        case k:
          return "SuspenseList";
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case E:
            var le = N;
            return Tt(le) + ".Consumer";
          case v:
            var we = N;
            return Tt(we._context) + ".Provider";
          case R:
            return wt(N, N.render, "ForwardRef");
          case _:
            var Le = N.displayName || null;
            return Le !== null ? Le : Ie(N.type) || "Memo";
          case O: {
            var ut = N, ot = ut._payload, xt = ut._init;
            try {
              return Ie(xt(ot));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ot = Object.assign, Lt = 0, Ut, xe, de, ze, Se, j, re;
    function tt() {
    }
    tt.__reactDisabledLog = !0;
    function Je() {
      {
        if (Lt === 0) {
          Ut = console.log, xe = console.info, de = console.warn, ze = console.error, Se = console.group, j = console.groupCollapsed, re = console.groupEnd;
          var N = {
            configurable: !0,
            enumerable: !0,
            value: tt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: N,
            log: N,
            warn: N,
            error: N,
            group: N,
            groupCollapsed: N,
            groupEnd: N
          });
        }
        Lt++;
      }
    }
    function gt() {
      {
        if (Lt--, Lt === 0) {
          var N = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ot({}, N, {
              value: Ut
            }),
            info: Ot({}, N, {
              value: xe
            }),
            warn: Ot({}, N, {
              value: de
            }),
            error: Ot({}, N, {
              value: ze
            }),
            group: Ot({}, N, {
              value: Se
            }),
            groupCollapsed: Ot({}, N, {
              value: j
            }),
            groupEnd: Ot({}, N, {
              value: re
            })
          });
        }
        Lt < 0 && ae("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ht = ne.ReactCurrentDispatcher, dt;
    function vt(N, le, we) {
      {
        if (dt === void 0)
          try {
            throw Error();
          } catch (ut) {
            var Le = ut.stack.trim().match(/\n( *(at )?)/);
            dt = Le && Le[1] || "";
          }
        return `
` + dt + N;
      }
    }
    var St = !1, Gt;
    {
      var Nn = typeof WeakMap == "function" ? WeakMap : Map;
      Gt = new Nn();
    }
    function Ar(N, le) {
      if (!N || St)
        return "";
      {
        var we = Gt.get(N);
        if (we !== void 0)
          return we;
      }
      var Le;
      St = !0;
      var ut = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ot;
      ot = ht.current, ht.current = null, Je();
      try {
        if (le) {
          var xt = function() {
            throw Error();
          };
          if (Object.defineProperty(xt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(xt, []);
            } catch (ct) {
              Le = ct;
            }
            Reflect.construct(N, [], xt);
          } else {
            try {
              xt.call();
            } catch (ct) {
              Le = ct;
            }
            N.call(xt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ct) {
            Le = ct;
          }
          N();
        }
      } catch (ct) {
        if (ct && Le && typeof ct.stack == "string") {
          for (var Et = ct.stack.split(`
`), wn = Le.stack.split(`
`), on = Et.length - 1, cn = wn.length - 1; on >= 1 && cn >= 0 && Et[on] !== wn[cn]; )
            cn--;
          for (; on >= 1 && cn >= 0; on--, cn--)
            if (Et[on] !== wn[cn]) {
              if (on !== 1 || cn !== 1)
                do
                  if (on--, cn--, cn < 0 || Et[on] !== wn[cn]) {
                    var cr = `
` + Et[on].replace(" at new ", " at ");
                    return N.displayName && cr.includes("<anonymous>") && (cr = cr.replace("<anonymous>", N.displayName)), typeof N == "function" && Gt.set(N, cr), cr;
                  }
                while (on >= 1 && cn >= 0);
              break;
            }
        }
      } finally {
        St = !1, ht.current = ot, gt(), Error.prepareStackTrace = ut;
      }
      var ra = N ? N.displayName || N.name : "", ia = ra ? vt(ra) : "";
      return typeof N == "function" && Gt.set(N, ia), ia;
    }
    function xn(N, le, we) {
      return Ar(N, !1);
    }
    function sr(N) {
      var le = N.prototype;
      return !!(le && le.isReactComponent);
    }
    function Wn(N, le, we) {
      if (N == null)
        return "";
      if (typeof N == "function")
        return Ar(N, sr(N));
      if (typeof N == "string")
        return vt(N);
      switch (N) {
        case b:
          return vt("Suspense");
        case k:
          return vt("SuspenseList");
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case R:
            return xn(N.render);
          case _:
            return Wn(N.type, le, we);
          case O: {
            var Le = N, ut = Le._payload, ot = Le._init;
            try {
              return Wn(ot(ut), le, we);
            } catch {
            }
          }
        }
      return "";
    }
    var $n = Object.prototype.hasOwnProperty, qr = {}, Ea = ne.ReactDebugCurrentFrame;
    function yi(N) {
      if (N) {
        var le = N._owner, we = Wn(N.type, N._source, le ? le.type : null);
        Ea.setExtraStackFrame(we);
      } else
        Ea.setExtraStackFrame(null);
    }
    function er(N, le, we, Le, ut) {
      {
        var ot = Function.call.bind($n);
        for (var xt in N)
          if (ot(N, xt)) {
            var Et = void 0;
            try {
              if (typeof N[xt] != "function") {
                var wn = Error((Le || "React class") + ": " + we + " type `" + xt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof N[xt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw wn.name = "Invariant Violation", wn;
              }
              Et = N[xt](le, xt, Le, we, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (on) {
              Et = on;
            }
            Et && !(Et instanceof Error) && (yi(ut), ae("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Le || "React class", we, xt, typeof Et), yi(null)), Et instanceof Error && !(Et.message in qr) && (qr[Et.message] = !0, yi(ut), ae("Failed %s type: %s", we, Et.message), yi(null));
          }
      }
    }
    var Rn = Array.isArray;
    function Gn(N) {
      return Rn(N);
    }
    function Rr(N) {
      {
        var le = typeof Symbol == "function" && Symbol.toStringTag, we = le && N[Symbol.toStringTag] || N.constructor.name || "Object";
        return we;
      }
    }
    function ea(N) {
      try {
        return Pn(N), !1;
      } catch {
        return !0;
      }
    }
    function Pn(N) {
      return "" + N;
    }
    function wr(N) {
      if (ea(N))
        return ae("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rr(N)), Pn(N);
    }
    var gi = ne.ReactCurrentOwner, ta = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ca, Ee;
    function Be(N) {
      if ($n.call(N, "ref")) {
        var le = Object.getOwnPropertyDescriptor(N, "ref").get;
        if (le && le.isReactWarning)
          return !1;
      }
      return N.ref !== void 0;
    }
    function mt(N) {
      if ($n.call(N, "key")) {
        var le = Object.getOwnPropertyDescriptor(N, "key").get;
        if (le && le.isReactWarning)
          return !1;
      }
      return N.key !== void 0;
    }
    function Yt(N, le) {
      typeof N.ref == "string" && gi.current;
    }
    function rn(N, le) {
      {
        var we = function() {
          Ca || (Ca = !0, ae("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", le));
        };
        we.isReactWarning = !0, Object.defineProperty(N, "key", {
          get: we,
          configurable: !0
        });
      }
    }
    function vn(N, le) {
      {
        var we = function() {
          Ee || (Ee = !0, ae("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", le));
        };
        we.isReactWarning = !0, Object.defineProperty(N, "ref", {
          get: we,
          configurable: !0
        });
      }
    }
    var un = function(N, le, we, Le, ut, ot, xt) {
      var Et = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: N,
        key: le,
        ref: we,
        props: xt,
        // Record the component responsible for creating this element.
        _owner: ot
      };
      return Et._store = {}, Object.defineProperty(Et._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Et, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Le
      }), Object.defineProperty(Et, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ut
      }), Object.freeze && (Object.freeze(Et.props), Object.freeze(Et)), Et;
    };
    function tr(N, le, we, Le, ut) {
      {
        var ot, xt = {}, Et = null, wn = null;
        we !== void 0 && (wr(we), Et = "" + we), mt(le) && (wr(le.key), Et = "" + le.key), Be(le) && (wn = le.ref, Yt(le, ut));
        for (ot in le)
          $n.call(le, ot) && !ta.hasOwnProperty(ot) && (xt[ot] = le[ot]);
        if (N && N.defaultProps) {
          var on = N.defaultProps;
          for (ot in on)
            xt[ot] === void 0 && (xt[ot] = on[ot]);
        }
        if (Et || wn) {
          var cn = typeof N == "function" ? N.displayName || N.name || "Unknown" : N;
          Et && rn(xt, cn), wn && vn(xt, cn);
        }
        return un(N, Et, wn, ut, Le, gi.current, xt);
      }
    }
    var an = ne.ReactCurrentOwner, Kt = ne.ReactDebugCurrentFrame;
    function Qt(N) {
      if (N) {
        var le = N._owner, we = Wn(N.type, N._source, le ? le.type : null);
        Kt.setExtraStackFrame(we);
      } else
        Kt.setExtraStackFrame(null);
    }
    var Si;
    Si = !1;
    function br(N) {
      return typeof N == "object" && N !== null && N.$$typeof === l;
    }
    function Oi() {
      {
        if (an.current) {
          var N = Ie(an.current.type);
          if (N)
            return `

Check the render method of \`` + N + "`.";
        }
        return "";
      }
    }
    function qa(N) {
      return "";
    }
    var ml = {};
    function yl(N) {
      {
        var le = Oi();
        if (!le) {
          var we = typeof N == "string" ? N : N.displayName || N.name;
          we && (le = `

Check the top-level render call using <` + we + ">.");
        }
        return le;
      }
    }
    function Do(N, le) {
      {
        if (!N._store || N._store.validated || N.key != null)
          return;
        N._store.validated = !0;
        var we = yl(le);
        if (ml[we])
          return;
        ml[we] = !0;
        var Le = "";
        N && N._owner && N._owner !== an.current && (Le = " It was passed a child from " + Ie(N._owner.type) + "."), Qt(N), ae('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', we, Le), Qt(null);
      }
    }
    function _o(N, le) {
      {
        if (typeof N != "object")
          return;
        if (Gn(N))
          for (var we = 0; we < N.length; we++) {
            var Le = N[we];
            br(Le) && Do(Le, le);
          }
        else if (br(N))
          N._store && (N._store.validated = !0);
        else if (N) {
          var ut = Z(N);
          if (typeof ut == "function" && ut !== N.entries)
            for (var ot = ut.call(N), xt; !(xt = ot.next()).done; )
              br(xt.value) && Do(xt.value, le);
        }
      }
    }
    function gl(N) {
      {
        var le = N.type;
        if (le == null || typeof le == "string")
          return;
        var we;
        if (typeof le == "function")
          we = le.propTypes;
        else if (typeof le == "object" && (le.$$typeof === R || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        le.$$typeof === _))
          we = le.propTypes;
        else
          return;
        if (we) {
          var Le = Ie(le);
          er(we, N.props, "prop", Le, N);
        } else if (le.PropTypes !== void 0 && !Si) {
          Si = !0;
          var ut = Ie(le);
          ae("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ut || "Unknown");
        }
        typeof le.getDefaultProps == "function" && !le.getDefaultProps.isReactClassApproved && ae("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Or(N) {
      {
        for (var le = Object.keys(N.props), we = 0; we < le.length; we++) {
          var Le = le[we];
          if (Le !== "children" && Le !== "key") {
            Qt(N), ae("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Le), Qt(null);
            break;
          }
        }
        N.ref !== null && (Qt(N), ae("Invalid attribute `ref` supplied to `React.Fragment`."), Qt(null));
      }
    }
    var Lr = {};
    function ur(N, le, we, Le, ut, ot) {
      {
        var xt = Ne(N);
        if (!xt) {
          var Et = "";
          (N === void 0 || typeof N == "object" && N !== null && Object.keys(N).length === 0) && (Et += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var wn = qa();
          wn ? Et += wn : Et += Oi();
          var on;
          N === null ? on = "null" : Gn(N) ? on = "array" : N !== void 0 && N.$$typeof === l ? (on = "<" + (Ie(N.type) || "Unknown") + " />", Et = " Did you accidentally export a JSX literal instead of a component?") : on = typeof N, ae("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", on, Et);
        }
        var cn = tr(N, le, we, ut, ot);
        if (cn == null)
          return cn;
        if (xt) {
          var cr = le.children;
          if (cr !== void 0)
            if (Le)
              if (Gn(cr)) {
                for (var ra = 0; ra < cr.length; ra++)
                  _o(cr[ra], N);
                Object.freeze && Object.freeze(cr);
              } else
                ae("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _o(cr, N);
        }
        if ($n.call(le, "key")) {
          var ia = Ie(N), ct = Object.keys(le).filter(function(Sl) {
            return Sl !== "key";
          }), pt = ct.length > 0 ? "{key: someKey, " + ct.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Lr[ia + pt]) {
            var aa = ct.length > 0 ? "{" + ct.join(": ..., ") + ": ...}" : "{}";
            ae(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, pt, ia, aa, ia), Lr[ia + pt] = !0;
          }
        }
        return N === p ? Or(cn) : gl(cn), cn;
      }
    }
    function Ta(N, le, we) {
      return ur(N, le, we, !0);
    }
    function na(N, le, we) {
      return ur(N, le, we, !1);
    }
    var xa = na, Ra = Ta;
    Fh.Fragment = p, Fh.jsx = xa, Fh.jsxs = Ra;
  }()), Fh;
}
process.env.NODE_ENV === "production" ? JE.exports = DL() : JE.exports = _L();
var lr = JE.exports, tC = { exports: {} }, qi = {}, Xy = { exports: {} }, zE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uw;
function kL() {
  return Uw || (Uw = 1, function(o) {
    function l(de, ze) {
      var Se = de.length;
      de.push(ze);
      e: for (; 0 < Se; ) {
        var j = Se - 1 >>> 1, re = de[j];
        if (0 < y(re, ze)) de[j] = ze, de[Se] = re, Se = j;
        else break e;
      }
    }
    function c(de) {
      return de.length === 0 ? null : de[0];
    }
    function p(de) {
      if (de.length === 0) return null;
      var ze = de[0], Se = de.pop();
      if (Se !== ze) {
        de[0] = Se;
        e: for (var j = 0, re = de.length, tt = re >>> 1; j < tt; ) {
          var Je = 2 * (j + 1) - 1, gt = de[Je], ht = Je + 1, dt = de[ht];
          if (0 > y(gt, Se)) ht < re && 0 > y(dt, gt) ? (de[j] = dt, de[ht] = Se, j = ht) : (de[j] = gt, de[Je] = Se, j = Je);
          else if (ht < re && 0 > y(dt, Se)) de[j] = dt, de[ht] = Se, j = ht;
          else break e;
        }
      }
      return ze;
    }
    function y(de, ze) {
      var Se = de.sortIndex - ze.sortIndex;
      return Se !== 0 ? Se : de.id - ze.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var T = performance;
      o.unstable_now = function() {
        return T.now();
      };
    } else {
      var v = Date, E = v.now();
      o.unstable_now = function() {
        return v.now() - E;
      };
    }
    var R = [], b = [], k = 1, _ = null, O = 3, U = !1, H = !1, X = !1, Z = typeof setTimeout == "function" ? setTimeout : null, ne = typeof clearTimeout == "function" ? clearTimeout : null, ae = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function oe(de) {
      for (var ze = c(b); ze !== null; ) {
        if (ze.callback === null) p(b);
        else if (ze.startTime <= de) p(b), ze.sortIndex = ze.expirationTime, l(R, ze);
        else break;
        ze = c(b);
      }
    }
    function ve(de) {
      if (X = !1, oe(de), !H) if (c(R) !== null) H = !0, Ut(J);
      else {
        var ze = c(b);
        ze !== null && xe(ve, ze.startTime - de);
      }
    }
    function J(de, ze) {
      H = !1, X && (X = !1, ne(ye), ye = -1), U = !0;
      var Se = O;
      try {
        for (oe(ze), _ = c(R); _ !== null && (!(_.expirationTime > ze) || de && !wt()); ) {
          var j = _.callback;
          if (typeof j == "function") {
            _.callback = null, O = _.priorityLevel;
            var re = j(_.expirationTime <= ze);
            ze = o.unstable_now(), typeof re == "function" ? _.callback = re : _ === c(R) && p(R), oe(ze);
          } else p(R);
          _ = c(R);
        }
        if (_ !== null) var tt = !0;
        else {
          var Je = c(b);
          Je !== null && xe(ve, Je.startTime - ze), tt = !1;
        }
        return tt;
      } finally {
        _ = null, O = Se, U = !1;
      }
    }
    var Ce = !1, ge = null, ye = -1, je = 5, Ne = -1;
    function wt() {
      return !(o.unstable_now() - Ne < je);
    }
    function Tt() {
      if (ge !== null) {
        var de = o.unstable_now();
        Ne = de;
        var ze = !0;
        try {
          ze = ge(!0, de);
        } finally {
          ze ? Ie() : (Ce = !1, ge = null);
        }
      } else Ce = !1;
    }
    var Ie;
    if (typeof ae == "function") Ie = function() {
      ae(Tt);
    };
    else if (typeof MessageChannel < "u") {
      var Ot = new MessageChannel(), Lt = Ot.port2;
      Ot.port1.onmessage = Tt, Ie = function() {
        Lt.postMessage(null);
      };
    } else Ie = function() {
      Z(Tt, 0);
    };
    function Ut(de) {
      ge = de, Ce || (Ce = !0, Ie());
    }
    function xe(de, ze) {
      ye = Z(function() {
        de(o.unstable_now());
      }, ze);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(de) {
      de.callback = null;
    }, o.unstable_continueExecution = function() {
      H || U || (H = !0, Ut(J));
    }, o.unstable_forceFrameRate = function(de) {
      0 > de || 125 < de ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : je = 0 < de ? Math.floor(1e3 / de) : 5;
    }, o.unstable_getCurrentPriorityLevel = function() {
      return O;
    }, o.unstable_getFirstCallbackNode = function() {
      return c(R);
    }, o.unstable_next = function(de) {
      switch (O) {
        case 1:
        case 2:
        case 3:
          var ze = 3;
          break;
        default:
          ze = O;
      }
      var Se = O;
      O = ze;
      try {
        return de();
      } finally {
        O = Se;
      }
    }, o.unstable_pauseExecution = function() {
    }, o.unstable_requestPaint = function() {
    }, o.unstable_runWithPriority = function(de, ze) {
      switch (de) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          de = 3;
      }
      var Se = O;
      O = de;
      try {
        return ze();
      } finally {
        O = Se;
      }
    }, o.unstable_scheduleCallback = function(de, ze, Se) {
      var j = o.unstable_now();
      switch (typeof Se == "object" && Se !== null ? (Se = Se.delay, Se = typeof Se == "number" && 0 < Se ? j + Se : j) : Se = j, de) {
        case 1:
          var re = -1;
          break;
        case 2:
          re = 250;
          break;
        case 5:
          re = 1073741823;
          break;
        case 4:
          re = 1e4;
          break;
        default:
          re = 5e3;
      }
      return re = Se + re, de = { id: k++, callback: ze, priorityLevel: de, startTime: Se, expirationTime: re, sortIndex: -1 }, Se > j ? (de.sortIndex = Se, l(b, de), c(R) === null && de === c(b) && (X ? (ne(ye), ye = -1) : X = !0, xe(ve, Se - j))) : (de.sortIndex = re, l(R, de), H || U || (H = !0, Ut(J))), de;
    }, o.unstable_shouldYield = wt, o.unstable_wrapCallback = function(de) {
      var ze = O;
      return function() {
        var Se = O;
        O = ze;
        try {
          return de.apply(this, arguments);
        } finally {
          O = Se;
        }
      };
    };
  }(zE)), zE;
}
var FE = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vw;
function ML() {
  return Vw || (Vw = 1, function(o) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var l = !1, c = 5;
      function p(Ee, Be) {
        var mt = Ee.length;
        Ee.push(Be), v(Ee, Be, mt);
      }
      function y(Ee) {
        return Ee.length === 0 ? null : Ee[0];
      }
      function T(Ee) {
        if (Ee.length === 0)
          return null;
        var Be = Ee[0], mt = Ee.pop();
        return mt !== Be && (Ee[0] = mt, E(Ee, mt, 0)), Be;
      }
      function v(Ee, Be, mt) {
        for (var Yt = mt; Yt > 0; ) {
          var rn = Yt - 1 >>> 1, vn = Ee[rn];
          if (R(vn, Be) > 0)
            Ee[rn] = Be, Ee[Yt] = vn, Yt = rn;
          else
            return;
        }
      }
      function E(Ee, Be, mt) {
        for (var Yt = mt, rn = Ee.length, vn = rn >>> 1; Yt < vn; ) {
          var un = (Yt + 1) * 2 - 1, tr = Ee[un], an = un + 1, Kt = Ee[an];
          if (R(tr, Be) < 0)
            an < rn && R(Kt, tr) < 0 ? (Ee[Yt] = Kt, Ee[an] = Be, Yt = an) : (Ee[Yt] = tr, Ee[un] = Be, Yt = un);
          else if (an < rn && R(Kt, Be) < 0)
            Ee[Yt] = Kt, Ee[an] = Be, Yt = an;
          else
            return;
        }
      }
      function R(Ee, Be) {
        var mt = Ee.sortIndex - Be.sortIndex;
        return mt !== 0 ? mt : Ee.id - Be.id;
      }
      var b = 1, k = 2, _ = 3, O = 4, U = 5;
      function H(Ee, Be) {
      }
      var X = typeof performance == "object" && typeof performance.now == "function";
      if (X) {
        var Z = performance;
        o.unstable_now = function() {
          return Z.now();
        };
      } else {
        var ne = Date, ae = ne.now();
        o.unstable_now = function() {
          return ne.now() - ae;
        };
      }
      var oe = 1073741823, ve = -1, J = 250, Ce = 5e3, ge = 1e4, ye = oe, je = [], Ne = [], wt = 1, Tt = null, Ie = _, Ot = !1, Lt = !1, Ut = !1, xe = typeof setTimeout == "function" ? setTimeout : null, de = typeof clearTimeout == "function" ? clearTimeout : null, ze = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function Se(Ee) {
        for (var Be = y(Ne); Be !== null; ) {
          if (Be.callback === null)
            T(Ne);
          else if (Be.startTime <= Ee)
            T(Ne), Be.sortIndex = Be.expirationTime, p(je, Be);
          else
            return;
          Be = y(Ne);
        }
      }
      function j(Ee) {
        if (Ut = !1, Se(Ee), !Lt)
          if (y(je) !== null)
            Lt = !0, Pn(re);
          else {
            var Be = y(Ne);
            Be !== null && wr(j, Be.startTime - Ee);
          }
      }
      function re(Ee, Be) {
        Lt = !1, Ut && (Ut = !1, gi()), Ot = !0;
        var mt = Ie;
        try {
          var Yt;
          if (!l) return tt(Ee, Be);
        } finally {
          Tt = null, Ie = mt, Ot = !1;
        }
      }
      function tt(Ee, Be) {
        var mt = Be;
        for (Se(mt), Tt = y(je); Tt !== null && !(Tt.expirationTime > mt && (!Ee || Ea())); ) {
          var Yt = Tt.callback;
          if (typeof Yt == "function") {
            Tt.callback = null, Ie = Tt.priorityLevel;
            var rn = Tt.expirationTime <= mt, vn = Yt(rn);
            mt = o.unstable_now(), typeof vn == "function" ? Tt.callback = vn : Tt === y(je) && T(je), Se(mt);
          } else
            T(je);
          Tt = y(je);
        }
        if (Tt !== null)
          return !0;
        var un = y(Ne);
        return un !== null && wr(j, un.startTime - mt), !1;
      }
      function Je(Ee, Be) {
        switch (Ee) {
          case b:
          case k:
          case _:
          case O:
          case U:
            break;
          default:
            Ee = _;
        }
        var mt = Ie;
        Ie = Ee;
        try {
          return Be();
        } finally {
          Ie = mt;
        }
      }
      function gt(Ee) {
        var Be;
        switch (Ie) {
          case b:
          case k:
          case _:
            Be = _;
            break;
          default:
            Be = Ie;
            break;
        }
        var mt = Ie;
        Ie = Be;
        try {
          return Ee();
        } finally {
          Ie = mt;
        }
      }
      function ht(Ee) {
        var Be = Ie;
        return function() {
          var mt = Ie;
          Ie = Be;
          try {
            return Ee.apply(this, arguments);
          } finally {
            Ie = mt;
          }
        };
      }
      function dt(Ee, Be, mt) {
        var Yt = o.unstable_now(), rn;
        if (typeof mt == "object" && mt !== null) {
          var vn = mt.delay;
          typeof vn == "number" && vn > 0 ? rn = Yt + vn : rn = Yt;
        } else
          rn = Yt;
        var un;
        switch (Ee) {
          case b:
            un = ve;
            break;
          case k:
            un = J;
            break;
          case U:
            un = ye;
            break;
          case O:
            un = ge;
            break;
          case _:
          default:
            un = Ce;
            break;
        }
        var tr = rn + un, an = {
          id: wt++,
          callback: Be,
          priorityLevel: Ee,
          startTime: rn,
          expirationTime: tr,
          sortIndex: -1
        };
        return rn > Yt ? (an.sortIndex = rn, p(Ne, an), y(je) === null && an === y(Ne) && (Ut ? gi() : Ut = !0, wr(j, rn - Yt))) : (an.sortIndex = tr, p(je, an), !Lt && !Ot && (Lt = !0, Pn(re))), an;
      }
      function vt() {
      }
      function St() {
        !Lt && !Ot && (Lt = !0, Pn(re));
      }
      function Gt() {
        return y(je);
      }
      function Nn(Ee) {
        Ee.callback = null;
      }
      function Ar() {
        return Ie;
      }
      var xn = !1, sr = null, Wn = -1, $n = c, qr = -1;
      function Ea() {
        var Ee = o.unstable_now() - qr;
        return !(Ee < $n);
      }
      function yi() {
      }
      function er(Ee) {
        if (Ee < 0 || Ee > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Ee > 0 ? $n = Math.floor(1e3 / Ee) : $n = c;
      }
      var Rn = function() {
        if (sr !== null) {
          var Ee = o.unstable_now();
          qr = Ee;
          var Be = !0, mt = !0;
          try {
            mt = sr(Be, Ee);
          } finally {
            mt ? Gn() : (xn = !1, sr = null);
          }
        } else
          xn = !1;
      }, Gn;
      if (typeof ze == "function")
        Gn = function() {
          ze(Rn);
        };
      else if (typeof MessageChannel < "u") {
        var Rr = new MessageChannel(), ea = Rr.port2;
        Rr.port1.onmessage = Rn, Gn = function() {
          ea.postMessage(null);
        };
      } else
        Gn = function() {
          xe(Rn, 0);
        };
      function Pn(Ee) {
        sr = Ee, xn || (xn = !0, Gn());
      }
      function wr(Ee, Be) {
        Wn = xe(function() {
          Ee(o.unstable_now());
        }, Be);
      }
      function gi() {
        de(Wn), Wn = -1;
      }
      var ta = yi, Ca = null;
      o.unstable_IdlePriority = U, o.unstable_ImmediatePriority = b, o.unstable_LowPriority = O, o.unstable_NormalPriority = _, o.unstable_Profiling = Ca, o.unstable_UserBlockingPriority = k, o.unstable_cancelCallback = Nn, o.unstable_continueExecution = St, o.unstable_forceFrameRate = er, o.unstable_getCurrentPriorityLevel = Ar, o.unstable_getFirstCallbackNode = Gt, o.unstable_next = gt, o.unstable_pauseExecution = vt, o.unstable_requestPaint = ta, o.unstable_runWithPriority = Je, o.unstable_scheduleCallback = dt, o.unstable_shouldYield = Ea, o.unstable_wrapCallback = ht, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(FE)), FE;
}
var zw;
function l1() {
  return zw || (zw = 1, process.env.NODE_ENV === "production" ? Xy.exports = kL() : Xy.exports = ML()), Xy.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fw;
function AL() {
  if (Fw) return qi;
  Fw = 1;
  var o = Ge, l = l1();
  function c(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, s = 1; s < arguments.length; s++) r += "&args[]=" + encodeURIComponent(arguments[s]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var p = /* @__PURE__ */ new Set(), y = {};
  function T(n, r) {
    v(n, r), v(n + "Capture", r);
  }
  function v(n, r) {
    for (y[n] = r, n = 0; n < r.length; n++) p.add(r[n]);
  }
  var E = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), R = Object.prototype.hasOwnProperty, b = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, k = {}, _ = {};
  function O(n) {
    return R.call(_, n) ? !0 : R.call(k, n) ? !1 : b.test(n) ? _[n] = !0 : (k[n] = !0, !1);
  }
  function U(n, r, s, f) {
    if (s !== null && s.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return f ? !1 : s !== null ? !s.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function H(n, r, s, f) {
    if (r === null || typeof r > "u" || U(n, r, s, f)) return !0;
    if (f) return !1;
    if (s !== null) switch (s.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function X(n, r, s, f, h, g, w) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = f, this.attributeNamespace = h, this.mustUseProperty = s, this.propertyName = n, this.type = r, this.sanitizeURL = g, this.removeEmptyString = w;
  }
  var Z = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Z[n] = new X(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Z[r] = new X(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Z[n] = new X(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Z[n] = new X(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Z[n] = new X(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Z[n] = new X(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Z[n] = new X(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Z[n] = new X(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Z[n] = new X(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var ne = /[\-:]([a-z])/g;
  function ae(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      ne,
      ae
    );
    Z[r] = new X(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(ne, ae);
    Z[r] = new X(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(ne, ae);
    Z[r] = new X(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Z[n] = new X(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Z.xlinkHref = new X("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Z[n] = new X(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function oe(n, r, s, f) {
    var h = Z.hasOwnProperty(r) ? Z[r] : null;
    (h !== null ? h.type !== 0 : f || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (H(r, s, h, f) && (s = null), f || h === null ? O(r) && (s === null ? n.removeAttribute(r) : n.setAttribute(r, "" + s)) : h.mustUseProperty ? n[h.propertyName] = s === null ? h.type === 3 ? !1 : "" : s : (r = h.attributeName, f = h.attributeNamespace, s === null ? n.removeAttribute(r) : (h = h.type, s = h === 3 || h === 4 && s === !0 ? "" : "" + s, f ? n.setAttributeNS(f, r, s) : n.setAttribute(r, s))));
  }
  var ve = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, J = Symbol.for("react.element"), Ce = Symbol.for("react.portal"), ge = Symbol.for("react.fragment"), ye = Symbol.for("react.strict_mode"), je = Symbol.for("react.profiler"), Ne = Symbol.for("react.provider"), wt = Symbol.for("react.context"), Tt = Symbol.for("react.forward_ref"), Ie = Symbol.for("react.suspense"), Ot = Symbol.for("react.suspense_list"), Lt = Symbol.for("react.memo"), Ut = Symbol.for("react.lazy"), xe = Symbol.for("react.offscreen"), de = Symbol.iterator;
  function ze(n) {
    return n === null || typeof n != "object" ? null : (n = de && n[de] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var Se = Object.assign, j;
  function re(n) {
    if (j === void 0) try {
      throw Error();
    } catch (s) {
      var r = s.stack.trim().match(/\n( *(at )?)/);
      j = r && r[1] || "";
    }
    return `
` + j + n;
  }
  var tt = !1;
  function Je(n, r) {
    if (!n || tt) return "";
    tt = !0;
    var s = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (K) {
          var f = K;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (K) {
          f = K;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (K) {
          f = K;
        }
        n();
      }
    } catch (K) {
      if (K && f && typeof K.stack == "string") {
        for (var h = K.stack.split(`
`), g = f.stack.split(`
`), w = h.length - 1, A = g.length - 1; 1 <= w && 0 <= A && h[w] !== g[A]; ) A--;
        for (; 1 <= w && 0 <= A; w--, A--) if (h[w] !== g[A]) {
          if (w !== 1 || A !== 1)
            do
              if (w--, A--, 0 > A || h[w] !== g[A]) {
                var P = `
` + h[w].replace(" at new ", " at ");
                return n.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", n.displayName)), P;
              }
            while (1 <= w && 0 <= A);
          break;
        }
      }
    } finally {
      tt = !1, Error.prepareStackTrace = s;
    }
    return (n = n ? n.displayName || n.name : "") ? re(n) : "";
  }
  function gt(n) {
    switch (n.tag) {
      case 5:
        return re(n.type);
      case 16:
        return re("Lazy");
      case 13:
        return re("Suspense");
      case 19:
        return re("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Je(n.type, !1), n;
      case 11:
        return n = Je(n.type.render, !1), n;
      case 1:
        return n = Je(n.type, !0), n;
      default:
        return "";
    }
  }
  function ht(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case ge:
        return "Fragment";
      case Ce:
        return "Portal";
      case je:
        return "Profiler";
      case ye:
        return "StrictMode";
      case Ie:
        return "Suspense";
      case Ot:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case wt:
        return (n.displayName || "Context") + ".Consumer";
      case Ne:
        return (n._context.displayName || "Context") + ".Provider";
      case Tt:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Lt:
        return r = n.displayName || null, r !== null ? r : ht(n.type) || "Memo";
      case Ut:
        r = n._payload, n = n._init;
        try {
          return ht(n(r));
        } catch {
        }
    }
    return null;
  }
  function dt(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ht(r);
      case 8:
        return r === ye ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function vt(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function St(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Gt(n) {
    var r = St(n) ? "checked" : "value", s = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), f = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
      var h = s.get, g = s.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return h.call(this);
      }, set: function(w) {
        f = "" + w, g.call(this, w);
      } }), Object.defineProperty(n, r, { enumerable: s.enumerable }), { getValue: function() {
        return f;
      }, setValue: function(w) {
        f = "" + w;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Nn(n) {
    n._valueTracker || (n._valueTracker = Gt(n));
  }
  function Ar(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var s = r.getValue(), f = "";
    return n && (f = St(n) ? n.checked ? "true" : "false" : n.value), n = f, n !== s ? (r.setValue(n), !0) : !1;
  }
  function xn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function sr(n, r) {
    var s = r.checked;
    return Se({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: s ?? n._wrapperState.initialChecked });
  }
  function Wn(n, r) {
    var s = r.defaultValue == null ? "" : r.defaultValue, f = r.checked != null ? r.checked : r.defaultChecked;
    s = vt(r.value != null ? r.value : s), n._wrapperState = { initialChecked: f, initialValue: s, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function $n(n, r) {
    r = r.checked, r != null && oe(n, "checked", r, !1);
  }
  function qr(n, r) {
    $n(n, r);
    var s = vt(r.value), f = r.type;
    if (s != null) f === "number" ? (s === 0 && n.value === "" || n.value != s) && (n.value = "" + s) : n.value !== "" + s && (n.value = "" + s);
    else if (f === "submit" || f === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? yi(n, r.type, s) : r.hasOwnProperty("defaultValue") && yi(n, r.type, vt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Ea(n, r, s) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var f = r.type;
      if (!(f !== "submit" && f !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, s || r === n.value || (n.value = r), n.defaultValue = r;
    }
    s = n.name, s !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, s !== "" && (n.name = s);
  }
  function yi(n, r, s) {
    (r !== "number" || xn(n.ownerDocument) !== n) && (s == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + s && (n.defaultValue = "" + s));
  }
  var er = Array.isArray;
  function Rn(n, r, s, f) {
    if (n = n.options, r) {
      r = {};
      for (var h = 0; h < s.length; h++) r["$" + s[h]] = !0;
      for (s = 0; s < n.length; s++) h = r.hasOwnProperty("$" + n[s].value), n[s].selected !== h && (n[s].selected = h), h && f && (n[s].defaultSelected = !0);
    } else {
      for (s = "" + vt(s), r = null, h = 0; h < n.length; h++) {
        if (n[h].value === s) {
          n[h].selected = !0, f && (n[h].defaultSelected = !0);
          return;
        }
        r !== null || n[h].disabled || (r = n[h]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Gn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(c(91));
    return Se({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Rr(n, r) {
    var s = r.value;
    if (s == null) {
      if (s = r.children, r = r.defaultValue, s != null) {
        if (r != null) throw Error(c(92));
        if (er(s)) {
          if (1 < s.length) throw Error(c(93));
          s = s[0];
        }
        r = s;
      }
      r == null && (r = ""), s = r;
    }
    n._wrapperState = { initialValue: vt(s) };
  }
  function ea(n, r) {
    var s = vt(r.value), f = vt(r.defaultValue);
    s != null && (s = "" + s, s !== n.value && (n.value = s), r.defaultValue == null && n.defaultValue !== s && (n.defaultValue = s)), f != null && (n.defaultValue = "" + f);
  }
  function Pn(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function wr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function gi(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? wr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var ta, Ca = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, s, f, h) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, s, f, h);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (ta = ta || document.createElement("div"), ta.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = ta.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function Ee(n, r) {
    if (r) {
      var s = n.firstChild;
      if (s && s === n.lastChild && s.nodeType === 3) {
        s.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Be = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, mt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Be).forEach(function(n) {
    mt.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Be[r] = Be[n];
    });
  });
  function Yt(n, r, s) {
    return r == null || typeof r == "boolean" || r === "" ? "" : s || typeof r != "number" || r === 0 || Be.hasOwnProperty(n) && Be[n] ? ("" + r).trim() : r + "px";
  }
  function rn(n, r) {
    n = n.style;
    for (var s in r) if (r.hasOwnProperty(s)) {
      var f = s.indexOf("--") === 0, h = Yt(s, r[s], f);
      s === "float" && (s = "cssFloat"), f ? n.setProperty(s, h) : n[s] = h;
    }
  }
  var vn = Se({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function un(n, r) {
    if (r) {
      if (vn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(c(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(c(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(c(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(c(62));
    }
  }
  function tr(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var an = null;
  function Kt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Qt = null, Si = null, br = null;
  function Oi(n) {
    if (n = We(n)) {
      if (typeof Qt != "function") throw Error(c(280));
      var r = n.stateNode;
      r && (r = yn(r), Qt(n.stateNode, n.type, r));
    }
  }
  function qa(n) {
    Si ? br ? br.push(n) : br = [n] : Si = n;
  }
  function ml() {
    if (Si) {
      var n = Si, r = br;
      if (br = Si = null, Oi(n), r) for (n = 0; n < r.length; n++) Oi(r[n]);
    }
  }
  function yl(n, r) {
    return n(r);
  }
  function Do() {
  }
  var _o = !1;
  function gl(n, r, s) {
    if (_o) return n(r, s);
    _o = !0;
    try {
      return yl(n, r, s);
    } finally {
      _o = !1, (Si !== null || br !== null) && (Do(), ml());
    }
  }
  function Or(n, r) {
    var s = n.stateNode;
    if (s === null) return null;
    var f = yn(s);
    if (f === null) return null;
    s = f[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (f = !f.disabled) || (n = n.type, f = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !f;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (s && typeof s != "function") throw Error(c(231, r, typeof s));
    return s;
  }
  var Lr = !1;
  if (E) try {
    var ur = {};
    Object.defineProperty(ur, "passive", { get: function() {
      Lr = !0;
    } }), window.addEventListener("test", ur, ur), window.removeEventListener("test", ur, ur);
  } catch {
    Lr = !1;
  }
  function Ta(n, r, s, f, h, g, w, A, P) {
    var K = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(s, K);
    } catch (ce) {
      this.onError(ce);
    }
  }
  var na = !1, xa = null, Ra = !1, N = null, le = { onError: function(n) {
    na = !0, xa = n;
  } };
  function we(n, r, s, f, h, g, w, A, P) {
    na = !1, xa = null, Ta.apply(le, arguments);
  }
  function Le(n, r, s, f, h, g, w, A, P) {
    if (we.apply(this, arguments), na) {
      if (na) {
        var K = xa;
        na = !1, xa = null;
      } else throw Error(c(198));
      Ra || (Ra = !0, N = K);
    }
  }
  function ut(n) {
    var r = n, s = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (s = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? s : null;
  }
  function ot(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function xt(n) {
    if (ut(n) !== n) throw Error(c(188));
  }
  function Et(n) {
    var r = n.alternate;
    if (!r) {
      if (r = ut(n), r === null) throw Error(c(188));
      return r !== n ? null : n;
    }
    for (var s = n, f = r; ; ) {
      var h = s.return;
      if (h === null) break;
      var g = h.alternate;
      if (g === null) {
        if (f = h.return, f !== null) {
          s = f;
          continue;
        }
        break;
      }
      if (h.child === g.child) {
        for (g = h.child; g; ) {
          if (g === s) return xt(h), n;
          if (g === f) return xt(h), r;
          g = g.sibling;
        }
        throw Error(c(188));
      }
      if (s.return !== f.return) s = h, f = g;
      else {
        for (var w = !1, A = h.child; A; ) {
          if (A === s) {
            w = !0, s = h, f = g;
            break;
          }
          if (A === f) {
            w = !0, f = h, s = g;
            break;
          }
          A = A.sibling;
        }
        if (!w) {
          for (A = g.child; A; ) {
            if (A === s) {
              w = !0, s = g, f = h;
              break;
            }
            if (A === f) {
              w = !0, f = g, s = h;
              break;
            }
            A = A.sibling;
          }
          if (!w) throw Error(c(189));
        }
      }
      if (s.alternate !== f) throw Error(c(190));
    }
    if (s.tag !== 3) throw Error(c(188));
    return s.stateNode.current === s ? n : r;
  }
  function wn(n) {
    return n = Et(n), n !== null ? on(n) : null;
  }
  function on(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = on(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var cn = l.unstable_scheduleCallback, cr = l.unstable_cancelCallback, ra = l.unstable_shouldYield, ia = l.unstable_requestPaint, ct = l.unstable_now, pt = l.unstable_getCurrentPriorityLevel, aa = l.unstable_ImmediatePriority, Sl = l.unstable_UserBlockingPriority, El = l.unstable_NormalPriority, ko = l.unstable_LowPriority, ds = l.unstable_IdlePriority, Mo = null, Zr = null;
  function hu(n) {
    if (Zr && typeof Zr.onCommitFiberRoot == "function") try {
      Zr.onCommitFiberRoot(Mo, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Nr = Math.clz32 ? Math.clz32 : ps, Pc = Math.log, Uc = Math.LN2;
  function ps(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Pc(n) / Uc | 0) | 0;
  }
  var Ao = 64, Ei = 4194304;
  function oa(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function la(n, r) {
    var s = n.pendingLanes;
    if (s === 0) return 0;
    var f = 0, h = n.suspendedLanes, g = n.pingedLanes, w = s & 268435455;
    if (w !== 0) {
      var A = w & ~h;
      A !== 0 ? f = oa(A) : (g &= w, g !== 0 && (f = oa(g)));
    } else w = s & ~h, w !== 0 ? f = oa(w) : g !== 0 && (f = oa(g));
    if (f === 0) return 0;
    if (r !== 0 && r !== f && !(r & h) && (h = f & -f, g = r & -r, h >= g || h === 16 && (g & 4194240) !== 0)) return r;
    if (f & 4 && (f |= s & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= f; 0 < r; ) s = 31 - Nr(r), h = 1 << s, f |= n[s], r &= ~h;
    return f;
  }
  function hs(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Cl(n, r) {
    for (var s = n.suspendedLanes, f = n.pingedLanes, h = n.expirationTimes, g = n.pendingLanes; 0 < g; ) {
      var w = 31 - Nr(g), A = 1 << w, P = h[w];
      P === -1 ? (!(A & s) || A & f) && (h[w] = hs(A, r)) : P <= r && (n.expiredLanes |= A), g &= ~A;
    }
  }
  function Oo(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function vs() {
    var n = Ao;
    return Ao <<= 1, !(Ao & 4194240) && (Ao = 64), n;
  }
  function ms(n) {
    for (var r = [], s = 0; 31 > s; s++) r.push(n);
    return r;
  }
  function Za(n, r, s) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Nr(r), n[r] = s;
  }
  function Ld(n, r) {
    var s = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var f = n.eventTimes;
    for (n = n.expirationTimes; 0 < s; ) {
      var h = 31 - Nr(s), g = 1 << h;
      r[h] = 0, f[h] = -1, n[h] = -1, s &= ~g;
    }
  }
  function Ja(n, r) {
    var s = n.entangledLanes |= r;
    for (n = n.entanglements; s; ) {
      var f = 31 - Nr(s), h = 1 << f;
      h & r | n[f] & r && (n[f] |= r), s &= ~h;
    }
  }
  var zt = 0;
  function ys(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Nt, vu, wa, at, gs, fr = !1, ba = [], Pr = null, Da = null, fn = null, Xt = /* @__PURE__ */ new Map(), Lo = /* @__PURE__ */ new Map(), Kn = [], Ur = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Li(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Pr = null;
        break;
      case "dragenter":
      case "dragleave":
        Da = null;
        break;
      case "mouseover":
      case "mouseout":
        fn = null;
        break;
      case "pointerover":
      case "pointerout":
        Xt.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Lo.delete(r.pointerId);
    }
  }
  function Tl(n, r, s, f, h, g) {
    return n === null || n.nativeEvent !== g ? (n = { blockedOn: r, domEventName: s, eventSystemFlags: f, nativeEvent: g, targetContainers: [h] }, r !== null && (r = We(r), r !== null && vu(r)), n) : (n.eventSystemFlags |= f, r = n.targetContainers, h !== null && r.indexOf(h) === -1 && r.push(h), n);
  }
  function mu(n, r, s, f, h) {
    switch (r) {
      case "focusin":
        return Pr = Tl(Pr, n, r, s, f, h), !0;
      case "dragenter":
        return Da = Tl(Da, n, r, s, f, h), !0;
      case "mouseover":
        return fn = Tl(fn, n, r, s, f, h), !0;
      case "pointerover":
        var g = h.pointerId;
        return Xt.set(g, Tl(Xt.get(g) || null, n, r, s, f, h)), !0;
      case "gotpointercapture":
        return g = h.pointerId, Lo.set(g, Tl(Lo.get(g) || null, n, r, s, f, h)), !0;
    }
    return !1;
  }
  function yu(n) {
    var r = Al(n.target);
    if (r !== null) {
      var s = ut(r);
      if (s !== null) {
        if (r = s.tag, r === 13) {
          if (r = ot(s), r !== null) {
            n.blockedOn = r, gs(n.priority, function() {
              wa(s);
            });
            return;
          }
        } else if (r === 3 && s.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function No(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var s = Cs(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (s === null) {
        s = n.nativeEvent;
        var f = new s.constructor(s.type, s);
        an = f, s.target.dispatchEvent(f), an = null;
      } else return r = We(s), r !== null && vu(r), n.blockedOn = s, !1;
      r.shift();
    }
    return !0;
  }
  function xl(n, r, s) {
    No(n) && s.delete(r);
  }
  function Nd() {
    fr = !1, Pr !== null && No(Pr) && (Pr = null), Da !== null && No(Da) && (Da = null), fn !== null && No(fn) && (fn = null), Xt.forEach(xl), Lo.forEach(xl);
  }
  function Ni(n, r) {
    n.blockedOn === r && (n.blockedOn = null, fr || (fr = !0, l.unstable_scheduleCallback(l.unstable_NormalPriority, Nd)));
  }
  function sa(n) {
    function r(h) {
      return Ni(h, n);
    }
    if (0 < ba.length) {
      Ni(ba[0], n);
      for (var s = 1; s < ba.length; s++) {
        var f = ba[s];
        f.blockedOn === n && (f.blockedOn = null);
      }
    }
    for (Pr !== null && Ni(Pr, n), Da !== null && Ni(Da, n), fn !== null && Ni(fn, n), Xt.forEach(r), Lo.forEach(r), s = 0; s < Kn.length; s++) f = Kn[s], f.blockedOn === n && (f.blockedOn = null);
    for (; 0 < Kn.length && (s = Kn[0], s.blockedOn === null); ) yu(s), s.blockedOn === null && Kn.shift();
  }
  var _a = ve.ReactCurrentBatchConfig, Pi = !0;
  function Ss(n, r, s, f) {
    var h = zt, g = _a.transition;
    _a.transition = null;
    try {
      zt = 1, Po(n, r, s, f);
    } finally {
      zt = h, _a.transition = g;
    }
  }
  function Es(n, r, s, f) {
    var h = zt, g = _a.transition;
    _a.transition = null;
    try {
      zt = 4, Po(n, r, s, f);
    } finally {
      zt = h, _a.transition = g;
    }
  }
  function Po(n, r, s, f) {
    if (Pi) {
      var h = Cs(n, r, s, f);
      if (h === null) Kc(n, r, f, Rl, s), Li(n, f);
      else if (mu(h, n, r, s, f)) f.stopPropagation();
      else if (Li(n, f), r & 4 && -1 < Ur.indexOf(n)) {
        for (; h !== null; ) {
          var g = We(h);
          if (g !== null && Nt(g), g = Cs(n, r, s, f), g === null && Kc(n, r, f, Rl, s), g === h) break;
          h = g;
        }
        h !== null && f.stopPropagation();
      } else Kc(n, r, f, null, s);
    }
  }
  var Rl = null;
  function Cs(n, r, s, f) {
    if (Rl = null, n = Kt(f), n = Al(n), n !== null) if (r = ut(n), r === null) n = null;
    else if (s = r.tag, s === 13) {
      if (n = ot(r), n !== null) return n;
      n = null;
    } else if (s === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return Rl = n, null;
  }
  function Ts(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (pt()) {
          case aa:
            return 1;
          case Sl:
            return 4;
          case El:
          case ko:
            return 16;
          case ds:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ua = null, x = null, L = null;
  function G() {
    if (L) return L;
    var n, r = x, s = r.length, f, h = "value" in ua ? ua.value : ua.textContent, g = h.length;
    for (n = 0; n < s && r[n] === h[n]; n++) ;
    var w = s - n;
    for (f = 1; f <= w && r[s - f] === h[g - f]; f++) ;
    return L = h.slice(n, 1 < f ? 1 - f : void 0);
  }
  function q(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function me() {
    return !0;
  }
  function Ke() {
    return !1;
  }
  function Re(n) {
    function r(s, f, h, g, w) {
      this._reactName = s, this._targetInst = h, this.type = f, this.nativeEvent = g, this.target = w, this.currentTarget = null;
      for (var A in n) n.hasOwnProperty(A) && (s = n[A], this[A] = s ? s(g) : g[A]);
      return this.isDefaultPrevented = (g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === !1) ? me : Ke, this.isPropagationStopped = Ke, this;
    }
    return Se(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var s = this.nativeEvent;
      s && (s.preventDefault ? s.preventDefault() : typeof s.returnValue != "unknown" && (s.returnValue = !1), this.isDefaultPrevented = me);
    }, stopPropagation: function() {
      var s = this.nativeEvent;
      s && (s.stopPropagation ? s.stopPropagation() : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0), this.isPropagationStopped = me);
    }, persist: function() {
    }, isPersistent: me }), r;
  }
  var qe = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Rt = Re(qe), Pt = Se({}, qe, { view: 0, detail: 0 }), ln = Re(Pt), qt, yt, Zt, mn = Se({}, Pt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Fd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Zt && (Zt && n.type === "mousemove" ? (qt = n.screenX - Zt.screenX, yt = n.screenY - Zt.screenY) : yt = qt = 0, Zt = n), qt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : yt;
  } }), Uo = Re(mn), gu = Se({}, mn, { dataTransfer: 0 }), eo = Re(gu), Su = Se({}, Pt, { relatedTarget: 0 }), wl = Re(Su), Pd = Se({}, qe, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Vc = Re(Pd), Ud = Se({}, qe, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), av = Re(Ud), Vd = Se({}, qe, { data: 0 }), zd = Re(Vd), ov = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, lv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Tg = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function to(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Tg[n]) ? !!r[n] : !1;
  }
  function Fd() {
    return to;
  }
  var jd = Se({}, Pt, { key: function(n) {
    if (n.key) {
      var r = ov[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = q(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? lv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Fd, charCode: function(n) {
    return n.type === "keypress" ? q(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? q(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Bd = Re(jd), Hd = Se({}, mn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), sv = Re(Hd), zc = Se({}, Pt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Fd }), uv = Re(zc), Jr = Se({}, qe, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), no = Re(Jr), Un = Se({}, mn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ro = Re(Un), Id = [9, 13, 27, 32], xs = E && "CompositionEvent" in window, Eu = null;
  E && "documentMode" in document && (Eu = document.documentMode);
  var Cu = E && "TextEvent" in window && !Eu, cv = E && (!xs || Eu && 8 < Eu && 11 >= Eu), fv = " ", Fc = !1;
  function dv(n, r) {
    switch (n) {
      case "keyup":
        return Id.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function pv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Rs = !1;
  function hv(n, r) {
    switch (n) {
      case "compositionend":
        return pv(r);
      case "keypress":
        return r.which !== 32 ? null : (Fc = !0, fv);
      case "textInput":
        return n = r.data, n === fv && Fc ? null : n;
      default:
        return null;
    }
  }
  function xg(n, r) {
    if (Rs) return n === "compositionend" || !xs && dv(n, r) ? (n = G(), L = x = ua = null, Rs = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return cv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Rg = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function vv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Rg[n.type] : r === "textarea";
  }
  function Yd(n, r, s, f) {
    qa(f), r = Du(r, "onChange"), 0 < r.length && (s = new Rt("onChange", "change", null, s, f), n.push({ event: s, listeners: r }));
  }
  var ka = null, bl = null;
  function mv(n) {
    kl(n, 0);
  }
  function Tu(n) {
    var r = fa(n);
    if (Ar(r)) return n;
  }
  function wg(n, r) {
    if (n === "change") return r;
  }
  var yv = !1;
  if (E) {
    var Wd;
    if (E) {
      var $d = "oninput" in document;
      if (!$d) {
        var gv = document.createElement("div");
        gv.setAttribute("oninput", "return;"), $d = typeof gv.oninput == "function";
      }
      Wd = $d;
    } else Wd = !1;
    yv = Wd && (!document.documentMode || 9 < document.documentMode);
  }
  function Sv() {
    ka && (ka.detachEvent("onpropertychange", Ev), bl = ka = null);
  }
  function Ev(n) {
    if (n.propertyName === "value" && Tu(bl)) {
      var r = [];
      Yd(r, bl, n, Kt(n)), gl(mv, r);
    }
  }
  function bg(n, r, s) {
    n === "focusin" ? (Sv(), ka = r, bl = s, ka.attachEvent("onpropertychange", Ev)) : n === "focusout" && Sv();
  }
  function Cv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Tu(bl);
  }
  function Dg(n, r) {
    if (n === "click") return Tu(r);
  }
  function Tv(n, r) {
    if (n === "input" || n === "change") return Tu(r);
  }
  function _g(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ca = typeof Object.is == "function" ? Object.is : _g;
  function xu(n, r) {
    if (ca(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var s = Object.keys(n), f = Object.keys(r);
    if (s.length !== f.length) return !1;
    for (f = 0; f < s.length; f++) {
      var h = s[f];
      if (!R.call(r, h) || !ca(n[h], r[h])) return !1;
    }
    return !0;
  }
  function xv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function jc(n, r) {
    var s = xv(n);
    n = 0;
    for (var f; s; ) {
      if (s.nodeType === 3) {
        if (f = n + s.textContent.length, n <= r && f >= r) return { node: s, offset: r - n };
        n = f;
      }
      e: {
        for (; s; ) {
          if (s.nextSibling) {
            s = s.nextSibling;
            break e;
          }
          s = s.parentNode;
        }
        s = void 0;
      }
      s = xv(s);
    }
  }
  function Vo(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Vo(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Ru() {
    for (var n = window, r = xn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var s = typeof r.contentWindow.location.href == "string";
      } catch {
        s = !1;
      }
      if (s) n = r.contentWindow;
      else break;
      r = xn(n.document);
    }
    return r;
  }
  function Bc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function ws(n) {
    var r = Ru(), s = n.focusedElem, f = n.selectionRange;
    if (r !== s && s && s.ownerDocument && Vo(s.ownerDocument.documentElement, s)) {
      if (f !== null && Bc(s)) {
        if (r = f.start, n = f.end, n === void 0 && (n = r), "selectionStart" in s) s.selectionStart = r, s.selectionEnd = Math.min(n, s.value.length);
        else if (n = (r = s.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var h = s.textContent.length, g = Math.min(f.start, h);
          f = f.end === void 0 ? g : Math.min(f.end, h), !n.extend && g > f && (h = f, f = g, g = h), h = jc(s, g);
          var w = jc(
            s,
            f
          );
          h && w && (n.rangeCount !== 1 || n.anchorNode !== h.node || n.anchorOffset !== h.offset || n.focusNode !== w.node || n.focusOffset !== w.offset) && (r = r.createRange(), r.setStart(h.node, h.offset), n.removeAllRanges(), g > f ? (n.addRange(r), n.extend(w.node, w.offset)) : (r.setEnd(w.node, w.offset), n.addRange(r)));
        }
      }
      for (r = [], n = s; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof s.focus == "function" && s.focus(), s = 0; s < r.length; s++) n = r[s], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var kg = E && "documentMode" in document && 11 >= document.documentMode, bs = null, Gd = null, wu = null, Kd = !1;
  function Qd(n, r, s) {
    var f = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    Kd || bs == null || bs !== xn(f) || (f = bs, "selectionStart" in f && Bc(f) ? f = { start: f.selectionStart, end: f.selectionEnd } : (f = (f.ownerDocument && f.ownerDocument.defaultView || window).getSelection(), f = { anchorNode: f.anchorNode, anchorOffset: f.anchorOffset, focusNode: f.focusNode, focusOffset: f.focusOffset }), wu && xu(wu, f) || (wu = f, f = Du(Gd, "onSelect"), 0 < f.length && (r = new Rt("onSelect", "select", null, r, s), n.push({ event: r, listeners: f }), r.target = bs)));
  }
  function Hc(n, r) {
    var s = {};
    return s[n.toLowerCase()] = r.toLowerCase(), s["Webkit" + n] = "webkit" + r, s["Moz" + n] = "moz" + r, s;
  }
  var Dl = { animationend: Hc("Animation", "AnimationEnd"), animationiteration: Hc("Animation", "AnimationIteration"), animationstart: Hc("Animation", "AnimationStart"), transitionend: Hc("Transition", "TransitionEnd") }, dr = {}, Xd = {};
  E && (Xd = document.createElement("div").style, "AnimationEvent" in window || (delete Dl.animationend.animation, delete Dl.animationiteration.animation, delete Dl.animationstart.animation), "TransitionEvent" in window || delete Dl.transitionend.transition);
  function Ic(n) {
    if (dr[n]) return dr[n];
    if (!Dl[n]) return n;
    var r = Dl[n], s;
    for (s in r) if (r.hasOwnProperty(s) && s in Xd) return dr[n] = r[s];
    return n;
  }
  var Rv = Ic("animationend"), wv = Ic("animationiteration"), bv = Ic("animationstart"), Dv = Ic("transitionend"), qd = /* @__PURE__ */ new Map(), Yc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ui(n, r) {
    qd.set(n, r), T(r, [n]);
  }
  for (var Zd = 0; Zd < Yc.length; Zd++) {
    var _l = Yc[Zd], Mg = _l.toLowerCase(), Ag = _l[0].toUpperCase() + _l.slice(1);
    Ui(Mg, "on" + Ag);
  }
  Ui(Rv, "onAnimationEnd"), Ui(wv, "onAnimationIteration"), Ui(bv, "onAnimationStart"), Ui("dblclick", "onDoubleClick"), Ui("focusin", "onFocus"), Ui("focusout", "onBlur"), Ui(Dv, "onTransitionEnd"), v("onMouseEnter", ["mouseout", "mouseover"]), v("onMouseLeave", ["mouseout", "mouseover"]), v("onPointerEnter", ["pointerout", "pointerover"]), v("onPointerLeave", ["pointerout", "pointerover"]), T("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), T("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), T("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), T("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), T("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), T("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var bu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Jd = new Set("cancel close invalid load scroll toggle".split(" ").concat(bu));
  function Wc(n, r, s) {
    var f = n.type || "unknown-event";
    n.currentTarget = s, Le(f, r, void 0, n), n.currentTarget = null;
  }
  function kl(n, r) {
    r = (r & 4) !== 0;
    for (var s = 0; s < n.length; s++) {
      var f = n[s], h = f.event;
      f = f.listeners;
      e: {
        var g = void 0;
        if (r) for (var w = f.length - 1; 0 <= w; w--) {
          var A = f[w], P = A.instance, K = A.currentTarget;
          if (A = A.listener, P !== g && h.isPropagationStopped()) break e;
          Wc(h, A, K), g = P;
        }
        else for (w = 0; w < f.length; w++) {
          if (A = f[w], P = A.instance, K = A.currentTarget, A = A.listener, P !== g && h.isPropagationStopped()) break e;
          Wc(h, A, K), g = P;
        }
      }
    }
    if (Ra) throw n = N, Ra = !1, N = null, n;
  }
  function Wt(n, r) {
    var s = r[Mu];
    s === void 0 && (s = r[Mu] = /* @__PURE__ */ new Set());
    var f = n + "__bubble";
    s.has(f) || (_v(r, n, 2, !1), s.add(f));
  }
  function $c(n, r, s) {
    var f = 0;
    r && (f |= 4), _v(s, n, f, r);
  }
  var Gc = "_reactListening" + Math.random().toString(36).slice(2);
  function Ds(n) {
    if (!n[Gc]) {
      n[Gc] = !0, p.forEach(function(s) {
        s !== "selectionchange" && (Jd.has(s) || $c(s, !1, n), $c(s, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Gc] || (r[Gc] = !0, $c("selectionchange", !1, r));
    }
  }
  function _v(n, r, s, f) {
    switch (Ts(r)) {
      case 1:
        var h = Ss;
        break;
      case 4:
        h = Es;
        break;
      default:
        h = Po;
    }
    s = h.bind(null, r, s, n), h = void 0, !Lr || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (h = !0), f ? h !== void 0 ? n.addEventListener(r, s, { capture: !0, passive: h }) : n.addEventListener(r, s, !0) : h !== void 0 ? n.addEventListener(r, s, { passive: h }) : n.addEventListener(r, s, !1);
  }
  function Kc(n, r, s, f, h) {
    var g = f;
    if (!(r & 1) && !(r & 2) && f !== null) e: for (; ; ) {
      if (f === null) return;
      var w = f.tag;
      if (w === 3 || w === 4) {
        var A = f.stateNode.containerInfo;
        if (A === h || A.nodeType === 8 && A.parentNode === h) break;
        if (w === 4) for (w = f.return; w !== null; ) {
          var P = w.tag;
          if ((P === 3 || P === 4) && (P = w.stateNode.containerInfo, P === h || P.nodeType === 8 && P.parentNode === h)) return;
          w = w.return;
        }
        for (; A !== null; ) {
          if (w = Al(A), w === null) return;
          if (P = w.tag, P === 5 || P === 6) {
            f = g = w;
            continue e;
          }
          A = A.parentNode;
        }
      }
      f = f.return;
    }
    gl(function() {
      var K = g, ce = Kt(s), pe = [];
      e: {
        var ue = qd.get(n);
        if (ue !== void 0) {
          var ke = Rt, Pe = n;
          switch (n) {
            case "keypress":
              if (q(s) === 0) break e;
            case "keydown":
            case "keyup":
              ke = Bd;
              break;
            case "focusin":
              Pe = "focus", ke = wl;
              break;
            case "focusout":
              Pe = "blur", ke = wl;
              break;
            case "beforeblur":
            case "afterblur":
              ke = wl;
              break;
            case "click":
              if (s.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ke = Uo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ke = eo;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ke = uv;
              break;
            case Rv:
            case wv:
            case bv:
              ke = Vc;
              break;
            case Dv:
              ke = no;
              break;
            case "scroll":
              ke = ln;
              break;
            case "wheel":
              ke = ro;
              break;
            case "copy":
            case "cut":
            case "paste":
              ke = av;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ke = sv;
          }
          var Fe = (r & 4) !== 0, Mn = !Fe && n === "scroll", B = Fe ? ue !== null ? ue + "Capture" : null : ue;
          Fe = [];
          for (var z = K, W; z !== null; ) {
            W = z;
            var fe = W.stateNode;
            if (W.tag === 5 && fe !== null && (W = fe, B !== null && (fe = Or(z, B), fe != null && Fe.push(_s(z, fe, W)))), Mn) break;
            z = z.return;
          }
          0 < Fe.length && (ue = new ke(ue, Pe, null, s, ce), pe.push({ event: ue, listeners: Fe }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ue = n === "mouseover" || n === "pointerover", ke = n === "mouseout" || n === "pointerout", ue && s !== an && (Pe = s.relatedTarget || s.fromElement) && (Al(Pe) || Pe[io])) break e;
          if ((ke || ue) && (ue = ce.window === ce ? ce : (ue = ce.ownerDocument) ? ue.defaultView || ue.parentWindow : window, ke ? (Pe = s.relatedTarget || s.toElement, ke = K, Pe = Pe ? Al(Pe) : null, Pe !== null && (Mn = ut(Pe), Pe !== Mn || Pe.tag !== 5 && Pe.tag !== 6) && (Pe = null)) : (ke = null, Pe = K), ke !== Pe)) {
            if (Fe = Uo, fe = "onMouseLeave", B = "onMouseEnter", z = "mouse", (n === "pointerout" || n === "pointerover") && (Fe = sv, fe = "onPointerLeave", B = "onPointerEnter", z = "pointer"), Mn = ke == null ? ue : fa(ke), W = Pe == null ? ue : fa(Pe), ue = new Fe(fe, z + "leave", ke, s, ce), ue.target = Mn, ue.relatedTarget = W, fe = null, Al(ce) === K && (Fe = new Fe(B, z + "enter", Pe, s, ce), Fe.target = W, Fe.relatedTarget = Mn, fe = Fe), Mn = fe, ke && Pe) t: {
              for (Fe = ke, B = Pe, z = 0, W = Fe; W; W = zo(W)) z++;
              for (W = 0, fe = B; fe; fe = zo(fe)) W++;
              for (; 0 < z - W; ) Fe = zo(Fe), z--;
              for (; 0 < W - z; ) B = zo(B), W--;
              for (; z--; ) {
                if (Fe === B || B !== null && Fe === B.alternate) break t;
                Fe = zo(Fe), B = zo(B);
              }
              Fe = null;
            }
            else Fe = null;
            ke !== null && kv(pe, ue, ke, Fe, !1), Pe !== null && Mn !== null && kv(pe, Mn, Pe, Fe, !0);
          }
        }
        e: {
          if (ue = K ? fa(K) : window, ke = ue.nodeName && ue.nodeName.toLowerCase(), ke === "select" || ke === "input" && ue.type === "file") var Ue = wg;
          else if (vv(ue)) if (yv) Ue = Tv;
          else {
            Ue = Cv;
            var Xe = bg;
          }
          else (ke = ue.nodeName) && ke.toLowerCase() === "input" && (ue.type === "checkbox" || ue.type === "radio") && (Ue = Dg);
          if (Ue && (Ue = Ue(n, K))) {
            Yd(pe, Ue, s, ce);
            break e;
          }
          Xe && Xe(n, ue, K), n === "focusout" && (Xe = ue._wrapperState) && Xe.controlled && ue.type === "number" && yi(ue, "number", ue.value);
        }
        switch (Xe = K ? fa(K) : window, n) {
          case "focusin":
            (vv(Xe) || Xe.contentEditable === "true") && (bs = Xe, Gd = K, wu = null);
            break;
          case "focusout":
            wu = Gd = bs = null;
            break;
          case "mousedown":
            Kd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Kd = !1, Qd(pe, s, ce);
            break;
          case "selectionchange":
            if (kg) break;
          case "keydown":
          case "keyup":
            Qd(pe, s, ce);
        }
        var Ze;
        if (xs) e: {
          switch (n) {
            case "compositionstart":
              var rt = "onCompositionStart";
              break e;
            case "compositionend":
              rt = "onCompositionEnd";
              break e;
            case "compositionupdate":
              rt = "onCompositionUpdate";
              break e;
          }
          rt = void 0;
        }
        else Rs ? dv(n, s) && (rt = "onCompositionEnd") : n === "keydown" && s.keyCode === 229 && (rt = "onCompositionStart");
        rt && (cv && s.locale !== "ko" && (Rs || rt !== "onCompositionStart" ? rt === "onCompositionEnd" && Rs && (Ze = G()) : (ua = ce, x = "value" in ua ? ua.value : ua.textContent, Rs = !0)), Xe = Du(K, rt), 0 < Xe.length && (rt = new zd(rt, n, null, s, ce), pe.push({ event: rt, listeners: Xe }), Ze ? rt.data = Ze : (Ze = pv(s), Ze !== null && (rt.data = Ze)))), (Ze = Cu ? hv(n, s) : xg(n, s)) && (K = Du(K, "onBeforeInput"), 0 < K.length && (ce = new zd("onBeforeInput", "beforeinput", null, s, ce), pe.push({ event: ce, listeners: K }), ce.data = Ze));
      }
      kl(pe, r);
    });
  }
  function _s(n, r, s) {
    return { instance: n, listener: r, currentTarget: s };
  }
  function Du(n, r) {
    for (var s = r + "Capture", f = []; n !== null; ) {
      var h = n, g = h.stateNode;
      h.tag === 5 && g !== null && (h = g, g = Or(n, s), g != null && f.unshift(_s(n, g, h)), g = Or(n, r), g != null && f.push(_s(n, g, h))), n = n.return;
    }
    return f;
  }
  function zo(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function kv(n, r, s, f, h) {
    for (var g = r._reactName, w = []; s !== null && s !== f; ) {
      var A = s, P = A.alternate, K = A.stateNode;
      if (P !== null && P === f) break;
      A.tag === 5 && K !== null && (A = K, h ? (P = Or(s, g), P != null && w.unshift(_s(s, P, A))) : h || (P = Or(s, g), P != null && w.push(_s(s, P, A)))), s = s.return;
    }
    w.length !== 0 && n.push({ event: r, listeners: w });
  }
  var Mv = /\r\n?/g, Og = /\u0000|\uFFFD/g;
  function Av(n) {
    return (typeof n == "string" ? n : "" + n).replace(Mv, `
`).replace(Og, "");
  }
  function Qc(n, r, s) {
    if (r = Av(r), Av(n) !== r && s) throw Error(c(425));
  }
  function Fo() {
  }
  var _u = null, Ml = null;
  function Xc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var qc = typeof setTimeout == "function" ? setTimeout : void 0, ep = typeof clearTimeout == "function" ? clearTimeout : void 0, Ov = typeof Promise == "function" ? Promise : void 0, ks = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ov < "u" ? function(n) {
    return Ov.resolve(null).then(n).catch(Zc);
  } : qc;
  function Zc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Ms(n, r) {
    var s = r, f = 0;
    do {
      var h = s.nextSibling;
      if (n.removeChild(s), h && h.nodeType === 8) if (s = h.data, s === "/$") {
        if (f === 0) {
          n.removeChild(h), sa(r);
          return;
        }
        f--;
      } else s !== "$" && s !== "$?" && s !== "$!" || f++;
      s = h;
    } while (s);
    sa(r);
  }
  function Ma(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Lv(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var s = n.data;
        if (s === "$" || s === "$!" || s === "$?") {
          if (r === 0) return n;
          r--;
        } else s === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var jo = Math.random().toString(36).slice(2), Aa = "__reactFiber$" + jo, ku = "__reactProps$" + jo, io = "__reactContainer$" + jo, Mu = "__reactEvents$" + jo, As = "__reactListeners$" + jo, Lg = "__reactHandles$" + jo;
  function Al(n) {
    var r = n[Aa];
    if (r) return r;
    for (var s = n.parentNode; s; ) {
      if (r = s[io] || s[Aa]) {
        if (s = r.alternate, r.child !== null || s !== null && s.child !== null) for (n = Lv(n); n !== null; ) {
          if (s = n[Aa]) return s;
          n = Lv(n);
        }
        return r;
      }
      n = s, s = n.parentNode;
    }
    return null;
  }
  function We(n) {
    return n = n[Aa] || n[io], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function fa(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(c(33));
  }
  function yn(n) {
    return n[ku] || null;
  }
  var _t = [], Vi = -1;
  function zi(n) {
    return { current: n };
  }
  function sn(n) {
    0 > Vi || (n.current = _t[Vi], _t[Vi] = null, Vi--);
  }
  function Ye(n, r) {
    Vi++, _t[Vi] = n.current, n.current = r;
  }
  var Dr = {}, Tn = zi(Dr), Qn = zi(!1), ei = Dr;
  function ti(n, r) {
    var s = n.type.contextTypes;
    if (!s) return Dr;
    var f = n.stateNode;
    if (f && f.__reactInternalMemoizedUnmaskedChildContext === r) return f.__reactInternalMemoizedMaskedChildContext;
    var h = {}, g;
    for (g in s) h[g] = r[g];
    return f && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = h), h;
  }
  function Vn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Os() {
    sn(Qn), sn(Tn);
  }
  function Nv(n, r, s) {
    if (Tn.current !== Dr) throw Error(c(168));
    Ye(Tn, r), Ye(Qn, s);
  }
  function Au(n, r, s) {
    var f = n.stateNode;
    if (r = r.childContextTypes, typeof f.getChildContext != "function") return s;
    f = f.getChildContext();
    for (var h in f) if (!(h in r)) throw Error(c(108, dt(n) || "Unknown", h));
    return Se({}, s, f);
  }
  function nr(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Dr, ei = Tn.current, Ye(Tn, n), Ye(Qn, Qn.current), !0;
  }
  function Jc(n, r, s) {
    var f = n.stateNode;
    if (!f) throw Error(c(169));
    s ? (n = Au(n, r, ei), f.__reactInternalMemoizedMergedChildContext = n, sn(Qn), sn(Tn), Ye(Tn, n)) : sn(Qn), Ye(Qn, s);
  }
  var Oa = null, Ls = !1, ao = !1;
  function ef(n) {
    Oa === null ? Oa = [n] : Oa.push(n);
  }
  function Bo(n) {
    Ls = !0, ef(n);
  }
  function La() {
    if (!ao && Oa !== null) {
      ao = !0;
      var n = 0, r = zt;
      try {
        var s = Oa;
        for (zt = 1; n < s.length; n++) {
          var f = s[n];
          do
            f = f(!0);
          while (f !== null);
        }
        Oa = null, Ls = !1;
      } catch (h) {
        throw Oa !== null && (Oa = Oa.slice(n + 1)), cn(aa, La), h;
      } finally {
        zt = r, ao = !1;
      }
    }
    return null;
  }
  var Ho = [], Io = 0, Yo = null, oo = 0, zn = [], Fi = 0, Ci = null, Na = 1, Pa = "";
  function Ol(n, r) {
    Ho[Io++] = oo, Ho[Io++] = Yo, Yo = n, oo = r;
  }
  function Pv(n, r, s) {
    zn[Fi++] = Na, zn[Fi++] = Pa, zn[Fi++] = Ci, Ci = n;
    var f = Na;
    n = Pa;
    var h = 32 - Nr(f) - 1;
    f &= ~(1 << h), s += 1;
    var g = 32 - Nr(r) + h;
    if (30 < g) {
      var w = h - h % 5;
      g = (f & (1 << w) - 1).toString(32), f >>= w, h -= w, Na = 1 << 32 - Nr(r) + h | s << h | f, Pa = g + n;
    } else Na = 1 << g | s << h | f, Pa = n;
  }
  function tf(n) {
    n.return !== null && (Ol(n, 1), Pv(n, 1, 0));
  }
  function nf(n) {
    for (; n === Yo; ) Yo = Ho[--Io], Ho[Io] = null, oo = Ho[--Io], Ho[Io] = null;
    for (; n === Ci; ) Ci = zn[--Fi], zn[Fi] = null, Pa = zn[--Fi], zn[Fi] = null, Na = zn[--Fi], zn[Fi] = null;
  }
  var ni = null, ri = null, pn = !1, ji = null;
  function tp(n, r) {
    var s = Wi(5, null, null, 0);
    s.elementType = "DELETED", s.stateNode = r, s.return = n, r = n.deletions, r === null ? (n.deletions = [s], n.flags |= 16) : r.push(s);
  }
  function Uv(n, r) {
    switch (n.tag) {
      case 5:
        var s = n.type;
        return r = r.nodeType !== 1 || s.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ni = n, ri = Ma(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ni = n, ri = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (s = Ci !== null ? { id: Na, overflow: Pa } : null, n.memoizedState = { dehydrated: r, treeContext: s, retryLane: 1073741824 }, s = Wi(18, null, null, 0), s.stateNode = r, s.return = n, n.child = s, ni = n, ri = null, !0) : !1;
      default:
        return !1;
    }
  }
  function np(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function rp(n) {
    if (pn) {
      var r = ri;
      if (r) {
        var s = r;
        if (!Uv(n, r)) {
          if (np(n)) throw Error(c(418));
          r = Ma(s.nextSibling);
          var f = ni;
          r && Uv(n, r) ? tp(f, s) : (n.flags = n.flags & -4097 | 2, pn = !1, ni = n);
        }
      } else {
        if (np(n)) throw Error(c(418));
        n.flags = n.flags & -4097 | 2, pn = !1, ni = n;
      }
    }
  }
  function Xn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    ni = n;
  }
  function rf(n) {
    if (n !== ni) return !1;
    if (!pn) return Xn(n), pn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Xc(n.type, n.memoizedProps)), r && (r = ri)) {
      if (np(n)) throw Ou(), Error(c(418));
      for (; r; ) tp(n, r), r = Ma(r.nextSibling);
    }
    if (Xn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(c(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var s = n.data;
            if (s === "/$") {
              if (r === 0) {
                ri = Ma(n.nextSibling);
                break e;
              }
              r--;
            } else s !== "$" && s !== "$!" && s !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ri = null;
      }
    } else ri = ni ? Ma(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Ou() {
    for (var n = ri; n; ) n = Ma(n.nextSibling);
  }
  function Wo() {
    ri = ni = null, pn = !1;
  }
  function lo(n) {
    ji === null ? ji = [n] : ji.push(n);
  }
  var Ng = ve.ReactCurrentBatchConfig;
  function Ll(n, r, s) {
    if (n = s.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (s._owner) {
        if (s = s._owner, s) {
          if (s.tag !== 1) throw Error(c(309));
          var f = s.stateNode;
        }
        if (!f) throw Error(c(147, n));
        var h = f, g = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === g ? r.ref : (r = function(w) {
          var A = h.refs;
          w === null ? delete A[g] : A[g] = w;
        }, r._stringRef = g, r);
      }
      if (typeof n != "string") throw Error(c(284));
      if (!s._owner) throw Error(c(290, n));
    }
    return n;
  }
  function af(n, r) {
    throw n = Object.prototype.toString.call(r), Error(c(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Vv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Nl(n) {
    function r(B, z) {
      if (n) {
        var W = B.deletions;
        W === null ? (B.deletions = [z], B.flags |= 16) : W.push(z);
      }
    }
    function s(B, z) {
      if (!n) return null;
      for (; z !== null; ) r(B, z), z = z.sibling;
      return null;
    }
    function f(B, z) {
      for (B = /* @__PURE__ */ new Map(); z !== null; ) z.key !== null ? B.set(z.key, z) : B.set(z.index, z), z = z.sibling;
      return B;
    }
    function h(B, z) {
      return B = Jo(B, z), B.index = 0, B.sibling = null, B;
    }
    function g(B, z, W) {
      return B.index = W, n ? (W = B.alternate, W !== null ? (W = W.index, W < z ? (B.flags |= 2, z) : W) : (B.flags |= 2, z)) : (B.flags |= 1048576, z);
    }
    function w(B) {
      return n && B.alternate === null && (B.flags |= 2), B;
    }
    function A(B, z, W, fe) {
      return z === null || z.tag !== 6 ? (z = Np(W, B.mode, fe), z.return = B, z) : (z = h(z, W), z.return = B, z);
    }
    function P(B, z, W, fe) {
      var Ue = W.type;
      return Ue === ge ? ce(B, z, W.props.children, fe, W.key) : z !== null && (z.elementType === Ue || typeof Ue == "object" && Ue !== null && Ue.$$typeof === Ut && Vv(Ue) === z.type) ? (fe = h(z, W.props), fe.ref = Ll(B, z, W), fe.return = B, fe) : (fe = sc(W.type, W.key, W.props, null, B.mode, fe), fe.ref = Ll(B, z, W), fe.return = B, fe);
    }
    function K(B, z, W, fe) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== W.containerInfo || z.stateNode.implementation !== W.implementation ? (z = zf(W, B.mode, fe), z.return = B, z) : (z = h(z, W.children || []), z.return = B, z);
    }
    function ce(B, z, W, fe, Ue) {
      return z === null || z.tag !== 7 ? (z = ho(W, B.mode, fe, Ue), z.return = B, z) : (z = h(z, W), z.return = B, z);
    }
    function pe(B, z, W) {
      if (typeof z == "string" && z !== "" || typeof z == "number") return z = Np("" + z, B.mode, W), z.return = B, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case J:
            return W = sc(z.type, z.key, z.props, null, B.mode, W), W.ref = Ll(B, null, z), W.return = B, W;
          case Ce:
            return z = zf(z, B.mode, W), z.return = B, z;
          case Ut:
            var fe = z._init;
            return pe(B, fe(z._payload), W);
        }
        if (er(z) || ze(z)) return z = ho(z, B.mode, W, null), z.return = B, z;
        af(B, z);
      }
      return null;
    }
    function ue(B, z, W, fe) {
      var Ue = z !== null ? z.key : null;
      if (typeof W == "string" && W !== "" || typeof W == "number") return Ue !== null ? null : A(B, z, "" + W, fe);
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case J:
            return W.key === Ue ? P(B, z, W, fe) : null;
          case Ce:
            return W.key === Ue ? K(B, z, W, fe) : null;
          case Ut:
            return Ue = W._init, ue(
              B,
              z,
              Ue(W._payload),
              fe
            );
        }
        if (er(W) || ze(W)) return Ue !== null ? null : ce(B, z, W, fe, null);
        af(B, W);
      }
      return null;
    }
    function ke(B, z, W, fe, Ue) {
      if (typeof fe == "string" && fe !== "" || typeof fe == "number") return B = B.get(W) || null, A(z, B, "" + fe, Ue);
      if (typeof fe == "object" && fe !== null) {
        switch (fe.$$typeof) {
          case J:
            return B = B.get(fe.key === null ? W : fe.key) || null, P(z, B, fe, Ue);
          case Ce:
            return B = B.get(fe.key === null ? W : fe.key) || null, K(z, B, fe, Ue);
          case Ut:
            var Xe = fe._init;
            return ke(B, z, W, Xe(fe._payload), Ue);
        }
        if (er(fe) || ze(fe)) return B = B.get(W) || null, ce(z, B, fe, Ue, null);
        af(z, fe);
      }
      return null;
    }
    function Pe(B, z, W, fe) {
      for (var Ue = null, Xe = null, Ze = z, rt = z = 0, ar = null; Ze !== null && rt < W.length; rt++) {
        Ze.index > rt ? (ar = Ze, Ze = null) : ar = Ze.sibling;
        var Bt = ue(B, Ze, W[rt], fe);
        if (Bt === null) {
          Ze === null && (Ze = ar);
          break;
        }
        n && Ze && Bt.alternate === null && r(B, Ze), z = g(Bt, z, rt), Xe === null ? Ue = Bt : Xe.sibling = Bt, Xe = Bt, Ze = ar;
      }
      if (rt === W.length) return s(B, Ze), pn && Ol(B, rt), Ue;
      if (Ze === null) {
        for (; rt < W.length; rt++) Ze = pe(B, W[rt], fe), Ze !== null && (z = g(Ze, z, rt), Xe === null ? Ue = Ze : Xe.sibling = Ze, Xe = Ze);
        return pn && Ol(B, rt), Ue;
      }
      for (Ze = f(B, Ze); rt < W.length; rt++) ar = ke(Ze, B, rt, W[rt], fe), ar !== null && (n && ar.alternate !== null && Ze.delete(ar.key === null ? rt : ar.key), z = g(ar, z, rt), Xe === null ? Ue = ar : Xe.sibling = ar, Xe = ar);
      return n && Ze.forEach(function(nl) {
        return r(B, nl);
      }), pn && Ol(B, rt), Ue;
    }
    function Fe(B, z, W, fe) {
      var Ue = ze(W);
      if (typeof Ue != "function") throw Error(c(150));
      if (W = Ue.call(W), W == null) throw Error(c(151));
      for (var Xe = Ue = null, Ze = z, rt = z = 0, ar = null, Bt = W.next(); Ze !== null && !Bt.done; rt++, Bt = W.next()) {
        Ze.index > rt ? (ar = Ze, Ze = null) : ar = Ze.sibling;
        var nl = ue(B, Ze, Bt.value, fe);
        if (nl === null) {
          Ze === null && (Ze = ar);
          break;
        }
        n && Ze && nl.alternate === null && r(B, Ze), z = g(nl, z, rt), Xe === null ? Ue = nl : Xe.sibling = nl, Xe = nl, Ze = ar;
      }
      if (Bt.done) return s(
        B,
        Ze
      ), pn && Ol(B, rt), Ue;
      if (Ze === null) {
        for (; !Bt.done; rt++, Bt = W.next()) Bt = pe(B, Bt.value, fe), Bt !== null && (z = g(Bt, z, rt), Xe === null ? Ue = Bt : Xe.sibling = Bt, Xe = Bt);
        return pn && Ol(B, rt), Ue;
      }
      for (Ze = f(B, Ze); !Bt.done; rt++, Bt = W.next()) Bt = ke(Ze, B, rt, Bt.value, fe), Bt !== null && (n && Bt.alternate !== null && Ze.delete(Bt.key === null ? rt : Bt.key), z = g(Bt, z, rt), Xe === null ? Ue = Bt : Xe.sibling = Bt, Xe = Bt);
      return n && Ze.forEach(function(Sm) {
        return r(B, Sm);
      }), pn && Ol(B, rt), Ue;
    }
    function Mn(B, z, W, fe) {
      if (typeof W == "object" && W !== null && W.type === ge && W.key === null && (W = W.props.children), typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case J:
            e: {
              for (var Ue = W.key, Xe = z; Xe !== null; ) {
                if (Xe.key === Ue) {
                  if (Ue = W.type, Ue === ge) {
                    if (Xe.tag === 7) {
                      s(B, Xe.sibling), z = h(Xe, W.props.children), z.return = B, B = z;
                      break e;
                    }
                  } else if (Xe.elementType === Ue || typeof Ue == "object" && Ue !== null && Ue.$$typeof === Ut && Vv(Ue) === Xe.type) {
                    s(B, Xe.sibling), z = h(Xe, W.props), z.ref = Ll(B, Xe, W), z.return = B, B = z;
                    break e;
                  }
                  s(B, Xe);
                  break;
                } else r(B, Xe);
                Xe = Xe.sibling;
              }
              W.type === ge ? (z = ho(W.props.children, B.mode, fe, W.key), z.return = B, B = z) : (fe = sc(W.type, W.key, W.props, null, B.mode, fe), fe.ref = Ll(B, z, W), fe.return = B, B = fe);
            }
            return w(B);
          case Ce:
            e: {
              for (Xe = W.key; z !== null; ) {
                if (z.key === Xe) if (z.tag === 4 && z.stateNode.containerInfo === W.containerInfo && z.stateNode.implementation === W.implementation) {
                  s(B, z.sibling), z = h(z, W.children || []), z.return = B, B = z;
                  break e;
                } else {
                  s(B, z);
                  break;
                }
                else r(B, z);
                z = z.sibling;
              }
              z = zf(W, B.mode, fe), z.return = B, B = z;
            }
            return w(B);
          case Ut:
            return Xe = W._init, Mn(B, z, Xe(W._payload), fe);
        }
        if (er(W)) return Pe(B, z, W, fe);
        if (ze(W)) return Fe(B, z, W, fe);
        af(B, W);
      }
      return typeof W == "string" && W !== "" || typeof W == "number" ? (W = "" + W, z !== null && z.tag === 6 ? (s(B, z.sibling), z = h(z, W), z.return = B, B = z) : (s(B, z), z = Np(W, B.mode, fe), z.return = B, B = z), w(B)) : s(B, z);
    }
    return Mn;
  }
  var bn = Nl(!0), be = Nl(!1), Ti = zi(null), ii = null, Ns = null, ip = null;
  function ap() {
    ip = Ns = ii = null;
  }
  function op(n) {
    var r = Ti.current;
    sn(Ti), n._currentValue = r;
  }
  function lp(n, r, s) {
    for (; n !== null; ) {
      var f = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, f !== null && (f.childLanes |= r)) : f !== null && (f.childLanes & r) !== r && (f.childLanes |= r), n === s) break;
      n = n.return;
    }
  }
  function gn(n, r) {
    ii = n, ip = Ns = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (jn = !0), n.firstContext = null);
  }
  function Bi(n) {
    var r = n._currentValue;
    if (ip !== n) if (n = { context: n, memoizedValue: r, next: null }, Ns === null) {
      if (ii === null) throw Error(c(308));
      Ns = n, ii.dependencies = { lanes: 0, firstContext: n };
    } else Ns = Ns.next = n;
    return r;
  }
  var Pl = null;
  function sp(n) {
    Pl === null ? Pl = [n] : Pl.push(n);
  }
  function up(n, r, s, f) {
    var h = r.interleaved;
    return h === null ? (s.next = s, sp(r)) : (s.next = h.next, h.next = s), r.interleaved = s, xi(n, f);
  }
  function xi(n, r) {
    n.lanes |= r;
    var s = n.alternate;
    for (s !== null && (s.lanes |= r), s = n, n = n.return; n !== null; ) n.childLanes |= r, s = n.alternate, s !== null && (s.childLanes |= r), s = n, n = n.return;
    return s.tag === 3 ? s.stateNode : null;
  }
  var Ri = !1;
  function cp(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function zv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function so(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function $o(n, r, s) {
    var f = n.updateQueue;
    if (f === null) return null;
    if (f = f.shared, kt & 2) {
      var h = f.pending;
      return h === null ? r.next = r : (r.next = h.next, h.next = r), f.pending = r, xi(n, s);
    }
    return h = f.interleaved, h === null ? (r.next = r, sp(f)) : (r.next = h.next, h.next = r), f.interleaved = r, xi(n, s);
  }
  function of(n, r, s) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (s & 4194240) !== 0)) {
      var f = r.lanes;
      f &= n.pendingLanes, s |= f, r.lanes = s, Ja(n, s);
    }
  }
  function Fv(n, r) {
    var s = n.updateQueue, f = n.alternate;
    if (f !== null && (f = f.updateQueue, s === f)) {
      var h = null, g = null;
      if (s = s.firstBaseUpdate, s !== null) {
        do {
          var w = { eventTime: s.eventTime, lane: s.lane, tag: s.tag, payload: s.payload, callback: s.callback, next: null };
          g === null ? h = g = w : g = g.next = w, s = s.next;
        } while (s !== null);
        g === null ? h = g = r : g = g.next = r;
      } else h = g = r;
      s = { baseState: f.baseState, firstBaseUpdate: h, lastBaseUpdate: g, shared: f.shared, effects: f.effects }, n.updateQueue = s;
      return;
    }
    n = s.lastBaseUpdate, n === null ? s.firstBaseUpdate = r : n.next = r, s.lastBaseUpdate = r;
  }
  function Lu(n, r, s, f) {
    var h = n.updateQueue;
    Ri = !1;
    var g = h.firstBaseUpdate, w = h.lastBaseUpdate, A = h.shared.pending;
    if (A !== null) {
      h.shared.pending = null;
      var P = A, K = P.next;
      P.next = null, w === null ? g = K : w.next = K, w = P;
      var ce = n.alternate;
      ce !== null && (ce = ce.updateQueue, A = ce.lastBaseUpdate, A !== w && (A === null ? ce.firstBaseUpdate = K : A.next = K, ce.lastBaseUpdate = P));
    }
    if (g !== null) {
      var pe = h.baseState;
      w = 0, ce = K = P = null, A = g;
      do {
        var ue = A.lane, ke = A.eventTime;
        if ((f & ue) === ue) {
          ce !== null && (ce = ce.next = {
            eventTime: ke,
            lane: 0,
            tag: A.tag,
            payload: A.payload,
            callback: A.callback,
            next: null
          });
          e: {
            var Pe = n, Fe = A;
            switch (ue = r, ke = s, Fe.tag) {
              case 1:
                if (Pe = Fe.payload, typeof Pe == "function") {
                  pe = Pe.call(ke, pe, ue);
                  break e;
                }
                pe = Pe;
                break e;
              case 3:
                Pe.flags = Pe.flags & -65537 | 128;
              case 0:
                if (Pe = Fe.payload, ue = typeof Pe == "function" ? Pe.call(ke, pe, ue) : Pe, ue == null) break e;
                pe = Se({}, pe, ue);
                break e;
              case 2:
                Ri = !0;
            }
          }
          A.callback !== null && A.lane !== 0 && (n.flags |= 64, ue = h.effects, ue === null ? h.effects = [A] : ue.push(A));
        } else ke = { eventTime: ke, lane: ue, tag: A.tag, payload: A.payload, callback: A.callback, next: null }, ce === null ? (K = ce = ke, P = pe) : ce = ce.next = ke, w |= ue;
        if (A = A.next, A === null) {
          if (A = h.shared.pending, A === null) break;
          ue = A, A = ue.next, ue.next = null, h.lastBaseUpdate = ue, h.shared.pending = null;
        }
      } while (!0);
      if (ce === null && (P = pe), h.baseState = P, h.firstBaseUpdate = K, h.lastBaseUpdate = ce, r = h.shared.interleaved, r !== null) {
        h = r;
        do
          w |= h.lane, h = h.next;
        while (h !== r);
      } else g === null && (h.shared.lanes = 0);
      ja |= w, n.lanes = w, n.memoizedState = pe;
    }
  }
  function fp(n, r, s) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var f = n[r], h = f.callback;
      if (h !== null) {
        if (f.callback = null, f = s, typeof h != "function") throw Error(c(191, h));
        h.call(f);
      }
    }
  }
  var Nu = {}, Ua = zi(Nu), Pu = zi(Nu), Uu = zi(Nu);
  function Ul(n) {
    if (n === Nu) throw Error(c(174));
    return n;
  }
  function dp(n, r) {
    switch (Ye(Uu, r), Ye(Pu, n), Ye(Ua, Nu), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : gi(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = gi(r, n);
    }
    sn(Ua), Ye(Ua, r);
  }
  function Vl() {
    sn(Ua), sn(Pu), sn(Uu);
  }
  function jv(n) {
    Ul(Uu.current);
    var r = Ul(Ua.current), s = gi(r, n.type);
    r !== s && (Ye(Pu, n), Ye(Ua, s));
  }
  function lf(n) {
    Pu.current === n && (sn(Ua), sn(Pu));
  }
  var Sn = zi(0);
  function sf(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var s = r.memoizedState;
        if (s !== null && (s = s.dehydrated, s === null || s.data === "$?" || s.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Vu = [];
  function $e() {
    for (var n = 0; n < Vu.length; n++) Vu[n]._workInProgressVersionPrimary = null;
    Vu.length = 0;
  }
  var Ct = ve.ReactCurrentDispatcher, Ft = ve.ReactCurrentBatchConfig, Jt = 0, jt = null, Fn = null, rr = null, uf = !1, zu = !1, zl = 0, se = 0;
  function Vt() {
    throw Error(c(321));
  }
  function et(n, r) {
    if (r === null) return !1;
    for (var s = 0; s < r.length && s < n.length; s++) if (!ca(n[s], r[s])) return !1;
    return !0;
  }
  function Go(n, r, s, f, h, g) {
    if (Jt = g, jt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Ct.current = n === null || n.memoizedState === null ? Rf : Yu, n = s(f, h), zu) {
      g = 0;
      do {
        if (zu = !1, zl = 0, 25 <= g) throw Error(c(301));
        g += 1, rr = Fn = null, r.updateQueue = null, Ct.current = wf, n = s(f, h);
      } while (zu);
    }
    if (Ct.current = Il, r = Fn !== null && Fn.next !== null, Jt = 0, rr = Fn = jt = null, uf = !1, r) throw Error(c(300));
    return n;
  }
  function da() {
    var n = zl !== 0;
    return zl = 0, n;
  }
  function _r() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return rr === null ? jt.memoizedState = rr = n : rr = rr.next = n, rr;
  }
  function Dn() {
    if (Fn === null) {
      var n = jt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Fn.next;
    var r = rr === null ? jt.memoizedState : rr.next;
    if (r !== null) rr = r, Fn = n;
    else {
      if (n === null) throw Error(c(310));
      Fn = n, n = { memoizedState: Fn.memoizedState, baseState: Fn.baseState, baseQueue: Fn.baseQueue, queue: Fn.queue, next: null }, rr === null ? jt.memoizedState = rr = n : rr = rr.next = n;
    }
    return rr;
  }
  function uo(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Ko(n) {
    var r = Dn(), s = r.queue;
    if (s === null) throw Error(c(311));
    s.lastRenderedReducer = n;
    var f = Fn, h = f.baseQueue, g = s.pending;
    if (g !== null) {
      if (h !== null) {
        var w = h.next;
        h.next = g.next, g.next = w;
      }
      f.baseQueue = h = g, s.pending = null;
    }
    if (h !== null) {
      g = h.next, f = f.baseState;
      var A = w = null, P = null, K = g;
      do {
        var ce = K.lane;
        if ((Jt & ce) === ce) P !== null && (P = P.next = { lane: 0, action: K.action, hasEagerState: K.hasEagerState, eagerState: K.eagerState, next: null }), f = K.hasEagerState ? K.eagerState : n(f, K.action);
        else {
          var pe = {
            lane: ce,
            action: K.action,
            hasEagerState: K.hasEagerState,
            eagerState: K.eagerState,
            next: null
          };
          P === null ? (A = P = pe, w = f) : P = P.next = pe, jt.lanes |= ce, ja |= ce;
        }
        K = K.next;
      } while (K !== null && K !== g);
      P === null ? w = f : P.next = A, ca(f, r.memoizedState) || (jn = !0), r.memoizedState = f, r.baseState = w, r.baseQueue = P, s.lastRenderedState = f;
    }
    if (n = s.interleaved, n !== null) {
      h = n;
      do
        g = h.lane, jt.lanes |= g, ja |= g, h = h.next;
      while (h !== n);
    } else h === null && (s.lanes = 0);
    return [r.memoizedState, s.dispatch];
  }
  function Fl(n) {
    var r = Dn(), s = r.queue;
    if (s === null) throw Error(c(311));
    s.lastRenderedReducer = n;
    var f = s.dispatch, h = s.pending, g = r.memoizedState;
    if (h !== null) {
      s.pending = null;
      var w = h = h.next;
      do
        g = n(g, w.action), w = w.next;
      while (w !== h);
      ca(g, r.memoizedState) || (jn = !0), r.memoizedState = g, r.baseQueue === null && (r.baseState = g), s.lastRenderedState = g;
    }
    return [g, f];
  }
  function cf() {
  }
  function ff(n, r) {
    var s = jt, f = Dn(), h = r(), g = !ca(f.memoizedState, h);
    if (g && (f.memoizedState = h, jn = !0), f = f.queue, Fu(hf.bind(null, s, f, n), [n]), f.getSnapshot !== r || g || rr !== null && rr.memoizedState.tag & 1) {
      if (s.flags |= 2048, jl(9, pf.bind(null, s, f, h, r), void 0, null), qn === null) throw Error(c(349));
      Jt & 30 || df(s, r, h);
    }
    return h;
  }
  function df(n, r, s) {
    n.flags |= 16384, n = { getSnapshot: r, value: s }, r = jt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, jt.updateQueue = r, r.stores = [n]) : (s = r.stores, s === null ? r.stores = [n] : s.push(n));
  }
  function pf(n, r, s, f) {
    r.value = s, r.getSnapshot = f, vf(r) && mf(n);
  }
  function hf(n, r, s) {
    return s(function() {
      vf(r) && mf(n);
    });
  }
  function vf(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var s = r();
      return !ca(n, s);
    } catch {
      return !0;
    }
  }
  function mf(n) {
    var r = xi(n, 1);
    r !== null && jr(r, n, 1, -1);
  }
  function yf(n) {
    var r = _r();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: uo, lastRenderedState: n }, r.queue = n, n = n.dispatch = Hl.bind(null, jt, n), [r.memoizedState, n];
  }
  function jl(n, r, s, f) {
    return n = { tag: n, create: r, destroy: s, deps: f, next: null }, r = jt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, jt.updateQueue = r, r.lastEffect = n.next = n) : (s = r.lastEffect, s === null ? r.lastEffect = n.next = n : (f = s.next, s.next = n, n.next = f, r.lastEffect = n)), n;
  }
  function gf() {
    return Dn().memoizedState;
  }
  function Ps(n, r, s, f) {
    var h = _r();
    jt.flags |= n, h.memoizedState = jl(1 | r, s, void 0, f === void 0 ? null : f);
  }
  function Us(n, r, s, f) {
    var h = Dn();
    f = f === void 0 ? null : f;
    var g = void 0;
    if (Fn !== null) {
      var w = Fn.memoizedState;
      if (g = w.destroy, f !== null && et(f, w.deps)) {
        h.memoizedState = jl(r, s, g, f);
        return;
      }
    }
    jt.flags |= n, h.memoizedState = jl(1 | r, s, g, f);
  }
  function Sf(n, r) {
    return Ps(8390656, 8, n, r);
  }
  function Fu(n, r) {
    return Us(2048, 8, n, r);
  }
  function Ef(n, r) {
    return Us(4, 2, n, r);
  }
  function ju(n, r) {
    return Us(4, 4, n, r);
  }
  function Bl(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Cf(n, r, s) {
    return s = s != null ? s.concat([n]) : null, Us(4, 4, Bl.bind(null, r, n), s);
  }
  function Bu() {
  }
  function Tf(n, r) {
    var s = Dn();
    r = r === void 0 ? null : r;
    var f = s.memoizedState;
    return f !== null && r !== null && et(r, f[1]) ? f[0] : (s.memoizedState = [n, r], n);
  }
  function xf(n, r) {
    var s = Dn();
    r = r === void 0 ? null : r;
    var f = s.memoizedState;
    return f !== null && r !== null && et(r, f[1]) ? f[0] : (n = n(), s.memoizedState = [n, r], n);
  }
  function pp(n, r, s) {
    return Jt & 21 ? (ca(s, r) || (s = vs(), jt.lanes |= s, ja |= s, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, jn = !0), n.memoizedState = s);
  }
  function Hu(n, r) {
    var s = zt;
    zt = s !== 0 && 4 > s ? s : 4, n(!0);
    var f = Ft.transition;
    Ft.transition = {};
    try {
      n(!1), r();
    } finally {
      zt = s, Ft.transition = f;
    }
  }
  function hp() {
    return Dn().memoizedState;
  }
  function Iu(n, r, s) {
    var f = Ba(n);
    if (s = { lane: f, action: s, hasEagerState: !1, eagerState: null, next: null }, ai(n)) Bv(r, s);
    else if (s = up(n, r, s, f), s !== null) {
      var h = In();
      jr(s, n, f, h), nn(s, r, f);
    }
  }
  function Hl(n, r, s) {
    var f = Ba(n), h = { lane: f, action: s, hasEagerState: !1, eagerState: null, next: null };
    if (ai(n)) Bv(r, h);
    else {
      var g = n.alternate;
      if (n.lanes === 0 && (g === null || g.lanes === 0) && (g = r.lastRenderedReducer, g !== null)) try {
        var w = r.lastRenderedState, A = g(w, s);
        if (h.hasEagerState = !0, h.eagerState = A, ca(A, w)) {
          var P = r.interleaved;
          P === null ? (h.next = h, sp(r)) : (h.next = P.next, P.next = h), r.interleaved = h;
          return;
        }
      } catch {
      } finally {
      }
      s = up(n, r, h, f), s !== null && (h = In(), jr(s, n, f, h), nn(s, r, f));
    }
  }
  function ai(n) {
    var r = n.alternate;
    return n === jt || r !== null && r === jt;
  }
  function Bv(n, r) {
    zu = uf = !0;
    var s = n.pending;
    s === null ? r.next = r : (r.next = s.next, s.next = r), n.pending = r;
  }
  function nn(n, r, s) {
    if (s & 4194240) {
      var f = r.lanes;
      f &= n.pendingLanes, s |= f, r.lanes = s, Ja(n, s);
    }
  }
  var Il = { readContext: Bi, useCallback: Vt, useContext: Vt, useEffect: Vt, useImperativeHandle: Vt, useInsertionEffect: Vt, useLayoutEffect: Vt, useMemo: Vt, useReducer: Vt, useRef: Vt, useState: Vt, useDebugValue: Vt, useDeferredValue: Vt, useTransition: Vt, useMutableSource: Vt, useSyncExternalStore: Vt, useId: Vt, unstable_isNewReconciler: !1 }, Rf = { readContext: Bi, useCallback: function(n, r) {
    return _r().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Bi, useEffect: Sf, useImperativeHandle: function(n, r, s) {
    return s = s != null ? s.concat([n]) : null, Ps(
      4194308,
      4,
      Bl.bind(null, r, n),
      s
    );
  }, useLayoutEffect: function(n, r) {
    return Ps(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Ps(4, 2, n, r);
  }, useMemo: function(n, r) {
    var s = _r();
    return r = r === void 0 ? null : r, n = n(), s.memoizedState = [n, r], n;
  }, useReducer: function(n, r, s) {
    var f = _r();
    return r = s !== void 0 ? s(r) : r, f.memoizedState = f.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, f.queue = n, n = n.dispatch = Iu.bind(null, jt, n), [f.memoizedState, n];
  }, useRef: function(n) {
    var r = _r();
    return n = { current: n }, r.memoizedState = n;
  }, useState: yf, useDebugValue: Bu, useDeferredValue: function(n) {
    return _r().memoizedState = n;
  }, useTransition: function() {
    var n = yf(!1), r = n[0];
    return n = Hu.bind(null, n[1]), _r().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, s) {
    var f = jt, h = _r();
    if (pn) {
      if (s === void 0) throw Error(c(407));
      s = s();
    } else {
      if (s = r(), qn === null) throw Error(c(349));
      Jt & 30 || df(f, r, s);
    }
    h.memoizedState = s;
    var g = { value: s, getSnapshot: r };
    return h.queue = g, Sf(hf.bind(
      null,
      f,
      g,
      n
    ), [n]), f.flags |= 2048, jl(9, pf.bind(null, f, g, s, r), void 0, null), s;
  }, useId: function() {
    var n = _r(), r = qn.identifierPrefix;
    if (pn) {
      var s = Pa, f = Na;
      s = (f & ~(1 << 32 - Nr(f) - 1)).toString(32) + s, r = ":" + r + "R" + s, s = zl++, 0 < s && (r += "H" + s.toString(32)), r += ":";
    } else s = se++, r = ":" + r + "r" + s.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Yu = {
    readContext: Bi,
    useCallback: Tf,
    useContext: Bi,
    useEffect: Fu,
    useImperativeHandle: Cf,
    useInsertionEffect: Ef,
    useLayoutEffect: ju,
    useMemo: xf,
    useReducer: Ko,
    useRef: gf,
    useState: function() {
      return Ko(uo);
    },
    useDebugValue: Bu,
    useDeferredValue: function(n) {
      var r = Dn();
      return pp(r, Fn.memoizedState, n);
    },
    useTransition: function() {
      var n = Ko(uo)[0], r = Dn().memoizedState;
      return [n, r];
    },
    useMutableSource: cf,
    useSyncExternalStore: ff,
    useId: hp,
    unstable_isNewReconciler: !1
  }, wf = { readContext: Bi, useCallback: Tf, useContext: Bi, useEffect: Fu, useImperativeHandle: Cf, useInsertionEffect: Ef, useLayoutEffect: ju, useMemo: xf, useReducer: Fl, useRef: gf, useState: function() {
    return Fl(uo);
  }, useDebugValue: Bu, useDeferredValue: function(n) {
    var r = Dn();
    return Fn === null ? r.memoizedState = n : pp(r, Fn.memoizedState, n);
  }, useTransition: function() {
    var n = Fl(uo)[0], r = Dn().memoizedState;
    return [n, r];
  }, useMutableSource: cf, useSyncExternalStore: ff, useId: hp, unstable_isNewReconciler: !1 };
  function pa(n, r) {
    if (n && n.defaultProps) {
      r = Se({}, r), n = n.defaultProps;
      for (var s in n) r[s] === void 0 && (r[s] = n[s]);
      return r;
    }
    return r;
  }
  function vp(n, r, s, f) {
    r = n.memoizedState, s = s(f, r), s = s == null ? r : Se({}, r, s), n.memoizedState = s, n.lanes === 0 && (n.updateQueue.baseState = s);
  }
  var bf = { isMounted: function(n) {
    return (n = n._reactInternals) ? ut(n) === n : !1;
  }, enqueueSetState: function(n, r, s) {
    n = n._reactInternals;
    var f = In(), h = Ba(n), g = so(f, h);
    g.payload = r, s != null && (g.callback = s), r = $o(n, g, h), r !== null && (jr(r, n, h, f), of(r, n, h));
  }, enqueueReplaceState: function(n, r, s) {
    n = n._reactInternals;
    var f = In(), h = Ba(n), g = so(f, h);
    g.tag = 1, g.payload = r, s != null && (g.callback = s), r = $o(n, g, h), r !== null && (jr(r, n, h, f), of(r, n, h));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var s = In(), f = Ba(n), h = so(s, f);
    h.tag = 2, r != null && (h.callback = r), r = $o(n, h, f), r !== null && (jr(r, n, f, s), of(r, n, f));
  } };
  function Hv(n, r, s, f, h, g, w) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(f, g, w) : r.prototype && r.prototype.isPureReactComponent ? !xu(s, f) || !xu(h, g) : !0;
  }
  function Df(n, r, s) {
    var f = !1, h = Dr, g = r.contextType;
    return typeof g == "object" && g !== null ? g = Bi(g) : (h = Vn(r) ? ei : Tn.current, f = r.contextTypes, g = (f = f != null) ? ti(n, h) : Dr), r = new r(s, g), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = bf, n.stateNode = r, r._reactInternals = n, f && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = h, n.__reactInternalMemoizedMaskedChildContext = g), r;
  }
  function Iv(n, r, s, f) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(s, f), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(s, f), r.state !== n && bf.enqueueReplaceState(r, r.state, null);
  }
  function Wu(n, r, s, f) {
    var h = n.stateNode;
    h.props = s, h.state = n.memoizedState, h.refs = {}, cp(n);
    var g = r.contextType;
    typeof g == "object" && g !== null ? h.context = Bi(g) : (g = Vn(r) ? ei : Tn.current, h.context = ti(n, g)), h.state = n.memoizedState, g = r.getDerivedStateFromProps, typeof g == "function" && (vp(n, r, g, s), h.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof h.getSnapshotBeforeUpdate == "function" || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (r = h.state, typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), r !== h.state && bf.enqueueReplaceState(h, h.state, null), Lu(n, s, h, f), h.state = n.memoizedState), typeof h.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Yl(n, r) {
    try {
      var s = "", f = r;
      do
        s += gt(f), f = f.return;
      while (f);
      var h = s;
    } catch (g) {
      h = `
Error generating stack: ` + g.message + `
` + g.stack;
    }
    return { value: n, source: r, stack: h, digest: null };
  }
  function mp(n, r, s) {
    return { value: n, source: null, stack: s ?? null, digest: r ?? null };
  }
  function yp(n, r) {
    try {
      console.error(r.value);
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  var _f = typeof WeakMap == "function" ? WeakMap : Map;
  function Yv(n, r, s) {
    s = so(-1, s), s.tag = 3, s.payload = { element: null };
    var f = r.value;
    return s.callback = function() {
      Hs || (Hs = !0, Gl = f), yp(n, r);
    }, s;
  }
  function gp(n, r, s) {
    s = so(-1, s), s.tag = 3;
    var f = n.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var h = r.value;
      s.payload = function() {
        return f(h);
      }, s.callback = function() {
        yp(n, r);
      };
    }
    var g = n.stateNode;
    return g !== null && typeof g.componentDidCatch == "function" && (s.callback = function() {
      yp(n, r), typeof f != "function" && (qo === null ? qo = /* @__PURE__ */ new Set([this]) : qo.add(this));
      var w = r.stack;
      this.componentDidCatch(r.value, { componentStack: w !== null ? w : "" });
    }), s;
  }
  function Sp(n, r, s) {
    var f = n.pingCache;
    if (f === null) {
      f = n.pingCache = new _f();
      var h = /* @__PURE__ */ new Set();
      f.set(r, h);
    } else h = f.get(r), h === void 0 && (h = /* @__PURE__ */ new Set(), f.set(r, h));
    h.has(s) || (h.add(s), n = Bg.bind(null, n, r, s), r.then(n, n));
  }
  function Wv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Qo(n, r, s, f, h) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = h, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, s.flags |= 131072, s.flags &= -52805, s.tag === 1 && (s.alternate === null ? s.tag = 17 : (r = so(-1, 1), r.tag = 2, $o(s, r, 1))), s.lanes |= 1), n);
  }
  var $u = ve.ReactCurrentOwner, jn = !1;
  function pr(n, r, s, f) {
    r.child = n === null ? be(r, null, s, f) : bn(r, n.child, s, f);
  }
  function oi(n, r, s, f, h) {
    s = s.render;
    var g = r.ref;
    return gn(r, h), f = Go(n, r, s, f, g, h), s = da(), n !== null && !jn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~h, Ii(n, r, h)) : (pn && s && tf(r), r.flags |= 1, pr(n, r, f, h), r.child);
  }
  function Wl(n, r, s, f, h) {
    if (n === null) {
      var g = s.type;
      return typeof g == "function" && !Lp(g) && g.defaultProps === void 0 && s.compare === null && s.defaultProps === void 0 ? (r.tag = 15, r.type = g, ft(n, r, g, f, h)) : (n = sc(s.type, null, f, r, r.mode, h), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (g = n.child, !(n.lanes & h)) {
      var w = g.memoizedProps;
      if (s = s.compare, s = s !== null ? s : xu, s(w, f) && n.ref === r.ref) return Ii(n, r, h);
    }
    return r.flags |= 1, n = Jo(g, f), n.ref = r.ref, n.return = r, r.child = n;
  }
  function ft(n, r, s, f, h) {
    if (n !== null) {
      var g = n.memoizedProps;
      if (xu(g, f) && n.ref === r.ref) if (jn = !1, r.pendingProps = f = g, (n.lanes & h) !== 0) n.flags & 131072 && (jn = !0);
      else return r.lanes = n.lanes, Ii(n, r, h);
    }
    return $v(n, r, s, f, h);
  }
  function Gu(n, r, s) {
    var f = r.pendingProps, h = f.children, g = n !== null ? n.memoizedState : null;
    if (f.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ye(Fs, wi), wi |= s;
    else {
      if (!(s & 1073741824)) return n = g !== null ? g.baseLanes | s : s, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Ye(Fs, wi), wi |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, f = g !== null ? g.baseLanes : s, Ye(Fs, wi), wi |= f;
    }
    else g !== null ? (f = g.baseLanes | s, r.memoizedState = null) : f = s, Ye(Fs, wi), wi |= f;
    return pr(n, r, h, s), r.child;
  }
  function Ep(n, r) {
    var s = r.ref;
    (n === null && s !== null || n !== null && n.ref !== s) && (r.flags |= 512, r.flags |= 2097152);
  }
  function $v(n, r, s, f, h) {
    var g = Vn(s) ? ei : Tn.current;
    return g = ti(r, g), gn(r, h), s = Go(n, r, s, f, g, h), f = da(), n !== null && !jn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~h, Ii(n, r, h)) : (pn && f && tf(r), r.flags |= 1, pr(n, r, s, h), r.child);
  }
  function Gv(n, r, s, f, h) {
    if (Vn(s)) {
      var g = !0;
      nr(r);
    } else g = !1;
    if (gn(r, h), r.stateNode === null) Hi(n, r), Df(r, s, f), Wu(r, s, f, h), f = !0;
    else if (n === null) {
      var w = r.stateNode, A = r.memoizedProps;
      w.props = A;
      var P = w.context, K = s.contextType;
      typeof K == "object" && K !== null ? K = Bi(K) : (K = Vn(s) ? ei : Tn.current, K = ti(r, K));
      var ce = s.getDerivedStateFromProps, pe = typeof ce == "function" || typeof w.getSnapshotBeforeUpdate == "function";
      pe || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (A !== f || P !== K) && Iv(r, w, f, K), Ri = !1;
      var ue = r.memoizedState;
      w.state = ue, Lu(r, f, w, h), P = r.memoizedState, A !== f || ue !== P || Qn.current || Ri ? (typeof ce == "function" && (vp(r, s, ce, f), P = r.memoizedState), (A = Ri || Hv(r, s, A, f, ue, P, K)) ? (pe || typeof w.UNSAFE_componentWillMount != "function" && typeof w.componentWillMount != "function" || (typeof w.componentWillMount == "function" && w.componentWillMount(), typeof w.UNSAFE_componentWillMount == "function" && w.UNSAFE_componentWillMount()), typeof w.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof w.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = f, r.memoizedState = P), w.props = f, w.state = P, w.context = K, f = A) : (typeof w.componentDidMount == "function" && (r.flags |= 4194308), f = !1);
    } else {
      w = r.stateNode, zv(n, r), A = r.memoizedProps, K = r.type === r.elementType ? A : pa(r.type, A), w.props = K, pe = r.pendingProps, ue = w.context, P = s.contextType, typeof P == "object" && P !== null ? P = Bi(P) : (P = Vn(s) ? ei : Tn.current, P = ti(r, P));
      var ke = s.getDerivedStateFromProps;
      (ce = typeof ke == "function" || typeof w.getSnapshotBeforeUpdate == "function") || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (A !== pe || ue !== P) && Iv(r, w, f, P), Ri = !1, ue = r.memoizedState, w.state = ue, Lu(r, f, w, h);
      var Pe = r.memoizedState;
      A !== pe || ue !== Pe || Qn.current || Ri ? (typeof ke == "function" && (vp(r, s, ke, f), Pe = r.memoizedState), (K = Ri || Hv(r, s, K, f, ue, Pe, P) || !1) ? (ce || typeof w.UNSAFE_componentWillUpdate != "function" && typeof w.componentWillUpdate != "function" || (typeof w.componentWillUpdate == "function" && w.componentWillUpdate(f, Pe, P), typeof w.UNSAFE_componentWillUpdate == "function" && w.UNSAFE_componentWillUpdate(f, Pe, P)), typeof w.componentDidUpdate == "function" && (r.flags |= 4), typeof w.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof w.componentDidUpdate != "function" || A === n.memoizedProps && ue === n.memoizedState || (r.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || A === n.memoizedProps && ue === n.memoizedState || (r.flags |= 1024), r.memoizedProps = f, r.memoizedState = Pe), w.props = f, w.state = Pe, w.context = P, f = K) : (typeof w.componentDidUpdate != "function" || A === n.memoizedProps && ue === n.memoizedState || (r.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || A === n.memoizedProps && ue === n.memoizedState || (r.flags |= 1024), f = !1);
    }
    return Ku(n, r, s, f, g, h);
  }
  function Ku(n, r, s, f, h, g) {
    Ep(n, r);
    var w = (r.flags & 128) !== 0;
    if (!f && !w) return h && Jc(r, s, !1), Ii(n, r, g);
    f = r.stateNode, $u.current = r;
    var A = w && typeof s.getDerivedStateFromError != "function" ? null : f.render();
    return r.flags |= 1, n !== null && w ? (r.child = bn(r, n.child, null, g), r.child = bn(r, null, A, g)) : pr(n, r, A, g), r.memoizedState = f.state, h && Jc(r, s, !0), r.child;
  }
  function Vs(n) {
    var r = n.stateNode;
    r.pendingContext ? Nv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Nv(n, r.context, !1), dp(n, r.containerInfo);
  }
  function Kv(n, r, s, f, h) {
    return Wo(), lo(h), r.flags |= 256, pr(n, r, s, f), r.child;
  }
  var kf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Cp(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Mf(n, r, s) {
    var f = r.pendingProps, h = Sn.current, g = !1, w = (r.flags & 128) !== 0, A;
    if ((A = w) || (A = n !== null && n.memoizedState === null ? !1 : (h & 2) !== 0), A ? (g = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (h |= 1), Ye(Sn, h & 1), n === null)
      return rp(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (w = f.children, n = f.fallback, g ? (f = r.mode, g = r.child, w = { mode: "hidden", children: w }, !(f & 1) && g !== null ? (g.childLanes = 0, g.pendingProps = w) : g = el(w, f, 0, null), n = ho(n, f, s, null), g.return = r, n.return = r, g.sibling = n, r.child = g, r.child.memoizedState = Cp(s), r.memoizedState = kf, n) : Tp(r, w));
    if (h = n.memoizedState, h !== null && (A = h.dehydrated, A !== null)) return Qv(n, r, w, f, A, h, s);
    if (g) {
      g = f.fallback, w = r.mode, h = n.child, A = h.sibling;
      var P = { mode: "hidden", children: f.children };
      return !(w & 1) && r.child !== h ? (f = r.child, f.childLanes = 0, f.pendingProps = P, r.deletions = null) : (f = Jo(h, P), f.subtreeFlags = h.subtreeFlags & 14680064), A !== null ? g = Jo(A, g) : (g = ho(g, w, s, null), g.flags |= 2), g.return = r, f.return = r, f.sibling = g, r.child = f, f = g, g = r.child, w = n.child.memoizedState, w = w === null ? Cp(s) : { baseLanes: w.baseLanes | s, cachePool: null, transitions: w.transitions }, g.memoizedState = w, g.childLanes = n.childLanes & ~s, r.memoizedState = kf, f;
    }
    return g = n.child, n = g.sibling, f = Jo(g, { mode: "visible", children: f.children }), !(r.mode & 1) && (f.lanes = s), f.return = r, f.sibling = null, n !== null && (s = r.deletions, s === null ? (r.deletions = [n], r.flags |= 16) : s.push(n)), r.child = f, r.memoizedState = null, f;
  }
  function Tp(n, r) {
    return r = el({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Qu(n, r, s, f) {
    return f !== null && lo(f), bn(r, n.child, null, s), n = Tp(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Qv(n, r, s, f, h, g, w) {
    if (s)
      return r.flags & 256 ? (r.flags &= -257, f = mp(Error(c(422))), Qu(n, r, w, f)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (g = f.fallback, h = r.mode, f = el({ mode: "visible", children: f.children }, h, 0, null), g = ho(g, h, w, null), g.flags |= 2, f.return = r, g.return = r, f.sibling = g, r.child = f, r.mode & 1 && bn(r, n.child, null, w), r.child.memoizedState = Cp(w), r.memoizedState = kf, g);
    if (!(r.mode & 1)) return Qu(n, r, w, null);
    if (h.data === "$!") {
      if (f = h.nextSibling && h.nextSibling.dataset, f) var A = f.dgst;
      return f = A, g = Error(c(419)), f = mp(g, f, void 0), Qu(n, r, w, f);
    }
    if (A = (w & n.childLanes) !== 0, jn || A) {
      if (f = qn, f !== null) {
        switch (w & -w) {
          case 4:
            h = 2;
            break;
          case 16:
            h = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            h = 32;
            break;
          case 536870912:
            h = 268435456;
            break;
          default:
            h = 0;
        }
        h = h & (f.suspendedLanes | w) ? 0 : h, h !== 0 && h !== g.retryLane && (g.retryLane = h, xi(n, h), jr(f, n, h, -1));
      }
      return Op(), f = mp(Error(c(421))), Qu(n, r, w, f);
    }
    return h.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Hg.bind(null, n), h._reactRetry = r, null) : (n = g.treeContext, ri = Ma(h.nextSibling), ni = r, pn = !0, ji = null, n !== null && (zn[Fi++] = Na, zn[Fi++] = Pa, zn[Fi++] = Ci, Na = n.id, Pa = n.overflow, Ci = r), r = Tp(r, f.children), r.flags |= 4096, r);
  }
  function xp(n, r, s) {
    n.lanes |= r;
    var f = n.alternate;
    f !== null && (f.lanes |= r), lp(n.return, r, s);
  }
  function Vr(n, r, s, f, h) {
    var g = n.memoizedState;
    g === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: f, tail: s, tailMode: h } : (g.isBackwards = r, g.rendering = null, g.renderingStartTime = 0, g.last = f, g.tail = s, g.tailMode = h);
  }
  function Va(n, r, s) {
    var f = r.pendingProps, h = f.revealOrder, g = f.tail;
    if (pr(n, r, f.children, s), f = Sn.current, f & 2) f = f & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && xp(n, s, r);
        else if (n.tag === 19) xp(n, s, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      f &= 1;
    }
    if (Ye(Sn, f), !(r.mode & 1)) r.memoizedState = null;
    else switch (h) {
      case "forwards":
        for (s = r.child, h = null; s !== null; ) n = s.alternate, n !== null && sf(n) === null && (h = s), s = s.sibling;
        s = h, s === null ? (h = r.child, r.child = null) : (h = s.sibling, s.sibling = null), Vr(r, !1, h, s, g);
        break;
      case "backwards":
        for (s = null, h = r.child, r.child = null; h !== null; ) {
          if (n = h.alternate, n !== null && sf(n) === null) {
            r.child = h;
            break;
          }
          n = h.sibling, h.sibling = s, s = h, h = n;
        }
        Vr(r, !0, s, null, g);
        break;
      case "together":
        Vr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Hi(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Ii(n, r, s) {
    if (n !== null && (r.dependencies = n.dependencies), ja |= r.lanes, !(s & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(c(153));
    if (r.child !== null) {
      for (n = r.child, s = Jo(n, n.pendingProps), r.child = s, s.return = r; n.sibling !== null; ) n = n.sibling, s = s.sibling = Jo(n, n.pendingProps), s.return = r;
      s.sibling = null;
    }
    return r.child;
  }
  function Xu(n, r, s) {
    switch (r.tag) {
      case 3:
        Vs(r), Wo();
        break;
      case 5:
        jv(r);
        break;
      case 1:
        Vn(r.type) && nr(r);
        break;
      case 4:
        dp(r, r.stateNode.containerInfo);
        break;
      case 10:
        var f = r.type._context, h = r.memoizedProps.value;
        Ye(Ti, f._currentValue), f._currentValue = h;
        break;
      case 13:
        if (f = r.memoizedState, f !== null)
          return f.dehydrated !== null ? (Ye(Sn, Sn.current & 1), r.flags |= 128, null) : s & r.child.childLanes ? Mf(n, r, s) : (Ye(Sn, Sn.current & 1), n = Ii(n, r, s), n !== null ? n.sibling : null);
        Ye(Sn, Sn.current & 1);
        break;
      case 19:
        if (f = (s & r.childLanes) !== 0, n.flags & 128) {
          if (f) return Va(n, r, s);
          r.flags |= 128;
        }
        if (h = r.memoizedState, h !== null && (h.rendering = null, h.tail = null, h.lastEffect = null), Ye(Sn, Sn.current), f) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Gu(n, r, s);
    }
    return Ii(n, r, s);
  }
  var Yi, Bn, Xv, qv;
  Yi = function(n, r) {
    for (var s = r.child; s !== null; ) {
      if (s.tag === 5 || s.tag === 6) n.appendChild(s.stateNode);
      else if (s.tag !== 4 && s.child !== null) {
        s.child.return = s, s = s.child;
        continue;
      }
      if (s === r) break;
      for (; s.sibling === null; ) {
        if (s.return === null || s.return === r) return;
        s = s.return;
      }
      s.sibling.return = s.return, s = s.sibling;
    }
  }, Bn = function() {
  }, Xv = function(n, r, s, f) {
    var h = n.memoizedProps;
    if (h !== f) {
      n = r.stateNode, Ul(Ua.current);
      var g = null;
      switch (s) {
        case "input":
          h = sr(n, h), f = sr(n, f), g = [];
          break;
        case "select":
          h = Se({}, h, { value: void 0 }), f = Se({}, f, { value: void 0 }), g = [];
          break;
        case "textarea":
          h = Gn(n, h), f = Gn(n, f), g = [];
          break;
        default:
          typeof h.onClick != "function" && typeof f.onClick == "function" && (n.onclick = Fo);
      }
      un(s, f);
      var w;
      s = null;
      for (K in h) if (!f.hasOwnProperty(K) && h.hasOwnProperty(K) && h[K] != null) if (K === "style") {
        var A = h[K];
        for (w in A) A.hasOwnProperty(w) && (s || (s = {}), s[w] = "");
      } else K !== "dangerouslySetInnerHTML" && K !== "children" && K !== "suppressContentEditableWarning" && K !== "suppressHydrationWarning" && K !== "autoFocus" && (y.hasOwnProperty(K) ? g || (g = []) : (g = g || []).push(K, null));
      for (K in f) {
        var P = f[K];
        if (A = h != null ? h[K] : void 0, f.hasOwnProperty(K) && P !== A && (P != null || A != null)) if (K === "style") if (A) {
          for (w in A) !A.hasOwnProperty(w) || P && P.hasOwnProperty(w) || (s || (s = {}), s[w] = "");
          for (w in P) P.hasOwnProperty(w) && A[w] !== P[w] && (s || (s = {}), s[w] = P[w]);
        } else s || (g || (g = []), g.push(
          K,
          s
        )), s = P;
        else K === "dangerouslySetInnerHTML" ? (P = P ? P.__html : void 0, A = A ? A.__html : void 0, P != null && A !== P && (g = g || []).push(K, P)) : K === "children" ? typeof P != "string" && typeof P != "number" || (g = g || []).push(K, "" + P) : K !== "suppressContentEditableWarning" && K !== "suppressHydrationWarning" && (y.hasOwnProperty(K) ? (P != null && K === "onScroll" && Wt("scroll", n), g || A === P || (g = [])) : (g = g || []).push(K, P));
      }
      s && (g = g || []).push("style", s);
      var K = g;
      (r.updateQueue = K) && (r.flags |= 4);
    }
  }, qv = function(n, r, s, f) {
    s !== f && (r.flags |= 4);
  };
  function qu(n, r) {
    if (!pn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var s = null; r !== null; ) r.alternate !== null && (s = r), r = r.sibling;
        s === null ? n.tail = null : s.sibling = null;
        break;
      case "collapsed":
        s = n.tail;
        for (var f = null; s !== null; ) s.alternate !== null && (f = s), s = s.sibling;
        f === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : f.sibling = null;
    }
  }
  function ir(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, s = 0, f = 0;
    if (r) for (var h = n.child; h !== null; ) s |= h.lanes | h.childLanes, f |= h.subtreeFlags & 14680064, f |= h.flags & 14680064, h.return = n, h = h.sibling;
    else for (h = n.child; h !== null; ) s |= h.lanes | h.childLanes, f |= h.subtreeFlags, f |= h.flags, h.return = n, h = h.sibling;
    return n.subtreeFlags |= f, n.childLanes = s, r;
  }
  function Zv(n, r, s) {
    var f = r.pendingProps;
    switch (nf(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ir(r), null;
      case 1:
        return Vn(r.type) && Os(), ir(r), null;
      case 3:
        return f = r.stateNode, Vl(), sn(Qn), sn(Tn), $e(), f.pendingContext && (f.context = f.pendingContext, f.pendingContext = null), (n === null || n.child === null) && (rf(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ji !== null && (Kl(ji), ji = null))), Bn(n, r), ir(r), null;
      case 5:
        lf(r);
        var h = Ul(Uu.current);
        if (s = r.type, n !== null && r.stateNode != null) Xv(n, r, s, f, h), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!f) {
            if (r.stateNode === null) throw Error(c(166));
            return ir(r), null;
          }
          if (n = Ul(Ua.current), rf(r)) {
            f = r.stateNode, s = r.type;
            var g = r.memoizedProps;
            switch (f[Aa] = r, f[ku] = g, n = (r.mode & 1) !== 0, s) {
              case "dialog":
                Wt("cancel", f), Wt("close", f);
                break;
              case "iframe":
              case "object":
              case "embed":
                Wt("load", f);
                break;
              case "video":
              case "audio":
                for (h = 0; h < bu.length; h++) Wt(bu[h], f);
                break;
              case "source":
                Wt("error", f);
                break;
              case "img":
              case "image":
              case "link":
                Wt(
                  "error",
                  f
                ), Wt("load", f);
                break;
              case "details":
                Wt("toggle", f);
                break;
              case "input":
                Wn(f, g), Wt("invalid", f);
                break;
              case "select":
                f._wrapperState = { wasMultiple: !!g.multiple }, Wt("invalid", f);
                break;
              case "textarea":
                Rr(f, g), Wt("invalid", f);
            }
            un(s, g), h = null;
            for (var w in g) if (g.hasOwnProperty(w)) {
              var A = g[w];
              w === "children" ? typeof A == "string" ? f.textContent !== A && (g.suppressHydrationWarning !== !0 && Qc(f.textContent, A, n), h = ["children", A]) : typeof A == "number" && f.textContent !== "" + A && (g.suppressHydrationWarning !== !0 && Qc(
                f.textContent,
                A,
                n
              ), h = ["children", "" + A]) : y.hasOwnProperty(w) && A != null && w === "onScroll" && Wt("scroll", f);
            }
            switch (s) {
              case "input":
                Nn(f), Ea(f, g, !0);
                break;
              case "textarea":
                Nn(f), Pn(f);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof g.onClick == "function" && (f.onclick = Fo);
            }
            f = h, r.updateQueue = f, f !== null && (r.flags |= 4);
          } else {
            w = h.nodeType === 9 ? h : h.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = wr(s)), n === "http://www.w3.org/1999/xhtml" ? s === "script" ? (n = w.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof f.is == "string" ? n = w.createElement(s, { is: f.is }) : (n = w.createElement(s), s === "select" && (w = n, f.multiple ? w.multiple = !0 : f.size && (w.size = f.size))) : n = w.createElementNS(n, s), n[Aa] = r, n[ku] = f, Yi(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (w = tr(s, f), s) {
                case "dialog":
                  Wt("cancel", n), Wt("close", n), h = f;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Wt("load", n), h = f;
                  break;
                case "video":
                case "audio":
                  for (h = 0; h < bu.length; h++) Wt(bu[h], n);
                  h = f;
                  break;
                case "source":
                  Wt("error", n), h = f;
                  break;
                case "img":
                case "image":
                case "link":
                  Wt(
                    "error",
                    n
                  ), Wt("load", n), h = f;
                  break;
                case "details":
                  Wt("toggle", n), h = f;
                  break;
                case "input":
                  Wn(n, f), h = sr(n, f), Wt("invalid", n);
                  break;
                case "option":
                  h = f;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!f.multiple }, h = Se({}, f, { value: void 0 }), Wt("invalid", n);
                  break;
                case "textarea":
                  Rr(n, f), h = Gn(n, f), Wt("invalid", n);
                  break;
                default:
                  h = f;
              }
              un(s, h), A = h;
              for (g in A) if (A.hasOwnProperty(g)) {
                var P = A[g];
                g === "style" ? rn(n, P) : g === "dangerouslySetInnerHTML" ? (P = P ? P.__html : void 0, P != null && Ca(n, P)) : g === "children" ? typeof P == "string" ? (s !== "textarea" || P !== "") && Ee(n, P) : typeof P == "number" && Ee(n, "" + P) : g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && g !== "autoFocus" && (y.hasOwnProperty(g) ? P != null && g === "onScroll" && Wt("scroll", n) : P != null && oe(n, g, P, w));
              }
              switch (s) {
                case "input":
                  Nn(n), Ea(n, f, !1);
                  break;
                case "textarea":
                  Nn(n), Pn(n);
                  break;
                case "option":
                  f.value != null && n.setAttribute("value", "" + vt(f.value));
                  break;
                case "select":
                  n.multiple = !!f.multiple, g = f.value, g != null ? Rn(n, !!f.multiple, g, !1) : f.defaultValue != null && Rn(
                    n,
                    !!f.multiple,
                    f.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof h.onClick == "function" && (n.onclick = Fo);
              }
              switch (s) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  f = !!f.autoFocus;
                  break e;
                case "img":
                  f = !0;
                  break e;
                default:
                  f = !1;
              }
            }
            f && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return ir(r), null;
      case 6:
        if (n && r.stateNode != null) qv(n, r, n.memoizedProps, f);
        else {
          if (typeof f != "string" && r.stateNode === null) throw Error(c(166));
          if (s = Ul(Uu.current), Ul(Ua.current), rf(r)) {
            if (f = r.stateNode, s = r.memoizedProps, f[Aa] = r, (g = f.nodeValue !== s) && (n = ni, n !== null)) switch (n.tag) {
              case 3:
                Qc(f.nodeValue, s, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Qc(f.nodeValue, s, (n.mode & 1) !== 0);
            }
            g && (r.flags |= 4);
          } else f = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(f), f[Aa] = r, r.stateNode = f;
        }
        return ir(r), null;
      case 13:
        if (sn(Sn), f = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (pn && ri !== null && r.mode & 1 && !(r.flags & 128)) Ou(), Wo(), r.flags |= 98560, g = !1;
          else if (g = rf(r), f !== null && f.dehydrated !== null) {
            if (n === null) {
              if (!g) throw Error(c(318));
              if (g = r.memoizedState, g = g !== null ? g.dehydrated : null, !g) throw Error(c(317));
              g[Aa] = r;
            } else Wo(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            ir(r), g = !1;
          } else ji !== null && (Kl(ji), ji = null), g = !0;
          if (!g) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = s, r) : (f = f !== null, f !== (n !== null && n.memoizedState !== null) && f && (r.child.flags |= 8192, r.mode & 1 && (n === null || Sn.current & 1 ? kn === 0 && (kn = 3) : Op())), r.updateQueue !== null && (r.flags |= 4), ir(r), null);
      case 4:
        return Vl(), Bn(n, r), n === null && Ds(r.stateNode.containerInfo), ir(r), null;
      case 10:
        return op(r.type._context), ir(r), null;
      case 17:
        return Vn(r.type) && Os(), ir(r), null;
      case 19:
        if (sn(Sn), g = r.memoizedState, g === null) return ir(r), null;
        if (f = (r.flags & 128) !== 0, w = g.rendering, w === null) if (f) qu(g, !1);
        else {
          if (kn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (w = sf(n), w !== null) {
              for (r.flags |= 128, qu(g, !1), f = w.updateQueue, f !== null && (r.updateQueue = f, r.flags |= 4), r.subtreeFlags = 0, f = s, s = r.child; s !== null; ) g = s, n = f, g.flags &= 14680066, w = g.alternate, w === null ? (g.childLanes = 0, g.lanes = n, g.child = null, g.subtreeFlags = 0, g.memoizedProps = null, g.memoizedState = null, g.updateQueue = null, g.dependencies = null, g.stateNode = null) : (g.childLanes = w.childLanes, g.lanes = w.lanes, g.child = w.child, g.subtreeFlags = 0, g.deletions = null, g.memoizedProps = w.memoizedProps, g.memoizedState = w.memoizedState, g.updateQueue = w.updateQueue, g.type = w.type, n = w.dependencies, g.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), s = s.sibling;
              return Ye(Sn, Sn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          g.tail !== null && ct() > Bs && (r.flags |= 128, f = !0, qu(g, !1), r.lanes = 4194304);
        }
        else {
          if (!f) if (n = sf(w), n !== null) {
            if (r.flags |= 128, f = !0, s = n.updateQueue, s !== null && (r.updateQueue = s, r.flags |= 4), qu(g, !0), g.tail === null && g.tailMode === "hidden" && !w.alternate && !pn) return ir(r), null;
          } else 2 * ct() - g.renderingStartTime > Bs && s !== 1073741824 && (r.flags |= 128, f = !0, qu(g, !1), r.lanes = 4194304);
          g.isBackwards ? (w.sibling = r.child, r.child = w) : (s = g.last, s !== null ? s.sibling = w : r.child = w, g.last = w);
        }
        return g.tail !== null ? (r = g.tail, g.rendering = r, g.tail = r.sibling, g.renderingStartTime = ct(), r.sibling = null, s = Sn.current, Ye(Sn, f ? s & 1 | 2 : s & 1), r) : (ir(r), null);
      case 22:
      case 23:
        return Ap(), f = r.memoizedState !== null, n !== null && n.memoizedState !== null !== f && (r.flags |= 8192), f && r.mode & 1 ? wi & 1073741824 && (ir(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : ir(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(c(156, r.tag));
  }
  function Af(n, r) {
    switch (nf(r), r.tag) {
      case 1:
        return Vn(r.type) && Os(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Vl(), sn(Qn), sn(Tn), $e(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return lf(r), null;
      case 13:
        if (sn(Sn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(c(340));
          Wo();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return sn(Sn), null;
      case 4:
        return Vl(), null;
      case 10:
        return op(r.type._context), null;
      case 22:
      case 23:
        return Ap(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Zu = !1, kr = !1, Pg = typeof WeakSet == "function" ? WeakSet : Set, Oe = null;
  function zs(n, r) {
    var s = n.ref;
    if (s !== null) if (typeof s == "function") try {
      s(null);
    } catch (f) {
      hn(n, r, f);
    }
    else s.current = null;
  }
  function Of(n, r, s) {
    try {
      s();
    } catch (f) {
      hn(n, r, f);
    }
  }
  var Jv = !1;
  function em(n, r) {
    if (_u = Pi, n = Ru(), Bc(n)) {
      if ("selectionStart" in n) var s = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        s = (s = n.ownerDocument) && s.defaultView || window;
        var f = s.getSelection && s.getSelection();
        if (f && f.rangeCount !== 0) {
          s = f.anchorNode;
          var h = f.anchorOffset, g = f.focusNode;
          f = f.focusOffset;
          try {
            s.nodeType, g.nodeType;
          } catch {
            s = null;
            break e;
          }
          var w = 0, A = -1, P = -1, K = 0, ce = 0, pe = n, ue = null;
          t: for (; ; ) {
            for (var ke; pe !== s || h !== 0 && pe.nodeType !== 3 || (A = w + h), pe !== g || f !== 0 && pe.nodeType !== 3 || (P = w + f), pe.nodeType === 3 && (w += pe.nodeValue.length), (ke = pe.firstChild) !== null; )
              ue = pe, pe = ke;
            for (; ; ) {
              if (pe === n) break t;
              if (ue === s && ++K === h && (A = w), ue === g && ++ce === f && (P = w), (ke = pe.nextSibling) !== null) break;
              pe = ue, ue = pe.parentNode;
            }
            pe = ke;
          }
          s = A === -1 || P === -1 ? null : { start: A, end: P };
        } else s = null;
      }
      s = s || { start: 0, end: 0 };
    } else s = null;
    for (Ml = { focusedElem: n, selectionRange: s }, Pi = !1, Oe = r; Oe !== null; ) if (r = Oe, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, Oe = n;
    else for (; Oe !== null; ) {
      r = Oe;
      try {
        var Pe = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Pe !== null) {
              var Fe = Pe.memoizedProps, Mn = Pe.memoizedState, B = r.stateNode, z = B.getSnapshotBeforeUpdate(r.elementType === r.type ? Fe : pa(r.type, Fe), Mn);
              B.__reactInternalSnapshotBeforeUpdate = z;
            }
            break;
          case 3:
            var W = r.stateNode.containerInfo;
            W.nodeType === 1 ? W.textContent = "" : W.nodeType === 9 && W.documentElement && W.removeChild(W.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(c(163));
        }
      } catch (fe) {
        hn(r, r.return, fe);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, Oe = n;
        break;
      }
      Oe = r.return;
    }
    return Pe = Jv, Jv = !1, Pe;
  }
  function Ju(n, r, s) {
    var f = r.updateQueue;
    if (f = f !== null ? f.lastEffect : null, f !== null) {
      var h = f = f.next;
      do {
        if ((h.tag & n) === n) {
          var g = h.destroy;
          h.destroy = void 0, g !== void 0 && Of(r, s, g);
        }
        h = h.next;
      } while (h !== f);
    }
  }
  function ec(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var s = r = r.next;
      do {
        if ((s.tag & n) === n) {
          var f = s.create;
          s.destroy = f();
        }
        s = s.next;
      } while (s !== r);
    }
  }
  function Rp(n) {
    var r = n.ref;
    if (r !== null) {
      var s = n.stateNode;
      switch (n.tag) {
        case 5:
          n = s;
          break;
        default:
          n = s;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Lf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Lf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Aa], delete r[ku], delete r[Mu], delete r[As], delete r[Lg])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function tc(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function co(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || tc(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function za(n, r, s) {
    var f = n.tag;
    if (f === 5 || f === 6) n = n.stateNode, r ? s.nodeType === 8 ? s.parentNode.insertBefore(n, r) : s.insertBefore(n, r) : (s.nodeType === 8 ? (r = s.parentNode, r.insertBefore(n, s)) : (r = s, r.appendChild(n)), s = s._reactRootContainer, s != null || r.onclick !== null || (r.onclick = Fo));
    else if (f !== 4 && (n = n.child, n !== null)) for (za(n, r, s), n = n.sibling; n !== null; ) za(n, r, s), n = n.sibling;
  }
  function Fa(n, r, s) {
    var f = n.tag;
    if (f === 5 || f === 6) n = n.stateNode, r ? s.insertBefore(n, r) : s.appendChild(n);
    else if (f !== 4 && (n = n.child, n !== null)) for (Fa(n, r, s), n = n.sibling; n !== null; ) Fa(n, r, s), n = n.sibling;
  }
  var _n = null, zr = !1;
  function Fr(n, r, s) {
    for (s = s.child; s !== null; ) tm(n, r, s), s = s.sibling;
  }
  function tm(n, r, s) {
    if (Zr && typeof Zr.onCommitFiberUnmount == "function") try {
      Zr.onCommitFiberUnmount(Mo, s);
    } catch {
    }
    switch (s.tag) {
      case 5:
        kr || zs(s, r);
      case 6:
        var f = _n, h = zr;
        _n = null, Fr(n, r, s), _n = f, zr = h, _n !== null && (zr ? (n = _n, s = s.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(s) : n.removeChild(s)) : _n.removeChild(s.stateNode));
        break;
      case 18:
        _n !== null && (zr ? (n = _n, s = s.stateNode, n.nodeType === 8 ? Ms(n.parentNode, s) : n.nodeType === 1 && Ms(n, s), sa(n)) : Ms(_n, s.stateNode));
        break;
      case 4:
        f = _n, h = zr, _n = s.stateNode.containerInfo, zr = !0, Fr(n, r, s), _n = f, zr = h;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!kr && (f = s.updateQueue, f !== null && (f = f.lastEffect, f !== null))) {
          h = f = f.next;
          do {
            var g = h, w = g.destroy;
            g = g.tag, w !== void 0 && (g & 2 || g & 4) && Of(s, r, w), h = h.next;
          } while (h !== f);
        }
        Fr(n, r, s);
        break;
      case 1:
        if (!kr && (zs(s, r), f = s.stateNode, typeof f.componentWillUnmount == "function")) try {
          f.props = s.memoizedProps, f.state = s.memoizedState, f.componentWillUnmount();
        } catch (A) {
          hn(s, r, A);
        }
        Fr(n, r, s);
        break;
      case 21:
        Fr(n, r, s);
        break;
      case 22:
        s.mode & 1 ? (kr = (f = kr) || s.memoizedState !== null, Fr(n, r, s), kr = f) : Fr(n, r, s);
        break;
      default:
        Fr(n, r, s);
    }
  }
  function nm(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var s = n.stateNode;
      s === null && (s = n.stateNode = new Pg()), r.forEach(function(f) {
        var h = fm.bind(null, n, f);
        s.has(f) || (s.add(f), f.then(h, h));
      });
    }
  }
  function ha(n, r) {
    var s = r.deletions;
    if (s !== null) for (var f = 0; f < s.length; f++) {
      var h = s[f];
      try {
        var g = n, w = r, A = w;
        e: for (; A !== null; ) {
          switch (A.tag) {
            case 5:
              _n = A.stateNode, zr = !1;
              break e;
            case 3:
              _n = A.stateNode.containerInfo, zr = !0;
              break e;
            case 4:
              _n = A.stateNode.containerInfo, zr = !0;
              break e;
          }
          A = A.return;
        }
        if (_n === null) throw Error(c(160));
        tm(g, w, h), _n = null, zr = !1;
        var P = h.alternate;
        P !== null && (P.return = null), h.return = null;
      } catch (K) {
        hn(h, r, K);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) wp(r, n), r = r.sibling;
  }
  function wp(n, r) {
    var s = n.alternate, f = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ha(r, n), li(n), f & 4) {
          try {
            Ju(3, n, n.return), ec(3, n);
          } catch (Fe) {
            hn(n, n.return, Fe);
          }
          try {
            Ju(5, n, n.return);
          } catch (Fe) {
            hn(n, n.return, Fe);
          }
        }
        break;
      case 1:
        ha(r, n), li(n), f & 512 && s !== null && zs(s, s.return);
        break;
      case 5:
        if (ha(r, n), li(n), f & 512 && s !== null && zs(s, s.return), n.flags & 32) {
          var h = n.stateNode;
          try {
            Ee(h, "");
          } catch (Fe) {
            hn(n, n.return, Fe);
          }
        }
        if (f & 4 && (h = n.stateNode, h != null)) {
          var g = n.memoizedProps, w = s !== null ? s.memoizedProps : g, A = n.type, P = n.updateQueue;
          if (n.updateQueue = null, P !== null) try {
            A === "input" && g.type === "radio" && g.name != null && $n(h, g), tr(A, w);
            var K = tr(A, g);
            for (w = 0; w < P.length; w += 2) {
              var ce = P[w], pe = P[w + 1];
              ce === "style" ? rn(h, pe) : ce === "dangerouslySetInnerHTML" ? Ca(h, pe) : ce === "children" ? Ee(h, pe) : oe(h, ce, pe, K);
            }
            switch (A) {
              case "input":
                qr(h, g);
                break;
              case "textarea":
                ea(h, g);
                break;
              case "select":
                var ue = h._wrapperState.wasMultiple;
                h._wrapperState.wasMultiple = !!g.multiple;
                var ke = g.value;
                ke != null ? Rn(h, !!g.multiple, ke, !1) : ue !== !!g.multiple && (g.defaultValue != null ? Rn(
                  h,
                  !!g.multiple,
                  g.defaultValue,
                  !0
                ) : Rn(h, !!g.multiple, g.multiple ? [] : "", !1));
            }
            h[ku] = g;
          } catch (Fe) {
            hn(n, n.return, Fe);
          }
        }
        break;
      case 6:
        if (ha(r, n), li(n), f & 4) {
          if (n.stateNode === null) throw Error(c(162));
          h = n.stateNode, g = n.memoizedProps;
          try {
            h.nodeValue = g;
          } catch (Fe) {
            hn(n, n.return, Fe);
          }
        }
        break;
      case 3:
        if (ha(r, n), li(n), f & 4 && s !== null && s.memoizedState.isDehydrated) try {
          sa(r.containerInfo);
        } catch (Fe) {
          hn(n, n.return, Fe);
        }
        break;
      case 4:
        ha(r, n), li(n);
        break;
      case 13:
        ha(r, n), li(n), h = n.child, h.flags & 8192 && (g = h.memoizedState !== null, h.stateNode.isHidden = g, !g || h.alternate !== null && h.alternate.memoizedState !== null || (_p = ct())), f & 4 && nm(n);
        break;
      case 22:
        if (ce = s !== null && s.memoizedState !== null, n.mode & 1 ? (kr = (K = kr) || ce, ha(r, n), kr = K) : ha(r, n), li(n), f & 8192) {
          if (K = n.memoizedState !== null, (n.stateNode.isHidden = K) && !ce && n.mode & 1) for (Oe = n, ce = n.child; ce !== null; ) {
            for (pe = Oe = ce; Oe !== null; ) {
              switch (ue = Oe, ke = ue.child, ue.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ju(4, ue, ue.return);
                  break;
                case 1:
                  zs(ue, ue.return);
                  var Pe = ue.stateNode;
                  if (typeof Pe.componentWillUnmount == "function") {
                    f = ue, s = ue.return;
                    try {
                      r = f, Pe.props = r.memoizedProps, Pe.state = r.memoizedState, Pe.componentWillUnmount();
                    } catch (Fe) {
                      hn(f, s, Fe);
                    }
                  }
                  break;
                case 5:
                  zs(ue, ue.return);
                  break;
                case 22:
                  if (ue.memoizedState !== null) {
                    nc(pe);
                    continue;
                  }
              }
              ke !== null ? (ke.return = ue, Oe = ke) : nc(pe);
            }
            ce = ce.sibling;
          }
          e: for (ce = null, pe = n; ; ) {
            if (pe.tag === 5) {
              if (ce === null) {
                ce = pe;
                try {
                  h = pe.stateNode, K ? (g = h.style, typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none") : (A = pe.stateNode, P = pe.memoizedProps.style, w = P != null && P.hasOwnProperty("display") ? P.display : null, A.style.display = Yt("display", w));
                } catch (Fe) {
                  hn(n, n.return, Fe);
                }
              }
            } else if (pe.tag === 6) {
              if (ce === null) try {
                pe.stateNode.nodeValue = K ? "" : pe.memoizedProps;
              } catch (Fe) {
                hn(n, n.return, Fe);
              }
            } else if ((pe.tag !== 22 && pe.tag !== 23 || pe.memoizedState === null || pe === n) && pe.child !== null) {
              pe.child.return = pe, pe = pe.child;
              continue;
            }
            if (pe === n) break e;
            for (; pe.sibling === null; ) {
              if (pe.return === null || pe.return === n) break e;
              ce === pe && (ce = null), pe = pe.return;
            }
            ce === pe && (ce = null), pe.sibling.return = pe.return, pe = pe.sibling;
          }
        }
        break;
      case 19:
        ha(r, n), li(n), f & 4 && nm(n);
        break;
      case 21:
        break;
      default:
        ha(
          r,
          n
        ), li(n);
    }
  }
  function li(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var s = n.return; s !== null; ) {
            if (tc(s)) {
              var f = s;
              break e;
            }
            s = s.return;
          }
          throw Error(c(160));
        }
        switch (f.tag) {
          case 5:
            var h = f.stateNode;
            f.flags & 32 && (Ee(h, ""), f.flags &= -33);
            var g = co(n);
            Fa(n, g, h);
            break;
          case 3:
          case 4:
            var w = f.stateNode.containerInfo, A = co(n);
            za(n, A, w);
            break;
          default:
            throw Error(c(161));
        }
      } catch (P) {
        hn(n, n.return, P);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Ug(n, r, s) {
    Oe = n, bp(n);
  }
  function bp(n, r, s) {
    for (var f = (n.mode & 1) !== 0; Oe !== null; ) {
      var h = Oe, g = h.child;
      if (h.tag === 22 && f) {
        var w = h.memoizedState !== null || Zu;
        if (!w) {
          var A = h.alternate, P = A !== null && A.memoizedState !== null || kr;
          A = Zu;
          var K = kr;
          if (Zu = w, (kr = P) && !K) for (Oe = h; Oe !== null; ) w = Oe, P = w.child, w.tag === 22 && w.memoizedState !== null ? Dp(h) : P !== null ? (P.return = w, Oe = P) : Dp(h);
          for (; g !== null; ) Oe = g, bp(g), g = g.sibling;
          Oe = h, Zu = A, kr = K;
        }
        rm(n);
      } else h.subtreeFlags & 8772 && g !== null ? (g.return = h, Oe = g) : rm(n);
    }
  }
  function rm(n) {
    for (; Oe !== null; ) {
      var r = Oe;
      if (r.flags & 8772) {
        var s = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              kr || ec(5, r);
              break;
            case 1:
              var f = r.stateNode;
              if (r.flags & 4 && !kr) if (s === null) f.componentDidMount();
              else {
                var h = r.elementType === r.type ? s.memoizedProps : pa(r.type, s.memoizedProps);
                f.componentDidUpdate(h, s.memoizedState, f.__reactInternalSnapshotBeforeUpdate);
              }
              var g = r.updateQueue;
              g !== null && fp(r, g, f);
              break;
            case 3:
              var w = r.updateQueue;
              if (w !== null) {
                if (s = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    s = r.child.stateNode;
                    break;
                  case 1:
                    s = r.child.stateNode;
                }
                fp(r, w, s);
              }
              break;
            case 5:
              var A = r.stateNode;
              if (s === null && r.flags & 4) {
                s = A;
                var P = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    P.autoFocus && s.focus();
                    break;
                  case "img":
                    P.src && (s.src = P.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var K = r.alternate;
                if (K !== null) {
                  var ce = K.memoizedState;
                  if (ce !== null) {
                    var pe = ce.dehydrated;
                    pe !== null && sa(pe);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(c(163));
          }
          kr || r.flags & 512 && Rp(r);
        } catch (ue) {
          hn(r, r.return, ue);
        }
      }
      if (r === n) {
        Oe = null;
        break;
      }
      if (s = r.sibling, s !== null) {
        s.return = r.return, Oe = s;
        break;
      }
      Oe = r.return;
    }
  }
  function nc(n) {
    for (; Oe !== null; ) {
      var r = Oe;
      if (r === n) {
        Oe = null;
        break;
      }
      var s = r.sibling;
      if (s !== null) {
        s.return = r.return, Oe = s;
        break;
      }
      Oe = r.return;
    }
  }
  function Dp(n) {
    for (; Oe !== null; ) {
      var r = Oe;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var s = r.return;
            try {
              ec(4, r);
            } catch (P) {
              hn(r, s, P);
            }
            break;
          case 1:
            var f = r.stateNode;
            if (typeof f.componentDidMount == "function") {
              var h = r.return;
              try {
                f.componentDidMount();
              } catch (P) {
                hn(r, h, P);
              }
            }
            var g = r.return;
            try {
              Rp(r);
            } catch (P) {
              hn(r, g, P);
            }
            break;
          case 5:
            var w = r.return;
            try {
              Rp(r);
            } catch (P) {
              hn(r, w, P);
            }
        }
      } catch (P) {
        hn(r, r.return, P);
      }
      if (r === n) {
        Oe = null;
        break;
      }
      var A = r.sibling;
      if (A !== null) {
        A.return = r.return, Oe = A;
        break;
      }
      Oe = r.return;
    }
  }
  var Vg = Math.ceil, Xo = ve.ReactCurrentDispatcher, $l = ve.ReactCurrentOwner, hr = ve.ReactCurrentBatchConfig, kt = 0, qn = null, Hn = null, vr = 0, wi = 0, Fs = zi(0), kn = 0, rc = null, ja = 0, js = 0, Nf = 0, ic = null, si = null, _p = 0, Bs = 1 / 0, bi = null, Hs = !1, Gl = null, qo = null, Pf = !1, fo = null, ac = 0, Zo = 0, Is = null, oc = -1, Mr = 0;
  function In() {
    return kt & 6 ? ct() : oc !== -1 ? oc : oc = ct();
  }
  function Ba(n) {
    return n.mode & 1 ? kt & 2 && vr !== 0 ? vr & -vr : Ng.transition !== null ? (Mr === 0 && (Mr = vs()), Mr) : (n = zt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Ts(n.type)), n) : 1;
  }
  function jr(n, r, s, f) {
    if (50 < Zo) throw Zo = 0, Is = null, Error(c(185));
    Za(n, s, f), (!(kt & 2) || n !== qn) && (n === qn && (!(kt & 2) && (js |= s), kn === 4 && va(n, vr)), ui(n, f), s === 1 && kt === 0 && !(r.mode & 1) && (Bs = ct() + 500, Ls && La()));
  }
  function ui(n, r) {
    var s = n.callbackNode;
    Cl(n, r);
    var f = la(n, n === qn ? vr : 0);
    if (f === 0) s !== null && cr(s), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = f & -f, n.callbackPriority !== r) {
      if (s != null && cr(s), r === 1) n.tag === 0 ? Bo(kp.bind(null, n)) : ef(kp.bind(null, n)), ks(function() {
        !(kt & 6) && La();
      }), s = null;
      else {
        switch (ys(f)) {
          case 1:
            s = aa;
            break;
          case 4:
            s = Sl;
            break;
          case 16:
            s = El;
            break;
          case 536870912:
            s = ds;
            break;
          default:
            s = El;
        }
        s = pm(s, Uf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = s;
    }
  }
  function Uf(n, r) {
    if (oc = -1, Mr = 0, kt & 6) throw Error(c(327));
    var s = n.callbackNode;
    if (Ys() && n.callbackNode !== s) return null;
    var f = la(n, n === qn ? vr : 0);
    if (f === 0) return null;
    if (f & 30 || f & n.expiredLanes || r) r = Vf(n, f);
    else {
      r = f;
      var h = kt;
      kt |= 2;
      var g = am();
      (qn !== n || vr !== r) && (bi = null, Bs = ct() + 500, po(n, r));
      do
        try {
          om();
          break;
        } catch (A) {
          im(n, A);
        }
      while (!0);
      ap(), Xo.current = g, kt = h, Hn !== null ? r = 0 : (qn = null, vr = 0, r = kn);
    }
    if (r !== 0) {
      if (r === 2 && (h = Oo(n), h !== 0 && (f = h, r = lc(n, h))), r === 1) throw s = rc, po(n, 0), va(n, f), ui(n, ct()), s;
      if (r === 6) va(n, f);
      else {
        if (h = n.current.alternate, !(f & 30) && !zg(h) && (r = Vf(n, f), r === 2 && (g = Oo(n), g !== 0 && (f = g, r = lc(n, g))), r === 1)) throw s = rc, po(n, 0), va(n, f), ui(n, ct()), s;
        switch (n.finishedWork = h, n.finishedLanes = f, r) {
          case 0:
          case 1:
            throw Error(c(345));
          case 2:
            Xl(n, si, bi);
            break;
          case 3:
            if (va(n, f), (f & 130023424) === f && (r = _p + 500 - ct(), 10 < r)) {
              if (la(n, 0) !== 0) break;
              if (h = n.suspendedLanes, (h & f) !== f) {
                In(), n.pingedLanes |= n.suspendedLanes & h;
                break;
              }
              n.timeoutHandle = qc(Xl.bind(null, n, si, bi), r);
              break;
            }
            Xl(n, si, bi);
            break;
          case 4:
            if (va(n, f), (f & 4194240) === f) break;
            for (r = n.eventTimes, h = -1; 0 < f; ) {
              var w = 31 - Nr(f);
              g = 1 << w, w = r[w], w > h && (h = w), f &= ~g;
            }
            if (f = h, f = ct() - f, f = (120 > f ? 120 : 480 > f ? 480 : 1080 > f ? 1080 : 1920 > f ? 1920 : 3e3 > f ? 3e3 : 4320 > f ? 4320 : 1960 * Vg(f / 1960)) - f, 10 < f) {
              n.timeoutHandle = qc(Xl.bind(null, n, si, bi), f);
              break;
            }
            Xl(n, si, bi);
            break;
          case 5:
            Xl(n, si, bi);
            break;
          default:
            throw Error(c(329));
        }
      }
    }
    return ui(n, ct()), n.callbackNode === s ? Uf.bind(null, n) : null;
  }
  function lc(n, r) {
    var s = ic;
    return n.current.memoizedState.isDehydrated && (po(n, r).flags |= 256), n = Vf(n, r), n !== 2 && (r = si, si = s, r !== null && Kl(r)), n;
  }
  function Kl(n) {
    si === null ? si = n : si.push.apply(si, n);
  }
  function zg(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var s = r.updateQueue;
        if (s !== null && (s = s.stores, s !== null)) for (var f = 0; f < s.length; f++) {
          var h = s[f], g = h.getSnapshot;
          h = h.value;
          try {
            if (!ca(g(), h)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (s = r.child, r.subtreeFlags & 16384 && s !== null) s.return = r, r = s;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function va(n, r) {
    for (r &= ~Nf, r &= ~js, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var s = 31 - Nr(r), f = 1 << s;
      n[s] = -1, r &= ~f;
    }
  }
  function kp(n) {
    if (kt & 6) throw Error(c(327));
    Ys();
    var r = la(n, 0);
    if (!(r & 1)) return ui(n, ct()), null;
    var s = Vf(n, r);
    if (n.tag !== 0 && s === 2) {
      var f = Oo(n);
      f !== 0 && (r = f, s = lc(n, f));
    }
    if (s === 1) throw s = rc, po(n, 0), va(n, r), ui(n, ct()), s;
    if (s === 6) throw Error(c(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Xl(n, si, bi), ui(n, ct()), null;
  }
  function Mp(n, r) {
    var s = kt;
    kt |= 1;
    try {
      return n(r);
    } finally {
      kt = s, kt === 0 && (Bs = ct() + 500, Ls && La());
    }
  }
  function Ql(n) {
    fo !== null && fo.tag === 0 && !(kt & 6) && Ys();
    var r = kt;
    kt |= 1;
    var s = hr.transition, f = zt;
    try {
      if (hr.transition = null, zt = 1, n) return n();
    } finally {
      zt = f, hr.transition = s, kt = r, !(kt & 6) && La();
    }
  }
  function Ap() {
    wi = Fs.current, sn(Fs);
  }
  function po(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var s = n.timeoutHandle;
    if (s !== -1 && (n.timeoutHandle = -1, ep(s)), Hn !== null) for (s = Hn.return; s !== null; ) {
      var f = s;
      switch (nf(f), f.tag) {
        case 1:
          f = f.type.childContextTypes, f != null && Os();
          break;
        case 3:
          Vl(), sn(Qn), sn(Tn), $e();
          break;
        case 5:
          lf(f);
          break;
        case 4:
          Vl();
          break;
        case 13:
          sn(Sn);
          break;
        case 19:
          sn(Sn);
          break;
        case 10:
          op(f.type._context);
          break;
        case 22:
        case 23:
          Ap();
      }
      s = s.return;
    }
    if (qn = n, Hn = n = Jo(n.current, null), vr = wi = r, kn = 0, rc = null, Nf = js = ja = 0, si = ic = null, Pl !== null) {
      for (r = 0; r < Pl.length; r++) if (s = Pl[r], f = s.interleaved, f !== null) {
        s.interleaved = null;
        var h = f.next, g = s.pending;
        if (g !== null) {
          var w = g.next;
          g.next = h, f.next = w;
        }
        s.pending = f;
      }
      Pl = null;
    }
    return n;
  }
  function im(n, r) {
    do {
      var s = Hn;
      try {
        if (ap(), Ct.current = Il, uf) {
          for (var f = jt.memoizedState; f !== null; ) {
            var h = f.queue;
            h !== null && (h.pending = null), f = f.next;
          }
          uf = !1;
        }
        if (Jt = 0, rr = Fn = jt = null, zu = !1, zl = 0, $l.current = null, s === null || s.return === null) {
          kn = 1, rc = r, Hn = null;
          break;
        }
        e: {
          var g = n, w = s.return, A = s, P = r;
          if (r = vr, A.flags |= 32768, P !== null && typeof P == "object" && typeof P.then == "function") {
            var K = P, ce = A, pe = ce.tag;
            if (!(ce.mode & 1) && (pe === 0 || pe === 11 || pe === 15)) {
              var ue = ce.alternate;
              ue ? (ce.updateQueue = ue.updateQueue, ce.memoizedState = ue.memoizedState, ce.lanes = ue.lanes) : (ce.updateQueue = null, ce.memoizedState = null);
            }
            var ke = Wv(w);
            if (ke !== null) {
              ke.flags &= -257, Qo(ke, w, A, g, r), ke.mode & 1 && Sp(g, K, r), r = ke, P = K;
              var Pe = r.updateQueue;
              if (Pe === null) {
                var Fe = /* @__PURE__ */ new Set();
                Fe.add(P), r.updateQueue = Fe;
              } else Pe.add(P);
              break e;
            } else {
              if (!(r & 1)) {
                Sp(g, K, r), Op();
                break e;
              }
              P = Error(c(426));
            }
          } else if (pn && A.mode & 1) {
            var Mn = Wv(w);
            if (Mn !== null) {
              !(Mn.flags & 65536) && (Mn.flags |= 256), Qo(Mn, w, A, g, r), lo(Yl(P, A));
              break e;
            }
          }
          g = P = Yl(P, A), kn !== 4 && (kn = 2), ic === null ? ic = [g] : ic.push(g), g = w;
          do {
            switch (g.tag) {
              case 3:
                g.flags |= 65536, r &= -r, g.lanes |= r;
                var B = Yv(g, P, r);
                Fv(g, B);
                break e;
              case 1:
                A = P;
                var z = g.type, W = g.stateNode;
                if (!(g.flags & 128) && (typeof z.getDerivedStateFromError == "function" || W !== null && typeof W.componentDidCatch == "function" && (qo === null || !qo.has(W)))) {
                  g.flags |= 65536, r &= -r, g.lanes |= r;
                  var fe = gp(g, A, r);
                  Fv(g, fe);
                  break e;
                }
            }
            g = g.return;
          } while (g !== null);
        }
        sm(s);
      } catch (Ue) {
        r = Ue, Hn === s && s !== null && (Hn = s = s.return);
        continue;
      }
      break;
    } while (!0);
  }
  function am() {
    var n = Xo.current;
    return Xo.current = Il, n === null ? Il : n;
  }
  function Op() {
    (kn === 0 || kn === 3 || kn === 2) && (kn = 4), qn === null || !(ja & 268435455) && !(js & 268435455) || va(qn, vr);
  }
  function Vf(n, r) {
    var s = kt;
    kt |= 2;
    var f = am();
    (qn !== n || vr !== r) && (bi = null, po(n, r));
    do
      try {
        Fg();
        break;
      } catch (h) {
        im(n, h);
      }
    while (!0);
    if (ap(), kt = s, Xo.current = f, Hn !== null) throw Error(c(261));
    return qn = null, vr = 0, kn;
  }
  function Fg() {
    for (; Hn !== null; ) lm(Hn);
  }
  function om() {
    for (; Hn !== null && !ra(); ) lm(Hn);
  }
  function lm(n) {
    var r = dm(n.alternate, n, wi);
    n.memoizedProps = n.pendingProps, r === null ? sm(n) : Hn = r, $l.current = null;
  }
  function sm(n) {
    var r = n;
    do {
      var s = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (s = Af(s, r), s !== null) {
          s.flags &= 32767, Hn = s;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          kn = 6, Hn = null;
          return;
        }
      } else if (s = Zv(s, r, wi), s !== null) {
        Hn = s;
        return;
      }
      if (r = r.sibling, r !== null) {
        Hn = r;
        return;
      }
      Hn = r = n;
    } while (r !== null);
    kn === 0 && (kn = 5);
  }
  function Xl(n, r, s) {
    var f = zt, h = hr.transition;
    try {
      hr.transition = null, zt = 1, jg(n, r, s, f);
    } finally {
      hr.transition = h, zt = f;
    }
    return null;
  }
  function jg(n, r, s, f) {
    do
      Ys();
    while (fo !== null);
    if (kt & 6) throw Error(c(327));
    s = n.finishedWork;
    var h = n.finishedLanes;
    if (s === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, s === n.current) throw Error(c(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var g = s.lanes | s.childLanes;
    if (Ld(n, g), n === qn && (Hn = qn = null, vr = 0), !(s.subtreeFlags & 2064) && !(s.flags & 2064) || Pf || (Pf = !0, pm(El, function() {
      return Ys(), null;
    })), g = (s.flags & 15990) !== 0, s.subtreeFlags & 15990 || g) {
      g = hr.transition, hr.transition = null;
      var w = zt;
      zt = 1;
      var A = kt;
      kt |= 4, $l.current = null, em(n, s), wp(s, n), ws(Ml), Pi = !!_u, Ml = _u = null, n.current = s, Ug(s), ia(), kt = A, zt = w, hr.transition = g;
    } else n.current = s;
    if (Pf && (Pf = !1, fo = n, ac = h), g = n.pendingLanes, g === 0 && (qo = null), hu(s.stateNode), ui(n, ct()), r !== null) for (f = n.onRecoverableError, s = 0; s < r.length; s++) h = r[s], f(h.value, { componentStack: h.stack, digest: h.digest });
    if (Hs) throw Hs = !1, n = Gl, Gl = null, n;
    return ac & 1 && n.tag !== 0 && Ys(), g = n.pendingLanes, g & 1 ? n === Is ? Zo++ : (Zo = 0, Is = n) : Zo = 0, La(), null;
  }
  function Ys() {
    if (fo !== null) {
      var n = ys(ac), r = hr.transition, s = zt;
      try {
        if (hr.transition = null, zt = 16 > n ? 16 : n, fo === null) var f = !1;
        else {
          if (n = fo, fo = null, ac = 0, kt & 6) throw Error(c(331));
          var h = kt;
          for (kt |= 4, Oe = n.current; Oe !== null; ) {
            var g = Oe, w = g.child;
            if (Oe.flags & 16) {
              var A = g.deletions;
              if (A !== null) {
                for (var P = 0; P < A.length; P++) {
                  var K = A[P];
                  for (Oe = K; Oe !== null; ) {
                    var ce = Oe;
                    switch (ce.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ju(8, ce, g);
                    }
                    var pe = ce.child;
                    if (pe !== null) pe.return = ce, Oe = pe;
                    else for (; Oe !== null; ) {
                      ce = Oe;
                      var ue = ce.sibling, ke = ce.return;
                      if (Lf(ce), ce === K) {
                        Oe = null;
                        break;
                      }
                      if (ue !== null) {
                        ue.return = ke, Oe = ue;
                        break;
                      }
                      Oe = ke;
                    }
                  }
                }
                var Pe = g.alternate;
                if (Pe !== null) {
                  var Fe = Pe.child;
                  if (Fe !== null) {
                    Pe.child = null;
                    do {
                      var Mn = Fe.sibling;
                      Fe.sibling = null, Fe = Mn;
                    } while (Fe !== null);
                  }
                }
                Oe = g;
              }
            }
            if (g.subtreeFlags & 2064 && w !== null) w.return = g, Oe = w;
            else e: for (; Oe !== null; ) {
              if (g = Oe, g.flags & 2048) switch (g.tag) {
                case 0:
                case 11:
                case 15:
                  Ju(9, g, g.return);
              }
              var B = g.sibling;
              if (B !== null) {
                B.return = g.return, Oe = B;
                break e;
              }
              Oe = g.return;
            }
          }
          var z = n.current;
          for (Oe = z; Oe !== null; ) {
            w = Oe;
            var W = w.child;
            if (w.subtreeFlags & 2064 && W !== null) W.return = w, Oe = W;
            else e: for (w = z; Oe !== null; ) {
              if (A = Oe, A.flags & 2048) try {
                switch (A.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ec(9, A);
                }
              } catch (Ue) {
                hn(A, A.return, Ue);
              }
              if (A === w) {
                Oe = null;
                break e;
              }
              var fe = A.sibling;
              if (fe !== null) {
                fe.return = A.return, Oe = fe;
                break e;
              }
              Oe = A.return;
            }
          }
          if (kt = h, La(), Zr && typeof Zr.onPostCommitFiberRoot == "function") try {
            Zr.onPostCommitFiberRoot(Mo, n);
          } catch {
          }
          f = !0;
        }
        return f;
      } finally {
        zt = s, hr.transition = r;
      }
    }
    return !1;
  }
  function um(n, r, s) {
    r = Yl(s, r), r = Yv(n, r, 1), n = $o(n, r, 1), r = In(), n !== null && (Za(n, 1, r), ui(n, r));
  }
  function hn(n, r, s) {
    if (n.tag === 3) um(n, n, s);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        um(r, n, s);
        break;
      } else if (r.tag === 1) {
        var f = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && (qo === null || !qo.has(f))) {
          n = Yl(s, n), n = gp(r, n, 1), r = $o(r, n, 1), n = In(), r !== null && (Za(r, 1, n), ui(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Bg(n, r, s) {
    var f = n.pingCache;
    f !== null && f.delete(r), r = In(), n.pingedLanes |= n.suspendedLanes & s, qn === n && (vr & s) === s && (kn === 4 || kn === 3 && (vr & 130023424) === vr && 500 > ct() - _p ? po(n, 0) : Nf |= s), ui(n, r);
  }
  function cm(n, r) {
    r === 0 && (n.mode & 1 ? (r = Ei, Ei <<= 1, !(Ei & 130023424) && (Ei = 4194304)) : r = 1);
    var s = In();
    n = xi(n, r), n !== null && (Za(n, r, s), ui(n, s));
  }
  function Hg(n) {
    var r = n.memoizedState, s = 0;
    r !== null && (s = r.retryLane), cm(n, s);
  }
  function fm(n, r) {
    var s = 0;
    switch (n.tag) {
      case 13:
        var f = n.stateNode, h = n.memoizedState;
        h !== null && (s = h.retryLane);
        break;
      case 19:
        f = n.stateNode;
        break;
      default:
        throw Error(c(314));
    }
    f !== null && f.delete(r), cm(n, s);
  }
  var dm;
  dm = function(n, r, s) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Qn.current) jn = !0;
    else {
      if (!(n.lanes & s) && !(r.flags & 128)) return jn = !1, Xu(n, r, s);
      jn = !!(n.flags & 131072);
    }
    else jn = !1, pn && r.flags & 1048576 && Pv(r, oo, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var f = r.type;
        Hi(n, r), n = r.pendingProps;
        var h = ti(r, Tn.current);
        gn(r, s), h = Go(null, r, f, n, h, s);
        var g = da();
        return r.flags |= 1, typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Vn(f) ? (g = !0, nr(r)) : g = !1, r.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, cp(r), h.updater = bf, r.stateNode = h, h._reactInternals = r, Wu(r, f, n, s), r = Ku(null, r, f, !0, g, s)) : (r.tag = 0, pn && g && tf(r), pr(null, r, h, s), r = r.child), r;
      case 16:
        f = r.elementType;
        e: {
          switch (Hi(n, r), n = r.pendingProps, h = f._init, f = h(f._payload), r.type = f, h = r.tag = Yg(f), n = pa(f, n), h) {
            case 0:
              r = $v(null, r, f, n, s);
              break e;
            case 1:
              r = Gv(null, r, f, n, s);
              break e;
            case 11:
              r = oi(null, r, f, n, s);
              break e;
            case 14:
              r = Wl(null, r, f, pa(f.type, n), s);
              break e;
          }
          throw Error(c(
            306,
            f,
            ""
          ));
        }
        return r;
      case 0:
        return f = r.type, h = r.pendingProps, h = r.elementType === f ? h : pa(f, h), $v(n, r, f, h, s);
      case 1:
        return f = r.type, h = r.pendingProps, h = r.elementType === f ? h : pa(f, h), Gv(n, r, f, h, s);
      case 3:
        e: {
          if (Vs(r), n === null) throw Error(c(387));
          f = r.pendingProps, g = r.memoizedState, h = g.element, zv(n, r), Lu(r, f, null, s);
          var w = r.memoizedState;
          if (f = w.element, g.isDehydrated) if (g = { element: f, isDehydrated: !1, cache: w.cache, pendingSuspenseBoundaries: w.pendingSuspenseBoundaries, transitions: w.transitions }, r.updateQueue.baseState = g, r.memoizedState = g, r.flags & 256) {
            h = Yl(Error(c(423)), r), r = Kv(n, r, f, s, h);
            break e;
          } else if (f !== h) {
            h = Yl(Error(c(424)), r), r = Kv(n, r, f, s, h);
            break e;
          } else for (ri = Ma(r.stateNode.containerInfo.firstChild), ni = r, pn = !0, ji = null, s = be(r, null, f, s), r.child = s; s; ) s.flags = s.flags & -3 | 4096, s = s.sibling;
          else {
            if (Wo(), f === h) {
              r = Ii(n, r, s);
              break e;
            }
            pr(n, r, f, s);
          }
          r = r.child;
        }
        return r;
      case 5:
        return jv(r), n === null && rp(r), f = r.type, h = r.pendingProps, g = n !== null ? n.memoizedProps : null, w = h.children, Xc(f, h) ? w = null : g !== null && Xc(f, g) && (r.flags |= 32), Ep(n, r), pr(n, r, w, s), r.child;
      case 6:
        return n === null && rp(r), null;
      case 13:
        return Mf(n, r, s);
      case 4:
        return dp(r, r.stateNode.containerInfo), f = r.pendingProps, n === null ? r.child = bn(r, null, f, s) : pr(n, r, f, s), r.child;
      case 11:
        return f = r.type, h = r.pendingProps, h = r.elementType === f ? h : pa(f, h), oi(n, r, f, h, s);
      case 7:
        return pr(n, r, r.pendingProps, s), r.child;
      case 8:
        return pr(n, r, r.pendingProps.children, s), r.child;
      case 12:
        return pr(n, r, r.pendingProps.children, s), r.child;
      case 10:
        e: {
          if (f = r.type._context, h = r.pendingProps, g = r.memoizedProps, w = h.value, Ye(Ti, f._currentValue), f._currentValue = w, g !== null) if (ca(g.value, w)) {
            if (g.children === h.children && !Qn.current) {
              r = Ii(n, r, s);
              break e;
            }
          } else for (g = r.child, g !== null && (g.return = r); g !== null; ) {
            var A = g.dependencies;
            if (A !== null) {
              w = g.child;
              for (var P = A.firstContext; P !== null; ) {
                if (P.context === f) {
                  if (g.tag === 1) {
                    P = so(-1, s & -s), P.tag = 2;
                    var K = g.updateQueue;
                    if (K !== null) {
                      K = K.shared;
                      var ce = K.pending;
                      ce === null ? P.next = P : (P.next = ce.next, ce.next = P), K.pending = P;
                    }
                  }
                  g.lanes |= s, P = g.alternate, P !== null && (P.lanes |= s), lp(
                    g.return,
                    s,
                    r
                  ), A.lanes |= s;
                  break;
                }
                P = P.next;
              }
            } else if (g.tag === 10) w = g.type === r.type ? null : g.child;
            else if (g.tag === 18) {
              if (w = g.return, w === null) throw Error(c(341));
              w.lanes |= s, A = w.alternate, A !== null && (A.lanes |= s), lp(w, s, r), w = g.sibling;
            } else w = g.child;
            if (w !== null) w.return = g;
            else for (w = g; w !== null; ) {
              if (w === r) {
                w = null;
                break;
              }
              if (g = w.sibling, g !== null) {
                g.return = w.return, w = g;
                break;
              }
              w = w.return;
            }
            g = w;
          }
          pr(n, r, h.children, s), r = r.child;
        }
        return r;
      case 9:
        return h = r.type, f = r.pendingProps.children, gn(r, s), h = Bi(h), f = f(h), r.flags |= 1, pr(n, r, f, s), r.child;
      case 14:
        return f = r.type, h = pa(f, r.pendingProps), h = pa(f.type, h), Wl(n, r, f, h, s);
      case 15:
        return ft(n, r, r.type, r.pendingProps, s);
      case 17:
        return f = r.type, h = r.pendingProps, h = r.elementType === f ? h : pa(f, h), Hi(n, r), r.tag = 1, Vn(f) ? (n = !0, nr(r)) : n = !1, gn(r, s), Df(r, f, h), Wu(r, f, h, s), Ku(null, r, f, !0, n, s);
      case 19:
        return Va(n, r, s);
      case 22:
        return Gu(n, r, s);
    }
    throw Error(c(156, r.tag));
  };
  function pm(n, r) {
    return cn(n, r);
  }
  function Ig(n, r, s, f) {
    this.tag = n, this.key = s, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = f, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Wi(n, r, s, f) {
    return new Ig(n, r, s, f);
  }
  function Lp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Yg(n) {
    if (typeof n == "function") return Lp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Tt) return 11;
      if (n === Lt) return 14;
    }
    return 2;
  }
  function Jo(n, r) {
    var s = n.alternate;
    return s === null ? (s = Wi(n.tag, r, n.key, n.mode), s.elementType = n.elementType, s.type = n.type, s.stateNode = n.stateNode, s.alternate = n, n.alternate = s) : (s.pendingProps = r, s.type = n.type, s.flags = 0, s.subtreeFlags = 0, s.deletions = null), s.flags = n.flags & 14680064, s.childLanes = n.childLanes, s.lanes = n.lanes, s.child = n.child, s.memoizedProps = n.memoizedProps, s.memoizedState = n.memoizedState, s.updateQueue = n.updateQueue, r = n.dependencies, s.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, s.sibling = n.sibling, s.index = n.index, s.ref = n.ref, s;
  }
  function sc(n, r, s, f, h, g) {
    var w = 2;
    if (f = n, typeof n == "function") Lp(n) && (w = 1);
    else if (typeof n == "string") w = 5;
    else e: switch (n) {
      case ge:
        return ho(s.children, h, g, r);
      case ye:
        w = 8, h |= 8;
        break;
      case je:
        return n = Wi(12, s, r, h | 2), n.elementType = je, n.lanes = g, n;
      case Ie:
        return n = Wi(13, s, r, h), n.elementType = Ie, n.lanes = g, n;
      case Ot:
        return n = Wi(19, s, r, h), n.elementType = Ot, n.lanes = g, n;
      case xe:
        return el(s, h, g, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Ne:
            w = 10;
            break e;
          case wt:
            w = 9;
            break e;
          case Tt:
            w = 11;
            break e;
          case Lt:
            w = 14;
            break e;
          case Ut:
            w = 16, f = null;
            break e;
        }
        throw Error(c(130, n == null ? n : typeof n, ""));
    }
    return r = Wi(w, s, r, h), r.elementType = n, r.type = f, r.lanes = g, r;
  }
  function ho(n, r, s, f) {
    return n = Wi(7, n, f, r), n.lanes = s, n;
  }
  function el(n, r, s, f) {
    return n = Wi(22, n, f, r), n.elementType = xe, n.lanes = s, n.stateNode = { isHidden: !1 }, n;
  }
  function Np(n, r, s) {
    return n = Wi(6, n, null, r), n.lanes = s, n;
  }
  function zf(n, r, s) {
    return r = Wi(4, n.children !== null ? n.children : [], n.key, r), r.lanes = s, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function hm(n, r, s, f, h) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ms(0), this.expirationTimes = ms(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ms(0), this.identifierPrefix = f, this.onRecoverableError = h, this.mutableSourceEagerHydrationData = null;
  }
  function Ff(n, r, s, f, h, g, w, A, P) {
    return n = new hm(n, r, s, A, P), r === 1 ? (r = 1, g === !0 && (r |= 8)) : r = 0, g = Wi(3, null, null, r), n.current = g, g.stateNode = n, g.memoizedState = { element: f, isDehydrated: s, cache: null, transitions: null, pendingSuspenseBoundaries: null }, cp(g), n;
  }
  function Wg(n, r, s) {
    var f = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ce, key: f == null ? null : "" + f, children: n, containerInfo: r, implementation: s };
  }
  function Pp(n) {
    if (!n) return Dr;
    n = n._reactInternals;
    e: {
      if (ut(n) !== n || n.tag !== 1) throw Error(c(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Vn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(c(171));
    }
    if (n.tag === 1) {
      var s = n.type;
      if (Vn(s)) return Au(n, s, r);
    }
    return r;
  }
  function vm(n, r, s, f, h, g, w, A, P) {
    return n = Ff(s, f, !0, n, h, g, w, A, P), n.context = Pp(null), s = n.current, f = In(), h = Ba(s), g = so(f, h), g.callback = r ?? null, $o(s, g, h), n.current.lanes = h, Za(n, h, f), ui(n, f), n;
  }
  function jf(n, r, s, f) {
    var h = r.current, g = In(), w = Ba(h);
    return s = Pp(s), r.context === null ? r.context = s : r.pendingContext = s, r = so(g, w), r.payload = { element: n }, f = f === void 0 ? null : f, f !== null && (r.callback = f), n = $o(h, r, w), n !== null && (jr(n, h, w, g), of(n, h, w)), w;
  }
  function Bf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Up(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var s = n.retryLane;
      n.retryLane = s !== 0 && s < r ? s : r;
    }
  }
  function Hf(n, r) {
    Up(n, r), (n = n.alternate) && Up(n, r);
  }
  function mm() {
    return null;
  }
  var ql = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Vp(n) {
    this._internalRoot = n;
  }
  If.prototype.render = Vp.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(c(409));
    jf(n, r, null, null);
  }, If.prototype.unmount = Vp.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ql(function() {
        jf(null, n, null, null);
      }), r[io] = null;
    }
  };
  function If(n) {
    this._internalRoot = n;
  }
  If.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = at();
      n = { blockedOn: null, target: n, priority: r };
      for (var s = 0; s < Kn.length && r !== 0 && r < Kn[s].priority; s++) ;
      Kn.splice(s, 0, n), s === 0 && yu(n);
    }
  };
  function zp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Yf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function ym() {
  }
  function $g(n, r, s, f, h) {
    if (h) {
      if (typeof f == "function") {
        var g = f;
        f = function() {
          var K = Bf(w);
          g.call(K);
        };
      }
      var w = vm(r, f, n, 0, null, !1, !1, "", ym);
      return n._reactRootContainer = w, n[io] = w.current, Ds(n.nodeType === 8 ? n.parentNode : n), Ql(), w;
    }
    for (; h = n.lastChild; ) n.removeChild(h);
    if (typeof f == "function") {
      var A = f;
      f = function() {
        var K = Bf(P);
        A.call(K);
      };
    }
    var P = Ff(n, 0, !1, null, null, !1, !1, "", ym);
    return n._reactRootContainer = P, n[io] = P.current, Ds(n.nodeType === 8 ? n.parentNode : n), Ql(function() {
      jf(r, P, s, f);
    }), P;
  }
  function uc(n, r, s, f, h) {
    var g = s._reactRootContainer;
    if (g) {
      var w = g;
      if (typeof h == "function") {
        var A = h;
        h = function() {
          var P = Bf(w);
          A.call(P);
        };
      }
      jf(r, w, n, h);
    } else w = $g(s, r, n, h, f);
    return Bf(w);
  }
  Nt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var s = oa(r.pendingLanes);
          s !== 0 && (Ja(r, s | 1), ui(r, ct()), !(kt & 6) && (Bs = ct() + 500, La()));
        }
        break;
      case 13:
        Ql(function() {
          var f = xi(n, 1);
          if (f !== null) {
            var h = In();
            jr(f, n, 1, h);
          }
        }), Hf(n, 1);
    }
  }, vu = function(n) {
    if (n.tag === 13) {
      var r = xi(n, 134217728);
      if (r !== null) {
        var s = In();
        jr(r, n, 134217728, s);
      }
      Hf(n, 134217728);
    }
  }, wa = function(n) {
    if (n.tag === 13) {
      var r = Ba(n), s = xi(n, r);
      if (s !== null) {
        var f = In();
        jr(s, n, r, f);
      }
      Hf(n, r);
    }
  }, at = function() {
    return zt;
  }, gs = function(n, r) {
    var s = zt;
    try {
      return zt = n, r();
    } finally {
      zt = s;
    }
  }, Qt = function(n, r, s) {
    switch (r) {
      case "input":
        if (qr(n, s), r = s.name, s.type === "radio" && r != null) {
          for (s = n; s.parentNode; ) s = s.parentNode;
          for (s = s.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < s.length; r++) {
            var f = s[r];
            if (f !== n && f.form === n.form) {
              var h = yn(f);
              if (!h) throw Error(c(90));
              Ar(f), qr(f, h);
            }
          }
        }
        break;
      case "textarea":
        ea(n, s);
        break;
      case "select":
        r = s.value, r != null && Rn(n, !!s.multiple, r, !1);
    }
  }, yl = Mp, Do = Ql;
  var Gg = { usingClientEntryPoint: !1, Events: [We, fa, yn, qa, ml, Mp] }, cc = { findFiberByHostInstance: Al, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, gm = { bundleType: cc.bundleType, version: cc.version, rendererPackageName: cc.rendererPackageName, rendererConfig: cc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ve.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = wn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: cc.findFiberByHostInstance || mm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var tl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!tl.isDisabled && tl.supportsFiber) try {
      Mo = tl.inject(gm), Zr = tl;
    } catch {
    }
  }
  return qi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gg, qi.createPortal = function(n, r) {
    var s = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!zp(r)) throw Error(c(200));
    return Wg(n, r, null, s);
  }, qi.createRoot = function(n, r) {
    if (!zp(n)) throw Error(c(299));
    var s = !1, f = "", h = ql;
    return r != null && (r.unstable_strictMode === !0 && (s = !0), r.identifierPrefix !== void 0 && (f = r.identifierPrefix), r.onRecoverableError !== void 0 && (h = r.onRecoverableError)), r = Ff(n, 1, !1, null, null, s, !1, f, h), n[io] = r.current, Ds(n.nodeType === 8 ? n.parentNode : n), new Vp(r);
  }, qi.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(c(188)) : (n = Object.keys(n).join(","), Error(c(268, n)));
    return n = wn(r), n = n === null ? null : n.stateNode, n;
  }, qi.flushSync = function(n) {
    return Ql(n);
  }, qi.hydrate = function(n, r, s) {
    if (!Yf(r)) throw Error(c(200));
    return uc(null, n, r, !0, s);
  }, qi.hydrateRoot = function(n, r, s) {
    if (!zp(n)) throw Error(c(405));
    var f = s != null && s.hydratedSources || null, h = !1, g = "", w = ql;
    if (s != null && (s.unstable_strictMode === !0 && (h = !0), s.identifierPrefix !== void 0 && (g = s.identifierPrefix), s.onRecoverableError !== void 0 && (w = s.onRecoverableError)), r = vm(r, null, n, 1, s ?? null, h, !1, g, w), n[io] = r.current, Ds(n), f) for (n = 0; n < f.length; n++) s = f[n], h = s._getVersion, h = h(s._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [s, h] : r.mutableSourceEagerHydrationData.push(
      s,
      h
    );
    return new If(r);
  }, qi.render = function(n, r, s) {
    if (!Yf(r)) throw Error(c(200));
    return uc(null, n, r, !1, s);
  }, qi.unmountComponentAtNode = function(n) {
    if (!Yf(n)) throw Error(c(40));
    return n._reactRootContainer ? (Ql(function() {
      uc(null, null, n, !1, function() {
        n._reactRootContainer = null, n[io] = null;
      });
    }), !0) : !1;
  }, qi.unstable_batchedUpdates = Mp, qi.unstable_renderSubtreeIntoContainer = function(n, r, s, f) {
    if (!Yf(s)) throw Error(c(200));
    if (n == null || n._reactInternals === void 0) throw Error(c(38));
    return uc(n, r, s, !1, f);
  }, qi.version = "18.3.1-next-f1338f8080-20240426", qi;
}
var Zi = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jw;
function OL() {
  return jw || (jw = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var o = Ge, l = l1(), c = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, p = !1;
    function y(e) {
      p = e;
    }
    function T(e) {
      if (!p) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
          i[a - 1] = arguments[a];
        E("warn", e, i);
      }
    }
    function v(e) {
      if (!p) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
          i[a - 1] = arguments[a];
        E("error", e, i);
      }
    }
    function E(e, t, i) {
      {
        var a = c.ReactDebugCurrentFrame, u = a.getStackAddendum();
        u !== "" && (t += "%s", i = i.concat([u]));
        var d = i.map(function(m) {
          return String(m);
        });
        d.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var R = 0, b = 1, k = 2, _ = 3, O = 4, U = 5, H = 6, X = 7, Z = 8, ne = 9, ae = 10, oe = 11, ve = 12, J = 13, Ce = 14, ge = 15, ye = 16, je = 17, Ne = 18, wt = 19, Tt = 21, Ie = 22, Ot = 23, Lt = 24, Ut = 25, xe = !0, de = !1, ze = !1, Se = !1, j = !1, re = !0, tt = !0, Je = !0, gt = !0, ht = /* @__PURE__ */ new Set(), dt = {}, vt = {};
    function St(e, t) {
      Gt(e, t), Gt(e + "Capture", t);
    }
    function Gt(e, t) {
      dt[e] && v("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), dt[e] = t;
      {
        var i = e.toLowerCase();
        vt[i] = e, e === "onDoubleClick" && (vt.ondblclick = e);
      }
      for (var a = 0; a < t.length; a++)
        ht.add(t[a]);
    }
    var Nn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ar = Object.prototype.hasOwnProperty;
    function xn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, i = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function sr(e) {
      try {
        return Wn(e), !1;
      } catch {
        return !0;
      }
    }
    function Wn(e) {
      return "" + e;
    }
    function $n(e, t) {
      if (sr(e))
        return v("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, xn(e)), Wn(e);
    }
    function qr(e) {
      if (sr(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", xn(e)), Wn(e);
    }
    function Ea(e, t) {
      if (sr(e))
        return v("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, xn(e)), Wn(e);
    }
    function yi(e, t) {
      if (sr(e))
        return v("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, xn(e)), Wn(e);
    }
    function er(e) {
      if (sr(e))
        return v("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", xn(e)), Wn(e);
    }
    function Rn(e) {
      if (sr(e))
        return v("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", xn(e)), Wn(e);
    }
    var Gn = 0, Rr = 1, ea = 2, Pn = 3, wr = 4, gi = 5, ta = 6, Ca = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ee = Ca + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Be = new RegExp("^[" + Ca + "][" + Ee + "]*$"), mt = {}, Yt = {};
    function rn(e) {
      return Ar.call(Yt, e) ? !0 : Ar.call(mt, e) ? !1 : Be.test(e) ? (Yt[e] = !0, !0) : (mt[e] = !0, v("Invalid attribute name: `%s`", e), !1);
    }
    function vn(e, t, i) {
      return t !== null ? t.type === Gn : i ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function un(e, t, i, a) {
      if (i !== null && i.type === Gn)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (a)
            return !1;
          if (i !== null)
            return !i.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function tr(e, t, i, a) {
      if (t === null || typeof t > "u" || un(e, t, i, a))
        return !0;
      if (a)
        return !1;
      if (i !== null)
        switch (i.type) {
          case Pn:
            return !t;
          case wr:
            return t === !1;
          case gi:
            return isNaN(t);
          case ta:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function an(e) {
      return Qt.hasOwnProperty(e) ? Qt[e] : null;
    }
    function Kt(e, t, i, a, u, d, m) {
      this.acceptsBooleans = t === ea || t === Pn || t === wr, this.attributeName = a, this.attributeNamespace = u, this.mustUseProperty = i, this.propertyName = e, this.type = t, this.sanitizeURL = d, this.removeEmptyString = m;
    }
    var Qt = {}, Si = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Si.forEach(function(e) {
      Qt[e] = new Kt(
        e,
        Gn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], i = e[1];
      Qt[t] = new Kt(
        t,
        Rr,
        !1,
        // mustUseProperty
        i,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Qt[e] = new Kt(
        e,
        ea,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Qt[e] = new Kt(
        e,
        ea,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Qt[e] = new Kt(
        e,
        Pn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Qt[e] = new Kt(
        e,
        Pn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Qt[e] = new Kt(
        e,
        wr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Qt[e] = new Kt(
        e,
        ta,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Qt[e] = new Kt(
        e,
        gi,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var br = /[\-\:]([a-z])/g, Oi = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(br, Oi);
      Qt[t] = new Kt(
        t,
        Rr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(br, Oi);
      Qt[t] = new Kt(
        t,
        Rr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(br, Oi);
      Qt[t] = new Kt(
        t,
        Rr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Qt[e] = new Kt(
        e,
        Rr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var qa = "xlinkHref";
    Qt[qa] = new Kt(
      "xlinkHref",
      Rr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Qt[e] = new Kt(
        e,
        Rr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var ml = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, yl = !1;
    function Do(e) {
      !yl && ml.test(e) && (yl = !0, v("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function _o(e, t, i, a) {
      if (a.mustUseProperty) {
        var u = a.propertyName;
        return e[u];
      } else {
        $n(i, t), a.sanitizeURL && Do("" + i);
        var d = a.attributeName, m = null;
        if (a.type === wr) {
          if (e.hasAttribute(d)) {
            var S = e.getAttribute(d);
            return S === "" ? !0 : tr(t, i, a, !1) ? S : S === "" + i ? i : S;
          }
        } else if (e.hasAttribute(d)) {
          if (tr(t, i, a, !1))
            return e.getAttribute(d);
          if (a.type === Pn)
            return i;
          m = e.getAttribute(d);
        }
        return tr(t, i, a, !1) ? m === null ? i : m : m === "" + i ? i : m;
      }
    }
    function gl(e, t, i, a) {
      {
        if (!rn(t))
          return;
        if (!e.hasAttribute(t))
          return i === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return $n(i, t), u === "" + i ? i : u;
      }
    }
    function Or(e, t, i, a) {
      var u = an(t);
      if (!vn(t, u, a)) {
        if (tr(t, i, u, a) && (i = null), a || u === null) {
          if (rn(t)) {
            var d = t;
            i === null ? e.removeAttribute(d) : ($n(i, t), e.setAttribute(d, "" + i));
          }
          return;
        }
        var m = u.mustUseProperty;
        if (m) {
          var S = u.propertyName;
          if (i === null) {
            var C = u.type;
            e[S] = C === Pn ? !1 : "";
          } else
            e[S] = i;
          return;
        }
        var D = u.attributeName, M = u.attributeNamespace;
        if (i === null)
          e.removeAttribute(D);
        else {
          var F = u.type, V;
          F === Pn || F === wr && i === !0 ? V = "" : ($n(i, D), V = "" + i, u.sanitizeURL && Do(V.toString())), M ? e.setAttributeNS(M, D, V) : e.setAttribute(D, V);
        }
      }
    }
    var Lr = Symbol.for("react.element"), ur = Symbol.for("react.portal"), Ta = Symbol.for("react.fragment"), na = Symbol.for("react.strict_mode"), xa = Symbol.for("react.profiler"), Ra = Symbol.for("react.provider"), N = Symbol.for("react.context"), le = Symbol.for("react.forward_ref"), we = Symbol.for("react.suspense"), Le = Symbol.for("react.suspense_list"), ut = Symbol.for("react.memo"), ot = Symbol.for("react.lazy"), xt = Symbol.for("react.scope"), Et = Symbol.for("react.debug_trace_mode"), wn = Symbol.for("react.offscreen"), on = Symbol.for("react.legacy_hidden"), cn = Symbol.for("react.cache"), cr = Symbol.for("react.tracing_marker"), ra = Symbol.iterator, ia = "@@iterator";
    function ct(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = ra && e[ra] || e[ia];
      return typeof t == "function" ? t : null;
    }
    var pt = Object.assign, aa = 0, Sl, El, ko, ds, Mo, Zr, hu;
    function Nr() {
    }
    Nr.__reactDisabledLog = !0;
    function Pc() {
      {
        if (aa === 0) {
          Sl = console.log, El = console.info, ko = console.warn, ds = console.error, Mo = console.group, Zr = console.groupCollapsed, hu = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Nr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        aa++;
      }
    }
    function Uc() {
      {
        if (aa--, aa === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: pt({}, e, {
              value: Sl
            }),
            info: pt({}, e, {
              value: El
            }),
            warn: pt({}, e, {
              value: ko
            }),
            error: pt({}, e, {
              value: ds
            }),
            group: pt({}, e, {
              value: Mo
            }),
            groupCollapsed: pt({}, e, {
              value: Zr
            }),
            groupEnd: pt({}, e, {
              value: hu
            })
          });
        }
        aa < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ps = c.ReactCurrentDispatcher, Ao;
    function Ei(e, t, i) {
      {
        if (Ao === void 0)
          try {
            throw Error();
          } catch (u) {
            var a = u.stack.trim().match(/\n( *(at )?)/);
            Ao = a && a[1] || "";
          }
        return `
` + Ao + e;
      }
    }
    var oa = !1, la;
    {
      var hs = typeof WeakMap == "function" ? WeakMap : Map;
      la = new hs();
    }
    function Cl(e, t) {
      if (!e || oa)
        return "";
      {
        var i = la.get(e);
        if (i !== void 0)
          return i;
      }
      var a;
      oa = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = ps.current, ps.current = null, Pc();
      try {
        if (t) {
          var m = function() {
            throw Error();
          };
          if (Object.defineProperty(m.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(m, []);
            } catch (Q) {
              a = Q;
            }
            Reflect.construct(e, [], m);
          } else {
            try {
              m.call();
            } catch (Q) {
              a = Q;
            }
            e.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Q) {
            a = Q;
          }
          e();
        }
      } catch (Q) {
        if (Q && a && typeof Q.stack == "string") {
          for (var S = Q.stack.split(`
`), C = a.stack.split(`
`), D = S.length - 1, M = C.length - 1; D >= 1 && M >= 0 && S[D] !== C[M]; )
            M--;
          for (; D >= 1 && M >= 0; D--, M--)
            if (S[D] !== C[M]) {
              if (D !== 1 || M !== 1)
                do
                  if (D--, M--, M < 0 || S[D] !== C[M]) {
                    var F = `
` + S[D].replace(" at new ", " at ");
                    return e.displayName && F.includes("<anonymous>") && (F = F.replace("<anonymous>", e.displayName)), typeof e == "function" && la.set(e, F), F;
                  }
                while (D >= 1 && M >= 0);
              break;
            }
        }
      } finally {
        oa = !1, ps.current = d, Uc(), Error.prepareStackTrace = u;
      }
      var V = e ? e.displayName || e.name : "", $ = V ? Ei(V) : "";
      return typeof e == "function" && la.set(e, $), $;
    }
    function Oo(e, t, i) {
      return Cl(e, !0);
    }
    function vs(e, t, i) {
      return Cl(e, !1);
    }
    function ms(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Za(e, t, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Cl(e, ms(e));
      if (typeof e == "string")
        return Ei(e);
      switch (e) {
        case we:
          return Ei("Suspense");
        case Le:
          return Ei("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case le:
            return vs(e.render);
          case ut:
            return Za(e.type, t, i);
          case ot: {
            var a = e, u = a._payload, d = a._init;
            try {
              return Za(d(u), t, i);
            } catch {
            }
          }
        }
      return "";
    }
    function Ld(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case U:
          return Ei(e.type);
        case ye:
          return Ei("Lazy");
        case J:
          return Ei("Suspense");
        case wt:
          return Ei("SuspenseList");
        case R:
        case k:
        case ge:
          return vs(e.type);
        case oe:
          return vs(e.type.render);
        case b:
          return Oo(e.type);
        default:
          return "";
      }
    }
    function Ja(e) {
      try {
        var t = "", i = e;
        do
          t += Ld(i), i = i.return;
        while (i);
        return t;
      } catch (a) {
        return `
Error generating stack: ` + a.message + `
` + a.stack;
      }
    }
    function zt(e, t, i) {
      var a = e.displayName;
      if (a)
        return a;
      var u = t.displayName || t.name || "";
      return u !== "" ? i + "(" + u + ")" : i;
    }
    function ys(e) {
      return e.displayName || "Context";
    }
    function Nt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Ta:
          return "Fragment";
        case ur:
          return "Portal";
        case xa:
          return "Profiler";
        case na:
          return "StrictMode";
        case we:
          return "Suspense";
        case Le:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case N:
            var t = e;
            return ys(t) + ".Consumer";
          case Ra:
            var i = e;
            return ys(i._context) + ".Provider";
          case le:
            return zt(e, e.render, "ForwardRef");
          case ut:
            var a = e.displayName || null;
            return a !== null ? a : Nt(e.type) || "Memo";
          case ot: {
            var u = e, d = u._payload, m = u._init;
            try {
              return Nt(m(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function vu(e, t, i) {
      var a = t.displayName || t.name || "";
      return e.displayName || (a !== "" ? i + "(" + a + ")" : i);
    }
    function wa(e) {
      return e.displayName || "Context";
    }
    function at(e) {
      var t = e.tag, i = e.type;
      switch (t) {
        case Lt:
          return "Cache";
        case ne:
          var a = i;
          return wa(a) + ".Consumer";
        case ae:
          var u = i;
          return wa(u._context) + ".Provider";
        case Ne:
          return "DehydratedFragment";
        case oe:
          return vu(i, i.render, "ForwardRef");
        case X:
          return "Fragment";
        case U:
          return i;
        case O:
          return "Portal";
        case _:
          return "Root";
        case H:
          return "Text";
        case ye:
          return Nt(i);
        case Z:
          return i === na ? "StrictMode" : "Mode";
        case Ie:
          return "Offscreen";
        case ve:
          return "Profiler";
        case Tt:
          return "Scope";
        case J:
          return "Suspense";
        case wt:
          return "SuspenseList";
        case Ut:
          return "TracingMarker";
        case b:
        case R:
        case je:
        case k:
        case Ce:
        case ge:
          if (typeof i == "function")
            return i.displayName || i.name || null;
          if (typeof i == "string")
            return i;
          break;
      }
      return null;
    }
    var gs = c.ReactDebugCurrentFrame, fr = null, ba = !1;
    function Pr() {
      {
        if (fr === null)
          return null;
        var e = fr._debugOwner;
        if (e !== null && typeof e < "u")
          return at(e);
      }
      return null;
    }
    function Da() {
      return fr === null ? "" : Ja(fr);
    }
    function fn() {
      gs.getCurrentStack = null, fr = null, ba = !1;
    }
    function Xt(e) {
      gs.getCurrentStack = e === null ? null : Da, fr = e, ba = !1;
    }
    function Lo() {
      return fr;
    }
    function Kn(e) {
      ba = e;
    }
    function Ur(e) {
      return "" + e;
    }
    function Li(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Rn(e), e;
        default:
          return "";
      }
    }
    var Tl = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function mu(e, t) {
      Tl[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || v("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || v("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function yu(e) {
      var t = e.type, i = e.nodeName;
      return i && i.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function No(e) {
      return e._valueTracker;
    }
    function xl(e) {
      e._valueTracker = null;
    }
    function Nd(e) {
      var t = "";
      return e && (yu(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Ni(e) {
      var t = yu(e) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Rn(e[t]);
      var a = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof i > "u" || typeof i.get != "function" || typeof i.set != "function")) {
        var u = i.get, d = i.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(S) {
            Rn(S), a = "" + S, d.call(this, S);
          }
        }), Object.defineProperty(e, t, {
          enumerable: i.enumerable
        });
        var m = {
          getValue: function() {
            return a;
          },
          setValue: function(S) {
            Rn(S), a = "" + S;
          },
          stopTracking: function() {
            xl(e), delete e[t];
          }
        };
        return m;
      }
    }
    function sa(e) {
      No(e) || (e._valueTracker = Ni(e));
    }
    function _a(e) {
      if (!e)
        return !1;
      var t = No(e);
      if (!t)
        return !0;
      var i = t.getValue(), a = Nd(e);
      return a !== i ? (t.setValue(a), !0) : !1;
    }
    function Pi(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Ss = !1, Es = !1, Po = !1, Rl = !1;
    function Cs(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function Ts(e, t) {
      var i = e, a = t.checked, u = pt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: a ?? i._wrapperState.initialChecked
      });
      return u;
    }
    function ua(e, t) {
      mu("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Es && (v("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Pr() || "A component", t.type), Es = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Ss && (v("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Pr() || "A component", t.type), Ss = !0);
      var i = e, a = t.defaultValue == null ? "" : t.defaultValue;
      i._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Li(t.value != null ? t.value : a),
        controlled: Cs(t)
      };
    }
    function x(e, t) {
      var i = e, a = t.checked;
      a != null && Or(i, "checked", a, !1);
    }
    function L(e, t) {
      var i = e;
      {
        var a = Cs(t);
        !i._wrapperState.controlled && a && !Rl && (v("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Rl = !0), i._wrapperState.controlled && !a && !Po && (v("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Po = !0);
      }
      x(e, t);
      var u = Li(t.value), d = t.type;
      if (u != null)
        d === "number" ? (u === 0 && i.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        i.value != u) && (i.value = Ur(u)) : i.value !== Ur(u) && (i.value = Ur(u));
      else if (d === "submit" || d === "reset") {
        i.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ke(i, t.type, u) : t.hasOwnProperty("defaultValue") && Ke(i, t.type, Li(t.defaultValue)), t.checked == null && t.defaultChecked != null && (i.defaultChecked = !!t.defaultChecked);
    }
    function G(e, t, i) {
      var a = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, d = u === "submit" || u === "reset";
        if (d && (t.value === void 0 || t.value === null))
          return;
        var m = Ur(a._wrapperState.initialValue);
        i || m !== a.value && (a.value = m), a.defaultValue = m;
      }
      var S = a.name;
      S !== "" && (a.name = ""), a.defaultChecked = !a.defaultChecked, a.defaultChecked = !!a._wrapperState.initialChecked, S !== "" && (a.name = S);
    }
    function q(e, t) {
      var i = e;
      L(i, t), me(i, t);
    }
    function me(e, t) {
      var i = t.name;
      if (t.type === "radio" && i != null) {
        for (var a = e; a.parentNode; )
          a = a.parentNode;
        $n(i, "name");
        for (var u = a.querySelectorAll("input[name=" + JSON.stringify("" + i) + '][type="radio"]'), d = 0; d < u.length; d++) {
          var m = u[d];
          if (!(m === e || m.form !== e.form)) {
            var S = Um(m);
            if (!S)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            _a(m), L(m, S);
          }
        }
      }
    }
    function Ke(e, t, i) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Pi(e.ownerDocument) !== e) && (i == null ? e.defaultValue = Ur(e._wrapperState.initialValue) : e.defaultValue !== Ur(i) && (e.defaultValue = Ur(i)));
    }
    var Re = !1, qe = !1, Rt = !1;
    function Pt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? o.Children.forEach(t.children, function(i) {
        i != null && (typeof i == "string" || typeof i == "number" || qe || (qe = !0, v("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Rt || (Rt = !0, v("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Re && (v("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Re = !0);
    }
    function ln(e, t) {
      t.value != null && e.setAttribute("value", Ur(Li(t.value)));
    }
    var qt = Array.isArray;
    function yt(e) {
      return qt(e);
    }
    var Zt;
    Zt = !1;
    function mn() {
      var e = Pr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Uo = ["value", "defaultValue"];
    function gu(e) {
      {
        mu("select", e);
        for (var t = 0; t < Uo.length; t++) {
          var i = Uo[t];
          if (e[i] != null) {
            var a = yt(e[i]);
            e.multiple && !a ? v("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", i, mn()) : !e.multiple && a && v("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", i, mn());
          }
        }
      }
    }
    function eo(e, t, i, a) {
      var u = e.options;
      if (t) {
        for (var d = i, m = {}, S = 0; S < d.length; S++)
          m["$" + d[S]] = !0;
        for (var C = 0; C < u.length; C++) {
          var D = m.hasOwnProperty("$" + u[C].value);
          u[C].selected !== D && (u[C].selected = D), D && a && (u[C].defaultSelected = !0);
        }
      } else {
        for (var M = Ur(Li(i)), F = null, V = 0; V < u.length; V++) {
          if (u[V].value === M) {
            u[V].selected = !0, a && (u[V].defaultSelected = !0);
            return;
          }
          F === null && !u[V].disabled && (F = u[V]);
        }
        F !== null && (F.selected = !0);
      }
    }
    function Su(e, t) {
      return pt({}, t, {
        value: void 0
      });
    }
    function wl(e, t) {
      var i = e;
      gu(t), i._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Zt && (v("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Zt = !0);
    }
    function Pd(e, t) {
      var i = e;
      i.multiple = !!t.multiple;
      var a = t.value;
      a != null ? eo(i, !!t.multiple, a, !1) : t.defaultValue != null && eo(i, !!t.multiple, t.defaultValue, !0);
    }
    function Vc(e, t) {
      var i = e, a = i._wrapperState.wasMultiple;
      i._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? eo(i, !!t.multiple, u, !1) : a !== !!t.multiple && (t.defaultValue != null ? eo(i, !!t.multiple, t.defaultValue, !0) : eo(i, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Ud(e, t) {
      var i = e, a = t.value;
      a != null && eo(i, !!t.multiple, a, !1);
    }
    var av = !1;
    function Vd(e, t) {
      var i = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var a = pt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Ur(i._wrapperState.initialValue)
      });
      return a;
    }
    function zd(e, t) {
      var i = e;
      mu("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !av && (v("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Pr() || "A component"), av = !0);
      var a = t.value;
      if (a == null) {
        var u = t.children, d = t.defaultValue;
        if (u != null) {
          v("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (d != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (yt(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            d = u;
          }
        }
        d == null && (d = ""), a = d;
      }
      i._wrapperState = {
        initialValue: Li(a)
      };
    }
    function ov(e, t) {
      var i = e, a = Li(t.value), u = Li(t.defaultValue);
      if (a != null) {
        var d = Ur(a);
        d !== i.value && (i.value = d), t.defaultValue == null && i.defaultValue !== d && (i.defaultValue = d);
      }
      u != null && (i.defaultValue = Ur(u));
    }
    function lv(e, t) {
      var i = e, a = i.textContent;
      a === i._wrapperState.initialValue && a !== "" && a !== null && (i.value = a);
    }
    function Tg(e, t) {
      ov(e, t);
    }
    var to = "http://www.w3.org/1999/xhtml", Fd = "http://www.w3.org/1998/Math/MathML", jd = "http://www.w3.org/2000/svg";
    function Bd(e) {
      switch (e) {
        case "svg":
          return jd;
        case "math":
          return Fd;
        default:
          return to;
      }
    }
    function Hd(e, t) {
      return e == null || e === to ? Bd(t) : e === jd && t === "foreignObject" ? to : e;
    }
    var sv = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, i, a, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, i, a, u);
        });
      } : e;
    }, zc, uv = sv(function(e, t) {
      if (e.namespaceURI === jd && !("innerHTML" in e)) {
        zc = zc || document.createElement("div"), zc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var i = zc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; i.firstChild; )
          e.appendChild(i.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Jr = 1, no = 3, Un = 8, ro = 9, Id = 11, xs = function(e, t) {
      if (t) {
        var i = e.firstChild;
        if (i && i === e.lastChild && i.nodeType === no) {
          i.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Eu = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Cu = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function cv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var fv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Cu).forEach(function(e) {
      fv.forEach(function(t) {
        Cu[cv(t, e)] = Cu[e];
      });
    });
    function Fc(e, t, i) {
      var a = t == null || typeof t == "boolean" || t === "";
      return a ? "" : !i && typeof t == "number" && t !== 0 && !(Cu.hasOwnProperty(e) && Cu[e]) ? t + "px" : (yi(t, e), ("" + t).trim());
    }
    var dv = /([A-Z])/g, pv = /^ms-/;
    function Rs(e) {
      return e.replace(dv, "-$1").toLowerCase().replace(pv, "-ms-");
    }
    var hv = function() {
    };
    {
      var xg = /^(?:webkit|moz|o)[A-Z]/, Rg = /^-ms-/, vv = /-(.)/g, Yd = /;\s*$/, ka = {}, bl = {}, mv = !1, Tu = !1, wg = function(e) {
        return e.replace(vv, function(t, i) {
          return i.toUpperCase();
        });
      }, yv = function(e) {
        ka.hasOwnProperty(e) && ka[e] || (ka[e] = !0, v(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          wg(e.replace(Rg, "ms-"))
        ));
      }, Wd = function(e) {
        ka.hasOwnProperty(e) && ka[e] || (ka[e] = !0, v("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, $d = function(e, t) {
        bl.hasOwnProperty(t) && bl[t] || (bl[t] = !0, v(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Yd, "")));
      }, gv = function(e, t) {
        mv || (mv = !0, v("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Sv = function(e, t) {
        Tu || (Tu = !0, v("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      hv = function(e, t) {
        e.indexOf("-") > -1 ? yv(e) : xg.test(e) ? Wd(e) : Yd.test(t) && $d(e, t), typeof t == "number" && (isNaN(t) ? gv(e, t) : isFinite(t) || Sv(e, t));
      };
    }
    var Ev = hv;
    function bg(e) {
      {
        var t = "", i = "";
        for (var a in e)
          if (e.hasOwnProperty(a)) {
            var u = e[a];
            if (u != null) {
              var d = a.indexOf("--") === 0;
              t += i + (d ? a : Rs(a)) + ":", t += Fc(a, u, d), i = ";";
            }
          }
        return t || null;
      }
    }
    function Cv(e, t) {
      var i = e.style;
      for (var a in t)
        if (t.hasOwnProperty(a)) {
          var u = a.indexOf("--") === 0;
          u || Ev(a, t[a]);
          var d = Fc(a, t[a], u);
          a === "float" && (a = "cssFloat"), u ? i.setProperty(a, d) : i[a] = d;
        }
    }
    function Dg(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Tv(e) {
      var t = {};
      for (var i in e)
        for (var a = Eu[i] || [i], u = 0; u < a.length; u++)
          t[a[u]] = i;
      return t;
    }
    function _g(e, t) {
      {
        if (!t)
          return;
        var i = Tv(e), a = Tv(t), u = {};
        for (var d in i) {
          var m = i[d], S = a[d];
          if (S && m !== S) {
            var C = m + "," + S;
            if (u[C])
              continue;
            u[C] = !0, v("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Dg(e[m]) ? "Removing" : "Updating", m, S);
          }
        }
      }
    }
    var ca = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, xu = pt({
      menuitem: !0
    }, ca), xv = "__html";
    function jc(e, t) {
      if (t) {
        if (xu[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(xv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && v("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Vo(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Ru = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Bc = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, ws = {}, kg = new RegExp("^(aria)-[" + Ee + "]*$"), bs = new RegExp("^(aria)[A-Z][" + Ee + "]*$");
    function Gd(e, t) {
      {
        if (Ar.call(ws, t) && ws[t])
          return !0;
        if (bs.test(t)) {
          var i = "aria-" + t.slice(4).toLowerCase(), a = Bc.hasOwnProperty(i) ? i : null;
          if (a == null)
            return v("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ws[t] = !0, !0;
          if (t !== a)
            return v("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, a), ws[t] = !0, !0;
        }
        if (kg.test(t)) {
          var u = t.toLowerCase(), d = Bc.hasOwnProperty(u) ? u : null;
          if (d == null)
            return ws[t] = !0, !1;
          if (t !== d)
            return v("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, d), ws[t] = !0, !0;
        }
      }
      return !0;
    }
    function wu(e, t) {
      {
        var i = [];
        for (var a in t) {
          var u = Gd(e, a);
          u || i.push(a);
        }
        var d = i.map(function(m) {
          return "`" + m + "`";
        }).join(", ");
        i.length === 1 ? v("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e) : i.length > 1 && v("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e);
      }
    }
    function Kd(e, t) {
      Vo(e, t) || wu(e, t);
    }
    var Qd = !1;
    function Hc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Qd && (Qd = !0, e === "select" && t.multiple ? v("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : v("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Dl = function() {
    };
    {
      var dr = {}, Xd = /^on./, Ic = /^on[^A-Z]/, Rv = new RegExp("^(aria)-[" + Ee + "]*$"), wv = new RegExp("^(aria)[A-Z][" + Ee + "]*$");
      Dl = function(e, t, i, a) {
        if (Ar.call(dr, t) && dr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return v("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), dr[t] = !0, !0;
        if (a != null) {
          var d = a.registrationNameDependencies, m = a.possibleRegistrationNames;
          if (d.hasOwnProperty(t))
            return !0;
          var S = m.hasOwnProperty(u) ? m[u] : null;
          if (S != null)
            return v("Invalid event handler property `%s`. Did you mean `%s`?", t, S), dr[t] = !0, !0;
          if (Xd.test(t))
            return v("Unknown event handler property `%s`. It will be ignored.", t), dr[t] = !0, !0;
        } else if (Xd.test(t))
          return Ic.test(t) && v("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), dr[t] = !0, !0;
        if (Rv.test(t) || wv.test(t))
          return !0;
        if (u === "innerhtml")
          return v("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), dr[t] = !0, !0;
        if (u === "aria")
          return v("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), dr[t] = !0, !0;
        if (u === "is" && i !== null && i !== void 0 && typeof i != "string")
          return v("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof i), dr[t] = !0, !0;
        if (typeof i == "number" && isNaN(i))
          return v("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), dr[t] = !0, !0;
        var C = an(t), D = C !== null && C.type === Gn;
        if (Ru.hasOwnProperty(u)) {
          var M = Ru[u];
          if (M !== t)
            return v("Invalid DOM property `%s`. Did you mean `%s`?", t, M), dr[t] = !0, !0;
        } else if (!D && t !== u)
          return v("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), dr[t] = !0, !0;
        return typeof i == "boolean" && un(t, i, C, !1) ? (i ? v('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', i, t, t, i, t) : v('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', i, t, t, i, t, t, t), dr[t] = !0, !0) : D ? !0 : un(t, i, C, !1) ? (dr[t] = !0, !1) : ((i === "false" || i === "true") && C !== null && C.type === Pn && (v("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", i, t, i === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, i), dr[t] = !0), !0);
      };
    }
    var bv = function(e, t, i) {
      {
        var a = [];
        for (var u in t) {
          var d = Dl(e, u, t[u], i);
          d || a.push(u);
        }
        var m = a.map(function(S) {
          return "`" + S + "`";
        }).join(", ");
        a.length === 1 ? v("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", m, e) : a.length > 1 && v("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", m, e);
      }
    };
    function Dv(e, t, i) {
      Vo(e, t) || bv(e, t, i);
    }
    var qd = 1, Yc = 2, Ui = 4, Zd = qd | Yc | Ui, _l = null;
    function Mg(e) {
      _l !== null && v("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), _l = e;
    }
    function Ag() {
      _l === null && v("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), _l = null;
    }
    function bu(e) {
      return e === _l;
    }
    function Jd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === no ? t.parentNode : t;
    }
    var Wc = null, kl = null, Wt = null;
    function $c(e) {
      var t = Gs(e);
      if (t) {
        if (typeof Wc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var i = t.stateNode;
        if (i) {
          var a = Um(i);
          Wc(t.stateNode, t.type, a);
        }
      }
    }
    function Gc(e) {
      Wc = e;
    }
    function Ds(e) {
      kl ? Wt ? Wt.push(e) : Wt = [e] : kl = e;
    }
    function _v() {
      return kl !== null || Wt !== null;
    }
    function Kc() {
      if (kl) {
        var e = kl, t = Wt;
        if (kl = null, Wt = null, $c(e), t)
          for (var i = 0; i < t.length; i++)
            $c(t[i]);
      }
    }
    var _s = function(e, t) {
      return e(t);
    }, Du = function() {
    }, zo = !1;
    function kv() {
      var e = _v();
      e && (Du(), Kc());
    }
    function Mv(e, t, i) {
      if (zo)
        return e(t, i);
      zo = !0;
      try {
        return _s(e, t, i);
      } finally {
        zo = !1, kv();
      }
    }
    function Og(e, t, i) {
      _s = e, Du = i;
    }
    function Av(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Qc(e, t, i) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(i.disabled && Av(t));
        default:
          return !1;
      }
    }
    function Fo(e, t) {
      var i = e.stateNode;
      if (i === null)
        return null;
      var a = Um(i);
      if (a === null)
        return null;
      var u = a[t];
      if (Qc(t, e.type, a))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var _u = !1;
    if (Nn)
      try {
        var Ml = {};
        Object.defineProperty(Ml, "passive", {
          get: function() {
            _u = !0;
          }
        }), window.addEventListener("test", Ml, Ml), window.removeEventListener("test", Ml, Ml);
      } catch {
        _u = !1;
      }
    function Xc(e, t, i, a, u, d, m, S, C) {
      var D = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(i, D);
      } catch (M) {
        this.onError(M);
      }
    }
    var qc = Xc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var ep = document.createElement("react");
      qc = function(t, i, a, u, d, m, S, C, D) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var M = document.createEvent("Event"), F = !1, V = !0, $ = window.event, Q = Object.getOwnPropertyDescriptor(window, "event");
        function ee() {
          ep.removeEventListener(te, Qe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = $);
        }
        var De = Array.prototype.slice.call(arguments, 3);
        function Qe() {
          F = !0, ee(), i.apply(a, De), V = !1;
        }
        var He, At = !1, bt = !1;
        function I(Y) {
          if (He = Y.error, At = !0, He === null && Y.colno === 0 && Y.lineno === 0 && (bt = !0), Y.defaultPrevented && He != null && typeof He == "object")
            try {
              He._suppressLogging = !0;
            } catch {
            }
        }
        var te = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", I), ep.addEventListener(te, Qe, !1), M.initEvent(te, !1, !1), ep.dispatchEvent(M), Q && Object.defineProperty(window, "event", Q), F && V && (At ? bt && (He = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : He = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(He)), window.removeEventListener("error", I), !F)
          return ee(), Xc.apply(this, arguments);
      };
    }
    var Ov = qc, ks = !1, Zc = null, Ms = !1, Ma = null, Lv = {
      onError: function(e) {
        ks = !0, Zc = e;
      }
    };
    function jo(e, t, i, a, u, d, m, S, C) {
      ks = !1, Zc = null, Ov.apply(Lv, arguments);
    }
    function Aa(e, t, i, a, u, d, m, S, C) {
      if (jo.apply(this, arguments), ks) {
        var D = Mu();
        Ms || (Ms = !0, Ma = D);
      }
    }
    function ku() {
      if (Ms) {
        var e = Ma;
        throw Ms = !1, Ma = null, e;
      }
    }
    function io() {
      return ks;
    }
    function Mu() {
      if (ks) {
        var e = Zc;
        return ks = !1, Zc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function As(e) {
      return e._reactInternals;
    }
    function Lg(e) {
      return e._reactInternals !== void 0;
    }
    function Al(e, t) {
      e._reactInternals = t;
    }
    var We = (
      /*                      */
      0
    ), fa = (
      /*                */
      1
    ), yn = (
      /*                    */
      2
    ), _t = (
      /*                       */
      4
    ), Vi = (
      /*                */
      16
    ), zi = (
      /*                 */
      32
    ), sn = (
      /*                     */
      64
    ), Ye = (
      /*                   */
      128
    ), Dr = (
      /*            */
      256
    ), Tn = (
      /*                          */
      512
    ), Qn = (
      /*                     */
      1024
    ), ei = (
      /*                      */
      2048
    ), ti = (
      /*                    */
      4096
    ), Vn = (
      /*                   */
      8192
    ), Os = (
      /*             */
      16384
    ), Nv = (
      /*               */
      32767
    ), Au = (
      /*                   */
      32768
    ), nr = (
      /*                */
      65536
    ), Jc = (
      /* */
      131072
    ), Oa = (
      /*                       */
      1048576
    ), Ls = (
      /*                    */
      2097152
    ), ao = (
      /*                 */
      4194304
    ), ef = (
      /*                */
      8388608
    ), Bo = (
      /*               */
      16777216
    ), La = (
      /*              */
      33554432
    ), Ho = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      _t | Qn | 0
    ), Io = yn | _t | Vi | zi | Tn | ti | Vn, Yo = _t | sn | Tn | Vn, oo = ei | Vi, zn = ao | ef | Ls, Fi = c.ReactCurrentOwner;
    function Ci(e) {
      var t = e, i = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var a = t;
        do
          t = a, (t.flags & (yn | ti)) !== We && (i = t.return), a = t.return;
        while (a);
      }
      return t.tag === _ ? i : null;
    }
    function Na(e) {
      if (e.tag === J) {
        var t = e.memoizedState;
        if (t === null) {
          var i = e.alternate;
          i !== null && (t = i.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Pa(e) {
      return e.tag === _ ? e.stateNode.containerInfo : null;
    }
    function Ol(e) {
      return Ci(e) === e;
    }
    function Pv(e) {
      {
        var t = Fi.current;
        if (t !== null && t.tag === b) {
          var i = t, a = i.stateNode;
          a._warnedAboutRefsInRender || v("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", at(i) || "A component"), a._warnedAboutRefsInRender = !0;
        }
      }
      var u = As(e);
      return u ? Ci(u) === u : !1;
    }
    function tf(e) {
      if (Ci(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function nf(e) {
      var t = e.alternate;
      if (!t) {
        var i = Ci(e);
        if (i === null)
          throw new Error("Unable to find node on an unmounted component.");
        return i !== e ? null : e;
      }
      for (var a = e, u = t; ; ) {
        var d = a.return;
        if (d === null)
          break;
        var m = d.alternate;
        if (m === null) {
          var S = d.return;
          if (S !== null) {
            a = u = S;
            continue;
          }
          break;
        }
        if (d.child === m.child) {
          for (var C = d.child; C; ) {
            if (C === a)
              return tf(d), e;
            if (C === u)
              return tf(d), t;
            C = C.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== u.return)
          a = d, u = m;
        else {
          for (var D = !1, M = d.child; M; ) {
            if (M === a) {
              D = !0, a = d, u = m;
              break;
            }
            if (M === u) {
              D = !0, u = d, a = m;
              break;
            }
            M = M.sibling;
          }
          if (!D) {
            for (M = m.child; M; ) {
              if (M === a) {
                D = !0, a = m, u = d;
                break;
              }
              if (M === u) {
                D = !0, u = m, a = d;
                break;
              }
              M = M.sibling;
            }
            if (!D)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (a.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (a.tag !== _)
        throw new Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    function ni(e) {
      var t = nf(e);
      return t !== null ? ri(t) : null;
    }
    function ri(e) {
      if (e.tag === U || e.tag === H)
        return e;
      for (var t = e.child; t !== null; ) {
        var i = ri(t);
        if (i !== null)
          return i;
        t = t.sibling;
      }
      return null;
    }
    function pn(e) {
      var t = nf(e);
      return t !== null ? ji(t) : null;
    }
    function ji(e) {
      if (e.tag === U || e.tag === H)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== O) {
          var i = ji(t);
          if (i !== null)
            return i;
        }
        t = t.sibling;
      }
      return null;
    }
    var tp = l.unstable_scheduleCallback, Uv = l.unstable_cancelCallback, np = l.unstable_shouldYield, rp = l.unstable_requestPaint, Xn = l.unstable_now, rf = l.unstable_getCurrentPriorityLevel, Ou = l.unstable_ImmediatePriority, Wo = l.unstable_UserBlockingPriority, lo = l.unstable_NormalPriority, Ng = l.unstable_LowPriority, Ll = l.unstable_IdlePriority, af = l.unstable_yieldValue, Vv = l.unstable_setDisableYieldValue, Nl = null, bn = null, be = null, Ti = !1, ii = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Ns(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return v("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        tt && (e = pt({}, e, {
          getLaneLabelMap: Pl,
          injectProfilingHooks: Bi
        })), Nl = t.inject(e), bn = t;
      } catch (i) {
        v("React instrumentation encountered an error: %s.", i);
      }
      return !!t.checkDCE;
    }
    function ip(e, t) {
      if (bn && typeof bn.onScheduleFiberRoot == "function")
        try {
          bn.onScheduleFiberRoot(Nl, e, t);
        } catch (i) {
          Ti || (Ti = !0, v("React instrumentation encountered an error: %s", i));
        }
    }
    function ap(e, t) {
      if (bn && typeof bn.onCommitFiberRoot == "function")
        try {
          var i = (e.current.flags & Ye) === Ye;
          if (Je) {
            var a;
            switch (t) {
              case Vr:
                a = Ou;
                break;
              case Va:
                a = Wo;
                break;
              case Hi:
                a = lo;
                break;
              case Ii:
                a = Ll;
                break;
              default:
                a = lo;
                break;
            }
            bn.onCommitFiberRoot(Nl, e, a, i);
          }
        } catch (u) {
          Ti || (Ti = !0, v("React instrumentation encountered an error: %s", u));
        }
    }
    function op(e) {
      if (bn && typeof bn.onPostCommitFiberRoot == "function")
        try {
          bn.onPostCommitFiberRoot(Nl, e);
        } catch (t) {
          Ti || (Ti = !0, v("React instrumentation encountered an error: %s", t));
        }
    }
    function lp(e) {
      if (bn && typeof bn.onCommitFiberUnmount == "function")
        try {
          bn.onCommitFiberUnmount(Nl, e);
        } catch (t) {
          Ti || (Ti = !0, v("React instrumentation encountered an error: %s", t));
        }
    }
    function gn(e) {
      if (typeof af == "function" && (Vv(e), y(e)), bn && typeof bn.setStrictMode == "function")
        try {
          bn.setStrictMode(Nl, e);
        } catch (t) {
          Ti || (Ti = !0, v("React instrumentation encountered an error: %s", t));
        }
    }
    function Bi(e) {
      be = e;
    }
    function Pl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, i = 0; i < zl; i++) {
          var a = Bv(t);
          e.set(t, a), t *= 2;
        }
        return e;
      }
    }
    function sp(e) {
      be !== null && typeof be.markCommitStarted == "function" && be.markCommitStarted(e);
    }
    function up() {
      be !== null && typeof be.markCommitStopped == "function" && be.markCommitStopped();
    }
    function xi(e) {
      be !== null && typeof be.markComponentRenderStarted == "function" && be.markComponentRenderStarted(e);
    }
    function Ri() {
      be !== null && typeof be.markComponentRenderStopped == "function" && be.markComponentRenderStopped();
    }
    function cp(e) {
      be !== null && typeof be.markComponentPassiveEffectMountStarted == "function" && be.markComponentPassiveEffectMountStarted(e);
    }
    function zv() {
      be !== null && typeof be.markComponentPassiveEffectMountStopped == "function" && be.markComponentPassiveEffectMountStopped();
    }
    function so(e) {
      be !== null && typeof be.markComponentPassiveEffectUnmountStarted == "function" && be.markComponentPassiveEffectUnmountStarted(e);
    }
    function $o() {
      be !== null && typeof be.markComponentPassiveEffectUnmountStopped == "function" && be.markComponentPassiveEffectUnmountStopped();
    }
    function of(e) {
      be !== null && typeof be.markComponentLayoutEffectMountStarted == "function" && be.markComponentLayoutEffectMountStarted(e);
    }
    function Fv() {
      be !== null && typeof be.markComponentLayoutEffectMountStopped == "function" && be.markComponentLayoutEffectMountStopped();
    }
    function Lu(e) {
      be !== null && typeof be.markComponentLayoutEffectUnmountStarted == "function" && be.markComponentLayoutEffectUnmountStarted(e);
    }
    function fp() {
      be !== null && typeof be.markComponentLayoutEffectUnmountStopped == "function" && be.markComponentLayoutEffectUnmountStopped();
    }
    function Nu(e, t, i) {
      be !== null && typeof be.markComponentErrored == "function" && be.markComponentErrored(e, t, i);
    }
    function Ua(e, t, i) {
      be !== null && typeof be.markComponentSuspended == "function" && be.markComponentSuspended(e, t, i);
    }
    function Pu(e) {
      be !== null && typeof be.markLayoutEffectsStarted == "function" && be.markLayoutEffectsStarted(e);
    }
    function Uu() {
      be !== null && typeof be.markLayoutEffectsStopped == "function" && be.markLayoutEffectsStopped();
    }
    function Ul(e) {
      be !== null && typeof be.markPassiveEffectsStarted == "function" && be.markPassiveEffectsStarted(e);
    }
    function dp() {
      be !== null && typeof be.markPassiveEffectsStopped == "function" && be.markPassiveEffectsStopped();
    }
    function Vl(e) {
      be !== null && typeof be.markRenderStarted == "function" && be.markRenderStarted(e);
    }
    function jv() {
      be !== null && typeof be.markRenderYielded == "function" && be.markRenderYielded();
    }
    function lf() {
      be !== null && typeof be.markRenderStopped == "function" && be.markRenderStopped();
    }
    function Sn(e) {
      be !== null && typeof be.markRenderScheduled == "function" && be.markRenderScheduled(e);
    }
    function sf(e, t) {
      be !== null && typeof be.markForceUpdateScheduled == "function" && be.markForceUpdateScheduled(e, t);
    }
    function Vu(e, t) {
      be !== null && typeof be.markStateUpdateScheduled == "function" && be.markStateUpdateScheduled(e, t);
    }
    var $e = (
      /*                         */
      0
    ), Ct = (
      /*                 */
      1
    ), Ft = (
      /*                    */
      2
    ), Jt = (
      /*               */
      8
    ), jt = (
      /*              */
      16
    ), Fn = Math.clz32 ? Math.clz32 : zu, rr = Math.log, uf = Math.LN2;
    function zu(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (rr(t) / uf | 0) | 0;
    }
    var zl = 31, se = (
      /*                        */
      0
    ), Vt = (
      /*                          */
      0
    ), et = (
      /*                        */
      1
    ), Go = (
      /*    */
      2
    ), da = (
      /*             */
      4
    ), _r = (
      /*            */
      8
    ), Dn = (
      /*                     */
      16
    ), uo = (
      /*                */
      32
    ), Ko = (
      /*                       */
      4194240
    ), Fl = (
      /*                        */
      64
    ), cf = (
      /*                        */
      128
    ), ff = (
      /*                        */
      256
    ), df = (
      /*                        */
      512
    ), pf = (
      /*                        */
      1024
    ), hf = (
      /*                        */
      2048
    ), vf = (
      /*                        */
      4096
    ), mf = (
      /*                        */
      8192
    ), yf = (
      /*                        */
      16384
    ), jl = (
      /*                       */
      32768
    ), gf = (
      /*                       */
      65536
    ), Ps = (
      /*                       */
      131072
    ), Us = (
      /*                       */
      262144
    ), Sf = (
      /*                       */
      524288
    ), Fu = (
      /*                       */
      1048576
    ), Ef = (
      /*                       */
      2097152
    ), ju = (
      /*                            */
      130023424
    ), Bl = (
      /*                             */
      4194304
    ), Cf = (
      /*                             */
      8388608
    ), Bu = (
      /*                             */
      16777216
    ), Tf = (
      /*                             */
      33554432
    ), xf = (
      /*                             */
      67108864
    ), pp = Bl, Hu = (
      /*          */
      134217728
    ), hp = (
      /*                          */
      268435455
    ), Iu = (
      /*               */
      268435456
    ), Hl = (
      /*                        */
      536870912
    ), ai = (
      /*                   */
      1073741824
    );
    function Bv(e) {
      {
        if (e & et)
          return "Sync";
        if (e & Go)
          return "InputContinuousHydration";
        if (e & da)
          return "InputContinuous";
        if (e & _r)
          return "DefaultHydration";
        if (e & Dn)
          return "Default";
        if (e & uo)
          return "TransitionHydration";
        if (e & Ko)
          return "Transition";
        if (e & ju)
          return "Retry";
        if (e & Hu)
          return "SelectiveHydration";
        if (e & Iu)
          return "IdleHydration";
        if (e & Hl)
          return "Idle";
        if (e & ai)
          return "Offscreen";
      }
    }
    var nn = -1, Il = Fl, Rf = Bl;
    function Yu(e) {
      switch (Qo(e)) {
        case et:
          return et;
        case Go:
          return Go;
        case da:
          return da;
        case _r:
          return _r;
        case Dn:
          return Dn;
        case uo:
          return uo;
        case Fl:
        case cf:
        case ff:
        case df:
        case pf:
        case hf:
        case vf:
        case mf:
        case yf:
        case jl:
        case gf:
        case Ps:
        case Us:
        case Sf:
        case Fu:
        case Ef:
          return e & Ko;
        case Bl:
        case Cf:
        case Bu:
        case Tf:
        case xf:
          return e & ju;
        case Hu:
          return Hu;
        case Iu:
          return Iu;
        case Hl:
          return Hl;
        case ai:
          return ai;
        default:
          return v("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function wf(e, t) {
      var i = e.pendingLanes;
      if (i === se)
        return se;
      var a = se, u = e.suspendedLanes, d = e.pingedLanes, m = i & hp;
      if (m !== se) {
        var S = m & ~u;
        if (S !== se)
          a = Yu(S);
        else {
          var C = m & d;
          C !== se && (a = Yu(C));
        }
      } else {
        var D = i & ~u;
        D !== se ? a = Yu(D) : d !== se && (a = Yu(d));
      }
      if (a === se)
        return se;
      if (t !== se && t !== a && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === se) {
        var M = Qo(a), F = Qo(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          M >= F || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          M === Dn && (F & Ko) !== se
        )
          return t;
      }
      (a & da) !== se && (a |= i & Dn);
      var V = e.entangledLanes;
      if (V !== se)
        for (var $ = e.entanglements, Q = a & V; Q > 0; ) {
          var ee = jn(Q), De = 1 << ee;
          a |= $[ee], Q &= ~De;
        }
      return a;
    }
    function pa(e, t) {
      for (var i = e.eventTimes, a = nn; t > 0; ) {
        var u = jn(t), d = 1 << u, m = i[u];
        m > a && (a = m), t &= ~d;
      }
      return a;
    }
    function vp(e, t) {
      switch (e) {
        case et:
        case Go:
        case da:
          return t + 250;
        case _r:
        case Dn:
        case uo:
        case Fl:
        case cf:
        case ff:
        case df:
        case pf:
        case hf:
        case vf:
        case mf:
        case yf:
        case jl:
        case gf:
        case Ps:
        case Us:
        case Sf:
        case Fu:
        case Ef:
          return t + 5e3;
        case Bl:
        case Cf:
        case Bu:
        case Tf:
        case xf:
          return nn;
        case Hu:
        case Iu:
        case Hl:
        case ai:
          return nn;
        default:
          return v("Should have found matching lanes. This is a bug in React."), nn;
      }
    }
    function bf(e, t) {
      for (var i = e.pendingLanes, a = e.suspendedLanes, u = e.pingedLanes, d = e.expirationTimes, m = i; m > 0; ) {
        var S = jn(m), C = 1 << S, D = d[S];
        D === nn ? ((C & a) === se || (C & u) !== se) && (d[S] = vp(C, t)) : D <= t && (e.expiredLanes |= C), m &= ~C;
      }
    }
    function Hv(e) {
      return Yu(e.pendingLanes);
    }
    function Df(e) {
      var t = e.pendingLanes & ~ai;
      return t !== se ? t : t & ai ? ai : se;
    }
    function Iv(e) {
      return (e & et) !== se;
    }
    function Wu(e) {
      return (e & hp) !== se;
    }
    function Yl(e) {
      return (e & ju) === e;
    }
    function mp(e) {
      var t = et | da | Dn;
      return (e & t) === se;
    }
    function yp(e) {
      return (e & Ko) === e;
    }
    function _f(e, t) {
      var i = Go | da | _r | Dn;
      return (t & i) !== se;
    }
    function Yv(e, t) {
      return (t & e.expiredLanes) !== se;
    }
    function gp(e) {
      return (e & Ko) !== se;
    }
    function Sp() {
      var e = Il;
      return Il <<= 1, (Il & Ko) === se && (Il = Fl), e;
    }
    function Wv() {
      var e = Rf;
      return Rf <<= 1, (Rf & ju) === se && (Rf = Bl), e;
    }
    function Qo(e) {
      return e & -e;
    }
    function $u(e) {
      return Qo(e);
    }
    function jn(e) {
      return 31 - Fn(e);
    }
    function pr(e) {
      return jn(e);
    }
    function oi(e, t) {
      return (e & t) !== se;
    }
    function Wl(e, t) {
      return (e & t) === t;
    }
    function ft(e, t) {
      return e | t;
    }
    function Gu(e, t) {
      return e & ~t;
    }
    function Ep(e, t) {
      return e & t;
    }
    function $v(e) {
      return e;
    }
    function Gv(e, t) {
      return e !== Vt && e < t ? e : t;
    }
    function Ku(e) {
      for (var t = [], i = 0; i < zl; i++)
        t.push(e);
      return t;
    }
    function Vs(e, t, i) {
      e.pendingLanes |= t, t !== Hl && (e.suspendedLanes = se, e.pingedLanes = se);
      var a = e.eventTimes, u = pr(t);
      a[u] = i;
    }
    function Kv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var i = e.expirationTimes, a = t; a > 0; ) {
        var u = jn(a), d = 1 << u;
        i[u] = nn, a &= ~d;
      }
    }
    function kf(e, t, i) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Cp(e, t) {
      var i = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = se, e.pingedLanes = se, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var a = e.entanglements, u = e.eventTimes, d = e.expirationTimes, m = i; m > 0; ) {
        var S = jn(m), C = 1 << S;
        a[S] = se, u[S] = nn, d[S] = nn, m &= ~C;
      }
    }
    function Mf(e, t) {
      for (var i = e.entangledLanes |= t, a = e.entanglements, u = i; u; ) {
        var d = jn(u), m = 1 << d;
        // Is this one of the newly entangled lanes?
        m & t | // Is this lane transitively entangled with the newly entangled lanes?
        a[d] & t && (a[d] |= t), u &= ~m;
      }
    }
    function Tp(e, t) {
      var i = Qo(t), a;
      switch (i) {
        case da:
          a = Go;
          break;
        case Dn:
          a = _r;
          break;
        case Fl:
        case cf:
        case ff:
        case df:
        case pf:
        case hf:
        case vf:
        case mf:
        case yf:
        case jl:
        case gf:
        case Ps:
        case Us:
        case Sf:
        case Fu:
        case Ef:
        case Bl:
        case Cf:
        case Bu:
        case Tf:
        case xf:
          a = uo;
          break;
        case Hl:
          a = Iu;
          break;
        default:
          a = Vt;
          break;
      }
      return (a & (e.suspendedLanes | t)) !== Vt ? Vt : a;
    }
    function Qu(e, t, i) {
      if (ii)
        for (var a = e.pendingUpdatersLaneMap; i > 0; ) {
          var u = pr(i), d = 1 << u, m = a[u];
          m.add(t), i &= ~d;
        }
    }
    function Qv(e, t) {
      if (ii)
        for (var i = e.pendingUpdatersLaneMap, a = e.memoizedUpdaters; t > 0; ) {
          var u = pr(t), d = 1 << u, m = i[u];
          m.size > 0 && (m.forEach(function(S) {
            var C = S.alternate;
            (C === null || !a.has(C)) && a.add(S);
          }), m.clear()), t &= ~d;
        }
    }
    function xp(e, t) {
      return null;
    }
    var Vr = et, Va = da, Hi = Dn, Ii = Hl, Xu = Vt;
    function Yi() {
      return Xu;
    }
    function Bn(e) {
      Xu = e;
    }
    function Xv(e, t) {
      var i = Xu;
      try {
        return Xu = e, t();
      } finally {
        Xu = i;
      }
    }
    function qv(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function qu(e, t) {
      return e > t ? e : t;
    }
    function ir(e, t) {
      return e !== 0 && e < t;
    }
    function Zv(e) {
      var t = Qo(e);
      return ir(Vr, t) ? ir(Va, t) ? Wu(t) ? Hi : Ii : Va : Vr;
    }
    function Af(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Zu;
    function kr(e) {
      Zu = e;
    }
    function Pg(e) {
      Zu(e);
    }
    var Oe;
    function zs(e) {
      Oe = e;
    }
    var Of;
    function Jv(e) {
      Of = e;
    }
    var em;
    function Ju(e) {
      em = e;
    }
    var ec;
    function Rp(e) {
      ec = e;
    }
    var Lf = !1, tc = [], co = null, za = null, Fa = null, _n = /* @__PURE__ */ new Map(), zr = /* @__PURE__ */ new Map(), Fr = [], tm = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function nm(e) {
      return tm.indexOf(e) > -1;
    }
    function ha(e, t, i, a, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: i,
        nativeEvent: u,
        targetContainers: [a]
      };
    }
    function wp(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          co = null;
          break;
        case "dragenter":
        case "dragleave":
          za = null;
          break;
        case "mouseover":
        case "mouseout":
          Fa = null;
          break;
        case "pointerover":
        case "pointerout": {
          var i = t.pointerId;
          _n.delete(i);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var a = t.pointerId;
          zr.delete(a);
          break;
        }
      }
    }
    function li(e, t, i, a, u, d) {
      if (e === null || e.nativeEvent !== d) {
        var m = ha(t, i, a, u, d);
        if (t !== null) {
          var S = Gs(t);
          S !== null && Oe(S);
        }
        return m;
      }
      e.eventSystemFlags |= a;
      var C = e.targetContainers;
      return u !== null && C.indexOf(u) === -1 && C.push(u), e;
    }
    function Ug(e, t, i, a, u) {
      switch (t) {
        case "focusin": {
          var d = u;
          return co = li(co, e, t, i, a, d), !0;
        }
        case "dragenter": {
          var m = u;
          return za = li(za, e, t, i, a, m), !0;
        }
        case "mouseover": {
          var S = u;
          return Fa = li(Fa, e, t, i, a, S), !0;
        }
        case "pointerover": {
          var C = u, D = C.pointerId;
          return _n.set(D, li(_n.get(D) || null, e, t, i, a, C)), !0;
        }
        case "gotpointercapture": {
          var M = u, F = M.pointerId;
          return zr.set(F, li(zr.get(F) || null, e, t, i, a, M)), !0;
        }
      }
      return !1;
    }
    function bp(e) {
      var t = pc(e.target);
      if (t !== null) {
        var i = Ci(t);
        if (i !== null) {
          var a = i.tag;
          if (a === J) {
            var u = Na(i);
            if (u !== null) {
              e.blockedOn = u, ec(e.priority, function() {
                Of(i);
              });
              return;
            }
          } else if (a === _) {
            var d = i.stateNode;
            if (Af(d)) {
              e.blockedOn = Pa(i);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function rm(e) {
      for (var t = em(), i = {
        blockedOn: null,
        target: e,
        priority: t
      }, a = 0; a < Fr.length && ir(t, Fr[a].priority); a++)
        ;
      Fr.splice(a, 0, i), a === 0 && bp(i);
    }
    function nc(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var i = t[0], a = js(e.domEventName, e.eventSystemFlags, i, e.nativeEvent);
        if (a === null) {
          var u = e.nativeEvent, d = new u.constructor(u.type, u);
          Mg(d), u.target.dispatchEvent(d), Ag();
        } else {
          var m = Gs(a);
          return m !== null && Oe(m), e.blockedOn = a, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Dp(e, t, i) {
      nc(e) && i.delete(t);
    }
    function Vg() {
      Lf = !1, co !== null && nc(co) && (co = null), za !== null && nc(za) && (za = null), Fa !== null && nc(Fa) && (Fa = null), _n.forEach(Dp), zr.forEach(Dp);
    }
    function Xo(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Lf || (Lf = !0, l.unstable_scheduleCallback(l.unstable_NormalPriority, Vg)));
    }
    function $l(e) {
      if (tc.length > 0) {
        Xo(tc[0], e);
        for (var t = 1; t < tc.length; t++) {
          var i = tc[t];
          i.blockedOn === e && (i.blockedOn = null);
        }
      }
      co !== null && Xo(co, e), za !== null && Xo(za, e), Fa !== null && Xo(Fa, e);
      var a = function(S) {
        return Xo(S, e);
      };
      _n.forEach(a), zr.forEach(a);
      for (var u = 0; u < Fr.length; u++) {
        var d = Fr[u];
        d.blockedOn === e && (d.blockedOn = null);
      }
      for (; Fr.length > 0; ) {
        var m = Fr[0];
        if (m.blockedOn !== null)
          break;
        bp(m), m.blockedOn === null && Fr.shift();
      }
    }
    var hr = c.ReactCurrentBatchConfig, kt = !0;
    function qn(e) {
      kt = !!e;
    }
    function Hn() {
      return kt;
    }
    function vr(e, t, i) {
      var a = Nf(t), u;
      switch (a) {
        case Vr:
          u = wi;
          break;
        case Va:
          u = Fs;
          break;
        case Hi:
        default:
          u = kn;
          break;
      }
      return u.bind(null, t, i, e);
    }
    function wi(e, t, i, a) {
      var u = Yi(), d = hr.transition;
      hr.transition = null;
      try {
        Bn(Vr), kn(e, t, i, a);
      } finally {
        Bn(u), hr.transition = d;
      }
    }
    function Fs(e, t, i, a) {
      var u = Yi(), d = hr.transition;
      hr.transition = null;
      try {
        Bn(Va), kn(e, t, i, a);
      } finally {
        Bn(u), hr.transition = d;
      }
    }
    function kn(e, t, i, a) {
      kt && rc(e, t, i, a);
    }
    function rc(e, t, i, a) {
      var u = js(e, t, i, a);
      if (u === null) {
        eS(e, t, a, ja, i), wp(e, a);
        return;
      }
      if (Ug(u, e, t, i, a)) {
        a.stopPropagation();
        return;
      }
      if (wp(e, a), t & Ui && nm(e)) {
        for (; u !== null; ) {
          var d = Gs(u);
          d !== null && Pg(d);
          var m = js(e, t, i, a);
          if (m === null && eS(e, t, a, ja, i), m === u)
            break;
          u = m;
        }
        u !== null && a.stopPropagation();
        return;
      }
      eS(e, t, a, null, i);
    }
    var ja = null;
    function js(e, t, i, a) {
      ja = null;
      var u = Jd(a), d = pc(u);
      if (d !== null) {
        var m = Ci(d);
        if (m === null)
          d = null;
        else {
          var S = m.tag;
          if (S === J) {
            var C = Na(m);
            if (C !== null)
              return C;
            d = null;
          } else if (S === _) {
            var D = m.stateNode;
            if (Af(D))
              return Pa(m);
            d = null;
          } else m !== d && (d = null);
        }
      }
      return ja = d, null;
    }
    function Nf(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Vr;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Va;
        case "message": {
          var t = rf();
          switch (t) {
            case Ou:
              return Vr;
            case Wo:
              return Va;
            case lo:
            case Ng:
              return Hi;
            case Ll:
              return Ii;
            default:
              return Hi;
          }
        }
        default:
          return Hi;
      }
    }
    function ic(e, t, i) {
      return e.addEventListener(t, i, !1), i;
    }
    function si(e, t, i) {
      return e.addEventListener(t, i, !0), i;
    }
    function _p(e, t, i, a) {
      return e.addEventListener(t, i, {
        capture: !0,
        passive: a
      }), i;
    }
    function Bs(e, t, i, a) {
      return e.addEventListener(t, i, {
        passive: a
      }), i;
    }
    var bi = null, Hs = null, Gl = null;
    function qo(e) {
      return bi = e, Hs = ac(), !0;
    }
    function Pf() {
      bi = null, Hs = null, Gl = null;
    }
    function fo() {
      if (Gl)
        return Gl;
      var e, t = Hs, i = t.length, a, u = ac(), d = u.length;
      for (e = 0; e < i && t[e] === u[e]; e++)
        ;
      var m = i - e;
      for (a = 1; a <= m && t[i - a] === u[d - a]; a++)
        ;
      var S = a > 1 ? 1 - a : void 0;
      return Gl = u.slice(e, S), Gl;
    }
    function ac() {
      return "value" in bi ? bi.value : bi.textContent;
    }
    function Zo(e) {
      var t, i = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && i === 13 && (t = 13)) : t = i, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Is() {
      return !0;
    }
    function oc() {
      return !1;
    }
    function Mr(e) {
      function t(i, a, u, d, m) {
        this._reactName = i, this._targetInst = u, this.type = a, this.nativeEvent = d, this.target = m, this.currentTarget = null;
        for (var S in e)
          if (e.hasOwnProperty(S)) {
            var C = e[S];
            C ? this[S] = C(d) : this[S] = d[S];
          }
        var D = d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1;
        return D ? this.isDefaultPrevented = Is : this.isDefaultPrevented = oc, this.isPropagationStopped = oc, this;
      }
      return pt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = Is);
        },
        stopPropagation: function() {
          var i = this.nativeEvent;
          i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = Is);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Is
      }), t;
    }
    var In = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ba = Mr(In), jr = pt({}, In, {
      view: 0,
      detail: 0
    }), ui = Mr(jr), Uf, lc, Kl;
    function zg(e) {
      e !== Kl && (Kl && e.type === "mousemove" ? (Uf = e.screenX - Kl.screenX, lc = e.screenY - Kl.screenY) : (Uf = 0, lc = 0), Kl = e);
    }
    var va = pt({}, jr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: hn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (zg(e), Uf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : lc;
      }
    }), kp = Mr(va), Mp = pt({}, va, {
      dataTransfer: 0
    }), Ql = Mr(Mp), Ap = pt({}, jr, {
      relatedTarget: 0
    }), po = Mr(Ap), im = pt({}, In, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), am = Mr(im), Op = pt({}, In, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Vf = Mr(Op), Fg = pt({}, In, {
      data: 0
    }), om = Mr(Fg), lm = om, sm = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Xl = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function jg(e) {
      if (e.key) {
        var t = sm[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var i = Zo(e);
        return i === 13 ? "Enter" : String.fromCharCode(i);
      }
      return e.type === "keydown" || e.type === "keyup" ? Xl[e.keyCode] || "Unidentified" : "";
    }
    var Ys = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function um(e) {
      var t = this, i = t.nativeEvent;
      if (i.getModifierState)
        return i.getModifierState(e);
      var a = Ys[e];
      return a ? !!i[a] : !1;
    }
    function hn(e) {
      return um;
    }
    var Bg = pt({}, jr, {
      key: jg,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: hn,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Zo(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Zo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), cm = Mr(Bg), Hg = pt({}, va, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), fm = Mr(Hg), dm = pt({}, jr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: hn
    }), pm = Mr(dm), Ig = pt({}, In, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Wi = Mr(Ig), Lp = pt({}, va, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Yg = Mr(Lp), Jo = [9, 13, 27, 32], sc = 229, ho = Nn && "CompositionEvent" in window, el = null;
    Nn && "documentMode" in document && (el = document.documentMode);
    var Np = Nn && "TextEvent" in window && !el, zf = Nn && (!ho || el && el > 8 && el <= 11), hm = 32, Ff = String.fromCharCode(hm);
    function Wg() {
      St("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), St("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), St("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), St("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Pp = !1;
    function vm(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function jf(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Bf(e, t) {
      return e === "keydown" && t.keyCode === sc;
    }
    function Up(e, t) {
      switch (e) {
        case "keyup":
          return Jo.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== sc;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Hf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function mm(e) {
      return e.locale === "ko";
    }
    var ql = !1;
    function Vp(e, t, i, a, u) {
      var d, m;
      if (ho ? d = jf(t) : ql ? Up(t, a) && (d = "onCompositionEnd") : Bf(t, a) && (d = "onCompositionStart"), !d)
        return null;
      zf && !mm(a) && (!ql && d === "onCompositionStart" ? ql = qo(u) : d === "onCompositionEnd" && ql && (m = fo()));
      var S = xm(i, d);
      if (S.length > 0) {
        var C = new om(d, t, null, a, u);
        if (e.push({
          event: C,
          listeners: S
        }), m)
          C.data = m;
        else {
          var D = Hf(a);
          D !== null && (C.data = D);
        }
      }
    }
    function If(e, t) {
      switch (e) {
        case "compositionend":
          return Hf(t);
        case "keypress":
          var i = t.which;
          return i !== hm ? null : (Pp = !0, Ff);
        case "textInput":
          var a = t.data;
          return a === Ff && Pp ? null : a;
        default:
          return null;
      }
    }
    function zp(e, t) {
      if (ql) {
        if (e === "compositionend" || !ho && Up(e, t)) {
          var i = fo();
          return Pf(), ql = !1, i;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!vm(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return zf && !mm(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Yf(e, t, i, a, u) {
      var d;
      if (Np ? d = If(t, a) : d = zp(t, a), !d)
        return null;
      var m = xm(i, "onBeforeInput");
      if (m.length > 0) {
        var S = new lm("onBeforeInput", "beforeinput", null, a, u);
        e.push({
          event: S,
          listeners: m
        }), S.data = d;
      }
    }
    function ym(e, t, i, a, u, d, m) {
      Vp(e, t, i, a, u), Yf(e, t, i, a, u);
    }
    var $g = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function uc(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!$g[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Gg(e) {
      if (!Nn)
        return !1;
      var t = "on" + e, i = t in document;
      if (!i) {
        var a = document.createElement("div");
        a.setAttribute(t, "return;"), i = typeof a[t] == "function";
      }
      return i;
    }
    function cc() {
      St("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function gm(e, t, i, a) {
      Ds(a);
      var u = xm(t, "onChange");
      if (u.length > 0) {
        var d = new Ba("onChange", "change", null, i, a);
        e.push({
          event: d,
          listeners: u
        });
      }
    }
    var tl = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function s(e) {
      var t = [];
      gm(t, n, e, Jd(e)), Mv(f, t);
    }
    function f(e) {
      uT(e, 0);
    }
    function h(e) {
      var t = Xf(e);
      if (_a(t))
        return e;
    }
    function g(e, t) {
      if (e === "change")
        return t;
    }
    var w = !1;
    Nn && (w = Gg("input") && (!document.documentMode || document.documentMode > 9));
    function A(e, t) {
      tl = e, n = t, tl.attachEvent("onpropertychange", K);
    }
    function P() {
      tl && (tl.detachEvent("onpropertychange", K), tl = null, n = null);
    }
    function K(e) {
      e.propertyName === "value" && h(n) && s(e);
    }
    function ce(e, t, i) {
      e === "focusin" ? (P(), A(t, i)) : e === "focusout" && P();
    }
    function pe(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return h(n);
    }
    function ue(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function ke(e, t) {
      if (e === "click")
        return h(t);
    }
    function Pe(e, t) {
      if (e === "input" || e === "change")
        return h(t);
    }
    function Fe(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ke(e, "number", e.value);
    }
    function Mn(e, t, i, a, u, d, m) {
      var S = i ? Xf(i) : window, C, D;
      if (r(S) ? C = g : uc(S) ? w ? C = Pe : (C = pe, D = ce) : ue(S) && (C = ke), C) {
        var M = C(t, i);
        if (M) {
          gm(e, M, a, u);
          return;
        }
      }
      D && D(t, S, i), t === "focusout" && Fe(S);
    }
    function B() {
      Gt("onMouseEnter", ["mouseout", "mouseover"]), Gt("onMouseLeave", ["mouseout", "mouseover"]), Gt("onPointerEnter", ["pointerout", "pointerover"]), Gt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function z(e, t, i, a, u, d, m) {
      var S = t === "mouseover" || t === "pointerover", C = t === "mouseout" || t === "pointerout";
      if (S && !bu(a)) {
        var D = a.relatedTarget || a.fromElement;
        if (D && (pc(D) || Zp(D)))
          return;
      }
      if (!(!C && !S)) {
        var M;
        if (u.window === u)
          M = u;
        else {
          var F = u.ownerDocument;
          F ? M = F.defaultView || F.parentWindow : M = window;
        }
        var V, $;
        if (C) {
          var Q = a.relatedTarget || a.toElement;
          if (V = i, $ = Q ? pc(Q) : null, $ !== null) {
            var ee = Ci($);
            ($ !== ee || $.tag !== U && $.tag !== H) && ($ = null);
          }
        } else
          V = null, $ = i;
        if (V !== $) {
          var De = kp, Qe = "onMouseLeave", He = "onMouseEnter", At = "mouse";
          (t === "pointerout" || t === "pointerover") && (De = fm, Qe = "onPointerLeave", He = "onPointerEnter", At = "pointer");
          var bt = V == null ? M : Xf(V), I = $ == null ? M : Xf($), te = new De(Qe, At + "leave", V, a, u);
          te.target = bt, te.relatedTarget = I;
          var Y = null, he = pc(u);
          if (he === i) {
            var Ae = new De(He, At + "enter", $, a, u);
            Ae.target = I, Ae.relatedTarget = bt, Y = Ae;
          }
          r_(e, te, Y, V, $);
        }
      }
    }
    function W(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var fe = typeof Object.is == "function" ? Object.is : W;
    function Ue(e, t) {
      if (fe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var i = Object.keys(e), a = Object.keys(t);
      if (i.length !== a.length)
        return !1;
      for (var u = 0; u < i.length; u++) {
        var d = i[u];
        if (!Ar.call(t, d) || !fe(e[d], t[d]))
          return !1;
      }
      return !0;
    }
    function Xe(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Ze(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function rt(e, t) {
      for (var i = Xe(e), a = 0, u = 0; i; ) {
        if (i.nodeType === no) {
          if (u = a + i.textContent.length, a <= t && u >= t)
            return {
              node: i,
              offset: t - a
            };
          a = u;
        }
        i = Xe(Ze(i));
      }
    }
    function ar(e) {
      var t = e.ownerDocument, i = t && t.defaultView || window, a = i.getSelection && i.getSelection();
      if (!a || a.rangeCount === 0)
        return null;
      var u = a.anchorNode, d = a.anchorOffset, m = a.focusNode, S = a.focusOffset;
      try {
        u.nodeType, m.nodeType;
      } catch {
        return null;
      }
      return Bt(e, u, d, m, S);
    }
    function Bt(e, t, i, a, u) {
      var d = 0, m = -1, S = -1, C = 0, D = 0, M = e, F = null;
      e: for (; ; ) {
        for (var V = null; M === t && (i === 0 || M.nodeType === no) && (m = d + i), M === a && (u === 0 || M.nodeType === no) && (S = d + u), M.nodeType === no && (d += M.nodeValue.length), (V = M.firstChild) !== null; )
          F = M, M = V;
        for (; ; ) {
          if (M === e)
            break e;
          if (F === t && ++C === i && (m = d), F === a && ++D === u && (S = d), (V = M.nextSibling) !== null)
            break;
          M = F, F = M.parentNode;
        }
        M = V;
      }
      return m === -1 || S === -1 ? null : {
        start: m,
        end: S
      };
    }
    function nl(e, t) {
      var i = e.ownerDocument || document, a = i && i.defaultView || window;
      if (a.getSelection) {
        var u = a.getSelection(), d = e.textContent.length, m = Math.min(t.start, d), S = t.end === void 0 ? m : Math.min(t.end, d);
        if (!u.extend && m > S) {
          var C = S;
          S = m, m = C;
        }
        var D = rt(e, m), M = rt(e, S);
        if (D && M) {
          if (u.rangeCount === 1 && u.anchorNode === D.node && u.anchorOffset === D.offset && u.focusNode === M.node && u.focusOffset === M.offset)
            return;
          var F = i.createRange();
          F.setStart(D.node, D.offset), u.removeAllRanges(), m > S ? (u.addRange(F), u.extend(M.node, M.offset)) : (F.setEnd(M.node, M.offset), u.addRange(F));
        }
      }
    }
    function Sm(e) {
      return e && e.nodeType === no;
    }
    function ZC(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Sm(e) ? !1 : Sm(t) ? ZC(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function FD(e) {
      return e && e.ownerDocument && ZC(e.ownerDocument.documentElement, e);
    }
    function jD(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function JC() {
      for (var e = window, t = Pi(); t instanceof e.HTMLIFrameElement; ) {
        if (jD(t))
          e = t.contentWindow;
        else
          return t;
        t = Pi(e.document);
      }
      return t;
    }
    function Kg(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function BD() {
      var e = JC();
      return {
        focusedElem: e,
        selectionRange: Kg(e) ? ID(e) : null
      };
    }
    function HD(e) {
      var t = JC(), i = e.focusedElem, a = e.selectionRange;
      if (t !== i && FD(i)) {
        a !== null && Kg(i) && YD(i, a);
        for (var u = [], d = i; d = d.parentNode; )
          d.nodeType === Jr && u.push({
            element: d,
            left: d.scrollLeft,
            top: d.scrollTop
          });
        typeof i.focus == "function" && i.focus();
        for (var m = 0; m < u.length; m++) {
          var S = u[m];
          S.element.scrollLeft = S.left, S.element.scrollTop = S.top;
        }
      }
    }
    function ID(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = ar(e), t || {
        start: 0,
        end: 0
      };
    }
    function YD(e, t) {
      var i = t.start, a = t.end;
      a === void 0 && (a = i), "selectionStart" in e ? (e.selectionStart = i, e.selectionEnd = Math.min(a, e.value.length)) : nl(e, t);
    }
    var WD = Nn && "documentMode" in document && document.documentMode <= 11;
    function $D() {
      St("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Wf = null, Qg = null, Fp = null, Xg = !1;
    function GD(e) {
      if ("selectionStart" in e && Kg(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, i = t.getSelection();
      return {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      };
    }
    function KD(e) {
      return e.window === e ? e.document : e.nodeType === ro ? e : e.ownerDocument;
    }
    function eT(e, t, i) {
      var a = KD(i);
      if (!(Xg || Wf == null || Wf !== Pi(a))) {
        var u = GD(Wf);
        if (!Fp || !Ue(Fp, u)) {
          Fp = u;
          var d = xm(Qg, "onSelect");
          if (d.length > 0) {
            var m = new Ba("onSelect", "select", null, t, i);
            e.push({
              event: m,
              listeners: d
            }), m.target = Wf;
          }
        }
      }
    }
    function QD(e, t, i, a, u, d, m) {
      var S = i ? Xf(i) : window;
      switch (t) {
        case "focusin":
          (uc(S) || S.contentEditable === "true") && (Wf = S, Qg = i, Fp = null);
          break;
        case "focusout":
          Wf = null, Qg = null, Fp = null;
          break;
        case "mousedown":
          Xg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Xg = !1, eT(e, a, u);
          break;
        case "selectionchange":
          if (WD)
            break;
        case "keydown":
        case "keyup":
          eT(e, a, u);
      }
    }
    function Em(e, t) {
      var i = {};
      return i[e.toLowerCase()] = t.toLowerCase(), i["Webkit" + e] = "webkit" + t, i["Moz" + e] = "moz" + t, i;
    }
    var $f = {
      animationend: Em("Animation", "AnimationEnd"),
      animationiteration: Em("Animation", "AnimationIteration"),
      animationstart: Em("Animation", "AnimationStart"),
      transitionend: Em("Transition", "TransitionEnd")
    }, qg = {}, tT = {};
    Nn && (tT = document.createElement("div").style, "AnimationEvent" in window || (delete $f.animationend.animation, delete $f.animationiteration.animation, delete $f.animationstart.animation), "TransitionEvent" in window || delete $f.transitionend.transition);
    function Cm(e) {
      if (qg[e])
        return qg[e];
      if (!$f[e])
        return e;
      var t = $f[e];
      for (var i in t)
        if (t.hasOwnProperty(i) && i in tT)
          return qg[e] = t[i];
      return e;
    }
    var nT = Cm("animationend"), rT = Cm("animationiteration"), iT = Cm("animationstart"), aT = Cm("transitionend"), oT = /* @__PURE__ */ new Map(), lT = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Ws(e, t) {
      oT.set(e, t), St(t, [e]);
    }
    function XD() {
      for (var e = 0; e < lT.length; e++) {
        var t = lT[e], i = t.toLowerCase(), a = t[0].toUpperCase() + t.slice(1);
        Ws(i, "on" + a);
      }
      Ws(nT, "onAnimationEnd"), Ws(rT, "onAnimationIteration"), Ws(iT, "onAnimationStart"), Ws("dblclick", "onDoubleClick"), Ws("focusin", "onFocus"), Ws("focusout", "onBlur"), Ws(aT, "onTransitionEnd");
    }
    function qD(e, t, i, a, u, d, m) {
      var S = oT.get(t);
      if (S !== void 0) {
        var C = Ba, D = t;
        switch (t) {
          case "keypress":
            if (Zo(a) === 0)
              return;
          case "keydown":
          case "keyup":
            C = cm;
            break;
          case "focusin":
            D = "focus", C = po;
            break;
          case "focusout":
            D = "blur", C = po;
            break;
          case "beforeblur":
          case "afterblur":
            C = po;
            break;
          case "click":
            if (a.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            C = kp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            C = Ql;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            C = pm;
            break;
          case nT:
          case rT:
          case iT:
            C = am;
            break;
          case aT:
            C = Wi;
            break;
          case "scroll":
            C = ui;
            break;
          case "wheel":
            C = Yg;
            break;
          case "copy":
          case "cut":
          case "paste":
            C = Vf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            C = fm;
            break;
        }
        var M = (d & Ui) !== 0;
        {
          var F = !M && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", V = t_(i, S, a.type, M, F);
          if (V.length > 0) {
            var $ = new C(S, D, null, a, u);
            e.push({
              event: $,
              listeners: V
            });
          }
        }
      }
    }
    XD(), B(), cc(), $D(), Wg();
    function ZD(e, t, i, a, u, d, m) {
      qD(e, t, i, a, u, d);
      var S = (d & Zd) === 0;
      S && (z(e, t, i, a, u), Mn(e, t, i, a, u), QD(e, t, i, a, u), ym(e, t, i, a, u));
    }
    var jp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Zg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(jp));
    function sT(e, t, i) {
      var a = e.type || "unknown-event";
      e.currentTarget = i, Aa(a, t, void 0, e), e.currentTarget = null;
    }
    function JD(e, t, i) {
      var a;
      if (i)
        for (var u = t.length - 1; u >= 0; u--) {
          var d = t[u], m = d.instance, S = d.currentTarget, C = d.listener;
          if (m !== a && e.isPropagationStopped())
            return;
          sT(e, C, S), a = m;
        }
      else
        for (var D = 0; D < t.length; D++) {
          var M = t[D], F = M.instance, V = M.currentTarget, $ = M.listener;
          if (F !== a && e.isPropagationStopped())
            return;
          sT(e, $, V), a = F;
        }
    }
    function uT(e, t) {
      for (var i = (t & Ui) !== 0, a = 0; a < e.length; a++) {
        var u = e[a], d = u.event, m = u.listeners;
        JD(d, m, i);
      }
      ku();
    }
    function e_(e, t, i, a, u) {
      var d = Jd(i), m = [];
      ZD(m, e, a, i, d, t), uT(m, t);
    }
    function En(e, t) {
      Zg.has(e) || v('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var i = !1, a = Mk(t), u = i_(e);
      a.has(u) || (cT(t, e, Yc, i), a.add(u));
    }
    function Jg(e, t, i) {
      Zg.has(e) && !t && v('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var a = 0;
      t && (a |= Ui), cT(i, e, a, t);
    }
    var Tm = "_reactListening" + Math.random().toString(36).slice(2);
    function Bp(e) {
      if (!e[Tm]) {
        e[Tm] = !0, ht.forEach(function(i) {
          i !== "selectionchange" && (Zg.has(i) || Jg(i, !1, e), Jg(i, !0, e));
        });
        var t = e.nodeType === ro ? e : e.ownerDocument;
        t !== null && (t[Tm] || (t[Tm] = !0, Jg("selectionchange", !1, t)));
      }
    }
    function cT(e, t, i, a, u) {
      var d = vr(e, t, i), m = void 0;
      _u && (t === "touchstart" || t === "touchmove" || t === "wheel") && (m = !0), e = e, a ? m !== void 0 ? _p(e, t, d, m) : si(e, t, d) : m !== void 0 ? Bs(e, t, d, m) : ic(e, t, d);
    }
    function fT(e, t) {
      return e === t || e.nodeType === Un && e.parentNode === t;
    }
    function eS(e, t, i, a, u) {
      var d = a;
      if (!(t & qd) && !(t & Yc)) {
        var m = u;
        if (a !== null) {
          var S = a;
          e: for (; ; ) {
            if (S === null)
              return;
            var C = S.tag;
            if (C === _ || C === O) {
              var D = S.stateNode.containerInfo;
              if (fT(D, m))
                break;
              if (C === O)
                for (var M = S.return; M !== null; ) {
                  var F = M.tag;
                  if (F === _ || F === O) {
                    var V = M.stateNode.containerInfo;
                    if (fT(V, m))
                      return;
                  }
                  M = M.return;
                }
              for (; D !== null; ) {
                var $ = pc(D);
                if ($ === null)
                  return;
                var Q = $.tag;
                if (Q === U || Q === H) {
                  S = d = $;
                  continue e;
                }
                D = D.parentNode;
              }
            }
            S = S.return;
          }
        }
      }
      Mv(function() {
        return e_(e, t, i, d);
      });
    }
    function Hp(e, t, i) {
      return {
        instance: e,
        listener: t,
        currentTarget: i
      };
    }
    function t_(e, t, i, a, u, d) {
      for (var m = t !== null ? t + "Capture" : null, S = a ? m : t, C = [], D = e, M = null; D !== null; ) {
        var F = D, V = F.stateNode, $ = F.tag;
        if ($ === U && V !== null && (M = V, S !== null)) {
          var Q = Fo(D, S);
          Q != null && C.push(Hp(D, Q, M));
        }
        if (u)
          break;
        D = D.return;
      }
      return C;
    }
    function xm(e, t) {
      for (var i = t + "Capture", a = [], u = e; u !== null; ) {
        var d = u, m = d.stateNode, S = d.tag;
        if (S === U && m !== null) {
          var C = m, D = Fo(u, i);
          D != null && a.unshift(Hp(u, D, C));
          var M = Fo(u, t);
          M != null && a.push(Hp(u, M, C));
        }
        u = u.return;
      }
      return a;
    }
    function Gf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== U);
      return e || null;
    }
    function n_(e, t) {
      for (var i = e, a = t, u = 0, d = i; d; d = Gf(d))
        u++;
      for (var m = 0, S = a; S; S = Gf(S))
        m++;
      for (; u - m > 0; )
        i = Gf(i), u--;
      for (; m - u > 0; )
        a = Gf(a), m--;
      for (var C = u; C--; ) {
        if (i === a || a !== null && i === a.alternate)
          return i;
        i = Gf(i), a = Gf(a);
      }
      return null;
    }
    function dT(e, t, i, a, u) {
      for (var d = t._reactName, m = [], S = i; S !== null && S !== a; ) {
        var C = S, D = C.alternate, M = C.stateNode, F = C.tag;
        if (D !== null && D === a)
          break;
        if (F === U && M !== null) {
          var V = M;
          if (u) {
            var $ = Fo(S, d);
            $ != null && m.unshift(Hp(S, $, V));
          } else if (!u) {
            var Q = Fo(S, d);
            Q != null && m.push(Hp(S, Q, V));
          }
        }
        S = S.return;
      }
      m.length !== 0 && e.push({
        event: t,
        listeners: m
      });
    }
    function r_(e, t, i, a, u) {
      var d = a && u ? n_(a, u) : null;
      a !== null && dT(e, t, a, d, !1), u !== null && i !== null && dT(e, i, u, d, !0);
    }
    function i_(e, t) {
      return e + "__bubble";
    }
    var $i = !1, Ip = "dangerouslySetInnerHTML", Rm = "suppressContentEditableWarning", $s = "suppressHydrationWarning", pT = "autoFocus", fc = "children", dc = "style", wm = "__html", tS, bm, Yp, hT, Dm, vT, mT;
    tS = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, bm = function(e, t) {
      Kd(e, t), Hc(e, t), Dv(e, t, {
        registrationNameDependencies: dt,
        possibleRegistrationNames: vt
      });
    }, vT = Nn && !document.documentMode, Yp = function(e, t, i) {
      if (!$i) {
        var a = _m(i), u = _m(t);
        u !== a && ($i = !0, v("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(a)));
      }
    }, hT = function(e) {
      if (!$i) {
        $i = !0;
        var t = [];
        e.forEach(function(i) {
          t.push(i);
        }), v("Extra attributes from the server: %s", t);
      }
    }, Dm = function(e, t) {
      t === !1 ? v("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : v("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, mT = function(e, t) {
      var i = e.namespaceURI === to ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return i.innerHTML = t, i.innerHTML;
    };
    var a_ = /\r\n?/g, o_ = /\u0000|\uFFFD/g;
    function _m(e) {
      er(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(a_, `
`).replace(o_, "");
    }
    function km(e, t, i, a) {
      var u = _m(t), d = _m(e);
      if (d !== u && (a && ($i || ($i = !0, v('Text content did not match. Server: "%s" Client: "%s"', d, u))), i && xe))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function yT(e) {
      return e.nodeType === ro ? e : e.ownerDocument;
    }
    function l_() {
    }
    function Mm(e) {
      e.onclick = l_;
    }
    function s_(e, t, i, a, u) {
      for (var d in a)
        if (a.hasOwnProperty(d)) {
          var m = a[d];
          if (d === dc)
            m && Object.freeze(m), Cv(t, m);
          else if (d === Ip) {
            var S = m ? m[wm] : void 0;
            S != null && uv(t, S);
          } else if (d === fc)
            if (typeof m == "string") {
              var C = e !== "textarea" || m !== "";
              C && xs(t, m);
            } else typeof m == "number" && xs(t, "" + m);
          else d === Rm || d === $s || d === pT || (dt.hasOwnProperty(d) ? m != null && (typeof m != "function" && Dm(d, m), d === "onScroll" && En("scroll", t)) : m != null && Or(t, d, m, u));
        }
    }
    function u_(e, t, i, a) {
      for (var u = 0; u < t.length; u += 2) {
        var d = t[u], m = t[u + 1];
        d === dc ? Cv(e, m) : d === Ip ? uv(e, m) : d === fc ? xs(e, m) : Or(e, d, m, a);
      }
    }
    function c_(e, t, i, a) {
      var u, d = yT(i), m, S = a;
      if (S === to && (S = Bd(e)), S === to) {
        if (u = Vo(e, t), !u && e !== e.toLowerCase() && v("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var C = d.createElement("div");
          C.innerHTML = "<script><\/script>";
          var D = C.firstChild;
          m = C.removeChild(D);
        } else if (typeof t.is == "string")
          m = d.createElement(e, {
            is: t.is
          });
        else if (m = d.createElement(e), e === "select") {
          var M = m;
          t.multiple ? M.multiple = !0 : t.size && (M.size = t.size);
        }
      } else
        m = d.createElementNS(S, e);
      return S === to && !u && Object.prototype.toString.call(m) === "[object HTMLUnknownElement]" && !Ar.call(tS, e) && (tS[e] = !0, v("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), m;
    }
    function f_(e, t) {
      return yT(t).createTextNode(e);
    }
    function d_(e, t, i, a) {
      var u = Vo(t, i);
      bm(t, i);
      var d;
      switch (t) {
        case "dialog":
          En("cancel", e), En("close", e), d = i;
          break;
        case "iframe":
        case "object":
        case "embed":
          En("load", e), d = i;
          break;
        case "video":
        case "audio":
          for (var m = 0; m < jp.length; m++)
            En(jp[m], e);
          d = i;
          break;
        case "source":
          En("error", e), d = i;
          break;
        case "img":
        case "image":
        case "link":
          En("error", e), En("load", e), d = i;
          break;
        case "details":
          En("toggle", e), d = i;
          break;
        case "input":
          ua(e, i), d = Ts(e, i), En("invalid", e);
          break;
        case "option":
          Pt(e, i), d = i;
          break;
        case "select":
          wl(e, i), d = Su(e, i), En("invalid", e);
          break;
        case "textarea":
          zd(e, i), d = Vd(e, i), En("invalid", e);
          break;
        default:
          d = i;
      }
      switch (jc(t, d), s_(t, e, a, d, u), t) {
        case "input":
          sa(e), G(e, i, !1);
          break;
        case "textarea":
          sa(e), lv(e);
          break;
        case "option":
          ln(e, i);
          break;
        case "select":
          Pd(e, i);
          break;
        default:
          typeof d.onClick == "function" && Mm(e);
          break;
      }
    }
    function p_(e, t, i, a, u) {
      bm(t, a);
      var d = null, m, S;
      switch (t) {
        case "input":
          m = Ts(e, i), S = Ts(e, a), d = [];
          break;
        case "select":
          m = Su(e, i), S = Su(e, a), d = [];
          break;
        case "textarea":
          m = Vd(e, i), S = Vd(e, a), d = [];
          break;
        default:
          m = i, S = a, typeof m.onClick != "function" && typeof S.onClick == "function" && Mm(e);
          break;
      }
      jc(t, S);
      var C, D, M = null;
      for (C in m)
        if (!(S.hasOwnProperty(C) || !m.hasOwnProperty(C) || m[C] == null))
          if (C === dc) {
            var F = m[C];
            for (D in F)
              F.hasOwnProperty(D) && (M || (M = {}), M[D] = "");
          } else C === Ip || C === fc || C === Rm || C === $s || C === pT || (dt.hasOwnProperty(C) ? d || (d = []) : (d = d || []).push(C, null));
      for (C in S) {
        var V = S[C], $ = m != null ? m[C] : void 0;
        if (!(!S.hasOwnProperty(C) || V === $ || V == null && $ == null))
          if (C === dc)
            if (V && Object.freeze(V), $) {
              for (D in $)
                $.hasOwnProperty(D) && (!V || !V.hasOwnProperty(D)) && (M || (M = {}), M[D] = "");
              for (D in V)
                V.hasOwnProperty(D) && $[D] !== V[D] && (M || (M = {}), M[D] = V[D]);
            } else
              M || (d || (d = []), d.push(C, M)), M = V;
          else if (C === Ip) {
            var Q = V ? V[wm] : void 0, ee = $ ? $[wm] : void 0;
            Q != null && ee !== Q && (d = d || []).push(C, Q);
          } else C === fc ? (typeof V == "string" || typeof V == "number") && (d = d || []).push(C, "" + V) : C === Rm || C === $s || (dt.hasOwnProperty(C) ? (V != null && (typeof V != "function" && Dm(C, V), C === "onScroll" && En("scroll", e)), !d && $ !== V && (d = [])) : (d = d || []).push(C, V));
      }
      return M && (_g(M, S[dc]), (d = d || []).push(dc, M)), d;
    }
    function h_(e, t, i, a, u) {
      i === "input" && u.type === "radio" && u.name != null && x(e, u);
      var d = Vo(i, a), m = Vo(i, u);
      switch (u_(e, t, d, m), i) {
        case "input":
          L(e, u);
          break;
        case "textarea":
          ov(e, u);
          break;
        case "select":
          Vc(e, u);
          break;
      }
    }
    function v_(e) {
      {
        var t = e.toLowerCase();
        return Ru.hasOwnProperty(t) && Ru[t] || null;
      }
    }
    function m_(e, t, i, a, u, d, m) {
      var S, C;
      switch (S = Vo(t, i), bm(t, i), t) {
        case "dialog":
          En("cancel", e), En("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          En("load", e);
          break;
        case "video":
        case "audio":
          for (var D = 0; D < jp.length; D++)
            En(jp[D], e);
          break;
        case "source":
          En("error", e);
          break;
        case "img":
        case "image":
        case "link":
          En("error", e), En("load", e);
          break;
        case "details":
          En("toggle", e);
          break;
        case "input":
          ua(e, i), En("invalid", e);
          break;
        case "option":
          Pt(e, i);
          break;
        case "select":
          wl(e, i), En("invalid", e);
          break;
        case "textarea":
          zd(e, i), En("invalid", e);
          break;
      }
      jc(t, i);
      {
        C = /* @__PURE__ */ new Set();
        for (var M = e.attributes, F = 0; F < M.length; F++) {
          var V = M[F].name.toLowerCase();
          switch (V) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              C.add(M[F].name);
          }
        }
      }
      var $ = null;
      for (var Q in i)
        if (i.hasOwnProperty(Q)) {
          var ee = i[Q];
          if (Q === fc)
            typeof ee == "string" ? e.textContent !== ee && (i[$s] !== !0 && km(e.textContent, ee, d, m), $ = [fc, ee]) : typeof ee == "number" && e.textContent !== "" + ee && (i[$s] !== !0 && km(e.textContent, ee, d, m), $ = [fc, "" + ee]);
          else if (dt.hasOwnProperty(Q))
            ee != null && (typeof ee != "function" && Dm(Q, ee), Q === "onScroll" && En("scroll", e));
          else if (m && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof S == "boolean") {
            var De = void 0, Qe = an(Q);
            if (i[$s] !== !0) {
              if (!(Q === Rm || Q === $s || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              Q === "value" || Q === "checked" || Q === "selected")) {
                if (Q === Ip) {
                  var He = e.innerHTML, At = ee ? ee[wm] : void 0;
                  if (At != null) {
                    var bt = mT(e, At);
                    bt !== He && Yp(Q, He, bt);
                  }
                } else if (Q === dc) {
                  if (C.delete(Q), vT) {
                    var I = bg(ee);
                    De = e.getAttribute("style"), I !== De && Yp(Q, De, I);
                  }
                } else if (S && !j)
                  C.delete(Q.toLowerCase()), De = gl(e, Q, ee), ee !== De && Yp(Q, De, ee);
                else if (!vn(Q, Qe, S) && !tr(Q, ee, Qe, S)) {
                  var te = !1;
                  if (Qe !== null)
                    C.delete(Qe.attributeName), De = _o(e, Q, ee, Qe);
                  else {
                    var Y = a;
                    if (Y === to && (Y = Bd(t)), Y === to)
                      C.delete(Q.toLowerCase());
                    else {
                      var he = v_(Q);
                      he !== null && he !== Q && (te = !0, C.delete(he)), C.delete(Q);
                    }
                    De = gl(e, Q, ee);
                  }
                  var Ae = j;
                  !Ae && ee !== De && !te && Yp(Q, De, ee);
                }
              }
            }
          }
        }
      switch (m && // $FlowFixMe - Should be inferred as not undefined.
      C.size > 0 && i[$s] !== !0 && hT(C), t) {
        case "input":
          sa(e), G(e, i, !0);
          break;
        case "textarea":
          sa(e), lv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof i.onClick == "function" && Mm(e);
          break;
      }
      return $;
    }
    function y_(e, t, i) {
      var a = e.nodeValue !== t;
      return a;
    }
    function nS(e, t) {
      {
        if ($i)
          return;
        $i = !0, v("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function rS(e, t) {
      {
        if ($i)
          return;
        $i = !0, v('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function iS(e, t, i) {
      {
        if ($i)
          return;
        $i = !0, v("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function aS(e, t) {
      {
        if (t === "" || $i)
          return;
        $i = !0, v('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function g_(e, t, i) {
      switch (t) {
        case "input":
          q(e, i);
          return;
        case "textarea":
          Tg(e, i);
          return;
        case "select":
          Ud(e, i);
          return;
      }
    }
    var Wp = function() {
    }, $p = function() {
    };
    {
      var S_ = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], gT = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], E_ = gT.concat(["button"]), C_ = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], ST = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      $p = function(e, t) {
        var i = pt({}, e || ST), a = {
          tag: t
        };
        return gT.indexOf(t) !== -1 && (i.aTagInScope = null, i.buttonTagInScope = null, i.nobrTagInScope = null), E_.indexOf(t) !== -1 && (i.pTagInButtonScope = null), S_.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (i.listItemTagAutoclosing = null, i.dlItemTagAutoclosing = null), i.current = a, t === "form" && (i.formTag = a), t === "a" && (i.aTagInScope = a), t === "button" && (i.buttonTagInScope = a), t === "nobr" && (i.nobrTagInScope = a), t === "p" && (i.pTagInButtonScope = a), t === "li" && (i.listItemTagAutoclosing = a), (t === "dd" || t === "dt") && (i.dlItemTagAutoclosing = a), i;
      };
      var T_ = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return C_.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, x_ = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, ET = {};
      Wp = function(e, t, i) {
        i = i || ST;
        var a = i.current, u = a && a.tag;
        t != null && (e != null && v("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var d = T_(e, u) ? null : a, m = d ? null : x_(e, i), S = d || m;
        if (S) {
          var C = S.tag, D = !!d + "|" + e + "|" + C;
          if (!ET[D]) {
            ET[D] = !0;
            var M = e, F = "";
            if (e === "#text" ? /\S/.test(t) ? M = "Text nodes" : (M = "Whitespace text nodes", F = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : M = "<" + e + ">", d) {
              var V = "";
              C === "table" && e === "tr" && (V += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), v("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", M, C, F, V);
            } else
              v("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", M, C);
          }
        }
      };
    }
    var Am = "suppressHydrationWarning", Om = "$", Lm = "/$", Gp = "$?", Kp = "$!", R_ = "style", oS = null, lS = null;
    function w_(e) {
      var t, i, a = e.nodeType;
      switch (a) {
        case ro:
        case Id: {
          t = a === ro ? "#document" : "#fragment";
          var u = e.documentElement;
          i = u ? u.namespaceURI : Hd(null, "");
          break;
        }
        default: {
          var d = a === Un ? e.parentNode : e, m = d.namespaceURI || null;
          t = d.tagName, i = Hd(m, t);
          break;
        }
      }
      {
        var S = t.toLowerCase(), C = $p(null, S);
        return {
          namespace: i,
          ancestorInfo: C
        };
      }
    }
    function b_(e, t, i) {
      {
        var a = e, u = Hd(a.namespace, t), d = $p(a.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: d
        };
      }
    }
    function kV(e) {
      return e;
    }
    function D_(e) {
      oS = Hn(), lS = BD();
      var t = null;
      return qn(!1), t;
    }
    function __(e) {
      HD(lS), qn(oS), oS = null, lS = null;
    }
    function k_(e, t, i, a, u) {
      var d;
      {
        var m = a;
        if (Wp(e, null, m.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var S = "" + t.children, C = $p(m.ancestorInfo, e);
          Wp(null, S, C);
        }
        d = m.namespace;
      }
      var D = c_(e, t, i, d);
      return qp(u, D), vS(D, t), D;
    }
    function M_(e, t) {
      e.appendChild(t);
    }
    function A_(e, t, i, a, u) {
      switch (d_(e, t, i, a), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!i.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function O_(e, t, i, a, u, d) {
      {
        var m = d;
        if (typeof a.children != typeof i.children && (typeof a.children == "string" || typeof a.children == "number")) {
          var S = "" + a.children, C = $p(m.ancestorInfo, t);
          Wp(null, S, C);
        }
      }
      return p_(e, t, i, a);
    }
    function sS(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function L_(e, t, i, a) {
      {
        var u = i;
        Wp(null, e, u.ancestorInfo);
      }
      var d = f_(e, t);
      return qp(a, d), d;
    }
    function N_() {
      var e = window.event;
      return e === void 0 ? Hi : Nf(e.type);
    }
    var uS = typeof setTimeout == "function" ? setTimeout : void 0, P_ = typeof clearTimeout == "function" ? clearTimeout : void 0, cS = -1, CT = typeof Promise == "function" ? Promise : void 0, U_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof CT < "u" ? function(e) {
      return CT.resolve(null).then(e).catch(V_);
    } : uS;
    function V_(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function z_(e, t, i, a) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          i.autoFocus && e.focus();
          return;
        case "img": {
          i.src && (e.src = i.src);
          return;
        }
      }
    }
    function F_(e, t, i, a, u, d) {
      h_(e, t, i, a, u), vS(e, u);
    }
    function TT(e) {
      xs(e, "");
    }
    function j_(e, t, i) {
      e.nodeValue = i;
    }
    function B_(e, t) {
      e.appendChild(t);
    }
    function H_(e, t) {
      var i;
      e.nodeType === Un ? (i = e.parentNode, i.insertBefore(t, e)) : (i = e, i.appendChild(t));
      var a = e._reactRootContainer;
      a == null && i.onclick === null && Mm(i);
    }
    function I_(e, t, i) {
      e.insertBefore(t, i);
    }
    function Y_(e, t, i) {
      e.nodeType === Un ? e.parentNode.insertBefore(t, i) : e.insertBefore(t, i);
    }
    function W_(e, t) {
      e.removeChild(t);
    }
    function $_(e, t) {
      e.nodeType === Un ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function fS(e, t) {
      var i = t, a = 0;
      do {
        var u = i.nextSibling;
        if (e.removeChild(i), u && u.nodeType === Un) {
          var d = u.data;
          if (d === Lm)
            if (a === 0) {
              e.removeChild(u), $l(t);
              return;
            } else
              a--;
          else (d === Om || d === Gp || d === Kp) && a++;
        }
        i = u;
      } while (i);
      $l(t);
    }
    function G_(e, t) {
      e.nodeType === Un ? fS(e.parentNode, t) : e.nodeType === Jr && fS(e, t), $l(e);
    }
    function K_(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Q_(e) {
      e.nodeValue = "";
    }
    function X_(e, t) {
      e = e;
      var i = t[R_], a = i != null && i.hasOwnProperty("display") ? i.display : null;
      e.style.display = Fc("display", a);
    }
    function q_(e, t) {
      e.nodeValue = t;
    }
    function Z_(e) {
      e.nodeType === Jr ? e.textContent = "" : e.nodeType === ro && e.documentElement && e.removeChild(e.documentElement);
    }
    function J_(e, t, i) {
      return e.nodeType !== Jr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function ek(e, t) {
      return t === "" || e.nodeType !== no ? null : e;
    }
    function tk(e) {
      return e.nodeType !== Un ? null : e;
    }
    function xT(e) {
      return e.data === Gp;
    }
    function dS(e) {
      return e.data === Kp;
    }
    function nk(e) {
      var t = e.nextSibling && e.nextSibling.dataset, i, a, u;
      return t && (i = t.dgst, a = t.msg, u = t.stck), {
        message: a,
        digest: i,
        stack: u
      };
    }
    function rk(e, t) {
      e._reactRetry = t;
    }
    function Nm(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Jr || t === no)
          break;
        if (t === Un) {
          var i = e.data;
          if (i === Om || i === Kp || i === Gp)
            break;
          if (i === Lm)
            return null;
        }
      }
      return e;
    }
    function Qp(e) {
      return Nm(e.nextSibling);
    }
    function ik(e) {
      return Nm(e.firstChild);
    }
    function ak(e) {
      return Nm(e.firstChild);
    }
    function ok(e) {
      return Nm(e.nextSibling);
    }
    function lk(e, t, i, a, u, d, m) {
      qp(d, e), vS(e, i);
      var S;
      {
        var C = u;
        S = C.namespace;
      }
      var D = (d.mode & Ct) !== $e;
      return m_(e, t, i, S, a, D, m);
    }
    function sk(e, t, i, a) {
      return qp(i, e), i.mode & Ct, y_(e, t);
    }
    function uk(e, t) {
      qp(t, e);
    }
    function ck(e) {
      for (var t = e.nextSibling, i = 0; t; ) {
        if (t.nodeType === Un) {
          var a = t.data;
          if (a === Lm) {
            if (i === 0)
              return Qp(t);
            i--;
          } else (a === Om || a === Kp || a === Gp) && i++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function RT(e) {
      for (var t = e.previousSibling, i = 0; t; ) {
        if (t.nodeType === Un) {
          var a = t.data;
          if (a === Om || a === Kp || a === Gp) {
            if (i === 0)
              return t;
            i--;
          } else a === Lm && i++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function fk(e) {
      $l(e);
    }
    function dk(e) {
      $l(e);
    }
    function pk(e) {
      return e !== "head" && e !== "body";
    }
    function hk(e, t, i, a) {
      var u = !0;
      km(t.nodeValue, i, a, u);
    }
    function vk(e, t, i, a, u, d) {
      if (t[Am] !== !0) {
        var m = !0;
        km(a.nodeValue, u, d, m);
      }
    }
    function mk(e, t) {
      t.nodeType === Jr ? nS(e, t) : t.nodeType === Un || rS(e, t);
    }
    function yk(e, t) {
      {
        var i = e.parentNode;
        i !== null && (t.nodeType === Jr ? nS(i, t) : t.nodeType === Un || rS(i, t));
      }
    }
    function gk(e, t, i, a, u) {
      (u || t[Am] !== !0) && (a.nodeType === Jr ? nS(i, a) : a.nodeType === Un || rS(i, a));
    }
    function Sk(e, t, i) {
      iS(e, t);
    }
    function Ek(e, t) {
      aS(e, t);
    }
    function Ck(e, t, i) {
      {
        var a = e.parentNode;
        a !== null && iS(a, t);
      }
    }
    function Tk(e, t) {
      {
        var i = e.parentNode;
        i !== null && aS(i, t);
      }
    }
    function xk(e, t, i, a, u, d) {
      (d || t[Am] !== !0) && iS(i, a);
    }
    function Rk(e, t, i, a, u) {
      (u || t[Am] !== !0) && aS(i, a);
    }
    function wk(e) {
      v("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function bk(e) {
      Bp(e);
    }
    var Kf = Math.random().toString(36).slice(2), Qf = "__reactFiber$" + Kf, pS = "__reactProps$" + Kf, Xp = "__reactContainer$" + Kf, hS = "__reactEvents$" + Kf, Dk = "__reactListeners$" + Kf, _k = "__reactHandles$" + Kf;
    function kk(e) {
      delete e[Qf], delete e[pS], delete e[hS], delete e[Dk], delete e[_k];
    }
    function qp(e, t) {
      t[Qf] = e;
    }
    function Pm(e, t) {
      t[Xp] = e;
    }
    function wT(e) {
      e[Xp] = null;
    }
    function Zp(e) {
      return !!e[Xp];
    }
    function pc(e) {
      var t = e[Qf];
      if (t)
        return t;
      for (var i = e.parentNode; i; ) {
        if (t = i[Xp] || i[Qf], t) {
          var a = t.alternate;
          if (t.child !== null || a !== null && a.child !== null)
            for (var u = RT(e); u !== null; ) {
              var d = u[Qf];
              if (d)
                return d;
              u = RT(u);
            }
          return t;
        }
        e = i, i = e.parentNode;
      }
      return null;
    }
    function Gs(e) {
      var t = e[Qf] || e[Xp];
      return t && (t.tag === U || t.tag === H || t.tag === J || t.tag === _) ? t : null;
    }
    function Xf(e) {
      if (e.tag === U || e.tag === H)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Um(e) {
      return e[pS] || null;
    }
    function vS(e, t) {
      e[pS] = t;
    }
    function Mk(e) {
      var t = e[hS];
      return t === void 0 && (t = e[hS] = /* @__PURE__ */ new Set()), t;
    }
    var bT = {}, DT = c.ReactDebugCurrentFrame;
    function Vm(e) {
      if (e) {
        var t = e._owner, i = Za(e.type, e._source, t ? t.type : null);
        DT.setExtraStackFrame(i);
      } else
        DT.setExtraStackFrame(null);
    }
    function vo(e, t, i, a, u) {
      {
        var d = Function.call.bind(Ar);
        for (var m in e)
          if (d(e, m)) {
            var S = void 0;
            try {
              if (typeof e[m] != "function") {
                var C = Error((a || "React class") + ": " + i + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              S = e[m](t, m, a, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (D) {
              S = D;
            }
            S && !(S instanceof Error) && (Vm(u), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", i, m, typeof S), Vm(null)), S instanceof Error && !(S.message in bT) && (bT[S.message] = !0, Vm(u), v("Failed %s type: %s", i, S.message), Vm(null));
          }
      }
    }
    var mS = [], zm;
    zm = [];
    var Zl = -1;
    function Ks(e) {
      return {
        current: e
      };
    }
    function ci(e, t) {
      if (Zl < 0) {
        v("Unexpected pop.");
        return;
      }
      t !== zm[Zl] && v("Unexpected Fiber popped."), e.current = mS[Zl], mS[Zl] = null, zm[Zl] = null, Zl--;
    }
    function fi(e, t, i) {
      Zl++, mS[Zl] = e.current, zm[Zl] = i, e.current = t;
    }
    var yS;
    yS = {};
    var ma = {};
    Object.freeze(ma);
    var Jl = Ks(ma), rl = Ks(!1), gS = ma;
    function qf(e, t, i) {
      return i && il(t) ? gS : Jl.current;
    }
    function _T(e, t, i) {
      {
        var a = e.stateNode;
        a.__reactInternalMemoizedUnmaskedChildContext = t, a.__reactInternalMemoizedMaskedChildContext = i;
      }
    }
    function Zf(e, t) {
      {
        var i = e.type, a = i.contextTypes;
        if (!a)
          return ma;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var d = {};
        for (var m in a)
          d[m] = t[m];
        {
          var S = at(e) || "Unknown";
          vo(a, d, "context", S);
        }
        return u && _T(e, t, d), d;
      }
    }
    function Fm() {
      return rl.current;
    }
    function il(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function jm(e) {
      ci(rl, e), ci(Jl, e);
    }
    function SS(e) {
      ci(rl, e), ci(Jl, e);
    }
    function kT(e, t, i) {
      {
        if (Jl.current !== ma)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        fi(Jl, t, e), fi(rl, i, e);
      }
    }
    function MT(e, t, i) {
      {
        var a = e.stateNode, u = t.childContextTypes;
        if (typeof a.getChildContext != "function") {
          {
            var d = at(e) || "Unknown";
            yS[d] || (yS[d] = !0, v("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", d, d));
          }
          return i;
        }
        var m = a.getChildContext();
        for (var S in m)
          if (!(S in u))
            throw new Error((at(e) || "Unknown") + '.getChildContext(): key "' + S + '" is not defined in childContextTypes.');
        {
          var C = at(e) || "Unknown";
          vo(u, m, "child context", C);
        }
        return pt({}, i, m);
      }
    }
    function Bm(e) {
      {
        var t = e.stateNode, i = t && t.__reactInternalMemoizedMergedChildContext || ma;
        return gS = Jl.current, fi(Jl, i, e), fi(rl, rl.current, e), !0;
      }
    }
    function AT(e, t, i) {
      {
        var a = e.stateNode;
        if (!a)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (i) {
          var u = MT(e, t, gS);
          a.__reactInternalMemoizedMergedChildContext = u, ci(rl, e), ci(Jl, e), fi(Jl, u, e), fi(rl, i, e);
        } else
          ci(rl, e), fi(rl, i, e);
      }
    }
    function Ak(e) {
      {
        if (!Ol(e) || e.tag !== b)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case _:
              return t.stateNode.context;
            case b: {
              var i = t.type;
              if (il(i))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Qs = 0, Hm = 1, es = null, ES = !1, CS = !1;
    function OT(e) {
      es === null ? es = [e] : es.push(e);
    }
    function Ok(e) {
      ES = !0, OT(e);
    }
    function LT() {
      ES && Xs();
    }
    function Xs() {
      if (!CS && es !== null) {
        CS = !0;
        var e = 0, t = Yi();
        try {
          var i = !0, a = es;
          for (Bn(Vr); e < a.length; e++) {
            var u = a[e];
            do
              u = u(i);
            while (u !== null);
          }
          es = null, ES = !1;
        } catch (d) {
          throw es !== null && (es = es.slice(e + 1)), tp(Ou, Xs), d;
        } finally {
          Bn(t), CS = !1;
        }
      }
      return null;
    }
    var Jf = [], ed = 0, Im = null, Ym = 0, Ha = [], Ia = 0, hc = null, ts = 1, ns = "";
    function Lk(e) {
      return mc(), (e.flags & Oa) !== We;
    }
    function Nk(e) {
      return mc(), Ym;
    }
    function Pk() {
      var e = ns, t = ts, i = t & ~Uk(t);
      return i.toString(32) + e;
    }
    function vc(e, t) {
      mc(), Jf[ed++] = Ym, Jf[ed++] = Im, Im = e, Ym = t;
    }
    function NT(e, t, i) {
      mc(), Ha[Ia++] = ts, Ha[Ia++] = ns, Ha[Ia++] = hc, hc = e;
      var a = ts, u = ns, d = Wm(a) - 1, m = a & ~(1 << d), S = i + 1, C = Wm(t) + d;
      if (C > 30) {
        var D = d - d % 5, M = (1 << D) - 1, F = (m & M).toString(32), V = m >> D, $ = d - D, Q = Wm(t) + $, ee = S << $, De = ee | V, Qe = F + u;
        ts = 1 << Q | De, ns = Qe;
      } else {
        var He = S << d, At = He | m, bt = u;
        ts = 1 << C | At, ns = bt;
      }
    }
    function TS(e) {
      mc();
      var t = e.return;
      if (t !== null) {
        var i = 1, a = 0;
        vc(e, i), NT(e, i, a);
      }
    }
    function Wm(e) {
      return 32 - Fn(e);
    }
    function Uk(e) {
      return 1 << Wm(e) - 1;
    }
    function xS(e) {
      for (; e === Im; )
        Im = Jf[--ed], Jf[ed] = null, Ym = Jf[--ed], Jf[ed] = null;
      for (; e === hc; )
        hc = Ha[--Ia], Ha[Ia] = null, ns = Ha[--Ia], Ha[Ia] = null, ts = Ha[--Ia], Ha[Ia] = null;
    }
    function Vk() {
      return mc(), hc !== null ? {
        id: ts,
        overflow: ns
      } : null;
    }
    function zk(e, t) {
      mc(), Ha[Ia++] = ts, Ha[Ia++] = ns, Ha[Ia++] = hc, ts = t.id, ns = t.overflow, hc = e;
    }
    function mc() {
      Hr() || v("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Br = null, Ya = null, mo = !1, yc = !1, qs = null;
    function Fk() {
      mo && v("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function PT() {
      yc = !0;
    }
    function jk() {
      return yc;
    }
    function Bk(e) {
      var t = e.stateNode.containerInfo;
      return Ya = ak(t), Br = e, mo = !0, qs = null, yc = !1, !0;
    }
    function Hk(e, t, i) {
      return Ya = ok(t), Br = e, mo = !0, qs = null, yc = !1, i !== null && zk(e, i), !0;
    }
    function UT(e, t) {
      switch (e.tag) {
        case _: {
          mk(e.stateNode.containerInfo, t);
          break;
        }
        case U: {
          var i = (e.mode & Ct) !== $e;
          gk(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            i
          );
          break;
        }
        case J: {
          var a = e.memoizedState;
          a.dehydrated !== null && yk(a.dehydrated, t);
          break;
        }
      }
    }
    function VT(e, t) {
      UT(e, t);
      var i = $O();
      i.stateNode = t, i.return = e;
      var a = e.deletions;
      a === null ? (e.deletions = [i], e.flags |= Vi) : a.push(i);
    }
    function RS(e, t) {
      {
        if (yc)
          return;
        switch (e.tag) {
          case _: {
            var i = e.stateNode.containerInfo;
            switch (t.tag) {
              case U:
                var a = t.type;
                t.pendingProps, Sk(i, a);
                break;
              case H:
                var u = t.pendingProps;
                Ek(i, u);
                break;
            }
            break;
          }
          case U: {
            var d = e.type, m = e.memoizedProps, S = e.stateNode;
            switch (t.tag) {
              case U: {
                var C = t.type, D = t.pendingProps, M = (e.mode & Ct) !== $e;
                xk(
                  d,
                  m,
                  S,
                  C,
                  D,
                  // TODO: Delete this argument when we remove the legacy root API.
                  M
                );
                break;
              }
              case H: {
                var F = t.pendingProps, V = (e.mode & Ct) !== $e;
                Rk(
                  d,
                  m,
                  S,
                  F,
                  // TODO: Delete this argument when we remove the legacy root API.
                  V
                );
                break;
              }
            }
            break;
          }
          case J: {
            var $ = e.memoizedState, Q = $.dehydrated;
            if (Q !== null) switch (t.tag) {
              case U:
                var ee = t.type;
                t.pendingProps, Ck(Q, ee);
                break;
              case H:
                var De = t.pendingProps;
                Tk(Q, De);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function zT(e, t) {
      t.flags = t.flags & ~ti | yn, RS(e, t);
    }
    function FT(e, t) {
      switch (e.tag) {
        case U: {
          var i = e.type;
          e.pendingProps;
          var a = J_(t, i);
          return a !== null ? (e.stateNode = a, Br = e, Ya = ik(a), !0) : !1;
        }
        case H: {
          var u = e.pendingProps, d = ek(t, u);
          return d !== null ? (e.stateNode = d, Br = e, Ya = null, !0) : !1;
        }
        case J: {
          var m = tk(t);
          if (m !== null) {
            var S = {
              dehydrated: m,
              treeContext: Vk(),
              retryLane: ai
            };
            e.memoizedState = S;
            var C = GO(m);
            return C.return = e, e.child = C, Br = e, Ya = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function wS(e) {
      return (e.mode & Ct) !== $e && (e.flags & Ye) === We;
    }
    function bS(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function DS(e) {
      if (mo) {
        var t = Ya;
        if (!t) {
          wS(e) && (RS(Br, e), bS()), zT(Br, e), mo = !1, Br = e;
          return;
        }
        var i = t;
        if (!FT(e, t)) {
          wS(e) && (RS(Br, e), bS()), t = Qp(i);
          var a = Br;
          if (!t || !FT(e, t)) {
            zT(Br, e), mo = !1, Br = e;
            return;
          }
          VT(a, i);
        }
      }
    }
    function Ik(e, t, i) {
      var a = e.stateNode, u = !yc, d = lk(a, e.type, e.memoizedProps, t, i, e, u);
      return e.updateQueue = d, d !== null;
    }
    function Yk(e) {
      var t = e.stateNode, i = e.memoizedProps, a = sk(t, i, e);
      if (a) {
        var u = Br;
        if (u !== null)
          switch (u.tag) {
            case _: {
              var d = u.stateNode.containerInfo, m = (u.mode & Ct) !== $e;
              hk(
                d,
                t,
                i,
                // TODO: Delete this argument when we remove the legacy root API.
                m
              );
              break;
            }
            case U: {
              var S = u.type, C = u.memoizedProps, D = u.stateNode, M = (u.mode & Ct) !== $e;
              vk(
                S,
                C,
                D,
                t,
                i,
                // TODO: Delete this argument when we remove the legacy root API.
                M
              );
              break;
            }
          }
      }
      return a;
    }
    function Wk(e) {
      var t = e.memoizedState, i = t !== null ? t.dehydrated : null;
      if (!i)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      uk(i, e);
    }
    function $k(e) {
      var t = e.memoizedState, i = t !== null ? t.dehydrated : null;
      if (!i)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return ck(i);
    }
    function jT(e) {
      for (var t = e.return; t !== null && t.tag !== U && t.tag !== _ && t.tag !== J; )
        t = t.return;
      Br = t;
    }
    function $m(e) {
      if (e !== Br)
        return !1;
      if (!mo)
        return jT(e), mo = !0, !1;
      if (e.tag !== _ && (e.tag !== U || pk(e.type) && !sS(e.type, e.memoizedProps))) {
        var t = Ya;
        if (t)
          if (wS(e))
            BT(e), bS();
          else
            for (; t; )
              VT(e, t), t = Qp(t);
      }
      return jT(e), e.tag === J ? Ya = $k(e) : Ya = Br ? Qp(e.stateNode) : null, !0;
    }
    function Gk() {
      return mo && Ya !== null;
    }
    function BT(e) {
      for (var t = Ya; t; )
        UT(e, t), t = Qp(t);
    }
    function td() {
      Br = null, Ya = null, mo = !1, yc = !1;
    }
    function HT() {
      qs !== null && (PR(qs), qs = null);
    }
    function Hr() {
      return mo;
    }
    function _S(e) {
      qs === null ? qs = [e] : qs.push(e);
    }
    var Kk = c.ReactCurrentBatchConfig, Qk = null;
    function Xk() {
      return Kk.transition;
    }
    var yo = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var qk = function(e) {
        for (var t = null, i = e; i !== null; )
          i.mode & Jt && (t = i), i = i.return;
        return t;
      }, gc = function(e) {
        var t = [];
        return e.forEach(function(i) {
          t.push(i);
        }), t.sort().join(", ");
      }, Jp = [], eh = [], th = [], nh = [], rh = [], ih = [], Sc = /* @__PURE__ */ new Set();
      yo.recordUnsafeLifecycleWarnings = function(e, t) {
        Sc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Jp.push(e), e.mode & Jt && typeof t.UNSAFE_componentWillMount == "function" && eh.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && th.push(e), e.mode & Jt && typeof t.UNSAFE_componentWillReceiveProps == "function" && nh.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && rh.push(e), e.mode & Jt && typeof t.UNSAFE_componentWillUpdate == "function" && ih.push(e));
      }, yo.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Jp.length > 0 && (Jp.forEach(function(V) {
          e.add(at(V) || "Component"), Sc.add(V.type);
        }), Jp = []);
        var t = /* @__PURE__ */ new Set();
        eh.length > 0 && (eh.forEach(function(V) {
          t.add(at(V) || "Component"), Sc.add(V.type);
        }), eh = []);
        var i = /* @__PURE__ */ new Set();
        th.length > 0 && (th.forEach(function(V) {
          i.add(at(V) || "Component"), Sc.add(V.type);
        }), th = []);
        var a = /* @__PURE__ */ new Set();
        nh.length > 0 && (nh.forEach(function(V) {
          a.add(at(V) || "Component"), Sc.add(V.type);
        }), nh = []);
        var u = /* @__PURE__ */ new Set();
        rh.length > 0 && (rh.forEach(function(V) {
          u.add(at(V) || "Component"), Sc.add(V.type);
        }), rh = []);
        var d = /* @__PURE__ */ new Set();
        if (ih.length > 0 && (ih.forEach(function(V) {
          d.add(at(V) || "Component"), Sc.add(V.type);
        }), ih = []), t.size > 0) {
          var m = gc(t);
          v(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, m);
        }
        if (a.size > 0) {
          var S = gc(a);
          v(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, S);
        }
        if (d.size > 0) {
          var C = gc(d);
          v(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, C);
        }
        if (e.size > 0) {
          var D = gc(e);
          T(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, D);
        }
        if (i.size > 0) {
          var M = gc(i);
          T(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, M);
        }
        if (u.size > 0) {
          var F = gc(u);
          T(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, F);
        }
      };
      var Gm = /* @__PURE__ */ new Map(), IT = /* @__PURE__ */ new Set();
      yo.recordLegacyContextWarning = function(e, t) {
        var i = qk(e);
        if (i === null) {
          v("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!IT.has(e.type)) {
          var a = Gm.get(i);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (a === void 0 && (a = [], Gm.set(i, a)), a.push(e));
        }
      }, yo.flushLegacyContextWarning = function() {
        Gm.forEach(function(e, t) {
          if (e.length !== 0) {
            var i = e[0], a = /* @__PURE__ */ new Set();
            e.forEach(function(d) {
              a.add(at(d) || "Component"), IT.add(d.type);
            });
            var u = gc(a);
            try {
              Xt(i), v(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              fn();
            }
          }
        });
      }, yo.discardPendingWarnings = function() {
        Jp = [], eh = [], th = [], nh = [], rh = [], ih = [], Gm = /* @__PURE__ */ new Map();
      };
    }
    var kS, MS, AS, OS, LS, YT = function(e, t) {
    };
    kS = !1, MS = !1, AS = {}, OS = {}, LS = {}, YT = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var i = at(t) || "Component";
        OS[i] || (OS[i] = !0, v('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Zk(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function ah(e, t, i) {
      var a = i.ref;
      if (a !== null && typeof a != "function" && typeof a != "object") {
        if ((e.mode & Jt || re) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(i._owner && i._self && i._owner.stateNode !== i._self) && // Will already throw with "Function components cannot have string refs"
        !(i._owner && i._owner.tag !== b) && // Will already warn with "Function components cannot be given refs"
        !(typeof i.type == "function" && !Zk(i.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        i._owner) {
          var u = at(e) || "Component";
          AS[u] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, a), AS[u] = !0);
        }
        if (i._owner) {
          var d = i._owner, m;
          if (d) {
            var S = d;
            if (S.tag !== b)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            m = S.stateNode;
          }
          if (!m)
            throw new Error("Missing owner for string ref " + a + ". This error is likely caused by a bug in React. Please file an issue.");
          var C = m;
          Ea(a, "ref");
          var D = "" + a;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === D)
            return t.ref;
          var M = function(F) {
            var V = C.refs;
            F === null ? delete V[D] : V[D] = F;
          };
          return M._stringRef = D, M;
        } else {
          if (typeof a != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!i._owner)
            throw new Error("Element ref was specified as a string (" + a + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return a;
    }
    function Km(e, t) {
      var i = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (i === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : i) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Qm(e) {
      {
        var t = at(e) || "Component";
        if (LS[t])
          return;
        LS[t] = !0, v("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function WT(e) {
      var t = e._payload, i = e._init;
      return i(t);
    }
    function $T(e) {
      function t(I, te) {
        if (e) {
          var Y = I.deletions;
          Y === null ? (I.deletions = [te], I.flags |= Vi) : Y.push(te);
        }
      }
      function i(I, te) {
        if (!e)
          return null;
        for (var Y = te; Y !== null; )
          t(I, Y), Y = Y.sibling;
        return null;
      }
      function a(I, te) {
        for (var Y = /* @__PURE__ */ new Map(), he = te; he !== null; )
          he.key !== null ? Y.set(he.key, he) : Y.set(he.index, he), he = he.sibling;
        return Y;
      }
      function u(I, te) {
        var Y = _c(I, te);
        return Y.index = 0, Y.sibling = null, Y;
      }
      function d(I, te, Y) {
        if (I.index = Y, !e)
          return I.flags |= Oa, te;
        var he = I.alternate;
        if (he !== null) {
          var Ae = he.index;
          return Ae < te ? (I.flags |= yn, te) : Ae;
        } else
          return I.flags |= yn, te;
      }
      function m(I) {
        return e && I.alternate === null && (I.flags |= yn), I;
      }
      function S(I, te, Y, he) {
        if (te === null || te.tag !== H) {
          var Ae = _E(Y, I.mode, he);
          return Ae.return = I, Ae;
        } else {
          var _e = u(te, Y);
          return _e.return = I, _e;
        }
      }
      function C(I, te, Y, he) {
        var Ae = Y.type;
        if (Ae === Ta)
          return M(I, te, Y.props.children, he, Y.key);
        if (te !== null && (te.elementType === Ae || // Keep this check inline so it only runs on the false path:
        qR(te, Y) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Ae == "object" && Ae !== null && Ae.$$typeof === ot && WT(Ae) === te.type)) {
          var _e = u(te, Y.props);
          return _e.ref = ah(I, te, Y), _e.return = I, _e._debugSource = Y._source, _e._debugOwner = Y._owner, _e;
        }
        var nt = DE(Y, I.mode, he);
        return nt.ref = ah(I, te, Y), nt.return = I, nt;
      }
      function D(I, te, Y, he) {
        if (te === null || te.tag !== O || te.stateNode.containerInfo !== Y.containerInfo || te.stateNode.implementation !== Y.implementation) {
          var Ae = kE(Y, I.mode, he);
          return Ae.return = I, Ae;
        } else {
          var _e = u(te, Y.children || []);
          return _e.return = I, _e;
        }
      }
      function M(I, te, Y, he, Ae) {
        if (te === null || te.tag !== X) {
          var _e = su(Y, I.mode, he, Ae);
          return _e.return = I, _e;
        } else {
          var nt = u(te, Y);
          return nt.return = I, nt;
        }
      }
      function F(I, te, Y) {
        if (typeof te == "string" && te !== "" || typeof te == "number") {
          var he = _E("" + te, I.mode, Y);
          return he.return = I, he;
        }
        if (typeof te == "object" && te !== null) {
          switch (te.$$typeof) {
            case Lr: {
              var Ae = DE(te, I.mode, Y);
              return Ae.ref = ah(I, null, te), Ae.return = I, Ae;
            }
            case ur: {
              var _e = kE(te, I.mode, Y);
              return _e.return = I, _e;
            }
            case ot: {
              var nt = te._payload, st = te._init;
              return F(I, st(nt), Y);
            }
          }
          if (yt(te) || ct(te)) {
            var tn = su(te, I.mode, Y, null);
            return tn.return = I, tn;
          }
          Km(I, te);
        }
        return typeof te == "function" && Qm(I), null;
      }
      function V(I, te, Y, he) {
        var Ae = te !== null ? te.key : null;
        if (typeof Y == "string" && Y !== "" || typeof Y == "number")
          return Ae !== null ? null : S(I, te, "" + Y, he);
        if (typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case Lr:
              return Y.key === Ae ? C(I, te, Y, he) : null;
            case ur:
              return Y.key === Ae ? D(I, te, Y, he) : null;
            case ot: {
              var _e = Y._payload, nt = Y._init;
              return V(I, te, nt(_e), he);
            }
          }
          if (yt(Y) || ct(Y))
            return Ae !== null ? null : M(I, te, Y, he, null);
          Km(I, Y);
        }
        return typeof Y == "function" && Qm(I), null;
      }
      function $(I, te, Y, he, Ae) {
        if (typeof he == "string" && he !== "" || typeof he == "number") {
          var _e = I.get(Y) || null;
          return S(te, _e, "" + he, Ae);
        }
        if (typeof he == "object" && he !== null) {
          switch (he.$$typeof) {
            case Lr: {
              var nt = I.get(he.key === null ? Y : he.key) || null;
              return C(te, nt, he, Ae);
            }
            case ur: {
              var st = I.get(he.key === null ? Y : he.key) || null;
              return D(te, st, he, Ae);
            }
            case ot:
              var tn = he._payload, Ht = he._init;
              return $(I, te, Y, Ht(tn), Ae);
          }
          if (yt(he) || ct(he)) {
            var Zn = I.get(Y) || null;
            return M(te, Zn, he, Ae, null);
          }
          Km(te, he);
        }
        return typeof he == "function" && Qm(te), null;
      }
      function Q(I, te, Y) {
        {
          if (typeof I != "object" || I === null)
            return te;
          switch (I.$$typeof) {
            case Lr:
            case ur:
              YT(I, Y);
              var he = I.key;
              if (typeof he != "string")
                break;
              if (te === null) {
                te = /* @__PURE__ */ new Set(), te.add(he);
                break;
              }
              if (!te.has(he)) {
                te.add(he);
                break;
              }
              v("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", he);
              break;
            case ot:
              var Ae = I._payload, _e = I._init;
              Q(_e(Ae), te, Y);
              break;
          }
        }
        return te;
      }
      function ee(I, te, Y, he) {
        for (var Ae = null, _e = 0; _e < Y.length; _e++) {
          var nt = Y[_e];
          Ae = Q(nt, Ae, I);
        }
        for (var st = null, tn = null, Ht = te, Zn = 0, It = 0, Yn = null; Ht !== null && It < Y.length; It++) {
          Ht.index > It ? (Yn = Ht, Ht = null) : Yn = Ht.sibling;
          var pi = V(I, Ht, Y[It], he);
          if (pi === null) {
            Ht === null && (Ht = Yn);
            break;
          }
          e && Ht && pi.alternate === null && t(I, Ht), Zn = d(pi, Zn, It), tn === null ? st = pi : tn.sibling = pi, tn = pi, Ht = Yn;
        }
        if (It === Y.length) {
          if (i(I, Ht), Hr()) {
            var Qr = It;
            vc(I, Qr);
          }
          return st;
        }
        if (Ht === null) {
          for (; It < Y.length; It++) {
            var ga = F(I, Y[It], he);
            ga !== null && (Zn = d(ga, Zn, It), tn === null ? st = ga : tn.sibling = ga, tn = ga);
          }
          if (Hr()) {
            var Mi = It;
            vc(I, Mi);
          }
          return st;
        }
        for (var Ai = a(I, Ht); It < Y.length; It++) {
          var hi = $(Ai, I, It, Y[It], he);
          hi !== null && (e && hi.alternate !== null && Ai.delete(hi.key === null ? It : hi.key), Zn = d(hi, Zn, It), tn === null ? st = hi : tn.sibling = hi, tn = hi);
        }
        if (e && Ai.forEach(function(Ed) {
          return t(I, Ed);
        }), Hr()) {
          var us = It;
          vc(I, us);
        }
        return st;
      }
      function De(I, te, Y, he) {
        var Ae = ct(Y);
        if (typeof Ae != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          Y[Symbol.toStringTag] === "Generator" && (MS || v("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), MS = !0), Y.entries === Ae && (kS || v("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), kS = !0);
          var _e = Ae.call(Y);
          if (_e)
            for (var nt = null, st = _e.next(); !st.done; st = _e.next()) {
              var tn = st.value;
              nt = Q(tn, nt, I);
            }
        }
        var Ht = Ae.call(Y);
        if (Ht == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Zn = null, It = null, Yn = te, pi = 0, Qr = 0, ga = null, Mi = Ht.next(); Yn !== null && !Mi.done; Qr++, Mi = Ht.next()) {
          Yn.index > Qr ? (ga = Yn, Yn = null) : ga = Yn.sibling;
          var Ai = V(I, Yn, Mi.value, he);
          if (Ai === null) {
            Yn === null && (Yn = ga);
            break;
          }
          e && Yn && Ai.alternate === null && t(I, Yn), pi = d(Ai, pi, Qr), It === null ? Zn = Ai : It.sibling = Ai, It = Ai, Yn = ga;
        }
        if (Mi.done) {
          if (i(I, Yn), Hr()) {
            var hi = Qr;
            vc(I, hi);
          }
          return Zn;
        }
        if (Yn === null) {
          for (; !Mi.done; Qr++, Mi = Ht.next()) {
            var us = F(I, Mi.value, he);
            us !== null && (pi = d(us, pi, Qr), It === null ? Zn = us : It.sibling = us, It = us);
          }
          if (Hr()) {
            var Ed = Qr;
            vc(I, Ed);
          }
          return Zn;
        }
        for (var Vh = a(I, Yn); !Mi.done; Qr++, Mi = Ht.next()) {
          var dl = $(Vh, I, Qr, Mi.value, he);
          dl !== null && (e && dl.alternate !== null && Vh.delete(dl.key === null ? Qr : dl.key), pi = d(dl, pi, Qr), It === null ? Zn = dl : It.sibling = dl, It = dl);
        }
        if (e && Vh.forEach(function(RL) {
          return t(I, RL);
        }), Hr()) {
          var xL = Qr;
          vc(I, xL);
        }
        return Zn;
      }
      function Qe(I, te, Y, he) {
        if (te !== null && te.tag === H) {
          i(I, te.sibling);
          var Ae = u(te, Y);
          return Ae.return = I, Ae;
        }
        i(I, te);
        var _e = _E(Y, I.mode, he);
        return _e.return = I, _e;
      }
      function He(I, te, Y, he) {
        for (var Ae = Y.key, _e = te; _e !== null; ) {
          if (_e.key === Ae) {
            var nt = Y.type;
            if (nt === Ta) {
              if (_e.tag === X) {
                i(I, _e.sibling);
                var st = u(_e, Y.props.children);
                return st.return = I, st._debugSource = Y._source, st._debugOwner = Y._owner, st;
              }
            } else if (_e.elementType === nt || // Keep this check inline so it only runs on the false path:
            qR(_e, Y) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof nt == "object" && nt !== null && nt.$$typeof === ot && WT(nt) === _e.type) {
              i(I, _e.sibling);
              var tn = u(_e, Y.props);
              return tn.ref = ah(I, _e, Y), tn.return = I, tn._debugSource = Y._source, tn._debugOwner = Y._owner, tn;
            }
            i(I, _e);
            break;
          } else
            t(I, _e);
          _e = _e.sibling;
        }
        if (Y.type === Ta) {
          var Ht = su(Y.props.children, I.mode, he, Y.key);
          return Ht.return = I, Ht;
        } else {
          var Zn = DE(Y, I.mode, he);
          return Zn.ref = ah(I, te, Y), Zn.return = I, Zn;
        }
      }
      function At(I, te, Y, he) {
        for (var Ae = Y.key, _e = te; _e !== null; ) {
          if (_e.key === Ae)
            if (_e.tag === O && _e.stateNode.containerInfo === Y.containerInfo && _e.stateNode.implementation === Y.implementation) {
              i(I, _e.sibling);
              var nt = u(_e, Y.children || []);
              return nt.return = I, nt;
            } else {
              i(I, _e);
              break;
            }
          else
            t(I, _e);
          _e = _e.sibling;
        }
        var st = kE(Y, I.mode, he);
        return st.return = I, st;
      }
      function bt(I, te, Y, he) {
        var Ae = typeof Y == "object" && Y !== null && Y.type === Ta && Y.key === null;
        if (Ae && (Y = Y.props.children), typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case Lr:
              return m(He(I, te, Y, he));
            case ur:
              return m(At(I, te, Y, he));
            case ot:
              var _e = Y._payload, nt = Y._init;
              return bt(I, te, nt(_e), he);
          }
          if (yt(Y))
            return ee(I, te, Y, he);
          if (ct(Y))
            return De(I, te, Y, he);
          Km(I, Y);
        }
        return typeof Y == "string" && Y !== "" || typeof Y == "number" ? m(Qe(I, te, "" + Y, he)) : (typeof Y == "function" && Qm(I), i(I, te));
      }
      return bt;
    }
    var nd = $T(!0), GT = $T(!1);
    function Jk(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var i = t.child, a = _c(i, i.pendingProps);
        for (t.child = a, a.return = t; i.sibling !== null; )
          i = i.sibling, a = a.sibling = _c(i, i.pendingProps), a.return = t;
        a.sibling = null;
      }
    }
    function eM(e, t) {
      for (var i = e.child; i !== null; )
        BO(i, t), i = i.sibling;
    }
    var NS = Ks(null), PS;
    PS = {};
    var Xm = null, rd = null, US = null, qm = !1;
    function Zm() {
      Xm = null, rd = null, US = null, qm = !1;
    }
    function KT() {
      qm = !0;
    }
    function QT() {
      qm = !1;
    }
    function XT(e, t, i) {
      fi(NS, t._currentValue, e), t._currentValue = i, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== PS && v("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = PS;
    }
    function VS(e, t) {
      var i = NS.current;
      ci(NS, t), e._currentValue = i;
    }
    function zS(e, t, i) {
      for (var a = e; a !== null; ) {
        var u = a.alternate;
        if (Wl(a.childLanes, t) ? u !== null && !Wl(u.childLanes, t) && (u.childLanes = ft(u.childLanes, t)) : (a.childLanes = ft(a.childLanes, t), u !== null && (u.childLanes = ft(u.childLanes, t))), a === i)
          break;
        a = a.return;
      }
      a !== i && v("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function tM(e, t, i) {
      nM(e, t, i);
    }
    function nM(e, t, i) {
      var a = e.child;
      for (a !== null && (a.return = e); a !== null; ) {
        var u = void 0, d = a.dependencies;
        if (d !== null) {
          u = a.child;
          for (var m = d.firstContext; m !== null; ) {
            if (m.context === t) {
              if (a.tag === b) {
                var S = $u(i), C = rs(nn, S);
                C.tag = ey;
                var D = a.updateQueue;
                if (D !== null) {
                  var M = D.shared, F = M.pending;
                  F === null ? C.next = C : (C.next = F.next, F.next = C), M.pending = C;
                }
              }
              a.lanes = ft(a.lanes, i);
              var V = a.alternate;
              V !== null && (V.lanes = ft(V.lanes, i)), zS(a.return, i, e), d.lanes = ft(d.lanes, i);
              break;
            }
            m = m.next;
          }
        } else if (a.tag === ae)
          u = a.type === e.type ? null : a.child;
        else if (a.tag === Ne) {
          var $ = a.return;
          if ($ === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          $.lanes = ft($.lanes, i);
          var Q = $.alternate;
          Q !== null && (Q.lanes = ft(Q.lanes, i)), zS($, i, e), u = a.sibling;
        } else
          u = a.child;
        if (u !== null)
          u.return = a;
        else
          for (u = a; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var ee = u.sibling;
            if (ee !== null) {
              ee.return = u.return, u = ee;
              break;
            }
            u = u.return;
          }
        a = u;
      }
    }
    function id(e, t) {
      Xm = e, rd = null, US = null;
      var i = e.dependencies;
      if (i !== null) {
        var a = i.firstContext;
        a !== null && (oi(i.lanes, t) && Eh(), i.firstContext = null);
      }
    }
    function or(e) {
      qm && v("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (US !== e) {
        var i = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (rd === null) {
          if (Xm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          rd = i, Xm.dependencies = {
            lanes: se,
            firstContext: i
          };
        } else
          rd = rd.next = i;
      }
      return t;
    }
    var Ec = null;
    function FS(e) {
      Ec === null ? Ec = [e] : Ec.push(e);
    }
    function rM() {
      if (Ec !== null) {
        for (var e = 0; e < Ec.length; e++) {
          var t = Ec[e], i = t.interleaved;
          if (i !== null) {
            t.interleaved = null;
            var a = i.next, u = t.pending;
            if (u !== null) {
              var d = u.next;
              u.next = a, i.next = d;
            }
            t.pending = i;
          }
        }
        Ec = null;
      }
    }
    function qT(e, t, i, a) {
      var u = t.interleaved;
      return u === null ? (i.next = i, FS(t)) : (i.next = u.next, u.next = i), t.interleaved = i, Jm(e, a);
    }
    function iM(e, t, i, a) {
      var u = t.interleaved;
      u === null ? (i.next = i, FS(t)) : (i.next = u.next, u.next = i), t.interleaved = i;
    }
    function aM(e, t, i, a) {
      var u = t.interleaved;
      return u === null ? (i.next = i, FS(t)) : (i.next = u.next, u.next = i), t.interleaved = i, Jm(e, a);
    }
    function Gi(e, t) {
      return Jm(e, t);
    }
    var oM = Jm;
    function Jm(e, t) {
      e.lanes = ft(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = ft(i.lanes, t)), i === null && (e.flags & (yn | ti)) !== We && GR(e);
      for (var a = e, u = e.return; u !== null; )
        u.childLanes = ft(u.childLanes, t), i = u.alternate, i !== null ? i.childLanes = ft(i.childLanes, t) : (u.flags & (yn | ti)) !== We && GR(e), a = u, u = u.return;
      if (a.tag === _) {
        var d = a.stateNode;
        return d;
      } else
        return null;
    }
    var ZT = 0, JT = 1, ey = 2, jS = 3, ty = !1, BS, ny;
    BS = !1, ny = null;
    function HS(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: se
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function ex(e, t) {
      var i = t.updateQueue, a = e.updateQueue;
      if (i === a) {
        var u = {
          baseState: a.baseState,
          firstBaseUpdate: a.firstBaseUpdate,
          lastBaseUpdate: a.lastBaseUpdate,
          shared: a.shared,
          effects: a.effects
        };
        t.updateQueue = u;
      }
    }
    function rs(e, t) {
      var i = {
        eventTime: e,
        lane: t,
        tag: ZT,
        payload: null,
        callback: null,
        next: null
      };
      return i;
    }
    function Zs(e, t, i) {
      var a = e.updateQueue;
      if (a === null)
        return null;
      var u = a.shared;
      if (ny === u && !BS && (v("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), BS = !0), iO()) {
        var d = u.pending;
        return d === null ? t.next = t : (t.next = d.next, d.next = t), u.pending = t, oM(e, i);
      } else
        return aM(e, u, t, i);
    }
    function ry(e, t, i) {
      var a = t.updateQueue;
      if (a !== null) {
        var u = a.shared;
        if (gp(i)) {
          var d = u.lanes;
          d = Ep(d, e.pendingLanes);
          var m = ft(d, i);
          u.lanes = m, Mf(e, m);
        }
      }
    }
    function IS(e, t) {
      var i = e.updateQueue, a = e.alternate;
      if (a !== null) {
        var u = a.updateQueue;
        if (i === u) {
          var d = null, m = null, S = i.firstBaseUpdate;
          if (S !== null) {
            var C = S;
            do {
              var D = {
                eventTime: C.eventTime,
                lane: C.lane,
                tag: C.tag,
                payload: C.payload,
                callback: C.callback,
                next: null
              };
              m === null ? d = m = D : (m.next = D, m = D), C = C.next;
            } while (C !== null);
            m === null ? d = m = t : (m.next = t, m = t);
          } else
            d = m = t;
          i = {
            baseState: u.baseState,
            firstBaseUpdate: d,
            lastBaseUpdate: m,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = i;
          return;
        }
      }
      var M = i.lastBaseUpdate;
      M === null ? i.firstBaseUpdate = t : M.next = t, i.lastBaseUpdate = t;
    }
    function lM(e, t, i, a, u, d) {
      switch (i.tag) {
        case JT: {
          var m = i.payload;
          if (typeof m == "function") {
            KT();
            var S = m.call(d, a, u);
            {
              if (e.mode & Jt) {
                gn(!0);
                try {
                  m.call(d, a, u);
                } finally {
                  gn(!1);
                }
              }
              QT();
            }
            return S;
          }
          return m;
        }
        case jS:
          e.flags = e.flags & ~nr | Ye;
        case ZT: {
          var C = i.payload, D;
          if (typeof C == "function") {
            KT(), D = C.call(d, a, u);
            {
              if (e.mode & Jt) {
                gn(!0);
                try {
                  C.call(d, a, u);
                } finally {
                  gn(!1);
                }
              }
              QT();
            }
          } else
            D = C;
          return D == null ? a : pt({}, a, D);
        }
        case ey:
          return ty = !0, a;
      }
      return a;
    }
    function iy(e, t, i, a) {
      var u = e.updateQueue;
      ty = !1, ny = u.shared;
      var d = u.firstBaseUpdate, m = u.lastBaseUpdate, S = u.shared.pending;
      if (S !== null) {
        u.shared.pending = null;
        var C = S, D = C.next;
        C.next = null, m === null ? d = D : m.next = D, m = C;
        var M = e.alternate;
        if (M !== null) {
          var F = M.updateQueue, V = F.lastBaseUpdate;
          V !== m && (V === null ? F.firstBaseUpdate = D : V.next = D, F.lastBaseUpdate = C);
        }
      }
      if (d !== null) {
        var $ = u.baseState, Q = se, ee = null, De = null, Qe = null, He = d;
        do {
          var At = He.lane, bt = He.eventTime;
          if (Wl(a, At)) {
            if (Qe !== null) {
              var te = {
                eventTime: bt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Vt,
                tag: He.tag,
                payload: He.payload,
                callback: He.callback,
                next: null
              };
              Qe = Qe.next = te;
            }
            $ = lM(e, u, He, $, t, i);
            var Y = He.callback;
            if (Y !== null && // If the update was already committed, we should not queue its
            // callback again.
            He.lane !== Vt) {
              e.flags |= sn;
              var he = u.effects;
              he === null ? u.effects = [He] : he.push(He);
            }
          } else {
            var I = {
              eventTime: bt,
              lane: At,
              tag: He.tag,
              payload: He.payload,
              callback: He.callback,
              next: null
            };
            Qe === null ? (De = Qe = I, ee = $) : Qe = Qe.next = I, Q = ft(Q, At);
          }
          if (He = He.next, He === null) {
            if (S = u.shared.pending, S === null)
              break;
            var Ae = S, _e = Ae.next;
            Ae.next = null, He = _e, u.lastBaseUpdate = Ae, u.shared.pending = null;
          }
        } while (!0);
        Qe === null && (ee = $), u.baseState = ee, u.firstBaseUpdate = De, u.lastBaseUpdate = Qe;
        var nt = u.shared.interleaved;
        if (nt !== null) {
          var st = nt;
          do
            Q = ft(Q, st.lane), st = st.next;
          while (st !== nt);
        } else d === null && (u.shared.lanes = se);
        Oh(Q), e.lanes = Q, e.memoizedState = $;
      }
      ny = null;
    }
    function sM(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function tx() {
      ty = !1;
    }
    function ay() {
      return ty;
    }
    function nx(e, t, i) {
      var a = t.effects;
      if (t.effects = null, a !== null)
        for (var u = 0; u < a.length; u++) {
          var d = a[u], m = d.callback;
          m !== null && (d.callback = null, sM(m, i));
        }
    }
    var oh = {}, Js = Ks(oh), lh = Ks(oh), oy = Ks(oh);
    function ly(e) {
      if (e === oh)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function rx() {
      var e = ly(oy.current);
      return e;
    }
    function YS(e, t) {
      fi(oy, t, e), fi(lh, e, e), fi(Js, oh, e);
      var i = w_(t);
      ci(Js, e), fi(Js, i, e);
    }
    function ad(e) {
      ci(Js, e), ci(lh, e), ci(oy, e);
    }
    function WS() {
      var e = ly(Js.current);
      return e;
    }
    function ix(e) {
      ly(oy.current);
      var t = ly(Js.current), i = b_(t, e.type);
      t !== i && (fi(lh, e, e), fi(Js, i, e));
    }
    function $S(e) {
      lh.current === e && (ci(Js, e), ci(lh, e));
    }
    var uM = 0, ax = 1, ox = 1, sh = 2, go = Ks(uM);
    function GS(e, t) {
      return (e & t) !== 0;
    }
    function od(e) {
      return e & ax;
    }
    function KS(e, t) {
      return e & ax | t;
    }
    function cM(e, t) {
      return e | t;
    }
    function eu(e, t) {
      fi(go, t, e);
    }
    function ld(e) {
      ci(go, e);
    }
    function fM(e, t) {
      var i = e.memoizedState;
      return i !== null ? i.dehydrated !== null : (e.memoizedProps, !0);
    }
    function sy(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === J) {
          var i = t.memoizedState;
          if (i !== null) {
            var a = i.dehydrated;
            if (a === null || xT(a) || dS(a))
              return t;
          }
        } else if (t.tag === wt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Ye) !== We;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ki = (
      /*   */
      0
    ), mr = (
      /* */
      1
    ), al = (
      /*  */
      2
    ), yr = (
      /*    */
      4
    ), Ir = (
      /*   */
      8
    ), QS = [];
    function XS() {
      for (var e = 0; e < QS.length; e++) {
        var t = QS[e];
        t._workInProgressVersionPrimary = null;
      }
      QS.length = 0;
    }
    function dM(e, t) {
      var i = t._getVersion, a = i(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, a] : e.mutableSourceEagerHydrationData.push(t, a);
    }
    var Me = c.ReactCurrentDispatcher, uh = c.ReactCurrentBatchConfig, qS, sd;
    qS = /* @__PURE__ */ new Set();
    var Cc = se, en = null, gr = null, Sr = null, uy = !1, ch = !1, fh = 0, pM = 0, hM = 25, ie = null, Wa = null, tu = -1, ZS = !1;
    function $t() {
      {
        var e = ie;
        Wa === null ? Wa = [e] : Wa.push(e);
      }
    }
    function Te() {
      {
        var e = ie;
        Wa !== null && (tu++, Wa[tu] !== e && vM(e));
      }
    }
    function ud(e) {
      e != null && !yt(e) && v("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ie, typeof e);
    }
    function vM(e) {
      {
        var t = at(en);
        if (!qS.has(t) && (qS.add(t), Wa !== null)) {
          for (var i = "", a = 30, u = 0; u <= tu; u++) {
            for (var d = Wa[u], m = u === tu ? e : d, S = u + 1 + ". " + d; S.length < a; )
              S += " ";
            S += m + `
`, i += S;
          }
          v(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, i);
        }
      }
    }
    function di() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function JS(e, t) {
      if (ZS)
        return !1;
      if (t === null)
        return v("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ie), !1;
      e.length !== t.length && v(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ie, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var i = 0; i < t.length && i < e.length; i++)
        if (!fe(e[i], t[i]))
          return !1;
      return !0;
    }
    function cd(e, t, i, a, u, d) {
      Cc = d, en = t, Wa = e !== null ? e._debugHookTypes : null, tu = -1, ZS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = se, e !== null && e.memoizedState !== null ? Me.current = _x : Wa !== null ? Me.current = Dx : Me.current = bx;
      var m = i(a, u);
      if (ch) {
        var S = 0;
        do {
          if (ch = !1, fh = 0, S >= hM)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          S += 1, ZS = !1, gr = null, Sr = null, t.updateQueue = null, tu = -1, Me.current = kx, m = i(a, u);
        } while (ch);
      }
      Me.current = Ty, t._debugHookTypes = Wa;
      var C = gr !== null && gr.next !== null;
      if (Cc = se, en = null, gr = null, Sr = null, ie = null, Wa = null, tu = -1, e !== null && (e.flags & zn) !== (t.flags & zn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Ct) !== $e && v("Internal React error: Expected static flag was missing. Please notify the React team."), uy = !1, C)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return m;
    }
    function fd() {
      var e = fh !== 0;
      return fh = 0, e;
    }
    function lx(e, t, i) {
      t.updateQueue = e.updateQueue, (t.mode & jt) !== $e ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = Gu(e.lanes, i);
    }
    function sx() {
      if (Me.current = Ty, uy) {
        for (var e = en.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        uy = !1;
      }
      Cc = se, en = null, gr = null, Sr = null, Wa = null, tu = -1, ie = null, Cx = !1, ch = !1, fh = 0;
    }
    function ol() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Sr === null ? en.memoizedState = Sr = e : Sr = Sr.next = e, Sr;
    }
    function $a() {
      var e;
      if (gr === null) {
        var t = en.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = gr.next;
      var i;
      if (Sr === null ? i = en.memoizedState : i = Sr.next, i !== null)
        Sr = i, i = Sr.next, gr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        gr = e;
        var a = {
          memoizedState: gr.memoizedState,
          baseState: gr.baseState,
          baseQueue: gr.baseQueue,
          queue: gr.queue,
          next: null
        };
        Sr === null ? en.memoizedState = Sr = a : Sr = Sr.next = a;
      }
      return Sr;
    }
    function ux() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function e0(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function t0(e, t, i) {
      var a = ol(), u;
      i !== void 0 ? u = i(t) : u = t, a.memoizedState = a.baseState = u;
      var d = {
        pending: null,
        interleaved: null,
        lanes: se,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      a.queue = d;
      var m = d.dispatch = SM.bind(null, en, d);
      return [a.memoizedState, m];
    }
    function n0(e, t, i) {
      var a = $a(), u = a.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var d = gr, m = d.baseQueue, S = u.pending;
      if (S !== null) {
        if (m !== null) {
          var C = m.next, D = S.next;
          m.next = D, S.next = C;
        }
        d.baseQueue !== m && v("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), d.baseQueue = m = S, u.pending = null;
      }
      if (m !== null) {
        var M = m.next, F = d.baseState, V = null, $ = null, Q = null, ee = M;
        do {
          var De = ee.lane;
          if (Wl(Cc, De)) {
            if (Q !== null) {
              var He = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Vt,
                action: ee.action,
                hasEagerState: ee.hasEagerState,
                eagerState: ee.eagerState,
                next: null
              };
              Q = Q.next = He;
            }
            if (ee.hasEagerState)
              F = ee.eagerState;
            else {
              var At = ee.action;
              F = e(F, At);
            }
          } else {
            var Qe = {
              lane: De,
              action: ee.action,
              hasEagerState: ee.hasEagerState,
              eagerState: ee.eagerState,
              next: null
            };
            Q === null ? ($ = Q = Qe, V = F) : Q = Q.next = Qe, en.lanes = ft(en.lanes, De), Oh(De);
          }
          ee = ee.next;
        } while (ee !== null && ee !== M);
        Q === null ? V = F : Q.next = $, fe(F, a.memoizedState) || Eh(), a.memoizedState = F, a.baseState = V, a.baseQueue = Q, u.lastRenderedState = F;
      }
      var bt = u.interleaved;
      if (bt !== null) {
        var I = bt;
        do {
          var te = I.lane;
          en.lanes = ft(en.lanes, te), Oh(te), I = I.next;
        } while (I !== bt);
      } else m === null && (u.lanes = se);
      var Y = u.dispatch;
      return [a.memoizedState, Y];
    }
    function r0(e, t, i) {
      var a = $a(), u = a.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var d = u.dispatch, m = u.pending, S = a.memoizedState;
      if (m !== null) {
        u.pending = null;
        var C = m.next, D = C;
        do {
          var M = D.action;
          S = e(S, M), D = D.next;
        } while (D !== C);
        fe(S, a.memoizedState) || Eh(), a.memoizedState = S, a.baseQueue === null && (a.baseState = S), u.lastRenderedState = S;
      }
      return [S, d];
    }
    function MV(e, t, i) {
    }
    function AV(e, t, i) {
    }
    function i0(e, t, i) {
      var a = en, u = ol(), d, m = Hr();
      if (m) {
        if (i === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        d = i(), sd || d !== i() && (v("The result of getServerSnapshot should be cached to avoid an infinite loop"), sd = !0);
      } else {
        if (d = t(), !sd) {
          var S = t();
          fe(d, S) || (v("The result of getSnapshot should be cached to avoid an infinite loop"), sd = !0);
        }
        var C = By();
        if (C === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        _f(C, Cc) || cx(a, t, d);
      }
      u.memoizedState = d;
      var D = {
        value: d,
        getSnapshot: t
      };
      return u.queue = D, hy(dx.bind(null, a, D, e), [e]), a.flags |= ei, dh(mr | Ir, fx.bind(null, a, D, d, t), void 0, null), d;
    }
    function cy(e, t, i) {
      var a = en, u = $a(), d = t();
      if (!sd) {
        var m = t();
        fe(d, m) || (v("The result of getSnapshot should be cached to avoid an infinite loop"), sd = !0);
      }
      var S = u.memoizedState, C = !fe(S, d);
      C && (u.memoizedState = d, Eh());
      var D = u.queue;
      if (hh(dx.bind(null, a, D, e), [e]), D.getSnapshot !== t || C || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Sr !== null && Sr.memoizedState.tag & mr) {
        a.flags |= ei, dh(mr | Ir, fx.bind(null, a, D, d, t), void 0, null);
        var M = By();
        if (M === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        _f(M, Cc) || cx(a, t, d);
      }
      return d;
    }
    function cx(e, t, i) {
      e.flags |= Os;
      var a = {
        getSnapshot: t,
        value: i
      }, u = en.updateQueue;
      if (u === null)
        u = ux(), en.updateQueue = u, u.stores = [a];
      else {
        var d = u.stores;
        d === null ? u.stores = [a] : d.push(a);
      }
    }
    function fx(e, t, i, a) {
      t.value = i, t.getSnapshot = a, px(t) && hx(e);
    }
    function dx(e, t, i) {
      var a = function() {
        px(t) && hx(e);
      };
      return i(a);
    }
    function px(e) {
      var t = e.getSnapshot, i = e.value;
      try {
        var a = t();
        return !fe(i, a);
      } catch {
        return !0;
      }
    }
    function hx(e) {
      var t = Gi(e, et);
      t !== null && xr(t, e, et, nn);
    }
    function fy(e) {
      var t = ol();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var i = {
        pending: null,
        interleaved: null,
        lanes: se,
        dispatch: null,
        lastRenderedReducer: e0,
        lastRenderedState: e
      };
      t.queue = i;
      var a = i.dispatch = EM.bind(null, en, i);
      return [t.memoizedState, a];
    }
    function a0(e) {
      return n0(e0);
    }
    function o0(e) {
      return r0(e0);
    }
    function dh(e, t, i, a) {
      var u = {
        tag: e,
        create: t,
        destroy: i,
        deps: a,
        // Circular
        next: null
      }, d = en.updateQueue;
      if (d === null)
        d = ux(), en.updateQueue = d, d.lastEffect = u.next = u;
      else {
        var m = d.lastEffect;
        if (m === null)
          d.lastEffect = u.next = u;
        else {
          var S = m.next;
          m.next = u, u.next = S, d.lastEffect = u;
        }
      }
      return u;
    }
    function l0(e) {
      var t = ol();
      {
        var i = {
          current: e
        };
        return t.memoizedState = i, i;
      }
    }
    function dy(e) {
      var t = $a();
      return t.memoizedState;
    }
    function ph(e, t, i, a) {
      var u = ol(), d = a === void 0 ? null : a;
      en.flags |= e, u.memoizedState = dh(mr | t, i, void 0, d);
    }
    function py(e, t, i, a) {
      var u = $a(), d = a === void 0 ? null : a, m = void 0;
      if (gr !== null) {
        var S = gr.memoizedState;
        if (m = S.destroy, d !== null) {
          var C = S.deps;
          if (JS(d, C)) {
            u.memoizedState = dh(t, i, m, d);
            return;
          }
        }
      }
      en.flags |= e, u.memoizedState = dh(mr | t, i, m, d);
    }
    function hy(e, t) {
      return (en.mode & jt) !== $e ? ph(La | ei | ef, Ir, e, t) : ph(ei | ef, Ir, e, t);
    }
    function hh(e, t) {
      return py(ei, Ir, e, t);
    }
    function s0(e, t) {
      return ph(_t, al, e, t);
    }
    function vy(e, t) {
      return py(_t, al, e, t);
    }
    function u0(e, t) {
      var i = _t;
      return i |= ao, (en.mode & jt) !== $e && (i |= Bo), ph(i, yr, e, t);
    }
    function my(e, t) {
      return py(_t, yr, e, t);
    }
    function vx(e, t) {
      if (typeof t == "function") {
        var i = t, a = e();
        return i(a), function() {
          i(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || v("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var d = e();
        return u.current = d, function() {
          u.current = null;
        };
      }
    }
    function c0(e, t, i) {
      typeof t != "function" && v("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var a = i != null ? i.concat([e]) : null, u = _t;
      return u |= ao, (en.mode & jt) !== $e && (u |= Bo), ph(u, yr, vx.bind(null, t, e), a);
    }
    function yy(e, t, i) {
      typeof t != "function" && v("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var a = i != null ? i.concat([e]) : null;
      return py(_t, yr, vx.bind(null, t, e), a);
    }
    function mM(e, t) {
    }
    var gy = mM;
    function f0(e, t) {
      var i = ol(), a = t === void 0 ? null : t;
      return i.memoizedState = [e, a], e;
    }
    function Sy(e, t) {
      var i = $a(), a = t === void 0 ? null : t, u = i.memoizedState;
      if (u !== null && a !== null) {
        var d = u[1];
        if (JS(a, d))
          return u[0];
      }
      return i.memoizedState = [e, a], e;
    }
    function d0(e, t) {
      var i = ol(), a = t === void 0 ? null : t, u = e();
      return i.memoizedState = [u, a], u;
    }
    function Ey(e, t) {
      var i = $a(), a = t === void 0 ? null : t, u = i.memoizedState;
      if (u !== null && a !== null) {
        var d = u[1];
        if (JS(a, d))
          return u[0];
      }
      var m = e();
      return i.memoizedState = [m, a], m;
    }
    function p0(e) {
      var t = ol();
      return t.memoizedState = e, e;
    }
    function mx(e) {
      var t = $a(), i = gr, a = i.memoizedState;
      return gx(t, a, e);
    }
    function yx(e) {
      var t = $a();
      if (gr === null)
        return t.memoizedState = e, e;
      var i = gr.memoizedState;
      return gx(t, i, e);
    }
    function gx(e, t, i) {
      var a = !mp(Cc);
      if (a) {
        if (!fe(i, t)) {
          var u = Sp();
          en.lanes = ft(en.lanes, u), Oh(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Eh()), e.memoizedState = i, i;
    }
    function yM(e, t, i) {
      var a = Yi();
      Bn(qv(a, Va)), e(!0);
      var u = uh.transition;
      uh.transition = {};
      var d = uh.transition;
      uh.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Bn(a), uh.transition = u, u === null && d._updatedFibers) {
          var m = d._updatedFibers.size;
          m > 10 && T("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), d._updatedFibers.clear();
        }
      }
    }
    function h0() {
      var e = fy(!1), t = e[0], i = e[1], a = yM.bind(null, i), u = ol();
      return u.memoizedState = a, [t, a];
    }
    function Sx() {
      var e = a0(), t = e[0], i = $a(), a = i.memoizedState;
      return [t, a];
    }
    function Ex() {
      var e = o0(), t = e[0], i = $a(), a = i.memoizedState;
      return [t, a];
    }
    var Cx = !1;
    function gM() {
      return Cx;
    }
    function v0() {
      var e = ol(), t = By(), i = t.identifierPrefix, a;
      if (Hr()) {
        var u = Pk();
        a = ":" + i + "R" + u;
        var d = fh++;
        d > 0 && (a += "H" + d.toString(32)), a += ":";
      } else {
        var m = pM++;
        a = ":" + i + "r" + m.toString(32) + ":";
      }
      return e.memoizedState = a, a;
    }
    function Cy() {
      var e = $a(), t = e.memoizedState;
      return t;
    }
    function SM(e, t, i) {
      typeof arguments[3] == "function" && v("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var a = ou(e), u = {
        lane: a,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Tx(e))
        xx(t, u);
      else {
        var d = qT(e, t, u, a);
        if (d !== null) {
          var m = ki();
          xr(d, e, a, m), Rx(d, t, a);
        }
      }
      wx(e, a);
    }
    function EM(e, t, i) {
      typeof arguments[3] == "function" && v("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var a = ou(e), u = {
        lane: a,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Tx(e))
        xx(t, u);
      else {
        var d = e.alternate;
        if (e.lanes === se && (d === null || d.lanes === se)) {
          var m = t.lastRenderedReducer;
          if (m !== null) {
            var S;
            S = Me.current, Me.current = So;
            try {
              var C = t.lastRenderedState, D = m(C, i);
              if (u.hasEagerState = !0, u.eagerState = D, fe(D, C)) {
                iM(e, t, u, a);
                return;
              }
            } catch {
            } finally {
              Me.current = S;
            }
          }
        }
        var M = qT(e, t, u, a);
        if (M !== null) {
          var F = ki();
          xr(M, e, a, F), Rx(M, t, a);
        }
      }
      wx(e, a);
    }
    function Tx(e) {
      var t = e.alternate;
      return e === en || t !== null && t === en;
    }
    function xx(e, t) {
      ch = uy = !0;
      var i = e.pending;
      i === null ? t.next = t : (t.next = i.next, i.next = t), e.pending = t;
    }
    function Rx(e, t, i) {
      if (gp(i)) {
        var a = t.lanes;
        a = Ep(a, e.pendingLanes);
        var u = ft(a, i);
        t.lanes = u, Mf(e, u);
      }
    }
    function wx(e, t, i) {
      Vu(e, t);
    }
    var Ty = {
      readContext: or,
      useCallback: di,
      useContext: di,
      useEffect: di,
      useImperativeHandle: di,
      useInsertionEffect: di,
      useLayoutEffect: di,
      useMemo: di,
      useReducer: di,
      useRef: di,
      useState: di,
      useDebugValue: di,
      useDeferredValue: di,
      useTransition: di,
      useMutableSource: di,
      useSyncExternalStore: di,
      useId: di,
      unstable_isNewReconciler: de
    }, bx = null, Dx = null, _x = null, kx = null, ll = null, So = null, xy = null;
    {
      var m0 = function() {
        v("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, lt = function() {
        v("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      bx = {
        readContext: function(e) {
          return or(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", $t(), ud(t), f0(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", $t(), or(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", $t(), ud(t), hy(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ie = "useImperativeHandle", $t(), ud(i), c0(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", $t(), ud(t), s0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", $t(), ud(t), u0(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", $t(), ud(t);
          var i = Me.current;
          Me.current = ll;
          try {
            return d0(e, t);
          } finally {
            Me.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ie = "useReducer", $t();
          var a = Me.current;
          Me.current = ll;
          try {
            return t0(e, t, i);
          } finally {
            Me.current = a;
          }
        },
        useRef: function(e) {
          return ie = "useRef", $t(), l0(e);
        },
        useState: function(e) {
          ie = "useState", $t();
          var t = Me.current;
          Me.current = ll;
          try {
            return fy(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", $t(), void 0;
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", $t(), p0(e);
        },
        useTransition: function() {
          return ie = "useTransition", $t(), h0();
        },
        useMutableSource: function(e, t, i) {
          return ie = "useMutableSource", $t(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ie = "useSyncExternalStore", $t(), i0(e, t, i);
        },
        useId: function() {
          return ie = "useId", $t(), v0();
        },
        unstable_isNewReconciler: de
      }, Dx = {
        readContext: function(e) {
          return or(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", Te(), f0(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", Te(), or(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", Te(), hy(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ie = "useImperativeHandle", Te(), c0(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", Te(), s0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", Te(), u0(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", Te();
          var i = Me.current;
          Me.current = ll;
          try {
            return d0(e, t);
          } finally {
            Me.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ie = "useReducer", Te();
          var a = Me.current;
          Me.current = ll;
          try {
            return t0(e, t, i);
          } finally {
            Me.current = a;
          }
        },
        useRef: function(e) {
          return ie = "useRef", Te(), l0(e);
        },
        useState: function(e) {
          ie = "useState", Te();
          var t = Me.current;
          Me.current = ll;
          try {
            return fy(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", Te(), void 0;
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", Te(), p0(e);
        },
        useTransition: function() {
          return ie = "useTransition", Te(), h0();
        },
        useMutableSource: function(e, t, i) {
          return ie = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ie = "useSyncExternalStore", Te(), i0(e, t, i);
        },
        useId: function() {
          return ie = "useId", Te(), v0();
        },
        unstable_isNewReconciler: de
      }, _x = {
        readContext: function(e) {
          return or(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", Te(), Sy(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", Te(), or(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", Te(), hh(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ie = "useImperativeHandle", Te(), yy(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", Te(), vy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", Te(), my(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", Te();
          var i = Me.current;
          Me.current = So;
          try {
            return Ey(e, t);
          } finally {
            Me.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ie = "useReducer", Te();
          var a = Me.current;
          Me.current = So;
          try {
            return n0(e, t, i);
          } finally {
            Me.current = a;
          }
        },
        useRef: function(e) {
          return ie = "useRef", Te(), dy();
        },
        useState: function(e) {
          ie = "useState", Te();
          var t = Me.current;
          Me.current = So;
          try {
            return a0(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", Te(), gy();
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", Te(), mx(e);
        },
        useTransition: function() {
          return ie = "useTransition", Te(), Sx();
        },
        useMutableSource: function(e, t, i) {
          return ie = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ie = "useSyncExternalStore", Te(), cy(e, t);
        },
        useId: function() {
          return ie = "useId", Te(), Cy();
        },
        unstable_isNewReconciler: de
      }, kx = {
        readContext: function(e) {
          return or(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", Te(), Sy(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", Te(), or(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", Te(), hh(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ie = "useImperativeHandle", Te(), yy(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", Te(), vy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", Te(), my(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", Te();
          var i = Me.current;
          Me.current = xy;
          try {
            return Ey(e, t);
          } finally {
            Me.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ie = "useReducer", Te();
          var a = Me.current;
          Me.current = xy;
          try {
            return r0(e, t, i);
          } finally {
            Me.current = a;
          }
        },
        useRef: function(e) {
          return ie = "useRef", Te(), dy();
        },
        useState: function(e) {
          ie = "useState", Te();
          var t = Me.current;
          Me.current = xy;
          try {
            return o0(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", Te(), gy();
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", Te(), yx(e);
        },
        useTransition: function() {
          return ie = "useTransition", Te(), Ex();
        },
        useMutableSource: function(e, t, i) {
          return ie = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ie = "useSyncExternalStore", Te(), cy(e, t);
        },
        useId: function() {
          return ie = "useId", Te(), Cy();
        },
        unstable_isNewReconciler: de
      }, ll = {
        readContext: function(e) {
          return m0(), or(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", lt(), $t(), f0(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", lt(), $t(), or(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", lt(), $t(), hy(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ie = "useImperativeHandle", lt(), $t(), c0(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", lt(), $t(), s0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", lt(), $t(), u0(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", lt(), $t();
          var i = Me.current;
          Me.current = ll;
          try {
            return d0(e, t);
          } finally {
            Me.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ie = "useReducer", lt(), $t();
          var a = Me.current;
          Me.current = ll;
          try {
            return t0(e, t, i);
          } finally {
            Me.current = a;
          }
        },
        useRef: function(e) {
          return ie = "useRef", lt(), $t(), l0(e);
        },
        useState: function(e) {
          ie = "useState", lt(), $t();
          var t = Me.current;
          Me.current = ll;
          try {
            return fy(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", lt(), $t(), void 0;
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", lt(), $t(), p0(e);
        },
        useTransition: function() {
          return ie = "useTransition", lt(), $t(), h0();
        },
        useMutableSource: function(e, t, i) {
          return ie = "useMutableSource", lt(), $t(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ie = "useSyncExternalStore", lt(), $t(), i0(e, t, i);
        },
        useId: function() {
          return ie = "useId", lt(), $t(), v0();
        },
        unstable_isNewReconciler: de
      }, So = {
        readContext: function(e) {
          return m0(), or(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", lt(), Te(), Sy(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", lt(), Te(), or(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", lt(), Te(), hh(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ie = "useImperativeHandle", lt(), Te(), yy(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", lt(), Te(), vy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", lt(), Te(), my(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", lt(), Te();
          var i = Me.current;
          Me.current = So;
          try {
            return Ey(e, t);
          } finally {
            Me.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ie = "useReducer", lt(), Te();
          var a = Me.current;
          Me.current = So;
          try {
            return n0(e, t, i);
          } finally {
            Me.current = a;
          }
        },
        useRef: function(e) {
          return ie = "useRef", lt(), Te(), dy();
        },
        useState: function(e) {
          ie = "useState", lt(), Te();
          var t = Me.current;
          Me.current = So;
          try {
            return a0(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", lt(), Te(), gy();
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", lt(), Te(), mx(e);
        },
        useTransition: function() {
          return ie = "useTransition", lt(), Te(), Sx();
        },
        useMutableSource: function(e, t, i) {
          return ie = "useMutableSource", lt(), Te(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ie = "useSyncExternalStore", lt(), Te(), cy(e, t);
        },
        useId: function() {
          return ie = "useId", lt(), Te(), Cy();
        },
        unstable_isNewReconciler: de
      }, xy = {
        readContext: function(e) {
          return m0(), or(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", lt(), Te(), Sy(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", lt(), Te(), or(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", lt(), Te(), hh(e, t);
        },
        useImperativeHandle: function(e, t, i) {
          return ie = "useImperativeHandle", lt(), Te(), yy(e, t, i);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", lt(), Te(), vy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", lt(), Te(), my(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", lt(), Te();
          var i = Me.current;
          Me.current = So;
          try {
            return Ey(e, t);
          } finally {
            Me.current = i;
          }
        },
        useReducer: function(e, t, i) {
          ie = "useReducer", lt(), Te();
          var a = Me.current;
          Me.current = So;
          try {
            return r0(e, t, i);
          } finally {
            Me.current = a;
          }
        },
        useRef: function(e) {
          return ie = "useRef", lt(), Te(), dy();
        },
        useState: function(e) {
          ie = "useState", lt(), Te();
          var t = Me.current;
          Me.current = So;
          try {
            return o0(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", lt(), Te(), gy();
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", lt(), Te(), yx(e);
        },
        useTransition: function() {
          return ie = "useTransition", lt(), Te(), Ex();
        },
        useMutableSource: function(e, t, i) {
          return ie = "useMutableSource", lt(), Te(), void 0;
        },
        useSyncExternalStore: function(e, t, i) {
          return ie = "useSyncExternalStore", lt(), Te(), cy(e, t);
        },
        useId: function() {
          return ie = "useId", lt(), Te(), Cy();
        },
        unstable_isNewReconciler: de
      };
    }
    var nu = l.unstable_now, Mx = 0, Ry = -1, vh = -1, wy = -1, y0 = !1, by = !1;
    function Ax() {
      return y0;
    }
    function CM() {
      by = !0;
    }
    function TM() {
      y0 = !1, by = !1;
    }
    function xM() {
      y0 = by, by = !1;
    }
    function Ox() {
      return Mx;
    }
    function Lx() {
      Mx = nu();
    }
    function g0(e) {
      vh = nu(), e.actualStartTime < 0 && (e.actualStartTime = nu());
    }
    function Nx(e) {
      vh = -1;
    }
    function Dy(e, t) {
      if (vh >= 0) {
        var i = nu() - vh;
        e.actualDuration += i, t && (e.selfBaseDuration = i), vh = -1;
      }
    }
    function sl(e) {
      if (Ry >= 0) {
        var t = nu() - Ry;
        Ry = -1;
        for (var i = e.return; i !== null; ) {
          switch (i.tag) {
            case _:
              var a = i.stateNode;
              a.effectDuration += t;
              return;
            case ve:
              var u = i.stateNode;
              u.effectDuration += t;
              return;
          }
          i = i.return;
        }
      }
    }
    function S0(e) {
      if (wy >= 0) {
        var t = nu() - wy;
        wy = -1;
        for (var i = e.return; i !== null; ) {
          switch (i.tag) {
            case _:
              var a = i.stateNode;
              a !== null && (a.passiveEffectDuration += t);
              return;
            case ve:
              var u = i.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          i = i.return;
        }
      }
    }
    function ul() {
      Ry = nu();
    }
    function E0() {
      wy = nu();
    }
    function C0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Eo(e, t) {
      if (e && e.defaultProps) {
        var i = pt({}, t), a = e.defaultProps;
        for (var u in a)
          i[u] === void 0 && (i[u] = a[u]);
        return i;
      }
      return t;
    }
    var T0 = {}, x0, R0, w0, b0, D0, Px, _y, _0, k0, M0, mh;
    {
      x0 = /* @__PURE__ */ new Set(), R0 = /* @__PURE__ */ new Set(), w0 = /* @__PURE__ */ new Set(), b0 = /* @__PURE__ */ new Set(), _0 = /* @__PURE__ */ new Set(), D0 = /* @__PURE__ */ new Set(), k0 = /* @__PURE__ */ new Set(), M0 = /* @__PURE__ */ new Set(), mh = /* @__PURE__ */ new Set();
      var Ux = /* @__PURE__ */ new Set();
      _y = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var i = t + "_" + e;
          Ux.has(i) || (Ux.add(i), v("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, Px = function(e, t) {
        if (t === void 0) {
          var i = Nt(e) || "Component";
          D0.has(i) || (D0.add(i), v("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", i));
        }
      }, Object.defineProperty(T0, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(T0);
    }
    function A0(e, t, i, a) {
      var u = e.memoizedState, d = i(a, u);
      {
        if (e.mode & Jt) {
          gn(!0);
          try {
            d = i(a, u);
          } finally {
            gn(!1);
          }
        }
        Px(t, d);
      }
      var m = d == null ? u : pt({}, u, d);
      if (e.memoizedState = m, e.lanes === se) {
        var S = e.updateQueue;
        S.baseState = m;
      }
    }
    var O0 = {
      isMounted: Pv,
      enqueueSetState: function(e, t, i) {
        var a = As(e), u = ki(), d = ou(a), m = rs(u, d);
        m.payload = t, i != null && (_y(i, "setState"), m.callback = i);
        var S = Zs(a, m, d);
        S !== null && (xr(S, a, d, u), ry(S, a, d)), Vu(a, d);
      },
      enqueueReplaceState: function(e, t, i) {
        var a = As(e), u = ki(), d = ou(a), m = rs(u, d);
        m.tag = JT, m.payload = t, i != null && (_y(i, "replaceState"), m.callback = i);
        var S = Zs(a, m, d);
        S !== null && (xr(S, a, d, u), ry(S, a, d)), Vu(a, d);
      },
      enqueueForceUpdate: function(e, t) {
        var i = As(e), a = ki(), u = ou(i), d = rs(a, u);
        d.tag = ey, t != null && (_y(t, "forceUpdate"), d.callback = t);
        var m = Zs(i, d, u);
        m !== null && (xr(m, i, u, a), ry(m, i, u)), sf(i, u);
      }
    };
    function Vx(e, t, i, a, u, d, m) {
      var S = e.stateNode;
      if (typeof S.shouldComponentUpdate == "function") {
        var C = S.shouldComponentUpdate(a, d, m);
        {
          if (e.mode & Jt) {
            gn(!0);
            try {
              C = S.shouldComponentUpdate(a, d, m);
            } finally {
              gn(!1);
            }
          }
          C === void 0 && v("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Nt(t) || "Component");
        }
        return C;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ue(i, a) || !Ue(u, d) : !0;
    }
    function RM(e, t, i) {
      var a = e.stateNode;
      {
        var u = Nt(t) || "Component", d = a.render;
        d || (t.prototype && typeof t.prototype.render == "function" ? v("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : v("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), a.getInitialState && !a.getInitialState.isReactClassApproved && !a.state && v("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), a.getDefaultProps && !a.getDefaultProps.isReactClassApproved && v("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), a.propTypes && v("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), a.contextType && v("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !mh.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Jt) === $e && (mh.add(t), v(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !mh.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Jt) === $e && (mh.add(t), v(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), a.contextTypes && v("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !k0.has(t) && (k0.add(t), v("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof a.componentShouldUpdate == "function" && v("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof a.shouldComponentUpdate < "u" && v("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Nt(t) || "A pure component"), typeof a.componentDidUnmount == "function" && v("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof a.componentDidReceiveProps == "function" && v("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof a.componentWillRecieveProps == "function" && v("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof a.UNSAFE_componentWillRecieveProps == "function" && v("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var m = a.props !== i;
        a.props !== void 0 && m && v("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), a.defaultProps && v("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof a.getSnapshotBeforeUpdate == "function" && typeof a.componentDidUpdate != "function" && !w0.has(t) && (w0.add(t), v("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Nt(t))), typeof a.getDerivedStateFromProps == "function" && v("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof a.getDerivedStateFromError == "function" && v("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && v("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var S = a.state;
        S && (typeof S != "object" || yt(S)) && v("%s.state: must be set to an object or null", u), typeof a.getChildContext == "function" && typeof t.childContextTypes != "object" && v("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function zx(e, t) {
      t.updater = O0, e.stateNode = t, Al(t, e), t._reactInternalInstance = T0;
    }
    function Fx(e, t, i) {
      var a = !1, u = ma, d = ma, m = t.contextType;
      if ("contextType" in t) {
        var S = (
          // Allow null for conditional declaration
          m === null || m !== void 0 && m.$$typeof === N && m._context === void 0
        );
        if (!S && !M0.has(t)) {
          M0.add(t);
          var C = "";
          m === void 0 ? C = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof m != "object" ? C = " However, it is set to a " + typeof m + "." : m.$$typeof === Ra ? C = " Did you accidentally pass the Context.Provider instead?" : m._context !== void 0 ? C = " Did you accidentally pass the Context.Consumer instead?" : C = " However, it is set to an object with keys {" + Object.keys(m).join(", ") + "}.", v("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Nt(t) || "Component", C);
        }
      }
      if (typeof m == "object" && m !== null)
        d = or(m);
      else {
        u = qf(e, t, !0);
        var D = t.contextTypes;
        a = D != null, d = a ? Zf(e, u) : ma;
      }
      var M = new t(i, d);
      if (e.mode & Jt) {
        gn(!0);
        try {
          M = new t(i, d);
        } finally {
          gn(!1);
        }
      }
      var F = e.memoizedState = M.state !== null && M.state !== void 0 ? M.state : null;
      zx(e, M);
      {
        if (typeof t.getDerivedStateFromProps == "function" && F === null) {
          var V = Nt(t) || "Component";
          R0.has(V) || (R0.add(V), v("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", V, M.state === null ? "null" : "undefined", V));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof M.getSnapshotBeforeUpdate == "function") {
          var $ = null, Q = null, ee = null;
          if (typeof M.componentWillMount == "function" && M.componentWillMount.__suppressDeprecationWarning !== !0 ? $ = "componentWillMount" : typeof M.UNSAFE_componentWillMount == "function" && ($ = "UNSAFE_componentWillMount"), typeof M.componentWillReceiveProps == "function" && M.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Q = "componentWillReceiveProps" : typeof M.UNSAFE_componentWillReceiveProps == "function" && (Q = "UNSAFE_componentWillReceiveProps"), typeof M.componentWillUpdate == "function" && M.componentWillUpdate.__suppressDeprecationWarning !== !0 ? ee = "componentWillUpdate" : typeof M.UNSAFE_componentWillUpdate == "function" && (ee = "UNSAFE_componentWillUpdate"), $ !== null || Q !== null || ee !== null) {
            var De = Nt(t) || "Component", Qe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            b0.has(De) || (b0.add(De), v(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, De, Qe, $ !== null ? `
  ` + $ : "", Q !== null ? `
  ` + Q : "", ee !== null ? `
  ` + ee : ""));
          }
        }
      }
      return a && _T(e, u, d), M;
    }
    function wM(e, t) {
      var i = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), i !== t.state && (v("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", at(e) || "Component"), O0.enqueueReplaceState(t, t.state, null));
    }
    function jx(e, t, i, a) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, a), t.state !== u) {
        {
          var d = at(e) || "Component";
          x0.has(d) || (x0.add(d), v("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", d));
        }
        O0.enqueueReplaceState(t, t.state, null);
      }
    }
    function L0(e, t, i, a) {
      RM(e, t, i);
      var u = e.stateNode;
      u.props = i, u.state = e.memoizedState, u.refs = {}, HS(e);
      var d = t.contextType;
      if (typeof d == "object" && d !== null)
        u.context = or(d);
      else {
        var m = qf(e, t, !0);
        u.context = Zf(e, m);
      }
      {
        if (u.state === i) {
          var S = Nt(t) || "Component";
          _0.has(S) || (_0.add(S), v("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", S));
        }
        e.mode & Jt && yo.recordLegacyContextWarning(e, u), yo.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var C = t.getDerivedStateFromProps;
      if (typeof C == "function" && (A0(e, t, C, i), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (wM(e, u), iy(e, i, u, a), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var D = _t;
        D |= ao, (e.mode & jt) !== $e && (D |= Bo), e.flags |= D;
      }
    }
    function bM(e, t, i, a) {
      var u = e.stateNode, d = e.memoizedProps;
      u.props = d;
      var m = u.context, S = t.contextType, C = ma;
      if (typeof S == "object" && S !== null)
        C = or(S);
      else {
        var D = qf(e, t, !0);
        C = Zf(e, D);
      }
      var M = t.getDerivedStateFromProps, F = typeof M == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !F && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (d !== i || m !== C) && jx(e, u, i, C), tx();
      var V = e.memoizedState, $ = u.state = V;
      if (iy(e, i, u, a), $ = e.memoizedState, d === i && V === $ && !Fm() && !ay()) {
        if (typeof u.componentDidMount == "function") {
          var Q = _t;
          Q |= ao, (e.mode & jt) !== $e && (Q |= Bo), e.flags |= Q;
        }
        return !1;
      }
      typeof M == "function" && (A0(e, t, M, i), $ = e.memoizedState);
      var ee = ay() || Vx(e, t, d, i, V, $, C);
      if (ee) {
        if (!F && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var De = _t;
          De |= ao, (e.mode & jt) !== $e && (De |= Bo), e.flags |= De;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Qe = _t;
          Qe |= ao, (e.mode & jt) !== $e && (Qe |= Bo), e.flags |= Qe;
        }
        e.memoizedProps = i, e.memoizedState = $;
      }
      return u.props = i, u.state = $, u.context = C, ee;
    }
    function DM(e, t, i, a, u) {
      var d = t.stateNode;
      ex(e, t);
      var m = t.memoizedProps, S = t.type === t.elementType ? m : Eo(t.type, m);
      d.props = S;
      var C = t.pendingProps, D = d.context, M = i.contextType, F = ma;
      if (typeof M == "object" && M !== null)
        F = or(M);
      else {
        var V = qf(t, i, !0);
        F = Zf(t, V);
      }
      var $ = i.getDerivedStateFromProps, Q = typeof $ == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      !Q && (typeof d.UNSAFE_componentWillReceiveProps == "function" || typeof d.componentWillReceiveProps == "function") && (m !== C || D !== F) && jx(t, d, a, F), tx();
      var ee = t.memoizedState, De = d.state = ee;
      if (iy(t, a, d, u), De = t.memoizedState, m === C && ee === De && !Fm() && !ay() && !ze)
        return typeof d.componentDidUpdate == "function" && (m !== e.memoizedProps || ee !== e.memoizedState) && (t.flags |= _t), typeof d.getSnapshotBeforeUpdate == "function" && (m !== e.memoizedProps || ee !== e.memoizedState) && (t.flags |= Qn), !1;
      typeof $ == "function" && (A0(t, i, $, a), De = t.memoizedState);
      var Qe = ay() || Vx(t, i, S, a, ee, De, F) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      ze;
      return Qe ? (!Q && (typeof d.UNSAFE_componentWillUpdate == "function" || typeof d.componentWillUpdate == "function") && (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(a, De, F), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(a, De, F)), typeof d.componentDidUpdate == "function" && (t.flags |= _t), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= Qn)) : (typeof d.componentDidUpdate == "function" && (m !== e.memoizedProps || ee !== e.memoizedState) && (t.flags |= _t), typeof d.getSnapshotBeforeUpdate == "function" && (m !== e.memoizedProps || ee !== e.memoizedState) && (t.flags |= Qn), t.memoizedProps = a, t.memoizedState = De), d.props = a, d.state = De, d.context = F, Qe;
    }
    function Tc(e, t) {
      return {
        value: e,
        source: t,
        stack: Ja(t),
        digest: null
      };
    }
    function N0(e, t, i) {
      return {
        value: e,
        source: null,
        stack: i ?? null,
        digest: t ?? null
      };
    }
    function _M(e, t) {
      return !0;
    }
    function P0(e, t) {
      try {
        var i = _M(e, t);
        if (i === !1)
          return;
        var a = t.value, u = t.source, d = t.stack, m = d !== null ? d : "";
        if (a != null && a._suppressLogging) {
          if (e.tag === b)
            return;
          console.error(a);
        }
        var S = u ? at(u) : null, C = S ? "The above error occurred in the <" + S + "> component:" : "The above error occurred in one of your React components:", D;
        if (e.tag === _)
          D = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var M = at(e) || "Anonymous";
          D = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + M + ".");
        }
        var F = C + `
` + m + `

` + ("" + D);
        console.error(F);
      } catch (V) {
        setTimeout(function() {
          throw V;
        });
      }
    }
    var kM = typeof WeakMap == "function" ? WeakMap : Map;
    function Bx(e, t, i) {
      var a = rs(nn, i);
      a.tag = jS, a.payload = {
        element: null
      };
      var u = t.value;
      return a.callback = function() {
        CO(u), P0(e, t);
      }, a;
    }
    function U0(e, t, i) {
      var a = rs(nn, i);
      a.tag = jS;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var d = t.value;
        a.payload = function() {
          return u(d);
        }, a.callback = function() {
          ZR(e), P0(e, t);
        };
      }
      var m = e.stateNode;
      return m !== null && typeof m.componentDidCatch == "function" && (a.callback = function() {
        ZR(e), P0(e, t), typeof u != "function" && SO(this);
        var C = t.value, D = t.stack;
        this.componentDidCatch(C, {
          componentStack: D !== null ? D : ""
        }), typeof u != "function" && (oi(e.lanes, et) || v("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", at(e) || "Unknown"));
      }), a;
    }
    function Hx(e, t, i) {
      var a = e.pingCache, u;
      if (a === null ? (a = e.pingCache = new kM(), u = /* @__PURE__ */ new Set(), a.set(t, u)) : (u = a.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), a.set(t, u))), !u.has(i)) {
        u.add(i);
        var d = TO.bind(null, e, t, i);
        ii && Lh(e, i), t.then(d, d);
      }
    }
    function MM(e, t, i, a) {
      var u = e.updateQueue;
      if (u === null) {
        var d = /* @__PURE__ */ new Set();
        d.add(i), e.updateQueue = d;
      } else
        u.add(i);
    }
    function AM(e, t) {
      var i = e.tag;
      if ((e.mode & Ct) === $e && (i === R || i === oe || i === ge)) {
        var a = e.alternate;
        a ? (e.updateQueue = a.updateQueue, e.memoizedState = a.memoizedState, e.lanes = a.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function Ix(e) {
      var t = e;
      do {
        if (t.tag === J && fM(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function Yx(e, t, i, a, u) {
      if ((e.mode & Ct) === $e) {
        if (e === t)
          e.flags |= nr;
        else {
          if (e.flags |= Ye, i.flags |= Jc, i.flags &= -52805, i.tag === b) {
            var d = i.alternate;
            if (d === null)
              i.tag = je;
            else {
              var m = rs(nn, et);
              m.tag = ey, Zs(i, m, et);
            }
          }
          i.lanes = ft(i.lanes, et);
        }
        return e;
      }
      return e.flags |= nr, e.lanes = u, e;
    }
    function OM(e, t, i, a, u) {
      if (i.flags |= Au, ii && Lh(e, u), a !== null && typeof a == "object" && typeof a.then == "function") {
        var d = a;
        AM(i), Hr() && i.mode & Ct && PT();
        var m = Ix(t);
        if (m !== null) {
          m.flags &= ~Dr, Yx(m, t, i, e, u), m.mode & Ct && Hx(e, d, u), MM(m, e, d);
          return;
        } else {
          if (!Iv(u)) {
            Hx(e, d, u), vE();
            return;
          }
          var S = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          a = S;
        }
      } else if (Hr() && i.mode & Ct) {
        PT();
        var C = Ix(t);
        if (C !== null) {
          (C.flags & nr) === We && (C.flags |= Dr), Yx(C, t, i, e, u), _S(Tc(a, i));
          return;
        }
      }
      a = Tc(a, i), fO(a);
      var D = t;
      do {
        switch (D.tag) {
          case _: {
            var M = a;
            D.flags |= nr;
            var F = $u(u);
            D.lanes = ft(D.lanes, F);
            var V = Bx(D, M, F);
            IS(D, V);
            return;
          }
          case b:
            var $ = a, Q = D.type, ee = D.stateNode;
            if ((D.flags & Ye) === We && (typeof Q.getDerivedStateFromError == "function" || ee !== null && typeof ee.componentDidCatch == "function" && !IR(ee))) {
              D.flags |= nr;
              var De = $u(u);
              D.lanes = ft(D.lanes, De);
              var Qe = U0(D, $, De);
              IS(D, Qe);
              return;
            }
            break;
        }
        D = D.return;
      } while (D !== null);
    }
    function LM() {
      return null;
    }
    var yh = c.ReactCurrentOwner, Co = !1, V0, gh, z0, F0, j0, xc, B0, ky, Sh;
    V0 = {}, gh = {}, z0 = {}, F0 = {}, j0 = {}, xc = !1, B0 = {}, ky = {}, Sh = {};
    function Di(e, t, i, a) {
      e === null ? t.child = GT(t, null, i, a) : t.child = nd(t, e.child, i, a);
    }
    function NM(e, t, i, a) {
      t.child = nd(t, e.child, null, a), t.child = nd(t, null, i, a);
    }
    function Wx(e, t, i, a, u) {
      if (t.type !== t.elementType) {
        var d = i.propTypes;
        d && vo(
          d,
          a,
          // Resolved props
          "prop",
          Nt(i)
        );
      }
      var m = i.render, S = t.ref, C, D;
      id(t, u), xi(t);
      {
        if (yh.current = t, Kn(!0), C = cd(e, t, m, a, S, u), D = fd(), t.mode & Jt) {
          gn(!0);
          try {
            C = cd(e, t, m, a, S, u), D = fd();
          } finally {
            gn(!1);
          }
        }
        Kn(!1);
      }
      return Ri(), e !== null && !Co ? (lx(e, t, u), is(e, t, u)) : (Hr() && D && TS(t), t.flags |= fa, Di(e, t, C, u), t.child);
    }
    function $x(e, t, i, a, u) {
      if (e === null) {
        var d = i.type;
        if (FO(d) && i.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        i.defaultProps === void 0) {
          var m = d;
          return m = Sd(d), t.tag = ge, t.type = m, Y0(t, d), Gx(e, t, m, a, u);
        }
        {
          var S = d.propTypes;
          if (S && vo(
            S,
            a,
            // Resolved props
            "prop",
            Nt(d)
          ), i.defaultProps !== void 0) {
            var C = Nt(d) || "Unknown";
            Sh[C] || (v("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", C), Sh[C] = !0);
          }
        }
        var D = bE(i.type, null, a, t, t.mode, u);
        return D.ref = t.ref, D.return = t, t.child = D, D;
      }
      {
        var M = i.type, F = M.propTypes;
        F && vo(
          F,
          a,
          // Resolved props
          "prop",
          Nt(M)
        );
      }
      var V = e.child, $ = X0(e, u);
      if (!$) {
        var Q = V.memoizedProps, ee = i.compare;
        if (ee = ee !== null ? ee : Ue, ee(Q, a) && e.ref === t.ref)
          return is(e, t, u);
      }
      t.flags |= fa;
      var De = _c(V, a);
      return De.ref = t.ref, De.return = t, t.child = De, De;
    }
    function Gx(e, t, i, a, u) {
      if (t.type !== t.elementType) {
        var d = t.elementType;
        if (d.$$typeof === ot) {
          var m = d, S = m._payload, C = m._init;
          try {
            d = C(S);
          } catch {
            d = null;
          }
          var D = d && d.propTypes;
          D && vo(
            D,
            a,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Nt(d)
          );
        }
      }
      if (e !== null) {
        var M = e.memoizedProps;
        if (Ue(M, a) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Co = !1, t.pendingProps = a = M, X0(e, u))
            (e.flags & Jc) !== We && (Co = !0);
          else return t.lanes = e.lanes, is(e, t, u);
      }
      return H0(e, t, i, a, u);
    }
    function Kx(e, t, i) {
      var a = t.pendingProps, u = a.children, d = e !== null ? e.memoizedState : null;
      if (a.mode === "hidden" || Se)
        if ((t.mode & Ct) === $e) {
          var m = {
            baseLanes: se,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = m, Hy(t, i);
        } else if (oi(i, ai)) {
          var F = {
            baseLanes: se,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = F;
          var V = d !== null ? d.baseLanes : i;
          Hy(t, V);
        } else {
          var S = null, C;
          if (d !== null) {
            var D = d.baseLanes;
            C = ft(D, i);
          } else
            C = i;
          t.lanes = t.childLanes = ai;
          var M = {
            baseLanes: C,
            cachePool: S,
            transitions: null
          };
          return t.memoizedState = M, t.updateQueue = null, Hy(t, C), null;
        }
      else {
        var $;
        d !== null ? ($ = ft(d.baseLanes, i), t.memoizedState = null) : $ = i, Hy(t, $);
      }
      return Di(e, t, u, i), t.child;
    }
    function PM(e, t, i) {
      var a = t.pendingProps;
      return Di(e, t, a, i), t.child;
    }
    function UM(e, t, i) {
      var a = t.pendingProps.children;
      return Di(e, t, a, i), t.child;
    }
    function VM(e, t, i) {
      {
        t.flags |= _t;
        {
          var a = t.stateNode;
          a.effectDuration = 0, a.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, d = u.children;
      return Di(e, t, d, i), t.child;
    }
    function Qx(e, t) {
      var i = t.ref;
      (e === null && i !== null || e !== null && e.ref !== i) && (t.flags |= Tn, t.flags |= Ls);
    }
    function H0(e, t, i, a, u) {
      if (t.type !== t.elementType) {
        var d = i.propTypes;
        d && vo(
          d,
          a,
          // Resolved props
          "prop",
          Nt(i)
        );
      }
      var m;
      {
        var S = qf(t, i, !0);
        m = Zf(t, S);
      }
      var C, D;
      id(t, u), xi(t);
      {
        if (yh.current = t, Kn(!0), C = cd(e, t, i, a, m, u), D = fd(), t.mode & Jt) {
          gn(!0);
          try {
            C = cd(e, t, i, a, m, u), D = fd();
          } finally {
            gn(!1);
          }
        }
        Kn(!1);
      }
      return Ri(), e !== null && !Co ? (lx(e, t, u), is(e, t, u)) : (Hr() && D && TS(t), t.flags |= fa, Di(e, t, C, u), t.child);
    }
    function Xx(e, t, i, a, u) {
      {
        switch (eL(t)) {
          case !1: {
            var d = t.stateNode, m = t.type, S = new m(t.memoizedProps, d.context), C = S.state;
            d.updater.enqueueSetState(d, C, null);
            break;
          }
          case !0: {
            t.flags |= Ye, t.flags |= nr;
            var D = new Error("Simulated error coming from DevTools"), M = $u(u);
            t.lanes = ft(t.lanes, M);
            var F = U0(t, Tc(D, t), M);
            IS(t, F);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var V = i.propTypes;
          V && vo(
            V,
            a,
            // Resolved props
            "prop",
            Nt(i)
          );
        }
      }
      var $;
      il(i) ? ($ = !0, Bm(t)) : $ = !1, id(t, u);
      var Q = t.stateNode, ee;
      Q === null ? (Ay(e, t), Fx(t, i, a), L0(t, i, a, u), ee = !0) : e === null ? ee = bM(t, i, a, u) : ee = DM(e, t, i, a, u);
      var De = I0(e, t, i, ee, $, u);
      {
        var Qe = t.stateNode;
        ee && Qe.props !== a && (xc || v("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", at(t) || "a component"), xc = !0);
      }
      return De;
    }
    function I0(e, t, i, a, u, d) {
      Qx(e, t);
      var m = (t.flags & Ye) !== We;
      if (!a && !m)
        return u && AT(t, i, !1), is(e, t, d);
      var S = t.stateNode;
      yh.current = t;
      var C;
      if (m && typeof i.getDerivedStateFromError != "function")
        C = null, Nx();
      else {
        xi(t);
        {
          if (Kn(!0), C = S.render(), t.mode & Jt) {
            gn(!0);
            try {
              S.render();
            } finally {
              gn(!1);
            }
          }
          Kn(!1);
        }
        Ri();
      }
      return t.flags |= fa, e !== null && m ? NM(e, t, C, d) : Di(e, t, C, d), t.memoizedState = S.state, u && AT(t, i, !0), t.child;
    }
    function qx(e) {
      var t = e.stateNode;
      t.pendingContext ? kT(e, t.pendingContext, t.pendingContext !== t.context) : t.context && kT(e, t.context, !1), YS(e, t.containerInfo);
    }
    function zM(e, t, i) {
      if (qx(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var a = t.pendingProps, u = t.memoizedState, d = u.element;
      ex(e, t), iy(t, a, null, i);
      var m = t.memoizedState;
      t.stateNode;
      var S = m.element;
      if (u.isDehydrated) {
        var C = {
          element: S,
          isDehydrated: !1,
          cache: m.cache,
          pendingSuspenseBoundaries: m.pendingSuspenseBoundaries,
          transitions: m.transitions
        }, D = t.updateQueue;
        if (D.baseState = C, t.memoizedState = C, t.flags & Dr) {
          var M = Tc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return Zx(e, t, S, i, M);
        } else if (S !== d) {
          var F = Tc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return Zx(e, t, S, i, F);
        } else {
          Bk(t);
          var V = GT(t, null, S, i);
          t.child = V;
          for (var $ = V; $; )
            $.flags = $.flags & ~yn | ti, $ = $.sibling;
        }
      } else {
        if (td(), S === d)
          return is(e, t, i);
        Di(e, t, S, i);
      }
      return t.child;
    }
    function Zx(e, t, i, a, u) {
      return td(), _S(u), t.flags |= Dr, Di(e, t, i, a), t.child;
    }
    function FM(e, t, i) {
      ix(t), e === null && DS(t);
      var a = t.type, u = t.pendingProps, d = e !== null ? e.memoizedProps : null, m = u.children, S = sS(a, u);
      return S ? m = null : d !== null && sS(a, d) && (t.flags |= zi), Qx(e, t), Di(e, t, m, i), t.child;
    }
    function jM(e, t) {
      return e === null && DS(t), null;
    }
    function BM(e, t, i, a) {
      Ay(e, t);
      var u = t.pendingProps, d = i, m = d._payload, S = d._init, C = S(m);
      t.type = C;
      var D = t.tag = jO(C), M = Eo(C, u), F;
      switch (D) {
        case R:
          return Y0(t, C), t.type = C = Sd(C), F = H0(null, t, C, M, a), F;
        case b:
          return t.type = C = EE(C), F = Xx(null, t, C, M, a), F;
        case oe:
          return t.type = C = CE(C), F = Wx(null, t, C, M, a), F;
        case Ce: {
          if (t.type !== t.elementType) {
            var V = C.propTypes;
            V && vo(
              V,
              M,
              // Resolved for outer only
              "prop",
              Nt(C)
            );
          }
          return F = $x(
            null,
            t,
            C,
            Eo(C.type, M),
            // The inner type can have defaults too
            a
          ), F;
        }
      }
      var $ = "";
      throw C !== null && typeof C == "object" && C.$$typeof === ot && ($ = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + C + ". " + ("Lazy element type must resolve to a class or function." + $));
    }
    function HM(e, t, i, a, u) {
      Ay(e, t), t.tag = b;
      var d;
      return il(i) ? (d = !0, Bm(t)) : d = !1, id(t, u), Fx(t, i, a), L0(t, i, a, u), I0(null, t, i, !0, d, u);
    }
    function IM(e, t, i, a) {
      Ay(e, t);
      var u = t.pendingProps, d;
      {
        var m = qf(t, i, !1);
        d = Zf(t, m);
      }
      id(t, a);
      var S, C;
      xi(t);
      {
        if (i.prototype && typeof i.prototype.render == "function") {
          var D = Nt(i) || "Unknown";
          V0[D] || (v("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", D, D), V0[D] = !0);
        }
        t.mode & Jt && yo.recordLegacyContextWarning(t, null), Kn(!0), yh.current = t, S = cd(null, t, i, u, d, a), C = fd(), Kn(!1);
      }
      if (Ri(), t.flags |= fa, typeof S == "object" && S !== null && typeof S.render == "function" && S.$$typeof === void 0) {
        var M = Nt(i) || "Unknown";
        gh[M] || (v("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", M, M, M), gh[M] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof S == "object" && S !== null && typeof S.render == "function" && S.$$typeof === void 0
      ) {
        {
          var F = Nt(i) || "Unknown";
          gh[F] || (v("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", F, F, F), gh[F] = !0);
        }
        t.tag = b, t.memoizedState = null, t.updateQueue = null;
        var V = !1;
        return il(i) ? (V = !0, Bm(t)) : V = !1, t.memoizedState = S.state !== null && S.state !== void 0 ? S.state : null, HS(t), zx(t, S), L0(t, i, u, a), I0(null, t, i, !0, V, a);
      } else {
        if (t.tag = R, t.mode & Jt) {
          gn(!0);
          try {
            S = cd(null, t, i, u, d, a), C = fd();
          } finally {
            gn(!1);
          }
        }
        return Hr() && C && TS(t), Di(null, t, S, a), Y0(t, i), t.child;
      }
    }
    function Y0(e, t) {
      {
        if (t && t.childContextTypes && v("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var i = "", a = Pr();
          a && (i += `

Check the render method of \`` + a + "`.");
          var u = a || "", d = e._debugSource;
          d && (u = d.fileName + ":" + d.lineNumber), j0[u] || (j0[u] = !0, v("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", i));
        }
        if (t.defaultProps !== void 0) {
          var m = Nt(t) || "Unknown";
          Sh[m] || (v("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", m), Sh[m] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var S = Nt(t) || "Unknown";
          F0[S] || (v("%s: Function components do not support getDerivedStateFromProps.", S), F0[S] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var C = Nt(t) || "Unknown";
          z0[C] || (v("%s: Function components do not support contextType.", C), z0[C] = !0);
        }
      }
    }
    var W0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: Vt
    };
    function $0(e) {
      return {
        baseLanes: e,
        cachePool: LM(),
        transitions: null
      };
    }
    function YM(e, t) {
      var i = null;
      return {
        baseLanes: ft(e.baseLanes, t),
        cachePool: i,
        transitions: e.transitions
      };
    }
    function WM(e, t, i, a) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return GS(e, sh);
    }
    function $M(e, t) {
      return Gu(e.childLanes, t);
    }
    function Jx(e, t, i) {
      var a = t.pendingProps;
      tL(t) && (t.flags |= Ye);
      var u = go.current, d = !1, m = (t.flags & Ye) !== We;
      if (m || WM(u, e) ? (d = !0, t.flags &= ~Ye) : (e === null || e.memoizedState !== null) && (u = cM(u, ox)), u = od(u), eu(t, u), e === null) {
        DS(t);
        var S = t.memoizedState;
        if (S !== null) {
          var C = S.dehydrated;
          if (C !== null)
            return qM(t, C);
        }
        var D = a.children, M = a.fallback;
        if (d) {
          var F = GM(t, D, M, i), V = t.child;
          return V.memoizedState = $0(i), t.memoizedState = W0, F;
        } else
          return G0(t, D);
      } else {
        var $ = e.memoizedState;
        if ($ !== null) {
          var Q = $.dehydrated;
          if (Q !== null)
            return ZM(e, t, m, a, Q, $, i);
        }
        if (d) {
          var ee = a.fallback, De = a.children, Qe = QM(e, t, De, ee, i), He = t.child, At = e.child.memoizedState;
          return He.memoizedState = At === null ? $0(i) : YM(At, i), He.childLanes = $M(e, i), t.memoizedState = W0, Qe;
        } else {
          var bt = a.children, I = KM(e, t, bt, i);
          return t.memoizedState = null, I;
        }
      }
    }
    function G0(e, t, i) {
      var a = e.mode, u = {
        mode: "visible",
        children: t
      }, d = K0(u, a);
      return d.return = e, e.child = d, d;
    }
    function GM(e, t, i, a) {
      var u = e.mode, d = e.child, m = {
        mode: "hidden",
        children: t
      }, S, C;
      return (u & Ct) === $e && d !== null ? (S = d, S.childLanes = se, S.pendingProps = m, e.mode & Ft && (S.actualDuration = 0, S.actualStartTime = -1, S.selfBaseDuration = 0, S.treeBaseDuration = 0), C = su(i, u, a, null)) : (S = K0(m, u), C = su(i, u, a, null)), S.return = e, C.return = e, S.sibling = C, e.child = S, C;
    }
    function K0(e, t, i) {
      return ew(e, t, se, null);
    }
    function eR(e, t) {
      return _c(e, t);
    }
    function KM(e, t, i, a) {
      var u = e.child, d = u.sibling, m = eR(u, {
        mode: "visible",
        children: i
      });
      if ((t.mode & Ct) === $e && (m.lanes = a), m.return = t, m.sibling = null, d !== null) {
        var S = t.deletions;
        S === null ? (t.deletions = [d], t.flags |= Vi) : S.push(d);
      }
      return t.child = m, m;
    }
    function QM(e, t, i, a, u) {
      var d = t.mode, m = e.child, S = m.sibling, C = {
        mode: "hidden",
        children: i
      }, D;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (d & Ct) === $e && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== m
      ) {
        var M = t.child;
        D = M, D.childLanes = se, D.pendingProps = C, t.mode & Ft && (D.actualDuration = 0, D.actualStartTime = -1, D.selfBaseDuration = m.selfBaseDuration, D.treeBaseDuration = m.treeBaseDuration), t.deletions = null;
      } else
        D = eR(m, C), D.subtreeFlags = m.subtreeFlags & zn;
      var F;
      return S !== null ? F = _c(S, a) : (F = su(a, d, u, null), F.flags |= yn), F.return = t, D.return = t, D.sibling = F, t.child = D, F;
    }
    function My(e, t, i, a) {
      a !== null && _S(a), nd(t, e.child, null, i);
      var u = t.pendingProps, d = u.children, m = G0(t, d);
      return m.flags |= yn, t.memoizedState = null, m;
    }
    function XM(e, t, i, a, u) {
      var d = t.mode, m = {
        mode: "visible",
        children: i
      }, S = K0(m, d), C = su(a, d, u, null);
      return C.flags |= yn, S.return = t, C.return = t, S.sibling = C, t.child = S, (t.mode & Ct) !== $e && nd(t, e.child, null, u), C;
    }
    function qM(e, t, i) {
      return (e.mode & Ct) === $e ? (v("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = et) : dS(t) ? e.lanes = _r : e.lanes = ai, null;
    }
    function ZM(e, t, i, a, u, d, m) {
      if (i)
        if (t.flags & Dr) {
          t.flags &= ~Dr;
          var I = N0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return My(e, t, m, I);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ye, null;
          var te = a.children, Y = a.fallback, he = XM(e, t, te, Y, m), Ae = t.child;
          return Ae.memoizedState = $0(m), t.memoizedState = W0, he;
        }
      else {
        if (Fk(), (t.mode & Ct) === $e)
          return My(
            e,
            t,
            m,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (dS(u)) {
          var S, C, D;
          {
            var M = nk(u);
            S = M.digest, C = M.message, D = M.stack;
          }
          var F;
          C ? F = new Error(C) : F = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var V = N0(F, S, D);
          return My(e, t, m, V);
        }
        var $ = oi(m, e.childLanes);
        if (Co || $) {
          var Q = By();
          if (Q !== null) {
            var ee = Tp(Q, m);
            if (ee !== Vt && ee !== d.retryLane) {
              d.retryLane = ee;
              var De = nn;
              Gi(e, ee), xr(Q, e, ee, De);
            }
          }
          vE();
          var Qe = N0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return My(e, t, m, Qe);
        } else if (xT(u)) {
          t.flags |= Ye, t.child = e.child;
          var He = xO.bind(null, e);
          return rk(u, He), null;
        } else {
          Hk(t, u, d.treeContext);
          var At = a.children, bt = G0(t, At);
          return bt.flags |= ti, bt;
        }
      }
    }
    function tR(e, t, i) {
      e.lanes = ft(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = ft(a.lanes, t)), zS(e.return, t, i);
    }
    function JM(e, t, i) {
      for (var a = t; a !== null; ) {
        if (a.tag === J) {
          var u = a.memoizedState;
          u !== null && tR(a, i, e);
        } else if (a.tag === wt)
          tR(a, i, e);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
    }
    function eA(e) {
      for (var t = e, i = null; t !== null; ) {
        var a = t.alternate;
        a !== null && sy(a) === null && (i = t), t = t.sibling;
      }
      return i;
    }
    function tA(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !B0[e])
        if (B0[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              v('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              v('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              v('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          v('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function nA(e, t) {
      e !== void 0 && !ky[e] && (e !== "collapsed" && e !== "hidden" ? (ky[e] = !0, v('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (ky[e] = !0, v('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function nR(e, t) {
      {
        var i = yt(e), a = !i && typeof ct(e) == "function";
        if (i || a) {
          var u = i ? "array" : "iterable";
          return v("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function rA(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (yt(e)) {
          for (var i = 0; i < e.length; i++)
            if (!nR(e[i], i))
              return;
        } else {
          var a = ct(e);
          if (typeof a == "function") {
            var u = a.call(e);
            if (u)
              for (var d = u.next(), m = 0; !d.done; d = u.next()) {
                if (!nR(d.value, m))
                  return;
                m++;
              }
          } else
            v('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function Q0(e, t, i, a, u) {
      var d = e.memoizedState;
      d === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: a,
        tail: i,
        tailMode: u
      } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = a, d.tail = i, d.tailMode = u);
    }
    function rR(e, t, i) {
      var a = t.pendingProps, u = a.revealOrder, d = a.tail, m = a.children;
      tA(u), nA(d, u), rA(m, u), Di(e, t, m, i);
      var S = go.current, C = GS(S, sh);
      if (C)
        S = KS(S, sh), t.flags |= Ye;
      else {
        var D = e !== null && (e.flags & Ye) !== We;
        D && JM(t, t.child, i), S = od(S);
      }
      if (eu(t, S), (t.mode & Ct) === $e)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var M = eA(t.child), F;
            M === null ? (F = t.child, t.child = null) : (F = M.sibling, M.sibling = null), Q0(
              t,
              !1,
              // isBackwards
              F,
              M,
              d
            );
            break;
          }
          case "backwards": {
            var V = null, $ = t.child;
            for (t.child = null; $ !== null; ) {
              var Q = $.alternate;
              if (Q !== null && sy(Q) === null) {
                t.child = $;
                break;
              }
              var ee = $.sibling;
              $.sibling = V, V = $, $ = ee;
            }
            Q0(
              t,
              !0,
              // isBackwards
              V,
              null,
              // last
              d
            );
            break;
          }
          case "together": {
            Q0(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function iA(e, t, i) {
      YS(t, t.stateNode.containerInfo);
      var a = t.pendingProps;
      return e === null ? t.child = nd(t, null, a, i) : Di(e, t, a, i), t.child;
    }
    var iR = !1;
    function aA(e, t, i) {
      var a = t.type, u = a._context, d = t.pendingProps, m = t.memoizedProps, S = d.value;
      {
        "value" in d || iR || (iR = !0, v("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var C = t.type.propTypes;
        C && vo(C, d, "prop", "Context.Provider");
      }
      if (XT(t, u, S), m !== null) {
        var D = m.value;
        if (fe(D, S)) {
          if (m.children === d.children && !Fm())
            return is(e, t, i);
        } else
          tM(t, u, i);
      }
      var M = d.children;
      return Di(e, t, M, i), t.child;
    }
    var aR = !1;
    function oA(e, t, i) {
      var a = t.type;
      a._context === void 0 ? a !== a.Consumer && (aR || (aR = !0, v("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : a = a._context;
      var u = t.pendingProps, d = u.children;
      typeof d != "function" && v("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), id(t, i);
      var m = or(a);
      xi(t);
      var S;
      return yh.current = t, Kn(!0), S = d(m), Kn(!1), Ri(), t.flags |= fa, Di(e, t, S, i), t.child;
    }
    function Eh() {
      Co = !0;
    }
    function Ay(e, t) {
      (t.mode & Ct) === $e && e !== null && (e.alternate = null, t.alternate = null, t.flags |= yn);
    }
    function is(e, t, i) {
      return e !== null && (t.dependencies = e.dependencies), Nx(), Oh(t.lanes), oi(i, t.childLanes) ? (Jk(e, t), t.child) : null;
    }
    function lA(e, t, i) {
      {
        var a = t.return;
        if (a === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, i.index = t.index, i.sibling = t.sibling, i.return = t.return, i.ref = t.ref, t === a.child)
          a.child = i;
        else {
          var u = a.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = i;
        }
        var d = a.deletions;
        return d === null ? (a.deletions = [e], a.flags |= Vi) : d.push(e), i.flags |= yn, i;
      }
    }
    function X0(e, t) {
      var i = e.lanes;
      return !!oi(i, t);
    }
    function sA(e, t, i) {
      switch (t.tag) {
        case _:
          qx(t), t.stateNode, td();
          break;
        case U:
          ix(t);
          break;
        case b: {
          var a = t.type;
          il(a) && Bm(t);
          break;
        }
        case O:
          YS(t, t.stateNode.containerInfo);
          break;
        case ae: {
          var u = t.memoizedProps.value, d = t.type._context;
          XT(t, d, u);
          break;
        }
        case ve:
          {
            var m = oi(i, t.childLanes);
            m && (t.flags |= _t);
            {
              var S = t.stateNode;
              S.effectDuration = 0, S.passiveEffectDuration = 0;
            }
          }
          break;
        case J: {
          var C = t.memoizedState;
          if (C !== null) {
            if (C.dehydrated !== null)
              return eu(t, od(go.current)), t.flags |= Ye, null;
            var D = t.child, M = D.childLanes;
            if (oi(i, M))
              return Jx(e, t, i);
            eu(t, od(go.current));
            var F = is(e, t, i);
            return F !== null ? F.sibling : null;
          } else
            eu(t, od(go.current));
          break;
        }
        case wt: {
          var V = (e.flags & Ye) !== We, $ = oi(i, t.childLanes);
          if (V) {
            if ($)
              return rR(e, t, i);
            t.flags |= Ye;
          }
          var Q = t.memoizedState;
          if (Q !== null && (Q.rendering = null, Q.tail = null, Q.lastEffect = null), eu(t, go.current), $)
            break;
          return null;
        }
        case Ie:
        case Ot:
          return t.lanes = se, Kx(e, t, i);
      }
      return is(e, t, i);
    }
    function oR(e, t, i) {
      if (t._debugNeedsRemount && e !== null)
        return lA(e, t, bE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var a = e.memoizedProps, u = t.pendingProps;
        if (a !== u || Fm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Co = !0;
        else {
          var d = X0(e, i);
          if (!d && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Ye) === We)
            return Co = !1, sA(e, t, i);
          (e.flags & Jc) !== We ? Co = !0 : Co = !1;
        }
      } else if (Co = !1, Hr() && Lk(t)) {
        var m = t.index, S = Nk();
        NT(t, S, m);
      }
      switch (t.lanes = se, t.tag) {
        case k:
          return IM(e, t, t.type, i);
        case ye: {
          var C = t.elementType;
          return BM(e, t, C, i);
        }
        case R: {
          var D = t.type, M = t.pendingProps, F = t.elementType === D ? M : Eo(D, M);
          return H0(e, t, D, F, i);
        }
        case b: {
          var V = t.type, $ = t.pendingProps, Q = t.elementType === V ? $ : Eo(V, $);
          return Xx(e, t, V, Q, i);
        }
        case _:
          return zM(e, t, i);
        case U:
          return FM(e, t, i);
        case H:
          return jM(e, t);
        case J:
          return Jx(e, t, i);
        case O:
          return iA(e, t, i);
        case oe: {
          var ee = t.type, De = t.pendingProps, Qe = t.elementType === ee ? De : Eo(ee, De);
          return Wx(e, t, ee, Qe, i);
        }
        case X:
          return PM(e, t, i);
        case Z:
          return UM(e, t, i);
        case ve:
          return VM(e, t, i);
        case ae:
          return aA(e, t, i);
        case ne:
          return oA(e, t, i);
        case Ce: {
          var He = t.type, At = t.pendingProps, bt = Eo(He, At);
          if (t.type !== t.elementType) {
            var I = He.propTypes;
            I && vo(
              I,
              bt,
              // Resolved for outer only
              "prop",
              Nt(He)
            );
          }
          return bt = Eo(He.type, bt), $x(e, t, He, bt, i);
        }
        case ge:
          return Gx(e, t, t.type, t.pendingProps, i);
        case je: {
          var te = t.type, Y = t.pendingProps, he = t.elementType === te ? Y : Eo(te, Y);
          return HM(e, t, te, he, i);
        }
        case wt:
          return rR(e, t, i);
        case Tt:
          break;
        case Ie:
          return Kx(e, t, i);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function dd(e) {
      e.flags |= _t;
    }
    function lR(e) {
      e.flags |= Tn, e.flags |= Ls;
    }
    var sR, q0, uR, cR;
    sR = function(e, t, i, a) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === U || u.tag === H)
          M_(e, u.stateNode);
        else if (u.tag !== O) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, q0 = function(e, t) {
    }, uR = function(e, t, i, a, u) {
      var d = e.memoizedProps;
      if (d !== a) {
        var m = t.stateNode, S = WS(), C = O_(m, i, d, a, u, S);
        t.updateQueue = C, C && dd(t);
      }
    }, cR = function(e, t, i, a) {
      i !== a && dd(t);
    };
    function Ch(e, t) {
      if (!Hr())
        switch (e.tailMode) {
          case "hidden": {
            for (var i = e.tail, a = null; i !== null; )
              i.alternate !== null && (a = i), i = i.sibling;
            a === null ? e.tail = null : a.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, d = null; u !== null; )
              u.alternate !== null && (d = u), u = u.sibling;
            d === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : d.sibling = null;
            break;
          }
        }
    }
    function Yr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, i = se, a = We;
      if (t) {
        if ((e.mode & Ft) !== $e) {
          for (var C = e.selfBaseDuration, D = e.child; D !== null; )
            i = ft(i, ft(D.lanes, D.childLanes)), a |= D.subtreeFlags & zn, a |= D.flags & zn, C += D.treeBaseDuration, D = D.sibling;
          e.treeBaseDuration = C;
        } else
          for (var M = e.child; M !== null; )
            i = ft(i, ft(M.lanes, M.childLanes)), a |= M.subtreeFlags & zn, a |= M.flags & zn, M.return = e, M = M.sibling;
        e.subtreeFlags |= a;
      } else {
        if ((e.mode & Ft) !== $e) {
          for (var u = e.actualDuration, d = e.selfBaseDuration, m = e.child; m !== null; )
            i = ft(i, ft(m.lanes, m.childLanes)), a |= m.subtreeFlags, a |= m.flags, u += m.actualDuration, d += m.treeBaseDuration, m = m.sibling;
          e.actualDuration = u, e.treeBaseDuration = d;
        } else
          for (var S = e.child; S !== null; )
            i = ft(i, ft(S.lanes, S.childLanes)), a |= S.subtreeFlags, a |= S.flags, S.return = e, S = S.sibling;
        e.subtreeFlags |= a;
      }
      return e.childLanes = i, t;
    }
    function uA(e, t, i) {
      if (Gk() && (t.mode & Ct) !== $e && (t.flags & Ye) === We)
        return BT(t), td(), t.flags |= Dr | Au | nr, !1;
      var a = $m(t);
      if (i !== null && i.dehydrated !== null)
        if (e === null) {
          if (!a)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Wk(t), Yr(t), (t.mode & Ft) !== $e) {
            var u = i !== null;
            if (u) {
              var d = t.child;
              d !== null && (t.treeBaseDuration -= d.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (td(), (t.flags & Ye) === We && (t.memoizedState = null), t.flags |= _t, Yr(t), (t.mode & Ft) !== $e) {
            var m = i !== null;
            if (m) {
              var S = t.child;
              S !== null && (t.treeBaseDuration -= S.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return HT(), !0;
    }
    function fR(e, t, i) {
      var a = t.pendingProps;
      switch (xS(t), t.tag) {
        case k:
        case ye:
        case ge:
        case R:
        case oe:
        case X:
        case Z:
        case ve:
        case ne:
        case Ce:
          return Yr(t), null;
        case b: {
          var u = t.type;
          return il(u) && jm(t), Yr(t), null;
        }
        case _: {
          var d = t.stateNode;
          if (ad(t), SS(t), XS(), d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null), e === null || e.child === null) {
            var m = $m(t);
            if (m)
              dd(t);
            else if (e !== null) {
              var S = e.memoizedState;
              // Check if this is a client root
              (!S.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Dr) !== We) && (t.flags |= Qn, HT());
            }
          }
          return q0(e, t), Yr(t), null;
        }
        case U: {
          $S(t);
          var C = rx(), D = t.type;
          if (e !== null && t.stateNode != null)
            uR(e, t, D, a, C), e.ref !== t.ref && lR(t);
          else {
            if (!a) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Yr(t), null;
            }
            var M = WS(), F = $m(t);
            if (F)
              Ik(t, C, M) && dd(t);
            else {
              var V = k_(D, a, C, M, t);
              sR(V, t, !1, !1), t.stateNode = V, A_(V, D, a, C) && dd(t);
            }
            t.ref !== null && lR(t);
          }
          return Yr(t), null;
        }
        case H: {
          var $ = a;
          if (e && t.stateNode != null) {
            var Q = e.memoizedProps;
            cR(e, t, Q, $);
          } else {
            if (typeof $ != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var ee = rx(), De = WS(), Qe = $m(t);
            Qe ? Yk(t) && dd(t) : t.stateNode = L_($, ee, De, t);
          }
          return Yr(t), null;
        }
        case J: {
          ld(t);
          var He = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var At = uA(e, t, He);
            if (!At)
              return t.flags & nr ? t : null;
          }
          if ((t.flags & Ye) !== We)
            return t.lanes = i, (t.mode & Ft) !== $e && C0(t), t;
          var bt = He !== null, I = e !== null && e.memoizedState !== null;
          if (bt !== I && bt) {
            var te = t.child;
            if (te.flags |= Vn, (t.mode & Ct) !== $e) {
              var Y = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              Y || GS(go.current, ox) ? cO() : vE();
            }
          }
          var he = t.updateQueue;
          if (he !== null && (t.flags |= _t), Yr(t), (t.mode & Ft) !== $e && bt) {
            var Ae = t.child;
            Ae !== null && (t.treeBaseDuration -= Ae.treeBaseDuration);
          }
          return null;
        }
        case O:
          return ad(t), q0(e, t), e === null && bk(t.stateNode.containerInfo), Yr(t), null;
        case ae:
          var _e = t.type._context;
          return VS(_e, t), Yr(t), null;
        case je: {
          var nt = t.type;
          return il(nt) && jm(t), Yr(t), null;
        }
        case wt: {
          ld(t);
          var st = t.memoizedState;
          if (st === null)
            return Yr(t), null;
          var tn = (t.flags & Ye) !== We, Ht = st.rendering;
          if (Ht === null)
            if (tn)
              Ch(st, !1);
            else {
              var Zn = dO() && (e === null || (e.flags & Ye) === We);
              if (!Zn)
                for (var It = t.child; It !== null; ) {
                  var Yn = sy(It);
                  if (Yn !== null) {
                    tn = !0, t.flags |= Ye, Ch(st, !1);
                    var pi = Yn.updateQueue;
                    return pi !== null && (t.updateQueue = pi, t.flags |= _t), t.subtreeFlags = We, eM(t, i), eu(t, KS(go.current, sh)), t.child;
                  }
                  It = It.sibling;
                }
              st.tail !== null && Xn() > OR() && (t.flags |= Ye, tn = !0, Ch(st, !1), t.lanes = pp);
            }
          else {
            if (!tn) {
              var Qr = sy(Ht);
              if (Qr !== null) {
                t.flags |= Ye, tn = !0;
                var ga = Qr.updateQueue;
                if (ga !== null && (t.updateQueue = ga, t.flags |= _t), Ch(st, !0), st.tail === null && st.tailMode === "hidden" && !Ht.alternate && !Hr())
                  return Yr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Xn() * 2 - st.renderingStartTime > OR() && i !== ai && (t.flags |= Ye, tn = !0, Ch(st, !1), t.lanes = pp);
            }
            if (st.isBackwards)
              Ht.sibling = t.child, t.child = Ht;
            else {
              var Mi = st.last;
              Mi !== null ? Mi.sibling = Ht : t.child = Ht, st.last = Ht;
            }
          }
          if (st.tail !== null) {
            var Ai = st.tail;
            st.rendering = Ai, st.tail = Ai.sibling, st.renderingStartTime = Xn(), Ai.sibling = null;
            var hi = go.current;
            return tn ? hi = KS(hi, sh) : hi = od(hi), eu(t, hi), Ai;
          }
          return Yr(t), null;
        }
        case Tt:
          break;
        case Ie:
        case Ot: {
          hE(t);
          var us = t.memoizedState, Ed = us !== null;
          if (e !== null) {
            var Vh = e.memoizedState, dl = Vh !== null;
            dl !== Ed && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !Se && (t.flags |= Vn);
          }
          return !Ed || (t.mode & Ct) === $e ? Yr(t) : oi(fl, ai) && (Yr(t), t.subtreeFlags & (yn | _t) && (t.flags |= Vn)), null;
        }
        case Lt:
          return null;
        case Ut:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function cA(e, t, i) {
      switch (xS(t), t.tag) {
        case b: {
          var a = t.type;
          il(a) && jm(t);
          var u = t.flags;
          return u & nr ? (t.flags = u & ~nr | Ye, (t.mode & Ft) !== $e && C0(t), t) : null;
        }
        case _: {
          t.stateNode, ad(t), SS(t), XS();
          var d = t.flags;
          return (d & nr) !== We && (d & Ye) === We ? (t.flags = d & ~nr | Ye, t) : null;
        }
        case U:
          return $S(t), null;
        case J: {
          ld(t);
          var m = t.memoizedState;
          if (m !== null && m.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            td();
          }
          var S = t.flags;
          return S & nr ? (t.flags = S & ~nr | Ye, (t.mode & Ft) !== $e && C0(t), t) : null;
        }
        case wt:
          return ld(t), null;
        case O:
          return ad(t), null;
        case ae:
          var C = t.type._context;
          return VS(C, t), null;
        case Ie:
        case Ot:
          return hE(t), null;
        case Lt:
          return null;
        default:
          return null;
      }
    }
    function dR(e, t, i) {
      switch (xS(t), t.tag) {
        case b: {
          var a = t.type.childContextTypes;
          a != null && jm(t);
          break;
        }
        case _: {
          t.stateNode, ad(t), SS(t), XS();
          break;
        }
        case U: {
          $S(t);
          break;
        }
        case O:
          ad(t);
          break;
        case J:
          ld(t);
          break;
        case wt:
          ld(t);
          break;
        case ae:
          var u = t.type._context;
          VS(u, t);
          break;
        case Ie:
        case Ot:
          hE(t);
          break;
      }
    }
    var pR = null;
    pR = /* @__PURE__ */ new Set();
    var Oy = !1, Wr = !1, fA = typeof WeakSet == "function" ? WeakSet : Set, Ve = null, pd = null, hd = null;
    function dA(e) {
      jo(null, function() {
        throw e;
      }), Mu();
    }
    var pA = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ft)
        try {
          ul(), t.componentWillUnmount();
        } finally {
          sl(e);
        }
      else
        t.componentWillUnmount();
    };
    function hR(e, t) {
      try {
        ru(yr, e);
      } catch (i) {
        dn(e, t, i);
      }
    }
    function Z0(e, t, i) {
      try {
        pA(e, i);
      } catch (a) {
        dn(e, t, a);
      }
    }
    function hA(e, t, i) {
      try {
        i.componentDidMount();
      } catch (a) {
        dn(e, t, a);
      }
    }
    function vR(e, t) {
      try {
        yR(e);
      } catch (i) {
        dn(e, t, i);
      }
    }
    function vd(e, t) {
      var i = e.ref;
      if (i !== null)
        if (typeof i == "function") {
          var a;
          try {
            if (Je && gt && e.mode & Ft)
              try {
                ul(), a = i(null);
              } finally {
                sl(e);
              }
            else
              a = i(null);
          } catch (u) {
            dn(e, t, u);
          }
          typeof a == "function" && v("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", at(e));
        } else
          i.current = null;
    }
    function Ly(e, t, i) {
      try {
        i();
      } catch (a) {
        dn(e, t, a);
      }
    }
    var mR = !1;
    function vA(e, t) {
      D_(e.containerInfo), Ve = t, mA();
      var i = mR;
      return mR = !1, i;
    }
    function mA() {
      for (; Ve !== null; ) {
        var e = Ve, t = e.child;
        (e.subtreeFlags & Ho) !== We && t !== null ? (t.return = e, Ve = t) : yA();
      }
    }
    function yA() {
      for (; Ve !== null; ) {
        var e = Ve;
        Xt(e);
        try {
          gA(e);
        } catch (i) {
          dn(e, e.return, i);
        }
        fn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ve = t;
          return;
        }
        Ve = e.return;
      }
    }
    function gA(e) {
      var t = e.alternate, i = e.flags;
      if ((i & Qn) !== We) {
        switch (Xt(e), e.tag) {
          case R:
          case oe:
          case ge:
            break;
          case b: {
            if (t !== null) {
              var a = t.memoizedProps, u = t.memoizedState, d = e.stateNode;
              e.type === e.elementType && !xc && (d.props !== e.memoizedProps && v("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", at(e) || "instance"), d.state !== e.memoizedState && v("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", at(e) || "instance"));
              var m = d.getSnapshotBeforeUpdate(e.elementType === e.type ? a : Eo(e.type, a), u);
              {
                var S = pR;
                m === void 0 && !S.has(e.type) && (S.add(e.type), v("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", at(e)));
              }
              d.__reactInternalSnapshotBeforeUpdate = m;
            }
            break;
          }
          case _: {
            {
              var C = e.stateNode;
              Z_(C.containerInfo);
            }
            break;
          }
          case U:
          case H:
          case O:
          case je:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        fn();
      }
    }
    function To(e, t, i) {
      var a = t.updateQueue, u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var d = u.next, m = d;
        do {
          if ((m.tag & e) === e) {
            var S = m.destroy;
            m.destroy = void 0, S !== void 0 && ((e & Ir) !== Ki ? so(t) : (e & yr) !== Ki && Lu(t), (e & al) !== Ki && Nh(!0), Ly(t, i, S), (e & al) !== Ki && Nh(!1), (e & Ir) !== Ki ? $o() : (e & yr) !== Ki && fp());
          }
          m = m.next;
        } while (m !== d);
      }
    }
    function ru(e, t) {
      var i = t.updateQueue, a = i !== null ? i.lastEffect : null;
      if (a !== null) {
        var u = a.next, d = u;
        do {
          if ((d.tag & e) === e) {
            (e & Ir) !== Ki ? cp(t) : (e & yr) !== Ki && of(t);
            var m = d.create;
            (e & al) !== Ki && Nh(!0), d.destroy = m(), (e & al) !== Ki && Nh(!1), (e & Ir) !== Ki ? zv() : (e & yr) !== Ki && Fv();
            {
              var S = d.destroy;
              if (S !== void 0 && typeof S != "function") {
                var C = void 0;
                (d.tag & yr) !== We ? C = "useLayoutEffect" : (d.tag & al) !== We ? C = "useInsertionEffect" : C = "useEffect";
                var D = void 0;
                S === null ? D = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof S.then == "function" ? D = `

It looks like you wrote ` + C + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + C + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : D = " You returned: " + S, v("%s must not return anything besides a function, which is used for clean-up.%s", C, D);
              }
            }
          }
          d = d.next;
        } while (d !== u);
      }
    }
    function SA(e, t) {
      if ((t.flags & _t) !== We)
        switch (t.tag) {
          case ve: {
            var i = t.stateNode.passiveEffectDuration, a = t.memoizedProps, u = a.id, d = a.onPostCommit, m = Ox(), S = t.alternate === null ? "mount" : "update";
            Ax() && (S = "nested-update"), typeof d == "function" && d(u, S, i, m);
            var C = t.return;
            e: for (; C !== null; ) {
              switch (C.tag) {
                case _:
                  var D = C.stateNode;
                  D.passiveEffectDuration += i;
                  break e;
                case ve:
                  var M = C.stateNode;
                  M.passiveEffectDuration += i;
                  break e;
              }
              C = C.return;
            }
            break;
          }
        }
    }
    function EA(e, t, i, a) {
      if ((i.flags & Yo) !== We)
        switch (i.tag) {
          case R:
          case oe:
          case ge: {
            if (!Wr)
              if (i.mode & Ft)
                try {
                  ul(), ru(yr | mr, i);
                } finally {
                  sl(i);
                }
              else
                ru(yr | mr, i);
            break;
          }
          case b: {
            var u = i.stateNode;
            if (i.flags & _t && !Wr)
              if (t === null)
                if (i.type === i.elementType && !xc && (u.props !== i.memoizedProps && v("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", at(i) || "instance"), u.state !== i.memoizedState && v("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", at(i) || "instance")), i.mode & Ft)
                  try {
                    ul(), u.componentDidMount();
                  } finally {
                    sl(i);
                  }
                else
                  u.componentDidMount();
              else {
                var d = i.elementType === i.type ? t.memoizedProps : Eo(i.type, t.memoizedProps), m = t.memoizedState;
                if (i.type === i.elementType && !xc && (u.props !== i.memoizedProps && v("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", at(i) || "instance"), u.state !== i.memoizedState && v("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", at(i) || "instance")), i.mode & Ft)
                  try {
                    ul(), u.componentDidUpdate(d, m, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    sl(i);
                  }
                else
                  u.componentDidUpdate(d, m, u.__reactInternalSnapshotBeforeUpdate);
              }
            var S = i.updateQueue;
            S !== null && (i.type === i.elementType && !xc && (u.props !== i.memoizedProps && v("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", at(i) || "instance"), u.state !== i.memoizedState && v("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", at(i) || "instance")), nx(i, S, u));
            break;
          }
          case _: {
            var C = i.updateQueue;
            if (C !== null) {
              var D = null;
              if (i.child !== null)
                switch (i.child.tag) {
                  case U:
                    D = i.child.stateNode;
                    break;
                  case b:
                    D = i.child.stateNode;
                    break;
                }
              nx(i, C, D);
            }
            break;
          }
          case U: {
            var M = i.stateNode;
            if (t === null && i.flags & _t) {
              var F = i.type, V = i.memoizedProps;
              z_(M, F, V);
            }
            break;
          }
          case H:
            break;
          case O:
            break;
          case ve: {
            {
              var $ = i.memoizedProps, Q = $.onCommit, ee = $.onRender, De = i.stateNode.effectDuration, Qe = Ox(), He = t === null ? "mount" : "update";
              Ax() && (He = "nested-update"), typeof ee == "function" && ee(i.memoizedProps.id, He, i.actualDuration, i.treeBaseDuration, i.actualStartTime, Qe);
              {
                typeof Q == "function" && Q(i.memoizedProps.id, He, De, Qe), yO(i);
                var At = i.return;
                e: for (; At !== null; ) {
                  switch (At.tag) {
                    case _:
                      var bt = At.stateNode;
                      bt.effectDuration += De;
                      break e;
                    case ve:
                      var I = At.stateNode;
                      I.effectDuration += De;
                      break e;
                  }
                  At = At.return;
                }
              }
            }
            break;
          }
          case J: {
            _A(e, i);
            break;
          }
          case wt:
          case je:
          case Tt:
          case Ie:
          case Ot:
          case Ut:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Wr || i.flags & Tn && yR(i);
    }
    function CA(e) {
      switch (e.tag) {
        case R:
        case oe:
        case ge: {
          if (e.mode & Ft)
            try {
              ul(), hR(e, e.return);
            } finally {
              sl(e);
            }
          else
            hR(e, e.return);
          break;
        }
        case b: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && hA(e, e.return, t), vR(e, e.return);
          break;
        }
        case U: {
          vR(e, e.return);
          break;
        }
      }
    }
    function TA(e, t) {
      for (var i = null, a = e; ; ) {
        if (a.tag === U) {
          if (i === null) {
            i = a;
            try {
              var u = a.stateNode;
              t ? K_(u) : X_(a.stateNode, a.memoizedProps);
            } catch (m) {
              dn(e, e.return, m);
            }
          }
        } else if (a.tag === H) {
          if (i === null)
            try {
              var d = a.stateNode;
              t ? Q_(d) : q_(d, a.memoizedProps);
            } catch (m) {
              dn(e, e.return, m);
            }
        } else if (!((a.tag === Ie || a.tag === Ot) && a.memoizedState !== null && a !== e)) {
          if (a.child !== null) {
            a.child.return = a, a = a.child;
            continue;
          }
        }
        if (a === e)
          return;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return;
          i === a && (i = null), a = a.return;
        }
        i === a && (i = null), a.sibling.return = a.return, a = a.sibling;
      }
    }
    function yR(e) {
      var t = e.ref;
      if (t !== null) {
        var i = e.stateNode, a;
        switch (e.tag) {
          case U:
            a = i;
            break;
          default:
            a = i;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Ft)
            try {
              ul(), u = t(a);
            } finally {
              sl(e);
            }
          else
            u = t(a);
          typeof u == "function" && v("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", at(e));
        } else
          t.hasOwnProperty("current") || v("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", at(e)), t.current = a;
      }
    }
    function xA(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function gR(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, gR(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === U) {
          var i = e.stateNode;
          i !== null && kk(i);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function RA(e) {
      for (var t = e.return; t !== null; ) {
        if (SR(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function SR(e) {
      return e.tag === U || e.tag === _ || e.tag === O;
    }
    function ER(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || SR(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== U && t.tag !== H && t.tag !== Ne; ) {
          if (t.flags & yn || t.child === null || t.tag === O)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & yn))
          return t.stateNode;
      }
    }
    function wA(e) {
      var t = RA(e);
      switch (t.tag) {
        case U: {
          var i = t.stateNode;
          t.flags & zi && (TT(i), t.flags &= ~zi);
          var a = ER(e);
          eE(e, a, i);
          break;
        }
        case _:
        case O: {
          var u = t.stateNode.containerInfo, d = ER(e);
          J0(e, d, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function J0(e, t, i) {
      var a = e.tag, u = a === U || a === H;
      if (u) {
        var d = e.stateNode;
        t ? Y_(i, d, t) : H_(i, d);
      } else if (a !== O) {
        var m = e.child;
        if (m !== null) {
          J0(m, t, i);
          for (var S = m.sibling; S !== null; )
            J0(S, t, i), S = S.sibling;
        }
      }
    }
    function eE(e, t, i) {
      var a = e.tag, u = a === U || a === H;
      if (u) {
        var d = e.stateNode;
        t ? I_(i, d, t) : B_(i, d);
      } else if (a !== O) {
        var m = e.child;
        if (m !== null) {
          eE(m, t, i);
          for (var S = m.sibling; S !== null; )
            eE(S, t, i), S = S.sibling;
        }
      }
    }
    var $r = null, xo = !1;
    function bA(e, t, i) {
      {
        var a = t;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case U: {
              $r = a.stateNode, xo = !1;
              break e;
            }
            case _: {
              $r = a.stateNode.containerInfo, xo = !0;
              break e;
            }
            case O: {
              $r = a.stateNode.containerInfo, xo = !0;
              break e;
            }
          }
          a = a.return;
        }
        if ($r === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        CR(e, t, i), $r = null, xo = !1;
      }
      xA(i);
    }
    function iu(e, t, i) {
      for (var a = i.child; a !== null; )
        CR(e, t, a), a = a.sibling;
    }
    function CR(e, t, i) {
      switch (lp(i), i.tag) {
        case U:
          Wr || vd(i, t);
        case H: {
          {
            var a = $r, u = xo;
            $r = null, iu(e, t, i), $r = a, xo = u, $r !== null && (xo ? $_($r, i.stateNode) : W_($r, i.stateNode));
          }
          return;
        }
        case Ne: {
          $r !== null && (xo ? G_($r, i.stateNode) : fS($r, i.stateNode));
          return;
        }
        case O: {
          {
            var d = $r, m = xo;
            $r = i.stateNode.containerInfo, xo = !0, iu(e, t, i), $r = d, xo = m;
          }
          return;
        }
        case R:
        case oe:
        case Ce:
        case ge: {
          if (!Wr) {
            var S = i.updateQueue;
            if (S !== null) {
              var C = S.lastEffect;
              if (C !== null) {
                var D = C.next, M = D;
                do {
                  var F = M, V = F.destroy, $ = F.tag;
                  V !== void 0 && (($ & al) !== Ki ? Ly(i, t, V) : ($ & yr) !== Ki && (Lu(i), i.mode & Ft ? (ul(), Ly(i, t, V), sl(i)) : Ly(i, t, V), fp())), M = M.next;
                } while (M !== D);
              }
            }
          }
          iu(e, t, i);
          return;
        }
        case b: {
          if (!Wr) {
            vd(i, t);
            var Q = i.stateNode;
            typeof Q.componentWillUnmount == "function" && Z0(i, t, Q);
          }
          iu(e, t, i);
          return;
        }
        case Tt: {
          iu(e, t, i);
          return;
        }
        case Ie: {
          if (
            // TODO: Remove this dead flag
            i.mode & Ct
          ) {
            var ee = Wr;
            Wr = ee || i.memoizedState !== null, iu(e, t, i), Wr = ee;
          } else
            iu(e, t, i);
          break;
        }
        default: {
          iu(e, t, i);
          return;
        }
      }
    }
    function DA(e) {
      e.memoizedState;
    }
    function _A(e, t) {
      var i = t.memoizedState;
      if (i === null) {
        var a = t.alternate;
        if (a !== null) {
          var u = a.memoizedState;
          if (u !== null) {
            var d = u.dehydrated;
            d !== null && dk(d);
          }
        }
      }
    }
    function TR(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var i = e.stateNode;
        i === null && (i = e.stateNode = new fA()), t.forEach(function(a) {
          var u = RO.bind(null, e, a);
          if (!i.has(a)) {
            if (i.add(a), ii)
              if (pd !== null && hd !== null)
                Lh(hd, pd);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            a.then(u, u);
          }
        });
      }
    }
    function kA(e, t, i) {
      pd = i, hd = e, Xt(t), xR(t, e), Xt(t), pd = null, hd = null;
    }
    function Ro(e, t, i) {
      var a = t.deletions;
      if (a !== null)
        for (var u = 0; u < a.length; u++) {
          var d = a[u];
          try {
            bA(e, t, d);
          } catch (C) {
            dn(d, t, C);
          }
        }
      var m = Lo();
      if (t.subtreeFlags & Io)
        for (var S = t.child; S !== null; )
          Xt(S), xR(S, e), S = S.sibling;
      Xt(m);
    }
    function xR(e, t, i) {
      var a = e.alternate, u = e.flags;
      switch (e.tag) {
        case R:
        case oe:
        case Ce:
        case ge: {
          if (Ro(t, e), cl(e), u & _t) {
            try {
              To(al | mr, e, e.return), ru(al | mr, e);
            } catch (nt) {
              dn(e, e.return, nt);
            }
            if (e.mode & Ft) {
              try {
                ul(), To(yr | mr, e, e.return);
              } catch (nt) {
                dn(e, e.return, nt);
              }
              sl(e);
            } else
              try {
                To(yr | mr, e, e.return);
              } catch (nt) {
                dn(e, e.return, nt);
              }
          }
          return;
        }
        case b: {
          Ro(t, e), cl(e), u & Tn && a !== null && vd(a, a.return);
          return;
        }
        case U: {
          Ro(t, e), cl(e), u & Tn && a !== null && vd(a, a.return);
          {
            if (e.flags & zi) {
              var d = e.stateNode;
              try {
                TT(d);
              } catch (nt) {
                dn(e, e.return, nt);
              }
            }
            if (u & _t) {
              var m = e.stateNode;
              if (m != null) {
                var S = e.memoizedProps, C = a !== null ? a.memoizedProps : S, D = e.type, M = e.updateQueue;
                if (e.updateQueue = null, M !== null)
                  try {
                    F_(m, M, D, C, S, e);
                  } catch (nt) {
                    dn(e, e.return, nt);
                  }
              }
            }
          }
          return;
        }
        case H: {
          if (Ro(t, e), cl(e), u & _t) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var F = e.stateNode, V = e.memoizedProps, $ = a !== null ? a.memoizedProps : V;
            try {
              j_(F, $, V);
            } catch (nt) {
              dn(e, e.return, nt);
            }
          }
          return;
        }
        case _: {
          if (Ro(t, e), cl(e), u & _t && a !== null) {
            var Q = a.memoizedState;
            if (Q.isDehydrated)
              try {
                fk(t.containerInfo);
              } catch (nt) {
                dn(e, e.return, nt);
              }
          }
          return;
        }
        case O: {
          Ro(t, e), cl(e);
          return;
        }
        case J: {
          Ro(t, e), cl(e);
          var ee = e.child;
          if (ee.flags & Vn) {
            var De = ee.stateNode, Qe = ee.memoizedState, He = Qe !== null;
            if (De.isHidden = He, He) {
              var At = ee.alternate !== null && ee.alternate.memoizedState !== null;
              At || uO();
            }
          }
          if (u & _t) {
            try {
              DA(e);
            } catch (nt) {
              dn(e, e.return, nt);
            }
            TR(e);
          }
          return;
        }
        case Ie: {
          var bt = a !== null && a.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Ct
          ) {
            var I = Wr;
            Wr = I || bt, Ro(t, e), Wr = I;
          } else
            Ro(t, e);
          if (cl(e), u & Vn) {
            var te = e.stateNode, Y = e.memoizedState, he = Y !== null, Ae = e;
            if (te.isHidden = he, he && !bt && (Ae.mode & Ct) !== $e) {
              Ve = Ae;
              for (var _e = Ae.child; _e !== null; )
                Ve = _e, AA(_e), _e = _e.sibling;
            }
            TA(Ae, he);
          }
          return;
        }
        case wt: {
          Ro(t, e), cl(e), u & _t && TR(e);
          return;
        }
        case Tt:
          return;
        default: {
          Ro(t, e), cl(e);
          return;
        }
      }
    }
    function cl(e) {
      var t = e.flags;
      if (t & yn) {
        try {
          wA(e);
        } catch (i) {
          dn(e, e.return, i);
        }
        e.flags &= ~yn;
      }
      t & ti && (e.flags &= ~ti);
    }
    function MA(e, t, i) {
      pd = i, hd = t, Ve = e, RR(e, t, i), pd = null, hd = null;
    }
    function RR(e, t, i) {
      for (var a = (e.mode & Ct) !== $e; Ve !== null; ) {
        var u = Ve, d = u.child;
        if (u.tag === Ie && a) {
          var m = u.memoizedState !== null, S = m || Oy;
          if (S) {
            tE(e, t, i);
            continue;
          } else {
            var C = u.alternate, D = C !== null && C.memoizedState !== null, M = D || Wr, F = Oy, V = Wr;
            Oy = S, Wr = M, Wr && !V && (Ve = u, OA(u));
            for (var $ = d; $ !== null; )
              Ve = $, RR(
                $,
                // New root; bubble back up to here and stop.
                t,
                i
              ), $ = $.sibling;
            Ve = u, Oy = F, Wr = V, tE(e, t, i);
            continue;
          }
        }
        (u.subtreeFlags & Yo) !== We && d !== null ? (d.return = u, Ve = d) : tE(e, t, i);
      }
    }
    function tE(e, t, i) {
      for (; Ve !== null; ) {
        var a = Ve;
        if ((a.flags & Yo) !== We) {
          var u = a.alternate;
          Xt(a);
          try {
            EA(t, u, a, i);
          } catch (m) {
            dn(a, a.return, m);
          }
          fn();
        }
        if (a === e) {
          Ve = null;
          return;
        }
        var d = a.sibling;
        if (d !== null) {
          d.return = a.return, Ve = d;
          return;
        }
        Ve = a.return;
      }
    }
    function AA(e) {
      for (; Ve !== null; ) {
        var t = Ve, i = t.child;
        switch (t.tag) {
          case R:
          case oe:
          case Ce:
          case ge: {
            if (t.mode & Ft)
              try {
                ul(), To(yr, t, t.return);
              } finally {
                sl(t);
              }
            else
              To(yr, t, t.return);
            break;
          }
          case b: {
            vd(t, t.return);
            var a = t.stateNode;
            typeof a.componentWillUnmount == "function" && Z0(t, t.return, a);
            break;
          }
          case U: {
            vd(t, t.return);
            break;
          }
          case Ie: {
            var u = t.memoizedState !== null;
            if (u) {
              wR(e);
              continue;
            }
            break;
          }
        }
        i !== null ? (i.return = t, Ve = i) : wR(e);
      }
    }
    function wR(e) {
      for (; Ve !== null; ) {
        var t = Ve;
        if (t === e) {
          Ve = null;
          return;
        }
        var i = t.sibling;
        if (i !== null) {
          i.return = t.return, Ve = i;
          return;
        }
        Ve = t.return;
      }
    }
    function OA(e) {
      for (; Ve !== null; ) {
        var t = Ve, i = t.child;
        if (t.tag === Ie) {
          var a = t.memoizedState !== null;
          if (a) {
            bR(e);
            continue;
          }
        }
        i !== null ? (i.return = t, Ve = i) : bR(e);
      }
    }
    function bR(e) {
      for (; Ve !== null; ) {
        var t = Ve;
        Xt(t);
        try {
          CA(t);
        } catch (a) {
          dn(t, t.return, a);
        }
        if (fn(), t === e) {
          Ve = null;
          return;
        }
        var i = t.sibling;
        if (i !== null) {
          i.return = t.return, Ve = i;
          return;
        }
        Ve = t.return;
      }
    }
    function LA(e, t, i, a) {
      Ve = t, NA(t, e, i, a);
    }
    function NA(e, t, i, a) {
      for (; Ve !== null; ) {
        var u = Ve, d = u.child;
        (u.subtreeFlags & oo) !== We && d !== null ? (d.return = u, Ve = d) : PA(e, t, i, a);
      }
    }
    function PA(e, t, i, a) {
      for (; Ve !== null; ) {
        var u = Ve;
        if ((u.flags & ei) !== We) {
          Xt(u);
          try {
            UA(t, u, i, a);
          } catch (m) {
            dn(u, u.return, m);
          }
          fn();
        }
        if (u === e) {
          Ve = null;
          return;
        }
        var d = u.sibling;
        if (d !== null) {
          d.return = u.return, Ve = d;
          return;
        }
        Ve = u.return;
      }
    }
    function UA(e, t, i, a) {
      switch (t.tag) {
        case R:
        case oe:
        case ge: {
          if (t.mode & Ft) {
            E0();
            try {
              ru(Ir | mr, t);
            } finally {
              S0(t);
            }
          } else
            ru(Ir | mr, t);
          break;
        }
      }
    }
    function VA(e) {
      Ve = e, zA();
    }
    function zA() {
      for (; Ve !== null; ) {
        var e = Ve, t = e.child;
        if ((Ve.flags & Vi) !== We) {
          var i = e.deletions;
          if (i !== null) {
            for (var a = 0; a < i.length; a++) {
              var u = i[a];
              Ve = u, BA(u, e);
            }
            {
              var d = e.alternate;
              if (d !== null) {
                var m = d.child;
                if (m !== null) {
                  d.child = null;
                  do {
                    var S = m.sibling;
                    m.sibling = null, m = S;
                  } while (m !== null);
                }
              }
            }
            Ve = e;
          }
        }
        (e.subtreeFlags & oo) !== We && t !== null ? (t.return = e, Ve = t) : FA();
      }
    }
    function FA() {
      for (; Ve !== null; ) {
        var e = Ve;
        (e.flags & ei) !== We && (Xt(e), jA(e), fn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ve = t;
          return;
        }
        Ve = e.return;
      }
    }
    function jA(e) {
      switch (e.tag) {
        case R:
        case oe:
        case ge: {
          e.mode & Ft ? (E0(), To(Ir | mr, e, e.return), S0(e)) : To(Ir | mr, e, e.return);
          break;
        }
      }
    }
    function BA(e, t) {
      for (; Ve !== null; ) {
        var i = Ve;
        Xt(i), IA(i, t), fn();
        var a = i.child;
        a !== null ? (a.return = i, Ve = a) : HA(e);
      }
    }
    function HA(e) {
      for (; Ve !== null; ) {
        var t = Ve, i = t.sibling, a = t.return;
        if (gR(t), t === e) {
          Ve = null;
          return;
        }
        if (i !== null) {
          i.return = a, Ve = i;
          return;
        }
        Ve = a;
      }
    }
    function IA(e, t) {
      switch (e.tag) {
        case R:
        case oe:
        case ge: {
          e.mode & Ft ? (E0(), To(Ir, e, t), S0(e)) : To(Ir, e, t);
          break;
        }
      }
    }
    function YA(e) {
      switch (e.tag) {
        case R:
        case oe:
        case ge: {
          try {
            ru(yr | mr, e);
          } catch (i) {
            dn(e, e.return, i);
          }
          break;
        }
        case b: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (i) {
            dn(e, e.return, i);
          }
          break;
        }
      }
    }
    function WA(e) {
      switch (e.tag) {
        case R:
        case oe:
        case ge: {
          try {
            ru(Ir | mr, e);
          } catch (t) {
            dn(e, e.return, t);
          }
          break;
        }
      }
    }
    function $A(e) {
      switch (e.tag) {
        case R:
        case oe:
        case ge: {
          try {
            To(yr | mr, e, e.return);
          } catch (i) {
            dn(e, e.return, i);
          }
          break;
        }
        case b: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && Z0(e, e.return, t);
          break;
        }
      }
    }
    function GA(e) {
      switch (e.tag) {
        case R:
        case oe:
        case ge:
          try {
            To(Ir | mr, e, e.return);
          } catch (t) {
            dn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Th = Symbol.for;
      Th("selector.component"), Th("selector.has_pseudo_class"), Th("selector.role"), Th("selector.test_id"), Th("selector.text");
    }
    var KA = [];
    function QA() {
      KA.forEach(function(e) {
        return e();
      });
    }
    var XA = c.ReactCurrentActQueue;
    function qA(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), i = typeof jest < "u";
        return i && t !== !1;
      }
    }
    function DR() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && XA.current !== null && v("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var ZA = Math.ceil, nE = c.ReactCurrentDispatcher, rE = c.ReactCurrentOwner, Gr = c.ReactCurrentBatchConfig, wo = c.ReactCurrentActQueue, Er = (
      /*             */
      0
    ), _R = (
      /*               */
      1
    ), Kr = (
      /*                */
      2
    ), Ga = (
      /*                */
      4
    ), as = 0, xh = 1, Rc = 2, Ny = 3, Rh = 4, kR = 5, iE = 6, Mt = Er, _i = null, An = null, Cr = se, fl = se, aE = Ks(se), Tr = as, wh = null, Py = se, bh = se, Uy = se, Dh = null, Qi = null, oE = 0, MR = 500, AR = 1 / 0, JA = 500, os = null;
    function _h() {
      AR = Xn() + JA;
    }
    function OR() {
      return AR;
    }
    var Vy = !1, lE = null, md = null, wc = !1, au = null, kh = se, sE = [], uE = null, eO = 50, Mh = 0, cE = null, fE = !1, zy = !1, tO = 50, yd = 0, Fy = null, Ah = nn, jy = se, LR = !1;
    function By() {
      return _i;
    }
    function ki() {
      return (Mt & (Kr | Ga)) !== Er ? Xn() : (Ah !== nn || (Ah = Xn()), Ah);
    }
    function ou(e) {
      var t = e.mode;
      if ((t & Ct) === $e)
        return et;
      if ((Mt & Kr) !== Er && Cr !== se)
        return $u(Cr);
      var i = Xk() !== Qk;
      if (i) {
        if (Gr.transition !== null) {
          var a = Gr.transition;
          a._updatedFibers || (a._updatedFibers = /* @__PURE__ */ new Set()), a._updatedFibers.add(e);
        }
        return jy === Vt && (jy = Sp()), jy;
      }
      var u = Yi();
      if (u !== Vt)
        return u;
      var d = N_();
      return d;
    }
    function nO(e) {
      var t = e.mode;
      return (t & Ct) === $e ? et : Wv();
    }
    function xr(e, t, i, a) {
      bO(), LR && v("useInsertionEffect must not schedule updates."), fE && (zy = !0), Vs(e, i, a), (Mt & Kr) !== se && e === _i ? kO(t) : (ii && Qu(e, t, i), MO(t), e === _i && ((Mt & Kr) === Er && (bh = ft(bh, i)), Tr === Rh && lu(e, Cr)), Xi(e, a), i === et && Mt === Er && (t.mode & Ct) === $e && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !wo.isBatchingLegacy && (_h(), LT()));
    }
    function rO(e, t, i) {
      var a = e.current;
      a.lanes = t, Vs(e, t, i), Xi(e, i);
    }
    function iO(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Mt & Kr) !== Er
      );
    }
    function Xi(e, t) {
      var i = e.callbackNode;
      bf(e, t);
      var a = wf(e, e === _i ? Cr : se);
      if (a === se) {
        i !== null && QR(i), e.callbackNode = null, e.callbackPriority = Vt;
        return;
      }
      var u = Qo(a), d = e.callbackPriority;
      if (d === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(wo.current !== null && i !== gE)) {
        i == null && d !== et && v("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      i != null && QR(i);
      var m;
      if (u === et)
        e.tag === Qs ? (wo.isBatchingLegacy !== null && (wo.didScheduleLegacyUpdate = !0), Ok(UR.bind(null, e))) : OT(UR.bind(null, e)), wo.current !== null ? wo.current.push(Xs) : U_(function() {
          (Mt & (Kr | Ga)) === Er && Xs();
        }), m = null;
      else {
        var S;
        switch (Zv(a)) {
          case Vr:
            S = Ou;
            break;
          case Va:
            S = Wo;
            break;
          case Hi:
            S = lo;
            break;
          case Ii:
            S = Ll;
            break;
          default:
            S = lo;
            break;
        }
        m = SE(S, NR.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = m;
    }
    function NR(e, t) {
      if (TM(), Ah = nn, jy = se, (Mt & (Kr | Ga)) !== Er)
        throw new Error("Should not already be working.");
      var i = e.callbackNode, a = ss();
      if (a && e.callbackNode !== i)
        return null;
      var u = wf(e, e === _i ? Cr : se);
      if (u === se)
        return null;
      var d = !_f(e, u) && !Yv(e, u) && !t, m = d ? hO(e, u) : Iy(e, u);
      if (m !== as) {
        if (m === Rc) {
          var S = Df(e);
          S !== se && (u = S, m = dE(e, S));
        }
        if (m === xh) {
          var C = wh;
          throw bc(e, se), lu(e, u), Xi(e, Xn()), C;
        }
        if (m === iE)
          lu(e, u);
        else {
          var D = !_f(e, u), M = e.current.alternate;
          if (D && !oO(M)) {
            if (m = Iy(e, u), m === Rc) {
              var F = Df(e);
              F !== se && (u = F, m = dE(e, F));
            }
            if (m === xh) {
              var V = wh;
              throw bc(e, se), lu(e, u), Xi(e, Xn()), V;
            }
          }
          e.finishedWork = M, e.finishedLanes = u, aO(e, m, u);
        }
      }
      return Xi(e, Xn()), e.callbackNode === i ? NR.bind(null, e) : null;
    }
    function dE(e, t) {
      var i = Dh;
      if (Af(e)) {
        var a = bc(e, t);
        a.flags |= Dr, wk(e.containerInfo);
      }
      var u = Iy(e, t);
      if (u !== Rc) {
        var d = Qi;
        Qi = i, d !== null && PR(d);
      }
      return u;
    }
    function PR(e) {
      Qi === null ? Qi = e : Qi.push.apply(Qi, e);
    }
    function aO(e, t, i) {
      switch (t) {
        case as:
        case xh:
          throw new Error("Root did not complete. This is a bug in React.");
        case Rc: {
          Dc(e, Qi, os);
          break;
        }
        case Ny: {
          if (lu(e, i), Yl(i) && // do not delay if we're inside an act() scope
          !XR()) {
            var a = oE + MR - Xn();
            if (a > 10) {
              var u = wf(e, se);
              if (u !== se)
                break;
              var d = e.suspendedLanes;
              if (!Wl(d, i)) {
                ki(), kf(e, d);
                break;
              }
              e.timeoutHandle = uS(Dc.bind(null, e, Qi, os), a);
              break;
            }
          }
          Dc(e, Qi, os);
          break;
        }
        case Rh: {
          if (lu(e, i), yp(i))
            break;
          if (!XR()) {
            var m = pa(e, i), S = m, C = Xn() - S, D = wO(C) - C;
            if (D > 10) {
              e.timeoutHandle = uS(Dc.bind(null, e, Qi, os), D);
              break;
            }
          }
          Dc(e, Qi, os);
          break;
        }
        case kR: {
          Dc(e, Qi, os);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function oO(e) {
      for (var t = e; ; ) {
        if (t.flags & Os) {
          var i = t.updateQueue;
          if (i !== null) {
            var a = i.stores;
            if (a !== null)
              for (var u = 0; u < a.length; u++) {
                var d = a[u], m = d.getSnapshot, S = d.value;
                try {
                  if (!fe(m(), S))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var C = t.child;
        if (t.subtreeFlags & Os && C !== null) {
          C.return = t, t = C;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function lu(e, t) {
      t = Gu(t, Uy), t = Gu(t, bh), Kv(e, t);
    }
    function UR(e) {
      if (xM(), (Mt & (Kr | Ga)) !== Er)
        throw new Error("Should not already be working.");
      ss();
      var t = wf(e, se);
      if (!oi(t, et))
        return Xi(e, Xn()), null;
      var i = Iy(e, t);
      if (e.tag !== Qs && i === Rc) {
        var a = Df(e);
        a !== se && (t = a, i = dE(e, a));
      }
      if (i === xh) {
        var u = wh;
        throw bc(e, se), lu(e, t), Xi(e, Xn()), u;
      }
      if (i === iE)
        throw new Error("Root did not complete. This is a bug in React.");
      var d = e.current.alternate;
      return e.finishedWork = d, e.finishedLanes = t, Dc(e, Qi, os), Xi(e, Xn()), null;
    }
    function lO(e, t) {
      t !== se && (Mf(e, ft(t, et)), Xi(e, Xn()), (Mt & (Kr | Ga)) === Er && (_h(), Xs()));
    }
    function pE(e, t) {
      var i = Mt;
      Mt |= _R;
      try {
        return e(t);
      } finally {
        Mt = i, Mt === Er && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !wo.isBatchingLegacy && (_h(), LT());
      }
    }
    function sO(e, t, i, a, u) {
      var d = Yi(), m = Gr.transition;
      try {
        return Gr.transition = null, Bn(Vr), e(t, i, a, u);
      } finally {
        Bn(d), Gr.transition = m, Mt === Er && _h();
      }
    }
    function ls(e) {
      au !== null && au.tag === Qs && (Mt & (Kr | Ga)) === Er && ss();
      var t = Mt;
      Mt |= _R;
      var i = Gr.transition, a = Yi();
      try {
        return Gr.transition = null, Bn(Vr), e ? e() : void 0;
      } finally {
        Bn(a), Gr.transition = i, Mt = t, (Mt & (Kr | Ga)) === Er && Xs();
      }
    }
    function VR() {
      return (Mt & (Kr | Ga)) !== Er;
    }
    function Hy(e, t) {
      fi(aE, fl, e), fl = ft(fl, t);
    }
    function hE(e) {
      fl = aE.current, ci(aE, e);
    }
    function bc(e, t) {
      e.finishedWork = null, e.finishedLanes = se;
      var i = e.timeoutHandle;
      if (i !== cS && (e.timeoutHandle = cS, P_(i)), An !== null)
        for (var a = An.return; a !== null; ) {
          var u = a.alternate;
          dR(u, a), a = a.return;
        }
      _i = e;
      var d = _c(e.current, null);
      return An = d, Cr = fl = t, Tr = as, wh = null, Py = se, bh = se, Uy = se, Dh = null, Qi = null, rM(), yo.discardPendingWarnings(), d;
    }
    function zR(e, t) {
      do {
        var i = An;
        try {
          if (Zm(), sx(), fn(), rE.current = null, i === null || i.return === null) {
            Tr = xh, wh = t, An = null;
            return;
          }
          if (Je && i.mode & Ft && Dy(i, !0), tt)
            if (Ri(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var a = t;
              Ua(i, a, Cr);
            } else
              Nu(i, t, Cr);
          OM(e, i.return, i, t, Cr), HR(i);
        } catch (u) {
          t = u, An === i && i !== null ? (i = i.return, An = i) : i = An;
          continue;
        }
        return;
      } while (!0);
    }
    function FR() {
      var e = nE.current;
      return nE.current = Ty, e === null ? Ty : e;
    }
    function jR(e) {
      nE.current = e;
    }
    function uO() {
      oE = Xn();
    }
    function Oh(e) {
      Py = ft(e, Py);
    }
    function cO() {
      Tr === as && (Tr = Ny);
    }
    function vE() {
      (Tr === as || Tr === Ny || Tr === Rc) && (Tr = Rh), _i !== null && (Wu(Py) || Wu(bh)) && lu(_i, Cr);
    }
    function fO(e) {
      Tr !== Rh && (Tr = Rc), Dh === null ? Dh = [e] : Dh.push(e);
    }
    function dO() {
      return Tr === as;
    }
    function Iy(e, t) {
      var i = Mt;
      Mt |= Kr;
      var a = FR();
      if (_i !== e || Cr !== t) {
        if (ii) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Lh(e, Cr), u.clear()), Qv(e, t);
        }
        os = xp(), bc(e, t);
      }
      Vl(t);
      do
        try {
          pO();
          break;
        } catch (d) {
          zR(e, d);
        }
      while (!0);
      if (Zm(), Mt = i, jR(a), An !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return lf(), _i = null, Cr = se, Tr;
    }
    function pO() {
      for (; An !== null; )
        BR(An);
    }
    function hO(e, t) {
      var i = Mt;
      Mt |= Kr;
      var a = FR();
      if (_i !== e || Cr !== t) {
        if (ii) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Lh(e, Cr), u.clear()), Qv(e, t);
        }
        os = xp(), _h(), bc(e, t);
      }
      Vl(t);
      do
        try {
          vO();
          break;
        } catch (d) {
          zR(e, d);
        }
      while (!0);
      return Zm(), jR(a), Mt = i, An !== null ? (jv(), as) : (lf(), _i = null, Cr = se, Tr);
    }
    function vO() {
      for (; An !== null && !np(); )
        BR(An);
    }
    function BR(e) {
      var t = e.alternate;
      Xt(e);
      var i;
      (e.mode & Ft) !== $e ? (g0(e), i = mE(t, e, fl), Dy(e, !0)) : i = mE(t, e, fl), fn(), e.memoizedProps = e.pendingProps, i === null ? HR(e) : An = i, rE.current = null;
    }
    function HR(e) {
      var t = e;
      do {
        var i = t.alternate, a = t.return;
        if ((t.flags & Au) === We) {
          Xt(t);
          var u = void 0;
          if ((t.mode & Ft) === $e ? u = fR(i, t, fl) : (g0(t), u = fR(i, t, fl), Dy(t, !1)), fn(), u !== null) {
            An = u;
            return;
          }
        } else {
          var d = cA(i, t);
          if (d !== null) {
            d.flags &= Nv, An = d;
            return;
          }
          if ((t.mode & Ft) !== $e) {
            Dy(t, !1);
            for (var m = t.actualDuration, S = t.child; S !== null; )
              m += S.actualDuration, S = S.sibling;
            t.actualDuration = m;
          }
          if (a !== null)
            a.flags |= Au, a.subtreeFlags = We, a.deletions = null;
          else {
            Tr = iE, An = null;
            return;
          }
        }
        var C = t.sibling;
        if (C !== null) {
          An = C;
          return;
        }
        t = a, An = t;
      } while (t !== null);
      Tr === as && (Tr = kR);
    }
    function Dc(e, t, i) {
      var a = Yi(), u = Gr.transition;
      try {
        Gr.transition = null, Bn(Vr), mO(e, t, i, a);
      } finally {
        Gr.transition = u, Bn(a);
      }
      return null;
    }
    function mO(e, t, i, a) {
      do
        ss();
      while (au !== null);
      if (DO(), (Mt & (Kr | Ga)) !== Er)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, d = e.finishedLanes;
      if (sp(d), u === null)
        return up(), null;
      if (d === se && v("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = se, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Vt;
      var m = ft(u.lanes, u.childLanes);
      Cp(e, m), e === _i && (_i = null, An = null, Cr = se), ((u.subtreeFlags & oo) !== We || (u.flags & oo) !== We) && (wc || (wc = !0, uE = i, SE(lo, function() {
        return ss(), null;
      })));
      var S = (u.subtreeFlags & (Ho | Io | Yo | oo)) !== We, C = (u.flags & (Ho | Io | Yo | oo)) !== We;
      if (S || C) {
        var D = Gr.transition;
        Gr.transition = null;
        var M = Yi();
        Bn(Vr);
        var F = Mt;
        Mt |= Ga, rE.current = null, vA(e, u), Lx(), kA(e, u, d), __(e.containerInfo), e.current = u, Pu(d), MA(u, e, d), Uu(), rp(), Mt = F, Bn(M), Gr.transition = D;
      } else
        e.current = u, Lx();
      var V = wc;
      if (wc ? (wc = !1, au = e, kh = d) : (yd = 0, Fy = null), m = e.pendingLanes, m === se && (md = null), V || $R(e.current, !1), ap(u.stateNode, a), ii && e.memoizedUpdaters.clear(), QA(), Xi(e, Xn()), t !== null)
        for (var $ = e.onRecoverableError, Q = 0; Q < t.length; Q++) {
          var ee = t[Q], De = ee.stack, Qe = ee.digest;
          $(ee.value, {
            componentStack: De,
            digest: Qe
          });
        }
      if (Vy) {
        Vy = !1;
        var He = lE;
        throw lE = null, He;
      }
      return oi(kh, et) && e.tag !== Qs && ss(), m = e.pendingLanes, oi(m, et) ? (CM(), e === cE ? Mh++ : (Mh = 0, cE = e)) : Mh = 0, Xs(), up(), null;
    }
    function ss() {
      if (au !== null) {
        var e = Zv(kh), t = qu(Hi, e), i = Gr.transition, a = Yi();
        try {
          return Gr.transition = null, Bn(t), gO();
        } finally {
          Bn(a), Gr.transition = i;
        }
      }
      return !1;
    }
    function yO(e) {
      sE.push(e), wc || (wc = !0, SE(lo, function() {
        return ss(), null;
      }));
    }
    function gO() {
      if (au === null)
        return !1;
      var e = uE;
      uE = null;
      var t = au, i = kh;
      if (au = null, kh = se, (Mt & (Kr | Ga)) !== Er)
        throw new Error("Cannot flush passive effects while already rendering.");
      fE = !0, zy = !1, Ul(i);
      var a = Mt;
      Mt |= Ga, VA(t.current), LA(t, t.current, i, e);
      {
        var u = sE;
        sE = [];
        for (var d = 0; d < u.length; d++) {
          var m = u[d];
          SA(t, m);
        }
      }
      dp(), $R(t.current, !0), Mt = a, Xs(), zy ? t === Fy ? yd++ : (yd = 0, Fy = t) : yd = 0, fE = !1, zy = !1, op(t);
      {
        var S = t.current.stateNode;
        S.effectDuration = 0, S.passiveEffectDuration = 0;
      }
      return !0;
    }
    function IR(e) {
      return md !== null && md.has(e);
    }
    function SO(e) {
      md === null ? md = /* @__PURE__ */ new Set([e]) : md.add(e);
    }
    function EO(e) {
      Vy || (Vy = !0, lE = e);
    }
    var CO = EO;
    function YR(e, t, i) {
      var a = Tc(i, t), u = Bx(e, a, et), d = Zs(e, u, et), m = ki();
      d !== null && (Vs(d, et, m), Xi(d, m));
    }
    function dn(e, t, i) {
      if (dA(i), Nh(!1), e.tag === _) {
        YR(e, e, i);
        return;
      }
      var a = null;
      for (a = t; a !== null; ) {
        if (a.tag === _) {
          YR(a, e, i);
          return;
        } else if (a.tag === b) {
          var u = a.type, d = a.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof d.componentDidCatch == "function" && !IR(d)) {
            var m = Tc(i, e), S = U0(a, m, et), C = Zs(a, S, et), D = ki();
            C !== null && (Vs(C, et, D), Xi(C, D));
            return;
          }
        }
        a = a.return;
      }
      v(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, i);
    }
    function TO(e, t, i) {
      var a = e.pingCache;
      a !== null && a.delete(t);
      var u = ki();
      kf(e, i), AO(e), _i === e && Wl(Cr, i) && (Tr === Rh || Tr === Ny && Yl(Cr) && Xn() - oE < MR ? bc(e, se) : Uy = ft(Uy, i)), Xi(e, u);
    }
    function WR(e, t) {
      t === Vt && (t = nO(e));
      var i = ki(), a = Gi(e, t);
      a !== null && (Vs(a, t, i), Xi(a, i));
    }
    function xO(e) {
      var t = e.memoizedState, i = Vt;
      t !== null && (i = t.retryLane), WR(e, i);
    }
    function RO(e, t) {
      var i = Vt, a;
      switch (e.tag) {
        case J:
          a = e.stateNode;
          var u = e.memoizedState;
          u !== null && (i = u.retryLane);
          break;
        case wt:
          a = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      a !== null && a.delete(t), WR(e, i);
    }
    function wO(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : ZA(e / 1960) * 1960;
    }
    function bO() {
      if (Mh > eO)
        throw Mh = 0, cE = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      yd > tO && (yd = 0, Fy = null, v("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function DO() {
      yo.flushLegacyContextWarning(), yo.flushPendingUnsafeLifecycleWarnings();
    }
    function $R(e, t) {
      Xt(e), Yy(e, Bo, $A), t && Yy(e, La, GA), Yy(e, Bo, YA), t && Yy(e, La, WA), fn();
    }
    function Yy(e, t, i) {
      for (var a = e, u = null; a !== null; ) {
        var d = a.subtreeFlags & t;
        a !== u && a.child !== null && d !== We ? a = a.child : ((a.flags & t) !== We && i(a), a.sibling !== null ? a = a.sibling : a = u = a.return);
      }
    }
    var Wy = null;
    function GR(e) {
      {
        if ((Mt & Kr) !== Er || !(e.mode & Ct))
          return;
        var t = e.tag;
        if (t !== k && t !== _ && t !== b && t !== R && t !== oe && t !== Ce && t !== ge)
          return;
        var i = at(e) || "ReactComponent";
        if (Wy !== null) {
          if (Wy.has(i))
            return;
          Wy.add(i);
        } else
          Wy = /* @__PURE__ */ new Set([i]);
        var a = fr;
        try {
          Xt(e), v("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          a ? Xt(e) : fn();
        }
      }
    }
    var mE;
    {
      var _O = null;
      mE = function(e, t, i) {
        var a = tw(_O, t);
        try {
          return oR(e, t, i);
        } catch (d) {
          if (jk() || d !== null && typeof d == "object" && typeof d.then == "function")
            throw d;
          if (Zm(), sx(), dR(e, t), tw(t, a), t.mode & Ft && g0(t), jo(null, oR, null, e, t, i), io()) {
            var u = Mu();
            typeof u == "object" && u !== null && u._suppressLogging && typeof d == "object" && d !== null && !d._suppressLogging && (d._suppressLogging = !0);
          }
          throw d;
        }
      };
    }
    var KR = !1, yE;
    yE = /* @__PURE__ */ new Set();
    function kO(e) {
      if (ba && !gM())
        switch (e.tag) {
          case R:
          case oe:
          case ge: {
            var t = An && at(An) || "Unknown", i = t;
            if (!yE.has(i)) {
              yE.add(i);
              var a = at(e) || "Unknown";
              v("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", a, t, t);
            }
            break;
          }
          case b: {
            KR || (v("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), KR = !0);
            break;
          }
        }
    }
    function Lh(e, t) {
      if (ii) {
        var i = e.memoizedUpdaters;
        i.forEach(function(a) {
          Qu(e, a, t);
        });
      }
    }
    var gE = {};
    function SE(e, t) {
      {
        var i = wo.current;
        return i !== null ? (i.push(t), gE) : tp(e, t);
      }
    }
    function QR(e) {
      if (e !== gE)
        return Uv(e);
    }
    function XR() {
      return wo.current !== null;
    }
    function MO(e) {
      {
        if (e.mode & Ct) {
          if (!DR())
            return;
        } else if (!qA() || Mt !== Er || e.tag !== R && e.tag !== oe && e.tag !== ge)
          return;
        if (wo.current === null) {
          var t = fr;
          try {
            Xt(e), v(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, at(e));
          } finally {
            t ? Xt(e) : fn();
          }
        }
      }
    }
    function AO(e) {
      e.tag !== Qs && DR() && wo.current === null && v(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Nh(e) {
      LR = e;
    }
    var Ka = null, gd = null, OO = function(e) {
      Ka = e;
    };
    function Sd(e) {
      {
        if (Ka === null)
          return e;
        var t = Ka(e);
        return t === void 0 ? e : t.current;
      }
    }
    function EE(e) {
      return Sd(e);
    }
    function CE(e) {
      {
        if (Ka === null)
          return e;
        var t = Ka(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var i = Sd(e.render);
            if (e.render !== i) {
              var a = {
                $$typeof: le,
                render: i
              };
              return e.displayName !== void 0 && (a.displayName = e.displayName), a;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function qR(e, t) {
      {
        if (Ka === null)
          return !1;
        var i = e.elementType, a = t.type, u = !1, d = typeof a == "object" && a !== null ? a.$$typeof : null;
        switch (e.tag) {
          case b: {
            typeof a == "function" && (u = !0);
            break;
          }
          case R: {
            (typeof a == "function" || d === ot) && (u = !0);
            break;
          }
          case oe: {
            (d === le || d === ot) && (u = !0);
            break;
          }
          case Ce:
          case ge: {
            (d === ut || d === ot) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var m = Ka(i);
          if (m !== void 0 && m === Ka(a))
            return !0;
        }
        return !1;
      }
    }
    function ZR(e) {
      {
        if (Ka === null || typeof WeakSet != "function")
          return;
        gd === null && (gd = /* @__PURE__ */ new WeakSet()), gd.add(e);
      }
    }
    var LO = function(e, t) {
      {
        if (Ka === null)
          return;
        var i = t.staleFamilies, a = t.updatedFamilies;
        ss(), ls(function() {
          TE(e.current, a, i);
        });
      }
    }, NO = function(e, t) {
      {
        if (e.context !== ma)
          return;
        ss(), ls(function() {
          Ph(t, e, null, null);
        });
      }
    };
    function TE(e, t, i) {
      {
        var a = e.alternate, u = e.child, d = e.sibling, m = e.tag, S = e.type, C = null;
        switch (m) {
          case R:
          case ge:
          case b:
            C = S;
            break;
          case oe:
            C = S.render;
            break;
        }
        if (Ka === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var D = !1, M = !1;
        if (C !== null) {
          var F = Ka(C);
          F !== void 0 && (i.has(F) ? M = !0 : t.has(F) && (m === b ? M = !0 : D = !0));
        }
        if (gd !== null && (gd.has(e) || a !== null && gd.has(a)) && (M = !0), M && (e._debugNeedsRemount = !0), M || D) {
          var V = Gi(e, et);
          V !== null && xr(V, e, et, nn);
        }
        u !== null && !M && TE(u, t, i), d !== null && TE(d, t, i);
      }
    }
    var PO = function(e, t) {
      {
        var i = /* @__PURE__ */ new Set(), a = new Set(t.map(function(u) {
          return u.current;
        }));
        return xE(e.current, a, i), i;
      }
    };
    function xE(e, t, i) {
      {
        var a = e.child, u = e.sibling, d = e.tag, m = e.type, S = null;
        switch (d) {
          case R:
          case ge:
          case b:
            S = m;
            break;
          case oe:
            S = m.render;
            break;
        }
        var C = !1;
        S !== null && t.has(S) && (C = !0), C ? UO(e, i) : a !== null && xE(a, t, i), u !== null && xE(u, t, i);
      }
    }
    function UO(e, t) {
      {
        var i = VO(e, t);
        if (i)
          return;
        for (var a = e; ; ) {
          switch (a.tag) {
            case U:
              t.add(a.stateNode);
              return;
            case O:
              t.add(a.stateNode.containerInfo);
              return;
            case _:
              t.add(a.stateNode.containerInfo);
              return;
          }
          if (a.return === null)
            throw new Error("Expected to reach root first.");
          a = a.return;
        }
      }
    }
    function VO(e, t) {
      for (var i = e, a = !1; ; ) {
        if (i.tag === U)
          a = !0, t.add(i.stateNode);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return a;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return a;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
      return !1;
    }
    var RE;
    {
      RE = !1;
      try {
        var JR = Object.preventExtensions({});
      } catch {
        RE = !0;
      }
    }
    function zO(e, t, i, a) {
      this.tag = e, this.key = i, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = a, this.flags = We, this.subtreeFlags = We, this.deletions = null, this.lanes = se, this.childLanes = se, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !RE && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ya = function(e, t, i, a) {
      return new zO(e, t, i, a);
    };
    function wE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function FO(e) {
      return typeof e == "function" && !wE(e) && e.defaultProps === void 0;
    }
    function jO(e) {
      if (typeof e == "function")
        return wE(e) ? b : R;
      if (e != null) {
        var t = e.$$typeof;
        if (t === le)
          return oe;
        if (t === ut)
          return Ce;
      }
      return k;
    }
    function _c(e, t) {
      var i = e.alternate;
      i === null ? (i = ya(e.tag, t, e.key, e.mode), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i._debugSource = e._debugSource, i._debugOwner = e._debugOwner, i._debugHookTypes = e._debugHookTypes, i.alternate = e, e.alternate = i) : (i.pendingProps = t, i.type = e.type, i.flags = We, i.subtreeFlags = We, i.deletions = null, i.actualDuration = 0, i.actualStartTime = -1), i.flags = e.flags & zn, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue;
      var a = e.dependencies;
      switch (i.dependencies = a === null ? null : {
        lanes: a.lanes,
        firstContext: a.firstContext
      }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i.selfBaseDuration = e.selfBaseDuration, i.treeBaseDuration = e.treeBaseDuration, i._debugNeedsRemount = e._debugNeedsRemount, i.tag) {
        case k:
        case R:
        case ge:
          i.type = Sd(e.type);
          break;
        case b:
          i.type = EE(e.type);
          break;
        case oe:
          i.type = CE(e.type);
          break;
      }
      return i;
    }
    function BO(e, t) {
      e.flags &= zn | yn;
      var i = e.alternate;
      if (i === null)
        e.childLanes = se, e.lanes = t, e.child = null, e.subtreeFlags = We, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = i.childLanes, e.lanes = i.lanes, e.child = i.child, e.subtreeFlags = We, e.deletions = null, e.memoizedProps = i.memoizedProps, e.memoizedState = i.memoizedState, e.updateQueue = i.updateQueue, e.type = i.type;
        var a = i.dependencies;
        e.dependencies = a === null ? null : {
          lanes: a.lanes,
          firstContext: a.firstContext
        }, e.selfBaseDuration = i.selfBaseDuration, e.treeBaseDuration = i.treeBaseDuration;
      }
      return e;
    }
    function HO(e, t, i) {
      var a;
      return e === Hm ? (a = Ct, t === !0 && (a |= Jt, a |= jt)) : a = $e, ii && (a |= Ft), ya(_, null, null, a);
    }
    function bE(e, t, i, a, u, d) {
      var m = k, S = e;
      if (typeof e == "function")
        wE(e) ? (m = b, S = EE(S)) : S = Sd(S);
      else if (typeof e == "string")
        m = U;
      else
        e: switch (e) {
          case Ta:
            return su(i.children, u, d, t);
          case na:
            m = Z, u |= Jt, (u & Ct) !== $e && (u |= jt);
            break;
          case xa:
            return IO(i, u, d, t);
          case we:
            return YO(i, u, d, t);
          case Le:
            return WO(i, u, d, t);
          case wn:
            return ew(i, u, d, t);
          case on:
          case xt:
          case cn:
          case cr:
          case Et:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Ra:
                  m = ae;
                  break e;
                case N:
                  m = ne;
                  break e;
                case le:
                  m = oe, S = CE(S);
                  break e;
                case ut:
                  m = Ce;
                  break e;
                case ot:
                  m = ye, S = null;
                  break e;
              }
            var C = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (C += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var D = a ? at(a) : null;
              D && (C += `

Check the render method of \`` + D + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + C));
          }
        }
      var M = ya(m, i, t, u);
      return M.elementType = e, M.type = S, M.lanes = d, M._debugOwner = a, M;
    }
    function DE(e, t, i) {
      var a = null;
      a = e._owner;
      var u = e.type, d = e.key, m = e.props, S = bE(u, d, m, a, t, i);
      return S._debugSource = e._source, S._debugOwner = e._owner, S;
    }
    function su(e, t, i, a) {
      var u = ya(X, e, a, t);
      return u.lanes = i, u;
    }
    function IO(e, t, i, a) {
      typeof e.id != "string" && v('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ya(ve, e, a, t | Ft);
      return u.elementType = xa, u.lanes = i, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function YO(e, t, i, a) {
      var u = ya(J, e, a, t);
      return u.elementType = we, u.lanes = i, u;
    }
    function WO(e, t, i, a) {
      var u = ya(wt, e, a, t);
      return u.elementType = Le, u.lanes = i, u;
    }
    function ew(e, t, i, a) {
      var u = ya(Ie, e, a, t);
      u.elementType = wn, u.lanes = i;
      var d = {
        isHidden: !1
      };
      return u.stateNode = d, u;
    }
    function _E(e, t, i) {
      var a = ya(H, e, null, t);
      return a.lanes = i, a;
    }
    function $O() {
      var e = ya(U, null, null, $e);
      return e.elementType = "DELETED", e;
    }
    function GO(e) {
      var t = ya(Ne, null, null, $e);
      return t.stateNode = e, t;
    }
    function kE(e, t, i) {
      var a = e.children !== null ? e.children : [], u = ya(O, a, e.key, t);
      return u.lanes = i, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function tw(e, t) {
      return e === null && (e = ya(k, null, null, $e)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function KO(e, t, i, a, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = cS, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Vt, this.eventTimes = Ku(se), this.expirationTimes = Ku(nn), this.pendingLanes = se, this.suspendedLanes = se, this.pingedLanes = se, this.expiredLanes = se, this.mutableReadLanes = se, this.finishedLanes = se, this.entangledLanes = se, this.entanglements = Ku(se), this.identifierPrefix = a, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var d = this.pendingUpdatersLaneMap = [], m = 0; m < zl; m++)
          d.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Hm:
          this._debugRootType = i ? "hydrateRoot()" : "createRoot()";
          break;
        case Qs:
          this._debugRootType = i ? "hydrate()" : "render()";
          break;
      }
    }
    function nw(e, t, i, a, u, d, m, S, C, D) {
      var M = new KO(e, t, i, S, C), F = HO(t, d);
      M.current = F, F.stateNode = M;
      {
        var V = {
          element: a,
          isDehydrated: i,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        F.memoizedState = V;
      }
      return HS(F), M;
    }
    var ME = "18.3.1";
    function QO(e, t, i) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return qr(a), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: ur,
        key: a == null ? null : "" + a,
        children: e,
        containerInfo: t,
        implementation: i
      };
    }
    var AE, OE;
    AE = !1, OE = {};
    function rw(e) {
      if (!e)
        return ma;
      var t = As(e), i = Ak(t);
      if (t.tag === b) {
        var a = t.type;
        if (il(a))
          return MT(t, a, i);
      }
      return i;
    }
    function XO(e, t) {
      {
        var i = As(e);
        if (i === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var a = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + a);
        }
        var u = ni(i);
        if (u === null)
          return null;
        if (u.mode & Jt) {
          var d = at(i) || "Component";
          if (!OE[d]) {
            OE[d] = !0;
            var m = fr;
            try {
              Xt(u), i.mode & Jt ? v("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, d) : v("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, d);
            } finally {
              m ? Xt(m) : fn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function iw(e, t, i, a, u, d, m, S) {
      var C = !1, D = null;
      return nw(e, t, C, D, i, a, u, d, m);
    }
    function aw(e, t, i, a, u, d, m, S, C, D) {
      var M = !0, F = nw(i, a, M, e, u, d, m, S, C);
      F.context = rw(null);
      var V = F.current, $ = ki(), Q = ou(V), ee = rs($, Q);
      return ee.callback = t ?? null, Zs(V, ee, Q), rO(F, Q, $), F;
    }
    function Ph(e, t, i, a) {
      ip(t, e);
      var u = t.current, d = ki(), m = ou(u);
      Sn(m);
      var S = rw(i);
      t.context === null ? t.context = S : t.pendingContext = S, ba && fr !== null && !AE && (AE = !0, v(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, at(fr) || "Unknown"));
      var C = rs(d, m);
      C.payload = {
        element: e
      }, a = a === void 0 ? null : a, a !== null && (typeof a != "function" && v("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", a), C.callback = a);
      var D = Zs(u, C, m);
      return D !== null && (xr(D, u, m, d), ry(D, u, m)), m;
    }
    function $y(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case U:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function qO(e) {
      switch (e.tag) {
        case _: {
          var t = e.stateNode;
          if (Af(t)) {
            var i = Hv(t);
            lO(t, i);
          }
          break;
        }
        case J: {
          ls(function() {
            var u = Gi(e, et);
            if (u !== null) {
              var d = ki();
              xr(u, e, et, d);
            }
          });
          var a = et;
          LE(e, a);
          break;
        }
      }
    }
    function ow(e, t) {
      var i = e.memoizedState;
      i !== null && i.dehydrated !== null && (i.retryLane = Gv(i.retryLane, t));
    }
    function LE(e, t) {
      ow(e, t);
      var i = e.alternate;
      i && ow(i, t);
    }
    function ZO(e) {
      if (e.tag === J) {
        var t = Hu, i = Gi(e, t);
        if (i !== null) {
          var a = ki();
          xr(i, e, t, a);
        }
        LE(e, t);
      }
    }
    function JO(e) {
      if (e.tag === J) {
        var t = ou(e), i = Gi(e, t);
        if (i !== null) {
          var a = ki();
          xr(i, e, t, a);
        }
        LE(e, t);
      }
    }
    function lw(e) {
      var t = pn(e);
      return t === null ? null : t.stateNode;
    }
    var sw = function(e) {
      return null;
    };
    function eL(e) {
      return sw(e);
    }
    var uw = function(e) {
      return !1;
    };
    function tL(e) {
      return uw(e);
    }
    var cw = null, fw = null, dw = null, pw = null, hw = null, vw = null, mw = null, yw = null, gw = null;
    {
      var Sw = function(e, t, i) {
        var a = t[i], u = yt(e) ? e.slice() : pt({}, e);
        return i + 1 === t.length ? (yt(u) ? u.splice(a, 1) : delete u[a], u) : (u[a] = Sw(e[a], t, i + 1), u);
      }, Ew = function(e, t) {
        return Sw(e, t, 0);
      }, Cw = function(e, t, i, a) {
        var u = t[a], d = yt(e) ? e.slice() : pt({}, e);
        if (a + 1 === t.length) {
          var m = i[a];
          d[m] = d[u], yt(d) ? d.splice(u, 1) : delete d[u];
        } else
          d[u] = Cw(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            i,
            a + 1
          );
        return d;
      }, Tw = function(e, t, i) {
        if (t.length !== i.length) {
          T("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var a = 0; a < i.length - 1; a++)
            if (t[a] !== i[a]) {
              T("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return Cw(e, t, i, 0);
      }, xw = function(e, t, i, a) {
        if (i >= t.length)
          return a;
        var u = t[i], d = yt(e) ? e.slice() : pt({}, e);
        return d[u] = xw(e[u], t, i + 1, a), d;
      }, Rw = function(e, t, i) {
        return xw(e, t, 0, i);
      }, NE = function(e, t) {
        for (var i = e.memoizedState; i !== null && t > 0; )
          i = i.next, t--;
        return i;
      };
      cw = function(e, t, i, a) {
        var u = NE(e, t);
        if (u !== null) {
          var d = Rw(u.memoizedState, i, a);
          u.memoizedState = d, u.baseState = d, e.memoizedProps = pt({}, e.memoizedProps);
          var m = Gi(e, et);
          m !== null && xr(m, e, et, nn);
        }
      }, fw = function(e, t, i) {
        var a = NE(e, t);
        if (a !== null) {
          var u = Ew(a.memoizedState, i);
          a.memoizedState = u, a.baseState = u, e.memoizedProps = pt({}, e.memoizedProps);
          var d = Gi(e, et);
          d !== null && xr(d, e, et, nn);
        }
      }, dw = function(e, t, i, a) {
        var u = NE(e, t);
        if (u !== null) {
          var d = Tw(u.memoizedState, i, a);
          u.memoizedState = d, u.baseState = d, e.memoizedProps = pt({}, e.memoizedProps);
          var m = Gi(e, et);
          m !== null && xr(m, e, et, nn);
        }
      }, pw = function(e, t, i) {
        e.pendingProps = Rw(e.memoizedProps, t, i), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Gi(e, et);
        a !== null && xr(a, e, et, nn);
      }, hw = function(e, t) {
        e.pendingProps = Ew(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Gi(e, et);
        i !== null && xr(i, e, et, nn);
      }, vw = function(e, t, i) {
        e.pendingProps = Tw(e.memoizedProps, t, i), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Gi(e, et);
        a !== null && xr(a, e, et, nn);
      }, mw = function(e) {
        var t = Gi(e, et);
        t !== null && xr(t, e, et, nn);
      }, yw = function(e) {
        sw = e;
      }, gw = function(e) {
        uw = e;
      };
    }
    function nL(e) {
      var t = ni(e);
      return t === null ? null : t.stateNode;
    }
    function rL(e) {
      return null;
    }
    function iL() {
      return fr;
    }
    function aL(e) {
      var t = e.findFiberByHostInstance, i = c.ReactCurrentDispatcher;
      return Ns({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: cw,
        overrideHookStateDeletePath: fw,
        overrideHookStateRenamePath: dw,
        overrideProps: pw,
        overridePropsDeletePath: hw,
        overridePropsRenamePath: vw,
        setErrorHandler: yw,
        setSuspenseHandler: gw,
        scheduleUpdate: mw,
        currentDispatcherRef: i,
        findHostInstanceByFiber: nL,
        findFiberByHostInstance: t || rL,
        // React Refresh
        findHostInstancesForRefresh: PO,
        scheduleRefresh: LO,
        scheduleRoot: NO,
        setRefreshHandler: OO,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: iL,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: ME
      });
    }
    var ww = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function PE(e) {
      this._internalRoot = e;
    }
    Gy.prototype.render = PE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? v("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Ky(arguments[1]) ? v("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && v("You passed a second argument to root.render(...) but it only accepts one argument.");
        var i = t.containerInfo;
        if (i.nodeType !== Un) {
          var a = lw(t.current);
          a && a.parentNode !== i && v("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Ph(e, t, null, null);
    }, Gy.prototype.unmount = PE.prototype.unmount = function() {
      typeof arguments[0] == "function" && v("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        VR() && v("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), ls(function() {
          Ph(null, e, null, null);
        }), wT(t);
      }
    };
    function oL(e, t) {
      if (!Ky(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      bw(e);
      var i = !1, a = !1, u = "", d = ww;
      t != null && (t.hydrate ? T("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Lr && v(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (i = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var m = iw(e, Hm, null, i, a, u, d);
      Pm(m.current, e);
      var S = e.nodeType === Un ? e.parentNode : e;
      return Bp(S), new PE(m);
    }
    function Gy(e) {
      this._internalRoot = e;
    }
    function lL(e) {
      e && rm(e);
    }
    Gy.prototype.unstable_scheduleHydration = lL;
    function sL(e, t, i) {
      if (!Ky(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      bw(e), t === void 0 && v("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var a = i ?? null, u = i != null && i.hydratedSources || null, d = !1, m = !1, S = "", C = ww;
      i != null && (i.unstable_strictMode === !0 && (d = !0), i.identifierPrefix !== void 0 && (S = i.identifierPrefix), i.onRecoverableError !== void 0 && (C = i.onRecoverableError));
      var D = aw(t, null, e, Hm, a, d, m, S, C);
      if (Pm(D.current, e), Bp(e), u)
        for (var M = 0; M < u.length; M++) {
          var F = u[M];
          dM(D, F);
        }
      return new Gy(D);
    }
    function Ky(e) {
      return !!(e && (e.nodeType === Jr || e.nodeType === ro || e.nodeType === Id));
    }
    function Uh(e) {
      return !!(e && (e.nodeType === Jr || e.nodeType === ro || e.nodeType === Id || e.nodeType === Un && e.nodeValue === " react-mount-point-unstable "));
    }
    function bw(e) {
      e.nodeType === Jr && e.tagName && e.tagName.toUpperCase() === "BODY" && v("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Zp(e) && (e._reactRootContainer ? v("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : v("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var uL = c.ReactCurrentOwner, Dw;
    Dw = function(e) {
      if (e._reactRootContainer && e.nodeType !== Un) {
        var t = lw(e._reactRootContainer.current);
        t && t.parentNode !== e && v("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var i = !!e._reactRootContainer, a = UE(e), u = !!(a && Gs(a));
      u && !i && v("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Jr && e.tagName && e.tagName.toUpperCase() === "BODY" && v("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function UE(e) {
      return e ? e.nodeType === ro ? e.documentElement : e.firstChild : null;
    }
    function _w() {
    }
    function cL(e, t, i, a, u) {
      if (u) {
        if (typeof a == "function") {
          var d = a;
          a = function() {
            var V = $y(m);
            d.call(V);
          };
        }
        var m = aw(
          t,
          a,
          e,
          Qs,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          _w
        );
        e._reactRootContainer = m, Pm(m.current, e);
        var S = e.nodeType === Un ? e.parentNode : e;
        return Bp(S), ls(), m;
      } else {
        for (var C; C = e.lastChild; )
          e.removeChild(C);
        if (typeof a == "function") {
          var D = a;
          a = function() {
            var V = $y(M);
            D.call(V);
          };
        }
        var M = iw(
          e,
          Qs,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          _w
        );
        e._reactRootContainer = M, Pm(M.current, e);
        var F = e.nodeType === Un ? e.parentNode : e;
        return Bp(F), ls(function() {
          Ph(t, M, i, a);
        }), M;
      }
    }
    function fL(e, t) {
      e !== null && typeof e != "function" && v("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Qy(e, t, i, a, u) {
      Dw(i), fL(u === void 0 ? null : u, "render");
      var d = i._reactRootContainer, m;
      if (!d)
        m = cL(i, t, e, u, a);
      else {
        if (m = d, typeof u == "function") {
          var S = u;
          u = function() {
            var C = $y(m);
            S.call(C);
          };
        }
        Ph(t, m, e, u);
      }
      return $y(m);
    }
    var kw = !1;
    function dL(e) {
      {
        kw || (kw = !0, v("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = uL.current;
        if (t !== null && t.stateNode !== null) {
          var i = t.stateNode._warnedAboutRefsInRender;
          i || v("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Nt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Jr ? e : XO(e, "findDOMNode");
    }
    function pL(e, t, i) {
      if (v("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Uh(t))
        throw new Error("Target container is not a DOM element.");
      {
        var a = Zp(t) && t._reactRootContainer === void 0;
        a && v("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Qy(null, e, t, !0, i);
    }
    function hL(e, t, i) {
      if (v("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Uh(t))
        throw new Error("Target container is not a DOM element.");
      {
        var a = Zp(t) && t._reactRootContainer === void 0;
        a && v("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Qy(null, e, t, !1, i);
    }
    function vL(e, t, i, a) {
      if (v("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Uh(i))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Lg(e))
        throw new Error("parentComponent must be a valid React Component");
      return Qy(e, t, i, !1, a);
    }
    var Mw = !1;
    function mL(e) {
      if (Mw || (Mw = !0, v("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Uh(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Zp(e) && e._reactRootContainer === void 0;
        t && v("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var i = UE(e), a = i && !Gs(i);
          a && v("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return ls(function() {
          Qy(null, null, e, !1, function() {
            e._reactRootContainer = null, wT(e);
          });
        }), !0;
      } else {
        {
          var u = UE(e), d = !!(u && Gs(u)), m = e.nodeType === Jr && Uh(e.parentNode) && !!e.parentNode._reactRootContainer;
          d && v("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", m ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    kr(qO), zs(ZO), Jv(JO), Ju(Yi), Rp(Xv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && v("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Gc(g_), Og(pE, sO, ls);
    function yL(e, t) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ky(t))
        throw new Error("Target container is not a DOM element.");
      return QO(e, t, null, i);
    }
    function gL(e, t, i, a) {
      return vL(e, t, i, a);
    }
    var VE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Gs, Xf, Um, Ds, Kc, pE]
    };
    function SL(e, t) {
      return VE.usingClientEntryPoint || v('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), oL(e, t);
    }
    function EL(e, t, i) {
      return VE.usingClientEntryPoint || v('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), sL(e, t, i);
    }
    function CL(e) {
      return VR() && v("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), ls(e);
    }
    var TL = aL({
      findFiberByHostInstance: pc,
      bundleType: 1,
      version: ME,
      rendererPackageName: "react-dom"
    });
    if (!TL && Nn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var Aw = window.location.protocol;
      /^(https?|file):$/.test(Aw) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (Aw === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Zi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = VE, Zi.createPortal = yL, Zi.createRoot = SL, Zi.findDOMNode = dL, Zi.flushSync = CL, Zi.hydrate = pL, Zi.hydrateRoot = EL, Zi.render = hL, Zi.unmountComponentAtNode = mL, Zi.unstable_batchedUpdates = pE, Zi.unstable_renderSubtreeIntoContainer = gL, Zi.version = ME, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Zi;
}
function s1() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s1);
    } catch (o) {
      console.error(o);
    }
  }
}
process.env.NODE_ENV === "production" ? (s1(), tC.exports = AL()) : tC.exports = OL();
var LL = tC.exports, nC, qy = LL;
if (process.env.NODE_ENV === "production")
  nC = qy.createRoot, qy.hydrateRoot;
else {
  var Bw = qy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  nC = function(o, l) {
    Bw.usingClientEntryPoint = !0;
    try {
      return qy.createRoot(o, l);
    } finally {
      Bw.usingClientEntryPoint = !1;
    }
  };
}
const u1 = Ge.createContext({});
function NL(o) {
  const l = Ge.useRef(null);
  return l.current === null && (l.current = o()), l.current;
}
const gC = Ge.createContext(null), c1 = Ge.createContext({
  transformPagePoint: (o) => o,
  isStatic: !1,
  reducedMotion: "never"
});
function PL(o = !0) {
  const l = Ge.useContext(gC);
  if (l === null)
    return [!0, null];
  const { isPresent: c, onExitComplete: p, register: y } = l, T = Ge.useId();
  Ge.useEffect(() => {
    o && y(T);
  }, [o]);
  const v = Ge.useCallback(() => o && p && p(T), [T, p, o]);
  return !c && p ? [!1, v] : [!0];
}
const SC = typeof window < "u", UL = SC ? Ge.useLayoutEffect : Ge.useEffect, Ji = /* @__NO_SIDE_EFFECTS__ */ (o) => o;
let kd = Ji, cu = Ji;
process.env.NODE_ENV !== "production" && (kd = (o, l) => {
  !o && typeof console < "u" && console.warn(l);
}, cu = (o, l) => {
  if (!o)
    throw new Error(l);
});
// @__NO_SIDE_EFFECTS__
function EC(o) {
  let l;
  return () => (l === void 0 && (l = o()), l);
}
const bd = /* @__NO_SIDE_EFFECTS__ */ (o, l, c) => {
  const p = l - o;
  return p === 0 ? 1 : (c - o) / p;
}, pl = /* @__NO_SIDE_EFFECTS__ */ (o) => o * 1e3, cs = /* @__NO_SIDE_EFFECTS__ */ (o) => o / 1e3, VL = {
  useManualTiming: !1
};
function zL(o) {
  let l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), p = !1, y = !1;
  const T = /* @__PURE__ */ new WeakSet();
  let v = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function E(b) {
    T.has(b) && (R.schedule(b), o()), b(v);
  }
  const R = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (b, k = !1, _ = !1) => {
      const U = _ && p ? l : c;
      return k && T.add(b), U.has(b) || U.add(b), b;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (b) => {
      c.delete(b), T.delete(b);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (b) => {
      if (v = b, p) {
        y = !0;
        return;
      }
      p = !0, [l, c] = [c, l], l.forEach(E), l.clear(), p = !1, y && (y = !1, R.process(b));
    }
  };
  return R;
}
const Zy = [
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
], FL = 40;
function f1(o, l) {
  let c = !1, p = !0;
  const y = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, T = () => c = !0, v = Zy.reduce((ne, ae) => (ne[ae] = zL(T), ne), {}), { read: E, resolveKeyframes: R, update: b, preRender: k, render: _, postRender: O } = v, U = () => {
    const ne = performance.now();
    c = !1, y.delta = p ? 1e3 / 60 : Math.max(Math.min(ne - y.timestamp, FL), 1), y.timestamp = ne, y.isProcessing = !0, E.process(y), R.process(y), b.process(y), k.process(y), _.process(y), O.process(y), y.isProcessing = !1, c && l && (p = !1, o(U));
  }, H = () => {
    c = !0, p = !0, y.isProcessing || o(U);
  };
  return { schedule: Zy.reduce((ne, ae) => {
    const oe = v[ae];
    return ne[ae] = (ve, J = !1, Ce = !1) => (c || H(), oe.schedule(ve, J, Ce)), ne;
  }, {}), cancel: (ne) => {
    for (let ae = 0; ae < Zy.length; ae++)
      v[Zy[ae]].cancel(ne);
  }, state: y, steps: v };
}
const { schedule: Cn, cancel: fu, state: Xr, steps: jE } = f1(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ji, !0), d1 = Ge.createContext({ strict: !1 }), Hw = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, Dd = {};
for (const o in Hw)
  Dd[o] = {
    isEnabled: (l) => Hw[o].some((c) => !!l[c])
  };
function jL(o) {
  for (const l in o)
    Dd[l] = {
      ...Dd[l],
      ...o[l]
    };
}
const BL = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function lg(o) {
  return o.startsWith("while") || o.startsWith("drag") && o !== "draggable" || o.startsWith("layout") || o.startsWith("onTap") || o.startsWith("onPan") || o.startsWith("onLayout") || BL.has(o);
}
let p1 = (o) => !lg(o);
function HL(o) {
  o && (p1 = (l) => l.startsWith("on") ? !lg(l) : o(l));
}
try {
  HL(require("@emotion/is-prop-valid").default);
} catch {
}
function IL(o, l, c) {
  const p = {};
  for (const y in o)
    y === "values" && typeof o.values == "object" || (p1(y) || c === !0 && lg(y) || !l && !lg(y) || // If trying to use native HTML drag events, forward drag listeners
    o.draggable && y.startsWith("onDrag")) && (p[y] = o[y]);
  return p;
}
const Iw = /* @__PURE__ */ new Set();
function ev(o, l, c) {
  o || Iw.has(l) || (console.warn(l), Iw.add(l));
}
function YL(o) {
  if (typeof Proxy > "u")
    return o;
  const l = /* @__PURE__ */ new Map(), c = (...p) => (process.env.NODE_ENV !== "production" && ev(!1, "motion() is deprecated. Use motion.create() instead."), o(...p));
  return new Proxy(c, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (p, y) => y === "create" ? o : (l.has(y) || l.set(y, o(y)), l.get(y))
  });
}
const vg = Ge.createContext({});
function Qh(o) {
  return typeof o == "string" || Array.isArray(o);
}
function mg(o) {
  return o !== null && typeof o == "object" && typeof o.start == "function";
}
const CC = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], TC = ["initial", ...CC];
function yg(o) {
  return mg(o.animate) || TC.some((l) => Qh(o[l]));
}
function h1(o) {
  return !!(yg(o) || o.variants);
}
function WL(o, l) {
  if (yg(o)) {
    const { initial: c, animate: p } = o;
    return {
      initial: c === !1 || Qh(c) ? c : void 0,
      animate: Qh(p) ? p : void 0
    };
  }
  return o.inherit !== !1 ? l : {};
}
function $L(o) {
  const { initial: l, animate: c } = WL(o, Ge.useContext(vg));
  return Ge.useMemo(() => ({ initial: l, animate: c }), [Yw(l), Yw(c)]);
}
function Yw(o) {
  return Array.isArray(o) ? o.join(" ") : o;
}
const GL = Symbol.for("motionComponentSymbol");
function Cd(o) {
  return o && typeof o == "object" && Object.prototype.hasOwnProperty.call(o, "current");
}
function KL(o, l, c) {
  return Ge.useCallback(
    (p) => {
      p && o.onMount && o.onMount(p), l && (p ? l.mount(p) : l.unmount()), c && (typeof c == "function" ? c(p) : Cd(c) && (c.current = p));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [l]
  );
}
const xC = (o) => o.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), QL = "framerAppearId", v1 = "data-" + xC(QL), { schedule: RC } = f1(queueMicrotask, !1), m1 = Ge.createContext({});
function XL(o, l, c, p, y) {
  var T, v;
  const { visualElement: E } = Ge.useContext(vg), R = Ge.useContext(d1), b = Ge.useContext(gC), k = Ge.useContext(c1).reducedMotion, _ = Ge.useRef(null);
  p = p || R.renderer, !_.current && p && (_.current = p(o, {
    visualState: l,
    parent: E,
    props: c,
    presenceContext: b,
    blockInitialAnimation: b ? b.initial === !1 : !1,
    reducedMotionConfig: k
  }));
  const O = _.current, U = Ge.useContext(m1);
  O && !O.projection && y && (O.type === "html" || O.type === "svg") && qL(_.current, c, y, U);
  const H = Ge.useRef(!1);
  Ge.useInsertionEffect(() => {
    O && H.current && O.update(c, b);
  });
  const X = c[v1], Z = Ge.useRef(!!X && !(!((T = window.MotionHandoffIsComplete) === null || T === void 0) && T.call(window, X)) && ((v = window.MotionHasOptimisedAnimation) === null || v === void 0 ? void 0 : v.call(window, X)));
  return UL(() => {
    O && (H.current = !0, window.MotionIsMounted = !0, O.updateFeatures(), RC.render(O.render), Z.current && O.animationState && O.animationState.animateChanges());
  }), Ge.useEffect(() => {
    O && (!Z.current && O.animationState && O.animationState.animateChanges(), Z.current && (queueMicrotask(() => {
      var ne;
      (ne = window.MotionHandoffMarkAsComplete) === null || ne === void 0 || ne.call(window, X);
    }), Z.current = !1));
  }), O;
}
function qL(o, l, c, p) {
  const { layoutId: y, layout: T, drag: v, dragConstraints: E, layoutScroll: R, layoutRoot: b } = l;
  o.projection = new c(o.latestValues, l["data-framer-portal-id"] ? void 0 : y1(o.parent)), o.projection.setOptions({
    layoutId: y,
    layout: T,
    alwaysMeasureLayout: !!v || E && Cd(E),
    visualElement: o,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof T == "string" ? T : "both",
    initialPromotionConfig: p,
    layoutScroll: R,
    layoutRoot: b
  });
}
function y1(o) {
  if (o)
    return o.options.allowProjection !== !1 ? o.projection : y1(o.parent);
}
function ZL({ preloadedFeatures: o, createVisualElement: l, useRender: c, useVisualState: p, Component: y }) {
  var T, v;
  o && jL(o);
  function E(b, k) {
    let _;
    const O = {
      ...Ge.useContext(c1),
      ...b,
      layoutId: JL(b)
    }, { isStatic: U } = O, H = $L(b), X = p(b, U);
    if (!U && SC) {
      eN(O, o);
      const Z = tN(O);
      _ = Z.MeasureLayout, H.visualElement = XL(y, X, O, l, Z.ProjectionNode);
    }
    return lr.jsxs(vg.Provider, { value: H, children: [_ && H.visualElement ? lr.jsx(_, { visualElement: H.visualElement, ...O }) : null, c(y, b, KL(X, H.visualElement, k), X, U, H.visualElement)] });
  }
  E.displayName = `motion.${typeof y == "string" ? y : `create(${(v = (T = y.displayName) !== null && T !== void 0 ? T : y.name) !== null && v !== void 0 ? v : ""})`}`;
  const R = Ge.forwardRef(E);
  return R[GL] = y, R;
}
function JL({ layoutId: o }) {
  const l = Ge.useContext(u1).id;
  return l && o !== void 0 ? l + "-" + o : o;
}
function eN(o, l) {
  const c = Ge.useContext(d1).strict;
  if (process.env.NODE_ENV !== "production" && l && c) {
    const p = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    o.ignoreStrict ? kd(!1, p) : cu(!1, p);
  }
}
function tN(o) {
  const { drag: l, layout: c } = Dd;
  if (!l && !c)
    return {};
  const p = { ...l, ...c };
  return {
    MeasureLayout: l != null && l.isEnabled(o) || c != null && c.isEnabled(o) ? p.MeasureLayout : void 0,
    ProjectionNode: p.ProjectionNode
  };
}
const nN = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function wC(o) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof o != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    o.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(nN.indexOf(o) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(o))
    )
  );
}
function Ww(o) {
  const l = [{}, {}];
  return o == null || o.values.forEach((c, p) => {
    l[0][p] = c.get(), l[1][p] = c.getVelocity();
  }), l;
}
function bC(o, l, c, p) {
  if (typeof l == "function") {
    const [y, T] = Ww(p);
    l = l(c !== void 0 ? c : o.custom, y, T);
  }
  if (typeof l == "string" && (l = o.variants && o.variants[l]), typeof l == "function") {
    const [y, T] = Ww(p);
    l = l(c !== void 0 ? c : o.custom, y, T);
  }
  return l;
}
const rC = (o) => Array.isArray(o), rN = (o) => !!(o && typeof o == "object" && o.mix && o.toValue), iN = (o) => rC(o) ? o[o.length - 1] || 0 : o, mi = (o) => !!(o && o.getVelocity);
function ig(o) {
  const l = mi(o) ? o.get() : o;
  return rN(l) ? l.toValue() : l;
}
function aN({ scrapeMotionValuesFromProps: o, createRenderState: l, onUpdate: c }, p, y, T) {
  const v = {
    latestValues: oN(p, y, T, o),
    renderState: l()
  };
  return c && (v.onMount = (E) => c({ props: p, current: E, ...v }), v.onUpdate = (E) => c(E)), v;
}
const g1 = (o) => (l, c) => {
  const p = Ge.useContext(vg), y = Ge.useContext(gC), T = () => aN(o, l, p, y);
  return c ? T() : NL(T);
};
function oN(o, l, c, p) {
  const y = {}, T = p(o, {});
  for (const O in T)
    y[O] = ig(T[O]);
  let { initial: v, animate: E } = o;
  const R = yg(o), b = h1(o);
  l && b && !R && o.inherit !== !1 && (v === void 0 && (v = l.initial), E === void 0 && (E = l.animate));
  let k = c ? c.initial === !1 : !1;
  k = k || v === !1;
  const _ = k ? E : v;
  if (_ && typeof _ != "boolean" && !mg(_)) {
    const O = Array.isArray(_) ? _ : [_];
    for (let U = 0; U < O.length; U++) {
      const H = bC(o, O[U]);
      if (H) {
        const { transitionEnd: X, transition: Z, ...ne } = H;
        for (const ae in ne) {
          let oe = ne[ae];
          if (Array.isArray(oe)) {
            const ve = k ? oe.length - 1 : 0;
            oe = oe[ve];
          }
          oe !== null && (y[ae] = oe);
        }
        for (const ae in X)
          y[ae] = X[ae];
      }
    }
  }
  return y;
}
const Md = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Nc = new Set(Md), S1 = (o) => (l) => typeof l == "string" && l.startsWith(o), E1 = /* @__PURE__ */ S1("--"), lN = /* @__PURE__ */ S1("var(--"), DC = (o) => lN(o) ? sN.test(o.split("/*")[0].trim()) : !1, sN = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, C1 = (o, l) => l && typeof o == "number" ? l.transform(o) : o, fs = (o, l, c) => c > l ? l : c < o ? o : c, Ad = {
  test: (o) => typeof o == "number",
  parse: parseFloat,
  transform: (o) => o
}, Xh = {
  ...Ad,
  transform: (o) => fs(0, 1, o)
}, Jy = {
  ...Ad,
  default: 1
}, tv = (o) => ({
  test: (l) => typeof l == "string" && l.endsWith(o) && l.split(" ").length === 1,
  parse: parseFloat,
  transform: (l) => `${l}${o}`
}), uu = /* @__PURE__ */ tv("deg"), hl = /* @__PURE__ */ tv("%"), it = /* @__PURE__ */ tv("px"), uN = /* @__PURE__ */ tv("vh"), cN = /* @__PURE__ */ tv("vw"), $w = {
  ...hl,
  parse: (o) => hl.parse(o) / 100,
  transform: (o) => hl.transform(o * 100)
}, fN = {
  // Border props
  borderWidth: it,
  borderTopWidth: it,
  borderRightWidth: it,
  borderBottomWidth: it,
  borderLeftWidth: it,
  borderRadius: it,
  radius: it,
  borderTopLeftRadius: it,
  borderTopRightRadius: it,
  borderBottomRightRadius: it,
  borderBottomLeftRadius: it,
  // Positioning props
  width: it,
  maxWidth: it,
  height: it,
  maxHeight: it,
  top: it,
  right: it,
  bottom: it,
  left: it,
  // Spacing props
  padding: it,
  paddingTop: it,
  paddingRight: it,
  paddingBottom: it,
  paddingLeft: it,
  margin: it,
  marginTop: it,
  marginRight: it,
  marginBottom: it,
  marginLeft: it,
  // Misc
  backgroundPositionX: it,
  backgroundPositionY: it
}, dN = {
  rotate: uu,
  rotateX: uu,
  rotateY: uu,
  rotateZ: uu,
  scale: Jy,
  scaleX: Jy,
  scaleY: Jy,
  scaleZ: Jy,
  skew: uu,
  skewX: uu,
  skewY: uu,
  distance: it,
  translateX: it,
  translateY: it,
  translateZ: it,
  x: it,
  y: it,
  z: it,
  perspective: it,
  transformPerspective: it,
  opacity: Xh,
  originX: $w,
  originY: $w,
  originZ: it
}, Gw = {
  ...Ad,
  transform: Math.round
}, _C = {
  ...fN,
  ...dN,
  zIndex: Gw,
  size: it,
  // SVG
  fillOpacity: Xh,
  strokeOpacity: Xh,
  numOctaves: Gw
}, pN = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, hN = Md.length;
function vN(o, l, c) {
  let p = "", y = !0;
  for (let T = 0; T < hN; T++) {
    const v = Md[T], E = o[v];
    if (E === void 0)
      continue;
    let R = !0;
    if (typeof E == "number" ? R = E === (v.startsWith("scale") ? 1 : 0) : R = parseFloat(E) === 0, !R || c) {
      const b = C1(E, _C[v]);
      if (!R) {
        y = !1;
        const k = pN[v] || v;
        p += `${k}(${b}) `;
      }
      c && (l[v] = b);
    }
  }
  return p = p.trim(), c ? p = c(l, y ? "" : p) : y && (p = "none"), p;
}
function kC(o, l, c) {
  const { style: p, vars: y, transformOrigin: T } = o;
  let v = !1, E = !1;
  for (const R in l) {
    const b = l[R];
    if (Nc.has(R)) {
      v = !0;
      continue;
    } else if (E1(R)) {
      y[R] = b;
      continue;
    } else {
      const k = C1(b, _C[R]);
      R.startsWith("origin") ? (E = !0, T[R] = k) : p[R] = k;
    }
  }
  if (l.transform || (v || c ? p.transform = vN(l, o.transform, c) : p.transform && (p.transform = "none")), E) {
    const { originX: R = "50%", originY: b = "50%", originZ: k = 0 } = T;
    p.transformOrigin = `${R} ${b} ${k}`;
  }
}
const mN = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, yN = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function gN(o, l, c = 1, p = 0, y = !0) {
  o.pathLength = 1;
  const T = y ? mN : yN;
  o[T.offset] = it.transform(-p);
  const v = it.transform(l), E = it.transform(c);
  o[T.array] = `${v} ${E}`;
}
function Kw(o, l, c) {
  return typeof o == "string" ? o : it.transform(l + c * o);
}
function SN(o, l, c) {
  const p = Kw(l, o.x, o.width), y = Kw(c, o.y, o.height);
  return `${p} ${y}`;
}
function MC(o, {
  attrX: l,
  attrY: c,
  attrScale: p,
  originX: y,
  originY: T,
  pathLength: v,
  pathSpacing: E = 1,
  pathOffset: R = 0,
  // This is object creation, which we try to avoid per-frame.
  ...b
}, k, _) {
  if (kC(o, b, _), k) {
    o.style.viewBox && (o.attrs.viewBox = o.style.viewBox);
    return;
  }
  o.attrs = o.style, o.style = {};
  const { attrs: O, style: U, dimensions: H } = o;
  O.transform && (H && (U.transform = O.transform), delete O.transform), H && (y !== void 0 || T !== void 0 || U.transform) && (U.transformOrigin = SN(H, y !== void 0 ? y : 0.5, T !== void 0 ? T : 0.5)), l !== void 0 && (O.x = l), c !== void 0 && (O.y = c), p !== void 0 && (O.scale = p), v !== void 0 && gN(O, v, E, R, !1);
}
const AC = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), T1 = () => ({
  ...AC(),
  attrs: {}
}), OC = (o) => typeof o == "string" && o.toLowerCase() === "svg";
function x1(o, { style: l, vars: c }, p, y) {
  Object.assign(o.style, l, y && y.getProjectionStyles(p));
  for (const T in c)
    o.style.setProperty(T, c[T]);
}
const R1 = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function w1(o, l, c, p) {
  x1(o, l, void 0, p);
  for (const y in l.attrs)
    o.setAttribute(R1.has(y) ? y : xC(y), l.attrs[y]);
}
const sg = {};
function EN(o) {
  Object.assign(sg, o);
}
function b1(o, { layout: l, layoutId: c }) {
  return Nc.has(o) || o.startsWith("origin") || (l || c !== void 0) && (!!sg[o] || o === "opacity");
}
function LC(o, l, c) {
  var p;
  const { style: y } = o, T = {};
  for (const v in y)
    (mi(y[v]) || l.style && mi(l.style[v]) || b1(v, o) || ((p = c == null ? void 0 : c.getValue(v)) === null || p === void 0 ? void 0 : p.liveStyle) !== void 0) && (T[v] = y[v]);
  return T;
}
function D1(o, l, c) {
  const p = LC(o, l, c);
  for (const y in o)
    if (mi(o[y]) || mi(l[y])) {
      const T = Md.indexOf(y) !== -1 ? "attr" + y.charAt(0).toUpperCase() + y.substring(1) : y;
      p[T] = o[y];
    }
  return p;
}
function CN(o, l) {
  try {
    l.dimensions = typeof o.getBBox == "function" ? o.getBBox() : o.getBoundingClientRect();
  } catch {
    l.dimensions = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }
}
const Qw = ["x", "y", "width", "height", "cx", "cy", "r"], TN = {
  useVisualState: g1({
    scrapeMotionValuesFromProps: D1,
    createRenderState: T1,
    onUpdate: ({ props: o, prevProps: l, current: c, renderState: p, latestValues: y }) => {
      if (!c)
        return;
      let T = !!o.drag;
      if (!T) {
        for (const E in y)
          if (Nc.has(E)) {
            T = !0;
            break;
          }
      }
      if (!T)
        return;
      let v = !l;
      if (l)
        for (let E = 0; E < Qw.length; E++) {
          const R = Qw[E];
          o[R] !== l[R] && (v = !0);
        }
      v && Cn.read(() => {
        CN(c, p), Cn.render(() => {
          MC(p, y, OC(c.tagName), o.transformTemplate), w1(c, p);
        });
      });
    }
  })
}, xN = {
  useVisualState: g1({
    scrapeMotionValuesFromProps: LC,
    createRenderState: AC
  })
};
function _1(o, l, c) {
  for (const p in l)
    !mi(l[p]) && !b1(p, c) && (o[p] = l[p]);
}
function RN({ transformTemplate: o }, l) {
  return Ge.useMemo(() => {
    const c = AC();
    return kC(c, l, o), Object.assign({}, c.vars, c.style);
  }, [l]);
}
function wN(o, l) {
  const c = o.style || {}, p = {};
  return _1(p, c, o), Object.assign(p, RN(o, l)), p;
}
function bN(o, l) {
  const c = {}, p = wN(o, l);
  return o.drag && o.dragListener !== !1 && (c.draggable = !1, p.userSelect = p.WebkitUserSelect = p.WebkitTouchCallout = "none", p.touchAction = o.drag === !0 ? "none" : `pan-${o.drag === "x" ? "y" : "x"}`), o.tabIndex === void 0 && (o.onTap || o.onTapStart || o.whileTap) && (c.tabIndex = 0), c.style = p, c;
}
function DN(o, l, c, p) {
  const y = Ge.useMemo(() => {
    const T = T1();
    return MC(T, l, OC(p), o.transformTemplate), {
      ...T.attrs,
      style: { ...T.style }
    };
  }, [l]);
  if (o.style) {
    const T = {};
    _1(T, o.style, o), y.style = { ...T, ...y.style };
  }
  return y;
}
function _N(o = !1) {
  return (c, p, y, { latestValues: T }, v) => {
    const R = (wC(c) ? DN : bN)(p, T, v, c), b = IL(p, typeof c == "string", o), k = c !== Ge.Fragment ? { ...b, ...R, ref: y } : {}, { children: _ } = p, O = Ge.useMemo(() => mi(_) ? _.get() : _, [_]);
    return Ge.createElement(c, {
      ...k,
      children: O
    });
  };
}
function kN(o, l) {
  return function(p, { forwardMotionProps: y } = { forwardMotionProps: !1 }) {
    const v = {
      ...wC(p) ? TN : xN,
      preloadedFeatures: o,
      useRender: _N(y),
      createVisualElement: l,
      Component: p
    };
    return ZL(v);
  };
}
function k1(o, l) {
  if (!Array.isArray(l))
    return !1;
  const c = l.length;
  if (c !== o.length)
    return !1;
  for (let p = 0; p < c; p++)
    if (l[p] !== o[p])
      return !1;
  return !0;
}
function gg(o, l, c) {
  const p = o.getProps();
  return bC(p, l, c !== void 0 ? c : p.custom, o);
}
const MN = /* @__PURE__ */ EC(() => window.ScrollTimeline !== void 0);
class AN {
  constructor(l) {
    this.stop = () => this.runAll("stop"), this.animations = l.filter(Boolean);
  }
  get finished() {
    return Promise.all(this.animations.map((l) => "finished" in l ? l.finished : l));
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(l) {
    return this.animations[0][l];
  }
  setAll(l, c) {
    for (let p = 0; p < this.animations.length; p++)
      this.animations[p][l] = c;
  }
  attachTimeline(l, c) {
    const p = this.animations.map((y) => {
      if (MN() && y.attachTimeline)
        return y.attachTimeline(l);
      if (typeof c == "function")
        return c(y);
    });
    return () => {
      p.forEach((y, T) => {
        y && y(), this.animations[T].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(l) {
    this.setAll("time", l);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(l) {
    this.setAll("speed", l);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let l = 0;
    for (let c = 0; c < this.animations.length; c++)
      l = Math.max(l, this.animations[c].duration);
    return l;
  }
  runAll(l) {
    this.animations.forEach((c) => c[l]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class ON extends AN {
  then(l, c) {
    return Promise.all(this.animations).then(l).catch(c);
  }
}
function NC(o, l) {
  return o ? o[l] || o.default || o : void 0;
}
const iC = 2e4;
function M1(o) {
  let l = 0;
  const c = 50;
  let p = o.next(l);
  for (; !p.done && l < iC; )
    l += c, p = o.next(l);
  return l >= iC ? 1 / 0 : l;
}
function PC(o) {
  return typeof o == "function";
}
function Xw(o, l) {
  o.timeline = l, o.onfinish = null;
}
const UC = (o) => Array.isArray(o) && typeof o[0] == "number", LN = {
  linearEasing: void 0
};
function NN(o, l) {
  const c = /* @__PURE__ */ EC(o);
  return () => {
    var p;
    return (p = LN[l]) !== null && p !== void 0 ? p : c();
  };
}
const ug = /* @__PURE__ */ NN(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), A1 = (o, l, c = 10) => {
  let p = "";
  const y = Math.max(Math.round(l / c), 2);
  for (let T = 0; T < y; T++)
    p += o(/* @__PURE__ */ bd(0, y - 1, T)) + ", ";
  return `linear(${p.substring(0, p.length - 2)})`;
};
function O1(o) {
  return !!(typeof o == "function" && ug() || !o || typeof o == "string" && (o in aC || ug()) || UC(o) || Array.isArray(o) && o.every(O1));
}
const Hh = ([o, l, c, p]) => `cubic-bezier(${o}, ${l}, ${c}, ${p})`, aC = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Hh([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Hh([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Hh([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Hh([0.33, 1.53, 0.69, 0.99])
};
function L1(o, l) {
  if (o)
    return typeof o == "function" && ug() ? A1(o, l) : UC(o) ? Hh(o) : Array.isArray(o) ? o.map((c) => L1(c, l) || aC.easeOut) : aC[o];
}
const bo = {
  x: !1,
  y: !1
};
function N1() {
  return bo.x || bo.y;
}
function PN(o, l, c) {
  var p;
  if (o instanceof Element)
    return [o];
  if (typeof o == "string") {
    let y = document;
    const T = (p = void 0) !== null && p !== void 0 ? p : y.querySelectorAll(o);
    return T ? Array.from(T) : [];
  }
  return Array.from(o);
}
function P1(o, l) {
  const c = PN(o), p = new AbortController(), y = {
    passive: !0,
    ...l,
    signal: p.signal
  };
  return [c, y, () => p.abort()];
}
function qw(o) {
  return (l) => {
    l.pointerType === "touch" || N1() || o(l);
  };
}
function UN(o, l, c = {}) {
  const [p, y, T] = P1(o, c), v = qw((E) => {
    const { target: R } = E, b = l(E);
    if (typeof b != "function" || !R)
      return;
    const k = qw((_) => {
      b(_), R.removeEventListener("pointerleave", k);
    });
    R.addEventListener("pointerleave", k, y);
  });
  return p.forEach((E) => {
    E.addEventListener("pointerenter", v, y);
  }), T;
}
const U1 = (o, l) => l ? o === l ? !0 : U1(o, l.parentElement) : !1, VC = (o) => o.pointerType === "mouse" ? typeof o.button != "number" || o.button <= 0 : o.isPrimary !== !1, VN = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function zN(o) {
  return VN.has(o.tagName) || o.tabIndex !== -1;
}
const Ih = /* @__PURE__ */ new WeakSet();
function Zw(o) {
  return (l) => {
    l.key === "Enter" && o(l);
  };
}
function BE(o, l) {
  o.dispatchEvent(new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 }));
}
const FN = (o, l) => {
  const c = o.currentTarget;
  if (!c)
    return;
  const p = Zw(() => {
    if (Ih.has(c))
      return;
    BE(c, "down");
    const y = Zw(() => {
      BE(c, "up");
    }), T = () => BE(c, "cancel");
    c.addEventListener("keyup", y, l), c.addEventListener("blur", T, l);
  });
  c.addEventListener("keydown", p, l), c.addEventListener("blur", () => c.removeEventListener("keydown", p), l);
};
function Jw(o) {
  return VC(o) && !N1();
}
function jN(o, l, c = {}) {
  const [p, y, T] = P1(o, c), v = (E) => {
    const R = E.currentTarget;
    if (!Jw(E) || Ih.has(R))
      return;
    Ih.add(R);
    const b = l(E), k = (U, H) => {
      window.removeEventListener("pointerup", _), window.removeEventListener("pointercancel", O), !(!Jw(U) || !Ih.has(R)) && (Ih.delete(R), typeof b == "function" && b(U, { success: H }));
    }, _ = (U) => {
      k(U, c.useGlobalTarget || U1(R, U.target));
    }, O = (U) => {
      k(U, !1);
    };
    window.addEventListener("pointerup", _, y), window.addEventListener("pointercancel", O, y);
  };
  return p.forEach((E) => {
    !zN(E) && E.getAttribute("tabindex") === null && (E.tabIndex = 0), (c.useGlobalTarget ? window : E).addEventListener("pointerdown", v, y), E.addEventListener("focus", (b) => FN(b, y), y);
  }), T;
}
function BN(o) {
  return o === "x" || o === "y" ? bo[o] ? null : (bo[o] = !0, () => {
    bo[o] = !1;
  }) : bo.x || bo.y ? null : (bo.x = bo.y = !0, () => {
    bo.x = bo.y = !1;
  });
}
const V1 = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Md
]);
let ag;
function HN() {
  ag = void 0;
}
const vl = {
  now: () => (ag === void 0 && vl.set(Xr.isProcessing || VL.useManualTiming ? Xr.timestamp : performance.now()), ag),
  set: (o) => {
    ag = o, queueMicrotask(HN);
  }
};
function zC(o, l) {
  o.indexOf(l) === -1 && o.push(l);
}
function FC(o, l) {
  const c = o.indexOf(l);
  c > -1 && o.splice(c, 1);
}
class jC {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return zC(this.subscriptions, l), () => FC(this.subscriptions, l);
  }
  notify(l, c, p) {
    const y = this.subscriptions.length;
    if (y)
      if (y === 1)
        this.subscriptions[0](l, c, p);
      else
        for (let T = 0; T < y; T++) {
          const v = this.subscriptions[T];
          v && v(l, c, p);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function z1(o, l) {
  return l ? o * (1e3 / l) : 0;
}
const eb = 30, IN = (o) => !isNaN(parseFloat(o));
class YN {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(l, c = {}) {
    this.version = "11.18.2", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (p, y = !0) => {
      const T = vl.now();
      this.updatedAt !== T && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(p), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), y && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(l), this.owner = c.owner;
  }
  setCurrent(l) {
    this.current = l, this.updatedAt = vl.now(), this.canTrackVelocity === null && l !== void 0 && (this.canTrackVelocity = IN(this.current));
  }
  setPrevFrameValue(l = this.current) {
    this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(l) {
    return process.env.NODE_ENV !== "production" && ev(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", l);
  }
  on(l, c) {
    this.events[l] || (this.events[l] = new jC());
    const p = this.events[l].add(c);
    return l === "change" ? () => {
      p(), Cn.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : p;
  }
  clearListeners() {
    for (const l in this.events)
      this.events[l].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(l, c) {
    this.passiveEffect = l, this.stopPassiveEffect = c;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(l, c = !0) {
    !c || !this.passiveEffect ? this.updateAndNotify(l, c) : this.passiveEffect(l, this.updateAndNotify);
  }
  setWithVelocity(l, c, p) {
    this.set(c), this.prev = void 0, this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt - p;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(l, c = !0) {
    this.updateAndNotify(l), this.prev = l, this.prevUpdatedAt = this.prevFrameValue = void 0, c && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const l = vl.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || l - this.updatedAt > eb)
      return 0;
    const c = Math.min(this.updatedAt - this.prevUpdatedAt, eb);
    return z1(parseFloat(this.current) - parseFloat(this.prevFrameValue), c);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(l) {
    return this.stop(), new Promise((c) => {
      this.hasAnimated = !0, this.animation = l(c), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function qh(o, l) {
  return new YN(o, l);
}
function WN(o, l, c) {
  o.hasValue(l) ? o.getValue(l).set(c) : o.addValue(l, qh(c));
}
function $N(o, l) {
  const c = gg(o, l);
  let { transitionEnd: p = {}, transition: y = {}, ...T } = c || {};
  T = { ...T, ...p };
  for (const v in T) {
    const E = iN(T[v]);
    WN(o, v, E);
  }
}
function GN(o) {
  return !!(mi(o) && o.add);
}
function oC(o, l) {
  const c = o.getValue("willChange");
  if (GN(c))
    return c.add(l);
}
function F1(o) {
  return o.props[v1];
}
const j1 = (o, l, c) => (((1 - 3 * c + 3 * l) * o + (3 * c - 6 * l)) * o + 3 * l) * o, KN = 1e-7, QN = 12;
function XN(o, l, c, p, y) {
  let T, v, E = 0;
  do
    v = l + (c - l) / 2, T = j1(v, p, y) - o, T > 0 ? c = v : l = v;
  while (Math.abs(T) > KN && ++E < QN);
  return v;
}
function nv(o, l, c, p) {
  if (o === l && c === p)
    return Ji;
  const y = (T) => XN(T, 0, 1, o, c);
  return (T) => T === 0 || T === 1 ? T : j1(y(T), l, p);
}
const B1 = (o) => (l) => l <= 0.5 ? o(2 * l) / 2 : (2 - o(2 * (1 - l))) / 2, H1 = (o) => (l) => 1 - o(1 - l), I1 = /* @__PURE__ */ nv(0.33, 1.53, 0.69, 0.99), BC = /* @__PURE__ */ H1(I1), Y1 = /* @__PURE__ */ B1(BC), W1 = (o) => (o *= 2) < 1 ? 0.5 * BC(o) : 0.5 * (2 - Math.pow(2, -10 * (o - 1))), HC = (o) => 1 - Math.sin(Math.acos(o)), $1 = H1(HC), G1 = B1(HC), K1 = (o) => /^0[^.\s]+$/u.test(o);
function qN(o) {
  return typeof o == "number" ? o === 0 : o !== null ? o === "none" || o === "0" || K1(o) : !0;
}
const Wh = (o) => Math.round(o * 1e5) / 1e5, IC = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function ZN(o) {
  return o == null;
}
const JN = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, YC = (o, l) => (c) => !!(typeof c == "string" && JN.test(c) && c.startsWith(o) || l && !ZN(c) && Object.prototype.hasOwnProperty.call(c, l)), Q1 = (o, l, c) => (p) => {
  if (typeof p != "string")
    return p;
  const [y, T, v, E] = p.match(IC);
  return {
    [o]: parseFloat(y),
    [l]: parseFloat(T),
    [c]: parseFloat(v),
    alpha: E !== void 0 ? parseFloat(E) : 1
  };
}, eP = (o) => fs(0, 255, o), HE = {
  ...Ad,
  transform: (o) => Math.round(eP(o))
}, Oc = {
  test: /* @__PURE__ */ YC("rgb", "red"),
  parse: /* @__PURE__ */ Q1("red", "green", "blue"),
  transform: ({ red: o, green: l, blue: c, alpha: p = 1 }) => "rgba(" + HE.transform(o) + ", " + HE.transform(l) + ", " + HE.transform(c) + ", " + Wh(Xh.transform(p)) + ")"
};
function tP(o) {
  let l = "", c = "", p = "", y = "";
  return o.length > 5 ? (l = o.substring(1, 3), c = o.substring(3, 5), p = o.substring(5, 7), y = o.substring(7, 9)) : (l = o.substring(1, 2), c = o.substring(2, 3), p = o.substring(3, 4), y = o.substring(4, 5), l += l, c += c, p += p, y += y), {
    red: parseInt(l, 16),
    green: parseInt(c, 16),
    blue: parseInt(p, 16),
    alpha: y ? parseInt(y, 16) / 255 : 1
  };
}
const lC = {
  test: /* @__PURE__ */ YC("#"),
  parse: tP,
  transform: Oc.transform
}, Td = {
  test: /* @__PURE__ */ YC("hsl", "hue"),
  parse: /* @__PURE__ */ Q1("hue", "saturation", "lightness"),
  transform: ({ hue: o, saturation: l, lightness: c, alpha: p = 1 }) => "hsla(" + Math.round(o) + ", " + hl.transform(Wh(l)) + ", " + hl.transform(Wh(c)) + ", " + Wh(Xh.transform(p)) + ")"
}, vi = {
  test: (o) => Oc.test(o) || lC.test(o) || Td.test(o),
  parse: (o) => Oc.test(o) ? Oc.parse(o) : Td.test(o) ? Td.parse(o) : lC.parse(o),
  transform: (o) => typeof o == "string" ? o : o.hasOwnProperty("red") ? Oc.transform(o) : Td.transform(o)
}, nP = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function rP(o) {
  var l, c;
  return isNaN(o) && typeof o == "string" && (((l = o.match(IC)) === null || l === void 0 ? void 0 : l.length) || 0) + (((c = o.match(nP)) === null || c === void 0 ? void 0 : c.length) || 0) > 0;
}
const X1 = "number", q1 = "color", iP = "var", aP = "var(", tb = "${}", oP = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Zh(o) {
  const l = o.toString(), c = [], p = {
    color: [],
    number: [],
    var: []
  }, y = [];
  let T = 0;
  const E = l.replace(oP, (R) => (vi.test(R) ? (p.color.push(T), y.push(q1), c.push(vi.parse(R))) : R.startsWith(aP) ? (p.var.push(T), y.push(iP), c.push(R)) : (p.number.push(T), y.push(X1), c.push(parseFloat(R))), ++T, tb)).split(tb);
  return { values: c, split: E, indexes: p, types: y };
}
function Z1(o) {
  return Zh(o).values;
}
function J1(o) {
  const { split: l, types: c } = Zh(o), p = l.length;
  return (y) => {
    let T = "";
    for (let v = 0; v < p; v++)
      if (T += l[v], y[v] !== void 0) {
        const E = c[v];
        E === X1 ? T += Wh(y[v]) : E === q1 ? T += vi.transform(y[v]) : T += y[v];
      }
    return T;
  };
}
const lP = (o) => typeof o == "number" ? 0 : o;
function sP(o) {
  const l = Z1(o);
  return J1(o)(l.map(lP));
}
const du = {
  test: rP,
  parse: Z1,
  createTransformer: J1,
  getAnimatableNone: sP
}, uP = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function cP(o) {
  const [l, c] = o.slice(0, -1).split("(");
  if (l === "drop-shadow")
    return o;
  const [p] = c.match(IC) || [];
  if (!p)
    return o;
  const y = c.replace(p, "");
  let T = uP.has(l) ? 1 : 0;
  return p !== c && (T *= 100), l + "(" + T + y + ")";
}
const fP = /\b([a-z-]*)\(.*?\)/gu, sC = {
  ...du,
  getAnimatableNone: (o) => {
    const l = o.match(fP);
    return l ? l.map(cP).join(" ") : o;
  }
}, dP = {
  ..._C,
  // Color props
  color: vi,
  backgroundColor: vi,
  outlineColor: vi,
  fill: vi,
  stroke: vi,
  // Border props
  borderColor: vi,
  borderTopColor: vi,
  borderRightColor: vi,
  borderBottomColor: vi,
  borderLeftColor: vi,
  filter: sC,
  WebkitFilter: sC
}, WC = (o) => dP[o];
function eD(o, l) {
  let c = WC(o);
  return c !== sC && (c = du), c.getAnimatableNone ? c.getAnimatableNone(l) : void 0;
}
const pP = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function hP(o, l, c) {
  let p = 0, y;
  for (; p < o.length && !y; ) {
    const T = o[p];
    typeof T == "string" && !pP.has(T) && Zh(T).values.length && (y = o[p]), p++;
  }
  if (y && c)
    for (const T of l)
      o[T] = eD(c, y);
}
const nb = (o) => o === Ad || o === it, rb = (o, l) => parseFloat(o.split(", ")[l]), ib = (o, l) => (c, { transform: p }) => {
  if (p === "none" || !p)
    return 0;
  const y = p.match(/^matrix3d\((.+)\)$/u);
  if (y)
    return rb(y[1], l);
  {
    const T = p.match(/^matrix\((.+)\)$/u);
    return T ? rb(T[1], o) : 0;
  }
}, vP = /* @__PURE__ */ new Set(["x", "y", "z"]), mP = Md.filter((o) => !vP.has(o));
function yP(o) {
  const l = [];
  return mP.forEach((c) => {
    const p = o.getValue(c);
    p !== void 0 && (l.push([c, p.get()]), p.set(c.startsWith("scale") ? 1 : 0));
  }), l;
}
const _d = {
  // Dimensions
  width: ({ x: o }, { paddingLeft: l = "0", paddingRight: c = "0" }) => o.max - o.min - parseFloat(l) - parseFloat(c),
  height: ({ y: o }, { paddingTop: l = "0", paddingBottom: c = "0" }) => o.max - o.min - parseFloat(l) - parseFloat(c),
  top: (o, { top: l }) => parseFloat(l),
  left: (o, { left: l }) => parseFloat(l),
  bottom: ({ y: o }, { top: l }) => parseFloat(l) + (o.max - o.min),
  right: ({ x: o }, { left: l }) => parseFloat(l) + (o.max - o.min),
  // Transform
  x: ib(4, 13),
  y: ib(5, 14)
};
_d.translateX = _d.x;
_d.translateY = _d.y;
const Lc = /* @__PURE__ */ new Set();
let uC = !1, cC = !1;
function tD() {
  if (cC) {
    const o = Array.from(Lc).filter((p) => p.needsMeasurement), l = new Set(o.map((p) => p.element)), c = /* @__PURE__ */ new Map();
    l.forEach((p) => {
      const y = yP(p);
      y.length && (c.set(p, y), p.render());
    }), o.forEach((p) => p.measureInitialState()), l.forEach((p) => {
      p.render();
      const y = c.get(p);
      y && y.forEach(([T, v]) => {
        var E;
        (E = p.getValue(T)) === null || E === void 0 || E.set(v);
      });
    }), o.forEach((p) => p.measureEndState()), o.forEach((p) => {
      p.suspendedScrollY !== void 0 && window.scrollTo(0, p.suspendedScrollY);
    });
  }
  cC = !1, uC = !1, Lc.forEach((o) => o.complete()), Lc.clear();
}
function nD() {
  Lc.forEach((o) => {
    o.readKeyframes(), o.needsMeasurement && (cC = !0);
  });
}
function gP() {
  nD(), tD();
}
class $C {
  constructor(l, c, p, y, T, v = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...l], this.onComplete = c, this.name = p, this.motionValue = y, this.element = T, this.isAsync = v;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (Lc.add(this), uC || (uC = !0, Cn.read(nD), Cn.resolveKeyframes(tD))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, name: c, element: p, motionValue: y } = this;
    for (let T = 0; T < l.length; T++)
      if (l[T] === null)
        if (T === 0) {
          const v = y == null ? void 0 : y.get(), E = l[l.length - 1];
          if (v !== void 0)
            l[0] = v;
          else if (p && c) {
            const R = p.readValue(c, E);
            R != null && (l[0] = R);
          }
          l[0] === void 0 && (l[0] = E), y && v === void 0 && y.set(l[0]);
        } else
          l[T] = l[T - 1];
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete() {
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Lc.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, Lc.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const rD = (o) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(o), SP = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function EP(o) {
  const l = SP.exec(o);
  if (!l)
    return [,];
  const [, c, p, y] = l;
  return [`--${c ?? p}`, y];
}
const CP = 4;
function iD(o, l, c = 1) {
  cu(c <= CP, `Max CSS variable fallback depth detected in property "${o}". This may indicate a circular fallback dependency.`);
  const [p, y] = EP(o);
  if (!p)
    return;
  const T = window.getComputedStyle(l).getPropertyValue(p);
  if (T) {
    const v = T.trim();
    return rD(v) ? parseFloat(v) : v;
  }
  return DC(y) ? iD(y, l, c + 1) : y;
}
const aD = (o) => (l) => l.test(o), TP = {
  test: (o) => o === "auto",
  parse: (o) => o
}, oD = [Ad, it, hl, uu, cN, uN, TP], ab = (o) => oD.find(aD(o));
class lD extends $C {
  constructor(l, c, p, y, T) {
    super(l, c, p, y, T, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, element: c, name: p } = this;
    if (!c || !c.current)
      return;
    super.readKeyframes();
    for (let R = 0; R < l.length; R++) {
      let b = l[R];
      if (typeof b == "string" && (b = b.trim(), DC(b))) {
        const k = iD(b, c.current);
        k !== void 0 && (l[R] = k), R === l.length - 1 && (this.finalKeyframe = b);
      }
    }
    if (this.resolveNoneKeyframes(), !V1.has(p) || l.length !== 2)
      return;
    const [y, T] = l, v = ab(y), E = ab(T);
    if (v !== E)
      if (nb(v) && nb(E))
        for (let R = 0; R < l.length; R++) {
          const b = l[R];
          typeof b == "string" && (l[R] = parseFloat(b));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: c } = this, p = [];
    for (let y = 0; y < l.length; y++)
      qN(l[y]) && p.push(y);
    p.length && hP(l, p, c);
  }
  measureInitialState() {
    const { element: l, unresolvedKeyframes: c, name: p } = this;
    if (!l || !l.current)
      return;
    p === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = _d[p](l.measureViewportBox(), window.getComputedStyle(l.current)), c[0] = this.measuredOrigin;
    const y = c[c.length - 1];
    y !== void 0 && l.getValue(p, y).jump(y, !1);
  }
  measureEndState() {
    var l;
    const { element: c, name: p, unresolvedKeyframes: y } = this;
    if (!c || !c.current)
      return;
    const T = c.getValue(p);
    T && T.jump(this.measuredOrigin, !1);
    const v = y.length - 1, E = y[v];
    y[v] = _d[p](c.measureViewportBox(), window.getComputedStyle(c.current)), E !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = E), !((l = this.removedTransforms) === null || l === void 0) && l.length && this.removedTransforms.forEach(([R, b]) => {
      c.getValue(R).set(b);
    }), this.resolveNoneKeyframes();
  }
}
const ob = (o, l) => l === "zIndex" ? !1 : !!(typeof o == "number" || Array.isArray(o) || typeof o == "string" && // It's animatable if we have a string
(du.test(o) || o === "0") && // And it contains numbers and/or colors
!o.startsWith("url("));
function xP(o) {
  const l = o[0];
  if (o.length === 1)
    return !0;
  for (let c = 0; c < o.length; c++)
    if (o[c] !== l)
      return !0;
}
function RP(o, l, c, p) {
  const y = o[0];
  if (y === null)
    return !1;
  if (l === "display" || l === "visibility")
    return !0;
  const T = o[o.length - 1], v = ob(y, l), E = ob(T, l);
  return kd(v === E, `You are trying to animate ${l} from "${y}" to "${T}". ${y} is not an animatable value - to enable this animation set ${y} to a value animatable to ${T} via the \`style\` property.`), !v || !E ? !1 : xP(o) || (c === "spring" || PC(c)) && p;
}
const wP = (o) => o !== null;
function Sg(o, { repeat: l, repeatType: c = "loop" }, p) {
  const y = o.filter(wP), T = l && c !== "loop" && l % 2 === 1 ? 0 : y.length - 1;
  return !T || p === void 0 ? y[T] : p;
}
const bP = 40;
class sD {
  constructor({ autoplay: l = !0, delay: c = 0, type: p = "keyframes", repeat: y = 0, repeatDelay: T = 0, repeatType: v = "loop", ...E }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = vl.now(), this.options = {
      autoplay: l,
      delay: c,
      type: p,
      repeat: y,
      repeatDelay: T,
      repeatType: v,
      ...E
    }, this.updateFinishedPromise();
  }
  /**
   * This method uses the createdAt and resolvedAt to calculate the
   * animation startTime. *Ideally*, we would use the createdAt time as t=0
   * as the following frame would then be the first frame of the animation in
   * progress, which would feel snappier.
   *
   * However, if there's a delay (main thread work) between the creation of
   * the animation and the first commited frame, we prefer to use resolvedAt
   * to avoid a sudden jump into the animation.
   */
  calcStartTime() {
    return this.resolvedAt ? this.resolvedAt - this.createdAt > bP ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && gP(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(l, c) {
    this.resolvedAt = vl.now(), this.hasAttemptedResolve = !0;
    const { name: p, type: y, velocity: T, delay: v, onComplete: E, onUpdate: R, isGenerator: b } = this.options;
    if (!b && !RP(l, p, y, T))
      if (v)
        this.options.duration = 0;
      else {
        R && R(Sg(l, this.options, c)), E && E(), this.resolveFinishedPromise();
        return;
      }
    const k = this.initPlayback(l, c);
    k !== !1 && (this._resolved = {
      keyframes: l,
      finalKeyframe: c,
      ...k
    }, this.onPostResolved());
  }
  onPostResolved() {
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(l, c) {
    return this.currentFinishedPromise.then(l, c);
  }
  flatten() {
    this.options.type = "keyframes", this.options.ease = "linear";
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((l) => {
      this.resolveFinishedPromise = l;
    });
  }
}
const Ln = (o, l, c) => o + (l - o) * c;
function IE(o, l, c) {
  return c < 0 && (c += 1), c > 1 && (c -= 1), c < 1 / 6 ? o + (l - o) * 6 * c : c < 1 / 2 ? l : c < 2 / 3 ? o + (l - o) * (2 / 3 - c) * 6 : o;
}
function DP({ hue: o, saturation: l, lightness: c, alpha: p }) {
  o /= 360, l /= 100, c /= 100;
  let y = 0, T = 0, v = 0;
  if (!l)
    y = T = v = c;
  else {
    const E = c < 0.5 ? c * (1 + l) : c + l - c * l, R = 2 * c - E;
    y = IE(R, E, o + 1 / 3), T = IE(R, E, o), v = IE(R, E, o - 1 / 3);
  }
  return {
    red: Math.round(y * 255),
    green: Math.round(T * 255),
    blue: Math.round(v * 255),
    alpha: p
  };
}
function cg(o, l) {
  return (c) => c > 0 ? l : o;
}
const YE = (o, l, c) => {
  const p = o * o, y = c * (l * l - p) + p;
  return y < 0 ? 0 : Math.sqrt(y);
}, _P = [lC, Oc, Td], kP = (o) => _P.find((l) => l.test(o));
function lb(o) {
  const l = kP(o);
  if (kd(!!l, `'${o}' is not an animatable color. Use the equivalent color code instead.`), !l)
    return !1;
  let c = l.parse(o);
  return l === Td && (c = DP(c)), c;
}
const sb = (o, l) => {
  const c = lb(o), p = lb(l);
  if (!c || !p)
    return cg(o, l);
  const y = { ...c };
  return (T) => (y.red = YE(c.red, p.red, T), y.green = YE(c.green, p.green, T), y.blue = YE(c.blue, p.blue, T), y.alpha = Ln(c.alpha, p.alpha, T), Oc.transform(y));
}, MP = (o, l) => (c) => l(o(c)), rv = (...o) => o.reduce(MP), fC = /* @__PURE__ */ new Set(["none", "hidden"]);
function AP(o, l) {
  return fC.has(o) ? (c) => c <= 0 ? o : l : (c) => c >= 1 ? l : o;
}
function OP(o, l) {
  return (c) => Ln(o, l, c);
}
function GC(o) {
  return typeof o == "number" ? OP : typeof o == "string" ? DC(o) ? cg : vi.test(o) ? sb : PP : Array.isArray(o) ? uD : typeof o == "object" ? vi.test(o) ? sb : LP : cg;
}
function uD(o, l) {
  const c = [...o], p = c.length, y = o.map((T, v) => GC(T)(T, l[v]));
  return (T) => {
    for (let v = 0; v < p; v++)
      c[v] = y[v](T);
    return c;
  };
}
function LP(o, l) {
  const c = { ...o, ...l }, p = {};
  for (const y in c)
    o[y] !== void 0 && l[y] !== void 0 && (p[y] = GC(o[y])(o[y], l[y]));
  return (y) => {
    for (const T in p)
      c[T] = p[T](y);
    return c;
  };
}
function NP(o, l) {
  var c;
  const p = [], y = { color: 0, var: 0, number: 0 };
  for (let T = 0; T < l.values.length; T++) {
    const v = l.types[T], E = o.indexes[v][y[v]], R = (c = o.values[E]) !== null && c !== void 0 ? c : 0;
    p[T] = R, y[v]++;
  }
  return p;
}
const PP = (o, l) => {
  const c = du.createTransformer(l), p = Zh(o), y = Zh(l);
  return p.indexes.var.length === y.indexes.var.length && p.indexes.color.length === y.indexes.color.length && p.indexes.number.length >= y.indexes.number.length ? fC.has(o) && !y.values.length || fC.has(l) && !p.values.length ? AP(o, l) : rv(uD(NP(p, y), y.values), c) : (kd(!0, `Complex values '${o}' and '${l}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), cg(o, l));
};
function cD(o, l, c) {
  return typeof o == "number" && typeof l == "number" && typeof c == "number" ? Ln(o, l, c) : GC(o)(o, l);
}
const UP = 5;
function fD(o, l, c) {
  const p = Math.max(l - UP, 0);
  return z1(c - o(p), l - p);
}
const On = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, WE = 1e-3;
function VP({ duration: o = On.duration, bounce: l = On.bounce, velocity: c = On.velocity, mass: p = On.mass }) {
  let y, T;
  kd(o <= /* @__PURE__ */ pl(On.maxDuration), "Spring duration must be 10 seconds or less");
  let v = 1 - l;
  v = fs(On.minDamping, On.maxDamping, v), o = fs(On.minDuration, On.maxDuration, /* @__PURE__ */ cs(o)), v < 1 ? (y = (b) => {
    const k = b * v, _ = k * o, O = k - c, U = dC(b, v), H = Math.exp(-_);
    return WE - O / U * H;
  }, T = (b) => {
    const _ = b * v * o, O = _ * c + c, U = Math.pow(v, 2) * Math.pow(b, 2) * o, H = Math.exp(-_), X = dC(Math.pow(b, 2), v);
    return (-y(b) + WE > 0 ? -1 : 1) * ((O - U) * H) / X;
  }) : (y = (b) => {
    const k = Math.exp(-b * o), _ = (b - c) * o + 1;
    return -WE + k * _;
  }, T = (b) => {
    const k = Math.exp(-b * o), _ = (c - b) * (o * o);
    return k * _;
  });
  const E = 5 / o, R = FP(y, T, E);
  if (o = /* @__PURE__ */ pl(o), isNaN(R))
    return {
      stiffness: On.stiffness,
      damping: On.damping,
      duration: o
    };
  {
    const b = Math.pow(R, 2) * p;
    return {
      stiffness: b,
      damping: v * 2 * Math.sqrt(p * b),
      duration: o
    };
  }
}
const zP = 12;
function FP(o, l, c) {
  let p = c;
  for (let y = 1; y < zP; y++)
    p = p - o(p) / l(p);
  return p;
}
function dC(o, l) {
  return o * Math.sqrt(1 - l * l);
}
const jP = ["duration", "bounce"], BP = ["stiffness", "damping", "mass"];
function ub(o, l) {
  return l.some((c) => o[c] !== void 0);
}
function HP(o) {
  let l = {
    velocity: On.velocity,
    stiffness: On.stiffness,
    damping: On.damping,
    mass: On.mass,
    isResolvedFromDuration: !1,
    ...o
  };
  if (!ub(o, BP) && ub(o, jP))
    if (o.visualDuration) {
      const c = o.visualDuration, p = 2 * Math.PI / (c * 1.2), y = p * p, T = 2 * fs(0.05, 1, 1 - (o.bounce || 0)) * Math.sqrt(y);
      l = {
        ...l,
        mass: On.mass,
        stiffness: y,
        damping: T
      };
    } else {
      const c = VP(o);
      l = {
        ...l,
        ...c,
        mass: On.mass
      }, l.isResolvedFromDuration = !0;
    }
  return l;
}
function dD(o = On.visualDuration, l = On.bounce) {
  const c = typeof o != "object" ? {
    visualDuration: o,
    keyframes: [0, 1],
    bounce: l
  } : o;
  let { restSpeed: p, restDelta: y } = c;
  const T = c.keyframes[0], v = c.keyframes[c.keyframes.length - 1], E = { done: !1, value: T }, { stiffness: R, damping: b, mass: k, duration: _, velocity: O, isResolvedFromDuration: U } = HP({
    ...c,
    velocity: -/* @__PURE__ */ cs(c.velocity || 0)
  }), H = O || 0, X = b / (2 * Math.sqrt(R * k)), Z = v - T, ne = /* @__PURE__ */ cs(Math.sqrt(R / k)), ae = Math.abs(Z) < 5;
  p || (p = ae ? On.restSpeed.granular : On.restSpeed.default), y || (y = ae ? On.restDelta.granular : On.restDelta.default);
  let oe;
  if (X < 1) {
    const J = dC(ne, X);
    oe = (Ce) => {
      const ge = Math.exp(-X * ne * Ce);
      return v - ge * ((H + X * ne * Z) / J * Math.sin(J * Ce) + Z * Math.cos(J * Ce));
    };
  } else if (X === 1)
    oe = (J) => v - Math.exp(-ne * J) * (Z + (H + ne * Z) * J);
  else {
    const J = ne * Math.sqrt(X * X - 1);
    oe = (Ce) => {
      const ge = Math.exp(-X * ne * Ce), ye = Math.min(J * Ce, 300);
      return v - ge * ((H + X * ne * Z) * Math.sinh(ye) + J * Z * Math.cosh(ye)) / J;
    };
  }
  const ve = {
    calculatedDuration: U && _ || null,
    next: (J) => {
      const Ce = oe(J);
      if (U)
        E.done = J >= _;
      else {
        let ge = 0;
        X < 1 && (ge = J === 0 ? /* @__PURE__ */ pl(H) : fD(oe, J, Ce));
        const ye = Math.abs(ge) <= p, je = Math.abs(v - Ce) <= y;
        E.done = ye && je;
      }
      return E.value = E.done ? v : Ce, E;
    },
    toString: () => {
      const J = Math.min(M1(ve), iC), Ce = A1((ge) => ve.next(J * ge).value, J, 30);
      return J + "ms " + Ce;
    }
  };
  return ve;
}
function cb({ keyframes: o, velocity: l = 0, power: c = 0.8, timeConstant: p = 325, bounceDamping: y = 10, bounceStiffness: T = 500, modifyTarget: v, min: E, max: R, restDelta: b = 0.5, restSpeed: k }) {
  const _ = o[0], O = {
    done: !1,
    value: _
  }, U = (ye) => E !== void 0 && ye < E || R !== void 0 && ye > R, H = (ye) => E === void 0 ? R : R === void 0 || Math.abs(E - ye) < Math.abs(R - ye) ? E : R;
  let X = c * l;
  const Z = _ + X, ne = v === void 0 ? Z : v(Z);
  ne !== Z && (X = ne - _);
  const ae = (ye) => -X * Math.exp(-ye / p), oe = (ye) => ne + ae(ye), ve = (ye) => {
    const je = ae(ye), Ne = oe(ye);
    O.done = Math.abs(je) <= b, O.value = O.done ? ne : Ne;
  };
  let J, Ce;
  const ge = (ye) => {
    U(O.value) && (J = ye, Ce = dD({
      keyframes: [O.value, H(O.value)],
      velocity: fD(oe, ye, O.value),
      // TODO: This should be passing * 1000
      damping: y,
      stiffness: T,
      restDelta: b,
      restSpeed: k
    }));
  };
  return ge(0), {
    calculatedDuration: null,
    next: (ye) => {
      let je = !1;
      return !Ce && J === void 0 && (je = !0, ve(ye), ge(ye)), J !== void 0 && ye >= J ? Ce.next(ye - J) : (!je && ve(ye), O);
    }
  };
}
const IP = /* @__PURE__ */ nv(0.42, 0, 1, 1), YP = /* @__PURE__ */ nv(0, 0, 0.58, 1), pD = /* @__PURE__ */ nv(0.42, 0, 0.58, 1), WP = (o) => Array.isArray(o) && typeof o[0] != "number", fb = {
  linear: Ji,
  easeIn: IP,
  easeInOut: pD,
  easeOut: YP,
  circIn: HC,
  circInOut: G1,
  circOut: $1,
  backIn: BC,
  backInOut: Y1,
  backOut: I1,
  anticipate: W1
}, db = (o) => {
  if (UC(o)) {
    cu(o.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [l, c, p, y] = o;
    return nv(l, c, p, y);
  } else if (typeof o == "string")
    return cu(fb[o] !== void 0, `Invalid easing type '${o}'`), fb[o];
  return o;
};
function $P(o, l, c) {
  const p = [], y = c || cD, T = o.length - 1;
  for (let v = 0; v < T; v++) {
    let E = y(o[v], o[v + 1]);
    if (l) {
      const R = Array.isArray(l) ? l[v] || Ji : l;
      E = rv(R, E);
    }
    p.push(E);
  }
  return p;
}
function GP(o, l, { clamp: c = !0, ease: p, mixer: y } = {}) {
  const T = o.length;
  if (cu(T === l.length, "Both input and output ranges must be the same length"), T === 1)
    return () => l[0];
  if (T === 2 && l[0] === l[1])
    return () => l[1];
  const v = o[0] === o[1];
  o[0] > o[T - 1] && (o = [...o].reverse(), l = [...l].reverse());
  const E = $P(l, p, y), R = E.length, b = (k) => {
    if (v && k < o[0])
      return l[0];
    let _ = 0;
    if (R > 1)
      for (; _ < o.length - 2 && !(k < o[_ + 1]); _++)
        ;
    const O = /* @__PURE__ */ bd(o[_], o[_ + 1], k);
    return E[_](O);
  };
  return c ? (k) => b(fs(o[0], o[T - 1], k)) : b;
}
function KP(o, l) {
  const c = o[o.length - 1];
  for (let p = 1; p <= l; p++) {
    const y = /* @__PURE__ */ bd(0, l, p);
    o.push(Ln(c, 1, y));
  }
}
function QP(o) {
  const l = [0];
  return KP(l, o.length - 1), l;
}
function XP(o, l) {
  return o.map((c) => c * l);
}
function qP(o, l) {
  return o.map(() => l || pD).splice(0, o.length - 1);
}
function fg({ duration: o = 300, keyframes: l, times: c, ease: p = "easeInOut" }) {
  const y = WP(p) ? p.map(db) : db(p), T = {
    done: !1,
    value: l[0]
  }, v = XP(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    c && c.length === l.length ? c : QP(l),
    o
  ), E = GP(v, l, {
    ease: Array.isArray(y) ? y : qP(l, y)
  });
  return {
    calculatedDuration: o,
    next: (R) => (T.value = E(R), T.done = R >= o, T)
  };
}
const ZP = (o) => {
  const l = ({ timestamp: c }) => o(c);
  return {
    start: () => Cn.update(l, !0),
    stop: () => fu(l),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Xr.isProcessing ? Xr.timestamp : vl.now()
  };
}, JP = {
  decay: cb,
  inertia: cb,
  tween: fg,
  keyframes: fg,
  spring: dD
}, e2 = (o) => o / 100;
class KC extends sD {
  constructor(l) {
    super(l), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: R } = this.options;
      R && R();
    };
    const { name: c, motionValue: p, element: y, keyframes: T } = this.options, v = (y == null ? void 0 : y.KeyframeResolver) || $C, E = (R, b) => this.onKeyframesResolved(R, b);
    this.resolver = new v(T, E, c, p, y), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(l) {
    const { type: c = "keyframes", repeat: p = 0, repeatDelay: y = 0, repeatType: T, velocity: v = 0 } = this.options, E = PC(c) ? c : JP[c] || fg;
    let R, b;
    E !== fg && typeof l[0] != "number" && (process.env.NODE_ENV !== "production" && cu(l.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${l}`), R = rv(e2, cD(l[0], l[1])), l = [0, 100]);
    const k = E({ ...this.options, keyframes: l });
    T === "mirror" && (b = E({
      ...this.options,
      keyframes: [...l].reverse(),
      velocity: -v
    })), k.calculatedDuration === null && (k.calculatedDuration = M1(k));
    const { calculatedDuration: _ } = k, O = _ + y, U = O * (p + 1) - y;
    return {
      generator: k,
      mirroredGenerator: b,
      mapPercentToKeyframes: R,
      calculatedDuration: _,
      resolvedDuration: O,
      totalDuration: U
    };
  }
  onPostResolved() {
    const { autoplay: l = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !l ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(l, c = !1) {
    const { resolved: p } = this;
    if (!p) {
      const { keyframes: ye } = this.options;
      return { done: !0, value: ye[ye.length - 1] };
    }
    const { finalKeyframe: y, generator: T, mirroredGenerator: v, mapPercentToKeyframes: E, keyframes: R, calculatedDuration: b, totalDuration: k, resolvedDuration: _ } = p;
    if (this.startTime === null)
      return T.next(0);
    const { delay: O, repeat: U, repeatType: H, repeatDelay: X, onUpdate: Z } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, l) : this.speed < 0 && (this.startTime = Math.min(l - k / this.speed, this.startTime)), c ? this.currentTime = l : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(l - this.startTime) * this.speed;
    const ne = this.currentTime - O * (this.speed >= 0 ? 1 : -1), ae = this.speed >= 0 ? ne < 0 : ne > k;
    this.currentTime = Math.max(ne, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = k);
    let oe = this.currentTime, ve = T;
    if (U) {
      const ye = Math.min(this.currentTime, k) / _;
      let je = Math.floor(ye), Ne = ye % 1;
      !Ne && ye >= 1 && (Ne = 1), Ne === 1 && je--, je = Math.min(je, U + 1), !!(je % 2) && (H === "reverse" ? (Ne = 1 - Ne, X && (Ne -= X / _)) : H === "mirror" && (ve = v)), oe = fs(0, 1, Ne) * _;
    }
    const J = ae ? { done: !1, value: R[0] } : ve.next(oe);
    E && (J.value = E(J.value));
    let { done: Ce } = J;
    !ae && b !== null && (Ce = this.speed >= 0 ? this.currentTime >= k : this.currentTime <= 0);
    const ge = this.holdTime === null && (this.state === "finished" || this.state === "running" && Ce);
    return ge && y !== void 0 && (J.value = Sg(R, this.options, y)), Z && Z(J.value), ge && this.finish(), J;
  }
  get duration() {
    const { resolved: l } = this;
    return l ? /* @__PURE__ */ cs(l.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ cs(this.currentTime);
  }
  set time(l) {
    l = /* @__PURE__ */ pl(l), this.currentTime = l, this.holdTime !== null || this.speed === 0 ? this.holdTime = l : this.driver && (this.startTime = this.driver.now() - l / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(l) {
    const c = this.playbackSpeed !== l;
    this.playbackSpeed = l, c && (this.time = /* @__PURE__ */ cs(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: l = ZP, onPlay: c, startTime: p } = this.options;
    this.driver || (this.driver = l((T) => this.tick(T))), c && c();
    const y = this.driver.now();
    this.holdTime !== null ? this.startTime = y - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = y) : this.startTime = p ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    var l;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    this.state = "paused", this.holdTime = (l = this.currentTime) !== null && l !== void 0 ? l : 0;
  }
  complete() {
    this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.teardown(), this.state = "finished";
    const { onComplete: l } = this.options;
    l && l();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(l) {
    return this.startTime = 0, this.tick(l, !0);
  }
}
const t2 = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function n2(o, l, c, { delay: p = 0, duration: y = 300, repeat: T = 0, repeatType: v = "loop", ease: E = "easeInOut", times: R } = {}) {
  const b = { [l]: c };
  R && (b.offset = R);
  const k = L1(E, y);
  return Array.isArray(k) && (b.easing = k), o.animate(b, {
    delay: p,
    duration: y,
    easing: Array.isArray(k) ? "linear" : k,
    fill: "both",
    iterations: T + 1,
    direction: v === "reverse" ? "alternate" : "normal"
  });
}
const r2 = /* @__PURE__ */ EC(() => Object.hasOwnProperty.call(Element.prototype, "animate")), dg = 10, i2 = 2e4;
function a2(o) {
  return PC(o.type) || o.type === "spring" || !O1(o.ease);
}
function o2(o, l) {
  const c = new KC({
    ...l,
    keyframes: o,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let p = { done: !1, value: o[0] };
  const y = [];
  let T = 0;
  for (; !p.done && T < i2; )
    p = c.sample(T), y.push(p.value), T += dg;
  return {
    times: void 0,
    keyframes: y,
    duration: T - dg,
    ease: "linear"
  };
}
const hD = {
  anticipate: W1,
  backInOut: Y1,
  circInOut: G1
};
function l2(o) {
  return o in hD;
}
class pb extends sD {
  constructor(l) {
    super(l);
    const { name: c, motionValue: p, element: y, keyframes: T } = this.options;
    this.resolver = new lD(T, (v, E) => this.onKeyframesResolved(v, E), c, p, y), this.resolver.scheduleResolve();
  }
  initPlayback(l, c) {
    let { duration: p = 300, times: y, ease: T, type: v, motionValue: E, name: R, startTime: b } = this.options;
    if (!E.owner || !E.owner.current)
      return !1;
    if (typeof T == "string" && ug() && l2(T) && (T = hD[T]), a2(this.options)) {
      const { onComplete: _, onUpdate: O, motionValue: U, element: H, ...X } = this.options, Z = o2(l, X);
      l = Z.keyframes, l.length === 1 && (l[1] = l[0]), p = Z.duration, y = Z.times, T = Z.ease, v = "keyframes";
    }
    const k = n2(E.owner.current, R, l, { ...this.options, duration: p, times: y, ease: T });
    return k.startTime = b ?? this.calcStartTime(), this.pendingTimeline ? (Xw(k, this.pendingTimeline), this.pendingTimeline = void 0) : k.onfinish = () => {
      const { onComplete: _ } = this.options;
      E.set(Sg(l, this.options, c)), _ && _(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: k,
      duration: p,
      times: y,
      type: v,
      ease: T,
      keyframes: l
    };
  }
  get duration() {
    const { resolved: l } = this;
    if (!l)
      return 0;
    const { duration: c } = l;
    return /* @__PURE__ */ cs(c);
  }
  get time() {
    const { resolved: l } = this;
    if (!l)
      return 0;
    const { animation: c } = l;
    return /* @__PURE__ */ cs(c.currentTime || 0);
  }
  set time(l) {
    const { resolved: c } = this;
    if (!c)
      return;
    const { animation: p } = c;
    p.currentTime = /* @__PURE__ */ pl(l);
  }
  get speed() {
    const { resolved: l } = this;
    if (!l)
      return 1;
    const { animation: c } = l;
    return c.playbackRate;
  }
  set speed(l) {
    const { resolved: c } = this;
    if (!c)
      return;
    const { animation: p } = c;
    p.playbackRate = l;
  }
  get state() {
    const { resolved: l } = this;
    if (!l)
      return "idle";
    const { animation: c } = l;
    return c.playState;
  }
  get startTime() {
    const { resolved: l } = this;
    if (!l)
      return null;
    const { animation: c } = l;
    return c.startTime;
  }
  /**
   * Replace the default DocumentTimeline with another AnimationTimeline.
   * Currently used for scroll animations.
   */
  attachTimeline(l) {
    if (!this._resolved)
      this.pendingTimeline = l;
    else {
      const { resolved: c } = this;
      if (!c)
        return Ji;
      const { animation: p } = c;
      Xw(p, l);
    }
    return Ji;
  }
  play() {
    if (this.isStopped)
      return;
    const { resolved: l } = this;
    if (!l)
      return;
    const { animation: c } = l;
    c.playState === "finished" && this.updateFinishedPromise(), c.play();
  }
  pause() {
    const { resolved: l } = this;
    if (!l)
      return;
    const { animation: c } = l;
    c.pause();
  }
  stop() {
    if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: l } = this;
    if (!l)
      return;
    const { animation: c, keyframes: p, duration: y, type: T, ease: v, times: E } = l;
    if (c.playState === "idle" || c.playState === "finished")
      return;
    if (this.time) {
      const { motionValue: b, onUpdate: k, onComplete: _, element: O, ...U } = this.options, H = new KC({
        ...U,
        keyframes: p,
        duration: y,
        type: T,
        ease: v,
        times: E,
        isGenerator: !0
      }), X = /* @__PURE__ */ pl(this.time);
      b.setWithVelocity(H.sample(X - dg).value, H.sample(X).value, dg);
    }
    const { onStop: R } = this.options;
    R && R(), this.cancel();
  }
  complete() {
    const { resolved: l } = this;
    l && l.animation.finish();
  }
  cancel() {
    const { resolved: l } = this;
    l && l.animation.cancel();
  }
  static supports(l) {
    const { motionValue: c, name: p, repeatDelay: y, repeatType: T, damping: v, type: E } = l;
    if (!c || !c.owner || !(c.owner.current instanceof HTMLElement))
      return !1;
    const { onUpdate: R, transformTemplate: b } = c.owner.getProps();
    return r2() && p && t2.has(p) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !R && !b && !y && T !== "mirror" && v !== 0 && E !== "inertia";
  }
}
const s2 = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, u2 = (o) => ({
  type: "spring",
  stiffness: 550,
  damping: o === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), c2 = {
  type: "keyframes",
  duration: 0.8
}, f2 = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, d2 = (o, { keyframes: l }) => l.length > 2 ? c2 : Nc.has(o) ? o.startsWith("scale") ? u2(l[1]) : s2 : f2;
function p2({ when: o, delay: l, delayChildren: c, staggerChildren: p, staggerDirection: y, repeat: T, repeatType: v, repeatDelay: E, from: R, elapsed: b, ...k }) {
  return !!Object.keys(k).length;
}
const QC = (o, l, c, p = {}, y, T) => (v) => {
  const E = NC(p, o) || {}, R = E.delay || p.delay || 0;
  let { elapsed: b = 0 } = p;
  b = b - /* @__PURE__ */ pl(R);
  let k = {
    keyframes: Array.isArray(c) ? c : [null, c],
    ease: "easeOut",
    velocity: l.getVelocity(),
    ...E,
    delay: -b,
    onUpdate: (O) => {
      l.set(O), E.onUpdate && E.onUpdate(O);
    },
    onComplete: () => {
      v(), E.onComplete && E.onComplete();
    },
    name: o,
    motionValue: l,
    element: T ? void 0 : y
  };
  p2(E) || (k = {
    ...k,
    ...d2(o, k)
  }), k.duration && (k.duration = /* @__PURE__ */ pl(k.duration)), k.repeatDelay && (k.repeatDelay = /* @__PURE__ */ pl(k.repeatDelay)), k.from !== void 0 && (k.keyframes[0] = k.from);
  let _ = !1;
  if ((k.type === !1 || k.duration === 0 && !k.repeatDelay) && (k.duration = 0, k.delay === 0 && (_ = !0)), _ && !T && l.get() !== void 0) {
    const O = Sg(k.keyframes, E);
    if (O !== void 0)
      return Cn.update(() => {
        k.onUpdate(O), k.onComplete();
      }), new ON([]);
  }
  return !T && pb.supports(k) ? new pb(k) : new KC(k);
};
function h2({ protectedKeys: o, needsAnimating: l }, c) {
  const p = o.hasOwnProperty(c) && l[c] !== !0;
  return l[c] = !1, p;
}
function vD(o, l, { delay: c = 0, transitionOverride: p, type: y } = {}) {
  var T;
  let { transition: v = o.getDefaultTransition(), transitionEnd: E, ...R } = l;
  p && (v = p);
  const b = [], k = y && o.animationState && o.animationState.getState()[y];
  for (const _ in R) {
    const O = o.getValue(_, (T = o.latestValues[_]) !== null && T !== void 0 ? T : null), U = R[_];
    if (U === void 0 || k && h2(k, _))
      continue;
    const H = {
      delay: c,
      ...NC(v || {}, _)
    };
    let X = !1;
    if (window.MotionHandoffAnimation) {
      const ne = F1(o);
      if (ne) {
        const ae = window.MotionHandoffAnimation(ne, _, Cn);
        ae !== null && (H.startTime = ae, X = !0);
      }
    }
    oC(o, _), O.start(QC(_, O, U, o.shouldReduceMotion && V1.has(_) ? { type: !1 } : H, o, X));
    const Z = O.animation;
    Z && b.push(Z);
  }
  return E && Promise.all(b).then(() => {
    Cn.update(() => {
      E && $N(o, E);
    });
  }), b;
}
function pC(o, l, c = {}) {
  var p;
  const y = gg(o, l, c.type === "exit" ? (p = o.presenceContext) === null || p === void 0 ? void 0 : p.custom : void 0);
  let { transition: T = o.getDefaultTransition() || {} } = y || {};
  c.transitionOverride && (T = c.transitionOverride);
  const v = y ? () => Promise.all(vD(o, y, c)) : () => Promise.resolve(), E = o.variantChildren && o.variantChildren.size ? (b = 0) => {
    const { delayChildren: k = 0, staggerChildren: _, staggerDirection: O } = T;
    return v2(o, l, k + b, _, O, c);
  } : () => Promise.resolve(), { when: R } = T;
  if (R) {
    const [b, k] = R === "beforeChildren" ? [v, E] : [E, v];
    return b().then(() => k());
  } else
    return Promise.all([v(), E(c.delay)]);
}
function v2(o, l, c = 0, p = 0, y = 1, T) {
  const v = [], E = (o.variantChildren.size - 1) * p, R = y === 1 ? (b = 0) => b * p : (b = 0) => E - b * p;
  return Array.from(o.variantChildren).sort(m2).forEach((b, k) => {
    b.notify("AnimationStart", l), v.push(pC(b, l, {
      ...T,
      delay: c + R(k)
    }).then(() => b.notify("AnimationComplete", l)));
  }), Promise.all(v);
}
function m2(o, l) {
  return o.sortNodePosition(l);
}
function y2(o, l, c = {}) {
  o.notify("AnimationStart", l);
  let p;
  if (Array.isArray(l)) {
    const y = l.map((T) => pC(o, T, c));
    p = Promise.all(y);
  } else if (typeof l == "string")
    p = pC(o, l, c);
  else {
    const y = typeof l == "function" ? gg(o, l, c.custom) : l;
    p = Promise.all(vD(o, y, c));
  }
  return p.then(() => {
    o.notify("AnimationComplete", l);
  });
}
const g2 = TC.length;
function mD(o) {
  if (!o)
    return;
  if (!o.isControllingVariants) {
    const c = o.parent ? mD(o.parent) || {} : {};
    return o.props.initial !== void 0 && (c.initial = o.props.initial), c;
  }
  const l = {};
  for (let c = 0; c < g2; c++) {
    const p = TC[c], y = o.props[p];
    (Qh(y) || y === !1) && (l[p] = y);
  }
  return l;
}
const S2 = [...CC].reverse(), E2 = CC.length;
function C2(o) {
  return (l) => Promise.all(l.map(({ animation: c, options: p }) => y2(o, c, p)));
}
function T2(o) {
  let l = C2(o), c = hb(), p = !0;
  const y = (R) => (b, k) => {
    var _;
    const O = gg(o, k, R === "exit" ? (_ = o.presenceContext) === null || _ === void 0 ? void 0 : _.custom : void 0);
    if (O) {
      const { transition: U, transitionEnd: H, ...X } = O;
      b = { ...b, ...X, ...H };
    }
    return b;
  };
  function T(R) {
    l = R(o);
  }
  function v(R) {
    const { props: b } = o, k = mD(o.parent) || {}, _ = [], O = /* @__PURE__ */ new Set();
    let U = {}, H = 1 / 0;
    for (let Z = 0; Z < E2; Z++) {
      const ne = S2[Z], ae = c[ne], oe = b[ne] !== void 0 ? b[ne] : k[ne], ve = Qh(oe), J = ne === R ? ae.isActive : null;
      J === !1 && (H = Z);
      let Ce = oe === k[ne] && oe !== b[ne] && ve;
      if (Ce && p && o.manuallyAnimateOnMount && (Ce = !1), ae.protectedKeys = { ...U }, // If it isn't active and hasn't *just* been set as inactive
      !ae.isActive && J === null || // If we didn't and don't have any defined prop for this animation type
      !oe && !ae.prevProp || // Or if the prop doesn't define an animation
      mg(oe) || typeof oe == "boolean")
        continue;
      const ge = x2(ae.prevProp, oe);
      let ye = ge || // If we're making this variant active, we want to always make it active
      ne === R && ae.isActive && !Ce && ve || // If we removed a higher-priority variant (i is in reverse order)
      Z > H && ve, je = !1;
      const Ne = Array.isArray(oe) ? oe : [oe];
      let wt = Ne.reduce(y(ne), {});
      J === !1 && (wt = {});
      const { prevResolvedValues: Tt = {} } = ae, Ie = {
        ...Tt,
        ...wt
      }, Ot = (xe) => {
        ye = !0, O.has(xe) && (je = !0, O.delete(xe)), ae.needsAnimating[xe] = !0;
        const de = o.getValue(xe);
        de && (de.liveStyle = !1);
      };
      for (const xe in Ie) {
        const de = wt[xe], ze = Tt[xe];
        if (U.hasOwnProperty(xe))
          continue;
        let Se = !1;
        rC(de) && rC(ze) ? Se = !k1(de, ze) : Se = de !== ze, Se ? de != null ? Ot(xe) : O.add(xe) : de !== void 0 && O.has(xe) ? Ot(xe) : ae.protectedKeys[xe] = !0;
      }
      ae.prevProp = oe, ae.prevResolvedValues = wt, ae.isActive && (U = { ...U, ...wt }), p && o.blockInitialAnimation && (ye = !1), ye && (!(Ce && ge) || je) && _.push(...Ne.map((xe) => ({
        animation: xe,
        options: { type: ne }
      })));
    }
    if (O.size) {
      const Z = {};
      O.forEach((ne) => {
        const ae = o.getBaseTarget(ne), oe = o.getValue(ne);
        oe && (oe.liveStyle = !0), Z[ne] = ae ?? null;
      }), _.push({ animation: Z });
    }
    let X = !!_.length;
    return p && (b.initial === !1 || b.initial === b.animate) && !o.manuallyAnimateOnMount && (X = !1), p = !1, X ? l(_) : Promise.resolve();
  }
  function E(R, b) {
    var k;
    if (c[R].isActive === b)
      return Promise.resolve();
    (k = o.variantChildren) === null || k === void 0 || k.forEach((O) => {
      var U;
      return (U = O.animationState) === null || U === void 0 ? void 0 : U.setActive(R, b);
    }), c[R].isActive = b;
    const _ = v(R);
    for (const O in c)
      c[O].protectedKeys = {};
    return _;
  }
  return {
    animateChanges: v,
    setActive: E,
    setAnimateFunction: T,
    getState: () => c,
    reset: () => {
      c = hb(), p = !0;
    }
  };
}
function x2(o, l) {
  return typeof l == "string" ? l !== o : Array.isArray(l) ? !k1(l, o) : !1;
}
function kc(o = !1) {
  return {
    isActive: o,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function hb() {
  return {
    animate: kc(!0),
    whileInView: kc(),
    whileHover: kc(),
    whileTap: kc(),
    whileDrag: kc(),
    whileFocus: kc(),
    exit: kc()
  };
}
class pu {
  constructor(l) {
    this.isMounted = !1, this.node = l;
  }
  update() {
  }
}
class R2 extends pu {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(l) {
    super(l), l.animationState || (l.animationState = T2(l));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    mg(l) && (this.unmountControls = l.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: l } = this.node.getProps(), { animate: c } = this.node.prevProps || {};
    l !== c && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var l;
    this.node.animationState.reset(), (l = this.unmountControls) === null || l === void 0 || l.call(this);
  }
}
let w2 = 0;
class b2 extends pu {
  constructor() {
    super(...arguments), this.id = w2++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: l, onExitComplete: c } = this.node.presenceContext, { isPresent: p } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || l === p)
      return;
    const y = this.node.animationState.setActive("exit", !l);
    c && !l && y.then(() => c(this.id));
  }
  mount() {
    const { register: l } = this.node.presenceContext || {};
    l && (this.unmount = l(this.id));
  }
  unmount() {
  }
}
const D2 = {
  animation: {
    Feature: R2
  },
  exit: {
    Feature: b2
  }
};
function Jh(o, l, c, p = { passive: !0 }) {
  return o.addEventListener(l, c, p), () => o.removeEventListener(l, c);
}
function iv(o) {
  return {
    point: {
      x: o.pageX,
      y: o.pageY
    }
  };
}
const _2 = (o) => (l) => VC(l) && o(l, iv(l));
function $h(o, l, c, p) {
  return Jh(o, l, _2(c), p);
}
const vb = (o, l) => Math.abs(o - l);
function k2(o, l) {
  const c = vb(o.x, l.x), p = vb(o.y, l.y);
  return Math.sqrt(c ** 2 + p ** 2);
}
class yD {
  constructor(l, c, { transformPagePoint: p, contextWindow: y, dragSnapToOrigin: T = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const _ = GE(this.lastMoveEventInfo, this.history), O = this.startEvent !== null, U = k2(_.offset, { x: 0, y: 0 }) >= 3;
      if (!O && !U)
        return;
      const { point: H } = _, { timestamp: X } = Xr;
      this.history.push({ ...H, timestamp: X });
      const { onStart: Z, onMove: ne } = this.handlers;
      O || (Z && Z(this.lastMoveEvent, _), this.startEvent = this.lastMoveEvent), ne && ne(this.lastMoveEvent, _);
    }, this.handlePointerMove = (_, O) => {
      this.lastMoveEvent = _, this.lastMoveEventInfo = $E(O, this.transformPagePoint), Cn.update(this.updatePoint, !0);
    }, this.handlePointerUp = (_, O) => {
      this.end();
      const { onEnd: U, onSessionEnd: H, resumeAnimation: X } = this.handlers;
      if (this.dragSnapToOrigin && X && X(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const Z = GE(_.type === "pointercancel" ? this.lastMoveEventInfo : $E(O, this.transformPagePoint), this.history);
      this.startEvent && U && U(_, Z), H && H(_, Z);
    }, !VC(l))
      return;
    this.dragSnapToOrigin = T, this.handlers = c, this.transformPagePoint = p, this.contextWindow = y || window;
    const v = iv(l), E = $E(v, this.transformPagePoint), { point: R } = E, { timestamp: b } = Xr;
    this.history = [{ ...R, timestamp: b }];
    const { onSessionStart: k } = c;
    k && k(l, GE(E, this.history)), this.removeListeners = rv($h(this.contextWindow, "pointermove", this.handlePointerMove), $h(this.contextWindow, "pointerup", this.handlePointerUp), $h(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    this.removeListeners && this.removeListeners(), fu(this.updatePoint);
  }
}
function $E(o, l) {
  return l ? { point: l(o.point) } : o;
}
function mb(o, l) {
  return { x: o.x - l.x, y: o.y - l.y };
}
function GE({ point: o }, l) {
  return {
    point: o,
    delta: mb(o, gD(l)),
    offset: mb(o, M2(l)),
    velocity: A2(l, 0.1)
  };
}
function M2(o) {
  return o[0];
}
function gD(o) {
  return o[o.length - 1];
}
function A2(o, l) {
  if (o.length < 2)
    return { x: 0, y: 0 };
  let c = o.length - 1, p = null;
  const y = gD(o);
  for (; c >= 0 && (p = o[c], !(y.timestamp - p.timestamp > /* @__PURE__ */ pl(l))); )
    c--;
  if (!p)
    return { x: 0, y: 0 };
  const T = /* @__PURE__ */ cs(y.timestamp - p.timestamp);
  if (T === 0)
    return { x: 0, y: 0 };
  const v = {
    x: (y.x - p.x) / T,
    y: (y.y - p.y) / T
  };
  return v.x === 1 / 0 && (v.x = 0), v.y === 1 / 0 && (v.y = 0), v;
}
const SD = 1e-4, O2 = 1 - SD, L2 = 1 + SD, ED = 0.01, N2 = 0 - ED, P2 = 0 + ED;
function Sa(o) {
  return o.max - o.min;
}
function U2(o, l, c) {
  return Math.abs(o - l) <= c;
}
function yb(o, l, c, p = 0.5) {
  o.origin = p, o.originPoint = Ln(l.min, l.max, o.origin), o.scale = Sa(c) / Sa(l), o.translate = Ln(c.min, c.max, o.origin) - o.originPoint, (o.scale >= O2 && o.scale <= L2 || isNaN(o.scale)) && (o.scale = 1), (o.translate >= N2 && o.translate <= P2 || isNaN(o.translate)) && (o.translate = 0);
}
function Gh(o, l, c, p) {
  yb(o.x, l.x, c.x, p ? p.originX : void 0), yb(o.y, l.y, c.y, p ? p.originY : void 0);
}
function gb(o, l, c) {
  o.min = c.min + l.min, o.max = o.min + Sa(l);
}
function V2(o, l, c) {
  gb(o.x, l.x, c.x), gb(o.y, l.y, c.y);
}
function Sb(o, l, c) {
  o.min = l.min - c.min, o.max = o.min + Sa(l);
}
function Kh(o, l, c) {
  Sb(o.x, l.x, c.x), Sb(o.y, l.y, c.y);
}
function z2(o, { min: l, max: c }, p) {
  return l !== void 0 && o < l ? o = p ? Ln(l, o, p.min) : Math.max(o, l) : c !== void 0 && o > c && (o = p ? Ln(c, o, p.max) : Math.min(o, c)), o;
}
function Eb(o, l, c) {
  return {
    min: l !== void 0 ? o.min + l : void 0,
    max: c !== void 0 ? o.max + c - (o.max - o.min) : void 0
  };
}
function F2(o, { top: l, left: c, bottom: p, right: y }) {
  return {
    x: Eb(o.x, c, y),
    y: Eb(o.y, l, p)
  };
}
function Cb(o, l) {
  let c = l.min - o.min, p = l.max - o.max;
  return l.max - l.min < o.max - o.min && ([c, p] = [p, c]), { min: c, max: p };
}
function j2(o, l) {
  return {
    x: Cb(o.x, l.x),
    y: Cb(o.y, l.y)
  };
}
function B2(o, l) {
  let c = 0.5;
  const p = Sa(o), y = Sa(l);
  return y > p ? c = /* @__PURE__ */ bd(l.min, l.max - p, o.min) : p > y && (c = /* @__PURE__ */ bd(o.min, o.max - y, l.min)), fs(0, 1, c);
}
function H2(o, l) {
  const c = {};
  return l.min !== void 0 && (c.min = l.min - o.min), l.max !== void 0 && (c.max = l.max - o.min), c;
}
const hC = 0.35;
function I2(o = hC) {
  return o === !1 ? o = 0 : o === !0 && (o = hC), {
    x: Tb(o, "left", "right"),
    y: Tb(o, "top", "bottom")
  };
}
function Tb(o, l, c) {
  return {
    min: xb(o, l),
    max: xb(o, c)
  };
}
function xb(o, l) {
  return typeof o == "number" ? o : o[l] || 0;
}
const Rb = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), xd = () => ({
  x: Rb(),
  y: Rb()
}), wb = () => ({ min: 0, max: 0 }), Jn = () => ({
  x: wb(),
  y: wb()
});
function Xa(o) {
  return [o("x"), o("y")];
}
function CD({ top: o, left: l, right: c, bottom: p }) {
  return {
    x: { min: l, max: c },
    y: { min: o, max: p }
  };
}
function Y2({ x: o, y: l }) {
  return { top: l.min, right: o.max, bottom: l.max, left: o.min };
}
function W2(o, l) {
  if (!l)
    return o;
  const c = l({ x: o.left, y: o.top }), p = l({ x: o.right, y: o.bottom });
  return {
    top: c.y,
    left: c.x,
    bottom: p.y,
    right: p.x
  };
}
function KE(o) {
  return o === void 0 || o === 1;
}
function vC({ scale: o, scaleX: l, scaleY: c }) {
  return !KE(o) || !KE(l) || !KE(c);
}
function Mc(o) {
  return vC(o) || TD(o) || o.z || o.rotate || o.rotateX || o.rotateY || o.skewX || o.skewY;
}
function TD(o) {
  return bb(o.x) || bb(o.y);
}
function bb(o) {
  return o && o !== "0%";
}
function pg(o, l, c) {
  const p = o - c, y = l * p;
  return c + y;
}
function Db(o, l, c, p, y) {
  return y !== void 0 && (o = pg(o, y, p)), pg(o, c, p) + l;
}
function mC(o, l = 0, c = 1, p, y) {
  o.min = Db(o.min, l, c, p, y), o.max = Db(o.max, l, c, p, y);
}
function xD(o, { x: l, y: c }) {
  mC(o.x, l.translate, l.scale, l.originPoint), mC(o.y, c.translate, c.scale, c.originPoint);
}
const _b = 0.999999999999, kb = 1.0000000000001;
function $2(o, l, c, p = !1) {
  const y = c.length;
  if (!y)
    return;
  l.x = l.y = 1;
  let T, v;
  for (let E = 0; E < y; E++) {
    T = c[E], v = T.projectionDelta;
    const { visualElement: R } = T.options;
    R && R.props.style && R.props.style.display === "contents" || (p && T.options.layoutScroll && T.scroll && T !== T.root && wd(o, {
      x: -T.scroll.offset.x,
      y: -T.scroll.offset.y
    }), v && (l.x *= v.x.scale, l.y *= v.y.scale, xD(o, v)), p && Mc(T.latestValues) && wd(o, T.latestValues));
  }
  l.x < kb && l.x > _b && (l.x = 1), l.y < kb && l.y > _b && (l.y = 1);
}
function Rd(o, l) {
  o.min = o.min + l, o.max = o.max + l;
}
function Mb(o, l, c, p, y = 0.5) {
  const T = Ln(o.min, o.max, y);
  mC(o, l, c, T, p);
}
function wd(o, l) {
  Mb(o.x, l.x, l.scaleX, l.scale, l.originX), Mb(o.y, l.y, l.scaleY, l.scale, l.originY);
}
function RD(o, l) {
  return CD(W2(o.getBoundingClientRect(), l));
}
function G2(o, l, c) {
  const p = RD(o, c), { scroll: y } = l;
  return y && (Rd(p.x, y.offset.x), Rd(p.y, y.offset.y)), p;
}
const wD = ({ current: o }) => o ? o.ownerDocument.defaultView : null, K2 = /* @__PURE__ */ new WeakMap();
class Q2 {
  constructor(l) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Jn(), this.visualElement = l;
  }
  start(l, { snapToCursor: c = !1 } = {}) {
    const { presenceContext: p } = this.visualElement;
    if (p && p.isPresent === !1)
      return;
    const y = (k) => {
      const { dragSnapToOrigin: _ } = this.getProps();
      _ ? this.pauseAnimation() : this.stopAnimation(), c && this.snapToCursor(iv(k).point);
    }, T = (k, _) => {
      const { drag: O, dragPropagation: U, onDragStart: H } = this.getProps();
      if (O && !U && (this.openDragLock && this.openDragLock(), this.openDragLock = BN(O), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Xa((Z) => {
        let ne = this.getAxisMotionValue(Z).get() || 0;
        if (hl.test(ne)) {
          const { projection: ae } = this.visualElement;
          if (ae && ae.layout) {
            const oe = ae.layout.layoutBox[Z];
            oe && (ne = Sa(oe) * (parseFloat(ne) / 100));
          }
        }
        this.originPoint[Z] = ne;
      }), H && Cn.postRender(() => H(k, _)), oC(this.visualElement, "transform");
      const { animationState: X } = this.visualElement;
      X && X.setActive("whileDrag", !0);
    }, v = (k, _) => {
      const { dragPropagation: O, dragDirectionLock: U, onDirectionLock: H, onDrag: X } = this.getProps();
      if (!O && !this.openDragLock)
        return;
      const { offset: Z } = _;
      if (U && this.currentDirection === null) {
        this.currentDirection = X2(Z), this.currentDirection !== null && H && H(this.currentDirection);
        return;
      }
      this.updateAxis("x", _.point, Z), this.updateAxis("y", _.point, Z), this.visualElement.render(), X && X(k, _);
    }, E = (k, _) => this.stop(k, _), R = () => Xa((k) => {
      var _;
      return this.getAnimationState(k) === "paused" && ((_ = this.getAxisMotionValue(k).animation) === null || _ === void 0 ? void 0 : _.play());
    }), { dragSnapToOrigin: b } = this.getProps();
    this.panSession = new yD(l, {
      onSessionStart: y,
      onStart: T,
      onMove: v,
      onSessionEnd: E,
      resumeAnimation: R
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: b,
      contextWindow: wD(this.visualElement)
    });
  }
  stop(l, c) {
    const p = this.isDragging;
    if (this.cancel(), !p)
      return;
    const { velocity: y } = c;
    this.startAnimation(y);
    const { onDragEnd: T } = this.getProps();
    T && Cn.postRender(() => T(l, c));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: l, animationState: c } = this.visualElement;
    l && (l.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: p } = this.getProps();
    !p && this.openDragLock && (this.openDragLock(), this.openDragLock = null), c && c.setActive("whileDrag", !1);
  }
  updateAxis(l, c, p) {
    const { drag: y } = this.getProps();
    if (!p || !eg(l, y, this.currentDirection))
      return;
    const T = this.getAxisMotionValue(l);
    let v = this.originPoint[l] + p[l];
    this.constraints && this.constraints[l] && (v = z2(v, this.constraints[l], this.elastic[l])), T.set(v);
  }
  resolveConstraints() {
    var l;
    const { dragConstraints: c, dragElastic: p } = this.getProps(), y = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (l = this.visualElement.projection) === null || l === void 0 ? void 0 : l.layout, T = this.constraints;
    c && Cd(c) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : c && y ? this.constraints = F2(y.layoutBox, c) : this.constraints = !1, this.elastic = I2(p), T !== this.constraints && y && this.constraints && !this.hasMutatedConstraints && Xa((v) => {
      this.constraints !== !1 && this.getAxisMotionValue(v) && (this.constraints[v] = H2(y.layoutBox[v], this.constraints[v]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: c } = this.getProps();
    if (!l || !Cd(l))
      return !1;
    const p = l.current;
    cu(p !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: y } = this.visualElement;
    if (!y || !y.layout)
      return !1;
    const T = G2(p, y.root, this.visualElement.getTransformPagePoint());
    let v = j2(y.layout.layoutBox, T);
    if (c) {
      const E = c(Y2(v));
      this.hasMutatedConstraints = !!E, E && (v = CD(E));
    }
    return v;
  }
  startAnimation(l) {
    const { drag: c, dragMomentum: p, dragElastic: y, dragTransition: T, dragSnapToOrigin: v, onDragTransitionEnd: E } = this.getProps(), R = this.constraints || {}, b = Xa((k) => {
      if (!eg(k, c, this.currentDirection))
        return;
      let _ = R && R[k] || {};
      v && (_ = { min: 0, max: 0 });
      const O = y ? 200 : 1e6, U = y ? 40 : 1e7, H = {
        type: "inertia",
        velocity: p ? l[k] : 0,
        bounceStiffness: O,
        bounceDamping: U,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...T,
        ..._
      };
      return this.startAxisValueAnimation(k, H);
    });
    return Promise.all(b).then(E);
  }
  startAxisValueAnimation(l, c) {
    const p = this.getAxisMotionValue(l);
    return oC(this.visualElement, l), p.start(QC(l, p, 0, c, this.visualElement, !1));
  }
  stopAnimation() {
    Xa((l) => this.getAxisMotionValue(l).stop());
  }
  pauseAnimation() {
    Xa((l) => {
      var c;
      return (c = this.getAxisMotionValue(l).animation) === null || c === void 0 ? void 0 : c.pause();
    });
  }
  getAnimationState(l) {
    var c;
    return (c = this.getAxisMotionValue(l).animation) === null || c === void 0 ? void 0 : c.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(l) {
    const c = `_drag${l.toUpperCase()}`, p = this.visualElement.getProps(), y = p[c];
    return y || this.visualElement.getValue(l, (p.initial ? p.initial[l] : void 0) || 0);
  }
  snapToCursor(l) {
    Xa((c) => {
      const { drag: p } = this.getProps();
      if (!eg(c, p, this.currentDirection))
        return;
      const { projection: y } = this.visualElement, T = this.getAxisMotionValue(c);
      if (y && y.layout) {
        const { min: v, max: E } = y.layout.layoutBox[c];
        T.set(l[c] - Ln(v, E, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: l, dragConstraints: c } = this.getProps(), { projection: p } = this.visualElement;
    if (!Cd(c) || !p || !this.constraints)
      return;
    this.stopAnimation();
    const y = { x: 0, y: 0 };
    Xa((v) => {
      const E = this.getAxisMotionValue(v);
      if (E && this.constraints !== !1) {
        const R = E.get();
        y[v] = B2({ min: R, max: R }, this.constraints[v]);
      }
    });
    const { transformTemplate: T } = this.visualElement.getProps();
    this.visualElement.current.style.transform = T ? T({}, "") : "none", p.root && p.root.updateScroll(), p.updateLayout(), this.resolveConstraints(), Xa((v) => {
      if (!eg(v, l, null))
        return;
      const E = this.getAxisMotionValue(v), { min: R, max: b } = this.constraints[v];
      E.set(Ln(R, b, y[v]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    K2.set(this.visualElement, this);
    const l = this.visualElement.current, c = $h(l, "pointerdown", (R) => {
      const { drag: b, dragListener: k = !0 } = this.getProps();
      b && k && this.start(R);
    }), p = () => {
      const { dragConstraints: R } = this.getProps();
      Cd(R) && R.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: y } = this.visualElement, T = y.addEventListener("measure", p);
    y && !y.layout && (y.root && y.root.updateScroll(), y.updateLayout()), Cn.read(p);
    const v = Jh(window, "resize", () => this.scalePositionWithinConstraints()), E = y.addEventListener("didUpdate", ({ delta: R, hasLayoutChanged: b }) => {
      this.isDragging && b && (Xa((k) => {
        const _ = this.getAxisMotionValue(k);
        _ && (this.originPoint[k] += R[k].translate, _.set(_.get() + R[k].translate));
      }), this.visualElement.render());
    });
    return () => {
      v(), c(), T(), E && E();
    };
  }
  getProps() {
    const l = this.visualElement.getProps(), { drag: c = !1, dragDirectionLock: p = !1, dragPropagation: y = !1, dragConstraints: T = !1, dragElastic: v = hC, dragMomentum: E = !0 } = l;
    return {
      ...l,
      drag: c,
      dragDirectionLock: p,
      dragPropagation: y,
      dragConstraints: T,
      dragElastic: v,
      dragMomentum: E
    };
  }
}
function eg(o, l, c) {
  return (l === !0 || l === o) && (c === null || c === o);
}
function X2(o, l = 10) {
  let c = null;
  return Math.abs(o.y) > l ? c = "y" : Math.abs(o.x) > l && (c = "x"), c;
}
class q2 extends pu {
  constructor(l) {
    super(l), this.removeGroupControls = Ji, this.removeListeners = Ji, this.controls = new Q2(l);
  }
  mount() {
    const { dragControls: l } = this.node.getProps();
    l && (this.removeGroupControls = l.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ji;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Ab = (o) => (l, c) => {
  o && Cn.postRender(() => o(l, c));
};
class Z2 extends pu {
  constructor() {
    super(...arguments), this.removePointerDownListener = Ji;
  }
  onPointerDown(l) {
    this.session = new yD(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: wD(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: l, onPanStart: c, onPan: p, onPanEnd: y } = this.node.getProps();
    return {
      onSessionStart: Ab(l),
      onStart: Ab(c),
      onMove: p,
      onEnd: (T, v) => {
        delete this.session, y && Cn.postRender(() => y(T, v));
      }
    };
  }
  mount() {
    this.removePointerDownListener = $h(this.node.current, "pointerdown", (l) => this.onPointerDown(l));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const og = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function Ob(o, l) {
  return l.max === l.min ? 0 : o / (l.max - l.min) * 100;
}
const jh = {
  correct: (o, l) => {
    if (!l.target)
      return o;
    if (typeof o == "string")
      if (it.test(o))
        o = parseFloat(o);
      else
        return o;
    const c = Ob(o, l.target.x), p = Ob(o, l.target.y);
    return `${c}% ${p}%`;
  }
}, J2 = {
  correct: (o, { treeScale: l, projectionDelta: c }) => {
    const p = o, y = du.parse(o);
    if (y.length > 5)
      return p;
    const T = du.createTransformer(o), v = typeof y[0] != "number" ? 1 : 0, E = c.x.scale * l.x, R = c.y.scale * l.y;
    y[0 + v] /= E, y[1 + v] /= R;
    const b = Ln(E, R, 0.5);
    return typeof y[2 + v] == "number" && (y[2 + v] /= b), typeof y[3 + v] == "number" && (y[3 + v] /= b), T(y);
  }
};
class eU extends Ge.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: l, layoutGroup: c, switchLayoutGroup: p, layoutId: y } = this.props, { projection: T } = l;
    EN(tU), T && (c.group && c.group.add(T), p && p.register && y && p.register(T), T.root.didUpdate(), T.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), T.setOptions({
      ...T.options,
      onExitComplete: () => this.safeToRemove()
    })), og.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(l) {
    const { layoutDependency: c, visualElement: p, drag: y, isPresent: T } = this.props, v = p.projection;
    return v && (v.isPresent = T, y || l.layoutDependency !== c || c === void 0 ? v.willUpdate() : this.safeToRemove(), l.isPresent !== T && (T ? v.promote() : v.relegate() || Cn.postRender(() => {
      const E = v.getStack();
      (!E || !E.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: l } = this.props.visualElement;
    l && (l.root.didUpdate(), RC.postRender(() => {
      !l.currentAnimation && l.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: l, layoutGroup: c, switchLayoutGroup: p } = this.props, { projection: y } = l;
    y && (y.scheduleCheckAfterUnmount(), c && c.group && c.group.remove(y), p && p.deregister && p.deregister(y));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function bD(o) {
  const [l, c] = PL(), p = Ge.useContext(u1);
  return lr.jsx(eU, { ...o, layoutGroup: p, switchLayoutGroup: Ge.useContext(m1), isPresent: l, safeToRemove: c });
}
const tU = {
  borderRadius: {
    ...jh,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: jh,
  borderTopRightRadius: jh,
  borderBottomLeftRadius: jh,
  borderBottomRightRadius: jh,
  boxShadow: J2
};
function nU(o, l, c) {
  const p = mi(o) ? o : qh(o);
  return p.start(QC("", p, l, c)), p.animation;
}
function rU(o) {
  return o instanceof SVGElement && o.tagName !== "svg";
}
const iU = (o, l) => o.depth - l.depth;
class aU {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(l) {
    zC(this.children, l), this.isDirty = !0;
  }
  remove(l) {
    FC(this.children, l), this.isDirty = !0;
  }
  forEach(l) {
    this.isDirty && this.children.sort(iU), this.isDirty = !1, this.children.forEach(l);
  }
}
function oU(o, l) {
  const c = vl.now(), p = ({ timestamp: y }) => {
    const T = y - c;
    T >= l && (fu(p), o(T - l));
  };
  return Cn.read(p, !0), () => fu(p);
}
const DD = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], lU = DD.length, Lb = (o) => typeof o == "string" ? parseFloat(o) : o, Nb = (o) => typeof o == "number" || it.test(o);
function sU(o, l, c, p, y, T) {
  y ? (o.opacity = Ln(
    0,
    // TODO Reinstate this if only child
    c.opacity !== void 0 ? c.opacity : 1,
    uU(p)
  ), o.opacityExit = Ln(l.opacity !== void 0 ? l.opacity : 1, 0, cU(p))) : T && (o.opacity = Ln(l.opacity !== void 0 ? l.opacity : 1, c.opacity !== void 0 ? c.opacity : 1, p));
  for (let v = 0; v < lU; v++) {
    const E = `border${DD[v]}Radius`;
    let R = Pb(l, E), b = Pb(c, E);
    if (R === void 0 && b === void 0)
      continue;
    R || (R = 0), b || (b = 0), R === 0 || b === 0 || Nb(R) === Nb(b) ? (o[E] = Math.max(Ln(Lb(R), Lb(b), p), 0), (hl.test(b) || hl.test(R)) && (o[E] += "%")) : o[E] = b;
  }
  (l.rotate || c.rotate) && (o.rotate = Ln(l.rotate || 0, c.rotate || 0, p));
}
function Pb(o, l) {
  return o[l] !== void 0 ? o[l] : o.borderRadius;
}
const uU = /* @__PURE__ */ _D(0, 0.5, $1), cU = /* @__PURE__ */ _D(0.5, 0.95, Ji);
function _D(o, l, c) {
  return (p) => p < o ? 0 : p > l ? 1 : c(/* @__PURE__ */ bd(o, l, p));
}
function Ub(o, l) {
  o.min = l.min, o.max = l.max;
}
function Qa(o, l) {
  Ub(o.x, l.x), Ub(o.y, l.y);
}
function Vb(o, l) {
  o.translate = l.translate, o.scale = l.scale, o.originPoint = l.originPoint, o.origin = l.origin;
}
function zb(o, l, c, p, y) {
  return o -= l, o = pg(o, 1 / c, p), y !== void 0 && (o = pg(o, 1 / y, p)), o;
}
function fU(o, l = 0, c = 1, p = 0.5, y, T = o, v = o) {
  if (hl.test(l) && (l = parseFloat(l), l = Ln(v.min, v.max, l / 100) - v.min), typeof l != "number")
    return;
  let E = Ln(T.min, T.max, p);
  o === T && (E -= l), o.min = zb(o.min, l, c, E, y), o.max = zb(o.max, l, c, E, y);
}
function Fb(o, l, [c, p, y], T, v) {
  fU(o, l[c], l[p], l[y], l.scale, T, v);
}
const dU = ["x", "scaleX", "originX"], pU = ["y", "scaleY", "originY"];
function jb(o, l, c, p) {
  Fb(o.x, l, dU, c ? c.x : void 0, p ? p.x : void 0), Fb(o.y, l, pU, c ? c.y : void 0, p ? p.y : void 0);
}
function Bb(o) {
  return o.translate === 0 && o.scale === 1;
}
function kD(o) {
  return Bb(o.x) && Bb(o.y);
}
function Hb(o, l) {
  return o.min === l.min && o.max === l.max;
}
function hU(o, l) {
  return Hb(o.x, l.x) && Hb(o.y, l.y);
}
function Ib(o, l) {
  return Math.round(o.min) === Math.round(l.min) && Math.round(o.max) === Math.round(l.max);
}
function MD(o, l) {
  return Ib(o.x, l.x) && Ib(o.y, l.y);
}
function Yb(o) {
  return Sa(o.x) / Sa(o.y);
}
function Wb(o, l) {
  return o.translate === l.translate && o.scale === l.scale && o.originPoint === l.originPoint;
}
class vU {
  constructor() {
    this.members = [];
  }
  add(l) {
    zC(this.members, l), l.scheduleRender();
  }
  remove(l) {
    if (FC(this.members, l), l === this.prevLead && (this.prevLead = void 0), l === this.lead) {
      const c = this.members[this.members.length - 1];
      c && this.promote(c);
    }
  }
  relegate(l) {
    const c = this.members.findIndex((y) => l === y);
    if (c === 0)
      return !1;
    let p;
    for (let y = c; y >= 0; y--) {
      const T = this.members[y];
      if (T.isPresent !== !1) {
        p = T;
        break;
      }
    }
    return p ? (this.promote(p), !0) : !1;
  }
  promote(l, c) {
    const p = this.lead;
    if (l !== p && (this.prevLead = p, this.lead = l, l.show(), p)) {
      p.instance && p.scheduleRender(), l.scheduleRender(), l.resumeFrom = p, c && (l.resumeFrom.preserveOpacity = !0), p.snapshot && (l.snapshot = p.snapshot, l.snapshot.latestValues = p.animationValues || p.latestValues), l.root && l.root.isUpdating && (l.isLayoutDirty = !0);
      const { crossfade: y } = l.options;
      y === !1 && p.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((l) => {
      const { options: c, resumingFrom: p } = l;
      c.onExitComplete && c.onExitComplete(), p && p.options.onExitComplete && p.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((l) => {
      l.instance && l.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function mU(o, l, c) {
  let p = "";
  const y = o.x.translate / l.x, T = o.y.translate / l.y, v = (c == null ? void 0 : c.z) || 0;
  if ((y || T || v) && (p = `translate3d(${y}px, ${T}px, ${v}px) `), (l.x !== 1 || l.y !== 1) && (p += `scale(${1 / l.x}, ${1 / l.y}) `), c) {
    const { transformPerspective: b, rotate: k, rotateX: _, rotateY: O, skewX: U, skewY: H } = c;
    b && (p = `perspective(${b}px) ${p}`), k && (p += `rotate(${k}deg) `), _ && (p += `rotateX(${_}deg) `), O && (p += `rotateY(${O}deg) `), U && (p += `skewX(${U}deg) `), H && (p += `skewY(${H}deg) `);
  }
  const E = o.x.scale * l.x, R = o.y.scale * l.y;
  return (E !== 1 || R !== 1) && (p += `scale(${E}, ${R})`), p || "none";
}
const Ac = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, Yh = typeof window < "u" && window.MotionDebug !== void 0, QE = ["", "X", "Y", "Z"], yU = { visibility: "hidden" }, $b = 1e3;
let gU = 0;
function XE(o, l, c, p) {
  const { latestValues: y } = l;
  y[o] && (c[o] = y[o], l.setStaticValue(o, 0), p && (p[o] = 0));
}
function AD(o) {
  if (o.hasCheckedOptimisedAppear = !0, o.root === o)
    return;
  const { visualElement: l } = o.options;
  if (!l)
    return;
  const c = F1(l);
  if (window.MotionHasOptimisedAnimation(c, "transform")) {
    const { layout: y, layoutId: T } = o.options;
    window.MotionCancelOptimisedAnimation(c, "transform", Cn, !(y || T));
  }
  const { parent: p } = o;
  p && !p.hasCheckedOptimisedAppear && AD(p);
}
function OD({ attachResizeListener: o, defaultParent: l, measureScroll: c, checkIsScrollRoot: p, resetTransform: y }) {
  return class {
    constructor(v = {}, E = l == null ? void 0 : l()) {
      this.id = gU++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, Yh && (Ac.totalNodes = Ac.resolvedTargetDeltas = Ac.recalculatedProjection = 0), this.nodes.forEach(CU), this.nodes.forEach(bU), this.nodes.forEach(DU), this.nodes.forEach(TU), Yh && window.MotionDebug.record(Ac);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = v, this.root = E ? E.root || E : this, this.path = E ? [...E.path, E] : [], this.parent = E, this.depth = E ? E.depth + 1 : 0;
      for (let R = 0; R < this.path.length; R++)
        this.path[R].shouldResetTransform = !0;
      this.root === this && (this.nodes = new aU());
    }
    addEventListener(v, E) {
      return this.eventHandlers.has(v) || this.eventHandlers.set(v, new jC()), this.eventHandlers.get(v).add(E);
    }
    notifyListeners(v, ...E) {
      const R = this.eventHandlers.get(v);
      R && R.notify(...E);
    }
    hasListeners(v) {
      return this.eventHandlers.has(v);
    }
    /**
     * Lifecycles
     */
    mount(v, E = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = rU(v), this.instance = v;
      const { layoutId: R, layout: b, visualElement: k } = this.options;
      if (k && !k.current && k.mount(v), this.root.nodes.add(this), this.parent && this.parent.children.add(this), E && (b || R) && (this.isLayoutDirty = !0), o) {
        let _;
        const O = () => this.root.updateBlockedByResize = !1;
        o(v, () => {
          this.root.updateBlockedByResize = !0, _ && _(), _ = oU(O, 250), og.hasAnimatedSinceResize && (og.hasAnimatedSinceResize = !1, this.nodes.forEach(Kb));
        });
      }
      R && this.root.registerSharedNode(R, this), this.options.animate !== !1 && k && (R || b) && this.addEventListener("didUpdate", ({ delta: _, hasLayoutChanged: O, hasRelativeTargetChanged: U, layout: H }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const X = this.options.transition || k.getDefaultTransition() || OU, { onLayoutAnimationStart: Z, onLayoutAnimationComplete: ne } = k.getProps(), ae = !this.targetLayout || !MD(this.targetLayout, H) || U, oe = !O && U;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || oe || O && (ae || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(_, oe);
          const ve = {
            ...NC(X, "layout"),
            onPlay: Z,
            onComplete: ne
          };
          (k.shouldReduceMotion || this.options.layoutRoot) && (ve.delay = 0, ve.type = !1), this.startAnimation(ve);
        } else
          O || Kb(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = H;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const v = this.getStack();
      v && v.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, fu(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(_U), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: v } = this.options;
      return v && v.getProps().transformTemplate;
    }
    willUpdate(v = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && AD(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let k = 0; k < this.path.length; k++) {
        const _ = this.path[k];
        _.shouldResetTransform = !0, _.updateScroll("snapshot"), _.options.layoutRoot && _.willUpdate(!1);
      }
      const { layoutId: E, layout: R } = this.options;
      if (E === void 0 && !R)
        return;
      const b = this.getTransformTemplate();
      this.prevTransformTemplateValue = b ? b(this.latestValues, "") : void 0, this.updateSnapshot(), v && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Gb);
        return;
      }
      this.isUpdating || this.nodes.forEach(RU), this.isUpdating = !1, this.nodes.forEach(wU), this.nodes.forEach(SU), this.nodes.forEach(EU), this.clearAllSnapshots();
      const E = vl.now();
      Xr.delta = fs(0, 1e3 / 60, E - Xr.timestamp), Xr.timestamp = E, Xr.isProcessing = !0, jE.update.process(Xr), jE.preRender.process(Xr), jE.render.process(Xr), Xr.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, RC.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(xU), this.sharedNodes.forEach(kU);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Cn.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Cn.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let R = 0; R < this.path.length; R++)
          this.path[R].updateScroll();
      const v = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = Jn(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: E } = this.options;
      E && E.notify("LayoutMeasure", this.layout.layoutBox, v ? v.layoutBox : void 0);
    }
    updateScroll(v = "measure") {
      let E = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === v && (E = !1), E) {
        const R = p(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: v,
          isRoot: R,
          offset: c(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : R
        };
      }
    }
    resetTransform() {
      if (!y)
        return;
      const v = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, E = this.projectionDelta && !kD(this.projectionDelta), R = this.getTransformTemplate(), b = R ? R(this.latestValues, "") : void 0, k = b !== this.prevTransformTemplateValue;
      v && (E || Mc(this.latestValues) || k) && (y(this.instance, b), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(v = !0) {
      const E = this.measurePageBox();
      let R = this.removeElementScroll(E);
      return v && (R = this.removeTransform(R)), LU(R), {
        animationId: this.root.animationId,
        measuredBox: E,
        layoutBox: R,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var v;
      const { visualElement: E } = this.options;
      if (!E)
        return Jn();
      const R = E.measureViewportBox();
      if (!(((v = this.scroll) === null || v === void 0 ? void 0 : v.wasRoot) || this.path.some(NU))) {
        const { scroll: k } = this.root;
        k && (Rd(R.x, k.offset.x), Rd(R.y, k.offset.y));
      }
      return R;
    }
    removeElementScroll(v) {
      var E;
      const R = Jn();
      if (Qa(R, v), !((E = this.scroll) === null || E === void 0) && E.wasRoot)
        return R;
      for (let b = 0; b < this.path.length; b++) {
        const k = this.path[b], { scroll: _, options: O } = k;
        k !== this.root && _ && O.layoutScroll && (_.wasRoot && Qa(R, v), Rd(R.x, _.offset.x), Rd(R.y, _.offset.y));
      }
      return R;
    }
    applyTransform(v, E = !1) {
      const R = Jn();
      Qa(R, v);
      for (let b = 0; b < this.path.length; b++) {
        const k = this.path[b];
        !E && k.options.layoutScroll && k.scroll && k !== k.root && wd(R, {
          x: -k.scroll.offset.x,
          y: -k.scroll.offset.y
        }), Mc(k.latestValues) && wd(R, k.latestValues);
      }
      return Mc(this.latestValues) && wd(R, this.latestValues), R;
    }
    removeTransform(v) {
      const E = Jn();
      Qa(E, v);
      for (let R = 0; R < this.path.length; R++) {
        const b = this.path[R];
        if (!b.instance || !Mc(b.latestValues))
          continue;
        vC(b.latestValues) && b.updateSnapshot();
        const k = Jn(), _ = b.measurePageBox();
        Qa(k, _), jb(E, b.latestValues, b.snapshot ? b.snapshot.layoutBox : void 0, k);
      }
      return Mc(this.latestValues) && jb(E, this.latestValues), E;
    }
    setTargetDelta(v) {
      this.targetDelta = v, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(v) {
      this.options = {
        ...this.options,
        ...v,
        crossfade: v.crossfade !== void 0 ? v.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Xr.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(v = !1) {
      var E;
      const R = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = R.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = R.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = R.isSharedProjectionDirty);
      const b = !!this.resumingFrom || this !== R;
      if (!(v || b && this.isSharedProjectionDirty || this.isProjectionDirty || !((E = this.parent) === null || E === void 0) && E.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: _, layoutId: O } = this.options;
      if (!(!this.layout || !(_ || O))) {
        if (this.resolvedRelativeTargetAt = Xr.timestamp, !this.targetDelta && !this.relativeTarget) {
          const U = this.getClosestProjectingParent();
          U && U.layout && this.animationProgress !== 1 ? (this.relativeParent = U, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Jn(), this.relativeTargetOrigin = Jn(), Kh(this.relativeTargetOrigin, this.layout.layoutBox, U.layout.layoutBox), Qa(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Jn(), this.targetWithTransforms = Jn()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), V2(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Qa(this.target, this.layout.layoutBox), xD(this.target, this.targetDelta)) : Qa(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const U = this.getClosestProjectingParent();
            U && !!U.resumingFrom == !!this.resumingFrom && !U.options.layoutScroll && U.target && this.animationProgress !== 1 ? (this.relativeParent = U, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Jn(), this.relativeTargetOrigin = Jn(), Kh(this.relativeTargetOrigin, this.target, U.target), Qa(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Yh && Ac.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || vC(this.parent.latestValues) || TD(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var v;
      const E = this.getLead(), R = !!this.resumingFrom || this !== E;
      let b = !0;
      if ((this.isProjectionDirty || !((v = this.parent) === null || v === void 0) && v.isProjectionDirty) && (b = !1), R && (this.isSharedProjectionDirty || this.isTransformDirty) && (b = !1), this.resolvedRelativeTargetAt === Xr.timestamp && (b = !1), b)
        return;
      const { layout: k, layoutId: _ } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(k || _))
        return;
      Qa(this.layoutCorrected, this.layout.layoutBox);
      const O = this.treeScale.x, U = this.treeScale.y;
      $2(this.layoutCorrected, this.treeScale, this.path, R), E.layout && !E.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (E.target = E.layout.layoutBox, E.targetWithTransforms = Jn());
      const { target: H } = E;
      if (!H) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Vb(this.prevProjectionDelta.x, this.projectionDelta.x), Vb(this.prevProjectionDelta.y, this.projectionDelta.y)), Gh(this.projectionDelta, this.layoutCorrected, H, this.latestValues), (this.treeScale.x !== O || this.treeScale.y !== U || !Wb(this.projectionDelta.x, this.prevProjectionDelta.x) || !Wb(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", H)), Yh && Ac.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(v = !0) {
      var E;
      if ((E = this.options.visualElement) === null || E === void 0 || E.scheduleRender(), v) {
        const R = this.getStack();
        R && R.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = xd(), this.projectionDelta = xd(), this.projectionDeltaWithTransform = xd();
    }
    setAnimationOrigin(v, E = !1) {
      const R = this.snapshot, b = R ? R.latestValues : {}, k = { ...this.latestValues }, _ = xd();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !E;
      const O = Jn(), U = R ? R.source : void 0, H = this.layout ? this.layout.source : void 0, X = U !== H, Z = this.getStack(), ne = !Z || Z.members.length <= 1, ae = !!(X && !ne && this.options.crossfade === !0 && !this.path.some(AU));
      this.animationProgress = 0;
      let oe;
      this.mixTargetDelta = (ve) => {
        const J = ve / 1e3;
        Qb(_.x, v.x, J), Qb(_.y, v.y, J), this.setTargetDelta(_), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Kh(O, this.layout.layoutBox, this.relativeParent.layout.layoutBox), MU(this.relativeTarget, this.relativeTargetOrigin, O, J), oe && hU(this.relativeTarget, oe) && (this.isProjectionDirty = !1), oe || (oe = Jn()), Qa(oe, this.relativeTarget)), X && (this.animationValues = k, sU(k, b, this.latestValues, J, ae, ne)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = J;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(v) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (fu(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Cn.update(() => {
        og.hasAnimatedSinceResize = !0, this.currentAnimation = nU(0, $b, {
          ...v,
          onUpdate: (E) => {
            this.mixTargetDelta(E), v.onUpdate && v.onUpdate(E);
          },
          onComplete: () => {
            v.onComplete && v.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const v = this.getStack();
      v && v.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta($b), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const v = this.getLead();
      let { targetWithTransforms: E, target: R, layout: b, latestValues: k } = v;
      if (!(!E || !R || !b)) {
        if (this !== v && this.layout && b && LD(this.options.animationType, this.layout.layoutBox, b.layoutBox)) {
          R = this.target || Jn();
          const _ = Sa(this.layout.layoutBox.x);
          R.x.min = v.target.x.min, R.x.max = R.x.min + _;
          const O = Sa(this.layout.layoutBox.y);
          R.y.min = v.target.y.min, R.y.max = R.y.min + O;
        }
        Qa(E, R), wd(E, k), Gh(this.projectionDeltaWithTransform, this.layoutCorrected, E, k);
      }
    }
    registerSharedNode(v, E) {
      this.sharedNodes.has(v) || this.sharedNodes.set(v, new vU()), this.sharedNodes.get(v).add(E);
      const b = E.options.initialPromotionConfig;
      E.promote({
        transition: b ? b.transition : void 0,
        preserveFollowOpacity: b && b.shouldPreserveFollowOpacity ? b.shouldPreserveFollowOpacity(E) : void 0
      });
    }
    isLead() {
      const v = this.getStack();
      return v ? v.lead === this : !0;
    }
    getLead() {
      var v;
      const { layoutId: E } = this.options;
      return E ? ((v = this.getStack()) === null || v === void 0 ? void 0 : v.lead) || this : this;
    }
    getPrevLead() {
      var v;
      const { layoutId: E } = this.options;
      return E ? (v = this.getStack()) === null || v === void 0 ? void 0 : v.prevLead : void 0;
    }
    getStack() {
      const { layoutId: v } = this.options;
      if (v)
        return this.root.sharedNodes.get(v);
    }
    promote({ needsReset: v, transition: E, preserveFollowOpacity: R } = {}) {
      const b = this.getStack();
      b && b.promote(this, R), v && (this.projectionDelta = void 0, this.needsReset = !0), E && this.setOptions({ transition: E });
    }
    relegate() {
      const v = this.getStack();
      return v ? v.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: v } = this.options;
      if (!v)
        return;
      let E = !1;
      const { latestValues: R } = v;
      if ((R.z || R.rotate || R.rotateX || R.rotateY || R.rotateZ || R.skewX || R.skewY) && (E = !0), !E)
        return;
      const b = {};
      R.z && XE("z", v, b, this.animationValues);
      for (let k = 0; k < QE.length; k++)
        XE(`rotate${QE[k]}`, v, b, this.animationValues), XE(`skew${QE[k]}`, v, b, this.animationValues);
      v.render();
      for (const k in b)
        v.setStaticValue(k, b[k]), this.animationValues && (this.animationValues[k] = b[k]);
      v.scheduleRender();
    }
    getProjectionStyles(v) {
      var E, R;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return yU;
      const b = {
        visibility: ""
      }, k = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, b.opacity = "", b.pointerEvents = ig(v == null ? void 0 : v.pointerEvents) || "", b.transform = k ? k(this.latestValues, "") : "none", b;
      const _ = this.getLead();
      if (!this.projectionDelta || !this.layout || !_.target) {
        const X = {};
        return this.options.layoutId && (X.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, X.pointerEvents = ig(v == null ? void 0 : v.pointerEvents) || ""), this.hasProjected && !Mc(this.latestValues) && (X.transform = k ? k({}, "") : "none", this.hasProjected = !1), X;
      }
      const O = _.animationValues || _.latestValues;
      this.applyTransformsToTarget(), b.transform = mU(this.projectionDeltaWithTransform, this.treeScale, O), k && (b.transform = k(O, b.transform));
      const { x: U, y: H } = this.projectionDelta;
      b.transformOrigin = `${U.origin * 100}% ${H.origin * 100}% 0`, _.animationValues ? b.opacity = _ === this ? (R = (E = O.opacity) !== null && E !== void 0 ? E : this.latestValues.opacity) !== null && R !== void 0 ? R : 1 : this.preserveOpacity ? this.latestValues.opacity : O.opacityExit : b.opacity = _ === this ? O.opacity !== void 0 ? O.opacity : "" : O.opacityExit !== void 0 ? O.opacityExit : 0;
      for (const X in sg) {
        if (O[X] === void 0)
          continue;
        const { correct: Z, applyTo: ne } = sg[X], ae = b.transform === "none" ? O[X] : Z(O[X], _);
        if (ne) {
          const oe = ne.length;
          for (let ve = 0; ve < oe; ve++)
            b[ne[ve]] = ae;
        } else
          b[X] = ae;
      }
      return this.options.layoutId && (b.pointerEvents = _ === this ? ig(v == null ? void 0 : v.pointerEvents) || "" : "none"), b;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((v) => {
        var E;
        return (E = v.currentAnimation) === null || E === void 0 ? void 0 : E.stop();
      }), this.root.nodes.forEach(Gb), this.root.sharedNodes.clear();
    }
  };
}
function SU(o) {
  o.updateLayout();
}
function EU(o) {
  var l;
  const c = ((l = o.resumeFrom) === null || l === void 0 ? void 0 : l.snapshot) || o.snapshot;
  if (o.isLead() && o.layout && c && o.hasListeners("didUpdate")) {
    const { layoutBox: p, measuredBox: y } = o.layout, { animationType: T } = o.options, v = c.source !== o.layout.source;
    T === "size" ? Xa((_) => {
      const O = v ? c.measuredBox[_] : c.layoutBox[_], U = Sa(O);
      O.min = p[_].min, O.max = O.min + U;
    }) : LD(T, c.layoutBox, p) && Xa((_) => {
      const O = v ? c.measuredBox[_] : c.layoutBox[_], U = Sa(p[_]);
      O.max = O.min + U, o.relativeTarget && !o.currentAnimation && (o.isProjectionDirty = !0, o.relativeTarget[_].max = o.relativeTarget[_].min + U);
    });
    const E = xd();
    Gh(E, p, c.layoutBox);
    const R = xd();
    v ? Gh(R, o.applyTransform(y, !0), c.measuredBox) : Gh(R, p, c.layoutBox);
    const b = !kD(E);
    let k = !1;
    if (!o.resumeFrom) {
      const _ = o.getClosestProjectingParent();
      if (_ && !_.resumeFrom) {
        const { snapshot: O, layout: U } = _;
        if (O && U) {
          const H = Jn();
          Kh(H, c.layoutBox, O.layoutBox);
          const X = Jn();
          Kh(X, p, U.layoutBox), MD(H, X) || (k = !0), _.options.layoutRoot && (o.relativeTarget = X, o.relativeTargetOrigin = H, o.relativeParent = _);
        }
      }
    }
    o.notifyListeners("didUpdate", {
      layout: p,
      snapshot: c,
      delta: R,
      layoutDelta: E,
      hasLayoutChanged: b,
      hasRelativeTargetChanged: k
    });
  } else if (o.isLead()) {
    const { onExitComplete: p } = o.options;
    p && p();
  }
  o.options.transition = void 0;
}
function CU(o) {
  Yh && Ac.totalNodes++, o.parent && (o.isProjecting() || (o.isProjectionDirty = o.parent.isProjectionDirty), o.isSharedProjectionDirty || (o.isSharedProjectionDirty = !!(o.isProjectionDirty || o.parent.isProjectionDirty || o.parent.isSharedProjectionDirty)), o.isTransformDirty || (o.isTransformDirty = o.parent.isTransformDirty));
}
function TU(o) {
  o.isProjectionDirty = o.isSharedProjectionDirty = o.isTransformDirty = !1;
}
function xU(o) {
  o.clearSnapshot();
}
function Gb(o) {
  o.clearMeasurements();
}
function RU(o) {
  o.isLayoutDirty = !1;
}
function wU(o) {
  const { visualElement: l } = o.options;
  l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"), o.resetTransform();
}
function Kb(o) {
  o.finishAnimation(), o.targetDelta = o.relativeTarget = o.target = void 0, o.isProjectionDirty = !0;
}
function bU(o) {
  o.resolveTargetDelta();
}
function DU(o) {
  o.calcProjection();
}
function _U(o) {
  o.resetSkewAndRotation();
}
function kU(o) {
  o.removeLeadSnapshot();
}
function Qb(o, l, c) {
  o.translate = Ln(l.translate, 0, c), o.scale = Ln(l.scale, 1, c), o.origin = l.origin, o.originPoint = l.originPoint;
}
function Xb(o, l, c, p) {
  o.min = Ln(l.min, c.min, p), o.max = Ln(l.max, c.max, p);
}
function MU(o, l, c, p) {
  Xb(o.x, l.x, c.x, p), Xb(o.y, l.y, c.y, p);
}
function AU(o) {
  return o.animationValues && o.animationValues.opacityExit !== void 0;
}
const OU = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, qb = (o) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(o), Zb = qb("applewebkit/") && !qb("chrome/") ? Math.round : Ji;
function Jb(o) {
  o.min = Zb(o.min), o.max = Zb(o.max);
}
function LU(o) {
  Jb(o.x), Jb(o.y);
}
function LD(o, l, c) {
  return o === "position" || o === "preserve-aspect" && !U2(Yb(l), Yb(c), 0.2);
}
function NU(o) {
  var l;
  return o !== o.root && ((l = o.scroll) === null || l === void 0 ? void 0 : l.wasRoot);
}
const PU = OD({
  attachResizeListener: (o, l) => Jh(o, "resize", l),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), qE = {
  current: void 0
}, ND = OD({
  measureScroll: (o) => ({
    x: o.scrollLeft,
    y: o.scrollTop
  }),
  defaultParent: () => {
    if (!qE.current) {
      const o = new PU({});
      o.mount(window), o.setOptions({ layoutScroll: !0 }), qE.current = o;
    }
    return qE.current;
  },
  resetTransform: (o, l) => {
    o.style.transform = l !== void 0 ? l : "none";
  },
  checkIsScrollRoot: (o) => window.getComputedStyle(o).position === "fixed"
}), UU = {
  pan: {
    Feature: Z2
  },
  drag: {
    Feature: q2,
    ProjectionNode: ND,
    MeasureLayout: bD
  }
};
function e1(o, l, c) {
  const { props: p } = o;
  o.animationState && p.whileHover && o.animationState.setActive("whileHover", c === "Start");
  const y = "onHover" + c, T = p[y];
  T && Cn.postRender(() => T(l, iv(l)));
}
class VU extends pu {
  mount() {
    const { current: l } = this.node;
    l && (this.unmount = UN(l, (c) => (e1(this.node, c, "Start"), (p) => e1(this.node, p, "End"))));
  }
  unmount() {
  }
}
class zU extends pu {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let l = !1;
    try {
      l = this.node.current.matches(":focus-visible");
    } catch {
      l = !0;
    }
    !l || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = rv(Jh(this.node.current, "focus", () => this.onFocus()), Jh(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function t1(o, l, c) {
  const { props: p } = o;
  o.animationState && p.whileTap && o.animationState.setActive("whileTap", c === "Start");
  const y = "onTap" + (c === "End" ? "" : c), T = p[y];
  T && Cn.postRender(() => T(l, iv(l)));
}
class FU extends pu {
  mount() {
    const { current: l } = this.node;
    l && (this.unmount = jN(l, (c) => (t1(this.node, c, "Start"), (p, { success: y }) => t1(this.node, p, y ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const yC = /* @__PURE__ */ new WeakMap(), ZE = /* @__PURE__ */ new WeakMap(), jU = (o) => {
  const l = yC.get(o.target);
  l && l(o);
}, BU = (o) => {
  o.forEach(jU);
};
function HU({ root: o, ...l }) {
  const c = o || document;
  ZE.has(c) || ZE.set(c, {});
  const p = ZE.get(c), y = JSON.stringify(l);
  return p[y] || (p[y] = new IntersectionObserver(BU, { root: o, ...l })), p[y];
}
function IU(o, l, c) {
  const p = HU(l);
  return yC.set(o, c), p.observe(o), () => {
    yC.delete(o), p.unobserve(o);
  };
}
const YU = {
  some: 0,
  all: 1
};
class WU extends pu {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: l = {} } = this.node.getProps(), { root: c, margin: p, amount: y = "some", once: T } = l, v = {
      root: c ? c.current : void 0,
      rootMargin: p,
      threshold: typeof y == "number" ? y : YU[y]
    }, E = (R) => {
      const { isIntersecting: b } = R;
      if (this.isInView === b || (this.isInView = b, T && !b && this.hasEnteredView))
        return;
      b && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", b);
      const { onViewportEnter: k, onViewportLeave: _ } = this.node.getProps(), O = b ? k : _;
      O && O(R);
    };
    return IU(this.node.current, v, E);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: l, prevProps: c } = this.node;
    ["amount", "margin", "root"].some($U(l, c)) && this.startObserver();
  }
  unmount() {
  }
}
function $U({ viewport: o = {} }, { viewport: l = {} } = {}) {
  return (c) => o[c] !== l[c];
}
const GU = {
  inView: {
    Feature: WU
  },
  tap: {
    Feature: FU
  },
  focus: {
    Feature: zU
  },
  hover: {
    Feature: VU
  }
}, KU = {
  layout: {
    ProjectionNode: ND,
    MeasureLayout: bD
  }
}, hg = { current: null }, XC = { current: !1 };
function PD() {
  if (XC.current = !0, !!SC)
    if (window.matchMedia) {
      const o = window.matchMedia("(prefers-reduced-motion)"), l = () => hg.current = o.matches;
      o.addListener(l), l();
    } else
      hg.current = !1;
}
const QU = [...oD, vi, du], XU = (o) => QU.find(aD(o)), n1 = /* @__PURE__ */ new WeakMap();
function qU(o, l, c) {
  for (const p in l) {
    const y = l[p], T = c[p];
    if (mi(y))
      o.addValue(p, y), process.env.NODE_ENV === "development" && ev(y.version === "11.18.2", `Attempting to mix Motion versions ${y.version} with 11.18.2 may not work as expected.`);
    else if (mi(T))
      o.addValue(p, qh(y, { owner: o }));
    else if (T !== y)
      if (o.hasValue(p)) {
        const v = o.getValue(p);
        v.liveStyle === !0 ? v.jump(y) : v.hasAnimated || v.set(y);
      } else {
        const v = o.getStaticValue(p);
        o.addValue(p, qh(v !== void 0 ? v : y, { owner: o }));
      }
  }
  for (const p in c)
    l[p] === void 0 && o.removeValue(p);
  return l;
}
const r1 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class ZU {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(l, c, p) {
    return {};
  }
  constructor({ parent: l, props: c, presenceContext: p, reducedMotionConfig: y, blockInitialAnimation: T, visualState: v }, E = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = $C, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const U = vl.now();
      this.renderScheduledAt < U && (this.renderScheduledAt = U, Cn.render(this.render, !1, !0));
    };
    const { latestValues: R, renderState: b, onUpdate: k } = v;
    this.onUpdate = k, this.latestValues = R, this.baseTarget = { ...R }, this.initialValues = c.initial ? { ...R } : {}, this.renderState = b, this.parent = l, this.props = c, this.presenceContext = p, this.depth = l ? l.depth + 1 : 0, this.reducedMotionConfig = y, this.options = E, this.blockInitialAnimation = !!T, this.isControllingVariants = yg(c), this.isVariantNode = h1(c), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(l && l.current);
    const { willChange: _, ...O } = this.scrapeMotionValuesFromProps(c, {}, this);
    for (const U in O) {
      const H = O[U];
      R[U] !== void 0 && mi(H) && H.set(R[U], !1);
    }
  }
  mount(l) {
    this.current = l, n1.set(l, this), this.projection && !this.projection.instance && this.projection.mount(l), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((c, p) => this.bindToMotionValue(p, c)), XC.current || PD(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : hg.current, process.env.NODE_ENV !== "production" && ev(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    n1.delete(this.current), this.projection && this.projection.unmount(), fu(this.notifyUpdate), fu(this.render), this.valueSubscriptions.forEach((l) => l()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const l in this.events)
      this.events[l].clear();
    for (const l in this.features) {
      const c = this.features[l];
      c && (c.unmount(), c.isMounted = !1);
    }
    this.current = null;
  }
  bindToMotionValue(l, c) {
    this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)();
    const p = Nc.has(l), y = c.on("change", (E) => {
      this.latestValues[l] = E, this.props.onUpdate && Cn.preRender(this.notifyUpdate), p && this.projection && (this.projection.isTransformDirty = !0);
    }), T = c.on("renderRequest", this.scheduleRender);
    let v;
    window.MotionCheckAppearSync && (v = window.MotionCheckAppearSync(this, l, c)), this.valueSubscriptions.set(l, () => {
      y(), T(), v && v(), c.owner && c.stop();
    });
  }
  sortNodePosition(l) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== l.type ? 0 : this.sortInstanceNodePosition(this.current, l.current);
  }
  updateFeatures() {
    let l = "animation";
    for (l in Dd) {
      const c = Dd[l];
      if (!c)
        continue;
      const { isEnabled: p, Feature: y } = c;
      if (!this.features[l] && y && p(this.props) && (this.features[l] = new y(this)), this.features[l]) {
        const T = this.features[l];
        T.isMounted ? T.update() : (T.mount(), T.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Jn();
  }
  getStaticValue(l) {
    return this.latestValues[l];
  }
  setStaticValue(l, c) {
    this.latestValues[l] = c;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(l, c) {
    (l.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = l, this.prevPresenceContext = this.presenceContext, this.presenceContext = c;
    for (let p = 0; p < r1.length; p++) {
      const y = r1[p];
      this.propEventSubscriptions[y] && (this.propEventSubscriptions[y](), delete this.propEventSubscriptions[y]);
      const T = "on" + y, v = l[T];
      v && (this.propEventSubscriptions[y] = this.on(y, v));
    }
    this.prevMotionValues = qU(this, this.scrapeMotionValuesFromProps(l, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(l) {
    return this.props.variants ? this.props.variants[l] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(l) {
    const c = this.getClosestVariantNode();
    if (c)
      return c.variantChildren && c.variantChildren.add(l), () => c.variantChildren.delete(l);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(l, c) {
    const p = this.values.get(l);
    c !== p && (p && this.removeValue(l), this.bindToMotionValue(l, c), this.values.set(l, c), this.latestValues[l] = c.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(l) {
    this.values.delete(l);
    const c = this.valueSubscriptions.get(l);
    c && (c(), this.valueSubscriptions.delete(l)), delete this.latestValues[l], this.removeValueFromRenderState(l, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(l) {
    return this.values.has(l);
  }
  getValue(l, c) {
    if (this.props.values && this.props.values[l])
      return this.props.values[l];
    let p = this.values.get(l);
    return p === void 0 && c !== void 0 && (p = qh(c === null ? void 0 : c, { owner: this }), this.addValue(l, p)), p;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(l, c) {
    var p;
    let y = this.latestValues[l] !== void 0 || !this.current ? this.latestValues[l] : (p = this.getBaseTargetFromProps(this.props, l)) !== null && p !== void 0 ? p : this.readValueFromInstance(this.current, l, this.options);
    return y != null && (typeof y == "string" && (rD(y) || K1(y)) ? y = parseFloat(y) : !XU(y) && du.test(c) && (y = eD(l, c)), this.setBaseTarget(l, mi(y) ? y.get() : y)), mi(y) ? y.get() : y;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(l, c) {
    this.baseTarget[l] = c;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(l) {
    var c;
    const { initial: p } = this.props;
    let y;
    if (typeof p == "string" || typeof p == "object") {
      const v = bC(this.props, p, (c = this.presenceContext) === null || c === void 0 ? void 0 : c.custom);
      v && (y = v[l]);
    }
    if (p && y !== void 0)
      return y;
    const T = this.getBaseTargetFromProps(this.props, l);
    return T !== void 0 && !mi(T) ? T : this.initialValues[l] !== void 0 && y === void 0 ? void 0 : this.baseTarget[l];
  }
  on(l, c) {
    return this.events[l] || (this.events[l] = new jC()), this.events[l].add(c);
  }
  notify(l, ...c) {
    this.events[l] && this.events[l].notify(...c);
  }
}
class UD extends ZU {
  constructor() {
    super(...arguments), this.KeyframeResolver = lD;
  }
  sortInstanceNodePosition(l, c) {
    return l.compareDocumentPosition(c) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(l, c) {
    return l.style ? l.style[c] : void 0;
  }
  removeValueFromRenderState(l, { vars: c, style: p }) {
    delete c[l], delete p[l];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: l } = this.props;
    mi(l) && (this.childSubscription = l.on("change", (c) => {
      this.current && (this.current.textContent = `${c}`);
    }));
  }
}
function JU(o) {
  return window.getComputedStyle(o);
}
class eV extends UD {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = x1;
  }
  readValueFromInstance(l, c) {
    if (Nc.has(c)) {
      const p = WC(c);
      return p && p.default || 0;
    } else {
      const p = JU(l), y = (E1(c) ? p.getPropertyValue(c) : p[c]) || 0;
      return typeof y == "string" ? y.trim() : y;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: c }) {
    return RD(l, c);
  }
  build(l, c, p) {
    kC(l, c, p.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, c, p) {
    return LC(l, c, p);
  }
}
class tV extends UD {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Jn;
  }
  getBaseTargetFromProps(l, c) {
    return l[c];
  }
  readValueFromInstance(l, c) {
    if (Nc.has(c)) {
      const p = WC(c);
      return p && p.default || 0;
    }
    return c = R1.has(c) ? c : xC(c), l.getAttribute(c);
  }
  scrapeMotionValuesFromProps(l, c, p) {
    return D1(l, c, p);
  }
  build(l, c, p) {
    MC(l, c, this.isSVGTag, p.transformTemplate);
  }
  renderInstance(l, c, p, y) {
    w1(l, c, p, y);
  }
  mount(l) {
    this.isSVGTag = OC(l.tagName), super.mount(l);
  }
}
const nV = (o, l) => wC(o) ? new tV(l) : new eV(l, {
  allowProjection: o !== Ge.Fragment
}), rV = /* @__PURE__ */ kN({
  ...D2,
  ...GU,
  ...UU,
  ...KU
}, nV), i1 = /* @__PURE__ */ YL(rV);
function iV() {
  !XC.current && PD();
  const [o] = Ge.useState(hg.current);
  return process.env.NODE_ENV !== "production" && ev(o !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), o;
}
const aV = 480, oV = 228, lV = 288, sV = 720, uV = 2.35, cV = 340, fV = 580, dV = 44, pV = 22, tg = 30, VD = {
  cardWidth: oV,
  cardHeight: lV,
  stagePadding: dV,
  restStack: [
    { x: -tg * 2, y: 4, rotate: -8, scale: 1, zIndex: 1 },
    { x: -tg, y: 0, rotate: 3, scale: 1, zIndex: 2 },
    { x: 0, y: -2, rotate: -2, scale: 1, zIndex: 3 },
    { x: tg, y: 0, rotate: 2, scale: 1, zIndex: 4 },
    { x: tg * 2, y: -4, rotate: 7, scale: 1, zIndex: 5 }
  ],
  splitLayout: {
    active: { x: 0, y: -158, rotate: 0, scale: 1.38 },
    /** Bottom strip: ~28–32px between centers on screen (tight stack, 70%+ overlap). */
    peerSlots: [
      { x: -42, y: 178, rotate: -5, scale: 0.46, zIndex: 1 },
      { x: -14, y: 180, rotate: -1, scale: 0.46, zIndex: 2 },
      { x: 14, y: 176, rotate: 2, scale: 0.46, zIndex: 3 },
      { x: 42, y: 174, rotate: 5, scale: 0.46, zIndex: 4 }
    ]
  }
}, ng = 18, hV = {
  ...VD,
  stagePadding: pV,
  restStack: [
    { x: -ng * 2, y: 3, rotate: -8, scale: 1, zIndex: 1 },
    { x: -ng, y: 0, rotate: 3, scale: 1, zIndex: 2 },
    { x: 0, y: -2, rotate: -2, scale: 1, zIndex: 3 },
    { x: ng, y: 0, rotate: 2, scale: 1, zIndex: 4 },
    { x: ng * 2, y: -3, rotate: 7, scale: 1, zIndex: 5 }
  ],
  splitLayout: {
    active: { x: 0, y: -118, rotate: 0, scale: 1.2 },
    peerSlots: [
      { x: -30, y: 148, rotate: -4, scale: 0.4, zIndex: 1 },
      { x: -10, y: 150, rotate: 0, scale: 0.4, zIndex: 2 },
      { x: 10, y: 148, rotate: 2, scale: 0.4, zIndex: 3 },
      { x: 30, y: 146, rotate: 4, scale: 0.4, zIndex: 4 }
    ]
  }
}, vV = {
  type: "spring",
  stiffness: 280,
  damping: 34,
  mass: 0.9
}, a1 = {
  type: "tween",
  duration: 0.01
}, zD = [
  {
    title: `Working
Knowledge`,
    bg: "#E54F10",
    fg: "#FFFFC2",
    labelColor: "#FFFFC2",
    textColor: "#FFFFC2",
    descColor: "rgba(255, 255, 194, 0.7)",
    graphic: "waveformBars",
    seed: 12345,
    desc: "Frameworks, principles, and models I've learned and developed that you will be able to immediately apply to your practice."
  },
  {
    title: `Practical
Demonstration`,
    bg: "#F6EBD9",
    fg: "#524733",
    labelColor: "#524733",
    textColor: "#524733",
    descColor: "rgba(82, 71, 51, 0.8)",
    graphic: "gridBlocks",
    seed: 54321,
    desc: "Detailed walkthroughs of designing interfaces, identifying opportunities, and improving through refinement."
  },
  {
    title: `Collaborate
with AI`,
    bg: "#0A90D2",
    fg: "#AEFFFF",
    labelColor: "#AEFFFF",
    textColor: "#AEFFFF",
    descColor: "rgba(174, 255, 255, 0.8)",
    graphic: "noiseLines",
    seed: 11111,
    desc: "Video lessons on practical, specific methods of working with AI to get exacting results. Tools covered include Claude Code and v0."
  },
  {
    title: `Means &
Methods`,
    bg: "#53F399",
    fg: "#004D00",
    labelColor: "#004D00",
    textColor: "#004D00",
    descColor: "rgba(0, 77, 0, 0.7)",
    graphic: "fluidGrid",
    seed: 22222,
    desc: "General tips and techniques to apply to your daily work to achieve excellence in interface design and assembly."
  },
  {
    title: "Interface Kit",
    bg: "#211F1E",
    fg: "#F6EBD9",
    labelColor: "#F6EBD9",
    textColor: "#F6EBD9",
    descColor: "rgba(246, 235, 217, 0.7)",
    graphic: "interfaceBlueprint",
    seed: 33333,
    desc: "Screencasts, highlights, and deep dives that showcase the end-to-end journey for designing and building Interface Kit. Members get early betas and free lifetime access to the tool."
  }
];
function mV(o) {
  let l = String(o).replace(/^#/, "");
  l.length === 3 && (l = l.split("").map((p) => p + p).join(""));
  const c = parseInt(l, 16);
  return Number.isNaN(c) ? "0, 0, 0" : `${c >> 16 & 255}, ${c >> 8 & 255}, ${c & 255}`;
}
function yV(o, l, c) {
  const p = o.getContext("2d");
  if (!p) return null;
  const y = window.devicePixelRatio || 1;
  return o.width = Math.max(1, Math.round(l * y)), o.height = Math.max(1, Math.round(c * y)), o.style.width = `${l}px`, o.style.height = `${c}px`, p.setTransform(y, 0, 0, y, 0, 0), { ctx: p, w: l, h: c, dpr: y };
}
function Od(o, l, c, p) {
  o.fillStyle = p, o.fillRect(0, 0, l, c);
}
function qC(o, l, c, p, y, T, v = 1) {
  const E = o.globalAlpha;
  o.globalAlpha = v, o.fillStyle = T, o.fillRect(l, c, p, y), o.globalAlpha = E;
}
function Eg(o) {
  let l = o >>> 0;
  return function() {
    l |= 0, l = l + 1831565813 | 0;
    let c = Math.imul(l ^ l >>> 15, 1 | l);
    return c ^= c + Math.imul(c ^ c >>> 7, 61 | c), ((c ^ c >>> 14) >>> 0) / 4294967296;
  };
}
function Cg(o, l) {
  const c = o % 1;
  switch (l) {
    case "triangle":
      return c < 0.25 ? 4 * c : c < 0.75 ? 1 - (c - 0.25) * 4 : -1 + (c - 0.75) * 4;
    case "sawtooth":
      return 2 * c - 1;
    case "square":
      return c < 0.5 ? 1 : -1;
    case "bounce":
      return Math.abs(Math.sin(c * Math.PI * 2));
    case "elastic": {
      const p = Math.exp(-3 * c);
      return Math.sin(c * Math.PI * 8) * p;
    }
    case "sine":
    default:
      return Math.sin(c * Math.PI * 2);
  }
}
function rg(o, l, c, p, y, T, v, E, R = 1, b = !1) {
  const k = o.globalAlpha;
  if (o.globalAlpha = R, o.strokeStyle = v, o.lineWidth = E, o.beginPath(), b) {
    const _ = E / 2;
    o.roundRect(l + _, c + _, p - E, y - E, Math.max(0, T - _));
  } else
    o.roundRect(l, c, p, y, T);
  o.stroke(), o.globalAlpha = k;
}
const gV = {
  waveformBars: {
    waveType: "sine",
    waveAmplitude: 0.4,
    waveFrequency: 0.9,
    phaseOffset: 0.4,
    columns: 40,
    barWidth: 2,
    gap: 3,
    minHeight: 1,
    maxHeightFrac: 0.82,
    anchorInterval: 2,
    topAligned: !0,
    stagger: 0.1,
    verticalShift: 4,
    shiftCurve: 3,
    shiftOrigin: 0.99,
    speed: 0.1
  },
  gridBlocks: {
    waveType: "elastic",
    waveAmplitude: 1,
    waveFrequency: 1,
    phaseOffset: 0.35,
    itemWidth: 10,
    itemHeight: 10,
    gapX: 3,
    gapY: 3,
    opacityMin: 0,
    opacityMax: 1,
    speed: 0.05,
    autoFit: !0,
    inset: 0
  },
  noiseLines: {
    waveType: "sine",
    waveAmplitude: 0.9,
    waveFrequency: 0.9,
    phaseOffset: 0.4,
    rows: 24,
    baseThickness: 0.45,
    maxThickness: 3.2,
    gapY: 1.5,
    noiseAmount: 0,
    speed: 0.2
  },
  fluidGrid: {
    waveType: "elastic",
    waveAmplitude: 1,
    waveFrequency: 1,
    phaseOffset: 1,
    rows: 4,
    cols: 22,
    minWidth: 0,
    maxWidth: 8,
    itemHeight: 16,
    gapX: 2,
    gapY: 2,
    stagger: 0.12,
    speed: 0.05
  },
  interfaceBlueprint: {
    gridSize: 10,
    gridOpacity: 0.14,
    strokeWidth: 1.1,
    cornerRadius: 5,
    speed: 0.4,
    animated: !0
  }
};
function SV(o, l, c, p, y, T, v, E) {
  const R = Eg(y);
  Od(o, l, c, v);
  const b = Math.max(2, c * 0.04), k = Math.max(1, c - 2 * b), _ = E.maxHeightFrac * k, O = E.barWidth, U = E.gap, H = Math.min(
    E.columns,
    Math.max(8, Math.floor((l + U) / (O + U)))
  ), X = H > 1 ? (l - H * O) / (H - 1) : U, Z = 0;
  for (let ne = 0; ne < H; ne++) {
    const ae = Z + ne * (O + X), oe = E.anchorInterval > 0 && ne % E.anchorInterval === 0;
    let ve;
    if (oe) ve = _;
    else {
      const Ce = (E.anchorInterval > 0 ? ne % E.anchorInterval : ne) * E.stagger, ge = ne / H * E.waveFrequency + E.phaseOffset + Ce + p * E.speed, ye = E.minHeight + (Cg(ge, E.waveType) * E.waveAmplitude + 1) / 2 * (_ - E.minHeight);
      ve = Math.max(E.minHeight, ye + (R() - 0.5) * 2);
    }
    let J = b + (E.topAligned ? 0 : (k - ve) / 2);
    if (!oe && E.verticalShift !== 0) {
      const Ce = E.anchorInterval > 0 ? Math.floor(ne / E.anchorInterval) : ne, ge = E.anchorInterval > 0 ? Math.floor(H / E.anchorInterval) : H, ye = E.shiftOrigin * (ge - 1), je = Math.abs(Ce - ye), Ne = Math.max(1, Math.max(ye, ge - 1 - ye));
      let wt = je / Ne;
      const Tt = Math.abs(E.shiftCurve) || 1, Ie = E.shiftCurve >= 0 ? Math.pow(wt, Tt) : 1 - Math.pow(1 - wt, Tt);
      J += Ne * E.verticalShift * Ie;
    }
    J = Math.max(b, Math.min(J, c - b - E.minHeight)), ve = Math.min(ve, c - b - J), !(ve < E.minHeight) && qC(o, ae, J, O, ve, T);
  }
}
function EV(o, l, c, p, y, T, v, E) {
  const R = Eg(y);
  Od(o, l, c, v);
  const b = E.inset !== void 0 ? E.inset : Math.max(3, Math.min(10, Math.min(l, c) * 0.04)), k = Math.max(1, l - 2 * b), _ = Math.max(1, c - 2 * b), O = Math.max(E.itemHeight, Math.min(16, _ * 0.13)), U = E.autoFit ? Math.max(1, Math.floor((_ + E.gapY) / (O + E.gapY))) : E.rows, H = E.autoFit ? Math.max(1, Math.floor((k + E.gapX) / (E.itemWidth + E.gapX))) : E.cols, X = E.autoFit ? (k - (H - 1) * E.gapX) / H : E.itemWidth, Z = E.autoFit ? O : E.itemHeight, ne = H * X + (H - 1) * E.gapX, ae = U * Z + (U - 1) * E.gapY, oe = b + (E.autoFit ? (k - ne) / 2 : 0), ve = b + (_ - ae) / 2;
  for (let J = 0; J < U; J++) {
    const Ce = ve + J * (Z + E.gapY), ge = E.phaseOffset * J;
    for (let ye = 0; ye < H; ye++) {
      const je = oe + ye * (X + E.gapX), Ne = (H > 1 ? ye / (H - 1) : 0) * E.waveFrequency + ge + p * E.speed, wt = E.opacityMin + ((Cg(Ne, E.waveType) * E.waveAmplitude + 1) / 2 + 0.15 * R()) * (E.opacityMax - E.opacityMin);
      qC(
        o,
        je,
        Ce,
        X,
        Z,
        T,
        Math.max(E.opacityMin, Math.min(E.opacityMax, wt))
      );
    }
  }
}
function CV(o, l, c, p, y, T, v, E) {
  const R = Eg(y);
  Od(o, l, c, v);
  const b = Math.max(4, Math.min(12, c * 0.07)), k = c - 2 * b, _ = b + Math.max(0, (k - E.rows * (E.maxThickness + E.gapY)) / 2);
  o.fillStyle = T;
  for (let O = 0; O < E.rows; O++) {
    const U = E.rows > 1 ? O / (E.rows - 1) : 0, H = _ + O * (E.maxThickness + E.gapY), X = E.baseThickness + U * (E.maxThickness - E.baseThickness), Z = 1 - 0.8 * U;
    for (let ne = 0; ne < 100; ne++) {
      const ae = ne / 100 * l, oe = l / 100 + 1, ve = ne / 100;
      let J = E.baseThickness;
      ve > Z && (J = E.baseThickness + (ve - Z) / (1 - Z) * (X - E.baseThickness));
      const Ce = (ve + U) * E.waveFrequency + E.phaseOffset + p * E.speed, ge = Cg(Ce, E.waveType) * E.waveAmplitude * Math.min(3, k * 0.028), ye = (R() - 0.5) * E.noiseAmount * J, je = Math.max(
        b + J / 2,
        Math.min(c - b - J / 2, H + ge + ye)
      );
      o.fillRect(ae, je - J / 2, oe, J);
    }
  }
}
function TV(o, l, c, p, y, T, v, E) {
  const R = Eg(y);
  Od(o, l, c, v);
  const b = E.rows, k = E.cols, _ = E.gapX, O = E.gapY, U = Math.max(12, Math.min(22, (c - (b - 1) * O) / b)), H = (c - (b * (U + O) - O)) / 2;
  for (let X = 0; X < b; X++) {
    const Z = H + X * (U + O), ne = X * E.stagger, ae = [];
    for (let ye = 0; ye < k; ye++) {
      const je = ye / k * E.waveFrequency + ne + E.phaseOffset + p * E.speed;
      let Ne = E.minWidth + (0.5 + ((Cg(je, E.waveType) + 1) / 2 - 0.5) * E.waveAmplitude) * (E.maxWidth - E.minWidth) + (R() - 0.5) * 0.5;
      Ne = Math.max(Math.max(0.5, E.minWidth), Math.min(E.maxWidth, Ne)), ae.push(Ne);
    }
    const oe = (k - 1) * _, ve = ae.reduce((ye, je) => ye + je, 0), Ce = Math.max(1e-3, l - oe) / ve;
    let ge = 0;
    for (let ye = 0; ye < k; ye++) {
      const je = ae[ye] * Ce;
      qC(o, ge, Z, je, U, T), ge += je + _;
    }
  }
}
function xV(o, l, c, p, y, T, v) {
  Od(o, l, c, T);
  const E = Math.max(7, Math.min(14, v.gridSize * Math.min(l, c) / 120)), R = Math.max(0.55, Math.min(1.35, v.strokeWidth * (Math.min(l, c) / 120)));
  o.strokeStyle = y, o.lineWidth = R, o.globalAlpha = v.gridOpacity;
  for (let Ne = 0; Ne <= l; Ne += E)
    o.beginPath(), o.moveTo(Ne, 0), o.lineTo(Ne, c), o.stroke();
  for (let Ne = 0; Ne <= c; Ne += E)
    o.beginPath(), o.moveTo(0, Ne), o.lineTo(l, Ne), o.stroke();
  o.globalAlpha = 1;
  const b = (Ne) => Math.round(Ne / E) * E, k = l - 2 * E, _ = c - 2 * E;
  rg(o, E, E, k, _, 2 * v.cornerRadius, y, R, 0.4, !0);
  const O = E + E, U = E + E, H = k - 2 * E, X = _ - 2 * E, Z = b(0.28 * H);
  rg(o, O, U, Z, X, v.cornerRadius, y, R, 0.6, !0);
  const ne = O + Z + E, ae = H - Z - E;
  rg(o, ne, U, ae, X, v.cornerRadius, y, R, 0.6, !0);
  const oe = Math.max(E, b((ae - 2 * E - 2 * E) / 3)), ve = 2 * E, J = Math.max(E, X - 2 * ve), Ce = U + ve, ge = Math.max(oe + E, 1), ye = v.animated ? (p * v.speed * 25 % ge + ge) % ge : 0;
  o.save(), o.beginPath(), o.roundRect(ne + R, U + R, ae - 2 * R, X - 2 * R, v.cornerRadius - 1), o.clip();
  const je = ne + E - ye;
  for (let Ne = 0; Ne < 5; Ne++)
    rg(
      o,
      je + Ne * ge,
      Ce,
      oe,
      J,
      v.cornerRadius - 1,
      y,
      R,
      0.5,
      !0
    );
  o.restore();
}
function RV(o, l, c, p, y, T) {
  const v = yV(l, c, p);
  if (!v) return;
  const { ctx: E, w: R, h: b } = v, k = T.fg, _ = T.bg, O = T.seed, U = { ...gV[o] };
  switch (o) {
    case "waveformBars":
      SV(E, R, b, y, O, k, _, U);
      break;
    case "gridBlocks":
      EV(E, R, b, y, O, k, _, U);
      break;
    case "noiseLines":
      CV(E, R, b, y, O, k, _, U);
      break;
    case "fluidGrid":
      TV(E, R, b, y, O, k, _, U);
      break;
    case "interfaceBlueprint":
      xV(E, R, b, y, k, _, U);
      break;
    default:
      Od(E, R, b, _);
  }
}
function wV(o, l) {
  const { restStack: c, splitLayout: p } = l, y = /* @__PURE__ */ new Map(), T = c.length;
  if (o === null) {
    for (let b = 0; b < T; b++) {
      const k = c[b];
      y.set(b, {
        x: k.x,
        y: k.y,
        rotate: k.rotate,
        scale: k.scale,
        opacity: 1,
        zIndex: k.zIndex,
        filter: "blur(0px)"
      });
    }
    return y;
  }
  const { active: v, peerSlots: E } = p;
  return Array.from({ length: T }, (b, k) => k).filter((b) => b !== o).sort((b, k) => b - k).forEach((b, k) => {
    const _ = E[k];
    y.set(b, {
      x: _.x,
      y: _.y,
      rotate: _.rotate,
      scale: _.scale,
      opacity: 1,
      zIndex: _.zIndex,
      filter: "blur(0px)"
    });
  }), y.set(o, {
    x: v.x,
    y: v.y,
    rotate: v.rotate,
    scale: v.scale,
    opacity: 1,
    zIndex: 50,
    filter: "blur(0px)"
  }), y;
}
function bV() {
  const [o, l] = Ge.useState(!1);
  return Ge.useEffect(() => {
    const c = window.matchMedia(`(max-width: ${aV}px)`), p = () => l(c.matches);
    return p(), c.addEventListener("change", p), () => c.removeEventListener("change", p);
  }, []), o;
}
function DV() {
  const o = Ge.useRef(/* @__PURE__ */ new Map()), l = Ge.useRef(performance.now());
  return Ge.useEffect(() => {
    let p = 0;
    const y = (T) => {
      const v = (T - l.current) / 1e3;
      zD.forEach((E, R) => {
        const b = o.current.get(R);
        if (!b) return;
        const k = Math.max(1, Math.round(b.clientWidth)), _ = Math.max(1, Math.round(b.clientHeight));
        RV(E.graphic, b, k, _, v, E);
      }), p = requestAnimationFrame(y);
    };
    return p = requestAnimationFrame(y), () => cancelAnimationFrame(p);
  }, []), Ge.useCallback((p, y) => {
    y ? o.current.set(p, y) : o.current.delete(p);
  }, []);
}
function _V({ className: o }) {
  const c = bV() ? hV : VD, p = iV(), [y, T] = Ge.useState(null), v = y !== null, E = p ? a1 : {
    ...vV,
    filter: { type: "tween", duration: 0.26, ease: [0.4, 0, 0.2, 1] },
    opacity: { type: "tween", duration: 0.28, ease: [0.4, 0, 0.2, 1] }
  }, R = Ge.useRef(null), b = DV(), k = Ge.useMemo(
    () => wV(y, c),
    [y, c]
  );
  Ge.useEffect(() => {
    const H = (X) => {
      if (y === null) return;
      const Z = R.current;
      Z && (Z.contains(X.target) || T(null));
    };
    return document.addEventListener("pointerdown", H, !0), () => document.removeEventListener("pointerdown", H, !0);
  }, [y]), Ge.useEffect(() => {
    const H = (X) => {
      X.key === "Escape" && T(null);
    };
    return document.addEventListener("keydown", H), () => document.removeEventListener("keydown", H);
  }, []);
  const { cardWidth: _, cardHeight: O, stagePadding: U } = c;
  return /* @__PURE__ */ lr.jsxs(
    "section",
    {
      className: `flex w-full flex-shrink-0 flex-col items-center gap-3 px-4 pb-12 pt-6 select-none ${o ?? ""}`,
      "aria-labelledby": "card-stack-heading",
      children: [
        /* @__PURE__ */ lr.jsx(
          "h2",
          {
            id: "card-stack-heading",
            className: "font-card-sans text-[11px] font-medium uppercase tracking-[0.12em] text-white/35",
            children: "Stack"
          }
        ),
        /* @__PURE__ */ lr.jsx(
          "div",
          {
            ref: R,
            className: "relative mx-auto w-full overflow-visible",
            style: {
              maxWidth: `min(100%, ${sV}px)`,
              width: "100%",
              ...v ? {
                minHeight: fV,
                aspectRatio: "auto"
              } : {
                aspectRatio: uV,
                minHeight: cV
              }
            },
            children: /* @__PURE__ */ lr.jsx(
              "div",
              {
                className: "absolute inset-0 box-border overflow-visible",
                style: { padding: U },
                children: /* @__PURE__ */ lr.jsx("div", { className: "relative h-full w-full overflow-visible", children: zD.map((H, X) => {
                  const Z = k.get(X), ne = y === X, ae = mV(H.bg), oe = {
                    background: `linear-gradient(to top, rgba(${ae}, 0.88) 0%, rgba(${ae}, 0.45) 55%, rgba(${ae}, 0) 100%)`
                  };
                  return /* @__PURE__ */ lr.jsx(
                    i1.div,
                    {
                      className: "card-stack-shell absolute left-1/2 top-1/2 cursor-pointer rounded-[18px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B]",
                      role: "button",
                      tabIndex: 0,
                      "aria-pressed": ne,
                      "aria-expanded": ne,
                      style: {
                        width: _,
                        height: O,
                        marginLeft: -_ / 2,
                        marginTop: -O / 2,
                        // Reference: fan pivots from bottom so tops spread; hero uses center for clean scale
                        transformOrigin: v ? "center center" : "50% 100%",
                        willChange: "transform",
                        zIndex: Z.zIndex
                      },
                      initial: !1,
                      animate: {
                        x: Z.x,
                        y: Z.y,
                        rotate: Z.rotate,
                        scale: Z.scale,
                        opacity: Z.opacity,
                        filter: Z.filter
                      },
                      transition: E,
                      onPointerDown: (ve) => ve.stopPropagation(),
                      onClick: (ve) => {
                        ve.stopPropagation(), T((J) => J === X ? null : X);
                      },
                      onKeyDown: (ve) => {
                        (ve.key === "Enter" || ve.key === " ") && (ve.preventDefault(), T((J) => J === X ? null : X));
                      },
                      children: /* @__PURE__ */ lr.jsxs(
                        "div",
                        {
                          className: `relative h-full w-full overflow-hidden rounded-[18px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] ${ne && v ? "shadow-[0_28px_64px_-12px_rgba(0,0,0,0.65),0_12px_24px_-6px_rgba(0,0,0,0.45)]" : "shadow-[0_22px_48px_-8px_rgba(0,0,0,0.55),0_8px_16px_-4px_rgba(0,0,0,0.35)]"}`,
                          style: { background: H.bg },
                          children: [
                            /* @__PURE__ */ lr.jsx("div", { className: "pointer-events-none absolute left-6 right-6 top-6 z-[1] h-[138px] overflow-hidden rounded-[10px] py-2.5", children: /* @__PURE__ */ lr.jsx(
                              "canvas",
                              {
                                ref: (ve) => b(X, ve),
                                className: "block h-full w-full",
                                "aria-hidden": !0
                              }
                            ) }),
                            /* @__PURE__ */ lr.jsx("div", { className: "pointer-events-none absolute bottom-4 left-4 right-4 z-10", children: /* @__PURE__ */ lr.jsxs("div", { className: "relative", children: [
                              /* @__PURE__ */ lr.jsx(
                                "div",
                                {
                                  className: "pointer-events-none absolute inset-x-[-10px] bottom-[-12px] top-[-40px] z-0 rounded-xl",
                                  style: oe,
                                  "aria-hidden": !0
                                }
                              ),
                              /* @__PURE__ */ lr.jsx(
                                "p",
                                {
                                  className: "font-card relative z-[1] whitespace-pre-line text-[30px] font-normal leading-[1.1] tracking-[-0.02em]",
                                  style: { color: H.labelColor },
                                  children: H.title
                                }
                              ),
                              /* @__PURE__ */ lr.jsx(
                                i1.div,
                                {
                                  className: `relative z-[1] overflow-hidden ${ne ? `mt-2 overflow-y-auto pointer-events-auto ${v ? "max-h-[160px]" : "max-h-[100px]"}` : "mt-0 max-h-0 pointer-events-none"}`,
                                  initial: !1,
                                  animate: {
                                    opacity: ne ? 1 : 0
                                  },
                                  transition: p ? a1 : { opacity: { duration: 0.32, ease: [0.4, 0, 0.2, 1] } },
                                  "aria-hidden": !ne,
                                  children: /* @__PURE__ */ lr.jsx(
                                    "p",
                                    {
                                      className: "font-card-sans mt-0 text-[13px] font-normal leading-[1.55]",
                                      style: { color: H.descColor },
                                      children: H.desc
                                    }
                                  )
                                }
                              )
                            ] }) })
                          ]
                        }
                      )
                    },
                    X
                  );
                }) })
              }
            )
          }
        )
      ]
    }
  );
}
const o1 = document.getElementById("card-stack-root");
o1 && nC(o1).render(
  /* @__PURE__ */ lr.jsx(Ge.StrictMode, { children: /* @__PURE__ */ lr.jsx(_V, {}) })
);
