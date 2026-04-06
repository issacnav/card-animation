var qE = { exports: {} }, zh = {}, ZE = { exports: {} }, Mt = {};
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
function RL() {
  if (Ow) return Mt;
  Ow = 1;
  var o = Symbol.for("react.element"), l = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), v = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), b = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), _ = Symbol.iterator;
  function A(j) {
    return j === null || typeof j != "object" ? null : (j = _ && j[_] || j["@@iterator"], typeof j == "function" ? j : null);
  }
  var P = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Y = Object.assign, K = {};
  function q(j, re, nt) {
    this.props = j, this.context = re, this.refs = K, this.updater = nt || P;
  }
  q.prototype.isReactComponent = {}, q.prototype.setState = function(j, re) {
    if (typeof j != "object" && typeof j != "function" && j != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, j, re, "setState");
  }, q.prototype.forceUpdate = function(j) {
    this.updater.enqueueForceUpdate(this, j, "forceUpdate");
  };
  function te() {
  }
  te.prototype = q.prototype;
  function ie(j, re, nt) {
    this.props = j, this.context = re, this.refs = K, this.updater = nt || P;
  }
  var oe = ie.prototype = new te();
  oe.constructor = ie, Y(oe, q.prototype), oe.isPureReactComponent = !0;
  var ye = Array.isArray, ne = Object.prototype.hasOwnProperty, ve = { current: null }, Ee = { key: !0, ref: !0, __self: !0, __source: !0 };
  function De(j, re, nt) {
    var Je, Ct = {}, mt = null, ht = null;
    if (re != null) for (Je in re.ref !== void 0 && (ht = re.ref), re.key !== void 0 && (mt = "" + re.key), re) ne.call(re, Je) && !Ee.hasOwnProperty(Je) && (Ct[Je] = re[Je]);
    var yt = arguments.length - 2;
    if (yt === 1) Ct.children = nt;
    else if (1 < yt) {
      for (var Tt = Array(yt), Gt = 0; Gt < yt; Gt++) Tt[Gt] = arguments[Gt + 2];
      Ct.children = Tt;
    }
    if (j && j.defaultProps) for (Je in yt = j.defaultProps, yt) Ct[Je] === void 0 && (Ct[Je] = yt[Je]);
    return { $$typeof: o, type: j, key: mt, ref: ht, props: Ct, _owner: ve.current };
  }
  function Ne(j, re) {
    return { $$typeof: o, type: j.type, key: re, ref: j.ref, props: j.props, _owner: j._owner };
  }
  function Oe(j) {
    return typeof j == "object" && j !== null && j.$$typeof === o;
  }
  function lt(j) {
    var re = { "=": "=0", ":": "=2" };
    return "$" + j.replace(/[=:]/g, function(nt) {
      return re[nt];
    });
  }
  var tt = /\/+/g;
  function Ue(j, re) {
    return typeof j == "object" && j !== null && j.key != null ? lt("" + j.key) : re.toString(36);
  }
  function Et(j, re, nt, Je, Ct) {
    var mt = typeof j;
    (mt === "undefined" || mt === "boolean") && (j = null);
    var ht = !1;
    if (j === null) ht = !0;
    else switch (mt) {
      case "string":
      case "number":
        ht = !0;
        break;
      case "object":
        switch (j.$$typeof) {
          case o:
          case l:
            ht = !0;
        }
    }
    if (ht) return ht = j, Ct = Ct(ht), j = Je === "" ? "." + Ue(ht, 0) : Je, ye(Ct) ? (nt = "", j != null && (nt = j.replace(tt, "$&/") + "/"), Et(Ct, re, nt, "", function(Gt) {
      return Gt;
    })) : Ct != null && (Oe(Ct) && (Ct = Ne(Ct, nt + (!Ct.key || ht && ht.key === Ct.key ? "" : ("" + Ct.key).replace(tt, "$&/") + "/") + j)), re.push(Ct)), 1;
    if (ht = 0, Je = Je === "" ? "." : Je + ":", ye(j)) for (var yt = 0; yt < j.length; yt++) {
      mt = j[yt];
      var Tt = Je + Ue(mt, yt);
      ht += Et(mt, re, nt, Tt, Ct);
    }
    else if (Tt = A(j), typeof Tt == "function") for (j = Tt.call(j), yt = 0; !(mt = j.next()).done; ) mt = mt.value, Tt = Je + Ue(mt, yt++), ht += Et(mt, re, nt, Tt, Ct);
    else if (mt === "object") throw re = String(j), Error("Objects are not valid as a React child (found: " + (re === "[object Object]" ? "object with keys {" + Object.keys(j).join(", ") + "}" : re) + "). If you meant to render a collection of children, use an array instead.");
    return ht;
  }
  function Dt(j, re, nt) {
    if (j == null) return j;
    var Je = [], Ct = 0;
    return Et(j, Je, "", "", function(mt) {
      return re.call(nt, mt, Ct++);
    }), Je;
  }
  function kt(j) {
    if (j._status === -1) {
      var re = j._result;
      re = re(), re.then(function(nt) {
        (j._status === 0 || j._status === -1) && (j._status = 1, j._result = nt);
      }, function(nt) {
        (j._status === 0 || j._status === -1) && (j._status = 2, j._result = nt);
      }), j._status === -1 && (j._status = 0, j._result = re);
    }
    if (j._status === 1) return j._result.default;
    throw j._result;
  }
  var Ce = { current: null }, de = { transition: null }, Ve = { ReactCurrentDispatcher: Ce, ReactCurrentBatchConfig: de, ReactCurrentOwner: ve };
  function ge() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Mt.Children = { map: Dt, forEach: function(j, re, nt) {
    Dt(j, function() {
      re.apply(this, arguments);
    }, nt);
  }, count: function(j) {
    var re = 0;
    return Dt(j, function() {
      re++;
    }), re;
  }, toArray: function(j) {
    return Dt(j, function(re) {
      return re;
    }) || [];
  }, only: function(j) {
    if (!Oe(j)) throw Error("React.Children.only expected to receive a single React element child.");
    return j;
  } }, Mt.Component = q, Mt.Fragment = c, Mt.Profiler = y, Mt.PureComponent = ie, Mt.StrictMode = p, Mt.Suspense = R, Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ve, Mt.act = ge, Mt.cloneElement = function(j, re, nt) {
    if (j == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + j + ".");
    var Je = Y({}, j.props), Ct = j.key, mt = j.ref, ht = j._owner;
    if (re != null) {
      if (re.ref !== void 0 && (mt = re.ref, ht = ve.current), re.key !== void 0 && (Ct = "" + re.key), j.type && j.type.defaultProps) var yt = j.type.defaultProps;
      for (Tt in re) ne.call(re, Tt) && !Ee.hasOwnProperty(Tt) && (Je[Tt] = re[Tt] === void 0 && yt !== void 0 ? yt[Tt] : re[Tt]);
    }
    var Tt = arguments.length - 2;
    if (Tt === 1) Je.children = nt;
    else if (1 < Tt) {
      yt = Array(Tt);
      for (var Gt = 0; Gt < Tt; Gt++) yt[Gt] = arguments[Gt + 2];
      Je.children = yt;
    }
    return { $$typeof: o, type: j.type, key: Ct, ref: mt, props: Je, _owner: ht };
  }, Mt.createContext = function(j) {
    return j = { $$typeof: v, _currentValue: j, _currentValue2: j, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, j.Provider = { $$typeof: T, _context: j }, j.Consumer = j;
  }, Mt.createElement = De, Mt.createFactory = function(j) {
    var re = De.bind(null, j);
    return re.type = j, re;
  }, Mt.createRef = function() {
    return { current: null };
  }, Mt.forwardRef = function(j) {
    return { $$typeof: E, render: j };
  }, Mt.isValidElement = Oe, Mt.lazy = function(j) {
    return { $$typeof: k, _payload: { _status: -1, _result: j }, _init: kt };
  }, Mt.memo = function(j, re) {
    return { $$typeof: b, type: j, compare: re === void 0 ? null : re };
  }, Mt.startTransition = function(j) {
    var re = de.transition;
    de.transition = {};
    try {
      j();
    } finally {
      de.transition = re;
    }
  }, Mt.unstable_act = ge, Mt.useCallback = function(j, re) {
    return Ce.current.useCallback(j, re);
  }, Mt.useContext = function(j) {
    return Ce.current.useContext(j);
  }, Mt.useDebugValue = function() {
  }, Mt.useDeferredValue = function(j) {
    return Ce.current.useDeferredValue(j);
  }, Mt.useEffect = function(j, re) {
    return Ce.current.useEffect(j, re);
  }, Mt.useId = function() {
    return Ce.current.useId();
  }, Mt.useImperativeHandle = function(j, re, nt) {
    return Ce.current.useImperativeHandle(j, re, nt);
  }, Mt.useInsertionEffect = function(j, re) {
    return Ce.current.useInsertionEffect(j, re);
  }, Mt.useLayoutEffect = function(j, re) {
    return Ce.current.useLayoutEffect(j, re);
  }, Mt.useMemo = function(j, re) {
    return Ce.current.useMemo(j, re);
  }, Mt.useReducer = function(j, re, nt) {
    return Ce.current.useReducer(j, re, nt);
  }, Mt.useRef = function(j) {
    return Ce.current.useRef(j);
  }, Mt.useState = function(j) {
    return Ce.current.useState(j);
  }, Mt.useSyncExternalStore = function(j, re, nt) {
    return Ce.current.useSyncExternalStore(j, re, nt);
  }, Mt.useTransition = function() {
    return Ce.current.useTransition();
  }, Mt.version = "18.3.1", Mt;
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
var Aw;
function wL() {
  return Aw || (Aw = 1, function(o, l) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var c = "18.3.1", p = Symbol.for("react.element"), y = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), b = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), K = Symbol.for("react.offscreen"), q = Symbol.iterator, te = "@@iterator";
      function ie(x) {
        if (x === null || typeof x != "object")
          return null;
        var L = q && x[q] || x[te];
        return typeof L == "function" ? L : null;
      }
      var oe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ye = {
        transition: null
      }, ne = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ve = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ee = {}, De = null;
      function Ne(x) {
        De = x;
      }
      Ee.setExtraStackFrame = function(x) {
        De = x;
      }, Ee.getCurrentStack = null, Ee.getStackAddendum = function() {
        var x = "";
        De && (x += De);
        var L = Ee.getCurrentStack;
        return L && (x += L() || ""), x;
      };
      var Oe = !1, lt = !1, tt = !1, Ue = !1, Et = !1, Dt = {
        ReactCurrentDispatcher: oe,
        ReactCurrentBatchConfig: ye,
        ReactCurrentOwner: ve
      };
      Dt.ReactDebugCurrentFrame = Ee, Dt.ReactCurrentActQueue = ne;
      function kt(x) {
        {
          for (var L = arguments.length, G = new Array(L > 1 ? L - 1 : 0), Z = 1; Z < L; Z++)
            G[Z - 1] = arguments[Z];
          de("warn", x, G);
        }
      }
      function Ce(x) {
        {
          for (var L = arguments.length, G = new Array(L > 1 ? L - 1 : 0), Z = 1; Z < L; Z++)
            G[Z - 1] = arguments[Z];
          de("error", x, G);
        }
      }
      function de(x, L, G) {
        {
          var Z = Dt.ReactDebugCurrentFrame, me = Z.getStackAddendum();
          me !== "" && (L += "%s", G = G.concat([me]));
          var Ke = G.map(function(xe) {
            return String(xe);
          });
          Ke.unshift("Warning: " + L), Function.prototype.apply.call(console[x], console, Ke);
        }
      }
      var Ve = {};
      function ge(x, L) {
        {
          var G = x.constructor, Z = G && (G.displayName || G.name) || "ReactClass", me = Z + "." + L;
          if (Ve[me])
            return;
          Ce("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", L, Z), Ve[me] = !0;
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
          ge(x, "forceUpdate");
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
        enqueueReplaceState: function(x, L, G, Z) {
          ge(x, "replaceState");
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
        enqueueSetState: function(x, L, G, Z) {
          ge(x, "setState");
        }
      }, re = Object.assign, nt = {};
      Object.freeze(nt);
      function Je(x, L, G) {
        this.props = x, this.context = L, this.refs = nt, this.updater = G || j;
      }
      Je.prototype.isReactComponent = {}, Je.prototype.setState = function(x, L) {
        if (typeof x != "object" && typeof x != "function" && x != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, x, L, "setState");
      }, Je.prototype.forceUpdate = function(x) {
        this.updater.enqueueForceUpdate(this, x, "forceUpdate");
      };
      {
        var Ct = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, mt = function(x, L) {
          Object.defineProperty(Je.prototype, x, {
            get: function() {
              kt("%s(...) is deprecated in plain JavaScript React classes. %s", L[0], L[1]);
            }
          });
        };
        for (var ht in Ct)
          Ct.hasOwnProperty(ht) && mt(ht, Ct[ht]);
      }
      function yt() {
      }
      yt.prototype = Je.prototype;
      function Tt(x, L, G) {
        this.props = x, this.context = L, this.refs = nt, this.updater = G || j;
      }
      var Gt = Tt.prototype = new yt();
      Gt.constructor = Tt, re(Gt, Je.prototype), Gt.isPureReactComponent = !0;
      function Nn() {
        var x = {
          current: null
        };
        return Object.seal(x), x;
      }
      var Or = Array.isArray;
      function xn(x) {
        return Or(x);
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
          return Ce("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", sr(x)), $n(x);
      }
      function Ei(x, L, G) {
        var Z = x.displayName;
        if (Z)
          return Z;
        var me = L.displayName || L.name || "";
        return me !== "" ? G + "(" + me + ")" : G;
      }
      function ya(x) {
        return x.displayName || "Context";
      }
      function er(x) {
        if (x == null)
          return null;
        if (typeof x.tag == "number" && Ce("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof x == "function")
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
          case A:
            return "SuspenseList";
        }
        if (typeof x == "object")
          switch (x.$$typeof) {
            case b:
              var L = x;
              return ya(L) + ".Consumer";
            case R:
              var G = x;
              return ya(G._context) + ".Provider";
            case k:
              return Ei(x, x.render, "ForwardRef");
            case P:
              var Z = x.displayName || null;
              return Z !== null ? Z : er(x.type) || "Memo";
            case Y: {
              var me = x, Ke = me._payload, xe = me._init;
              try {
                return er(xe(Ke));
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
      }, Rr, ei, Pn;
      Pn = {};
      function wr(x) {
        if (Rn.call(x, "ref")) {
          var L = Object.getOwnPropertyDescriptor(x, "ref").get;
          if (L && L.isReactWarning)
            return !1;
        }
        return x.ref !== void 0;
      }
      function ga(x) {
        if (Rn.call(x, "key")) {
          var L = Object.getOwnPropertyDescriptor(x, "key").get;
          if (L && L.isReactWarning)
            return !1;
        }
        return x.key !== void 0;
      }
      function ti(x, L) {
        var G = function() {
          Rr || (Rr = !0, Ce("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        G.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: G,
          configurable: !0
        });
      }
      function Ci(x, L) {
        var G = function() {
          ei || (ei = !0, Ce("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        G.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: G,
          configurable: !0
        });
      }
      function Se(x) {
        if (typeof x.ref == "string" && ve.current && x.__self && ve.current.stateNode !== x.__self) {
          var L = er(ve.current.type);
          Pn[L] || (Ce('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L, x.ref), Pn[L] = !0);
        }
      }
      var He = function(x, L, G, Z, me, Ke, xe) {
        var qe = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: p,
          // Built-in properties that belong on the element
          type: x,
          key: L,
          ref: G,
          props: xe,
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
          value: Z
        }), Object.defineProperty(qe, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: me
        }), Object.freeze && (Object.freeze(qe.props), Object.freeze(qe)), qe;
      };
      function gt(x, L, G) {
        var Z, me = {}, Ke = null, xe = null, qe = null, bt = null;
        if (L != null) {
          wr(L) && (xe = L.ref, Se(L)), ga(L) && (qr(L.key), Ke = "" + L.key), qe = L.__self === void 0 ? null : L.__self, bt = L.__source === void 0 ? null : L.__source;
          for (Z in L)
            Rn.call(L, Z) && !Gn.hasOwnProperty(Z) && (me[Z] = L[Z]);
        }
        var Ut = arguments.length - 2;
        if (Ut === 1)
          me.children = G;
        else if (Ut > 1) {
          for (var ln = Array(Ut), qt = 0; qt < Ut; qt++)
            ln[qt] = arguments[qt + 2];
          Object.freeze && Object.freeze(ln), me.children = ln;
        }
        if (x && x.defaultProps) {
          var St = x.defaultProps;
          for (Z in St)
            me[Z] === void 0 && (me[Z] = St[Z]);
        }
        if (Ke || xe) {
          var Zt = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          Ke && ti(me, Zt), xe && Ci(me, Zt);
        }
        return He(x, Ke, xe, qe, bt, ve.current, me);
      }
      function Yt(x, L) {
        var G = He(x.type, L, x.ref, x._self, x._source, x._owner, x.props);
        return G;
      }
      function rn(x, L, G) {
        if (x == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + x + ".");
        var Z, me = re({}, x.props), Ke = x.key, xe = x.ref, qe = x._self, bt = x._source, Ut = x._owner;
        if (L != null) {
          wr(L) && (xe = L.ref, Ut = ve.current), ga(L) && (qr(L.key), Ke = "" + L.key);
          var ln;
          x.type && x.type.defaultProps && (ln = x.type.defaultProps);
          for (Z in L)
            Rn.call(L, Z) && !Gn.hasOwnProperty(Z) && (L[Z] === void 0 && ln !== void 0 ? me[Z] = ln[Z] : me[Z] = L[Z]);
        }
        var qt = arguments.length - 2;
        if (qt === 1)
          me.children = G;
        else if (qt > 1) {
          for (var St = Array(qt), Zt = 0; Zt < qt; Zt++)
            St[Zt] = arguments[Zt + 2];
          me.children = St;
        }
        return He(x.type, Ke, xe, qe, bt, Ut, me);
      }
      function vn(x) {
        return typeof x == "object" && x !== null && x.$$typeof === p;
      }
      var un = ".", tr = ":";
      function an(x) {
        var L = /[=:]/g, G = {
          "=": "=0",
          ":": "=2"
        }, Z = x.replace(L, function(me) {
          return G[me];
        });
        return "$" + Z;
      }
      var Kt = !1, Qt = /\/+/g;
      function Sa(x) {
        return x.replace(Qt, "$&/");
      }
      function br(x, L) {
        return typeof x == "object" && x !== null && x.key != null ? (qr(x.key), an("" + x.key)) : L.toString(36);
      }
      function Aa(x, L, G, Z, me) {
        var Ke = typeof x;
        (Ke === "undefined" || Ke === "boolean") && (x = null);
        var xe = !1;
        if (x === null)
          xe = !0;
        else
          switch (Ke) {
            case "string":
            case "number":
              xe = !0;
              break;
            case "object":
              switch (x.$$typeof) {
                case p:
                case y:
                  xe = !0;
              }
          }
        if (xe) {
          var qe = x, bt = me(qe), Ut = Z === "" ? un + br(qe, 0) : Z;
          if (xn(bt)) {
            var ln = "";
            Ut != null && (ln = Sa(Ut) + "/"), Aa(bt, L, ln, "", function(Ud) {
              return Ud;
            });
          } else bt != null && (vn(bt) && (bt.key && (!qe || qe.key !== bt.key) && qr(bt.key), bt = Yt(
            bt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            G + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (bt.key && (!qe || qe.key !== bt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Sa("" + bt.key) + "/"
            ) : "") + Ut
          )), L.push(bt));
          return 1;
        }
        var qt, St, Zt = 0, mn = Z === "" ? un : Z + tr;
        if (xn(x))
          for (var Uo = 0; Uo < x.length; Uo++)
            qt = x[Uo], St = mn + br(qt, Uo), Zt += Aa(qt, L, G, St, me);
        else {
          var gu = ie(x);
          if (typeof gu == "function") {
            var eo = x;
            gu === eo.entries && (Kt || kt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Kt = !0);
            for (var Su = gu.call(eo), wl, Pd = 0; !(wl = Su.next()).done; )
              qt = wl.value, St = mn + br(qt, Pd++), Zt += Aa(qt, L, G, St, me);
          } else if (Ke === "object") {
            var Vc = String(x);
            throw new Error("Objects are not valid as a React child (found: " + (Vc === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : Vc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Zt;
      }
      function qi(x, L, G) {
        if (x == null)
          return x;
        var Z = [], me = 0;
        return Aa(x, Z, "", "", function(Ke) {
          return L.call(G, Ke, me++);
        }), Z;
      }
      function ml(x) {
        var L = 0;
        return qi(x, function() {
          L++;
        }), L;
      }
      function yl(x, L, G) {
        qi(x, function() {
          L.apply(this, arguments);
        }, G);
      }
      function Do(x) {
        return qi(x, function(L) {
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
        var G = !1, Z = !1, me = !1;
        {
          var Ke = {
            $$typeof: b,
            _context: L
          };
          Object.defineProperties(Ke, {
            Provider: {
              get: function() {
                return Z || (Z = !0, Ce("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), L.Provider;
              },
              set: function(xe) {
                L.Provider = xe;
              }
            },
            _currentValue: {
              get: function() {
                return L._currentValue;
              },
              set: function(xe) {
                L._currentValue = xe;
              }
            },
            _currentValue2: {
              get: function() {
                return L._currentValue2;
              },
              set: function(xe) {
                L._currentValue2 = xe;
              }
            },
            _threadCount: {
              get: function() {
                return L._threadCount;
              },
              set: function(xe) {
                L._threadCount = xe;
              }
            },
            Consumer: {
              get: function() {
                return G || (G = !0, Ce("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), L.Consumer;
              }
            },
            displayName: {
              get: function() {
                return L.displayName;
              },
              set: function(xe) {
                me || (kt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", xe), me = !0);
              }
            }
          }), L.Consumer = Ke;
        }
        return L._currentRenderer = null, L._currentRenderer2 = null, L;
      }
      var Ar = -1, Lr = 0, ur = 1, Ti = 2;
      function ni(x) {
        if (x._status === Ar) {
          var L = x._result, G = L();
          if (G.then(function(Ke) {
            if (x._status === Lr || x._status === Ar) {
              var xe = x;
              xe._status = ur, xe._result = Ke;
            }
          }, function(Ke) {
            if (x._status === Lr || x._status === Ar) {
              var xe = x;
              xe._status = Ti, xe._result = Ke;
            }
          }), x._status === Ar) {
            var Z = x;
            Z._status = Lr, Z._result = G;
          }
        }
        if (x._status === ur) {
          var me = x._result;
          return me === void 0 && Ce(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, me), "default" in me || Ce(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, me), me.default;
        } else
          throw x._result;
      }
      function xi(x) {
        var L = {
          // We use these fields to store the result.
          _status: Ar,
          _result: x
        }, G = {
          $$typeof: Y,
          _payload: L,
          _init: ni
        };
        {
          var Z, me;
          Object.defineProperties(G, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return Z;
              },
              set: function(Ke) {
                Ce("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Z = Ke, Object.defineProperty(G, "defaultProps", {
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
                Ce("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), me = Ke, Object.defineProperty(G, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return G;
      }
      function Ri(x) {
        x != null && x.$$typeof === P ? Ce("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof x != "function" ? Ce("forwardRef requires a render function but was given %s.", x === null ? "null" : typeof x) : x.length !== 0 && x.length !== 2 && Ce("forwardRef render functions accept exactly two parameters: props and ref. %s", x.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), x != null && (x.defaultProps != null || x.propTypes != null) && Ce("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
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
            set: function(Z) {
              G = Z, !x.name && !x.displayName && (x.displayName = Z);
            }
          });
        }
        return L;
      }
      var N;
      N = Symbol.for("react.module.reference");
      function le(x) {
        return !!(typeof x == "string" || typeof x == "function" || x === T || x === E || Et || x === v || x === _ || x === A || Ue || x === K || Oe || lt || tt || typeof x == "object" && x !== null && (x.$$typeof === Y || x.$$typeof === P || x.$$typeof === R || x.$$typeof === b || x.$$typeof === k || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        x.$$typeof === N || x.getModuleId !== void 0));
      }
      function Re(x, L) {
        le(x) || Ce("memo: The first argument must be a component. Instead received: %s", x === null ? "null" : typeof x);
        var G = {
          $$typeof: P,
          type: x,
          compare: L === void 0 ? null : L
        };
        {
          var Z;
          Object.defineProperty(G, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return Z;
            },
            set: function(me) {
              Z = me, !x.name && !x.displayName && (x.displayName = me);
            }
          });
        }
        return G;
      }
      function Pe() {
        var x = oe.current;
        return x === null && Ce(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), x;
      }
      function ft(x) {
        var L = Pe();
        if (x._context !== void 0) {
          var G = x._context;
          G.Consumer === x ? Ce("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : G.Provider === x && Ce("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return L.useContext(x);
      }
      function st(x) {
        var L = Pe();
        return L.useState(x);
      }
      function wt(x, L, G) {
        var Z = Pe();
        return Z.useReducer(x, L, G);
      }
      function xt(x) {
        var L = Pe();
        return L.useRef(x);
      }
      function wn(x, L) {
        var G = Pe();
        return G.useEffect(x, L);
      }
      function on(x, L) {
        var G = Pe();
        return G.useInsertionEffect(x, L);
      }
      function cn(x, L) {
        var G = Pe();
        return G.useLayoutEffect(x, L);
      }
      function cr(x, L) {
        var G = Pe();
        return G.useCallback(x, L);
      }
      function ri(x, L) {
        var G = Pe();
        return G.useMemo(x, L);
      }
      function ai(x, L, G) {
        var Z = Pe();
        return Z.useImperativeHandle(x, L, G);
      }
      function dt(x, L) {
        {
          var G = Pe();
          return G.useDebugValue(x, L);
        }
      }
      function vt() {
        var x = Pe();
        return x.useTransition();
      }
      function ii(x) {
        var L = Pe();
        return L.useDeferredValue(x);
      }
      function Sl() {
        var x = Pe();
        return x.useId();
      }
      function El(x, L, G) {
        var Z = Pe();
        return Z.useSyncExternalStore(x, L, G);
      }
      var ko = 0, ds, Mo, Zr, hu, Nr, Pc, Uc;
      function ps() {
      }
      ps.__reactDisabledLog = !0;
      function Oo() {
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
      function Ea() {
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
          ko < 0 && Ce("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var oi = Dt.ReactCurrentDispatcher, li;
      function hs(x, L, G) {
        {
          if (li === void 0)
            try {
              throw Error();
            } catch (me) {
              var Z = me.stack.trim().match(/\n( *(at )?)/);
              li = Z && Z[1] || "";
            }
          return `
` + li + x;
        }
      }
      var Cl = !1, Ao;
      {
        var vs = typeof WeakMap == "function" ? WeakMap : Map;
        Ao = new vs();
      }
      function ms(x, L) {
        if (!x || Cl)
          return "";
        {
          var G = Ao.get(x);
          if (G !== void 0)
            return G;
        }
        var Z;
        Cl = !0;
        var me = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ke;
        Ke = oi.current, oi.current = null, Oo();
        try {
          if (L) {
            var xe = function() {
              throw Error();
            };
            if (Object.defineProperty(xe.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(xe, []);
              } catch (mn) {
                Z = mn;
              }
              Reflect.construct(x, [], xe);
            } else {
              try {
                xe.call();
              } catch (mn) {
                Z = mn;
              }
              x.call(xe.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (mn) {
              Z = mn;
            }
            x();
          }
        } catch (mn) {
          if (mn && Z && typeof mn.stack == "string") {
            for (var qe = mn.stack.split(`
`), bt = Z.stack.split(`
`), Ut = qe.length - 1, ln = bt.length - 1; Ut >= 1 && ln >= 0 && qe[Ut] !== bt[ln]; )
              ln--;
            for (; Ut >= 1 && ln >= 0; Ut--, ln--)
              if (qe[Ut] !== bt[ln]) {
                if (Ut !== 1 || ln !== 1)
                  do
                    if (Ut--, ln--, ln < 0 || qe[Ut] !== bt[ln]) {
                      var qt = `
` + qe[Ut].replace(" at new ", " at ");
                      return x.displayName && qt.includes("<anonymous>") && (qt = qt.replace("<anonymous>", x.displayName)), typeof x == "function" && Ao.set(x, qt), qt;
                    }
                  while (Ut >= 1 && ln >= 0);
                break;
              }
          }
        } finally {
          Cl = !1, oi.current = Ke, Ea(), Error.prepareStackTrace = me;
        }
        var St = x ? x.displayName || x.name : "", Zt = St ? hs(St) : "";
        return typeof x == "function" && Ao.set(x, Zt), Zt;
      }
      function Zi(x, L, G) {
        return ms(x, !1);
      }
      function Ld(x) {
        var L = x.prototype;
        return !!(L && L.isReactComponent);
      }
      function Ji(x, L, G) {
        if (x == null)
          return "";
        if (typeof x == "function")
          return ms(x, Ld(x));
        if (typeof x == "string")
          return hs(x);
        switch (x) {
          case _:
            return hs("Suspense");
          case A:
            return hs("SuspenseList");
        }
        if (typeof x == "object")
          switch (x.$$typeof) {
            case k:
              return Zi(x.render);
            case P:
              return Ji(x.type, L, G);
            case Y: {
              var Z = x, me = Z._payload, Ke = Z._init;
              try {
                return Ji(Ke(me), L, G);
              } catch {
              }
            }
          }
        return "";
      }
      var zt = {}, ys = Dt.ReactDebugCurrentFrame;
      function Pt(x) {
        if (x) {
          var L = x._owner, G = Ji(x.type, x._source, L ? L.type : null);
          ys.setExtraStackFrame(G);
        } else
          ys.setExtraStackFrame(null);
      }
      function vu(x, L, G, Z, me) {
        {
          var Ke = Function.call.bind(Rn);
          for (var xe in x)
            if (Ke(x, xe)) {
              var qe = void 0;
              try {
                if (typeof x[xe] != "function") {
                  var bt = Error((Z || "React class") + ": " + G + " type `" + xe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[xe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw bt.name = "Invariant Violation", bt;
                }
                qe = x[xe](L, xe, Z, G, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ut) {
                qe = Ut;
              }
              qe && !(qe instanceof Error) && (Pt(me), Ce("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Z || "React class", G, xe, typeof qe), Pt(null)), qe instanceof Error && !(qe.message in zt) && (zt[qe.message] = !0, Pt(me), Ce("Failed %s type: %s", G, qe.message), Pt(null));
            }
        }
      }
      function wi(x) {
        if (x) {
          var L = x._owner, G = Ji(x.type, x._source, L ? L.type : null);
          Ne(G);
        } else
          Ne(null);
      }
      var ot;
      ot = !1;
      function gs() {
        if (ve.current) {
          var x = er(ve.current.type);
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
      function bi(x) {
        return x != null ? fr(x.__source) : "";
      }
      var Pr = {};
      function Di(x) {
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
          var G = Di(L);
          if (!Pr[G]) {
            Pr[G] = !0;
            var Z = "";
            x && x._owner && x._owner !== ve.current && (Z = " It was passed a child from " + er(x._owner.type) + "."), wi(x), Ce('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', G, Z), wi(null);
          }
        }
      }
      function Xt(x, L) {
        if (typeof x == "object") {
          if (xn(x))
            for (var G = 0; G < x.length; G++) {
              var Z = x[G];
              vn(Z) && fn(Z, L);
            }
          else if (vn(x))
            x._store && (x._store.validated = !0);
          else if (x) {
            var me = ie(x);
            if (typeof me == "function" && me !== x.entries)
              for (var Ke = me.call(x), xe; !(xe = Ke.next()).done; )
                vn(xe.value) && fn(xe.value, L);
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
          L.$$typeof === P))
            G = L.propTypes;
          else
            return;
          if (G) {
            var Z = er(L);
            vu(G, x.props, "prop", Z, x);
          } else if (L.PropTypes !== void 0 && !ot) {
            ot = !0;
            var me = er(L);
            Ce("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", me || "Unknown");
          }
          typeof L.getDefaultProps == "function" && !L.getDefaultProps.isReactClassApproved && Ce("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Kn(x) {
        {
          for (var L = Object.keys(x.props), G = 0; G < L.length; G++) {
            var Z = L[G];
            if (Z !== "children" && Z !== "key") {
              wi(x), Ce("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Z), wi(null);
              break;
            }
          }
          x.ref !== null && (wi(x), Ce("Invalid attribute `ref` supplied to `React.Fragment`."), wi(null));
        }
      }
      function Ur(x, L, G) {
        var Z = le(x);
        if (!Z) {
          var me = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (me += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ke = bi(L);
          Ke ? me += Ke : me += gs();
          var xe;
          x === null ? xe = "null" : xn(x) ? xe = "array" : x !== void 0 && x.$$typeof === p ? (xe = "<" + (er(x.type) || "Unknown") + " />", me = " Did you accidentally export a JSX literal instead of a component?") : xe = typeof x, Ce("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", xe, me);
        }
        var qe = gt.apply(this, arguments);
        if (qe == null)
          return qe;
        if (Z)
          for (var bt = 2; bt < arguments.length; bt++)
            Xt(arguments[bt], x);
        return x === T ? Kn(qe) : Lo(qe), qe;
      }
      var La = !1;
      function Tl(x) {
        var L = Ur.bind(null, x);
        return L.type = x, La || (La = !0, kt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(L, "type", {
          enumerable: !1,
          get: function() {
            return kt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: x
            }), x;
          }
        }), L;
      }
      function mu(x, L, G) {
        for (var Z = rn.apply(this, arguments), me = 2; me < arguments.length; me++)
          Xt(arguments[me], Z.type);
        return Lo(Z), Z;
      }
      function yu(x, L) {
        var G = ye.transition;
        ye.transition = {};
        var Z = ye.transition;
        ye.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          x();
        } finally {
          if (ye.transition = G, G === null && Z._updatedFibers) {
            var me = Z._updatedFibers.size;
            me > 10 && kt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), Z._updatedFibers.clear();
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
              No === !1 && (No = !0, typeof MessageChannel > "u" && Ce("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Ke = new MessageChannel();
              Ke.port1.onmessage = me, Ke.port2.postMessage(void 0);
            };
          }
        return xl(x);
      }
      var Na = 0, si = !1;
      function _i(x) {
        {
          var L = Na;
          Na++, ne.current === null && (ne.current = []);
          var G = ne.isBatchingLegacy, Z;
          try {
            if (ne.isBatchingLegacy = !0, Z = x(), !G && ne.didScheduleLegacyUpdate) {
              var me = ne.current;
              me !== null && (ne.didScheduleLegacyUpdate = !1, Po(me));
            }
          } catch (St) {
            throw Pa(L), St;
          } finally {
            ne.isBatchingLegacy = G;
          }
          if (Z !== null && typeof Z == "object" && typeof Z.then == "function") {
            var Ke = Z, xe = !1, qe = {
              then: function(St, Zt) {
                xe = !0, Ke.then(function(mn) {
                  Pa(L), Na === 0 ? Ss(mn, St, Zt) : St(mn);
                }, function(mn) {
                  Pa(L), Zt(mn);
                });
              }
            };
            return !si && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              xe || (si = !0, Ce("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), qe;
          } else {
            var bt = Z;
            if (Pa(L), Na === 0) {
              var Ut = ne.current;
              Ut !== null && (Po(Ut), ne.current = null);
              var ln = {
                then: function(St, Zt) {
                  ne.current === null ? (ne.current = [], Ss(bt, St, Zt)) : St(bt);
                }
              };
              return ln;
            } else {
              var qt = {
                then: function(St, Zt) {
                  St(bt);
                }
              };
              return qt;
            }
          }
        }
      }
      function Pa(x) {
        x !== Na - 1 && Ce("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Na = x;
      }
      function Ss(x, L, G) {
        {
          var Z = ne.current;
          if (Z !== null)
            try {
              Po(Z), Nd(function() {
                Z.length === 0 ? (ne.current = null, L(x)) : Ss(x, L, G);
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
          } catch (Z) {
            throw x = x.slice(L + 1), Z;
          } finally {
            Es = !1;
          }
        }
      }
      var Rl = Ur, Cs = mu, Ts = Tl, ui = {
        map: qi,
        forEach: yl,
        count: ml,
        toArray: Do,
        only: _o
      };
      l.Children = ui, l.Component = Je, l.Fragment = T, l.Profiler = E, l.PureComponent = Tt, l.StrictMode = v, l.Suspense = _, l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dt, l.act = _i, l.cloneElement = Cs, l.createContext = gl, l.createElement = Rl, l.createFactory = Ts, l.createRef = Nn, l.forwardRef = Ri, l.isValidElement = vn, l.lazy = xi, l.memo = Re, l.startTransition = yu, l.unstable_act = _i, l.useCallback = cr, l.useContext = ft, l.useDebugValue = dt, l.useDeferredValue = ii, l.useEffect = wn, l.useId = Sl, l.useImperativeHandle = ai, l.useInsertionEffect = on, l.useLayoutEffect = cn, l.useMemo = ri, l.useReducer = wt, l.useRef = xt, l.useState = st, l.useSyncExternalStore = El, l.useTransition = vt, l.version = c, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Bh, Bh.exports)), Bh.exports;
}
process.env.NODE_ENV === "production" ? ZE.exports = RL() : ZE.exports = wL();
var Ge = ZE.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lw;
function bL() {
  if (Lw) return zh;
  Lw = 1;
  var o = Ge, l = Symbol.for("react.element"), c = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, y = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(E, R, b) {
    var k, _ = {}, A = null, P = null;
    b !== void 0 && (A = "" + b), R.key !== void 0 && (A = "" + R.key), R.ref !== void 0 && (P = R.ref);
    for (k in R) p.call(R, k) && !T.hasOwnProperty(k) && (_[k] = R[k]);
    if (E && E.defaultProps) for (k in R = E.defaultProps, R) _[k] === void 0 && (_[k] = R[k]);
    return { $$typeof: l, type: E, key: A, ref: P, props: _, _owner: y.current };
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
var Nw;
function DL() {
  return Nw || (Nw = 1, process.env.NODE_ENV !== "production" && function() {
    var o = Ge, l = Symbol.for("react.element"), c = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), E = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), Y = Symbol.iterator, K = "@@iterator";
    function q(N) {
      if (N === null || typeof N != "object")
        return null;
      var le = Y && N[Y] || N[K];
      return typeof le == "function" ? le : null;
    }
    var te = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ie(N) {
      {
        for (var le = arguments.length, Re = new Array(le > 1 ? le - 1 : 0), Pe = 1; Pe < le; Pe++)
          Re[Pe - 1] = arguments[Pe];
        oe("error", N, Re);
      }
    }
    function oe(N, le, Re) {
      {
        var Pe = te.ReactDebugCurrentFrame, ft = Pe.getStackAddendum();
        ft !== "" && (le += "%s", Re = Re.concat([ft]));
        var st = Re.map(function(wt) {
          return String(wt);
        });
        st.unshift("Warning: " + le), Function.prototype.apply.call(console[N], console, st);
      }
    }
    var ye = !1, ne = !1, ve = !1, Ee = !1, De = !1, Ne;
    Ne = Symbol.for("react.module.reference");
    function Oe(N) {
      return !!(typeof N == "string" || typeof N == "function" || N === p || N === T || De || N === y || N === b || N === k || Ee || N === P || ye || ne || ve || typeof N == "object" && N !== null && (N.$$typeof === A || N.$$typeof === _ || N.$$typeof === v || N.$$typeof === E || N.$$typeof === R || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      N.$$typeof === Ne || N.getModuleId !== void 0));
    }
    function lt(N, le, Re) {
      var Pe = N.displayName;
      if (Pe)
        return Pe;
      var ft = le.displayName || le.name || "";
      return ft !== "" ? Re + "(" + ft + ")" : Re;
    }
    function tt(N) {
      return N.displayName || "Context";
    }
    function Ue(N) {
      if (N == null)
        return null;
      if (typeof N.tag == "number" && ie("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof N == "function")
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
            return tt(le) + ".Consumer";
          case v:
            var Re = N;
            return tt(Re._context) + ".Provider";
          case R:
            return lt(N, N.render, "ForwardRef");
          case _:
            var Pe = N.displayName || null;
            return Pe !== null ? Pe : Ue(N.type) || "Memo";
          case A: {
            var ft = N, st = ft._payload, wt = ft._init;
            try {
              return Ue(wt(st));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Et = Object.assign, Dt = 0, kt, Ce, de, Ve, ge, j, re;
    function nt() {
    }
    nt.__reactDisabledLog = !0;
    function Je() {
      {
        if (Dt === 0) {
          kt = console.log, Ce = console.info, de = console.warn, Ve = console.error, ge = console.group, j = console.groupCollapsed, re = console.groupEnd;
          var N = {
            configurable: !0,
            enumerable: !0,
            value: nt,
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
        Dt++;
      }
    }
    function Ct() {
      {
        if (Dt--, Dt === 0) {
          var N = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Et({}, N, {
              value: kt
            }),
            info: Et({}, N, {
              value: Ce
            }),
            warn: Et({}, N, {
              value: de
            }),
            error: Et({}, N, {
              value: Ve
            }),
            group: Et({}, N, {
              value: ge
            }),
            groupCollapsed: Et({}, N, {
              value: j
            }),
            groupEnd: Et({}, N, {
              value: re
            })
          });
        }
        Dt < 0 && ie("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var mt = te.ReactCurrentDispatcher, ht;
    function yt(N, le, Re) {
      {
        if (ht === void 0)
          try {
            throw Error();
          } catch (ft) {
            var Pe = ft.stack.trim().match(/\n( *(at )?)/);
            ht = Pe && Pe[1] || "";
          }
        return `
` + ht + N;
      }
    }
    var Tt = !1, Gt;
    {
      var Nn = typeof WeakMap == "function" ? WeakMap : Map;
      Gt = new Nn();
    }
    function Or(N, le) {
      if (!N || Tt)
        return "";
      {
        var Re = Gt.get(N);
        if (Re !== void 0)
          return Re;
      }
      var Pe;
      Tt = !0;
      var ft = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var st;
      st = mt.current, mt.current = null, Je();
      try {
        if (le) {
          var wt = function() {
            throw Error();
          };
          if (Object.defineProperty(wt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(wt, []);
            } catch (dt) {
              Pe = dt;
            }
            Reflect.construct(N, [], wt);
          } else {
            try {
              wt.call();
            } catch (dt) {
              Pe = dt;
            }
            N.call(wt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (dt) {
            Pe = dt;
          }
          N();
        }
      } catch (dt) {
        if (dt && Pe && typeof dt.stack == "string") {
          for (var xt = dt.stack.split(`
`), wn = Pe.stack.split(`
`), on = xt.length - 1, cn = wn.length - 1; on >= 1 && cn >= 0 && xt[on] !== wn[cn]; )
            cn--;
          for (; on >= 1 && cn >= 0; on--, cn--)
            if (xt[on] !== wn[cn]) {
              if (on !== 1 || cn !== 1)
                do
                  if (on--, cn--, cn < 0 || xt[on] !== wn[cn]) {
                    var cr = `
` + xt[on].replace(" at new ", " at ");
                    return N.displayName && cr.includes("<anonymous>") && (cr = cr.replace("<anonymous>", N.displayName)), typeof N == "function" && Gt.set(N, cr), cr;
                  }
                while (on >= 1 && cn >= 0);
              break;
            }
        }
      } finally {
        Tt = !1, mt.current = st, Ct(), Error.prepareStackTrace = ft;
      }
      var ri = N ? N.displayName || N.name : "", ai = ri ? yt(ri) : "";
      return typeof N == "function" && Gt.set(N, ai), ai;
    }
    function xn(N, le, Re) {
      return Or(N, !1);
    }
    function sr(N) {
      var le = N.prototype;
      return !!(le && le.isReactComponent);
    }
    function Wn(N, le, Re) {
      if (N == null)
        return "";
      if (typeof N == "function")
        return Or(N, sr(N));
      if (typeof N == "string")
        return yt(N);
      switch (N) {
        case b:
          return yt("Suspense");
        case k:
          return yt("SuspenseList");
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case R:
            return xn(N.render);
          case _:
            return Wn(N.type, le, Re);
          case A: {
            var Pe = N, ft = Pe._payload, st = Pe._init;
            try {
              return Wn(st(ft), le, Re);
            } catch {
            }
          }
        }
      return "";
    }
    var $n = Object.prototype.hasOwnProperty, qr = {}, Ei = te.ReactDebugCurrentFrame;
    function ya(N) {
      if (N) {
        var le = N._owner, Re = Wn(N.type, N._source, le ? le.type : null);
        Ei.setExtraStackFrame(Re);
      } else
        Ei.setExtraStackFrame(null);
    }
    function er(N, le, Re, Pe, ft) {
      {
        var st = Function.call.bind($n);
        for (var wt in N)
          if (st(N, wt)) {
            var xt = void 0;
            try {
              if (typeof N[wt] != "function") {
                var wn = Error((Pe || "React class") + ": " + Re + " type `" + wt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof N[wt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw wn.name = "Invariant Violation", wn;
              }
              xt = N[wt](le, wt, Pe, Re, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (on) {
              xt = on;
            }
            xt && !(xt instanceof Error) && (ya(ft), ie("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Pe || "React class", Re, wt, typeof xt), ya(null)), xt instanceof Error && !(xt.message in qr) && (qr[xt.message] = !0, ya(ft), ie("Failed %s type: %s", Re, xt.message), ya(null));
          }
      }
    }
    var Rn = Array.isArray;
    function Gn(N) {
      return Rn(N);
    }
    function Rr(N) {
      {
        var le = typeof Symbol == "function" && Symbol.toStringTag, Re = le && N[Symbol.toStringTag] || N.constructor.name || "Object";
        return Re;
      }
    }
    function ei(N) {
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
      if (ei(N))
        return ie("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rr(N)), Pn(N);
    }
    var ga = te.ReactCurrentOwner, ti = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ci, Se;
    function He(N) {
      if ($n.call(N, "ref")) {
        var le = Object.getOwnPropertyDescriptor(N, "ref").get;
        if (le && le.isReactWarning)
          return !1;
      }
      return N.ref !== void 0;
    }
    function gt(N) {
      if ($n.call(N, "key")) {
        var le = Object.getOwnPropertyDescriptor(N, "key").get;
        if (le && le.isReactWarning)
          return !1;
      }
      return N.key !== void 0;
    }
    function Yt(N, le) {
      typeof N.ref == "string" && ga.current;
    }
    function rn(N, le) {
      {
        var Re = function() {
          Ci || (Ci = !0, ie("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", le));
        };
        Re.isReactWarning = !0, Object.defineProperty(N, "key", {
          get: Re,
          configurable: !0
        });
      }
    }
    function vn(N, le) {
      {
        var Re = function() {
          Se || (Se = !0, ie("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", le));
        };
        Re.isReactWarning = !0, Object.defineProperty(N, "ref", {
          get: Re,
          configurable: !0
        });
      }
    }
    var un = function(N, le, Re, Pe, ft, st, wt) {
      var xt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: N,
        key: le,
        ref: Re,
        props: wt,
        // Record the component responsible for creating this element.
        _owner: st
      };
      return xt._store = {}, Object.defineProperty(xt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(xt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Pe
      }), Object.defineProperty(xt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ft
      }), Object.freeze && (Object.freeze(xt.props), Object.freeze(xt)), xt;
    };
    function tr(N, le, Re, Pe, ft) {
      {
        var st, wt = {}, xt = null, wn = null;
        Re !== void 0 && (wr(Re), xt = "" + Re), gt(le) && (wr(le.key), xt = "" + le.key), He(le) && (wn = le.ref, Yt(le, ft));
        for (st in le)
          $n.call(le, st) && !ti.hasOwnProperty(st) && (wt[st] = le[st]);
        if (N && N.defaultProps) {
          var on = N.defaultProps;
          for (st in on)
            wt[st] === void 0 && (wt[st] = on[st]);
        }
        if (xt || wn) {
          var cn = typeof N == "function" ? N.displayName || N.name || "Unknown" : N;
          xt && rn(wt, cn), wn && vn(wt, cn);
        }
        return un(N, xt, wn, ft, Pe, ga.current, wt);
      }
    }
    var an = te.ReactCurrentOwner, Kt = te.ReactDebugCurrentFrame;
    function Qt(N) {
      if (N) {
        var le = N._owner, Re = Wn(N.type, N._source, le ? le.type : null);
        Kt.setExtraStackFrame(Re);
      } else
        Kt.setExtraStackFrame(null);
    }
    var Sa;
    Sa = !1;
    function br(N) {
      return typeof N == "object" && N !== null && N.$$typeof === l;
    }
    function Aa() {
      {
        if (an.current) {
          var N = Ue(an.current.type);
          if (N)
            return `

Check the render method of \`` + N + "`.";
        }
        return "";
      }
    }
    function qi(N) {
      return "";
    }
    var ml = {};
    function yl(N) {
      {
        var le = Aa();
        if (!le) {
          var Re = typeof N == "string" ? N : N.displayName || N.name;
          Re && (le = `

Check the top-level render call using <` + Re + ">.");
        }
        return le;
      }
    }
    function Do(N, le) {
      {
        if (!N._store || N._store.validated || N.key != null)
          return;
        N._store.validated = !0;
        var Re = yl(le);
        if (ml[Re])
          return;
        ml[Re] = !0;
        var Pe = "";
        N && N._owner && N._owner !== an.current && (Pe = " It was passed a child from " + Ue(N._owner.type) + "."), Qt(N), ie('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Re, Pe), Qt(null);
      }
    }
    function _o(N, le) {
      {
        if (typeof N != "object")
          return;
        if (Gn(N))
          for (var Re = 0; Re < N.length; Re++) {
            var Pe = N[Re];
            br(Pe) && Do(Pe, le);
          }
        else if (br(N))
          N._store && (N._store.validated = !0);
        else if (N) {
          var ft = q(N);
          if (typeof ft == "function" && ft !== N.entries)
            for (var st = ft.call(N), wt; !(wt = st.next()).done; )
              br(wt.value) && Do(wt.value, le);
        }
      }
    }
    function gl(N) {
      {
        var le = N.type;
        if (le == null || typeof le == "string")
          return;
        var Re;
        if (typeof le == "function")
          Re = le.propTypes;
        else if (typeof le == "object" && (le.$$typeof === R || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        le.$$typeof === _))
          Re = le.propTypes;
        else
          return;
        if (Re) {
          var Pe = Ue(le);
          er(Re, N.props, "prop", Pe, N);
        } else if (le.PropTypes !== void 0 && !Sa) {
          Sa = !0;
          var ft = Ue(le);
          ie("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ft || "Unknown");
        }
        typeof le.getDefaultProps == "function" && !le.getDefaultProps.isReactClassApproved && ie("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ar(N) {
      {
        for (var le = Object.keys(N.props), Re = 0; Re < le.length; Re++) {
          var Pe = le[Re];
          if (Pe !== "children" && Pe !== "key") {
            Qt(N), ie("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Pe), Qt(null);
            break;
          }
        }
        N.ref !== null && (Qt(N), ie("Invalid attribute `ref` supplied to `React.Fragment`."), Qt(null));
      }
    }
    var Lr = {};
    function ur(N, le, Re, Pe, ft, st) {
      {
        var wt = Oe(N);
        if (!wt) {
          var xt = "";
          (N === void 0 || typeof N == "object" && N !== null && Object.keys(N).length === 0) && (xt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var wn = qi();
          wn ? xt += wn : xt += Aa();
          var on;
          N === null ? on = "null" : Gn(N) ? on = "array" : N !== void 0 && N.$$typeof === l ? (on = "<" + (Ue(N.type) || "Unknown") + " />", xt = " Did you accidentally export a JSX literal instead of a component?") : on = typeof N, ie("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", on, xt);
        }
        var cn = tr(N, le, Re, ft, st);
        if (cn == null)
          return cn;
        if (wt) {
          var cr = le.children;
          if (cr !== void 0)
            if (Pe)
              if (Gn(cr)) {
                for (var ri = 0; ri < cr.length; ri++)
                  _o(cr[ri], N);
                Object.freeze && Object.freeze(cr);
              } else
                ie("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _o(cr, N);
        }
        if ($n.call(le, "key")) {
          var ai = Ue(N), dt = Object.keys(le).filter(function(Sl) {
            return Sl !== "key";
          }), vt = dt.length > 0 ? "{key: someKey, " + dt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Lr[ai + vt]) {
            var ii = dt.length > 0 ? "{" + dt.join(": ..., ") + ": ...}" : "{}";
            ie(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, vt, ai, ii, ai), Lr[ai + vt] = !0;
          }
        }
        return N === p ? Ar(cn) : gl(cn), cn;
      }
    }
    function Ti(N, le, Re) {
      return ur(N, le, Re, !0);
    }
    function ni(N, le, Re) {
      return ur(N, le, Re, !1);
    }
    var xi = ni, Ri = Ti;
    Fh.Fragment = p, Fh.jsx = xi, Fh.jsxs = Ri;
  }()), Fh;
}
process.env.NODE_ENV === "production" ? qE.exports = bL() : qE.exports = DL();
var lr = qE.exports, JE = { exports: {} }, qa = {}, qy = { exports: {} }, UE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pw;
function _L() {
  return Pw || (Pw = 1, function(o) {
    function l(de, Ve) {
      var ge = de.length;
      de.push(Ve);
      e: for (; 0 < ge; ) {
        var j = ge - 1 >>> 1, re = de[j];
        if (0 < y(re, Ve)) de[j] = Ve, de[ge] = re, ge = j;
        else break e;
      }
    }
    function c(de) {
      return de.length === 0 ? null : de[0];
    }
    function p(de) {
      if (de.length === 0) return null;
      var Ve = de[0], ge = de.pop();
      if (ge !== Ve) {
        de[0] = ge;
        e: for (var j = 0, re = de.length, nt = re >>> 1; j < nt; ) {
          var Je = 2 * (j + 1) - 1, Ct = de[Je], mt = Je + 1, ht = de[mt];
          if (0 > y(Ct, ge)) mt < re && 0 > y(ht, Ct) ? (de[j] = ht, de[mt] = ge, j = mt) : (de[j] = Ct, de[Je] = ge, j = Je);
          else if (mt < re && 0 > y(ht, ge)) de[j] = ht, de[mt] = ge, j = mt;
          else break e;
        }
      }
      return Ve;
    }
    function y(de, Ve) {
      var ge = de.sortIndex - Ve.sortIndex;
      return ge !== 0 ? ge : de.id - Ve.id;
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
    var R = [], b = [], k = 1, _ = null, A = 3, P = !1, Y = !1, K = !1, q = typeof setTimeout == "function" ? setTimeout : null, te = typeof clearTimeout == "function" ? clearTimeout : null, ie = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function oe(de) {
      for (var Ve = c(b); Ve !== null; ) {
        if (Ve.callback === null) p(b);
        else if (Ve.startTime <= de) p(b), Ve.sortIndex = Ve.expirationTime, l(R, Ve);
        else break;
        Ve = c(b);
      }
    }
    function ye(de) {
      if (K = !1, oe(de), !Y) if (c(R) !== null) Y = !0, kt(ne);
      else {
        var Ve = c(b);
        Ve !== null && Ce(ye, Ve.startTime - de);
      }
    }
    function ne(de, Ve) {
      Y = !1, K && (K = !1, te(De), De = -1), P = !0;
      var ge = A;
      try {
        for (oe(Ve), _ = c(R); _ !== null && (!(_.expirationTime > Ve) || de && !lt()); ) {
          var j = _.callback;
          if (typeof j == "function") {
            _.callback = null, A = _.priorityLevel;
            var re = j(_.expirationTime <= Ve);
            Ve = o.unstable_now(), typeof re == "function" ? _.callback = re : _ === c(R) && p(R), oe(Ve);
          } else p(R);
          _ = c(R);
        }
        if (_ !== null) var nt = !0;
        else {
          var Je = c(b);
          Je !== null && Ce(ye, Je.startTime - Ve), nt = !1;
        }
        return nt;
      } finally {
        _ = null, A = ge, P = !1;
      }
    }
    var ve = !1, Ee = null, De = -1, Ne = 5, Oe = -1;
    function lt() {
      return !(o.unstable_now() - Oe < Ne);
    }
    function tt() {
      if (Ee !== null) {
        var de = o.unstable_now();
        Oe = de;
        var Ve = !0;
        try {
          Ve = Ee(!0, de);
        } finally {
          Ve ? Ue() : (ve = !1, Ee = null);
        }
      } else ve = !1;
    }
    var Ue;
    if (typeof ie == "function") Ue = function() {
      ie(tt);
    };
    else if (typeof MessageChannel < "u") {
      var Et = new MessageChannel(), Dt = Et.port2;
      Et.port1.onmessage = tt, Ue = function() {
        Dt.postMessage(null);
      };
    } else Ue = function() {
      q(tt, 0);
    };
    function kt(de) {
      Ee = de, ve || (ve = !0, Ue());
    }
    function Ce(de, Ve) {
      De = q(function() {
        de(o.unstable_now());
      }, Ve);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(de) {
      de.callback = null;
    }, o.unstable_continueExecution = function() {
      Y || P || (Y = !0, kt(ne));
    }, o.unstable_forceFrameRate = function(de) {
      0 > de || 125 < de ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ne = 0 < de ? Math.floor(1e3 / de) : 5;
    }, o.unstable_getCurrentPriorityLevel = function() {
      return A;
    }, o.unstable_getFirstCallbackNode = function() {
      return c(R);
    }, o.unstable_next = function(de) {
      switch (A) {
        case 1:
        case 2:
        case 3:
          var Ve = 3;
          break;
        default:
          Ve = A;
      }
      var ge = A;
      A = Ve;
      try {
        return de();
      } finally {
        A = ge;
      }
    }, o.unstable_pauseExecution = function() {
    }, o.unstable_requestPaint = function() {
    }, o.unstable_runWithPriority = function(de, Ve) {
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
      var ge = A;
      A = de;
      try {
        return Ve();
      } finally {
        A = ge;
      }
    }, o.unstable_scheduleCallback = function(de, Ve, ge) {
      var j = o.unstable_now();
      switch (typeof ge == "object" && ge !== null ? (ge = ge.delay, ge = typeof ge == "number" && 0 < ge ? j + ge : j) : ge = j, de) {
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
      return re = ge + re, de = { id: k++, callback: Ve, priorityLevel: de, startTime: ge, expirationTime: re, sortIndex: -1 }, ge > j ? (de.sortIndex = ge, l(b, de), c(R) === null && de === c(b) && (K ? (te(De), De = -1) : K = !0, Ce(ye, ge - j))) : (de.sortIndex = re, l(R, de), Y || P || (Y = !0, kt(ne))), de;
    }, o.unstable_shouldYield = lt, o.unstable_wrapCallback = function(de) {
      var Ve = A;
      return function() {
        var ge = A;
        A = Ve;
        try {
          return de.apply(this, arguments);
        } finally {
          A = ge;
        }
      };
    };
  }(UE)), UE;
}
var VE = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uw;
function kL() {
  return Uw || (Uw = 1, function(o) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var l = !1, c = 5;
      function p(Se, He) {
        var gt = Se.length;
        Se.push(He), v(Se, He, gt);
      }
      function y(Se) {
        return Se.length === 0 ? null : Se[0];
      }
      function T(Se) {
        if (Se.length === 0)
          return null;
        var He = Se[0], gt = Se.pop();
        return gt !== He && (Se[0] = gt, E(Se, gt, 0)), He;
      }
      function v(Se, He, gt) {
        for (var Yt = gt; Yt > 0; ) {
          var rn = Yt - 1 >>> 1, vn = Se[rn];
          if (R(vn, He) > 0)
            Se[rn] = He, Se[Yt] = vn, Yt = rn;
          else
            return;
        }
      }
      function E(Se, He, gt) {
        for (var Yt = gt, rn = Se.length, vn = rn >>> 1; Yt < vn; ) {
          var un = (Yt + 1) * 2 - 1, tr = Se[un], an = un + 1, Kt = Se[an];
          if (R(tr, He) < 0)
            an < rn && R(Kt, tr) < 0 ? (Se[Yt] = Kt, Se[an] = He, Yt = an) : (Se[Yt] = tr, Se[un] = He, Yt = un);
          else if (an < rn && R(Kt, He) < 0)
            Se[Yt] = Kt, Se[an] = He, Yt = an;
          else
            return;
        }
      }
      function R(Se, He) {
        var gt = Se.sortIndex - He.sortIndex;
        return gt !== 0 ? gt : Se.id - He.id;
      }
      var b = 1, k = 2, _ = 3, A = 4, P = 5;
      function Y(Se, He) {
      }
      var K = typeof performance == "object" && typeof performance.now == "function";
      if (K) {
        var q = performance;
        o.unstable_now = function() {
          return q.now();
        };
      } else {
        var te = Date, ie = te.now();
        o.unstable_now = function() {
          return te.now() - ie;
        };
      }
      var oe = 1073741823, ye = -1, ne = 250, ve = 5e3, Ee = 1e4, De = oe, Ne = [], Oe = [], lt = 1, tt = null, Ue = _, Et = !1, Dt = !1, kt = !1, Ce = typeof setTimeout == "function" ? setTimeout : null, de = typeof clearTimeout == "function" ? clearTimeout : null, Ve = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function ge(Se) {
        for (var He = y(Oe); He !== null; ) {
          if (He.callback === null)
            T(Oe);
          else if (He.startTime <= Se)
            T(Oe), He.sortIndex = He.expirationTime, p(Ne, He);
          else
            return;
          He = y(Oe);
        }
      }
      function j(Se) {
        if (kt = !1, ge(Se), !Dt)
          if (y(Ne) !== null)
            Dt = !0, Pn(re);
          else {
            var He = y(Oe);
            He !== null && wr(j, He.startTime - Se);
          }
      }
      function re(Se, He) {
        Dt = !1, kt && (kt = !1, ga()), Et = !0;
        var gt = Ue;
        try {
          var Yt;
          if (!l) return nt(Se, He);
        } finally {
          tt = null, Ue = gt, Et = !1;
        }
      }
      function nt(Se, He) {
        var gt = He;
        for (ge(gt), tt = y(Ne); tt !== null && !(tt.expirationTime > gt && (!Se || Ei())); ) {
          var Yt = tt.callback;
          if (typeof Yt == "function") {
            tt.callback = null, Ue = tt.priorityLevel;
            var rn = tt.expirationTime <= gt, vn = Yt(rn);
            gt = o.unstable_now(), typeof vn == "function" ? tt.callback = vn : tt === y(Ne) && T(Ne), ge(gt);
          } else
            T(Ne);
          tt = y(Ne);
        }
        if (tt !== null)
          return !0;
        var un = y(Oe);
        return un !== null && wr(j, un.startTime - gt), !1;
      }
      function Je(Se, He) {
        switch (Se) {
          case b:
          case k:
          case _:
          case A:
          case P:
            break;
          default:
            Se = _;
        }
        var gt = Ue;
        Ue = Se;
        try {
          return He();
        } finally {
          Ue = gt;
        }
      }
      function Ct(Se) {
        var He;
        switch (Ue) {
          case b:
          case k:
          case _:
            He = _;
            break;
          default:
            He = Ue;
            break;
        }
        var gt = Ue;
        Ue = He;
        try {
          return Se();
        } finally {
          Ue = gt;
        }
      }
      function mt(Se) {
        var He = Ue;
        return function() {
          var gt = Ue;
          Ue = He;
          try {
            return Se.apply(this, arguments);
          } finally {
            Ue = gt;
          }
        };
      }
      function ht(Se, He, gt) {
        var Yt = o.unstable_now(), rn;
        if (typeof gt == "object" && gt !== null) {
          var vn = gt.delay;
          typeof vn == "number" && vn > 0 ? rn = Yt + vn : rn = Yt;
        } else
          rn = Yt;
        var un;
        switch (Se) {
          case b:
            un = ye;
            break;
          case k:
            un = ne;
            break;
          case P:
            un = De;
            break;
          case A:
            un = Ee;
            break;
          case _:
          default:
            un = ve;
            break;
        }
        var tr = rn + un, an = {
          id: lt++,
          callback: He,
          priorityLevel: Se,
          startTime: rn,
          expirationTime: tr,
          sortIndex: -1
        };
        return rn > Yt ? (an.sortIndex = rn, p(Oe, an), y(Ne) === null && an === y(Oe) && (kt ? ga() : kt = !0, wr(j, rn - Yt))) : (an.sortIndex = tr, p(Ne, an), !Dt && !Et && (Dt = !0, Pn(re))), an;
      }
      function yt() {
      }
      function Tt() {
        !Dt && !Et && (Dt = !0, Pn(re));
      }
      function Gt() {
        return y(Ne);
      }
      function Nn(Se) {
        Se.callback = null;
      }
      function Or() {
        return Ue;
      }
      var xn = !1, sr = null, Wn = -1, $n = c, qr = -1;
      function Ei() {
        var Se = o.unstable_now() - qr;
        return !(Se < $n);
      }
      function ya() {
      }
      function er(Se) {
        if (Se < 0 || Se > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Se > 0 ? $n = Math.floor(1e3 / Se) : $n = c;
      }
      var Rn = function() {
        if (sr !== null) {
          var Se = o.unstable_now();
          qr = Se;
          var He = !0, gt = !0;
          try {
            gt = sr(He, Se);
          } finally {
            gt ? Gn() : (xn = !1, sr = null);
          }
        } else
          xn = !1;
      }, Gn;
      if (typeof Ve == "function")
        Gn = function() {
          Ve(Rn);
        };
      else if (typeof MessageChannel < "u") {
        var Rr = new MessageChannel(), ei = Rr.port2;
        Rr.port1.onmessage = Rn, Gn = function() {
          ei.postMessage(null);
        };
      } else
        Gn = function() {
          Ce(Rn, 0);
        };
      function Pn(Se) {
        sr = Se, xn || (xn = !0, Gn());
      }
      function wr(Se, He) {
        Wn = Ce(function() {
          Se(o.unstable_now());
        }, He);
      }
      function ga() {
        de(Wn), Wn = -1;
      }
      var ti = ya, Ci = null;
      o.unstable_IdlePriority = P, o.unstable_ImmediatePriority = b, o.unstable_LowPriority = A, o.unstable_NormalPriority = _, o.unstable_Profiling = Ci, o.unstable_UserBlockingPriority = k, o.unstable_cancelCallback = Nn, o.unstable_continueExecution = Tt, o.unstable_forceFrameRate = er, o.unstable_getCurrentPriorityLevel = Or, o.unstable_getFirstCallbackNode = Gt, o.unstable_next = Ct, o.unstable_pauseExecution = yt, o.unstable_requestPaint = ti, o.unstable_runWithPriority = Je, o.unstable_scheduleCallback = ht, o.unstable_shouldYield = Ei, o.unstable_wrapCallback = mt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(VE)), VE;
}
var Vw;
function o1() {
  return Vw || (Vw = 1, process.env.NODE_ENV === "production" ? qy.exports = _L() : qy.exports = kL()), qy.exports;
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
var zw;
function ML() {
  if (zw) return qa;
  zw = 1;
  var o = Ge, l = o1();
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
  function A(n) {
    return R.call(_, n) ? !0 : R.call(k, n) ? !1 : b.test(n) ? _[n] = !0 : (k[n] = !0, !1);
  }
  function P(n, r, s, f) {
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
  function Y(n, r, s, f) {
    if (r === null || typeof r > "u" || P(n, r, s, f)) return !0;
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
  function K(n, r, s, f, h, g, w) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = f, this.attributeNamespace = h, this.mustUseProperty = s, this.propertyName = n, this.type = r, this.sanitizeURL = g, this.removeEmptyString = w;
  }
  var q = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    q[n] = new K(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    q[r] = new K(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    q[n] = new K(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    q[n] = new K(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    q[n] = new K(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    q[n] = new K(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    q[n] = new K(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    q[n] = new K(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    q[n] = new K(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var te = /[\-:]([a-z])/g;
  function ie(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      te,
      ie
    );
    q[r] = new K(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(te, ie);
    q[r] = new K(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(te, ie);
    q[r] = new K(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    q[n] = new K(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), q.xlinkHref = new K("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    q[n] = new K(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function oe(n, r, s, f) {
    var h = q.hasOwnProperty(r) ? q[r] : null;
    (h !== null ? h.type !== 0 : f || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Y(r, s, h, f) && (s = null), f || h === null ? A(r) && (s === null ? n.removeAttribute(r) : n.setAttribute(r, "" + s)) : h.mustUseProperty ? n[h.propertyName] = s === null ? h.type === 3 ? !1 : "" : s : (r = h.attributeName, f = h.attributeNamespace, s === null ? n.removeAttribute(r) : (h = h.type, s = h === 3 || h === 4 && s === !0 ? "" : "" + s, f ? n.setAttributeNS(f, r, s) : n.setAttribute(r, s))));
  }
  var ye = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ne = Symbol.for("react.element"), ve = Symbol.for("react.portal"), Ee = Symbol.for("react.fragment"), De = Symbol.for("react.strict_mode"), Ne = Symbol.for("react.profiler"), Oe = Symbol.for("react.provider"), lt = Symbol.for("react.context"), tt = Symbol.for("react.forward_ref"), Ue = Symbol.for("react.suspense"), Et = Symbol.for("react.suspense_list"), Dt = Symbol.for("react.memo"), kt = Symbol.for("react.lazy"), Ce = Symbol.for("react.offscreen"), de = Symbol.iterator;
  function Ve(n) {
    return n === null || typeof n != "object" ? null : (n = de && n[de] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ge = Object.assign, j;
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
  var nt = !1;
  function Je(n, r) {
    if (!n || nt) return "";
    nt = !0;
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
        } catch (Q) {
          var f = Q;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (Q) {
          f = Q;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (Q) {
          f = Q;
        }
        n();
      }
    } catch (Q) {
      if (Q && f && typeof Q.stack == "string") {
        for (var h = Q.stack.split(`
`), g = f.stack.split(`
`), w = h.length - 1, O = g.length - 1; 1 <= w && 0 <= O && h[w] !== g[O]; ) O--;
        for (; 1 <= w && 0 <= O; w--, O--) if (h[w] !== g[O]) {
          if (w !== 1 || O !== 1)
            do
              if (w--, O--, 0 > O || h[w] !== g[O]) {
                var U = `
` + h[w].replace(" at new ", " at ");
                return n.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", n.displayName)), U;
              }
            while (1 <= w && 0 <= O);
          break;
        }
      }
    } finally {
      nt = !1, Error.prepareStackTrace = s;
    }
    return (n = n ? n.displayName || n.name : "") ? re(n) : "";
  }
  function Ct(n) {
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
  function mt(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Ee:
        return "Fragment";
      case ve:
        return "Portal";
      case Ne:
        return "Profiler";
      case De:
        return "StrictMode";
      case Ue:
        return "Suspense";
      case Et:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case lt:
        return (n.displayName || "Context") + ".Consumer";
      case Oe:
        return (n._context.displayName || "Context") + ".Provider";
      case tt:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Dt:
        return r = n.displayName || null, r !== null ? r : mt(n.type) || "Memo";
      case kt:
        r = n._payload, n = n._init;
        try {
          return mt(n(r));
        } catch {
        }
    }
    return null;
  }
  function ht(n) {
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
        return mt(r);
      case 8:
        return r === De ? "StrictMode" : "Mode";
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
  function yt(n) {
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
  function Tt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Gt(n) {
    var r = Tt(n) ? "checked" : "value", s = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), f = "" + n[r];
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
  function Or(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var s = r.getValue(), f = "";
    return n && (f = Tt(n) ? n.checked ? "true" : "false" : n.value), n = f, n !== s ? (r.setValue(n), !0) : !1;
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
    return ge({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: s ?? n._wrapperState.initialChecked });
  }
  function Wn(n, r) {
    var s = r.defaultValue == null ? "" : r.defaultValue, f = r.checked != null ? r.checked : r.defaultChecked;
    s = yt(r.value != null ? r.value : s), n._wrapperState = { initialChecked: f, initialValue: s, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function $n(n, r) {
    r = r.checked, r != null && oe(n, "checked", r, !1);
  }
  function qr(n, r) {
    $n(n, r);
    var s = yt(r.value), f = r.type;
    if (s != null) f === "number" ? (s === 0 && n.value === "" || n.value != s) && (n.value = "" + s) : n.value !== "" + s && (n.value = "" + s);
    else if (f === "submit" || f === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? ya(n, r.type, s) : r.hasOwnProperty("defaultValue") && ya(n, r.type, yt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Ei(n, r, s) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var f = r.type;
      if (!(f !== "submit" && f !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, s || r === n.value || (n.value = r), n.defaultValue = r;
    }
    s = n.name, s !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, s !== "" && (n.name = s);
  }
  function ya(n, r, s) {
    (r !== "number" || xn(n.ownerDocument) !== n) && (s == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + s && (n.defaultValue = "" + s));
  }
  var er = Array.isArray;
  function Rn(n, r, s, f) {
    if (n = n.options, r) {
      r = {};
      for (var h = 0; h < s.length; h++) r["$" + s[h]] = !0;
      for (s = 0; s < n.length; s++) h = r.hasOwnProperty("$" + n[s].value), n[s].selected !== h && (n[s].selected = h), h && f && (n[s].defaultSelected = !0);
    } else {
      for (s = "" + yt(s), r = null, h = 0; h < n.length; h++) {
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
    return ge({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
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
    n._wrapperState = { initialValue: yt(s) };
  }
  function ei(n, r) {
    var s = yt(r.value), f = yt(r.defaultValue);
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
  function ga(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? wr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var ti, Ci = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, s, f, h) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, s, f, h);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (ti = ti || document.createElement("div"), ti.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = ti.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function Se(n, r) {
    if (r) {
      var s = n.firstChild;
      if (s && s === n.lastChild && s.nodeType === 3) {
        s.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var He = {
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
  }, gt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(He).forEach(function(n) {
    gt.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), He[r] = He[n];
    });
  });
  function Yt(n, r, s) {
    return r == null || typeof r == "boolean" || r === "" ? "" : s || typeof r != "number" || r === 0 || He.hasOwnProperty(n) && He[n] ? ("" + r).trim() : r + "px";
  }
  function rn(n, r) {
    n = n.style;
    for (var s in r) if (r.hasOwnProperty(s)) {
      var f = s.indexOf("--") === 0, h = Yt(s, r[s], f);
      s === "float" && (s = "cssFloat"), f ? n.setProperty(s, h) : n[s] = h;
    }
  }
  var vn = ge({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
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
  var Qt = null, Sa = null, br = null;
  function Aa(n) {
    if (n = We(n)) {
      if (typeof Qt != "function") throw Error(c(280));
      var r = n.stateNode;
      r && (r = yn(r), Qt(n.stateNode, n.type, r));
    }
  }
  function qi(n) {
    Sa ? br ? br.push(n) : br = [n] : Sa = n;
  }
  function ml() {
    if (Sa) {
      var n = Sa, r = br;
      if (br = Sa = null, Aa(n), r) for (n = 0; n < r.length; n++) Aa(r[n]);
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
      _o = !1, (Sa !== null || br !== null) && (Do(), ml());
    }
  }
  function Ar(n, r) {
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
  function Ti(n, r, s, f, h, g, w, O, U) {
    var Q = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(s, Q);
    } catch (ce) {
      this.onError(ce);
    }
  }
  var ni = !1, xi = null, Ri = !1, N = null, le = { onError: function(n) {
    ni = !0, xi = n;
  } };
  function Re(n, r, s, f, h, g, w, O, U) {
    ni = !1, xi = null, Ti.apply(le, arguments);
  }
  function Pe(n, r, s, f, h, g, w, O, U) {
    if (Re.apply(this, arguments), ni) {
      if (ni) {
        var Q = xi;
        ni = !1, xi = null;
      } else throw Error(c(198));
      Ri || (Ri = !0, N = Q);
    }
  }
  function ft(n) {
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
  function st(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function wt(n) {
    if (ft(n) !== n) throw Error(c(188));
  }
  function xt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = ft(n), r === null) throw Error(c(188));
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
          if (g === s) return wt(h), n;
          if (g === f) return wt(h), r;
          g = g.sibling;
        }
        throw Error(c(188));
      }
      if (s.return !== f.return) s = h, f = g;
      else {
        for (var w = !1, O = h.child; O; ) {
          if (O === s) {
            w = !0, s = h, f = g;
            break;
          }
          if (O === f) {
            w = !0, f = h, s = g;
            break;
          }
          O = O.sibling;
        }
        if (!w) {
          for (O = g.child; O; ) {
            if (O === s) {
              w = !0, s = g, f = h;
              break;
            }
            if (O === f) {
              w = !0, f = g, s = h;
              break;
            }
            O = O.sibling;
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
    return n = xt(n), n !== null ? on(n) : null;
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
  var cn = l.unstable_scheduleCallback, cr = l.unstable_cancelCallback, ri = l.unstable_shouldYield, ai = l.unstable_requestPaint, dt = l.unstable_now, vt = l.unstable_getCurrentPriorityLevel, ii = l.unstable_ImmediatePriority, Sl = l.unstable_UserBlockingPriority, El = l.unstable_NormalPriority, ko = l.unstable_LowPriority, ds = l.unstable_IdlePriority, Mo = null, Zr = null;
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
  var Oo = 64, Ea = 4194304;
  function oi(n) {
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
  function li(n, r) {
    var s = n.pendingLanes;
    if (s === 0) return 0;
    var f = 0, h = n.suspendedLanes, g = n.pingedLanes, w = s & 268435455;
    if (w !== 0) {
      var O = w & ~h;
      O !== 0 ? f = oi(O) : (g &= w, g !== 0 && (f = oi(g)));
    } else w = s & ~h, w !== 0 ? f = oi(w) : g !== 0 && (f = oi(g));
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
      var w = 31 - Nr(g), O = 1 << w, U = h[w];
      U === -1 ? (!(O & s) || O & f) && (h[w] = hs(O, r)) : U <= r && (n.expiredLanes |= O), g &= ~O;
    }
  }
  function Ao(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function vs() {
    var n = Oo;
    return Oo <<= 1, !(Oo & 4194240) && (Oo = 64), n;
  }
  function ms(n) {
    for (var r = [], s = 0; 31 > s; s++) r.push(n);
    return r;
  }
  function Zi(n, r, s) {
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
  function Ji(n, r) {
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
  var Pt, vu, wi, ot, gs, fr = !1, bi = [], Pr = null, Di = null, fn = null, Xt = /* @__PURE__ */ new Map(), Lo = /* @__PURE__ */ new Map(), Kn = [], Ur = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function La(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Pr = null;
        break;
      case "dragenter":
      case "dragleave":
        Di = null;
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
        return Di = Tl(Di, n, r, s, f, h), !0;
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
    var r = Ol(n.target);
    if (r !== null) {
      var s = ft(r);
      if (s !== null) {
        if (r = s.tag, r === 13) {
          if (r = st(s), r !== null) {
            n.blockedOn = r, gs(n.priority, function() {
              wi(s);
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
    fr = !1, Pr !== null && No(Pr) && (Pr = null), Di !== null && No(Di) && (Di = null), fn !== null && No(fn) && (fn = null), Xt.forEach(xl), Lo.forEach(xl);
  }
  function Na(n, r) {
    n.blockedOn === r && (n.blockedOn = null, fr || (fr = !0, l.unstable_scheduleCallback(l.unstable_NormalPriority, Nd)));
  }
  function si(n) {
    function r(h) {
      return Na(h, n);
    }
    if (0 < bi.length) {
      Na(bi[0], n);
      for (var s = 1; s < bi.length; s++) {
        var f = bi[s];
        f.blockedOn === n && (f.blockedOn = null);
      }
    }
    for (Pr !== null && Na(Pr, n), Di !== null && Na(Di, n), fn !== null && Na(fn, n), Xt.forEach(r), Lo.forEach(r), s = 0; s < Kn.length; s++) f = Kn[s], f.blockedOn === n && (f.blockedOn = null);
    for (; 0 < Kn.length && (s = Kn[0], s.blockedOn === null); ) yu(s), s.blockedOn === null && Kn.shift();
  }
  var _i = ye.ReactCurrentBatchConfig, Pa = !0;
  function Ss(n, r, s, f) {
    var h = zt, g = _i.transition;
    _i.transition = null;
    try {
      zt = 1, Po(n, r, s, f);
    } finally {
      zt = h, _i.transition = g;
    }
  }
  function Es(n, r, s, f) {
    var h = zt, g = _i.transition;
    _i.transition = null;
    try {
      zt = 4, Po(n, r, s, f);
    } finally {
      zt = h, _i.transition = g;
    }
  }
  function Po(n, r, s, f) {
    if (Pa) {
      var h = Cs(n, r, s, f);
      if (h === null) Kc(n, r, f, Rl, s), La(n, f);
      else if (mu(h, n, r, s, f)) f.stopPropagation();
      else if (La(n, f), r & 4 && -1 < Ur.indexOf(n)) {
        for (; h !== null; ) {
          var g = We(h);
          if (g !== null && Pt(g), g = Cs(n, r, s, f), g === null && Kc(n, r, f, Rl, s), g === h) break;
          h = g;
        }
        h !== null && f.stopPropagation();
      } else Kc(n, r, f, null, s);
    }
  }
  var Rl = null;
  function Cs(n, r, s, f) {
    if (Rl = null, n = Kt(f), n = Ol(n), n !== null) if (r = ft(n), r === null) n = null;
    else if (s = r.tag, s === 13) {
      if (n = st(r), n !== null) return n;
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
        switch (vt()) {
          case ii:
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
  var ui = null, x = null, L = null;
  function G() {
    if (L) return L;
    var n, r = x, s = r.length, f, h = "value" in ui ? ui.value : ui.textContent, g = h.length;
    for (n = 0; n < s && r[n] === h[n]; n++) ;
    var w = s - n;
    for (f = 1; f <= w && r[s - f] === h[g - f]; f++) ;
    return L = h.slice(n, 1 < f ? 1 - f : void 0);
  }
  function Z(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function me() {
    return !0;
  }
  function Ke() {
    return !1;
  }
  function xe(n) {
    function r(s, f, h, g, w) {
      this._reactName = s, this._targetInst = h, this.type = f, this.nativeEvent = g, this.target = w, this.currentTarget = null;
      for (var O in n) n.hasOwnProperty(O) && (s = n[O], this[O] = s ? s(g) : g[O]);
      return this.isDefaultPrevented = (g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === !1) ? me : Ke, this.isPropagationStopped = Ke, this;
    }
    return ge(r.prototype, { preventDefault: function() {
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
  }, defaultPrevented: 0, isTrusted: 0 }, bt = xe(qe), Ut = ge({}, qe, { view: 0, detail: 0 }), ln = xe(Ut), qt, St, Zt, mn = ge({}, Ut, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Fd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Zt && (Zt && n.type === "mousemove" ? (qt = n.screenX - Zt.screenX, St = n.screenY - Zt.screenY) : St = qt = 0, Zt = n), qt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : St;
  } }), Uo = xe(mn), gu = ge({}, mn, { dataTransfer: 0 }), eo = xe(gu), Su = ge({}, Ut, { relatedTarget: 0 }), wl = xe(Su), Pd = ge({}, qe, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Vc = xe(Pd), Ud = ge({}, qe, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), ov = xe(Ud), Vd = ge({}, qe, { data: 0 }), zd = xe(Vd), lv = {
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
  }, sv = {
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
  }, Eg = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function to(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Eg[n]) ? !!r[n] : !1;
  }
  function Fd() {
    return to;
  }
  var jd = ge({}, Ut, { key: function(n) {
    if (n.key) {
      var r = lv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = Z(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? sv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Fd, charCode: function(n) {
    return n.type === "keypress" ? Z(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Z(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Bd = xe(jd), Hd = ge({}, mn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), uv = xe(Hd), zc = ge({}, Ut, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Fd }), cv = xe(zc), Jr = ge({}, qe, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), no = xe(Jr), Un = ge({}, mn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ro = xe(Un), Id = [9, 13, 27, 32], xs = E && "CompositionEvent" in window, Eu = null;
  E && "documentMode" in document && (Eu = document.documentMode);
  var Cu = E && "TextEvent" in window && !Eu, fv = E && (!xs || Eu && 8 < Eu && 11 >= Eu), dv = " ", Fc = !1;
  function pv(n, r) {
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
  function hv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Rs = !1;
  function vv(n, r) {
    switch (n) {
      case "compositionend":
        return hv(r);
      case "keypress":
        return r.which !== 32 ? null : (Fc = !0, dv);
      case "textInput":
        return n = r.data, n === dv && Fc ? null : n;
      default:
        return null;
    }
  }
  function Cg(n, r) {
    if (Rs) return n === "compositionend" || !xs && pv(n, r) ? (n = G(), L = x = ui = null, Rs = !1, n) : null;
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
        return fv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Tg = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function mv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Tg[n.type] : r === "textarea";
  }
  function Yd(n, r, s, f) {
    qi(f), r = Du(r, "onChange"), 0 < r.length && (s = new bt("onChange", "change", null, s, f), n.push({ event: s, listeners: r }));
  }
  var ki = null, bl = null;
  function yv(n) {
    kl(n, 0);
  }
  function Tu(n) {
    var r = fi(n);
    if (Or(r)) return n;
  }
  function xg(n, r) {
    if (n === "change") return r;
  }
  var gv = !1;
  if (E) {
    var Wd;
    if (E) {
      var $d = "oninput" in document;
      if (!$d) {
        var Sv = document.createElement("div");
        Sv.setAttribute("oninput", "return;"), $d = typeof Sv.oninput == "function";
      }
      Wd = $d;
    } else Wd = !1;
    gv = Wd && (!document.documentMode || 9 < document.documentMode);
  }
  function Ev() {
    ki && (ki.detachEvent("onpropertychange", Cv), bl = ki = null);
  }
  function Cv(n) {
    if (n.propertyName === "value" && Tu(bl)) {
      var r = [];
      Yd(r, bl, n, Kt(n)), gl(yv, r);
    }
  }
  function Rg(n, r, s) {
    n === "focusin" ? (Ev(), ki = r, bl = s, ki.attachEvent("onpropertychange", Cv)) : n === "focusout" && Ev();
  }
  function Tv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Tu(bl);
  }
  function wg(n, r) {
    if (n === "click") return Tu(r);
  }
  function xv(n, r) {
    if (n === "input" || n === "change") return Tu(r);
  }
  function bg(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ci = typeof Object.is == "function" ? Object.is : bg;
  function xu(n, r) {
    if (ci(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var s = Object.keys(n), f = Object.keys(r);
    if (s.length !== f.length) return !1;
    for (f = 0; f < s.length; f++) {
      var h = s[f];
      if (!R.call(r, h) || !ci(n[h], r[h])) return !1;
    }
    return !0;
  }
  function Rv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function jc(n, r) {
    var s = Rv(n);
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
      s = Rv(s);
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
  var Dg = E && "documentMode" in document && 11 >= document.documentMode, bs = null, Gd = null, wu = null, Kd = !1;
  function Qd(n, r, s) {
    var f = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    Kd || bs == null || bs !== xn(f) || (f = bs, "selectionStart" in f && Bc(f) ? f = { start: f.selectionStart, end: f.selectionEnd } : (f = (f.ownerDocument && f.ownerDocument.defaultView || window).getSelection(), f = { anchorNode: f.anchorNode, anchorOffset: f.anchorOffset, focusNode: f.focusNode, focusOffset: f.focusOffset }), wu && xu(wu, f) || (wu = f, f = Du(Gd, "onSelect"), 0 < f.length && (r = new bt("onSelect", "select", null, r, s), n.push({ event: r, listeners: f }), r.target = bs)));
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
  var wv = Ic("animationend"), bv = Ic("animationiteration"), Dv = Ic("animationstart"), _v = Ic("transitionend"), qd = /* @__PURE__ */ new Map(), Yc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ua(n, r) {
    qd.set(n, r), T(r, [n]);
  }
  for (var Zd = 0; Zd < Yc.length; Zd++) {
    var _l = Yc[Zd], _g = _l.toLowerCase(), kg = _l[0].toUpperCase() + _l.slice(1);
    Ua(_g, "on" + kg);
  }
  Ua(wv, "onAnimationEnd"), Ua(bv, "onAnimationIteration"), Ua(Dv, "onAnimationStart"), Ua("dblclick", "onDoubleClick"), Ua("focusin", "onFocus"), Ua("focusout", "onBlur"), Ua(_v, "onTransitionEnd"), v("onMouseEnter", ["mouseout", "mouseover"]), v("onMouseLeave", ["mouseout", "mouseover"]), v("onPointerEnter", ["pointerout", "pointerover"]), v("onPointerLeave", ["pointerout", "pointerover"]), T("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), T("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), T("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), T("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), T("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), T("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var bu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Jd = new Set("cancel close invalid load scroll toggle".split(" ").concat(bu));
  function Wc(n, r, s) {
    var f = n.type || "unknown-event";
    n.currentTarget = s, Pe(f, r, void 0, n), n.currentTarget = null;
  }
  function kl(n, r) {
    r = (r & 4) !== 0;
    for (var s = 0; s < n.length; s++) {
      var f = n[s], h = f.event;
      f = f.listeners;
      e: {
        var g = void 0;
        if (r) for (var w = f.length - 1; 0 <= w; w--) {
          var O = f[w], U = O.instance, Q = O.currentTarget;
          if (O = O.listener, U !== g && h.isPropagationStopped()) break e;
          Wc(h, O, Q), g = U;
        }
        else for (w = 0; w < f.length; w++) {
          if (O = f[w], U = O.instance, Q = O.currentTarget, O = O.listener, U !== g && h.isPropagationStopped()) break e;
          Wc(h, O, Q), g = U;
        }
      }
    }
    if (Ri) throw n = N, Ri = !1, N = null, n;
  }
  function Wt(n, r) {
    var s = r[Mu];
    s === void 0 && (s = r[Mu] = /* @__PURE__ */ new Set());
    var f = n + "__bubble";
    s.has(f) || (kv(r, n, 2, !1), s.add(f));
  }
  function $c(n, r, s) {
    var f = 0;
    r && (f |= 4), kv(s, n, f, r);
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
  function kv(n, r, s, f) {
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
        var O = f.stateNode.containerInfo;
        if (O === h || O.nodeType === 8 && O.parentNode === h) break;
        if (w === 4) for (w = f.return; w !== null; ) {
          var U = w.tag;
          if ((U === 3 || U === 4) && (U = w.stateNode.containerInfo, U === h || U.nodeType === 8 && U.parentNode === h)) return;
          w = w.return;
        }
        for (; O !== null; ) {
          if (w = Ol(O), w === null) return;
          if (U = w.tag, U === 5 || U === 6) {
            f = g = w;
            continue e;
          }
          O = O.parentNode;
        }
      }
      f = f.return;
    }
    gl(function() {
      var Q = g, ce = Kt(s), pe = [];
      e: {
        var ue = qd.get(n);
        if (ue !== void 0) {
          var ke = bt, ze = n;
          switch (n) {
            case "keypress":
              if (Z(s) === 0) break e;
            case "keydown":
            case "keyup":
              ke = Bd;
              break;
            case "focusin":
              ze = "focus", ke = wl;
              break;
            case "focusout":
              ze = "blur", ke = wl;
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
              ke = cv;
              break;
            case wv:
            case bv:
            case Dv:
              ke = Vc;
              break;
            case _v:
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
              ke = ov;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ke = uv;
          }
          var Be = (r & 4) !== 0, Mn = !Be && n === "scroll", B = Be ? ue !== null ? ue + "Capture" : null : ue;
          Be = [];
          for (var z = Q, W; z !== null; ) {
            W = z;
            var fe = W.stateNode;
            if (W.tag === 5 && fe !== null && (W = fe, B !== null && (fe = Ar(z, B), fe != null && Be.push(_s(z, fe, W)))), Mn) break;
            z = z.return;
          }
          0 < Be.length && (ue = new ke(ue, ze, null, s, ce), pe.push({ event: ue, listeners: Be }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ue = n === "mouseover" || n === "pointerover", ke = n === "mouseout" || n === "pointerout", ue && s !== an && (ze = s.relatedTarget || s.fromElement) && (Ol(ze) || ze[ao])) break e;
          if ((ke || ue) && (ue = ce.window === ce ? ce : (ue = ce.ownerDocument) ? ue.defaultView || ue.parentWindow : window, ke ? (ze = s.relatedTarget || s.toElement, ke = Q, ze = ze ? Ol(ze) : null, ze !== null && (Mn = ft(ze), ze !== Mn || ze.tag !== 5 && ze.tag !== 6) && (ze = null)) : (ke = null, ze = Q), ke !== ze)) {
            if (Be = Uo, fe = "onMouseLeave", B = "onMouseEnter", z = "mouse", (n === "pointerout" || n === "pointerover") && (Be = uv, fe = "onPointerLeave", B = "onPointerEnter", z = "pointer"), Mn = ke == null ? ue : fi(ke), W = ze == null ? ue : fi(ze), ue = new Be(fe, z + "leave", ke, s, ce), ue.target = Mn, ue.relatedTarget = W, fe = null, Ol(ce) === Q && (Be = new Be(B, z + "enter", ze, s, ce), Be.target = W, Be.relatedTarget = Mn, fe = Be), Mn = fe, ke && ze) t: {
              for (Be = ke, B = ze, z = 0, W = Be; W; W = zo(W)) z++;
              for (W = 0, fe = B; fe; fe = zo(fe)) W++;
              for (; 0 < z - W; ) Be = zo(Be), z--;
              for (; 0 < W - z; ) B = zo(B), W--;
              for (; z--; ) {
                if (Be === B || B !== null && Be === B.alternate) break t;
                Be = zo(Be), B = zo(B);
              }
              Be = null;
            }
            else Be = null;
            ke !== null && Mv(pe, ue, ke, Be, !1), ze !== null && Mn !== null && Mv(pe, Mn, ze, Be, !0);
          }
        }
        e: {
          if (ue = Q ? fi(Q) : window, ke = ue.nodeName && ue.nodeName.toLowerCase(), ke === "select" || ke === "input" && ue.type === "file") var Fe = xg;
          else if (mv(ue)) if (gv) Fe = xv;
          else {
            Fe = Tv;
            var Xe = Rg;
          }
          else (ke = ue.nodeName) && ke.toLowerCase() === "input" && (ue.type === "checkbox" || ue.type === "radio") && (Fe = wg);
          if (Fe && (Fe = Fe(n, Q))) {
            Yd(pe, Fe, s, ce);
            break e;
          }
          Xe && Xe(n, ue, Q), n === "focusout" && (Xe = ue._wrapperState) && Xe.controlled && ue.type === "number" && ya(ue, "number", ue.value);
        }
        switch (Xe = Q ? fi(Q) : window, n) {
          case "focusin":
            (mv(Xe) || Xe.contentEditable === "true") && (bs = Xe, Gd = Q, wu = null);
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
            if (Dg) break;
          case "keydown":
          case "keyup":
            Qd(pe, s, ce);
        }
        var Ze;
        if (xs) e: {
          switch (n) {
            case "compositionstart":
              var at = "onCompositionStart";
              break e;
            case "compositionend":
              at = "onCompositionEnd";
              break e;
            case "compositionupdate":
              at = "onCompositionUpdate";
              break e;
          }
          at = void 0;
        }
        else Rs ? pv(n, s) && (at = "onCompositionEnd") : n === "keydown" && s.keyCode === 229 && (at = "onCompositionStart");
        at && (fv && s.locale !== "ko" && (Rs || at !== "onCompositionStart" ? at === "onCompositionEnd" && Rs && (Ze = G()) : (ui = ce, x = "value" in ui ? ui.value : ui.textContent, Rs = !0)), Xe = Du(Q, at), 0 < Xe.length && (at = new zd(at, n, null, s, ce), pe.push({ event: at, listeners: Xe }), Ze ? at.data = Ze : (Ze = hv(s), Ze !== null && (at.data = Ze)))), (Ze = Cu ? vv(n, s) : Cg(n, s)) && (Q = Du(Q, "onBeforeInput"), 0 < Q.length && (ce = new zd("onBeforeInput", "beforeinput", null, s, ce), pe.push({ event: ce, listeners: Q }), ce.data = Ze));
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
      h.tag === 5 && g !== null && (h = g, g = Ar(n, s), g != null && f.unshift(_s(n, g, h)), g = Ar(n, r), g != null && f.push(_s(n, g, h))), n = n.return;
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
  function Mv(n, r, s, f, h) {
    for (var g = r._reactName, w = []; s !== null && s !== f; ) {
      var O = s, U = O.alternate, Q = O.stateNode;
      if (U !== null && U === f) break;
      O.tag === 5 && Q !== null && (O = Q, h ? (U = Ar(s, g), U != null && w.unshift(_s(s, U, O))) : h || (U = Ar(s, g), U != null && w.push(_s(s, U, O)))), s = s.return;
    }
    w.length !== 0 && n.push({ event: r, listeners: w });
  }
  var Ov = /\r\n?/g, Mg = /\u0000|\uFFFD/g;
  function Av(n) {
    return (typeof n == "string" ? n : "" + n).replace(Ov, `
`).replace(Mg, "");
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
  var qc = typeof setTimeout == "function" ? setTimeout : void 0, ep = typeof clearTimeout == "function" ? clearTimeout : void 0, Lv = typeof Promise == "function" ? Promise : void 0, ks = typeof queueMicrotask == "function" ? queueMicrotask : typeof Lv < "u" ? function(n) {
    return Lv.resolve(null).then(n).catch(Zc);
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
          n.removeChild(h), si(r);
          return;
        }
        f--;
      } else s !== "$" && s !== "$?" && s !== "$!" || f++;
      s = h;
    } while (s);
    si(r);
  }
  function Mi(n) {
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
  function Nv(n) {
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
  var jo = Math.random().toString(36).slice(2), Oi = "__reactFiber$" + jo, ku = "__reactProps$" + jo, ao = "__reactContainer$" + jo, Mu = "__reactEvents$" + jo, Os = "__reactListeners$" + jo, Og = "__reactHandles$" + jo;
  function Ol(n) {
    var r = n[Oi];
    if (r) return r;
    for (var s = n.parentNode; s; ) {
      if (r = s[ao] || s[Oi]) {
        if (s = r.alternate, r.child !== null || s !== null && s.child !== null) for (n = Nv(n); n !== null; ) {
          if (s = n[Oi]) return s;
          n = Nv(n);
        }
        return r;
      }
      n = s, s = n.parentNode;
    }
    return null;
  }
  function We(n) {
    return n = n[Oi] || n[ao], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function fi(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(c(33));
  }
  function yn(n) {
    return n[ku] || null;
  }
  var Ot = [], Va = -1;
  function za(n) {
    return { current: n };
  }
  function sn(n) {
    0 > Va || (n.current = Ot[Va], Ot[Va] = null, Va--);
  }
  function Ye(n, r) {
    Va++, Ot[Va] = n.current, n.current = r;
  }
  var Dr = {}, Tn = za(Dr), Qn = za(!1), ea = Dr;
  function ta(n, r) {
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
  function As() {
    sn(Qn), sn(Tn);
  }
  function Pv(n, r, s) {
    if (Tn.current !== Dr) throw Error(c(168));
    Ye(Tn, r), Ye(Qn, s);
  }
  function Ou(n, r, s) {
    var f = n.stateNode;
    if (r = r.childContextTypes, typeof f.getChildContext != "function") return s;
    f = f.getChildContext();
    for (var h in f) if (!(h in r)) throw Error(c(108, ht(n) || "Unknown", h));
    return ge({}, s, f);
  }
  function nr(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Dr, ea = Tn.current, Ye(Tn, n), Ye(Qn, Qn.current), !0;
  }
  function Jc(n, r, s) {
    var f = n.stateNode;
    if (!f) throw Error(c(169));
    s ? (n = Ou(n, r, ea), f.__reactInternalMemoizedMergedChildContext = n, sn(Qn), sn(Tn), Ye(Tn, n)) : sn(Qn), Ye(Qn, s);
  }
  var Ai = null, Ls = !1, io = !1;
  function ef(n) {
    Ai === null ? Ai = [n] : Ai.push(n);
  }
  function Bo(n) {
    Ls = !0, ef(n);
  }
  function Li() {
    if (!io && Ai !== null) {
      io = !0;
      var n = 0, r = zt;
      try {
        var s = Ai;
        for (zt = 1; n < s.length; n++) {
          var f = s[n];
          do
            f = f(!0);
          while (f !== null);
        }
        Ai = null, Ls = !1;
      } catch (h) {
        throw Ai !== null && (Ai = Ai.slice(n + 1)), cn(ii, Li), h;
      } finally {
        zt = r, io = !1;
      }
    }
    return null;
  }
  var Ho = [], Io = 0, Yo = null, oo = 0, zn = [], Fa = 0, Ca = null, Ni = 1, Pi = "";
  function Al(n, r) {
    Ho[Io++] = oo, Ho[Io++] = Yo, Yo = n, oo = r;
  }
  function Uv(n, r, s) {
    zn[Fa++] = Ni, zn[Fa++] = Pi, zn[Fa++] = Ca, Ca = n;
    var f = Ni;
    n = Pi;
    var h = 32 - Nr(f) - 1;
    f &= ~(1 << h), s += 1;
    var g = 32 - Nr(r) + h;
    if (30 < g) {
      var w = h - h % 5;
      g = (f & (1 << w) - 1).toString(32), f >>= w, h -= w, Ni = 1 << 32 - Nr(r) + h | s << h | f, Pi = g + n;
    } else Ni = 1 << g | s << h | f, Pi = n;
  }
  function tf(n) {
    n.return !== null && (Al(n, 1), Uv(n, 1, 0));
  }
  function nf(n) {
    for (; n === Yo; ) Yo = Ho[--Io], Ho[Io] = null, oo = Ho[--Io], Ho[Io] = null;
    for (; n === Ca; ) Ca = zn[--Fa], zn[Fa] = null, Pi = zn[--Fa], zn[Fa] = null, Ni = zn[--Fa], zn[Fa] = null;
  }
  var na = null, ra = null, pn = !1, ja = null;
  function tp(n, r) {
    var s = Wa(5, null, null, 0);
    s.elementType = "DELETED", s.stateNode = r, s.return = n, r = n.deletions, r === null ? (n.deletions = [s], n.flags |= 16) : r.push(s);
  }
  function Vv(n, r) {
    switch (n.tag) {
      case 5:
        var s = n.type;
        return r = r.nodeType !== 1 || s.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, na = n, ra = Mi(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, na = n, ra = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (s = Ca !== null ? { id: Ni, overflow: Pi } : null, n.memoizedState = { dehydrated: r, treeContext: s, retryLane: 1073741824 }, s = Wa(18, null, null, 0), s.stateNode = r, s.return = n, n.child = s, na = n, ra = null, !0) : !1;
      default:
        return !1;
    }
  }
  function np(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function rp(n) {
    if (pn) {
      var r = ra;
      if (r) {
        var s = r;
        if (!Vv(n, r)) {
          if (np(n)) throw Error(c(418));
          r = Mi(s.nextSibling);
          var f = na;
          r && Vv(n, r) ? tp(f, s) : (n.flags = n.flags & -4097 | 2, pn = !1, na = n);
        }
      } else {
        if (np(n)) throw Error(c(418));
        n.flags = n.flags & -4097 | 2, pn = !1, na = n;
      }
    }
  }
  function Xn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    na = n;
  }
  function rf(n) {
    if (n !== na) return !1;
    if (!pn) return Xn(n), pn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Xc(n.type, n.memoizedProps)), r && (r = ra)) {
      if (np(n)) throw Au(), Error(c(418));
      for (; r; ) tp(n, r), r = Mi(r.nextSibling);
    }
    if (Xn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(c(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var s = n.data;
            if (s === "/$") {
              if (r === 0) {
                ra = Mi(n.nextSibling);
                break e;
              }
              r--;
            } else s !== "$" && s !== "$!" && s !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ra = null;
      }
    } else ra = na ? Mi(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Au() {
    for (var n = ra; n; ) n = Mi(n.nextSibling);
  }
  function Wo() {
    ra = na = null, pn = !1;
  }
  function lo(n) {
    ja === null ? ja = [n] : ja.push(n);
  }
  var Ag = ye.ReactCurrentBatchConfig;
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
          var O = h.refs;
          w === null ? delete O[g] : O[g] = w;
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
  function zv(n) {
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
    function O(B, z, W, fe) {
      return z === null || z.tag !== 6 ? (z = Np(W, B.mode, fe), z.return = B, z) : (z = h(z, W), z.return = B, z);
    }
    function U(B, z, W, fe) {
      var Fe = W.type;
      return Fe === Ee ? ce(B, z, W.props.children, fe, W.key) : z !== null && (z.elementType === Fe || typeof Fe == "object" && Fe !== null && Fe.$$typeof === kt && zv(Fe) === z.type) ? (fe = h(z, W.props), fe.ref = Ll(B, z, W), fe.return = B, fe) : (fe = sc(W.type, W.key, W.props, null, B.mode, fe), fe.ref = Ll(B, z, W), fe.return = B, fe);
    }
    function Q(B, z, W, fe) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== W.containerInfo || z.stateNode.implementation !== W.implementation ? (z = zf(W, B.mode, fe), z.return = B, z) : (z = h(z, W.children || []), z.return = B, z);
    }
    function ce(B, z, W, fe, Fe) {
      return z === null || z.tag !== 7 ? (z = ho(W, B.mode, fe, Fe), z.return = B, z) : (z = h(z, W), z.return = B, z);
    }
    function pe(B, z, W) {
      if (typeof z == "string" && z !== "" || typeof z == "number") return z = Np("" + z, B.mode, W), z.return = B, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case ne:
            return W = sc(z.type, z.key, z.props, null, B.mode, W), W.ref = Ll(B, null, z), W.return = B, W;
          case ve:
            return z = zf(z, B.mode, W), z.return = B, z;
          case kt:
            var fe = z._init;
            return pe(B, fe(z._payload), W);
        }
        if (er(z) || Ve(z)) return z = ho(z, B.mode, W, null), z.return = B, z;
        af(B, z);
      }
      return null;
    }
    function ue(B, z, W, fe) {
      var Fe = z !== null ? z.key : null;
      if (typeof W == "string" && W !== "" || typeof W == "number") return Fe !== null ? null : O(B, z, "" + W, fe);
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case ne:
            return W.key === Fe ? U(B, z, W, fe) : null;
          case ve:
            return W.key === Fe ? Q(B, z, W, fe) : null;
          case kt:
            return Fe = W._init, ue(
              B,
              z,
              Fe(W._payload),
              fe
            );
        }
        if (er(W) || Ve(W)) return Fe !== null ? null : ce(B, z, W, fe, null);
        af(B, W);
      }
      return null;
    }
    function ke(B, z, W, fe, Fe) {
      if (typeof fe == "string" && fe !== "" || typeof fe == "number") return B = B.get(W) || null, O(z, B, "" + fe, Fe);
      if (typeof fe == "object" && fe !== null) {
        switch (fe.$$typeof) {
          case ne:
            return B = B.get(fe.key === null ? W : fe.key) || null, U(z, B, fe, Fe);
          case ve:
            return B = B.get(fe.key === null ? W : fe.key) || null, Q(z, B, fe, Fe);
          case kt:
            var Xe = fe._init;
            return ke(B, z, W, Xe(fe._payload), Fe);
        }
        if (er(fe) || Ve(fe)) return B = B.get(W) || null, ce(z, B, fe, Fe, null);
        af(z, fe);
      }
      return null;
    }
    function ze(B, z, W, fe) {
      for (var Fe = null, Xe = null, Ze = z, at = z = 0, ir = null; Ze !== null && at < W.length; at++) {
        Ze.index > at ? (ir = Ze, Ze = null) : ir = Ze.sibling;
        var Bt = ue(B, Ze, W[at], fe);
        if (Bt === null) {
          Ze === null && (Ze = ir);
          break;
        }
        n && Ze && Bt.alternate === null && r(B, Ze), z = g(Bt, z, at), Xe === null ? Fe = Bt : Xe.sibling = Bt, Xe = Bt, Ze = ir;
      }
      if (at === W.length) return s(B, Ze), pn && Al(B, at), Fe;
      if (Ze === null) {
        for (; at < W.length; at++) Ze = pe(B, W[at], fe), Ze !== null && (z = g(Ze, z, at), Xe === null ? Fe = Ze : Xe.sibling = Ze, Xe = Ze);
        return pn && Al(B, at), Fe;
      }
      for (Ze = f(B, Ze); at < W.length; at++) ir = ke(Ze, B, at, W[at], fe), ir !== null && (n && ir.alternate !== null && Ze.delete(ir.key === null ? at : ir.key), z = g(ir, z, at), Xe === null ? Fe = ir : Xe.sibling = ir, Xe = ir);
      return n && Ze.forEach(function(nl) {
        return r(B, nl);
      }), pn && Al(B, at), Fe;
    }
    function Be(B, z, W, fe) {
      var Fe = Ve(W);
      if (typeof Fe != "function") throw Error(c(150));
      if (W = Fe.call(W), W == null) throw Error(c(151));
      for (var Xe = Fe = null, Ze = z, at = z = 0, ir = null, Bt = W.next(); Ze !== null && !Bt.done; at++, Bt = W.next()) {
        Ze.index > at ? (ir = Ze, Ze = null) : ir = Ze.sibling;
        var nl = ue(B, Ze, Bt.value, fe);
        if (nl === null) {
          Ze === null && (Ze = ir);
          break;
        }
        n && Ze && nl.alternate === null && r(B, Ze), z = g(nl, z, at), Xe === null ? Fe = nl : Xe.sibling = nl, Xe = nl, Ze = ir;
      }
      if (Bt.done) return s(
        B,
        Ze
      ), pn && Al(B, at), Fe;
      if (Ze === null) {
        for (; !Bt.done; at++, Bt = W.next()) Bt = pe(B, Bt.value, fe), Bt !== null && (z = g(Bt, z, at), Xe === null ? Fe = Bt : Xe.sibling = Bt, Xe = Bt);
        return pn && Al(B, at), Fe;
      }
      for (Ze = f(B, Ze); !Bt.done; at++, Bt = W.next()) Bt = ke(Ze, B, at, Bt.value, fe), Bt !== null && (n && Bt.alternate !== null && Ze.delete(Bt.key === null ? at : Bt.key), z = g(Bt, z, at), Xe === null ? Fe = Bt : Xe.sibling = Bt, Xe = Bt);
      return n && Ze.forEach(function(Em) {
        return r(B, Em);
      }), pn && Al(B, at), Fe;
    }
    function Mn(B, z, W, fe) {
      if (typeof W == "object" && W !== null && W.type === Ee && W.key === null && (W = W.props.children), typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case ne:
            e: {
              for (var Fe = W.key, Xe = z; Xe !== null; ) {
                if (Xe.key === Fe) {
                  if (Fe = W.type, Fe === Ee) {
                    if (Xe.tag === 7) {
                      s(B, Xe.sibling), z = h(Xe, W.props.children), z.return = B, B = z;
                      break e;
                    }
                  } else if (Xe.elementType === Fe || typeof Fe == "object" && Fe !== null && Fe.$$typeof === kt && zv(Fe) === Xe.type) {
                    s(B, Xe.sibling), z = h(Xe, W.props), z.ref = Ll(B, Xe, W), z.return = B, B = z;
                    break e;
                  }
                  s(B, Xe);
                  break;
                } else r(B, Xe);
                Xe = Xe.sibling;
              }
              W.type === Ee ? (z = ho(W.props.children, B.mode, fe, W.key), z.return = B, B = z) : (fe = sc(W.type, W.key, W.props, null, B.mode, fe), fe.ref = Ll(B, z, W), fe.return = B, B = fe);
            }
            return w(B);
          case ve:
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
          case kt:
            return Xe = W._init, Mn(B, z, Xe(W._payload), fe);
        }
        if (er(W)) return ze(B, z, W, fe);
        if (Ve(W)) return Be(B, z, W, fe);
        af(B, W);
      }
      return typeof W == "string" && W !== "" || typeof W == "number" ? (W = "" + W, z !== null && z.tag === 6 ? (s(B, z.sibling), z = h(z, W), z.return = B, B = z) : (s(B, z), z = Np(W, B.mode, fe), z.return = B, B = z), w(B)) : s(B, z);
    }
    return Mn;
  }
  var bn = Nl(!0), we = Nl(!1), Ta = za(null), aa = null, Ns = null, ap = null;
  function ip() {
    ap = Ns = aa = null;
  }
  function op(n) {
    var r = Ta.current;
    sn(Ta), n._currentValue = r;
  }
  function lp(n, r, s) {
    for (; n !== null; ) {
      var f = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, f !== null && (f.childLanes |= r)) : f !== null && (f.childLanes & r) !== r && (f.childLanes |= r), n === s) break;
      n = n.return;
    }
  }
  function gn(n, r) {
    aa = n, ap = Ns = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (jn = !0), n.firstContext = null);
  }
  function Ba(n) {
    var r = n._currentValue;
    if (ap !== n) if (n = { context: n, memoizedValue: r, next: null }, Ns === null) {
      if (aa === null) throw Error(c(308));
      Ns = n, aa.dependencies = { lanes: 0, firstContext: n };
    } else Ns = Ns.next = n;
    return r;
  }
  var Pl = null;
  function sp(n) {
    Pl === null ? Pl = [n] : Pl.push(n);
  }
  function up(n, r, s, f) {
    var h = r.interleaved;
    return h === null ? (s.next = s, sp(r)) : (s.next = h.next, h.next = s), r.interleaved = s, xa(n, f);
  }
  function xa(n, r) {
    n.lanes |= r;
    var s = n.alternate;
    for (s !== null && (s.lanes |= r), s = n, n = n.return; n !== null; ) n.childLanes |= r, s = n.alternate, s !== null && (s.childLanes |= r), s = n, n = n.return;
    return s.tag === 3 ? s.stateNode : null;
  }
  var Ra = !1;
  function cp(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Fv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function so(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function $o(n, r, s) {
    var f = n.updateQueue;
    if (f === null) return null;
    if (f = f.shared, At & 2) {
      var h = f.pending;
      return h === null ? r.next = r : (r.next = h.next, h.next = r), f.pending = r, xa(n, s);
    }
    return h = f.interleaved, h === null ? (r.next = r, sp(f)) : (r.next = h.next, h.next = r), f.interleaved = r, xa(n, s);
  }
  function of(n, r, s) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (s & 4194240) !== 0)) {
      var f = r.lanes;
      f &= n.pendingLanes, s |= f, r.lanes = s, Ji(n, s);
    }
  }
  function jv(n, r) {
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
    Ra = !1;
    var g = h.firstBaseUpdate, w = h.lastBaseUpdate, O = h.shared.pending;
    if (O !== null) {
      h.shared.pending = null;
      var U = O, Q = U.next;
      U.next = null, w === null ? g = Q : w.next = Q, w = U;
      var ce = n.alternate;
      ce !== null && (ce = ce.updateQueue, O = ce.lastBaseUpdate, O !== w && (O === null ? ce.firstBaseUpdate = Q : O.next = Q, ce.lastBaseUpdate = U));
    }
    if (g !== null) {
      var pe = h.baseState;
      w = 0, ce = Q = U = null, O = g;
      do {
        var ue = O.lane, ke = O.eventTime;
        if ((f & ue) === ue) {
          ce !== null && (ce = ce.next = {
            eventTime: ke,
            lane: 0,
            tag: O.tag,
            payload: O.payload,
            callback: O.callback,
            next: null
          });
          e: {
            var ze = n, Be = O;
            switch (ue = r, ke = s, Be.tag) {
              case 1:
                if (ze = Be.payload, typeof ze == "function") {
                  pe = ze.call(ke, pe, ue);
                  break e;
                }
                pe = ze;
                break e;
              case 3:
                ze.flags = ze.flags & -65537 | 128;
              case 0:
                if (ze = Be.payload, ue = typeof ze == "function" ? ze.call(ke, pe, ue) : ze, ue == null) break e;
                pe = ge({}, pe, ue);
                break e;
              case 2:
                Ra = !0;
            }
          }
          O.callback !== null && O.lane !== 0 && (n.flags |= 64, ue = h.effects, ue === null ? h.effects = [O] : ue.push(O));
        } else ke = { eventTime: ke, lane: ue, tag: O.tag, payload: O.payload, callback: O.callback, next: null }, ce === null ? (Q = ce = ke, U = pe) : ce = ce.next = ke, w |= ue;
        if (O = O.next, O === null) {
          if (O = h.shared.pending, O === null) break;
          ue = O, O = ue.next, ue.next = null, h.lastBaseUpdate = ue, h.shared.pending = null;
        }
      } while (!0);
      if (ce === null && (U = pe), h.baseState = U, h.firstBaseUpdate = Q, h.lastBaseUpdate = ce, r = h.shared.interleaved, r !== null) {
        h = r;
        do
          w |= h.lane, h = h.next;
        while (h !== r);
      } else g === null && (h.shared.lanes = 0);
      ji |= w, n.lanes = w, n.memoizedState = pe;
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
  var Nu = {}, Ui = za(Nu), Pu = za(Nu), Uu = za(Nu);
  function Ul(n) {
    if (n === Nu) throw Error(c(174));
    return n;
  }
  function dp(n, r) {
    switch (Ye(Uu, r), Ye(Pu, n), Ye(Ui, Nu), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : ga(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = ga(r, n);
    }
    sn(Ui), Ye(Ui, r);
  }
  function Vl() {
    sn(Ui), sn(Pu), sn(Uu);
  }
  function Bv(n) {
    Ul(Uu.current);
    var r = Ul(Ui.current), s = ga(r, n.type);
    r !== s && (Ye(Pu, n), Ye(Ui, s));
  }
  function lf(n) {
    Pu.current === n && (sn(Ui), sn(Pu));
  }
  var Sn = za(0);
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
  var Rt = ye.ReactCurrentDispatcher, Ft = ye.ReactCurrentBatchConfig, Jt = 0, jt = null, Fn = null, rr = null, uf = !1, zu = !1, zl = 0, se = 0;
  function Vt() {
    throw Error(c(321));
  }
  function et(n, r) {
    if (r === null) return !1;
    for (var s = 0; s < r.length && s < n.length; s++) if (!ci(n[s], r[s])) return !1;
    return !0;
  }
  function Go(n, r, s, f, h, g) {
    if (Jt = g, jt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Rt.current = n === null || n.memoizedState === null ? Rf : Yu, n = s(f, h), zu) {
      g = 0;
      do {
        if (zu = !1, zl = 0, 25 <= g) throw Error(c(301));
        g += 1, rr = Fn = null, r.updateQueue = null, Rt.current = wf, n = s(f, h);
      } while (zu);
    }
    if (Rt.current = Il, r = Fn !== null && Fn.next !== null, Jt = 0, rr = Fn = jt = null, uf = !1, r) throw Error(c(300));
    return n;
  }
  function di() {
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
      var O = w = null, U = null, Q = g;
      do {
        var ce = Q.lane;
        if ((Jt & ce) === ce) U !== null && (U = U.next = { lane: 0, action: Q.action, hasEagerState: Q.hasEagerState, eagerState: Q.eagerState, next: null }), f = Q.hasEagerState ? Q.eagerState : n(f, Q.action);
        else {
          var pe = {
            lane: ce,
            action: Q.action,
            hasEagerState: Q.hasEagerState,
            eagerState: Q.eagerState,
            next: null
          };
          U === null ? (O = U = pe, w = f) : U = U.next = pe, jt.lanes |= ce, ji |= ce;
        }
        Q = Q.next;
      } while (Q !== null && Q !== g);
      U === null ? w = f : U.next = O, ci(f, r.memoizedState) || (jn = !0), r.memoizedState = f, r.baseState = w, r.baseQueue = U, s.lastRenderedState = f;
    }
    if (n = s.interleaved, n !== null) {
      h = n;
      do
        g = h.lane, jt.lanes |= g, ji |= g, h = h.next;
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
      ci(g, r.memoizedState) || (jn = !0), r.memoizedState = g, r.baseQueue === null && (r.baseState = g), s.lastRenderedState = g;
    }
    return [g, f];
  }
  function cf() {
  }
  function ff(n, r) {
    var s = jt, f = Dn(), h = r(), g = !ci(f.memoizedState, h);
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
      return !ci(n, s);
    } catch {
      return !0;
    }
  }
  function mf(n) {
    var r = xa(n, 1);
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
    return Jt & 21 ? (ci(s, r) || (s = vs(), jt.lanes |= s, ji |= s, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, jn = !0), n.memoizedState = s);
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
    var f = Bi(n);
    if (s = { lane: f, action: s, hasEagerState: !1, eagerState: null, next: null }, ia(n)) Hv(r, s);
    else if (s = up(n, r, s, f), s !== null) {
      var h = In();
      jr(s, n, f, h), nn(s, r, f);
    }
  }
  function Hl(n, r, s) {
    var f = Bi(n), h = { lane: f, action: s, hasEagerState: !1, eagerState: null, next: null };
    if (ia(n)) Hv(r, h);
    else {
      var g = n.alternate;
      if (n.lanes === 0 && (g === null || g.lanes === 0) && (g = r.lastRenderedReducer, g !== null)) try {
        var w = r.lastRenderedState, O = g(w, s);
        if (h.hasEagerState = !0, h.eagerState = O, ci(O, w)) {
          var U = r.interleaved;
          U === null ? (h.next = h, sp(r)) : (h.next = U.next, U.next = h), r.interleaved = h;
          return;
        }
      } catch {
      } finally {
      }
      s = up(n, r, h, f), s !== null && (h = In(), jr(s, n, f, h), nn(s, r, f));
    }
  }
  function ia(n) {
    var r = n.alternate;
    return n === jt || r !== null && r === jt;
  }
  function Hv(n, r) {
    zu = uf = !0;
    var s = n.pending;
    s === null ? r.next = r : (r.next = s.next, s.next = r), n.pending = r;
  }
  function nn(n, r, s) {
    if (s & 4194240) {
      var f = r.lanes;
      f &= n.pendingLanes, s |= f, r.lanes = s, Ji(n, s);
    }
  }
  var Il = { readContext: Ba, useCallback: Vt, useContext: Vt, useEffect: Vt, useImperativeHandle: Vt, useInsertionEffect: Vt, useLayoutEffect: Vt, useMemo: Vt, useReducer: Vt, useRef: Vt, useState: Vt, useDebugValue: Vt, useDeferredValue: Vt, useTransition: Vt, useMutableSource: Vt, useSyncExternalStore: Vt, useId: Vt, unstable_isNewReconciler: !1 }, Rf = { readContext: Ba, useCallback: function(n, r) {
    return _r().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ba, useEffect: Sf, useImperativeHandle: function(n, r, s) {
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
      var s = Pi, f = Ni;
      s = (f & ~(1 << 32 - Nr(f) - 1)).toString(32) + s, r = ":" + r + "R" + s, s = zl++, 0 < s && (r += "H" + s.toString(32)), r += ":";
    } else s = se++, r = ":" + r + "r" + s.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Yu = {
    readContext: Ba,
    useCallback: Tf,
    useContext: Ba,
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
  }, wf = { readContext: Ba, useCallback: Tf, useContext: Ba, useEffect: Fu, useImperativeHandle: Cf, useInsertionEffect: Ef, useLayoutEffect: ju, useMemo: xf, useReducer: Fl, useRef: gf, useState: function() {
    return Fl(uo);
  }, useDebugValue: Bu, useDeferredValue: function(n) {
    var r = Dn();
    return Fn === null ? r.memoizedState = n : pp(r, Fn.memoizedState, n);
  }, useTransition: function() {
    var n = Fl(uo)[0], r = Dn().memoizedState;
    return [n, r];
  }, useMutableSource: cf, useSyncExternalStore: ff, useId: hp, unstable_isNewReconciler: !1 };
  function pi(n, r) {
    if (n && n.defaultProps) {
      r = ge({}, r), n = n.defaultProps;
      for (var s in n) r[s] === void 0 && (r[s] = n[s]);
      return r;
    }
    return r;
  }
  function vp(n, r, s, f) {
    r = n.memoizedState, s = s(f, r), s = s == null ? r : ge({}, r, s), n.memoizedState = s, n.lanes === 0 && (n.updateQueue.baseState = s);
  }
  var bf = { isMounted: function(n) {
    return (n = n._reactInternals) ? ft(n) === n : !1;
  }, enqueueSetState: function(n, r, s) {
    n = n._reactInternals;
    var f = In(), h = Bi(n), g = so(f, h);
    g.payload = r, s != null && (g.callback = s), r = $o(n, g, h), r !== null && (jr(r, n, h, f), of(r, n, h));
  }, enqueueReplaceState: function(n, r, s) {
    n = n._reactInternals;
    var f = In(), h = Bi(n), g = so(f, h);
    g.tag = 1, g.payload = r, s != null && (g.callback = s), r = $o(n, g, h), r !== null && (jr(r, n, h, f), of(r, n, h));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var s = In(), f = Bi(n), h = so(s, f);
    h.tag = 2, r != null && (h.callback = r), r = $o(n, h, f), r !== null && (jr(r, n, f, s), of(r, n, f));
  } };
  function Iv(n, r, s, f, h, g, w) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(f, g, w) : r.prototype && r.prototype.isPureReactComponent ? !xu(s, f) || !xu(h, g) : !0;
  }
  function Df(n, r, s) {
    var f = !1, h = Dr, g = r.contextType;
    return typeof g == "object" && g !== null ? g = Ba(g) : (h = Vn(r) ? ea : Tn.current, f = r.contextTypes, g = (f = f != null) ? ta(n, h) : Dr), r = new r(s, g), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = bf, n.stateNode = r, r._reactInternals = n, f && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = h, n.__reactInternalMemoizedMaskedChildContext = g), r;
  }
  function Yv(n, r, s, f) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(s, f), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(s, f), r.state !== n && bf.enqueueReplaceState(r, r.state, null);
  }
  function Wu(n, r, s, f) {
    var h = n.stateNode;
    h.props = s, h.state = n.memoizedState, h.refs = {}, cp(n);
    var g = r.contextType;
    typeof g == "object" && g !== null ? h.context = Ba(g) : (g = Vn(r) ? ea : Tn.current, h.context = ta(n, g)), h.state = n.memoizedState, g = r.getDerivedStateFromProps, typeof g == "function" && (vp(n, r, g, s), h.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof h.getSnapshotBeforeUpdate == "function" || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (r = h.state, typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), r !== h.state && bf.enqueueReplaceState(h, h.state, null), Lu(n, s, h, f), h.state = n.memoizedState), typeof h.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Yl(n, r) {
    try {
      var s = "", f = r;
      do
        s += Ct(f), f = f.return;
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
  function Wv(n, r, s) {
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
    h.has(s) || (h.add(s), n = Fg.bind(null, n, r, s), r.then(n, n));
  }
  function $v(n) {
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
  var $u = ye.ReactCurrentOwner, jn = !1;
  function pr(n, r, s, f) {
    r.child = n === null ? we(r, null, s, f) : bn(r, n.child, s, f);
  }
  function oa(n, r, s, f, h) {
    s = s.render;
    var g = r.ref;
    return gn(r, h), f = Go(n, r, s, f, g, h), s = di(), n !== null && !jn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~h, Ia(n, r, h)) : (pn && s && tf(r), r.flags |= 1, pr(n, r, f, h), r.child);
  }
  function Wl(n, r, s, f, h) {
    if (n === null) {
      var g = s.type;
      return typeof g == "function" && !Lp(g) && g.defaultProps === void 0 && s.compare === null && s.defaultProps === void 0 ? (r.tag = 15, r.type = g, pt(n, r, g, f, h)) : (n = sc(s.type, null, f, r, r.mode, h), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (g = n.child, !(n.lanes & h)) {
      var w = g.memoizedProps;
      if (s = s.compare, s = s !== null ? s : xu, s(w, f) && n.ref === r.ref) return Ia(n, r, h);
    }
    return r.flags |= 1, n = Jo(g, f), n.ref = r.ref, n.return = r, r.child = n;
  }
  function pt(n, r, s, f, h) {
    if (n !== null) {
      var g = n.memoizedProps;
      if (xu(g, f) && n.ref === r.ref) if (jn = !1, r.pendingProps = f = g, (n.lanes & h) !== 0) n.flags & 131072 && (jn = !0);
      else return r.lanes = n.lanes, Ia(n, r, h);
    }
    return Gv(n, r, s, f, h);
  }
  function Gu(n, r, s) {
    var f = r.pendingProps, h = f.children, g = n !== null ? n.memoizedState : null;
    if (f.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ye(Fs, wa), wa |= s;
    else {
      if (!(s & 1073741824)) return n = g !== null ? g.baseLanes | s : s, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Ye(Fs, wa), wa |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, f = g !== null ? g.baseLanes : s, Ye(Fs, wa), wa |= f;
    }
    else g !== null ? (f = g.baseLanes | s, r.memoizedState = null) : f = s, Ye(Fs, wa), wa |= f;
    return pr(n, r, h, s), r.child;
  }
  function Ep(n, r) {
    var s = r.ref;
    (n === null && s !== null || n !== null && n.ref !== s) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Gv(n, r, s, f, h) {
    var g = Vn(s) ? ea : Tn.current;
    return g = ta(r, g), gn(r, h), s = Go(n, r, s, f, g, h), f = di(), n !== null && !jn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~h, Ia(n, r, h)) : (pn && f && tf(r), r.flags |= 1, pr(n, r, s, h), r.child);
  }
  function Kv(n, r, s, f, h) {
    if (Vn(s)) {
      var g = !0;
      nr(r);
    } else g = !1;
    if (gn(r, h), r.stateNode === null) Ha(n, r), Df(r, s, f), Wu(r, s, f, h), f = !0;
    else if (n === null) {
      var w = r.stateNode, O = r.memoizedProps;
      w.props = O;
      var U = w.context, Q = s.contextType;
      typeof Q == "object" && Q !== null ? Q = Ba(Q) : (Q = Vn(s) ? ea : Tn.current, Q = ta(r, Q));
      var ce = s.getDerivedStateFromProps, pe = typeof ce == "function" || typeof w.getSnapshotBeforeUpdate == "function";
      pe || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (O !== f || U !== Q) && Yv(r, w, f, Q), Ra = !1;
      var ue = r.memoizedState;
      w.state = ue, Lu(r, f, w, h), U = r.memoizedState, O !== f || ue !== U || Qn.current || Ra ? (typeof ce == "function" && (vp(r, s, ce, f), U = r.memoizedState), (O = Ra || Iv(r, s, O, f, ue, U, Q)) ? (pe || typeof w.UNSAFE_componentWillMount != "function" && typeof w.componentWillMount != "function" || (typeof w.componentWillMount == "function" && w.componentWillMount(), typeof w.UNSAFE_componentWillMount == "function" && w.UNSAFE_componentWillMount()), typeof w.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof w.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = f, r.memoizedState = U), w.props = f, w.state = U, w.context = Q, f = O) : (typeof w.componentDidMount == "function" && (r.flags |= 4194308), f = !1);
    } else {
      w = r.stateNode, Fv(n, r), O = r.memoizedProps, Q = r.type === r.elementType ? O : pi(r.type, O), w.props = Q, pe = r.pendingProps, ue = w.context, U = s.contextType, typeof U == "object" && U !== null ? U = Ba(U) : (U = Vn(s) ? ea : Tn.current, U = ta(r, U));
      var ke = s.getDerivedStateFromProps;
      (ce = typeof ke == "function" || typeof w.getSnapshotBeforeUpdate == "function") || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (O !== pe || ue !== U) && Yv(r, w, f, U), Ra = !1, ue = r.memoizedState, w.state = ue, Lu(r, f, w, h);
      var ze = r.memoizedState;
      O !== pe || ue !== ze || Qn.current || Ra ? (typeof ke == "function" && (vp(r, s, ke, f), ze = r.memoizedState), (Q = Ra || Iv(r, s, Q, f, ue, ze, U) || !1) ? (ce || typeof w.UNSAFE_componentWillUpdate != "function" && typeof w.componentWillUpdate != "function" || (typeof w.componentWillUpdate == "function" && w.componentWillUpdate(f, ze, U), typeof w.UNSAFE_componentWillUpdate == "function" && w.UNSAFE_componentWillUpdate(f, ze, U)), typeof w.componentDidUpdate == "function" && (r.flags |= 4), typeof w.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof w.componentDidUpdate != "function" || O === n.memoizedProps && ue === n.memoizedState || (r.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || O === n.memoizedProps && ue === n.memoizedState || (r.flags |= 1024), r.memoizedProps = f, r.memoizedState = ze), w.props = f, w.state = ze, w.context = U, f = Q) : (typeof w.componentDidUpdate != "function" || O === n.memoizedProps && ue === n.memoizedState || (r.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || O === n.memoizedProps && ue === n.memoizedState || (r.flags |= 1024), f = !1);
    }
    return Ku(n, r, s, f, g, h);
  }
  function Ku(n, r, s, f, h, g) {
    Ep(n, r);
    var w = (r.flags & 128) !== 0;
    if (!f && !w) return h && Jc(r, s, !1), Ia(n, r, g);
    f = r.stateNode, $u.current = r;
    var O = w && typeof s.getDerivedStateFromError != "function" ? null : f.render();
    return r.flags |= 1, n !== null && w ? (r.child = bn(r, n.child, null, g), r.child = bn(r, null, O, g)) : pr(n, r, O, g), r.memoizedState = f.state, h && Jc(r, s, !0), r.child;
  }
  function Vs(n) {
    var r = n.stateNode;
    r.pendingContext ? Pv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Pv(n, r.context, !1), dp(n, r.containerInfo);
  }
  function Qv(n, r, s, f, h) {
    return Wo(), lo(h), r.flags |= 256, pr(n, r, s, f), r.child;
  }
  var kf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Cp(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Mf(n, r, s) {
    var f = r.pendingProps, h = Sn.current, g = !1, w = (r.flags & 128) !== 0, O;
    if ((O = w) || (O = n !== null && n.memoizedState === null ? !1 : (h & 2) !== 0), O ? (g = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (h |= 1), Ye(Sn, h & 1), n === null)
      return rp(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (w = f.children, n = f.fallback, g ? (f = r.mode, g = r.child, w = { mode: "hidden", children: w }, !(f & 1) && g !== null ? (g.childLanes = 0, g.pendingProps = w) : g = el(w, f, 0, null), n = ho(n, f, s, null), g.return = r, n.return = r, g.sibling = n, r.child = g, r.child.memoizedState = Cp(s), r.memoizedState = kf, n) : Tp(r, w));
    if (h = n.memoizedState, h !== null && (O = h.dehydrated, O !== null)) return Xv(n, r, w, f, O, h, s);
    if (g) {
      g = f.fallback, w = r.mode, h = n.child, O = h.sibling;
      var U = { mode: "hidden", children: f.children };
      return !(w & 1) && r.child !== h ? (f = r.child, f.childLanes = 0, f.pendingProps = U, r.deletions = null) : (f = Jo(h, U), f.subtreeFlags = h.subtreeFlags & 14680064), O !== null ? g = Jo(O, g) : (g = ho(g, w, s, null), g.flags |= 2), g.return = r, f.return = r, f.sibling = g, r.child = f, f = g, g = r.child, w = n.child.memoizedState, w = w === null ? Cp(s) : { baseLanes: w.baseLanes | s, cachePool: null, transitions: w.transitions }, g.memoizedState = w, g.childLanes = n.childLanes & ~s, r.memoizedState = kf, f;
    }
    return g = n.child, n = g.sibling, f = Jo(g, { mode: "visible", children: f.children }), !(r.mode & 1) && (f.lanes = s), f.return = r, f.sibling = null, n !== null && (s = r.deletions, s === null ? (r.deletions = [n], r.flags |= 16) : s.push(n)), r.child = f, r.memoizedState = null, f;
  }
  function Tp(n, r) {
    return r = el({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Qu(n, r, s, f) {
    return f !== null && lo(f), bn(r, n.child, null, s), n = Tp(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Xv(n, r, s, f, h, g, w) {
    if (s)
      return r.flags & 256 ? (r.flags &= -257, f = mp(Error(c(422))), Qu(n, r, w, f)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (g = f.fallback, h = r.mode, f = el({ mode: "visible", children: f.children }, h, 0, null), g = ho(g, h, w, null), g.flags |= 2, f.return = r, g.return = r, f.sibling = g, r.child = f, r.mode & 1 && bn(r, n.child, null, w), r.child.memoizedState = Cp(w), r.memoizedState = kf, g);
    if (!(r.mode & 1)) return Qu(n, r, w, null);
    if (h.data === "$!") {
      if (f = h.nextSibling && h.nextSibling.dataset, f) var O = f.dgst;
      return f = O, g = Error(c(419)), f = mp(g, f, void 0), Qu(n, r, w, f);
    }
    if (O = (w & n.childLanes) !== 0, jn || O) {
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
        h = h & (f.suspendedLanes | w) ? 0 : h, h !== 0 && h !== g.retryLane && (g.retryLane = h, xa(n, h), jr(f, n, h, -1));
      }
      return Ap(), f = mp(Error(c(421))), Qu(n, r, w, f);
    }
    return h.data === "$?" ? (r.flags |= 128, r.child = n.child, r = jg.bind(null, n), h._reactRetry = r, null) : (n = g.treeContext, ra = Mi(h.nextSibling), na = r, pn = !0, ja = null, n !== null && (zn[Fa++] = Ni, zn[Fa++] = Pi, zn[Fa++] = Ca, Ni = n.id, Pi = n.overflow, Ca = r), r = Tp(r, f.children), r.flags |= 4096, r);
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
  function Vi(n, r, s) {
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
  function Ha(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Ia(n, r, s) {
    if (n !== null && (r.dependencies = n.dependencies), ji |= r.lanes, !(s & r.childLanes)) return null;
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
        Bv(r);
        break;
      case 1:
        Vn(r.type) && nr(r);
        break;
      case 4:
        dp(r, r.stateNode.containerInfo);
        break;
      case 10:
        var f = r.type._context, h = r.memoizedProps.value;
        Ye(Ta, f._currentValue), f._currentValue = h;
        break;
      case 13:
        if (f = r.memoizedState, f !== null)
          return f.dehydrated !== null ? (Ye(Sn, Sn.current & 1), r.flags |= 128, null) : s & r.child.childLanes ? Mf(n, r, s) : (Ye(Sn, Sn.current & 1), n = Ia(n, r, s), n !== null ? n.sibling : null);
        Ye(Sn, Sn.current & 1);
        break;
      case 19:
        if (f = (s & r.childLanes) !== 0, n.flags & 128) {
          if (f) return Vi(n, r, s);
          r.flags |= 128;
        }
        if (h = r.memoizedState, h !== null && (h.rendering = null, h.tail = null, h.lastEffect = null), Ye(Sn, Sn.current), f) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Gu(n, r, s);
    }
    return Ia(n, r, s);
  }
  var Ya, Bn, qv, Zv;
  Ya = function(n, r) {
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
  }, qv = function(n, r, s, f) {
    var h = n.memoizedProps;
    if (h !== f) {
      n = r.stateNode, Ul(Ui.current);
      var g = null;
      switch (s) {
        case "input":
          h = sr(n, h), f = sr(n, f), g = [];
          break;
        case "select":
          h = ge({}, h, { value: void 0 }), f = ge({}, f, { value: void 0 }), g = [];
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
      for (Q in h) if (!f.hasOwnProperty(Q) && h.hasOwnProperty(Q) && h[Q] != null) if (Q === "style") {
        var O = h[Q];
        for (w in O) O.hasOwnProperty(w) && (s || (s = {}), s[w] = "");
      } else Q !== "dangerouslySetInnerHTML" && Q !== "children" && Q !== "suppressContentEditableWarning" && Q !== "suppressHydrationWarning" && Q !== "autoFocus" && (y.hasOwnProperty(Q) ? g || (g = []) : (g = g || []).push(Q, null));
      for (Q in f) {
        var U = f[Q];
        if (O = h != null ? h[Q] : void 0, f.hasOwnProperty(Q) && U !== O && (U != null || O != null)) if (Q === "style") if (O) {
          for (w in O) !O.hasOwnProperty(w) || U && U.hasOwnProperty(w) || (s || (s = {}), s[w] = "");
          for (w in U) U.hasOwnProperty(w) && O[w] !== U[w] && (s || (s = {}), s[w] = U[w]);
        } else s || (g || (g = []), g.push(
          Q,
          s
        )), s = U;
        else Q === "dangerouslySetInnerHTML" ? (U = U ? U.__html : void 0, O = O ? O.__html : void 0, U != null && O !== U && (g = g || []).push(Q, U)) : Q === "children" ? typeof U != "string" && typeof U != "number" || (g = g || []).push(Q, "" + U) : Q !== "suppressContentEditableWarning" && Q !== "suppressHydrationWarning" && (y.hasOwnProperty(Q) ? (U != null && Q === "onScroll" && Wt("scroll", n), g || O === U || (g = [])) : (g = g || []).push(Q, U));
      }
      s && (g = g || []).push("style", s);
      var Q = g;
      (r.updateQueue = Q) && (r.flags |= 4);
    }
  }, Zv = function(n, r, s, f) {
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
  function ar(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, s = 0, f = 0;
    if (r) for (var h = n.child; h !== null; ) s |= h.lanes | h.childLanes, f |= h.subtreeFlags & 14680064, f |= h.flags & 14680064, h.return = n, h = h.sibling;
    else for (h = n.child; h !== null; ) s |= h.lanes | h.childLanes, f |= h.subtreeFlags, f |= h.flags, h.return = n, h = h.sibling;
    return n.subtreeFlags |= f, n.childLanes = s, r;
  }
  function Jv(n, r, s) {
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
        return ar(r), null;
      case 1:
        return Vn(r.type) && As(), ar(r), null;
      case 3:
        return f = r.stateNode, Vl(), sn(Qn), sn(Tn), $e(), f.pendingContext && (f.context = f.pendingContext, f.pendingContext = null), (n === null || n.child === null) && (rf(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ja !== null && (Kl(ja), ja = null))), Bn(n, r), ar(r), null;
      case 5:
        lf(r);
        var h = Ul(Uu.current);
        if (s = r.type, n !== null && r.stateNode != null) qv(n, r, s, f, h), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!f) {
            if (r.stateNode === null) throw Error(c(166));
            return ar(r), null;
          }
          if (n = Ul(Ui.current), rf(r)) {
            f = r.stateNode, s = r.type;
            var g = r.memoizedProps;
            switch (f[Oi] = r, f[ku] = g, n = (r.mode & 1) !== 0, s) {
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
              var O = g[w];
              w === "children" ? typeof O == "string" ? f.textContent !== O && (g.suppressHydrationWarning !== !0 && Qc(f.textContent, O, n), h = ["children", O]) : typeof O == "number" && f.textContent !== "" + O && (g.suppressHydrationWarning !== !0 && Qc(
                f.textContent,
                O,
                n
              ), h = ["children", "" + O]) : y.hasOwnProperty(w) && O != null && w === "onScroll" && Wt("scroll", f);
            }
            switch (s) {
              case "input":
                Nn(f), Ei(f, g, !0);
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
            w = h.nodeType === 9 ? h : h.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = wr(s)), n === "http://www.w3.org/1999/xhtml" ? s === "script" ? (n = w.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof f.is == "string" ? n = w.createElement(s, { is: f.is }) : (n = w.createElement(s), s === "select" && (w = n, f.multiple ? w.multiple = !0 : f.size && (w.size = f.size))) : n = w.createElementNS(n, s), n[Oi] = r, n[ku] = f, Ya(n, r, !1, !1), r.stateNode = n;
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
                  n._wrapperState = { wasMultiple: !!f.multiple }, h = ge({}, f, { value: void 0 }), Wt("invalid", n);
                  break;
                case "textarea":
                  Rr(n, f), h = Gn(n, f), Wt("invalid", n);
                  break;
                default:
                  h = f;
              }
              un(s, h), O = h;
              for (g in O) if (O.hasOwnProperty(g)) {
                var U = O[g];
                g === "style" ? rn(n, U) : g === "dangerouslySetInnerHTML" ? (U = U ? U.__html : void 0, U != null && Ci(n, U)) : g === "children" ? typeof U == "string" ? (s !== "textarea" || U !== "") && Se(n, U) : typeof U == "number" && Se(n, "" + U) : g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && g !== "autoFocus" && (y.hasOwnProperty(g) ? U != null && g === "onScroll" && Wt("scroll", n) : U != null && oe(n, g, U, w));
              }
              switch (s) {
                case "input":
                  Nn(n), Ei(n, f, !1);
                  break;
                case "textarea":
                  Nn(n), Pn(n);
                  break;
                case "option":
                  f.value != null && n.setAttribute("value", "" + yt(f.value));
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
        return ar(r), null;
      case 6:
        if (n && r.stateNode != null) Zv(n, r, n.memoizedProps, f);
        else {
          if (typeof f != "string" && r.stateNode === null) throw Error(c(166));
          if (s = Ul(Uu.current), Ul(Ui.current), rf(r)) {
            if (f = r.stateNode, s = r.memoizedProps, f[Oi] = r, (g = f.nodeValue !== s) && (n = na, n !== null)) switch (n.tag) {
              case 3:
                Qc(f.nodeValue, s, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Qc(f.nodeValue, s, (n.mode & 1) !== 0);
            }
            g && (r.flags |= 4);
          } else f = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(f), f[Oi] = r, r.stateNode = f;
        }
        return ar(r), null;
      case 13:
        if (sn(Sn), f = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (pn && ra !== null && r.mode & 1 && !(r.flags & 128)) Au(), Wo(), r.flags |= 98560, g = !1;
          else if (g = rf(r), f !== null && f.dehydrated !== null) {
            if (n === null) {
              if (!g) throw Error(c(318));
              if (g = r.memoizedState, g = g !== null ? g.dehydrated : null, !g) throw Error(c(317));
              g[Oi] = r;
            } else Wo(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            ar(r), g = !1;
          } else ja !== null && (Kl(ja), ja = null), g = !0;
          if (!g) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = s, r) : (f = f !== null, f !== (n !== null && n.memoizedState !== null) && f && (r.child.flags |= 8192, r.mode & 1 && (n === null || Sn.current & 1 ? kn === 0 && (kn = 3) : Ap())), r.updateQueue !== null && (r.flags |= 4), ar(r), null);
      case 4:
        return Vl(), Bn(n, r), n === null && Ds(r.stateNode.containerInfo), ar(r), null;
      case 10:
        return op(r.type._context), ar(r), null;
      case 17:
        return Vn(r.type) && As(), ar(r), null;
      case 19:
        if (sn(Sn), g = r.memoizedState, g === null) return ar(r), null;
        if (f = (r.flags & 128) !== 0, w = g.rendering, w === null) if (f) qu(g, !1);
        else {
          if (kn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (w = sf(n), w !== null) {
              for (r.flags |= 128, qu(g, !1), f = w.updateQueue, f !== null && (r.updateQueue = f, r.flags |= 4), r.subtreeFlags = 0, f = s, s = r.child; s !== null; ) g = s, n = f, g.flags &= 14680066, w = g.alternate, w === null ? (g.childLanes = 0, g.lanes = n, g.child = null, g.subtreeFlags = 0, g.memoizedProps = null, g.memoizedState = null, g.updateQueue = null, g.dependencies = null, g.stateNode = null) : (g.childLanes = w.childLanes, g.lanes = w.lanes, g.child = w.child, g.subtreeFlags = 0, g.deletions = null, g.memoizedProps = w.memoizedProps, g.memoizedState = w.memoizedState, g.updateQueue = w.updateQueue, g.type = w.type, n = w.dependencies, g.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), s = s.sibling;
              return Ye(Sn, Sn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          g.tail !== null && dt() > Bs && (r.flags |= 128, f = !0, qu(g, !1), r.lanes = 4194304);
        }
        else {
          if (!f) if (n = sf(w), n !== null) {
            if (r.flags |= 128, f = !0, s = n.updateQueue, s !== null && (r.updateQueue = s, r.flags |= 4), qu(g, !0), g.tail === null && g.tailMode === "hidden" && !w.alternate && !pn) return ar(r), null;
          } else 2 * dt() - g.renderingStartTime > Bs && s !== 1073741824 && (r.flags |= 128, f = !0, qu(g, !1), r.lanes = 4194304);
          g.isBackwards ? (w.sibling = r.child, r.child = w) : (s = g.last, s !== null ? s.sibling = w : r.child = w, g.last = w);
        }
        return g.tail !== null ? (r = g.tail, g.rendering = r, g.tail = r.sibling, g.renderingStartTime = dt(), r.sibling = null, s = Sn.current, Ye(Sn, f ? s & 1 | 2 : s & 1), r) : (ar(r), null);
      case 22:
      case 23:
        return Op(), f = r.memoizedState !== null, n !== null && n.memoizedState !== null !== f && (r.flags |= 8192), f && r.mode & 1 ? wa & 1073741824 && (ar(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : ar(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(c(156, r.tag));
  }
  function Of(n, r) {
    switch (nf(r), r.tag) {
      case 1:
        return Vn(r.type) && As(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
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
        return Op(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Zu = !1, kr = !1, Lg = typeof WeakSet == "function" ? WeakSet : Set, Le = null;
  function zs(n, r) {
    var s = n.ref;
    if (s !== null) if (typeof s == "function") try {
      s(null);
    } catch (f) {
      hn(n, r, f);
    }
    else s.current = null;
  }
  function Af(n, r, s) {
    try {
      s();
    } catch (f) {
      hn(n, r, f);
    }
  }
  var em = !1;
  function tm(n, r) {
    if (_u = Pa, n = Ru(), Bc(n)) {
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
          var w = 0, O = -1, U = -1, Q = 0, ce = 0, pe = n, ue = null;
          t: for (; ; ) {
            for (var ke; pe !== s || h !== 0 && pe.nodeType !== 3 || (O = w + h), pe !== g || f !== 0 && pe.nodeType !== 3 || (U = w + f), pe.nodeType === 3 && (w += pe.nodeValue.length), (ke = pe.firstChild) !== null; )
              ue = pe, pe = ke;
            for (; ; ) {
              if (pe === n) break t;
              if (ue === s && ++Q === h && (O = w), ue === g && ++ce === f && (U = w), (ke = pe.nextSibling) !== null) break;
              pe = ue, ue = pe.parentNode;
            }
            pe = ke;
          }
          s = O === -1 || U === -1 ? null : { start: O, end: U };
        } else s = null;
      }
      s = s || { start: 0, end: 0 };
    } else s = null;
    for (Ml = { focusedElem: n, selectionRange: s }, Pa = !1, Le = r; Le !== null; ) if (r = Le, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, Le = n;
    else for (; Le !== null; ) {
      r = Le;
      try {
        var ze = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ze !== null) {
              var Be = ze.memoizedProps, Mn = ze.memoizedState, B = r.stateNode, z = B.getSnapshotBeforeUpdate(r.elementType === r.type ? Be : pi(r.type, Be), Mn);
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
        n.return = r.return, Le = n;
        break;
      }
      Le = r.return;
    }
    return ze = em, em = !1, ze;
  }
  function Ju(n, r, s) {
    var f = r.updateQueue;
    if (f = f !== null ? f.lastEffect : null, f !== null) {
      var h = f = f.next;
      do {
        if ((h.tag & n) === n) {
          var g = h.destroy;
          h.destroy = void 0, g !== void 0 && Af(r, s, g);
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
    r !== null && (n.alternate = null, Lf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Oi], delete r[ku], delete r[Mu], delete r[Os], delete r[Og])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
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
  function zi(n, r, s) {
    var f = n.tag;
    if (f === 5 || f === 6) n = n.stateNode, r ? s.nodeType === 8 ? s.parentNode.insertBefore(n, r) : s.insertBefore(n, r) : (s.nodeType === 8 ? (r = s.parentNode, r.insertBefore(n, s)) : (r = s, r.appendChild(n)), s = s._reactRootContainer, s != null || r.onclick !== null || (r.onclick = Fo));
    else if (f !== 4 && (n = n.child, n !== null)) for (zi(n, r, s), n = n.sibling; n !== null; ) zi(n, r, s), n = n.sibling;
  }
  function Fi(n, r, s) {
    var f = n.tag;
    if (f === 5 || f === 6) n = n.stateNode, r ? s.insertBefore(n, r) : s.appendChild(n);
    else if (f !== 4 && (n = n.child, n !== null)) for (Fi(n, r, s), n = n.sibling; n !== null; ) Fi(n, r, s), n = n.sibling;
  }
  var _n = null, zr = !1;
  function Fr(n, r, s) {
    for (s = s.child; s !== null; ) nm(n, r, s), s = s.sibling;
  }
  function nm(n, r, s) {
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
        _n !== null && (zr ? (n = _n, s = s.stateNode, n.nodeType === 8 ? Ms(n.parentNode, s) : n.nodeType === 1 && Ms(n, s), si(n)) : Ms(_n, s.stateNode));
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
            g = g.tag, w !== void 0 && (g & 2 || g & 4) && Af(s, r, w), h = h.next;
          } while (h !== f);
        }
        Fr(n, r, s);
        break;
      case 1:
        if (!kr && (zs(s, r), f = s.stateNode, typeof f.componentWillUnmount == "function")) try {
          f.props = s.memoizedProps, f.state = s.memoizedState, f.componentWillUnmount();
        } catch (O) {
          hn(s, r, O);
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
  function rm(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var s = n.stateNode;
      s === null && (s = n.stateNode = new Lg()), r.forEach(function(f) {
        var h = dm.bind(null, n, f);
        s.has(f) || (s.add(f), f.then(h, h));
      });
    }
  }
  function hi(n, r) {
    var s = r.deletions;
    if (s !== null) for (var f = 0; f < s.length; f++) {
      var h = s[f];
      try {
        var g = n, w = r, O = w;
        e: for (; O !== null; ) {
          switch (O.tag) {
            case 5:
              _n = O.stateNode, zr = !1;
              break e;
            case 3:
              _n = O.stateNode.containerInfo, zr = !0;
              break e;
            case 4:
              _n = O.stateNode.containerInfo, zr = !0;
              break e;
          }
          O = O.return;
        }
        if (_n === null) throw Error(c(160));
        nm(g, w, h), _n = null, zr = !1;
        var U = h.alternate;
        U !== null && (U.return = null), h.return = null;
      } catch (Q) {
        hn(h, r, Q);
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
        if (hi(r, n), la(n), f & 4) {
          try {
            Ju(3, n, n.return), ec(3, n);
          } catch (Be) {
            hn(n, n.return, Be);
          }
          try {
            Ju(5, n, n.return);
          } catch (Be) {
            hn(n, n.return, Be);
          }
        }
        break;
      case 1:
        hi(r, n), la(n), f & 512 && s !== null && zs(s, s.return);
        break;
      case 5:
        if (hi(r, n), la(n), f & 512 && s !== null && zs(s, s.return), n.flags & 32) {
          var h = n.stateNode;
          try {
            Se(h, "");
          } catch (Be) {
            hn(n, n.return, Be);
          }
        }
        if (f & 4 && (h = n.stateNode, h != null)) {
          var g = n.memoizedProps, w = s !== null ? s.memoizedProps : g, O = n.type, U = n.updateQueue;
          if (n.updateQueue = null, U !== null) try {
            O === "input" && g.type === "radio" && g.name != null && $n(h, g), tr(O, w);
            var Q = tr(O, g);
            for (w = 0; w < U.length; w += 2) {
              var ce = U[w], pe = U[w + 1];
              ce === "style" ? rn(h, pe) : ce === "dangerouslySetInnerHTML" ? Ci(h, pe) : ce === "children" ? Se(h, pe) : oe(h, ce, pe, Q);
            }
            switch (O) {
              case "input":
                qr(h, g);
                break;
              case "textarea":
                ei(h, g);
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
          } catch (Be) {
            hn(n, n.return, Be);
          }
        }
        break;
      case 6:
        if (hi(r, n), la(n), f & 4) {
          if (n.stateNode === null) throw Error(c(162));
          h = n.stateNode, g = n.memoizedProps;
          try {
            h.nodeValue = g;
          } catch (Be) {
            hn(n, n.return, Be);
          }
        }
        break;
      case 3:
        if (hi(r, n), la(n), f & 4 && s !== null && s.memoizedState.isDehydrated) try {
          si(r.containerInfo);
        } catch (Be) {
          hn(n, n.return, Be);
        }
        break;
      case 4:
        hi(r, n), la(n);
        break;
      case 13:
        hi(r, n), la(n), h = n.child, h.flags & 8192 && (g = h.memoizedState !== null, h.stateNode.isHidden = g, !g || h.alternate !== null && h.alternate.memoizedState !== null || (_p = dt())), f & 4 && rm(n);
        break;
      case 22:
        if (ce = s !== null && s.memoizedState !== null, n.mode & 1 ? (kr = (Q = kr) || ce, hi(r, n), kr = Q) : hi(r, n), la(n), f & 8192) {
          if (Q = n.memoizedState !== null, (n.stateNode.isHidden = Q) && !ce && n.mode & 1) for (Le = n, ce = n.child; ce !== null; ) {
            for (pe = Le = ce; Le !== null; ) {
              switch (ue = Le, ke = ue.child, ue.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ju(4, ue, ue.return);
                  break;
                case 1:
                  zs(ue, ue.return);
                  var ze = ue.stateNode;
                  if (typeof ze.componentWillUnmount == "function") {
                    f = ue, s = ue.return;
                    try {
                      r = f, ze.props = r.memoizedProps, ze.state = r.memoizedState, ze.componentWillUnmount();
                    } catch (Be) {
                      hn(f, s, Be);
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
              ke !== null ? (ke.return = ue, Le = ke) : nc(pe);
            }
            ce = ce.sibling;
          }
          e: for (ce = null, pe = n; ; ) {
            if (pe.tag === 5) {
              if (ce === null) {
                ce = pe;
                try {
                  h = pe.stateNode, Q ? (g = h.style, typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none") : (O = pe.stateNode, U = pe.memoizedProps.style, w = U != null && U.hasOwnProperty("display") ? U.display : null, O.style.display = Yt("display", w));
                } catch (Be) {
                  hn(n, n.return, Be);
                }
              }
            } else if (pe.tag === 6) {
              if (ce === null) try {
                pe.stateNode.nodeValue = Q ? "" : pe.memoizedProps;
              } catch (Be) {
                hn(n, n.return, Be);
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
        hi(r, n), la(n), f & 4 && rm(n);
        break;
      case 21:
        break;
      default:
        hi(
          r,
          n
        ), la(n);
    }
  }
  function la(n) {
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
            f.flags & 32 && (Se(h, ""), f.flags &= -33);
            var g = co(n);
            Fi(n, g, h);
            break;
          case 3:
          case 4:
            var w = f.stateNode.containerInfo, O = co(n);
            zi(n, O, w);
            break;
          default:
            throw Error(c(161));
        }
      } catch (U) {
        hn(n, n.return, U);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Ng(n, r, s) {
    Le = n, bp(n);
  }
  function bp(n, r, s) {
    for (var f = (n.mode & 1) !== 0; Le !== null; ) {
      var h = Le, g = h.child;
      if (h.tag === 22 && f) {
        var w = h.memoizedState !== null || Zu;
        if (!w) {
          var O = h.alternate, U = O !== null && O.memoizedState !== null || kr;
          O = Zu;
          var Q = kr;
          if (Zu = w, (kr = U) && !Q) for (Le = h; Le !== null; ) w = Le, U = w.child, w.tag === 22 && w.memoizedState !== null ? Dp(h) : U !== null ? (U.return = w, Le = U) : Dp(h);
          for (; g !== null; ) Le = g, bp(g), g = g.sibling;
          Le = h, Zu = O, kr = Q;
        }
        am(n);
      } else h.subtreeFlags & 8772 && g !== null ? (g.return = h, Le = g) : am(n);
    }
  }
  function am(n) {
    for (; Le !== null; ) {
      var r = Le;
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
                var h = r.elementType === r.type ? s.memoizedProps : pi(r.type, s.memoizedProps);
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
              var O = r.stateNode;
              if (s === null && r.flags & 4) {
                s = O;
                var U = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    U.autoFocus && s.focus();
                    break;
                  case "img":
                    U.src && (s.src = U.src);
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
                var Q = r.alternate;
                if (Q !== null) {
                  var ce = Q.memoizedState;
                  if (ce !== null) {
                    var pe = ce.dehydrated;
                    pe !== null && si(pe);
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
        Le = null;
        break;
      }
      if (s = r.sibling, s !== null) {
        s.return = r.return, Le = s;
        break;
      }
      Le = r.return;
    }
  }
  function nc(n) {
    for (; Le !== null; ) {
      var r = Le;
      if (r === n) {
        Le = null;
        break;
      }
      var s = r.sibling;
      if (s !== null) {
        s.return = r.return, Le = s;
        break;
      }
      Le = r.return;
    }
  }
  function Dp(n) {
    for (; Le !== null; ) {
      var r = Le;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var s = r.return;
            try {
              ec(4, r);
            } catch (U) {
              hn(r, s, U);
            }
            break;
          case 1:
            var f = r.stateNode;
            if (typeof f.componentDidMount == "function") {
              var h = r.return;
              try {
                f.componentDidMount();
              } catch (U) {
                hn(r, h, U);
              }
            }
            var g = r.return;
            try {
              Rp(r);
            } catch (U) {
              hn(r, g, U);
            }
            break;
          case 5:
            var w = r.return;
            try {
              Rp(r);
            } catch (U) {
              hn(r, w, U);
            }
        }
      } catch (U) {
        hn(r, r.return, U);
      }
      if (r === n) {
        Le = null;
        break;
      }
      var O = r.sibling;
      if (O !== null) {
        O.return = r.return, Le = O;
        break;
      }
      Le = r.return;
    }
  }
  var Pg = Math.ceil, Xo = ye.ReactCurrentDispatcher, $l = ye.ReactCurrentOwner, hr = ye.ReactCurrentBatchConfig, At = 0, qn = null, Hn = null, vr = 0, wa = 0, Fs = za(0), kn = 0, rc = null, ji = 0, js = 0, Nf = 0, ac = null, sa = null, _p = 0, Bs = 1 / 0, ba = null, Hs = !1, Gl = null, qo = null, Pf = !1, fo = null, ic = 0, Zo = 0, Is = null, oc = -1, Mr = 0;
  function In() {
    return At & 6 ? dt() : oc !== -1 ? oc : oc = dt();
  }
  function Bi(n) {
    return n.mode & 1 ? At & 2 && vr !== 0 ? vr & -vr : Ag.transition !== null ? (Mr === 0 && (Mr = vs()), Mr) : (n = zt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Ts(n.type)), n) : 1;
  }
  function jr(n, r, s, f) {
    if (50 < Zo) throw Zo = 0, Is = null, Error(c(185));
    Zi(n, s, f), (!(At & 2) || n !== qn) && (n === qn && (!(At & 2) && (js |= s), kn === 4 && vi(n, vr)), ua(n, f), s === 1 && At === 0 && !(r.mode & 1) && (Bs = dt() + 500, Ls && Li()));
  }
  function ua(n, r) {
    var s = n.callbackNode;
    Cl(n, r);
    var f = li(n, n === qn ? vr : 0);
    if (f === 0) s !== null && cr(s), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = f & -f, n.callbackPriority !== r) {
      if (s != null && cr(s), r === 1) n.tag === 0 ? Bo(kp.bind(null, n)) : ef(kp.bind(null, n)), ks(function() {
        !(At & 6) && Li();
      }), s = null;
      else {
        switch (ys(f)) {
          case 1:
            s = ii;
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
        s = hm(s, Uf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = s;
    }
  }
  function Uf(n, r) {
    if (oc = -1, Mr = 0, At & 6) throw Error(c(327));
    var s = n.callbackNode;
    if (Ys() && n.callbackNode !== s) return null;
    var f = li(n, n === qn ? vr : 0);
    if (f === 0) return null;
    if (f & 30 || f & n.expiredLanes || r) r = Vf(n, f);
    else {
      r = f;
      var h = At;
      At |= 2;
      var g = om();
      (qn !== n || vr !== r) && (ba = null, Bs = dt() + 500, po(n, r));
      do
        try {
          lm();
          break;
        } catch (O) {
          im(n, O);
        }
      while (!0);
      ip(), Xo.current = g, At = h, Hn !== null ? r = 0 : (qn = null, vr = 0, r = kn);
    }
    if (r !== 0) {
      if (r === 2 && (h = Ao(n), h !== 0 && (f = h, r = lc(n, h))), r === 1) throw s = rc, po(n, 0), vi(n, f), ua(n, dt()), s;
      if (r === 6) vi(n, f);
      else {
        if (h = n.current.alternate, !(f & 30) && !Ug(h) && (r = Vf(n, f), r === 2 && (g = Ao(n), g !== 0 && (f = g, r = lc(n, g))), r === 1)) throw s = rc, po(n, 0), vi(n, f), ua(n, dt()), s;
        switch (n.finishedWork = h, n.finishedLanes = f, r) {
          case 0:
          case 1:
            throw Error(c(345));
          case 2:
            Xl(n, sa, ba);
            break;
          case 3:
            if (vi(n, f), (f & 130023424) === f && (r = _p + 500 - dt(), 10 < r)) {
              if (li(n, 0) !== 0) break;
              if (h = n.suspendedLanes, (h & f) !== f) {
                In(), n.pingedLanes |= n.suspendedLanes & h;
                break;
              }
              n.timeoutHandle = qc(Xl.bind(null, n, sa, ba), r);
              break;
            }
            Xl(n, sa, ba);
            break;
          case 4:
            if (vi(n, f), (f & 4194240) === f) break;
            for (r = n.eventTimes, h = -1; 0 < f; ) {
              var w = 31 - Nr(f);
              g = 1 << w, w = r[w], w > h && (h = w), f &= ~g;
            }
            if (f = h, f = dt() - f, f = (120 > f ? 120 : 480 > f ? 480 : 1080 > f ? 1080 : 1920 > f ? 1920 : 3e3 > f ? 3e3 : 4320 > f ? 4320 : 1960 * Pg(f / 1960)) - f, 10 < f) {
              n.timeoutHandle = qc(Xl.bind(null, n, sa, ba), f);
              break;
            }
            Xl(n, sa, ba);
            break;
          case 5:
            Xl(n, sa, ba);
            break;
          default:
            throw Error(c(329));
        }
      }
    }
    return ua(n, dt()), n.callbackNode === s ? Uf.bind(null, n) : null;
  }
  function lc(n, r) {
    var s = ac;
    return n.current.memoizedState.isDehydrated && (po(n, r).flags |= 256), n = Vf(n, r), n !== 2 && (r = sa, sa = s, r !== null && Kl(r)), n;
  }
  function Kl(n) {
    sa === null ? sa = n : sa.push.apply(sa, n);
  }
  function Ug(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var s = r.updateQueue;
        if (s !== null && (s = s.stores, s !== null)) for (var f = 0; f < s.length; f++) {
          var h = s[f], g = h.getSnapshot;
          h = h.value;
          try {
            if (!ci(g(), h)) return !1;
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
  function vi(n, r) {
    for (r &= ~Nf, r &= ~js, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var s = 31 - Nr(r), f = 1 << s;
      n[s] = -1, r &= ~f;
    }
  }
  function kp(n) {
    if (At & 6) throw Error(c(327));
    Ys();
    var r = li(n, 0);
    if (!(r & 1)) return ua(n, dt()), null;
    var s = Vf(n, r);
    if (n.tag !== 0 && s === 2) {
      var f = Ao(n);
      f !== 0 && (r = f, s = lc(n, f));
    }
    if (s === 1) throw s = rc, po(n, 0), vi(n, r), ua(n, dt()), s;
    if (s === 6) throw Error(c(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Xl(n, sa, ba), ua(n, dt()), null;
  }
  function Mp(n, r) {
    var s = At;
    At |= 1;
    try {
      return n(r);
    } finally {
      At = s, At === 0 && (Bs = dt() + 500, Ls && Li());
    }
  }
  function Ql(n) {
    fo !== null && fo.tag === 0 && !(At & 6) && Ys();
    var r = At;
    At |= 1;
    var s = hr.transition, f = zt;
    try {
      if (hr.transition = null, zt = 1, n) return n();
    } finally {
      zt = f, hr.transition = s, At = r, !(At & 6) && Li();
    }
  }
  function Op() {
    wa = Fs.current, sn(Fs);
  }
  function po(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var s = n.timeoutHandle;
    if (s !== -1 && (n.timeoutHandle = -1, ep(s)), Hn !== null) for (s = Hn.return; s !== null; ) {
      var f = s;
      switch (nf(f), f.tag) {
        case 1:
          f = f.type.childContextTypes, f != null && As();
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
          Op();
      }
      s = s.return;
    }
    if (qn = n, Hn = n = Jo(n.current, null), vr = wa = r, kn = 0, rc = null, Nf = js = ji = 0, sa = ac = null, Pl !== null) {
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
        if (ip(), Rt.current = Il, uf) {
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
          var g = n, w = s.return, O = s, U = r;
          if (r = vr, O.flags |= 32768, U !== null && typeof U == "object" && typeof U.then == "function") {
            var Q = U, ce = O, pe = ce.tag;
            if (!(ce.mode & 1) && (pe === 0 || pe === 11 || pe === 15)) {
              var ue = ce.alternate;
              ue ? (ce.updateQueue = ue.updateQueue, ce.memoizedState = ue.memoizedState, ce.lanes = ue.lanes) : (ce.updateQueue = null, ce.memoizedState = null);
            }
            var ke = $v(w);
            if (ke !== null) {
              ke.flags &= -257, Qo(ke, w, O, g, r), ke.mode & 1 && Sp(g, Q, r), r = ke, U = Q;
              var ze = r.updateQueue;
              if (ze === null) {
                var Be = /* @__PURE__ */ new Set();
                Be.add(U), r.updateQueue = Be;
              } else ze.add(U);
              break e;
            } else {
              if (!(r & 1)) {
                Sp(g, Q, r), Ap();
                break e;
              }
              U = Error(c(426));
            }
          } else if (pn && O.mode & 1) {
            var Mn = $v(w);
            if (Mn !== null) {
              !(Mn.flags & 65536) && (Mn.flags |= 256), Qo(Mn, w, O, g, r), lo(Yl(U, O));
              break e;
            }
          }
          g = U = Yl(U, O), kn !== 4 && (kn = 2), ac === null ? ac = [g] : ac.push(g), g = w;
          do {
            switch (g.tag) {
              case 3:
                g.flags |= 65536, r &= -r, g.lanes |= r;
                var B = Wv(g, U, r);
                jv(g, B);
                break e;
              case 1:
                O = U;
                var z = g.type, W = g.stateNode;
                if (!(g.flags & 128) && (typeof z.getDerivedStateFromError == "function" || W !== null && typeof W.componentDidCatch == "function" && (qo === null || !qo.has(W)))) {
                  g.flags |= 65536, r &= -r, g.lanes |= r;
                  var fe = gp(g, O, r);
                  jv(g, fe);
                  break e;
                }
            }
            g = g.return;
          } while (g !== null);
        }
        um(s);
      } catch (Fe) {
        r = Fe, Hn === s && s !== null && (Hn = s = s.return);
        continue;
      }
      break;
    } while (!0);
  }
  function om() {
    var n = Xo.current;
    return Xo.current = Il, n === null ? Il : n;
  }
  function Ap() {
    (kn === 0 || kn === 3 || kn === 2) && (kn = 4), qn === null || !(ji & 268435455) && !(js & 268435455) || vi(qn, vr);
  }
  function Vf(n, r) {
    var s = At;
    At |= 2;
    var f = om();
    (qn !== n || vr !== r) && (ba = null, po(n, r));
    do
      try {
        Vg();
        break;
      } catch (h) {
        im(n, h);
      }
    while (!0);
    if (ip(), At = s, Xo.current = f, Hn !== null) throw Error(c(261));
    return qn = null, vr = 0, kn;
  }
  function Vg() {
    for (; Hn !== null; ) sm(Hn);
  }
  function lm() {
    for (; Hn !== null && !ri(); ) sm(Hn);
  }
  function sm(n) {
    var r = pm(n.alternate, n, wa);
    n.memoizedProps = n.pendingProps, r === null ? um(n) : Hn = r, $l.current = null;
  }
  function um(n) {
    var r = n;
    do {
      var s = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (s = Of(s, r), s !== null) {
          s.flags &= 32767, Hn = s;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          kn = 6, Hn = null;
          return;
        }
      } else if (s = Jv(s, r, wa), s !== null) {
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
      hr.transition = null, zt = 1, zg(n, r, s, f);
    } finally {
      hr.transition = h, zt = f;
    }
    return null;
  }
  function zg(n, r, s, f) {
    do
      Ys();
    while (fo !== null);
    if (At & 6) throw Error(c(327));
    s = n.finishedWork;
    var h = n.finishedLanes;
    if (s === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, s === n.current) throw Error(c(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var g = s.lanes | s.childLanes;
    if (Ld(n, g), n === qn && (Hn = qn = null, vr = 0), !(s.subtreeFlags & 2064) && !(s.flags & 2064) || Pf || (Pf = !0, hm(El, function() {
      return Ys(), null;
    })), g = (s.flags & 15990) !== 0, s.subtreeFlags & 15990 || g) {
      g = hr.transition, hr.transition = null;
      var w = zt;
      zt = 1;
      var O = At;
      At |= 4, $l.current = null, tm(n, s), wp(s, n), ws(Ml), Pa = !!_u, Ml = _u = null, n.current = s, Ng(s), ai(), At = O, zt = w, hr.transition = g;
    } else n.current = s;
    if (Pf && (Pf = !1, fo = n, ic = h), g = n.pendingLanes, g === 0 && (qo = null), hu(s.stateNode), ua(n, dt()), r !== null) for (f = n.onRecoverableError, s = 0; s < r.length; s++) h = r[s], f(h.value, { componentStack: h.stack, digest: h.digest });
    if (Hs) throw Hs = !1, n = Gl, Gl = null, n;
    return ic & 1 && n.tag !== 0 && Ys(), g = n.pendingLanes, g & 1 ? n === Is ? Zo++ : (Zo = 0, Is = n) : Zo = 0, Li(), null;
  }
  function Ys() {
    if (fo !== null) {
      var n = ys(ic), r = hr.transition, s = zt;
      try {
        if (hr.transition = null, zt = 16 > n ? 16 : n, fo === null) var f = !1;
        else {
          if (n = fo, fo = null, ic = 0, At & 6) throw Error(c(331));
          var h = At;
          for (At |= 4, Le = n.current; Le !== null; ) {
            var g = Le, w = g.child;
            if (Le.flags & 16) {
              var O = g.deletions;
              if (O !== null) {
                for (var U = 0; U < O.length; U++) {
                  var Q = O[U];
                  for (Le = Q; Le !== null; ) {
                    var ce = Le;
                    switch (ce.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ju(8, ce, g);
                    }
                    var pe = ce.child;
                    if (pe !== null) pe.return = ce, Le = pe;
                    else for (; Le !== null; ) {
                      ce = Le;
                      var ue = ce.sibling, ke = ce.return;
                      if (Lf(ce), ce === Q) {
                        Le = null;
                        break;
                      }
                      if (ue !== null) {
                        ue.return = ke, Le = ue;
                        break;
                      }
                      Le = ke;
                    }
                  }
                }
                var ze = g.alternate;
                if (ze !== null) {
                  var Be = ze.child;
                  if (Be !== null) {
                    ze.child = null;
                    do {
                      var Mn = Be.sibling;
                      Be.sibling = null, Be = Mn;
                    } while (Be !== null);
                  }
                }
                Le = g;
              }
            }
            if (g.subtreeFlags & 2064 && w !== null) w.return = g, Le = w;
            else e: for (; Le !== null; ) {
              if (g = Le, g.flags & 2048) switch (g.tag) {
                case 0:
                case 11:
                case 15:
                  Ju(9, g, g.return);
              }
              var B = g.sibling;
              if (B !== null) {
                B.return = g.return, Le = B;
                break e;
              }
              Le = g.return;
            }
          }
          var z = n.current;
          for (Le = z; Le !== null; ) {
            w = Le;
            var W = w.child;
            if (w.subtreeFlags & 2064 && W !== null) W.return = w, Le = W;
            else e: for (w = z; Le !== null; ) {
              if (O = Le, O.flags & 2048) try {
                switch (O.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ec(9, O);
                }
              } catch (Fe) {
                hn(O, O.return, Fe);
              }
              if (O === w) {
                Le = null;
                break e;
              }
              var fe = O.sibling;
              if (fe !== null) {
                fe.return = O.return, Le = fe;
                break e;
              }
              Le = O.return;
            }
          }
          if (At = h, Li(), Zr && typeof Zr.onPostCommitFiberRoot == "function") try {
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
  function cm(n, r, s) {
    r = Yl(s, r), r = Wv(n, r, 1), n = $o(n, r, 1), r = In(), n !== null && (Zi(n, 1, r), ua(n, r));
  }
  function hn(n, r, s) {
    if (n.tag === 3) cm(n, n, s);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        cm(r, n, s);
        break;
      } else if (r.tag === 1) {
        var f = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && (qo === null || !qo.has(f))) {
          n = Yl(s, n), n = gp(r, n, 1), r = $o(r, n, 1), n = In(), r !== null && (Zi(r, 1, n), ua(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Fg(n, r, s) {
    var f = n.pingCache;
    f !== null && f.delete(r), r = In(), n.pingedLanes |= n.suspendedLanes & s, qn === n && (vr & s) === s && (kn === 4 || kn === 3 && (vr & 130023424) === vr && 500 > dt() - _p ? po(n, 0) : Nf |= s), ua(n, r);
  }
  function fm(n, r) {
    r === 0 && (n.mode & 1 ? (r = Ea, Ea <<= 1, !(Ea & 130023424) && (Ea = 4194304)) : r = 1);
    var s = In();
    n = xa(n, r), n !== null && (Zi(n, r, s), ua(n, s));
  }
  function jg(n) {
    var r = n.memoizedState, s = 0;
    r !== null && (s = r.retryLane), fm(n, s);
  }
  function dm(n, r) {
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
    f !== null && f.delete(r), fm(n, s);
  }
  var pm;
  pm = function(n, r, s) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Qn.current) jn = !0;
    else {
      if (!(n.lanes & s) && !(r.flags & 128)) return jn = !1, Xu(n, r, s);
      jn = !!(n.flags & 131072);
    }
    else jn = !1, pn && r.flags & 1048576 && Uv(r, oo, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var f = r.type;
        Ha(n, r), n = r.pendingProps;
        var h = ta(r, Tn.current);
        gn(r, s), h = Go(null, r, f, n, h, s);
        var g = di();
        return r.flags |= 1, typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Vn(f) ? (g = !0, nr(r)) : g = !1, r.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, cp(r), h.updater = bf, r.stateNode = h, h._reactInternals = r, Wu(r, f, n, s), r = Ku(null, r, f, !0, g, s)) : (r.tag = 0, pn && g && tf(r), pr(null, r, h, s), r = r.child), r;
      case 16:
        f = r.elementType;
        e: {
          switch (Ha(n, r), n = r.pendingProps, h = f._init, f = h(f._payload), r.type = f, h = r.tag = Hg(f), n = pi(f, n), h) {
            case 0:
              r = Gv(null, r, f, n, s);
              break e;
            case 1:
              r = Kv(null, r, f, n, s);
              break e;
            case 11:
              r = oa(null, r, f, n, s);
              break e;
            case 14:
              r = Wl(null, r, f, pi(f.type, n), s);
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
        return f = r.type, h = r.pendingProps, h = r.elementType === f ? h : pi(f, h), Gv(n, r, f, h, s);
      case 1:
        return f = r.type, h = r.pendingProps, h = r.elementType === f ? h : pi(f, h), Kv(n, r, f, h, s);
      case 3:
        e: {
          if (Vs(r), n === null) throw Error(c(387));
          f = r.pendingProps, g = r.memoizedState, h = g.element, Fv(n, r), Lu(r, f, null, s);
          var w = r.memoizedState;
          if (f = w.element, g.isDehydrated) if (g = { element: f, isDehydrated: !1, cache: w.cache, pendingSuspenseBoundaries: w.pendingSuspenseBoundaries, transitions: w.transitions }, r.updateQueue.baseState = g, r.memoizedState = g, r.flags & 256) {
            h = Yl(Error(c(423)), r), r = Qv(n, r, f, s, h);
            break e;
          } else if (f !== h) {
            h = Yl(Error(c(424)), r), r = Qv(n, r, f, s, h);
            break e;
          } else for (ra = Mi(r.stateNode.containerInfo.firstChild), na = r, pn = !0, ja = null, s = we(r, null, f, s), r.child = s; s; ) s.flags = s.flags & -3 | 4096, s = s.sibling;
          else {
            if (Wo(), f === h) {
              r = Ia(n, r, s);
              break e;
            }
            pr(n, r, f, s);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Bv(r), n === null && rp(r), f = r.type, h = r.pendingProps, g = n !== null ? n.memoizedProps : null, w = h.children, Xc(f, h) ? w = null : g !== null && Xc(f, g) && (r.flags |= 32), Ep(n, r), pr(n, r, w, s), r.child;
      case 6:
        return n === null && rp(r), null;
      case 13:
        return Mf(n, r, s);
      case 4:
        return dp(r, r.stateNode.containerInfo), f = r.pendingProps, n === null ? r.child = bn(r, null, f, s) : pr(n, r, f, s), r.child;
      case 11:
        return f = r.type, h = r.pendingProps, h = r.elementType === f ? h : pi(f, h), oa(n, r, f, h, s);
      case 7:
        return pr(n, r, r.pendingProps, s), r.child;
      case 8:
        return pr(n, r, r.pendingProps.children, s), r.child;
      case 12:
        return pr(n, r, r.pendingProps.children, s), r.child;
      case 10:
        e: {
          if (f = r.type._context, h = r.pendingProps, g = r.memoizedProps, w = h.value, Ye(Ta, f._currentValue), f._currentValue = w, g !== null) if (ci(g.value, w)) {
            if (g.children === h.children && !Qn.current) {
              r = Ia(n, r, s);
              break e;
            }
          } else for (g = r.child, g !== null && (g.return = r); g !== null; ) {
            var O = g.dependencies;
            if (O !== null) {
              w = g.child;
              for (var U = O.firstContext; U !== null; ) {
                if (U.context === f) {
                  if (g.tag === 1) {
                    U = so(-1, s & -s), U.tag = 2;
                    var Q = g.updateQueue;
                    if (Q !== null) {
                      Q = Q.shared;
                      var ce = Q.pending;
                      ce === null ? U.next = U : (U.next = ce.next, ce.next = U), Q.pending = U;
                    }
                  }
                  g.lanes |= s, U = g.alternate, U !== null && (U.lanes |= s), lp(
                    g.return,
                    s,
                    r
                  ), O.lanes |= s;
                  break;
                }
                U = U.next;
              }
            } else if (g.tag === 10) w = g.type === r.type ? null : g.child;
            else if (g.tag === 18) {
              if (w = g.return, w === null) throw Error(c(341));
              w.lanes |= s, O = w.alternate, O !== null && (O.lanes |= s), lp(w, s, r), w = g.sibling;
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
        return h = r.type, f = r.pendingProps.children, gn(r, s), h = Ba(h), f = f(h), r.flags |= 1, pr(n, r, f, s), r.child;
      case 14:
        return f = r.type, h = pi(f, r.pendingProps), h = pi(f.type, h), Wl(n, r, f, h, s);
      case 15:
        return pt(n, r, r.type, r.pendingProps, s);
      case 17:
        return f = r.type, h = r.pendingProps, h = r.elementType === f ? h : pi(f, h), Ha(n, r), r.tag = 1, Vn(f) ? (n = !0, nr(r)) : n = !1, gn(r, s), Df(r, f, h), Wu(r, f, h, s), Ku(null, r, f, !0, n, s);
      case 19:
        return Vi(n, r, s);
      case 22:
        return Gu(n, r, s);
    }
    throw Error(c(156, r.tag));
  };
  function hm(n, r) {
    return cn(n, r);
  }
  function Bg(n, r, s, f) {
    this.tag = n, this.key = s, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = f, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Wa(n, r, s, f) {
    return new Bg(n, r, s, f);
  }
  function Lp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Hg(n) {
    if (typeof n == "function") return Lp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === tt) return 11;
      if (n === Dt) return 14;
    }
    return 2;
  }
  function Jo(n, r) {
    var s = n.alternate;
    return s === null ? (s = Wa(n.tag, r, n.key, n.mode), s.elementType = n.elementType, s.type = n.type, s.stateNode = n.stateNode, s.alternate = n, n.alternate = s) : (s.pendingProps = r, s.type = n.type, s.flags = 0, s.subtreeFlags = 0, s.deletions = null), s.flags = n.flags & 14680064, s.childLanes = n.childLanes, s.lanes = n.lanes, s.child = n.child, s.memoizedProps = n.memoizedProps, s.memoizedState = n.memoizedState, s.updateQueue = n.updateQueue, r = n.dependencies, s.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, s.sibling = n.sibling, s.index = n.index, s.ref = n.ref, s;
  }
  function sc(n, r, s, f, h, g) {
    var w = 2;
    if (f = n, typeof n == "function") Lp(n) && (w = 1);
    else if (typeof n == "string") w = 5;
    else e: switch (n) {
      case Ee:
        return ho(s.children, h, g, r);
      case De:
        w = 8, h |= 8;
        break;
      case Ne:
        return n = Wa(12, s, r, h | 2), n.elementType = Ne, n.lanes = g, n;
      case Ue:
        return n = Wa(13, s, r, h), n.elementType = Ue, n.lanes = g, n;
      case Et:
        return n = Wa(19, s, r, h), n.elementType = Et, n.lanes = g, n;
      case Ce:
        return el(s, h, g, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Oe:
            w = 10;
            break e;
          case lt:
            w = 9;
            break e;
          case tt:
            w = 11;
            break e;
          case Dt:
            w = 14;
            break e;
          case kt:
            w = 16, f = null;
            break e;
        }
        throw Error(c(130, n == null ? n : typeof n, ""));
    }
    return r = Wa(w, s, r, h), r.elementType = n, r.type = f, r.lanes = g, r;
  }
  function ho(n, r, s, f) {
    return n = Wa(7, n, f, r), n.lanes = s, n;
  }
  function el(n, r, s, f) {
    return n = Wa(22, n, f, r), n.elementType = Ce, n.lanes = s, n.stateNode = { isHidden: !1 }, n;
  }
  function Np(n, r, s) {
    return n = Wa(6, n, null, r), n.lanes = s, n;
  }
  function zf(n, r, s) {
    return r = Wa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = s, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function vm(n, r, s, f, h) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ms(0), this.expirationTimes = ms(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ms(0), this.identifierPrefix = f, this.onRecoverableError = h, this.mutableSourceEagerHydrationData = null;
  }
  function Ff(n, r, s, f, h, g, w, O, U) {
    return n = new vm(n, r, s, O, U), r === 1 ? (r = 1, g === !0 && (r |= 8)) : r = 0, g = Wa(3, null, null, r), n.current = g, g.stateNode = n, g.memoizedState = { element: f, isDehydrated: s, cache: null, transitions: null, pendingSuspenseBoundaries: null }, cp(g), n;
  }
  function Ig(n, r, s) {
    var f = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ve, key: f == null ? null : "" + f, children: n, containerInfo: r, implementation: s };
  }
  function Pp(n) {
    if (!n) return Dr;
    n = n._reactInternals;
    e: {
      if (ft(n) !== n || n.tag !== 1) throw Error(c(170));
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
      if (Vn(s)) return Ou(n, s, r);
    }
    return r;
  }
  function mm(n, r, s, f, h, g, w, O, U) {
    return n = Ff(s, f, !0, n, h, g, w, O, U), n.context = Pp(null), s = n.current, f = In(), h = Bi(s), g = so(f, h), g.callback = r ?? null, $o(s, g, h), n.current.lanes = h, Zi(n, h, f), ua(n, f), n;
  }
  function jf(n, r, s, f) {
    var h = r.current, g = In(), w = Bi(h);
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
  function ym() {
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
      }), r[ao] = null;
    }
  };
  function If(n) {
    this._internalRoot = n;
  }
  If.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = ot();
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
  function gm() {
  }
  function Yg(n, r, s, f, h) {
    if (h) {
      if (typeof f == "function") {
        var g = f;
        f = function() {
          var Q = Bf(w);
          g.call(Q);
        };
      }
      var w = mm(r, f, n, 0, null, !1, !1, "", gm);
      return n._reactRootContainer = w, n[ao] = w.current, Ds(n.nodeType === 8 ? n.parentNode : n), Ql(), w;
    }
    for (; h = n.lastChild; ) n.removeChild(h);
    if (typeof f == "function") {
      var O = f;
      f = function() {
        var Q = Bf(U);
        O.call(Q);
      };
    }
    var U = Ff(n, 0, !1, null, null, !1, !1, "", gm);
    return n._reactRootContainer = U, n[ao] = U.current, Ds(n.nodeType === 8 ? n.parentNode : n), Ql(function() {
      jf(r, U, s, f);
    }), U;
  }
  function uc(n, r, s, f, h) {
    var g = s._reactRootContainer;
    if (g) {
      var w = g;
      if (typeof h == "function") {
        var O = h;
        h = function() {
          var U = Bf(w);
          O.call(U);
        };
      }
      jf(r, w, n, h);
    } else w = Yg(s, r, n, h, f);
    return Bf(w);
  }
  Pt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var s = oi(r.pendingLanes);
          s !== 0 && (Ji(r, s | 1), ua(r, dt()), !(At & 6) && (Bs = dt() + 500, Li()));
        }
        break;
      case 13:
        Ql(function() {
          var f = xa(n, 1);
          if (f !== null) {
            var h = In();
            jr(f, n, 1, h);
          }
        }), Hf(n, 1);
    }
  }, vu = function(n) {
    if (n.tag === 13) {
      var r = xa(n, 134217728);
      if (r !== null) {
        var s = In();
        jr(r, n, 134217728, s);
      }
      Hf(n, 134217728);
    }
  }, wi = function(n) {
    if (n.tag === 13) {
      var r = Bi(n), s = xa(n, r);
      if (s !== null) {
        var f = In();
        jr(s, n, r, f);
      }
      Hf(n, r);
    }
  }, ot = function() {
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
              Or(f), qr(f, h);
            }
          }
        }
        break;
      case "textarea":
        ei(n, s);
        break;
      case "select":
        r = s.value, r != null && Rn(n, !!s.multiple, r, !1);
    }
  }, yl = Mp, Do = Ql;
  var Wg = { usingClientEntryPoint: !1, Events: [We, fi, yn, qi, ml, Mp] }, cc = { findFiberByHostInstance: Ol, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Sm = { bundleType: cc.bundleType, version: cc.version, rendererPackageName: cc.rendererPackageName, rendererConfig: cc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ye.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = wn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: cc.findFiberByHostInstance || ym, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var tl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!tl.isDisabled && tl.supportsFiber) try {
      Mo = tl.inject(Sm), Zr = tl;
    } catch {
    }
  }
  return qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wg, qa.createPortal = function(n, r) {
    var s = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!zp(r)) throw Error(c(200));
    return Ig(n, r, null, s);
  }, qa.createRoot = function(n, r) {
    if (!zp(n)) throw Error(c(299));
    var s = !1, f = "", h = ql;
    return r != null && (r.unstable_strictMode === !0 && (s = !0), r.identifierPrefix !== void 0 && (f = r.identifierPrefix), r.onRecoverableError !== void 0 && (h = r.onRecoverableError)), r = Ff(n, 1, !1, null, null, s, !1, f, h), n[ao] = r.current, Ds(n.nodeType === 8 ? n.parentNode : n), new Vp(r);
  }, qa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(c(188)) : (n = Object.keys(n).join(","), Error(c(268, n)));
    return n = wn(r), n = n === null ? null : n.stateNode, n;
  }, qa.flushSync = function(n) {
    return Ql(n);
  }, qa.hydrate = function(n, r, s) {
    if (!Yf(r)) throw Error(c(200));
    return uc(null, n, r, !0, s);
  }, qa.hydrateRoot = function(n, r, s) {
    if (!zp(n)) throw Error(c(405));
    var f = s != null && s.hydratedSources || null, h = !1, g = "", w = ql;
    if (s != null && (s.unstable_strictMode === !0 && (h = !0), s.identifierPrefix !== void 0 && (g = s.identifierPrefix), s.onRecoverableError !== void 0 && (w = s.onRecoverableError)), r = mm(r, null, n, 1, s ?? null, h, !1, g, w), n[ao] = r.current, Ds(n), f) for (n = 0; n < f.length; n++) s = f[n], h = s._getVersion, h = h(s._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [s, h] : r.mutableSourceEagerHydrationData.push(
      s,
      h
    );
    return new If(r);
  }, qa.render = function(n, r, s) {
    if (!Yf(r)) throw Error(c(200));
    return uc(null, n, r, !1, s);
  }, qa.unmountComponentAtNode = function(n) {
    if (!Yf(n)) throw Error(c(40));
    return n._reactRootContainer ? (Ql(function() {
      uc(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ao] = null;
      });
    }), !0) : !1;
  }, qa.unstable_batchedUpdates = Mp, qa.unstable_renderSubtreeIntoContainer = function(n, r, s, f) {
    if (!Yf(s)) throw Error(c(200));
    if (n == null || n._reactInternals === void 0) throw Error(c(38));
    return uc(n, r, s, !1, f);
  }, qa.version = "18.3.1-next-f1338f8080-20240426", qa;
}
var Za = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fw;
function OL() {
  return Fw || (Fw = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var o = Ge, l = o1(), c = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, p = !1;
    function y(e) {
      p = e;
    }
    function T(e) {
      if (!p) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        E("warn", e, a);
      }
    }
    function v(e) {
      if (!p) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        E("error", e, a);
      }
    }
    function E(e, t, a) {
      {
        var i = c.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var d = a.map(function(m) {
          return String(m);
        });
        d.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var R = 0, b = 1, k = 2, _ = 3, A = 4, P = 5, Y = 6, K = 7, q = 8, te = 9, ie = 10, oe = 11, ye = 12, ne = 13, ve = 14, Ee = 15, De = 16, Ne = 17, Oe = 18, lt = 19, tt = 21, Ue = 22, Et = 23, Dt = 24, kt = 25, Ce = !0, de = !1, Ve = !1, ge = !1, j = !1, re = !0, nt = !0, Je = !0, Ct = !0, mt = /* @__PURE__ */ new Set(), ht = {}, yt = {};
    function Tt(e, t) {
      Gt(e, t), Gt(e + "Capture", t);
    }
    function Gt(e, t) {
      ht[e] && v("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), ht[e] = t;
      {
        var a = e.toLowerCase();
        yt[a] = e, e === "onDoubleClick" && (yt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        mt.add(t[i]);
    }
    var Nn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Or = Object.prototype.hasOwnProperty;
    function xn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
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
    function Ei(e, t) {
      if (sr(e))
        return v("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, xn(e)), Wn(e);
    }
    function ya(e, t) {
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
    var Gn = 0, Rr = 1, ei = 2, Pn = 3, wr = 4, ga = 5, ti = 6, Ci = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Se = Ci + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", He = new RegExp("^[" + Ci + "][" + Se + "]*$"), gt = {}, Yt = {};
    function rn(e) {
      return Or.call(Yt, e) ? !0 : Or.call(gt, e) ? !1 : He.test(e) ? (Yt[e] = !0, !0) : (gt[e] = !0, v("Invalid attribute name: `%s`", e), !1);
    }
    function vn(e, t, a) {
      return t !== null ? t.type === Gn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function un(e, t, a, i) {
      if (a !== null && a.type === Gn)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function tr(e, t, a, i) {
      if (t === null || typeof t > "u" || un(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Pn:
            return !t;
          case wr:
            return t === !1;
          case ga:
            return isNaN(t);
          case ti:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function an(e) {
      return Qt.hasOwnProperty(e) ? Qt[e] : null;
    }
    function Kt(e, t, a, i, u, d, m) {
      this.acceptsBooleans = t === ei || t === Pn || t === wr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = d, this.removeEmptyString = m;
    }
    var Qt = {}, Sa = [
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
    Sa.forEach(function(e) {
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
      var t = e[0], a = e[1];
      Qt[t] = new Kt(
        t,
        Rr,
        !1,
        // mustUseProperty
        a,
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
        ei,
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
        ei,
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
        ti,
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
        ga,
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
    var br = /[\-\:]([a-z])/g, Aa = function(e) {
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
      var t = e.replace(br, Aa);
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
      var t = e.replace(br, Aa);
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
      var t = e.replace(br, Aa);
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
    var qi = "xlinkHref";
    Qt[qi] = new Kt(
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
    function _o(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        $n(a, t), i.sanitizeURL && Do("" + a);
        var d = i.attributeName, m = null;
        if (i.type === wr) {
          if (e.hasAttribute(d)) {
            var S = e.getAttribute(d);
            return S === "" ? !0 : tr(t, a, i, !1) ? S : S === "" + a ? a : S;
          }
        } else if (e.hasAttribute(d)) {
          if (tr(t, a, i, !1))
            return e.getAttribute(d);
          if (i.type === Pn)
            return a;
          m = e.getAttribute(d);
        }
        return tr(t, a, i, !1) ? m === null ? a : m : m === "" + a ? a : m;
      }
    }
    function gl(e, t, a, i) {
      {
        if (!rn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return $n(a, t), u === "" + a ? a : u;
      }
    }
    function Ar(e, t, a, i) {
      var u = an(t);
      if (!vn(t, u, i)) {
        if (tr(t, a, u, i) && (a = null), i || u === null) {
          if (rn(t)) {
            var d = t;
            a === null ? e.removeAttribute(d) : ($n(a, t), e.setAttribute(d, "" + a));
          }
          return;
        }
        var m = u.mustUseProperty;
        if (m) {
          var S = u.propertyName;
          if (a === null) {
            var C = u.type;
            e[S] = C === Pn ? !1 : "";
          } else
            e[S] = a;
          return;
        }
        var D = u.attributeName, M = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(D);
        else {
          var F = u.type, V;
          F === Pn || F === wr && a === !0 ? V = "" : ($n(a, D), V = "" + a, u.sanitizeURL && Do(V.toString())), M ? e.setAttributeNS(M, D, V) : e.setAttribute(D, V);
        }
      }
    }
    var Lr = Symbol.for("react.element"), ur = Symbol.for("react.portal"), Ti = Symbol.for("react.fragment"), ni = Symbol.for("react.strict_mode"), xi = Symbol.for("react.profiler"), Ri = Symbol.for("react.provider"), N = Symbol.for("react.context"), le = Symbol.for("react.forward_ref"), Re = Symbol.for("react.suspense"), Pe = Symbol.for("react.suspense_list"), ft = Symbol.for("react.memo"), st = Symbol.for("react.lazy"), wt = Symbol.for("react.scope"), xt = Symbol.for("react.debug_trace_mode"), wn = Symbol.for("react.offscreen"), on = Symbol.for("react.legacy_hidden"), cn = Symbol.for("react.cache"), cr = Symbol.for("react.tracing_marker"), ri = Symbol.iterator, ai = "@@iterator";
    function dt(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = ri && e[ri] || e[ai];
      return typeof t == "function" ? t : null;
    }
    var vt = Object.assign, ii = 0, Sl, El, ko, ds, Mo, Zr, hu;
    function Nr() {
    }
    Nr.__reactDisabledLog = !0;
    function Pc() {
      {
        if (ii === 0) {
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
        ii++;
      }
    }
    function Uc() {
      {
        if (ii--, ii === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: vt({}, e, {
              value: Sl
            }),
            info: vt({}, e, {
              value: El
            }),
            warn: vt({}, e, {
              value: ko
            }),
            error: vt({}, e, {
              value: ds
            }),
            group: vt({}, e, {
              value: Mo
            }),
            groupCollapsed: vt({}, e, {
              value: Zr
            }),
            groupEnd: vt({}, e, {
              value: hu
            })
          });
        }
        ii < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ps = c.ReactCurrentDispatcher, Oo;
    function Ea(e, t, a) {
      {
        if (Oo === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            Oo = i && i[1] || "";
          }
        return `
` + Oo + e;
      }
    }
    var oi = !1, li;
    {
      var hs = typeof WeakMap == "function" ? WeakMap : Map;
      li = new hs();
    }
    function Cl(e, t) {
      if (!e || oi)
        return "";
      {
        var a = li.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      oi = !0;
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
            } catch (X) {
              i = X;
            }
            Reflect.construct(e, [], m);
          } else {
            try {
              m.call();
            } catch (X) {
              i = X;
            }
            e.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (X) {
            i = X;
          }
          e();
        }
      } catch (X) {
        if (X && i && typeof X.stack == "string") {
          for (var S = X.stack.split(`
`), C = i.stack.split(`
`), D = S.length - 1, M = C.length - 1; D >= 1 && M >= 0 && S[D] !== C[M]; )
            M--;
          for (; D >= 1 && M >= 0; D--, M--)
            if (S[D] !== C[M]) {
              if (D !== 1 || M !== 1)
                do
                  if (D--, M--, M < 0 || S[D] !== C[M]) {
                    var F = `
` + S[D].replace(" at new ", " at ");
                    return e.displayName && F.includes("<anonymous>") && (F = F.replace("<anonymous>", e.displayName)), typeof e == "function" && li.set(e, F), F;
                  }
                while (D >= 1 && M >= 0);
              break;
            }
        }
      } finally {
        oi = !1, ps.current = d, Uc(), Error.prepareStackTrace = u;
      }
      var V = e ? e.displayName || e.name : "", $ = V ? Ea(V) : "";
      return typeof e == "function" && li.set(e, $), $;
    }
    function Ao(e, t, a) {
      return Cl(e, !0);
    }
    function vs(e, t, a) {
      return Cl(e, !1);
    }
    function ms(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Zi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Cl(e, ms(e));
      if (typeof e == "string")
        return Ea(e);
      switch (e) {
        case Re:
          return Ea("Suspense");
        case Pe:
          return Ea("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case le:
            return vs(e.render);
          case ft:
            return Zi(e.type, t, a);
          case st: {
            var i = e, u = i._payload, d = i._init;
            try {
              return Zi(d(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Ld(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case P:
          return Ea(e.type);
        case De:
          return Ea("Lazy");
        case ne:
          return Ea("Suspense");
        case lt:
          return Ea("SuspenseList");
        case R:
        case k:
        case Ee:
          return vs(e.type);
        case oe:
          return vs(e.type.render);
        case b:
          return Ao(e.type);
        default:
          return "";
      }
    }
    function Ji(e) {
      try {
        var t = "", a = e;
        do
          t += Ld(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function zt(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function ys(e) {
      return e.displayName || "Context";
    }
    function Pt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Ti:
          return "Fragment";
        case ur:
          return "Portal";
        case xi:
          return "Profiler";
        case ni:
          return "StrictMode";
        case Re:
          return "Suspense";
        case Pe:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case N:
            var t = e;
            return ys(t) + ".Consumer";
          case Ri:
            var a = e;
            return ys(a._context) + ".Provider";
          case le:
            return zt(e, e.render, "ForwardRef");
          case ft:
            var i = e.displayName || null;
            return i !== null ? i : Pt(e.type) || "Memo";
          case st: {
            var u = e, d = u._payload, m = u._init;
            try {
              return Pt(m(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function vu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function wi(e) {
      return e.displayName || "Context";
    }
    function ot(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Dt:
          return "Cache";
        case te:
          var i = a;
          return wi(i) + ".Consumer";
        case ie:
          var u = a;
          return wi(u._context) + ".Provider";
        case Oe:
          return "DehydratedFragment";
        case oe:
          return vu(a, a.render, "ForwardRef");
        case K:
          return "Fragment";
        case P:
          return a;
        case A:
          return "Portal";
        case _:
          return "Root";
        case Y:
          return "Text";
        case De:
          return Pt(a);
        case q:
          return a === ni ? "StrictMode" : "Mode";
        case Ue:
          return "Offscreen";
        case ye:
          return "Profiler";
        case tt:
          return "Scope";
        case ne:
          return "Suspense";
        case lt:
          return "SuspenseList";
        case kt:
          return "TracingMarker";
        case b:
        case R:
        case Ne:
        case k:
        case ve:
        case Ee:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var gs = c.ReactDebugCurrentFrame, fr = null, bi = !1;
    function Pr() {
      {
        if (fr === null)
          return null;
        var e = fr._debugOwner;
        if (e !== null && typeof e < "u")
          return ot(e);
      }
      return null;
    }
    function Di() {
      return fr === null ? "" : Ji(fr);
    }
    function fn() {
      gs.getCurrentStack = null, fr = null, bi = !1;
    }
    function Xt(e) {
      gs.getCurrentStack = e === null ? null : Di, fr = e, bi = !1;
    }
    function Lo() {
      return fr;
    }
    function Kn(e) {
      bi = e;
    }
    function Ur(e) {
      return "" + e;
    }
    function La(e) {
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
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
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
    function Na(e) {
      var t = yu(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Rn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, d = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(S) {
            Rn(S), i = "" + S, d.call(this, S);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var m = {
          getValue: function() {
            return i;
          },
          setValue: function(S) {
            Rn(S), i = "" + S;
          },
          stopTracking: function() {
            xl(e), delete e[t];
          }
        };
        return m;
      }
    }
    function si(e) {
      No(e) || (e._valueTracker = Na(e));
    }
    function _i(e) {
      if (!e)
        return !1;
      var t = No(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Nd(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Pa(e) {
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
      var a = e, i = t.checked, u = vt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function ui(e, t) {
      mu("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Es && (v("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Pr() || "A component", t.type), Es = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Ss && (v("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Pr() || "A component", t.type), Ss = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: La(t.value != null ? t.value : i),
        controlled: Cs(t)
      };
    }
    function x(e, t) {
      var a = e, i = t.checked;
      i != null && Ar(a, "checked", i, !1);
    }
    function L(e, t) {
      var a = e;
      {
        var i = Cs(t);
        !a._wrapperState.controlled && i && !Rl && (v("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Rl = !0), a._wrapperState.controlled && !i && !Po && (v("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Po = !0);
      }
      x(e, t);
      var u = La(t.value), d = t.type;
      if (u != null)
        d === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Ur(u)) : a.value !== Ur(u) && (a.value = Ur(u));
      else if (d === "submit" || d === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ke(a, t.type, u) : t.hasOwnProperty("defaultValue") && Ke(a, t.type, La(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function G(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, d = u === "submit" || u === "reset";
        if (d && (t.value === void 0 || t.value === null))
          return;
        var m = Ur(i._wrapperState.initialValue);
        a || m !== i.value && (i.value = m), i.defaultValue = m;
      }
      var S = i.name;
      S !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, S !== "" && (i.name = S);
    }
    function Z(e, t) {
      var a = e;
      L(a, t), me(a, t);
    }
    function me(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        $n(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), d = 0; d < u.length; d++) {
          var m = u[d];
          if (!(m === e || m.form !== e.form)) {
            var S = Vm(m);
            if (!S)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            _i(m), L(m, S);
          }
        }
      }
    }
    function Ke(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Pa(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Ur(e._wrapperState.initialValue) : e.defaultValue !== Ur(a) && (e.defaultValue = Ur(a)));
    }
    var xe = !1, qe = !1, bt = !1;
    function Ut(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? o.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || qe || (qe = !0, v("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (bt || (bt = !0, v("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !xe && (v("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), xe = !0);
    }
    function ln(e, t) {
      t.value != null && e.setAttribute("value", Ur(La(t.value)));
    }
    var qt = Array.isArray;
    function St(e) {
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
          var a = Uo[t];
          if (e[a] != null) {
            var i = St(e[a]);
            e.multiple && !i ? v("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, mn()) : !e.multiple && i && v("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, mn());
          }
        }
      }
    }
    function eo(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var d = a, m = {}, S = 0; S < d.length; S++)
          m["$" + d[S]] = !0;
        for (var C = 0; C < u.length; C++) {
          var D = m.hasOwnProperty("$" + u[C].value);
          u[C].selected !== D && (u[C].selected = D), D && i && (u[C].defaultSelected = !0);
        }
      } else {
        for (var M = Ur(La(a)), F = null, V = 0; V < u.length; V++) {
          if (u[V].value === M) {
            u[V].selected = !0, i && (u[V].defaultSelected = !0);
            return;
          }
          F === null && !u[V].disabled && (F = u[V]);
        }
        F !== null && (F.selected = !0);
      }
    }
    function Su(e, t) {
      return vt({}, t, {
        value: void 0
      });
    }
    function wl(e, t) {
      var a = e;
      gu(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Zt && (v("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Zt = !0);
    }
    function Pd(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? eo(a, !!t.multiple, i, !1) : t.defaultValue != null && eo(a, !!t.multiple, t.defaultValue, !0);
    }
    function Vc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? eo(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? eo(a, !!t.multiple, t.defaultValue, !0) : eo(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Ud(e, t) {
      var a = e, i = t.value;
      i != null && eo(a, !!t.multiple, i, !1);
    }
    var ov = !1;
    function Vd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = vt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Ur(a._wrapperState.initialValue)
      });
      return i;
    }
    function zd(e, t) {
      var a = e;
      mu("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !ov && (v("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Pr() || "A component"), ov = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, d = t.defaultValue;
        if (u != null) {
          v("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (d != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (St(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            d = u;
          }
        }
        d == null && (d = ""), i = d;
      }
      a._wrapperState = {
        initialValue: La(i)
      };
    }
    function lv(e, t) {
      var a = e, i = La(t.value), u = La(t.defaultValue);
      if (i != null) {
        var d = Ur(i);
        d !== a.value && (a.value = d), t.defaultValue == null && a.defaultValue !== d && (a.defaultValue = d);
      }
      u != null && (a.defaultValue = Ur(u));
    }
    function sv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Eg(e, t) {
      lv(e, t);
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
    var uv = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, zc, cv = uv(function(e, t) {
      if (e.namespaceURI === jd && !("innerHTML" in e)) {
        zc = zc || document.createElement("div"), zc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = zc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Jr = 1, no = 3, Un = 8, ro = 9, Id = 11, xs = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === no) {
          a.nodeValue = t;
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
    function fv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var dv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Cu).forEach(function(e) {
      dv.forEach(function(t) {
        Cu[fv(t, e)] = Cu[e];
      });
    });
    function Fc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Cu.hasOwnProperty(e) && Cu[e]) ? t + "px" : (ya(t, e), ("" + t).trim());
    }
    var pv = /([A-Z])/g, hv = /^ms-/;
    function Rs(e) {
      return e.replace(pv, "-$1").toLowerCase().replace(hv, "-ms-");
    }
    var vv = function() {
    };
    {
      var Cg = /^(?:webkit|moz|o)[A-Z]/, Tg = /^-ms-/, mv = /-(.)/g, Yd = /;\s*$/, ki = {}, bl = {}, yv = !1, Tu = !1, xg = function(e) {
        return e.replace(mv, function(t, a) {
          return a.toUpperCase();
        });
      }, gv = function(e) {
        ki.hasOwnProperty(e) && ki[e] || (ki[e] = !0, v(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          xg(e.replace(Tg, "ms-"))
        ));
      }, Wd = function(e) {
        ki.hasOwnProperty(e) && ki[e] || (ki[e] = !0, v("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, $d = function(e, t) {
        bl.hasOwnProperty(t) && bl[t] || (bl[t] = !0, v(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Yd, "")));
      }, Sv = function(e, t) {
        yv || (yv = !0, v("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Ev = function(e, t) {
        Tu || (Tu = !0, v("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      vv = function(e, t) {
        e.indexOf("-") > -1 ? gv(e) : Cg.test(e) ? Wd(e) : Yd.test(t) && $d(e, t), typeof t == "number" && (isNaN(t) ? Sv(e, t) : isFinite(t) || Ev(e, t));
      };
    }
    var Cv = vv;
    function Rg(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var d = i.indexOf("--") === 0;
              t += a + (d ? i : Rs(i)) + ":", t += Fc(i, u, d), a = ";";
            }
          }
        return t || null;
      }
    }
    function Tv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Cv(i, t[i]);
          var d = Fc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, d) : a[i] = d;
        }
    }
    function wg(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function xv(e) {
      var t = {};
      for (var a in e)
        for (var i = Eu[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function bg(e, t) {
      {
        if (!t)
          return;
        var a = xv(e), i = xv(t), u = {};
        for (var d in a) {
          var m = a[d], S = i[d];
          if (S && m !== S) {
            var C = m + "," + S;
            if (u[C])
              continue;
            u[C] = !0, v("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", wg(e[m]) ? "Removing" : "Updating", m, S);
          }
        }
      }
    }
    var ci = {
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
    }, xu = vt({
      menuitem: !0
    }, ci), Rv = "__html";
    function jc(e, t) {
      if (t) {
        if (xu[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Rv in t.dangerouslySetInnerHTML))
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
    }, ws = {}, Dg = new RegExp("^(aria)-[" + Se + "]*$"), bs = new RegExp("^(aria)[A-Z][" + Se + "]*$");
    function Gd(e, t) {
      {
        if (Or.call(ws, t) && ws[t])
          return !0;
        if (bs.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Bc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return v("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ws[t] = !0, !0;
          if (t !== i)
            return v("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), ws[t] = !0, !0;
        }
        if (Dg.test(t)) {
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
        var a = [];
        for (var i in t) {
          var u = Gd(e, i);
          u || a.push(i);
        }
        var d = a.map(function(m) {
          return "`" + m + "`";
        }).join(", ");
        a.length === 1 ? v("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e) : a.length > 1 && v("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e);
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
      var dr = {}, Xd = /^on./, Ic = /^on[^A-Z]/, wv = new RegExp("^(aria)-[" + Se + "]*$"), bv = new RegExp("^(aria)[A-Z][" + Se + "]*$");
      Dl = function(e, t, a, i) {
        if (Or.call(dr, t) && dr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return v("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), dr[t] = !0, !0;
        if (i != null) {
          var d = i.registrationNameDependencies, m = i.possibleRegistrationNames;
          if (d.hasOwnProperty(t))
            return !0;
          var S = m.hasOwnProperty(u) ? m[u] : null;
          if (S != null)
            return v("Invalid event handler property `%s`. Did you mean `%s`?", t, S), dr[t] = !0, !0;
          if (Xd.test(t))
            return v("Unknown event handler property `%s`. It will be ignored.", t), dr[t] = !0, !0;
        } else if (Xd.test(t))
          return Ic.test(t) && v("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), dr[t] = !0, !0;
        if (wv.test(t) || bv.test(t))
          return !0;
        if (u === "innerhtml")
          return v("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), dr[t] = !0, !0;
        if (u === "aria")
          return v("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), dr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return v("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), dr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return v("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), dr[t] = !0, !0;
        var C = an(t), D = C !== null && C.type === Gn;
        if (Ru.hasOwnProperty(u)) {
          var M = Ru[u];
          if (M !== t)
            return v("Invalid DOM property `%s`. Did you mean `%s`?", t, M), dr[t] = !0, !0;
        } else if (!D && t !== u)
          return v("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), dr[t] = !0, !0;
        return typeof a == "boolean" && un(t, a, C, !1) ? (a ? v('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : v('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), dr[t] = !0, !0) : D ? !0 : un(t, a, C, !1) ? (dr[t] = !0, !1) : ((a === "false" || a === "true") && C !== null && C.type === Pn && (v("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), dr[t] = !0), !0);
      };
    }
    var Dv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var d = Dl(e, u, t[u], a);
          d || i.push(u);
        }
        var m = i.map(function(S) {
          return "`" + S + "`";
        }).join(", ");
        i.length === 1 ? v("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", m, e) : i.length > 1 && v("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", m, e);
      }
    };
    function _v(e, t, a) {
      Vo(e, t) || Dv(e, t, a);
    }
    var qd = 1, Yc = 2, Ua = 4, Zd = qd | Yc | Ua, _l = null;
    function _g(e) {
      _l !== null && v("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), _l = e;
    }
    function kg() {
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
        var a = t.stateNode;
        if (a) {
          var i = Vm(a);
          Wc(t.stateNode, t.type, i);
        }
      }
    }
    function Gc(e) {
      Wc = e;
    }
    function Ds(e) {
      kl ? Wt ? Wt.push(e) : Wt = [e] : kl = e;
    }
    function kv() {
      return kl !== null || Wt !== null;
    }
    function Kc() {
      if (kl) {
        var e = kl, t = Wt;
        if (kl = null, Wt = null, $c(e), t)
          for (var a = 0; a < t.length; a++)
            $c(t[a]);
      }
    }
    var _s = function(e, t) {
      return e(t);
    }, Du = function() {
    }, zo = !1;
    function Mv() {
      var e = kv();
      e && (Du(), Kc());
    }
    function Ov(e, t, a) {
      if (zo)
        return e(t, a);
      zo = !0;
      try {
        return _s(e, t, a);
      } finally {
        zo = !1, Mv();
      }
    }
    function Mg(e, t, a) {
      _s = e, Du = a;
    }
    function Av(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Qc(e, t, a) {
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
          return !!(a.disabled && Av(t));
        default:
          return !1;
      }
    }
    function Fo(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Vm(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Qc(t, e.type, i))
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
    function Xc(e, t, a, i, u, d, m, S, C) {
      var D = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, D);
      } catch (M) {
        this.onError(M);
      }
    }
    var qc = Xc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var ep = document.createElement("react");
      qc = function(t, a, i, u, d, m, S, C, D) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var M = document.createEvent("Event"), F = !1, V = !0, $ = window.event, X = Object.getOwnPropertyDescriptor(window, "event");
        function J() {
          ep.removeEventListener(ee, Qe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = $);
        }
        var be = Array.prototype.slice.call(arguments, 3);
        function Qe() {
          F = !0, J(), a.apply(i, be), V = !1;
        }
        var Ie, Nt = !1, _t = !1;
        function H(I) {
          if (Ie = I.error, Nt = !0, Ie === null && I.colno === 0 && I.lineno === 0 && (_t = !0), I.defaultPrevented && Ie != null && typeof Ie == "object")
            try {
              Ie._suppressLogging = !0;
            } catch {
            }
        }
        var ee = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", H), ep.addEventListener(ee, Qe, !1), M.initEvent(ee, !1, !1), ep.dispatchEvent(M), X && Object.defineProperty(window, "event", X), F && V && (Nt ? _t && (Ie = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ie = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ie)), window.removeEventListener("error", H), !F)
          return J(), Xc.apply(this, arguments);
      };
    }
    var Lv = qc, ks = !1, Zc = null, Ms = !1, Mi = null, Nv = {
      onError: function(e) {
        ks = !0, Zc = e;
      }
    };
    function jo(e, t, a, i, u, d, m, S, C) {
      ks = !1, Zc = null, Lv.apply(Nv, arguments);
    }
    function Oi(e, t, a, i, u, d, m, S, C) {
      if (jo.apply(this, arguments), ks) {
        var D = Mu();
        Ms || (Ms = !0, Mi = D);
      }
    }
    function ku() {
      if (Ms) {
        var e = Mi;
        throw Ms = !1, Mi = null, e;
      }
    }
    function ao() {
      return ks;
    }
    function Mu() {
      if (ks) {
        var e = Zc;
        return ks = !1, Zc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Os(e) {
      return e._reactInternals;
    }
    function Og(e) {
      return e._reactInternals !== void 0;
    }
    function Ol(e, t) {
      e._reactInternals = t;
    }
    var We = (
      /*                      */
      0
    ), fi = (
      /*                */
      1
    ), yn = (
      /*                    */
      2
    ), Ot = (
      /*                       */
      4
    ), Va = (
      /*                */
      16
    ), za = (
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
    ), ea = (
      /*                      */
      2048
    ), ta = (
      /*                    */
      4096
    ), Vn = (
      /*                   */
      8192
    ), As = (
      /*             */
      16384
    ), Pv = (
      /*               */
      32767
    ), Ou = (
      /*                   */
      32768
    ), nr = (
      /*                */
      65536
    ), Jc = (
      /* */
      131072
    ), Ai = (
      /*                       */
      1048576
    ), Ls = (
      /*                    */
      2097152
    ), io = (
      /*                 */
      4194304
    ), ef = (
      /*                */
      8388608
    ), Bo = (
      /*               */
      16777216
    ), Li = (
      /*              */
      33554432
    ), Ho = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Ot | Qn | 0
    ), Io = yn | Ot | Va | za | Tn | ta | Vn, Yo = Ot | sn | Tn | Vn, oo = ea | Va, zn = io | ef | Ls, Fa = c.ReactCurrentOwner;
    function Ca(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (yn | ta)) !== We && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === _ ? a : null;
    }
    function Ni(e) {
      if (e.tag === ne) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Pi(e) {
      return e.tag === _ ? e.stateNode.containerInfo : null;
    }
    function Al(e) {
      return Ca(e) === e;
    }
    function Uv(e) {
      {
        var t = Fa.current;
        if (t !== null && t.tag === b) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || v("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", ot(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = Os(e);
      return u ? Ca(u) === u : !1;
    }
    function tf(e) {
      if (Ca(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function nf(e) {
      var t = e.alternate;
      if (!t) {
        var a = Ca(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var d = i.return;
        if (d === null)
          break;
        var m = d.alternate;
        if (m === null) {
          var S = d.return;
          if (S !== null) {
            i = u = S;
            continue;
          }
          break;
        }
        if (d.child === m.child) {
          for (var C = d.child; C; ) {
            if (C === i)
              return tf(d), e;
            if (C === u)
              return tf(d), t;
            C = C.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = d, u = m;
        else {
          for (var D = !1, M = d.child; M; ) {
            if (M === i) {
              D = !0, i = d, u = m;
              break;
            }
            if (M === u) {
              D = !0, u = d, i = m;
              break;
            }
            M = M.sibling;
          }
          if (!D) {
            for (M = m.child; M; ) {
              if (M === i) {
                D = !0, i = m, u = d;
                break;
              }
              if (M === u) {
                D = !0, u = m, i = d;
                break;
              }
              M = M.sibling;
            }
            if (!D)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== _)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function na(e) {
      var t = nf(e);
      return t !== null ? ra(t) : null;
    }
    function ra(e) {
      if (e.tag === P || e.tag === Y)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = ra(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function pn(e) {
      var t = nf(e);
      return t !== null ? ja(t) : null;
    }
    function ja(e) {
      if (e.tag === P || e.tag === Y)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== A) {
          var a = ja(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var tp = l.unstable_scheduleCallback, Vv = l.unstable_cancelCallback, np = l.unstable_shouldYield, rp = l.unstable_requestPaint, Xn = l.unstable_now, rf = l.unstable_getCurrentPriorityLevel, Au = l.unstable_ImmediatePriority, Wo = l.unstable_UserBlockingPriority, lo = l.unstable_NormalPriority, Ag = l.unstable_LowPriority, Ll = l.unstable_IdlePriority, af = l.unstable_yieldValue, zv = l.unstable_setDisableYieldValue, Nl = null, bn = null, we = null, Ta = !1, aa = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Ns(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return v("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        nt && (e = vt({}, e, {
          getLaneLabelMap: Pl,
          injectProfilingHooks: Ba
        })), Nl = t.inject(e), bn = t;
      } catch (a) {
        v("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function ap(e, t) {
      if (bn && typeof bn.onScheduleFiberRoot == "function")
        try {
          bn.onScheduleFiberRoot(Nl, e, t);
        } catch (a) {
          Ta || (Ta = !0, v("React instrumentation encountered an error: %s", a));
        }
    }
    function ip(e, t) {
      if (bn && typeof bn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Ye) === Ye;
          if (Je) {
            var i;
            switch (t) {
              case Vr:
                i = Au;
                break;
              case Vi:
                i = Wo;
                break;
              case Ha:
                i = lo;
                break;
              case Ia:
                i = Ll;
                break;
              default:
                i = lo;
                break;
            }
            bn.onCommitFiberRoot(Nl, e, i, a);
          }
        } catch (u) {
          Ta || (Ta = !0, v("React instrumentation encountered an error: %s", u));
        }
    }
    function op(e) {
      if (bn && typeof bn.onPostCommitFiberRoot == "function")
        try {
          bn.onPostCommitFiberRoot(Nl, e);
        } catch (t) {
          Ta || (Ta = !0, v("React instrumentation encountered an error: %s", t));
        }
    }
    function lp(e) {
      if (bn && typeof bn.onCommitFiberUnmount == "function")
        try {
          bn.onCommitFiberUnmount(Nl, e);
        } catch (t) {
          Ta || (Ta = !0, v("React instrumentation encountered an error: %s", t));
        }
    }
    function gn(e) {
      if (typeof af == "function" && (zv(e), y(e)), bn && typeof bn.setStrictMode == "function")
        try {
          bn.setStrictMode(Nl, e);
        } catch (t) {
          Ta || (Ta = !0, v("React instrumentation encountered an error: %s", t));
        }
    }
    function Ba(e) {
      we = e;
    }
    function Pl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < zl; a++) {
          var i = Hv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function sp(e) {
      we !== null && typeof we.markCommitStarted == "function" && we.markCommitStarted(e);
    }
    function up() {
      we !== null && typeof we.markCommitStopped == "function" && we.markCommitStopped();
    }
    function xa(e) {
      we !== null && typeof we.markComponentRenderStarted == "function" && we.markComponentRenderStarted(e);
    }
    function Ra() {
      we !== null && typeof we.markComponentRenderStopped == "function" && we.markComponentRenderStopped();
    }
    function cp(e) {
      we !== null && typeof we.markComponentPassiveEffectMountStarted == "function" && we.markComponentPassiveEffectMountStarted(e);
    }
    function Fv() {
      we !== null && typeof we.markComponentPassiveEffectMountStopped == "function" && we.markComponentPassiveEffectMountStopped();
    }
    function so(e) {
      we !== null && typeof we.markComponentPassiveEffectUnmountStarted == "function" && we.markComponentPassiveEffectUnmountStarted(e);
    }
    function $o() {
      we !== null && typeof we.markComponentPassiveEffectUnmountStopped == "function" && we.markComponentPassiveEffectUnmountStopped();
    }
    function of(e) {
      we !== null && typeof we.markComponentLayoutEffectMountStarted == "function" && we.markComponentLayoutEffectMountStarted(e);
    }
    function jv() {
      we !== null && typeof we.markComponentLayoutEffectMountStopped == "function" && we.markComponentLayoutEffectMountStopped();
    }
    function Lu(e) {
      we !== null && typeof we.markComponentLayoutEffectUnmountStarted == "function" && we.markComponentLayoutEffectUnmountStarted(e);
    }
    function fp() {
      we !== null && typeof we.markComponentLayoutEffectUnmountStopped == "function" && we.markComponentLayoutEffectUnmountStopped();
    }
    function Nu(e, t, a) {
      we !== null && typeof we.markComponentErrored == "function" && we.markComponentErrored(e, t, a);
    }
    function Ui(e, t, a) {
      we !== null && typeof we.markComponentSuspended == "function" && we.markComponentSuspended(e, t, a);
    }
    function Pu(e) {
      we !== null && typeof we.markLayoutEffectsStarted == "function" && we.markLayoutEffectsStarted(e);
    }
    function Uu() {
      we !== null && typeof we.markLayoutEffectsStopped == "function" && we.markLayoutEffectsStopped();
    }
    function Ul(e) {
      we !== null && typeof we.markPassiveEffectsStarted == "function" && we.markPassiveEffectsStarted(e);
    }
    function dp() {
      we !== null && typeof we.markPassiveEffectsStopped == "function" && we.markPassiveEffectsStopped();
    }
    function Vl(e) {
      we !== null && typeof we.markRenderStarted == "function" && we.markRenderStarted(e);
    }
    function Bv() {
      we !== null && typeof we.markRenderYielded == "function" && we.markRenderYielded();
    }
    function lf() {
      we !== null && typeof we.markRenderStopped == "function" && we.markRenderStopped();
    }
    function Sn(e) {
      we !== null && typeof we.markRenderScheduled == "function" && we.markRenderScheduled(e);
    }
    function sf(e, t) {
      we !== null && typeof we.markForceUpdateScheduled == "function" && we.markForceUpdateScheduled(e, t);
    }
    function Vu(e, t) {
      we !== null && typeof we.markStateUpdateScheduled == "function" && we.markStateUpdateScheduled(e, t);
    }
    var $e = (
      /*                         */
      0
    ), Rt = (
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
    ), di = (
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
    ), ia = (
      /*                   */
      1073741824
    );
    function Hv(e) {
      {
        if (e & et)
          return "Sync";
        if (e & Go)
          return "InputContinuousHydration";
        if (e & di)
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
        if (e & ia)
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
        case di:
          return di;
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
        case ia:
          return ia;
        default:
          return v("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function wf(e, t) {
      var a = e.pendingLanes;
      if (a === se)
        return se;
      var i = se, u = e.suspendedLanes, d = e.pingedLanes, m = a & hp;
      if (m !== se) {
        var S = m & ~u;
        if (S !== se)
          i = Yu(S);
        else {
          var C = m & d;
          C !== se && (i = Yu(C));
        }
      } else {
        var D = a & ~u;
        D !== se ? i = Yu(D) : d !== se && (i = Yu(d));
      }
      if (i === se)
        return se;
      if (t !== se && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === se) {
        var M = Qo(i), F = Qo(t);
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
      (i & di) !== se && (i |= a & Dn);
      var V = e.entangledLanes;
      if (V !== se)
        for (var $ = e.entanglements, X = i & V; X > 0; ) {
          var J = jn(X), be = 1 << J;
          i |= $[J], X &= ~be;
        }
      return i;
    }
    function pi(e, t) {
      for (var a = e.eventTimes, i = nn; t > 0; ) {
        var u = jn(t), d = 1 << u, m = a[u];
        m > i && (i = m), t &= ~d;
      }
      return i;
    }
    function vp(e, t) {
      switch (e) {
        case et:
        case Go:
        case di:
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
        case ia:
          return nn;
        default:
          return v("Should have found matching lanes. This is a bug in React."), nn;
      }
    }
    function bf(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, d = e.expirationTimes, m = a; m > 0; ) {
        var S = jn(m), C = 1 << S, D = d[S];
        D === nn ? ((C & i) === se || (C & u) !== se) && (d[S] = vp(C, t)) : D <= t && (e.expiredLanes |= C), m &= ~C;
      }
    }
    function Iv(e) {
      return Yu(e.pendingLanes);
    }
    function Df(e) {
      var t = e.pendingLanes & ~ia;
      return t !== se ? t : t & ia ? ia : se;
    }
    function Yv(e) {
      return (e & et) !== se;
    }
    function Wu(e) {
      return (e & hp) !== se;
    }
    function Yl(e) {
      return (e & ju) === e;
    }
    function mp(e) {
      var t = et | di | Dn;
      return (e & t) === se;
    }
    function yp(e) {
      return (e & Ko) === e;
    }
    function _f(e, t) {
      var a = Go | di | _r | Dn;
      return (t & a) !== se;
    }
    function Wv(e, t) {
      return (t & e.expiredLanes) !== se;
    }
    function gp(e) {
      return (e & Ko) !== se;
    }
    function Sp() {
      var e = Il;
      return Il <<= 1, (Il & Ko) === se && (Il = Fl), e;
    }
    function $v() {
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
    function oa(e, t) {
      return (e & t) !== se;
    }
    function Wl(e, t) {
      return (e & t) === t;
    }
    function pt(e, t) {
      return e | t;
    }
    function Gu(e, t) {
      return e & ~t;
    }
    function Ep(e, t) {
      return e & t;
    }
    function Gv(e) {
      return e;
    }
    function Kv(e, t) {
      return e !== Vt && e < t ? e : t;
    }
    function Ku(e) {
      for (var t = [], a = 0; a < zl; a++)
        t.push(e);
      return t;
    }
    function Vs(e, t, a) {
      e.pendingLanes |= t, t !== Hl && (e.suspendedLanes = se, e.pingedLanes = se);
      var i = e.eventTimes, u = pr(t);
      i[u] = a;
    }
    function Qv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = jn(i), d = 1 << u;
        a[u] = nn, i &= ~d;
      }
    }
    function kf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Cp(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = se, e.pingedLanes = se, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, d = e.expirationTimes, m = a; m > 0; ) {
        var S = jn(m), C = 1 << S;
        i[S] = se, u[S] = nn, d[S] = nn, m &= ~C;
      }
    }
    function Mf(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var d = jn(u), m = 1 << d;
        // Is this one of the newly entangled lanes?
        m & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[d] & t && (i[d] |= t), u &= ~m;
      }
    }
    function Tp(e, t) {
      var a = Qo(t), i;
      switch (a) {
        case di:
          i = Go;
          break;
        case Dn:
          i = _r;
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
          i = uo;
          break;
        case Hl:
          i = Iu;
          break;
        default:
          i = Vt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Vt ? Vt : i;
    }
    function Qu(e, t, a) {
      if (aa)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = pr(a), d = 1 << u, m = i[u];
          m.add(t), a &= ~d;
        }
    }
    function Xv(e, t) {
      if (aa)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = pr(t), d = 1 << u, m = a[u];
          m.size > 0 && (m.forEach(function(S) {
            var C = S.alternate;
            (C === null || !i.has(C)) && i.add(S);
          }), m.clear()), t &= ~d;
        }
    }
    function xp(e, t) {
      return null;
    }
    var Vr = et, Vi = di, Ha = Dn, Ia = Hl, Xu = Vt;
    function Ya() {
      return Xu;
    }
    function Bn(e) {
      Xu = e;
    }
    function qv(e, t) {
      var a = Xu;
      try {
        return Xu = e, t();
      } finally {
        Xu = a;
      }
    }
    function Zv(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function qu(e, t) {
      return e > t ? e : t;
    }
    function ar(e, t) {
      return e !== 0 && e < t;
    }
    function Jv(e) {
      var t = Qo(e);
      return ar(Vr, t) ? ar(Vi, t) ? Wu(t) ? Ha : Ia : Vi : Vr;
    }
    function Of(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Zu;
    function kr(e) {
      Zu = e;
    }
    function Lg(e) {
      Zu(e);
    }
    var Le;
    function zs(e) {
      Le = e;
    }
    var Af;
    function em(e) {
      Af = e;
    }
    var tm;
    function Ju(e) {
      tm = e;
    }
    var ec;
    function Rp(e) {
      ec = e;
    }
    var Lf = !1, tc = [], co = null, zi = null, Fi = null, _n = /* @__PURE__ */ new Map(), zr = /* @__PURE__ */ new Map(), Fr = [], nm = [
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
    function rm(e) {
      return nm.indexOf(e) > -1;
    }
    function hi(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
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
          zi = null;
          break;
        case "mouseover":
        case "mouseout":
          Fi = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          _n.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          zr.delete(i);
          break;
        }
      }
    }
    function la(e, t, a, i, u, d) {
      if (e === null || e.nativeEvent !== d) {
        var m = hi(t, a, i, u, d);
        if (t !== null) {
          var S = Gs(t);
          S !== null && Le(S);
        }
        return m;
      }
      e.eventSystemFlags |= i;
      var C = e.targetContainers;
      return u !== null && C.indexOf(u) === -1 && C.push(u), e;
    }
    function Ng(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var d = u;
          return co = la(co, e, t, a, i, d), !0;
        }
        case "dragenter": {
          var m = u;
          return zi = la(zi, e, t, a, i, m), !0;
        }
        case "mouseover": {
          var S = u;
          return Fi = la(Fi, e, t, a, i, S), !0;
        }
        case "pointerover": {
          var C = u, D = C.pointerId;
          return _n.set(D, la(_n.get(D) || null, e, t, a, i, C)), !0;
        }
        case "gotpointercapture": {
          var M = u, F = M.pointerId;
          return zr.set(F, la(zr.get(F) || null, e, t, a, i, M)), !0;
        }
      }
      return !1;
    }
    function bp(e) {
      var t = pc(e.target);
      if (t !== null) {
        var a = Ca(t);
        if (a !== null) {
          var i = a.tag;
          if (i === ne) {
            var u = Ni(a);
            if (u !== null) {
              e.blockedOn = u, ec(e.priority, function() {
                Af(a);
              });
              return;
            }
          } else if (i === _) {
            var d = a.stateNode;
            if (Of(d)) {
              e.blockedOn = Pi(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function am(e) {
      for (var t = tm(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Fr.length && ar(t, Fr[i].priority); i++)
        ;
      Fr.splice(i, 0, a), i === 0 && bp(a);
    }
    function nc(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = js(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, d = new u.constructor(u.type, u);
          _g(d), u.target.dispatchEvent(d), kg();
        } else {
          var m = Gs(i);
          return m !== null && Le(m), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Dp(e, t, a) {
      nc(e) && a.delete(t);
    }
    function Pg() {
      Lf = !1, co !== null && nc(co) && (co = null), zi !== null && nc(zi) && (zi = null), Fi !== null && nc(Fi) && (Fi = null), _n.forEach(Dp), zr.forEach(Dp);
    }
    function Xo(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Lf || (Lf = !0, l.unstable_scheduleCallback(l.unstable_NormalPriority, Pg)));
    }
    function $l(e) {
      if (tc.length > 0) {
        Xo(tc[0], e);
        for (var t = 1; t < tc.length; t++) {
          var a = tc[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      co !== null && Xo(co, e), zi !== null && Xo(zi, e), Fi !== null && Xo(Fi, e);
      var i = function(S) {
        return Xo(S, e);
      };
      _n.forEach(i), zr.forEach(i);
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
    var hr = c.ReactCurrentBatchConfig, At = !0;
    function qn(e) {
      At = !!e;
    }
    function Hn() {
      return At;
    }
    function vr(e, t, a) {
      var i = Nf(t), u;
      switch (i) {
        case Vr:
          u = wa;
          break;
        case Vi:
          u = Fs;
          break;
        case Ha:
        default:
          u = kn;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function wa(e, t, a, i) {
      var u = Ya(), d = hr.transition;
      hr.transition = null;
      try {
        Bn(Vr), kn(e, t, a, i);
      } finally {
        Bn(u), hr.transition = d;
      }
    }
    function Fs(e, t, a, i) {
      var u = Ya(), d = hr.transition;
      hr.transition = null;
      try {
        Bn(Vi), kn(e, t, a, i);
      } finally {
        Bn(u), hr.transition = d;
      }
    }
    function kn(e, t, a, i) {
      At && rc(e, t, a, i);
    }
    function rc(e, t, a, i) {
      var u = js(e, t, a, i);
      if (u === null) {
        Zg(e, t, i, ji, a), wp(e, i);
        return;
      }
      if (Ng(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (wp(e, i), t & Ua && rm(e)) {
        for (; u !== null; ) {
          var d = Gs(u);
          d !== null && Lg(d);
          var m = js(e, t, a, i);
          if (m === null && Zg(e, t, i, ji, a), m === u)
            break;
          u = m;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Zg(e, t, i, null, a);
    }
    var ji = null;
    function js(e, t, a, i) {
      ji = null;
      var u = Jd(i), d = pc(u);
      if (d !== null) {
        var m = Ca(d);
        if (m === null)
          d = null;
        else {
          var S = m.tag;
          if (S === ne) {
            var C = Ni(m);
            if (C !== null)
              return C;
            d = null;
          } else if (S === _) {
            var D = m.stateNode;
            if (Of(D))
              return Pi(m);
            d = null;
          } else m !== d && (d = null);
        }
      }
      return ji = d, null;
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
          return Vi;
        case "message": {
          var t = rf();
          switch (t) {
            case Au:
              return Vr;
            case Wo:
              return Vi;
            case lo:
            case Ag:
              return Ha;
            case Ll:
              return Ia;
            default:
              return Ha;
          }
        }
        default:
          return Ha;
      }
    }
    function ac(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function sa(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function _p(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Bs(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var ba = null, Hs = null, Gl = null;
    function qo(e) {
      return ba = e, Hs = ic(), !0;
    }
    function Pf() {
      ba = null, Hs = null, Gl = null;
    }
    function fo() {
      if (Gl)
        return Gl;
      var e, t = Hs, a = t.length, i, u = ic(), d = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var m = a - e;
      for (i = 1; i <= m && t[a - i] === u[d - i]; i++)
        ;
      var S = i > 1 ? 1 - i : void 0;
      return Gl = u.slice(e, S), Gl;
    }
    function ic() {
      return "value" in ba ? ba.value : ba.textContent;
    }
    function Zo(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Is() {
      return !0;
    }
    function oc() {
      return !1;
    }
    function Mr(e) {
      function t(a, i, u, d, m) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = d, this.target = m, this.currentTarget = null;
        for (var S in e)
          if (e.hasOwnProperty(S)) {
            var C = e[S];
            C ? this[S] = C(d) : this[S] = d[S];
          }
        var D = d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1;
        return D ? this.isDefaultPrevented = Is : this.isDefaultPrevented = oc, this.isPropagationStopped = oc, this;
      }
      return vt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Is);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Is);
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
    }, Bi = Mr(In), jr = vt({}, In, {
      view: 0,
      detail: 0
    }), ua = Mr(jr), Uf, lc, Kl;
    function Ug(e) {
      e !== Kl && (Kl && e.type === "mousemove" ? (Uf = e.screenX - Kl.screenX, lc = e.screenY - Kl.screenY) : (Uf = 0, lc = 0), Kl = e);
    }
    var vi = vt({}, jr, {
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
        return "movementX" in e ? e.movementX : (Ug(e), Uf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : lc;
      }
    }), kp = Mr(vi), Mp = vt({}, vi, {
      dataTransfer: 0
    }), Ql = Mr(Mp), Op = vt({}, jr, {
      relatedTarget: 0
    }), po = Mr(Op), im = vt({}, In, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), om = Mr(im), Ap = vt({}, In, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Vf = Mr(Ap), Vg = vt({}, In, {
      data: 0
    }), lm = Mr(Vg), sm = lm, um = {
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
    function zg(e) {
      if (e.key) {
        var t = um[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Zo(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Xl[e.keyCode] || "Unidentified" : "";
    }
    var Ys = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function cm(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Ys[e];
      return i ? !!a[i] : !1;
    }
    function hn(e) {
      return cm;
    }
    var Fg = vt({}, jr, {
      key: zg,
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
    }), fm = Mr(Fg), jg = vt({}, vi, {
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
    }), dm = Mr(jg), pm = vt({}, jr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: hn
    }), hm = Mr(pm), Bg = vt({}, In, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Wa = Mr(Bg), Lp = vt({}, vi, {
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
    }), Hg = Mr(Lp), Jo = [9, 13, 27, 32], sc = 229, ho = Nn && "CompositionEvent" in window, el = null;
    Nn && "documentMode" in document && (el = document.documentMode);
    var Np = Nn && "TextEvent" in window && !el, zf = Nn && (!ho || el && el > 8 && el <= 11), vm = 32, Ff = String.fromCharCode(vm);
    function Ig() {
      Tt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Tt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Tt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Tt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Pp = !1;
    function mm(e) {
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
    function ym(e) {
      return e.locale === "ko";
    }
    var ql = !1;
    function Vp(e, t, a, i, u) {
      var d, m;
      if (ho ? d = jf(t) : ql ? Up(t, i) && (d = "onCompositionEnd") : Bf(t, i) && (d = "onCompositionStart"), !d)
        return null;
      zf && !ym(i) && (!ql && d === "onCompositionStart" ? ql = qo(u) : d === "onCompositionEnd" && ql && (m = fo()));
      var S = Rm(a, d);
      if (S.length > 0) {
        var C = new lm(d, t, null, i, u);
        if (e.push({
          event: C,
          listeners: S
        }), m)
          C.data = m;
        else {
          var D = Hf(i);
          D !== null && (C.data = D);
        }
      }
    }
    function If(e, t) {
      switch (e) {
        case "compositionend":
          return Hf(t);
        case "keypress":
          var a = t.which;
          return a !== vm ? null : (Pp = !0, Ff);
        case "textInput":
          var i = t.data;
          return i === Ff && Pp ? null : i;
        default:
          return null;
      }
    }
    function zp(e, t) {
      if (ql) {
        if (e === "compositionend" || !ho && Up(e, t)) {
          var a = fo();
          return Pf(), ql = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!mm(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return zf && !ym(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Yf(e, t, a, i, u) {
      var d;
      if (Np ? d = If(t, i) : d = zp(t, i), !d)
        return null;
      var m = Rm(a, "onBeforeInput");
      if (m.length > 0) {
        var S = new sm("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: S,
          listeners: m
        }), S.data = d;
      }
    }
    function gm(e, t, a, i, u, d, m) {
      Vp(e, t, a, i, u), Yf(e, t, a, i, u);
    }
    var Yg = {
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
      return t === "input" ? !!Yg[e.type] : t === "textarea";
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
    function Wg(e) {
      if (!Nn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function cc() {
      Tt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function Sm(e, t, a, i) {
      Ds(i);
      var u = Rm(t, "onChange");
      if (u.length > 0) {
        var d = new Bi("onChange", "change", null, a, i);
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
      Sm(t, n, e, Jd(e)), Ov(f, t);
    }
    function f(e) {
      sT(e, 0);
    }
    function h(e) {
      var t = Xf(e);
      if (_i(t))
        return e;
    }
    function g(e, t) {
      if (e === "change")
        return t;
    }
    var w = !1;
    Nn && (w = Wg("input") && (!document.documentMode || document.documentMode > 9));
    function O(e, t) {
      tl = e, n = t, tl.attachEvent("onpropertychange", Q);
    }
    function U() {
      tl && (tl.detachEvent("onpropertychange", Q), tl = null, n = null);
    }
    function Q(e) {
      e.propertyName === "value" && h(n) && s(e);
    }
    function ce(e, t, a) {
      e === "focusin" ? (U(), O(t, a)) : e === "focusout" && U();
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
    function ze(e, t) {
      if (e === "input" || e === "change")
        return h(t);
    }
    function Be(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ke(e, "number", e.value);
    }
    function Mn(e, t, a, i, u, d, m) {
      var S = a ? Xf(a) : window, C, D;
      if (r(S) ? C = g : uc(S) ? w ? C = ze : (C = pe, D = ce) : ue(S) && (C = ke), C) {
        var M = C(t, a);
        if (M) {
          Sm(e, M, i, u);
          return;
        }
      }
      D && D(t, S, a), t === "focusout" && Be(S);
    }
    function B() {
      Gt("onMouseEnter", ["mouseout", "mouseover"]), Gt("onMouseLeave", ["mouseout", "mouseover"]), Gt("onPointerEnter", ["pointerout", "pointerover"]), Gt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function z(e, t, a, i, u, d, m) {
      var S = t === "mouseover" || t === "pointerover", C = t === "mouseout" || t === "pointerout";
      if (S && !bu(i)) {
        var D = i.relatedTarget || i.fromElement;
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
          var X = i.relatedTarget || i.toElement;
          if (V = a, $ = X ? pc(X) : null, $ !== null) {
            var J = Ca($);
            ($ !== J || $.tag !== P && $.tag !== Y) && ($ = null);
          }
        } else
          V = null, $ = a;
        if (V !== $) {
          var be = kp, Qe = "onMouseLeave", Ie = "onMouseEnter", Nt = "mouse";
          (t === "pointerout" || t === "pointerover") && (be = dm, Qe = "onPointerLeave", Ie = "onPointerEnter", Nt = "pointer");
          var _t = V == null ? M : Xf(V), H = $ == null ? M : Xf($), ee = new be(Qe, Nt + "leave", V, i, u);
          ee.target = _t, ee.relatedTarget = H;
          var I = null, he = pc(u);
          if (he === a) {
            var Ae = new be(Ie, Nt + "enter", $, i, u);
            Ae.target = H, Ae.relatedTarget = _t, I = Ae;
          }
          n_(e, ee, I, V, $);
        }
      }
    }
    function W(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var fe = typeof Object.is == "function" ? Object.is : W;
    function Fe(e, t) {
      if (fe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var d = a[u];
        if (!Or.call(t, d) || !fe(e[d], t[d]))
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
    function at(e, t) {
      for (var a = Xe(e), i = 0, u = 0; a; ) {
        if (a.nodeType === no) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Xe(Ze(a));
      }
    }
    function ir(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, d = i.anchorOffset, m = i.focusNode, S = i.focusOffset;
      try {
        u.nodeType, m.nodeType;
      } catch {
        return null;
      }
      return Bt(e, u, d, m, S);
    }
    function Bt(e, t, a, i, u) {
      var d = 0, m = -1, S = -1, C = 0, D = 0, M = e, F = null;
      e: for (; ; ) {
        for (var V = null; M === t && (a === 0 || M.nodeType === no) && (m = d + a), M === i && (u === 0 || M.nodeType === no) && (S = d + u), M.nodeType === no && (d += M.nodeValue.length), (V = M.firstChild) !== null; )
          F = M, M = V;
        for (; ; ) {
          if (M === e)
            break e;
          if (F === t && ++C === a && (m = d), F === i && ++D === u && (S = d), (V = M.nextSibling) !== null)
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
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), d = e.textContent.length, m = Math.min(t.start, d), S = t.end === void 0 ? m : Math.min(t.end, d);
        if (!u.extend && m > S) {
          var C = S;
          S = m, m = C;
        }
        var D = at(e, m), M = at(e, S);
        if (D && M) {
          if (u.rangeCount === 1 && u.anchorNode === D.node && u.anchorOffset === D.offset && u.focusNode === M.node && u.focusOffset === M.offset)
            return;
          var F = a.createRange();
          F.setStart(D.node, D.offset), u.removeAllRanges(), m > S ? (u.addRange(F), u.extend(M.node, M.offset)) : (F.setEnd(M.node, M.offset), u.addRange(F));
        }
      }
    }
    function Em(e) {
      return e && e.nodeType === no;
    }
    function qC(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Em(e) ? !1 : Em(t) ? qC(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function zD(e) {
      return e && e.ownerDocument && qC(e.ownerDocument.documentElement, e);
    }
    function FD(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function ZC() {
      for (var e = window, t = Pa(); t instanceof e.HTMLIFrameElement; ) {
        if (FD(t))
          e = t.contentWindow;
        else
          return t;
        t = Pa(e.document);
      }
      return t;
    }
    function $g(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function jD() {
      var e = ZC();
      return {
        focusedElem: e,
        selectionRange: $g(e) ? HD(e) : null
      };
    }
    function BD(e) {
      var t = ZC(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && zD(a)) {
        i !== null && $g(a) && ID(a, i);
        for (var u = [], d = a; d = d.parentNode; )
          d.nodeType === Jr && u.push({
            element: d,
            left: d.scrollLeft,
            top: d.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var m = 0; m < u.length; m++) {
          var S = u[m];
          S.element.scrollLeft = S.left, S.element.scrollTop = S.top;
        }
      }
    }
    function HD(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = ir(e), t || {
        start: 0,
        end: 0
      };
    }
    function ID(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : nl(e, t);
    }
    var YD = Nn && "documentMode" in document && document.documentMode <= 11;
    function WD() {
      Tt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Wf = null, Gg = null, Fp = null, Kg = !1;
    function $D(e) {
      if ("selectionStart" in e && $g(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function GD(e) {
      return e.window === e ? e.document : e.nodeType === ro ? e : e.ownerDocument;
    }
    function JC(e, t, a) {
      var i = GD(a);
      if (!(Kg || Wf == null || Wf !== Pa(i))) {
        var u = $D(Wf);
        if (!Fp || !Fe(Fp, u)) {
          Fp = u;
          var d = Rm(Gg, "onSelect");
          if (d.length > 0) {
            var m = new Bi("onSelect", "select", null, t, a);
            e.push({
              event: m,
              listeners: d
            }), m.target = Wf;
          }
        }
      }
    }
    function KD(e, t, a, i, u, d, m) {
      var S = a ? Xf(a) : window;
      switch (t) {
        case "focusin":
          (uc(S) || S.contentEditable === "true") && (Wf = S, Gg = a, Fp = null);
          break;
        case "focusout":
          Wf = null, Gg = null, Fp = null;
          break;
        case "mousedown":
          Kg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Kg = !1, JC(e, i, u);
          break;
        case "selectionchange":
          if (YD)
            break;
        case "keydown":
        case "keyup":
          JC(e, i, u);
      }
    }
    function Cm(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var $f = {
      animationend: Cm("Animation", "AnimationEnd"),
      animationiteration: Cm("Animation", "AnimationIteration"),
      animationstart: Cm("Animation", "AnimationStart"),
      transitionend: Cm("Transition", "TransitionEnd")
    }, Qg = {}, eT = {};
    Nn && (eT = document.createElement("div").style, "AnimationEvent" in window || (delete $f.animationend.animation, delete $f.animationiteration.animation, delete $f.animationstart.animation), "TransitionEvent" in window || delete $f.transitionend.transition);
    function Tm(e) {
      if (Qg[e])
        return Qg[e];
      if (!$f[e])
        return e;
      var t = $f[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in eT)
          return Qg[e] = t[a];
      return e;
    }
    var tT = Tm("animationend"), nT = Tm("animationiteration"), rT = Tm("animationstart"), aT = Tm("transitionend"), iT = /* @__PURE__ */ new Map(), oT = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Ws(e, t) {
      iT.set(e, t), Tt(t, [e]);
    }
    function QD() {
      for (var e = 0; e < oT.length; e++) {
        var t = oT[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Ws(a, "on" + i);
      }
      Ws(tT, "onAnimationEnd"), Ws(nT, "onAnimationIteration"), Ws(rT, "onAnimationStart"), Ws("dblclick", "onDoubleClick"), Ws("focusin", "onFocus"), Ws("focusout", "onBlur"), Ws(aT, "onTransitionEnd");
    }
    function XD(e, t, a, i, u, d, m) {
      var S = iT.get(t);
      if (S !== void 0) {
        var C = Bi, D = t;
        switch (t) {
          case "keypress":
            if (Zo(i) === 0)
              return;
          case "keydown":
          case "keyup":
            C = fm;
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
            if (i.button === 2)
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
            C = hm;
            break;
          case tT:
          case nT:
          case rT:
            C = om;
            break;
          case aT:
            C = Wa;
            break;
          case "scroll":
            C = ua;
            break;
          case "wheel":
            C = Hg;
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
            C = dm;
            break;
        }
        var M = (d & Ua) !== 0;
        {
          var F = !M && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", V = e_(a, S, i.type, M, F);
          if (V.length > 0) {
            var $ = new C(S, D, null, i, u);
            e.push({
              event: $,
              listeners: V
            });
          }
        }
      }
    }
    QD(), B(), cc(), WD(), Ig();
    function qD(e, t, a, i, u, d, m) {
      XD(e, t, a, i, u, d);
      var S = (d & Zd) === 0;
      S && (z(e, t, a, i, u), Mn(e, t, a, i, u), KD(e, t, a, i, u), gm(e, t, a, i, u));
    }
    var jp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Xg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(jp));
    function lT(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Oi(i, t, void 0, e), e.currentTarget = null;
    }
    function ZD(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var d = t[u], m = d.instance, S = d.currentTarget, C = d.listener;
          if (m !== i && e.isPropagationStopped())
            return;
          lT(e, C, S), i = m;
        }
      else
        for (var D = 0; D < t.length; D++) {
          var M = t[D], F = M.instance, V = M.currentTarget, $ = M.listener;
          if (F !== i && e.isPropagationStopped())
            return;
          lT(e, $, V), i = F;
        }
    }
    function sT(e, t) {
      for (var a = (t & Ua) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], d = u.event, m = u.listeners;
        ZD(d, m, a);
      }
      ku();
    }
    function JD(e, t, a, i, u) {
      var d = Jd(a), m = [];
      qD(m, e, i, a, d, t), sT(m, t);
    }
    function En(e, t) {
      Xg.has(e) || v('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = kk(t), u = r_(e);
      i.has(u) || (uT(t, e, Yc, a), i.add(u));
    }
    function qg(e, t, a) {
      Xg.has(e) && !t && v('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Ua), uT(a, e, i, t);
    }
    var xm = "_reactListening" + Math.random().toString(36).slice(2);
    function Bp(e) {
      if (!e[xm]) {
        e[xm] = !0, mt.forEach(function(a) {
          a !== "selectionchange" && (Xg.has(a) || qg(a, !1, e), qg(a, !0, e));
        });
        var t = e.nodeType === ro ? e : e.ownerDocument;
        t !== null && (t[xm] || (t[xm] = !0, qg("selectionchange", !1, t)));
      }
    }
    function uT(e, t, a, i, u) {
      var d = vr(e, t, a), m = void 0;
      _u && (t === "touchstart" || t === "touchmove" || t === "wheel") && (m = !0), e = e, i ? m !== void 0 ? _p(e, t, d, m) : sa(e, t, d) : m !== void 0 ? Bs(e, t, d, m) : ac(e, t, d);
    }
    function cT(e, t) {
      return e === t || e.nodeType === Un && e.parentNode === t;
    }
    function Zg(e, t, a, i, u) {
      var d = i;
      if (!(t & qd) && !(t & Yc)) {
        var m = u;
        if (i !== null) {
          var S = i;
          e: for (; ; ) {
            if (S === null)
              return;
            var C = S.tag;
            if (C === _ || C === A) {
              var D = S.stateNode.containerInfo;
              if (cT(D, m))
                break;
              if (C === A)
                for (var M = S.return; M !== null; ) {
                  var F = M.tag;
                  if (F === _ || F === A) {
                    var V = M.stateNode.containerInfo;
                    if (cT(V, m))
                      return;
                  }
                  M = M.return;
                }
              for (; D !== null; ) {
                var $ = pc(D);
                if ($ === null)
                  return;
                var X = $.tag;
                if (X === P || X === Y) {
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
      Ov(function() {
        return JD(e, t, a, d);
      });
    }
    function Hp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function e_(e, t, a, i, u, d) {
      for (var m = t !== null ? t + "Capture" : null, S = i ? m : t, C = [], D = e, M = null; D !== null; ) {
        var F = D, V = F.stateNode, $ = F.tag;
        if ($ === P && V !== null && (M = V, S !== null)) {
          var X = Fo(D, S);
          X != null && C.push(Hp(D, X, M));
        }
        if (u)
          break;
        D = D.return;
      }
      return C;
    }
    function Rm(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var d = u, m = d.stateNode, S = d.tag;
        if (S === P && m !== null) {
          var C = m, D = Fo(u, a);
          D != null && i.unshift(Hp(u, D, C));
          var M = Fo(u, t);
          M != null && i.push(Hp(u, M, C));
        }
        u = u.return;
      }
      return i;
    }
    function Gf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== P);
      return e || null;
    }
    function t_(e, t) {
      for (var a = e, i = t, u = 0, d = a; d; d = Gf(d))
        u++;
      for (var m = 0, S = i; S; S = Gf(S))
        m++;
      for (; u - m > 0; )
        a = Gf(a), u--;
      for (; m - u > 0; )
        i = Gf(i), m--;
      for (var C = u; C--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Gf(a), i = Gf(i);
      }
      return null;
    }
    function fT(e, t, a, i, u) {
      for (var d = t._reactName, m = [], S = a; S !== null && S !== i; ) {
        var C = S, D = C.alternate, M = C.stateNode, F = C.tag;
        if (D !== null && D === i)
          break;
        if (F === P && M !== null) {
          var V = M;
          if (u) {
            var $ = Fo(S, d);
            $ != null && m.unshift(Hp(S, $, V));
          } else if (!u) {
            var X = Fo(S, d);
            X != null && m.push(Hp(S, X, V));
          }
        }
        S = S.return;
      }
      m.length !== 0 && e.push({
        event: t,
        listeners: m
      });
    }
    function n_(e, t, a, i, u) {
      var d = i && u ? t_(i, u) : null;
      i !== null && fT(e, t, i, d, !1), u !== null && a !== null && fT(e, a, u, d, !0);
    }
    function r_(e, t) {
      return e + "__bubble";
    }
    var $a = !1, Ip = "dangerouslySetInnerHTML", wm = "suppressContentEditableWarning", $s = "suppressHydrationWarning", dT = "autoFocus", fc = "children", dc = "style", bm = "__html", Jg, Dm, Yp, pT, _m, hT, vT;
    Jg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Dm = function(e, t) {
      Kd(e, t), Hc(e, t), _v(e, t, {
        registrationNameDependencies: ht,
        possibleRegistrationNames: yt
      });
    }, hT = Nn && !document.documentMode, Yp = function(e, t, a) {
      if (!$a) {
        var i = km(a), u = km(t);
        u !== i && ($a = !0, v("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, pT = function(e) {
      if (!$a) {
        $a = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), v("Extra attributes from the server: %s", t);
      }
    }, _m = function(e, t) {
      t === !1 ? v("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : v("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, vT = function(e, t) {
      var a = e.namespaceURI === to ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var a_ = /\r\n?/g, i_ = /\u0000|\uFFFD/g;
    function km(e) {
      er(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(a_, `
`).replace(i_, "");
    }
    function Mm(e, t, a, i) {
      var u = km(t), d = km(e);
      if (d !== u && (i && ($a || ($a = !0, v('Text content did not match. Server: "%s" Client: "%s"', d, u))), a && Ce))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function mT(e) {
      return e.nodeType === ro ? e : e.ownerDocument;
    }
    function o_() {
    }
    function Om(e) {
      e.onclick = o_;
    }
    function l_(e, t, a, i, u) {
      for (var d in i)
        if (i.hasOwnProperty(d)) {
          var m = i[d];
          if (d === dc)
            m && Object.freeze(m), Tv(t, m);
          else if (d === Ip) {
            var S = m ? m[bm] : void 0;
            S != null && cv(t, S);
          } else if (d === fc)
            if (typeof m == "string") {
              var C = e !== "textarea" || m !== "";
              C && xs(t, m);
            } else typeof m == "number" && xs(t, "" + m);
          else d === wm || d === $s || d === dT || (ht.hasOwnProperty(d) ? m != null && (typeof m != "function" && _m(d, m), d === "onScroll" && En("scroll", t)) : m != null && Ar(t, d, m, u));
        }
    }
    function s_(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var d = t[u], m = t[u + 1];
        d === dc ? Tv(e, m) : d === Ip ? cv(e, m) : d === fc ? xs(e, m) : Ar(e, d, m, i);
      }
    }
    function u_(e, t, a, i) {
      var u, d = mT(a), m, S = i;
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
      return S === to && !u && Object.prototype.toString.call(m) === "[object HTMLUnknownElement]" && !Or.call(Jg, e) && (Jg[e] = !0, v("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), m;
    }
    function c_(e, t) {
      return mT(t).createTextNode(e);
    }
    function f_(e, t, a, i) {
      var u = Vo(t, a);
      Dm(t, a);
      var d;
      switch (t) {
        case "dialog":
          En("cancel", e), En("close", e), d = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          En("load", e), d = a;
          break;
        case "video":
        case "audio":
          for (var m = 0; m < jp.length; m++)
            En(jp[m], e);
          d = a;
          break;
        case "source":
          En("error", e), d = a;
          break;
        case "img":
        case "image":
        case "link":
          En("error", e), En("load", e), d = a;
          break;
        case "details":
          En("toggle", e), d = a;
          break;
        case "input":
          ui(e, a), d = Ts(e, a), En("invalid", e);
          break;
        case "option":
          Ut(e, a), d = a;
          break;
        case "select":
          wl(e, a), d = Su(e, a), En("invalid", e);
          break;
        case "textarea":
          zd(e, a), d = Vd(e, a), En("invalid", e);
          break;
        default:
          d = a;
      }
      switch (jc(t, d), l_(t, e, i, d, u), t) {
        case "input":
          si(e), G(e, a, !1);
          break;
        case "textarea":
          si(e), sv(e);
          break;
        case "option":
          ln(e, a);
          break;
        case "select":
          Pd(e, a);
          break;
        default:
          typeof d.onClick == "function" && Om(e);
          break;
      }
    }
    function d_(e, t, a, i, u) {
      Dm(t, i);
      var d = null, m, S;
      switch (t) {
        case "input":
          m = Ts(e, a), S = Ts(e, i), d = [];
          break;
        case "select":
          m = Su(e, a), S = Su(e, i), d = [];
          break;
        case "textarea":
          m = Vd(e, a), S = Vd(e, i), d = [];
          break;
        default:
          m = a, S = i, typeof m.onClick != "function" && typeof S.onClick == "function" && Om(e);
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
          } else C === Ip || C === fc || C === wm || C === $s || C === dT || (ht.hasOwnProperty(C) ? d || (d = []) : (d = d || []).push(C, null));
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
            var X = V ? V[bm] : void 0, J = $ ? $[bm] : void 0;
            X != null && J !== X && (d = d || []).push(C, X);
          } else C === fc ? (typeof V == "string" || typeof V == "number") && (d = d || []).push(C, "" + V) : C === wm || C === $s || (ht.hasOwnProperty(C) ? (V != null && (typeof V != "function" && _m(C, V), C === "onScroll" && En("scroll", e)), !d && $ !== V && (d = [])) : (d = d || []).push(C, V));
      }
      return M && (bg(M, S[dc]), (d = d || []).push(dc, M)), d;
    }
    function p_(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && x(e, u);
      var d = Vo(a, i), m = Vo(a, u);
      switch (s_(e, t, d, m), a) {
        case "input":
          L(e, u);
          break;
        case "textarea":
          lv(e, u);
          break;
        case "select":
          Vc(e, u);
          break;
      }
    }
    function h_(e) {
      {
        var t = e.toLowerCase();
        return Ru.hasOwnProperty(t) && Ru[t] || null;
      }
    }
    function v_(e, t, a, i, u, d, m) {
      var S, C;
      switch (S = Vo(t, a), Dm(t, a), t) {
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
          ui(e, a), En("invalid", e);
          break;
        case "option":
          Ut(e, a);
          break;
        case "select":
          wl(e, a), En("invalid", e);
          break;
        case "textarea":
          zd(e, a), En("invalid", e);
          break;
      }
      jc(t, a);
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
      for (var X in a)
        if (a.hasOwnProperty(X)) {
          var J = a[X];
          if (X === fc)
            typeof J == "string" ? e.textContent !== J && (a[$s] !== !0 && Mm(e.textContent, J, d, m), $ = [fc, J]) : typeof J == "number" && e.textContent !== "" + J && (a[$s] !== !0 && Mm(e.textContent, J, d, m), $ = [fc, "" + J]);
          else if (ht.hasOwnProperty(X))
            J != null && (typeof J != "function" && _m(X, J), X === "onScroll" && En("scroll", e));
          else if (m && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof S == "boolean") {
            var be = void 0, Qe = an(X);
            if (a[$s] !== !0) {
              if (!(X === wm || X === $s || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              X === "value" || X === "checked" || X === "selected")) {
                if (X === Ip) {
                  var Ie = e.innerHTML, Nt = J ? J[bm] : void 0;
                  if (Nt != null) {
                    var _t = vT(e, Nt);
                    _t !== Ie && Yp(X, Ie, _t);
                  }
                } else if (X === dc) {
                  if (C.delete(X), hT) {
                    var H = Rg(J);
                    be = e.getAttribute("style"), H !== be && Yp(X, be, H);
                  }
                } else if (S && !j)
                  C.delete(X.toLowerCase()), be = gl(e, X, J), J !== be && Yp(X, be, J);
                else if (!vn(X, Qe, S) && !tr(X, J, Qe, S)) {
                  var ee = !1;
                  if (Qe !== null)
                    C.delete(Qe.attributeName), be = _o(e, X, J, Qe);
                  else {
                    var I = i;
                    if (I === to && (I = Bd(t)), I === to)
                      C.delete(X.toLowerCase());
                    else {
                      var he = h_(X);
                      he !== null && he !== X && (ee = !0, C.delete(he)), C.delete(X);
                    }
                    be = gl(e, X, J);
                  }
                  var Ae = j;
                  !Ae && J !== be && !ee && Yp(X, be, J);
                }
              }
            }
          }
        }
      switch (m && // $FlowFixMe - Should be inferred as not undefined.
      C.size > 0 && a[$s] !== !0 && pT(C), t) {
        case "input":
          si(e), G(e, a, !0);
          break;
        case "textarea":
          si(e), sv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Om(e);
          break;
      }
      return $;
    }
    function m_(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function eS(e, t) {
      {
        if ($a)
          return;
        $a = !0, v("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function tS(e, t) {
      {
        if ($a)
          return;
        $a = !0, v('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function nS(e, t, a) {
      {
        if ($a)
          return;
        $a = !0, v("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function rS(e, t) {
      {
        if (t === "" || $a)
          return;
        $a = !0, v('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function y_(e, t, a) {
      switch (t) {
        case "input":
          Z(e, a);
          return;
        case "textarea":
          Eg(e, a);
          return;
        case "select":
          Ud(e, a);
          return;
      }
    }
    var Wp = function() {
    }, $p = function() {
    };
    {
      var g_ = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], yT = [
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
      ], S_ = yT.concat(["button"]), E_ = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], gT = {
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
        var a = vt({}, e || gT), i = {
          tag: t
        };
        return yT.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), S_.indexOf(t) !== -1 && (a.pTagInButtonScope = null), g_.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var C_ = function(e, t) {
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
            return E_.indexOf(t) === -1;
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
      }, T_ = function(e, t) {
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
      }, ST = {};
      Wp = function(e, t, a) {
        a = a || gT;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && v("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var d = C_(e, u) ? null : i, m = d ? null : T_(e, a), S = d || m;
        if (S) {
          var C = S.tag, D = !!d + "|" + e + "|" + C;
          if (!ST[D]) {
            ST[D] = !0;
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
    var Am = "suppressHydrationWarning", Lm = "$", Nm = "/$", Gp = "$?", Kp = "$!", x_ = "style", aS = null, iS = null;
    function R_(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ro:
        case Id: {
          t = i === ro ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Hd(null, "");
          break;
        }
        default: {
          var d = i === Un ? e.parentNode : e, m = d.namespaceURI || null;
          t = d.tagName, a = Hd(m, t);
          break;
        }
      }
      {
        var S = t.toLowerCase(), C = $p(null, S);
        return {
          namespace: a,
          ancestorInfo: C
        };
      }
    }
    function w_(e, t, a) {
      {
        var i = e, u = Hd(i.namespace, t), d = $p(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: d
        };
      }
    }
    function _V(e) {
      return e;
    }
    function b_(e) {
      aS = Hn(), iS = jD();
      var t = null;
      return qn(!1), t;
    }
    function D_(e) {
      BD(iS), qn(aS), aS = null, iS = null;
    }
    function __(e, t, a, i, u) {
      var d;
      {
        var m = i;
        if (Wp(e, null, m.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var S = "" + t.children, C = $p(m.ancestorInfo, e);
          Wp(null, S, C);
        }
        d = m.namespace;
      }
      var D = u_(e, t, a, d);
      return qp(u, D), pS(D, t), D;
    }
    function k_(e, t) {
      e.appendChild(t);
    }
    function M_(e, t, a, i, u) {
      switch (f_(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function O_(e, t, a, i, u, d) {
      {
        var m = d;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var S = "" + i.children, C = $p(m.ancestorInfo, t);
          Wp(null, S, C);
        }
      }
      return d_(e, t, a, i);
    }
    function oS(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function A_(e, t, a, i) {
      {
        var u = a;
        Wp(null, e, u.ancestorInfo);
      }
      var d = c_(e, t);
      return qp(i, d), d;
    }
    function L_() {
      var e = window.event;
      return e === void 0 ? Ha : Nf(e.type);
    }
    var lS = typeof setTimeout == "function" ? setTimeout : void 0, N_ = typeof clearTimeout == "function" ? clearTimeout : void 0, sS = -1, ET = typeof Promise == "function" ? Promise : void 0, P_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof ET < "u" ? function(e) {
      return ET.resolve(null).then(e).catch(U_);
    } : lS;
    function U_(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function V_(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function z_(e, t, a, i, u, d) {
      p_(e, t, a, i, u), pS(e, u);
    }
    function CT(e) {
      xs(e, "");
    }
    function F_(e, t, a) {
      e.nodeValue = a;
    }
    function j_(e, t) {
      e.appendChild(t);
    }
    function B_(e, t) {
      var a;
      e.nodeType === Un ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Om(a);
    }
    function H_(e, t, a) {
      e.insertBefore(t, a);
    }
    function I_(e, t, a) {
      e.nodeType === Un ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Y_(e, t) {
      e.removeChild(t);
    }
    function W_(e, t) {
      e.nodeType === Un ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function uS(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Un) {
          var d = u.data;
          if (d === Nm)
            if (i === 0) {
              e.removeChild(u), $l(t);
              return;
            } else
              i--;
          else (d === Lm || d === Gp || d === Kp) && i++;
        }
        a = u;
      } while (a);
      $l(t);
    }
    function $_(e, t) {
      e.nodeType === Un ? uS(e.parentNode, t) : e.nodeType === Jr && uS(e, t), $l(e);
    }
    function G_(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function K_(e) {
      e.nodeValue = "";
    }
    function Q_(e, t) {
      e = e;
      var a = t[x_], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Fc("display", i);
    }
    function X_(e, t) {
      e.nodeValue = t;
    }
    function q_(e) {
      e.nodeType === Jr ? e.textContent = "" : e.nodeType === ro && e.documentElement && e.removeChild(e.documentElement);
    }
    function Z_(e, t, a) {
      return e.nodeType !== Jr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function J_(e, t) {
      return t === "" || e.nodeType !== no ? null : e;
    }
    function ek(e) {
      return e.nodeType !== Un ? null : e;
    }
    function TT(e) {
      return e.data === Gp;
    }
    function cS(e) {
      return e.data === Kp;
    }
    function tk(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function nk(e, t) {
      e._reactRetry = t;
    }
    function Pm(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Jr || t === no)
          break;
        if (t === Un) {
          var a = e.data;
          if (a === Lm || a === Kp || a === Gp)
            break;
          if (a === Nm)
            return null;
        }
      }
      return e;
    }
    function Qp(e) {
      return Pm(e.nextSibling);
    }
    function rk(e) {
      return Pm(e.firstChild);
    }
    function ak(e) {
      return Pm(e.firstChild);
    }
    function ik(e) {
      return Pm(e.nextSibling);
    }
    function ok(e, t, a, i, u, d, m) {
      qp(d, e), pS(e, a);
      var S;
      {
        var C = u;
        S = C.namespace;
      }
      var D = (d.mode & Rt) !== $e;
      return v_(e, t, a, S, i, D, m);
    }
    function lk(e, t, a, i) {
      return qp(a, e), a.mode & Rt, m_(e, t);
    }
    function sk(e, t) {
      qp(t, e);
    }
    function uk(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Un) {
          var i = t.data;
          if (i === Nm) {
            if (a === 0)
              return Qp(t);
            a--;
          } else (i === Lm || i === Kp || i === Gp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function xT(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Un) {
          var i = t.data;
          if (i === Lm || i === Kp || i === Gp) {
            if (a === 0)
              return t;
            a--;
          } else i === Nm && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function ck(e) {
      $l(e);
    }
    function fk(e) {
      $l(e);
    }
    function dk(e) {
      return e !== "head" && e !== "body";
    }
    function pk(e, t, a, i) {
      var u = !0;
      Mm(t.nodeValue, a, i, u);
    }
    function hk(e, t, a, i, u, d) {
      if (t[Am] !== !0) {
        var m = !0;
        Mm(i.nodeValue, u, d, m);
      }
    }
    function vk(e, t) {
      t.nodeType === Jr ? eS(e, t) : t.nodeType === Un || tS(e, t);
    }
    function mk(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Jr ? eS(a, t) : t.nodeType === Un || tS(a, t));
      }
    }
    function yk(e, t, a, i, u) {
      (u || t[Am] !== !0) && (i.nodeType === Jr ? eS(a, i) : i.nodeType === Un || tS(a, i));
    }
    function gk(e, t, a) {
      nS(e, t);
    }
    function Sk(e, t) {
      rS(e, t);
    }
    function Ek(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && nS(i, t);
      }
    }
    function Ck(e, t) {
      {
        var a = e.parentNode;
        a !== null && rS(a, t);
      }
    }
    function Tk(e, t, a, i, u, d) {
      (d || t[Am] !== !0) && nS(a, i);
    }
    function xk(e, t, a, i, u) {
      (u || t[Am] !== !0) && rS(a, i);
    }
    function Rk(e) {
      v("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function wk(e) {
      Bp(e);
    }
    var Kf = Math.random().toString(36).slice(2), Qf = "__reactFiber$" + Kf, fS = "__reactProps$" + Kf, Xp = "__reactContainer$" + Kf, dS = "__reactEvents$" + Kf, bk = "__reactListeners$" + Kf, Dk = "__reactHandles$" + Kf;
    function _k(e) {
      delete e[Qf], delete e[fS], delete e[dS], delete e[bk], delete e[Dk];
    }
    function qp(e, t) {
      t[Qf] = e;
    }
    function Um(e, t) {
      t[Xp] = e;
    }
    function RT(e) {
      e[Xp] = null;
    }
    function Zp(e) {
      return !!e[Xp];
    }
    function pc(e) {
      var t = e[Qf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Xp] || a[Qf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = xT(e); u !== null; ) {
              var d = u[Qf];
              if (d)
                return d;
              u = xT(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Gs(e) {
      var t = e[Qf] || e[Xp];
      return t && (t.tag === P || t.tag === Y || t.tag === ne || t.tag === _) ? t : null;
    }
    function Xf(e) {
      if (e.tag === P || e.tag === Y)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Vm(e) {
      return e[fS] || null;
    }
    function pS(e, t) {
      e[fS] = t;
    }
    function kk(e) {
      var t = e[dS];
      return t === void 0 && (t = e[dS] = /* @__PURE__ */ new Set()), t;
    }
    var wT = {}, bT = c.ReactDebugCurrentFrame;
    function zm(e) {
      if (e) {
        var t = e._owner, a = Zi(e.type, e._source, t ? t.type : null);
        bT.setExtraStackFrame(a);
      } else
        bT.setExtraStackFrame(null);
    }
    function vo(e, t, a, i, u) {
      {
        var d = Function.call.bind(Or);
        for (var m in e)
          if (d(e, m)) {
            var S = void 0;
            try {
              if (typeof e[m] != "function") {
                var C = Error((i || "React class") + ": " + a + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              S = e[m](t, m, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (D) {
              S = D;
            }
            S && !(S instanceof Error) && (zm(u), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, m, typeof S), zm(null)), S instanceof Error && !(S.message in wT) && (wT[S.message] = !0, zm(u), v("Failed %s type: %s", a, S.message), zm(null));
          }
      }
    }
    var hS = [], Fm;
    Fm = [];
    var Zl = -1;
    function Ks(e) {
      return {
        current: e
      };
    }
    function ca(e, t) {
      if (Zl < 0) {
        v("Unexpected pop.");
        return;
      }
      t !== Fm[Zl] && v("Unexpected Fiber popped."), e.current = hS[Zl], hS[Zl] = null, Fm[Zl] = null, Zl--;
    }
    function fa(e, t, a) {
      Zl++, hS[Zl] = e.current, Fm[Zl] = a, e.current = t;
    }
    var vS;
    vS = {};
    var mi = {};
    Object.freeze(mi);
    var Jl = Ks(mi), rl = Ks(!1), mS = mi;
    function qf(e, t, a) {
      return a && al(t) ? mS : Jl.current;
    }
    function DT(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Zf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return mi;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var d = {};
        for (var m in i)
          d[m] = t[m];
        {
          var S = ot(e) || "Unknown";
          vo(i, d, "context", S);
        }
        return u && DT(e, t, d), d;
      }
    }
    function jm() {
      return rl.current;
    }
    function al(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Bm(e) {
      ca(rl, e), ca(Jl, e);
    }
    function yS(e) {
      ca(rl, e), ca(Jl, e);
    }
    function _T(e, t, a) {
      {
        if (Jl.current !== mi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        fa(Jl, t, e), fa(rl, a, e);
      }
    }
    function kT(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var d = ot(e) || "Unknown";
            vS[d] || (vS[d] = !0, v("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", d, d));
          }
          return a;
        }
        var m = i.getChildContext();
        for (var S in m)
          if (!(S in u))
            throw new Error((ot(e) || "Unknown") + '.getChildContext(): key "' + S + '" is not defined in childContextTypes.');
        {
          var C = ot(e) || "Unknown";
          vo(u, m, "child context", C);
        }
        return vt({}, a, m);
      }
    }
    function Hm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || mi;
        return mS = Jl.current, fa(Jl, a, e), fa(rl, rl.current, e), !0;
      }
    }
    function MT(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = kT(e, t, mS);
          i.__reactInternalMemoizedMergedChildContext = u, ca(rl, e), ca(Jl, e), fa(Jl, u, e), fa(rl, a, e);
        } else
          ca(rl, e), fa(rl, a, e);
      }
    }
    function Mk(e) {
      {
        if (!Al(e) || e.tag !== b)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case _:
              return t.stateNode.context;
            case b: {
              var a = t.type;
              if (al(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Qs = 0, Im = 1, es = null, gS = !1, SS = !1;
    function OT(e) {
      es === null ? es = [e] : es.push(e);
    }
    function Ok(e) {
      gS = !0, OT(e);
    }
    function AT() {
      gS && Xs();
    }
    function Xs() {
      if (!SS && es !== null) {
        SS = !0;
        var e = 0, t = Ya();
        try {
          var a = !0, i = es;
          for (Bn(Vr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          es = null, gS = !1;
        } catch (d) {
          throw es !== null && (es = es.slice(e + 1)), tp(Au, Xs), d;
        } finally {
          Bn(t), SS = !1;
        }
      }
      return null;
    }
    var Jf = [], ed = 0, Ym = null, Wm = 0, Hi = [], Ii = 0, hc = null, ts = 1, ns = "";
    function Ak(e) {
      return mc(), (e.flags & Ai) !== We;
    }
    function Lk(e) {
      return mc(), Wm;
    }
    function Nk() {
      var e = ns, t = ts, a = t & ~Pk(t);
      return a.toString(32) + e;
    }
    function vc(e, t) {
      mc(), Jf[ed++] = Wm, Jf[ed++] = Ym, Ym = e, Wm = t;
    }
    function LT(e, t, a) {
      mc(), Hi[Ii++] = ts, Hi[Ii++] = ns, Hi[Ii++] = hc, hc = e;
      var i = ts, u = ns, d = $m(i) - 1, m = i & ~(1 << d), S = a + 1, C = $m(t) + d;
      if (C > 30) {
        var D = d - d % 5, M = (1 << D) - 1, F = (m & M).toString(32), V = m >> D, $ = d - D, X = $m(t) + $, J = S << $, be = J | V, Qe = F + u;
        ts = 1 << X | be, ns = Qe;
      } else {
        var Ie = S << d, Nt = Ie | m, _t = u;
        ts = 1 << C | Nt, ns = _t;
      }
    }
    function ES(e) {
      mc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        vc(e, a), LT(e, a, i);
      }
    }
    function $m(e) {
      return 32 - Fn(e);
    }
    function Pk(e) {
      return 1 << $m(e) - 1;
    }
    function CS(e) {
      for (; e === Ym; )
        Ym = Jf[--ed], Jf[ed] = null, Wm = Jf[--ed], Jf[ed] = null;
      for (; e === hc; )
        hc = Hi[--Ii], Hi[Ii] = null, ns = Hi[--Ii], Hi[Ii] = null, ts = Hi[--Ii], Hi[Ii] = null;
    }
    function Uk() {
      return mc(), hc !== null ? {
        id: ts,
        overflow: ns
      } : null;
    }
    function Vk(e, t) {
      mc(), Hi[Ii++] = ts, Hi[Ii++] = ns, Hi[Ii++] = hc, ts = t.id, ns = t.overflow, hc = e;
    }
    function mc() {
      Hr() || v("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Br = null, Yi = null, mo = !1, yc = !1, qs = null;
    function zk() {
      mo && v("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function NT() {
      yc = !0;
    }
    function Fk() {
      return yc;
    }
    function jk(e) {
      var t = e.stateNode.containerInfo;
      return Yi = ak(t), Br = e, mo = !0, qs = null, yc = !1, !0;
    }
    function Bk(e, t, a) {
      return Yi = ik(t), Br = e, mo = !0, qs = null, yc = !1, a !== null && Vk(e, a), !0;
    }
    function PT(e, t) {
      switch (e.tag) {
        case _: {
          vk(e.stateNode.containerInfo, t);
          break;
        }
        case P: {
          var a = (e.mode & Rt) !== $e;
          yk(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case ne: {
          var i = e.memoizedState;
          i.dehydrated !== null && mk(i.dehydrated, t);
          break;
        }
      }
    }
    function UT(e, t) {
      PT(e, t);
      var a = WA();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Va) : i.push(a);
    }
    function TS(e, t) {
      {
        if (yc)
          return;
        switch (e.tag) {
          case _: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case P:
                var i = t.type;
                t.pendingProps, gk(a, i);
                break;
              case Y:
                var u = t.pendingProps;
                Sk(a, u);
                break;
            }
            break;
          }
          case P: {
            var d = e.type, m = e.memoizedProps, S = e.stateNode;
            switch (t.tag) {
              case P: {
                var C = t.type, D = t.pendingProps, M = (e.mode & Rt) !== $e;
                Tk(
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
              case Y: {
                var F = t.pendingProps, V = (e.mode & Rt) !== $e;
                xk(
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
          case ne: {
            var $ = e.memoizedState, X = $.dehydrated;
            if (X !== null) switch (t.tag) {
              case P:
                var J = t.type;
                t.pendingProps, Ek(X, J);
                break;
              case Y:
                var be = t.pendingProps;
                Ck(X, be);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function VT(e, t) {
      t.flags = t.flags & ~ta | yn, TS(e, t);
    }
    function zT(e, t) {
      switch (e.tag) {
        case P: {
          var a = e.type;
          e.pendingProps;
          var i = Z_(t, a);
          return i !== null ? (e.stateNode = i, Br = e, Yi = rk(i), !0) : !1;
        }
        case Y: {
          var u = e.pendingProps, d = J_(t, u);
          return d !== null ? (e.stateNode = d, Br = e, Yi = null, !0) : !1;
        }
        case ne: {
          var m = ek(t);
          if (m !== null) {
            var S = {
              dehydrated: m,
              treeContext: Uk(),
              retryLane: ia
            };
            e.memoizedState = S;
            var C = $A(m);
            return C.return = e, e.child = C, Br = e, Yi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function xS(e) {
      return (e.mode & Rt) !== $e && (e.flags & Ye) === We;
    }
    function RS(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function wS(e) {
      if (mo) {
        var t = Yi;
        if (!t) {
          xS(e) && (TS(Br, e), RS()), VT(Br, e), mo = !1, Br = e;
          return;
        }
        var a = t;
        if (!zT(e, t)) {
          xS(e) && (TS(Br, e), RS()), t = Qp(a);
          var i = Br;
          if (!t || !zT(e, t)) {
            VT(Br, e), mo = !1, Br = e;
            return;
          }
          UT(i, a);
        }
      }
    }
    function Hk(e, t, a) {
      var i = e.stateNode, u = !yc, d = ok(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = d, d !== null;
    }
    function Ik(e) {
      var t = e.stateNode, a = e.memoizedProps, i = lk(t, a, e);
      if (i) {
        var u = Br;
        if (u !== null)
          switch (u.tag) {
            case _: {
              var d = u.stateNode.containerInfo, m = (u.mode & Rt) !== $e;
              pk(
                d,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                m
              );
              break;
            }
            case P: {
              var S = u.type, C = u.memoizedProps, D = u.stateNode, M = (u.mode & Rt) !== $e;
              hk(
                S,
                C,
                D,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                M
              );
              break;
            }
          }
      }
      return i;
    }
    function Yk(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      sk(a, e);
    }
    function Wk(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return uk(a);
    }
    function FT(e) {
      for (var t = e.return; t !== null && t.tag !== P && t.tag !== _ && t.tag !== ne; )
        t = t.return;
      Br = t;
    }
    function Gm(e) {
      if (e !== Br)
        return !1;
      if (!mo)
        return FT(e), mo = !0, !1;
      if (e.tag !== _ && (e.tag !== P || dk(e.type) && !oS(e.type, e.memoizedProps))) {
        var t = Yi;
        if (t)
          if (xS(e))
            jT(e), RS();
          else
            for (; t; )
              UT(e, t), t = Qp(t);
      }
      return FT(e), e.tag === ne ? Yi = Wk(e) : Yi = Br ? Qp(e.stateNode) : null, !0;
    }
    function $k() {
      return mo && Yi !== null;
    }
    function jT(e) {
      for (var t = Yi; t; )
        PT(e, t), t = Qp(t);
    }
    function td() {
      Br = null, Yi = null, mo = !1, yc = !1;
    }
    function BT() {
      qs !== null && (NR(qs), qs = null);
    }
    function Hr() {
      return mo;
    }
    function bS(e) {
      qs === null ? qs = [e] : qs.push(e);
    }
    var Gk = c.ReactCurrentBatchConfig, Kk = null;
    function Qk() {
      return Gk.transition;
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
      var Xk = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Jt && (t = a), a = a.return;
        return t;
      }, gc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Jp = [], eh = [], th = [], nh = [], rh = [], ah = [], Sc = /* @__PURE__ */ new Set();
      yo.recordUnsafeLifecycleWarnings = function(e, t) {
        Sc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Jp.push(e), e.mode & Jt && typeof t.UNSAFE_componentWillMount == "function" && eh.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && th.push(e), e.mode & Jt && typeof t.UNSAFE_componentWillReceiveProps == "function" && nh.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && rh.push(e), e.mode & Jt && typeof t.UNSAFE_componentWillUpdate == "function" && ah.push(e));
      }, yo.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Jp.length > 0 && (Jp.forEach(function(V) {
          e.add(ot(V) || "Component"), Sc.add(V.type);
        }), Jp = []);
        var t = /* @__PURE__ */ new Set();
        eh.length > 0 && (eh.forEach(function(V) {
          t.add(ot(V) || "Component"), Sc.add(V.type);
        }), eh = []);
        var a = /* @__PURE__ */ new Set();
        th.length > 0 && (th.forEach(function(V) {
          a.add(ot(V) || "Component"), Sc.add(V.type);
        }), th = []);
        var i = /* @__PURE__ */ new Set();
        nh.length > 0 && (nh.forEach(function(V) {
          i.add(ot(V) || "Component"), Sc.add(V.type);
        }), nh = []);
        var u = /* @__PURE__ */ new Set();
        rh.length > 0 && (rh.forEach(function(V) {
          u.add(ot(V) || "Component"), Sc.add(V.type);
        }), rh = []);
        var d = /* @__PURE__ */ new Set();
        if (ah.length > 0 && (ah.forEach(function(V) {
          d.add(ot(V) || "Component"), Sc.add(V.type);
        }), ah = []), t.size > 0) {
          var m = gc(t);
          v(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, m);
        }
        if (i.size > 0) {
          var S = gc(i);
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
        if (a.size > 0) {
          var M = gc(a);
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
      var Km = /* @__PURE__ */ new Map(), HT = /* @__PURE__ */ new Set();
      yo.recordLegacyContextWarning = function(e, t) {
        var a = Xk(e);
        if (a === null) {
          v("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!HT.has(e.type)) {
          var i = Km.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Km.set(a, i)), i.push(e));
        }
      }, yo.flushLegacyContextWarning = function() {
        Km.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(d) {
              i.add(ot(d) || "Component"), HT.add(d.type);
            });
            var u = gc(i);
            try {
              Xt(a), v(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              fn();
            }
          }
        });
      }, yo.discardPendingWarnings = function() {
        Jp = [], eh = [], th = [], nh = [], rh = [], ah = [], Km = /* @__PURE__ */ new Map();
      };
    }
    var DS, _S, kS, MS, OS, IT = function(e, t) {
    };
    DS = !1, _S = !1, kS = {}, MS = {}, OS = {}, IT = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = ot(t) || "Component";
        MS[a] || (MS[a] = !0, v('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function qk(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function ih(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Jt || re) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== b) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !qk(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = ot(e) || "Component";
          kS[u] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), kS[u] = !0);
        }
        if (a._owner) {
          var d = a._owner, m;
          if (d) {
            var S = d;
            if (S.tag !== b)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            m = S.stateNode;
          }
          if (!m)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var C = m;
          Ei(i, "ref");
          var D = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === D)
            return t.ref;
          var M = function(F) {
            var V = C.refs;
            F === null ? delete V[D] : V[D] = F;
          };
          return M._stringRef = D, M;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Qm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Xm(e) {
      {
        var t = ot(e) || "Component";
        if (OS[t])
          return;
        OS[t] = !0, v("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function YT(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function WT(e) {
      function t(H, ee) {
        if (e) {
          var I = H.deletions;
          I === null ? (H.deletions = [ee], H.flags |= Va) : I.push(ee);
        }
      }
      function a(H, ee) {
        if (!e)
          return null;
        for (var I = ee; I !== null; )
          t(H, I), I = I.sibling;
        return null;
      }
      function i(H, ee) {
        for (var I = /* @__PURE__ */ new Map(), he = ee; he !== null; )
          he.key !== null ? I.set(he.key, he) : I.set(he.index, he), he = he.sibling;
        return I;
      }
      function u(H, ee) {
        var I = _c(H, ee);
        return I.index = 0, I.sibling = null, I;
      }
      function d(H, ee, I) {
        if (H.index = I, !e)
          return H.flags |= Ai, ee;
        var he = H.alternate;
        if (he !== null) {
          var Ae = he.index;
          return Ae < ee ? (H.flags |= yn, ee) : Ae;
        } else
          return H.flags |= yn, ee;
      }
      function m(H) {
        return e && H.alternate === null && (H.flags |= yn), H;
      }
      function S(H, ee, I, he) {
        if (ee === null || ee.tag !== Y) {
          var Ae = bE(I, H.mode, he);
          return Ae.return = H, Ae;
        } else {
          var _e = u(ee, I);
          return _e.return = H, _e;
        }
      }
      function C(H, ee, I, he) {
        var Ae = I.type;
        if (Ae === Ti)
          return M(H, ee, I.props.children, he, I.key);
        if (ee !== null && (ee.elementType === Ae || // Keep this check inline so it only runs on the false path:
        XR(ee, I) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Ae == "object" && Ae !== null && Ae.$$typeof === st && YT(Ae) === ee.type)) {
          var _e = u(ee, I.props);
          return _e.ref = ih(H, ee, I), _e.return = H, _e._debugSource = I._source, _e._debugOwner = I._owner, _e;
        }
        var rt = wE(I, H.mode, he);
        return rt.ref = ih(H, ee, I), rt.return = H, rt;
      }
      function D(H, ee, I, he) {
        if (ee === null || ee.tag !== A || ee.stateNode.containerInfo !== I.containerInfo || ee.stateNode.implementation !== I.implementation) {
          var Ae = DE(I, H.mode, he);
          return Ae.return = H, Ae;
        } else {
          var _e = u(ee, I.children || []);
          return _e.return = H, _e;
        }
      }
      function M(H, ee, I, he, Ae) {
        if (ee === null || ee.tag !== K) {
          var _e = su(I, H.mode, he, Ae);
          return _e.return = H, _e;
        } else {
          var rt = u(ee, I);
          return rt.return = H, rt;
        }
      }
      function F(H, ee, I) {
        if (typeof ee == "string" && ee !== "" || typeof ee == "number") {
          var he = bE("" + ee, H.mode, I);
          return he.return = H, he;
        }
        if (typeof ee == "object" && ee !== null) {
          switch (ee.$$typeof) {
            case Lr: {
              var Ae = wE(ee, H.mode, I);
              return Ae.ref = ih(H, null, ee), Ae.return = H, Ae;
            }
            case ur: {
              var _e = DE(ee, H.mode, I);
              return _e.return = H, _e;
            }
            case st: {
              var rt = ee._payload, ct = ee._init;
              return F(H, ct(rt), I);
            }
          }
          if (St(ee) || dt(ee)) {
            var tn = su(ee, H.mode, I, null);
            return tn.return = H, tn;
          }
          Qm(H, ee);
        }
        return typeof ee == "function" && Xm(H), null;
      }
      function V(H, ee, I, he) {
        var Ae = ee !== null ? ee.key : null;
        if (typeof I == "string" && I !== "" || typeof I == "number")
          return Ae !== null ? null : S(H, ee, "" + I, he);
        if (typeof I == "object" && I !== null) {
          switch (I.$$typeof) {
            case Lr:
              return I.key === Ae ? C(H, ee, I, he) : null;
            case ur:
              return I.key === Ae ? D(H, ee, I, he) : null;
            case st: {
              var _e = I._payload, rt = I._init;
              return V(H, ee, rt(_e), he);
            }
          }
          if (St(I) || dt(I))
            return Ae !== null ? null : M(H, ee, I, he, null);
          Qm(H, I);
        }
        return typeof I == "function" && Xm(H), null;
      }
      function $(H, ee, I, he, Ae) {
        if (typeof he == "string" && he !== "" || typeof he == "number") {
          var _e = H.get(I) || null;
          return S(ee, _e, "" + he, Ae);
        }
        if (typeof he == "object" && he !== null) {
          switch (he.$$typeof) {
            case Lr: {
              var rt = H.get(he.key === null ? I : he.key) || null;
              return C(ee, rt, he, Ae);
            }
            case ur: {
              var ct = H.get(he.key === null ? I : he.key) || null;
              return D(ee, ct, he, Ae);
            }
            case st:
              var tn = he._payload, Ht = he._init;
              return $(H, ee, I, Ht(tn), Ae);
          }
          if (St(he) || dt(he)) {
            var Zn = H.get(I) || null;
            return M(ee, Zn, he, Ae, null);
          }
          Qm(ee, he);
        }
        return typeof he == "function" && Xm(ee), null;
      }
      function X(H, ee, I) {
        {
          if (typeof H != "object" || H === null)
            return ee;
          switch (H.$$typeof) {
            case Lr:
            case ur:
              IT(H, I);
              var he = H.key;
              if (typeof he != "string")
                break;
              if (ee === null) {
                ee = /* @__PURE__ */ new Set(), ee.add(he);
                break;
              }
              if (!ee.has(he)) {
                ee.add(he);
                break;
              }
              v("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", he);
              break;
            case st:
              var Ae = H._payload, _e = H._init;
              X(_e(Ae), ee, I);
              break;
          }
        }
        return ee;
      }
      function J(H, ee, I, he) {
        for (var Ae = null, _e = 0; _e < I.length; _e++) {
          var rt = I[_e];
          Ae = X(rt, Ae, H);
        }
        for (var ct = null, tn = null, Ht = ee, Zn = 0, It = 0, Yn = null; Ht !== null && It < I.length; It++) {
          Ht.index > It ? (Yn = Ht, Ht = null) : Yn = Ht.sibling;
          var pa = V(H, Ht, I[It], he);
          if (pa === null) {
            Ht === null && (Ht = Yn);
            break;
          }
          e && Ht && pa.alternate === null && t(H, Ht), Zn = d(pa, Zn, It), tn === null ? ct = pa : tn.sibling = pa, tn = pa, Ht = Yn;
        }
        if (It === I.length) {
          if (a(H, Ht), Hr()) {
            var Qr = It;
            vc(H, Qr);
          }
          return ct;
        }
        if (Ht === null) {
          for (; It < I.length; It++) {
            var gi = F(H, I[It], he);
            gi !== null && (Zn = d(gi, Zn, It), tn === null ? ct = gi : tn.sibling = gi, tn = gi);
          }
          if (Hr()) {
            var Ma = It;
            vc(H, Ma);
          }
          return ct;
        }
        for (var Oa = i(H, Ht); It < I.length; It++) {
          var ha = $(Oa, H, It, I[It], he);
          ha !== null && (e && ha.alternate !== null && Oa.delete(ha.key === null ? It : ha.key), Zn = d(ha, Zn, It), tn === null ? ct = ha : tn.sibling = ha, tn = ha);
        }
        if (e && Oa.forEach(function(Ed) {
          return t(H, Ed);
        }), Hr()) {
          var us = It;
          vc(H, us);
        }
        return ct;
      }
      function be(H, ee, I, he) {
        var Ae = dt(I);
        if (typeof Ae != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          I[Symbol.toStringTag] === "Generator" && (_S || v("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), _S = !0), I.entries === Ae && (DS || v("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), DS = !0);
          var _e = Ae.call(I);
          if (_e)
            for (var rt = null, ct = _e.next(); !ct.done; ct = _e.next()) {
              var tn = ct.value;
              rt = X(tn, rt, H);
            }
        }
        var Ht = Ae.call(I);
        if (Ht == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Zn = null, It = null, Yn = ee, pa = 0, Qr = 0, gi = null, Ma = Ht.next(); Yn !== null && !Ma.done; Qr++, Ma = Ht.next()) {
          Yn.index > Qr ? (gi = Yn, Yn = null) : gi = Yn.sibling;
          var Oa = V(H, Yn, Ma.value, he);
          if (Oa === null) {
            Yn === null && (Yn = gi);
            break;
          }
          e && Yn && Oa.alternate === null && t(H, Yn), pa = d(Oa, pa, Qr), It === null ? Zn = Oa : It.sibling = Oa, It = Oa, Yn = gi;
        }
        if (Ma.done) {
          if (a(H, Yn), Hr()) {
            var ha = Qr;
            vc(H, ha);
          }
          return Zn;
        }
        if (Yn === null) {
          for (; !Ma.done; Qr++, Ma = Ht.next()) {
            var us = F(H, Ma.value, he);
            us !== null && (pa = d(us, pa, Qr), It === null ? Zn = us : It.sibling = us, It = us);
          }
          if (Hr()) {
            var Ed = Qr;
            vc(H, Ed);
          }
          return Zn;
        }
        for (var Vh = i(H, Yn); !Ma.done; Qr++, Ma = Ht.next()) {
          var dl = $(Vh, H, Qr, Ma.value, he);
          dl !== null && (e && dl.alternate !== null && Vh.delete(dl.key === null ? Qr : dl.key), pa = d(dl, pa, Qr), It === null ? Zn = dl : It.sibling = dl, It = dl);
        }
        if (e && Vh.forEach(function(xL) {
          return t(H, xL);
        }), Hr()) {
          var TL = Qr;
          vc(H, TL);
        }
        return Zn;
      }
      function Qe(H, ee, I, he) {
        if (ee !== null && ee.tag === Y) {
          a(H, ee.sibling);
          var Ae = u(ee, I);
          return Ae.return = H, Ae;
        }
        a(H, ee);
        var _e = bE(I, H.mode, he);
        return _e.return = H, _e;
      }
      function Ie(H, ee, I, he) {
        for (var Ae = I.key, _e = ee; _e !== null; ) {
          if (_e.key === Ae) {
            var rt = I.type;
            if (rt === Ti) {
              if (_e.tag === K) {
                a(H, _e.sibling);
                var ct = u(_e, I.props.children);
                return ct.return = H, ct._debugSource = I._source, ct._debugOwner = I._owner, ct;
              }
            } else if (_e.elementType === rt || // Keep this check inline so it only runs on the false path:
            XR(_e, I) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof rt == "object" && rt !== null && rt.$$typeof === st && YT(rt) === _e.type) {
              a(H, _e.sibling);
              var tn = u(_e, I.props);
              return tn.ref = ih(H, _e, I), tn.return = H, tn._debugSource = I._source, tn._debugOwner = I._owner, tn;
            }
            a(H, _e);
            break;
          } else
            t(H, _e);
          _e = _e.sibling;
        }
        if (I.type === Ti) {
          var Ht = su(I.props.children, H.mode, he, I.key);
          return Ht.return = H, Ht;
        } else {
          var Zn = wE(I, H.mode, he);
          return Zn.ref = ih(H, ee, I), Zn.return = H, Zn;
        }
      }
      function Nt(H, ee, I, he) {
        for (var Ae = I.key, _e = ee; _e !== null; ) {
          if (_e.key === Ae)
            if (_e.tag === A && _e.stateNode.containerInfo === I.containerInfo && _e.stateNode.implementation === I.implementation) {
              a(H, _e.sibling);
              var rt = u(_e, I.children || []);
              return rt.return = H, rt;
            } else {
              a(H, _e);
              break;
            }
          else
            t(H, _e);
          _e = _e.sibling;
        }
        var ct = DE(I, H.mode, he);
        return ct.return = H, ct;
      }
      function _t(H, ee, I, he) {
        var Ae = typeof I == "object" && I !== null && I.type === Ti && I.key === null;
        if (Ae && (I = I.props.children), typeof I == "object" && I !== null) {
          switch (I.$$typeof) {
            case Lr:
              return m(Ie(H, ee, I, he));
            case ur:
              return m(Nt(H, ee, I, he));
            case st:
              var _e = I._payload, rt = I._init;
              return _t(H, ee, rt(_e), he);
          }
          if (St(I))
            return J(H, ee, I, he);
          if (dt(I))
            return be(H, ee, I, he);
          Qm(H, I);
        }
        return typeof I == "string" && I !== "" || typeof I == "number" ? m(Qe(H, ee, "" + I, he)) : (typeof I == "function" && Xm(H), a(H, ee));
      }
      return _t;
    }
    var nd = WT(!0), $T = WT(!1);
    function Zk(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = _c(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = _c(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Jk(e, t) {
      for (var a = e.child; a !== null; )
        jA(a, t), a = a.sibling;
    }
    var AS = Ks(null), LS;
    LS = {};
    var qm = null, rd = null, NS = null, Zm = !1;
    function Jm() {
      qm = null, rd = null, NS = null, Zm = !1;
    }
    function GT() {
      Zm = !0;
    }
    function KT() {
      Zm = !1;
    }
    function QT(e, t, a) {
      fa(AS, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== LS && v("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = LS;
    }
    function PS(e, t) {
      var a = AS.current;
      ca(AS, t), e._currentValue = a;
    }
    function US(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Wl(i.childLanes, t) ? u !== null && !Wl(u.childLanes, t) && (u.childLanes = pt(u.childLanes, t)) : (i.childLanes = pt(i.childLanes, t), u !== null && (u.childLanes = pt(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && v("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function eM(e, t, a) {
      tM(e, t, a);
    }
    function tM(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, d = i.dependencies;
        if (d !== null) {
          u = i.child;
          for (var m = d.firstContext; m !== null; ) {
            if (m.context === t) {
              if (i.tag === b) {
                var S = $u(a), C = rs(nn, S);
                C.tag = ty;
                var D = i.updateQueue;
                if (D !== null) {
                  var M = D.shared, F = M.pending;
                  F === null ? C.next = C : (C.next = F.next, F.next = C), M.pending = C;
                }
              }
              i.lanes = pt(i.lanes, a);
              var V = i.alternate;
              V !== null && (V.lanes = pt(V.lanes, a)), US(i.return, a, e), d.lanes = pt(d.lanes, a);
              break;
            }
            m = m.next;
          }
        } else if (i.tag === ie)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Oe) {
          var $ = i.return;
          if ($ === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          $.lanes = pt($.lanes, a);
          var X = $.alternate;
          X !== null && (X.lanes = pt(X.lanes, a)), US($, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var J = u.sibling;
            if (J !== null) {
              J.return = u.return, u = J;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function ad(e, t) {
      qm = e, rd = null, NS = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (oa(a.lanes, t) && Eh(), a.firstContext = null);
      }
    }
    function or(e) {
      Zm && v("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (NS !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (rd === null) {
          if (qm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          rd = a, qm.dependencies = {
            lanes: se,
            firstContext: a
          };
        } else
          rd = rd.next = a;
      }
      return t;
    }
    var Ec = null;
    function VS(e) {
      Ec === null ? Ec = [e] : Ec.push(e);
    }
    function nM() {
      if (Ec !== null) {
        for (var e = 0; e < Ec.length; e++) {
          var t = Ec[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var d = u.next;
              u.next = i, a.next = d;
            }
            t.pending = a;
          }
        }
        Ec = null;
      }
    }
    function XT(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, VS(t)) : (a.next = u.next, u.next = a), t.interleaved = a, ey(e, i);
    }
    function rM(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, VS(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function aM(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, VS(t)) : (a.next = u.next, u.next = a), t.interleaved = a, ey(e, i);
    }
    function Ga(e, t) {
      return ey(e, t);
    }
    var iM = ey;
    function ey(e, t) {
      e.lanes = pt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = pt(a.lanes, t)), a === null && (e.flags & (yn | ta)) !== We && $R(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = pt(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = pt(a.childLanes, t) : (u.flags & (yn | ta)) !== We && $R(e), i = u, u = u.return;
      if (i.tag === _) {
        var d = i.stateNode;
        return d;
      } else
        return null;
    }
    var qT = 0, ZT = 1, ty = 2, zS = 3, ny = !1, FS, ry;
    FS = !1, ry = null;
    function jS(e) {
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
    function JT(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function rs(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: qT,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Zs(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (ry === u && !FS && (v("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), FS = !0), rA()) {
        var d = u.pending;
        return d === null ? t.next = t : (t.next = d.next, d.next = t), u.pending = t, iM(e, a);
      } else
        return aM(e, u, t, a);
    }
    function ay(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (gp(a)) {
          var d = u.lanes;
          d = Ep(d, e.pendingLanes);
          var m = pt(d, a);
          u.lanes = m, Mf(e, m);
        }
      }
    }
    function BS(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var d = null, m = null, S = a.firstBaseUpdate;
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
          a = {
            baseState: u.baseState,
            firstBaseUpdate: d,
            lastBaseUpdate: m,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var M = a.lastBaseUpdate;
      M === null ? a.firstBaseUpdate = t : M.next = t, a.lastBaseUpdate = t;
    }
    function oM(e, t, a, i, u, d) {
      switch (a.tag) {
        case ZT: {
          var m = a.payload;
          if (typeof m == "function") {
            GT();
            var S = m.call(d, i, u);
            {
              if (e.mode & Jt) {
                gn(!0);
                try {
                  m.call(d, i, u);
                } finally {
                  gn(!1);
                }
              }
              KT();
            }
            return S;
          }
          return m;
        }
        case zS:
          e.flags = e.flags & ~nr | Ye;
        case qT: {
          var C = a.payload, D;
          if (typeof C == "function") {
            GT(), D = C.call(d, i, u);
            {
              if (e.mode & Jt) {
                gn(!0);
                try {
                  C.call(d, i, u);
                } finally {
                  gn(!1);
                }
              }
              KT();
            }
          } else
            D = C;
          return D == null ? i : vt({}, i, D);
        }
        case ty:
          return ny = !0, i;
      }
      return i;
    }
    function iy(e, t, a, i) {
      var u = e.updateQueue;
      ny = !1, ry = u.shared;
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
        var $ = u.baseState, X = se, J = null, be = null, Qe = null, Ie = d;
        do {
          var Nt = Ie.lane, _t = Ie.eventTime;
          if (Wl(i, Nt)) {
            if (Qe !== null) {
              var ee = {
                eventTime: _t,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Vt,
                tag: Ie.tag,
                payload: Ie.payload,
                callback: Ie.callback,
                next: null
              };
              Qe = Qe.next = ee;
            }
            $ = oM(e, u, Ie, $, t, a);
            var I = Ie.callback;
            if (I !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ie.lane !== Vt) {
              e.flags |= sn;
              var he = u.effects;
              he === null ? u.effects = [Ie] : he.push(Ie);
            }
          } else {
            var H = {
              eventTime: _t,
              lane: Nt,
              tag: Ie.tag,
              payload: Ie.payload,
              callback: Ie.callback,
              next: null
            };
            Qe === null ? (be = Qe = H, J = $) : Qe = Qe.next = H, X = pt(X, Nt);
          }
          if (Ie = Ie.next, Ie === null) {
            if (S = u.shared.pending, S === null)
              break;
            var Ae = S, _e = Ae.next;
            Ae.next = null, Ie = _e, u.lastBaseUpdate = Ae, u.shared.pending = null;
          }
        } while (!0);
        Qe === null && (J = $), u.baseState = J, u.firstBaseUpdate = be, u.lastBaseUpdate = Qe;
        var rt = u.shared.interleaved;
        if (rt !== null) {
          var ct = rt;
          do
            X = pt(X, ct.lane), ct = ct.next;
          while (ct !== rt);
        } else d === null && (u.shared.lanes = se);
        Ah(X), e.lanes = X, e.memoizedState = $;
      }
      ry = null;
    }
    function lM(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function ex() {
      ny = !1;
    }
    function oy() {
      return ny;
    }
    function tx(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var d = i[u], m = d.callback;
          m !== null && (d.callback = null, lM(m, a));
        }
    }
    var oh = {}, Js = Ks(oh), lh = Ks(oh), ly = Ks(oh);
    function sy(e) {
      if (e === oh)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function nx() {
      var e = sy(ly.current);
      return e;
    }
    function HS(e, t) {
      fa(ly, t, e), fa(lh, e, e), fa(Js, oh, e);
      var a = R_(t);
      ca(Js, e), fa(Js, a, e);
    }
    function id(e) {
      ca(Js, e), ca(lh, e), ca(ly, e);
    }
    function IS() {
      var e = sy(Js.current);
      return e;
    }
    function rx(e) {
      sy(ly.current);
      var t = sy(Js.current), a = w_(t, e.type);
      t !== a && (fa(lh, e, e), fa(Js, a, e));
    }
    function YS(e) {
      lh.current === e && (ca(Js, e), ca(lh, e));
    }
    var sM = 0, ax = 1, ix = 1, sh = 2, go = Ks(sM);
    function WS(e, t) {
      return (e & t) !== 0;
    }
    function od(e) {
      return e & ax;
    }
    function $S(e, t) {
      return e & ax | t;
    }
    function uM(e, t) {
      return e | t;
    }
    function eu(e, t) {
      fa(go, t, e);
    }
    function ld(e) {
      ca(go, e);
    }
    function cM(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function uy(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ne) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || TT(i) || cS(i))
              return t;
          }
        } else if (t.tag === lt && // revealOrder undefined can't be trusted because it don't
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
    var Ka = (
      /*   */
      0
    ), mr = (
      /* */
      1
    ), il = (
      /*  */
      2
    ), yr = (
      /*    */
      4
    ), Ir = (
      /*   */
      8
    ), GS = [];
    function KS() {
      for (var e = 0; e < GS.length; e++) {
        var t = GS[e];
        t._workInProgressVersionPrimary = null;
      }
      GS.length = 0;
    }
    function fM(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Me = c.ReactCurrentDispatcher, uh = c.ReactCurrentBatchConfig, QS, sd;
    QS = /* @__PURE__ */ new Set();
    var Cc = se, en = null, gr = null, Sr = null, cy = !1, ch = !1, fh = 0, dM = 0, pM = 25, ae = null, Wi = null, tu = -1, XS = !1;
    function $t() {
      {
        var e = ae;
        Wi === null ? Wi = [e] : Wi.push(e);
      }
    }
    function Te() {
      {
        var e = ae;
        Wi !== null && (tu++, Wi[tu] !== e && hM(e));
      }
    }
    function ud(e) {
      e != null && !St(e) && v("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ae, typeof e);
    }
    function hM(e) {
      {
        var t = ot(en);
        if (!QS.has(t) && (QS.add(t), Wi !== null)) {
          for (var a = "", i = 30, u = 0; u <= tu; u++) {
            for (var d = Wi[u], m = u === tu ? e : d, S = u + 1 + ". " + d; S.length < i; )
              S += " ";
            S += m + `
`, a += S;
          }
          v(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function da() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function qS(e, t) {
      if (XS)
        return !1;
      if (t === null)
        return v("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ae), !1;
      e.length !== t.length && v(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ae, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!fe(e[a], t[a]))
          return !1;
      return !0;
    }
    function cd(e, t, a, i, u, d) {
      Cc = d, en = t, Wi = e !== null ? e._debugHookTypes : null, tu = -1, XS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = se, e !== null && e.memoizedState !== null ? Me.current = Dx : Wi !== null ? Me.current = bx : Me.current = wx;
      var m = a(i, u);
      if (ch) {
        var S = 0;
        do {
          if (ch = !1, fh = 0, S >= pM)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          S += 1, XS = !1, gr = null, Sr = null, t.updateQueue = null, tu = -1, Me.current = _x, m = a(i, u);
        } while (ch);
      }
      Me.current = xy, t._debugHookTypes = Wi;
      var C = gr !== null && gr.next !== null;
      if (Cc = se, en = null, gr = null, Sr = null, ae = null, Wi = null, tu = -1, e !== null && (e.flags & zn) !== (t.flags & zn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Rt) !== $e && v("Internal React error: Expected static flag was missing. Please notify the React team."), cy = !1, C)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return m;
    }
    function fd() {
      var e = fh !== 0;
      return fh = 0, e;
    }
    function ox(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & jt) !== $e ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = Gu(e.lanes, a);
    }
    function lx() {
      if (Me.current = xy, cy) {
        for (var e = en.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        cy = !1;
      }
      Cc = se, en = null, gr = null, Sr = null, Wi = null, tu = -1, ae = null, Ex = !1, ch = !1, fh = 0;
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
    function $i() {
      var e;
      if (gr === null) {
        var t = en.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = gr.next;
      var a;
      if (Sr === null ? a = en.memoizedState : a = Sr.next, a !== null)
        Sr = a, a = Sr.next, gr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        gr = e;
        var i = {
          memoizedState: gr.memoizedState,
          baseState: gr.baseState,
          baseQueue: gr.baseQueue,
          queue: gr.queue,
          next: null
        };
        Sr === null ? en.memoizedState = Sr = i : Sr = Sr.next = i;
      }
      return Sr;
    }
    function sx() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function ZS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function JS(e, t, a) {
      var i = ol(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var d = {
        pending: null,
        interleaved: null,
        lanes: se,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = d;
      var m = d.dispatch = gM.bind(null, en, d);
      return [i.memoizedState, m];
    }
    function e0(e, t, a) {
      var i = $i(), u = i.queue;
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
        var M = m.next, F = d.baseState, V = null, $ = null, X = null, J = M;
        do {
          var be = J.lane;
          if (Wl(Cc, be)) {
            if (X !== null) {
              var Ie = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Vt,
                action: J.action,
                hasEagerState: J.hasEagerState,
                eagerState: J.eagerState,
                next: null
              };
              X = X.next = Ie;
            }
            if (J.hasEagerState)
              F = J.eagerState;
            else {
              var Nt = J.action;
              F = e(F, Nt);
            }
          } else {
            var Qe = {
              lane: be,
              action: J.action,
              hasEagerState: J.hasEagerState,
              eagerState: J.eagerState,
              next: null
            };
            X === null ? ($ = X = Qe, V = F) : X = X.next = Qe, en.lanes = pt(en.lanes, be), Ah(be);
          }
          J = J.next;
        } while (J !== null && J !== M);
        X === null ? V = F : X.next = $, fe(F, i.memoizedState) || Eh(), i.memoizedState = F, i.baseState = V, i.baseQueue = X, u.lastRenderedState = F;
      }
      var _t = u.interleaved;
      if (_t !== null) {
        var H = _t;
        do {
          var ee = H.lane;
          en.lanes = pt(en.lanes, ee), Ah(ee), H = H.next;
        } while (H !== _t);
      } else m === null && (u.lanes = se);
      var I = u.dispatch;
      return [i.memoizedState, I];
    }
    function t0(e, t, a) {
      var i = $i(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var d = u.dispatch, m = u.pending, S = i.memoizedState;
      if (m !== null) {
        u.pending = null;
        var C = m.next, D = C;
        do {
          var M = D.action;
          S = e(S, M), D = D.next;
        } while (D !== C);
        fe(S, i.memoizedState) || Eh(), i.memoizedState = S, i.baseQueue === null && (i.baseState = S), u.lastRenderedState = S;
      }
      return [S, d];
    }
    function kV(e, t, a) {
    }
    function MV(e, t, a) {
    }
    function n0(e, t, a) {
      var i = en, u = ol(), d, m = Hr();
      if (m) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        d = a(), sd || d !== a() && (v("The result of getServerSnapshot should be cached to avoid an infinite loop"), sd = !0);
      } else {
        if (d = t(), !sd) {
          var S = t();
          fe(d, S) || (v("The result of getSnapshot should be cached to avoid an infinite loop"), sd = !0);
        }
        var C = Hy();
        if (C === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        _f(C, Cc) || ux(i, t, d);
      }
      u.memoizedState = d;
      var D = {
        value: d,
        getSnapshot: t
      };
      return u.queue = D, vy(fx.bind(null, i, D, e), [e]), i.flags |= ea, dh(mr | Ir, cx.bind(null, i, D, d, t), void 0, null), d;
    }
    function fy(e, t, a) {
      var i = en, u = $i(), d = t();
      if (!sd) {
        var m = t();
        fe(d, m) || (v("The result of getSnapshot should be cached to avoid an infinite loop"), sd = !0);
      }
      var S = u.memoizedState, C = !fe(S, d);
      C && (u.memoizedState = d, Eh());
      var D = u.queue;
      if (hh(fx.bind(null, i, D, e), [e]), D.getSnapshot !== t || C || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Sr !== null && Sr.memoizedState.tag & mr) {
        i.flags |= ea, dh(mr | Ir, cx.bind(null, i, D, d, t), void 0, null);
        var M = Hy();
        if (M === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        _f(M, Cc) || ux(i, t, d);
      }
      return d;
    }
    function ux(e, t, a) {
      e.flags |= As;
      var i = {
        getSnapshot: t,
        value: a
      }, u = en.updateQueue;
      if (u === null)
        u = sx(), en.updateQueue = u, u.stores = [i];
      else {
        var d = u.stores;
        d === null ? u.stores = [i] : d.push(i);
      }
    }
    function cx(e, t, a, i) {
      t.value = a, t.getSnapshot = i, dx(t) && px(e);
    }
    function fx(e, t, a) {
      var i = function() {
        dx(t) && px(e);
      };
      return a(i);
    }
    function dx(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !fe(a, i);
      } catch {
        return !0;
      }
    }
    function px(e) {
      var t = Ga(e, et);
      t !== null && xr(t, e, et, nn);
    }
    function dy(e) {
      var t = ol();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: se,
        dispatch: null,
        lastRenderedReducer: ZS,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = SM.bind(null, en, a);
      return [t.memoizedState, i];
    }
    function r0(e) {
      return e0(ZS);
    }
    function a0(e) {
      return t0(ZS);
    }
    function dh(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, d = en.updateQueue;
      if (d === null)
        d = sx(), en.updateQueue = d, d.lastEffect = u.next = u;
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
    function i0(e) {
      var t = ol();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function py(e) {
      var t = $i();
      return t.memoizedState;
    }
    function ph(e, t, a, i) {
      var u = ol(), d = i === void 0 ? null : i;
      en.flags |= e, u.memoizedState = dh(mr | t, a, void 0, d);
    }
    function hy(e, t, a, i) {
      var u = $i(), d = i === void 0 ? null : i, m = void 0;
      if (gr !== null) {
        var S = gr.memoizedState;
        if (m = S.destroy, d !== null) {
          var C = S.deps;
          if (qS(d, C)) {
            u.memoizedState = dh(t, a, m, d);
            return;
          }
        }
      }
      en.flags |= e, u.memoizedState = dh(mr | t, a, m, d);
    }
    function vy(e, t) {
      return (en.mode & jt) !== $e ? ph(Li | ea | ef, Ir, e, t) : ph(ea | ef, Ir, e, t);
    }
    function hh(e, t) {
      return hy(ea, Ir, e, t);
    }
    function o0(e, t) {
      return ph(Ot, il, e, t);
    }
    function my(e, t) {
      return hy(Ot, il, e, t);
    }
    function l0(e, t) {
      var a = Ot;
      return a |= io, (en.mode & jt) !== $e && (a |= Bo), ph(a, yr, e, t);
    }
    function yy(e, t) {
      return hy(Ot, yr, e, t);
    }
    function hx(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
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
    function s0(e, t, a) {
      typeof t != "function" && v("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Ot;
      return u |= io, (en.mode & jt) !== $e && (u |= Bo), ph(u, yr, hx.bind(null, t, e), i);
    }
    function gy(e, t, a) {
      typeof t != "function" && v("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return hy(Ot, yr, hx.bind(null, t, e), i);
    }
    function vM(e, t) {
    }
    var Sy = vM;
    function u0(e, t) {
      var a = ol(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Ey(e, t) {
      var a = $i(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var d = u[1];
        if (qS(i, d))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function c0(e, t) {
      var a = ol(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function Cy(e, t) {
      var a = $i(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var d = u[1];
        if (qS(i, d))
          return u[0];
      }
      var m = e();
      return a.memoizedState = [m, i], m;
    }
    function f0(e) {
      var t = ol();
      return t.memoizedState = e, e;
    }
    function vx(e) {
      var t = $i(), a = gr, i = a.memoizedState;
      return yx(t, i, e);
    }
    function mx(e) {
      var t = $i();
      if (gr === null)
        return t.memoizedState = e, e;
      var a = gr.memoizedState;
      return yx(t, a, e);
    }
    function yx(e, t, a) {
      var i = !mp(Cc);
      if (i) {
        if (!fe(a, t)) {
          var u = Sp();
          en.lanes = pt(en.lanes, u), Ah(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Eh()), e.memoizedState = a, a;
    }
    function mM(e, t, a) {
      var i = Ya();
      Bn(Zv(i, Vi)), e(!0);
      var u = uh.transition;
      uh.transition = {};
      var d = uh.transition;
      uh.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Bn(i), uh.transition = u, u === null && d._updatedFibers) {
          var m = d._updatedFibers.size;
          m > 10 && T("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), d._updatedFibers.clear();
        }
      }
    }
    function d0() {
      var e = dy(!1), t = e[0], a = e[1], i = mM.bind(null, a), u = ol();
      return u.memoizedState = i, [t, i];
    }
    function gx() {
      var e = r0(), t = e[0], a = $i(), i = a.memoizedState;
      return [t, i];
    }
    function Sx() {
      var e = a0(), t = e[0], a = $i(), i = a.memoizedState;
      return [t, i];
    }
    var Ex = !1;
    function yM() {
      return Ex;
    }
    function p0() {
      var e = ol(), t = Hy(), a = t.identifierPrefix, i;
      if (Hr()) {
        var u = Nk();
        i = ":" + a + "R" + u;
        var d = fh++;
        d > 0 && (i += "H" + d.toString(32)), i += ":";
      } else {
        var m = dM++;
        i = ":" + a + "r" + m.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Ty() {
      var e = $i(), t = e.memoizedState;
      return t;
    }
    function gM(e, t, a) {
      typeof arguments[3] == "function" && v("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = ou(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Cx(e))
        Tx(t, u);
      else {
        var d = XT(e, t, u, i);
        if (d !== null) {
          var m = ka();
          xr(d, e, i, m), xx(d, t, i);
        }
      }
      Rx(e, i);
    }
    function SM(e, t, a) {
      typeof arguments[3] == "function" && v("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = ou(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Cx(e))
        Tx(t, u);
      else {
        var d = e.alternate;
        if (e.lanes === se && (d === null || d.lanes === se)) {
          var m = t.lastRenderedReducer;
          if (m !== null) {
            var S;
            S = Me.current, Me.current = So;
            try {
              var C = t.lastRenderedState, D = m(C, a);
              if (u.hasEagerState = !0, u.eagerState = D, fe(D, C)) {
                rM(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              Me.current = S;
            }
          }
        }
        var M = XT(e, t, u, i);
        if (M !== null) {
          var F = ka();
          xr(M, e, i, F), xx(M, t, i);
        }
      }
      Rx(e, i);
    }
    function Cx(e) {
      var t = e.alternate;
      return e === en || t !== null && t === en;
    }
    function Tx(e, t) {
      ch = cy = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function xx(e, t, a) {
      if (gp(a)) {
        var i = t.lanes;
        i = Ep(i, e.pendingLanes);
        var u = pt(i, a);
        t.lanes = u, Mf(e, u);
      }
    }
    function Rx(e, t, a) {
      Vu(e, t);
    }
    var xy = {
      readContext: or,
      useCallback: da,
      useContext: da,
      useEffect: da,
      useImperativeHandle: da,
      useInsertionEffect: da,
      useLayoutEffect: da,
      useMemo: da,
      useReducer: da,
      useRef: da,
      useState: da,
      useDebugValue: da,
      useDeferredValue: da,
      useTransition: da,
      useMutableSource: da,
      useSyncExternalStore: da,
      useId: da,
      unstable_isNewReconciler: de
    }, wx = null, bx = null, Dx = null, _x = null, ll = null, So = null, Ry = null;
    {
      var h0 = function() {
        v("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, ut = function() {
        v("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      wx = {
        readContext: function(e) {
          return or(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", $t(), ud(t), u0(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", $t(), or(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", $t(), ud(t), vy(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", $t(), ud(a), s0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", $t(), ud(t), o0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", $t(), ud(t), l0(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", $t(), ud(t);
          var a = Me.current;
          Me.current = ll;
          try {
            return c0(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", $t();
          var i = Me.current;
          Me.current = ll;
          try {
            return JS(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", $t(), i0(e);
        },
        useState: function(e) {
          ae = "useState", $t();
          var t = Me.current;
          Me.current = ll;
          try {
            return dy(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", $t(), void 0;
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", $t(), f0(e);
        },
        useTransition: function() {
          return ae = "useTransition", $t(), d0();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", $t(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", $t(), n0(e, t, a);
        },
        useId: function() {
          return ae = "useId", $t(), p0();
        },
        unstable_isNewReconciler: de
      }, bx = {
        readContext: function(e) {
          return or(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", Te(), u0(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", Te(), or(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", Te(), vy(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", Te(), s0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", Te(), o0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", Te(), l0(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", Te();
          var a = Me.current;
          Me.current = ll;
          try {
            return c0(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", Te();
          var i = Me.current;
          Me.current = ll;
          try {
            return JS(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", Te(), i0(e);
        },
        useState: function(e) {
          ae = "useState", Te();
          var t = Me.current;
          Me.current = ll;
          try {
            return dy(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", Te(), void 0;
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", Te(), f0(e);
        },
        useTransition: function() {
          return ae = "useTransition", Te(), d0();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", Te(), n0(e, t, a);
        },
        useId: function() {
          return ae = "useId", Te(), p0();
        },
        unstable_isNewReconciler: de
      }, Dx = {
        readContext: function(e) {
          return or(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", Te(), Ey(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", Te(), or(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", Te(), hh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", Te(), gy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", Te(), my(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", Te(), yy(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", Te();
          var a = Me.current;
          Me.current = So;
          try {
            return Cy(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", Te();
          var i = Me.current;
          Me.current = So;
          try {
            return e0(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", Te(), py();
        },
        useState: function(e) {
          ae = "useState", Te();
          var t = Me.current;
          Me.current = So;
          try {
            return r0(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", Te(), Sy();
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", Te(), vx(e);
        },
        useTransition: function() {
          return ae = "useTransition", Te(), gx();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", Te(), fy(e, t);
        },
        useId: function() {
          return ae = "useId", Te(), Ty();
        },
        unstable_isNewReconciler: de
      }, _x = {
        readContext: function(e) {
          return or(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", Te(), Ey(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", Te(), or(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", Te(), hh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", Te(), gy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", Te(), my(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", Te(), yy(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", Te();
          var a = Me.current;
          Me.current = Ry;
          try {
            return Cy(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", Te();
          var i = Me.current;
          Me.current = Ry;
          try {
            return t0(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", Te(), py();
        },
        useState: function(e) {
          ae = "useState", Te();
          var t = Me.current;
          Me.current = Ry;
          try {
            return a0(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", Te(), Sy();
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", Te(), mx(e);
        },
        useTransition: function() {
          return ae = "useTransition", Te(), Sx();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", Te(), fy(e, t);
        },
        useId: function() {
          return ae = "useId", Te(), Ty();
        },
        unstable_isNewReconciler: de
      }, ll = {
        readContext: function(e) {
          return h0(), or(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", ut(), $t(), u0(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", ut(), $t(), or(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", ut(), $t(), vy(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", ut(), $t(), s0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", ut(), $t(), o0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", ut(), $t(), l0(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", ut(), $t();
          var a = Me.current;
          Me.current = ll;
          try {
            return c0(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", ut(), $t();
          var i = Me.current;
          Me.current = ll;
          try {
            return JS(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", ut(), $t(), i0(e);
        },
        useState: function(e) {
          ae = "useState", ut(), $t();
          var t = Me.current;
          Me.current = ll;
          try {
            return dy(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", ut(), $t(), void 0;
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", ut(), $t(), f0(e);
        },
        useTransition: function() {
          return ae = "useTransition", ut(), $t(), d0();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", ut(), $t(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", ut(), $t(), n0(e, t, a);
        },
        useId: function() {
          return ae = "useId", ut(), $t(), p0();
        },
        unstable_isNewReconciler: de
      }, So = {
        readContext: function(e) {
          return h0(), or(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", ut(), Te(), Ey(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", ut(), Te(), or(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", ut(), Te(), hh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", ut(), Te(), gy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", ut(), Te(), my(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", ut(), Te(), yy(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", ut(), Te();
          var a = Me.current;
          Me.current = So;
          try {
            return Cy(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", ut(), Te();
          var i = Me.current;
          Me.current = So;
          try {
            return e0(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", ut(), Te(), py();
        },
        useState: function(e) {
          ae = "useState", ut(), Te();
          var t = Me.current;
          Me.current = So;
          try {
            return r0(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", ut(), Te(), Sy();
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", ut(), Te(), vx(e);
        },
        useTransition: function() {
          return ae = "useTransition", ut(), Te(), gx();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", ut(), Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", ut(), Te(), fy(e, t);
        },
        useId: function() {
          return ae = "useId", ut(), Te(), Ty();
        },
        unstable_isNewReconciler: de
      }, Ry = {
        readContext: function(e) {
          return h0(), or(e);
        },
        useCallback: function(e, t) {
          return ae = "useCallback", ut(), Te(), Ey(e, t);
        },
        useContext: function(e) {
          return ae = "useContext", ut(), Te(), or(e);
        },
        useEffect: function(e, t) {
          return ae = "useEffect", ut(), Te(), hh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ae = "useImperativeHandle", ut(), Te(), gy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ae = "useInsertionEffect", ut(), Te(), my(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ae = "useLayoutEffect", ut(), Te(), yy(e, t);
        },
        useMemo: function(e, t) {
          ae = "useMemo", ut(), Te();
          var a = Me.current;
          Me.current = So;
          try {
            return Cy(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ae = "useReducer", ut(), Te();
          var i = Me.current;
          Me.current = So;
          try {
            return t0(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return ae = "useRef", ut(), Te(), py();
        },
        useState: function(e) {
          ae = "useState", ut(), Te();
          var t = Me.current;
          Me.current = So;
          try {
            return a0(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ae = "useDebugValue", ut(), Te(), Sy();
        },
        useDeferredValue: function(e) {
          return ae = "useDeferredValue", ut(), Te(), mx(e);
        },
        useTransition: function() {
          return ae = "useTransition", ut(), Te(), Sx();
        },
        useMutableSource: function(e, t, a) {
          return ae = "useMutableSource", ut(), Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ae = "useSyncExternalStore", ut(), Te(), fy(e, t);
        },
        useId: function() {
          return ae = "useId", ut(), Te(), Ty();
        },
        unstable_isNewReconciler: de
      };
    }
    var nu = l.unstable_now, kx = 0, wy = -1, vh = -1, by = -1, v0 = !1, Dy = !1;
    function Mx() {
      return v0;
    }
    function EM() {
      Dy = !0;
    }
    function CM() {
      v0 = !1, Dy = !1;
    }
    function TM() {
      v0 = Dy, Dy = !1;
    }
    function Ox() {
      return kx;
    }
    function Ax() {
      kx = nu();
    }
    function m0(e) {
      vh = nu(), e.actualStartTime < 0 && (e.actualStartTime = nu());
    }
    function Lx(e) {
      vh = -1;
    }
    function _y(e, t) {
      if (vh >= 0) {
        var a = nu() - vh;
        e.actualDuration += a, t && (e.selfBaseDuration = a), vh = -1;
      }
    }
    function sl(e) {
      if (wy >= 0) {
        var t = nu() - wy;
        wy = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case _:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case ye:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function y0(e) {
      if (by >= 0) {
        var t = nu() - by;
        by = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case _:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case ye:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function ul() {
      wy = nu();
    }
    function g0() {
      by = nu();
    }
    function S0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Eo(e, t) {
      if (e && e.defaultProps) {
        var a = vt({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var E0 = {}, C0, T0, x0, R0, w0, Nx, ky, b0, D0, _0, mh;
    {
      C0 = /* @__PURE__ */ new Set(), T0 = /* @__PURE__ */ new Set(), x0 = /* @__PURE__ */ new Set(), R0 = /* @__PURE__ */ new Set(), b0 = /* @__PURE__ */ new Set(), w0 = /* @__PURE__ */ new Set(), D0 = /* @__PURE__ */ new Set(), _0 = /* @__PURE__ */ new Set(), mh = /* @__PURE__ */ new Set();
      var Px = /* @__PURE__ */ new Set();
      ky = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          Px.has(a) || (Px.add(a), v("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, Nx = function(e, t) {
        if (t === void 0) {
          var a = Pt(e) || "Component";
          w0.has(a) || (w0.add(a), v("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(E0, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(E0);
    }
    function k0(e, t, a, i) {
      var u = e.memoizedState, d = a(i, u);
      {
        if (e.mode & Jt) {
          gn(!0);
          try {
            d = a(i, u);
          } finally {
            gn(!1);
          }
        }
        Nx(t, d);
      }
      var m = d == null ? u : vt({}, u, d);
      if (e.memoizedState = m, e.lanes === se) {
        var S = e.updateQueue;
        S.baseState = m;
      }
    }
    var M0 = {
      isMounted: Uv,
      enqueueSetState: function(e, t, a) {
        var i = Os(e), u = ka(), d = ou(i), m = rs(u, d);
        m.payload = t, a != null && (ky(a, "setState"), m.callback = a);
        var S = Zs(i, m, d);
        S !== null && (xr(S, i, d, u), ay(S, i, d)), Vu(i, d);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Os(e), u = ka(), d = ou(i), m = rs(u, d);
        m.tag = ZT, m.payload = t, a != null && (ky(a, "replaceState"), m.callback = a);
        var S = Zs(i, m, d);
        S !== null && (xr(S, i, d, u), ay(S, i, d)), Vu(i, d);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Os(e), i = ka(), u = ou(a), d = rs(i, u);
        d.tag = ty, t != null && (ky(t, "forceUpdate"), d.callback = t);
        var m = Zs(a, d, u);
        m !== null && (xr(m, a, u, i), ay(m, a, u)), sf(a, u);
      }
    };
    function Ux(e, t, a, i, u, d, m) {
      var S = e.stateNode;
      if (typeof S.shouldComponentUpdate == "function") {
        var C = S.shouldComponentUpdate(i, d, m);
        {
          if (e.mode & Jt) {
            gn(!0);
            try {
              C = S.shouldComponentUpdate(i, d, m);
            } finally {
              gn(!1);
            }
          }
          C === void 0 && v("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Pt(t) || "Component");
        }
        return C;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Fe(a, i) || !Fe(u, d) : !0;
    }
    function xM(e, t, a) {
      var i = e.stateNode;
      {
        var u = Pt(t) || "Component", d = i.render;
        d || (t.prototype && typeof t.prototype.render == "function" ? v("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : v("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && v("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && v("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && v("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && v("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !mh.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Jt) === $e && (mh.add(t), v(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !mh.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Jt) === $e && (mh.add(t), v(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && v("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !D0.has(t) && (D0.add(t), v("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && v("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && v("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Pt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && v("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && v("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && v("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && v("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var m = i.props !== a;
        i.props !== void 0 && m && v("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && v("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !x0.has(t) && (x0.add(t), v("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Pt(t))), typeof i.getDerivedStateFromProps == "function" && v("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && v("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && v("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var S = i.state;
        S && (typeof S != "object" || St(S)) && v("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && v("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function Vx(e, t) {
      t.updater = M0, e.stateNode = t, Ol(t, e), t._reactInternalInstance = E0;
    }
    function zx(e, t, a) {
      var i = !1, u = mi, d = mi, m = t.contextType;
      if ("contextType" in t) {
        var S = (
          // Allow null for conditional declaration
          m === null || m !== void 0 && m.$$typeof === N && m._context === void 0
        );
        if (!S && !_0.has(t)) {
          _0.add(t);
          var C = "";
          m === void 0 ? C = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof m != "object" ? C = " However, it is set to a " + typeof m + "." : m.$$typeof === Ri ? C = " Did you accidentally pass the Context.Provider instead?" : m._context !== void 0 ? C = " Did you accidentally pass the Context.Consumer instead?" : C = " However, it is set to an object with keys {" + Object.keys(m).join(", ") + "}.", v("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Pt(t) || "Component", C);
        }
      }
      if (typeof m == "object" && m !== null)
        d = or(m);
      else {
        u = qf(e, t, !0);
        var D = t.contextTypes;
        i = D != null, d = i ? Zf(e, u) : mi;
      }
      var M = new t(a, d);
      if (e.mode & Jt) {
        gn(!0);
        try {
          M = new t(a, d);
        } finally {
          gn(!1);
        }
      }
      var F = e.memoizedState = M.state !== null && M.state !== void 0 ? M.state : null;
      Vx(e, M);
      {
        if (typeof t.getDerivedStateFromProps == "function" && F === null) {
          var V = Pt(t) || "Component";
          T0.has(V) || (T0.add(V), v("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", V, M.state === null ? "null" : "undefined", V));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof M.getSnapshotBeforeUpdate == "function") {
          var $ = null, X = null, J = null;
          if (typeof M.componentWillMount == "function" && M.componentWillMount.__suppressDeprecationWarning !== !0 ? $ = "componentWillMount" : typeof M.UNSAFE_componentWillMount == "function" && ($ = "UNSAFE_componentWillMount"), typeof M.componentWillReceiveProps == "function" && M.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? X = "componentWillReceiveProps" : typeof M.UNSAFE_componentWillReceiveProps == "function" && (X = "UNSAFE_componentWillReceiveProps"), typeof M.componentWillUpdate == "function" && M.componentWillUpdate.__suppressDeprecationWarning !== !0 ? J = "componentWillUpdate" : typeof M.UNSAFE_componentWillUpdate == "function" && (J = "UNSAFE_componentWillUpdate"), $ !== null || X !== null || J !== null) {
            var be = Pt(t) || "Component", Qe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            R0.has(be) || (R0.add(be), v(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, be, Qe, $ !== null ? `
  ` + $ : "", X !== null ? `
  ` + X : "", J !== null ? `
  ` + J : ""));
          }
        }
      }
      return i && DT(e, u, d), M;
    }
    function RM(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (v("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", ot(e) || "Component"), M0.enqueueReplaceState(t, t.state, null));
    }
    function Fx(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var d = ot(e) || "Component";
          C0.has(d) || (C0.add(d), v("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", d));
        }
        M0.enqueueReplaceState(t, t.state, null);
      }
    }
    function O0(e, t, a, i) {
      xM(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, jS(e);
      var d = t.contextType;
      if (typeof d == "object" && d !== null)
        u.context = or(d);
      else {
        var m = qf(e, t, !0);
        u.context = Zf(e, m);
      }
      {
        if (u.state === a) {
          var S = Pt(t) || "Component";
          b0.has(S) || (b0.add(S), v("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", S));
        }
        e.mode & Jt && yo.recordLegacyContextWarning(e, u), yo.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var C = t.getDerivedStateFromProps;
      if (typeof C == "function" && (k0(e, t, C, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (RM(e, u), iy(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var D = Ot;
        D |= io, (e.mode & jt) !== $e && (D |= Bo), e.flags |= D;
      }
    }
    function wM(e, t, a, i) {
      var u = e.stateNode, d = e.memoizedProps;
      u.props = d;
      var m = u.context, S = t.contextType, C = mi;
      if (typeof S == "object" && S !== null)
        C = or(S);
      else {
        var D = qf(e, t, !0);
        C = Zf(e, D);
      }
      var M = t.getDerivedStateFromProps, F = typeof M == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !F && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (d !== a || m !== C) && Fx(e, u, a, C), ex();
      var V = e.memoizedState, $ = u.state = V;
      if (iy(e, a, u, i), $ = e.memoizedState, d === a && V === $ && !jm() && !oy()) {
        if (typeof u.componentDidMount == "function") {
          var X = Ot;
          X |= io, (e.mode & jt) !== $e && (X |= Bo), e.flags |= X;
        }
        return !1;
      }
      typeof M == "function" && (k0(e, t, M, a), $ = e.memoizedState);
      var J = oy() || Ux(e, t, d, a, V, $, C);
      if (J) {
        if (!F && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var be = Ot;
          be |= io, (e.mode & jt) !== $e && (be |= Bo), e.flags |= be;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Qe = Ot;
          Qe |= io, (e.mode & jt) !== $e && (Qe |= Bo), e.flags |= Qe;
        }
        e.memoizedProps = a, e.memoizedState = $;
      }
      return u.props = a, u.state = $, u.context = C, J;
    }
    function bM(e, t, a, i, u) {
      var d = t.stateNode;
      JT(e, t);
      var m = t.memoizedProps, S = t.type === t.elementType ? m : Eo(t.type, m);
      d.props = S;
      var C = t.pendingProps, D = d.context, M = a.contextType, F = mi;
      if (typeof M == "object" && M !== null)
        F = or(M);
      else {
        var V = qf(t, a, !0);
        F = Zf(t, V);
      }
      var $ = a.getDerivedStateFromProps, X = typeof $ == "function" || typeof d.getSnapshotBeforeUpdate == "function";
      !X && (typeof d.UNSAFE_componentWillReceiveProps == "function" || typeof d.componentWillReceiveProps == "function") && (m !== C || D !== F) && Fx(t, d, i, F), ex();
      var J = t.memoizedState, be = d.state = J;
      if (iy(t, i, d, u), be = t.memoizedState, m === C && J === be && !jm() && !oy() && !Ve)
        return typeof d.componentDidUpdate == "function" && (m !== e.memoizedProps || J !== e.memoizedState) && (t.flags |= Ot), typeof d.getSnapshotBeforeUpdate == "function" && (m !== e.memoizedProps || J !== e.memoizedState) && (t.flags |= Qn), !1;
      typeof $ == "function" && (k0(t, a, $, i), be = t.memoizedState);
      var Qe = oy() || Ux(t, a, S, i, J, be, F) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Ve;
      return Qe ? (!X && (typeof d.UNSAFE_componentWillUpdate == "function" || typeof d.componentWillUpdate == "function") && (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(i, be, F), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(i, be, F)), typeof d.componentDidUpdate == "function" && (t.flags |= Ot), typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= Qn)) : (typeof d.componentDidUpdate == "function" && (m !== e.memoizedProps || J !== e.memoizedState) && (t.flags |= Ot), typeof d.getSnapshotBeforeUpdate == "function" && (m !== e.memoizedProps || J !== e.memoizedState) && (t.flags |= Qn), t.memoizedProps = i, t.memoizedState = be), d.props = i, d.state = be, d.context = F, Qe;
    }
    function Tc(e, t) {
      return {
        value: e,
        source: t,
        stack: Ji(t),
        digest: null
      };
    }
    function A0(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function DM(e, t) {
      return !0;
    }
    function L0(e, t) {
      try {
        var a = DM(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, d = t.stack, m = d !== null ? d : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === b)
            return;
          console.error(i);
        }
        var S = u ? ot(u) : null, C = S ? "The above error occurred in the <" + S + "> component:" : "The above error occurred in one of your React components:", D;
        if (e.tag === _)
          D = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var M = ot(e) || "Anonymous";
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
    var _M = typeof WeakMap == "function" ? WeakMap : Map;
    function jx(e, t, a) {
      var i = rs(nn, a);
      i.tag = zS, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        EA(u), L0(e, t);
      }, i;
    }
    function N0(e, t, a) {
      var i = rs(nn, a);
      i.tag = zS;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var d = t.value;
        i.payload = function() {
          return u(d);
        }, i.callback = function() {
          qR(e), L0(e, t);
        };
      }
      var m = e.stateNode;
      return m !== null && typeof m.componentDidCatch == "function" && (i.callback = function() {
        qR(e), L0(e, t), typeof u != "function" && gA(this);
        var C = t.value, D = t.stack;
        this.componentDidCatch(C, {
          componentStack: D !== null ? D : ""
        }), typeof u != "function" && (oa(e.lanes, et) || v("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", ot(e) || "Unknown"));
      }), i;
    }
    function Bx(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new _M(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var d = CA.bind(null, e, t, a);
        aa && Lh(e, a), t.then(d, d);
      }
    }
    function kM(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var d = /* @__PURE__ */ new Set();
        d.add(a), e.updateQueue = d;
      } else
        u.add(a);
    }
    function MM(e, t) {
      var a = e.tag;
      if ((e.mode & Rt) === $e && (a === R || a === oe || a === Ee)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function Hx(e) {
      var t = e;
      do {
        if (t.tag === ne && cM(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function Ix(e, t, a, i, u) {
      if ((e.mode & Rt) === $e) {
        if (e === t)
          e.flags |= nr;
        else {
          if (e.flags |= Ye, a.flags |= Jc, a.flags &= -52805, a.tag === b) {
            var d = a.alternate;
            if (d === null)
              a.tag = Ne;
            else {
              var m = rs(nn, et);
              m.tag = ty, Zs(a, m, et);
            }
          }
          a.lanes = pt(a.lanes, et);
        }
        return e;
      }
      return e.flags |= nr, e.lanes = u, e;
    }
    function OM(e, t, a, i, u) {
      if (a.flags |= Ou, aa && Lh(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var d = i;
        MM(a), Hr() && a.mode & Rt && NT();
        var m = Hx(t);
        if (m !== null) {
          m.flags &= ~Dr, Ix(m, t, a, e, u), m.mode & Rt && Bx(e, d, u), kM(m, e, d);
          return;
        } else {
          if (!Yv(u)) {
            Bx(e, d, u), pE();
            return;
          }
          var S = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = S;
        }
      } else if (Hr() && a.mode & Rt) {
        NT();
        var C = Hx(t);
        if (C !== null) {
          (C.flags & nr) === We && (C.flags |= Dr), Ix(C, t, a, e, u), bS(Tc(i, a));
          return;
        }
      }
      i = Tc(i, a), cA(i);
      var D = t;
      do {
        switch (D.tag) {
          case _: {
            var M = i;
            D.flags |= nr;
            var F = $u(u);
            D.lanes = pt(D.lanes, F);
            var V = jx(D, M, F);
            BS(D, V);
            return;
          }
          case b:
            var $ = i, X = D.type, J = D.stateNode;
            if ((D.flags & Ye) === We && (typeof X.getDerivedStateFromError == "function" || J !== null && typeof J.componentDidCatch == "function" && !HR(J))) {
              D.flags |= nr;
              var be = $u(u);
              D.lanes = pt(D.lanes, be);
              var Qe = N0(D, $, be);
              BS(D, Qe);
              return;
            }
            break;
        }
        D = D.return;
      } while (D !== null);
    }
    function AM() {
      return null;
    }
    var yh = c.ReactCurrentOwner, Co = !1, P0, gh, U0, V0, z0, xc, F0, My, Sh;
    P0 = {}, gh = {}, U0 = {}, V0 = {}, z0 = {}, xc = !1, F0 = {}, My = {}, Sh = {};
    function Da(e, t, a, i) {
      e === null ? t.child = $T(t, null, a, i) : t.child = nd(t, e.child, a, i);
    }
    function LM(e, t, a, i) {
      t.child = nd(t, e.child, null, i), t.child = nd(t, null, a, i);
    }
    function Yx(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var d = a.propTypes;
        d && vo(
          d,
          i,
          // Resolved props
          "prop",
          Pt(a)
        );
      }
      var m = a.render, S = t.ref, C, D;
      ad(t, u), xa(t);
      {
        if (yh.current = t, Kn(!0), C = cd(e, t, m, i, S, u), D = fd(), t.mode & Jt) {
          gn(!0);
          try {
            C = cd(e, t, m, i, S, u), D = fd();
          } finally {
            gn(!1);
          }
        }
        Kn(!1);
      }
      return Ra(), e !== null && !Co ? (ox(e, t, u), as(e, t, u)) : (Hr() && D && ES(t), t.flags |= fi, Da(e, t, C, u), t.child);
    }
    function Wx(e, t, a, i, u) {
      if (e === null) {
        var d = a.type;
        if (zA(d) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var m = d;
          return m = Sd(d), t.tag = Ee, t.type = m, H0(t, d), $x(e, t, m, i, u);
        }
        {
          var S = d.propTypes;
          if (S && vo(
            S,
            i,
            // Resolved props
            "prop",
            Pt(d)
          ), a.defaultProps !== void 0) {
            var C = Pt(d) || "Unknown";
            Sh[C] || (v("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", C), Sh[C] = !0);
          }
        }
        var D = RE(a.type, null, i, t, t.mode, u);
        return D.ref = t.ref, D.return = t, t.child = D, D;
      }
      {
        var M = a.type, F = M.propTypes;
        F && vo(
          F,
          i,
          // Resolved props
          "prop",
          Pt(M)
        );
      }
      var V = e.child, $ = K0(e, u);
      if (!$) {
        var X = V.memoizedProps, J = a.compare;
        if (J = J !== null ? J : Fe, J(X, i) && e.ref === t.ref)
          return as(e, t, u);
      }
      t.flags |= fi;
      var be = _c(V, i);
      return be.ref = t.ref, be.return = t, t.child = be, be;
    }
    function $x(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var d = t.elementType;
        if (d.$$typeof === st) {
          var m = d, S = m._payload, C = m._init;
          try {
            d = C(S);
          } catch {
            d = null;
          }
          var D = d && d.propTypes;
          D && vo(
            D,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Pt(d)
          );
        }
      }
      if (e !== null) {
        var M = e.memoizedProps;
        if (Fe(M, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Co = !1, t.pendingProps = i = M, K0(e, u))
            (e.flags & Jc) !== We && (Co = !0);
          else return t.lanes = e.lanes, as(e, t, u);
      }
      return j0(e, t, a, i, u);
    }
    function Gx(e, t, a) {
      var i = t.pendingProps, u = i.children, d = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || ge)
        if ((t.mode & Rt) === $e) {
          var m = {
            baseLanes: se,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = m, Iy(t, a);
        } else if (oa(a, ia)) {
          var F = {
            baseLanes: se,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = F;
          var V = d !== null ? d.baseLanes : a;
          Iy(t, V);
        } else {
          var S = null, C;
          if (d !== null) {
            var D = d.baseLanes;
            C = pt(D, a);
          } else
            C = a;
          t.lanes = t.childLanes = ia;
          var M = {
            baseLanes: C,
            cachePool: S,
            transitions: null
          };
          return t.memoizedState = M, t.updateQueue = null, Iy(t, C), null;
        }
      else {
        var $;
        d !== null ? ($ = pt(d.baseLanes, a), t.memoizedState = null) : $ = a, Iy(t, $);
      }
      return Da(e, t, u, a), t.child;
    }
    function NM(e, t, a) {
      var i = t.pendingProps;
      return Da(e, t, i, a), t.child;
    }
    function PM(e, t, a) {
      var i = t.pendingProps.children;
      return Da(e, t, i, a), t.child;
    }
    function UM(e, t, a) {
      {
        t.flags |= Ot;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, d = u.children;
      return Da(e, t, d, a), t.child;
    }
    function Kx(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Tn, t.flags |= Ls);
    }
    function j0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var d = a.propTypes;
        d && vo(
          d,
          i,
          // Resolved props
          "prop",
          Pt(a)
        );
      }
      var m;
      {
        var S = qf(t, a, !0);
        m = Zf(t, S);
      }
      var C, D;
      ad(t, u), xa(t);
      {
        if (yh.current = t, Kn(!0), C = cd(e, t, a, i, m, u), D = fd(), t.mode & Jt) {
          gn(!0);
          try {
            C = cd(e, t, a, i, m, u), D = fd();
          } finally {
            gn(!1);
          }
        }
        Kn(!1);
      }
      return Ra(), e !== null && !Co ? (ox(e, t, u), as(e, t, u)) : (Hr() && D && ES(t), t.flags |= fi, Da(e, t, C, u), t.child);
    }
    function Qx(e, t, a, i, u) {
      {
        switch (JA(t)) {
          case !1: {
            var d = t.stateNode, m = t.type, S = new m(t.memoizedProps, d.context), C = S.state;
            d.updater.enqueueSetState(d, C, null);
            break;
          }
          case !0: {
            t.flags |= Ye, t.flags |= nr;
            var D = new Error("Simulated error coming from DevTools"), M = $u(u);
            t.lanes = pt(t.lanes, M);
            var F = N0(t, Tc(D, t), M);
            BS(t, F);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var V = a.propTypes;
          V && vo(
            V,
            i,
            // Resolved props
            "prop",
            Pt(a)
          );
        }
      }
      var $;
      al(a) ? ($ = !0, Hm(t)) : $ = !1, ad(t, u);
      var X = t.stateNode, J;
      X === null ? (Ay(e, t), zx(t, a, i), O0(t, a, i, u), J = !0) : e === null ? J = wM(t, a, i, u) : J = bM(e, t, a, i, u);
      var be = B0(e, t, a, J, $, u);
      {
        var Qe = t.stateNode;
        J && Qe.props !== i && (xc || v("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", ot(t) || "a component"), xc = !0);
      }
      return be;
    }
    function B0(e, t, a, i, u, d) {
      Kx(e, t);
      var m = (t.flags & Ye) !== We;
      if (!i && !m)
        return u && MT(t, a, !1), as(e, t, d);
      var S = t.stateNode;
      yh.current = t;
      var C;
      if (m && typeof a.getDerivedStateFromError != "function")
        C = null, Lx();
      else {
        xa(t);
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
        Ra();
      }
      return t.flags |= fi, e !== null && m ? LM(e, t, C, d) : Da(e, t, C, d), t.memoizedState = S.state, u && MT(t, a, !0), t.child;
    }
    function Xx(e) {
      var t = e.stateNode;
      t.pendingContext ? _T(e, t.pendingContext, t.pendingContext !== t.context) : t.context && _T(e, t.context, !1), HS(e, t.containerInfo);
    }
    function VM(e, t, a) {
      if (Xx(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, d = u.element;
      JT(e, t), iy(t, i, null, a);
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
          return qx(e, t, S, a, M);
        } else if (S !== d) {
          var F = Tc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return qx(e, t, S, a, F);
        } else {
          jk(t);
          var V = $T(t, null, S, a);
          t.child = V;
          for (var $ = V; $; )
            $.flags = $.flags & ~yn | ta, $ = $.sibling;
        }
      } else {
        if (td(), S === d)
          return as(e, t, a);
        Da(e, t, S, a);
      }
      return t.child;
    }
    function qx(e, t, a, i, u) {
      return td(), bS(u), t.flags |= Dr, Da(e, t, a, i), t.child;
    }
    function zM(e, t, a) {
      rx(t), e === null && wS(t);
      var i = t.type, u = t.pendingProps, d = e !== null ? e.memoizedProps : null, m = u.children, S = oS(i, u);
      return S ? m = null : d !== null && oS(i, d) && (t.flags |= za), Kx(e, t), Da(e, t, m, a), t.child;
    }
    function FM(e, t) {
      return e === null && wS(t), null;
    }
    function jM(e, t, a, i) {
      Ay(e, t);
      var u = t.pendingProps, d = a, m = d._payload, S = d._init, C = S(m);
      t.type = C;
      var D = t.tag = FA(C), M = Eo(C, u), F;
      switch (D) {
        case R:
          return H0(t, C), t.type = C = Sd(C), F = j0(null, t, C, M, i), F;
        case b:
          return t.type = C = gE(C), F = Qx(null, t, C, M, i), F;
        case oe:
          return t.type = C = SE(C), F = Yx(null, t, C, M, i), F;
        case ve: {
          if (t.type !== t.elementType) {
            var V = C.propTypes;
            V && vo(
              V,
              M,
              // Resolved for outer only
              "prop",
              Pt(C)
            );
          }
          return F = Wx(
            null,
            t,
            C,
            Eo(C.type, M),
            // The inner type can have defaults too
            i
          ), F;
        }
      }
      var $ = "";
      throw C !== null && typeof C == "object" && C.$$typeof === st && ($ = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + C + ". " + ("Lazy element type must resolve to a class or function." + $));
    }
    function BM(e, t, a, i, u) {
      Ay(e, t), t.tag = b;
      var d;
      return al(a) ? (d = !0, Hm(t)) : d = !1, ad(t, u), zx(t, a, i), O0(t, a, i, u), B0(null, t, a, !0, d, u);
    }
    function HM(e, t, a, i) {
      Ay(e, t);
      var u = t.pendingProps, d;
      {
        var m = qf(t, a, !1);
        d = Zf(t, m);
      }
      ad(t, i);
      var S, C;
      xa(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var D = Pt(a) || "Unknown";
          P0[D] || (v("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", D, D), P0[D] = !0);
        }
        t.mode & Jt && yo.recordLegacyContextWarning(t, null), Kn(!0), yh.current = t, S = cd(null, t, a, u, d, i), C = fd(), Kn(!1);
      }
      if (Ra(), t.flags |= fi, typeof S == "object" && S !== null && typeof S.render == "function" && S.$$typeof === void 0) {
        var M = Pt(a) || "Unknown";
        gh[M] || (v("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", M, M, M), gh[M] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof S == "object" && S !== null && typeof S.render == "function" && S.$$typeof === void 0
      ) {
        {
          var F = Pt(a) || "Unknown";
          gh[F] || (v("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", F, F, F), gh[F] = !0);
        }
        t.tag = b, t.memoizedState = null, t.updateQueue = null;
        var V = !1;
        return al(a) ? (V = !0, Hm(t)) : V = !1, t.memoizedState = S.state !== null && S.state !== void 0 ? S.state : null, jS(t), Vx(t, S), O0(t, a, u, i), B0(null, t, a, !0, V, i);
      } else {
        if (t.tag = R, t.mode & Jt) {
          gn(!0);
          try {
            S = cd(null, t, a, u, d, i), C = fd();
          } finally {
            gn(!1);
          }
        }
        return Hr() && C && ES(t), Da(null, t, S, i), H0(t, a), t.child;
      }
    }
    function H0(e, t) {
      {
        if (t && t.childContextTypes && v("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Pr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", d = e._debugSource;
          d && (u = d.fileName + ":" + d.lineNumber), z0[u] || (z0[u] = !0, v("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var m = Pt(t) || "Unknown";
          Sh[m] || (v("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", m), Sh[m] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var S = Pt(t) || "Unknown";
          V0[S] || (v("%s: Function components do not support getDerivedStateFromProps.", S), V0[S] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var C = Pt(t) || "Unknown";
          U0[C] || (v("%s: Function components do not support contextType.", C), U0[C] = !0);
        }
      }
    }
    var I0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: Vt
    };
    function Y0(e) {
      return {
        baseLanes: e,
        cachePool: AM(),
        transitions: null
      };
    }
    function IM(e, t) {
      var a = null;
      return {
        baseLanes: pt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function YM(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return WS(e, sh);
    }
    function WM(e, t) {
      return Gu(e.childLanes, t);
    }
    function Zx(e, t, a) {
      var i = t.pendingProps;
      eL(t) && (t.flags |= Ye);
      var u = go.current, d = !1, m = (t.flags & Ye) !== We;
      if (m || YM(u, e) ? (d = !0, t.flags &= ~Ye) : (e === null || e.memoizedState !== null) && (u = uM(u, ix)), u = od(u), eu(t, u), e === null) {
        wS(t);
        var S = t.memoizedState;
        if (S !== null) {
          var C = S.dehydrated;
          if (C !== null)
            return XM(t, C);
        }
        var D = i.children, M = i.fallback;
        if (d) {
          var F = $M(t, D, M, a), V = t.child;
          return V.memoizedState = Y0(a), t.memoizedState = I0, F;
        } else
          return W0(t, D);
      } else {
        var $ = e.memoizedState;
        if ($ !== null) {
          var X = $.dehydrated;
          if (X !== null)
            return qM(e, t, m, i, X, $, a);
        }
        if (d) {
          var J = i.fallback, be = i.children, Qe = KM(e, t, be, J, a), Ie = t.child, Nt = e.child.memoizedState;
          return Ie.memoizedState = Nt === null ? Y0(a) : IM(Nt, a), Ie.childLanes = WM(e, a), t.memoizedState = I0, Qe;
        } else {
          var _t = i.children, H = GM(e, t, _t, a);
          return t.memoizedState = null, H;
        }
      }
    }
    function W0(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, d = $0(u, i);
      return d.return = e, e.child = d, d;
    }
    function $M(e, t, a, i) {
      var u = e.mode, d = e.child, m = {
        mode: "hidden",
        children: t
      }, S, C;
      return (u & Rt) === $e && d !== null ? (S = d, S.childLanes = se, S.pendingProps = m, e.mode & Ft && (S.actualDuration = 0, S.actualStartTime = -1, S.selfBaseDuration = 0, S.treeBaseDuration = 0), C = su(a, u, i, null)) : (S = $0(m, u), C = su(a, u, i, null)), S.return = e, C.return = e, S.sibling = C, e.child = S, C;
    }
    function $0(e, t, a) {
      return JR(e, t, se, null);
    }
    function Jx(e, t) {
      return _c(e, t);
    }
    function GM(e, t, a, i) {
      var u = e.child, d = u.sibling, m = Jx(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Rt) === $e && (m.lanes = i), m.return = t, m.sibling = null, d !== null) {
        var S = t.deletions;
        S === null ? (t.deletions = [d], t.flags |= Va) : S.push(d);
      }
      return t.child = m, m;
    }
    function KM(e, t, a, i, u) {
      var d = t.mode, m = e.child, S = m.sibling, C = {
        mode: "hidden",
        children: a
      }, D;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (d & Rt) === $e && // Make sure we're on the second pass, i.e. the primary child fragment was
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
        D = Jx(m, C), D.subtreeFlags = m.subtreeFlags & zn;
      var F;
      return S !== null ? F = _c(S, i) : (F = su(i, d, u, null), F.flags |= yn), F.return = t, D.return = t, D.sibling = F, t.child = D, F;
    }
    function Oy(e, t, a, i) {
      i !== null && bS(i), nd(t, e.child, null, a);
      var u = t.pendingProps, d = u.children, m = W0(t, d);
      return m.flags |= yn, t.memoizedState = null, m;
    }
    function QM(e, t, a, i, u) {
      var d = t.mode, m = {
        mode: "visible",
        children: a
      }, S = $0(m, d), C = su(i, d, u, null);
      return C.flags |= yn, S.return = t, C.return = t, S.sibling = C, t.child = S, (t.mode & Rt) !== $e && nd(t, e.child, null, u), C;
    }
    function XM(e, t, a) {
      return (e.mode & Rt) === $e ? (v("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = et) : cS(t) ? e.lanes = _r : e.lanes = ia, null;
    }
    function qM(e, t, a, i, u, d, m) {
      if (a)
        if (t.flags & Dr) {
          t.flags &= ~Dr;
          var H = A0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Oy(e, t, m, H);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ye, null;
          var ee = i.children, I = i.fallback, he = QM(e, t, ee, I, m), Ae = t.child;
          return Ae.memoizedState = Y0(m), t.memoizedState = I0, he;
        }
      else {
        if (zk(), (t.mode & Rt) === $e)
          return Oy(
            e,
            t,
            m,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (cS(u)) {
          var S, C, D;
          {
            var M = tk(u);
            S = M.digest, C = M.message, D = M.stack;
          }
          var F;
          C ? F = new Error(C) : F = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var V = A0(F, S, D);
          return Oy(e, t, m, V);
        }
        var $ = oa(m, e.childLanes);
        if (Co || $) {
          var X = Hy();
          if (X !== null) {
            var J = Tp(X, m);
            if (J !== Vt && J !== d.retryLane) {
              d.retryLane = J;
              var be = nn;
              Ga(e, J), xr(X, e, J, be);
            }
          }
          pE();
          var Qe = A0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Oy(e, t, m, Qe);
        } else if (TT(u)) {
          t.flags |= Ye, t.child = e.child;
          var Ie = TA.bind(null, e);
          return nk(u, Ie), null;
        } else {
          Bk(t, u, d.treeContext);
          var Nt = i.children, _t = W0(t, Nt);
          return _t.flags |= ta, _t;
        }
      }
    }
    function eR(e, t, a) {
      e.lanes = pt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = pt(i.lanes, t)), US(e.return, t, a);
    }
    function ZM(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === ne) {
          var u = i.memoizedState;
          u !== null && eR(i, a, e);
        } else if (i.tag === lt)
          eR(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function JM(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && uy(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function eO(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !F0[e])
        if (F0[e] = !0, typeof e == "string")
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
    function tO(e, t) {
      e !== void 0 && !My[e] && (e !== "collapsed" && e !== "hidden" ? (My[e] = !0, v('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (My[e] = !0, v('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function tR(e, t) {
      {
        var a = St(e), i = !a && typeof dt(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return v("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function nO(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (St(e)) {
          for (var a = 0; a < e.length; a++)
            if (!tR(e[a], a))
              return;
        } else {
          var i = dt(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var d = u.next(), m = 0; !d.done; d = u.next()) {
                if (!tR(d.value, m))
                  return;
                m++;
              }
          } else
            v('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function G0(e, t, a, i, u) {
      var d = e.memoizedState;
      d === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = i, d.tail = a, d.tailMode = u);
    }
    function nR(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, d = i.tail, m = i.children;
      eO(u), tO(d, u), nO(m, u), Da(e, t, m, a);
      var S = go.current, C = WS(S, sh);
      if (C)
        S = $S(S, sh), t.flags |= Ye;
      else {
        var D = e !== null && (e.flags & Ye) !== We;
        D && ZM(t, t.child, a), S = od(S);
      }
      if (eu(t, S), (t.mode & Rt) === $e)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var M = JM(t.child), F;
            M === null ? (F = t.child, t.child = null) : (F = M.sibling, M.sibling = null), G0(
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
              var X = $.alternate;
              if (X !== null && uy(X) === null) {
                t.child = $;
                break;
              }
              var J = $.sibling;
              $.sibling = V, V = $, $ = J;
            }
            G0(
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
            G0(
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
    function rO(e, t, a) {
      HS(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = nd(t, null, i, a) : Da(e, t, i, a), t.child;
    }
    var rR = !1;
    function aO(e, t, a) {
      var i = t.type, u = i._context, d = t.pendingProps, m = t.memoizedProps, S = d.value;
      {
        "value" in d || rR || (rR = !0, v("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var C = t.type.propTypes;
        C && vo(C, d, "prop", "Context.Provider");
      }
      if (QT(t, u, S), m !== null) {
        var D = m.value;
        if (fe(D, S)) {
          if (m.children === d.children && !jm())
            return as(e, t, a);
        } else
          eM(t, u, a);
      }
      var M = d.children;
      return Da(e, t, M, a), t.child;
    }
    var aR = !1;
    function iO(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (aR || (aR = !0, v("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, d = u.children;
      typeof d != "function" && v("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), ad(t, a);
      var m = or(i);
      xa(t);
      var S;
      return yh.current = t, Kn(!0), S = d(m), Kn(!1), Ra(), t.flags |= fi, Da(e, t, S, a), t.child;
    }
    function Eh() {
      Co = !0;
    }
    function Ay(e, t) {
      (t.mode & Rt) === $e && e !== null && (e.alternate = null, t.alternate = null, t.flags |= yn);
    }
    function as(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), Lx(), Ah(t.lanes), oa(a, t.childLanes) ? (Zk(e, t), t.child) : null;
    }
    function oO(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var d = i.deletions;
        return d === null ? (i.deletions = [e], i.flags |= Va) : d.push(e), a.flags |= yn, a;
      }
    }
    function K0(e, t) {
      var a = e.lanes;
      return !!oa(a, t);
    }
    function lO(e, t, a) {
      switch (t.tag) {
        case _:
          Xx(t), t.stateNode, td();
          break;
        case P:
          rx(t);
          break;
        case b: {
          var i = t.type;
          al(i) && Hm(t);
          break;
        }
        case A:
          HS(t, t.stateNode.containerInfo);
          break;
        case ie: {
          var u = t.memoizedProps.value, d = t.type._context;
          QT(t, d, u);
          break;
        }
        case ye:
          {
            var m = oa(a, t.childLanes);
            m && (t.flags |= Ot);
            {
              var S = t.stateNode;
              S.effectDuration = 0, S.passiveEffectDuration = 0;
            }
          }
          break;
        case ne: {
          var C = t.memoizedState;
          if (C !== null) {
            if (C.dehydrated !== null)
              return eu(t, od(go.current)), t.flags |= Ye, null;
            var D = t.child, M = D.childLanes;
            if (oa(a, M))
              return Zx(e, t, a);
            eu(t, od(go.current));
            var F = as(e, t, a);
            return F !== null ? F.sibling : null;
          } else
            eu(t, od(go.current));
          break;
        }
        case lt: {
          var V = (e.flags & Ye) !== We, $ = oa(a, t.childLanes);
          if (V) {
            if ($)
              return nR(e, t, a);
            t.flags |= Ye;
          }
          var X = t.memoizedState;
          if (X !== null && (X.rendering = null, X.tail = null, X.lastEffect = null), eu(t, go.current), $)
            break;
          return null;
        }
        case Ue:
        case Et:
          return t.lanes = se, Gx(e, t, a);
      }
      return as(e, t, a);
    }
    function iR(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return oO(e, t, RE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || jm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Co = !0;
        else {
          var d = K0(e, a);
          if (!d && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Ye) === We)
            return Co = !1, lO(e, t, a);
          (e.flags & Jc) !== We ? Co = !0 : Co = !1;
        }
      } else if (Co = !1, Hr() && Ak(t)) {
        var m = t.index, S = Lk();
        LT(t, S, m);
      }
      switch (t.lanes = se, t.tag) {
        case k:
          return HM(e, t, t.type, a);
        case De: {
          var C = t.elementType;
          return jM(e, t, C, a);
        }
        case R: {
          var D = t.type, M = t.pendingProps, F = t.elementType === D ? M : Eo(D, M);
          return j0(e, t, D, F, a);
        }
        case b: {
          var V = t.type, $ = t.pendingProps, X = t.elementType === V ? $ : Eo(V, $);
          return Qx(e, t, V, X, a);
        }
        case _:
          return VM(e, t, a);
        case P:
          return zM(e, t, a);
        case Y:
          return FM(e, t);
        case ne:
          return Zx(e, t, a);
        case A:
          return rO(e, t, a);
        case oe: {
          var J = t.type, be = t.pendingProps, Qe = t.elementType === J ? be : Eo(J, be);
          return Yx(e, t, J, Qe, a);
        }
        case K:
          return NM(e, t, a);
        case q:
          return PM(e, t, a);
        case ye:
          return UM(e, t, a);
        case ie:
          return aO(e, t, a);
        case te:
          return iO(e, t, a);
        case ve: {
          var Ie = t.type, Nt = t.pendingProps, _t = Eo(Ie, Nt);
          if (t.type !== t.elementType) {
            var H = Ie.propTypes;
            H && vo(
              H,
              _t,
              // Resolved for outer only
              "prop",
              Pt(Ie)
            );
          }
          return _t = Eo(Ie.type, _t), Wx(e, t, Ie, _t, a);
        }
        case Ee:
          return $x(e, t, t.type, t.pendingProps, a);
        case Ne: {
          var ee = t.type, I = t.pendingProps, he = t.elementType === ee ? I : Eo(ee, I);
          return BM(e, t, ee, he, a);
        }
        case lt:
          return nR(e, t, a);
        case tt:
          break;
        case Ue:
          return Gx(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function dd(e) {
      e.flags |= Ot;
    }
    function oR(e) {
      e.flags |= Tn, e.flags |= Ls;
    }
    var lR, Q0, sR, uR;
    lR = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === P || u.tag === Y)
          k_(e, u.stateNode);
        else if (u.tag !== A) {
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
    }, Q0 = function(e, t) {
    }, sR = function(e, t, a, i, u) {
      var d = e.memoizedProps;
      if (d !== i) {
        var m = t.stateNode, S = IS(), C = O_(m, a, d, i, u, S);
        t.updateQueue = C, C && dd(t);
      }
    }, uR = function(e, t, a, i) {
      a !== i && dd(t);
    };
    function Ch(e, t) {
      if (!Hr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
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
      var t = e.alternate !== null && e.alternate.child === e.child, a = se, i = We;
      if (t) {
        if ((e.mode & Ft) !== $e) {
          for (var C = e.selfBaseDuration, D = e.child; D !== null; )
            a = pt(a, pt(D.lanes, D.childLanes)), i |= D.subtreeFlags & zn, i |= D.flags & zn, C += D.treeBaseDuration, D = D.sibling;
          e.treeBaseDuration = C;
        } else
          for (var M = e.child; M !== null; )
            a = pt(a, pt(M.lanes, M.childLanes)), i |= M.subtreeFlags & zn, i |= M.flags & zn, M.return = e, M = M.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Ft) !== $e) {
          for (var u = e.actualDuration, d = e.selfBaseDuration, m = e.child; m !== null; )
            a = pt(a, pt(m.lanes, m.childLanes)), i |= m.subtreeFlags, i |= m.flags, u += m.actualDuration, d += m.treeBaseDuration, m = m.sibling;
          e.actualDuration = u, e.treeBaseDuration = d;
        } else
          for (var S = e.child; S !== null; )
            a = pt(a, pt(S.lanes, S.childLanes)), i |= S.subtreeFlags, i |= S.flags, S.return = e, S = S.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function sO(e, t, a) {
      if ($k() && (t.mode & Rt) !== $e && (t.flags & Ye) === We)
        return jT(t), td(), t.flags |= Dr | Ou | nr, !1;
      var i = Gm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Yk(t), Yr(t), (t.mode & Ft) !== $e) {
            var u = a !== null;
            if (u) {
              var d = t.child;
              d !== null && (t.treeBaseDuration -= d.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (td(), (t.flags & Ye) === We && (t.memoizedState = null), t.flags |= Ot, Yr(t), (t.mode & Ft) !== $e) {
            var m = a !== null;
            if (m) {
              var S = t.child;
              S !== null && (t.treeBaseDuration -= S.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return BT(), !0;
    }
    function cR(e, t, a) {
      var i = t.pendingProps;
      switch (CS(t), t.tag) {
        case k:
        case De:
        case Ee:
        case R:
        case oe:
        case K:
        case q:
        case ye:
        case te:
        case ve:
          return Yr(t), null;
        case b: {
          var u = t.type;
          return al(u) && Bm(t), Yr(t), null;
        }
        case _: {
          var d = t.stateNode;
          if (id(t), yS(t), KS(), d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null), e === null || e.child === null) {
            var m = Gm(t);
            if (m)
              dd(t);
            else if (e !== null) {
              var S = e.memoizedState;
              // Check if this is a client root
              (!S.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Dr) !== We) && (t.flags |= Qn, BT());
            }
          }
          return Q0(e, t), Yr(t), null;
        }
        case P: {
          YS(t);
          var C = nx(), D = t.type;
          if (e !== null && t.stateNode != null)
            sR(e, t, D, i, C), e.ref !== t.ref && oR(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Yr(t), null;
            }
            var M = IS(), F = Gm(t);
            if (F)
              Hk(t, C, M) && dd(t);
            else {
              var V = __(D, i, C, M, t);
              lR(V, t, !1, !1), t.stateNode = V, M_(V, D, i, C) && dd(t);
            }
            t.ref !== null && oR(t);
          }
          return Yr(t), null;
        }
        case Y: {
          var $ = i;
          if (e && t.stateNode != null) {
            var X = e.memoizedProps;
            uR(e, t, X, $);
          } else {
            if (typeof $ != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var J = nx(), be = IS(), Qe = Gm(t);
            Qe ? Ik(t) && dd(t) : t.stateNode = A_($, J, be, t);
          }
          return Yr(t), null;
        }
        case ne: {
          ld(t);
          var Ie = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Nt = sO(e, t, Ie);
            if (!Nt)
              return t.flags & nr ? t : null;
          }
          if ((t.flags & Ye) !== We)
            return t.lanes = a, (t.mode & Ft) !== $e && S0(t), t;
          var _t = Ie !== null, H = e !== null && e.memoizedState !== null;
          if (_t !== H && _t) {
            var ee = t.child;
            if (ee.flags |= Vn, (t.mode & Rt) !== $e) {
              var I = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              I || WS(go.current, ix) ? uA() : pE();
            }
          }
          var he = t.updateQueue;
          if (he !== null && (t.flags |= Ot), Yr(t), (t.mode & Ft) !== $e && _t) {
            var Ae = t.child;
            Ae !== null && (t.treeBaseDuration -= Ae.treeBaseDuration);
          }
          return null;
        }
        case A:
          return id(t), Q0(e, t), e === null && wk(t.stateNode.containerInfo), Yr(t), null;
        case ie:
          var _e = t.type._context;
          return PS(_e, t), Yr(t), null;
        case Ne: {
          var rt = t.type;
          return al(rt) && Bm(t), Yr(t), null;
        }
        case lt: {
          ld(t);
          var ct = t.memoizedState;
          if (ct === null)
            return Yr(t), null;
          var tn = (t.flags & Ye) !== We, Ht = ct.rendering;
          if (Ht === null)
            if (tn)
              Ch(ct, !1);
            else {
              var Zn = fA() && (e === null || (e.flags & Ye) === We);
              if (!Zn)
                for (var It = t.child; It !== null; ) {
                  var Yn = uy(It);
                  if (Yn !== null) {
                    tn = !0, t.flags |= Ye, Ch(ct, !1);
                    var pa = Yn.updateQueue;
                    return pa !== null && (t.updateQueue = pa, t.flags |= Ot), t.subtreeFlags = We, Jk(t, a), eu(t, $S(go.current, sh)), t.child;
                  }
                  It = It.sibling;
                }
              ct.tail !== null && Xn() > OR() && (t.flags |= Ye, tn = !0, Ch(ct, !1), t.lanes = pp);
            }
          else {
            if (!tn) {
              var Qr = uy(Ht);
              if (Qr !== null) {
                t.flags |= Ye, tn = !0;
                var gi = Qr.updateQueue;
                if (gi !== null && (t.updateQueue = gi, t.flags |= Ot), Ch(ct, !0), ct.tail === null && ct.tailMode === "hidden" && !Ht.alternate && !Hr())
                  return Yr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Xn() * 2 - ct.renderingStartTime > OR() && a !== ia && (t.flags |= Ye, tn = !0, Ch(ct, !1), t.lanes = pp);
            }
            if (ct.isBackwards)
              Ht.sibling = t.child, t.child = Ht;
            else {
              var Ma = ct.last;
              Ma !== null ? Ma.sibling = Ht : t.child = Ht, ct.last = Ht;
            }
          }
          if (ct.tail !== null) {
            var Oa = ct.tail;
            ct.rendering = Oa, ct.tail = Oa.sibling, ct.renderingStartTime = Xn(), Oa.sibling = null;
            var ha = go.current;
            return tn ? ha = $S(ha, sh) : ha = od(ha), eu(t, ha), Oa;
          }
          return Yr(t), null;
        }
        case tt:
          break;
        case Ue:
        case Et: {
          dE(t);
          var us = t.memoizedState, Ed = us !== null;
          if (e !== null) {
            var Vh = e.memoizedState, dl = Vh !== null;
            dl !== Ed && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ge && (t.flags |= Vn);
          }
          return !Ed || (t.mode & Rt) === $e ? Yr(t) : oa(fl, ia) && (Yr(t), t.subtreeFlags & (yn | Ot) && (t.flags |= Vn)), null;
        }
        case Dt:
          return null;
        case kt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function uO(e, t, a) {
      switch (CS(t), t.tag) {
        case b: {
          var i = t.type;
          al(i) && Bm(t);
          var u = t.flags;
          return u & nr ? (t.flags = u & ~nr | Ye, (t.mode & Ft) !== $e && S0(t), t) : null;
        }
        case _: {
          t.stateNode, id(t), yS(t), KS();
          var d = t.flags;
          return (d & nr) !== We && (d & Ye) === We ? (t.flags = d & ~nr | Ye, t) : null;
        }
        case P:
          return YS(t), null;
        case ne: {
          ld(t);
          var m = t.memoizedState;
          if (m !== null && m.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            td();
          }
          var S = t.flags;
          return S & nr ? (t.flags = S & ~nr | Ye, (t.mode & Ft) !== $e && S0(t), t) : null;
        }
        case lt:
          return ld(t), null;
        case A:
          return id(t), null;
        case ie:
          var C = t.type._context;
          return PS(C, t), null;
        case Ue:
        case Et:
          return dE(t), null;
        case Dt:
          return null;
        default:
          return null;
      }
    }
    function fR(e, t, a) {
      switch (CS(t), t.tag) {
        case b: {
          var i = t.type.childContextTypes;
          i != null && Bm(t);
          break;
        }
        case _: {
          t.stateNode, id(t), yS(t), KS();
          break;
        }
        case P: {
          YS(t);
          break;
        }
        case A:
          id(t);
          break;
        case ne:
          ld(t);
          break;
        case lt:
          ld(t);
          break;
        case ie:
          var u = t.type._context;
          PS(u, t);
          break;
        case Ue:
        case Et:
          dE(t);
          break;
      }
    }
    var dR = null;
    dR = /* @__PURE__ */ new Set();
    var Ly = !1, Wr = !1, cO = typeof WeakSet == "function" ? WeakSet : Set, je = null, pd = null, hd = null;
    function fO(e) {
      jo(null, function() {
        throw e;
      }), Mu();
    }
    var dO = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ft)
        try {
          ul(), t.componentWillUnmount();
        } finally {
          sl(e);
        }
      else
        t.componentWillUnmount();
    };
    function pR(e, t) {
      try {
        ru(yr, e);
      } catch (a) {
        dn(e, t, a);
      }
    }
    function X0(e, t, a) {
      try {
        dO(e, a);
      } catch (i) {
        dn(e, t, i);
      }
    }
    function pO(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        dn(e, t, i);
      }
    }
    function hR(e, t) {
      try {
        mR(e);
      } catch (a) {
        dn(e, t, a);
      }
    }
    function vd(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Je && Ct && e.mode & Ft)
              try {
                ul(), i = a(null);
              } finally {
                sl(e);
              }
            else
              i = a(null);
          } catch (u) {
            dn(e, t, u);
          }
          typeof i == "function" && v("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ot(e));
        } else
          a.current = null;
    }
    function Ny(e, t, a) {
      try {
        a();
      } catch (i) {
        dn(e, t, i);
      }
    }
    var vR = !1;
    function hO(e, t) {
      b_(e.containerInfo), je = t, vO();
      var a = vR;
      return vR = !1, a;
    }
    function vO() {
      for (; je !== null; ) {
        var e = je, t = e.child;
        (e.subtreeFlags & Ho) !== We && t !== null ? (t.return = e, je = t) : mO();
      }
    }
    function mO() {
      for (; je !== null; ) {
        var e = je;
        Xt(e);
        try {
          yO(e);
        } catch (a) {
          dn(e, e.return, a);
        }
        fn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, je = t;
          return;
        }
        je = e.return;
      }
    }
    function yO(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Qn) !== We) {
        switch (Xt(e), e.tag) {
          case R:
          case oe:
          case Ee:
            break;
          case b: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, d = e.stateNode;
              e.type === e.elementType && !xc && (d.props !== e.memoizedProps && v("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ot(e) || "instance"), d.state !== e.memoizedState && v("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ot(e) || "instance"));
              var m = d.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Eo(e.type, i), u);
              {
                var S = dR;
                m === void 0 && !S.has(e.type) && (S.add(e.type), v("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", ot(e)));
              }
              d.__reactInternalSnapshotBeforeUpdate = m;
            }
            break;
          }
          case _: {
            {
              var C = e.stateNode;
              q_(C.containerInfo);
            }
            break;
          }
          case P:
          case Y:
          case A:
          case Ne:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        fn();
      }
    }
    function To(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var d = u.next, m = d;
        do {
          if ((m.tag & e) === e) {
            var S = m.destroy;
            m.destroy = void 0, S !== void 0 && ((e & Ir) !== Ka ? so(t) : (e & yr) !== Ka && Lu(t), (e & il) !== Ka && Nh(!0), Ny(t, a, S), (e & il) !== Ka && Nh(!1), (e & Ir) !== Ka ? $o() : (e & yr) !== Ka && fp());
          }
          m = m.next;
        } while (m !== d);
      }
    }
    function ru(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, d = u;
        do {
          if ((d.tag & e) === e) {
            (e & Ir) !== Ka ? cp(t) : (e & yr) !== Ka && of(t);
            var m = d.create;
            (e & il) !== Ka && Nh(!0), d.destroy = m(), (e & il) !== Ka && Nh(!1), (e & Ir) !== Ka ? Fv() : (e & yr) !== Ka && jv();
            {
              var S = d.destroy;
              if (S !== void 0 && typeof S != "function") {
                var C = void 0;
                (d.tag & yr) !== We ? C = "useLayoutEffect" : (d.tag & il) !== We ? C = "useInsertionEffect" : C = "useEffect";
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
    function gO(e, t) {
      if ((t.flags & Ot) !== We)
        switch (t.tag) {
          case ye: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, d = i.onPostCommit, m = Ox(), S = t.alternate === null ? "mount" : "update";
            Mx() && (S = "nested-update"), typeof d == "function" && d(u, S, a, m);
            var C = t.return;
            e: for (; C !== null; ) {
              switch (C.tag) {
                case _:
                  var D = C.stateNode;
                  D.passiveEffectDuration += a;
                  break e;
                case ye:
                  var M = C.stateNode;
                  M.passiveEffectDuration += a;
                  break e;
              }
              C = C.return;
            }
            break;
          }
        }
    }
    function SO(e, t, a, i) {
      if ((a.flags & Yo) !== We)
        switch (a.tag) {
          case R:
          case oe:
          case Ee: {
            if (!Wr)
              if (a.mode & Ft)
                try {
                  ul(), ru(yr | mr, a);
                } finally {
                  sl(a);
                }
              else
                ru(yr | mr, a);
            break;
          }
          case b: {
            var u = a.stateNode;
            if (a.flags & Ot && !Wr)
              if (t === null)
                if (a.type === a.elementType && !xc && (u.props !== a.memoizedProps && v("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ot(a) || "instance"), u.state !== a.memoizedState && v("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ot(a) || "instance")), a.mode & Ft)
                  try {
                    ul(), u.componentDidMount();
                  } finally {
                    sl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var d = a.elementType === a.type ? t.memoizedProps : Eo(a.type, t.memoizedProps), m = t.memoizedState;
                if (a.type === a.elementType && !xc && (u.props !== a.memoizedProps && v("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ot(a) || "instance"), u.state !== a.memoizedState && v("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ot(a) || "instance")), a.mode & Ft)
                  try {
                    ul(), u.componentDidUpdate(d, m, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    sl(a);
                  }
                else
                  u.componentDidUpdate(d, m, u.__reactInternalSnapshotBeforeUpdate);
              }
            var S = a.updateQueue;
            S !== null && (a.type === a.elementType && !xc && (u.props !== a.memoizedProps && v("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ot(a) || "instance"), u.state !== a.memoizedState && v("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ot(a) || "instance")), tx(a, S, u));
            break;
          }
          case _: {
            var C = a.updateQueue;
            if (C !== null) {
              var D = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case P:
                    D = a.child.stateNode;
                    break;
                  case b:
                    D = a.child.stateNode;
                    break;
                }
              tx(a, C, D);
            }
            break;
          }
          case P: {
            var M = a.stateNode;
            if (t === null && a.flags & Ot) {
              var F = a.type, V = a.memoizedProps;
              V_(M, F, V);
            }
            break;
          }
          case Y:
            break;
          case A:
            break;
          case ye: {
            {
              var $ = a.memoizedProps, X = $.onCommit, J = $.onRender, be = a.stateNode.effectDuration, Qe = Ox(), Ie = t === null ? "mount" : "update";
              Mx() && (Ie = "nested-update"), typeof J == "function" && J(a.memoizedProps.id, Ie, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Qe);
              {
                typeof X == "function" && X(a.memoizedProps.id, Ie, be, Qe), mA(a);
                var Nt = a.return;
                e: for (; Nt !== null; ) {
                  switch (Nt.tag) {
                    case _:
                      var _t = Nt.stateNode;
                      _t.effectDuration += be;
                      break e;
                    case ye:
                      var H = Nt.stateNode;
                      H.effectDuration += be;
                      break e;
                  }
                  Nt = Nt.return;
                }
              }
            }
            break;
          }
          case ne: {
            DO(e, a);
            break;
          }
          case lt:
          case Ne:
          case tt:
          case Ue:
          case Et:
          case kt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Wr || a.flags & Tn && mR(a);
    }
    function EO(e) {
      switch (e.tag) {
        case R:
        case oe:
        case Ee: {
          if (e.mode & Ft)
            try {
              ul(), pR(e, e.return);
            } finally {
              sl(e);
            }
          else
            pR(e, e.return);
          break;
        }
        case b: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && pO(e, e.return, t), hR(e, e.return);
          break;
        }
        case P: {
          hR(e, e.return);
          break;
        }
      }
    }
    function CO(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === P) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? G_(u) : Q_(i.stateNode, i.memoizedProps);
            } catch (m) {
              dn(e, e.return, m);
            }
          }
        } else if (i.tag === Y) {
          if (a === null)
            try {
              var d = i.stateNode;
              t ? K_(d) : X_(d, i.memoizedProps);
            } catch (m) {
              dn(e, e.return, m);
            }
        } else if (!((i.tag === Ue || i.tag === Et) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function mR(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case P:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Ft)
            try {
              ul(), u = t(i);
            } finally {
              sl(e);
            }
          else
            u = t(i);
          typeof u == "function" && v("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ot(e));
        } else
          t.hasOwnProperty("current") || v("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", ot(e)), t.current = i;
      }
    }
    function TO(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function yR(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, yR(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === P) {
          var a = e.stateNode;
          a !== null && _k(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function xO(e) {
      for (var t = e.return; t !== null; ) {
        if (gR(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function gR(e) {
      return e.tag === P || e.tag === _ || e.tag === A;
    }
    function SR(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || gR(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== P && t.tag !== Y && t.tag !== Oe; ) {
          if (t.flags & yn || t.child === null || t.tag === A)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & yn))
          return t.stateNode;
      }
    }
    function RO(e) {
      var t = xO(e);
      switch (t.tag) {
        case P: {
          var a = t.stateNode;
          t.flags & za && (CT(a), t.flags &= ~za);
          var i = SR(e);
          Z0(e, i, a);
          break;
        }
        case _:
        case A: {
          var u = t.stateNode.containerInfo, d = SR(e);
          q0(e, d, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function q0(e, t, a) {
      var i = e.tag, u = i === P || i === Y;
      if (u) {
        var d = e.stateNode;
        t ? I_(a, d, t) : B_(a, d);
      } else if (i !== A) {
        var m = e.child;
        if (m !== null) {
          q0(m, t, a);
          for (var S = m.sibling; S !== null; )
            q0(S, t, a), S = S.sibling;
        }
      }
    }
    function Z0(e, t, a) {
      var i = e.tag, u = i === P || i === Y;
      if (u) {
        var d = e.stateNode;
        t ? H_(a, d, t) : j_(a, d);
      } else if (i !== A) {
        var m = e.child;
        if (m !== null) {
          Z0(m, t, a);
          for (var S = m.sibling; S !== null; )
            Z0(S, t, a), S = S.sibling;
        }
      }
    }
    var $r = null, xo = !1;
    function wO(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case P: {
              $r = i.stateNode, xo = !1;
              break e;
            }
            case _: {
              $r = i.stateNode.containerInfo, xo = !0;
              break e;
            }
            case A: {
              $r = i.stateNode.containerInfo, xo = !0;
              break e;
            }
          }
          i = i.return;
        }
        if ($r === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        ER(e, t, a), $r = null, xo = !1;
      }
      TO(a);
    }
    function au(e, t, a) {
      for (var i = a.child; i !== null; )
        ER(e, t, i), i = i.sibling;
    }
    function ER(e, t, a) {
      switch (lp(a), a.tag) {
        case P:
          Wr || vd(a, t);
        case Y: {
          {
            var i = $r, u = xo;
            $r = null, au(e, t, a), $r = i, xo = u, $r !== null && (xo ? W_($r, a.stateNode) : Y_($r, a.stateNode));
          }
          return;
        }
        case Oe: {
          $r !== null && (xo ? $_($r, a.stateNode) : uS($r, a.stateNode));
          return;
        }
        case A: {
          {
            var d = $r, m = xo;
            $r = a.stateNode.containerInfo, xo = !0, au(e, t, a), $r = d, xo = m;
          }
          return;
        }
        case R:
        case oe:
        case ve:
        case Ee: {
          if (!Wr) {
            var S = a.updateQueue;
            if (S !== null) {
              var C = S.lastEffect;
              if (C !== null) {
                var D = C.next, M = D;
                do {
                  var F = M, V = F.destroy, $ = F.tag;
                  V !== void 0 && (($ & il) !== Ka ? Ny(a, t, V) : ($ & yr) !== Ka && (Lu(a), a.mode & Ft ? (ul(), Ny(a, t, V), sl(a)) : Ny(a, t, V), fp())), M = M.next;
                } while (M !== D);
              }
            }
          }
          au(e, t, a);
          return;
        }
        case b: {
          if (!Wr) {
            vd(a, t);
            var X = a.stateNode;
            typeof X.componentWillUnmount == "function" && X0(a, t, X);
          }
          au(e, t, a);
          return;
        }
        case tt: {
          au(e, t, a);
          return;
        }
        case Ue: {
          if (
            // TODO: Remove this dead flag
            a.mode & Rt
          ) {
            var J = Wr;
            Wr = J || a.memoizedState !== null, au(e, t, a), Wr = J;
          } else
            au(e, t, a);
          break;
        }
        default: {
          au(e, t, a);
          return;
        }
      }
    }
    function bO(e) {
      e.memoizedState;
    }
    function DO(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var d = u.dehydrated;
            d !== null && fk(d);
          }
        }
      }
    }
    function CR(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new cO()), t.forEach(function(i) {
          var u = xA.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), aa)
              if (pd !== null && hd !== null)
                Lh(hd, pd);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function _O(e, t, a) {
      pd = a, hd = e, Xt(t), TR(t, e), Xt(t), pd = null, hd = null;
    }
    function Ro(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var d = i[u];
          try {
            wO(e, t, d);
          } catch (C) {
            dn(d, t, C);
          }
        }
      var m = Lo();
      if (t.subtreeFlags & Io)
        for (var S = t.child; S !== null; )
          Xt(S), TR(S, e), S = S.sibling;
      Xt(m);
    }
    function TR(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case R:
        case oe:
        case ve:
        case Ee: {
          if (Ro(t, e), cl(e), u & Ot) {
            try {
              To(il | mr, e, e.return), ru(il | mr, e);
            } catch (rt) {
              dn(e, e.return, rt);
            }
            if (e.mode & Ft) {
              try {
                ul(), To(yr | mr, e, e.return);
              } catch (rt) {
                dn(e, e.return, rt);
              }
              sl(e);
            } else
              try {
                To(yr | mr, e, e.return);
              } catch (rt) {
                dn(e, e.return, rt);
              }
          }
          return;
        }
        case b: {
          Ro(t, e), cl(e), u & Tn && i !== null && vd(i, i.return);
          return;
        }
        case P: {
          Ro(t, e), cl(e), u & Tn && i !== null && vd(i, i.return);
          {
            if (e.flags & za) {
              var d = e.stateNode;
              try {
                CT(d);
              } catch (rt) {
                dn(e, e.return, rt);
              }
            }
            if (u & Ot) {
              var m = e.stateNode;
              if (m != null) {
                var S = e.memoizedProps, C = i !== null ? i.memoizedProps : S, D = e.type, M = e.updateQueue;
                if (e.updateQueue = null, M !== null)
                  try {
                    z_(m, M, D, C, S, e);
                  } catch (rt) {
                    dn(e, e.return, rt);
                  }
              }
            }
          }
          return;
        }
        case Y: {
          if (Ro(t, e), cl(e), u & Ot) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var F = e.stateNode, V = e.memoizedProps, $ = i !== null ? i.memoizedProps : V;
            try {
              F_(F, $, V);
            } catch (rt) {
              dn(e, e.return, rt);
            }
          }
          return;
        }
        case _: {
          if (Ro(t, e), cl(e), u & Ot && i !== null) {
            var X = i.memoizedState;
            if (X.isDehydrated)
              try {
                ck(t.containerInfo);
              } catch (rt) {
                dn(e, e.return, rt);
              }
          }
          return;
        }
        case A: {
          Ro(t, e), cl(e);
          return;
        }
        case ne: {
          Ro(t, e), cl(e);
          var J = e.child;
          if (J.flags & Vn) {
            var be = J.stateNode, Qe = J.memoizedState, Ie = Qe !== null;
            if (be.isHidden = Ie, Ie) {
              var Nt = J.alternate !== null && J.alternate.memoizedState !== null;
              Nt || sA();
            }
          }
          if (u & Ot) {
            try {
              bO(e);
            } catch (rt) {
              dn(e, e.return, rt);
            }
            CR(e);
          }
          return;
        }
        case Ue: {
          var _t = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Rt
          ) {
            var H = Wr;
            Wr = H || _t, Ro(t, e), Wr = H;
          } else
            Ro(t, e);
          if (cl(e), u & Vn) {
            var ee = e.stateNode, I = e.memoizedState, he = I !== null, Ae = e;
            if (ee.isHidden = he, he && !_t && (Ae.mode & Rt) !== $e) {
              je = Ae;
              for (var _e = Ae.child; _e !== null; )
                je = _e, MO(_e), _e = _e.sibling;
            }
            CO(Ae, he);
          }
          return;
        }
        case lt: {
          Ro(t, e), cl(e), u & Ot && CR(e);
          return;
        }
        case tt:
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
          RO(e);
        } catch (a) {
          dn(e, e.return, a);
        }
        e.flags &= ~yn;
      }
      t & ta && (e.flags &= ~ta);
    }
    function kO(e, t, a) {
      pd = a, hd = t, je = e, xR(e, t, a), pd = null, hd = null;
    }
    function xR(e, t, a) {
      for (var i = (e.mode & Rt) !== $e; je !== null; ) {
        var u = je, d = u.child;
        if (u.tag === Ue && i) {
          var m = u.memoizedState !== null, S = m || Ly;
          if (S) {
            J0(e, t, a);
            continue;
          } else {
            var C = u.alternate, D = C !== null && C.memoizedState !== null, M = D || Wr, F = Ly, V = Wr;
            Ly = S, Wr = M, Wr && !V && (je = u, OO(u));
            for (var $ = d; $ !== null; )
              je = $, xR(
                $,
                // New root; bubble back up to here and stop.
                t,
                a
              ), $ = $.sibling;
            je = u, Ly = F, Wr = V, J0(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Yo) !== We && d !== null ? (d.return = u, je = d) : J0(e, t, a);
      }
    }
    function J0(e, t, a) {
      for (; je !== null; ) {
        var i = je;
        if ((i.flags & Yo) !== We) {
          var u = i.alternate;
          Xt(i);
          try {
            SO(t, u, i, a);
          } catch (m) {
            dn(i, i.return, m);
          }
          fn();
        }
        if (i === e) {
          je = null;
          return;
        }
        var d = i.sibling;
        if (d !== null) {
          d.return = i.return, je = d;
          return;
        }
        je = i.return;
      }
    }
    function MO(e) {
      for (; je !== null; ) {
        var t = je, a = t.child;
        switch (t.tag) {
          case R:
          case oe:
          case ve:
          case Ee: {
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
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && X0(t, t.return, i);
            break;
          }
          case P: {
            vd(t, t.return);
            break;
          }
          case Ue: {
            var u = t.memoizedState !== null;
            if (u) {
              RR(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, je = a) : RR(e);
      }
    }
    function RR(e) {
      for (; je !== null; ) {
        var t = je;
        if (t === e) {
          je = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, je = a;
          return;
        }
        je = t.return;
      }
    }
    function OO(e) {
      for (; je !== null; ) {
        var t = je, a = t.child;
        if (t.tag === Ue) {
          var i = t.memoizedState !== null;
          if (i) {
            wR(e);
            continue;
          }
        }
        a !== null ? (a.return = t, je = a) : wR(e);
      }
    }
    function wR(e) {
      for (; je !== null; ) {
        var t = je;
        Xt(t);
        try {
          EO(t);
        } catch (i) {
          dn(t, t.return, i);
        }
        if (fn(), t === e) {
          je = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, je = a;
          return;
        }
        je = t.return;
      }
    }
    function AO(e, t, a, i) {
      je = t, LO(t, e, a, i);
    }
    function LO(e, t, a, i) {
      for (; je !== null; ) {
        var u = je, d = u.child;
        (u.subtreeFlags & oo) !== We && d !== null ? (d.return = u, je = d) : NO(e, t, a, i);
      }
    }
    function NO(e, t, a, i) {
      for (; je !== null; ) {
        var u = je;
        if ((u.flags & ea) !== We) {
          Xt(u);
          try {
            PO(t, u, a, i);
          } catch (m) {
            dn(u, u.return, m);
          }
          fn();
        }
        if (u === e) {
          je = null;
          return;
        }
        var d = u.sibling;
        if (d !== null) {
          d.return = u.return, je = d;
          return;
        }
        je = u.return;
      }
    }
    function PO(e, t, a, i) {
      switch (t.tag) {
        case R:
        case oe:
        case Ee: {
          if (t.mode & Ft) {
            g0();
            try {
              ru(Ir | mr, t);
            } finally {
              y0(t);
            }
          } else
            ru(Ir | mr, t);
          break;
        }
      }
    }
    function UO(e) {
      je = e, VO();
    }
    function VO() {
      for (; je !== null; ) {
        var e = je, t = e.child;
        if ((je.flags & Va) !== We) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              je = u, jO(u, e);
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
            je = e;
          }
        }
        (e.subtreeFlags & oo) !== We && t !== null ? (t.return = e, je = t) : zO();
      }
    }
    function zO() {
      for (; je !== null; ) {
        var e = je;
        (e.flags & ea) !== We && (Xt(e), FO(e), fn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, je = t;
          return;
        }
        je = e.return;
      }
    }
    function FO(e) {
      switch (e.tag) {
        case R:
        case oe:
        case Ee: {
          e.mode & Ft ? (g0(), To(Ir | mr, e, e.return), y0(e)) : To(Ir | mr, e, e.return);
          break;
        }
      }
    }
    function jO(e, t) {
      for (; je !== null; ) {
        var a = je;
        Xt(a), HO(a, t), fn();
        var i = a.child;
        i !== null ? (i.return = a, je = i) : BO(e);
      }
    }
    function BO(e) {
      for (; je !== null; ) {
        var t = je, a = t.sibling, i = t.return;
        if (yR(t), t === e) {
          je = null;
          return;
        }
        if (a !== null) {
          a.return = i, je = a;
          return;
        }
        je = i;
      }
    }
    function HO(e, t) {
      switch (e.tag) {
        case R:
        case oe:
        case Ee: {
          e.mode & Ft ? (g0(), To(Ir, e, t), y0(e)) : To(Ir, e, t);
          break;
        }
      }
    }
    function IO(e) {
      switch (e.tag) {
        case R:
        case oe:
        case Ee: {
          try {
            ru(yr | mr, e);
          } catch (a) {
            dn(e, e.return, a);
          }
          break;
        }
        case b: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            dn(e, e.return, a);
          }
          break;
        }
      }
    }
    function YO(e) {
      switch (e.tag) {
        case R:
        case oe:
        case Ee: {
          try {
            ru(Ir | mr, e);
          } catch (t) {
            dn(e, e.return, t);
          }
          break;
        }
      }
    }
    function WO(e) {
      switch (e.tag) {
        case R:
        case oe:
        case Ee: {
          try {
            To(yr | mr, e, e.return);
          } catch (a) {
            dn(e, e.return, a);
          }
          break;
        }
        case b: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && X0(e, e.return, t);
          break;
        }
      }
    }
    function $O(e) {
      switch (e.tag) {
        case R:
        case oe:
        case Ee:
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
    var GO = [];
    function KO() {
      GO.forEach(function(e) {
        return e();
      });
    }
    var QO = c.ReactCurrentActQueue;
    function XO(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function bR() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && QO.current !== null && v("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var qO = Math.ceil, eE = c.ReactCurrentDispatcher, tE = c.ReactCurrentOwner, Gr = c.ReactCurrentBatchConfig, wo = c.ReactCurrentActQueue, Er = (
      /*             */
      0
    ), DR = (
      /*               */
      1
    ), Kr = (
      /*                */
      2
    ), Gi = (
      /*                */
      4
    ), is = 0, xh = 1, Rc = 2, Py = 3, Rh = 4, _R = 5, nE = 6, Lt = Er, _a = null, On = null, Cr = se, fl = se, rE = Ks(se), Tr = is, wh = null, Uy = se, bh = se, Vy = se, Dh = null, Qa = null, aE = 0, kR = 500, MR = 1 / 0, ZO = 500, os = null;
    function _h() {
      MR = Xn() + ZO;
    }
    function OR() {
      return MR;
    }
    var zy = !1, iE = null, md = null, wc = !1, iu = null, kh = se, oE = [], lE = null, JO = 50, Mh = 0, sE = null, uE = !1, Fy = !1, eA = 50, yd = 0, jy = null, Oh = nn, By = se, AR = !1;
    function Hy() {
      return _a;
    }
    function ka() {
      return (Lt & (Kr | Gi)) !== Er ? Xn() : (Oh !== nn || (Oh = Xn()), Oh);
    }
    function ou(e) {
      var t = e.mode;
      if ((t & Rt) === $e)
        return et;
      if ((Lt & Kr) !== Er && Cr !== se)
        return $u(Cr);
      var a = Qk() !== Kk;
      if (a) {
        if (Gr.transition !== null) {
          var i = Gr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return By === Vt && (By = Sp()), By;
      }
      var u = Ya();
      if (u !== Vt)
        return u;
      var d = L_();
      return d;
    }
    function tA(e) {
      var t = e.mode;
      return (t & Rt) === $e ? et : $v();
    }
    function xr(e, t, a, i) {
      wA(), AR && v("useInsertionEffect must not schedule updates."), uE && (Fy = !0), Vs(e, a, i), (Lt & Kr) !== se && e === _a ? _A(t) : (aa && Qu(e, t, a), kA(t), e === _a && ((Lt & Kr) === Er && (bh = pt(bh, a)), Tr === Rh && lu(e, Cr)), Xa(e, i), a === et && Lt === Er && (t.mode & Rt) === $e && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !wo.isBatchingLegacy && (_h(), AT()));
    }
    function nA(e, t, a) {
      var i = e.current;
      i.lanes = t, Vs(e, t, a), Xa(e, a);
    }
    function rA(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Lt & Kr) !== Er
      );
    }
    function Xa(e, t) {
      var a = e.callbackNode;
      bf(e, t);
      var i = wf(e, e === _a ? Cr : se);
      if (i === se) {
        a !== null && KR(a), e.callbackNode = null, e.callbackPriority = Vt;
        return;
      }
      var u = Qo(i), d = e.callbackPriority;
      if (d === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(wo.current !== null && a !== mE)) {
        a == null && d !== et && v("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && KR(a);
      var m;
      if (u === et)
        e.tag === Qs ? (wo.isBatchingLegacy !== null && (wo.didScheduleLegacyUpdate = !0), Ok(PR.bind(null, e))) : OT(PR.bind(null, e)), wo.current !== null ? wo.current.push(Xs) : P_(function() {
          (Lt & (Kr | Gi)) === Er && Xs();
        }), m = null;
      else {
        var S;
        switch (Jv(i)) {
          case Vr:
            S = Au;
            break;
          case Vi:
            S = Wo;
            break;
          case Ha:
            S = lo;
            break;
          case Ia:
            S = Ll;
            break;
          default:
            S = lo;
            break;
        }
        m = yE(S, LR.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = m;
    }
    function LR(e, t) {
      if (CM(), Oh = nn, By = se, (Lt & (Kr | Gi)) !== Er)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = ss();
      if (i && e.callbackNode !== a)
        return null;
      var u = wf(e, e === _a ? Cr : se);
      if (u === se)
        return null;
      var d = !_f(e, u) && !Wv(e, u) && !t, m = d ? pA(e, u) : Yy(e, u);
      if (m !== is) {
        if (m === Rc) {
          var S = Df(e);
          S !== se && (u = S, m = cE(e, S));
        }
        if (m === xh) {
          var C = wh;
          throw bc(e, se), lu(e, u), Xa(e, Xn()), C;
        }
        if (m === nE)
          lu(e, u);
        else {
          var D = !_f(e, u), M = e.current.alternate;
          if (D && !iA(M)) {
            if (m = Yy(e, u), m === Rc) {
              var F = Df(e);
              F !== se && (u = F, m = cE(e, F));
            }
            if (m === xh) {
              var V = wh;
              throw bc(e, se), lu(e, u), Xa(e, Xn()), V;
            }
          }
          e.finishedWork = M, e.finishedLanes = u, aA(e, m, u);
        }
      }
      return Xa(e, Xn()), e.callbackNode === a ? LR.bind(null, e) : null;
    }
    function cE(e, t) {
      var a = Dh;
      if (Of(e)) {
        var i = bc(e, t);
        i.flags |= Dr, Rk(e.containerInfo);
      }
      var u = Yy(e, t);
      if (u !== Rc) {
        var d = Qa;
        Qa = a, d !== null && NR(d);
      }
      return u;
    }
    function NR(e) {
      Qa === null ? Qa = e : Qa.push.apply(Qa, e);
    }
    function aA(e, t, a) {
      switch (t) {
        case is:
        case xh:
          throw new Error("Root did not complete. This is a bug in React.");
        case Rc: {
          Dc(e, Qa, os);
          break;
        }
        case Py: {
          if (lu(e, a), Yl(a) && // do not delay if we're inside an act() scope
          !QR()) {
            var i = aE + kR - Xn();
            if (i > 10) {
              var u = wf(e, se);
              if (u !== se)
                break;
              var d = e.suspendedLanes;
              if (!Wl(d, a)) {
                ka(), kf(e, d);
                break;
              }
              e.timeoutHandle = lS(Dc.bind(null, e, Qa, os), i);
              break;
            }
          }
          Dc(e, Qa, os);
          break;
        }
        case Rh: {
          if (lu(e, a), yp(a))
            break;
          if (!QR()) {
            var m = pi(e, a), S = m, C = Xn() - S, D = RA(C) - C;
            if (D > 10) {
              e.timeoutHandle = lS(Dc.bind(null, e, Qa, os), D);
              break;
            }
          }
          Dc(e, Qa, os);
          break;
        }
        case _R: {
          Dc(e, Qa, os);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function iA(e) {
      for (var t = e; ; ) {
        if (t.flags & As) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var d = i[u], m = d.getSnapshot, S = d.value;
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
        if (t.subtreeFlags & As && C !== null) {
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
      t = Gu(t, Vy), t = Gu(t, bh), Qv(e, t);
    }
    function PR(e) {
      if (TM(), (Lt & (Kr | Gi)) !== Er)
        throw new Error("Should not already be working.");
      ss();
      var t = wf(e, se);
      if (!oa(t, et))
        return Xa(e, Xn()), null;
      var a = Yy(e, t);
      if (e.tag !== Qs && a === Rc) {
        var i = Df(e);
        i !== se && (t = i, a = cE(e, i));
      }
      if (a === xh) {
        var u = wh;
        throw bc(e, se), lu(e, t), Xa(e, Xn()), u;
      }
      if (a === nE)
        throw new Error("Root did not complete. This is a bug in React.");
      var d = e.current.alternate;
      return e.finishedWork = d, e.finishedLanes = t, Dc(e, Qa, os), Xa(e, Xn()), null;
    }
    function oA(e, t) {
      t !== se && (Mf(e, pt(t, et)), Xa(e, Xn()), (Lt & (Kr | Gi)) === Er && (_h(), Xs()));
    }
    function fE(e, t) {
      var a = Lt;
      Lt |= DR;
      try {
        return e(t);
      } finally {
        Lt = a, Lt === Er && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !wo.isBatchingLegacy && (_h(), AT());
      }
    }
    function lA(e, t, a, i, u) {
      var d = Ya(), m = Gr.transition;
      try {
        return Gr.transition = null, Bn(Vr), e(t, a, i, u);
      } finally {
        Bn(d), Gr.transition = m, Lt === Er && _h();
      }
    }
    function ls(e) {
      iu !== null && iu.tag === Qs && (Lt & (Kr | Gi)) === Er && ss();
      var t = Lt;
      Lt |= DR;
      var a = Gr.transition, i = Ya();
      try {
        return Gr.transition = null, Bn(Vr), e ? e() : void 0;
      } finally {
        Bn(i), Gr.transition = a, Lt = t, (Lt & (Kr | Gi)) === Er && Xs();
      }
    }
    function UR() {
      return (Lt & (Kr | Gi)) !== Er;
    }
    function Iy(e, t) {
      fa(rE, fl, e), fl = pt(fl, t);
    }
    function dE(e) {
      fl = rE.current, ca(rE, e);
    }
    function bc(e, t) {
      e.finishedWork = null, e.finishedLanes = se;
      var a = e.timeoutHandle;
      if (a !== sS && (e.timeoutHandle = sS, N_(a)), On !== null)
        for (var i = On.return; i !== null; ) {
          var u = i.alternate;
          fR(u, i), i = i.return;
        }
      _a = e;
      var d = _c(e.current, null);
      return On = d, Cr = fl = t, Tr = is, wh = null, Uy = se, bh = se, Vy = se, Dh = null, Qa = null, nM(), yo.discardPendingWarnings(), d;
    }
    function VR(e, t) {
      do {
        var a = On;
        try {
          if (Jm(), lx(), fn(), tE.current = null, a === null || a.return === null) {
            Tr = xh, wh = t, On = null;
            return;
          }
          if (Je && a.mode & Ft && _y(a, !0), nt)
            if (Ra(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Ui(a, i, Cr);
            } else
              Nu(a, t, Cr);
          OM(e, a.return, a, t, Cr), BR(a);
        } catch (u) {
          t = u, On === a && a !== null ? (a = a.return, On = a) : a = On;
          continue;
        }
        return;
      } while (!0);
    }
    function zR() {
      var e = eE.current;
      return eE.current = xy, e === null ? xy : e;
    }
    function FR(e) {
      eE.current = e;
    }
    function sA() {
      aE = Xn();
    }
    function Ah(e) {
      Uy = pt(e, Uy);
    }
    function uA() {
      Tr === is && (Tr = Py);
    }
    function pE() {
      (Tr === is || Tr === Py || Tr === Rc) && (Tr = Rh), _a !== null && (Wu(Uy) || Wu(bh)) && lu(_a, Cr);
    }
    function cA(e) {
      Tr !== Rh && (Tr = Rc), Dh === null ? Dh = [e] : Dh.push(e);
    }
    function fA() {
      return Tr === is;
    }
    function Yy(e, t) {
      var a = Lt;
      Lt |= Kr;
      var i = zR();
      if (_a !== e || Cr !== t) {
        if (aa) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Lh(e, Cr), u.clear()), Xv(e, t);
        }
        os = xp(), bc(e, t);
      }
      Vl(t);
      do
        try {
          dA();
          break;
        } catch (d) {
          VR(e, d);
        }
      while (!0);
      if (Jm(), Lt = a, FR(i), On !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return lf(), _a = null, Cr = se, Tr;
    }
    function dA() {
      for (; On !== null; )
        jR(On);
    }
    function pA(e, t) {
      var a = Lt;
      Lt |= Kr;
      var i = zR();
      if (_a !== e || Cr !== t) {
        if (aa) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Lh(e, Cr), u.clear()), Xv(e, t);
        }
        os = xp(), _h(), bc(e, t);
      }
      Vl(t);
      do
        try {
          hA();
          break;
        } catch (d) {
          VR(e, d);
        }
      while (!0);
      return Jm(), FR(i), Lt = a, On !== null ? (Bv(), is) : (lf(), _a = null, Cr = se, Tr);
    }
    function hA() {
      for (; On !== null && !np(); )
        jR(On);
    }
    function jR(e) {
      var t = e.alternate;
      Xt(e);
      var a;
      (e.mode & Ft) !== $e ? (m0(e), a = hE(t, e, fl), _y(e, !0)) : a = hE(t, e, fl), fn(), e.memoizedProps = e.pendingProps, a === null ? BR(e) : On = a, tE.current = null;
    }
    function BR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Ou) === We) {
          Xt(t);
          var u = void 0;
          if ((t.mode & Ft) === $e ? u = cR(a, t, fl) : (m0(t), u = cR(a, t, fl), _y(t, !1)), fn(), u !== null) {
            On = u;
            return;
          }
        } else {
          var d = uO(a, t);
          if (d !== null) {
            d.flags &= Pv, On = d;
            return;
          }
          if ((t.mode & Ft) !== $e) {
            _y(t, !1);
            for (var m = t.actualDuration, S = t.child; S !== null; )
              m += S.actualDuration, S = S.sibling;
            t.actualDuration = m;
          }
          if (i !== null)
            i.flags |= Ou, i.subtreeFlags = We, i.deletions = null;
          else {
            Tr = nE, On = null;
            return;
          }
        }
        var C = t.sibling;
        if (C !== null) {
          On = C;
          return;
        }
        t = i, On = t;
      } while (t !== null);
      Tr === is && (Tr = _R);
    }
    function Dc(e, t, a) {
      var i = Ya(), u = Gr.transition;
      try {
        Gr.transition = null, Bn(Vr), vA(e, t, a, i);
      } finally {
        Gr.transition = u, Bn(i);
      }
      return null;
    }
    function vA(e, t, a, i) {
      do
        ss();
      while (iu !== null);
      if (bA(), (Lt & (Kr | Gi)) !== Er)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, d = e.finishedLanes;
      if (sp(d), u === null)
        return up(), null;
      if (d === se && v("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = se, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Vt;
      var m = pt(u.lanes, u.childLanes);
      Cp(e, m), e === _a && (_a = null, On = null, Cr = se), ((u.subtreeFlags & oo) !== We || (u.flags & oo) !== We) && (wc || (wc = !0, lE = a, yE(lo, function() {
        return ss(), null;
      })));
      var S = (u.subtreeFlags & (Ho | Io | Yo | oo)) !== We, C = (u.flags & (Ho | Io | Yo | oo)) !== We;
      if (S || C) {
        var D = Gr.transition;
        Gr.transition = null;
        var M = Ya();
        Bn(Vr);
        var F = Lt;
        Lt |= Gi, tE.current = null, hO(e, u), Ax(), _O(e, u, d), D_(e.containerInfo), e.current = u, Pu(d), kO(u, e, d), Uu(), rp(), Lt = F, Bn(M), Gr.transition = D;
      } else
        e.current = u, Ax();
      var V = wc;
      if (wc ? (wc = !1, iu = e, kh = d) : (yd = 0, jy = null), m = e.pendingLanes, m === se && (md = null), V || WR(e.current, !1), ip(u.stateNode, i), aa && e.memoizedUpdaters.clear(), KO(), Xa(e, Xn()), t !== null)
        for (var $ = e.onRecoverableError, X = 0; X < t.length; X++) {
          var J = t[X], be = J.stack, Qe = J.digest;
          $(J.value, {
            componentStack: be,
            digest: Qe
          });
        }
      if (zy) {
        zy = !1;
        var Ie = iE;
        throw iE = null, Ie;
      }
      return oa(kh, et) && e.tag !== Qs && ss(), m = e.pendingLanes, oa(m, et) ? (EM(), e === sE ? Mh++ : (Mh = 0, sE = e)) : Mh = 0, Xs(), up(), null;
    }
    function ss() {
      if (iu !== null) {
        var e = Jv(kh), t = qu(Ha, e), a = Gr.transition, i = Ya();
        try {
          return Gr.transition = null, Bn(t), yA();
        } finally {
          Bn(i), Gr.transition = a;
        }
      }
      return !1;
    }
    function mA(e) {
      oE.push(e), wc || (wc = !0, yE(lo, function() {
        return ss(), null;
      }));
    }
    function yA() {
      if (iu === null)
        return !1;
      var e = lE;
      lE = null;
      var t = iu, a = kh;
      if (iu = null, kh = se, (Lt & (Kr | Gi)) !== Er)
        throw new Error("Cannot flush passive effects while already rendering.");
      uE = !0, Fy = !1, Ul(a);
      var i = Lt;
      Lt |= Gi, UO(t.current), AO(t, t.current, a, e);
      {
        var u = oE;
        oE = [];
        for (var d = 0; d < u.length; d++) {
          var m = u[d];
          gO(t, m);
        }
      }
      dp(), WR(t.current, !0), Lt = i, Xs(), Fy ? t === jy ? yd++ : (yd = 0, jy = t) : yd = 0, uE = !1, Fy = !1, op(t);
      {
        var S = t.current.stateNode;
        S.effectDuration = 0, S.passiveEffectDuration = 0;
      }
      return !0;
    }
    function HR(e) {
      return md !== null && md.has(e);
    }
    function gA(e) {
      md === null ? md = /* @__PURE__ */ new Set([e]) : md.add(e);
    }
    function SA(e) {
      zy || (zy = !0, iE = e);
    }
    var EA = SA;
    function IR(e, t, a) {
      var i = Tc(a, t), u = jx(e, i, et), d = Zs(e, u, et), m = ka();
      d !== null && (Vs(d, et, m), Xa(d, m));
    }
    function dn(e, t, a) {
      if (fO(a), Nh(!1), e.tag === _) {
        IR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === _) {
          IR(i, e, a);
          return;
        } else if (i.tag === b) {
          var u = i.type, d = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof d.componentDidCatch == "function" && !HR(d)) {
            var m = Tc(a, e), S = N0(i, m, et), C = Zs(i, S, et), D = ka();
            C !== null && (Vs(C, et, D), Xa(C, D));
            return;
          }
        }
        i = i.return;
      }
      v(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function CA(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = ka();
      kf(e, a), MA(e), _a === e && Wl(Cr, a) && (Tr === Rh || Tr === Py && Yl(Cr) && Xn() - aE < kR ? bc(e, se) : Vy = pt(Vy, a)), Xa(e, u);
    }
    function YR(e, t) {
      t === Vt && (t = tA(e));
      var a = ka(), i = Ga(e, t);
      i !== null && (Vs(i, t, a), Xa(i, a));
    }
    function TA(e) {
      var t = e.memoizedState, a = Vt;
      t !== null && (a = t.retryLane), YR(e, a);
    }
    function xA(e, t) {
      var a = Vt, i;
      switch (e.tag) {
        case ne:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case lt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), YR(e, a);
    }
    function RA(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : qO(e / 1960) * 1960;
    }
    function wA() {
      if (Mh > JO)
        throw Mh = 0, sE = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      yd > eA && (yd = 0, jy = null, v("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function bA() {
      yo.flushLegacyContextWarning(), yo.flushPendingUnsafeLifecycleWarnings();
    }
    function WR(e, t) {
      Xt(e), Wy(e, Bo, WO), t && Wy(e, Li, $O), Wy(e, Bo, IO), t && Wy(e, Li, YO), fn();
    }
    function Wy(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var d = i.subtreeFlags & t;
        i !== u && i.child !== null && d !== We ? i = i.child : ((i.flags & t) !== We && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var $y = null;
    function $R(e) {
      {
        if ((Lt & Kr) !== Er || !(e.mode & Rt))
          return;
        var t = e.tag;
        if (t !== k && t !== _ && t !== b && t !== R && t !== oe && t !== ve && t !== Ee)
          return;
        var a = ot(e) || "ReactComponent";
        if ($y !== null) {
          if ($y.has(a))
            return;
          $y.add(a);
        } else
          $y = /* @__PURE__ */ new Set([a]);
        var i = fr;
        try {
          Xt(e), v("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Xt(e) : fn();
        }
      }
    }
    var hE;
    {
      var DA = null;
      hE = function(e, t, a) {
        var i = ew(DA, t);
        try {
          return iR(e, t, a);
        } catch (d) {
          if (Fk() || d !== null && typeof d == "object" && typeof d.then == "function")
            throw d;
          if (Jm(), lx(), fR(e, t), ew(t, i), t.mode & Ft && m0(t), jo(null, iR, null, e, t, a), ao()) {
            var u = Mu();
            typeof u == "object" && u !== null && u._suppressLogging && typeof d == "object" && d !== null && !d._suppressLogging && (d._suppressLogging = !0);
          }
          throw d;
        }
      };
    }
    var GR = !1, vE;
    vE = /* @__PURE__ */ new Set();
    function _A(e) {
      if (bi && !yM())
        switch (e.tag) {
          case R:
          case oe:
          case Ee: {
            var t = On && ot(On) || "Unknown", a = t;
            if (!vE.has(a)) {
              vE.add(a);
              var i = ot(e) || "Unknown";
              v("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case b: {
            GR || (v("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), GR = !0);
            break;
          }
        }
    }
    function Lh(e, t) {
      if (aa) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Qu(e, i, t);
        });
      }
    }
    var mE = {};
    function yE(e, t) {
      {
        var a = wo.current;
        return a !== null ? (a.push(t), mE) : tp(e, t);
      }
    }
    function KR(e) {
      if (e !== mE)
        return Vv(e);
    }
    function QR() {
      return wo.current !== null;
    }
    function kA(e) {
      {
        if (e.mode & Rt) {
          if (!bR())
            return;
        } else if (!XO() || Lt !== Er || e.tag !== R && e.tag !== oe && e.tag !== Ee)
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

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, ot(e));
          } finally {
            t ? Xt(e) : fn();
          }
        }
      }
    }
    function MA(e) {
      e.tag !== Qs && bR() && wo.current === null && v(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Nh(e) {
      AR = e;
    }
    var Ki = null, gd = null, OA = function(e) {
      Ki = e;
    };
    function Sd(e) {
      {
        if (Ki === null)
          return e;
        var t = Ki(e);
        return t === void 0 ? e : t.current;
      }
    }
    function gE(e) {
      return Sd(e);
    }
    function SE(e) {
      {
        if (Ki === null)
          return e;
        var t = Ki(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Sd(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: le,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function XR(e, t) {
      {
        if (Ki === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, d = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case b: {
            typeof i == "function" && (u = !0);
            break;
          }
          case R: {
            (typeof i == "function" || d === st) && (u = !0);
            break;
          }
          case oe: {
            (d === le || d === st) && (u = !0);
            break;
          }
          case ve:
          case Ee: {
            (d === ft || d === st) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var m = Ki(a);
          if (m !== void 0 && m === Ki(i))
            return !0;
        }
        return !1;
      }
    }
    function qR(e) {
      {
        if (Ki === null || typeof WeakSet != "function")
          return;
        gd === null && (gd = /* @__PURE__ */ new WeakSet()), gd.add(e);
      }
    }
    var AA = function(e, t) {
      {
        if (Ki === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        ss(), ls(function() {
          EE(e.current, i, a);
        });
      }
    }, LA = function(e, t) {
      {
        if (e.context !== mi)
          return;
        ss(), ls(function() {
          Ph(t, e, null, null);
        });
      }
    };
    function EE(e, t, a) {
      {
        var i = e.alternate, u = e.child, d = e.sibling, m = e.tag, S = e.type, C = null;
        switch (m) {
          case R:
          case Ee:
          case b:
            C = S;
            break;
          case oe:
            C = S.render;
            break;
        }
        if (Ki === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var D = !1, M = !1;
        if (C !== null) {
          var F = Ki(C);
          F !== void 0 && (a.has(F) ? M = !0 : t.has(F) && (m === b ? M = !0 : D = !0));
        }
        if (gd !== null && (gd.has(e) || i !== null && gd.has(i)) && (M = !0), M && (e._debugNeedsRemount = !0), M || D) {
          var V = Ga(e, et);
          V !== null && xr(V, e, et, nn);
        }
        u !== null && !M && EE(u, t, a), d !== null && EE(d, t, a);
      }
    }
    var NA = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return CE(e.current, i, a), a;
      }
    };
    function CE(e, t, a) {
      {
        var i = e.child, u = e.sibling, d = e.tag, m = e.type, S = null;
        switch (d) {
          case R:
          case Ee:
          case b:
            S = m;
            break;
          case oe:
            S = m.render;
            break;
        }
        var C = !1;
        S !== null && t.has(S) && (C = !0), C ? PA(e, a) : i !== null && CE(i, t, a), u !== null && CE(u, t, a);
      }
    }
    function PA(e, t) {
      {
        var a = UA(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case P:
              t.add(i.stateNode);
              return;
            case A:
              t.add(i.stateNode.containerInfo);
              return;
            case _:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function UA(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === P)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var TE;
    {
      TE = !1;
      try {
        var ZR = Object.preventExtensions({});
      } catch {
        TE = !0;
      }
    }
    function VA(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = We, this.subtreeFlags = We, this.deletions = null, this.lanes = se, this.childLanes = se, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !TE && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var yi = function(e, t, a, i) {
      return new VA(e, t, a, i);
    };
    function xE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function zA(e) {
      return typeof e == "function" && !xE(e) && e.defaultProps === void 0;
    }
    function FA(e) {
      if (typeof e == "function")
        return xE(e) ? b : R;
      if (e != null) {
        var t = e.$$typeof;
        if (t === le)
          return oe;
        if (t === ft)
          return ve;
      }
      return k;
    }
    function _c(e, t) {
      var a = e.alternate;
      a === null ? (a = yi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = We, a.subtreeFlags = We, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & zn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case k:
        case R:
        case Ee:
          a.type = Sd(e.type);
          break;
        case b:
          a.type = gE(e.type);
          break;
        case oe:
          a.type = SE(e.type);
          break;
      }
      return a;
    }
    function jA(e, t) {
      e.flags &= zn | yn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = se, e.lanes = t, e.child = null, e.subtreeFlags = We, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = We, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function BA(e, t, a) {
      var i;
      return e === Im ? (i = Rt, t === !0 && (i |= Jt, i |= jt)) : i = $e, aa && (i |= Ft), yi(_, null, null, i);
    }
    function RE(e, t, a, i, u, d) {
      var m = k, S = e;
      if (typeof e == "function")
        xE(e) ? (m = b, S = gE(S)) : S = Sd(S);
      else if (typeof e == "string")
        m = P;
      else
        e: switch (e) {
          case Ti:
            return su(a.children, u, d, t);
          case ni:
            m = q, u |= Jt, (u & Rt) !== $e && (u |= jt);
            break;
          case xi:
            return HA(a, u, d, t);
          case Re:
            return IA(a, u, d, t);
          case Pe:
            return YA(a, u, d, t);
          case wn:
            return JR(a, u, d, t);
          case on:
          case wt:
          case cn:
          case cr:
          case xt:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Ri:
                  m = ie;
                  break e;
                case N:
                  m = te;
                  break e;
                case le:
                  m = oe, S = SE(S);
                  break e;
                case ft:
                  m = ve;
                  break e;
                case st:
                  m = De, S = null;
                  break e;
              }
            var C = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (C += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var D = i ? ot(i) : null;
              D && (C += `

Check the render method of \`` + D + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + C));
          }
        }
      var M = yi(m, a, t, u);
      return M.elementType = e, M.type = S, M.lanes = d, M._debugOwner = i, M;
    }
    function wE(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, d = e.key, m = e.props, S = RE(u, d, m, i, t, a);
      return S._debugSource = e._source, S._debugOwner = e._owner, S;
    }
    function su(e, t, a, i) {
      var u = yi(K, e, i, t);
      return u.lanes = a, u;
    }
    function HA(e, t, a, i) {
      typeof e.id != "string" && v('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = yi(ye, e, i, t | Ft);
      return u.elementType = xi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function IA(e, t, a, i) {
      var u = yi(ne, e, i, t);
      return u.elementType = Re, u.lanes = a, u;
    }
    function YA(e, t, a, i) {
      var u = yi(lt, e, i, t);
      return u.elementType = Pe, u.lanes = a, u;
    }
    function JR(e, t, a, i) {
      var u = yi(Ue, e, i, t);
      u.elementType = wn, u.lanes = a;
      var d = {
        isHidden: !1
      };
      return u.stateNode = d, u;
    }
    function bE(e, t, a) {
      var i = yi(Y, e, null, t);
      return i.lanes = a, i;
    }
    function WA() {
      var e = yi(P, null, null, $e);
      return e.elementType = "DELETED", e;
    }
    function $A(e) {
      var t = yi(Oe, null, null, $e);
      return t.stateNode = e, t;
    }
    function DE(e, t, a) {
      var i = e.children !== null ? e.children : [], u = yi(A, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function ew(e, t) {
      return e === null && (e = yi(k, null, null, $e)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function GA(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = sS, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Vt, this.eventTimes = Ku(se), this.expirationTimes = Ku(nn), this.pendingLanes = se, this.suspendedLanes = se, this.pingedLanes = se, this.expiredLanes = se, this.mutableReadLanes = se, this.finishedLanes = se, this.entangledLanes = se, this.entanglements = Ku(se), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var d = this.pendingUpdatersLaneMap = [], m = 0; m < zl; m++)
          d.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Im:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Qs:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function tw(e, t, a, i, u, d, m, S, C, D) {
      var M = new GA(e, t, a, S, C), F = BA(t, d);
      M.current = F, F.stateNode = M;
      {
        var V = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        F.memoizedState = V;
      }
      return jS(F), M;
    }
    var _E = "18.3.1";
    function KA(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return qr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: ur,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var kE, ME;
    kE = !1, ME = {};
    function nw(e) {
      if (!e)
        return mi;
      var t = Os(e), a = Mk(t);
      if (t.tag === b) {
        var i = t.type;
        if (al(i))
          return kT(t, i, a);
      }
      return a;
    }
    function QA(e, t) {
      {
        var a = Os(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = na(a);
        if (u === null)
          return null;
        if (u.mode & Jt) {
          var d = ot(a) || "Component";
          if (!ME[d]) {
            ME[d] = !0;
            var m = fr;
            try {
              Xt(u), a.mode & Jt ? v("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, d) : v("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, d);
            } finally {
              m ? Xt(m) : fn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function rw(e, t, a, i, u, d, m, S) {
      var C = !1, D = null;
      return tw(e, t, C, D, a, i, u, d, m);
    }
    function aw(e, t, a, i, u, d, m, S, C, D) {
      var M = !0, F = tw(a, i, M, e, u, d, m, S, C);
      F.context = nw(null);
      var V = F.current, $ = ka(), X = ou(V), J = rs($, X);
      return J.callback = t ?? null, Zs(V, J, X), nA(F, X, $), F;
    }
    function Ph(e, t, a, i) {
      ap(t, e);
      var u = t.current, d = ka(), m = ou(u);
      Sn(m);
      var S = nw(a);
      t.context === null ? t.context = S : t.pendingContext = S, bi && fr !== null && !kE && (kE = !0, v(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, ot(fr) || "Unknown"));
      var C = rs(d, m);
      C.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && v("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), C.callback = i);
      var D = Zs(u, C, m);
      return D !== null && (xr(D, u, m, d), ay(D, u, m)), m;
    }
    function Gy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case P:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function XA(e) {
      switch (e.tag) {
        case _: {
          var t = e.stateNode;
          if (Of(t)) {
            var a = Iv(t);
            oA(t, a);
          }
          break;
        }
        case ne: {
          ls(function() {
            var u = Ga(e, et);
            if (u !== null) {
              var d = ka();
              xr(u, e, et, d);
            }
          });
          var i = et;
          OE(e, i);
          break;
        }
      }
    }
    function iw(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Kv(a.retryLane, t));
    }
    function OE(e, t) {
      iw(e, t);
      var a = e.alternate;
      a && iw(a, t);
    }
    function qA(e) {
      if (e.tag === ne) {
        var t = Hu, a = Ga(e, t);
        if (a !== null) {
          var i = ka();
          xr(a, e, t, i);
        }
        OE(e, t);
      }
    }
    function ZA(e) {
      if (e.tag === ne) {
        var t = ou(e), a = Ga(e, t);
        if (a !== null) {
          var i = ka();
          xr(a, e, t, i);
        }
        OE(e, t);
      }
    }
    function ow(e) {
      var t = pn(e);
      return t === null ? null : t.stateNode;
    }
    var lw = function(e) {
      return null;
    };
    function JA(e) {
      return lw(e);
    }
    var sw = function(e) {
      return !1;
    };
    function eL(e) {
      return sw(e);
    }
    var uw = null, cw = null, fw = null, dw = null, pw = null, hw = null, vw = null, mw = null, yw = null;
    {
      var gw = function(e, t, a) {
        var i = t[a], u = St(e) ? e.slice() : vt({}, e);
        return a + 1 === t.length ? (St(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = gw(e[i], t, a + 1), u);
      }, Sw = function(e, t) {
        return gw(e, t, 0);
      }, Ew = function(e, t, a, i) {
        var u = t[i], d = St(e) ? e.slice() : vt({}, e);
        if (i + 1 === t.length) {
          var m = a[i];
          d[m] = d[u], St(d) ? d.splice(u, 1) : delete d[u];
        } else
          d[u] = Ew(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return d;
      }, Cw = function(e, t, a) {
        if (t.length !== a.length) {
          T("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              T("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return Ew(e, t, a, 0);
      }, Tw = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], d = St(e) ? e.slice() : vt({}, e);
        return d[u] = Tw(e[u], t, a + 1, i), d;
      }, xw = function(e, t, a) {
        return Tw(e, t, 0, a);
      }, AE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      uw = function(e, t, a, i) {
        var u = AE(e, t);
        if (u !== null) {
          var d = xw(u.memoizedState, a, i);
          u.memoizedState = d, u.baseState = d, e.memoizedProps = vt({}, e.memoizedProps);
          var m = Ga(e, et);
          m !== null && xr(m, e, et, nn);
        }
      }, cw = function(e, t, a) {
        var i = AE(e, t);
        if (i !== null) {
          var u = Sw(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = vt({}, e.memoizedProps);
          var d = Ga(e, et);
          d !== null && xr(d, e, et, nn);
        }
      }, fw = function(e, t, a, i) {
        var u = AE(e, t);
        if (u !== null) {
          var d = Cw(u.memoizedState, a, i);
          u.memoizedState = d, u.baseState = d, e.memoizedProps = vt({}, e.memoizedProps);
          var m = Ga(e, et);
          m !== null && xr(m, e, et, nn);
        }
      }, dw = function(e, t, a) {
        e.pendingProps = xw(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ga(e, et);
        i !== null && xr(i, e, et, nn);
      }, pw = function(e, t) {
        e.pendingProps = Sw(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ga(e, et);
        a !== null && xr(a, e, et, nn);
      }, hw = function(e, t, a) {
        e.pendingProps = Cw(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ga(e, et);
        i !== null && xr(i, e, et, nn);
      }, vw = function(e) {
        var t = Ga(e, et);
        t !== null && xr(t, e, et, nn);
      }, mw = function(e) {
        lw = e;
      }, yw = function(e) {
        sw = e;
      };
    }
    function tL(e) {
      var t = na(e);
      return t === null ? null : t.stateNode;
    }
    function nL(e) {
      return null;
    }
    function rL() {
      return fr;
    }
    function aL(e) {
      var t = e.findFiberByHostInstance, a = c.ReactCurrentDispatcher;
      return Ns({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: uw,
        overrideHookStateDeletePath: cw,
        overrideHookStateRenamePath: fw,
        overrideProps: dw,
        overridePropsDeletePath: pw,
        overridePropsRenamePath: hw,
        setErrorHandler: mw,
        setSuspenseHandler: yw,
        scheduleUpdate: vw,
        currentDispatcherRef: a,
        findHostInstanceByFiber: tL,
        findFiberByHostInstance: t || nL,
        // React Refresh
        findHostInstancesForRefresh: NA,
        scheduleRefresh: AA,
        scheduleRoot: LA,
        setRefreshHandler: OA,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: rL,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: _E
      });
    }
    var Rw = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function LE(e) {
      this._internalRoot = e;
    }
    Ky.prototype.render = LE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? v("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Qy(arguments[1]) ? v("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && v("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Un) {
          var i = ow(t.current);
          i && i.parentNode !== a && v("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Ph(e, t, null, null);
    }, Ky.prototype.unmount = LE.prototype.unmount = function() {
      typeof arguments[0] == "function" && v("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        UR() && v("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), ls(function() {
          Ph(null, e, null, null);
        }), RT(t);
      }
    };
    function iL(e, t) {
      if (!Qy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      ww(e);
      var a = !1, i = !1, u = "", d = Rw;
      t != null && (t.hydrate ? T("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Lr && v(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var m = rw(e, Im, null, a, i, u, d);
      Um(m.current, e);
      var S = e.nodeType === Un ? e.parentNode : e;
      return Bp(S), new LE(m);
    }
    function Ky(e) {
      this._internalRoot = e;
    }
    function oL(e) {
      e && am(e);
    }
    Ky.prototype.unstable_scheduleHydration = oL;
    function lL(e, t, a) {
      if (!Qy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      ww(e), t === void 0 && v("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, d = !1, m = !1, S = "", C = Rw;
      a != null && (a.unstable_strictMode === !0 && (d = !0), a.identifierPrefix !== void 0 && (S = a.identifierPrefix), a.onRecoverableError !== void 0 && (C = a.onRecoverableError));
      var D = aw(t, null, e, Im, i, d, m, S, C);
      if (Um(D.current, e), Bp(e), u)
        for (var M = 0; M < u.length; M++) {
          var F = u[M];
          fM(D, F);
        }
      return new Ky(D);
    }
    function Qy(e) {
      return !!(e && (e.nodeType === Jr || e.nodeType === ro || e.nodeType === Id));
    }
    function Uh(e) {
      return !!(e && (e.nodeType === Jr || e.nodeType === ro || e.nodeType === Id || e.nodeType === Un && e.nodeValue === " react-mount-point-unstable "));
    }
    function ww(e) {
      e.nodeType === Jr && e.tagName && e.tagName.toUpperCase() === "BODY" && v("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Zp(e) && (e._reactRootContainer ? v("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : v("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var sL = c.ReactCurrentOwner, bw;
    bw = function(e) {
      if (e._reactRootContainer && e.nodeType !== Un) {
        var t = ow(e._reactRootContainer.current);
        t && t.parentNode !== e && v("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = NE(e), u = !!(i && Gs(i));
      u && !a && v("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Jr && e.tagName && e.tagName.toUpperCase() === "BODY" && v("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function NE(e) {
      return e ? e.nodeType === ro ? e.documentElement : e.firstChild : null;
    }
    function Dw() {
    }
    function uL(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var d = i;
          i = function() {
            var V = Gy(m);
            d.call(V);
          };
        }
        var m = aw(
          t,
          i,
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
          Dw
        );
        e._reactRootContainer = m, Um(m.current, e);
        var S = e.nodeType === Un ? e.parentNode : e;
        return Bp(S), ls(), m;
      } else {
        for (var C; C = e.lastChild; )
          e.removeChild(C);
        if (typeof i == "function") {
          var D = i;
          i = function() {
            var V = Gy(M);
            D.call(V);
          };
        }
        var M = rw(
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
          Dw
        );
        e._reactRootContainer = M, Um(M.current, e);
        var F = e.nodeType === Un ? e.parentNode : e;
        return Bp(F), ls(function() {
          Ph(t, M, a, i);
        }), M;
      }
    }
    function cL(e, t) {
      e !== null && typeof e != "function" && v("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Xy(e, t, a, i, u) {
      bw(a), cL(u === void 0 ? null : u, "render");
      var d = a._reactRootContainer, m;
      if (!d)
        m = uL(a, t, e, u, i);
      else {
        if (m = d, typeof u == "function") {
          var S = u;
          u = function() {
            var C = Gy(m);
            S.call(C);
          };
        }
        Ph(t, m, e, u);
      }
      return Gy(m);
    }
    var _w = !1;
    function fL(e) {
      {
        _w || (_w = !0, v("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = sL.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || v("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Pt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Jr ? e : QA(e, "findDOMNode");
    }
    function dL(e, t, a) {
      if (v("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Uh(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Zp(t) && t._reactRootContainer === void 0;
        i && v("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Xy(null, e, t, !0, a);
    }
    function pL(e, t, a) {
      if (v("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Uh(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Zp(t) && t._reactRootContainer === void 0;
        i && v("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Xy(null, e, t, !1, a);
    }
    function hL(e, t, a, i) {
      if (v("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Uh(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Og(e))
        throw new Error("parentComponent must be a valid React Component");
      return Xy(e, t, a, !1, i);
    }
    var kw = !1;
    function vL(e) {
      if (kw || (kw = !0, v("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Uh(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Zp(e) && e._reactRootContainer === void 0;
        t && v("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = NE(e), i = a && !Gs(a);
          i && v("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return ls(function() {
          Xy(null, null, e, !1, function() {
            e._reactRootContainer = null, RT(e);
          });
        }), !0;
      } else {
        {
          var u = NE(e), d = !!(u && Gs(u)), m = e.nodeType === Jr && Uh(e.parentNode) && !!e.parentNode._reactRootContainer;
          d && v("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", m ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    kr(XA), zs(qA), em(ZA), Ju(Ya), Rp(qv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && v("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Gc(y_), Mg(fE, lA, ls);
    function mL(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Qy(t))
        throw new Error("Target container is not a DOM element.");
      return KA(e, t, null, a);
    }
    function yL(e, t, a, i) {
      return hL(e, t, a, i);
    }
    var PE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Gs, Xf, Vm, Ds, Kc, fE]
    };
    function gL(e, t) {
      return PE.usingClientEntryPoint || v('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), iL(e, t);
    }
    function SL(e, t, a) {
      return PE.usingClientEntryPoint || v('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), lL(e, t, a);
    }
    function EL(e) {
      return UR() && v("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), ls(e);
    }
    var CL = aL({
      findFiberByHostInstance: pc,
      bundleType: 1,
      version: _E,
      rendererPackageName: "react-dom"
    });
    if (!CL && Nn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var Mw = window.location.protocol;
      /^(https?|file):$/.test(Mw) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (Mw === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Za.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = PE, Za.createPortal = mL, Za.createRoot = gL, Za.findDOMNode = fL, Za.flushSync = EL, Za.hydrate = dL, Za.hydrateRoot = SL, Za.render = pL, Za.unmountComponentAtNode = vL, Za.unstable_batchedUpdates = fE, Za.unstable_renderSubtreeIntoContainer = yL, Za.version = _E, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Za;
}
function l1() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l1);
    } catch (o) {
      console.error(o);
    }
  }
}
process.env.NODE_ENV === "production" ? (l1(), JE.exports = ML()) : JE.exports = OL();
var AL = JE.exports, eC, Zy = AL;
if (process.env.NODE_ENV === "production")
  eC = Zy.createRoot, Zy.hydrateRoot;
else {
  var jw = Zy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  eC = function(o, l) {
    jw.usingClientEntryPoint = !0;
    try {
      return Zy.createRoot(o, l);
    } finally {
      jw.usingClientEntryPoint = !1;
    }
  };
}
const s1 = Ge.createContext({});
function LL(o) {
  const l = Ge.useRef(null);
  return l.current === null && (l.current = o()), l.current;
}
const mC = Ge.createContext(null), u1 = Ge.createContext({
  transformPagePoint: (o) => o,
  isStatic: !1,
  reducedMotion: "never"
});
function NL(o = !0) {
  const l = Ge.useContext(mC);
  if (l === null)
    return [!0, null];
  const { isPresent: c, onExitComplete: p, register: y } = l, T = Ge.useId();
  Ge.useEffect(() => {
    o && y(T);
  }, [o]);
  const v = Ge.useCallback(() => o && p && p(T), [T, p, o]);
  return !c && p ? [!1, v] : [!0];
}
const yC = typeof window < "u", PL = yC ? Ge.useLayoutEffect : Ge.useEffect, Ja = /* @__NO_SIDE_EFFECTS__ */ (o) => o;
let kd = Ja, cu = Ja;
process.env.NODE_ENV !== "production" && (kd = (o, l) => {
  !o && typeof console < "u" && console.warn(l);
}, cu = (o, l) => {
  if (!o)
    throw new Error(l);
});
// @__NO_SIDE_EFFECTS__
function gC(o) {
  let l;
  return () => (l === void 0 && (l = o()), l);
}
const bd = /* @__NO_SIDE_EFFECTS__ */ (o, l, c) => {
  const p = l - o;
  return p === 0 ? 1 : (c - o) / p;
}, pl = /* @__NO_SIDE_EFFECTS__ */ (o) => o * 1e3, cs = /* @__NO_SIDE_EFFECTS__ */ (o) => o / 1e3, UL = {
  useManualTiming: !1
};
function VL(o) {
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
      const P = _ && p ? l : c;
      return k && T.add(b), P.has(b) || P.add(b), b;
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
const Jy = [
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
], zL = 40;
function c1(o, l) {
  let c = !1, p = !0;
  const y = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, T = () => c = !0, v = Jy.reduce((te, ie) => (te[ie] = VL(T), te), {}), { read: E, resolveKeyframes: R, update: b, preRender: k, render: _, postRender: A } = v, P = () => {
    const te = performance.now();
    c = !1, y.delta = p ? 1e3 / 60 : Math.max(Math.min(te - y.timestamp, zL), 1), y.timestamp = te, y.isProcessing = !0, E.process(y), R.process(y), b.process(y), k.process(y), _.process(y), A.process(y), y.isProcessing = !1, c && l && (p = !1, o(P));
  }, Y = () => {
    c = !0, p = !0, y.isProcessing || o(P);
  };
  return { schedule: Jy.reduce((te, ie) => {
    const oe = v[ie];
    return te[ie] = (ye, ne = !1, ve = !1) => (c || Y(), oe.schedule(ye, ne, ve)), te;
  }, {}), cancel: (te) => {
    for (let ie = 0; ie < Jy.length; ie++)
      v[Jy[ie]].cancel(te);
  }, state: y, steps: v };
}
const { schedule: Cn, cancel: fu, state: Xr, steps: zE } = c1(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ja, !0), f1 = Ge.createContext({ strict: !1 }), Bw = {
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
for (const o in Bw)
  Dd[o] = {
    isEnabled: (l) => Bw[o].some((c) => !!l[c])
  };
function FL(o) {
  for (const l in o)
    Dd[l] = {
      ...Dd[l],
      ...o[l]
    };
}
const jL = /* @__PURE__ */ new Set([
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
function og(o) {
  return o.startsWith("while") || o.startsWith("drag") && o !== "draggable" || o.startsWith("layout") || o.startsWith("onTap") || o.startsWith("onPan") || o.startsWith("onLayout") || jL.has(o);
}
let d1 = (o) => !og(o);
function BL(o) {
  o && (d1 = (l) => l.startsWith("on") ? !og(l) : o(l));
}
try {
  BL(require("@emotion/is-prop-valid").default);
} catch {
}
function HL(o, l, c) {
  const p = {};
  for (const y in o)
    y === "values" && typeof o.values == "object" || (d1(y) || c === !0 && og(y) || !l && !og(y) || // If trying to use native HTML drag events, forward drag listeners
    o.draggable && y.startsWith("onDrag")) && (p[y] = o[y]);
  return p;
}
const Hw = /* @__PURE__ */ new Set();
function ev(o, l, c) {
  o || Hw.has(l) || (console.warn(l), Hw.add(l));
}
function IL(o) {
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
const hg = Ge.createContext({});
function Qh(o) {
  return typeof o == "string" || Array.isArray(o);
}
function vg(o) {
  return o !== null && typeof o == "object" && typeof o.start == "function";
}
const SC = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], EC = ["initial", ...SC];
function mg(o) {
  return vg(o.animate) || EC.some((l) => Qh(o[l]));
}
function p1(o) {
  return !!(mg(o) || o.variants);
}
function YL(o, l) {
  if (mg(o)) {
    const { initial: c, animate: p } = o;
    return {
      initial: c === !1 || Qh(c) ? c : void 0,
      animate: Qh(p) ? p : void 0
    };
  }
  return o.inherit !== !1 ? l : {};
}
function WL(o) {
  const { initial: l, animate: c } = YL(o, Ge.useContext(hg));
  return Ge.useMemo(() => ({ initial: l, animate: c }), [Iw(l), Iw(c)]);
}
function Iw(o) {
  return Array.isArray(o) ? o.join(" ") : o;
}
const $L = Symbol.for("motionComponentSymbol");
function Cd(o) {
  return o && typeof o == "object" && Object.prototype.hasOwnProperty.call(o, "current");
}
function GL(o, l, c) {
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
const CC = (o) => o.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), KL = "framerAppearId", h1 = "data-" + CC(KL), { schedule: TC } = c1(queueMicrotask, !1), v1 = Ge.createContext({});
function QL(o, l, c, p, y) {
  var T, v;
  const { visualElement: E } = Ge.useContext(hg), R = Ge.useContext(f1), b = Ge.useContext(mC), k = Ge.useContext(u1).reducedMotion, _ = Ge.useRef(null);
  p = p || R.renderer, !_.current && p && (_.current = p(o, {
    visualState: l,
    parent: E,
    props: c,
    presenceContext: b,
    blockInitialAnimation: b ? b.initial === !1 : !1,
    reducedMotionConfig: k
  }));
  const A = _.current, P = Ge.useContext(v1);
  A && !A.projection && y && (A.type === "html" || A.type === "svg") && XL(_.current, c, y, P);
  const Y = Ge.useRef(!1);
  Ge.useInsertionEffect(() => {
    A && Y.current && A.update(c, b);
  });
  const K = c[h1], q = Ge.useRef(!!K && !(!((T = window.MotionHandoffIsComplete) === null || T === void 0) && T.call(window, K)) && ((v = window.MotionHasOptimisedAnimation) === null || v === void 0 ? void 0 : v.call(window, K)));
  return PL(() => {
    A && (Y.current = !0, window.MotionIsMounted = !0, A.updateFeatures(), TC.render(A.render), q.current && A.animationState && A.animationState.animateChanges());
  }), Ge.useEffect(() => {
    A && (!q.current && A.animationState && A.animationState.animateChanges(), q.current && (queueMicrotask(() => {
      var te;
      (te = window.MotionHandoffMarkAsComplete) === null || te === void 0 || te.call(window, K);
    }), q.current = !1));
  }), A;
}
function XL(o, l, c, p) {
  const { layoutId: y, layout: T, drag: v, dragConstraints: E, layoutScroll: R, layoutRoot: b } = l;
  o.projection = new c(o.latestValues, l["data-framer-portal-id"] ? void 0 : m1(o.parent)), o.projection.setOptions({
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
function m1(o) {
  if (o)
    return o.options.allowProjection !== !1 ? o.projection : m1(o.parent);
}
function qL({ preloadedFeatures: o, createVisualElement: l, useRender: c, useVisualState: p, Component: y }) {
  var T, v;
  o && FL(o);
  function E(b, k) {
    let _;
    const A = {
      ...Ge.useContext(u1),
      ...b,
      layoutId: ZL(b)
    }, { isStatic: P } = A, Y = WL(b), K = p(b, P);
    if (!P && yC) {
      JL(A, o);
      const q = eN(A);
      _ = q.MeasureLayout, Y.visualElement = QL(y, K, A, l, q.ProjectionNode);
    }
    return lr.jsxs(hg.Provider, { value: Y, children: [_ && Y.visualElement ? lr.jsx(_, { visualElement: Y.visualElement, ...A }) : null, c(y, b, GL(K, Y.visualElement, k), K, P, Y.visualElement)] });
  }
  E.displayName = `motion.${typeof y == "string" ? y : `create(${(v = (T = y.displayName) !== null && T !== void 0 ? T : y.name) !== null && v !== void 0 ? v : ""})`}`;
  const R = Ge.forwardRef(E);
  return R[$L] = y, R;
}
function ZL({ layoutId: o }) {
  const l = Ge.useContext(s1).id;
  return l && o !== void 0 ? l + "-" + o : o;
}
function JL(o, l) {
  const c = Ge.useContext(f1).strict;
  if (process.env.NODE_ENV !== "production" && l && c) {
    const p = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    o.ignoreStrict ? kd(!1, p) : cu(!1, p);
  }
}
function eN(o) {
  const { drag: l, layout: c } = Dd;
  if (!l && !c)
    return {};
  const p = { ...l, ...c };
  return {
    MeasureLayout: l != null && l.isEnabled(o) || c != null && c.isEnabled(o) ? p.MeasureLayout : void 0,
    ProjectionNode: p.ProjectionNode
  };
}
const tN = [
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
function xC(o) {
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
      !!(tN.indexOf(o) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(o))
    )
  );
}
function Yw(o) {
  const l = [{}, {}];
  return o == null || o.values.forEach((c, p) => {
    l[0][p] = c.get(), l[1][p] = c.getVelocity();
  }), l;
}
function RC(o, l, c, p) {
  if (typeof l == "function") {
    const [y, T] = Yw(p);
    l = l(c !== void 0 ? c : o.custom, y, T);
  }
  if (typeof l == "string" && (l = o.variants && o.variants[l]), typeof l == "function") {
    const [y, T] = Yw(p);
    l = l(c !== void 0 ? c : o.custom, y, T);
  }
  return l;
}
const tC = (o) => Array.isArray(o), nN = (o) => !!(o && typeof o == "object" && o.mix && o.toValue), rN = (o) => tC(o) ? o[o.length - 1] || 0 : o, ma = (o) => !!(o && o.getVelocity);
function rg(o) {
  const l = ma(o) ? o.get() : o;
  return nN(l) ? l.toValue() : l;
}
function aN({ scrapeMotionValuesFromProps: o, createRenderState: l, onUpdate: c }, p, y, T) {
  const v = {
    latestValues: iN(p, y, T, o),
    renderState: l()
  };
  return c && (v.onMount = (E) => c({ props: p, current: E, ...v }), v.onUpdate = (E) => c(E)), v;
}
const y1 = (o) => (l, c) => {
  const p = Ge.useContext(hg), y = Ge.useContext(mC), T = () => aN(o, l, p, y);
  return c ? T() : LL(T);
};
function iN(o, l, c, p) {
  const y = {}, T = p(o, {});
  for (const A in T)
    y[A] = rg(T[A]);
  let { initial: v, animate: E } = o;
  const R = mg(o), b = p1(o);
  l && b && !R && o.inherit !== !1 && (v === void 0 && (v = l.initial), E === void 0 && (E = l.animate));
  let k = c ? c.initial === !1 : !1;
  k = k || v === !1;
  const _ = k ? E : v;
  if (_ && typeof _ != "boolean" && !vg(_)) {
    const A = Array.isArray(_) ? _ : [_];
    for (let P = 0; P < A.length; P++) {
      const Y = RC(o, A[P]);
      if (Y) {
        const { transitionEnd: K, transition: q, ...te } = Y;
        for (const ie in te) {
          let oe = te[ie];
          if (Array.isArray(oe)) {
            const ye = k ? oe.length - 1 : 0;
            oe = oe[ye];
          }
          oe !== null && (y[ie] = oe);
        }
        for (const ie in K)
          y[ie] = K[ie];
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
], Nc = new Set(Md), g1 = (o) => (l) => typeof l == "string" && l.startsWith(o), S1 = /* @__PURE__ */ g1("--"), oN = /* @__PURE__ */ g1("var(--"), wC = (o) => oN(o) ? lN.test(o.split("/*")[0].trim()) : !1, lN = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, E1 = (o, l) => l && typeof o == "number" ? l.transform(o) : o, fs = (o, l, c) => c > l ? l : c < o ? o : c, Od = {
  test: (o) => typeof o == "number",
  parse: parseFloat,
  transform: (o) => o
}, Xh = {
  ...Od,
  transform: (o) => fs(0, 1, o)
}, eg = {
  ...Od,
  default: 1
}, tv = (o) => ({
  test: (l) => typeof l == "string" && l.endsWith(o) && l.split(" ").length === 1,
  parse: parseFloat,
  transform: (l) => `${l}${o}`
}), uu = /* @__PURE__ */ tv("deg"), hl = /* @__PURE__ */ tv("%"), it = /* @__PURE__ */ tv("px"), sN = /* @__PURE__ */ tv("vh"), uN = /* @__PURE__ */ tv("vw"), Ww = {
  ...hl,
  parse: (o) => hl.parse(o) / 100,
  transform: (o) => hl.transform(o * 100)
}, cN = {
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
}, fN = {
  rotate: uu,
  rotateX: uu,
  rotateY: uu,
  rotateZ: uu,
  scale: eg,
  scaleX: eg,
  scaleY: eg,
  scaleZ: eg,
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
  originX: Ww,
  originY: Ww,
  originZ: it
}, $w = {
  ...Od,
  transform: Math.round
}, bC = {
  ...cN,
  ...fN,
  zIndex: $w,
  size: it,
  // SVG
  fillOpacity: Xh,
  strokeOpacity: Xh,
  numOctaves: $w
}, dN = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, pN = Md.length;
function hN(o, l, c) {
  let p = "", y = !0;
  for (let T = 0; T < pN; T++) {
    const v = Md[T], E = o[v];
    if (E === void 0)
      continue;
    let R = !0;
    if (typeof E == "number" ? R = E === (v.startsWith("scale") ? 1 : 0) : R = parseFloat(E) === 0, !R || c) {
      const b = E1(E, bC[v]);
      if (!R) {
        y = !1;
        const k = dN[v] || v;
        p += `${k}(${b}) `;
      }
      c && (l[v] = b);
    }
  }
  return p = p.trim(), c ? p = c(l, y ? "" : p) : y && (p = "none"), p;
}
function DC(o, l, c) {
  const { style: p, vars: y, transformOrigin: T } = o;
  let v = !1, E = !1;
  for (const R in l) {
    const b = l[R];
    if (Nc.has(R)) {
      v = !0;
      continue;
    } else if (S1(R)) {
      y[R] = b;
      continue;
    } else {
      const k = E1(b, bC[R]);
      R.startsWith("origin") ? (E = !0, T[R] = k) : p[R] = k;
    }
  }
  if (l.transform || (v || c ? p.transform = hN(l, o.transform, c) : p.transform && (p.transform = "none")), E) {
    const { originX: R = "50%", originY: b = "50%", originZ: k = 0 } = T;
    p.transformOrigin = `${R} ${b} ${k}`;
  }
}
const vN = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, mN = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function yN(o, l, c = 1, p = 0, y = !0) {
  o.pathLength = 1;
  const T = y ? vN : mN;
  o[T.offset] = it.transform(-p);
  const v = it.transform(l), E = it.transform(c);
  o[T.array] = `${v} ${E}`;
}
function Gw(o, l, c) {
  return typeof o == "string" ? o : it.transform(l + c * o);
}
function gN(o, l, c) {
  const p = Gw(l, o.x, o.width), y = Gw(c, o.y, o.height);
  return `${p} ${y}`;
}
function _C(o, {
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
  if (DC(o, b, _), k) {
    o.style.viewBox && (o.attrs.viewBox = o.style.viewBox);
    return;
  }
  o.attrs = o.style, o.style = {};
  const { attrs: A, style: P, dimensions: Y } = o;
  A.transform && (Y && (P.transform = A.transform), delete A.transform), Y && (y !== void 0 || T !== void 0 || P.transform) && (P.transformOrigin = gN(Y, y !== void 0 ? y : 0.5, T !== void 0 ? T : 0.5)), l !== void 0 && (A.x = l), c !== void 0 && (A.y = c), p !== void 0 && (A.scale = p), v !== void 0 && yN(A, v, E, R, !1);
}
const kC = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), C1 = () => ({
  ...kC(),
  attrs: {}
}), MC = (o) => typeof o == "string" && o.toLowerCase() === "svg";
function T1(o, { style: l, vars: c }, p, y) {
  Object.assign(o.style, l, y && y.getProjectionStyles(p));
  for (const T in c)
    o.style.setProperty(T, c[T]);
}
const x1 = /* @__PURE__ */ new Set([
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
function R1(o, l, c, p) {
  T1(o, l, void 0, p);
  for (const y in l.attrs)
    o.setAttribute(x1.has(y) ? y : CC(y), l.attrs[y]);
}
const lg = {};
function SN(o) {
  Object.assign(lg, o);
}
function w1(o, { layout: l, layoutId: c }) {
  return Nc.has(o) || o.startsWith("origin") || (l || c !== void 0) && (!!lg[o] || o === "opacity");
}
function OC(o, l, c) {
  var p;
  const { style: y } = o, T = {};
  for (const v in y)
    (ma(y[v]) || l.style && ma(l.style[v]) || w1(v, o) || ((p = c == null ? void 0 : c.getValue(v)) === null || p === void 0 ? void 0 : p.liveStyle) !== void 0) && (T[v] = y[v]);
  return T;
}
function b1(o, l, c) {
  const p = OC(o, l, c);
  for (const y in o)
    if (ma(o[y]) || ma(l[y])) {
      const T = Md.indexOf(y) !== -1 ? "attr" + y.charAt(0).toUpperCase() + y.substring(1) : y;
      p[T] = o[y];
    }
  return p;
}
function EN(o, l) {
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
const Kw = ["x", "y", "width", "height", "cx", "cy", "r"], CN = {
  useVisualState: y1({
    scrapeMotionValuesFromProps: b1,
    createRenderState: C1,
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
        for (let E = 0; E < Kw.length; E++) {
          const R = Kw[E];
          o[R] !== l[R] && (v = !0);
        }
      v && Cn.read(() => {
        EN(c, p), Cn.render(() => {
          _C(p, y, MC(c.tagName), o.transformTemplate), R1(c, p);
        });
      });
    }
  })
}, TN = {
  useVisualState: y1({
    scrapeMotionValuesFromProps: OC,
    createRenderState: kC
  })
};
function D1(o, l, c) {
  for (const p in l)
    !ma(l[p]) && !w1(p, c) && (o[p] = l[p]);
}
function xN({ transformTemplate: o }, l) {
  return Ge.useMemo(() => {
    const c = kC();
    return DC(c, l, o), Object.assign({}, c.vars, c.style);
  }, [l]);
}
function RN(o, l) {
  const c = o.style || {}, p = {};
  return D1(p, c, o), Object.assign(p, xN(o, l)), p;
}
function wN(o, l) {
  const c = {}, p = RN(o, l);
  return o.drag && o.dragListener !== !1 && (c.draggable = !1, p.userSelect = p.WebkitUserSelect = p.WebkitTouchCallout = "none", p.touchAction = o.drag === !0 ? "none" : `pan-${o.drag === "x" ? "y" : "x"}`), o.tabIndex === void 0 && (o.onTap || o.onTapStart || o.whileTap) && (c.tabIndex = 0), c.style = p, c;
}
function bN(o, l, c, p) {
  const y = Ge.useMemo(() => {
    const T = C1();
    return _C(T, l, MC(p), o.transformTemplate), {
      ...T.attrs,
      style: { ...T.style }
    };
  }, [l]);
  if (o.style) {
    const T = {};
    D1(T, o.style, o), y.style = { ...T, ...y.style };
  }
  return y;
}
function DN(o = !1) {
  return (c, p, y, { latestValues: T }, v) => {
    const R = (xC(c) ? bN : wN)(p, T, v, c), b = HL(p, typeof c == "string", o), k = c !== Ge.Fragment ? { ...b, ...R, ref: y } : {}, { children: _ } = p, A = Ge.useMemo(() => ma(_) ? _.get() : _, [_]);
    return Ge.createElement(c, {
      ...k,
      children: A
    });
  };
}
function _N(o, l) {
  return function(p, { forwardMotionProps: y } = { forwardMotionProps: !1 }) {
    const v = {
      ...xC(p) ? CN : TN,
      preloadedFeatures: o,
      useRender: DN(y),
      createVisualElement: l,
      Component: p
    };
    return qL(v);
  };
}
function _1(o, l) {
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
function yg(o, l, c) {
  const p = o.getProps();
  return RC(p, l, c !== void 0 ? c : p.custom, o);
}
const kN = /* @__PURE__ */ gC(() => window.ScrollTimeline !== void 0);
class MN {
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
      if (kN() && y.attachTimeline)
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
class ON extends MN {
  then(l, c) {
    return Promise.all(this.animations).then(l).catch(c);
  }
}
function AC(o, l) {
  return o ? o[l] || o.default || o : void 0;
}
const nC = 2e4;
function k1(o) {
  let l = 0;
  const c = 50;
  let p = o.next(l);
  for (; !p.done && l < nC; )
    l += c, p = o.next(l);
  return l >= nC ? 1 / 0 : l;
}
function LC(o) {
  return typeof o == "function";
}
function Qw(o, l) {
  o.timeline = l, o.onfinish = null;
}
const NC = (o) => Array.isArray(o) && typeof o[0] == "number", AN = {
  linearEasing: void 0
};
function LN(o, l) {
  const c = /* @__PURE__ */ gC(o);
  return () => {
    var p;
    return (p = AN[l]) !== null && p !== void 0 ? p : c();
  };
}
const sg = /* @__PURE__ */ LN(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), M1 = (o, l, c = 10) => {
  let p = "";
  const y = Math.max(Math.round(l / c), 2);
  for (let T = 0; T < y; T++)
    p += o(/* @__PURE__ */ bd(0, y - 1, T)) + ", ";
  return `linear(${p.substring(0, p.length - 2)})`;
};
function O1(o) {
  return !!(typeof o == "function" && sg() || !o || typeof o == "string" && (o in rC || sg()) || NC(o) || Array.isArray(o) && o.every(O1));
}
const Hh = ([o, l, c, p]) => `cubic-bezier(${o}, ${l}, ${c}, ${p})`, rC = {
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
function A1(o, l) {
  if (o)
    return typeof o == "function" && sg() ? M1(o, l) : NC(o) ? Hh(o) : Array.isArray(o) ? o.map((c) => A1(c, l) || rC.easeOut) : rC[o];
}
const bo = {
  x: !1,
  y: !1
};
function L1() {
  return bo.x || bo.y;
}
function NN(o, l, c) {
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
function N1(o, l) {
  const c = NN(o), p = new AbortController(), y = {
    passive: !0,
    ...l,
    signal: p.signal
  };
  return [c, y, () => p.abort()];
}
function Xw(o) {
  return (l) => {
    l.pointerType === "touch" || L1() || o(l);
  };
}
function PN(o, l, c = {}) {
  const [p, y, T] = N1(o, c), v = Xw((E) => {
    const { target: R } = E, b = l(E);
    if (typeof b != "function" || !R)
      return;
    const k = Xw((_) => {
      b(_), R.removeEventListener("pointerleave", k);
    });
    R.addEventListener("pointerleave", k, y);
  });
  return p.forEach((E) => {
    E.addEventListener("pointerenter", v, y);
  }), T;
}
const P1 = (o, l) => l ? o === l ? !0 : P1(o, l.parentElement) : !1, PC = (o) => o.pointerType === "mouse" ? typeof o.button != "number" || o.button <= 0 : o.isPrimary !== !1, UN = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function VN(o) {
  return UN.has(o.tagName) || o.tabIndex !== -1;
}
const Ih = /* @__PURE__ */ new WeakSet();
function qw(o) {
  return (l) => {
    l.key === "Enter" && o(l);
  };
}
function FE(o, l) {
  o.dispatchEvent(new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 }));
}
const zN = (o, l) => {
  const c = o.currentTarget;
  if (!c)
    return;
  const p = qw(() => {
    if (Ih.has(c))
      return;
    FE(c, "down");
    const y = qw(() => {
      FE(c, "up");
    }), T = () => FE(c, "cancel");
    c.addEventListener("keyup", y, l), c.addEventListener("blur", T, l);
  });
  c.addEventListener("keydown", p, l), c.addEventListener("blur", () => c.removeEventListener("keydown", p), l);
};
function Zw(o) {
  return PC(o) && !L1();
}
function FN(o, l, c = {}) {
  const [p, y, T] = N1(o, c), v = (E) => {
    const R = E.currentTarget;
    if (!Zw(E) || Ih.has(R))
      return;
    Ih.add(R);
    const b = l(E), k = (P, Y) => {
      window.removeEventListener("pointerup", _), window.removeEventListener("pointercancel", A), !(!Zw(P) || !Ih.has(R)) && (Ih.delete(R), typeof b == "function" && b(P, { success: Y }));
    }, _ = (P) => {
      k(P, c.useGlobalTarget || P1(R, P.target));
    }, A = (P) => {
      k(P, !1);
    };
    window.addEventListener("pointerup", _, y), window.addEventListener("pointercancel", A, y);
  };
  return p.forEach((E) => {
    !VN(E) && E.getAttribute("tabindex") === null && (E.tabIndex = 0), (c.useGlobalTarget ? window : E).addEventListener("pointerdown", v, y), E.addEventListener("focus", (b) => zN(b, y), y);
  }), T;
}
function jN(o) {
  return o === "x" || o === "y" ? bo[o] ? null : (bo[o] = !0, () => {
    bo[o] = !1;
  }) : bo.x || bo.y ? null : (bo.x = bo.y = !0, () => {
    bo.x = bo.y = !1;
  });
}
const U1 = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Md
]);
let ag;
function BN() {
  ag = void 0;
}
const vl = {
  now: () => (ag === void 0 && vl.set(Xr.isProcessing || UL.useManualTiming ? Xr.timestamp : performance.now()), ag),
  set: (o) => {
    ag = o, queueMicrotask(BN);
  }
};
function UC(o, l) {
  o.indexOf(l) === -1 && o.push(l);
}
function VC(o, l) {
  const c = o.indexOf(l);
  c > -1 && o.splice(c, 1);
}
class zC {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return UC(this.subscriptions, l), () => VC(this.subscriptions, l);
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
function V1(o, l) {
  return l ? o * (1e3 / l) : 0;
}
const Jw = 30, HN = (o) => !isNaN(parseFloat(o));
class IN {
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
    this.current = l, this.updatedAt = vl.now(), this.canTrackVelocity === null && l !== void 0 && (this.canTrackVelocity = HN(this.current));
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
    this.events[l] || (this.events[l] = new zC());
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
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || l - this.updatedAt > Jw)
      return 0;
    const c = Math.min(this.updatedAt - this.prevUpdatedAt, Jw);
    return V1(parseFloat(this.current) - parseFloat(this.prevFrameValue), c);
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
  return new IN(o, l);
}
function YN(o, l, c) {
  o.hasValue(l) ? o.getValue(l).set(c) : o.addValue(l, qh(c));
}
function WN(o, l) {
  const c = yg(o, l);
  let { transitionEnd: p = {}, transition: y = {}, ...T } = c || {};
  T = { ...T, ...p };
  for (const v in T) {
    const E = rN(T[v]);
    YN(o, v, E);
  }
}
function $N(o) {
  return !!(ma(o) && o.add);
}
function aC(o, l) {
  const c = o.getValue("willChange");
  if ($N(c))
    return c.add(l);
}
function z1(o) {
  return o.props[h1];
}
const F1 = (o, l, c) => (((1 - 3 * c + 3 * l) * o + (3 * c - 6 * l)) * o + 3 * l) * o, GN = 1e-7, KN = 12;
function QN(o, l, c, p, y) {
  let T, v, E = 0;
  do
    v = l + (c - l) / 2, T = F1(v, p, y) - o, T > 0 ? c = v : l = v;
  while (Math.abs(T) > GN && ++E < KN);
  return v;
}
function nv(o, l, c, p) {
  if (o === l && c === p)
    return Ja;
  const y = (T) => QN(T, 0, 1, o, c);
  return (T) => T === 0 || T === 1 ? T : F1(y(T), l, p);
}
const j1 = (o) => (l) => l <= 0.5 ? o(2 * l) / 2 : (2 - o(2 * (1 - l))) / 2, B1 = (o) => (l) => 1 - o(1 - l), H1 = /* @__PURE__ */ nv(0.33, 1.53, 0.69, 0.99), FC = /* @__PURE__ */ B1(H1), I1 = /* @__PURE__ */ j1(FC), Y1 = (o) => (o *= 2) < 1 ? 0.5 * FC(o) : 0.5 * (2 - Math.pow(2, -10 * (o - 1))), jC = (o) => 1 - Math.sin(Math.acos(o)), W1 = B1(jC), $1 = j1(jC), G1 = (o) => /^0[^.\s]+$/u.test(o);
function XN(o) {
  return typeof o == "number" ? o === 0 : o !== null ? o === "none" || o === "0" || G1(o) : !0;
}
const Wh = (o) => Math.round(o * 1e5) / 1e5, BC = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function qN(o) {
  return o == null;
}
const ZN = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, HC = (o, l) => (c) => !!(typeof c == "string" && ZN.test(c) && c.startsWith(o) || l && !qN(c) && Object.prototype.hasOwnProperty.call(c, l)), K1 = (o, l, c) => (p) => {
  if (typeof p != "string")
    return p;
  const [y, T, v, E] = p.match(BC);
  return {
    [o]: parseFloat(y),
    [l]: parseFloat(T),
    [c]: parseFloat(v),
    alpha: E !== void 0 ? parseFloat(E) : 1
  };
}, JN = (o) => fs(0, 255, o), jE = {
  ...Od,
  transform: (o) => Math.round(JN(o))
}, Ac = {
  test: /* @__PURE__ */ HC("rgb", "red"),
  parse: /* @__PURE__ */ K1("red", "green", "blue"),
  transform: ({ red: o, green: l, blue: c, alpha: p = 1 }) => "rgba(" + jE.transform(o) + ", " + jE.transform(l) + ", " + jE.transform(c) + ", " + Wh(Xh.transform(p)) + ")"
};
function eP(o) {
  let l = "", c = "", p = "", y = "";
  return o.length > 5 ? (l = o.substring(1, 3), c = o.substring(3, 5), p = o.substring(5, 7), y = o.substring(7, 9)) : (l = o.substring(1, 2), c = o.substring(2, 3), p = o.substring(3, 4), y = o.substring(4, 5), l += l, c += c, p += p, y += y), {
    red: parseInt(l, 16),
    green: parseInt(c, 16),
    blue: parseInt(p, 16),
    alpha: y ? parseInt(y, 16) / 255 : 1
  };
}
const iC = {
  test: /* @__PURE__ */ HC("#"),
  parse: eP,
  transform: Ac.transform
}, Td = {
  test: /* @__PURE__ */ HC("hsl", "hue"),
  parse: /* @__PURE__ */ K1("hue", "saturation", "lightness"),
  transform: ({ hue: o, saturation: l, lightness: c, alpha: p = 1 }) => "hsla(" + Math.round(o) + ", " + hl.transform(Wh(l)) + ", " + hl.transform(Wh(c)) + ", " + Wh(Xh.transform(p)) + ")"
}, va = {
  test: (o) => Ac.test(o) || iC.test(o) || Td.test(o),
  parse: (o) => Ac.test(o) ? Ac.parse(o) : Td.test(o) ? Td.parse(o) : iC.parse(o),
  transform: (o) => typeof o == "string" ? o : o.hasOwnProperty("red") ? Ac.transform(o) : Td.transform(o)
}, tP = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function nP(o) {
  var l, c;
  return isNaN(o) && typeof o == "string" && (((l = o.match(BC)) === null || l === void 0 ? void 0 : l.length) || 0) + (((c = o.match(tP)) === null || c === void 0 ? void 0 : c.length) || 0) > 0;
}
const Q1 = "number", X1 = "color", rP = "var", aP = "var(", eb = "${}", iP = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Zh(o) {
  const l = o.toString(), c = [], p = {
    color: [],
    number: [],
    var: []
  }, y = [];
  let T = 0;
  const E = l.replace(iP, (R) => (va.test(R) ? (p.color.push(T), y.push(X1), c.push(va.parse(R))) : R.startsWith(aP) ? (p.var.push(T), y.push(rP), c.push(R)) : (p.number.push(T), y.push(Q1), c.push(parseFloat(R))), ++T, eb)).split(eb);
  return { values: c, split: E, indexes: p, types: y };
}
function q1(o) {
  return Zh(o).values;
}
function Z1(o) {
  const { split: l, types: c } = Zh(o), p = l.length;
  return (y) => {
    let T = "";
    for (let v = 0; v < p; v++)
      if (T += l[v], y[v] !== void 0) {
        const E = c[v];
        E === Q1 ? T += Wh(y[v]) : E === X1 ? T += va.transform(y[v]) : T += y[v];
      }
    return T;
  };
}
const oP = (o) => typeof o == "number" ? 0 : o;
function lP(o) {
  const l = q1(o);
  return Z1(o)(l.map(oP));
}
const du = {
  test: nP,
  parse: q1,
  createTransformer: Z1,
  getAnimatableNone: lP
}, sP = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function uP(o) {
  const [l, c] = o.slice(0, -1).split("(");
  if (l === "drop-shadow")
    return o;
  const [p] = c.match(BC) || [];
  if (!p)
    return o;
  const y = c.replace(p, "");
  let T = sP.has(l) ? 1 : 0;
  return p !== c && (T *= 100), l + "(" + T + y + ")";
}
const cP = /\b([a-z-]*)\(.*?\)/gu, oC = {
  ...du,
  getAnimatableNone: (o) => {
    const l = o.match(cP);
    return l ? l.map(uP).join(" ") : o;
  }
}, fP = {
  ...bC,
  // Color props
  color: va,
  backgroundColor: va,
  outlineColor: va,
  fill: va,
  stroke: va,
  // Border props
  borderColor: va,
  borderTopColor: va,
  borderRightColor: va,
  borderBottomColor: va,
  borderLeftColor: va,
  filter: oC,
  WebkitFilter: oC
}, IC = (o) => fP[o];
function J1(o, l) {
  let c = IC(o);
  return c !== oC && (c = du), c.getAnimatableNone ? c.getAnimatableNone(l) : void 0;
}
const dP = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function pP(o, l, c) {
  let p = 0, y;
  for (; p < o.length && !y; ) {
    const T = o[p];
    typeof T == "string" && !dP.has(T) && Zh(T).values.length && (y = o[p]), p++;
  }
  if (y && c)
    for (const T of l)
      o[T] = J1(c, y);
}
const tb = (o) => o === Od || o === it, nb = (o, l) => parseFloat(o.split(", ")[l]), rb = (o, l) => (c, { transform: p }) => {
  if (p === "none" || !p)
    return 0;
  const y = p.match(/^matrix3d\((.+)\)$/u);
  if (y)
    return nb(y[1], l);
  {
    const T = p.match(/^matrix\((.+)\)$/u);
    return T ? nb(T[1], o) : 0;
  }
}, hP = /* @__PURE__ */ new Set(["x", "y", "z"]), vP = Md.filter((o) => !hP.has(o));
function mP(o) {
  const l = [];
  return vP.forEach((c) => {
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
  x: rb(4, 13),
  y: rb(5, 14)
};
_d.translateX = _d.x;
_d.translateY = _d.y;
const Lc = /* @__PURE__ */ new Set();
let lC = !1, sC = !1;
function eD() {
  if (sC) {
    const o = Array.from(Lc).filter((p) => p.needsMeasurement), l = new Set(o.map((p) => p.element)), c = /* @__PURE__ */ new Map();
    l.forEach((p) => {
      const y = mP(p);
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
  sC = !1, lC = !1, Lc.forEach((o) => o.complete()), Lc.clear();
}
function tD() {
  Lc.forEach((o) => {
    o.readKeyframes(), o.needsMeasurement && (sC = !0);
  });
}
function yP() {
  tD(), eD();
}
class YC {
  constructor(l, c, p, y, T, v = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...l], this.onComplete = c, this.name = p, this.motionValue = y, this.element = T, this.isAsync = v;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (Lc.add(this), lC || (lC = !0, Cn.read(tD), Cn.resolveKeyframes(eD))) : (this.readKeyframes(), this.complete());
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
const nD = (o) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(o), gP = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function SP(o) {
  const l = gP.exec(o);
  if (!l)
    return [,];
  const [, c, p, y] = l;
  return [`--${c ?? p}`, y];
}
const EP = 4;
function rD(o, l, c = 1) {
  cu(c <= EP, `Max CSS variable fallback depth detected in property "${o}". This may indicate a circular fallback dependency.`);
  const [p, y] = SP(o);
  if (!p)
    return;
  const T = window.getComputedStyle(l).getPropertyValue(p);
  if (T) {
    const v = T.trim();
    return nD(v) ? parseFloat(v) : v;
  }
  return wC(y) ? rD(y, l, c + 1) : y;
}
const aD = (o) => (l) => l.test(o), CP = {
  test: (o) => o === "auto",
  parse: (o) => o
}, iD = [Od, it, hl, uu, uN, sN, CP], ab = (o) => iD.find(aD(o));
class oD extends YC {
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
      if (typeof b == "string" && (b = b.trim(), wC(b))) {
        const k = rD(b, c.current);
        k !== void 0 && (l[R] = k), R === l.length - 1 && (this.finalKeyframe = b);
      }
    }
    if (this.resolveNoneKeyframes(), !U1.has(p) || l.length !== 2)
      return;
    const [y, T] = l, v = ab(y), E = ab(T);
    if (v !== E)
      if (tb(v) && tb(E))
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
      XN(l[y]) && p.push(y);
    p.length && pP(l, p, c);
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
const ib = (o, l) => l === "zIndex" ? !1 : !!(typeof o == "number" || Array.isArray(o) || typeof o == "string" && // It's animatable if we have a string
(du.test(o) || o === "0") && // And it contains numbers and/or colors
!o.startsWith("url("));
function TP(o) {
  const l = o[0];
  if (o.length === 1)
    return !0;
  for (let c = 0; c < o.length; c++)
    if (o[c] !== l)
      return !0;
}
function xP(o, l, c, p) {
  const y = o[0];
  if (y === null)
    return !1;
  if (l === "display" || l === "visibility")
    return !0;
  const T = o[o.length - 1], v = ib(y, l), E = ib(T, l);
  return kd(v === E, `You are trying to animate ${l} from "${y}" to "${T}". ${y} is not an animatable value - to enable this animation set ${y} to a value animatable to ${T} via the \`style\` property.`), !v || !E ? !1 : TP(o) || (c === "spring" || LC(c)) && p;
}
const RP = (o) => o !== null;
function gg(o, { repeat: l, repeatType: c = "loop" }, p) {
  const y = o.filter(RP), T = l && c !== "loop" && l % 2 === 1 ? 0 : y.length - 1;
  return !T || p === void 0 ? y[T] : p;
}
const wP = 40;
class lD {
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
    return this.resolvedAt ? this.resolvedAt - this.createdAt > wP ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && yP(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(l, c) {
    this.resolvedAt = vl.now(), this.hasAttemptedResolve = !0;
    const { name: p, type: y, velocity: T, delay: v, onComplete: E, onUpdate: R, isGenerator: b } = this.options;
    if (!b && !xP(l, p, y, T))
      if (v)
        this.options.duration = 0;
      else {
        R && R(gg(l, this.options, c)), E && E(), this.resolveFinishedPromise();
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
function BE(o, l, c) {
  return c < 0 && (c += 1), c > 1 && (c -= 1), c < 1 / 6 ? o + (l - o) * 6 * c : c < 1 / 2 ? l : c < 2 / 3 ? o + (l - o) * (2 / 3 - c) * 6 : o;
}
function bP({ hue: o, saturation: l, lightness: c, alpha: p }) {
  o /= 360, l /= 100, c /= 100;
  let y = 0, T = 0, v = 0;
  if (!l)
    y = T = v = c;
  else {
    const E = c < 0.5 ? c * (1 + l) : c + l - c * l, R = 2 * c - E;
    y = BE(R, E, o + 1 / 3), T = BE(R, E, o), v = BE(R, E, o - 1 / 3);
  }
  return {
    red: Math.round(y * 255),
    green: Math.round(T * 255),
    blue: Math.round(v * 255),
    alpha: p
  };
}
function ug(o, l) {
  return (c) => c > 0 ? l : o;
}
const HE = (o, l, c) => {
  const p = o * o, y = c * (l * l - p) + p;
  return y < 0 ? 0 : Math.sqrt(y);
}, DP = [iC, Ac, Td], _P = (o) => DP.find((l) => l.test(o));
function ob(o) {
  const l = _P(o);
  if (kd(!!l, `'${o}' is not an animatable color. Use the equivalent color code instead.`), !l)
    return !1;
  let c = l.parse(o);
  return l === Td && (c = bP(c)), c;
}
const lb = (o, l) => {
  const c = ob(o), p = ob(l);
  if (!c || !p)
    return ug(o, l);
  const y = { ...c };
  return (T) => (y.red = HE(c.red, p.red, T), y.green = HE(c.green, p.green, T), y.blue = HE(c.blue, p.blue, T), y.alpha = Ln(c.alpha, p.alpha, T), Ac.transform(y));
}, kP = (o, l) => (c) => l(o(c)), rv = (...o) => o.reduce(kP), uC = /* @__PURE__ */ new Set(["none", "hidden"]);
function MP(o, l) {
  return uC.has(o) ? (c) => c <= 0 ? o : l : (c) => c >= 1 ? l : o;
}
function OP(o, l) {
  return (c) => Ln(o, l, c);
}
function WC(o) {
  return typeof o == "number" ? OP : typeof o == "string" ? wC(o) ? ug : va.test(o) ? lb : NP : Array.isArray(o) ? sD : typeof o == "object" ? va.test(o) ? lb : AP : ug;
}
function sD(o, l) {
  const c = [...o], p = c.length, y = o.map((T, v) => WC(T)(T, l[v]));
  return (T) => {
    for (let v = 0; v < p; v++)
      c[v] = y[v](T);
    return c;
  };
}
function AP(o, l) {
  const c = { ...o, ...l }, p = {};
  for (const y in c)
    o[y] !== void 0 && l[y] !== void 0 && (p[y] = WC(o[y])(o[y], l[y]));
  return (y) => {
    for (const T in p)
      c[T] = p[T](y);
    return c;
  };
}
function LP(o, l) {
  var c;
  const p = [], y = { color: 0, var: 0, number: 0 };
  for (let T = 0; T < l.values.length; T++) {
    const v = l.types[T], E = o.indexes[v][y[v]], R = (c = o.values[E]) !== null && c !== void 0 ? c : 0;
    p[T] = R, y[v]++;
  }
  return p;
}
const NP = (o, l) => {
  const c = du.createTransformer(l), p = Zh(o), y = Zh(l);
  return p.indexes.var.length === y.indexes.var.length && p.indexes.color.length === y.indexes.color.length && p.indexes.number.length >= y.indexes.number.length ? uC.has(o) && !y.values.length || uC.has(l) && !p.values.length ? MP(o, l) : rv(sD(LP(p, y), y.values), c) : (kd(!0, `Complex values '${o}' and '${l}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), ug(o, l));
};
function uD(o, l, c) {
  return typeof o == "number" && typeof l == "number" && typeof c == "number" ? Ln(o, l, c) : WC(o)(o, l);
}
const PP = 5;
function cD(o, l, c) {
  const p = Math.max(l - PP, 0);
  return V1(c - o(p), l - p);
}
const An = {
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
}, IE = 1e-3;
function UP({ duration: o = An.duration, bounce: l = An.bounce, velocity: c = An.velocity, mass: p = An.mass }) {
  let y, T;
  kd(o <= /* @__PURE__ */ pl(An.maxDuration), "Spring duration must be 10 seconds or less");
  let v = 1 - l;
  v = fs(An.minDamping, An.maxDamping, v), o = fs(An.minDuration, An.maxDuration, /* @__PURE__ */ cs(o)), v < 1 ? (y = (b) => {
    const k = b * v, _ = k * o, A = k - c, P = cC(b, v), Y = Math.exp(-_);
    return IE - A / P * Y;
  }, T = (b) => {
    const _ = b * v * o, A = _ * c + c, P = Math.pow(v, 2) * Math.pow(b, 2) * o, Y = Math.exp(-_), K = cC(Math.pow(b, 2), v);
    return (-y(b) + IE > 0 ? -1 : 1) * ((A - P) * Y) / K;
  }) : (y = (b) => {
    const k = Math.exp(-b * o), _ = (b - c) * o + 1;
    return -IE + k * _;
  }, T = (b) => {
    const k = Math.exp(-b * o), _ = (c - b) * (o * o);
    return k * _;
  });
  const E = 5 / o, R = zP(y, T, E);
  if (o = /* @__PURE__ */ pl(o), isNaN(R))
    return {
      stiffness: An.stiffness,
      damping: An.damping,
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
const VP = 12;
function zP(o, l, c) {
  let p = c;
  for (let y = 1; y < VP; y++)
    p = p - o(p) / l(p);
  return p;
}
function cC(o, l) {
  return o * Math.sqrt(1 - l * l);
}
const FP = ["duration", "bounce"], jP = ["stiffness", "damping", "mass"];
function sb(o, l) {
  return l.some((c) => o[c] !== void 0);
}
function BP(o) {
  let l = {
    velocity: An.velocity,
    stiffness: An.stiffness,
    damping: An.damping,
    mass: An.mass,
    isResolvedFromDuration: !1,
    ...o
  };
  if (!sb(o, jP) && sb(o, FP))
    if (o.visualDuration) {
      const c = o.visualDuration, p = 2 * Math.PI / (c * 1.2), y = p * p, T = 2 * fs(0.05, 1, 1 - (o.bounce || 0)) * Math.sqrt(y);
      l = {
        ...l,
        mass: An.mass,
        stiffness: y,
        damping: T
      };
    } else {
      const c = UP(o);
      l = {
        ...l,
        ...c,
        mass: An.mass
      }, l.isResolvedFromDuration = !0;
    }
  return l;
}
function fD(o = An.visualDuration, l = An.bounce) {
  const c = typeof o != "object" ? {
    visualDuration: o,
    keyframes: [0, 1],
    bounce: l
  } : o;
  let { restSpeed: p, restDelta: y } = c;
  const T = c.keyframes[0], v = c.keyframes[c.keyframes.length - 1], E = { done: !1, value: T }, { stiffness: R, damping: b, mass: k, duration: _, velocity: A, isResolvedFromDuration: P } = BP({
    ...c,
    velocity: -/* @__PURE__ */ cs(c.velocity || 0)
  }), Y = A || 0, K = b / (2 * Math.sqrt(R * k)), q = v - T, te = /* @__PURE__ */ cs(Math.sqrt(R / k)), ie = Math.abs(q) < 5;
  p || (p = ie ? An.restSpeed.granular : An.restSpeed.default), y || (y = ie ? An.restDelta.granular : An.restDelta.default);
  let oe;
  if (K < 1) {
    const ne = cC(te, K);
    oe = (ve) => {
      const Ee = Math.exp(-K * te * ve);
      return v - Ee * ((Y + K * te * q) / ne * Math.sin(ne * ve) + q * Math.cos(ne * ve));
    };
  } else if (K === 1)
    oe = (ne) => v - Math.exp(-te * ne) * (q + (Y + te * q) * ne);
  else {
    const ne = te * Math.sqrt(K * K - 1);
    oe = (ve) => {
      const Ee = Math.exp(-K * te * ve), De = Math.min(ne * ve, 300);
      return v - Ee * ((Y + K * te * q) * Math.sinh(De) + ne * q * Math.cosh(De)) / ne;
    };
  }
  const ye = {
    calculatedDuration: P && _ || null,
    next: (ne) => {
      const ve = oe(ne);
      if (P)
        E.done = ne >= _;
      else {
        let Ee = 0;
        K < 1 && (Ee = ne === 0 ? /* @__PURE__ */ pl(Y) : cD(oe, ne, ve));
        const De = Math.abs(Ee) <= p, Ne = Math.abs(v - ve) <= y;
        E.done = De && Ne;
      }
      return E.value = E.done ? v : ve, E;
    },
    toString: () => {
      const ne = Math.min(k1(ye), nC), ve = M1((Ee) => ye.next(ne * Ee).value, ne, 30);
      return ne + "ms " + ve;
    }
  };
  return ye;
}
function ub({ keyframes: o, velocity: l = 0, power: c = 0.8, timeConstant: p = 325, bounceDamping: y = 10, bounceStiffness: T = 500, modifyTarget: v, min: E, max: R, restDelta: b = 0.5, restSpeed: k }) {
  const _ = o[0], A = {
    done: !1,
    value: _
  }, P = (De) => E !== void 0 && De < E || R !== void 0 && De > R, Y = (De) => E === void 0 ? R : R === void 0 || Math.abs(E - De) < Math.abs(R - De) ? E : R;
  let K = c * l;
  const q = _ + K, te = v === void 0 ? q : v(q);
  te !== q && (K = te - _);
  const ie = (De) => -K * Math.exp(-De / p), oe = (De) => te + ie(De), ye = (De) => {
    const Ne = ie(De), Oe = oe(De);
    A.done = Math.abs(Ne) <= b, A.value = A.done ? te : Oe;
  };
  let ne, ve;
  const Ee = (De) => {
    P(A.value) && (ne = De, ve = fD({
      keyframes: [A.value, Y(A.value)],
      velocity: cD(oe, De, A.value),
      // TODO: This should be passing * 1000
      damping: y,
      stiffness: T,
      restDelta: b,
      restSpeed: k
    }));
  };
  return Ee(0), {
    calculatedDuration: null,
    next: (De) => {
      let Ne = !1;
      return !ve && ne === void 0 && (Ne = !0, ye(De), Ee(De)), ne !== void 0 && De >= ne ? ve.next(De - ne) : (!Ne && ye(De), A);
    }
  };
}
const HP = /* @__PURE__ */ nv(0.42, 0, 1, 1), IP = /* @__PURE__ */ nv(0, 0, 0.58, 1), dD = /* @__PURE__ */ nv(0.42, 0, 0.58, 1), YP = (o) => Array.isArray(o) && typeof o[0] != "number", cb = {
  linear: Ja,
  easeIn: HP,
  easeInOut: dD,
  easeOut: IP,
  circIn: jC,
  circInOut: $1,
  circOut: W1,
  backIn: FC,
  backInOut: I1,
  backOut: H1,
  anticipate: Y1
}, fb = (o) => {
  if (NC(o)) {
    cu(o.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [l, c, p, y] = o;
    return nv(l, c, p, y);
  } else if (typeof o == "string")
    return cu(cb[o] !== void 0, `Invalid easing type '${o}'`), cb[o];
  return o;
};
function WP(o, l, c) {
  const p = [], y = c || uD, T = o.length - 1;
  for (let v = 0; v < T; v++) {
    let E = y(o[v], o[v + 1]);
    if (l) {
      const R = Array.isArray(l) ? l[v] || Ja : l;
      E = rv(R, E);
    }
    p.push(E);
  }
  return p;
}
function $P(o, l, { clamp: c = !0, ease: p, mixer: y } = {}) {
  const T = o.length;
  if (cu(T === l.length, "Both input and output ranges must be the same length"), T === 1)
    return () => l[0];
  if (T === 2 && l[0] === l[1])
    return () => l[1];
  const v = o[0] === o[1];
  o[0] > o[T - 1] && (o = [...o].reverse(), l = [...l].reverse());
  const E = WP(l, p, y), R = E.length, b = (k) => {
    if (v && k < o[0])
      return l[0];
    let _ = 0;
    if (R > 1)
      for (; _ < o.length - 2 && !(k < o[_ + 1]); _++)
        ;
    const A = /* @__PURE__ */ bd(o[_], o[_ + 1], k);
    return E[_](A);
  };
  return c ? (k) => b(fs(o[0], o[T - 1], k)) : b;
}
function GP(o, l) {
  const c = o[o.length - 1];
  for (let p = 1; p <= l; p++) {
    const y = /* @__PURE__ */ bd(0, l, p);
    o.push(Ln(c, 1, y));
  }
}
function KP(o) {
  const l = [0];
  return GP(l, o.length - 1), l;
}
function QP(o, l) {
  return o.map((c) => c * l);
}
function XP(o, l) {
  return o.map(() => l || dD).splice(0, o.length - 1);
}
function cg({ duration: o = 300, keyframes: l, times: c, ease: p = "easeInOut" }) {
  const y = YP(p) ? p.map(fb) : fb(p), T = {
    done: !1,
    value: l[0]
  }, v = QP(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    c && c.length === l.length ? c : KP(l),
    o
  ), E = $P(v, l, {
    ease: Array.isArray(y) ? y : XP(l, y)
  });
  return {
    calculatedDuration: o,
    next: (R) => (T.value = E(R), T.done = R >= o, T)
  };
}
const qP = (o) => {
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
}, ZP = {
  decay: ub,
  inertia: ub,
  tween: cg,
  keyframes: cg,
  spring: fD
}, JP = (o) => o / 100;
class $C extends lD {
  constructor(l) {
    super(l), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: R } = this.options;
      R && R();
    };
    const { name: c, motionValue: p, element: y, keyframes: T } = this.options, v = (y == null ? void 0 : y.KeyframeResolver) || YC, E = (R, b) => this.onKeyframesResolved(R, b);
    this.resolver = new v(T, E, c, p, y), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(l) {
    const { type: c = "keyframes", repeat: p = 0, repeatDelay: y = 0, repeatType: T, velocity: v = 0 } = this.options, E = LC(c) ? c : ZP[c] || cg;
    let R, b;
    E !== cg && typeof l[0] != "number" && (process.env.NODE_ENV !== "production" && cu(l.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${l}`), R = rv(JP, uD(l[0], l[1])), l = [0, 100]);
    const k = E({ ...this.options, keyframes: l });
    T === "mirror" && (b = E({
      ...this.options,
      keyframes: [...l].reverse(),
      velocity: -v
    })), k.calculatedDuration === null && (k.calculatedDuration = k1(k));
    const { calculatedDuration: _ } = k, A = _ + y, P = A * (p + 1) - y;
    return {
      generator: k,
      mirroredGenerator: b,
      mapPercentToKeyframes: R,
      calculatedDuration: _,
      resolvedDuration: A,
      totalDuration: P
    };
  }
  onPostResolved() {
    const { autoplay: l = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !l ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(l, c = !1) {
    const { resolved: p } = this;
    if (!p) {
      const { keyframes: De } = this.options;
      return { done: !0, value: De[De.length - 1] };
    }
    const { finalKeyframe: y, generator: T, mirroredGenerator: v, mapPercentToKeyframes: E, keyframes: R, calculatedDuration: b, totalDuration: k, resolvedDuration: _ } = p;
    if (this.startTime === null)
      return T.next(0);
    const { delay: A, repeat: P, repeatType: Y, repeatDelay: K, onUpdate: q } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, l) : this.speed < 0 && (this.startTime = Math.min(l - k / this.speed, this.startTime)), c ? this.currentTime = l : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(l - this.startTime) * this.speed;
    const te = this.currentTime - A * (this.speed >= 0 ? 1 : -1), ie = this.speed >= 0 ? te < 0 : te > k;
    this.currentTime = Math.max(te, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = k);
    let oe = this.currentTime, ye = T;
    if (P) {
      const De = Math.min(this.currentTime, k) / _;
      let Ne = Math.floor(De), Oe = De % 1;
      !Oe && De >= 1 && (Oe = 1), Oe === 1 && Ne--, Ne = Math.min(Ne, P + 1), !!(Ne % 2) && (Y === "reverse" ? (Oe = 1 - Oe, K && (Oe -= K / _)) : Y === "mirror" && (ye = v)), oe = fs(0, 1, Oe) * _;
    }
    const ne = ie ? { done: !1, value: R[0] } : ye.next(oe);
    E && (ne.value = E(ne.value));
    let { done: ve } = ne;
    !ie && b !== null && (ve = this.speed >= 0 ? this.currentTime >= k : this.currentTime <= 0);
    const Ee = this.holdTime === null && (this.state === "finished" || this.state === "running" && ve);
    return Ee && y !== void 0 && (ne.value = gg(R, this.options, y)), q && q(ne.value), Ee && this.finish(), ne;
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
    const { driver: l = qP, onPlay: c, startTime: p } = this.options;
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
const e2 = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function t2(o, l, c, { delay: p = 0, duration: y = 300, repeat: T = 0, repeatType: v = "loop", ease: E = "easeInOut", times: R } = {}) {
  const b = { [l]: c };
  R && (b.offset = R);
  const k = A1(E, y);
  return Array.isArray(k) && (b.easing = k), o.animate(b, {
    delay: p,
    duration: y,
    easing: Array.isArray(k) ? "linear" : k,
    fill: "both",
    iterations: T + 1,
    direction: v === "reverse" ? "alternate" : "normal"
  });
}
const n2 = /* @__PURE__ */ gC(() => Object.hasOwnProperty.call(Element.prototype, "animate")), fg = 10, r2 = 2e4;
function a2(o) {
  return LC(o.type) || o.type === "spring" || !O1(o.ease);
}
function i2(o, l) {
  const c = new $C({
    ...l,
    keyframes: o,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let p = { done: !1, value: o[0] };
  const y = [];
  let T = 0;
  for (; !p.done && T < r2; )
    p = c.sample(T), y.push(p.value), T += fg;
  return {
    times: void 0,
    keyframes: y,
    duration: T - fg,
    ease: "linear"
  };
}
const pD = {
  anticipate: Y1,
  backInOut: I1,
  circInOut: $1
};
function o2(o) {
  return o in pD;
}
class db extends lD {
  constructor(l) {
    super(l);
    const { name: c, motionValue: p, element: y, keyframes: T } = this.options;
    this.resolver = new oD(T, (v, E) => this.onKeyframesResolved(v, E), c, p, y), this.resolver.scheduleResolve();
  }
  initPlayback(l, c) {
    let { duration: p = 300, times: y, ease: T, type: v, motionValue: E, name: R, startTime: b } = this.options;
    if (!E.owner || !E.owner.current)
      return !1;
    if (typeof T == "string" && sg() && o2(T) && (T = pD[T]), a2(this.options)) {
      const { onComplete: _, onUpdate: A, motionValue: P, element: Y, ...K } = this.options, q = i2(l, K);
      l = q.keyframes, l.length === 1 && (l[1] = l[0]), p = q.duration, y = q.times, T = q.ease, v = "keyframes";
    }
    const k = t2(E.owner.current, R, l, { ...this.options, duration: p, times: y, ease: T });
    return k.startTime = b ?? this.calcStartTime(), this.pendingTimeline ? (Qw(k, this.pendingTimeline), this.pendingTimeline = void 0) : k.onfinish = () => {
      const { onComplete: _ } = this.options;
      E.set(gg(l, this.options, c)), _ && _(), this.cancel(), this.resolveFinishedPromise();
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
        return Ja;
      const { animation: p } = c;
      Qw(p, l);
    }
    return Ja;
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
      const { motionValue: b, onUpdate: k, onComplete: _, element: A, ...P } = this.options, Y = new $C({
        ...P,
        keyframes: p,
        duration: y,
        type: T,
        ease: v,
        times: E,
        isGenerator: !0
      }), K = /* @__PURE__ */ pl(this.time);
      b.setWithVelocity(Y.sample(K - fg).value, Y.sample(K).value, fg);
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
    return n2() && p && e2.has(p) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !R && !b && !y && T !== "mirror" && v !== 0 && E !== "inertia";
  }
}
const l2 = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, s2 = (o) => ({
  type: "spring",
  stiffness: 550,
  damping: o === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), u2 = {
  type: "keyframes",
  duration: 0.8
}, c2 = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, f2 = (o, { keyframes: l }) => l.length > 2 ? u2 : Nc.has(o) ? o.startsWith("scale") ? s2(l[1]) : l2 : c2;
function d2({ when: o, delay: l, delayChildren: c, staggerChildren: p, staggerDirection: y, repeat: T, repeatType: v, repeatDelay: E, from: R, elapsed: b, ...k }) {
  return !!Object.keys(k).length;
}
const GC = (o, l, c, p = {}, y, T) => (v) => {
  const E = AC(p, o) || {}, R = E.delay || p.delay || 0;
  let { elapsed: b = 0 } = p;
  b = b - /* @__PURE__ */ pl(R);
  let k = {
    keyframes: Array.isArray(c) ? c : [null, c],
    ease: "easeOut",
    velocity: l.getVelocity(),
    ...E,
    delay: -b,
    onUpdate: (A) => {
      l.set(A), E.onUpdate && E.onUpdate(A);
    },
    onComplete: () => {
      v(), E.onComplete && E.onComplete();
    },
    name: o,
    motionValue: l,
    element: T ? void 0 : y
  };
  d2(E) || (k = {
    ...k,
    ...f2(o, k)
  }), k.duration && (k.duration = /* @__PURE__ */ pl(k.duration)), k.repeatDelay && (k.repeatDelay = /* @__PURE__ */ pl(k.repeatDelay)), k.from !== void 0 && (k.keyframes[0] = k.from);
  let _ = !1;
  if ((k.type === !1 || k.duration === 0 && !k.repeatDelay) && (k.duration = 0, k.delay === 0 && (_ = !0)), _ && !T && l.get() !== void 0) {
    const A = gg(k.keyframes, E);
    if (A !== void 0)
      return Cn.update(() => {
        k.onUpdate(A), k.onComplete();
      }), new ON([]);
  }
  return !T && db.supports(k) ? new db(k) : new $C(k);
};
function p2({ protectedKeys: o, needsAnimating: l }, c) {
  const p = o.hasOwnProperty(c) && l[c] !== !0;
  return l[c] = !1, p;
}
function hD(o, l, { delay: c = 0, transitionOverride: p, type: y } = {}) {
  var T;
  let { transition: v = o.getDefaultTransition(), transitionEnd: E, ...R } = l;
  p && (v = p);
  const b = [], k = y && o.animationState && o.animationState.getState()[y];
  for (const _ in R) {
    const A = o.getValue(_, (T = o.latestValues[_]) !== null && T !== void 0 ? T : null), P = R[_];
    if (P === void 0 || k && p2(k, _))
      continue;
    const Y = {
      delay: c,
      ...AC(v || {}, _)
    };
    let K = !1;
    if (window.MotionHandoffAnimation) {
      const te = z1(o);
      if (te) {
        const ie = window.MotionHandoffAnimation(te, _, Cn);
        ie !== null && (Y.startTime = ie, K = !0);
      }
    }
    aC(o, _), A.start(GC(_, A, P, o.shouldReduceMotion && U1.has(_) ? { type: !1 } : Y, o, K));
    const q = A.animation;
    q && b.push(q);
  }
  return E && Promise.all(b).then(() => {
    Cn.update(() => {
      E && WN(o, E);
    });
  }), b;
}
function fC(o, l, c = {}) {
  var p;
  const y = yg(o, l, c.type === "exit" ? (p = o.presenceContext) === null || p === void 0 ? void 0 : p.custom : void 0);
  let { transition: T = o.getDefaultTransition() || {} } = y || {};
  c.transitionOverride && (T = c.transitionOverride);
  const v = y ? () => Promise.all(hD(o, y, c)) : () => Promise.resolve(), E = o.variantChildren && o.variantChildren.size ? (b = 0) => {
    const { delayChildren: k = 0, staggerChildren: _, staggerDirection: A } = T;
    return h2(o, l, k + b, _, A, c);
  } : () => Promise.resolve(), { when: R } = T;
  if (R) {
    const [b, k] = R === "beforeChildren" ? [v, E] : [E, v];
    return b().then(() => k());
  } else
    return Promise.all([v(), E(c.delay)]);
}
function h2(o, l, c = 0, p = 0, y = 1, T) {
  const v = [], E = (o.variantChildren.size - 1) * p, R = y === 1 ? (b = 0) => b * p : (b = 0) => E - b * p;
  return Array.from(o.variantChildren).sort(v2).forEach((b, k) => {
    b.notify("AnimationStart", l), v.push(fC(b, l, {
      ...T,
      delay: c + R(k)
    }).then(() => b.notify("AnimationComplete", l)));
  }), Promise.all(v);
}
function v2(o, l) {
  return o.sortNodePosition(l);
}
function m2(o, l, c = {}) {
  o.notify("AnimationStart", l);
  let p;
  if (Array.isArray(l)) {
    const y = l.map((T) => fC(o, T, c));
    p = Promise.all(y);
  } else if (typeof l == "string")
    p = fC(o, l, c);
  else {
    const y = typeof l == "function" ? yg(o, l, c.custom) : l;
    p = Promise.all(hD(o, y, c));
  }
  return p.then(() => {
    o.notify("AnimationComplete", l);
  });
}
const y2 = EC.length;
function vD(o) {
  if (!o)
    return;
  if (!o.isControllingVariants) {
    const c = o.parent ? vD(o.parent) || {} : {};
    return o.props.initial !== void 0 && (c.initial = o.props.initial), c;
  }
  const l = {};
  for (let c = 0; c < y2; c++) {
    const p = EC[c], y = o.props[p];
    (Qh(y) || y === !1) && (l[p] = y);
  }
  return l;
}
const g2 = [...SC].reverse(), S2 = SC.length;
function E2(o) {
  return (l) => Promise.all(l.map(({ animation: c, options: p }) => m2(o, c, p)));
}
function C2(o) {
  let l = E2(o), c = pb(), p = !0;
  const y = (R) => (b, k) => {
    var _;
    const A = yg(o, k, R === "exit" ? (_ = o.presenceContext) === null || _ === void 0 ? void 0 : _.custom : void 0);
    if (A) {
      const { transition: P, transitionEnd: Y, ...K } = A;
      b = { ...b, ...K, ...Y };
    }
    return b;
  };
  function T(R) {
    l = R(o);
  }
  function v(R) {
    const { props: b } = o, k = vD(o.parent) || {}, _ = [], A = /* @__PURE__ */ new Set();
    let P = {}, Y = 1 / 0;
    for (let q = 0; q < S2; q++) {
      const te = g2[q], ie = c[te], oe = b[te] !== void 0 ? b[te] : k[te], ye = Qh(oe), ne = te === R ? ie.isActive : null;
      ne === !1 && (Y = q);
      let ve = oe === k[te] && oe !== b[te] && ye;
      if (ve && p && o.manuallyAnimateOnMount && (ve = !1), ie.protectedKeys = { ...P }, // If it isn't active and hasn't *just* been set as inactive
      !ie.isActive && ne === null || // If we didn't and don't have any defined prop for this animation type
      !oe && !ie.prevProp || // Or if the prop doesn't define an animation
      vg(oe) || typeof oe == "boolean")
        continue;
      const Ee = T2(ie.prevProp, oe);
      let De = Ee || // If we're making this variant active, we want to always make it active
      te === R && ie.isActive && !ve && ye || // If we removed a higher-priority variant (i is in reverse order)
      q > Y && ye, Ne = !1;
      const Oe = Array.isArray(oe) ? oe : [oe];
      let lt = Oe.reduce(y(te), {});
      ne === !1 && (lt = {});
      const { prevResolvedValues: tt = {} } = ie, Ue = {
        ...tt,
        ...lt
      }, Et = (Ce) => {
        De = !0, A.has(Ce) && (Ne = !0, A.delete(Ce)), ie.needsAnimating[Ce] = !0;
        const de = o.getValue(Ce);
        de && (de.liveStyle = !1);
      };
      for (const Ce in Ue) {
        const de = lt[Ce], Ve = tt[Ce];
        if (P.hasOwnProperty(Ce))
          continue;
        let ge = !1;
        tC(de) && tC(Ve) ? ge = !_1(de, Ve) : ge = de !== Ve, ge ? de != null ? Et(Ce) : A.add(Ce) : de !== void 0 && A.has(Ce) ? Et(Ce) : ie.protectedKeys[Ce] = !0;
      }
      ie.prevProp = oe, ie.prevResolvedValues = lt, ie.isActive && (P = { ...P, ...lt }), p && o.blockInitialAnimation && (De = !1), De && (!(ve && Ee) || Ne) && _.push(...Oe.map((Ce) => ({
        animation: Ce,
        options: { type: te }
      })));
    }
    if (A.size) {
      const q = {};
      A.forEach((te) => {
        const ie = o.getBaseTarget(te), oe = o.getValue(te);
        oe && (oe.liveStyle = !0), q[te] = ie ?? null;
      }), _.push({ animation: q });
    }
    let K = !!_.length;
    return p && (b.initial === !1 || b.initial === b.animate) && !o.manuallyAnimateOnMount && (K = !1), p = !1, K ? l(_) : Promise.resolve();
  }
  function E(R, b) {
    var k;
    if (c[R].isActive === b)
      return Promise.resolve();
    (k = o.variantChildren) === null || k === void 0 || k.forEach((A) => {
      var P;
      return (P = A.animationState) === null || P === void 0 ? void 0 : P.setActive(R, b);
    }), c[R].isActive = b;
    const _ = v(R);
    for (const A in c)
      c[A].protectedKeys = {};
    return _;
  }
  return {
    animateChanges: v,
    setActive: E,
    setAnimateFunction: T,
    getState: () => c,
    reset: () => {
      c = pb(), p = !0;
    }
  };
}
function T2(o, l) {
  return typeof l == "string" ? l !== o : Array.isArray(l) ? !_1(l, o) : !1;
}
function kc(o = !1) {
  return {
    isActive: o,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function pb() {
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
class x2 extends pu {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(l) {
    super(l), l.animationState || (l.animationState = C2(l));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    vg(l) && (this.unmountControls = l.subscribe(this.node));
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
let R2 = 0;
class w2 extends pu {
  constructor() {
    super(...arguments), this.id = R2++;
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
const b2 = {
  animation: {
    Feature: x2
  },
  exit: {
    Feature: w2
  }
};
function Jh(o, l, c, p = { passive: !0 }) {
  return o.addEventListener(l, c, p), () => o.removeEventListener(l, c);
}
function av(o) {
  return {
    point: {
      x: o.pageX,
      y: o.pageY
    }
  };
}
const D2 = (o) => (l) => PC(l) && o(l, av(l));
function $h(o, l, c, p) {
  return Jh(o, l, D2(c), p);
}
const hb = (o, l) => Math.abs(o - l);
function _2(o, l) {
  const c = hb(o.x, l.x), p = hb(o.y, l.y);
  return Math.sqrt(c ** 2 + p ** 2);
}
class mD {
  constructor(l, c, { transformPagePoint: p, contextWindow: y, dragSnapToOrigin: T = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const _ = WE(this.lastMoveEventInfo, this.history), A = this.startEvent !== null, P = _2(_.offset, { x: 0, y: 0 }) >= 3;
      if (!A && !P)
        return;
      const { point: Y } = _, { timestamp: K } = Xr;
      this.history.push({ ...Y, timestamp: K });
      const { onStart: q, onMove: te } = this.handlers;
      A || (q && q(this.lastMoveEvent, _), this.startEvent = this.lastMoveEvent), te && te(this.lastMoveEvent, _);
    }, this.handlePointerMove = (_, A) => {
      this.lastMoveEvent = _, this.lastMoveEventInfo = YE(A, this.transformPagePoint), Cn.update(this.updatePoint, !0);
    }, this.handlePointerUp = (_, A) => {
      this.end();
      const { onEnd: P, onSessionEnd: Y, resumeAnimation: K } = this.handlers;
      if (this.dragSnapToOrigin && K && K(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const q = WE(_.type === "pointercancel" ? this.lastMoveEventInfo : YE(A, this.transformPagePoint), this.history);
      this.startEvent && P && P(_, q), Y && Y(_, q);
    }, !PC(l))
      return;
    this.dragSnapToOrigin = T, this.handlers = c, this.transformPagePoint = p, this.contextWindow = y || window;
    const v = av(l), E = YE(v, this.transformPagePoint), { point: R } = E, { timestamp: b } = Xr;
    this.history = [{ ...R, timestamp: b }];
    const { onSessionStart: k } = c;
    k && k(l, WE(E, this.history)), this.removeListeners = rv($h(this.contextWindow, "pointermove", this.handlePointerMove), $h(this.contextWindow, "pointerup", this.handlePointerUp), $h(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    this.removeListeners && this.removeListeners(), fu(this.updatePoint);
  }
}
function YE(o, l) {
  return l ? { point: l(o.point) } : o;
}
function vb(o, l) {
  return { x: o.x - l.x, y: o.y - l.y };
}
function WE({ point: o }, l) {
  return {
    point: o,
    delta: vb(o, yD(l)),
    offset: vb(o, k2(l)),
    velocity: M2(l, 0.1)
  };
}
function k2(o) {
  return o[0];
}
function yD(o) {
  return o[o.length - 1];
}
function M2(o, l) {
  if (o.length < 2)
    return { x: 0, y: 0 };
  let c = o.length - 1, p = null;
  const y = yD(o);
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
const gD = 1e-4, O2 = 1 - gD, A2 = 1 + gD, SD = 0.01, L2 = 0 - SD, N2 = 0 + SD;
function Si(o) {
  return o.max - o.min;
}
function P2(o, l, c) {
  return Math.abs(o - l) <= c;
}
function mb(o, l, c, p = 0.5) {
  o.origin = p, o.originPoint = Ln(l.min, l.max, o.origin), o.scale = Si(c) / Si(l), o.translate = Ln(c.min, c.max, o.origin) - o.originPoint, (o.scale >= O2 && o.scale <= A2 || isNaN(o.scale)) && (o.scale = 1), (o.translate >= L2 && o.translate <= N2 || isNaN(o.translate)) && (o.translate = 0);
}
function Gh(o, l, c, p) {
  mb(o.x, l.x, c.x, p ? p.originX : void 0), mb(o.y, l.y, c.y, p ? p.originY : void 0);
}
function yb(o, l, c) {
  o.min = c.min + l.min, o.max = o.min + Si(l);
}
function U2(o, l, c) {
  yb(o.x, l.x, c.x), yb(o.y, l.y, c.y);
}
function gb(o, l, c) {
  o.min = l.min - c.min, o.max = o.min + Si(l);
}
function Kh(o, l, c) {
  gb(o.x, l.x, c.x), gb(o.y, l.y, c.y);
}
function V2(o, { min: l, max: c }, p) {
  return l !== void 0 && o < l ? o = p ? Ln(l, o, p.min) : Math.max(o, l) : c !== void 0 && o > c && (o = p ? Ln(c, o, p.max) : Math.min(o, c)), o;
}
function Sb(o, l, c) {
  return {
    min: l !== void 0 ? o.min + l : void 0,
    max: c !== void 0 ? o.max + c - (o.max - o.min) : void 0
  };
}
function z2(o, { top: l, left: c, bottom: p, right: y }) {
  return {
    x: Sb(o.x, c, y),
    y: Sb(o.y, l, p)
  };
}
function Eb(o, l) {
  let c = l.min - o.min, p = l.max - o.max;
  return l.max - l.min < o.max - o.min && ([c, p] = [p, c]), { min: c, max: p };
}
function F2(o, l) {
  return {
    x: Eb(o.x, l.x),
    y: Eb(o.y, l.y)
  };
}
function j2(o, l) {
  let c = 0.5;
  const p = Si(o), y = Si(l);
  return y > p ? c = /* @__PURE__ */ bd(l.min, l.max - p, o.min) : p > y && (c = /* @__PURE__ */ bd(o.min, o.max - y, l.min)), fs(0, 1, c);
}
function B2(o, l) {
  const c = {};
  return l.min !== void 0 && (c.min = l.min - o.min), l.max !== void 0 && (c.max = l.max - o.min), c;
}
const dC = 0.35;
function H2(o = dC) {
  return o === !1 ? o = 0 : o === !0 && (o = dC), {
    x: Cb(o, "left", "right"),
    y: Cb(o, "top", "bottom")
  };
}
function Cb(o, l, c) {
  return {
    min: Tb(o, l),
    max: Tb(o, c)
  };
}
function Tb(o, l) {
  return typeof o == "number" ? o : o[l] || 0;
}
const xb = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), xd = () => ({
  x: xb(),
  y: xb()
}), Rb = () => ({ min: 0, max: 0 }), Jn = () => ({
  x: Rb(),
  y: Rb()
});
function Xi(o) {
  return [o("x"), o("y")];
}
function ED({ top: o, left: l, right: c, bottom: p }) {
  return {
    x: { min: l, max: c },
    y: { min: o, max: p }
  };
}
function I2({ x: o, y: l }) {
  return { top: l.min, right: o.max, bottom: l.max, left: o.min };
}
function Y2(o, l) {
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
function $E(o) {
  return o === void 0 || o === 1;
}
function pC({ scale: o, scaleX: l, scaleY: c }) {
  return !$E(o) || !$E(l) || !$E(c);
}
function Mc(o) {
  return pC(o) || CD(o) || o.z || o.rotate || o.rotateX || o.rotateY || o.skewX || o.skewY;
}
function CD(o) {
  return wb(o.x) || wb(o.y);
}
function wb(o) {
  return o && o !== "0%";
}
function dg(o, l, c) {
  const p = o - c, y = l * p;
  return c + y;
}
function bb(o, l, c, p, y) {
  return y !== void 0 && (o = dg(o, y, p)), dg(o, c, p) + l;
}
function hC(o, l = 0, c = 1, p, y) {
  o.min = bb(o.min, l, c, p, y), o.max = bb(o.max, l, c, p, y);
}
function TD(o, { x: l, y: c }) {
  hC(o.x, l.translate, l.scale, l.originPoint), hC(o.y, c.translate, c.scale, c.originPoint);
}
const Db = 0.999999999999, _b = 1.0000000000001;
function W2(o, l, c, p = !1) {
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
    }), v && (l.x *= v.x.scale, l.y *= v.y.scale, TD(o, v)), p && Mc(T.latestValues) && wd(o, T.latestValues));
  }
  l.x < _b && l.x > Db && (l.x = 1), l.y < _b && l.y > Db && (l.y = 1);
}
function Rd(o, l) {
  o.min = o.min + l, o.max = o.max + l;
}
function kb(o, l, c, p, y = 0.5) {
  const T = Ln(o.min, o.max, y);
  hC(o, l, c, T, p);
}
function wd(o, l) {
  kb(o.x, l.x, l.scaleX, l.scale, l.originX), kb(o.y, l.y, l.scaleY, l.scale, l.originY);
}
function xD(o, l) {
  return ED(Y2(o.getBoundingClientRect(), l));
}
function $2(o, l, c) {
  const p = xD(o, c), { scroll: y } = l;
  return y && (Rd(p.x, y.offset.x), Rd(p.y, y.offset.y)), p;
}
const RD = ({ current: o }) => o ? o.ownerDocument.defaultView : null, G2 = /* @__PURE__ */ new WeakMap();
class K2 {
  constructor(l) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Jn(), this.visualElement = l;
  }
  start(l, { snapToCursor: c = !1 } = {}) {
    const { presenceContext: p } = this.visualElement;
    if (p && p.isPresent === !1)
      return;
    const y = (k) => {
      const { dragSnapToOrigin: _ } = this.getProps();
      _ ? this.pauseAnimation() : this.stopAnimation(), c && this.snapToCursor(av(k).point);
    }, T = (k, _) => {
      const { drag: A, dragPropagation: P, onDragStart: Y } = this.getProps();
      if (A && !P && (this.openDragLock && this.openDragLock(), this.openDragLock = jN(A), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Xi((q) => {
        let te = this.getAxisMotionValue(q).get() || 0;
        if (hl.test(te)) {
          const { projection: ie } = this.visualElement;
          if (ie && ie.layout) {
            const oe = ie.layout.layoutBox[q];
            oe && (te = Si(oe) * (parseFloat(te) / 100));
          }
        }
        this.originPoint[q] = te;
      }), Y && Cn.postRender(() => Y(k, _)), aC(this.visualElement, "transform");
      const { animationState: K } = this.visualElement;
      K && K.setActive("whileDrag", !0);
    }, v = (k, _) => {
      const { dragPropagation: A, dragDirectionLock: P, onDirectionLock: Y, onDrag: K } = this.getProps();
      if (!A && !this.openDragLock)
        return;
      const { offset: q } = _;
      if (P && this.currentDirection === null) {
        this.currentDirection = Q2(q), this.currentDirection !== null && Y && Y(this.currentDirection);
        return;
      }
      this.updateAxis("x", _.point, q), this.updateAxis("y", _.point, q), this.visualElement.render(), K && K(k, _);
    }, E = (k, _) => this.stop(k, _), R = () => Xi((k) => {
      var _;
      return this.getAnimationState(k) === "paused" && ((_ = this.getAxisMotionValue(k).animation) === null || _ === void 0 ? void 0 : _.play());
    }), { dragSnapToOrigin: b } = this.getProps();
    this.panSession = new mD(l, {
      onSessionStart: y,
      onStart: T,
      onMove: v,
      onSessionEnd: E,
      resumeAnimation: R
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: b,
      contextWindow: RD(this.visualElement)
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
    if (!p || !tg(l, y, this.currentDirection))
      return;
    const T = this.getAxisMotionValue(l);
    let v = this.originPoint[l] + p[l];
    this.constraints && this.constraints[l] && (v = V2(v, this.constraints[l], this.elastic[l])), T.set(v);
  }
  resolveConstraints() {
    var l;
    const { dragConstraints: c, dragElastic: p } = this.getProps(), y = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (l = this.visualElement.projection) === null || l === void 0 ? void 0 : l.layout, T = this.constraints;
    c && Cd(c) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : c && y ? this.constraints = z2(y.layoutBox, c) : this.constraints = !1, this.elastic = H2(p), T !== this.constraints && y && this.constraints && !this.hasMutatedConstraints && Xi((v) => {
      this.constraints !== !1 && this.getAxisMotionValue(v) && (this.constraints[v] = B2(y.layoutBox[v], this.constraints[v]));
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
    const T = $2(p, y.root, this.visualElement.getTransformPagePoint());
    let v = F2(y.layout.layoutBox, T);
    if (c) {
      const E = c(I2(v));
      this.hasMutatedConstraints = !!E, E && (v = ED(E));
    }
    return v;
  }
  startAnimation(l) {
    const { drag: c, dragMomentum: p, dragElastic: y, dragTransition: T, dragSnapToOrigin: v, onDragTransitionEnd: E } = this.getProps(), R = this.constraints || {}, b = Xi((k) => {
      if (!tg(k, c, this.currentDirection))
        return;
      let _ = R && R[k] || {};
      v && (_ = { min: 0, max: 0 });
      const A = y ? 200 : 1e6, P = y ? 40 : 1e7, Y = {
        type: "inertia",
        velocity: p ? l[k] : 0,
        bounceStiffness: A,
        bounceDamping: P,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...T,
        ..._
      };
      return this.startAxisValueAnimation(k, Y);
    });
    return Promise.all(b).then(E);
  }
  startAxisValueAnimation(l, c) {
    const p = this.getAxisMotionValue(l);
    return aC(this.visualElement, l), p.start(GC(l, p, 0, c, this.visualElement, !1));
  }
  stopAnimation() {
    Xi((l) => this.getAxisMotionValue(l).stop());
  }
  pauseAnimation() {
    Xi((l) => {
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
    Xi((c) => {
      const { drag: p } = this.getProps();
      if (!tg(c, p, this.currentDirection))
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
    Xi((v) => {
      const E = this.getAxisMotionValue(v);
      if (E && this.constraints !== !1) {
        const R = E.get();
        y[v] = j2({ min: R, max: R }, this.constraints[v]);
      }
    });
    const { transformTemplate: T } = this.visualElement.getProps();
    this.visualElement.current.style.transform = T ? T({}, "") : "none", p.root && p.root.updateScroll(), p.updateLayout(), this.resolveConstraints(), Xi((v) => {
      if (!tg(v, l, null))
        return;
      const E = this.getAxisMotionValue(v), { min: R, max: b } = this.constraints[v];
      E.set(Ln(R, b, y[v]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    G2.set(this.visualElement, this);
    const l = this.visualElement.current, c = $h(l, "pointerdown", (R) => {
      const { drag: b, dragListener: k = !0 } = this.getProps();
      b && k && this.start(R);
    }), p = () => {
      const { dragConstraints: R } = this.getProps();
      Cd(R) && R.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: y } = this.visualElement, T = y.addEventListener("measure", p);
    y && !y.layout && (y.root && y.root.updateScroll(), y.updateLayout()), Cn.read(p);
    const v = Jh(window, "resize", () => this.scalePositionWithinConstraints()), E = y.addEventListener("didUpdate", ({ delta: R, hasLayoutChanged: b }) => {
      this.isDragging && b && (Xi((k) => {
        const _ = this.getAxisMotionValue(k);
        _ && (this.originPoint[k] += R[k].translate, _.set(_.get() + R[k].translate));
      }), this.visualElement.render());
    });
    return () => {
      v(), c(), T(), E && E();
    };
  }
  getProps() {
    const l = this.visualElement.getProps(), { drag: c = !1, dragDirectionLock: p = !1, dragPropagation: y = !1, dragConstraints: T = !1, dragElastic: v = dC, dragMomentum: E = !0 } = l;
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
function tg(o, l, c) {
  return (l === !0 || l === o) && (c === null || c === o);
}
function Q2(o, l = 10) {
  let c = null;
  return Math.abs(o.y) > l ? c = "y" : Math.abs(o.x) > l && (c = "x"), c;
}
class X2 extends pu {
  constructor(l) {
    super(l), this.removeGroupControls = Ja, this.removeListeners = Ja, this.controls = new K2(l);
  }
  mount() {
    const { dragControls: l } = this.node.getProps();
    l && (this.removeGroupControls = l.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ja;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Mb = (o) => (l, c) => {
  o && Cn.postRender(() => o(l, c));
};
class q2 extends pu {
  constructor() {
    super(...arguments), this.removePointerDownListener = Ja;
  }
  onPointerDown(l) {
    this.session = new mD(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: RD(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: l, onPanStart: c, onPan: p, onPanEnd: y } = this.node.getProps();
    return {
      onSessionStart: Mb(l),
      onStart: Mb(c),
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
const ig = {
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
}, Z2 = {
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
class J2 extends Ge.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: l, layoutGroup: c, switchLayoutGroup: p, layoutId: y } = this.props, { projection: T } = l;
    SN(eU), T && (c.group && c.group.add(T), p && p.register && y && p.register(T), T.root.didUpdate(), T.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), T.setOptions({
      ...T.options,
      onExitComplete: () => this.safeToRemove()
    })), ig.hasEverUpdated = !0;
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
    l && (l.root.didUpdate(), TC.postRender(() => {
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
function wD(o) {
  const [l, c] = NL(), p = Ge.useContext(s1);
  return lr.jsx(J2, { ...o, layoutGroup: p, switchLayoutGroup: Ge.useContext(v1), isPresent: l, safeToRemove: c });
}
const eU = {
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
  boxShadow: Z2
};
function tU(o, l, c) {
  const p = ma(o) ? o : qh(o);
  return p.start(GC("", p, l, c)), p.animation;
}
function nU(o) {
  return o instanceof SVGElement && o.tagName !== "svg";
}
const rU = (o, l) => o.depth - l.depth;
class aU {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(l) {
    UC(this.children, l), this.isDirty = !0;
  }
  remove(l) {
    VC(this.children, l), this.isDirty = !0;
  }
  forEach(l) {
    this.isDirty && this.children.sort(rU), this.isDirty = !1, this.children.forEach(l);
  }
}
function iU(o, l) {
  const c = vl.now(), p = ({ timestamp: y }) => {
    const T = y - c;
    T >= l && (fu(p), o(T - l));
  };
  return Cn.read(p, !0), () => fu(p);
}
const bD = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], oU = bD.length, Ab = (o) => typeof o == "string" ? parseFloat(o) : o, Lb = (o) => typeof o == "number" || it.test(o);
function lU(o, l, c, p, y, T) {
  y ? (o.opacity = Ln(
    0,
    // TODO Reinstate this if only child
    c.opacity !== void 0 ? c.opacity : 1,
    sU(p)
  ), o.opacityExit = Ln(l.opacity !== void 0 ? l.opacity : 1, 0, uU(p))) : T && (o.opacity = Ln(l.opacity !== void 0 ? l.opacity : 1, c.opacity !== void 0 ? c.opacity : 1, p));
  for (let v = 0; v < oU; v++) {
    const E = `border${bD[v]}Radius`;
    let R = Nb(l, E), b = Nb(c, E);
    if (R === void 0 && b === void 0)
      continue;
    R || (R = 0), b || (b = 0), R === 0 || b === 0 || Lb(R) === Lb(b) ? (o[E] = Math.max(Ln(Ab(R), Ab(b), p), 0), (hl.test(b) || hl.test(R)) && (o[E] += "%")) : o[E] = b;
  }
  (l.rotate || c.rotate) && (o.rotate = Ln(l.rotate || 0, c.rotate || 0, p));
}
function Nb(o, l) {
  return o[l] !== void 0 ? o[l] : o.borderRadius;
}
const sU = /* @__PURE__ */ DD(0, 0.5, W1), uU = /* @__PURE__ */ DD(0.5, 0.95, Ja);
function DD(o, l, c) {
  return (p) => p < o ? 0 : p > l ? 1 : c(/* @__PURE__ */ bd(o, l, p));
}
function Pb(o, l) {
  o.min = l.min, o.max = l.max;
}
function Qi(o, l) {
  Pb(o.x, l.x), Pb(o.y, l.y);
}
function Ub(o, l) {
  o.translate = l.translate, o.scale = l.scale, o.originPoint = l.originPoint, o.origin = l.origin;
}
function Vb(o, l, c, p, y) {
  return o -= l, o = dg(o, 1 / c, p), y !== void 0 && (o = dg(o, 1 / y, p)), o;
}
function cU(o, l = 0, c = 1, p = 0.5, y, T = o, v = o) {
  if (hl.test(l) && (l = parseFloat(l), l = Ln(v.min, v.max, l / 100) - v.min), typeof l != "number")
    return;
  let E = Ln(T.min, T.max, p);
  o === T && (E -= l), o.min = Vb(o.min, l, c, E, y), o.max = Vb(o.max, l, c, E, y);
}
function zb(o, l, [c, p, y], T, v) {
  cU(o, l[c], l[p], l[y], l.scale, T, v);
}
const fU = ["x", "scaleX", "originX"], dU = ["y", "scaleY", "originY"];
function Fb(o, l, c, p) {
  zb(o.x, l, fU, c ? c.x : void 0, p ? p.x : void 0), zb(o.y, l, dU, c ? c.y : void 0, p ? p.y : void 0);
}
function jb(o) {
  return o.translate === 0 && o.scale === 1;
}
function _D(o) {
  return jb(o.x) && jb(o.y);
}
function Bb(o, l) {
  return o.min === l.min && o.max === l.max;
}
function pU(o, l) {
  return Bb(o.x, l.x) && Bb(o.y, l.y);
}
function Hb(o, l) {
  return Math.round(o.min) === Math.round(l.min) && Math.round(o.max) === Math.round(l.max);
}
function kD(o, l) {
  return Hb(o.x, l.x) && Hb(o.y, l.y);
}
function Ib(o) {
  return Si(o.x) / Si(o.y);
}
function Yb(o, l) {
  return o.translate === l.translate && o.scale === l.scale && o.originPoint === l.originPoint;
}
class hU {
  constructor() {
    this.members = [];
  }
  add(l) {
    UC(this.members, l), l.scheduleRender();
  }
  remove(l) {
    if (VC(this.members, l), l === this.prevLead && (this.prevLead = void 0), l === this.lead) {
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
function vU(o, l, c) {
  let p = "";
  const y = o.x.translate / l.x, T = o.y.translate / l.y, v = (c == null ? void 0 : c.z) || 0;
  if ((y || T || v) && (p = `translate3d(${y}px, ${T}px, ${v}px) `), (l.x !== 1 || l.y !== 1) && (p += `scale(${1 / l.x}, ${1 / l.y}) `), c) {
    const { transformPerspective: b, rotate: k, rotateX: _, rotateY: A, skewX: P, skewY: Y } = c;
    b && (p = `perspective(${b}px) ${p}`), k && (p += `rotate(${k}deg) `), _ && (p += `rotateX(${_}deg) `), A && (p += `rotateY(${A}deg) `), P && (p += `skewX(${P}deg) `), Y && (p += `skewY(${Y}deg) `);
  }
  const E = o.x.scale * l.x, R = o.y.scale * l.y;
  return (E !== 1 || R !== 1) && (p += `scale(${E}, ${R})`), p || "none";
}
const Oc = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, Yh = typeof window < "u" && window.MotionDebug !== void 0, GE = ["", "X", "Y", "Z"], mU = { visibility: "hidden" }, Wb = 1e3;
let yU = 0;
function KE(o, l, c, p) {
  const { latestValues: y } = l;
  y[o] && (c[o] = y[o], l.setStaticValue(o, 0), p && (p[o] = 0));
}
function MD(o) {
  if (o.hasCheckedOptimisedAppear = !0, o.root === o)
    return;
  const { visualElement: l } = o.options;
  if (!l)
    return;
  const c = z1(l);
  if (window.MotionHasOptimisedAnimation(c, "transform")) {
    const { layout: y, layoutId: T } = o.options;
    window.MotionCancelOptimisedAnimation(c, "transform", Cn, !(y || T));
  }
  const { parent: p } = o;
  p && !p.hasCheckedOptimisedAppear && MD(p);
}
function OD({ attachResizeListener: o, defaultParent: l, measureScroll: c, checkIsScrollRoot: p, resetTransform: y }) {
  return class {
    constructor(v = {}, E = l == null ? void 0 : l()) {
      this.id = yU++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, Yh && (Oc.totalNodes = Oc.resolvedTargetDeltas = Oc.recalculatedProjection = 0), this.nodes.forEach(EU), this.nodes.forEach(wU), this.nodes.forEach(bU), this.nodes.forEach(CU), Yh && window.MotionDebug.record(Oc);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = v, this.root = E ? E.root || E : this, this.path = E ? [...E.path, E] : [], this.parent = E, this.depth = E ? E.depth + 1 : 0;
      for (let R = 0; R < this.path.length; R++)
        this.path[R].shouldResetTransform = !0;
      this.root === this && (this.nodes = new aU());
    }
    addEventListener(v, E) {
      return this.eventHandlers.has(v) || this.eventHandlers.set(v, new zC()), this.eventHandlers.get(v).add(E);
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
      this.isSVG = nU(v), this.instance = v;
      const { layoutId: R, layout: b, visualElement: k } = this.options;
      if (k && !k.current && k.mount(v), this.root.nodes.add(this), this.parent && this.parent.children.add(this), E && (b || R) && (this.isLayoutDirty = !0), o) {
        let _;
        const A = () => this.root.updateBlockedByResize = !1;
        o(v, () => {
          this.root.updateBlockedByResize = !0, _ && _(), _ = iU(A, 250), ig.hasAnimatedSinceResize && (ig.hasAnimatedSinceResize = !1, this.nodes.forEach(Gb));
        });
      }
      R && this.root.registerSharedNode(R, this), this.options.animate !== !1 && k && (R || b) && this.addEventListener("didUpdate", ({ delta: _, hasLayoutChanged: A, hasRelativeTargetChanged: P, layout: Y }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const K = this.options.transition || k.getDefaultTransition() || OU, { onLayoutAnimationStart: q, onLayoutAnimationComplete: te } = k.getProps(), ie = !this.targetLayout || !kD(this.targetLayout, Y) || P, oe = !A && P;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || oe || A && (ie || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(_, oe);
          const ye = {
            ...AC(K, "layout"),
            onPlay: q,
            onComplete: te
          };
          (k.shouldReduceMotion || this.options.layoutRoot) && (ye.delay = 0, ye.type = !1), this.startAnimation(ye);
        } else
          A || Gb(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = Y;
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(DU), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && MD(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach($b);
        return;
      }
      this.isUpdating || this.nodes.forEach(xU), this.isUpdating = !1, this.nodes.forEach(RU), this.nodes.forEach(gU), this.nodes.forEach(SU), this.clearAllSnapshots();
      const E = vl.now();
      Xr.delta = fs(0, 1e3 / 60, E - Xr.timestamp), Xr.timestamp = E, Xr.isProcessing = !0, zE.update.process(Xr), zE.preRender.process(Xr), zE.render.process(Xr), Xr.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, TC.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(TU), this.sharedNodes.forEach(_U);
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
      const v = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, E = this.projectionDelta && !_D(this.projectionDelta), R = this.getTransformTemplate(), b = R ? R(this.latestValues, "") : void 0, k = b !== this.prevTransformTemplateValue;
      v && (E || Mc(this.latestValues) || k) && (y(this.instance, b), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(v = !0) {
      const E = this.measurePageBox();
      let R = this.removeElementScroll(E);
      return v && (R = this.removeTransform(R)), AU(R), {
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
      if (!(((v = this.scroll) === null || v === void 0 ? void 0 : v.wasRoot) || this.path.some(LU))) {
        const { scroll: k } = this.root;
        k && (Rd(R.x, k.offset.x), Rd(R.y, k.offset.y));
      }
      return R;
    }
    removeElementScroll(v) {
      var E;
      const R = Jn();
      if (Qi(R, v), !((E = this.scroll) === null || E === void 0) && E.wasRoot)
        return R;
      for (let b = 0; b < this.path.length; b++) {
        const k = this.path[b], { scroll: _, options: A } = k;
        k !== this.root && _ && A.layoutScroll && (_.wasRoot && Qi(R, v), Rd(R.x, _.offset.x), Rd(R.y, _.offset.y));
      }
      return R;
    }
    applyTransform(v, E = !1) {
      const R = Jn();
      Qi(R, v);
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
      Qi(E, v);
      for (let R = 0; R < this.path.length; R++) {
        const b = this.path[R];
        if (!b.instance || !Mc(b.latestValues))
          continue;
        pC(b.latestValues) && b.updateSnapshot();
        const k = Jn(), _ = b.measurePageBox();
        Qi(k, _), Fb(E, b.latestValues, b.snapshot ? b.snapshot.layoutBox : void 0, k);
      }
      return Mc(this.latestValues) && Fb(E, this.latestValues), E;
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
      const { layout: _, layoutId: A } = this.options;
      if (!(!this.layout || !(_ || A))) {
        if (this.resolvedRelativeTargetAt = Xr.timestamp, !this.targetDelta && !this.relativeTarget) {
          const P = this.getClosestProjectingParent();
          P && P.layout && this.animationProgress !== 1 ? (this.relativeParent = P, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Jn(), this.relativeTargetOrigin = Jn(), Kh(this.relativeTargetOrigin, this.layout.layoutBox, P.layout.layoutBox), Qi(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Jn(), this.targetWithTransforms = Jn()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), U2(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Qi(this.target, this.layout.layoutBox), TD(this.target, this.targetDelta)) : Qi(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const P = this.getClosestProjectingParent();
            P && !!P.resumingFrom == !!this.resumingFrom && !P.options.layoutScroll && P.target && this.animationProgress !== 1 ? (this.relativeParent = P, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Jn(), this.relativeTargetOrigin = Jn(), Kh(this.relativeTargetOrigin, this.target, P.target), Qi(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Yh && Oc.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || pC(this.parent.latestValues) || CD(this.parent.latestValues)))
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
      Qi(this.layoutCorrected, this.layout.layoutBox);
      const A = this.treeScale.x, P = this.treeScale.y;
      W2(this.layoutCorrected, this.treeScale, this.path, R), E.layout && !E.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (E.target = E.layout.layoutBox, E.targetWithTransforms = Jn());
      const { target: Y } = E;
      if (!Y) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Ub(this.prevProjectionDelta.x, this.projectionDelta.x), Ub(this.prevProjectionDelta.y, this.projectionDelta.y)), Gh(this.projectionDelta, this.layoutCorrected, Y, this.latestValues), (this.treeScale.x !== A || this.treeScale.y !== P || !Yb(this.projectionDelta.x, this.prevProjectionDelta.x) || !Yb(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", Y)), Yh && Oc.recalculatedProjection++;
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
      const A = Jn(), P = R ? R.source : void 0, Y = this.layout ? this.layout.source : void 0, K = P !== Y, q = this.getStack(), te = !q || q.members.length <= 1, ie = !!(K && !te && this.options.crossfade === !0 && !this.path.some(MU));
      this.animationProgress = 0;
      let oe;
      this.mixTargetDelta = (ye) => {
        const ne = ye / 1e3;
        Kb(_.x, v.x, ne), Kb(_.y, v.y, ne), this.setTargetDelta(_), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Kh(A, this.layout.layoutBox, this.relativeParent.layout.layoutBox), kU(this.relativeTarget, this.relativeTargetOrigin, A, ne), oe && pU(this.relativeTarget, oe) && (this.isProjectionDirty = !1), oe || (oe = Jn()), Qi(oe, this.relativeTarget)), K && (this.animationValues = k, lU(k, b, this.latestValues, ne, ie, te)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = ne;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(v) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (fu(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Cn.update(() => {
        ig.hasAnimatedSinceResize = !0, this.currentAnimation = tU(0, Wb, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Wb), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const v = this.getLead();
      let { targetWithTransforms: E, target: R, layout: b, latestValues: k } = v;
      if (!(!E || !R || !b)) {
        if (this !== v && this.layout && b && AD(this.options.animationType, this.layout.layoutBox, b.layoutBox)) {
          R = this.target || Jn();
          const _ = Si(this.layout.layoutBox.x);
          R.x.min = v.target.x.min, R.x.max = R.x.min + _;
          const A = Si(this.layout.layoutBox.y);
          R.y.min = v.target.y.min, R.y.max = R.y.min + A;
        }
        Qi(E, R), wd(E, k), Gh(this.projectionDeltaWithTransform, this.layoutCorrected, E, k);
      }
    }
    registerSharedNode(v, E) {
      this.sharedNodes.has(v) || this.sharedNodes.set(v, new hU()), this.sharedNodes.get(v).add(E);
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
      R.z && KE("z", v, b, this.animationValues);
      for (let k = 0; k < GE.length; k++)
        KE(`rotate${GE[k]}`, v, b, this.animationValues), KE(`skew${GE[k]}`, v, b, this.animationValues);
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
        return mU;
      const b = {
        visibility: ""
      }, k = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, b.opacity = "", b.pointerEvents = rg(v == null ? void 0 : v.pointerEvents) || "", b.transform = k ? k(this.latestValues, "") : "none", b;
      const _ = this.getLead();
      if (!this.projectionDelta || !this.layout || !_.target) {
        const K = {};
        return this.options.layoutId && (K.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, K.pointerEvents = rg(v == null ? void 0 : v.pointerEvents) || ""), this.hasProjected && !Mc(this.latestValues) && (K.transform = k ? k({}, "") : "none", this.hasProjected = !1), K;
      }
      const A = _.animationValues || _.latestValues;
      this.applyTransformsToTarget(), b.transform = vU(this.projectionDeltaWithTransform, this.treeScale, A), k && (b.transform = k(A, b.transform));
      const { x: P, y: Y } = this.projectionDelta;
      b.transformOrigin = `${P.origin * 100}% ${Y.origin * 100}% 0`, _.animationValues ? b.opacity = _ === this ? (R = (E = A.opacity) !== null && E !== void 0 ? E : this.latestValues.opacity) !== null && R !== void 0 ? R : 1 : this.preserveOpacity ? this.latestValues.opacity : A.opacityExit : b.opacity = _ === this ? A.opacity !== void 0 ? A.opacity : "" : A.opacityExit !== void 0 ? A.opacityExit : 0;
      for (const K in lg) {
        if (A[K] === void 0)
          continue;
        const { correct: q, applyTo: te } = lg[K], ie = b.transform === "none" ? A[K] : q(A[K], _);
        if (te) {
          const oe = te.length;
          for (let ye = 0; ye < oe; ye++)
            b[te[ye]] = ie;
        } else
          b[K] = ie;
      }
      return this.options.layoutId && (b.pointerEvents = _ === this ? rg(v == null ? void 0 : v.pointerEvents) || "" : "none"), b;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((v) => {
        var E;
        return (E = v.currentAnimation) === null || E === void 0 ? void 0 : E.stop();
      }), this.root.nodes.forEach($b), this.root.sharedNodes.clear();
    }
  };
}
function gU(o) {
  o.updateLayout();
}
function SU(o) {
  var l;
  const c = ((l = o.resumeFrom) === null || l === void 0 ? void 0 : l.snapshot) || o.snapshot;
  if (o.isLead() && o.layout && c && o.hasListeners("didUpdate")) {
    const { layoutBox: p, measuredBox: y } = o.layout, { animationType: T } = o.options, v = c.source !== o.layout.source;
    T === "size" ? Xi((_) => {
      const A = v ? c.measuredBox[_] : c.layoutBox[_], P = Si(A);
      A.min = p[_].min, A.max = A.min + P;
    }) : AD(T, c.layoutBox, p) && Xi((_) => {
      const A = v ? c.measuredBox[_] : c.layoutBox[_], P = Si(p[_]);
      A.max = A.min + P, o.relativeTarget && !o.currentAnimation && (o.isProjectionDirty = !0, o.relativeTarget[_].max = o.relativeTarget[_].min + P);
    });
    const E = xd();
    Gh(E, p, c.layoutBox);
    const R = xd();
    v ? Gh(R, o.applyTransform(y, !0), c.measuredBox) : Gh(R, p, c.layoutBox);
    const b = !_D(E);
    let k = !1;
    if (!o.resumeFrom) {
      const _ = o.getClosestProjectingParent();
      if (_ && !_.resumeFrom) {
        const { snapshot: A, layout: P } = _;
        if (A && P) {
          const Y = Jn();
          Kh(Y, c.layoutBox, A.layoutBox);
          const K = Jn();
          Kh(K, p, P.layoutBox), kD(Y, K) || (k = !0), _.options.layoutRoot && (o.relativeTarget = K, o.relativeTargetOrigin = Y, o.relativeParent = _);
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
function EU(o) {
  Yh && Oc.totalNodes++, o.parent && (o.isProjecting() || (o.isProjectionDirty = o.parent.isProjectionDirty), o.isSharedProjectionDirty || (o.isSharedProjectionDirty = !!(o.isProjectionDirty || o.parent.isProjectionDirty || o.parent.isSharedProjectionDirty)), o.isTransformDirty || (o.isTransformDirty = o.parent.isTransformDirty));
}
function CU(o) {
  o.isProjectionDirty = o.isSharedProjectionDirty = o.isTransformDirty = !1;
}
function TU(o) {
  o.clearSnapshot();
}
function $b(o) {
  o.clearMeasurements();
}
function xU(o) {
  o.isLayoutDirty = !1;
}
function RU(o) {
  const { visualElement: l } = o.options;
  l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"), o.resetTransform();
}
function Gb(o) {
  o.finishAnimation(), o.targetDelta = o.relativeTarget = o.target = void 0, o.isProjectionDirty = !0;
}
function wU(o) {
  o.resolveTargetDelta();
}
function bU(o) {
  o.calcProjection();
}
function DU(o) {
  o.resetSkewAndRotation();
}
function _U(o) {
  o.removeLeadSnapshot();
}
function Kb(o, l, c) {
  o.translate = Ln(l.translate, 0, c), o.scale = Ln(l.scale, 1, c), o.origin = l.origin, o.originPoint = l.originPoint;
}
function Qb(o, l, c, p) {
  o.min = Ln(l.min, c.min, p), o.max = Ln(l.max, c.max, p);
}
function kU(o, l, c, p) {
  Qb(o.x, l.x, c.x, p), Qb(o.y, l.y, c.y, p);
}
function MU(o) {
  return o.animationValues && o.animationValues.opacityExit !== void 0;
}
const OU = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Xb = (o) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(o), qb = Xb("applewebkit/") && !Xb("chrome/") ? Math.round : Ja;
function Zb(o) {
  o.min = qb(o.min), o.max = qb(o.max);
}
function AU(o) {
  Zb(o.x), Zb(o.y);
}
function AD(o, l, c) {
  return o === "position" || o === "preserve-aspect" && !P2(Ib(l), Ib(c), 0.2);
}
function LU(o) {
  var l;
  return o !== o.root && ((l = o.scroll) === null || l === void 0 ? void 0 : l.wasRoot);
}
const NU = OD({
  attachResizeListener: (o, l) => Jh(o, "resize", l),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), QE = {
  current: void 0
}, LD = OD({
  measureScroll: (o) => ({
    x: o.scrollLeft,
    y: o.scrollTop
  }),
  defaultParent: () => {
    if (!QE.current) {
      const o = new NU({});
      o.mount(window), o.setOptions({ layoutScroll: !0 }), QE.current = o;
    }
    return QE.current;
  },
  resetTransform: (o, l) => {
    o.style.transform = l !== void 0 ? l : "none";
  },
  checkIsScrollRoot: (o) => window.getComputedStyle(o).position === "fixed"
}), PU = {
  pan: {
    Feature: q2
  },
  drag: {
    Feature: X2,
    ProjectionNode: LD,
    MeasureLayout: wD
  }
};
function Jb(o, l, c) {
  const { props: p } = o;
  o.animationState && p.whileHover && o.animationState.setActive("whileHover", c === "Start");
  const y = "onHover" + c, T = p[y];
  T && Cn.postRender(() => T(l, av(l)));
}
class UU extends pu {
  mount() {
    const { current: l } = this.node;
    l && (this.unmount = PN(l, (c) => (Jb(this.node, c, "Start"), (p) => Jb(this.node, p, "End"))));
  }
  unmount() {
  }
}
class VU extends pu {
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
function e1(o, l, c) {
  const { props: p } = o;
  o.animationState && p.whileTap && o.animationState.setActive("whileTap", c === "Start");
  const y = "onTap" + (c === "End" ? "" : c), T = p[y];
  T && Cn.postRender(() => T(l, av(l)));
}
class zU extends pu {
  mount() {
    const { current: l } = this.node;
    l && (this.unmount = FN(l, (c) => (e1(this.node, c, "Start"), (p, { success: y }) => e1(this.node, p, y ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const vC = /* @__PURE__ */ new WeakMap(), XE = /* @__PURE__ */ new WeakMap(), FU = (o) => {
  const l = vC.get(o.target);
  l && l(o);
}, jU = (o) => {
  o.forEach(FU);
};
function BU({ root: o, ...l }) {
  const c = o || document;
  XE.has(c) || XE.set(c, {});
  const p = XE.get(c), y = JSON.stringify(l);
  return p[y] || (p[y] = new IntersectionObserver(jU, { root: o, ...l })), p[y];
}
function HU(o, l, c) {
  const p = BU(l);
  return vC.set(o, c), p.observe(o), () => {
    vC.delete(o), p.unobserve(o);
  };
}
const IU = {
  some: 0,
  all: 1
};
class YU extends pu {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: l = {} } = this.node.getProps(), { root: c, margin: p, amount: y = "some", once: T } = l, v = {
      root: c ? c.current : void 0,
      rootMargin: p,
      threshold: typeof y == "number" ? y : IU[y]
    }, E = (R) => {
      const { isIntersecting: b } = R;
      if (this.isInView === b || (this.isInView = b, T && !b && this.hasEnteredView))
        return;
      b && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", b);
      const { onViewportEnter: k, onViewportLeave: _ } = this.node.getProps(), A = b ? k : _;
      A && A(R);
    };
    return HU(this.node.current, v, E);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: l, prevProps: c } = this.node;
    ["amount", "margin", "root"].some(WU(l, c)) && this.startObserver();
  }
  unmount() {
  }
}
function WU({ viewport: o = {} }, { viewport: l = {} } = {}) {
  return (c) => o[c] !== l[c];
}
const $U = {
  inView: {
    Feature: YU
  },
  tap: {
    Feature: zU
  },
  focus: {
    Feature: VU
  },
  hover: {
    Feature: UU
  }
}, GU = {
  layout: {
    ProjectionNode: LD,
    MeasureLayout: wD
  }
}, pg = { current: null }, KC = { current: !1 };
function ND() {
  if (KC.current = !0, !!yC)
    if (window.matchMedia) {
      const o = window.matchMedia("(prefers-reduced-motion)"), l = () => pg.current = o.matches;
      o.addListener(l), l();
    } else
      pg.current = !1;
}
const KU = [...iD, va, du], QU = (o) => KU.find(aD(o)), t1 = /* @__PURE__ */ new WeakMap();
function XU(o, l, c) {
  for (const p in l) {
    const y = l[p], T = c[p];
    if (ma(y))
      o.addValue(p, y), process.env.NODE_ENV === "development" && ev(y.version === "11.18.2", `Attempting to mix Motion versions ${y.version} with 11.18.2 may not work as expected.`);
    else if (ma(T))
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
const n1 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class qU {
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
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = YC, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const P = vl.now();
      this.renderScheduledAt < P && (this.renderScheduledAt = P, Cn.render(this.render, !1, !0));
    };
    const { latestValues: R, renderState: b, onUpdate: k } = v;
    this.onUpdate = k, this.latestValues = R, this.baseTarget = { ...R }, this.initialValues = c.initial ? { ...R } : {}, this.renderState = b, this.parent = l, this.props = c, this.presenceContext = p, this.depth = l ? l.depth + 1 : 0, this.reducedMotionConfig = y, this.options = E, this.blockInitialAnimation = !!T, this.isControllingVariants = mg(c), this.isVariantNode = p1(c), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(l && l.current);
    const { willChange: _, ...A } = this.scrapeMotionValuesFromProps(c, {}, this);
    for (const P in A) {
      const Y = A[P];
      R[P] !== void 0 && ma(Y) && Y.set(R[P], !1);
    }
  }
  mount(l) {
    this.current = l, t1.set(l, this), this.projection && !this.projection.instance && this.projection.mount(l), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((c, p) => this.bindToMotionValue(p, c)), KC.current || ND(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : pg.current, process.env.NODE_ENV !== "production" && ev(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    t1.delete(this.current), this.projection && this.projection.unmount(), fu(this.notifyUpdate), fu(this.render), this.valueSubscriptions.forEach((l) => l()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    for (let p = 0; p < n1.length; p++) {
      const y = n1[p];
      this.propEventSubscriptions[y] && (this.propEventSubscriptions[y](), delete this.propEventSubscriptions[y]);
      const T = "on" + y, v = l[T];
      v && (this.propEventSubscriptions[y] = this.on(y, v));
    }
    this.prevMotionValues = XU(this, this.scrapeMotionValuesFromProps(l, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
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
    return y != null && (typeof y == "string" && (nD(y) || G1(y)) ? y = parseFloat(y) : !QU(y) && du.test(c) && (y = J1(l, c)), this.setBaseTarget(l, ma(y) ? y.get() : y)), ma(y) ? y.get() : y;
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
      const v = RC(this.props, p, (c = this.presenceContext) === null || c === void 0 ? void 0 : c.custom);
      v && (y = v[l]);
    }
    if (p && y !== void 0)
      return y;
    const T = this.getBaseTargetFromProps(this.props, l);
    return T !== void 0 && !ma(T) ? T : this.initialValues[l] !== void 0 && y === void 0 ? void 0 : this.baseTarget[l];
  }
  on(l, c) {
    return this.events[l] || (this.events[l] = new zC()), this.events[l].add(c);
  }
  notify(l, ...c) {
    this.events[l] && this.events[l].notify(...c);
  }
}
class PD extends qU {
  constructor() {
    super(...arguments), this.KeyframeResolver = oD;
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
    ma(l) && (this.childSubscription = l.on("change", (c) => {
      this.current && (this.current.textContent = `${c}`);
    }));
  }
}
function ZU(o) {
  return window.getComputedStyle(o);
}
class JU extends PD {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = T1;
  }
  readValueFromInstance(l, c) {
    if (Nc.has(c)) {
      const p = IC(c);
      return p && p.default || 0;
    } else {
      const p = ZU(l), y = (S1(c) ? p.getPropertyValue(c) : p[c]) || 0;
      return typeof y == "string" ? y.trim() : y;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: c }) {
    return xD(l, c);
  }
  build(l, c, p) {
    DC(l, c, p.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, c, p) {
    return OC(l, c, p);
  }
}
class eV extends PD {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Jn;
  }
  getBaseTargetFromProps(l, c) {
    return l[c];
  }
  readValueFromInstance(l, c) {
    if (Nc.has(c)) {
      const p = IC(c);
      return p && p.default || 0;
    }
    return c = x1.has(c) ? c : CC(c), l.getAttribute(c);
  }
  scrapeMotionValuesFromProps(l, c, p) {
    return b1(l, c, p);
  }
  build(l, c, p) {
    _C(l, c, this.isSVGTag, p.transformTemplate);
  }
  renderInstance(l, c, p, y) {
    R1(l, c, p, y);
  }
  mount(l) {
    this.isSVGTag = MC(l.tagName), super.mount(l);
  }
}
const tV = (o, l) => xC(o) ? new eV(l) : new JU(l, {
  allowProjection: o !== Ge.Fragment
}), nV = /* @__PURE__ */ _N({
  ...b2,
  ...$U,
  ...PU,
  ...GU
}, tV), r1 = /* @__PURE__ */ IL(nV);
function rV() {
  !KC.current && ND();
  const [o] = Ge.useState(pg.current);
  return process.env.NODE_ENV !== "production" && ev(o !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), o;
}
const aV = 480, iV = 228, oV = 288, lV = 720, sV = 2.35, uV = 340, cV = 580, fV = 44, dV = 22, UD = {
  cardWidth: iV,
  cardHeight: oV,
  stagePadding: fV,
  restStack: [
    { x: -82, y: 6, rotate: -7, scale: 1, zIndex: 1 },
    { x: -40, y: 2, rotate: -3, scale: 1, zIndex: 2 },
    { x: 0, y: -2, rotate: 0, scale: 1, zIndex: 3 },
    { x: 42, y: 2, rotate: 4, scale: 1, zIndex: 4 },
    { x: 88, y: 6, rotate: 9, scale: 1, zIndex: 5 }
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
}, pV = {
  ...UD,
  stagePadding: dV,
  restStack: [
    { x: -54, y: 4, rotate: -7, scale: 1, zIndex: 1 },
    { x: -26, y: 1, rotate: -3, scale: 1, zIndex: 2 },
    { x: 0, y: -1, rotate: 0, scale: 1, zIndex: 3 },
    { x: 28, y: 1, rotate: 4, scale: 1, zIndex: 4 },
    { x: 58, y: 4, rotate: 9, scale: 1, zIndex: 5 }
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
}, hV = {
  type: "spring",
  stiffness: 280,
  damping: 34,
  mass: 0.9
}, a1 = {
  type: "tween",
  duration: 0.01
}, VD = [
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
function vV(o) {
  let l = String(o).replace(/^#/, "");
  l.length === 3 && (l = l.split("").map((p) => p + p).join(""));
  const c = parseInt(l, 16);
  return Number.isNaN(c) ? "0, 0, 0" : `${c >> 16 & 255}, ${c >> 8 & 255}, ${c & 255}`;
}
function mV(o, l, c) {
  const p = o.getContext("2d");
  if (!p) return null;
  const y = window.devicePixelRatio || 1;
  return o.width = Math.max(1, Math.round(l * y)), o.height = Math.max(1, Math.round(c * y)), o.style.width = `${l}px`, o.style.height = `${c}px`, p.setTransform(y, 0, 0, y, 0, 0), { ctx: p, w: l, h: c, dpr: y };
}
function Ad(o, l, c, p) {
  o.fillStyle = p, o.fillRect(0, 0, l, c);
}
function QC(o, l, c, p, y, T, v = 1) {
  const E = o.globalAlpha;
  o.globalAlpha = v, o.fillStyle = T, o.fillRect(l, c, p, y), o.globalAlpha = E;
}
function iv(o, l) {
  return Math.max(2, Math.min(14, Math.min(o, l) * 0.04));
}
function XC(o) {
  let l = o >>> 0;
  return function() {
    l |= 0, l = l + 1831565813 | 0;
    let c = Math.imul(l ^ l >>> 15, 1 | l);
    return c ^= c + Math.imul(c ^ c >>> 7, 61 | c), ((c ^ c >>> 14) >>> 0) / 4294967296;
  };
}
function Sg(o, l) {
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
function ng(o, l, c, p, y, T, v, E, R = 1, b = !1) {
  const k = o.globalAlpha;
  if (o.globalAlpha = R, o.strokeStyle = v, o.lineWidth = E, o.beginPath(), b) {
    const _ = E / 2;
    o.roundRect(l + _, c + _, p - E, y - E, Math.max(0, T - _));
  } else
    o.roundRect(l, c, p, y, T);
  o.stroke(), o.globalAlpha = k;
}
const yV = {
  /* 52 bars: even = static, odd = wave; one rect per column */
  waveformBars: {
    waveType: "sine",
    waveAmplitude: 0.4,
    waveFrequency: 0.9,
    phaseOffset: 0.4,
    columns: 52,
    barWidth: 2,
    gap: 1,
    barThicknessScale: 0.5,
    minHeight: 1,
    maxHeightFrac: 0.78,
    anchorInterval: 2,
    topAligned: !0,
    stagger: 0.1,
    verticalShift: 0,
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
function gV(o, l, c, p, y, T, v, E) {
  Ad(o, l, c, v);
  const R = iv(l, c), b = R, k = Math.max(1, l - 2 * R), _ = Math.max(1, c - 2 * b), A = E.maxHeightFrac * _;
  let P = E.barWidth;
  const Y = E.gap, K = E.columns;
  let q, te;
  K === 52 ? (q = 52, te = Math.max(0, Math.min(Y, 1)), P = (k - (q - 1) * te) / q, P < 0.4 && (te = 0, P = k / q)) : (q = Math.min(K, Math.max(8, Math.floor((k + Y) / (P + Y)))), te = q > 1 ? (k - q * P) / (q - 1) : Y);
  const ie = R, oe = c - b, ye = E.barThicknessScale !== void 0 && E.barThicknessScale !== null ? E.barThicknessScale : 1, ne = Math.max(0.5, P * ye);
  for (let ve = 0; ve < q; ve++) {
    const Ee = ie + ve * (P + te), De = E.anchorInterval > 0 && ve % E.anchorInterval === 0;
    let Ne;
    if (De) Ne = A;
    else {
      const tt = (E.anchorInterval > 0 ? ve % E.anchorInterval : ve) * E.stagger, Ue = ve / q * E.waveFrequency + E.phaseOffset + tt + p * E.speed, Et = (Sg(Ue, E.waveType) * E.waveAmplitude + 1) / 2, Dt = E.minHeight + (1 - Et) * (A - E.minHeight);
      Ne = Math.max(E.minHeight, Dt);
    }
    let Oe = b + (E.topAligned ? 0 : (_ - Ne) / 2);
    if (!De && E.verticalShift !== 0) {
      const tt = E.anchorInterval > 0 ? Math.floor(ve / E.anchorInterval) : ve, Ue = E.anchorInterval > 0 ? Math.floor(q / E.anchorInterval) : q, Et = E.shiftOrigin * (Ue - 1), Dt = Math.abs(tt - Et), kt = Math.max(1, Math.max(Et, Ue - 1 - Et));
      let Ce = Dt / kt;
      const de = Math.abs(E.shiftCurve) || 1, Ve = E.shiftCurve >= 0 ? Math.pow(Ce, de) : 1 - Math.pow(1 - Ce, de);
      Oe += kt * E.verticalShift * Ve;
    }
    if (Ne = Math.min(Ne, Math.max(0, oe - Oe)), Oe = Math.max(b, Math.min(Oe, oe - Ne)), Ne = Math.min(Ne, Math.max(0, oe - Oe)), Ne < E.minHeight) continue;
    const lt = Ee + (P - ne) / 2;
    QC(o, lt, Oe, ne, Ne, T);
  }
}
function SV(o, l, c, p, y, T, v, E) {
  const R = XC(y);
  Ad(o, l, c, v);
  const b = E.inset, k = b !== void 0 && b > 0 ? b : iv(l, c), _ = Math.max(1, l - 2 * k), A = Math.max(1, c - 2 * k), P = Math.max(E.itemHeight, Math.min(16, A * 0.13)), Y = E.autoFit ? Math.max(1, Math.floor((A + E.gapY) / (P + E.gapY))) : E.rows, K = E.autoFit ? Math.max(1, Math.floor((_ + E.gapX) / (E.itemWidth + E.gapX))) : E.cols, q = E.autoFit ? (_ - (K - 1) * E.gapX) / K : E.itemWidth, te = E.autoFit ? P : E.itemHeight, ie = K * q + (K - 1) * E.gapX, oe = Y * te + (Y - 1) * E.gapY, ye = k + (E.autoFit ? (_ - ie) / 2 : 0), ne = k + (A - oe) / 2;
  for (let ve = 0; ve < Y; ve++) {
    const Ee = ne + ve * (te + E.gapY), De = E.phaseOffset * ve;
    for (let Ne = 0; Ne < K; Ne++) {
      const Oe = ye + Ne * (q + E.gapX), lt = (K > 1 ? Ne / (K - 1) : 0) * E.waveFrequency + De + p * E.speed, tt = E.opacityMin + ((Sg(lt, E.waveType) * E.waveAmplitude + 1) / 2 + 0.15 * R()) * (E.opacityMax - E.opacityMin);
      QC(
        o,
        Oe,
        Ee,
        q,
        te,
        T,
        Math.max(E.opacityMin, Math.min(E.opacityMax, tt))
      );
    }
  }
}
function EV(o, l, c, p, y, T, v, E) {
  const R = XC(y);
  Ad(o, l, c, v);
  const b = iv(l, c), k = c - 2 * b, _ = Math.max(1, l - 2 * b), A = b + Math.max(0, (k - E.rows * (E.maxThickness + E.gapY)) / 2);
  o.fillStyle = T;
  for (let P = 0; P < E.rows; P++) {
    const Y = E.rows > 1 ? P / (E.rows - 1) : 0, K = A + P * (E.maxThickness + E.gapY), q = E.baseThickness + Y * (E.maxThickness - E.baseThickness), te = 1 - 0.8 * Y;
    for (let ie = 0; ie < 100; ie++) {
      const oe = b + ie / 100 * _, ye = _ / 100 + 1, ne = ie / 100;
      let ve = E.baseThickness;
      ne > te && (ve = E.baseThickness + (ne - te) / (1 - te) * (q - E.baseThickness));
      const Ee = (ne + Y) * E.waveFrequency + E.phaseOffset + p * E.speed, De = Sg(Ee, E.waveType) * E.waveAmplitude * Math.min(3, k * 0.028), Ne = (R() - 0.5) * E.noiseAmount * ve, Oe = Math.max(
        b + ve / 2,
        Math.min(c - b - ve / 2, K + De + Ne)
      );
      o.fillRect(oe, Oe - ve / 2, ye, ve);
    }
  }
}
function CV(o, l, c, p, y, T, v, E) {
  const R = XC(y);
  Ad(o, l, c, v);
  const b = iv(l, c), k = Math.max(1, l - 2 * b), _ = Math.max(1, c - 2 * b), A = E.rows, P = E.cols, Y = E.gapX, K = E.gapY, q = Math.max(12, Math.min(22, (_ - (A - 1) * K) / A)), te = b + (_ - (A * (q + K) - K)) / 2;
  for (let ie = 0; ie < A; ie++) {
    const oe = te + ie * (q + K), ye = ie * E.stagger, ne = [];
    for (let lt = 0; lt < P; lt++) {
      const tt = lt / P * E.waveFrequency + ye + E.phaseOffset + p * E.speed;
      let Ue = E.minWidth + (0.5 + ((Sg(tt, E.waveType) + 1) / 2 - 0.5) * E.waveAmplitude) * (E.maxWidth - E.minWidth) + (R() - 0.5) * 0.5;
      Ue = Math.max(Math.max(0.5, E.minWidth), Math.min(E.maxWidth, Ue)), ne.push(Ue);
    }
    const ve = (P - 1) * Y, Ee = ne.reduce((lt, tt) => lt + tt, 0), Ne = Math.max(1e-3, k - ve) / Ee;
    let Oe = b;
    for (let lt = 0; lt < P; lt++) {
      const tt = ne[lt] * Ne;
      QC(o, Oe, oe, tt, q, T), Oe += tt + Y;
    }
  }
}
function TV(o, l, c, p, y, T, v) {
  Ad(o, l, c, T);
  const E = Math.max(
    iv(l, c),
    Math.max(7, Math.min(14, v.gridSize * Math.min(l, c) / 120))
  ), R = Math.max(0.55, Math.min(1.35, v.strokeWidth * (Math.min(l, c) / 120)));
  o.strokeStyle = y, o.lineWidth = R, o.globalAlpha = v.gridOpacity;
  for (let Oe = 0; Oe <= l; Oe += E)
    o.beginPath(), o.moveTo(Oe, 0), o.lineTo(Oe, c), o.stroke();
  for (let Oe = 0; Oe <= c; Oe += E)
    o.beginPath(), o.moveTo(0, Oe), o.lineTo(l, Oe), o.stroke();
  o.globalAlpha = 1;
  const b = (Oe) => Math.round(Oe / E) * E, k = l - 2 * E, _ = c - 2 * E;
  ng(o, E, E, k, _, 2 * v.cornerRadius, y, R, 0.4, !0);
  const A = E + E, P = E + E, Y = k - 2 * E, K = _ - 2 * E, q = b(0.28 * Y);
  ng(o, A, P, q, K, v.cornerRadius, y, R, 0.6, !0);
  const te = A + q + E, ie = Y - q - E;
  ng(o, te, P, ie, K, v.cornerRadius, y, R, 0.6, !0);
  const oe = Math.max(E, b((ie - 2 * E - 2 * E) / 3)), ye = 2 * E, ne = Math.max(E, K - 2 * ye), ve = P + ye, Ee = Math.max(oe + E, 1), De = v.animated ? (p * v.speed * 25 % Ee + Ee) % Ee : 0;
  o.save(), o.beginPath(), o.roundRect(te + R, P + R, ie - 2 * R, K - 2 * R, v.cornerRadius - 1), o.clip();
  const Ne = te + E - De;
  for (let Oe = 0; Oe < 5; Oe++)
    ng(
      o,
      Ne + Oe * Ee,
      ve,
      oe,
      ne,
      v.cornerRadius - 1,
      y,
      R,
      0.5,
      !0
    );
  o.restore();
}
function xV(o, l, c, p, y, T) {
  const v = mV(l, c, p);
  if (!v) return;
  const { ctx: E, w: R, h: b } = v, k = T.fg, _ = T.bg, A = T.seed, P = { ...yV[o] };
  switch (o) {
    case "waveformBars":
      gV(E, R, b, y, A, k, _, P);
      break;
    case "gridBlocks":
      SV(E, R, b, y, A, k, _, P);
      break;
    case "noiseLines":
      EV(E, R, b, y, A, k, _, P);
      break;
    case "fluidGrid":
      CV(E, R, b, y, A, k, _, P);
      break;
    case "interfaceBlueprint":
      TV(E, R, b, y, k, _, P);
      break;
    default:
      Ad(E, R, b, _);
  }
}
function RV(o, l) {
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
function wV() {
  const [o, l] = Ge.useState(!1);
  return Ge.useEffect(() => {
    const c = window.matchMedia(`(max-width: ${aV}px)`), p = () => l(c.matches);
    return p(), c.addEventListener("change", p), () => c.removeEventListener("change", p);
  }, []), o;
}
function bV() {
  const o = Ge.useRef(/* @__PURE__ */ new Map()), l = Ge.useRef(performance.now());
  return Ge.useEffect(() => {
    let p = 0;
    const y = (T) => {
      const v = (T - l.current) / 1e3;
      VD.forEach((E, R) => {
        const b = o.current.get(R);
        if (!b) return;
        const k = Math.max(1, Math.round(b.clientWidth)), _ = Math.max(1, Math.round(b.clientHeight));
        xV(E.graphic, b, k, _, v, E);
      }), p = requestAnimationFrame(y);
    };
    return p = requestAnimationFrame(y), () => cancelAnimationFrame(p);
  }, []), Ge.useCallback((p, y) => {
    y ? o.current.set(p, y) : o.current.delete(p);
  }, []);
}
function DV({ className: o }) {
  const c = wV() ? pV : UD, p = rV(), [y, T] = Ge.useState(null), v = y !== null, E = p ? a1 : {
    ...hV,
    filter: { type: "tween", duration: 0.26, ease: [0.4, 0, 0.2, 1] },
    opacity: { type: "tween", duration: 0.28, ease: [0.4, 0, 0.2, 1] }
  }, R = Ge.useRef(null), b = bV(), k = Ge.useMemo(
    () => RV(y, c),
    [y, c]
  );
  Ge.useEffect(() => {
    const Y = (K) => {
      if (y === null) return;
      const q = K.target;
      q instanceof Element && (q.closest(".card-stack-shell") || T(null));
    };
    return document.addEventListener("pointerdown", Y, !0), () => document.removeEventListener("pointerdown", Y, !0);
  }, [y]), Ge.useEffect(() => {
    const Y = (K) => {
      K.key === "Escape" && T(null);
    };
    return document.addEventListener("keydown", Y), () => document.removeEventListener("keydown", Y);
  }, []);
  const { cardWidth: _, cardHeight: A, stagePadding: P } = c;
  return /* @__PURE__ */ lr.jsxs(
    "section",
    {
      className: `flex w-full flex-shrink-0 flex-col items-center justify-center gap-3 px-4 py-8 select-none ${o ?? ""}`,
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
              maxWidth: `min(100%, ${lV}px)`,
              width: "100%",
              ...v ? {
                minHeight: cV,
                aspectRatio: "auto"
              } : {
                aspectRatio: sV,
                minHeight: uV
              }
            },
            children: /* @__PURE__ */ lr.jsx(
              "div",
              {
                className: "absolute inset-0 box-border overflow-visible",
                style: { padding: P },
                children: /* @__PURE__ */ lr.jsx("div", { className: "relative h-full w-full overflow-visible", children: VD.map((Y, K) => {
                  const q = k.get(K), te = y === K, ie = vV(Y.bg), oe = {
                    background: `linear-gradient(to top, rgba(${ie}, 0.88) 0%, rgba(${ie}, 0.45) 55%, rgba(${ie}, 0) 100%)`
                  };
                  return /* @__PURE__ */ lr.jsx(
                    r1.div,
                    {
                      className: "card-stack-shell absolute left-1/2 top-1/2 cursor-pointer rounded-[18px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B]",
                      role: "button",
                      tabIndex: 0,
                      "aria-pressed": te,
                      "aria-expanded": te,
                      style: {
                        width: _,
                        height: A,
                        marginLeft: -_ / 2,
                        marginTop: -A / 2,
                        // Reference: fan pivots from top so bottoms spread wider (hero uses center for scale)
                        transformOrigin: v ? "center center" : "50% 0%",
                        willChange: "transform",
                        zIndex: q.zIndex
                      },
                      initial: !1,
                      animate: {
                        x: q.x,
                        y: q.y,
                        rotate: q.rotate,
                        scale: q.scale,
                        opacity: q.opacity,
                        filter: q.filter
                      },
                      transition: E,
                      onPointerDown: (ye) => ye.stopPropagation(),
                      onClick: (ye) => {
                        ye.stopPropagation(), T((ne) => ne === K ? null : K);
                      },
                      onKeyDown: (ye) => {
                        (ye.key === "Enter" || ye.key === " ") && (ye.preventDefault(), T((ne) => ne === K ? null : K));
                      },
                      children: /* @__PURE__ */ lr.jsxs(
                        "div",
                        {
                          className: `relative h-full w-full overflow-hidden rounded-[18px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] ${te && v ? "shadow-[0_28px_64px_-12px_rgba(0,0,0,0.65),0_12px_24px_-6px_rgba(0,0,0,0.45)]" : "shadow-[0_22px_48px_-8px_rgba(0,0,0,0.55),0_8px_16px_-4px_rgba(0,0,0,0.35)]"}`,
                          style: { background: Y.bg },
                          children: [
                            /* @__PURE__ */ lr.jsx("div", { className: "pointer-events-none absolute left-6 right-6 top-6 z-[1] h-[138px] overflow-hidden rounded-[10px] py-2.5", children: /* @__PURE__ */ lr.jsx(
                              "canvas",
                              {
                                ref: (ye) => b(K, ye),
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
                                  style: { color: Y.labelColor },
                                  children: Y.title
                                }
                              ),
                              /* @__PURE__ */ lr.jsx(
                                r1.div,
                                {
                                  className: `relative z-[1] overflow-hidden ${te ? `mt-2 overflow-y-auto pointer-events-auto ${v ? "max-h-[160px]" : "max-h-[100px]"}` : "mt-0 max-h-0 pointer-events-none"}`,
                                  initial: !1,
                                  animate: {
                                    opacity: te ? 1 : 0
                                  },
                                  transition: p ? a1 : { opacity: { duration: 0.32, ease: [0.4, 0, 0.2, 1] } },
                                  "aria-hidden": !te,
                                  children: /* @__PURE__ */ lr.jsx(
                                    "p",
                                    {
                                      className: "font-card-sans mt-0 text-[13px] font-normal leading-[1.55]",
                                      style: { color: Y.descColor },
                                      children: Y.desc
                                    }
                                  )
                                }
                              )
                            ] }) })
                          ]
                        }
                      )
                    },
                    K
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
const i1 = document.getElementById("card-stack-root");
i1 && eC(i1).render(
  /* @__PURE__ */ lr.jsx(Ge.StrictMode, { children: /* @__PURE__ */ lr.jsx(DV, {}) })
);
