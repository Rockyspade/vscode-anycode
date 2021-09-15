(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __require = (x) => {
    if (typeof require !== "undefined")
      return require(x);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  };
  var __commonJS = (cb, mod10) => function __require2() {
    return mod10 || (0, cb[Object.keys(cb)[0]])((mod10 = { exports: {} }).exports, mod10), mod10.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // tree-sitter/tree-sitter.js
  var require_tree_sitter = __commonJS({
    "tree-sitter/tree-sitter.js"(exports, module) {
      var Module = Module !== void 0 ? Module : {};
      var TreeSitter = function() {
        var e;
        class Parser4 {
          constructor() {
            this.initialize();
          }
          initialize() {
            throw new Error("cannot construct a Parser before calling `init()`");
          }
          static init(t) {
            return e || (Module = Object.assign({}, Module, t), e = new Promise((e2) => {
              var t2, r = {};
              for (t2 in Module)
                Module.hasOwnProperty(t2) && (r[t2] = Module[t2]);
              var n, s, o = [], _ = "./this.program", a = function(e3, t3) {
                throw t3;
              }, u = false, i = false;
              u = typeof window == "object", i = typeof importScripts == "function", n = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string", s = !u && !n && !i;
              var l, d, c, m, f, p = "";
              n ? (p = i ? __require("path").dirname(p) + "/" : __dirname + "/", l = function(e3, t3) {
                return m || (m = __require("fs")), f || (f = __require("path")), e3 = f.normalize(e3), m.readFileSync(e3, t3 ? null : "utf8");
              }, c = function(e3) {
                var t3 = l(e3, true);
                return t3.buffer || (t3 = new Uint8Array(t3)), P(t3.buffer), t3;
              }, process.argv.length > 1 && (_ = process.argv[1].replace(/\\/g, "/")), o = process.argv.slice(2), typeof module != "undefined" && (module.exports = Module), a = function(e3) {
                process.exit(e3);
              }, Module.inspect = function() {
                return "[Emscripten Module object]";
              }) : s ? (typeof read != "undefined" && (l = function(e3) {
                return read(e3);
              }), c = function(e3) {
                var t3;
                return typeof readbuffer == "function" ? new Uint8Array(readbuffer(e3)) : (P(typeof (t3 = read(e3, "binary")) == "object"), t3);
              }, typeof scriptArgs != "undefined" ? o = scriptArgs : arguments !== void 0 && (o = arguments), typeof quit == "function" && (a = function(e3) {
                quit(e3);
              }), typeof print != "undefined" && (typeof console == "undefined" && (console = {}), console.log = print, console.warn = console.error = typeof printErr != "undefined" ? printErr : print)) : (u || i) && (i ? p = self.location.href : typeof document != "undefined" && document.currentScript && (p = document.currentScript.src), p = p.indexOf("blob:") !== 0 ? p.substr(0, p.lastIndexOf("/") + 1) : "", l = function(e3) {
                var t3 = new XMLHttpRequest();
                return t3.open("GET", e3, false), t3.send(null), t3.responseText;
              }, i && (c = function(e3) {
                var t3 = new XMLHttpRequest();
                return t3.open("GET", e3, false), t3.responseType = "arraybuffer", t3.send(null), new Uint8Array(t3.response);
              }), d = function(e3, t3, r2) {
                var n2 = new XMLHttpRequest();
                n2.open("GET", e3, true), n2.responseType = "arraybuffer", n2.onload = function() {
                  n2.status == 200 || n2.status == 0 && n2.response ? t3(n2.response) : r2();
                }, n2.onerror = r2, n2.send(null);
              });
              Module.print || console.log.bind(console);
              var h = Module.printErr || console.warn.bind(console);
              for (t2 in r)
                r.hasOwnProperty(t2) && (Module[t2] = r[t2]);
              r = null, Module.arguments && (o = Module.arguments), Module.thisProgram && (_ = Module.thisProgram), Module.quit && (a = Module.quit);
              var g = 16;
              var w, y = [];
              function M(e3, t3) {
                if (!w) {
                  w = new WeakMap();
                  for (var r2 = 0; r2 < B.length; r2++) {
                    var n2 = B.get(r2);
                    n2 && w.set(n2, r2);
                  }
                }
                if (w.has(e3))
                  return w.get(e3);
                var s2 = function() {
                  if (y.length)
                    return y.pop();
                  try {
                    B.grow(1);
                  } catch (e4) {
                    if (!(e4 instanceof RangeError))
                      throw e4;
                    throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
                  }
                  return B.length - 1;
                }();
                try {
                  B.set(s2, e3);
                } catch (r3) {
                  if (!(r3 instanceof TypeError))
                    throw r3;
                  var o2 = function(e4, t4) {
                    if (typeof WebAssembly.Function == "function") {
                      for (var r4 = { i: "i32", j: "i64", f: "f32", d: "f64" }, n3 = { parameters: [], results: t4[0] == "v" ? [] : [r4[t4[0]]] }, s3 = 1; s3 < t4.length; ++s3)
                        n3.parameters.push(r4[t4[s3]]);
                      return new WebAssembly.Function(n3, e4);
                    }
                    var o3 = [1, 0, 1, 96], _2 = t4.slice(0, 1), a2 = t4.slice(1), u2 = { i: 127, j: 126, f: 125, d: 124 };
                    for (o3.push(a2.length), s3 = 0; s3 < a2.length; ++s3)
                      o3.push(u2[a2[s3]]);
                    _2 == "v" ? o3.push(0) : o3 = o3.concat([1, u2[_2]]), o3[1] = o3.length - 2;
                    var i2 = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0].concat(o3, [2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0])), l2 = new WebAssembly.Module(i2);
                    return new WebAssembly.Instance(l2, { e: { f: e4 } }).exports.f;
                  }(e3, t3);
                  B.set(s2, o2);
                }
                return w.set(e3, s2), s2;
              }
              var b, v = function(e3) {
                e3;
              }, E = Module.dynamicLibraries || [];
              Module.wasmBinary && (b = Module.wasmBinary);
              var I, A = Module.noExitRuntime || true;
              function S(e3, t3, r2, n2) {
                switch ((r2 = r2 || "i8").charAt(r2.length - 1) === "*" && (r2 = "i32"), r2) {
                  case "i1":
                  case "i8":
                    q[e3 >> 0] = t3;
                    break;
                  case "i16":
                    T[e3 >> 1] = t3;
                    break;
                  case "i32":
                    L[e3 >> 2] = t3;
                    break;
                  case "i64":
                    ae = [t3 >>> 0, (_e = t3, +Math.abs(_e) >= 1 ? _e > 0 ? (0 | Math.min(+Math.floor(_e / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((_e - +(~~_e >>> 0)) / 4294967296) >>> 0 : 0)], L[e3 >> 2] = ae[0], L[e3 + 4 >> 2] = ae[1];
                    break;
                  case "float":
                    W[e3 >> 2] = t3;
                    break;
                  case "double":
                    O[e3 >> 3] = t3;
                    break;
                  default:
                    se("invalid type for setValue: " + r2);
                }
              }
              function x(e3, t3, r2) {
                switch ((t3 = t3 || "i8").charAt(t3.length - 1) === "*" && (t3 = "i32"), t3) {
                  case "i1":
                  case "i8":
                    return q[e3 >> 0];
                  case "i16":
                    return T[e3 >> 1];
                  case "i32":
                  case "i64":
                    return L[e3 >> 2];
                  case "float":
                    return W[e3 >> 2];
                  case "double":
                    return O[e3 >> 3];
                  default:
                    se("invalid type for getValue: " + t3);
                }
                return null;
              }
              typeof WebAssembly != "object" && se("no native wasm support detected");
              var N = false;
              function P(e3, t3) {
                e3 || se("Assertion failed: " + t3);
              }
              var k = 1;
              var C, q, R, T, L, W, O, Z = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : void 0;
              function F(e3, t3, r2) {
                for (var n2 = t3 + r2, s2 = t3; e3[s2] && !(s2 >= n2); )
                  ++s2;
                if (s2 - t3 > 16 && e3.subarray && Z)
                  return Z.decode(e3.subarray(t3, s2));
                for (var o2 = ""; t3 < s2; ) {
                  var _2 = e3[t3++];
                  if (128 & _2) {
                    var a2 = 63 & e3[t3++];
                    if ((224 & _2) != 192) {
                      var u2 = 63 & e3[t3++];
                      if ((_2 = (240 & _2) == 224 ? (15 & _2) << 12 | a2 << 6 | u2 : (7 & _2) << 18 | a2 << 12 | u2 << 6 | 63 & e3[t3++]) < 65536)
                        o2 += String.fromCharCode(_2);
                      else {
                        var i2 = _2 - 65536;
                        o2 += String.fromCharCode(55296 | i2 >> 10, 56320 | 1023 & i2);
                      }
                    } else
                      o2 += String.fromCharCode((31 & _2) << 6 | a2);
                  } else
                    o2 += String.fromCharCode(_2);
                }
                return o2;
              }
              function $(e3, t3) {
                return e3 ? F(R, e3, t3) : "";
              }
              function j(e3, t3, r2, n2) {
                if (!(n2 > 0))
                  return 0;
                for (var s2 = r2, o2 = r2 + n2 - 1, _2 = 0; _2 < e3.length; ++_2) {
                  var a2 = e3.charCodeAt(_2);
                  if (a2 >= 55296 && a2 <= 57343)
                    a2 = 65536 + ((1023 & a2) << 10) | 1023 & e3.charCodeAt(++_2);
                  if (a2 <= 127) {
                    if (r2 >= o2)
                      break;
                    t3[r2++] = a2;
                  } else if (a2 <= 2047) {
                    if (r2 + 1 >= o2)
                      break;
                    t3[r2++] = 192 | a2 >> 6, t3[r2++] = 128 | 63 & a2;
                  } else if (a2 <= 65535) {
                    if (r2 + 2 >= o2)
                      break;
                    t3[r2++] = 224 | a2 >> 12, t3[r2++] = 128 | a2 >> 6 & 63, t3[r2++] = 128 | 63 & a2;
                  } else {
                    if (r2 + 3 >= o2)
                      break;
                    t3[r2++] = 240 | a2 >> 18, t3[r2++] = 128 | a2 >> 12 & 63, t3[r2++] = 128 | a2 >> 6 & 63, t3[r2++] = 128 | 63 & a2;
                  }
                }
                return t3[r2] = 0, r2 - s2;
              }
              function U(e3, t3, r2) {
                return j(e3, R, t3, r2);
              }
              function D(e3) {
                for (var t3 = 0, r2 = 0; r2 < e3.length; ++r2) {
                  var n2 = e3.charCodeAt(r2);
                  n2 >= 55296 && n2 <= 57343 && (n2 = 65536 + ((1023 & n2) << 10) | 1023 & e3.charCodeAt(++r2)), n2 <= 127 ? ++t3 : t3 += n2 <= 2047 ? 2 : n2 <= 65535 ? 3 : 4;
                }
                return t3;
              }
              function z(e3) {
                var t3 = D(e3) + 1, r2 = De(t3);
                return j(e3, q, r2, t3), r2;
              }
              function G(e3) {
                C = e3, Module.HEAP8 = q = new Int8Array(e3), Module.HEAP16 = T = new Int16Array(e3), Module.HEAP32 = L = new Int32Array(e3), Module.HEAPU8 = R = new Uint8Array(e3), Module.HEAPU16 = new Uint16Array(e3), Module.HEAPU32 = new Uint32Array(e3), Module.HEAPF32 = W = new Float32Array(e3), Module.HEAPF64 = O = new Float64Array(e3);
              }
              var H = Module.INITIAL_MEMORY || 33554432;
              (I = Module.wasmMemory ? Module.wasmMemory : new WebAssembly.Memory({ initial: H / 65536, maximum: 32768 })) && (C = I.buffer), H = C.byteLength, G(C);
              var B = new WebAssembly.Table({ initial: 13, element: "anyfunc" }), K = [], V = [], X = [], Q = [], J = false;
              var Y = 0, ee = null, te = null;
              function re(e3) {
                Y++, Module.monitorRunDependencies && Module.monitorRunDependencies(Y);
              }
              function ne(e3) {
                if (Y--, Module.monitorRunDependencies && Module.monitorRunDependencies(Y), Y == 0 && (ee !== null && (clearInterval(ee), ee = null), te)) {
                  var t3 = te;
                  te = null, t3();
                }
              }
              function se(e3) {
                throw Module.onAbort && Module.onAbort(e3), h(e3 += ""), N = true, 1, e3 = "abort(" + e3 + "). Build with -s ASSERTIONS=1 for more info.", new WebAssembly.RuntimeError(e3);
              }
              Module.preloadedImages = {}, Module.preloadedAudios = {}, Module.preloadedWasm = {};
              var oe, _e, ae, ue = "data:application/octet-stream;base64,";
              function ie(e3) {
                return e3.startsWith(ue);
              }
              function le(e3) {
                return e3.startsWith("file://");
              }
              function de(e3) {
                try {
                  if (e3 == oe && b)
                    return new Uint8Array(b);
                  if (c)
                    return c(e3);
                  throw "both async and sync fetching of the wasm failed";
                } catch (e4) {
                  se(e4);
                }
              }
              ie(oe = "tree-sitter.wasm") || (oe = function(e3) {
                return Module.locateFile ? Module.locateFile(e3, p) : p + e3;
              }(oe));
              var ce = {}, me = { get: function(e3, t3) {
                return ce[t3] || (ce[t3] = new WebAssembly.Global({ value: "i32", mutable: true })), ce[t3];
              } };
              function fe(e3) {
                for (; e3.length > 0; ) {
                  var t3 = e3.shift();
                  if (typeof t3 != "function") {
                    var r2 = t3.func;
                    typeof r2 == "number" ? t3.arg === void 0 ? B.get(r2)() : B.get(r2)(t3.arg) : r2(t3.arg === void 0 ? null : t3.arg);
                  } else
                    t3(Module);
                }
              }
              function pe(e3) {
                var t3 = 0;
                function r2() {
                  for (var r3 = 0, n3 = 1; ; ) {
                    var s3 = e3[t3++];
                    if (r3 += (127 & s3) * n3, n3 *= 128, !(128 & s3))
                      break;
                  }
                  return r3;
                }
                if (e3 instanceof WebAssembly.Module) {
                  var n2 = WebAssembly.Module.customSections(e3, "dylink");
                  P(n2.length != 0, "need dylink section"), e3 = new Int8Array(n2[0]);
                } else {
                  P(new Uint32Array(new Uint8Array(e3.subarray(0, 24)).buffer)[0] == 1836278016, "need to see wasm magic number"), P(e3[8] === 0, "need the dylink section to be first"), t3 = 9, r2(), P(e3[t3] === 6), P(e3[++t3] === "d".charCodeAt(0)), P(e3[++t3] === "y".charCodeAt(0)), P(e3[++t3] === "l".charCodeAt(0)), P(e3[++t3] === "i".charCodeAt(0)), P(e3[++t3] === "n".charCodeAt(0)), P(e3[++t3] === "k".charCodeAt(0)), t3++;
                }
                var s2 = {};
                s2.memorySize = r2(), s2.memoryAlign = r2(), s2.tableSize = r2(), s2.tableAlign = r2();
                var o2 = r2();
                s2.neededDynlibs = [];
                for (var _2 = 0; _2 < o2; ++_2) {
                  var a2 = r2(), u2 = e3.subarray(t3, t3 + a2);
                  t3 += a2;
                  var i2 = F(u2, 0);
                  s2.neededDynlibs.push(i2);
                }
                return s2;
              }
              var he = 0;
              function ge() {
                return A || he > 0;
              }
              function we(e3) {
                return e3.indexOf("dynCall_") == 0 || ["stackAlloc", "stackSave", "stackRestore"].includes(e3) ? e3 : "_" + e3;
              }
              function ye(e3, t3) {
                for (var r2 in e3)
                  if (e3.hasOwnProperty(r2)) {
                    Ze.hasOwnProperty(r2) || (Ze[r2] = e3[r2]);
                    var n2 = we(r2);
                    Module.hasOwnProperty(n2) || (Module[n2] = e3[r2]);
                  }
              }
              var Me = { nextHandle: 1, loadedLibs: {}, loadedLibNames: {} };
              function be(e3, t3, r2) {
                return e3.includes("j") ? function(e4, t4, r3) {
                  var n2 = Module["dynCall_" + e4];
                  return r3 && r3.length ? n2.apply(null, [t4].concat(r3)) : n2.call(null, t4);
                }(e3, t3, r2) : B.get(t3).apply(null, r2);
              }
              var ve = 5250816;
              function Ee(e3) {
                return ["__cpp_exception", "__wasm_apply_data_relocs", "__dso_handle", "__set_stack_limits"].includes(e3);
              }
              function Ie(e3, t3) {
                var r2 = {};
                for (var n2 in e3) {
                  var s2 = e3[n2];
                  typeof s2 == "object" && (s2 = s2.value), typeof s2 == "number" && (s2 += t3), r2[n2] = s2;
                }
                return function(e4) {
                  for (var t4 in e4)
                    if (!Ee(t4)) {
                      var r3 = false, n3 = e4[t4];
                      t4.startsWith("orig$") && (t4 = t4.split("$")[1], r3 = true), ce[t4] || (ce[t4] = new WebAssembly.Global({ value: "i32", mutable: true })), (r3 || ce[t4].value == 0) && (typeof n3 == "function" ? ce[t4].value = M(n3) : typeof n3 == "number" ? ce[t4].value = n3 : h("unhandled export type for `" + t4 + "`: " + typeof n3));
                    }
                }(r2), r2;
              }
              function Ae(e3, t3) {
                var r2, n2;
                return t3 && (r2 = Ze["orig$" + e3]), r2 || (r2 = Ze[e3]), r2 || (r2 = Module[we(e3)]), !r2 && e3.startsWith("invoke_") && (n2 = e3.split("_")[1], r2 = function() {
                  var e4 = je();
                  try {
                    return be(n2, arguments[0], Array.prototype.slice.call(arguments, 1));
                  } catch (t4) {
                    if (Ue(e4), t4 !== t4 + 0 && t4 !== "longjmp")
                      throw t4;
                    ze(1, 0);
                  }
                }), r2;
              }
              function Se(e3, t3) {
                var r2 = pe(e3);
                function n2() {
                  var n3 = Math.pow(2, r2.memoryAlign);
                  n3 = Math.max(n3, g);
                  var s2, o2, _2, a2 = (s2 = function(e4) {
                    if (J)
                      return Fe(e4);
                    var t4 = ve, r3 = t4 + e4 + 15 & -16;
                    return ve = r3, ce.__heap_base.value = r3, t4;
                  }(r2.memorySize + n3), (o2 = n3) || (o2 = g), Math.ceil(s2 / o2) * o2), u2 = B.length;
                  B.grow(r2.tableSize);
                  for (var i2 = a2; i2 < a2 + r2.memorySize; i2++)
                    q[i2] = 0;
                  for (i2 = u2; i2 < u2 + r2.tableSize; i2++)
                    B.set(i2, null);
                  var l2 = new Proxy({}, { get: function(e4, t4) {
                    switch (t4) {
                      case "__memory_base":
                        return a2;
                      case "__table_base":
                        return u2;
                    }
                    if (t4 in Ze)
                      return Ze[t4];
                    var r3;
                    t4 in e4 || (e4[t4] = function() {
                      return r3 || (r3 = function(e5) {
                        var t5 = Ae(e5, false);
                        return t5 || (t5 = _2[e5]), t5;
                      }(t4)), r3.apply(null, arguments);
                    });
                    return e4[t4];
                  } }), d2 = { "GOT.mem": new Proxy({}, me), "GOT.func": new Proxy({}, me), env: l2, wasi_snapshot_preview1: l2 };
                  function c2(e4) {
                    for (var n4 = 0; n4 < r2.tableSize; n4++) {
                      var s3 = B.get(u2 + n4);
                      s3 && w.set(s3, u2 + n4);
                    }
                    _2 = Ie(e4.exports, a2), t3.allowUndefined || Ne();
                    var o3 = _2.__wasm_call_ctors;
                    return o3 || (o3 = _2.__post_instantiate), o3 && (J ? o3() : V.push(o3)), _2;
                  }
                  if (t3.loadAsync) {
                    if (e3 instanceof WebAssembly.Module) {
                      var m2 = new WebAssembly.Instance(e3, d2);
                      return Promise.resolve(c2(m2));
                    }
                    return WebAssembly.instantiate(e3, d2).then(function(e4) {
                      return c2(e4.instance);
                    });
                  }
                  var f2 = e3 instanceof WebAssembly.Module ? e3 : new WebAssembly.Module(e3);
                  return c2(m2 = new WebAssembly.Instance(f2, d2));
                }
                return t3.loadAsync ? r2.neededDynlibs.reduce(function(e4, r3) {
                  return e4.then(function() {
                    return xe(r3, t3);
                  });
                }, Promise.resolve()).then(function() {
                  return n2();
                }) : (r2.neededDynlibs.forEach(function(e4) {
                  xe(e4, t3);
                }), n2());
              }
              function xe(e3, t3) {
                e3 != "__main__" || Me.loadedLibNames[e3] || (Me.loadedLibs[-1] = { refcount: 1 / 0, name: "__main__", module: Module.asm, global: true }, Me.loadedLibNames.__main__ = -1), t3 = t3 || { global: true, nodelete: true };
                var r2, n2 = Me.loadedLibNames[e3];
                if (n2)
                  return r2 = Me.loadedLibs[n2], t3.global && !r2.global && (r2.global = true, r2.module !== "loading" && ye(r2.module)), t3.nodelete && r2.refcount !== 1 / 0 && (r2.refcount = 1 / 0), r2.refcount++, t3.loadAsync ? Promise.resolve(n2) : n2;
                function s2(e4) {
                  if (t3.fs) {
                    var r3 = t3.fs.readFile(e4, { encoding: "binary" });
                    return r3 instanceof Uint8Array || (r3 = new Uint8Array(r3)), t3.loadAsync ? Promise.resolve(r3) : r3;
                  }
                  return t3.loadAsync ? (n3 = e4, fetch(n3, { credentials: "same-origin" }).then(function(e5) {
                    if (!e5.ok)
                      throw "failed to load binary file at '" + n3 + "'";
                    return e5.arrayBuffer();
                  }).then(function(e5) {
                    return new Uint8Array(e5);
                  })) : c(e4);
                  var n3;
                }
                function o2() {
                  if (Module.preloadedWasm !== void 0 && Module.preloadedWasm[e3] !== void 0) {
                    var r3 = Module.preloadedWasm[e3];
                    return t3.loadAsync ? Promise.resolve(r3) : r3;
                  }
                  return t3.loadAsync ? s2(e3).then(function(e4) {
                    return Se(e4, t3);
                  }) : Se(s2(e3), t3);
                }
                function _2(e4) {
                  r2.global && ye(e4), r2.module = e4;
                }
                return n2 = Me.nextHandle++, r2 = { refcount: t3.nodelete ? 1 / 0 : 1, name: e3, module: "loading", global: t3.global }, Me.loadedLibNames[e3] = n2, Me.loadedLibs[n2] = r2, t3.loadAsync ? o2().then(function(e4) {
                  return _2(e4), n2;
                }) : (_2(o2()), n2);
              }
              function Ne() {
                for (var e3 in ce)
                  if (ce[e3].value == 0) {
                    var t3 = Ae(e3, true);
                    typeof t3 == "function" ? ce[e3].value = M(t3, t3.sig) : typeof t3 == "number" ? ce[e3].value = t3 : P(false, "bad export type for `" + e3 + "`: " + typeof t3);
                  }
              }
              Module.___heap_base = ve;
              var Pe, ke = new WebAssembly.Global({ value: "i32", mutable: true }, 5250816);
              function Ce() {
                se();
              }
              Module._abort = Ce, Ce.sig = "v", Pe = n ? function() {
                var e3 = process.hrtime();
                return 1e3 * e3[0] + e3[1] / 1e6;
              } : typeof dateNow != "undefined" ? dateNow : function() {
                return performance.now();
              };
              var qe = true;
              function Re(e3, t3) {
                var r2, n2;
                if (e3 === 0)
                  r2 = Date.now();
                else {
                  if (e3 !== 1 && e3 !== 4 || !qe)
                    return n2 = 28, L[$e() >> 2] = n2, -1;
                  r2 = Pe();
                }
                return L[t3 >> 2] = r2 / 1e3 | 0, L[t3 + 4 >> 2] = r2 % 1e3 * 1e3 * 1e3 | 0, 0;
              }
              function Te(e3) {
                try {
                  return I.grow(e3 - C.byteLength + 65535 >>> 16), G(I.buffer), 1;
                } catch (e4) {
                }
              }
              function Le(e3) {
                Ke(e3);
              }
              function We(e3) {
                v(e3);
              }
              Re.sig = "iii", Le.sig = "vi", We.sig = "vi";
              var Oe, Ze = { __heap_base: ve, __indirect_function_table: B, __memory_base: 1024, __stack_pointer: ke, __table_base: 1, abort: Ce, clock_gettime: Re, emscripten_memcpy_big: function(e3, t3, r2) {
                R.copyWithin(e3, t3, t3 + r2);
              }, emscripten_resize_heap: function(e3) {
                var t3, r2, n2 = R.length;
                if ((e3 >>>= 0) > 2147483648)
                  return false;
                for (var s2 = 1; s2 <= 4; s2 *= 2) {
                  var o2 = n2 * (1 + 0.2 / s2);
                  if (o2 = Math.min(o2, e3 + 100663296), Te(Math.min(2147483648, ((t3 = Math.max(e3, o2)) % (r2 = 65536) > 0 && (t3 += r2 - t3 % r2), t3))))
                    return true;
                }
                return false;
              }, exit: Le, memory: I, setTempRet0: We, tree_sitter_log_callback: function(e3, t3) {
                if (dt) {
                  const r2 = $(t3);
                  dt(r2, e3 !== 0);
                }
              }, tree_sitter_parse_callback: function(e3, t3, r2, n2, s2) {
                var o2 = lt(t3, { row: r2, column: n2 });
                typeof o2 == "string" ? (S(s2, o2.length, "i32"), function(e4, t4, r3) {
                  if (r3 === void 0 && (r3 = 2147483647), r3 < 2)
                    return 0;
                  for (var n3 = (r3 -= 2) < 2 * e4.length ? r3 / 2 : e4.length, s3 = 0; s3 < n3; ++s3) {
                    var o3 = e4.charCodeAt(s3);
                    T[t4 >> 1] = o3, t4 += 2;
                  }
                  T[t4 >> 1] = 0;
                }(o2, e3, 10240)) : S(s2, 0, "i32");
              } }, Fe = (function() {
                var e3 = { env: Ze, wasi_snapshot_preview1: Ze, "GOT.mem": new Proxy(Ze, me), "GOT.func": new Proxy(Ze, me) };
                function t3(e4, t4) {
                  var r3 = e4.exports;
                  r3 = Ie(r3, 1024), Module.asm = r3;
                  var n3, s2 = pe(t4);
                  s2.neededDynlibs && (E = s2.neededDynlibs.concat(E)), ye(r3), n3 = Module.asm.__wasm_call_ctors, V.unshift(n3), ne();
                }
                function r2(e4) {
                  t3(e4.instance, e4.module);
                }
                function n2(t4) {
                  return function() {
                    if (!b && (u || i)) {
                      if (typeof fetch == "function" && !le(oe))
                        return fetch(oe, { credentials: "same-origin" }).then(function(e4) {
                          if (!e4.ok)
                            throw "failed to load wasm binary file at '" + oe + "'";
                          return e4.arrayBuffer();
                        }).catch(function() {
                          return de(oe);
                        });
                      if (d)
                        return new Promise(function(e4, t5) {
                          d(oe, function(t6) {
                            e4(new Uint8Array(t6));
                          }, t5);
                        });
                    }
                    return Promise.resolve().then(function() {
                      return de(oe);
                    });
                  }().then(function(t5) {
                    return WebAssembly.instantiate(t5, e3);
                  }).then(t4, function(e4) {
                    h("failed to asynchronously prepare wasm: " + e4), se(e4);
                  });
                }
                if (re(), Module.instantiateWasm)
                  try {
                    return Module.instantiateWasm(e3, t3);
                  } catch (e4) {
                    return h("Module.instantiateWasm callback failed with error: " + e4), false;
                  }
                b || typeof WebAssembly.instantiateStreaming != "function" || ie(oe) || le(oe) || typeof fetch != "function" ? n2(r2) : fetch(oe, { credentials: "same-origin" }).then(function(t4) {
                  return WebAssembly.instantiateStreaming(t4, e3).then(r2, function(e4) {
                    return h("wasm streaming compile failed: " + e4), h("falling back to ArrayBuffer instantiation"), n2(r2);
                  });
                });
              }(), Module.___wasm_call_ctors = function() {
                return (Module.___wasm_call_ctors = Module.asm.__wasm_call_ctors).apply(null, arguments);
              }, Module._malloc = function() {
                return (Fe = Module._malloc = Module.asm.malloc).apply(null, arguments);
              }), $e = (Module._ts_language_symbol_count = function() {
                return (Module._ts_language_symbol_count = Module.asm.ts_language_symbol_count).apply(null, arguments);
              }, Module._ts_language_version = function() {
                return (Module._ts_language_version = Module.asm.ts_language_version).apply(null, arguments);
              }, Module._ts_language_field_count = function() {
                return (Module._ts_language_field_count = Module.asm.ts_language_field_count).apply(null, arguments);
              }, Module._ts_language_symbol_name = function() {
                return (Module._ts_language_symbol_name = Module.asm.ts_language_symbol_name).apply(null, arguments);
              }, Module._ts_language_symbol_for_name = function() {
                return (Module._ts_language_symbol_for_name = Module.asm.ts_language_symbol_for_name).apply(null, arguments);
              }, Module._ts_language_symbol_type = function() {
                return (Module._ts_language_symbol_type = Module.asm.ts_language_symbol_type).apply(null, arguments);
              }, Module._ts_language_field_name_for_id = function() {
                return (Module._ts_language_field_name_for_id = Module.asm.ts_language_field_name_for_id).apply(null, arguments);
              }, Module._memcpy = function() {
                return (Module._memcpy = Module.asm.memcpy).apply(null, arguments);
              }, Module._free = function() {
                return (Module._free = Module.asm.free).apply(null, arguments);
              }, Module._calloc = function() {
                return (Module._calloc = Module.asm.calloc).apply(null, arguments);
              }, Module._ts_parser_delete = function() {
                return (Module._ts_parser_delete = Module.asm.ts_parser_delete).apply(null, arguments);
              }, Module._ts_parser_reset = function() {
                return (Module._ts_parser_reset = Module.asm.ts_parser_reset).apply(null, arguments);
              }, Module._ts_parser_set_language = function() {
                return (Module._ts_parser_set_language = Module.asm.ts_parser_set_language).apply(null, arguments);
              }, Module._ts_parser_timeout_micros = function() {
                return (Module._ts_parser_timeout_micros = Module.asm.ts_parser_timeout_micros).apply(null, arguments);
              }, Module._ts_parser_set_timeout_micros = function() {
                return (Module._ts_parser_set_timeout_micros = Module.asm.ts_parser_set_timeout_micros).apply(null, arguments);
              }, Module._memcmp = function() {
                return (Module._memcmp = Module.asm.memcmp).apply(null, arguments);
              }, Module._ts_query_new = function() {
                return (Module._ts_query_new = Module.asm.ts_query_new).apply(null, arguments);
              }, Module._ts_query_delete = function() {
                return (Module._ts_query_delete = Module.asm.ts_query_delete).apply(null, arguments);
              }, Module._iswspace = function() {
                return (Module._iswspace = Module.asm.iswspace).apply(null, arguments);
              }, Module._iswalnum = function() {
                return (Module._iswalnum = Module.asm.iswalnum).apply(null, arguments);
              }, Module._ts_query_pattern_count = function() {
                return (Module._ts_query_pattern_count = Module.asm.ts_query_pattern_count).apply(null, arguments);
              }, Module._ts_query_capture_count = function() {
                return (Module._ts_query_capture_count = Module.asm.ts_query_capture_count).apply(null, arguments);
              }, Module._ts_query_string_count = function() {
                return (Module._ts_query_string_count = Module.asm.ts_query_string_count).apply(null, arguments);
              }, Module._ts_query_capture_name_for_id = function() {
                return (Module._ts_query_capture_name_for_id = Module.asm.ts_query_capture_name_for_id).apply(null, arguments);
              }, Module._ts_query_string_value_for_id = function() {
                return (Module._ts_query_string_value_for_id = Module.asm.ts_query_string_value_for_id).apply(null, arguments);
              }, Module._ts_query_predicates_for_pattern = function() {
                return (Module._ts_query_predicates_for_pattern = Module.asm.ts_query_predicates_for_pattern).apply(null, arguments);
              }, Module._ts_tree_copy = function() {
                return (Module._ts_tree_copy = Module.asm.ts_tree_copy).apply(null, arguments);
              }, Module._ts_tree_delete = function() {
                return (Module._ts_tree_delete = Module.asm.ts_tree_delete).apply(null, arguments);
              }, Module._ts_init = function() {
                return (Module._ts_init = Module.asm.ts_init).apply(null, arguments);
              }, Module._ts_parser_new_wasm = function() {
                return (Module._ts_parser_new_wasm = Module.asm.ts_parser_new_wasm).apply(null, arguments);
              }, Module._ts_parser_enable_logger_wasm = function() {
                return (Module._ts_parser_enable_logger_wasm = Module.asm.ts_parser_enable_logger_wasm).apply(null, arguments);
              }, Module._ts_parser_parse_wasm = function() {
                return (Module._ts_parser_parse_wasm = Module.asm.ts_parser_parse_wasm).apply(null, arguments);
              }, Module._ts_language_type_is_named_wasm = function() {
                return (Module._ts_language_type_is_named_wasm = Module.asm.ts_language_type_is_named_wasm).apply(null, arguments);
              }, Module._ts_language_type_is_visible_wasm = function() {
                return (Module._ts_language_type_is_visible_wasm = Module.asm.ts_language_type_is_visible_wasm).apply(null, arguments);
              }, Module._ts_tree_root_node_wasm = function() {
                return (Module._ts_tree_root_node_wasm = Module.asm.ts_tree_root_node_wasm).apply(null, arguments);
              }, Module._ts_tree_edit_wasm = function() {
                return (Module._ts_tree_edit_wasm = Module.asm.ts_tree_edit_wasm).apply(null, arguments);
              }, Module._ts_tree_get_changed_ranges_wasm = function() {
                return (Module._ts_tree_get_changed_ranges_wasm = Module.asm.ts_tree_get_changed_ranges_wasm).apply(null, arguments);
              }, Module._ts_tree_cursor_new_wasm = function() {
                return (Module._ts_tree_cursor_new_wasm = Module.asm.ts_tree_cursor_new_wasm).apply(null, arguments);
              }, Module._ts_tree_cursor_delete_wasm = function() {
                return (Module._ts_tree_cursor_delete_wasm = Module.asm.ts_tree_cursor_delete_wasm).apply(null, arguments);
              }, Module._ts_tree_cursor_reset_wasm = function() {
                return (Module._ts_tree_cursor_reset_wasm = Module.asm.ts_tree_cursor_reset_wasm).apply(null, arguments);
              }, Module._ts_tree_cursor_goto_first_child_wasm = function() {
                return (Module._ts_tree_cursor_goto_first_child_wasm = Module.asm.ts_tree_cursor_goto_first_child_wasm).apply(null, arguments);
              }, Module._ts_tree_cursor_goto_next_sibling_wasm = function() {
                return (Module._ts_tree_cursor_goto_next_sibling_wasm = Module.asm.ts_tree_cursor_goto_next_sibling_wasm).apply(null, arguments);
              }, Module._ts_tree_cursor_goto_parent_wasm = function() {
                return (Module._ts_tree_cursor_goto_parent_wasm = Module.asm.ts_tree_cursor_goto_parent_wasm).apply(null, arguments);
              }, Module._ts_tree_cursor_current_node_type_id_wasm = function() {
                return (Module._ts_tree_cursor_current_node_type_id_wasm = Module.asm.ts_tree_cursor_current_node_type_id_wasm).apply(null, arguments);
              }, Module._ts_tree_cursor_current_node_is_named_wasm = function() {
                return (Module._ts_tree_cursor_current_node_is_named_wasm = Module.asm.ts_tree_cursor_current_node_is_named_wasm).apply(null, arguments);
              }, Module._ts_tree_cursor_current_node_is_missing_wasm = function() {
                return (Module._ts_tree_cursor_current_node_is_missing_wasm = Module.asm.ts_tree_cursor_current_node_is_missing_wasm).apply(null, arguments);
              }, Module._ts_tree_cursor_current_node_id_wasm = function() {
                return (Module._ts_tree_cursor_current_node_id_wasm = Module.asm.ts_tree_cursor_current_node_id_wasm).apply(null, arguments);
              }, Module._ts_tree_cursor_start_position_wasm = function() {
                return (Module._ts_tree_cursor_start_position_wasm = Module.asm.ts_tree_cursor_start_position_wasm).apply(null, arguments);
              }, Module._ts_tree_cursor_end_position_wasm = function() {
                return (Module._ts_tree_cursor_end_position_wasm = Module.asm.ts_tree_cursor_end_position_wasm).apply(null, arguments);
              }, Module._ts_tree_cursor_start_index_wasm = function() {
                return (Module._ts_tree_cursor_start_index_wasm = Module.asm.ts_tree_cursor_start_index_wasm).apply(null, arguments);
              }, Module._ts_tree_cursor_end_index_wasm = function() {
                return (Module._ts_tree_cursor_end_index_wasm = Module.asm.ts_tree_cursor_end_index_wasm).apply(null, arguments);
              }, Module._ts_tree_cursor_current_field_id_wasm = function() {
                return (Module._ts_tree_cursor_current_field_id_wasm = Module.asm.ts_tree_cursor_current_field_id_wasm).apply(null, arguments);
              }, Module._ts_tree_cursor_current_node_wasm = function() {
                return (Module._ts_tree_cursor_current_node_wasm = Module.asm.ts_tree_cursor_current_node_wasm).apply(null, arguments);
              }, Module._ts_node_symbol_wasm = function() {
                return (Module._ts_node_symbol_wasm = Module.asm.ts_node_symbol_wasm).apply(null, arguments);
              }, Module._ts_node_child_count_wasm = function() {
                return (Module._ts_node_child_count_wasm = Module.asm.ts_node_child_count_wasm).apply(null, arguments);
              }, Module._ts_node_named_child_count_wasm = function() {
                return (Module._ts_node_named_child_count_wasm = Module.asm.ts_node_named_child_count_wasm).apply(null, arguments);
              }, Module._ts_node_child_wasm = function() {
                return (Module._ts_node_child_wasm = Module.asm.ts_node_child_wasm).apply(null, arguments);
              }, Module._ts_node_named_child_wasm = function() {
                return (Module._ts_node_named_child_wasm = Module.asm.ts_node_named_child_wasm).apply(null, arguments);
              }, Module._ts_node_child_by_field_id_wasm = function() {
                return (Module._ts_node_child_by_field_id_wasm = Module.asm.ts_node_child_by_field_id_wasm).apply(null, arguments);
              }, Module._ts_node_next_sibling_wasm = function() {
                return (Module._ts_node_next_sibling_wasm = Module.asm.ts_node_next_sibling_wasm).apply(null, arguments);
              }, Module._ts_node_prev_sibling_wasm = function() {
                return (Module._ts_node_prev_sibling_wasm = Module.asm.ts_node_prev_sibling_wasm).apply(null, arguments);
              }, Module._ts_node_next_named_sibling_wasm = function() {
                return (Module._ts_node_next_named_sibling_wasm = Module.asm.ts_node_next_named_sibling_wasm).apply(null, arguments);
              }, Module._ts_node_prev_named_sibling_wasm = function() {
                return (Module._ts_node_prev_named_sibling_wasm = Module.asm.ts_node_prev_named_sibling_wasm).apply(null, arguments);
              }, Module._ts_node_parent_wasm = function() {
                return (Module._ts_node_parent_wasm = Module.asm.ts_node_parent_wasm).apply(null, arguments);
              }, Module._ts_node_descendant_for_index_wasm = function() {
                return (Module._ts_node_descendant_for_index_wasm = Module.asm.ts_node_descendant_for_index_wasm).apply(null, arguments);
              }, Module._ts_node_named_descendant_for_index_wasm = function() {
                return (Module._ts_node_named_descendant_for_index_wasm = Module.asm.ts_node_named_descendant_for_index_wasm).apply(null, arguments);
              }, Module._ts_node_descendant_for_position_wasm = function() {
                return (Module._ts_node_descendant_for_position_wasm = Module.asm.ts_node_descendant_for_position_wasm).apply(null, arguments);
              }, Module._ts_node_named_descendant_for_position_wasm = function() {
                return (Module._ts_node_named_descendant_for_position_wasm = Module.asm.ts_node_named_descendant_for_position_wasm).apply(null, arguments);
              }, Module._ts_node_start_point_wasm = function() {
                return (Module._ts_node_start_point_wasm = Module.asm.ts_node_start_point_wasm).apply(null, arguments);
              }, Module._ts_node_end_point_wasm = function() {
                return (Module._ts_node_end_point_wasm = Module.asm.ts_node_end_point_wasm).apply(null, arguments);
              }, Module._ts_node_start_index_wasm = function() {
                return (Module._ts_node_start_index_wasm = Module.asm.ts_node_start_index_wasm).apply(null, arguments);
              }, Module._ts_node_end_index_wasm = function() {
                return (Module._ts_node_end_index_wasm = Module.asm.ts_node_end_index_wasm).apply(null, arguments);
              }, Module._ts_node_to_string_wasm = function() {
                return (Module._ts_node_to_string_wasm = Module.asm.ts_node_to_string_wasm).apply(null, arguments);
              }, Module._ts_node_children_wasm = function() {
                return (Module._ts_node_children_wasm = Module.asm.ts_node_children_wasm).apply(null, arguments);
              }, Module._ts_node_named_children_wasm = function() {
                return (Module._ts_node_named_children_wasm = Module.asm.ts_node_named_children_wasm).apply(null, arguments);
              }, Module._ts_node_descendants_of_type_wasm = function() {
                return (Module._ts_node_descendants_of_type_wasm = Module.asm.ts_node_descendants_of_type_wasm).apply(null, arguments);
              }, Module._ts_node_is_named_wasm = function() {
                return (Module._ts_node_is_named_wasm = Module.asm.ts_node_is_named_wasm).apply(null, arguments);
              }, Module._ts_node_has_changes_wasm = function() {
                return (Module._ts_node_has_changes_wasm = Module.asm.ts_node_has_changes_wasm).apply(null, arguments);
              }, Module._ts_node_has_error_wasm = function() {
                return (Module._ts_node_has_error_wasm = Module.asm.ts_node_has_error_wasm).apply(null, arguments);
              }, Module._ts_node_is_missing_wasm = function() {
                return (Module._ts_node_is_missing_wasm = Module.asm.ts_node_is_missing_wasm).apply(null, arguments);
              }, Module._ts_query_matches_wasm = function() {
                return (Module._ts_query_matches_wasm = Module.asm.ts_query_matches_wasm).apply(null, arguments);
              }, Module._ts_query_captures_wasm = function() {
                return (Module._ts_query_captures_wasm = Module.asm.ts_query_captures_wasm).apply(null, arguments);
              }, Module._towupper = function() {
                return (Module._towupper = Module.asm.towupper).apply(null, arguments);
              }, Module._iswalpha = function() {
                return (Module._iswalpha = Module.asm.iswalpha).apply(null, arguments);
              }, Module._iswlower = function() {
                return (Module._iswlower = Module.asm.iswlower).apply(null, arguments);
              }, Module._iswdigit = function() {
                return (Module._iswdigit = Module.asm.iswdigit).apply(null, arguments);
              }, Module._memchr = function() {
                return (Module._memchr = Module.asm.memchr).apply(null, arguments);
              }, Module.___errno_location = function() {
                return ($e = Module.___errno_location = Module.asm.__errno_location).apply(null, arguments);
              }), je = (Module._strlen = function() {
                return (Module._strlen = Module.asm.strlen).apply(null, arguments);
              }, Module.stackSave = function() {
                return (je = Module.stackSave = Module.asm.stackSave).apply(null, arguments);
              }), Ue = Module.stackRestore = function() {
                return (Ue = Module.stackRestore = Module.asm.stackRestore).apply(null, arguments);
              }, De = Module.stackAlloc = function() {
                return (De = Module.stackAlloc = Module.asm.stackAlloc).apply(null, arguments);
              }, ze = Module._setThrew = function() {
                return (ze = Module._setThrew = Module.asm.setThrew).apply(null, arguments);
              };
              Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev = function() {
                return (Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev = Module.asm._ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev).apply(null, arguments);
              }, Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9__grow_byEmmmmmm = function() {
                return (Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9__grow_byEmmmmmm = Module.asm._ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9__grow_byEmmmmmm).apply(null, arguments);
              }, Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcm = function() {
                return (Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcm = Module.asm._ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcm).apply(null, arguments);
              }, Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEm = function() {
                return (Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEm = Module.asm._ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEm).apply(null, arguments);
              }, Module.__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4copyEPcmm = function() {
                return (Module.__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4copyEPcmm = Module.asm._ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4copyEPcmm).apply(null, arguments);
              }, Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9push_backEc = function() {
                return (Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9push_backEc = Module.asm._ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9push_backEc).apply(null, arguments);
              }, Module.__ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEED2Ev = function() {
                return (Module.__ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEED2Ev = Module.asm._ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEED2Ev).apply(null, arguments);
              }, Module.__ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE9push_backEw = function() {
                return (Module.__ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE9push_backEw = Module.asm._ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE9push_backEw).apply(null, arguments);
              }, Module.__Znwm = function() {
                return (Module.__Znwm = Module.asm._Znwm).apply(null, arguments);
              }, Module.__ZdlPv = function() {
                return (Module.__ZdlPv = Module.asm._ZdlPv).apply(null, arguments);
              }, Module.__ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv = function() {
                return (Module.__ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv = Module.asm._ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv).apply(null, arguments);
              }, Module._orig$ts_parser_timeout_micros = function() {
                return (Module._orig$ts_parser_timeout_micros = Module.asm.orig$ts_parser_timeout_micros).apply(null, arguments);
              }, Module._orig$ts_parser_set_timeout_micros = function() {
                return (Module._orig$ts_parser_set_timeout_micros = Module.asm.orig$ts_parser_set_timeout_micros).apply(null, arguments);
              };
              function Ge(e3) {
                this.name = "ExitStatus", this.message = "Program terminated with exit(" + e3 + ")", this.status = e3;
              }
              Module.allocate = function(e3, t3) {
                var r2;
                return r2 = t3 == k ? De(e3.length) : Fe(e3.length), e3.subarray || e3.slice ? R.set(e3, r2) : R.set(new Uint8Array(e3), r2), r2;
              };
              te = function e3() {
                Oe || Be(), Oe || (te = e3);
              };
              var He = false;
              function Be(e3) {
                function t3() {
                  Oe || (Oe = true, Module.calledRun = true, N || (J = true, fe(V), fe(X), Module.onRuntimeInitialized && Module.onRuntimeInitialized(), Ve && function(e4) {
                    var t4 = Module._main;
                    if (t4) {
                      var r2 = (e4 = e4 || []).length + 1, n2 = De(4 * (r2 + 1));
                      L[n2 >> 2] = z(_);
                      for (var s2 = 1; s2 < r2; s2++)
                        L[(n2 >> 2) + s2] = z(e4[s2 - 1]);
                      L[(n2 >> 2) + r2] = 0;
                      try {
                        Ke(t4(r2, n2), true);
                      } catch (e5) {
                        if (e5 instanceof Ge)
                          return;
                        if (e5 == "unwind")
                          return;
                        var o2 = e5;
                        e5 && typeof e5 == "object" && e5.stack && (o2 = [e5, e5.stack]), h("exception thrown: " + o2), a(1, e5);
                      } finally {
                        true;
                      }
                    }
                  }(e3), function() {
                    if (Module.postRun)
                      for (typeof Module.postRun == "function" && (Module.postRun = [Module.postRun]); Module.postRun.length; )
                        e4 = Module.postRun.shift(), Q.unshift(e4);
                    var e4;
                    fe(Q);
                  }()));
                }
                e3 = e3 || o, Y > 0 || !He && (function() {
                  if (E.length) {
                    if (!c)
                      return re(), void E.reduce(function(e4, t4) {
                        return e4.then(function() {
                          return xe(t4, { loadAsync: true, global: true, nodelete: true, allowUndefined: true });
                        });
                      }, Promise.resolve()).then(function() {
                        ne(), Ne();
                      });
                    E.forEach(function(e4) {
                      xe(e4, { global: true, nodelete: true, allowUndefined: true });
                    }), Ne();
                  } else
                    Ne();
                }(), He = true, Y > 0) || (!function() {
                  if (Module.preRun)
                    for (typeof Module.preRun == "function" && (Module.preRun = [Module.preRun]); Module.preRun.length; )
                      e4 = Module.preRun.shift(), K.unshift(e4);
                  var e4;
                  fe(K);
                }(), Y > 0 || (Module.setStatus ? (Module.setStatus("Running..."), setTimeout(function() {
                  setTimeout(function() {
                    Module.setStatus("");
                  }, 1), t3();
                }, 1)) : t3()));
              }
              function Ke(e3, t3) {
                e3, t3 && ge() && e3 === 0 || (ge() || (true, Module.onExit && Module.onExit(e3), N = true), a(e3, new Ge(e3)));
              }
              if (Module.run = Be, Module.preInit)
                for (typeof Module.preInit == "function" && (Module.preInit = [Module.preInit]); Module.preInit.length > 0; )
                  Module.preInit.pop()();
              var Ve = true;
              Module.noInitialRun && (Ve = false), Be();
              const Xe = Module, Qe = {}, Je = 4, Ye = 5 * Je, et = 2 * Je, tt = 2 * Je + 2 * et, rt = { row: 0, column: 0 }, nt = /[\w-.]*/g, st = 1, ot = 2, _t = /^_?tree_sitter_\w+/;
              var at, ut, it, lt, dt;
              class ParserImpl {
                static init() {
                  it = Xe._ts_init(), at = x(it, "i32"), ut = x(it + Je, "i32");
                }
                initialize() {
                  Xe._ts_parser_new_wasm(), this[0] = x(it, "i32"), this[1] = x(it + Je, "i32");
                }
                delete() {
                  Xe._ts_parser_delete(this[0]), Xe._free(this[1]), this[0] = 0, this[1] = 0;
                }
                setLanguage(e3) {
                  let t3;
                  if (e3) {
                    if (e3.constructor !== Language)
                      throw new Error("Argument must be a Language");
                    {
                      t3 = e3[0];
                      const r2 = Xe._ts_language_version(t3);
                      if (r2 < ut || at < r2)
                        throw new Error(`Incompatible language version ${r2}. Compatibility range ${ut} through ${at}.`);
                    }
                  } else
                    t3 = 0, e3 = null;
                  return this.language = e3, Xe._ts_parser_set_language(this[0], t3), this;
                }
                getLanguage() {
                  return this.language;
                }
                parse(e3, t3, r2) {
                  if (typeof e3 == "string")
                    lt = (t4, r3, n3) => e3.slice(t4, n3);
                  else {
                    if (typeof e3 != "function")
                      throw new Error("Argument must be a string or a function");
                    lt = e3;
                  }
                  this.logCallback ? (dt = this.logCallback, Xe._ts_parser_enable_logger_wasm(this[0], 1)) : (dt = null, Xe._ts_parser_enable_logger_wasm(this[0], 0));
                  let n2 = 0, s2 = 0;
                  if (r2 && r2.includedRanges) {
                    n2 = r2.includedRanges.length;
                    let e4 = s2 = Xe._calloc(n2, tt);
                    for (let t4 = 0; t4 < n2; t4++)
                      vt(e4, r2.includedRanges[t4]), e4 += tt;
                  }
                  const o2 = Xe._ts_parser_parse_wasm(this[0], this[1], t3 ? t3[0] : 0, s2, n2);
                  if (!o2)
                    throw lt = null, dt = null, new Error("Parsing failed");
                  const _2 = new Tree(Qe, o2, this.language, lt);
                  return lt = null, dt = null, _2;
                }
                reset() {
                  Xe._ts_parser_reset(this[0]);
                }
                setTimeoutMicros(e3) {
                  Xe._ts_parser_set_timeout_micros(this[0], e3);
                }
                getTimeoutMicros() {
                  return Xe._ts_parser_timeout_micros(this[0]);
                }
                setLogger(e3) {
                  if (e3) {
                    if (typeof e3 != "function")
                      throw new Error("Logger callback must be a function");
                  } else
                    e3 = null;
                  return this.logCallback = e3, this;
                }
                getLogger() {
                  return this.logCallback;
                }
              }
              class Tree {
                constructor(e3, t3, r2, n2) {
                  ft(e3), this[0] = t3, this.language = r2, this.textCallback = n2;
                }
                copy() {
                  const e3 = Xe._ts_tree_copy(this[0]);
                  return new Tree(Qe, e3, this.language, this.textCallback);
                }
                delete() {
                  Xe._ts_tree_delete(this[0]), this[0] = 0;
                }
                edit(e3) {
                  !function(e4) {
                    let t3 = it;
                    Mt(t3, e4.startPosition), Mt(t3 += et, e4.oldEndPosition), Mt(t3 += et, e4.newEndPosition), S(t3 += et, e4.startIndex, "i32"), S(t3 += Je, e4.oldEndIndex, "i32"), S(t3 += Je, e4.newEndIndex, "i32"), t3 += Je;
                  }(e3), Xe._ts_tree_edit_wasm(this[0]);
                }
                get rootNode() {
                  return Xe._ts_tree_root_node_wasm(this[0]), gt(this);
                }
                getLanguage() {
                  return this.language;
                }
                walk() {
                  return this.rootNode.walk();
                }
                getChangedRanges(e3) {
                  if (e3.constructor !== Tree)
                    throw new TypeError("Argument must be a Tree");
                  Xe._ts_tree_get_changed_ranges_wasm(this[0], e3[0]);
                  const t3 = x(it, "i32"), r2 = x(it + Je, "i32"), n2 = new Array(t3);
                  if (t3 > 0) {
                    let e4 = r2;
                    for (let r3 = 0; r3 < t3; r3++)
                      n2[r3] = Et(e4), e4 += tt;
                    Xe._free(r2);
                  }
                  return n2;
                }
              }
              class Node2 {
                constructor(e3, t3) {
                  ft(e3), this.tree = t3;
                }
                get typeId() {
                  return ht(this), Xe._ts_node_symbol_wasm(this.tree[0]);
                }
                get type() {
                  return this.tree.language.types[this.typeId] || "ERROR";
                }
                get endPosition() {
                  return ht(this), Xe._ts_node_end_point_wasm(this.tree[0]), bt(it);
                }
                get endIndex() {
                  return ht(this), Xe._ts_node_end_index_wasm(this.tree[0]);
                }
                get text() {
                  return ct(this.tree, this.startIndex, this.endIndex);
                }
                isNamed() {
                  return ht(this), Xe._ts_node_is_named_wasm(this.tree[0]) === 1;
                }
                hasError() {
                  return ht(this), Xe._ts_node_has_error_wasm(this.tree[0]) === 1;
                }
                hasChanges() {
                  return ht(this), Xe._ts_node_has_changes_wasm(this.tree[0]) === 1;
                }
                isMissing() {
                  return ht(this), Xe._ts_node_is_missing_wasm(this.tree[0]) === 1;
                }
                equals(e3) {
                  return this.id === e3.id;
                }
                child(e3) {
                  return ht(this), Xe._ts_node_child_wasm(this.tree[0], e3), gt(this.tree);
                }
                namedChild(e3) {
                  return ht(this), Xe._ts_node_named_child_wasm(this.tree[0], e3), gt(this.tree);
                }
                childForFieldId(e3) {
                  return ht(this), Xe._ts_node_child_by_field_id_wasm(this.tree[0], e3), gt(this.tree);
                }
                childForFieldName(e3) {
                  const t3 = this.tree.language.fields.indexOf(e3);
                  if (t3 !== -1)
                    return this.childForFieldId(t3);
                }
                get childCount() {
                  return ht(this), Xe._ts_node_child_count_wasm(this.tree[0]);
                }
                get namedChildCount() {
                  return ht(this), Xe._ts_node_named_child_count_wasm(this.tree[0]);
                }
                get firstChild() {
                  return this.child(0);
                }
                get firstNamedChild() {
                  return this.namedChild(0);
                }
                get lastChild() {
                  return this.child(this.childCount - 1);
                }
                get lastNamedChild() {
                  return this.namedChild(this.namedChildCount - 1);
                }
                get children() {
                  if (!this._children) {
                    ht(this), Xe._ts_node_children_wasm(this.tree[0]);
                    const e3 = x(it, "i32"), t3 = x(it + Je, "i32");
                    if (this._children = new Array(e3), e3 > 0) {
                      let r2 = t3;
                      for (let t4 = 0; t4 < e3; t4++)
                        this._children[t4] = gt(this.tree, r2), r2 += Ye;
                      Xe._free(t3);
                    }
                  }
                  return this._children;
                }
                get namedChildren() {
                  if (!this._namedChildren) {
                    ht(this), Xe._ts_node_named_children_wasm(this.tree[0]);
                    const e3 = x(it, "i32"), t3 = x(it + Je, "i32");
                    if (this._namedChildren = new Array(e3), e3 > 0) {
                      let r2 = t3;
                      for (let t4 = 0; t4 < e3; t4++)
                        this._namedChildren[t4] = gt(this.tree, r2), r2 += Ye;
                      Xe._free(t3);
                    }
                  }
                  return this._namedChildren;
                }
                descendantsOfType(e3, t3, r2) {
                  Array.isArray(e3) || (e3 = [e3]), t3 || (t3 = rt), r2 || (r2 = rt);
                  const n2 = [], s2 = this.tree.language.types;
                  for (let t4 = 0, r3 = s2.length; t4 < r3; t4++)
                    e3.includes(s2[t4]) && n2.push(t4);
                  const o2 = Xe._malloc(Je * n2.length);
                  for (let e4 = 0, t4 = n2.length; e4 < t4; e4++)
                    S(o2 + e4 * Je, n2[e4], "i32");
                  ht(this), Xe._ts_node_descendants_of_type_wasm(this.tree[0], o2, n2.length, t3.row, t3.column, r2.row, r2.column);
                  const _2 = x(it, "i32"), a2 = x(it + Je, "i32"), u2 = new Array(_2);
                  if (_2 > 0) {
                    let e4 = a2;
                    for (let t4 = 0; t4 < _2; t4++)
                      u2[t4] = gt(this.tree, e4), e4 += Ye;
                  }
                  return Xe._free(a2), Xe._free(o2), u2;
                }
                get nextSibling() {
                  return ht(this), Xe._ts_node_next_sibling_wasm(this.tree[0]), gt(this.tree);
                }
                get previousSibling() {
                  return ht(this), Xe._ts_node_prev_sibling_wasm(this.tree[0]), gt(this.tree);
                }
                get nextNamedSibling() {
                  return ht(this), Xe._ts_node_next_named_sibling_wasm(this.tree[0]), gt(this.tree);
                }
                get previousNamedSibling() {
                  return ht(this), Xe._ts_node_prev_named_sibling_wasm(this.tree[0]), gt(this.tree);
                }
                get parent() {
                  return ht(this), Xe._ts_node_parent_wasm(this.tree[0]), gt(this.tree);
                }
                descendantForIndex(e3, t3 = e3) {
                  if (typeof e3 != "number" || typeof t3 != "number")
                    throw new Error("Arguments must be numbers");
                  ht(this);
                  let r2 = it + Ye;
                  return S(r2, e3, "i32"), S(r2 + Je, t3, "i32"), Xe._ts_node_descendant_for_index_wasm(this.tree[0]), gt(this.tree);
                }
                namedDescendantForIndex(e3, t3 = e3) {
                  if (typeof e3 != "number" || typeof t3 != "number")
                    throw new Error("Arguments must be numbers");
                  ht(this);
                  let r2 = it + Ye;
                  return S(r2, e3, "i32"), S(r2 + Je, t3, "i32"), Xe._ts_node_named_descendant_for_index_wasm(this.tree[0]), gt(this.tree);
                }
                descendantForPosition(e3, t3 = e3) {
                  if (!pt(e3) || !pt(t3))
                    throw new Error("Arguments must be {row, column} objects");
                  ht(this);
                  let r2 = it + Ye;
                  return Mt(r2, e3), Mt(r2 + et, t3), Xe._ts_node_descendant_for_position_wasm(this.tree[0]), gt(this.tree);
                }
                namedDescendantForPosition(e3, t3 = e3) {
                  if (!pt(e3) || !pt(t3))
                    throw new Error("Arguments must be {row, column} objects");
                  ht(this);
                  let r2 = it + Ye;
                  return Mt(r2, e3), Mt(r2 + et, t3), Xe._ts_node_named_descendant_for_position_wasm(this.tree[0]), gt(this.tree);
                }
                walk() {
                  return ht(this), Xe._ts_tree_cursor_new_wasm(this.tree[0]), new TreeCursor(Qe, this.tree);
                }
                toString() {
                  ht(this);
                  const e3 = Xe._ts_node_to_string_wasm(this.tree[0]), t3 = function(e4) {
                    for (var t4 = ""; ; ) {
                      var r2 = R[e4++ >> 0];
                      if (!r2)
                        return t4;
                      t4 += String.fromCharCode(r2);
                    }
                  }(e3);
                  return Xe._free(e3), t3;
                }
              }
              class TreeCursor {
                constructor(e3, t3) {
                  ft(e3), this.tree = t3, yt(this);
                }
                delete() {
                  wt(this), Xe._ts_tree_cursor_delete_wasm(this.tree[0]), this[0] = this[1] = this[2] = 0;
                }
                reset(e3) {
                  ht(e3), wt(this, it + Ye), Xe._ts_tree_cursor_reset_wasm(this.tree[0]), yt(this);
                }
                get nodeType() {
                  return this.tree.language.types[this.nodeTypeId] || "ERROR";
                }
                get nodeTypeId() {
                  return wt(this), Xe._ts_tree_cursor_current_node_type_id_wasm(this.tree[0]);
                }
                get nodeId() {
                  return wt(this), Xe._ts_tree_cursor_current_node_id_wasm(this.tree[0]);
                }
                get nodeIsNamed() {
                  return wt(this), Xe._ts_tree_cursor_current_node_is_named_wasm(this.tree[0]) === 1;
                }
                get nodeIsMissing() {
                  return wt(this), Xe._ts_tree_cursor_current_node_is_missing_wasm(this.tree[0]) === 1;
                }
                get nodeText() {
                  wt(this);
                  const e3 = Xe._ts_tree_cursor_start_index_wasm(this.tree[0]), t3 = Xe._ts_tree_cursor_end_index_wasm(this.tree[0]);
                  return ct(this.tree, e3, t3);
                }
                get startPosition() {
                  return wt(this), Xe._ts_tree_cursor_start_position_wasm(this.tree[0]), bt(it);
                }
                get endPosition() {
                  return wt(this), Xe._ts_tree_cursor_end_position_wasm(this.tree[0]), bt(it);
                }
                get startIndex() {
                  return wt(this), Xe._ts_tree_cursor_start_index_wasm(this.tree[0]);
                }
                get endIndex() {
                  return wt(this), Xe._ts_tree_cursor_end_index_wasm(this.tree[0]);
                }
                currentNode() {
                  return wt(this), Xe._ts_tree_cursor_current_node_wasm(this.tree[0]), gt(this.tree);
                }
                currentFieldId() {
                  return wt(this), Xe._ts_tree_cursor_current_field_id_wasm(this.tree[0]);
                }
                currentFieldName() {
                  return this.tree.language.fields[this.currentFieldId()];
                }
                gotoFirstChild() {
                  wt(this);
                  const e3 = Xe._ts_tree_cursor_goto_first_child_wasm(this.tree[0]);
                  return yt(this), e3 === 1;
                }
                gotoNextSibling() {
                  wt(this);
                  const e3 = Xe._ts_tree_cursor_goto_next_sibling_wasm(this.tree[0]);
                  return yt(this), e3 === 1;
                }
                gotoParent() {
                  wt(this);
                  const e3 = Xe._ts_tree_cursor_goto_parent_wasm(this.tree[0]);
                  return yt(this), e3 === 1;
                }
              }
              class Language {
                constructor(e3, t3) {
                  ft(e3), this[0] = t3, this.types = new Array(Xe._ts_language_symbol_count(this[0]));
                  for (let e4 = 0, t4 = this.types.length; e4 < t4; e4++)
                    Xe._ts_language_symbol_type(this[0], e4) < 2 && (this.types[e4] = $(Xe._ts_language_symbol_name(this[0], e4)));
                  this.fields = new Array(Xe._ts_language_field_count(this[0]) + 1);
                  for (let e4 = 0, t4 = this.fields.length; e4 < t4; e4++) {
                    const t5 = Xe._ts_language_field_name_for_id(this[0], e4);
                    this.fields[e4] = t5 !== 0 ? $(t5) : null;
                  }
                }
                get version() {
                  return Xe._ts_language_version(this[0]);
                }
                get fieldCount() {
                  return this.fields.length - 1;
                }
                fieldIdForName(e3) {
                  const t3 = this.fields.indexOf(e3);
                  return t3 !== -1 ? t3 : null;
                }
                fieldNameForId(e3) {
                  return this.fields[e3] || null;
                }
                idForNodeType(e3, t3) {
                  const r2 = D(e3), n2 = Xe._malloc(r2 + 1);
                  U(e3, n2, r2 + 1);
                  const s2 = Xe._ts_language_symbol_for_name(this[0], n2, r2, t3);
                  return Xe._free(n2), s2 || null;
                }
                get nodeTypeCount() {
                  return Xe._ts_language_symbol_count(this[0]);
                }
                nodeTypeForId(e3) {
                  const t3 = Xe._ts_language_symbol_name(this[0], e3);
                  return t3 ? $(t3) : null;
                }
                nodeTypeIsNamed(e3) {
                  return !!Xe._ts_language_type_is_named_wasm(this[0], e3);
                }
                nodeTypeIsVisible(e3) {
                  return !!Xe._ts_language_type_is_visible_wasm(this[0], e3);
                }
                query(e3) {
                  const t3 = D(e3), r2 = Xe._malloc(t3 + 1);
                  U(e3, r2, t3 + 1);
                  const n2 = Xe._ts_query_new(this[0], r2, t3, it, it + Je);
                  if (!n2) {
                    const t4 = x(it + Je, "i32"), n3 = $(r2, x(it, "i32")).length, s3 = e3.substr(n3, 100).split("\n")[0];
                    let o3, _3 = s3.match(nt)[0];
                    switch (t4) {
                      case 2:
                        o3 = new RangeError(`Bad node name '${_3}'`);
                        break;
                      case 3:
                        o3 = new RangeError(`Bad field name '${_3}'`);
                        break;
                      case 4:
                        o3 = new RangeError(`Bad capture name @${_3}`);
                        break;
                      case 5:
                        o3 = new TypeError(`Bad pattern structure at offset ${n3}: '${s3}'...`), _3 = "";
                        break;
                      default:
                        o3 = new SyntaxError(`Bad syntax at offset ${n3}: '${s3}'...`), _3 = "";
                    }
                    throw o3.index = n3, o3.length = _3.length, Xe._free(r2), o3;
                  }
                  const s2 = Xe._ts_query_string_count(n2), o2 = Xe._ts_query_capture_count(n2), _2 = Xe._ts_query_pattern_count(n2), a2 = new Array(o2), u2 = new Array(s2);
                  for (let e4 = 0; e4 < o2; e4++) {
                    const t4 = Xe._ts_query_capture_name_for_id(n2, e4, it), r3 = x(it, "i32");
                    a2[e4] = $(t4, r3);
                  }
                  for (let e4 = 0; e4 < s2; e4++) {
                    const t4 = Xe._ts_query_string_value_for_id(n2, e4, it), r3 = x(it, "i32");
                    u2[e4] = $(t4, r3);
                  }
                  const i2 = new Array(_2), l2 = new Array(_2), d2 = new Array(_2), c2 = new Array(_2), m2 = new Array(_2);
                  for (let e4 = 0; e4 < _2; e4++) {
                    const t4 = Xe._ts_query_predicates_for_pattern(n2, e4, it), r3 = x(it, "i32");
                    c2[e4] = [], m2[e4] = [];
                    const s3 = [];
                    let o3 = t4;
                    for (let t5 = 0; t5 < r3; t5++) {
                      const t6 = x(o3, "i32"), r4 = x(o3 += Je, "i32");
                      if (o3 += Je, t6 === st)
                        s3.push({ type: "capture", name: a2[r4] });
                      else if (t6 === ot)
                        s3.push({ type: "string", value: u2[r4] });
                      else if (s3.length > 0) {
                        if (s3[0].type !== "string")
                          throw new Error("Predicates must begin with a literal value");
                        const t7 = s3[0].value;
                        let r5 = true;
                        switch (t7) {
                          case "not-eq?":
                            r5 = false;
                          case "eq?":
                            if (s3.length !== 3)
                              throw new Error(`Wrong number of arguments to \`#eq?\` predicate. Expected 2, got ${s3.length - 1}`);
                            if (s3[1].type !== "capture")
                              throw new Error(`First argument of \`#eq?\` predicate must be a capture. Got "${s3[1].value}"`);
                            if (s3[2].type === "capture") {
                              const t8 = s3[1].name, n4 = s3[2].name;
                              m2[e4].push(function(e5) {
                                let s4, o5;
                                for (const r6 of e5)
                                  r6.name === t8 && (s4 = r6.node), r6.name === n4 && (o5 = r6.node);
                                return s4.text === o5.text === r5;
                              });
                            } else {
                              const t8 = s3[1].name, n4 = s3[2].value;
                              m2[e4].push(function(e5) {
                                for (const s4 of e5)
                                  if (s4.name === t8)
                                    return s4.node.text === n4 === r5;
                                return false;
                              });
                            }
                            break;
                          case "not-match?":
                            r5 = false;
                          case "match?":
                            if (s3.length !== 3)
                              throw new Error(`Wrong number of arguments to \`#match?\` predicate. Expected 2, got ${s3.length - 1}.`);
                            if (s3[1].type !== "capture")
                              throw new Error(`First argument of \`#match?\` predicate must be a capture. Got "${s3[1].value}".`);
                            if (s3[2].type !== "string")
                              throw new Error(`Second argument of \`#match?\` predicate must be a string. Got @${s3[2].value}.`);
                            const n3 = s3[1].name, o4 = new RegExp(s3[2].value);
                            m2[e4].push(function(e5) {
                              for (const t8 of e5)
                                if (t8.name === n3)
                                  return o4.test(t8.node.text) === r5;
                              return false;
                            });
                            break;
                          case "set!":
                            if (s3.length < 2 || s3.length > 3)
                              throw new Error(`Wrong number of arguments to \`#set!\` predicate. Expected 1 or 2. Got ${s3.length - 1}.`);
                            if (s3.some((e5) => e5.type !== "string"))
                              throw new Error('Arguments to `#set!` predicate must be a strings.".');
                            i2[e4] || (i2[e4] = {}), i2[e4][s3[1].value] = s3[2] ? s3[2].value : null;
                            break;
                          case "is?":
                          case "is-not?":
                            if (s3.length < 2 || s3.length > 3)
                              throw new Error(`Wrong number of arguments to \`#${t7}\` predicate. Expected 1 or 2. Got ${s3.length - 1}.`);
                            if (s3.some((e5) => e5.type !== "string"))
                              throw new Error(`Arguments to \`#${t7}\` predicate must be a strings.".`);
                            const _3 = t7 === "is?" ? l2 : d2;
                            _3[e4] || (_3[e4] = {}), _3[e4][s3[1].value] = s3[2] ? s3[2].value : null;
                            break;
                          default:
                            c2[e4].push({ operator: t7, operands: s3.slice(1) });
                        }
                        s3.length = 0;
                      }
                    }
                    Object.freeze(i2[e4]), Object.freeze(l2[e4]), Object.freeze(d2[e4]);
                  }
                  return Xe._free(r2), new Query(Qe, n2, a2, m2, c2, Object.freeze(i2), Object.freeze(l2), Object.freeze(d2));
                }
                static load(e3) {
                  let t3;
                  if (e3 instanceof Uint8Array)
                    t3 = Promise.resolve(e3);
                  else {
                    const r3 = e3;
                    if (typeof process != "undefined" && process.versions && process.versions.node) {
                      const e4 = __require("fs");
                      t3 = Promise.resolve(e4.readFileSync(r3));
                    } else
                      t3 = fetch(r3).then((e4) => e4.arrayBuffer().then((t4) => {
                        if (e4.ok)
                          return new Uint8Array(t4);
                        {
                          const r4 = new TextDecoder("utf-8").decode(t4);
                          throw new Error(`Language.load failed with status ${e4.status}.

${r4}`);
                        }
                      }));
                  }
                  const r2 = typeof loadSideModule == "function" ? loadSideModule : Se;
                  return t3.then((e4) => r2(e4, { loadAsync: true })).then((e4) => {
                    const t4 = Object.keys(e4), r3 = t4.find((e5) => _t.test(e5) && !e5.includes("external_scanner_"));
                    r3 || console.log(`Couldn't find language function in WASM file. Symbols:
${JSON.stringify(t4, null, 2)}`);
                    const n2 = e4[r3]();
                    return new Language(Qe, n2);
                  });
                }
              }
              class Query {
                constructor(e3, t3, r2, n2, s2, o2, _2, a2) {
                  ft(e3), this[0] = t3, this.captureNames = r2, this.textPredicates = n2, this.predicates = s2, this.setProperties = o2, this.assertedProperties = _2, this.refutedProperties = a2, this.exceededMatchLimit = false;
                }
                delete() {
                  Xe._ts_query_delete(this[0]), this[0] = 0;
                }
                matches(e3, t3, r2, n2) {
                  t3 || (t3 = rt), r2 || (r2 = rt), n2 || (n2 = {});
                  let s2 = n2.matchLimit;
                  if (s2 === void 0)
                    s2 = 0;
                  else if (typeof s2 != "number")
                    throw new Error("Arguments must be numbers");
                  ht(e3), Xe._ts_query_matches_wasm(this[0], e3.tree[0], t3.row, t3.column, r2.row, r2.column, s2);
                  const o2 = x(it, "i32"), _2 = x(it + Je, "i32"), a2 = x(it + 2 * Je, "i32"), u2 = new Array(o2);
                  this.exceededMatchLimit = !!a2;
                  let i2 = 0, l2 = _2;
                  for (let t4 = 0; t4 < o2; t4++) {
                    const r3 = x(l2, "i32"), n3 = x(l2 += Je, "i32");
                    l2 += Je;
                    const s3 = new Array(n3);
                    if (l2 = mt(this, e3.tree, l2, s3), this.textPredicates[r3].every((e4) => e4(s3))) {
                      u2[i2++] = { pattern: r3, captures: s3 };
                      const e4 = this.setProperties[r3];
                      e4 && (u2[t4].setProperties = e4);
                      const n4 = this.assertedProperties[r3];
                      n4 && (u2[t4].assertedProperties = n4);
                      const o3 = this.refutedProperties[r3];
                      o3 && (u2[t4].refutedProperties = o3);
                    }
                  }
                  return u2.length = i2, Xe._free(_2), u2;
                }
                captures(e3, t3, r2, n2) {
                  t3 || (t3 = rt), r2 || (r2 = rt), n2 || (n2 = {});
                  let s2 = n2.matchLimit;
                  if (s2 === void 0)
                    s2 = 0;
                  else if (typeof s2 != "number")
                    throw new Error("Arguments must be numbers");
                  ht(e3), Xe._ts_query_captures_wasm(this[0], e3.tree[0], t3.row, t3.column, r2.row, r2.column, s2);
                  const o2 = x(it, "i32"), _2 = x(it + Je, "i32"), a2 = x(it + 2 * Je, "i32"), u2 = [];
                  this.exceededMatchLimit = !!a2;
                  const i2 = [];
                  let l2 = _2;
                  for (let t4 = 0; t4 < o2; t4++) {
                    const t5 = x(l2, "i32"), r3 = x(l2 += Je, "i32"), n3 = x(l2 += Je, "i32");
                    if (l2 += Je, i2.length = r3, l2 = mt(this, e3.tree, l2, i2), this.textPredicates[t5].every((e4) => e4(i2))) {
                      const e4 = i2[n3], r4 = this.setProperties[t5];
                      r4 && (e4.setProperties = r4);
                      const s3 = this.assertedProperties[t5];
                      s3 && (e4.assertedProperties = s3);
                      const o3 = this.refutedProperties[t5];
                      o3 && (e4.refutedProperties = o3), u2.push(e4);
                    }
                  }
                  return Xe._free(_2), u2;
                }
                predicatesForPattern(e3) {
                  return this.predicates[e3];
                }
                didExceedMatchLimit() {
                  return this.exceededMatchLimit;
                }
              }
              function ct(e3, t3, r2) {
                const n2 = r2 - t3;
                let s2 = e3.textCallback(t3, null, r2);
                for (t3 += s2.length; t3 < r2; ) {
                  const n3 = e3.textCallback(t3, null, r2);
                  if (!(n3 && n3.length > 0))
                    break;
                  t3 += n3.length, s2 += n3;
                }
                return t3 > r2 && (s2 = s2.slice(0, n2)), s2;
              }
              function mt(e3, t3, r2, n2) {
                for (let s2 = 0, o2 = n2.length; s2 < o2; s2++) {
                  const o3 = x(r2, "i32"), _2 = gt(t3, r2 += Je);
                  r2 += Ye, n2[s2] = { name: e3.captureNames[o3], node: _2 };
                }
                return r2;
              }
              function ft(e3) {
                if (e3 !== Qe)
                  throw new Error("Illegal constructor");
              }
              function pt(e3) {
                return e3 && typeof e3.row == "number" && typeof e3.column == "number";
              }
              function ht(e3) {
                let t3 = it;
                S(t3, e3.id, "i32"), S(t3 += Je, e3.startIndex, "i32"), S(t3 += Je, e3.startPosition.row, "i32"), S(t3 += Je, e3.startPosition.column, "i32"), S(t3 += Je, e3[0], "i32");
              }
              function gt(e3, t3 = it) {
                const r2 = x(t3, "i32");
                if (r2 === 0)
                  return null;
                const n2 = x(t3 += Je, "i32"), s2 = x(t3 += Je, "i32"), o2 = x(t3 += Je, "i32"), _2 = x(t3 += Je, "i32"), a2 = new Node2(Qe, e3);
                return a2.id = r2, a2.startIndex = n2, a2.startPosition = { row: s2, column: o2 }, a2[0] = _2, a2;
              }
              function wt(e3, t3 = it) {
                S(t3 + 0 * Je, e3[0], "i32"), S(t3 + 1 * Je, e3[1], "i32"), S(t3 + 2 * Je, e3[2], "i32");
              }
              function yt(e3) {
                e3[0] = x(it + 0 * Je, "i32"), e3[1] = x(it + 1 * Je, "i32"), e3[2] = x(it + 2 * Je, "i32");
              }
              function Mt(e3, t3) {
                S(e3, t3.row, "i32"), S(e3 + Je, t3.column, "i32");
              }
              function bt(e3) {
                return { row: x(e3, "i32"), column: x(e3 + Je, "i32") };
              }
              function vt(e3, t3) {
                Mt(e3, t3.startPosition), Mt(e3 += et, t3.endPosition), S(e3 += et, t3.startIndex, "i32"), S(e3 += Je, t3.endIndex, "i32"), e3 += Je;
              }
              function Et(e3) {
                const t3 = {};
                return t3.startPosition = bt(e3), e3 += et, t3.endPosition = bt(e3), e3 += et, t3.startIndex = x(e3, "i32"), e3 += Je, t3.endIndex = x(e3, "i32"), t3;
              }
              for (const e3 of Object.getOwnPropertyNames(ParserImpl.prototype))
                Object.defineProperty(Parser4.prototype, e3, { value: ParserImpl.prototype[e3], enumerable: false, writable: false });
              Parser4.Language = Language, Module.onRuntimeInitialized = () => {
                ParserImpl.init(), e2();
              };
            }));
          }
        }
        return Parser4;
      }();
      typeof exports == "object" && (module.exports = TreeSitter);
    }
  });

  // node_modules/vscode-jsonrpc/lib/common/ral.js
  var require_ral = __commonJS({
    "node_modules/vscode-jsonrpc/lib/common/ral.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var _ral;
      function RAL() {
        if (_ral === void 0) {
          throw new Error(`No runtime abstraction layer installed`);
        }
        return _ral;
      }
      (function(RAL2) {
        function install(ral) {
          if (ral === void 0) {
            throw new Error(`No runtime abstraction layer provided`);
          }
          _ral = ral;
        }
        RAL2.install = install;
      })(RAL || (RAL = {}));
      exports.default = RAL;
    }
  });

  // node_modules/vscode-jsonrpc/lib/common/disposable.js
  var require_disposable = __commonJS({
    "node_modules/vscode-jsonrpc/lib/common/disposable.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Disposable = void 0;
      var Disposable;
      (function(Disposable2) {
        function create(func) {
          return {
            dispose: func
          };
        }
        Disposable2.create = create;
      })(Disposable = exports.Disposable || (exports.Disposable = {}));
    }
  });

  // node_modules/vscode-jsonrpc/lib/common/events.js
  var require_events = __commonJS({
    "node_modules/vscode-jsonrpc/lib/common/events.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Emitter = exports.Event = void 0;
      var ral_1 = require_ral();
      var Event;
      (function(Event2) {
        const _disposable = { dispose() {
        } };
        Event2.None = function() {
          return _disposable;
        };
      })(Event = exports.Event || (exports.Event = {}));
      var CallbackList = class {
        add(callback, context = null, bucket) {
          if (!this._callbacks) {
            this._callbacks = [];
            this._contexts = [];
          }
          this._callbacks.push(callback);
          this._contexts.push(context);
          if (Array.isArray(bucket)) {
            bucket.push({ dispose: () => this.remove(callback, context) });
          }
        }
        remove(callback, context = null) {
          if (!this._callbacks) {
            return;
          }
          let foundCallbackWithDifferentContext = false;
          for (let i = 0, len = this._callbacks.length; i < len; i++) {
            if (this._callbacks[i] === callback) {
              if (this._contexts[i] === context) {
                this._callbacks.splice(i, 1);
                this._contexts.splice(i, 1);
                return;
              } else {
                foundCallbackWithDifferentContext = true;
              }
            }
          }
          if (foundCallbackWithDifferentContext) {
            throw new Error("When adding a listener with a context, you should remove it with the same context");
          }
        }
        invoke(...args) {
          if (!this._callbacks) {
            return [];
          }
          const ret = [], callbacks = this._callbacks.slice(0), contexts = this._contexts.slice(0);
          for (let i = 0, len = callbacks.length; i < len; i++) {
            try {
              ret.push(callbacks[i].apply(contexts[i], args));
            } catch (e) {
              ral_1.default().console.error(e);
            }
          }
          return ret;
        }
        isEmpty() {
          return !this._callbacks || this._callbacks.length === 0;
        }
        dispose() {
          this._callbacks = void 0;
          this._contexts = void 0;
        }
      };
      var Emitter2 = class {
        constructor(_options) {
          this._options = _options;
        }
        get event() {
          if (!this._event) {
            this._event = (listener, thisArgs, disposables) => {
              if (!this._callbacks) {
                this._callbacks = new CallbackList();
              }
              if (this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty()) {
                this._options.onFirstListenerAdd(this);
              }
              this._callbacks.add(listener, thisArgs);
              const result = {
                dispose: () => {
                  if (!this._callbacks) {
                    return;
                  }
                  this._callbacks.remove(listener, thisArgs);
                  result.dispose = Emitter2._noop;
                  if (this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty()) {
                    this._options.onLastListenerRemove(this);
                  }
                }
              };
              if (Array.isArray(disposables)) {
                disposables.push(result);
              }
              return result;
            };
          }
          return this._event;
        }
        fire(event) {
          if (this._callbacks) {
            this._callbacks.invoke.call(this._callbacks, event);
          }
        }
        dispose() {
          if (this._callbacks) {
            this._callbacks.dispose();
            this._callbacks = void 0;
          }
        }
      };
      exports.Emitter = Emitter2;
      Emitter2._noop = function() {
      };
    }
  });

  // node_modules/vscode-jsonrpc/lib/common/messageBuffer.js
  var require_messageBuffer = __commonJS({
    "node_modules/vscode-jsonrpc/lib/common/messageBuffer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.AbstractMessageBuffer = void 0;
      var CR = 13;
      var LF = 10;
      var CRLF = "\r\n";
      var AbstractMessageBuffer = class {
        constructor(encoding = "utf-8") {
          this._encoding = encoding;
          this._chunks = [];
          this._totalLength = 0;
        }
        get encoding() {
          return this._encoding;
        }
        append(chunk) {
          const toAppend = typeof chunk === "string" ? this.fromString(chunk, this._encoding) : chunk;
          this._chunks.push(toAppend);
          this._totalLength += toAppend.byteLength;
        }
        tryReadHeaders() {
          if (this._chunks.length === 0) {
            return void 0;
          }
          let state = 0;
          let chunkIndex = 0;
          let offset = 0;
          let chunkBytesRead = 0;
          row:
            while (chunkIndex < this._chunks.length) {
              const chunk = this._chunks[chunkIndex];
              offset = 0;
              column:
                while (offset < chunk.length) {
                  const value = chunk[offset];
                  switch (value) {
                    case CR:
                      switch (state) {
                        case 0:
                          state = 1;
                          break;
                        case 2:
                          state = 3;
                          break;
                        default:
                          state = 0;
                      }
                      break;
                    case LF:
                      switch (state) {
                        case 1:
                          state = 2;
                          break;
                        case 3:
                          state = 4;
                          offset++;
                          break row;
                        default:
                          state = 0;
                      }
                      break;
                    default:
                      state = 0;
                  }
                  offset++;
                }
              chunkBytesRead += chunk.byteLength;
              chunkIndex++;
            }
          if (state !== 4) {
            return void 0;
          }
          const buffer = this._read(chunkBytesRead + offset);
          const result = new Map();
          const headers = this.toString(buffer, "ascii").split(CRLF);
          if (headers.length < 2) {
            return result;
          }
          for (let i = 0; i < headers.length - 2; i++) {
            const header = headers[i];
            const index = header.indexOf(":");
            if (index === -1) {
              throw new Error("Message header must separate key and value using :");
            }
            const key = header.substr(0, index);
            const value = header.substr(index + 1).trim();
            result.set(key, value);
          }
          return result;
        }
        tryReadBody(length) {
          if (this._totalLength < length) {
            return void 0;
          }
          return this._read(length);
        }
        get numberOfBytes() {
          return this._totalLength;
        }
        _read(byteCount) {
          if (byteCount === 0) {
            return this.emptyBuffer();
          }
          if (byteCount > this._totalLength) {
            throw new Error(`Cannot read so many bytes!`);
          }
          if (this._chunks[0].byteLength === byteCount) {
            const chunk = this._chunks[0];
            this._chunks.shift();
            this._totalLength -= byteCount;
            return this.asNative(chunk);
          }
          if (this._chunks[0].byteLength > byteCount) {
            const chunk = this._chunks[0];
            const result2 = this.asNative(chunk, byteCount);
            this._chunks[0] = chunk.slice(byteCount);
            this._totalLength -= byteCount;
            return result2;
          }
          const result = this.allocNative(byteCount);
          let resultOffset = 0;
          let chunkIndex = 0;
          while (byteCount > 0) {
            const chunk = this._chunks[chunkIndex];
            if (chunk.byteLength > byteCount) {
              const chunkPart = chunk.slice(0, byteCount);
              result.set(chunkPart, resultOffset);
              resultOffset += byteCount;
              this._chunks[chunkIndex] = chunk.slice(byteCount);
              this._totalLength -= byteCount;
              byteCount -= byteCount;
            } else {
              result.set(chunk, resultOffset);
              resultOffset += chunk.byteLength;
              this._chunks.shift();
              this._totalLength -= chunk.byteLength;
              byteCount -= chunk.byteLength;
            }
          }
          return result;
        }
      };
      exports.AbstractMessageBuffer = AbstractMessageBuffer;
    }
  });

  // node_modules/vscode-jsonrpc/lib/browser/ril.js
  var require_ril = __commonJS({
    "node_modules/vscode-jsonrpc/lib/browser/ril.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var ral_1 = require_ral();
      var disposable_1 = require_disposable();
      var events_1 = require_events();
      var messageBuffer_1 = require_messageBuffer();
      var MessageBuffer = class extends messageBuffer_1.AbstractMessageBuffer {
        constructor(encoding = "utf-8") {
          super(encoding);
          this.asciiDecoder = new TextDecoder("ascii");
        }
        emptyBuffer() {
          return MessageBuffer.emptyBuffer;
        }
        fromString(value, _encoding) {
          return new TextEncoder().encode(value);
        }
        toString(value, encoding) {
          if (encoding === "ascii") {
            return this.asciiDecoder.decode(value);
          } else {
            return new TextDecoder(encoding).decode(value);
          }
        }
        asNative(buffer, length) {
          if (length === void 0) {
            return buffer;
          } else {
            return buffer.slice(0, length);
          }
        }
        allocNative(length) {
          return new Uint8Array(length);
        }
      };
      MessageBuffer.emptyBuffer = new Uint8Array(0);
      var ReadableStreamWrapper = class {
        constructor(socket) {
          this.socket = socket;
          this._onData = new events_1.Emitter();
          this._messageListener = (event) => {
            const blob = event.data;
            blob.arrayBuffer().then((buffer) => {
              this._onData.fire(new Uint8Array(buffer));
            });
          };
          this.socket.addEventListener("message", this._messageListener);
        }
        onClose(listener) {
          this.socket.addEventListener("close", listener);
          return disposable_1.Disposable.create(() => this.socket.removeEventListener("close", listener));
        }
        onError(listener) {
          this.socket.addEventListener("error", listener);
          return disposable_1.Disposable.create(() => this.socket.removeEventListener("error", listener));
        }
        onEnd(listener) {
          this.socket.addEventListener("end", listener);
          return disposable_1.Disposable.create(() => this.socket.removeEventListener("end", listener));
        }
        onData(listener) {
          return this._onData.event(listener);
        }
      };
      var WritableStreamWrapper = class {
        constructor(socket) {
          this.socket = socket;
        }
        onClose(listener) {
          this.socket.addEventListener("close", listener);
          return disposable_1.Disposable.create(() => this.socket.removeEventListener("close", listener));
        }
        onError(listener) {
          this.socket.addEventListener("error", listener);
          return disposable_1.Disposable.create(() => this.socket.removeEventListener("error", listener));
        }
        onEnd(listener) {
          this.socket.addEventListener("end", listener);
          return disposable_1.Disposable.create(() => this.socket.removeEventListener("end", listener));
        }
        write(data, encoding) {
          if (typeof data === "string") {
            if (encoding !== void 0 && encoding !== "utf-8") {
              throw new Error(`In a Browser environments only utf-8 text encding is supported. But got encoding: ${encoding}`);
            }
            this.socket.send(data);
          } else {
            this.socket.send(data);
          }
          return Promise.resolve();
        }
        end() {
          this.socket.close();
        }
      };
      var _textEncoder = new TextEncoder();
      var _ril = Object.freeze({
        messageBuffer: Object.freeze({
          create: (encoding) => new MessageBuffer(encoding)
        }),
        applicationJson: Object.freeze({
          encoder: Object.freeze({
            name: "application/json",
            encode: (msg, options) => {
              if (options.charset !== "utf-8") {
                throw new Error(`In a Browser environments only utf-8 text encding is supported. But got encoding: ${options.charset}`);
              }
              return Promise.resolve(_textEncoder.encode(JSON.stringify(msg, void 0, 0)));
            }
          }),
          decoder: Object.freeze({
            name: "application/json",
            decode: (buffer, options) => {
              if (!(buffer instanceof Uint8Array)) {
                throw new Error(`In a Browser environments only Uint8Arrays are supported.`);
              }
              return Promise.resolve(JSON.parse(new TextDecoder(options.charset).decode(buffer)));
            }
          })
        }),
        stream: Object.freeze({
          asReadableStream: (socket) => new ReadableStreamWrapper(socket),
          asWritableStream: (socket) => new WritableStreamWrapper(socket)
        }),
        console,
        timer: Object.freeze({
          setTimeout(callback, ms, ...args) {
            return setTimeout(callback, ms, ...args);
          },
          clearTimeout(handle) {
            clearTimeout(handle);
          },
          setImmediate(callback, ...args) {
            return setTimeout(callback, 0, ...args);
          },
          clearImmediate(handle) {
            clearTimeout(handle);
          }
        })
      });
      function RIL() {
        return _ril;
      }
      (function(RIL2) {
        function install() {
          ral_1.default.install(_ril);
        }
        RIL2.install = install;
      })(RIL || (RIL = {}));
      exports.default = RIL;
    }
  });

  // node_modules/vscode-jsonrpc/lib/common/is.js
  var require_is = __commonJS({
    "node_modules/vscode-jsonrpc/lib/common/is.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.stringArray = exports.array = exports.func = exports.error = exports.number = exports.string = exports.boolean = void 0;
      function boolean(value) {
        return value === true || value === false;
      }
      exports.boolean = boolean;
      function string(value) {
        return typeof value === "string" || value instanceof String;
      }
      exports.string = string;
      function number(value) {
        return typeof value === "number" || value instanceof Number;
      }
      exports.number = number;
      function error(value) {
        return value instanceof Error;
      }
      exports.error = error;
      function func(value) {
        return typeof value === "function";
      }
      exports.func = func;
      function array(value) {
        return Array.isArray(value);
      }
      exports.array = array;
      function stringArray(value) {
        return array(value) && value.every((elem) => string(elem));
      }
      exports.stringArray = stringArray;
    }
  });

  // node_modules/vscode-jsonrpc/lib/common/messages.js
  var require_messages = __commonJS({
    "node_modules/vscode-jsonrpc/lib/common/messages.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.isResponseMessage = exports.isNotificationMessage = exports.isRequestMessage = exports.NotificationType9 = exports.NotificationType8 = exports.NotificationType7 = exports.NotificationType6 = exports.NotificationType5 = exports.NotificationType4 = exports.NotificationType3 = exports.NotificationType2 = exports.NotificationType1 = exports.NotificationType0 = exports.NotificationType = exports.RequestType9 = exports.RequestType8 = exports.RequestType7 = exports.RequestType6 = exports.RequestType5 = exports.RequestType4 = exports.RequestType3 = exports.RequestType2 = exports.RequestType1 = exports.RequestType = exports.RequestType0 = exports.AbstractMessageSignature = exports.ParameterStructures = exports.ResponseError = exports.ErrorCodes = void 0;
      var is = require_is();
      var ErrorCodes;
      (function(ErrorCodes2) {
        ErrorCodes2.ParseError = -32700;
        ErrorCodes2.InvalidRequest = -32600;
        ErrorCodes2.MethodNotFound = -32601;
        ErrorCodes2.InvalidParams = -32602;
        ErrorCodes2.InternalError = -32603;
        ErrorCodes2.jsonrpcReservedErrorRangeStart = -32099;
        ErrorCodes2.serverErrorStart = ErrorCodes2.jsonrpcReservedErrorRangeStart;
        ErrorCodes2.MessageWriteError = -32099;
        ErrorCodes2.MessageReadError = -32098;
        ErrorCodes2.ServerNotInitialized = -32002;
        ErrorCodes2.UnknownErrorCode = -32001;
        ErrorCodes2.jsonrpcReservedErrorRangeEnd = -32e3;
        ErrorCodes2.serverErrorEnd = ErrorCodes2.jsonrpcReservedErrorRangeEnd;
      })(ErrorCodes = exports.ErrorCodes || (exports.ErrorCodes = {}));
      var ResponseError = class extends Error {
        constructor(code, message, data) {
          super(message);
          this.code = is.number(code) ? code : ErrorCodes.UnknownErrorCode;
          this.data = data;
          Object.setPrototypeOf(this, ResponseError.prototype);
        }
        toJson() {
          return {
            code: this.code,
            message: this.message,
            data: this.data
          };
        }
      };
      exports.ResponseError = ResponseError;
      var ParameterStructures = class {
        constructor(kind) {
          this.kind = kind;
        }
        static is(value) {
          return value === ParameterStructures.auto || value === ParameterStructures.byName || value === ParameterStructures.byPosition;
        }
        toString() {
          return this.kind;
        }
      };
      exports.ParameterStructures = ParameterStructures;
      ParameterStructures.auto = new ParameterStructures("auto");
      ParameterStructures.byPosition = new ParameterStructures("byPosition");
      ParameterStructures.byName = new ParameterStructures("byName");
      var AbstractMessageSignature = class {
        constructor(method, numberOfParams) {
          this.method = method;
          this.numberOfParams = numberOfParams;
        }
        get parameterStructures() {
          return ParameterStructures.auto;
        }
      };
      exports.AbstractMessageSignature = AbstractMessageSignature;
      var RequestType0 = class extends AbstractMessageSignature {
        constructor(method) {
          super(method, 0);
        }
      };
      exports.RequestType0 = RequestType0;
      var RequestType = class extends AbstractMessageSignature {
        constructor(method, _parameterStructures = ParameterStructures.auto) {
          super(method, 1);
          this._parameterStructures = _parameterStructures;
        }
        get parameterStructures() {
          return this._parameterStructures;
        }
      };
      exports.RequestType = RequestType;
      var RequestType1 = class extends AbstractMessageSignature {
        constructor(method, _parameterStructures = ParameterStructures.auto) {
          super(method, 1);
          this._parameterStructures = _parameterStructures;
        }
        get parameterStructures() {
          return this._parameterStructures;
        }
      };
      exports.RequestType1 = RequestType1;
      var RequestType2 = class extends AbstractMessageSignature {
        constructor(method) {
          super(method, 2);
        }
      };
      exports.RequestType2 = RequestType2;
      var RequestType3 = class extends AbstractMessageSignature {
        constructor(method) {
          super(method, 3);
        }
      };
      exports.RequestType3 = RequestType3;
      var RequestType4 = class extends AbstractMessageSignature {
        constructor(method) {
          super(method, 4);
        }
      };
      exports.RequestType4 = RequestType4;
      var RequestType5 = class extends AbstractMessageSignature {
        constructor(method) {
          super(method, 5);
        }
      };
      exports.RequestType5 = RequestType5;
      var RequestType6 = class extends AbstractMessageSignature {
        constructor(method) {
          super(method, 6);
        }
      };
      exports.RequestType6 = RequestType6;
      var RequestType7 = class extends AbstractMessageSignature {
        constructor(method) {
          super(method, 7);
        }
      };
      exports.RequestType7 = RequestType7;
      var RequestType8 = class extends AbstractMessageSignature {
        constructor(method) {
          super(method, 8);
        }
      };
      exports.RequestType8 = RequestType8;
      var RequestType9 = class extends AbstractMessageSignature {
        constructor(method) {
          super(method, 9);
        }
      };
      exports.RequestType9 = RequestType9;
      var NotificationType = class extends AbstractMessageSignature {
        constructor(method, _parameterStructures = ParameterStructures.auto) {
          super(method, 1);
          this._parameterStructures = _parameterStructures;
        }
        get parameterStructures() {
          return this._parameterStructures;
        }
      };
      exports.NotificationType = NotificationType;
      var NotificationType0 = class extends AbstractMessageSignature {
        constructor(method) {
          super(method, 0);
        }
      };
      exports.NotificationType0 = NotificationType0;
      var NotificationType1 = class extends AbstractMessageSignature {
        constructor(method, _parameterStructures = ParameterStructures.auto) {
          super(method, 1);
          this._parameterStructures = _parameterStructures;
        }
        get parameterStructures() {
          return this._parameterStructures;
        }
      };
      exports.NotificationType1 = NotificationType1;
      var NotificationType2 = class extends AbstractMessageSignature {
        constructor(method) {
          super(method, 2);
        }
      };
      exports.NotificationType2 = NotificationType2;
      var NotificationType3 = class extends AbstractMessageSignature {
        constructor(method) {
          super(method, 3);
        }
      };
      exports.NotificationType3 = NotificationType3;
      var NotificationType4 = class extends AbstractMessageSignature {
        constructor(method) {
          super(method, 4);
        }
      };
      exports.NotificationType4 = NotificationType4;
      var NotificationType5 = class extends AbstractMessageSignature {
        constructor(method) {
          super(method, 5);
        }
      };
      exports.NotificationType5 = NotificationType5;
      var NotificationType6 = class extends AbstractMessageSignature {
        constructor(method) {
          super(method, 6);
        }
      };
      exports.NotificationType6 = NotificationType6;
      var NotificationType7 = class extends AbstractMessageSignature {
        constructor(method) {
          super(method, 7);
        }
      };
      exports.NotificationType7 = NotificationType7;
      var NotificationType8 = class extends AbstractMessageSignature {
        constructor(method) {
          super(method, 8);
        }
      };
      exports.NotificationType8 = NotificationType8;
      var NotificationType9 = class extends AbstractMessageSignature {
        constructor(method) {
          super(method, 9);
        }
      };
      exports.NotificationType9 = NotificationType9;
      function isRequestMessage(message) {
        const candidate = message;
        return candidate && is.string(candidate.method) && (is.string(candidate.id) || is.number(candidate.id));
      }
      exports.isRequestMessage = isRequestMessage;
      function isNotificationMessage(message) {
        const candidate = message;
        return candidate && is.string(candidate.method) && message.id === void 0;
      }
      exports.isNotificationMessage = isNotificationMessage;
      function isResponseMessage(message) {
        const candidate = message;
        return candidate && (candidate.result !== void 0 || !!candidate.error) && (is.string(candidate.id) || is.number(candidate.id) || candidate.id === null);
      }
      exports.isResponseMessage = isResponseMessage;
    }
  });

  // node_modules/vscode-jsonrpc/lib/common/cancellation.js
  var require_cancellation = __commonJS({
    "node_modules/vscode-jsonrpc/lib/common/cancellation.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.CancellationTokenSource = exports.CancellationToken = void 0;
      var ral_1 = require_ral();
      var Is = require_is();
      var events_1 = require_events();
      var CancellationToken;
      (function(CancellationToken2) {
        CancellationToken2.None = Object.freeze({
          isCancellationRequested: false,
          onCancellationRequested: events_1.Event.None
        });
        CancellationToken2.Cancelled = Object.freeze({
          isCancellationRequested: true,
          onCancellationRequested: events_1.Event.None
        });
        function is(value) {
          const candidate = value;
          return candidate && (candidate === CancellationToken2.None || candidate === CancellationToken2.Cancelled || Is.boolean(candidate.isCancellationRequested) && !!candidate.onCancellationRequested);
        }
        CancellationToken2.is = is;
      })(CancellationToken = exports.CancellationToken || (exports.CancellationToken = {}));
      var shortcutEvent = Object.freeze(function(callback, context) {
        const handle = ral_1.default().timer.setTimeout(callback.bind(context), 0);
        return { dispose() {
          ral_1.default().timer.clearTimeout(handle);
        } };
      });
      var MutableToken = class {
        constructor() {
          this._isCancelled = false;
        }
        cancel() {
          if (!this._isCancelled) {
            this._isCancelled = true;
            if (this._emitter) {
              this._emitter.fire(void 0);
              this.dispose();
            }
          }
        }
        get isCancellationRequested() {
          return this._isCancelled;
        }
        get onCancellationRequested() {
          if (this._isCancelled) {
            return shortcutEvent;
          }
          if (!this._emitter) {
            this._emitter = new events_1.Emitter();
          }
          return this._emitter.event;
        }
        dispose() {
          if (this._emitter) {
            this._emitter.dispose();
            this._emitter = void 0;
          }
        }
      };
      var CancellationTokenSource = class {
        get token() {
          if (!this._token) {
            this._token = new MutableToken();
          }
          return this._token;
        }
        cancel() {
          if (!this._token) {
            this._token = CancellationToken.Cancelled;
          } else {
            this._token.cancel();
          }
        }
        dispose() {
          if (!this._token) {
            this._token = CancellationToken.None;
          } else if (this._token instanceof MutableToken) {
            this._token.dispose();
          }
        }
      };
      exports.CancellationTokenSource = CancellationTokenSource;
    }
  });

  // node_modules/vscode-jsonrpc/lib/common/messageReader.js
  var require_messageReader = __commonJS({
    "node_modules/vscode-jsonrpc/lib/common/messageReader.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ReadableStreamMessageReader = exports.AbstractMessageReader = exports.MessageReader = void 0;
      var ral_1 = require_ral();
      var Is = require_is();
      var events_1 = require_events();
      var MessageReader;
      (function(MessageReader2) {
        function is(value) {
          let candidate = value;
          return candidate && Is.func(candidate.listen) && Is.func(candidate.dispose) && Is.func(candidate.onError) && Is.func(candidate.onClose) && Is.func(candidate.onPartialMessage);
        }
        MessageReader2.is = is;
      })(MessageReader = exports.MessageReader || (exports.MessageReader = {}));
      var AbstractMessageReader = class {
        constructor() {
          this.errorEmitter = new events_1.Emitter();
          this.closeEmitter = new events_1.Emitter();
          this.partialMessageEmitter = new events_1.Emitter();
        }
        dispose() {
          this.errorEmitter.dispose();
          this.closeEmitter.dispose();
        }
        get onError() {
          return this.errorEmitter.event;
        }
        fireError(error) {
          this.errorEmitter.fire(this.asError(error));
        }
        get onClose() {
          return this.closeEmitter.event;
        }
        fireClose() {
          this.closeEmitter.fire(void 0);
        }
        get onPartialMessage() {
          return this.partialMessageEmitter.event;
        }
        firePartialMessage(info) {
          this.partialMessageEmitter.fire(info);
        }
        asError(error) {
          if (error instanceof Error) {
            return error;
          } else {
            return new Error(`Reader received error. Reason: ${Is.string(error.message) ? error.message : "unknown"}`);
          }
        }
      };
      exports.AbstractMessageReader = AbstractMessageReader;
      var ResolvedMessageReaderOptions;
      (function(ResolvedMessageReaderOptions2) {
        function fromOptions(options) {
          var _a;
          let charset;
          let result;
          let contentDecoder;
          const contentDecoders = new Map();
          let contentTypeDecoder;
          const contentTypeDecoders = new Map();
          if (options === void 0 || typeof options === "string") {
            charset = options !== null && options !== void 0 ? options : "utf-8";
          } else {
            charset = (_a = options.charset) !== null && _a !== void 0 ? _a : "utf-8";
            if (options.contentDecoder !== void 0) {
              contentDecoder = options.contentDecoder;
              contentDecoders.set(contentDecoder.name, contentDecoder);
            }
            if (options.contentDecoders !== void 0) {
              for (const decoder of options.contentDecoders) {
                contentDecoders.set(decoder.name, decoder);
              }
            }
            if (options.contentTypeDecoder !== void 0) {
              contentTypeDecoder = options.contentTypeDecoder;
              contentTypeDecoders.set(contentTypeDecoder.name, contentTypeDecoder);
            }
            if (options.contentTypeDecoders !== void 0) {
              for (const decoder of options.contentTypeDecoders) {
                contentTypeDecoders.set(decoder.name, decoder);
              }
            }
          }
          if (contentTypeDecoder === void 0) {
            contentTypeDecoder = ral_1.default().applicationJson.decoder;
            contentTypeDecoders.set(contentTypeDecoder.name, contentTypeDecoder);
          }
          return { charset, contentDecoder, contentDecoders, contentTypeDecoder, contentTypeDecoders };
        }
        ResolvedMessageReaderOptions2.fromOptions = fromOptions;
      })(ResolvedMessageReaderOptions || (ResolvedMessageReaderOptions = {}));
      var ReadableStreamMessageReader = class extends AbstractMessageReader {
        constructor(readable, options) {
          super();
          this.readable = readable;
          this.options = ResolvedMessageReaderOptions.fromOptions(options);
          this.buffer = ral_1.default().messageBuffer.create(this.options.charset);
          this._partialMessageTimeout = 1e4;
          this.nextMessageLength = -1;
          this.messageToken = 0;
        }
        set partialMessageTimeout(timeout) {
          this._partialMessageTimeout = timeout;
        }
        get partialMessageTimeout() {
          return this._partialMessageTimeout;
        }
        listen(callback) {
          this.nextMessageLength = -1;
          this.messageToken = 0;
          this.partialMessageTimer = void 0;
          this.callback = callback;
          const result = this.readable.onData((data) => {
            this.onData(data);
          });
          this.readable.onError((error) => this.fireError(error));
          this.readable.onClose(() => this.fireClose());
          return result;
        }
        onData(data) {
          this.buffer.append(data);
          while (true) {
            if (this.nextMessageLength === -1) {
              const headers = this.buffer.tryReadHeaders();
              if (!headers) {
                return;
              }
              const contentLength = headers.get("Content-Length");
              if (!contentLength) {
                throw new Error("Header must provide a Content-Length property.");
              }
              const length = parseInt(contentLength);
              if (isNaN(length)) {
                throw new Error("Content-Length value must be a number.");
              }
              this.nextMessageLength = length;
            }
            const body = this.buffer.tryReadBody(this.nextMessageLength);
            if (body === void 0) {
              this.setPartialMessageTimer();
              return;
            }
            this.clearPartialMessageTimer();
            this.nextMessageLength = -1;
            let p;
            if (this.options.contentDecoder !== void 0) {
              p = this.options.contentDecoder.decode(body);
            } else {
              p = Promise.resolve(body);
            }
            p.then((value) => {
              this.options.contentTypeDecoder.decode(value, this.options).then((msg) => {
                this.callback(msg);
              }, (error) => {
                this.fireError(error);
              });
            }, (error) => {
              this.fireError(error);
            });
          }
        }
        clearPartialMessageTimer() {
          if (this.partialMessageTimer) {
            ral_1.default().timer.clearTimeout(this.partialMessageTimer);
            this.partialMessageTimer = void 0;
          }
        }
        setPartialMessageTimer() {
          this.clearPartialMessageTimer();
          if (this._partialMessageTimeout <= 0) {
            return;
          }
          this.partialMessageTimer = ral_1.default().timer.setTimeout((token, timeout) => {
            this.partialMessageTimer = void 0;
            if (token === this.messageToken) {
              this.firePartialMessage({ messageToken: token, waitingTime: timeout });
              this.setPartialMessageTimer();
            }
          }, this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout);
        }
      };
      exports.ReadableStreamMessageReader = ReadableStreamMessageReader;
    }
  });

  // node_modules/vscode-jsonrpc/lib/common/semaphore.js
  var require_semaphore = __commonJS({
    "node_modules/vscode-jsonrpc/lib/common/semaphore.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Semaphore = void 0;
      var ral_1 = require_ral();
      var Semaphore = class {
        constructor(capacity = 1) {
          if (capacity <= 0) {
            throw new Error("Capacity must be greater than 0");
          }
          this._capacity = capacity;
          this._active = 0;
          this._waiting = [];
        }
        lock(thunk) {
          return new Promise((resolve, reject) => {
            this._waiting.push({ thunk, resolve, reject });
            this.runNext();
          });
        }
        get active() {
          return this._active;
        }
        runNext() {
          if (this._waiting.length === 0 || this._active === this._capacity) {
            return;
          }
          ral_1.default().timer.setImmediate(() => this.doRunNext());
        }
        doRunNext() {
          if (this._waiting.length === 0 || this._active === this._capacity) {
            return;
          }
          const next = this._waiting.shift();
          this._active++;
          if (this._active > this._capacity) {
            throw new Error(`To many thunks active`);
          }
          try {
            const result = next.thunk();
            if (result instanceof Promise) {
              result.then((value) => {
                this._active--;
                next.resolve(value);
                this.runNext();
              }, (err) => {
                this._active--;
                next.reject(err);
                this.runNext();
              });
            } else {
              this._active--;
              next.resolve(result);
              this.runNext();
            }
          } catch (err) {
            this._active--;
            next.reject(err);
            this.runNext();
          }
        }
      };
      exports.Semaphore = Semaphore;
    }
  });

  // node_modules/vscode-jsonrpc/lib/common/messageWriter.js
  var require_messageWriter = __commonJS({
    "node_modules/vscode-jsonrpc/lib/common/messageWriter.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.WriteableStreamMessageWriter = exports.AbstractMessageWriter = exports.MessageWriter = void 0;
      var ral_1 = require_ral();
      var Is = require_is();
      var semaphore_1 = require_semaphore();
      var events_1 = require_events();
      var ContentLength = "Content-Length: ";
      var CRLF = "\r\n";
      var MessageWriter;
      (function(MessageWriter2) {
        function is(value) {
          let candidate = value;
          return candidate && Is.func(candidate.dispose) && Is.func(candidate.onClose) && Is.func(candidate.onError) && Is.func(candidate.write);
        }
        MessageWriter2.is = is;
      })(MessageWriter = exports.MessageWriter || (exports.MessageWriter = {}));
      var AbstractMessageWriter = class {
        constructor() {
          this.errorEmitter = new events_1.Emitter();
          this.closeEmitter = new events_1.Emitter();
        }
        dispose() {
          this.errorEmitter.dispose();
          this.closeEmitter.dispose();
        }
        get onError() {
          return this.errorEmitter.event;
        }
        fireError(error, message, count) {
          this.errorEmitter.fire([this.asError(error), message, count]);
        }
        get onClose() {
          return this.closeEmitter.event;
        }
        fireClose() {
          this.closeEmitter.fire(void 0);
        }
        asError(error) {
          if (error instanceof Error) {
            return error;
          } else {
            return new Error(`Writer received error. Reason: ${Is.string(error.message) ? error.message : "unknown"}`);
          }
        }
      };
      exports.AbstractMessageWriter = AbstractMessageWriter;
      var ResolvedMessageWriterOptions;
      (function(ResolvedMessageWriterOptions2) {
        function fromOptions(options) {
          var _a, _b;
          if (options === void 0 || typeof options === "string") {
            return { charset: options !== null && options !== void 0 ? options : "utf-8", contentTypeEncoder: ral_1.default().applicationJson.encoder };
          } else {
            return { charset: (_a = options.charset) !== null && _a !== void 0 ? _a : "utf-8", contentEncoder: options.contentEncoder, contentTypeEncoder: (_b = options.contentTypeEncoder) !== null && _b !== void 0 ? _b : ral_1.default().applicationJson.encoder };
          }
        }
        ResolvedMessageWriterOptions2.fromOptions = fromOptions;
      })(ResolvedMessageWriterOptions || (ResolvedMessageWriterOptions = {}));
      var WriteableStreamMessageWriter = class extends AbstractMessageWriter {
        constructor(writable, options) {
          super();
          this.writable = writable;
          this.options = ResolvedMessageWriterOptions.fromOptions(options);
          this.errorCount = 0;
          this.writeSemaphore = new semaphore_1.Semaphore(1);
          this.writable.onError((error) => this.fireError(error));
          this.writable.onClose(() => this.fireClose());
        }
        async write(msg) {
          return this.writeSemaphore.lock(async () => {
            const payload = this.options.contentTypeEncoder.encode(msg, this.options).then((buffer) => {
              if (this.options.contentEncoder !== void 0) {
                return this.options.contentEncoder.encode(buffer);
              } else {
                return buffer;
              }
            });
            return payload.then((buffer) => {
              const headers = [];
              headers.push(ContentLength, buffer.byteLength.toString(), CRLF);
              headers.push(CRLF);
              return this.doWrite(msg, headers, buffer);
            }, (error) => {
              this.fireError(error);
              throw error;
            });
          });
        }
        async doWrite(msg, headers, data) {
          try {
            await this.writable.write(headers.join(""), "ascii");
            return this.writable.write(data);
          } catch (error) {
            this.handleError(error, msg);
            return Promise.reject(error);
          }
        }
        handleError(error, msg) {
          this.errorCount++;
          this.fireError(error, msg, this.errorCount);
        }
        end() {
          this.writable.end();
        }
      };
      exports.WriteableStreamMessageWriter = WriteableStreamMessageWriter;
    }
  });

  // node_modules/vscode-jsonrpc/lib/common/linkedMap.js
  var require_linkedMap = __commonJS({
    "node_modules/vscode-jsonrpc/lib/common/linkedMap.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.LRUCache = exports.LinkedMap = exports.Touch = void 0;
      var Touch;
      (function(Touch2) {
        Touch2.None = 0;
        Touch2.First = 1;
        Touch2.AsOld = Touch2.First;
        Touch2.Last = 2;
        Touch2.AsNew = Touch2.Last;
      })(Touch = exports.Touch || (exports.Touch = {}));
      var LinkedMap = class {
        constructor() {
          this[Symbol.toStringTag] = "LinkedMap";
          this._map = new Map();
          this._head = void 0;
          this._tail = void 0;
          this._size = 0;
          this._state = 0;
        }
        clear() {
          this._map.clear();
          this._head = void 0;
          this._tail = void 0;
          this._size = 0;
          this._state++;
        }
        isEmpty() {
          return !this._head && !this._tail;
        }
        get size() {
          return this._size;
        }
        get first() {
          var _a;
          return (_a = this._head) === null || _a === void 0 ? void 0 : _a.value;
        }
        get last() {
          var _a;
          return (_a = this._tail) === null || _a === void 0 ? void 0 : _a.value;
        }
        has(key) {
          return this._map.has(key);
        }
        get(key, touch = Touch.None) {
          const item = this._map.get(key);
          if (!item) {
            return void 0;
          }
          if (touch !== Touch.None) {
            this.touch(item, touch);
          }
          return item.value;
        }
        set(key, value, touch = Touch.None) {
          let item = this._map.get(key);
          if (item) {
            item.value = value;
            if (touch !== Touch.None) {
              this.touch(item, touch);
            }
          } else {
            item = { key, value, next: void 0, previous: void 0 };
            switch (touch) {
              case Touch.None:
                this.addItemLast(item);
                break;
              case Touch.First:
                this.addItemFirst(item);
                break;
              case Touch.Last:
                this.addItemLast(item);
                break;
              default:
                this.addItemLast(item);
                break;
            }
            this._map.set(key, item);
            this._size++;
          }
          return this;
        }
        delete(key) {
          return !!this.remove(key);
        }
        remove(key) {
          const item = this._map.get(key);
          if (!item) {
            return void 0;
          }
          this._map.delete(key);
          this.removeItem(item);
          this._size--;
          return item.value;
        }
        shift() {
          if (!this._head && !this._tail) {
            return void 0;
          }
          if (!this._head || !this._tail) {
            throw new Error("Invalid list");
          }
          const item = this._head;
          this._map.delete(item.key);
          this.removeItem(item);
          this._size--;
          return item.value;
        }
        forEach(callbackfn, thisArg) {
          const state = this._state;
          let current = this._head;
          while (current) {
            if (thisArg) {
              callbackfn.bind(thisArg)(current.value, current.key, this);
            } else {
              callbackfn(current.value, current.key, this);
            }
            if (this._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            current = current.next;
          }
        }
        keys() {
          const map = this;
          const state = this._state;
          let current = this._head;
          const iterator = {
            [Symbol.iterator]() {
              return iterator;
            },
            next() {
              if (map._state !== state) {
                throw new Error(`LinkedMap got modified during iteration.`);
              }
              if (current) {
                const result = { value: current.key, done: false };
                current = current.next;
                return result;
              } else {
                return { value: void 0, done: true };
              }
            }
          };
          return iterator;
        }
        values() {
          const map = this;
          const state = this._state;
          let current = this._head;
          const iterator = {
            [Symbol.iterator]() {
              return iterator;
            },
            next() {
              if (map._state !== state) {
                throw new Error(`LinkedMap got modified during iteration.`);
              }
              if (current) {
                const result = { value: current.value, done: false };
                current = current.next;
                return result;
              } else {
                return { value: void 0, done: true };
              }
            }
          };
          return iterator;
        }
        entries() {
          const map = this;
          const state = this._state;
          let current = this._head;
          const iterator = {
            [Symbol.iterator]() {
              return iterator;
            },
            next() {
              if (map._state !== state) {
                throw new Error(`LinkedMap got modified during iteration.`);
              }
              if (current) {
                const result = { value: [current.key, current.value], done: false };
                current = current.next;
                return result;
              } else {
                return { value: void 0, done: true };
              }
            }
          };
          return iterator;
        }
        [Symbol.iterator]() {
          return this.entries();
        }
        trimOld(newSize) {
          if (newSize >= this.size) {
            return;
          }
          if (newSize === 0) {
            this.clear();
            return;
          }
          let current = this._head;
          let currentSize = this.size;
          while (current && currentSize > newSize) {
            this._map.delete(current.key);
            current = current.next;
            currentSize--;
          }
          this._head = current;
          this._size = currentSize;
          if (current) {
            current.previous = void 0;
          }
          this._state++;
        }
        addItemFirst(item) {
          if (!this._head && !this._tail) {
            this._tail = item;
          } else if (!this._head) {
            throw new Error("Invalid list");
          } else {
            item.next = this._head;
            this._head.previous = item;
          }
          this._head = item;
          this._state++;
        }
        addItemLast(item) {
          if (!this._head && !this._tail) {
            this._head = item;
          } else if (!this._tail) {
            throw new Error("Invalid list");
          } else {
            item.previous = this._tail;
            this._tail.next = item;
          }
          this._tail = item;
          this._state++;
        }
        removeItem(item) {
          if (item === this._head && item === this._tail) {
            this._head = void 0;
            this._tail = void 0;
          } else if (item === this._head) {
            if (!item.next) {
              throw new Error("Invalid list");
            }
            item.next.previous = void 0;
            this._head = item.next;
          } else if (item === this._tail) {
            if (!item.previous) {
              throw new Error("Invalid list");
            }
            item.previous.next = void 0;
            this._tail = item.previous;
          } else {
            const next = item.next;
            const previous = item.previous;
            if (!next || !previous) {
              throw new Error("Invalid list");
            }
            next.previous = previous;
            previous.next = next;
          }
          item.next = void 0;
          item.previous = void 0;
          this._state++;
        }
        touch(item, touch) {
          if (!this._head || !this._tail) {
            throw new Error("Invalid list");
          }
          if (touch !== Touch.First && touch !== Touch.Last) {
            return;
          }
          if (touch === Touch.First) {
            if (item === this._head) {
              return;
            }
            const next = item.next;
            const previous = item.previous;
            if (item === this._tail) {
              previous.next = void 0;
              this._tail = previous;
            } else {
              next.previous = previous;
              previous.next = next;
            }
            item.previous = void 0;
            item.next = this._head;
            this._head.previous = item;
            this._head = item;
            this._state++;
          } else if (touch === Touch.Last) {
            if (item === this._tail) {
              return;
            }
            const next = item.next;
            const previous = item.previous;
            if (item === this._head) {
              next.previous = void 0;
              this._head = next;
            } else {
              next.previous = previous;
              previous.next = next;
            }
            item.next = void 0;
            item.previous = this._tail;
            this._tail.next = item;
            this._tail = item;
            this._state++;
          }
        }
        toJSON() {
          const data = [];
          this.forEach((value, key) => {
            data.push([key, value]);
          });
          return data;
        }
        fromJSON(data) {
          this.clear();
          for (const [key, value] of data) {
            this.set(key, value);
          }
        }
      };
      exports.LinkedMap = LinkedMap;
      var LRUCache = class extends LinkedMap {
        constructor(limit, ratio = 1) {
          super();
          this._limit = limit;
          this._ratio = Math.min(Math.max(0, ratio), 1);
        }
        get limit() {
          return this._limit;
        }
        set limit(limit) {
          this._limit = limit;
          this.checkTrim();
        }
        get ratio() {
          return this._ratio;
        }
        set ratio(ratio) {
          this._ratio = Math.min(Math.max(0, ratio), 1);
          this.checkTrim();
        }
        get(key, touch = Touch.AsNew) {
          return super.get(key, touch);
        }
        peek(key) {
          return super.get(key, Touch.None);
        }
        set(key, value) {
          super.set(key, value, Touch.Last);
          this.checkTrim();
          return this;
        }
        checkTrim() {
          if (this.size > this._limit) {
            this.trimOld(Math.round(this._limit * this._ratio));
          }
        }
      };
      exports.LRUCache = LRUCache;
    }
  });

  // node_modules/vscode-jsonrpc/lib/common/connection.js
  var require_connection = __commonJS({
    "node_modules/vscode-jsonrpc/lib/common/connection.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createMessageConnection = exports.ConnectionOptions = exports.CancellationStrategy = exports.CancellationSenderStrategy = exports.CancellationReceiverStrategy = exports.ConnectionStrategy = exports.ConnectionError = exports.ConnectionErrors = exports.LogTraceNotification = exports.SetTraceNotification = exports.TraceFormat = exports.Trace = exports.NullLogger = exports.ProgressType = void 0;
      var ral_1 = require_ral();
      var Is = require_is();
      var messages_1 = require_messages();
      var linkedMap_1 = require_linkedMap();
      var events_1 = require_events();
      var cancellation_1 = require_cancellation();
      var CancelNotification;
      (function(CancelNotification2) {
        CancelNotification2.type = new messages_1.NotificationType("$/cancelRequest");
      })(CancelNotification || (CancelNotification = {}));
      var ProgressNotification;
      (function(ProgressNotification2) {
        ProgressNotification2.type = new messages_1.NotificationType("$/progress");
      })(ProgressNotification || (ProgressNotification = {}));
      var ProgressType = class {
        constructor() {
        }
      };
      exports.ProgressType = ProgressType;
      var StarRequestHandler;
      (function(StarRequestHandler2) {
        function is(value) {
          return Is.func(value);
        }
        StarRequestHandler2.is = is;
      })(StarRequestHandler || (StarRequestHandler = {}));
      exports.NullLogger = Object.freeze({
        error: () => {
        },
        warn: () => {
        },
        info: () => {
        },
        log: () => {
        }
      });
      var Trace;
      (function(Trace2) {
        Trace2[Trace2["Off"] = 0] = "Off";
        Trace2[Trace2["Messages"] = 1] = "Messages";
        Trace2[Trace2["Verbose"] = 2] = "Verbose";
      })(Trace = exports.Trace || (exports.Trace = {}));
      (function(Trace2) {
        function fromString(value) {
          if (!Is.string(value)) {
            return Trace2.Off;
          }
          value = value.toLowerCase();
          switch (value) {
            case "off":
              return Trace2.Off;
            case "messages":
              return Trace2.Messages;
            case "verbose":
              return Trace2.Verbose;
            default:
              return Trace2.Off;
          }
        }
        Trace2.fromString = fromString;
        function toString(value) {
          switch (value) {
            case Trace2.Off:
              return "off";
            case Trace2.Messages:
              return "messages";
            case Trace2.Verbose:
              return "verbose";
            default:
              return "off";
          }
        }
        Trace2.toString = toString;
      })(Trace = exports.Trace || (exports.Trace = {}));
      var TraceFormat;
      (function(TraceFormat2) {
        TraceFormat2["Text"] = "text";
        TraceFormat2["JSON"] = "json";
      })(TraceFormat = exports.TraceFormat || (exports.TraceFormat = {}));
      (function(TraceFormat2) {
        function fromString(value) {
          value = value.toLowerCase();
          if (value === "json") {
            return TraceFormat2.JSON;
          } else {
            return TraceFormat2.Text;
          }
        }
        TraceFormat2.fromString = fromString;
      })(TraceFormat = exports.TraceFormat || (exports.TraceFormat = {}));
      var SetTraceNotification;
      (function(SetTraceNotification2) {
        SetTraceNotification2.type = new messages_1.NotificationType("$/setTrace");
      })(SetTraceNotification = exports.SetTraceNotification || (exports.SetTraceNotification = {}));
      var LogTraceNotification;
      (function(LogTraceNotification2) {
        LogTraceNotification2.type = new messages_1.NotificationType("$/logTrace");
      })(LogTraceNotification = exports.LogTraceNotification || (exports.LogTraceNotification = {}));
      var ConnectionErrors;
      (function(ConnectionErrors2) {
        ConnectionErrors2[ConnectionErrors2["Closed"] = 1] = "Closed";
        ConnectionErrors2[ConnectionErrors2["Disposed"] = 2] = "Disposed";
        ConnectionErrors2[ConnectionErrors2["AlreadyListening"] = 3] = "AlreadyListening";
      })(ConnectionErrors = exports.ConnectionErrors || (exports.ConnectionErrors = {}));
      var ConnectionError = class extends Error {
        constructor(code, message) {
          super(message);
          this.code = code;
          Object.setPrototypeOf(this, ConnectionError.prototype);
        }
      };
      exports.ConnectionError = ConnectionError;
      var ConnectionStrategy;
      (function(ConnectionStrategy2) {
        function is(value) {
          const candidate = value;
          return candidate && Is.func(candidate.cancelUndispatched);
        }
        ConnectionStrategy2.is = is;
      })(ConnectionStrategy = exports.ConnectionStrategy || (exports.ConnectionStrategy = {}));
      var CancellationReceiverStrategy;
      (function(CancellationReceiverStrategy2) {
        CancellationReceiverStrategy2.Message = Object.freeze({
          createCancellationTokenSource(_) {
            return new cancellation_1.CancellationTokenSource();
          }
        });
        function is(value) {
          const candidate = value;
          return candidate && Is.func(candidate.createCancellationTokenSource);
        }
        CancellationReceiverStrategy2.is = is;
      })(CancellationReceiverStrategy = exports.CancellationReceiverStrategy || (exports.CancellationReceiverStrategy = {}));
      var CancellationSenderStrategy;
      (function(CancellationSenderStrategy2) {
        CancellationSenderStrategy2.Message = Object.freeze({
          sendCancellation(conn, id) {
            conn.sendNotification(CancelNotification.type, { id });
          },
          cleanup(_) {
          }
        });
        function is(value) {
          const candidate = value;
          return candidate && Is.func(candidate.sendCancellation) && Is.func(candidate.cleanup);
        }
        CancellationSenderStrategy2.is = is;
      })(CancellationSenderStrategy = exports.CancellationSenderStrategy || (exports.CancellationSenderStrategy = {}));
      var CancellationStrategy;
      (function(CancellationStrategy2) {
        CancellationStrategy2.Message = Object.freeze({
          receiver: CancellationReceiverStrategy.Message,
          sender: CancellationSenderStrategy.Message
        });
        function is(value) {
          const candidate = value;
          return candidate && CancellationReceiverStrategy.is(candidate.receiver) && CancellationSenderStrategy.is(candidate.sender);
        }
        CancellationStrategy2.is = is;
      })(CancellationStrategy = exports.CancellationStrategy || (exports.CancellationStrategy = {}));
      var ConnectionOptions;
      (function(ConnectionOptions2) {
        function is(value) {
          const candidate = value;
          return candidate && (CancellationStrategy.is(candidate.cancellationStrategy) || ConnectionStrategy.is(candidate.connectionStrategy));
        }
        ConnectionOptions2.is = is;
      })(ConnectionOptions = exports.ConnectionOptions || (exports.ConnectionOptions = {}));
      var ConnectionState;
      (function(ConnectionState2) {
        ConnectionState2[ConnectionState2["New"] = 1] = "New";
        ConnectionState2[ConnectionState2["Listening"] = 2] = "Listening";
        ConnectionState2[ConnectionState2["Closed"] = 3] = "Closed";
        ConnectionState2[ConnectionState2["Disposed"] = 4] = "Disposed";
      })(ConnectionState || (ConnectionState = {}));
      function createMessageConnection(messageReader, messageWriter, _logger, options) {
        const logger = _logger !== void 0 ? _logger : exports.NullLogger;
        let sequenceNumber = 0;
        let notificationSquenceNumber = 0;
        let unknownResponseSquenceNumber = 0;
        const version = "2.0";
        let starRequestHandler = void 0;
        const requestHandlers = Object.create(null);
        let starNotificationHandler = void 0;
        const notificationHandlers = Object.create(null);
        const progressHandlers = new Map();
        let timer;
        let messageQueue = new linkedMap_1.LinkedMap();
        let responsePromises = Object.create(null);
        let requestTokens = Object.create(null);
        let trace = Trace.Off;
        let traceFormat = TraceFormat.Text;
        let tracer;
        let state = ConnectionState.New;
        const errorEmitter = new events_1.Emitter();
        const closeEmitter = new events_1.Emitter();
        const unhandledNotificationEmitter = new events_1.Emitter();
        const unhandledProgressEmitter = new events_1.Emitter();
        const disposeEmitter = new events_1.Emitter();
        const cancellationStrategy = options && options.cancellationStrategy ? options.cancellationStrategy : CancellationStrategy.Message;
        function createRequestQueueKey(id) {
          if (id === null) {
            throw new Error(`Can't send requests with id null since the response can't be correlated.`);
          }
          return "req-" + id.toString();
        }
        function createResponseQueueKey(id) {
          if (id === null) {
            return "res-unknown-" + (++unknownResponseSquenceNumber).toString();
          } else {
            return "res-" + id.toString();
          }
        }
        function createNotificationQueueKey() {
          return "not-" + (++notificationSquenceNumber).toString();
        }
        function addMessageToQueue(queue, message) {
          if (messages_1.isRequestMessage(message)) {
            queue.set(createRequestQueueKey(message.id), message);
          } else if (messages_1.isResponseMessage(message)) {
            queue.set(createResponseQueueKey(message.id), message);
          } else {
            queue.set(createNotificationQueueKey(), message);
          }
        }
        function cancelUndispatched(_message) {
          return void 0;
        }
        function isListening() {
          return state === ConnectionState.Listening;
        }
        function isClosed() {
          return state === ConnectionState.Closed;
        }
        function isDisposed() {
          return state === ConnectionState.Disposed;
        }
        function closeHandler() {
          if (state === ConnectionState.New || state === ConnectionState.Listening) {
            state = ConnectionState.Closed;
            closeEmitter.fire(void 0);
          }
        }
        function readErrorHandler(error) {
          errorEmitter.fire([error, void 0, void 0]);
        }
        function writeErrorHandler(data) {
          errorEmitter.fire(data);
        }
        messageReader.onClose(closeHandler);
        messageReader.onError(readErrorHandler);
        messageWriter.onClose(closeHandler);
        messageWriter.onError(writeErrorHandler);
        function triggerMessageQueue() {
          if (timer || messageQueue.size === 0) {
            return;
          }
          timer = ral_1.default().timer.setImmediate(() => {
            timer = void 0;
            processMessageQueue();
          });
        }
        function processMessageQueue() {
          if (messageQueue.size === 0) {
            return;
          }
          const message = messageQueue.shift();
          try {
            if (messages_1.isRequestMessage(message)) {
              handleRequest(message);
            } else if (messages_1.isNotificationMessage(message)) {
              handleNotification(message);
            } else if (messages_1.isResponseMessage(message)) {
              handleResponse(message);
            } else {
              handleInvalidMessage(message);
            }
          } finally {
            triggerMessageQueue();
          }
        }
        const callback = (message) => {
          try {
            if (messages_1.isNotificationMessage(message) && message.method === CancelNotification.type.method) {
              const key = createRequestQueueKey(message.params.id);
              const toCancel = messageQueue.get(key);
              if (messages_1.isRequestMessage(toCancel)) {
                const strategy = options === null || options === void 0 ? void 0 : options.connectionStrategy;
                const response = strategy && strategy.cancelUndispatched ? strategy.cancelUndispatched(toCancel, cancelUndispatched) : cancelUndispatched(toCancel);
                if (response && (response.error !== void 0 || response.result !== void 0)) {
                  messageQueue.delete(key);
                  response.id = toCancel.id;
                  traceSendingResponse(response, message.method, Date.now());
                  messageWriter.write(response);
                  return;
                }
              }
            }
            addMessageToQueue(messageQueue, message);
          } finally {
            triggerMessageQueue();
          }
        };
        function handleRequest(requestMessage) {
          if (isDisposed()) {
            return;
          }
          function reply(resultOrError, method, startTime2) {
            const message = {
              jsonrpc: version,
              id: requestMessage.id
            };
            if (resultOrError instanceof messages_1.ResponseError) {
              message.error = resultOrError.toJson();
            } else {
              message.result = resultOrError === void 0 ? null : resultOrError;
            }
            traceSendingResponse(message, method, startTime2);
            messageWriter.write(message);
          }
          function replyError(error, method, startTime2) {
            const message = {
              jsonrpc: version,
              id: requestMessage.id,
              error: error.toJson()
            };
            traceSendingResponse(message, method, startTime2);
            messageWriter.write(message);
          }
          function replySuccess(result, method, startTime2) {
            if (result === void 0) {
              result = null;
            }
            const message = {
              jsonrpc: version,
              id: requestMessage.id,
              result
            };
            traceSendingResponse(message, method, startTime2);
            messageWriter.write(message);
          }
          traceReceivedRequest(requestMessage);
          const element = requestHandlers[requestMessage.method];
          let type;
          let requestHandler;
          if (element) {
            type = element.type;
            requestHandler = element.handler;
          }
          const startTime = Date.now();
          if (requestHandler || starRequestHandler) {
            const tokenKey = String(requestMessage.id);
            const cancellationSource = cancellationStrategy.receiver.createCancellationTokenSource(tokenKey);
            requestTokens[tokenKey] = cancellationSource;
            try {
              let handlerResult;
              if (requestHandler) {
                if (requestMessage.params === void 0) {
                  if (type !== void 0 && type.numberOfParams !== 0) {
                    replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines ${type.numberOfParams} params but recevied none.`), requestMessage.method, startTime);
                    return;
                  }
                  handlerResult = requestHandler(cancellationSource.token);
                } else if (Array.isArray(requestMessage.params)) {
                  if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byName) {
                    replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines parameters by name but received parameters by position`), requestMessage.method, startTime);
                    return;
                  }
                  handlerResult = requestHandler(...requestMessage.params, cancellationSource.token);
                } else {
                  if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byPosition) {
                    replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines parameters by position but received parameters by name`), requestMessage.method, startTime);
                    return;
                  }
                  handlerResult = requestHandler(requestMessage.params, cancellationSource.token);
                }
              } else if (starRequestHandler) {
                handlerResult = starRequestHandler(requestMessage.method, requestMessage.params, cancellationSource.token);
              }
              const promise = handlerResult;
              if (!handlerResult) {
                delete requestTokens[tokenKey];
                replySuccess(handlerResult, requestMessage.method, startTime);
              } else if (promise.then) {
                promise.then((resultOrError) => {
                  delete requestTokens[tokenKey];
                  reply(resultOrError, requestMessage.method, startTime);
                }, (error) => {
                  delete requestTokens[tokenKey];
                  if (error instanceof messages_1.ResponseError) {
                    replyError(error, requestMessage.method, startTime);
                  } else if (error && Is.string(error.message)) {
                    replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed with message: ${error.message}`), requestMessage.method, startTime);
                  } else {
                    replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed unexpectedly without providing any details.`), requestMessage.method, startTime);
                  }
                });
              } else {
                delete requestTokens[tokenKey];
                reply(handlerResult, requestMessage.method, startTime);
              }
            } catch (error) {
              delete requestTokens[tokenKey];
              if (error instanceof messages_1.ResponseError) {
                reply(error, requestMessage.method, startTime);
              } else if (error && Is.string(error.message)) {
                replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed with message: ${error.message}`), requestMessage.method, startTime);
              } else {
                replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed unexpectedly without providing any details.`), requestMessage.method, startTime);
              }
            }
          } else {
            replyError(new messages_1.ResponseError(messages_1.ErrorCodes.MethodNotFound, `Unhandled method ${requestMessage.method}`), requestMessage.method, startTime);
          }
        }
        function handleResponse(responseMessage) {
          if (isDisposed()) {
            return;
          }
          if (responseMessage.id === null) {
            if (responseMessage.error) {
              logger.error(`Received response message without id: Error is: 
${JSON.stringify(responseMessage.error, void 0, 4)}`);
            } else {
              logger.error(`Received response message without id. No further error information provided.`);
            }
          } else {
            const key = String(responseMessage.id);
            const responsePromise = responsePromises[key];
            traceReceivedResponse(responseMessage, responsePromise);
            if (responsePromise) {
              delete responsePromises[key];
              try {
                if (responseMessage.error) {
                  const error = responseMessage.error;
                  responsePromise.reject(new messages_1.ResponseError(error.code, error.message, error.data));
                } else if (responseMessage.result !== void 0) {
                  responsePromise.resolve(responseMessage.result);
                } else {
                  throw new Error("Should never happen.");
                }
              } catch (error) {
                if (error.message) {
                  logger.error(`Response handler '${responsePromise.method}' failed with message: ${error.message}`);
                } else {
                  logger.error(`Response handler '${responsePromise.method}' failed unexpectedly.`);
                }
              }
            }
          }
        }
        function handleNotification(message) {
          if (isDisposed()) {
            return;
          }
          let type = void 0;
          let notificationHandler;
          if (message.method === CancelNotification.type.method) {
            notificationHandler = (params) => {
              const id = params.id;
              const source = requestTokens[String(id)];
              if (source) {
                source.cancel();
              }
            };
          } else {
            const element = notificationHandlers[message.method];
            if (element) {
              notificationHandler = element.handler;
              type = element.type;
            }
          }
          if (notificationHandler || starNotificationHandler) {
            try {
              traceReceivedNotification(message);
              if (notificationHandler) {
                if (message.params === void 0) {
                  if (type !== void 0) {
                    if (type.numberOfParams !== 0 && type.parameterStructures !== messages_1.ParameterStructures.byName) {
                      logger.error(`Notification ${message.method} defines ${type.numberOfParams} params but recevied none.`);
                    }
                  }
                  notificationHandler();
                } else if (Array.isArray(message.params)) {
                  if (type !== void 0) {
                    if (type.parameterStructures === messages_1.ParameterStructures.byName) {
                      logger.error(`Notification ${message.method} defines parameters by name but received parameters by position`);
                    }
                    if (type.numberOfParams !== message.params.length) {
                      logger.error(`Notification ${message.method} defines ${type.numberOfParams} params but received ${message.params.length} argumennts`);
                    }
                  }
                  notificationHandler(...message.params);
                } else {
                  if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byPosition) {
                    logger.error(`Notification ${message.method} defines parameters by position but received parameters by name`);
                  }
                  notificationHandler(message.params);
                }
              } else if (starNotificationHandler) {
                starNotificationHandler(message.method, message.params);
              }
            } catch (error) {
              if (error.message) {
                logger.error(`Notification handler '${message.method}' failed with message: ${error.message}`);
              } else {
                logger.error(`Notification handler '${message.method}' failed unexpectedly.`);
              }
            }
          } else {
            unhandledNotificationEmitter.fire(message);
          }
        }
        function handleInvalidMessage(message) {
          if (!message) {
            logger.error("Received empty message.");
            return;
          }
          logger.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(message, null, 4)}`);
          const responseMessage = message;
          if (Is.string(responseMessage.id) || Is.number(responseMessage.id)) {
            const key = String(responseMessage.id);
            const responseHandler = responsePromises[key];
            if (responseHandler) {
              responseHandler.reject(new Error("The received response has neither a result nor an error property."));
            }
          }
        }
        function traceSendingRequest(message) {
          if (trace === Trace.Off || !tracer) {
            return;
          }
          if (traceFormat === TraceFormat.Text) {
            let data = void 0;
            if (trace === Trace.Verbose && message.params) {
              data = `Params: ${JSON.stringify(message.params, null, 4)}

`;
            }
            tracer.log(`Sending request '${message.method} - (${message.id})'.`, data);
          } else {
            logLSPMessage("send-request", message);
          }
        }
        function traceSendingNotification(message) {
          if (trace === Trace.Off || !tracer) {
            return;
          }
          if (traceFormat === TraceFormat.Text) {
            let data = void 0;
            if (trace === Trace.Verbose) {
              if (message.params) {
                data = `Params: ${JSON.stringify(message.params, null, 4)}

`;
              } else {
                data = "No parameters provided.\n\n";
              }
            }
            tracer.log(`Sending notification '${message.method}'.`, data);
          } else {
            logLSPMessage("send-notification", message);
          }
        }
        function traceSendingResponse(message, method, startTime) {
          if (trace === Trace.Off || !tracer) {
            return;
          }
          if (traceFormat === TraceFormat.Text) {
            let data = void 0;
            if (trace === Trace.Verbose) {
              if (message.error && message.error.data) {
                data = `Error data: ${JSON.stringify(message.error.data, null, 4)}

`;
              } else {
                if (message.result) {
                  data = `Result: ${JSON.stringify(message.result, null, 4)}

`;
                } else if (message.error === void 0) {
                  data = "No result returned.\n\n";
                }
              }
            }
            tracer.log(`Sending response '${method} - (${message.id})'. Processing request took ${Date.now() - startTime}ms`, data);
          } else {
            logLSPMessage("send-response", message);
          }
        }
        function traceReceivedRequest(message) {
          if (trace === Trace.Off || !tracer) {
            return;
          }
          if (traceFormat === TraceFormat.Text) {
            let data = void 0;
            if (trace === Trace.Verbose && message.params) {
              data = `Params: ${JSON.stringify(message.params, null, 4)}

`;
            }
            tracer.log(`Received request '${message.method} - (${message.id})'.`, data);
          } else {
            logLSPMessage("receive-request", message);
          }
        }
        function traceReceivedNotification(message) {
          if (trace === Trace.Off || !tracer || message.method === LogTraceNotification.type.method) {
            return;
          }
          if (traceFormat === TraceFormat.Text) {
            let data = void 0;
            if (trace === Trace.Verbose) {
              if (message.params) {
                data = `Params: ${JSON.stringify(message.params, null, 4)}

`;
              } else {
                data = "No parameters provided.\n\n";
              }
            }
            tracer.log(`Received notification '${message.method}'.`, data);
          } else {
            logLSPMessage("receive-notification", message);
          }
        }
        function traceReceivedResponse(message, responsePromise) {
          if (trace === Trace.Off || !tracer) {
            return;
          }
          if (traceFormat === TraceFormat.Text) {
            let data = void 0;
            if (trace === Trace.Verbose) {
              if (message.error && message.error.data) {
                data = `Error data: ${JSON.stringify(message.error.data, null, 4)}

`;
              } else {
                if (message.result) {
                  data = `Result: ${JSON.stringify(message.result, null, 4)}

`;
                } else if (message.error === void 0) {
                  data = "No result returned.\n\n";
                }
              }
            }
            if (responsePromise) {
              const error = message.error ? ` Request failed: ${message.error.message} (${message.error.code}).` : "";
              tracer.log(`Received response '${responsePromise.method} - (${message.id})' in ${Date.now() - responsePromise.timerStart}ms.${error}`, data);
            } else {
              tracer.log(`Received response ${message.id} without active response promise.`, data);
            }
          } else {
            logLSPMessage("receive-response", message);
          }
        }
        function logLSPMessage(type, message) {
          if (!tracer || trace === Trace.Off) {
            return;
          }
          const lspMessage = {
            isLSPMessage: true,
            type,
            message,
            timestamp: Date.now()
          };
          tracer.log(lspMessage);
        }
        function throwIfClosedOrDisposed() {
          if (isClosed()) {
            throw new ConnectionError(ConnectionErrors.Closed, "Connection is closed.");
          }
          if (isDisposed()) {
            throw new ConnectionError(ConnectionErrors.Disposed, "Connection is disposed.");
          }
        }
        function throwIfListening() {
          if (isListening()) {
            throw new ConnectionError(ConnectionErrors.AlreadyListening, "Connection is already listening");
          }
        }
        function throwIfNotListening() {
          if (!isListening()) {
            throw new Error("Call listen() first.");
          }
        }
        function undefinedToNull(param) {
          if (param === void 0) {
            return null;
          } else {
            return param;
          }
        }
        function nullToUndefined(param) {
          if (param === null) {
            return void 0;
          } else {
            return param;
          }
        }
        function isNamedParam(param) {
          return param !== void 0 && param !== null && !Array.isArray(param) && typeof param === "object";
        }
        function computeSingleParam(parameterStructures, param) {
          switch (parameterStructures) {
            case messages_1.ParameterStructures.auto:
              if (isNamedParam(param)) {
                return nullToUndefined(param);
              } else {
                return [undefinedToNull(param)];
              }
              break;
            case messages_1.ParameterStructures.byName:
              if (!isNamedParam(param)) {
                throw new Error(`Recevied parameters by name but param is not an object literal.`);
              }
              return nullToUndefined(param);
            case messages_1.ParameterStructures.byPosition:
              return [undefinedToNull(param)];
            default:
              throw new Error(`Unknown parameter structure ${parameterStructures.toString()}`);
          }
        }
        function computeMessageParams(type, params) {
          let result;
          const numberOfParams = type.numberOfParams;
          switch (numberOfParams) {
            case 0:
              result = void 0;
              break;
            case 1:
              result = computeSingleParam(type.parameterStructures, params[0]);
              break;
            default:
              result = [];
              for (let i = 0; i < params.length && i < numberOfParams; i++) {
                result.push(undefinedToNull(params[i]));
              }
              if (params.length < numberOfParams) {
                for (let i = params.length; i < numberOfParams; i++) {
                  result.push(null);
                }
              }
              break;
          }
          return result;
        }
        const connection = {
          sendNotification: (type, ...args) => {
            throwIfClosedOrDisposed();
            let method;
            let messageParams;
            if (Is.string(type)) {
              method = type;
              const first = args[0];
              let paramStart = 0;
              let parameterStructures = messages_1.ParameterStructures.auto;
              if (messages_1.ParameterStructures.is(first)) {
                paramStart = 1;
                parameterStructures = first;
              }
              let paramEnd = args.length;
              const numberOfParams = paramEnd - paramStart;
              switch (numberOfParams) {
                case 0:
                  messageParams = void 0;
                  break;
                case 1:
                  messageParams = computeSingleParam(parameterStructures, args[paramStart]);
                  break;
                default:
                  if (parameterStructures === messages_1.ParameterStructures.byName) {
                    throw new Error(`Recevied ${numberOfParams} parameters for 'by Name' notification parameter structure.`);
                  }
                  messageParams = args.slice(paramStart, paramEnd).map((value) => undefinedToNull(value));
                  break;
              }
            } else {
              const params = args;
              method = type.method;
              messageParams = computeMessageParams(type, params);
            }
            const notificationMessage = {
              jsonrpc: version,
              method,
              params: messageParams
            };
            traceSendingNotification(notificationMessage);
            messageWriter.write(notificationMessage);
          },
          onNotification: (type, handler) => {
            throwIfClosedOrDisposed();
            let method;
            if (Is.func(type)) {
              starNotificationHandler = type;
            } else if (handler) {
              if (Is.string(type)) {
                method = type;
                notificationHandlers[type] = { type: void 0, handler };
              } else {
                method = type.method;
                notificationHandlers[type.method] = { type, handler };
              }
            }
            return {
              dispose: () => {
                if (method !== void 0) {
                  delete notificationHandlers[method];
                } else {
                  starNotificationHandler = void 0;
                }
              }
            };
          },
          onProgress: (_type, token, handler) => {
            if (progressHandlers.has(token)) {
              throw new Error(`Progress handler for token ${token} already registered`);
            }
            progressHandlers.set(token, handler);
            return {
              dispose: () => {
                progressHandlers.delete(token);
              }
            };
          },
          sendProgress: (_type, token, value) => {
            connection.sendNotification(ProgressNotification.type, { token, value });
          },
          onUnhandledProgress: unhandledProgressEmitter.event,
          sendRequest: (type, ...args) => {
            throwIfClosedOrDisposed();
            throwIfNotListening();
            let method;
            let messageParams;
            let token = void 0;
            if (Is.string(type)) {
              method = type;
              const first = args[0];
              const last = args[args.length - 1];
              let paramStart = 0;
              let parameterStructures = messages_1.ParameterStructures.auto;
              if (messages_1.ParameterStructures.is(first)) {
                paramStart = 1;
                parameterStructures = first;
              }
              let paramEnd = args.length;
              if (cancellation_1.CancellationToken.is(last)) {
                paramEnd = paramEnd - 1;
                token = last;
              }
              const numberOfParams = paramEnd - paramStart;
              switch (numberOfParams) {
                case 0:
                  messageParams = void 0;
                  break;
                case 1:
                  messageParams = computeSingleParam(parameterStructures, args[paramStart]);
                  break;
                default:
                  if (parameterStructures === messages_1.ParameterStructures.byName) {
                    throw new Error(`Recevied ${numberOfParams} parameters for 'by Name' request parameter structure.`);
                  }
                  messageParams = args.slice(paramStart, paramEnd).map((value) => undefinedToNull(value));
                  break;
              }
            } else {
              const params = args;
              method = type.method;
              messageParams = computeMessageParams(type, params);
              const numberOfParams = type.numberOfParams;
              token = cancellation_1.CancellationToken.is(params[numberOfParams]) ? params[numberOfParams] : void 0;
            }
            const id = sequenceNumber++;
            let disposable;
            if (token) {
              disposable = token.onCancellationRequested(() => {
                cancellationStrategy.sender.sendCancellation(connection, id);
              });
            }
            const result = new Promise((resolve, reject) => {
              const requestMessage = {
                jsonrpc: version,
                id,
                method,
                params: messageParams
              };
              const resolveWithCleanup = (r) => {
                resolve(r);
                cancellationStrategy.sender.cleanup(id);
                disposable === null || disposable === void 0 ? void 0 : disposable.dispose();
              };
              const rejectWithCleanup = (r) => {
                reject(r);
                cancellationStrategy.sender.cleanup(id);
                disposable === null || disposable === void 0 ? void 0 : disposable.dispose();
              };
              let responsePromise = { method, timerStart: Date.now(), resolve: resolveWithCleanup, reject: rejectWithCleanup };
              traceSendingRequest(requestMessage);
              try {
                messageWriter.write(requestMessage);
              } catch (e) {
                responsePromise.reject(new messages_1.ResponseError(messages_1.ErrorCodes.MessageWriteError, e.message ? e.message : "Unknown reason"));
                responsePromise = null;
              }
              if (responsePromise) {
                responsePromises[String(id)] = responsePromise;
              }
            });
            return result;
          },
          onRequest: (type, handler) => {
            throwIfClosedOrDisposed();
            let method = null;
            if (StarRequestHandler.is(type)) {
              method = void 0;
              starRequestHandler = type;
            } else if (Is.string(type)) {
              method = null;
              if (handler !== void 0) {
                method = type;
                requestHandlers[type] = { handler, type: void 0 };
              }
            } else {
              if (handler !== void 0) {
                method = type.method;
                requestHandlers[type.method] = { type, handler };
              }
            }
            return {
              dispose: () => {
                if (method === null) {
                  return;
                }
                if (method !== void 0) {
                  delete requestHandlers[method];
                } else {
                  starRequestHandler = void 0;
                }
              }
            };
          },
          trace: (_value, _tracer, sendNotificationOrTraceOptions) => {
            let _sendNotification = false;
            let _traceFormat = TraceFormat.Text;
            if (sendNotificationOrTraceOptions !== void 0) {
              if (Is.boolean(sendNotificationOrTraceOptions)) {
                _sendNotification = sendNotificationOrTraceOptions;
              } else {
                _sendNotification = sendNotificationOrTraceOptions.sendNotification || false;
                _traceFormat = sendNotificationOrTraceOptions.traceFormat || TraceFormat.Text;
              }
            }
            trace = _value;
            traceFormat = _traceFormat;
            if (trace === Trace.Off) {
              tracer = void 0;
            } else {
              tracer = _tracer;
            }
            if (_sendNotification && !isClosed() && !isDisposed()) {
              connection.sendNotification(SetTraceNotification.type, { value: Trace.toString(_value) });
            }
          },
          onError: errorEmitter.event,
          onClose: closeEmitter.event,
          onUnhandledNotification: unhandledNotificationEmitter.event,
          onDispose: disposeEmitter.event,
          end: () => {
            messageWriter.end();
          },
          dispose: () => {
            if (isDisposed()) {
              return;
            }
            state = ConnectionState.Disposed;
            disposeEmitter.fire(void 0);
            const error = new Error("Connection got disposed.");
            Object.keys(responsePromises).forEach((key) => {
              responsePromises[key].reject(error);
            });
            responsePromises = Object.create(null);
            requestTokens = Object.create(null);
            messageQueue = new linkedMap_1.LinkedMap();
            if (Is.func(messageWriter.dispose)) {
              messageWriter.dispose();
            }
            if (Is.func(messageReader.dispose)) {
              messageReader.dispose();
            }
          },
          listen: () => {
            throwIfClosedOrDisposed();
            throwIfListening();
            state = ConnectionState.Listening;
            messageReader.listen(callback);
          },
          inspect: () => {
            ral_1.default().console.log("inspect");
          }
        };
        connection.onNotification(LogTraceNotification.type, (params) => {
          if (trace === Trace.Off || !tracer) {
            return;
          }
          tracer.log(params.message, trace === Trace.Verbose ? params.verbose : void 0);
        });
        connection.onNotification(ProgressNotification.type, (params) => {
          const handler = progressHandlers.get(params.token);
          if (handler) {
            handler(params.value);
          } else {
            unhandledProgressEmitter.fire(params);
          }
        });
        return connection;
      }
      exports.createMessageConnection = createMessageConnection;
    }
  });

  // node_modules/vscode-jsonrpc/lib/common/api.js
  var require_api = __commonJS({
    "node_modules/vscode-jsonrpc/lib/common/api.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.CancellationSenderStrategy = exports.CancellationReceiverStrategy = exports.ConnectionError = exports.ConnectionErrors = exports.LogTraceNotification = exports.SetTraceNotification = exports.TraceFormat = exports.Trace = exports.ProgressType = exports.createMessageConnection = exports.NullLogger = exports.ConnectionOptions = exports.ConnectionStrategy = exports.WriteableStreamMessageWriter = exports.AbstractMessageWriter = exports.MessageWriter = exports.ReadableStreamMessageReader = exports.AbstractMessageReader = exports.MessageReader = exports.CancellationToken = exports.CancellationTokenSource = exports.Emitter = exports.Event = exports.Disposable = exports.ParameterStructures = exports.NotificationType9 = exports.NotificationType8 = exports.NotificationType7 = exports.NotificationType6 = exports.NotificationType5 = exports.NotificationType4 = exports.NotificationType3 = exports.NotificationType2 = exports.NotificationType1 = exports.NotificationType0 = exports.NotificationType = exports.ErrorCodes = exports.ResponseError = exports.RequestType9 = exports.RequestType8 = exports.RequestType7 = exports.RequestType6 = exports.RequestType5 = exports.RequestType4 = exports.RequestType3 = exports.RequestType2 = exports.RequestType1 = exports.RequestType0 = exports.RequestType = exports.RAL = void 0;
      exports.CancellationStrategy = void 0;
      var messages_1 = require_messages();
      Object.defineProperty(exports, "RequestType", { enumerable: true, get: function() {
        return messages_1.RequestType;
      } });
      Object.defineProperty(exports, "RequestType0", { enumerable: true, get: function() {
        return messages_1.RequestType0;
      } });
      Object.defineProperty(exports, "RequestType1", { enumerable: true, get: function() {
        return messages_1.RequestType1;
      } });
      Object.defineProperty(exports, "RequestType2", { enumerable: true, get: function() {
        return messages_1.RequestType2;
      } });
      Object.defineProperty(exports, "RequestType3", { enumerable: true, get: function() {
        return messages_1.RequestType3;
      } });
      Object.defineProperty(exports, "RequestType4", { enumerable: true, get: function() {
        return messages_1.RequestType4;
      } });
      Object.defineProperty(exports, "RequestType5", { enumerable: true, get: function() {
        return messages_1.RequestType5;
      } });
      Object.defineProperty(exports, "RequestType6", { enumerable: true, get: function() {
        return messages_1.RequestType6;
      } });
      Object.defineProperty(exports, "RequestType7", { enumerable: true, get: function() {
        return messages_1.RequestType7;
      } });
      Object.defineProperty(exports, "RequestType8", { enumerable: true, get: function() {
        return messages_1.RequestType8;
      } });
      Object.defineProperty(exports, "RequestType9", { enumerable: true, get: function() {
        return messages_1.RequestType9;
      } });
      Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function() {
        return messages_1.ResponseError;
      } });
      Object.defineProperty(exports, "ErrorCodes", { enumerable: true, get: function() {
        return messages_1.ErrorCodes;
      } });
      Object.defineProperty(exports, "NotificationType", { enumerable: true, get: function() {
        return messages_1.NotificationType;
      } });
      Object.defineProperty(exports, "NotificationType0", { enumerable: true, get: function() {
        return messages_1.NotificationType0;
      } });
      Object.defineProperty(exports, "NotificationType1", { enumerable: true, get: function() {
        return messages_1.NotificationType1;
      } });
      Object.defineProperty(exports, "NotificationType2", { enumerable: true, get: function() {
        return messages_1.NotificationType2;
      } });
      Object.defineProperty(exports, "NotificationType3", { enumerable: true, get: function() {
        return messages_1.NotificationType3;
      } });
      Object.defineProperty(exports, "NotificationType4", { enumerable: true, get: function() {
        return messages_1.NotificationType4;
      } });
      Object.defineProperty(exports, "NotificationType5", { enumerable: true, get: function() {
        return messages_1.NotificationType5;
      } });
      Object.defineProperty(exports, "NotificationType6", { enumerable: true, get: function() {
        return messages_1.NotificationType6;
      } });
      Object.defineProperty(exports, "NotificationType7", { enumerable: true, get: function() {
        return messages_1.NotificationType7;
      } });
      Object.defineProperty(exports, "NotificationType8", { enumerable: true, get: function() {
        return messages_1.NotificationType8;
      } });
      Object.defineProperty(exports, "NotificationType9", { enumerable: true, get: function() {
        return messages_1.NotificationType9;
      } });
      Object.defineProperty(exports, "ParameterStructures", { enumerable: true, get: function() {
        return messages_1.ParameterStructures;
      } });
      var disposable_1 = require_disposable();
      Object.defineProperty(exports, "Disposable", { enumerable: true, get: function() {
        return disposable_1.Disposable;
      } });
      var events_1 = require_events();
      Object.defineProperty(exports, "Event", { enumerable: true, get: function() {
        return events_1.Event;
      } });
      Object.defineProperty(exports, "Emitter", { enumerable: true, get: function() {
        return events_1.Emitter;
      } });
      var cancellation_1 = require_cancellation();
      Object.defineProperty(exports, "CancellationTokenSource", { enumerable: true, get: function() {
        return cancellation_1.CancellationTokenSource;
      } });
      Object.defineProperty(exports, "CancellationToken", { enumerable: true, get: function() {
        return cancellation_1.CancellationToken;
      } });
      var messageReader_1 = require_messageReader();
      Object.defineProperty(exports, "MessageReader", { enumerable: true, get: function() {
        return messageReader_1.MessageReader;
      } });
      Object.defineProperty(exports, "AbstractMessageReader", { enumerable: true, get: function() {
        return messageReader_1.AbstractMessageReader;
      } });
      Object.defineProperty(exports, "ReadableStreamMessageReader", { enumerable: true, get: function() {
        return messageReader_1.ReadableStreamMessageReader;
      } });
      var messageWriter_1 = require_messageWriter();
      Object.defineProperty(exports, "MessageWriter", { enumerable: true, get: function() {
        return messageWriter_1.MessageWriter;
      } });
      Object.defineProperty(exports, "AbstractMessageWriter", { enumerable: true, get: function() {
        return messageWriter_1.AbstractMessageWriter;
      } });
      Object.defineProperty(exports, "WriteableStreamMessageWriter", { enumerable: true, get: function() {
        return messageWriter_1.WriteableStreamMessageWriter;
      } });
      var connection_1 = require_connection();
      Object.defineProperty(exports, "ConnectionStrategy", { enumerable: true, get: function() {
        return connection_1.ConnectionStrategy;
      } });
      Object.defineProperty(exports, "ConnectionOptions", { enumerable: true, get: function() {
        return connection_1.ConnectionOptions;
      } });
      Object.defineProperty(exports, "NullLogger", { enumerable: true, get: function() {
        return connection_1.NullLogger;
      } });
      Object.defineProperty(exports, "createMessageConnection", { enumerable: true, get: function() {
        return connection_1.createMessageConnection;
      } });
      Object.defineProperty(exports, "ProgressType", { enumerable: true, get: function() {
        return connection_1.ProgressType;
      } });
      Object.defineProperty(exports, "Trace", { enumerable: true, get: function() {
        return connection_1.Trace;
      } });
      Object.defineProperty(exports, "TraceFormat", { enumerable: true, get: function() {
        return connection_1.TraceFormat;
      } });
      Object.defineProperty(exports, "SetTraceNotification", { enumerable: true, get: function() {
        return connection_1.SetTraceNotification;
      } });
      Object.defineProperty(exports, "LogTraceNotification", { enumerable: true, get: function() {
        return connection_1.LogTraceNotification;
      } });
      Object.defineProperty(exports, "ConnectionErrors", { enumerable: true, get: function() {
        return connection_1.ConnectionErrors;
      } });
      Object.defineProperty(exports, "ConnectionError", { enumerable: true, get: function() {
        return connection_1.ConnectionError;
      } });
      Object.defineProperty(exports, "CancellationReceiverStrategy", { enumerable: true, get: function() {
        return connection_1.CancellationReceiverStrategy;
      } });
      Object.defineProperty(exports, "CancellationSenderStrategy", { enumerable: true, get: function() {
        return connection_1.CancellationSenderStrategy;
      } });
      Object.defineProperty(exports, "CancellationStrategy", { enumerable: true, get: function() {
        return connection_1.CancellationStrategy;
      } });
      var ral_1 = require_ral();
      exports.RAL = ral_1.default;
    }
  });

  // node_modules/vscode-jsonrpc/lib/browser/main.js
  var require_main = __commonJS({
    "node_modules/vscode-jsonrpc/lib/browser/main.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createMessageConnection = exports.BrowserMessageWriter = exports.BrowserMessageReader = void 0;
      var ril_1 = require_ril();
      ril_1.default.install();
      var api_1 = require_api();
      __exportStar(require_api(), exports);
      var BrowserMessageReader = class extends api_1.AbstractMessageReader {
        constructor(context) {
          super();
          this._onData = new api_1.Emitter();
          this._messageListener = (event) => {
            this._onData.fire(event.data);
          };
          context.addEventListener("error", (event) => this.fireError(event));
          context.onmessage = this._messageListener;
        }
        listen(callback) {
          return this._onData.event(callback);
        }
      };
      exports.BrowserMessageReader = BrowserMessageReader;
      var BrowserMessageWriter = class extends api_1.AbstractMessageWriter {
        constructor(context) {
          super();
          this.context = context;
          this.errorCount = 0;
          context.addEventListener("error", (event) => this.fireError(event));
        }
        write(msg) {
          try {
            this.context.postMessage(msg);
            return Promise.resolve();
          } catch (error) {
            this.handleError(error, msg);
            return Promise.reject(error);
          }
        }
        handleError(error, msg) {
          this.errorCount++;
          this.fireError(error, msg, this.errorCount);
        }
        end() {
        }
      };
      exports.BrowserMessageWriter = BrowserMessageWriter;
      function createMessageConnection(reader, writer, logger, options) {
        if (logger === void 0) {
          logger = api_1.NullLogger;
        }
        if (api_1.ConnectionStrategy.is(options)) {
          options = { connectionStrategy: options };
        }
        return api_1.createMessageConnection(reader, writer, logger, options);
      }
      exports.createMessageConnection = createMessageConnection;
    }
  });

  // node_modules/vscode-jsonrpc/browser.js
  var require_browser = __commonJS({
    "node_modules/vscode-jsonrpc/browser.js"(exports, module) {
      "use strict";
      module.exports = require_main();
    }
  });

  // node_modules/vscode-languageserver-types/lib/umd/main.js
  var require_main2 = __commonJS({
    "node_modules/vscode-languageserver-types/lib/umd/main.js"(exports, module) {
      (function(factory) {
        if (typeof module === "object" && typeof module.exports === "object") {
          var v = factory(__require, exports);
          if (v !== void 0)
            module.exports = v;
        } else if (typeof define === "function" && define.amd) {
          define(["require", "exports"], factory);
        }
      })(function(require2, exports2) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", { value: true });
        exports2.TextDocument = exports2.EOL = exports2.SelectionRange = exports2.DocumentLink = exports2.FormattingOptions = exports2.CodeLens = exports2.CodeAction = exports2.CodeActionContext = exports2.CodeActionKind = exports2.DocumentSymbol = exports2.SymbolInformation = exports2.SymbolTag = exports2.SymbolKind = exports2.DocumentHighlight = exports2.DocumentHighlightKind = exports2.SignatureInformation = exports2.ParameterInformation = exports2.Hover = exports2.MarkedString = exports2.CompletionList = exports2.CompletionItem = exports2.InsertTextMode = exports2.InsertReplaceEdit = exports2.CompletionItemTag = exports2.InsertTextFormat = exports2.CompletionItemKind = exports2.MarkupContent = exports2.MarkupKind = exports2.TextDocumentItem = exports2.OptionalVersionedTextDocumentIdentifier = exports2.VersionedTextDocumentIdentifier = exports2.TextDocumentIdentifier = exports2.WorkspaceChange = exports2.WorkspaceEdit = exports2.DeleteFile = exports2.RenameFile = exports2.CreateFile = exports2.TextDocumentEdit = exports2.AnnotatedTextEdit = exports2.ChangeAnnotationIdentifier = exports2.ChangeAnnotation = exports2.TextEdit = exports2.Command = exports2.Diagnostic = exports2.CodeDescription = exports2.DiagnosticTag = exports2.DiagnosticSeverity = exports2.DiagnosticRelatedInformation = exports2.FoldingRange = exports2.FoldingRangeKind = exports2.ColorPresentation = exports2.ColorInformation = exports2.Color = exports2.LocationLink = exports2.Location = exports2.Range = exports2.Position = exports2.uinteger = exports2.integer = void 0;
        var integer;
        (function(integer2) {
          integer2.MIN_VALUE = -2147483648;
          integer2.MAX_VALUE = 2147483647;
        })(integer = exports2.integer || (exports2.integer = {}));
        var uinteger;
        (function(uinteger2) {
          uinteger2.MIN_VALUE = 0;
          uinteger2.MAX_VALUE = 2147483647;
        })(uinteger = exports2.uinteger || (exports2.uinteger = {}));
        var Position;
        (function(Position2) {
          function create(line, character) {
            if (line === Number.MAX_VALUE) {
              line = uinteger.MAX_VALUE;
            }
            if (character === Number.MAX_VALUE) {
              character = uinteger.MAX_VALUE;
            }
            return { line, character };
          }
          Position2.create = create;
          function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Is.uinteger(candidate.line) && Is.uinteger(candidate.character);
          }
          Position2.is = is;
        })(Position = exports2.Position || (exports2.Position = {}));
        var Range3;
        (function(Range4) {
          function create(one, two, three, four) {
            if (Is.uinteger(one) && Is.uinteger(two) && Is.uinteger(three) && Is.uinteger(four)) {
              return { start: Position.create(one, two), end: Position.create(three, four) };
            } else if (Position.is(one) && Position.is(two)) {
              return { start: one, end: two };
            } else {
              throw new Error("Range#create called with invalid arguments[" + one + ", " + two + ", " + three + ", " + four + "]");
            }
          }
          Range4.create = create;
          function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Position.is(candidate.start) && Position.is(candidate.end);
          }
          Range4.is = is;
        })(Range3 = exports2.Range || (exports2.Range = {}));
        var Location;
        (function(Location2) {
          function create(uri, range) {
            return { uri, range };
          }
          Location2.create = create;
          function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Range3.is(candidate.range) && (Is.string(candidate.uri) || Is.undefined(candidate.uri));
          }
          Location2.is = is;
        })(Location = exports2.Location || (exports2.Location = {}));
        var LocationLink;
        (function(LocationLink2) {
          function create(targetUri, targetRange, targetSelectionRange, originSelectionRange) {
            return { targetUri, targetRange, targetSelectionRange, originSelectionRange };
          }
          LocationLink2.create = create;
          function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Range3.is(candidate.targetRange) && Is.string(candidate.targetUri) && (Range3.is(candidate.targetSelectionRange) || Is.undefined(candidate.targetSelectionRange)) && (Range3.is(candidate.originSelectionRange) || Is.undefined(candidate.originSelectionRange));
          }
          LocationLink2.is = is;
        })(LocationLink = exports2.LocationLink || (exports2.LocationLink = {}));
        var Color;
        (function(Color2) {
          function create(red, green, blue, alpha) {
            return {
              red,
              green,
              blue,
              alpha
            };
          }
          Color2.create = create;
          function is(value) {
            var candidate = value;
            return Is.numberRange(candidate.red, 0, 1) && Is.numberRange(candidate.green, 0, 1) && Is.numberRange(candidate.blue, 0, 1) && Is.numberRange(candidate.alpha, 0, 1);
          }
          Color2.is = is;
        })(Color = exports2.Color || (exports2.Color = {}));
        var ColorInformation;
        (function(ColorInformation2) {
          function create(range, color) {
            return {
              range,
              color
            };
          }
          ColorInformation2.create = create;
          function is(value) {
            var candidate = value;
            return Range3.is(candidate.range) && Color.is(candidate.color);
          }
          ColorInformation2.is = is;
        })(ColorInformation = exports2.ColorInformation || (exports2.ColorInformation = {}));
        var ColorPresentation;
        (function(ColorPresentation2) {
          function create(label, textEdit, additionalTextEdits) {
            return {
              label,
              textEdit,
              additionalTextEdits
            };
          }
          ColorPresentation2.create = create;
          function is(value) {
            var candidate = value;
            return Is.string(candidate.label) && (Is.undefined(candidate.textEdit) || TextEdit.is(candidate)) && (Is.undefined(candidate.additionalTextEdits) || Is.typedArray(candidate.additionalTextEdits, TextEdit.is));
          }
          ColorPresentation2.is = is;
        })(ColorPresentation = exports2.ColorPresentation || (exports2.ColorPresentation = {}));
        var FoldingRangeKind;
        (function(FoldingRangeKind2) {
          FoldingRangeKind2["Comment"] = "comment";
          FoldingRangeKind2["Imports"] = "imports";
          FoldingRangeKind2["Region"] = "region";
        })(FoldingRangeKind = exports2.FoldingRangeKind || (exports2.FoldingRangeKind = {}));
        var FoldingRange;
        (function(FoldingRange2) {
          function create(startLine, endLine, startCharacter, endCharacter, kind) {
            var result = {
              startLine,
              endLine
            };
            if (Is.defined(startCharacter)) {
              result.startCharacter = startCharacter;
            }
            if (Is.defined(endCharacter)) {
              result.endCharacter = endCharacter;
            }
            if (Is.defined(kind)) {
              result.kind = kind;
            }
            return result;
          }
          FoldingRange2.create = create;
          function is(value) {
            var candidate = value;
            return Is.uinteger(candidate.startLine) && Is.uinteger(candidate.startLine) && (Is.undefined(candidate.startCharacter) || Is.uinteger(candidate.startCharacter)) && (Is.undefined(candidate.endCharacter) || Is.uinteger(candidate.endCharacter)) && (Is.undefined(candidate.kind) || Is.string(candidate.kind));
          }
          FoldingRange2.is = is;
        })(FoldingRange = exports2.FoldingRange || (exports2.FoldingRange = {}));
        var DiagnosticRelatedInformation;
        (function(DiagnosticRelatedInformation2) {
          function create(location, message) {
            return {
              location,
              message
            };
          }
          DiagnosticRelatedInformation2.create = create;
          function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Location.is(candidate.location) && Is.string(candidate.message);
          }
          DiagnosticRelatedInformation2.is = is;
        })(DiagnosticRelatedInformation = exports2.DiagnosticRelatedInformation || (exports2.DiagnosticRelatedInformation = {}));
        var DiagnosticSeverity;
        (function(DiagnosticSeverity2) {
          DiagnosticSeverity2.Error = 1;
          DiagnosticSeverity2.Warning = 2;
          DiagnosticSeverity2.Information = 3;
          DiagnosticSeverity2.Hint = 4;
        })(DiagnosticSeverity = exports2.DiagnosticSeverity || (exports2.DiagnosticSeverity = {}));
        var DiagnosticTag;
        (function(DiagnosticTag2) {
          DiagnosticTag2.Unnecessary = 1;
          DiagnosticTag2.Deprecated = 2;
        })(DiagnosticTag = exports2.DiagnosticTag || (exports2.DiagnosticTag = {}));
        var CodeDescription;
        (function(CodeDescription2) {
          function is(value) {
            var candidate = value;
            return candidate !== void 0 && candidate !== null && Is.string(candidate.href);
          }
          CodeDescription2.is = is;
        })(CodeDescription = exports2.CodeDescription || (exports2.CodeDescription = {}));
        var Diagnostic;
        (function(Diagnostic2) {
          function create(range, message, severity, code, source, relatedInformation) {
            var result = { range, message };
            if (Is.defined(severity)) {
              result.severity = severity;
            }
            if (Is.defined(code)) {
              result.code = code;
            }
            if (Is.defined(source)) {
              result.source = source;
            }
            if (Is.defined(relatedInformation)) {
              result.relatedInformation = relatedInformation;
            }
            return result;
          }
          Diagnostic2.create = create;
          function is(value) {
            var _a;
            var candidate = value;
            return Is.defined(candidate) && Range3.is(candidate.range) && Is.string(candidate.message) && (Is.number(candidate.severity) || Is.undefined(candidate.severity)) && (Is.integer(candidate.code) || Is.string(candidate.code) || Is.undefined(candidate.code)) && (Is.undefined(candidate.codeDescription) || Is.string((_a = candidate.codeDescription) === null || _a === void 0 ? void 0 : _a.href)) && (Is.string(candidate.source) || Is.undefined(candidate.source)) && (Is.undefined(candidate.relatedInformation) || Is.typedArray(candidate.relatedInformation, DiagnosticRelatedInformation.is));
          }
          Diagnostic2.is = is;
        })(Diagnostic = exports2.Diagnostic || (exports2.Diagnostic = {}));
        var Command;
        (function(Command2) {
          function create(title, command) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
              args[_i - 2] = arguments[_i];
            }
            var result = { title, command };
            if (Is.defined(args) && args.length > 0) {
              result.arguments = args;
            }
            return result;
          }
          Command2.create = create;
          function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Is.string(candidate.title) && Is.string(candidate.command);
          }
          Command2.is = is;
        })(Command = exports2.Command || (exports2.Command = {}));
        var TextEdit;
        (function(TextEdit2) {
          function replace(range, newText) {
            return { range, newText };
          }
          TextEdit2.replace = replace;
          function insert(position, newText) {
            return { range: { start: position, end: position }, newText };
          }
          TextEdit2.insert = insert;
          function del(range) {
            return { range, newText: "" };
          }
          TextEdit2.del = del;
          function is(value) {
            var candidate = value;
            return Is.objectLiteral(candidate) && Is.string(candidate.newText) && Range3.is(candidate.range);
          }
          TextEdit2.is = is;
        })(TextEdit = exports2.TextEdit || (exports2.TextEdit = {}));
        var ChangeAnnotation;
        (function(ChangeAnnotation2) {
          function create(label, needsConfirmation, description) {
            var result = { label };
            if (needsConfirmation !== void 0) {
              result.needsConfirmation = needsConfirmation;
            }
            if (description !== void 0) {
              result.description = description;
            }
            return result;
          }
          ChangeAnnotation2.create = create;
          function is(value) {
            var candidate = value;
            return candidate !== void 0 && Is.objectLiteral(candidate) && Is.string(candidate.label) && (Is.boolean(candidate.needsConfirmation) || candidate.needsConfirmation === void 0) && (Is.string(candidate.description) || candidate.description === void 0);
          }
          ChangeAnnotation2.is = is;
        })(ChangeAnnotation = exports2.ChangeAnnotation || (exports2.ChangeAnnotation = {}));
        var ChangeAnnotationIdentifier;
        (function(ChangeAnnotationIdentifier2) {
          function is(value) {
            var candidate = value;
            return typeof candidate === "string";
          }
          ChangeAnnotationIdentifier2.is = is;
        })(ChangeAnnotationIdentifier = exports2.ChangeAnnotationIdentifier || (exports2.ChangeAnnotationIdentifier = {}));
        var AnnotatedTextEdit;
        (function(AnnotatedTextEdit2) {
          function replace(range, newText, annotation) {
            return { range, newText, annotationId: annotation };
          }
          AnnotatedTextEdit2.replace = replace;
          function insert(position, newText, annotation) {
            return { range: { start: position, end: position }, newText, annotationId: annotation };
          }
          AnnotatedTextEdit2.insert = insert;
          function del(range, annotation) {
            return { range, newText: "", annotationId: annotation };
          }
          AnnotatedTextEdit2.del = del;
          function is(value) {
            var candidate = value;
            return TextEdit.is(candidate) && (ChangeAnnotation.is(candidate.annotationId) || ChangeAnnotationIdentifier.is(candidate.annotationId));
          }
          AnnotatedTextEdit2.is = is;
        })(AnnotatedTextEdit = exports2.AnnotatedTextEdit || (exports2.AnnotatedTextEdit = {}));
        var TextDocumentEdit;
        (function(TextDocumentEdit2) {
          function create(textDocument, edits) {
            return { textDocument, edits };
          }
          TextDocumentEdit2.create = create;
          function is(value) {
            var candidate = value;
            return Is.defined(candidate) && OptionalVersionedTextDocumentIdentifier.is(candidate.textDocument) && Array.isArray(candidate.edits);
          }
          TextDocumentEdit2.is = is;
        })(TextDocumentEdit = exports2.TextDocumentEdit || (exports2.TextDocumentEdit = {}));
        var CreateFile;
        (function(CreateFile2) {
          function create(uri, options, annotation) {
            var result = {
              kind: "create",
              uri
            };
            if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
              result.options = options;
            }
            if (annotation !== void 0) {
              result.annotationId = annotation;
            }
            return result;
          }
          CreateFile2.create = create;
          function is(value) {
            var candidate = value;
            return candidate && candidate.kind === "create" && Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
          }
          CreateFile2.is = is;
        })(CreateFile = exports2.CreateFile || (exports2.CreateFile = {}));
        var RenameFile;
        (function(RenameFile2) {
          function create(oldUri, newUri, options, annotation) {
            var result = {
              kind: "rename",
              oldUri,
              newUri
            };
            if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
              result.options = options;
            }
            if (annotation !== void 0) {
              result.annotationId = annotation;
            }
            return result;
          }
          RenameFile2.create = create;
          function is(value) {
            var candidate = value;
            return candidate && candidate.kind === "rename" && Is.string(candidate.oldUri) && Is.string(candidate.newUri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
          }
          RenameFile2.is = is;
        })(RenameFile = exports2.RenameFile || (exports2.RenameFile = {}));
        var DeleteFile;
        (function(DeleteFile2) {
          function create(uri, options, annotation) {
            var result = {
              kind: "delete",
              uri
            };
            if (options !== void 0 && (options.recursive !== void 0 || options.ignoreIfNotExists !== void 0)) {
              result.options = options;
            }
            if (annotation !== void 0) {
              result.annotationId = annotation;
            }
            return result;
          }
          DeleteFile2.create = create;
          function is(value) {
            var candidate = value;
            return candidate && candidate.kind === "delete" && Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.recursive === void 0 || Is.boolean(candidate.options.recursive)) && (candidate.options.ignoreIfNotExists === void 0 || Is.boolean(candidate.options.ignoreIfNotExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
          }
          DeleteFile2.is = is;
        })(DeleteFile = exports2.DeleteFile || (exports2.DeleteFile = {}));
        var WorkspaceEdit;
        (function(WorkspaceEdit2) {
          function is(value) {
            var candidate = value;
            return candidate && (candidate.changes !== void 0 || candidate.documentChanges !== void 0) && (candidate.documentChanges === void 0 || candidate.documentChanges.every(function(change) {
              if (Is.string(change.kind)) {
                return CreateFile.is(change) || RenameFile.is(change) || DeleteFile.is(change);
              } else {
                return TextDocumentEdit.is(change);
              }
            }));
          }
          WorkspaceEdit2.is = is;
        })(WorkspaceEdit = exports2.WorkspaceEdit || (exports2.WorkspaceEdit = {}));
        var TextEditChangeImpl = function() {
          function TextEditChangeImpl2(edits, changeAnnotations) {
            this.edits = edits;
            this.changeAnnotations = changeAnnotations;
          }
          TextEditChangeImpl2.prototype.insert = function(position, newText, annotation) {
            var edit;
            var id;
            if (annotation === void 0) {
              edit = TextEdit.insert(position, newText);
            } else if (ChangeAnnotationIdentifier.is(annotation)) {
              id = annotation;
              edit = AnnotatedTextEdit.insert(position, newText, annotation);
            } else {
              this.assertChangeAnnotations(this.changeAnnotations);
              id = this.changeAnnotations.manage(annotation);
              edit = AnnotatedTextEdit.insert(position, newText, id);
            }
            this.edits.push(edit);
            if (id !== void 0) {
              return id;
            }
          };
          TextEditChangeImpl2.prototype.replace = function(range, newText, annotation) {
            var edit;
            var id;
            if (annotation === void 0) {
              edit = TextEdit.replace(range, newText);
            } else if (ChangeAnnotationIdentifier.is(annotation)) {
              id = annotation;
              edit = AnnotatedTextEdit.replace(range, newText, annotation);
            } else {
              this.assertChangeAnnotations(this.changeAnnotations);
              id = this.changeAnnotations.manage(annotation);
              edit = AnnotatedTextEdit.replace(range, newText, id);
            }
            this.edits.push(edit);
            if (id !== void 0) {
              return id;
            }
          };
          TextEditChangeImpl2.prototype.delete = function(range, annotation) {
            var edit;
            var id;
            if (annotation === void 0) {
              edit = TextEdit.del(range);
            } else if (ChangeAnnotationIdentifier.is(annotation)) {
              id = annotation;
              edit = AnnotatedTextEdit.del(range, annotation);
            } else {
              this.assertChangeAnnotations(this.changeAnnotations);
              id = this.changeAnnotations.manage(annotation);
              edit = AnnotatedTextEdit.del(range, id);
            }
            this.edits.push(edit);
            if (id !== void 0) {
              return id;
            }
          };
          TextEditChangeImpl2.prototype.add = function(edit) {
            this.edits.push(edit);
          };
          TextEditChangeImpl2.prototype.all = function() {
            return this.edits;
          };
          TextEditChangeImpl2.prototype.clear = function() {
            this.edits.splice(0, this.edits.length);
          };
          TextEditChangeImpl2.prototype.assertChangeAnnotations = function(value) {
            if (value === void 0) {
              throw new Error("Text edit change is not configured to manage change annotations.");
            }
          };
          return TextEditChangeImpl2;
        }();
        var ChangeAnnotations = function() {
          function ChangeAnnotations2(annotations) {
            this._annotations = annotations === void 0 ? Object.create(null) : annotations;
            this._counter = 0;
            this._size = 0;
          }
          ChangeAnnotations2.prototype.all = function() {
            return this._annotations;
          };
          Object.defineProperty(ChangeAnnotations2.prototype, "size", {
            get: function() {
              return this._size;
            },
            enumerable: false,
            configurable: true
          });
          ChangeAnnotations2.prototype.manage = function(idOrAnnotation, annotation) {
            var id;
            if (ChangeAnnotationIdentifier.is(idOrAnnotation)) {
              id = idOrAnnotation;
            } else {
              id = this.nextId();
              annotation = idOrAnnotation;
            }
            if (this._annotations[id] !== void 0) {
              throw new Error("Id " + id + " is already in use.");
            }
            if (annotation === void 0) {
              throw new Error("No annotation provided for id " + id);
            }
            this._annotations[id] = annotation;
            this._size++;
            return id;
          };
          ChangeAnnotations2.prototype.nextId = function() {
            this._counter++;
            return this._counter.toString();
          };
          return ChangeAnnotations2;
        }();
        var WorkspaceChange = function() {
          function WorkspaceChange2(workspaceEdit) {
            var _this = this;
            this._textEditChanges = Object.create(null);
            if (workspaceEdit !== void 0) {
              this._workspaceEdit = workspaceEdit;
              if (workspaceEdit.documentChanges) {
                this._changeAnnotations = new ChangeAnnotations(workspaceEdit.changeAnnotations);
                workspaceEdit.changeAnnotations = this._changeAnnotations.all();
                workspaceEdit.documentChanges.forEach(function(change) {
                  if (TextDocumentEdit.is(change)) {
                    var textEditChange = new TextEditChangeImpl(change.edits, _this._changeAnnotations);
                    _this._textEditChanges[change.textDocument.uri] = textEditChange;
                  }
                });
              } else if (workspaceEdit.changes) {
                Object.keys(workspaceEdit.changes).forEach(function(key) {
                  var textEditChange = new TextEditChangeImpl(workspaceEdit.changes[key]);
                  _this._textEditChanges[key] = textEditChange;
                });
              }
            } else {
              this._workspaceEdit = {};
            }
          }
          Object.defineProperty(WorkspaceChange2.prototype, "edit", {
            get: function() {
              this.initDocumentChanges();
              if (this._changeAnnotations !== void 0) {
                if (this._changeAnnotations.size === 0) {
                  this._workspaceEdit.changeAnnotations = void 0;
                } else {
                  this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
                }
              }
              return this._workspaceEdit;
            },
            enumerable: false,
            configurable: true
          });
          WorkspaceChange2.prototype.getTextEditChange = function(key) {
            if (OptionalVersionedTextDocumentIdentifier.is(key)) {
              this.initDocumentChanges();
              if (this._workspaceEdit.documentChanges === void 0) {
                throw new Error("Workspace edit is not configured for document changes.");
              }
              var textDocument = { uri: key.uri, version: key.version };
              var result = this._textEditChanges[textDocument.uri];
              if (!result) {
                var edits = [];
                var textDocumentEdit = {
                  textDocument,
                  edits
                };
                this._workspaceEdit.documentChanges.push(textDocumentEdit);
                result = new TextEditChangeImpl(edits, this._changeAnnotations);
                this._textEditChanges[textDocument.uri] = result;
              }
              return result;
            } else {
              this.initChanges();
              if (this._workspaceEdit.changes === void 0) {
                throw new Error("Workspace edit is not configured for normal text edit changes.");
              }
              var result = this._textEditChanges[key];
              if (!result) {
                var edits = [];
                this._workspaceEdit.changes[key] = edits;
                result = new TextEditChangeImpl(edits);
                this._textEditChanges[key] = result;
              }
              return result;
            }
          };
          WorkspaceChange2.prototype.initDocumentChanges = function() {
            if (this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0) {
              this._changeAnnotations = new ChangeAnnotations();
              this._workspaceEdit.documentChanges = [];
              this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
            }
          };
          WorkspaceChange2.prototype.initChanges = function() {
            if (this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0) {
              this._workspaceEdit.changes = Object.create(null);
            }
          };
          WorkspaceChange2.prototype.createFile = function(uri, optionsOrAnnotation, options) {
            this.initDocumentChanges();
            if (this._workspaceEdit.documentChanges === void 0) {
              throw new Error("Workspace edit is not configured for document changes.");
            }
            var annotation;
            if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
              annotation = optionsOrAnnotation;
            } else {
              options = optionsOrAnnotation;
            }
            var operation;
            var id;
            if (annotation === void 0) {
              operation = CreateFile.create(uri, options);
            } else {
              id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
              operation = CreateFile.create(uri, options, id);
            }
            this._workspaceEdit.documentChanges.push(operation);
            if (id !== void 0) {
              return id;
            }
          };
          WorkspaceChange2.prototype.renameFile = function(oldUri, newUri, optionsOrAnnotation, options) {
            this.initDocumentChanges();
            if (this._workspaceEdit.documentChanges === void 0) {
              throw new Error("Workspace edit is not configured for document changes.");
            }
            var annotation;
            if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
              annotation = optionsOrAnnotation;
            } else {
              options = optionsOrAnnotation;
            }
            var operation;
            var id;
            if (annotation === void 0) {
              operation = RenameFile.create(oldUri, newUri, options);
            } else {
              id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
              operation = RenameFile.create(oldUri, newUri, options, id);
            }
            this._workspaceEdit.documentChanges.push(operation);
            if (id !== void 0) {
              return id;
            }
          };
          WorkspaceChange2.prototype.deleteFile = function(uri, optionsOrAnnotation, options) {
            this.initDocumentChanges();
            if (this._workspaceEdit.documentChanges === void 0) {
              throw new Error("Workspace edit is not configured for document changes.");
            }
            var annotation;
            if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
              annotation = optionsOrAnnotation;
            } else {
              options = optionsOrAnnotation;
            }
            var operation;
            var id;
            if (annotation === void 0) {
              operation = DeleteFile.create(uri, options);
            } else {
              id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
              operation = DeleteFile.create(uri, options, id);
            }
            this._workspaceEdit.documentChanges.push(operation);
            if (id !== void 0) {
              return id;
            }
          };
          return WorkspaceChange2;
        }();
        exports2.WorkspaceChange = WorkspaceChange;
        var TextDocumentIdentifier;
        (function(TextDocumentIdentifier2) {
          function create(uri) {
            return { uri };
          }
          TextDocumentIdentifier2.create = create;
          function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Is.string(candidate.uri);
          }
          TextDocumentIdentifier2.is = is;
        })(TextDocumentIdentifier = exports2.TextDocumentIdentifier || (exports2.TextDocumentIdentifier = {}));
        var VersionedTextDocumentIdentifier;
        (function(VersionedTextDocumentIdentifier2) {
          function create(uri, version) {
            return { uri, version };
          }
          VersionedTextDocumentIdentifier2.create = create;
          function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Is.string(candidate.uri) && Is.integer(candidate.version);
          }
          VersionedTextDocumentIdentifier2.is = is;
        })(VersionedTextDocumentIdentifier = exports2.VersionedTextDocumentIdentifier || (exports2.VersionedTextDocumentIdentifier = {}));
        var OptionalVersionedTextDocumentIdentifier;
        (function(OptionalVersionedTextDocumentIdentifier2) {
          function create(uri, version) {
            return { uri, version };
          }
          OptionalVersionedTextDocumentIdentifier2.create = create;
          function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Is.string(candidate.uri) && (candidate.version === null || Is.integer(candidate.version));
          }
          OptionalVersionedTextDocumentIdentifier2.is = is;
        })(OptionalVersionedTextDocumentIdentifier = exports2.OptionalVersionedTextDocumentIdentifier || (exports2.OptionalVersionedTextDocumentIdentifier = {}));
        var TextDocumentItem;
        (function(TextDocumentItem2) {
          function create(uri, languageId, version, text) {
            return { uri, languageId, version, text };
          }
          TextDocumentItem2.create = create;
          function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Is.string(candidate.uri) && Is.string(candidate.languageId) && Is.integer(candidate.version) && Is.string(candidate.text);
          }
          TextDocumentItem2.is = is;
        })(TextDocumentItem = exports2.TextDocumentItem || (exports2.TextDocumentItem = {}));
        var MarkupKind;
        (function(MarkupKind2) {
          MarkupKind2.PlainText = "plaintext";
          MarkupKind2.Markdown = "markdown";
        })(MarkupKind = exports2.MarkupKind || (exports2.MarkupKind = {}));
        (function(MarkupKind2) {
          function is(value) {
            var candidate = value;
            return candidate === MarkupKind2.PlainText || candidate === MarkupKind2.Markdown;
          }
          MarkupKind2.is = is;
        })(MarkupKind = exports2.MarkupKind || (exports2.MarkupKind = {}));
        var MarkupContent;
        (function(MarkupContent2) {
          function is(value) {
            var candidate = value;
            return Is.objectLiteral(value) && MarkupKind.is(candidate.kind) && Is.string(candidate.value);
          }
          MarkupContent2.is = is;
        })(MarkupContent = exports2.MarkupContent || (exports2.MarkupContent = {}));
        var CompletionItemKind;
        (function(CompletionItemKind2) {
          CompletionItemKind2.Text = 1;
          CompletionItemKind2.Method = 2;
          CompletionItemKind2.Function = 3;
          CompletionItemKind2.Constructor = 4;
          CompletionItemKind2.Field = 5;
          CompletionItemKind2.Variable = 6;
          CompletionItemKind2.Class = 7;
          CompletionItemKind2.Interface = 8;
          CompletionItemKind2.Module = 9;
          CompletionItemKind2.Property = 10;
          CompletionItemKind2.Unit = 11;
          CompletionItemKind2.Value = 12;
          CompletionItemKind2.Enum = 13;
          CompletionItemKind2.Keyword = 14;
          CompletionItemKind2.Snippet = 15;
          CompletionItemKind2.Color = 16;
          CompletionItemKind2.File = 17;
          CompletionItemKind2.Reference = 18;
          CompletionItemKind2.Folder = 19;
          CompletionItemKind2.EnumMember = 20;
          CompletionItemKind2.Constant = 21;
          CompletionItemKind2.Struct = 22;
          CompletionItemKind2.Event = 23;
          CompletionItemKind2.Operator = 24;
          CompletionItemKind2.TypeParameter = 25;
        })(CompletionItemKind = exports2.CompletionItemKind || (exports2.CompletionItemKind = {}));
        var InsertTextFormat;
        (function(InsertTextFormat2) {
          InsertTextFormat2.PlainText = 1;
          InsertTextFormat2.Snippet = 2;
        })(InsertTextFormat = exports2.InsertTextFormat || (exports2.InsertTextFormat = {}));
        var CompletionItemTag;
        (function(CompletionItemTag2) {
          CompletionItemTag2.Deprecated = 1;
        })(CompletionItemTag = exports2.CompletionItemTag || (exports2.CompletionItemTag = {}));
        var InsertReplaceEdit;
        (function(InsertReplaceEdit2) {
          function create(newText, insert, replace) {
            return { newText, insert, replace };
          }
          InsertReplaceEdit2.create = create;
          function is(value) {
            var candidate = value;
            return candidate && Is.string(candidate.newText) && Range3.is(candidate.insert) && Range3.is(candidate.replace);
          }
          InsertReplaceEdit2.is = is;
        })(InsertReplaceEdit = exports2.InsertReplaceEdit || (exports2.InsertReplaceEdit = {}));
        var InsertTextMode;
        (function(InsertTextMode2) {
          InsertTextMode2.asIs = 1;
          InsertTextMode2.adjustIndentation = 2;
        })(InsertTextMode = exports2.InsertTextMode || (exports2.InsertTextMode = {}));
        var CompletionItem;
        (function(CompletionItem2) {
          function create(label) {
            return { label };
          }
          CompletionItem2.create = create;
        })(CompletionItem = exports2.CompletionItem || (exports2.CompletionItem = {}));
        var CompletionList;
        (function(CompletionList2) {
          function create(items, isIncomplete) {
            return { items: items ? items : [], isIncomplete: !!isIncomplete };
          }
          CompletionList2.create = create;
        })(CompletionList = exports2.CompletionList || (exports2.CompletionList = {}));
        var MarkedString;
        (function(MarkedString2) {
          function fromPlainText(plainText) {
            return plainText.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
          }
          MarkedString2.fromPlainText = fromPlainText;
          function is(value) {
            var candidate = value;
            return Is.string(candidate) || Is.objectLiteral(candidate) && Is.string(candidate.language) && Is.string(candidate.value);
          }
          MarkedString2.is = is;
        })(MarkedString = exports2.MarkedString || (exports2.MarkedString = {}));
        var Hover;
        (function(Hover2) {
          function is(value) {
            var candidate = value;
            return !!candidate && Is.objectLiteral(candidate) && (MarkupContent.is(candidate.contents) || MarkedString.is(candidate.contents) || Is.typedArray(candidate.contents, MarkedString.is)) && (value.range === void 0 || Range3.is(value.range));
          }
          Hover2.is = is;
        })(Hover = exports2.Hover || (exports2.Hover = {}));
        var ParameterInformation;
        (function(ParameterInformation2) {
          function create(label, documentation) {
            return documentation ? { label, documentation } : { label };
          }
          ParameterInformation2.create = create;
        })(ParameterInformation = exports2.ParameterInformation || (exports2.ParameterInformation = {}));
        var SignatureInformation;
        (function(SignatureInformation2) {
          function create(label, documentation) {
            var parameters = [];
            for (var _i = 2; _i < arguments.length; _i++) {
              parameters[_i - 2] = arguments[_i];
            }
            var result = { label };
            if (Is.defined(documentation)) {
              result.documentation = documentation;
            }
            if (Is.defined(parameters)) {
              result.parameters = parameters;
            } else {
              result.parameters = [];
            }
            return result;
          }
          SignatureInformation2.create = create;
        })(SignatureInformation = exports2.SignatureInformation || (exports2.SignatureInformation = {}));
        var DocumentHighlightKind2;
        (function(DocumentHighlightKind3) {
          DocumentHighlightKind3.Text = 1;
          DocumentHighlightKind3.Read = 2;
          DocumentHighlightKind3.Write = 3;
        })(DocumentHighlightKind2 = exports2.DocumentHighlightKind || (exports2.DocumentHighlightKind = {}));
        var DocumentHighlight2;
        (function(DocumentHighlight3) {
          function create(range, kind) {
            var result = { range };
            if (Is.number(kind)) {
              result.kind = kind;
            }
            return result;
          }
          DocumentHighlight3.create = create;
        })(DocumentHighlight2 = exports2.DocumentHighlight || (exports2.DocumentHighlight = {}));
        var SymbolKind2;
        (function(SymbolKind3) {
          SymbolKind3.File = 1;
          SymbolKind3.Module = 2;
          SymbolKind3.Namespace = 3;
          SymbolKind3.Package = 4;
          SymbolKind3.Class = 5;
          SymbolKind3.Method = 6;
          SymbolKind3.Property = 7;
          SymbolKind3.Field = 8;
          SymbolKind3.Constructor = 9;
          SymbolKind3.Enum = 10;
          SymbolKind3.Interface = 11;
          SymbolKind3.Function = 12;
          SymbolKind3.Variable = 13;
          SymbolKind3.Constant = 14;
          SymbolKind3.String = 15;
          SymbolKind3.Number = 16;
          SymbolKind3.Boolean = 17;
          SymbolKind3.Array = 18;
          SymbolKind3.Object = 19;
          SymbolKind3.Key = 20;
          SymbolKind3.Null = 21;
          SymbolKind3.EnumMember = 22;
          SymbolKind3.Struct = 23;
          SymbolKind3.Event = 24;
          SymbolKind3.Operator = 25;
          SymbolKind3.TypeParameter = 26;
        })(SymbolKind2 = exports2.SymbolKind || (exports2.SymbolKind = {}));
        var SymbolTag;
        (function(SymbolTag2) {
          SymbolTag2.Deprecated = 1;
        })(SymbolTag = exports2.SymbolTag || (exports2.SymbolTag = {}));
        var SymbolInformation;
        (function(SymbolInformation2) {
          function create(name, kind, range, uri, containerName) {
            var result = {
              name,
              kind,
              location: { uri, range }
            };
            if (containerName) {
              result.containerName = containerName;
            }
            return result;
          }
          SymbolInformation2.create = create;
        })(SymbolInformation = exports2.SymbolInformation || (exports2.SymbolInformation = {}));
        var DocumentSymbol;
        (function(DocumentSymbol2) {
          function create(name, detail, kind, range, selectionRange, children) {
            var result = {
              name,
              detail,
              kind,
              range,
              selectionRange
            };
            if (children !== void 0) {
              result.children = children;
            }
            return result;
          }
          DocumentSymbol2.create = create;
          function is(value) {
            var candidate = value;
            return candidate && Is.string(candidate.name) && Is.number(candidate.kind) && Range3.is(candidate.range) && Range3.is(candidate.selectionRange) && (candidate.detail === void 0 || Is.string(candidate.detail)) && (candidate.deprecated === void 0 || Is.boolean(candidate.deprecated)) && (candidate.children === void 0 || Array.isArray(candidate.children)) && (candidate.tags === void 0 || Array.isArray(candidate.tags));
          }
          DocumentSymbol2.is = is;
        })(DocumentSymbol = exports2.DocumentSymbol || (exports2.DocumentSymbol = {}));
        var CodeActionKind;
        (function(CodeActionKind2) {
          CodeActionKind2.Empty = "";
          CodeActionKind2.QuickFix = "quickfix";
          CodeActionKind2.Refactor = "refactor";
          CodeActionKind2.RefactorExtract = "refactor.extract";
          CodeActionKind2.RefactorInline = "refactor.inline";
          CodeActionKind2.RefactorRewrite = "refactor.rewrite";
          CodeActionKind2.Source = "source";
          CodeActionKind2.SourceOrganizeImports = "source.organizeImports";
          CodeActionKind2.SourceFixAll = "source.fixAll";
        })(CodeActionKind = exports2.CodeActionKind || (exports2.CodeActionKind = {}));
        var CodeActionContext;
        (function(CodeActionContext2) {
          function create(diagnostics, only) {
            var result = { diagnostics };
            if (only !== void 0 && only !== null) {
              result.only = only;
            }
            return result;
          }
          CodeActionContext2.create = create;
          function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Is.typedArray(candidate.diagnostics, Diagnostic.is) && (candidate.only === void 0 || Is.typedArray(candidate.only, Is.string));
          }
          CodeActionContext2.is = is;
        })(CodeActionContext = exports2.CodeActionContext || (exports2.CodeActionContext = {}));
        var CodeAction;
        (function(CodeAction2) {
          function create(title, kindOrCommandOrEdit, kind) {
            var result = { title };
            var checkKind = true;
            if (typeof kindOrCommandOrEdit === "string") {
              checkKind = false;
              result.kind = kindOrCommandOrEdit;
            } else if (Command.is(kindOrCommandOrEdit)) {
              result.command = kindOrCommandOrEdit;
            } else {
              result.edit = kindOrCommandOrEdit;
            }
            if (checkKind && kind !== void 0) {
              result.kind = kind;
            }
            return result;
          }
          CodeAction2.create = create;
          function is(value) {
            var candidate = value;
            return candidate && Is.string(candidate.title) && (candidate.diagnostics === void 0 || Is.typedArray(candidate.diagnostics, Diagnostic.is)) && (candidate.kind === void 0 || Is.string(candidate.kind)) && (candidate.edit !== void 0 || candidate.command !== void 0) && (candidate.command === void 0 || Command.is(candidate.command)) && (candidate.isPreferred === void 0 || Is.boolean(candidate.isPreferred)) && (candidate.edit === void 0 || WorkspaceEdit.is(candidate.edit));
          }
          CodeAction2.is = is;
        })(CodeAction = exports2.CodeAction || (exports2.CodeAction = {}));
        var CodeLens;
        (function(CodeLens2) {
          function create(range, data) {
            var result = { range };
            if (Is.defined(data)) {
              result.data = data;
            }
            return result;
          }
          CodeLens2.create = create;
          function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Range3.is(candidate.range) && (Is.undefined(candidate.command) || Command.is(candidate.command));
          }
          CodeLens2.is = is;
        })(CodeLens = exports2.CodeLens || (exports2.CodeLens = {}));
        var FormattingOptions;
        (function(FormattingOptions2) {
          function create(tabSize, insertSpaces) {
            return { tabSize, insertSpaces };
          }
          FormattingOptions2.create = create;
          function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Is.uinteger(candidate.tabSize) && Is.boolean(candidate.insertSpaces);
          }
          FormattingOptions2.is = is;
        })(FormattingOptions = exports2.FormattingOptions || (exports2.FormattingOptions = {}));
        var DocumentLink;
        (function(DocumentLink2) {
          function create(range, target, data) {
            return { range, target, data };
          }
          DocumentLink2.create = create;
          function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Range3.is(candidate.range) && (Is.undefined(candidate.target) || Is.string(candidate.target));
          }
          DocumentLink2.is = is;
        })(DocumentLink = exports2.DocumentLink || (exports2.DocumentLink = {}));
        var SelectionRange;
        (function(SelectionRange2) {
          function create(range, parent) {
            return { range, parent };
          }
          SelectionRange2.create = create;
          function is(value) {
            var candidate = value;
            return candidate !== void 0 && Range3.is(candidate.range) && (candidate.parent === void 0 || SelectionRange2.is(candidate.parent));
          }
          SelectionRange2.is = is;
        })(SelectionRange = exports2.SelectionRange || (exports2.SelectionRange = {}));
        exports2.EOL = ["\n", "\r\n", "\r"];
        var TextDocument2;
        (function(TextDocument3) {
          function create(uri, languageId, version, content) {
            return new FullTextDocument2(uri, languageId, version, content);
          }
          TextDocument3.create = create;
          function is(value) {
            var candidate = value;
            return Is.defined(candidate) && Is.string(candidate.uri) && (Is.undefined(candidate.languageId) || Is.string(candidate.languageId)) && Is.uinteger(candidate.lineCount) && Is.func(candidate.getText) && Is.func(candidate.positionAt) && Is.func(candidate.offsetAt) ? true : false;
          }
          TextDocument3.is = is;
          function applyEdits(document2, edits) {
            var text = document2.getText();
            var sortedEdits = mergeSort2(edits, function(a, b) {
              var diff = a.range.start.line - b.range.start.line;
              if (diff === 0) {
                return a.range.start.character - b.range.start.character;
              }
              return diff;
            });
            var lastModifiedOffset = text.length;
            for (var i = sortedEdits.length - 1; i >= 0; i--) {
              var e = sortedEdits[i];
              var startOffset = document2.offsetAt(e.range.start);
              var endOffset = document2.offsetAt(e.range.end);
              if (endOffset <= lastModifiedOffset) {
                text = text.substring(0, startOffset) + e.newText + text.substring(endOffset, text.length);
              } else {
                throw new Error("Overlapping edit");
              }
              lastModifiedOffset = startOffset;
            }
            return text;
          }
          TextDocument3.applyEdits = applyEdits;
          function mergeSort2(data, compare) {
            if (data.length <= 1) {
              return data;
            }
            var p = data.length / 2 | 0;
            var left = data.slice(0, p);
            var right = data.slice(p);
            mergeSort2(left, compare);
            mergeSort2(right, compare);
            var leftIdx = 0;
            var rightIdx = 0;
            var i = 0;
            while (leftIdx < left.length && rightIdx < right.length) {
              var ret = compare(left[leftIdx], right[rightIdx]);
              if (ret <= 0) {
                data[i++] = left[leftIdx++];
              } else {
                data[i++] = right[rightIdx++];
              }
            }
            while (leftIdx < left.length) {
              data[i++] = left[leftIdx++];
            }
            while (rightIdx < right.length) {
              data[i++] = right[rightIdx++];
            }
            return data;
          }
        })(TextDocument2 = exports2.TextDocument || (exports2.TextDocument = {}));
        var FullTextDocument2 = function() {
          function FullTextDocument3(uri, languageId, version, content) {
            this._uri = uri;
            this._languageId = languageId;
            this._version = version;
            this._content = content;
            this._lineOffsets = void 0;
          }
          Object.defineProperty(FullTextDocument3.prototype, "uri", {
            get: function() {
              return this._uri;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(FullTextDocument3.prototype, "languageId", {
            get: function() {
              return this._languageId;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(FullTextDocument3.prototype, "version", {
            get: function() {
              return this._version;
            },
            enumerable: false,
            configurable: true
          });
          FullTextDocument3.prototype.getText = function(range) {
            if (range) {
              var start = this.offsetAt(range.start);
              var end = this.offsetAt(range.end);
              return this._content.substring(start, end);
            }
            return this._content;
          };
          FullTextDocument3.prototype.update = function(event, version) {
            this._content = event.text;
            this._version = version;
            this._lineOffsets = void 0;
          };
          FullTextDocument3.prototype.getLineOffsets = function() {
            if (this._lineOffsets === void 0) {
              var lineOffsets = [];
              var text = this._content;
              var isLineStart = true;
              for (var i = 0; i < text.length; i++) {
                if (isLineStart) {
                  lineOffsets.push(i);
                  isLineStart = false;
                }
                var ch = text.charAt(i);
                isLineStart = ch === "\r" || ch === "\n";
                if (ch === "\r" && i + 1 < text.length && text.charAt(i + 1) === "\n") {
                  i++;
                }
              }
              if (isLineStart && text.length > 0) {
                lineOffsets.push(text.length);
              }
              this._lineOffsets = lineOffsets;
            }
            return this._lineOffsets;
          };
          FullTextDocument3.prototype.positionAt = function(offset) {
            offset = Math.max(Math.min(offset, this._content.length), 0);
            var lineOffsets = this.getLineOffsets();
            var low = 0, high = lineOffsets.length;
            if (high === 0) {
              return Position.create(0, offset);
            }
            while (low < high) {
              var mid = Math.floor((low + high) / 2);
              if (lineOffsets[mid] > offset) {
                high = mid;
              } else {
                low = mid + 1;
              }
            }
            var line = low - 1;
            return Position.create(line, offset - lineOffsets[line]);
          };
          FullTextDocument3.prototype.offsetAt = function(position) {
            var lineOffsets = this.getLineOffsets();
            if (position.line >= lineOffsets.length) {
              return this._content.length;
            } else if (position.line < 0) {
              return 0;
            }
            var lineOffset = lineOffsets[position.line];
            var nextLineOffset = position.line + 1 < lineOffsets.length ? lineOffsets[position.line + 1] : this._content.length;
            return Math.max(Math.min(lineOffset + position.character, nextLineOffset), lineOffset);
          };
          Object.defineProperty(FullTextDocument3.prototype, "lineCount", {
            get: function() {
              return this.getLineOffsets().length;
            },
            enumerable: false,
            configurable: true
          });
          return FullTextDocument3;
        }();
        var Is;
        (function(Is2) {
          var toString = Object.prototype.toString;
          function defined(value) {
            return typeof value !== "undefined";
          }
          Is2.defined = defined;
          function undefined2(value) {
            return typeof value === "undefined";
          }
          Is2.undefined = undefined2;
          function boolean(value) {
            return value === true || value === false;
          }
          Is2.boolean = boolean;
          function string(value) {
            return toString.call(value) === "[object String]";
          }
          Is2.string = string;
          function number(value) {
            return toString.call(value) === "[object Number]";
          }
          Is2.number = number;
          function numberRange(value, min, max) {
            return toString.call(value) === "[object Number]" && min <= value && value <= max;
          }
          Is2.numberRange = numberRange;
          function integer2(value) {
            return toString.call(value) === "[object Number]" && -2147483648 <= value && value <= 2147483647;
          }
          Is2.integer = integer2;
          function uinteger2(value) {
            return toString.call(value) === "[object Number]" && 0 <= value && value <= 2147483647;
          }
          Is2.uinteger = uinteger2;
          function func(value) {
            return toString.call(value) === "[object Function]";
          }
          Is2.func = func;
          function objectLiteral(value) {
            return value !== null && typeof value === "object";
          }
          Is2.objectLiteral = objectLiteral;
          function typedArray(value, check) {
            return Array.isArray(value) && value.every(check);
          }
          Is2.typedArray = typedArray;
        })(Is || (Is = {}));
      });
    }
  });

  // node_modules/vscode-languageserver-protocol/lib/common/messages.js
  var require_messages2 = __commonJS({
    "node_modules/vscode-languageserver-protocol/lib/common/messages.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ProtocolNotificationType = exports.ProtocolNotificationType0 = exports.ProtocolRequestType = exports.ProtocolRequestType0 = exports.RegistrationType = void 0;
      var vscode_jsonrpc_1 = require_main();
      var RegistrationType = class {
        constructor(method) {
          this.method = method;
        }
      };
      exports.RegistrationType = RegistrationType;
      var ProtocolRequestType0 = class extends vscode_jsonrpc_1.RequestType0 {
        constructor(method) {
          super(method);
        }
      };
      exports.ProtocolRequestType0 = ProtocolRequestType0;
      var ProtocolRequestType = class extends vscode_jsonrpc_1.RequestType {
        constructor(method) {
          super(method, vscode_jsonrpc_1.ParameterStructures.byName);
        }
      };
      exports.ProtocolRequestType = ProtocolRequestType;
      var ProtocolNotificationType0 = class extends vscode_jsonrpc_1.NotificationType0 {
        constructor(method) {
          super(method);
        }
      };
      exports.ProtocolNotificationType0 = ProtocolNotificationType0;
      var ProtocolNotificationType = class extends vscode_jsonrpc_1.NotificationType {
        constructor(method) {
          super(method, vscode_jsonrpc_1.ParameterStructures.byName);
        }
      };
      exports.ProtocolNotificationType = ProtocolNotificationType;
    }
  });

  // node_modules/vscode-languageserver-protocol/lib/common/utils/is.js
  var require_is2 = __commonJS({
    "node_modules/vscode-languageserver-protocol/lib/common/utils/is.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.objectLiteral = exports.typedArray = exports.stringArray = exports.array = exports.func = exports.error = exports.number = exports.string = exports.boolean = void 0;
      function boolean(value) {
        return value === true || value === false;
      }
      exports.boolean = boolean;
      function string(value) {
        return typeof value === "string" || value instanceof String;
      }
      exports.string = string;
      function number(value) {
        return typeof value === "number" || value instanceof Number;
      }
      exports.number = number;
      function error(value) {
        return value instanceof Error;
      }
      exports.error = error;
      function func(value) {
        return typeof value === "function";
      }
      exports.func = func;
      function array(value) {
        return Array.isArray(value);
      }
      exports.array = array;
      function stringArray(value) {
        return array(value) && value.every((elem) => string(elem));
      }
      exports.stringArray = stringArray;
      function typedArray(value, check) {
        return Array.isArray(value) && value.every(check);
      }
      exports.typedArray = typedArray;
      function objectLiteral(value) {
        return value !== null && typeof value === "object";
      }
      exports.objectLiteral = objectLiteral;
    }
  });

  // node_modules/vscode-languageserver-protocol/lib/common/protocol.implementation.js
  var require_protocol_implementation = __commonJS({
    "node_modules/vscode-languageserver-protocol/lib/common/protocol.implementation.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ImplementationRequest = void 0;
      var messages_1 = require_messages2();
      var ImplementationRequest;
      (function(ImplementationRequest2) {
        ImplementationRequest2.method = "textDocument/implementation";
        ImplementationRequest2.type = new messages_1.ProtocolRequestType(ImplementationRequest2.method);
      })(ImplementationRequest = exports.ImplementationRequest || (exports.ImplementationRequest = {}));
    }
  });

  // node_modules/vscode-languageserver-protocol/lib/common/protocol.typeDefinition.js
  var require_protocol_typeDefinition = __commonJS({
    "node_modules/vscode-languageserver-protocol/lib/common/protocol.typeDefinition.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TypeDefinitionRequest = void 0;
      var messages_1 = require_messages2();
      var TypeDefinitionRequest;
      (function(TypeDefinitionRequest2) {
        TypeDefinitionRequest2.method = "textDocument/typeDefinition";
        TypeDefinitionRequest2.type = new messages_1.ProtocolRequestType(TypeDefinitionRequest2.method);
      })(TypeDefinitionRequest = exports.TypeDefinitionRequest || (exports.TypeDefinitionRequest = {}));
    }
  });

  // node_modules/vscode-languageserver-protocol/lib/common/protocol.workspaceFolders.js
  var require_protocol_workspaceFolders = __commonJS({
    "node_modules/vscode-languageserver-protocol/lib/common/protocol.workspaceFolders.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DidChangeWorkspaceFoldersNotification = exports.WorkspaceFoldersRequest = void 0;
      var messages_1 = require_messages2();
      var WorkspaceFoldersRequest;
      (function(WorkspaceFoldersRequest2) {
        WorkspaceFoldersRequest2.type = new messages_1.ProtocolRequestType0("workspace/workspaceFolders");
      })(WorkspaceFoldersRequest = exports.WorkspaceFoldersRequest || (exports.WorkspaceFoldersRequest = {}));
      var DidChangeWorkspaceFoldersNotification;
      (function(DidChangeWorkspaceFoldersNotification2) {
        DidChangeWorkspaceFoldersNotification2.type = new messages_1.ProtocolNotificationType("workspace/didChangeWorkspaceFolders");
      })(DidChangeWorkspaceFoldersNotification = exports.DidChangeWorkspaceFoldersNotification || (exports.DidChangeWorkspaceFoldersNotification = {}));
    }
  });

  // node_modules/vscode-languageserver-protocol/lib/common/protocol.configuration.js
  var require_protocol_configuration = __commonJS({
    "node_modules/vscode-languageserver-protocol/lib/common/protocol.configuration.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ConfigurationRequest = void 0;
      var messages_1 = require_messages2();
      var ConfigurationRequest;
      (function(ConfigurationRequest2) {
        ConfigurationRequest2.type = new messages_1.ProtocolRequestType("workspace/configuration");
      })(ConfigurationRequest = exports.ConfigurationRequest || (exports.ConfigurationRequest = {}));
    }
  });

  // node_modules/vscode-languageserver-protocol/lib/common/protocol.colorProvider.js
  var require_protocol_colorProvider = __commonJS({
    "node_modules/vscode-languageserver-protocol/lib/common/protocol.colorProvider.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ColorPresentationRequest = exports.DocumentColorRequest = void 0;
      var messages_1 = require_messages2();
      var DocumentColorRequest;
      (function(DocumentColorRequest2) {
        DocumentColorRequest2.method = "textDocument/documentColor";
        DocumentColorRequest2.type = new messages_1.ProtocolRequestType(DocumentColorRequest2.method);
      })(DocumentColorRequest = exports.DocumentColorRequest || (exports.DocumentColorRequest = {}));
      var ColorPresentationRequest;
      (function(ColorPresentationRequest2) {
        ColorPresentationRequest2.type = new messages_1.ProtocolRequestType("textDocument/colorPresentation");
      })(ColorPresentationRequest = exports.ColorPresentationRequest || (exports.ColorPresentationRequest = {}));
    }
  });

  // node_modules/vscode-languageserver-protocol/lib/common/protocol.foldingRange.js
  var require_protocol_foldingRange = __commonJS({
    "node_modules/vscode-languageserver-protocol/lib/common/protocol.foldingRange.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.FoldingRangeRequest = exports.FoldingRangeKind = void 0;
      var messages_1 = require_messages2();
      var FoldingRangeKind;
      (function(FoldingRangeKind2) {
        FoldingRangeKind2["Comment"] = "comment";
        FoldingRangeKind2["Imports"] = "imports";
        FoldingRangeKind2["Region"] = "region";
      })(FoldingRangeKind = exports.FoldingRangeKind || (exports.FoldingRangeKind = {}));
      var FoldingRangeRequest;
      (function(FoldingRangeRequest2) {
        FoldingRangeRequest2.method = "textDocument/foldingRange";
        FoldingRangeRequest2.type = new messages_1.ProtocolRequestType(FoldingRangeRequest2.method);
      })(FoldingRangeRequest = exports.FoldingRangeRequest || (exports.FoldingRangeRequest = {}));
    }
  });

  // node_modules/vscode-languageserver-protocol/lib/common/protocol.declaration.js
  var require_protocol_declaration = __commonJS({
    "node_modules/vscode-languageserver-protocol/lib/common/protocol.declaration.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DeclarationRequest = void 0;
      var messages_1 = require_messages2();
      var DeclarationRequest;
      (function(DeclarationRequest2) {
        DeclarationRequest2.method = "textDocument/declaration";
        DeclarationRequest2.type = new messages_1.ProtocolRequestType(DeclarationRequest2.method);
      })(DeclarationRequest = exports.DeclarationRequest || (exports.DeclarationRequest = {}));
    }
  });

  // node_modules/vscode-languageserver-protocol/lib/common/protocol.selectionRange.js
  var require_protocol_selectionRange = __commonJS({
    "node_modules/vscode-languageserver-protocol/lib/common/protocol.selectionRange.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.SelectionRangeRequest = void 0;
      var messages_1 = require_messages2();
      var SelectionRangeRequest;
      (function(SelectionRangeRequest2) {
        SelectionRangeRequest2.method = "textDocument/selectionRange";
        SelectionRangeRequest2.type = new messages_1.ProtocolRequestType(SelectionRangeRequest2.method);
      })(SelectionRangeRequest = exports.SelectionRangeRequest || (exports.SelectionRangeRequest = {}));
    }
  });

  // node_modules/vscode-languageserver-protocol/lib/common/protocol.progress.js
  var require_protocol_progress = __commonJS({
    "node_modules/vscode-languageserver-protocol/lib/common/protocol.progress.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.WorkDoneProgressCancelNotification = exports.WorkDoneProgressCreateRequest = exports.WorkDoneProgress = void 0;
      var vscode_jsonrpc_1 = require_main();
      var messages_1 = require_messages2();
      var WorkDoneProgress;
      (function(WorkDoneProgress2) {
        WorkDoneProgress2.type = new vscode_jsonrpc_1.ProgressType();
        function is(value) {
          return value === WorkDoneProgress2.type;
        }
        WorkDoneProgress2.is = is;
      })(WorkDoneProgress = exports.WorkDoneProgress || (exports.WorkDoneProgress = {}));
      var WorkDoneProgressCreateRequest;
      (function(WorkDoneProgressCreateRequest2) {
        WorkDoneProgressCreateRequest2.type = new messages_1.ProtocolRequestType("window/workDoneProgress/create");
      })(WorkDoneProgressCreateRequest = exports.WorkDoneProgressCreateRequest || (exports.WorkDoneProgressCreateRequest = {}));
      var WorkDoneProgressCancelNotification;
      (function(WorkDoneProgressCancelNotification2) {
        WorkDoneProgressCancelNotification2.type = new messages_1.ProtocolNotificationType("window/workDoneProgress/cancel");
      })(WorkDoneProgressCancelNotification = exports.WorkDoneProgressCancelNotification || (exports.WorkDoneProgressCancelNotification = {}));
    }
  });

  // node_modules/vscode-languageserver-protocol/lib/common/protocol.callHierarchy.js
  var require_protocol_callHierarchy = __commonJS({
    "node_modules/vscode-languageserver-protocol/lib/common/protocol.callHierarchy.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.CallHierarchyOutgoingCallsRequest = exports.CallHierarchyIncomingCallsRequest = exports.CallHierarchyPrepareRequest = void 0;
      var messages_1 = require_messages2();
      var CallHierarchyPrepareRequest;
      (function(CallHierarchyPrepareRequest2) {
        CallHierarchyPrepareRequest2.method = "textDocument/prepareCallHierarchy";
        CallHierarchyPrepareRequest2.type = new messages_1.ProtocolRequestType(CallHierarchyPrepareRequest2.method);
      })(CallHierarchyPrepareRequest = exports.CallHierarchyPrepareRequest || (exports.CallHierarchyPrepareRequest = {}));
      var CallHierarchyIncomingCallsRequest;
      (function(CallHierarchyIncomingCallsRequest2) {
        CallHierarchyIncomingCallsRequest2.method = "callHierarchy/incomingCalls";
        CallHierarchyIncomingCallsRequest2.type = new messages_1.ProtocolRequestType(CallHierarchyIncomingCallsRequest2.method);
      })(CallHierarchyIncomingCallsRequest = exports.CallHierarchyIncomingCallsRequest || (exports.CallHierarchyIncomingCallsRequest = {}));
      var CallHierarchyOutgoingCallsRequest;
      (function(CallHierarchyOutgoingCallsRequest2) {
        CallHierarchyOutgoingCallsRequest2.method = "callHierarchy/outgoingCalls";
        CallHierarchyOutgoingCallsRequest2.type = new messages_1.ProtocolRequestType(CallHierarchyOutgoingCallsRequest2.method);
      })(CallHierarchyOutgoingCallsRequest = exports.CallHierarchyOutgoingCallsRequest || (exports.CallHierarchyOutgoingCallsRequest = {}));
    }
  });

  // node_modules/vscode-languageserver-protocol/lib/common/protocol.semanticTokens.js
  var require_protocol_semanticTokens = __commonJS({
    "node_modules/vscode-languageserver-protocol/lib/common/protocol.semanticTokens.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.SemanticTokensRefreshRequest = exports.SemanticTokensRangeRequest = exports.SemanticTokensDeltaRequest = exports.SemanticTokensRequest = exports.SemanticTokensRegistrationType = exports.TokenFormat = exports.SemanticTokens = exports.SemanticTokenModifiers = exports.SemanticTokenTypes = void 0;
      var messages_1 = require_messages2();
      var SemanticTokenTypes;
      (function(SemanticTokenTypes2) {
        SemanticTokenTypes2["namespace"] = "namespace";
        SemanticTokenTypes2["type"] = "type";
        SemanticTokenTypes2["class"] = "class";
        SemanticTokenTypes2["enum"] = "enum";
        SemanticTokenTypes2["interface"] = "interface";
        SemanticTokenTypes2["struct"] = "struct";
        SemanticTokenTypes2["typeParameter"] = "typeParameter";
        SemanticTokenTypes2["parameter"] = "parameter";
        SemanticTokenTypes2["variable"] = "variable";
        SemanticTokenTypes2["property"] = "property";
        SemanticTokenTypes2["enumMember"] = "enumMember";
        SemanticTokenTypes2["event"] = "event";
        SemanticTokenTypes2["function"] = "function";
        SemanticTokenTypes2["method"] = "method";
        SemanticTokenTypes2["macro"] = "macro";
        SemanticTokenTypes2["keyword"] = "keyword";
        SemanticTokenTypes2["modifier"] = "modifier";
        SemanticTokenTypes2["comment"] = "comment";
        SemanticTokenTypes2["string"] = "string";
        SemanticTokenTypes2["number"] = "number";
        SemanticTokenTypes2["regexp"] = "regexp";
        SemanticTokenTypes2["operator"] = "operator";
      })(SemanticTokenTypes = exports.SemanticTokenTypes || (exports.SemanticTokenTypes = {}));
      var SemanticTokenModifiers;
      (function(SemanticTokenModifiers2) {
        SemanticTokenModifiers2["declaration"] = "declaration";
        SemanticTokenModifiers2["definition"] = "definition";
        SemanticTokenModifiers2["readonly"] = "readonly";
        SemanticTokenModifiers2["static"] = "static";
        SemanticTokenModifiers2["deprecated"] = "deprecated";
        SemanticTokenModifiers2["abstract"] = "abstract";
        SemanticTokenModifiers2["async"] = "async";
        SemanticTokenModifiers2["modification"] = "modification";
        SemanticTokenModifiers2["documentation"] = "documentation";
        SemanticTokenModifiers2["defaultLibrary"] = "defaultLibrary";
      })(SemanticTokenModifiers = exports.SemanticTokenModifiers || (exports.SemanticTokenModifiers = {}));
      var SemanticTokens;
      (function(SemanticTokens2) {
        function is(value) {
          const candidate = value;
          return candidate !== void 0 && (candidate.resultId === void 0 || typeof candidate.resultId === "string") && Array.isArray(candidate.data) && (candidate.data.length === 0 || typeof candidate.data[0] === "number");
        }
        SemanticTokens2.is = is;
      })(SemanticTokens = exports.SemanticTokens || (exports.SemanticTokens = {}));
      var TokenFormat;
      (function(TokenFormat2) {
        TokenFormat2.Relative = "relative";
      })(TokenFormat = exports.TokenFormat || (exports.TokenFormat = {}));
      var SemanticTokensRegistrationType;
      (function(SemanticTokensRegistrationType2) {
        SemanticTokensRegistrationType2.method = "textDocument/semanticTokens";
        SemanticTokensRegistrationType2.type = new messages_1.RegistrationType(SemanticTokensRegistrationType2.method);
      })(SemanticTokensRegistrationType = exports.SemanticTokensRegistrationType || (exports.SemanticTokensRegistrationType = {}));
      var SemanticTokensRequest;
      (function(SemanticTokensRequest2) {
        SemanticTokensRequest2.method = "textDocument/semanticTokens/full";
        SemanticTokensRequest2.type = new messages_1.ProtocolRequestType(SemanticTokensRequest2.method);
      })(SemanticTokensRequest = exports.SemanticTokensRequest || (exports.SemanticTokensRequest = {}));
      var SemanticTokensDeltaRequest;
      (function(SemanticTokensDeltaRequest2) {
        SemanticTokensDeltaRequest2.method = "textDocument/semanticTokens/full/delta";
        SemanticTokensDeltaRequest2.type = new messages_1.ProtocolRequestType(SemanticTokensDeltaRequest2.method);
      })(SemanticTokensDeltaRequest = exports.SemanticTokensDeltaRequest || (exports.SemanticTokensDeltaRequest = {}));
      var SemanticTokensRangeRequest;
      (function(SemanticTokensRangeRequest2) {
        SemanticTokensRangeRequest2.method = "textDocument/semanticTokens/range";
        SemanticTokensRangeRequest2.type = new messages_1.ProtocolRequestType(SemanticTokensRangeRequest2.method);
      })(SemanticTokensRangeRequest = exports.SemanticTokensRangeRequest || (exports.SemanticTokensRangeRequest = {}));
      var SemanticTokensRefreshRequest;
      (function(SemanticTokensRefreshRequest2) {
        SemanticTokensRefreshRequest2.method = `workspace/semanticTokens/refresh`;
        SemanticTokensRefreshRequest2.type = new messages_1.ProtocolRequestType0(SemanticTokensRefreshRequest2.method);
      })(SemanticTokensRefreshRequest = exports.SemanticTokensRefreshRequest || (exports.SemanticTokensRefreshRequest = {}));
    }
  });

  // node_modules/vscode-languageserver-protocol/lib/common/protocol.showDocument.js
  var require_protocol_showDocument = __commonJS({
    "node_modules/vscode-languageserver-protocol/lib/common/protocol.showDocument.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ShowDocumentRequest = void 0;
      var messages_1 = require_messages2();
      var ShowDocumentRequest;
      (function(ShowDocumentRequest2) {
        ShowDocumentRequest2.method = "window/showDocument";
        ShowDocumentRequest2.type = new messages_1.ProtocolRequestType(ShowDocumentRequest2.method);
      })(ShowDocumentRequest = exports.ShowDocumentRequest || (exports.ShowDocumentRequest = {}));
    }
  });

  // node_modules/vscode-languageserver-protocol/lib/common/protocol.linkedEditingRange.js
  var require_protocol_linkedEditingRange = __commonJS({
    "node_modules/vscode-languageserver-protocol/lib/common/protocol.linkedEditingRange.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.LinkedEditingRangeRequest = void 0;
      var messages_1 = require_messages2();
      var LinkedEditingRangeRequest;
      (function(LinkedEditingRangeRequest2) {
        LinkedEditingRangeRequest2.method = "textDocument/linkedEditingRange";
        LinkedEditingRangeRequest2.type = new messages_1.ProtocolRequestType(LinkedEditingRangeRequest2.method);
      })(LinkedEditingRangeRequest = exports.LinkedEditingRangeRequest || (exports.LinkedEditingRangeRequest = {}));
    }
  });

  // node_modules/vscode-languageserver-protocol/lib/common/protocol.fileOperations.js
  var require_protocol_fileOperations = __commonJS({
    "node_modules/vscode-languageserver-protocol/lib/common/protocol.fileOperations.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.WillDeleteFilesRequest = exports.DidDeleteFilesNotification = exports.DidRenameFilesNotification = exports.WillRenameFilesRequest = exports.DidCreateFilesNotification = exports.WillCreateFilesRequest = exports.FileOperationPatternKind = void 0;
      var messages_1 = require_messages2();
      var FileOperationPatternKind;
      (function(FileOperationPatternKind2) {
        FileOperationPatternKind2.file = "file";
        FileOperationPatternKind2.folder = "folder";
      })(FileOperationPatternKind = exports.FileOperationPatternKind || (exports.FileOperationPatternKind = {}));
      var WillCreateFilesRequest;
      (function(WillCreateFilesRequest2) {
        WillCreateFilesRequest2.method = "workspace/willCreateFiles";
        WillCreateFilesRequest2.type = new messages_1.ProtocolRequestType(WillCreateFilesRequest2.method);
      })(WillCreateFilesRequest = exports.WillCreateFilesRequest || (exports.WillCreateFilesRequest = {}));
      var DidCreateFilesNotification;
      (function(DidCreateFilesNotification2) {
        DidCreateFilesNotification2.method = "workspace/didCreateFiles";
        DidCreateFilesNotification2.type = new messages_1.ProtocolNotificationType(DidCreateFilesNotification2.method);
      })(DidCreateFilesNotification = exports.DidCreateFilesNotification || (exports.DidCreateFilesNotification = {}));
      var WillRenameFilesRequest;
      (function(WillRenameFilesRequest2) {
        WillRenameFilesRequest2.method = "workspace/willRenameFiles";
        WillRenameFilesRequest2.type = new messages_1.ProtocolRequestType(WillRenameFilesRequest2.method);
      })(WillRenameFilesRequest = exports.WillRenameFilesRequest || (exports.WillRenameFilesRequest = {}));
      var DidRenameFilesNotification;
      (function(DidRenameFilesNotification2) {
        DidRenameFilesNotification2.method = "workspace/didRenameFiles";
        DidRenameFilesNotification2.type = new messages_1.ProtocolNotificationType(DidRenameFilesNotification2.method);
      })(DidRenameFilesNotification = exports.DidRenameFilesNotification || (exports.DidRenameFilesNotification = {}));
      var DidDeleteFilesNotification;
      (function(DidDeleteFilesNotification2) {
        DidDeleteFilesNotification2.method = "workspace/didDeleteFiles";
        DidDeleteFilesNotification2.type = new messages_1.ProtocolNotificationType(DidDeleteFilesNotification2.method);
      })(DidDeleteFilesNotification = exports.DidDeleteFilesNotification || (exports.DidDeleteFilesNotification = {}));
      var WillDeleteFilesRequest;
      (function(WillDeleteFilesRequest2) {
        WillDeleteFilesRequest2.method = "workspace/willDeleteFiles";
        WillDeleteFilesRequest2.type = new messages_1.ProtocolRequestType(WillDeleteFilesRequest2.method);
      })(WillDeleteFilesRequest = exports.WillDeleteFilesRequest || (exports.WillDeleteFilesRequest = {}));
    }
  });

  // node_modules/vscode-languageserver-protocol/lib/common/protocol.moniker.js
  var require_protocol_moniker = __commonJS({
    "node_modules/vscode-languageserver-protocol/lib/common/protocol.moniker.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.MonikerRequest = exports.MonikerKind = exports.UniquenessLevel = void 0;
      var messages_1 = require_messages2();
      var UniquenessLevel;
      (function(UniquenessLevel2) {
        UniquenessLevel2["document"] = "document";
        UniquenessLevel2["project"] = "project";
        UniquenessLevel2["group"] = "group";
        UniquenessLevel2["scheme"] = "scheme";
        UniquenessLevel2["global"] = "global";
      })(UniquenessLevel = exports.UniquenessLevel || (exports.UniquenessLevel = {}));
      var MonikerKind;
      (function(MonikerKind2) {
        MonikerKind2["import"] = "import";
        MonikerKind2["export"] = "export";
        MonikerKind2["local"] = "local";
      })(MonikerKind = exports.MonikerKind || (exports.MonikerKind = {}));
      var MonikerRequest;
      (function(MonikerRequest2) {
        MonikerRequest2.method = "textDocument/moniker";
        MonikerRequest2.type = new messages_1.ProtocolRequestType(MonikerRequest2.method);
      })(MonikerRequest = exports.MonikerRequest || (exports.MonikerRequest = {}));
    }
  });

  // node_modules/vscode-languageserver-protocol/lib/common/protocol.js
  var require_protocol = __commonJS({
    "node_modules/vscode-languageserver-protocol/lib/common/protocol.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DocumentLinkRequest = exports.CodeLensRefreshRequest = exports.CodeLensResolveRequest = exports.CodeLensRequest = exports.WorkspaceSymbolRequest = exports.CodeActionResolveRequest = exports.CodeActionRequest = exports.DocumentSymbolRequest = exports.DocumentHighlightRequest = exports.ReferencesRequest = exports.DefinitionRequest = exports.SignatureHelpRequest = exports.SignatureHelpTriggerKind = exports.HoverRequest = exports.CompletionResolveRequest = exports.CompletionRequest = exports.CompletionTriggerKind = exports.PublishDiagnosticsNotification = exports.WatchKind = exports.FileChangeType = exports.DidChangeWatchedFilesNotification = exports.WillSaveTextDocumentWaitUntilRequest = exports.WillSaveTextDocumentNotification = exports.TextDocumentSaveReason = exports.DidSaveTextDocumentNotification = exports.DidCloseTextDocumentNotification = exports.DidChangeTextDocumentNotification = exports.TextDocumentContentChangeEvent = exports.DidOpenTextDocumentNotification = exports.TextDocumentSyncKind = exports.TelemetryEventNotification = exports.LogMessageNotification = exports.ShowMessageRequest = exports.ShowMessageNotification = exports.MessageType = exports.DidChangeConfigurationNotification = exports.ExitNotification = exports.ShutdownRequest = exports.InitializedNotification = exports.InitializeError = exports.InitializeRequest = exports.WorkDoneProgressOptions = exports.TextDocumentRegistrationOptions = exports.StaticRegistrationOptions = exports.FailureHandlingKind = exports.ResourceOperationKind = exports.UnregistrationRequest = exports.RegistrationRequest = exports.DocumentSelector = exports.DocumentFilter = void 0;
      exports.MonikerRequest = exports.MonikerKind = exports.UniquenessLevel = exports.WillDeleteFilesRequest = exports.DidDeleteFilesNotification = exports.WillRenameFilesRequest = exports.DidRenameFilesNotification = exports.WillCreateFilesRequest = exports.DidCreateFilesNotification = exports.FileOperationPatternKind = exports.LinkedEditingRangeRequest = exports.ShowDocumentRequest = exports.SemanticTokensRegistrationType = exports.SemanticTokensRefreshRequest = exports.SemanticTokensRangeRequest = exports.SemanticTokensDeltaRequest = exports.SemanticTokensRequest = exports.TokenFormat = exports.SemanticTokens = exports.SemanticTokenModifiers = exports.SemanticTokenTypes = exports.CallHierarchyPrepareRequest = exports.CallHierarchyOutgoingCallsRequest = exports.CallHierarchyIncomingCallsRequest = exports.WorkDoneProgressCancelNotification = exports.WorkDoneProgressCreateRequest = exports.WorkDoneProgress = exports.SelectionRangeRequest = exports.DeclarationRequest = exports.FoldingRangeRequest = exports.ColorPresentationRequest = exports.DocumentColorRequest = exports.ConfigurationRequest = exports.DidChangeWorkspaceFoldersNotification = exports.WorkspaceFoldersRequest = exports.TypeDefinitionRequest = exports.ImplementationRequest = exports.ApplyWorkspaceEditRequest = exports.ExecuteCommandRequest = exports.PrepareRenameRequest = exports.RenameRequest = exports.PrepareSupportDefaultBehavior = exports.DocumentOnTypeFormattingRequest = exports.DocumentRangeFormattingRequest = exports.DocumentFormattingRequest = exports.DocumentLinkResolveRequest = void 0;
      var Is = require_is2();
      var messages_1 = require_messages2();
      var protocol_implementation_1 = require_protocol_implementation();
      Object.defineProperty(exports, "ImplementationRequest", { enumerable: true, get: function() {
        return protocol_implementation_1.ImplementationRequest;
      } });
      var protocol_typeDefinition_1 = require_protocol_typeDefinition();
      Object.defineProperty(exports, "TypeDefinitionRequest", { enumerable: true, get: function() {
        return protocol_typeDefinition_1.TypeDefinitionRequest;
      } });
      var protocol_workspaceFolders_1 = require_protocol_workspaceFolders();
      Object.defineProperty(exports, "WorkspaceFoldersRequest", { enumerable: true, get: function() {
        return protocol_workspaceFolders_1.WorkspaceFoldersRequest;
      } });
      Object.defineProperty(exports, "DidChangeWorkspaceFoldersNotification", { enumerable: true, get: function() {
        return protocol_workspaceFolders_1.DidChangeWorkspaceFoldersNotification;
      } });
      var protocol_configuration_1 = require_protocol_configuration();
      Object.defineProperty(exports, "ConfigurationRequest", { enumerable: true, get: function() {
        return protocol_configuration_1.ConfigurationRequest;
      } });
      var protocol_colorProvider_1 = require_protocol_colorProvider();
      Object.defineProperty(exports, "DocumentColorRequest", { enumerable: true, get: function() {
        return protocol_colorProvider_1.DocumentColorRequest;
      } });
      Object.defineProperty(exports, "ColorPresentationRequest", { enumerable: true, get: function() {
        return protocol_colorProvider_1.ColorPresentationRequest;
      } });
      var protocol_foldingRange_1 = require_protocol_foldingRange();
      Object.defineProperty(exports, "FoldingRangeRequest", { enumerable: true, get: function() {
        return protocol_foldingRange_1.FoldingRangeRequest;
      } });
      var protocol_declaration_1 = require_protocol_declaration();
      Object.defineProperty(exports, "DeclarationRequest", { enumerable: true, get: function() {
        return protocol_declaration_1.DeclarationRequest;
      } });
      var protocol_selectionRange_1 = require_protocol_selectionRange();
      Object.defineProperty(exports, "SelectionRangeRequest", { enumerable: true, get: function() {
        return protocol_selectionRange_1.SelectionRangeRequest;
      } });
      var protocol_progress_1 = require_protocol_progress();
      Object.defineProperty(exports, "WorkDoneProgress", { enumerable: true, get: function() {
        return protocol_progress_1.WorkDoneProgress;
      } });
      Object.defineProperty(exports, "WorkDoneProgressCreateRequest", { enumerable: true, get: function() {
        return protocol_progress_1.WorkDoneProgressCreateRequest;
      } });
      Object.defineProperty(exports, "WorkDoneProgressCancelNotification", { enumerable: true, get: function() {
        return protocol_progress_1.WorkDoneProgressCancelNotification;
      } });
      var protocol_callHierarchy_1 = require_protocol_callHierarchy();
      Object.defineProperty(exports, "CallHierarchyIncomingCallsRequest", { enumerable: true, get: function() {
        return protocol_callHierarchy_1.CallHierarchyIncomingCallsRequest;
      } });
      Object.defineProperty(exports, "CallHierarchyOutgoingCallsRequest", { enumerable: true, get: function() {
        return protocol_callHierarchy_1.CallHierarchyOutgoingCallsRequest;
      } });
      Object.defineProperty(exports, "CallHierarchyPrepareRequest", { enumerable: true, get: function() {
        return protocol_callHierarchy_1.CallHierarchyPrepareRequest;
      } });
      var protocol_semanticTokens_1 = require_protocol_semanticTokens();
      Object.defineProperty(exports, "SemanticTokenTypes", { enumerable: true, get: function() {
        return protocol_semanticTokens_1.SemanticTokenTypes;
      } });
      Object.defineProperty(exports, "SemanticTokenModifiers", { enumerable: true, get: function() {
        return protocol_semanticTokens_1.SemanticTokenModifiers;
      } });
      Object.defineProperty(exports, "SemanticTokens", { enumerable: true, get: function() {
        return protocol_semanticTokens_1.SemanticTokens;
      } });
      Object.defineProperty(exports, "TokenFormat", { enumerable: true, get: function() {
        return protocol_semanticTokens_1.TokenFormat;
      } });
      Object.defineProperty(exports, "SemanticTokensRequest", { enumerable: true, get: function() {
        return protocol_semanticTokens_1.SemanticTokensRequest;
      } });
      Object.defineProperty(exports, "SemanticTokensDeltaRequest", { enumerable: true, get: function() {
        return protocol_semanticTokens_1.SemanticTokensDeltaRequest;
      } });
      Object.defineProperty(exports, "SemanticTokensRangeRequest", { enumerable: true, get: function() {
        return protocol_semanticTokens_1.SemanticTokensRangeRequest;
      } });
      Object.defineProperty(exports, "SemanticTokensRefreshRequest", { enumerable: true, get: function() {
        return protocol_semanticTokens_1.SemanticTokensRefreshRequest;
      } });
      Object.defineProperty(exports, "SemanticTokensRegistrationType", { enumerable: true, get: function() {
        return protocol_semanticTokens_1.SemanticTokensRegistrationType;
      } });
      var protocol_showDocument_1 = require_protocol_showDocument();
      Object.defineProperty(exports, "ShowDocumentRequest", { enumerable: true, get: function() {
        return protocol_showDocument_1.ShowDocumentRequest;
      } });
      var protocol_linkedEditingRange_1 = require_protocol_linkedEditingRange();
      Object.defineProperty(exports, "LinkedEditingRangeRequest", { enumerable: true, get: function() {
        return protocol_linkedEditingRange_1.LinkedEditingRangeRequest;
      } });
      var protocol_fileOperations_1 = require_protocol_fileOperations();
      Object.defineProperty(exports, "FileOperationPatternKind", { enumerable: true, get: function() {
        return protocol_fileOperations_1.FileOperationPatternKind;
      } });
      Object.defineProperty(exports, "DidCreateFilesNotification", { enumerable: true, get: function() {
        return protocol_fileOperations_1.DidCreateFilesNotification;
      } });
      Object.defineProperty(exports, "WillCreateFilesRequest", { enumerable: true, get: function() {
        return protocol_fileOperations_1.WillCreateFilesRequest;
      } });
      Object.defineProperty(exports, "DidRenameFilesNotification", { enumerable: true, get: function() {
        return protocol_fileOperations_1.DidRenameFilesNotification;
      } });
      Object.defineProperty(exports, "WillRenameFilesRequest", { enumerable: true, get: function() {
        return protocol_fileOperations_1.WillRenameFilesRequest;
      } });
      Object.defineProperty(exports, "DidDeleteFilesNotification", { enumerable: true, get: function() {
        return protocol_fileOperations_1.DidDeleteFilesNotification;
      } });
      Object.defineProperty(exports, "WillDeleteFilesRequest", { enumerable: true, get: function() {
        return protocol_fileOperations_1.WillDeleteFilesRequest;
      } });
      var protocol_moniker_1 = require_protocol_moniker();
      Object.defineProperty(exports, "UniquenessLevel", { enumerable: true, get: function() {
        return protocol_moniker_1.UniquenessLevel;
      } });
      Object.defineProperty(exports, "MonikerKind", { enumerable: true, get: function() {
        return protocol_moniker_1.MonikerKind;
      } });
      Object.defineProperty(exports, "MonikerRequest", { enumerable: true, get: function() {
        return protocol_moniker_1.MonikerRequest;
      } });
      var DocumentFilter;
      (function(DocumentFilter2) {
        function is(value) {
          const candidate = value;
          return Is.string(candidate.language) || Is.string(candidate.scheme) || Is.string(candidate.pattern);
        }
        DocumentFilter2.is = is;
      })(DocumentFilter = exports.DocumentFilter || (exports.DocumentFilter = {}));
      var DocumentSelector;
      (function(DocumentSelector2) {
        function is(value) {
          if (!Array.isArray(value)) {
            return false;
          }
          for (let elem of value) {
            if (!Is.string(elem) && !DocumentFilter.is(elem)) {
              return false;
            }
          }
          return true;
        }
        DocumentSelector2.is = is;
      })(DocumentSelector = exports.DocumentSelector || (exports.DocumentSelector = {}));
      var RegistrationRequest;
      (function(RegistrationRequest2) {
        RegistrationRequest2.type = new messages_1.ProtocolRequestType("client/registerCapability");
      })(RegistrationRequest = exports.RegistrationRequest || (exports.RegistrationRequest = {}));
      var UnregistrationRequest;
      (function(UnregistrationRequest2) {
        UnregistrationRequest2.type = new messages_1.ProtocolRequestType("client/unregisterCapability");
      })(UnregistrationRequest = exports.UnregistrationRequest || (exports.UnregistrationRequest = {}));
      var ResourceOperationKind;
      (function(ResourceOperationKind2) {
        ResourceOperationKind2.Create = "create";
        ResourceOperationKind2.Rename = "rename";
        ResourceOperationKind2.Delete = "delete";
      })(ResourceOperationKind = exports.ResourceOperationKind || (exports.ResourceOperationKind = {}));
      var FailureHandlingKind;
      (function(FailureHandlingKind2) {
        FailureHandlingKind2.Abort = "abort";
        FailureHandlingKind2.Transactional = "transactional";
        FailureHandlingKind2.TextOnlyTransactional = "textOnlyTransactional";
        FailureHandlingKind2.Undo = "undo";
      })(FailureHandlingKind = exports.FailureHandlingKind || (exports.FailureHandlingKind = {}));
      var StaticRegistrationOptions;
      (function(StaticRegistrationOptions2) {
        function hasId(value) {
          const candidate = value;
          return candidate && Is.string(candidate.id) && candidate.id.length > 0;
        }
        StaticRegistrationOptions2.hasId = hasId;
      })(StaticRegistrationOptions = exports.StaticRegistrationOptions || (exports.StaticRegistrationOptions = {}));
      var TextDocumentRegistrationOptions;
      (function(TextDocumentRegistrationOptions2) {
        function is(value) {
          const candidate = value;
          return candidate && (candidate.documentSelector === null || DocumentSelector.is(candidate.documentSelector));
        }
        TextDocumentRegistrationOptions2.is = is;
      })(TextDocumentRegistrationOptions = exports.TextDocumentRegistrationOptions || (exports.TextDocumentRegistrationOptions = {}));
      var WorkDoneProgressOptions;
      (function(WorkDoneProgressOptions2) {
        function is(value) {
          const candidate = value;
          return Is.objectLiteral(candidate) && (candidate.workDoneProgress === void 0 || Is.boolean(candidate.workDoneProgress));
        }
        WorkDoneProgressOptions2.is = is;
        function hasWorkDoneProgress(value) {
          const candidate = value;
          return candidate && Is.boolean(candidate.workDoneProgress);
        }
        WorkDoneProgressOptions2.hasWorkDoneProgress = hasWorkDoneProgress;
      })(WorkDoneProgressOptions = exports.WorkDoneProgressOptions || (exports.WorkDoneProgressOptions = {}));
      var InitializeRequest;
      (function(InitializeRequest2) {
        InitializeRequest2.type = new messages_1.ProtocolRequestType("initialize");
      })(InitializeRequest = exports.InitializeRequest || (exports.InitializeRequest = {}));
      var InitializeError;
      (function(InitializeError2) {
        InitializeError2.unknownProtocolVersion = 1;
      })(InitializeError = exports.InitializeError || (exports.InitializeError = {}));
      var InitializedNotification;
      (function(InitializedNotification2) {
        InitializedNotification2.type = new messages_1.ProtocolNotificationType("initialized");
      })(InitializedNotification = exports.InitializedNotification || (exports.InitializedNotification = {}));
      var ShutdownRequest;
      (function(ShutdownRequest2) {
        ShutdownRequest2.type = new messages_1.ProtocolRequestType0("shutdown");
      })(ShutdownRequest = exports.ShutdownRequest || (exports.ShutdownRequest = {}));
      var ExitNotification;
      (function(ExitNotification2) {
        ExitNotification2.type = new messages_1.ProtocolNotificationType0("exit");
      })(ExitNotification = exports.ExitNotification || (exports.ExitNotification = {}));
      var DidChangeConfigurationNotification;
      (function(DidChangeConfigurationNotification2) {
        DidChangeConfigurationNotification2.type = new messages_1.ProtocolNotificationType("workspace/didChangeConfiguration");
      })(DidChangeConfigurationNotification = exports.DidChangeConfigurationNotification || (exports.DidChangeConfigurationNotification = {}));
      var MessageType;
      (function(MessageType2) {
        MessageType2.Error = 1;
        MessageType2.Warning = 2;
        MessageType2.Info = 3;
        MessageType2.Log = 4;
      })(MessageType = exports.MessageType || (exports.MessageType = {}));
      var ShowMessageNotification;
      (function(ShowMessageNotification2) {
        ShowMessageNotification2.type = new messages_1.ProtocolNotificationType("window/showMessage");
      })(ShowMessageNotification = exports.ShowMessageNotification || (exports.ShowMessageNotification = {}));
      var ShowMessageRequest;
      (function(ShowMessageRequest2) {
        ShowMessageRequest2.type = new messages_1.ProtocolRequestType("window/showMessageRequest");
      })(ShowMessageRequest = exports.ShowMessageRequest || (exports.ShowMessageRequest = {}));
      var LogMessageNotification;
      (function(LogMessageNotification2) {
        LogMessageNotification2.type = new messages_1.ProtocolNotificationType("window/logMessage");
      })(LogMessageNotification = exports.LogMessageNotification || (exports.LogMessageNotification = {}));
      var TelemetryEventNotification;
      (function(TelemetryEventNotification2) {
        TelemetryEventNotification2.type = new messages_1.ProtocolNotificationType("telemetry/event");
      })(TelemetryEventNotification = exports.TelemetryEventNotification || (exports.TelemetryEventNotification = {}));
      var TextDocumentSyncKind;
      (function(TextDocumentSyncKind2) {
        TextDocumentSyncKind2.None = 0;
        TextDocumentSyncKind2.Full = 1;
        TextDocumentSyncKind2.Incremental = 2;
      })(TextDocumentSyncKind = exports.TextDocumentSyncKind || (exports.TextDocumentSyncKind = {}));
      var DidOpenTextDocumentNotification;
      (function(DidOpenTextDocumentNotification2) {
        DidOpenTextDocumentNotification2.method = "textDocument/didOpen";
        DidOpenTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidOpenTextDocumentNotification2.method);
      })(DidOpenTextDocumentNotification = exports.DidOpenTextDocumentNotification || (exports.DidOpenTextDocumentNotification = {}));
      var TextDocumentContentChangeEvent2;
      (function(TextDocumentContentChangeEvent3) {
        function isIncremental(event) {
          let candidate = event;
          return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range !== void 0 && (candidate.rangeLength === void 0 || typeof candidate.rangeLength === "number");
        }
        TextDocumentContentChangeEvent3.isIncremental = isIncremental;
        function isFull(event) {
          let candidate = event;
          return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range === void 0 && candidate.rangeLength === void 0;
        }
        TextDocumentContentChangeEvent3.isFull = isFull;
      })(TextDocumentContentChangeEvent2 = exports.TextDocumentContentChangeEvent || (exports.TextDocumentContentChangeEvent = {}));
      var DidChangeTextDocumentNotification;
      (function(DidChangeTextDocumentNotification2) {
        DidChangeTextDocumentNotification2.method = "textDocument/didChange";
        DidChangeTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidChangeTextDocumentNotification2.method);
      })(DidChangeTextDocumentNotification = exports.DidChangeTextDocumentNotification || (exports.DidChangeTextDocumentNotification = {}));
      var DidCloseTextDocumentNotification;
      (function(DidCloseTextDocumentNotification2) {
        DidCloseTextDocumentNotification2.method = "textDocument/didClose";
        DidCloseTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidCloseTextDocumentNotification2.method);
      })(DidCloseTextDocumentNotification = exports.DidCloseTextDocumentNotification || (exports.DidCloseTextDocumentNotification = {}));
      var DidSaveTextDocumentNotification;
      (function(DidSaveTextDocumentNotification2) {
        DidSaveTextDocumentNotification2.method = "textDocument/didSave";
        DidSaveTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidSaveTextDocumentNotification2.method);
      })(DidSaveTextDocumentNotification = exports.DidSaveTextDocumentNotification || (exports.DidSaveTextDocumentNotification = {}));
      var TextDocumentSaveReason;
      (function(TextDocumentSaveReason2) {
        TextDocumentSaveReason2.Manual = 1;
        TextDocumentSaveReason2.AfterDelay = 2;
        TextDocumentSaveReason2.FocusOut = 3;
      })(TextDocumentSaveReason = exports.TextDocumentSaveReason || (exports.TextDocumentSaveReason = {}));
      var WillSaveTextDocumentNotification;
      (function(WillSaveTextDocumentNotification2) {
        WillSaveTextDocumentNotification2.method = "textDocument/willSave";
        WillSaveTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(WillSaveTextDocumentNotification2.method);
      })(WillSaveTextDocumentNotification = exports.WillSaveTextDocumentNotification || (exports.WillSaveTextDocumentNotification = {}));
      var WillSaveTextDocumentWaitUntilRequest;
      (function(WillSaveTextDocumentWaitUntilRequest2) {
        WillSaveTextDocumentWaitUntilRequest2.method = "textDocument/willSaveWaitUntil";
        WillSaveTextDocumentWaitUntilRequest2.type = new messages_1.ProtocolRequestType(WillSaveTextDocumentWaitUntilRequest2.method);
      })(WillSaveTextDocumentWaitUntilRequest = exports.WillSaveTextDocumentWaitUntilRequest || (exports.WillSaveTextDocumentWaitUntilRequest = {}));
      var DidChangeWatchedFilesNotification;
      (function(DidChangeWatchedFilesNotification2) {
        DidChangeWatchedFilesNotification2.type = new messages_1.ProtocolNotificationType("workspace/didChangeWatchedFiles");
      })(DidChangeWatchedFilesNotification = exports.DidChangeWatchedFilesNotification || (exports.DidChangeWatchedFilesNotification = {}));
      var FileChangeType;
      (function(FileChangeType2) {
        FileChangeType2.Created = 1;
        FileChangeType2.Changed = 2;
        FileChangeType2.Deleted = 3;
      })(FileChangeType = exports.FileChangeType || (exports.FileChangeType = {}));
      var WatchKind;
      (function(WatchKind2) {
        WatchKind2.Create = 1;
        WatchKind2.Change = 2;
        WatchKind2.Delete = 4;
      })(WatchKind = exports.WatchKind || (exports.WatchKind = {}));
      var PublishDiagnosticsNotification;
      (function(PublishDiagnosticsNotification2) {
        PublishDiagnosticsNotification2.type = new messages_1.ProtocolNotificationType("textDocument/publishDiagnostics");
      })(PublishDiagnosticsNotification = exports.PublishDiagnosticsNotification || (exports.PublishDiagnosticsNotification = {}));
      var CompletionTriggerKind;
      (function(CompletionTriggerKind2) {
        CompletionTriggerKind2.Invoked = 1;
        CompletionTriggerKind2.TriggerCharacter = 2;
        CompletionTriggerKind2.TriggerForIncompleteCompletions = 3;
      })(CompletionTriggerKind = exports.CompletionTriggerKind || (exports.CompletionTriggerKind = {}));
      var CompletionRequest;
      (function(CompletionRequest2) {
        CompletionRequest2.method = "textDocument/completion";
        CompletionRequest2.type = new messages_1.ProtocolRequestType(CompletionRequest2.method);
      })(CompletionRequest = exports.CompletionRequest || (exports.CompletionRequest = {}));
      var CompletionResolveRequest;
      (function(CompletionResolveRequest2) {
        CompletionResolveRequest2.method = "completionItem/resolve";
        CompletionResolveRequest2.type = new messages_1.ProtocolRequestType(CompletionResolveRequest2.method);
      })(CompletionResolveRequest = exports.CompletionResolveRequest || (exports.CompletionResolveRequest = {}));
      var HoverRequest;
      (function(HoverRequest2) {
        HoverRequest2.method = "textDocument/hover";
        HoverRequest2.type = new messages_1.ProtocolRequestType(HoverRequest2.method);
      })(HoverRequest = exports.HoverRequest || (exports.HoverRequest = {}));
      var SignatureHelpTriggerKind;
      (function(SignatureHelpTriggerKind2) {
        SignatureHelpTriggerKind2.Invoked = 1;
        SignatureHelpTriggerKind2.TriggerCharacter = 2;
        SignatureHelpTriggerKind2.ContentChange = 3;
      })(SignatureHelpTriggerKind = exports.SignatureHelpTriggerKind || (exports.SignatureHelpTriggerKind = {}));
      var SignatureHelpRequest;
      (function(SignatureHelpRequest2) {
        SignatureHelpRequest2.method = "textDocument/signatureHelp";
        SignatureHelpRequest2.type = new messages_1.ProtocolRequestType(SignatureHelpRequest2.method);
      })(SignatureHelpRequest = exports.SignatureHelpRequest || (exports.SignatureHelpRequest = {}));
      var DefinitionRequest;
      (function(DefinitionRequest2) {
        DefinitionRequest2.method = "textDocument/definition";
        DefinitionRequest2.type = new messages_1.ProtocolRequestType(DefinitionRequest2.method);
      })(DefinitionRequest = exports.DefinitionRequest || (exports.DefinitionRequest = {}));
      var ReferencesRequest;
      (function(ReferencesRequest2) {
        ReferencesRequest2.method = "textDocument/references";
        ReferencesRequest2.type = new messages_1.ProtocolRequestType(ReferencesRequest2.method);
      })(ReferencesRequest = exports.ReferencesRequest || (exports.ReferencesRequest = {}));
      var DocumentHighlightRequest;
      (function(DocumentHighlightRequest2) {
        DocumentHighlightRequest2.method = "textDocument/documentHighlight";
        DocumentHighlightRequest2.type = new messages_1.ProtocolRequestType(DocumentHighlightRequest2.method);
      })(DocumentHighlightRequest = exports.DocumentHighlightRequest || (exports.DocumentHighlightRequest = {}));
      var DocumentSymbolRequest;
      (function(DocumentSymbolRequest2) {
        DocumentSymbolRequest2.method = "textDocument/documentSymbol";
        DocumentSymbolRequest2.type = new messages_1.ProtocolRequestType(DocumentSymbolRequest2.method);
      })(DocumentSymbolRequest = exports.DocumentSymbolRequest || (exports.DocumentSymbolRequest = {}));
      var CodeActionRequest;
      (function(CodeActionRequest2) {
        CodeActionRequest2.method = "textDocument/codeAction";
        CodeActionRequest2.type = new messages_1.ProtocolRequestType(CodeActionRequest2.method);
      })(CodeActionRequest = exports.CodeActionRequest || (exports.CodeActionRequest = {}));
      var CodeActionResolveRequest;
      (function(CodeActionResolveRequest2) {
        CodeActionResolveRequest2.method = "codeAction/resolve";
        CodeActionResolveRequest2.type = new messages_1.ProtocolRequestType(CodeActionResolveRequest2.method);
      })(CodeActionResolveRequest = exports.CodeActionResolveRequest || (exports.CodeActionResolveRequest = {}));
      var WorkspaceSymbolRequest;
      (function(WorkspaceSymbolRequest2) {
        WorkspaceSymbolRequest2.method = "workspace/symbol";
        WorkspaceSymbolRequest2.type = new messages_1.ProtocolRequestType(WorkspaceSymbolRequest2.method);
      })(WorkspaceSymbolRequest = exports.WorkspaceSymbolRequest || (exports.WorkspaceSymbolRequest = {}));
      var CodeLensRequest;
      (function(CodeLensRequest2) {
        CodeLensRequest2.method = "textDocument/codeLens";
        CodeLensRequest2.type = new messages_1.ProtocolRequestType(CodeLensRequest2.method);
      })(CodeLensRequest = exports.CodeLensRequest || (exports.CodeLensRequest = {}));
      var CodeLensResolveRequest;
      (function(CodeLensResolveRequest2) {
        CodeLensResolveRequest2.method = "codeLens/resolve";
        CodeLensResolveRequest2.type = new messages_1.ProtocolRequestType(CodeLensResolveRequest2.method);
      })(CodeLensResolveRequest = exports.CodeLensResolveRequest || (exports.CodeLensResolveRequest = {}));
      var CodeLensRefreshRequest;
      (function(CodeLensRefreshRequest2) {
        CodeLensRefreshRequest2.method = `workspace/codeLens/refresh`;
        CodeLensRefreshRequest2.type = new messages_1.ProtocolRequestType0(CodeLensRefreshRequest2.method);
      })(CodeLensRefreshRequest = exports.CodeLensRefreshRequest || (exports.CodeLensRefreshRequest = {}));
      var DocumentLinkRequest;
      (function(DocumentLinkRequest2) {
        DocumentLinkRequest2.method = "textDocument/documentLink";
        DocumentLinkRequest2.type = new messages_1.ProtocolRequestType(DocumentLinkRequest2.method);
      })(DocumentLinkRequest = exports.DocumentLinkRequest || (exports.DocumentLinkRequest = {}));
      var DocumentLinkResolveRequest;
      (function(DocumentLinkResolveRequest2) {
        DocumentLinkResolveRequest2.method = "documentLink/resolve";
        DocumentLinkResolveRequest2.type = new messages_1.ProtocolRequestType(DocumentLinkResolveRequest2.method);
      })(DocumentLinkResolveRequest = exports.DocumentLinkResolveRequest || (exports.DocumentLinkResolveRequest = {}));
      var DocumentFormattingRequest;
      (function(DocumentFormattingRequest2) {
        DocumentFormattingRequest2.method = "textDocument/formatting";
        DocumentFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentFormattingRequest2.method);
      })(DocumentFormattingRequest = exports.DocumentFormattingRequest || (exports.DocumentFormattingRequest = {}));
      var DocumentRangeFormattingRequest;
      (function(DocumentRangeFormattingRequest2) {
        DocumentRangeFormattingRequest2.method = "textDocument/rangeFormatting";
        DocumentRangeFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentRangeFormattingRequest2.method);
      })(DocumentRangeFormattingRequest = exports.DocumentRangeFormattingRequest || (exports.DocumentRangeFormattingRequest = {}));
      var DocumentOnTypeFormattingRequest;
      (function(DocumentOnTypeFormattingRequest2) {
        DocumentOnTypeFormattingRequest2.method = "textDocument/onTypeFormatting";
        DocumentOnTypeFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentOnTypeFormattingRequest2.method);
      })(DocumentOnTypeFormattingRequest = exports.DocumentOnTypeFormattingRequest || (exports.DocumentOnTypeFormattingRequest = {}));
      var PrepareSupportDefaultBehavior;
      (function(PrepareSupportDefaultBehavior2) {
        PrepareSupportDefaultBehavior2.Identifier = 1;
      })(PrepareSupportDefaultBehavior = exports.PrepareSupportDefaultBehavior || (exports.PrepareSupportDefaultBehavior = {}));
      var RenameRequest;
      (function(RenameRequest2) {
        RenameRequest2.method = "textDocument/rename";
        RenameRequest2.type = new messages_1.ProtocolRequestType(RenameRequest2.method);
      })(RenameRequest = exports.RenameRequest || (exports.RenameRequest = {}));
      var PrepareRenameRequest;
      (function(PrepareRenameRequest2) {
        PrepareRenameRequest2.method = "textDocument/prepareRename";
        PrepareRenameRequest2.type = new messages_1.ProtocolRequestType(PrepareRenameRequest2.method);
      })(PrepareRenameRequest = exports.PrepareRenameRequest || (exports.PrepareRenameRequest = {}));
      var ExecuteCommandRequest;
      (function(ExecuteCommandRequest2) {
        ExecuteCommandRequest2.type = new messages_1.ProtocolRequestType("workspace/executeCommand");
      })(ExecuteCommandRequest = exports.ExecuteCommandRequest || (exports.ExecuteCommandRequest = {}));
      var ApplyWorkspaceEditRequest;
      (function(ApplyWorkspaceEditRequest2) {
        ApplyWorkspaceEditRequest2.type = new messages_1.ProtocolRequestType("workspace/applyEdit");
      })(ApplyWorkspaceEditRequest = exports.ApplyWorkspaceEditRequest || (exports.ApplyWorkspaceEditRequest = {}));
    }
  });

  // node_modules/vscode-languageserver-protocol/lib/common/connection.js
  var require_connection2 = __commonJS({
    "node_modules/vscode-languageserver-protocol/lib/common/connection.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createProtocolConnection = void 0;
      var vscode_jsonrpc_1 = require_main();
      function createProtocolConnection(input, output, logger, options) {
        if (vscode_jsonrpc_1.ConnectionStrategy.is(options)) {
          options = { connectionStrategy: options };
        }
        return vscode_jsonrpc_1.createMessageConnection(input, output, logger, options);
      }
      exports.createProtocolConnection = createProtocolConnection;
    }
  });

  // node_modules/vscode-languageserver-protocol/lib/common/api.js
  var require_api2 = __commonJS({
    "node_modules/vscode-languageserver-protocol/lib/common/api.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.LSPErrorCodes = exports.createProtocolConnection = void 0;
      __exportStar(require_main(), exports);
      __exportStar(require_main2(), exports);
      __exportStar(require_messages2(), exports);
      __exportStar(require_protocol(), exports);
      var connection_1 = require_connection2();
      Object.defineProperty(exports, "createProtocolConnection", { enumerable: true, get: function() {
        return connection_1.createProtocolConnection;
      } });
      var LSPErrorCodes;
      (function(LSPErrorCodes2) {
        LSPErrorCodes2.lspReservedErrorRangeStart = -32899;
        LSPErrorCodes2.ContentModified = -32801;
        LSPErrorCodes2.RequestCancelled = -32800;
        LSPErrorCodes2.lspReservedErrorRangeEnd = -32800;
      })(LSPErrorCodes = exports.LSPErrorCodes || (exports.LSPErrorCodes = {}));
    }
  });

  // node_modules/vscode-languageserver-protocol/lib/browser/main.js
  var require_main3 = __commonJS({
    "node_modules/vscode-languageserver-protocol/lib/browser/main.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createProtocolConnection = void 0;
      var browser_1 = require_browser();
      __exportStar(require_browser(), exports);
      __exportStar(require_api2(), exports);
      function createProtocolConnection(reader, writer, logger, options) {
        return browser_1.createMessageConnection(reader, writer, logger, options);
      }
      exports.createProtocolConnection = createProtocolConnection;
    }
  });

  // node_modules/vscode-languageserver/lib/common/semanticTokens.js
  var require_semanticTokens = __commonJS({
    "node_modules/vscode-languageserver/lib/common/semanticTokens.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.SemanticTokensBuilder = exports.SemanticTokensFeature = void 0;
      var vscode_languageserver_protocol_1 = require_main3();
      var SemanticTokensFeature = (Base) => {
        return class extends Base {
          get semanticTokens() {
            return {
              on: (handler) => {
                const type = vscode_languageserver_protocol_1.SemanticTokensRequest.type;
                this.connection.onRequest(type, (params, cancel) => {
                  return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
                });
              },
              onDelta: (handler) => {
                const type = vscode_languageserver_protocol_1.SemanticTokensDeltaRequest.type;
                this.connection.onRequest(type, (params, cancel) => {
                  return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
                });
              },
              onRange: (handler) => {
                const type = vscode_languageserver_protocol_1.SemanticTokensRangeRequest.type;
                this.connection.onRequest(type, (params, cancel) => {
                  return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
                });
              }
            };
          }
        };
      };
      exports.SemanticTokensFeature = SemanticTokensFeature;
      var SemanticTokensBuilder = class {
        constructor() {
          this._prevData = void 0;
          this.initialize();
        }
        initialize() {
          this._id = Date.now();
          this._prevLine = 0;
          this._prevChar = 0;
          this._data = [];
          this._dataLen = 0;
        }
        push(line, char, length, tokenType, tokenModifiers) {
          let pushLine = line;
          let pushChar = char;
          if (this._dataLen > 0) {
            pushLine -= this._prevLine;
            if (pushLine === 0) {
              pushChar -= this._prevChar;
            }
          }
          this._data[this._dataLen++] = pushLine;
          this._data[this._dataLen++] = pushChar;
          this._data[this._dataLen++] = length;
          this._data[this._dataLen++] = tokenType;
          this._data[this._dataLen++] = tokenModifiers;
          this._prevLine = line;
          this._prevChar = char;
        }
        get id() {
          return this._id.toString();
        }
        previousResult(id) {
          if (this.id === id) {
            this._prevData = this._data;
          }
          this.initialize();
        }
        build() {
          this._prevData = void 0;
          return {
            resultId: this.id,
            data: this._data
          };
        }
        canBuildEdits() {
          return this._prevData !== void 0;
        }
        buildEdits() {
          if (this._prevData !== void 0) {
            const prevDataLength = this._prevData.length;
            const dataLength = this._data.length;
            let startIndex = 0;
            while (startIndex < dataLength && startIndex < prevDataLength && this._prevData[startIndex] === this._data[startIndex]) {
              startIndex++;
            }
            if (startIndex < dataLength && startIndex < prevDataLength) {
              let endIndex = 0;
              while (endIndex < dataLength && endIndex < prevDataLength && this._prevData[prevDataLength - 1 - endIndex] === this._data[dataLength - 1 - endIndex]) {
                endIndex++;
              }
              const newData = this._data.slice(startIndex, dataLength - endIndex);
              const result = {
                resultId: this.id,
                edits: [
                  { start: startIndex, deleteCount: prevDataLength - endIndex - startIndex, data: newData }
                ]
              };
              return result;
            } else if (startIndex < dataLength) {
              return { resultId: this.id, edits: [
                { start: startIndex, deleteCount: 0, data: this._data.slice(startIndex) }
              ] };
            } else if (startIndex < prevDataLength) {
              return { resultId: this.id, edits: [
                { start: startIndex, deleteCount: prevDataLength - startIndex }
              ] };
            } else {
              return { resultId: this.id, edits: [] };
            }
          } else {
            return this.build();
          }
        }
      };
      exports.SemanticTokensBuilder = SemanticTokensBuilder;
    }
  });

  // node_modules/vscode-languageserver/lib/common/utils/is.js
  var require_is3 = __commonJS({
    "node_modules/vscode-languageserver/lib/common/utils/is.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.thenable = exports.typedArray = exports.stringArray = exports.array = exports.func = exports.error = exports.number = exports.string = exports.boolean = void 0;
      function boolean(value) {
        return value === true || value === false;
      }
      exports.boolean = boolean;
      function string(value) {
        return typeof value === "string" || value instanceof String;
      }
      exports.string = string;
      function number(value) {
        return typeof value === "number" || value instanceof Number;
      }
      exports.number = number;
      function error(value) {
        return value instanceof Error;
      }
      exports.error = error;
      function func(value) {
        return typeof value === "function";
      }
      exports.func = func;
      function array(value) {
        return Array.isArray(value);
      }
      exports.array = array;
      function stringArray(value) {
        return array(value) && value.every((elem) => string(elem));
      }
      exports.stringArray = stringArray;
      function typedArray(value, check) {
        return Array.isArray(value) && value.every(check);
      }
      exports.typedArray = typedArray;
      function thenable(value) {
        return value && func(value.then);
      }
      exports.thenable = thenable;
    }
  });

  // node_modules/vscode-languageserver/lib/common/utils/uuid.js
  var require_uuid = __commonJS({
    "node_modules/vscode-languageserver/lib/common/utils/uuid.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.generateUuid = exports.parse = exports.isUUID = exports.v4 = exports.empty = void 0;
      var ValueUUID = class {
        constructor(_value) {
          this._value = _value;
        }
        asHex() {
          return this._value;
        }
        equals(other) {
          return this.asHex() === other.asHex();
        }
      };
      var V4UUID = class extends ValueUUID {
        constructor() {
          super([
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            "-",
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            "-",
            "4",
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            "-",
            V4UUID._oneOf(V4UUID._timeHighBits),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            "-",
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex(),
            V4UUID._randomHex()
          ].join(""));
        }
        static _oneOf(array) {
          return array[Math.floor(array.length * Math.random())];
        }
        static _randomHex() {
          return V4UUID._oneOf(V4UUID._chars);
        }
      };
      V4UUID._chars = ["0", "1", "2", "3", "4", "5", "6", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
      V4UUID._timeHighBits = ["8", "9", "a", "b"];
      exports.empty = new ValueUUID("00000000-0000-0000-0000-000000000000");
      function v4() {
        return new V4UUID();
      }
      exports.v4 = v4;
      var _UUIDPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
      function isUUID(value) {
        return _UUIDPattern.test(value);
      }
      exports.isUUID = isUUID;
      function parse(value) {
        if (!isUUID(value)) {
          throw new Error("invalid uuid");
        }
        return new ValueUUID(value);
      }
      exports.parse = parse;
      function generateUuid() {
        return v4().asHex();
      }
      exports.generateUuid = generateUuid;
    }
  });

  // node_modules/vscode-languageserver/lib/common/progress.js
  var require_progress = __commonJS({
    "node_modules/vscode-languageserver/lib/common/progress.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.attachPartialResult = exports.ProgressFeature = exports.attachWorkDone = void 0;
      var vscode_languageserver_protocol_1 = require_main3();
      var uuid_1 = require_uuid();
      var WorkDoneProgressReporterImpl = class {
        constructor(_connection, _token) {
          this._connection = _connection;
          this._token = _token;
          WorkDoneProgressReporterImpl.Instances.set(this._token, this);
        }
        begin(title, percentage, message, cancellable) {
          let param = {
            kind: "begin",
            title,
            percentage,
            message,
            cancellable
          };
          this._connection.sendProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, param);
        }
        report(arg0, arg1) {
          let param = {
            kind: "report"
          };
          if (typeof arg0 === "number") {
            param.percentage = arg0;
            if (arg1 !== void 0) {
              param.message = arg1;
            }
          } else {
            param.message = arg0;
          }
          this._connection.sendProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, param);
        }
        done() {
          WorkDoneProgressReporterImpl.Instances.delete(this._token);
          this._connection.sendProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, { kind: "end" });
        }
      };
      WorkDoneProgressReporterImpl.Instances = new Map();
      var WorkDoneProgressServerReporterImpl = class extends WorkDoneProgressReporterImpl {
        constructor(connection, token) {
          super(connection, token);
          this._source = new vscode_languageserver_protocol_1.CancellationTokenSource();
        }
        get token() {
          return this._source.token;
        }
        done() {
          this._source.dispose();
          super.done();
        }
        cancel() {
          this._source.cancel();
        }
      };
      var NullProgressReporter = class {
        constructor() {
        }
        begin() {
        }
        report() {
        }
        done() {
        }
      };
      var NullProgressServerReporter = class extends NullProgressReporter {
        constructor() {
          super();
          this._source = new vscode_languageserver_protocol_1.CancellationTokenSource();
        }
        get token() {
          return this._source.token;
        }
        done() {
          this._source.dispose();
        }
        cancel() {
          this._source.cancel();
        }
      };
      function attachWorkDone(connection, params) {
        if (params === void 0 || params.workDoneToken === void 0) {
          return new NullProgressReporter();
        }
        const token = params.workDoneToken;
        delete params.workDoneToken;
        return new WorkDoneProgressReporterImpl(connection, token);
      }
      exports.attachWorkDone = attachWorkDone;
      var ProgressFeature = (Base) => {
        return class extends Base {
          constructor() {
            super();
            this._progressSupported = false;
          }
          initialize(capabilities) {
            var _a;
            if (((_a = capabilities === null || capabilities === void 0 ? void 0 : capabilities.window) === null || _a === void 0 ? void 0 : _a.workDoneProgress) === true) {
              this._progressSupported = true;
              this.connection.onNotification(vscode_languageserver_protocol_1.WorkDoneProgressCancelNotification.type, (params) => {
                let progress = WorkDoneProgressReporterImpl.Instances.get(params.token);
                if (progress instanceof WorkDoneProgressServerReporterImpl || progress instanceof NullProgressServerReporter) {
                  progress.cancel();
                }
              });
            }
          }
          attachWorkDoneProgress(token) {
            if (token === void 0) {
              return new NullProgressReporter();
            } else {
              return new WorkDoneProgressReporterImpl(this.connection, token);
            }
          }
          createWorkDoneProgress() {
            if (this._progressSupported) {
              const token = uuid_1.generateUuid();
              return this.connection.sendRequest(vscode_languageserver_protocol_1.WorkDoneProgressCreateRequest.type, { token }).then(() => {
                const result = new WorkDoneProgressServerReporterImpl(this.connection, token);
                return result;
              });
            } else {
              return Promise.resolve(new NullProgressServerReporter());
            }
          }
        };
      };
      exports.ProgressFeature = ProgressFeature;
      var ResultProgress;
      (function(ResultProgress2) {
        ResultProgress2.type = new vscode_languageserver_protocol_1.ProgressType();
      })(ResultProgress || (ResultProgress = {}));
      var ResultProgressReporterImpl = class {
        constructor(_connection, _token) {
          this._connection = _connection;
          this._token = _token;
        }
        report(data) {
          this._connection.sendProgress(ResultProgress.type, this._token, data);
        }
      };
      function attachPartialResult(connection, params) {
        if (params === void 0 || params.partialResultToken === void 0) {
          return void 0;
        }
        const token = params.partialResultToken;
        delete params.partialResultToken;
        return new ResultProgressReporterImpl(connection, token);
      }
      exports.attachPartialResult = attachPartialResult;
    }
  });

  // node_modules/vscode-languageserver/lib/common/configuration.js
  var require_configuration = __commonJS({
    "node_modules/vscode-languageserver/lib/common/configuration.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ConfigurationFeature = void 0;
      var vscode_languageserver_protocol_1 = require_main3();
      var Is = require_is3();
      var ConfigurationFeature = (Base) => {
        return class extends Base {
          getConfiguration(arg) {
            if (!arg) {
              return this._getConfiguration({});
            } else if (Is.string(arg)) {
              return this._getConfiguration({ section: arg });
            } else {
              return this._getConfiguration(arg);
            }
          }
          _getConfiguration(arg) {
            let params = {
              items: Array.isArray(arg) ? arg : [arg]
            };
            return this.connection.sendRequest(vscode_languageserver_protocol_1.ConfigurationRequest.type, params).then((result) => {
              return Array.isArray(arg) ? result : result[0];
            });
          }
        };
      };
      exports.ConfigurationFeature = ConfigurationFeature;
    }
  });

  // node_modules/vscode-languageserver/lib/common/workspaceFolders.js
  var require_workspaceFolders = __commonJS({
    "node_modules/vscode-languageserver/lib/common/workspaceFolders.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.WorkspaceFoldersFeature = void 0;
      var vscode_languageserver_protocol_1 = require_main3();
      var WorkspaceFoldersFeature = (Base) => {
        return class extends Base {
          initialize(capabilities) {
            let workspaceCapabilities = capabilities.workspace;
            if (workspaceCapabilities && workspaceCapabilities.workspaceFolders) {
              this._onDidChangeWorkspaceFolders = new vscode_languageserver_protocol_1.Emitter();
              this.connection.onNotification(vscode_languageserver_protocol_1.DidChangeWorkspaceFoldersNotification.type, (params) => {
                this._onDidChangeWorkspaceFolders.fire(params.event);
              });
            }
          }
          getWorkspaceFolders() {
            return this.connection.sendRequest(vscode_languageserver_protocol_1.WorkspaceFoldersRequest.type);
          }
          get onDidChangeWorkspaceFolders() {
            if (!this._onDidChangeWorkspaceFolders) {
              throw new Error("Client doesn't support sending workspace folder change events.");
            }
            if (!this._unregistration) {
              this._unregistration = this.connection.client.register(vscode_languageserver_protocol_1.DidChangeWorkspaceFoldersNotification.type);
            }
            return this._onDidChangeWorkspaceFolders.event;
          }
        };
      };
      exports.WorkspaceFoldersFeature = WorkspaceFoldersFeature;
    }
  });

  // node_modules/vscode-languageserver/lib/common/callHierarchy.js
  var require_callHierarchy = __commonJS({
    "node_modules/vscode-languageserver/lib/common/callHierarchy.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.CallHierarchyFeature = void 0;
      var vscode_languageserver_protocol_1 = require_main3();
      var CallHierarchyFeature = (Base) => {
        return class extends Base {
          get callHierarchy() {
            return {
              onPrepare: (handler) => {
                this.connection.onRequest(vscode_languageserver_protocol_1.CallHierarchyPrepareRequest.type, (params, cancel) => {
                  return handler(params, cancel, this.attachWorkDoneProgress(params), void 0);
                });
              },
              onIncomingCalls: (handler) => {
                const type = vscode_languageserver_protocol_1.CallHierarchyIncomingCallsRequest.type;
                this.connection.onRequest(type, (params, cancel) => {
                  return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
                });
              },
              onOutgoingCalls: (handler) => {
                const type = vscode_languageserver_protocol_1.CallHierarchyOutgoingCallsRequest.type;
                this.connection.onRequest(type, (params, cancel) => {
                  return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
                });
              }
            };
          }
        };
      };
      exports.CallHierarchyFeature = CallHierarchyFeature;
    }
  });

  // node_modules/vscode-languageserver/lib/common/showDocument.js
  var require_showDocument = __commonJS({
    "node_modules/vscode-languageserver/lib/common/showDocument.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ShowDocumentFeature = void 0;
      var vscode_languageserver_protocol_1 = require_main3();
      var ShowDocumentFeature = (Base) => {
        return class extends Base {
          showDocument(params) {
            return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowDocumentRequest.type, params);
          }
        };
      };
      exports.ShowDocumentFeature = ShowDocumentFeature;
    }
  });

  // node_modules/vscode-languageserver/lib/common/fileOperations.js
  var require_fileOperations = __commonJS({
    "node_modules/vscode-languageserver/lib/common/fileOperations.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.FileOperationsFeature = void 0;
      var vscode_languageserver_protocol_1 = require_main3();
      var FileOperationsFeature = (Base) => {
        return class extends Base {
          onDidCreateFiles(handler) {
            this.connection.onNotification(vscode_languageserver_protocol_1.DidCreateFilesNotification.type, (params) => {
              handler(params);
            });
          }
          onDidRenameFiles(handler) {
            this.connection.onNotification(vscode_languageserver_protocol_1.DidRenameFilesNotification.type, (params) => {
              handler(params);
            });
          }
          onDidDeleteFiles(handler) {
            this.connection.onNotification(vscode_languageserver_protocol_1.DidDeleteFilesNotification.type, (params) => {
              handler(params);
            });
          }
          onWillCreateFiles(handler) {
            return this.connection.onRequest(vscode_languageserver_protocol_1.WillCreateFilesRequest.type, (params, cancel) => {
              return handler(params, cancel);
            });
          }
          onWillRenameFiles(handler) {
            return this.connection.onRequest(vscode_languageserver_protocol_1.WillRenameFilesRequest.type, (params, cancel) => {
              return handler(params, cancel);
            });
          }
          onWillDeleteFiles(handler) {
            return this.connection.onRequest(vscode_languageserver_protocol_1.WillDeleteFilesRequest.type, (params, cancel) => {
              return handler(params, cancel);
            });
          }
        };
      };
      exports.FileOperationsFeature = FileOperationsFeature;
    }
  });

  // node_modules/vscode-languageserver/lib/common/linkedEditingRange.js
  var require_linkedEditingRange = __commonJS({
    "node_modules/vscode-languageserver/lib/common/linkedEditingRange.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.LinkedEditingRangeFeature = void 0;
      var vscode_languageserver_protocol_1 = require_main3();
      var LinkedEditingRangeFeature = (Base) => {
        return class extends Base {
          onLinkedEditingRange(handler) {
            this.connection.onRequest(vscode_languageserver_protocol_1.LinkedEditingRangeRequest.type, (params, cancel) => {
              return handler(params, cancel, this.attachWorkDoneProgress(params), void 0);
            });
          }
        };
      };
      exports.LinkedEditingRangeFeature = LinkedEditingRangeFeature;
    }
  });

  // node_modules/vscode-languageserver/lib/common/moniker.js
  var require_moniker = __commonJS({
    "node_modules/vscode-languageserver/lib/common/moniker.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.MonikerFeature = void 0;
      var vscode_languageserver_protocol_1 = require_main3();
      var MonikerFeature = (Base) => {
        return class extends Base {
          get moniker() {
            return {
              on: (handler) => {
                const type = vscode_languageserver_protocol_1.MonikerRequest.type;
                this.connection.onRequest(type, (params, cancel) => {
                  return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
                });
              }
            };
          }
        };
      };
      exports.MonikerFeature = MonikerFeature;
    }
  });

  // node_modules/vscode-languageserver/lib/common/server.js
  var require_server = __commonJS({
    "node_modules/vscode-languageserver/lib/common/server.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createConnection = exports.combineFeatures = exports.combineLanguagesFeatures = exports.combineWorkspaceFeatures = exports.combineWindowFeatures = exports.combineClientFeatures = exports.combineTracerFeatures = exports.combineTelemetryFeatures = exports.combineConsoleFeatures = exports._LanguagesImpl = exports.BulkUnregistration = exports.BulkRegistration = exports.ErrorMessageTracker = exports.TextDocuments = void 0;
      var vscode_languageserver_protocol_1 = require_main3();
      var Is = require_is3();
      var UUID = require_uuid();
      var progress_1 = require_progress();
      var configuration_1 = require_configuration();
      var workspaceFolders_1 = require_workspaceFolders();
      var callHierarchy_1 = require_callHierarchy();
      var semanticTokens_1 = require_semanticTokens();
      var showDocument_1 = require_showDocument();
      var fileOperations_1 = require_fileOperations();
      var linkedEditingRange_1 = require_linkedEditingRange();
      var moniker_1 = require_moniker();
      function null2Undefined(value) {
        if (value === null) {
          return void 0;
        }
        return value;
      }
      var TextDocuments2 = class {
        constructor(configuration) {
          this._documents = Object.create(null);
          this._configuration = configuration;
          this._onDidChangeContent = new vscode_languageserver_protocol_1.Emitter();
          this._onDidOpen = new vscode_languageserver_protocol_1.Emitter();
          this._onDidClose = new vscode_languageserver_protocol_1.Emitter();
          this._onDidSave = new vscode_languageserver_protocol_1.Emitter();
          this._onWillSave = new vscode_languageserver_protocol_1.Emitter();
        }
        get onDidChangeContent() {
          return this._onDidChangeContent.event;
        }
        get onDidOpen() {
          return this._onDidOpen.event;
        }
        get onWillSave() {
          return this._onWillSave.event;
        }
        onWillSaveWaitUntil(handler) {
          this._willSaveWaitUntil = handler;
        }
        get onDidSave() {
          return this._onDidSave.event;
        }
        get onDidClose() {
          return this._onDidClose.event;
        }
        get(uri) {
          return this._documents[uri];
        }
        all() {
          return Object.keys(this._documents).map((key) => this._documents[key]);
        }
        keys() {
          return Object.keys(this._documents);
        }
        listen(connection) {
          connection.__textDocumentSync = vscode_languageserver_protocol_1.TextDocumentSyncKind.Full;
          connection.onDidOpenTextDocument((event) => {
            let td = event.textDocument;
            let document2 = this._configuration.create(td.uri, td.languageId, td.version, td.text);
            this._documents[td.uri] = document2;
            let toFire = Object.freeze({ document: document2 });
            this._onDidOpen.fire(toFire);
            this._onDidChangeContent.fire(toFire);
          });
          connection.onDidChangeTextDocument((event) => {
            let td = event.textDocument;
            let changes = event.contentChanges;
            if (changes.length === 0) {
              return;
            }
            let document2 = this._documents[td.uri];
            const { version } = td;
            if (version === null || version === void 0) {
              throw new Error(`Received document change event for ${td.uri} without valid version identifier`);
            }
            document2 = this._configuration.update(document2, changes, version);
            this._documents[td.uri] = document2;
            this._onDidChangeContent.fire(Object.freeze({ document: document2 }));
          });
          connection.onDidCloseTextDocument((event) => {
            let document2 = this._documents[event.textDocument.uri];
            if (document2) {
              delete this._documents[event.textDocument.uri];
              this._onDidClose.fire(Object.freeze({ document: document2 }));
            }
          });
          connection.onWillSaveTextDocument((event) => {
            let document2 = this._documents[event.textDocument.uri];
            if (document2) {
              this._onWillSave.fire(Object.freeze({ document: document2, reason: event.reason }));
            }
          });
          connection.onWillSaveTextDocumentWaitUntil((event, token) => {
            let document2 = this._documents[event.textDocument.uri];
            if (document2 && this._willSaveWaitUntil) {
              return this._willSaveWaitUntil(Object.freeze({ document: document2, reason: event.reason }), token);
            } else {
              return [];
            }
          });
          connection.onDidSaveTextDocument((event) => {
            let document2 = this._documents[event.textDocument.uri];
            if (document2) {
              this._onDidSave.fire(Object.freeze({ document: document2 }));
            }
          });
        }
      };
      exports.TextDocuments = TextDocuments2;
      var ErrorMessageTracker = class {
        constructor() {
          this._messages = Object.create(null);
        }
        add(message) {
          let count = this._messages[message];
          if (!count) {
            count = 0;
          }
          count++;
          this._messages[message] = count;
        }
        sendErrors(connection) {
          Object.keys(this._messages).forEach((message) => {
            connection.window.showErrorMessage(message);
          });
        }
      };
      exports.ErrorMessageTracker = ErrorMessageTracker;
      var RemoteConsoleImpl = class {
        constructor() {
        }
        rawAttach(connection) {
          this._rawConnection = connection;
        }
        attach(connection) {
          this._connection = connection;
        }
        get connection() {
          if (!this._connection) {
            throw new Error("Remote is not attached to a connection yet.");
          }
          return this._connection;
        }
        fillServerCapabilities(_capabilities) {
        }
        initialize(_capabilities) {
        }
        error(message) {
          this.send(vscode_languageserver_protocol_1.MessageType.Error, message);
        }
        warn(message) {
          this.send(vscode_languageserver_protocol_1.MessageType.Warning, message);
        }
        info(message) {
          this.send(vscode_languageserver_protocol_1.MessageType.Info, message);
        }
        log(message) {
          this.send(vscode_languageserver_protocol_1.MessageType.Log, message);
        }
        send(type, message) {
          if (this._rawConnection) {
            this._rawConnection.sendNotification(vscode_languageserver_protocol_1.LogMessageNotification.type, { type, message });
          }
        }
      };
      var _RemoteWindowImpl = class {
        constructor() {
        }
        attach(connection) {
          this._connection = connection;
        }
        get connection() {
          if (!this._connection) {
            throw new Error("Remote is not attached to a connection yet.");
          }
          return this._connection;
        }
        initialize(_capabilities) {
        }
        fillServerCapabilities(_capabilities) {
        }
        showErrorMessage(message, ...actions) {
          let params = { type: vscode_languageserver_protocol_1.MessageType.Error, message, actions };
          return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
        }
        showWarningMessage(message, ...actions) {
          let params = { type: vscode_languageserver_protocol_1.MessageType.Warning, message, actions };
          return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
        }
        showInformationMessage(message, ...actions) {
          let params = { type: vscode_languageserver_protocol_1.MessageType.Info, message, actions };
          return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
        }
      };
      var RemoteWindowImpl = showDocument_1.ShowDocumentFeature(progress_1.ProgressFeature(_RemoteWindowImpl));
      var BulkRegistration;
      (function(BulkRegistration2) {
        function create() {
          return new BulkRegistrationImpl();
        }
        BulkRegistration2.create = create;
      })(BulkRegistration = exports.BulkRegistration || (exports.BulkRegistration = {}));
      var BulkRegistrationImpl = class {
        constructor() {
          this._registrations = [];
          this._registered = new Set();
        }
        add(type, registerOptions) {
          const method = Is.string(type) ? type : type.method;
          if (this._registered.has(method)) {
            throw new Error(`${method} is already added to this registration`);
          }
          const id = UUID.generateUuid();
          this._registrations.push({
            id,
            method,
            registerOptions: registerOptions || {}
          });
          this._registered.add(method);
        }
        asRegistrationParams() {
          return {
            registrations: this._registrations
          };
        }
      };
      var BulkUnregistration;
      (function(BulkUnregistration2) {
        function create() {
          return new BulkUnregistrationImpl(void 0, []);
        }
        BulkUnregistration2.create = create;
      })(BulkUnregistration = exports.BulkUnregistration || (exports.BulkUnregistration = {}));
      var BulkUnregistrationImpl = class {
        constructor(_connection, unregistrations) {
          this._connection = _connection;
          this._unregistrations = new Map();
          unregistrations.forEach((unregistration) => {
            this._unregistrations.set(unregistration.method, unregistration);
          });
        }
        get isAttached() {
          return !!this._connection;
        }
        attach(connection) {
          this._connection = connection;
        }
        add(unregistration) {
          this._unregistrations.set(unregistration.method, unregistration);
        }
        dispose() {
          let unregistrations = [];
          for (let unregistration of this._unregistrations.values()) {
            unregistrations.push(unregistration);
          }
          let params = {
            unregisterations: unregistrations
          };
          this._connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).then(void 0, (_error) => {
            this._connection.console.info(`Bulk unregistration failed.`);
          });
        }
        disposeSingle(arg) {
          const method = Is.string(arg) ? arg : arg.method;
          const unregistration = this._unregistrations.get(method);
          if (!unregistration) {
            return false;
          }
          let params = {
            unregisterations: [unregistration]
          };
          this._connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).then(() => {
            this._unregistrations.delete(method);
          }, (_error) => {
            this._connection.console.info(`Un-registering request handler for ${unregistration.id} failed.`);
          });
          return true;
        }
      };
      var RemoteClientImpl = class {
        attach(connection) {
          this._connection = connection;
        }
        get connection() {
          if (!this._connection) {
            throw new Error("Remote is not attached to a connection yet.");
          }
          return this._connection;
        }
        initialize(_capabilities) {
        }
        fillServerCapabilities(_capabilities) {
        }
        register(typeOrRegistrations, registerOptionsOrType, registerOptions) {
          if (typeOrRegistrations instanceof BulkRegistrationImpl) {
            return this.registerMany(typeOrRegistrations);
          } else if (typeOrRegistrations instanceof BulkUnregistrationImpl) {
            return this.registerSingle1(typeOrRegistrations, registerOptionsOrType, registerOptions);
          } else {
            return this.registerSingle2(typeOrRegistrations, registerOptionsOrType);
          }
        }
        registerSingle1(unregistration, type, registerOptions) {
          const method = Is.string(type) ? type : type.method;
          const id = UUID.generateUuid();
          let params = {
            registrations: [{ id, method, registerOptions: registerOptions || {} }]
          };
          if (!unregistration.isAttached) {
            unregistration.attach(this.connection);
          }
          return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then((_result) => {
            unregistration.add({ id, method });
            return unregistration;
          }, (_error) => {
            this.connection.console.info(`Registering request handler for ${method} failed.`);
            return Promise.reject(_error);
          });
        }
        registerSingle2(type, registerOptions) {
          const method = Is.string(type) ? type : type.method;
          const id = UUID.generateUuid();
          let params = {
            registrations: [{ id, method, registerOptions: registerOptions || {} }]
          };
          return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then((_result) => {
            return vscode_languageserver_protocol_1.Disposable.create(() => {
              this.unregisterSingle(id, method);
            });
          }, (_error) => {
            this.connection.console.info(`Registering request handler for ${method} failed.`);
            return Promise.reject(_error);
          });
        }
        unregisterSingle(id, method) {
          let params = {
            unregisterations: [{ id, method }]
          };
          return this.connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).then(void 0, (_error) => {
            this.connection.console.info(`Un-registering request handler for ${id} failed.`);
          });
        }
        registerMany(registrations) {
          let params = registrations.asRegistrationParams();
          return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then(() => {
            return new BulkUnregistrationImpl(this._connection, params.registrations.map((registration) => {
              return { id: registration.id, method: registration.method };
            }));
          }, (_error) => {
            this.connection.console.info(`Bulk registration failed.`);
            return Promise.reject(_error);
          });
        }
      };
      var _RemoteWorkspaceImpl = class {
        constructor() {
        }
        attach(connection) {
          this._connection = connection;
        }
        get connection() {
          if (!this._connection) {
            throw new Error("Remote is not attached to a connection yet.");
          }
          return this._connection;
        }
        initialize(_capabilities) {
        }
        fillServerCapabilities(_capabilities) {
        }
        applyEdit(paramOrEdit) {
          function isApplyWorkspaceEditParams(value) {
            return value && !!value.edit;
          }
          let params = isApplyWorkspaceEditParams(paramOrEdit) ? paramOrEdit : { edit: paramOrEdit };
          return this.connection.sendRequest(vscode_languageserver_protocol_1.ApplyWorkspaceEditRequest.type, params);
        }
      };
      var RemoteWorkspaceImpl = fileOperations_1.FileOperationsFeature(workspaceFolders_1.WorkspaceFoldersFeature(configuration_1.ConfigurationFeature(_RemoteWorkspaceImpl)));
      var TracerImpl = class {
        constructor() {
          this._trace = vscode_languageserver_protocol_1.Trace.Off;
        }
        attach(connection) {
          this._connection = connection;
        }
        get connection() {
          if (!this._connection) {
            throw new Error("Remote is not attached to a connection yet.");
          }
          return this._connection;
        }
        initialize(_capabilities) {
        }
        fillServerCapabilities(_capabilities) {
        }
        set trace(value) {
          this._trace = value;
        }
        log(message, verbose) {
          if (this._trace === vscode_languageserver_protocol_1.Trace.Off) {
            return;
          }
          this.connection.sendNotification(vscode_languageserver_protocol_1.LogTraceNotification.type, {
            message,
            verbose: this._trace === vscode_languageserver_protocol_1.Trace.Verbose ? verbose : void 0
          });
        }
      };
      var TelemetryImpl = class {
        constructor() {
        }
        attach(connection) {
          this._connection = connection;
        }
        get connection() {
          if (!this._connection) {
            throw new Error("Remote is not attached to a connection yet.");
          }
          return this._connection;
        }
        initialize(_capabilities) {
        }
        fillServerCapabilities(_capabilities) {
        }
        logEvent(data) {
          this.connection.sendNotification(vscode_languageserver_protocol_1.TelemetryEventNotification.type, data);
        }
      };
      var _LanguagesImpl = class {
        constructor() {
        }
        attach(connection) {
          this._connection = connection;
        }
        get connection() {
          if (!this._connection) {
            throw new Error("Remote is not attached to a connection yet.");
          }
          return this._connection;
        }
        initialize(_capabilities) {
        }
        fillServerCapabilities(_capabilities) {
        }
        attachWorkDoneProgress(params) {
          return progress_1.attachWorkDone(this.connection, params);
        }
        attachPartialResultProgress(_type, params) {
          return progress_1.attachPartialResult(this.connection, params);
        }
      };
      exports._LanguagesImpl = _LanguagesImpl;
      var LanguagesImpl = moniker_1.MonikerFeature(linkedEditingRange_1.LinkedEditingRangeFeature(semanticTokens_1.SemanticTokensFeature(callHierarchy_1.CallHierarchyFeature(_LanguagesImpl))));
      function combineConsoleFeatures(one, two) {
        return function(Base) {
          return two(one(Base));
        };
      }
      exports.combineConsoleFeatures = combineConsoleFeatures;
      function combineTelemetryFeatures(one, two) {
        return function(Base) {
          return two(one(Base));
        };
      }
      exports.combineTelemetryFeatures = combineTelemetryFeatures;
      function combineTracerFeatures(one, two) {
        return function(Base) {
          return two(one(Base));
        };
      }
      exports.combineTracerFeatures = combineTracerFeatures;
      function combineClientFeatures(one, two) {
        return function(Base) {
          return two(one(Base));
        };
      }
      exports.combineClientFeatures = combineClientFeatures;
      function combineWindowFeatures(one, two) {
        return function(Base) {
          return two(one(Base));
        };
      }
      exports.combineWindowFeatures = combineWindowFeatures;
      function combineWorkspaceFeatures(one, two) {
        return function(Base) {
          return two(one(Base));
        };
      }
      exports.combineWorkspaceFeatures = combineWorkspaceFeatures;
      function combineLanguagesFeatures(one, two) {
        return function(Base) {
          return two(one(Base));
        };
      }
      exports.combineLanguagesFeatures = combineLanguagesFeatures;
      function combineFeatures(one, two) {
        function combine(one2, two2, func) {
          if (one2 && two2) {
            return func(one2, two2);
          } else if (one2) {
            return one2;
          } else {
            return two2;
          }
        }
        let result = {
          __brand: "features",
          console: combine(one.console, two.console, combineConsoleFeatures),
          tracer: combine(one.tracer, two.tracer, combineTracerFeatures),
          telemetry: combine(one.telemetry, two.telemetry, combineTelemetryFeatures),
          client: combine(one.client, two.client, combineClientFeatures),
          window: combine(one.window, two.window, combineWindowFeatures),
          workspace: combine(one.workspace, two.workspace, combineWorkspaceFeatures)
        };
        return result;
      }
      exports.combineFeatures = combineFeatures;
      function createConnection(connectionFactory, watchDog, factories) {
        const logger = factories && factories.console ? new (factories.console(RemoteConsoleImpl))() : new RemoteConsoleImpl();
        const connection = connectionFactory(logger);
        logger.rawAttach(connection);
        const tracer = factories && factories.tracer ? new (factories.tracer(TracerImpl))() : new TracerImpl();
        const telemetry = factories && factories.telemetry ? new (factories.telemetry(TelemetryImpl))() : new TelemetryImpl();
        const client = factories && factories.client ? new (factories.client(RemoteClientImpl))() : new RemoteClientImpl();
        const remoteWindow = factories && factories.window ? new (factories.window(RemoteWindowImpl))() : new RemoteWindowImpl();
        const workspace = factories && factories.workspace ? new (factories.workspace(RemoteWorkspaceImpl))() : new RemoteWorkspaceImpl();
        const languages = factories && factories.languages ? new (factories.languages(LanguagesImpl))() : new LanguagesImpl();
        const allRemotes = [logger, tracer, telemetry, client, remoteWindow, workspace, languages];
        function asPromise(value) {
          if (value instanceof Promise) {
            return value;
          } else if (Is.thenable(value)) {
            return new Promise((resolve, reject) => {
              value.then((resolved) => resolve(resolved), (error) => reject(error));
            });
          } else {
            return Promise.resolve(value);
          }
        }
        let shutdownHandler = void 0;
        let initializeHandler = void 0;
        let exitHandler = void 0;
        let protocolConnection = {
          listen: () => connection.listen(),
          sendRequest: (type, ...params) => connection.sendRequest(Is.string(type) ? type : type.method, ...params),
          onRequest: (type, handler) => connection.onRequest(type, handler),
          sendNotification: (type, param) => {
            const method = Is.string(type) ? type : type.method;
            if (arguments.length === 1) {
              connection.sendNotification(method);
            } else {
              connection.sendNotification(method, param);
            }
          },
          onNotification: (type, handler) => connection.onNotification(type, handler),
          onProgress: connection.onProgress,
          sendProgress: connection.sendProgress,
          onInitialize: (handler) => initializeHandler = handler,
          onInitialized: (handler) => connection.onNotification(vscode_languageserver_protocol_1.InitializedNotification.type, handler),
          onShutdown: (handler) => shutdownHandler = handler,
          onExit: (handler) => exitHandler = handler,
          get console() {
            return logger;
          },
          get telemetry() {
            return telemetry;
          },
          get tracer() {
            return tracer;
          },
          get client() {
            return client;
          },
          get window() {
            return remoteWindow;
          },
          get workspace() {
            return workspace;
          },
          get languages() {
            return languages;
          },
          onDidChangeConfiguration: (handler) => connection.onNotification(vscode_languageserver_protocol_1.DidChangeConfigurationNotification.type, handler),
          onDidChangeWatchedFiles: (handler) => connection.onNotification(vscode_languageserver_protocol_1.DidChangeWatchedFilesNotification.type, handler),
          __textDocumentSync: void 0,
          onDidOpenTextDocument: (handler) => connection.onNotification(vscode_languageserver_protocol_1.DidOpenTextDocumentNotification.type, handler),
          onDidChangeTextDocument: (handler) => connection.onNotification(vscode_languageserver_protocol_1.DidChangeTextDocumentNotification.type, handler),
          onDidCloseTextDocument: (handler) => connection.onNotification(vscode_languageserver_protocol_1.DidCloseTextDocumentNotification.type, handler),
          onWillSaveTextDocument: (handler) => connection.onNotification(vscode_languageserver_protocol_1.WillSaveTextDocumentNotification.type, handler),
          onWillSaveTextDocumentWaitUntil: (handler) => connection.onRequest(vscode_languageserver_protocol_1.WillSaveTextDocumentWaitUntilRequest.type, handler),
          onDidSaveTextDocument: (handler) => connection.onNotification(vscode_languageserver_protocol_1.DidSaveTextDocumentNotification.type, handler),
          sendDiagnostics: (params) => connection.sendNotification(vscode_languageserver_protocol_1.PublishDiagnosticsNotification.type, params),
          onHover: (handler) => connection.onRequest(vscode_languageserver_protocol_1.HoverRequest.type, (params, cancel) => {
            return handler(params, cancel, progress_1.attachWorkDone(connection, params), void 0);
          }),
          onCompletion: (handler) => connection.onRequest(vscode_languageserver_protocol_1.CompletionRequest.type, (params, cancel) => {
            return handler(params, cancel, progress_1.attachWorkDone(connection, params), progress_1.attachPartialResult(connection, params));
          }),
          onCompletionResolve: (handler) => connection.onRequest(vscode_languageserver_protocol_1.CompletionResolveRequest.type, handler),
          onSignatureHelp: (handler) => connection.onRequest(vscode_languageserver_protocol_1.SignatureHelpRequest.type, (params, cancel) => {
            return handler(params, cancel, progress_1.attachWorkDone(connection, params), void 0);
          }),
          onDeclaration: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DeclarationRequest.type, (params, cancel) => {
            return handler(params, cancel, progress_1.attachWorkDone(connection, params), progress_1.attachPartialResult(connection, params));
          }),
          onDefinition: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DefinitionRequest.type, (params, cancel) => {
            return handler(params, cancel, progress_1.attachWorkDone(connection, params), progress_1.attachPartialResult(connection, params));
          }),
          onTypeDefinition: (handler) => connection.onRequest(vscode_languageserver_protocol_1.TypeDefinitionRequest.type, (params, cancel) => {
            return handler(params, cancel, progress_1.attachWorkDone(connection, params), progress_1.attachPartialResult(connection, params));
          }),
          onImplementation: (handler) => connection.onRequest(vscode_languageserver_protocol_1.ImplementationRequest.type, (params, cancel) => {
            return handler(params, cancel, progress_1.attachWorkDone(connection, params), progress_1.attachPartialResult(connection, params));
          }),
          onReferences: (handler) => connection.onRequest(vscode_languageserver_protocol_1.ReferencesRequest.type, (params, cancel) => {
            return handler(params, cancel, progress_1.attachWorkDone(connection, params), progress_1.attachPartialResult(connection, params));
          }),
          onDocumentHighlight: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentHighlightRequest.type, (params, cancel) => {
            return handler(params, cancel, progress_1.attachWorkDone(connection, params), progress_1.attachPartialResult(connection, params));
          }),
          onDocumentSymbol: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentSymbolRequest.type, (params, cancel) => {
            return handler(params, cancel, progress_1.attachWorkDone(connection, params), progress_1.attachPartialResult(connection, params));
          }),
          onWorkspaceSymbol: (handler) => connection.onRequest(vscode_languageserver_protocol_1.WorkspaceSymbolRequest.type, (params, cancel) => {
            return handler(params, cancel, progress_1.attachWorkDone(connection, params), progress_1.attachPartialResult(connection, params));
          }),
          onCodeAction: (handler) => connection.onRequest(vscode_languageserver_protocol_1.CodeActionRequest.type, (params, cancel) => {
            return handler(params, cancel, progress_1.attachWorkDone(connection, params), progress_1.attachPartialResult(connection, params));
          }),
          onCodeActionResolve: (handler) => connection.onRequest(vscode_languageserver_protocol_1.CodeActionResolveRequest.type, (params, cancel) => {
            return handler(params, cancel);
          }),
          onCodeLens: (handler) => connection.onRequest(vscode_languageserver_protocol_1.CodeLensRequest.type, (params, cancel) => {
            return handler(params, cancel, progress_1.attachWorkDone(connection, params), progress_1.attachPartialResult(connection, params));
          }),
          onCodeLensResolve: (handler) => connection.onRequest(vscode_languageserver_protocol_1.CodeLensResolveRequest.type, (params, cancel) => {
            return handler(params, cancel);
          }),
          onDocumentFormatting: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentFormattingRequest.type, (params, cancel) => {
            return handler(params, cancel, progress_1.attachWorkDone(connection, params), void 0);
          }),
          onDocumentRangeFormatting: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentRangeFormattingRequest.type, (params, cancel) => {
            return handler(params, cancel, progress_1.attachWorkDone(connection, params), void 0);
          }),
          onDocumentOnTypeFormatting: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentOnTypeFormattingRequest.type, (params, cancel) => {
            return handler(params, cancel);
          }),
          onRenameRequest: (handler) => connection.onRequest(vscode_languageserver_protocol_1.RenameRequest.type, (params, cancel) => {
            return handler(params, cancel, progress_1.attachWorkDone(connection, params), void 0);
          }),
          onPrepareRename: (handler) => connection.onRequest(vscode_languageserver_protocol_1.PrepareRenameRequest.type, (params, cancel) => {
            return handler(params, cancel);
          }),
          onDocumentLinks: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentLinkRequest.type, (params, cancel) => {
            return handler(params, cancel, progress_1.attachWorkDone(connection, params), progress_1.attachPartialResult(connection, params));
          }),
          onDocumentLinkResolve: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentLinkResolveRequest.type, (params, cancel) => {
            return handler(params, cancel);
          }),
          onDocumentColor: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentColorRequest.type, (params, cancel) => {
            return handler(params, cancel, progress_1.attachWorkDone(connection, params), progress_1.attachPartialResult(connection, params));
          }),
          onColorPresentation: (handler) => connection.onRequest(vscode_languageserver_protocol_1.ColorPresentationRequest.type, (params, cancel) => {
            return handler(params, cancel, progress_1.attachWorkDone(connection, params), progress_1.attachPartialResult(connection, params));
          }),
          onFoldingRanges: (handler) => connection.onRequest(vscode_languageserver_protocol_1.FoldingRangeRequest.type, (params, cancel) => {
            return handler(params, cancel, progress_1.attachWorkDone(connection, params), progress_1.attachPartialResult(connection, params));
          }),
          onSelectionRanges: (handler) => connection.onRequest(vscode_languageserver_protocol_1.SelectionRangeRequest.type, (params, cancel) => {
            return handler(params, cancel, progress_1.attachWorkDone(connection, params), progress_1.attachPartialResult(connection, params));
          }),
          onExecuteCommand: (handler) => connection.onRequest(vscode_languageserver_protocol_1.ExecuteCommandRequest.type, (params, cancel) => {
            return handler(params, cancel, progress_1.attachWorkDone(connection, params), void 0);
          }),
          dispose: () => connection.dispose()
        };
        for (let remote of allRemotes) {
          remote.attach(protocolConnection);
        }
        connection.onRequest(vscode_languageserver_protocol_1.InitializeRequest.type, (params) => {
          watchDog.initialize(params);
          if (Is.string(params.trace)) {
            tracer.trace = vscode_languageserver_protocol_1.Trace.fromString(params.trace);
          }
          for (let remote of allRemotes) {
            remote.initialize(params.capabilities);
          }
          if (initializeHandler) {
            let result = initializeHandler(params, new vscode_languageserver_protocol_1.CancellationTokenSource().token, progress_1.attachWorkDone(connection, params), void 0);
            return asPromise(result).then((value) => {
              if (value instanceof vscode_languageserver_protocol_1.ResponseError) {
                return value;
              }
              let result2 = value;
              if (!result2) {
                result2 = { capabilities: {} };
              }
              let capabilities = result2.capabilities;
              if (!capabilities) {
                capabilities = {};
                result2.capabilities = capabilities;
              }
              if (capabilities.textDocumentSync === void 0 || capabilities.textDocumentSync === null) {
                capabilities.textDocumentSync = Is.number(protocolConnection.__textDocumentSync) ? protocolConnection.__textDocumentSync : vscode_languageserver_protocol_1.TextDocumentSyncKind.None;
              } else if (!Is.number(capabilities.textDocumentSync) && !Is.number(capabilities.textDocumentSync.change)) {
                capabilities.textDocumentSync.change = Is.number(protocolConnection.__textDocumentSync) ? protocolConnection.__textDocumentSync : vscode_languageserver_protocol_1.TextDocumentSyncKind.None;
              }
              for (let remote of allRemotes) {
                remote.fillServerCapabilities(capabilities);
              }
              return result2;
            });
          } else {
            let result = { capabilities: { textDocumentSync: vscode_languageserver_protocol_1.TextDocumentSyncKind.None } };
            for (let remote of allRemotes) {
              remote.fillServerCapabilities(result.capabilities);
            }
            return result;
          }
        });
        connection.onRequest(vscode_languageserver_protocol_1.ShutdownRequest.type, () => {
          watchDog.shutdownReceived = true;
          if (shutdownHandler) {
            return shutdownHandler(new vscode_languageserver_protocol_1.CancellationTokenSource().token);
          } else {
            return void 0;
          }
        });
        connection.onNotification(vscode_languageserver_protocol_1.ExitNotification.type, () => {
          try {
            if (exitHandler) {
              exitHandler();
            }
          } finally {
            if (watchDog.shutdownReceived) {
              watchDog.exit(0);
            } else {
              watchDog.exit(1);
            }
          }
        });
        connection.onNotification(vscode_languageserver_protocol_1.SetTraceNotification.type, (params) => {
          tracer.trace = vscode_languageserver_protocol_1.Trace.fromString(params.value);
        });
        return protocolConnection;
      }
      exports.createConnection = createConnection;
    }
  });

  // node_modules/vscode-languageserver/lib/common/api.js
  var require_api3 = __commonJS({
    "node_modules/vscode-languageserver/lib/common/api.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ProposedFeatures = exports.SemanticTokensBuilder = void 0;
      var semanticTokens_1 = require_semanticTokens();
      Object.defineProperty(exports, "SemanticTokensBuilder", { enumerable: true, get: function() {
        return semanticTokens_1.SemanticTokensBuilder;
      } });
      __exportStar(require_main3(), exports);
      __exportStar(require_server(), exports);
      var ProposedFeatures;
      (function(ProposedFeatures2) {
        ProposedFeatures2.all = {
          __brand: "features"
        };
      })(ProposedFeatures = exports.ProposedFeatures || (exports.ProposedFeatures = {}));
    }
  });

  // node_modules/vscode-languageserver-protocol/browser.js
  var require_browser2 = __commonJS({
    "node_modules/vscode-languageserver-protocol/browser.js"(exports, module) {
      "use strict";
      module.exports = require_main3();
    }
  });

  // node_modules/vscode-languageserver/lib/browser/main.js
  var require_main4 = __commonJS({
    "node_modules/vscode-languageserver/lib/browser/main.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createConnection = void 0;
      var api_1 = require_api3();
      __exportStar(require_browser2(), exports);
      __exportStar(require_api3(), exports);
      var _shutdownReceived = false;
      var watchDog = {
        initialize: (_params) => {
        },
        get shutdownReceived() {
          return _shutdownReceived;
        },
        set shutdownReceived(value) {
          _shutdownReceived = value;
        },
        exit: (_code) => {
        }
      };
      function createConnection(arg1, arg2, arg3, arg4) {
        let factories;
        let reader;
        let writer;
        let options;
        if (arg1 !== void 0 && arg1.__brand === "features") {
          factories = arg1;
          arg1 = arg2;
          arg2 = arg3;
          arg3 = arg4;
        }
        if (api_1.ConnectionStrategy.is(arg1) || api_1.ConnectionOptions.is(arg1)) {
          options = arg1;
        } else {
          reader = arg1;
          writer = arg2;
          options = arg3;
        }
        const connectionFactory = (logger) => {
          return api_1.createProtocolConnection(reader, writer, logger, options);
        };
        return api_1.createConnection(connectionFactory, watchDog, factories);
      }
      exports.createConnection = createConnection;
    }
  });

  // src/test/documentHighlights/documentHighlights.ts
  var import_tree_sitter3 = __toModule(require_tree_sitter());

  // src/common.ts
  var lsp = __toModule(require_main4());
  var symbolMapping = new class {
    constructor() {
      this._symbolKindMapping = new Map([
        ["file", lsp.SymbolKind.File],
        ["module", lsp.SymbolKind.Module],
        ["namespace", lsp.SymbolKind.Namespace],
        ["package", lsp.SymbolKind.Package],
        ["class", lsp.SymbolKind.Class],
        ["method", lsp.SymbolKind.Method],
        ["property", lsp.SymbolKind.Property],
        ["field", lsp.SymbolKind.Field],
        ["constructor", lsp.SymbolKind.Constructor],
        ["enum", lsp.SymbolKind.Enum],
        ["interface", lsp.SymbolKind.Interface],
        ["function", lsp.SymbolKind.Function],
        ["variable", lsp.SymbolKind.Variable],
        ["constant", lsp.SymbolKind.Constant],
        ["string", lsp.SymbolKind.String],
        ["number", lsp.SymbolKind.Number],
        ["boolean", lsp.SymbolKind.Boolean],
        ["array", lsp.SymbolKind.Array],
        ["object", lsp.SymbolKind.Object],
        ["key", lsp.SymbolKind.Key],
        ["null", lsp.SymbolKind.Null],
        ["enumMember", lsp.SymbolKind.EnumMember],
        ["struct", lsp.SymbolKind.Struct],
        ["event", lsp.SymbolKind.Event],
        ["operator", lsp.SymbolKind.Operator],
        ["typeParameter", lsp.SymbolKind.TypeParameter]
      ]);
    }
    getSymbolKind(symbolKind, strict) {
      if (symbolKind.startsWith("definition.")) {
        symbolKind = symbolKind.substring(7);
      }
      const res = this._symbolKindMapping.get(symbolKind);
      if (!res && strict) {
        return void 0;
      }
      return res ?? lsp.SymbolKind.Variable;
    }
  }();
  function asLspRange(node) {
    return lsp.Range.create(node.startPosition.row, node.startPosition.column, node.endPosition.row, node.endPosition.column);
  }
  function isBeforeOrEqual(a, b) {
    if (a.line < b.line) {
      return true;
    }
    if (b.line < a.line) {
      return false;
    }
    return a.character <= b.character;
  }
  function isBefore(a, b) {
    if (a.line < b.line) {
      return true;
    }
    if (b.line < a.line) {
      return false;
    }
    return a.character < b.character;
  }
  function compareRangeByStart(a, b) {
    if (isBefore(a.start, b.start)) {
      return -1;
    } else if (isBefore(b.start, a.start)) {
      return 1;
    }
    if (isBefore(a.end, b.end)) {
      return -1;
    } else if (isBefore(b.end, a.end)) {
      return 1;
    }
    return 0;
  }
  function containsPosition(range, position) {
    return isBeforeOrEqual(range.start, position) && isBeforeOrEqual(position, range.end);
  }
  function containsRange(range, other) {
    return containsPosition(range, other.start) && containsPosition(range, other.end);
  }

  // src/documentStore.ts
  var lsp2 = __toModule(require_main4());
  var import_vscode_languageserver = __toModule(require_main4());

  // node_modules/vscode-languageserver-textdocument/lib/esm/main.js
  "use strict";
  var FullTextDocument = function() {
    function FullTextDocument2(uri, languageId, version, content) {
      this._uri = uri;
      this._languageId = languageId;
      this._version = version;
      this._content = content;
      this._lineOffsets = void 0;
    }
    Object.defineProperty(FullTextDocument2.prototype, "uri", {
      get: function() {
        return this._uri;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(FullTextDocument2.prototype, "languageId", {
      get: function() {
        return this._languageId;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(FullTextDocument2.prototype, "version", {
      get: function() {
        return this._version;
      },
      enumerable: true,
      configurable: true
    });
    FullTextDocument2.prototype.getText = function(range) {
      if (range) {
        var start = this.offsetAt(range.start);
        var end = this.offsetAt(range.end);
        return this._content.substring(start, end);
      }
      return this._content;
    };
    FullTextDocument2.prototype.update = function(changes, version) {
      for (var _i = 0, changes_1 = changes; _i < changes_1.length; _i++) {
        var change = changes_1[_i];
        if (FullTextDocument2.isIncremental(change)) {
          var range = getWellformedRange(change.range);
          var startOffset = this.offsetAt(range.start);
          var endOffset = this.offsetAt(range.end);
          this._content = this._content.substring(0, startOffset) + change.text + this._content.substring(endOffset, this._content.length);
          var startLine = Math.max(range.start.line, 0);
          var endLine = Math.max(range.end.line, 0);
          var lineOffsets = this._lineOffsets;
          var addedLineOffsets = computeLineOffsets(change.text, false, startOffset);
          if (endLine - startLine === addedLineOffsets.length) {
            for (var i = 0, len = addedLineOffsets.length; i < len; i++) {
              lineOffsets[i + startLine + 1] = addedLineOffsets[i];
            }
          } else {
            if (addedLineOffsets.length < 1e4) {
              lineOffsets.splice.apply(lineOffsets, [startLine + 1, endLine - startLine].concat(addedLineOffsets));
            } else {
              this._lineOffsets = lineOffsets = lineOffsets.slice(0, startLine + 1).concat(addedLineOffsets, lineOffsets.slice(endLine + 1));
            }
          }
          var diff = change.text.length - (endOffset - startOffset);
          if (diff !== 0) {
            for (var i = startLine + 1 + addedLineOffsets.length, len = lineOffsets.length; i < len; i++) {
              lineOffsets[i] = lineOffsets[i] + diff;
            }
          }
        } else if (FullTextDocument2.isFull(change)) {
          this._content = change.text;
          this._lineOffsets = void 0;
        } else {
          throw new Error("Unknown change event received");
        }
      }
      this._version = version;
    };
    FullTextDocument2.prototype.getLineOffsets = function() {
      if (this._lineOffsets === void 0) {
        this._lineOffsets = computeLineOffsets(this._content, true);
      }
      return this._lineOffsets;
    };
    FullTextDocument2.prototype.positionAt = function(offset) {
      offset = Math.max(Math.min(offset, this._content.length), 0);
      var lineOffsets = this.getLineOffsets();
      var low = 0, high = lineOffsets.length;
      if (high === 0) {
        return { line: 0, character: offset };
      }
      while (low < high) {
        var mid = Math.floor((low + high) / 2);
        if (lineOffsets[mid] > offset) {
          high = mid;
        } else {
          low = mid + 1;
        }
      }
      var line = low - 1;
      return { line, character: offset - lineOffsets[line] };
    };
    FullTextDocument2.prototype.offsetAt = function(position) {
      var lineOffsets = this.getLineOffsets();
      if (position.line >= lineOffsets.length) {
        return this._content.length;
      } else if (position.line < 0) {
        return 0;
      }
      var lineOffset = lineOffsets[position.line];
      var nextLineOffset = position.line + 1 < lineOffsets.length ? lineOffsets[position.line + 1] : this._content.length;
      return Math.max(Math.min(lineOffset + position.character, nextLineOffset), lineOffset);
    };
    Object.defineProperty(FullTextDocument2.prototype, "lineCount", {
      get: function() {
        return this.getLineOffsets().length;
      },
      enumerable: true,
      configurable: true
    });
    FullTextDocument2.isIncremental = function(event) {
      var candidate = event;
      return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range !== void 0 && (candidate.rangeLength === void 0 || typeof candidate.rangeLength === "number");
    };
    FullTextDocument2.isFull = function(event) {
      var candidate = event;
      return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range === void 0 && candidate.rangeLength === void 0;
    };
    return FullTextDocument2;
  }();
  var TextDocument;
  (function(TextDocument2) {
    function create(uri, languageId, version, content) {
      return new FullTextDocument(uri, languageId, version, content);
    }
    TextDocument2.create = create;
    function update(document2, changes, version) {
      if (document2 instanceof FullTextDocument) {
        document2.update(changes, version);
        return document2;
      } else {
        throw new Error("TextDocument.update: document must be created by TextDocument.create");
      }
    }
    TextDocument2.update = update;
    function applyEdits(document2, edits) {
      var text = document2.getText();
      var sortedEdits = mergeSort(edits.map(getWellformedEdit), function(a, b) {
        var diff = a.range.start.line - b.range.start.line;
        if (diff === 0) {
          return a.range.start.character - b.range.start.character;
        }
        return diff;
      });
      var lastModifiedOffset = 0;
      var spans = [];
      for (var _i = 0, sortedEdits_1 = sortedEdits; _i < sortedEdits_1.length; _i++) {
        var e = sortedEdits_1[_i];
        var startOffset = document2.offsetAt(e.range.start);
        if (startOffset < lastModifiedOffset) {
          throw new Error("Overlapping edit");
        } else if (startOffset > lastModifiedOffset) {
          spans.push(text.substring(lastModifiedOffset, startOffset));
        }
        if (e.newText.length) {
          spans.push(e.newText);
        }
        lastModifiedOffset = document2.offsetAt(e.range.end);
      }
      spans.push(text.substr(lastModifiedOffset));
      return spans.join("");
    }
    TextDocument2.applyEdits = applyEdits;
  })(TextDocument || (TextDocument = {}));
  function mergeSort(data, compare) {
    if (data.length <= 1) {
      return data;
    }
    var p = data.length / 2 | 0;
    var left = data.slice(0, p);
    var right = data.slice(p);
    mergeSort(left, compare);
    mergeSort(right, compare);
    var leftIdx = 0;
    var rightIdx = 0;
    var i = 0;
    while (leftIdx < left.length && rightIdx < right.length) {
      var ret = compare(left[leftIdx], right[rightIdx]);
      if (ret <= 0) {
        data[i++] = left[leftIdx++];
      } else {
        data[i++] = right[rightIdx++];
      }
    }
    while (leftIdx < left.length) {
      data[i++] = left[leftIdx++];
    }
    while (rightIdx < right.length) {
      data[i++] = right[rightIdx++];
    }
    return data;
  }
  function computeLineOffsets(text, isAtLineStart, textOffset) {
    if (textOffset === void 0) {
      textOffset = 0;
    }
    var result = isAtLineStart ? [textOffset] : [];
    for (var i = 0; i < text.length; i++) {
      var ch = text.charCodeAt(i);
      if (ch === 13 || ch === 10) {
        if (ch === 13 && i + 1 < text.length && text.charCodeAt(i + 1) === 10) {
          i++;
        }
        result.push(textOffset + i + 1);
      }
    }
    return result;
  }
  function getWellformedRange(range) {
    var start = range.start;
    var end = range.end;
    if (start.line > end.line || start.line === end.line && start.character > end.character) {
      return { start: end, end: start };
    }
    return range;
  }
  function getWellformedEdit(textEdit) {
    var range = getWellformedRange(textEdit.range);
    if (range !== textEdit.range) {
      return { newText: textEdit.newText, range };
    }
    return textEdit;
  }

  // src/util/lruMap.ts
  var LRUMap = class extends Map {
    constructor(_options) {
      super();
      this._options = _options;
    }
    get(key) {
      if (!this.has(key)) {
        return void 0;
      }
      const result = super.get(key);
      this.delete(key);
      this.set(key, result);
      setTimeout(() => {
        if (this.size < Math.ceil(this._options.size * 1.3)) {
          return;
        }
        const result2 = Array.from(this.entries()).slice(0, this._options.size);
        for (let [key2] of result2) {
          this.delete(key2);
        }
        this._options.dispose(result2);
      }, 0);
      return result;
    }
  };

  // src/documentStore.ts
  var DocumentStore = class extends import_vscode_languageserver.TextDocuments {
    constructor(_connection) {
      super({
        create: TextDocument.create,
        update: (doc, changes, version) => {
          let result;
          let incremental = true;
          let event = { document: doc, changes: [] };
          for (const change of changes) {
            if (!lsp2.TextDocumentContentChangeEvent.isIncremental(change)) {
              incremental = false;
              break;
            }
            const rangeOffset = doc.offsetAt(change.range.start);
            event.changes.push({
              text: change.text,
              range: change.range,
              rangeOffset,
              rangeLength: change.rangeLength ?? doc.offsetAt(change.range.end) - rangeOffset
            });
          }
          result = TextDocument.update(doc, changes, version);
          if (incremental) {
            this._onDidChangeContent2.fire(event);
          }
          return result;
        }
      });
      this._connection = _connection;
      this._onDidChangeContent2 = new lsp2.Emitter();
      this.onDidChangeContent2 = this._onDidChangeContent2.event;
      this._decoder = new TextDecoder();
      this._fileDocuments = new LRUMap({
        size: 200,
        dispose: (_entries) => {
        }
      });
      super.listen(_connection);
      _connection.onNotification("file-cache/remove", (uri) => this._fileDocuments.delete(uri));
    }
    async retrieve(uri) {
      let result = this.get(uri);
      if (result) {
        return result;
      }
      let promise = this._fileDocuments.get(uri);
      if (!promise) {
        promise = this._requestDocument(uri);
        this._fileDocuments.set(uri, promise);
      }
      return promise;
    }
    async _requestDocument(uri) {
      const reply = await this._connection.sendRequest("file/read", uri);
      return TextDocument.create(uri, reply.languageId, 1, this._decoder.decode(reply.data));
    }
  };

  // src/features/documentHighlights.ts
  var lsp4 = __toModule(require_main4());

  // src/features/fileInfo.ts
  var lsp3 = __toModule(require_main4());

  // src/queries/c_sharp.ts
  var outline = `
(class_declaration
	name: (identifier) @definition.class.name
) @definition.class

(interface_declaration 
	name: (identifier) @definition.interface.name
) @definition.interface

(record_declaration 
	name: (identifier) @definition.record.name
) @definition.record

(record_declaration
	(parameter_list
		(parameter
			name: (identifier) @definition.property.name
		) @definition.property
	)
)

(constructor_declaration
	name: (identifier) @definition.constructor.name
) @definition.constructor

(destructor_declaration
	(identifier) @definition.method.name
) @definition.method

(indexer_declaration
	(bracketed_parameter_list) @definition.method.name
) @definition.method

(method_declaration
	name: (identifier) @definition.method.name
) @definition.method

(property_declaration
	name: (identifier) @definition.property.name
) @definition.property

(delegate_declaration
	name: (identifier) @definition.function.name
) @definition.function

(field_declaration
	(variable_declaration
		(variable_declarator
			(identifier) @definition.field.name
		)
	)
) @definition.field

(event_field_declaration
	(variable_declaration
		(variable_declarator
			(identifier) @definition.event.name
		)
	)
) @definition.event

(global_attribute_list
	(attribute
		(identifier) @definition.constant.name
	) @definition.constant
)

(global_statement
	(local_declaration_statement
		(variable_declaration
			(variable_declarator
				(identifier) @definition.variable.name
			)
		)
	)
)

(enum_declaration name:
	(identifier) @definition.enum.name
) @definition.enum

(struct_declaration
	(identifier) @definition.struct.name
) @definition.struct

(namespace_declaration
	[
		name: (identifier) @definition.module.name
		name: (qualified_name) @definition.module.name
	]
) @definition.module

(enum_member_declaration
	(identifier) @definition.enumMember.name
) @definition.enumMember`;
  var comments = `(comment) @comment`;
  var mod = {
    outline,
    comments
  };
  var c_sharp_default = mod;

  // src/queries/c.ts
  var outline2 = `
(struct_specifier
	name: (type_identifier) @definition.struct.name
) @definition.struct

(union_specifier
	name: (type_identifier) @definition.struct.name
) @definition.struct

(enum_specifier
	name: (type_identifier) @definition.enum.name
) @definition.enum

(enumerator
	name: (identifier) @definition.enumMember.name
) @definition.enumMember

(function_definition
	declarator: (function_declarator
		declarator: (identifier) @definition.function.name
	)
) @definition.function

(pointer_declarator
	declarator: (function_declarator
		declarator: (identifier) @definition.function.name
	) @definition.function
)

(declaration
	declarator: (function_declarator
		declarator: (identifier) @definition.function.name
	) @definition.function
)

(type_definition
	type: (_)
	declarator: (type_identifier) @definition.struct.name
) @definition.struct

(linkage_specification
	value: (string_literal) @definition.struct.name
) @definition.struct

(field_declaration_list
	(field_declaration
		[
			declarator: (field_identifier) @definition.field.name
			(array_declarator
				declarator: (field_identifier) @definition.field.name
			)
		]
	) @definition.field
)`;
  var comments2 = `
(comment) @comment
`;
  var mod2 = {
    outline: outline2,
    comments: comments2
  };
  var c_default = mod2;

  // src/queries/cpp.ts
  var outline3 = `
(namespace_definition
	name: (identifier) @definition.module.name
) @definition.module

(declaration
	type: (primitive_type)
	declarator: (identifier) @definition.variable.name
) @definition.variable

(friend_declaration
	(type_identifier) @definition.variable.name
) @definition.variable

(function_definition
	(function_declarator
		[
			(identifier) @definition.function.name
			(field_identifier) @definition.function.name
			(scoped_identifier) @definition.function.name
		]
	)
) @definition.function

(field_declaration
	(function_declarator
		[
			(identifier) @definition.function.name
			(field_identifier) @definition.function.name
			(scoped_identifier) @definition.function.name
		]
	)
) @definition.function

(declaration
	(function_declarator
		[
			(identifier) @definition.function.name
			(field_identifier) @definition.function.name
			(scoped_identifier) @definition.function.name
			(destructor_name) @definition.function.name
		]
	)
) @definition.function

(pointer_declarator
	declarator: (function_declarator
		declarator: (identifier) @definition.function.name
	) @definition.function
)

(field_declaration
	(field_identifier) @definition.field.name
) @definition.field

(struct_specifier
	(type_identifier) @definition.struct.name
) @definition.struct

(class_specifier
	(type_identifier) @definition.class.name
) @definition.class

(type_definition
	type: (_)
	declarator: (type_identifier) @definition.struct.name
) @definition.struct
`;
  var comments3 = `
(comment) @comment
`;
  var mod3 = {
    outline: outline3,
    comments: comments3
  };
  var cpp_default = mod3;

  // src/queries/go.ts
  var outline4 = `
(field_declaration (field_identifier) @definition.field @definition.field.name)

(method_spec
	name: (field_identifier) @definition.method.name
) @definition.method

(type_alias
	name: (type_identifier) @definition.string.name
) @definition.string

(function_declaration
	name: (identifier) @definition.function.name
) @definition.function

(method_declaration
	name: (field_identifier) @definition.method.name
) @definition.method

;; variables defined in the package
(source_file
	(var_declaration
		(var_spec
			(identifier) @definition.variable.name
		) @definition.variable
	)
)

;; lots of type_spec, must be mutually exclusive
(type_spec 
	name: (type_identifier) @definition.interface.name
	type: (interface_type)
) @definition.interface

(type_spec 
	name: (type_identifier) @definition.function.name
	type: (function_type)
) @definition.function

(type_spec
	name: (type_identifier) @definition.struct.name
	type: (struct_type)
) @definition.struct

(type_spec
	name: (type_identifier) @definition.struct.name
	type: (map_type)
) @definition.struct

(type_spec
	name: (type_identifier) @definition.struct.name
	type: (pointer_type)
) @definition.struct

(type_spec
	name: (type_identifier) @definition.event.name
	type: (channel_type)
) @definition.event
`;
  var scopes = `
(method_declaration parameters: (parameter_list) @scope)
(method_declaration body: (block) @scope.merge)
(function_declaration parameters: (parameter_list) @scope)
(function_declaration body: (block) @scope.merge)
(expression_switch_statement) @scope
(for_statement) @scope
(block) @scope
(type_switch_statement) @scope
(composite_literal body: (literal_value)  @scope)
`;
  var locals = `
(const_spec name: (identifier) @definition)
(var_declaration (var_spec (identifier) @definition))
(parameter_declaration (identifier) @definition)
(short_var_declaration left: (expression_list (identifier) @definition))
(range_clause left: (expression_list (identifier) @definition))
(type_switch_statement (expression_list (identifier) @definition))

(identifier) @usage

${scopes}
`;
  var comments4 = `
(comment) @comment
`;
  var folding = `
${scopes}
${comments4}
`;
  var mod4 = {
    outline: outline4,
    comments: comments4,
    locals,
    scopes,
    folding
  };
  var go_default = mod4;

  // src/queries/java.ts
  var outline5 = `
(class_declaration
	name: (identifier) @definition.class.name
) @definition.class

(variable_declarator
	name: (identifier) @definition.class.name
	value: (object_creation_expression
		.
		(_)*
		(class_body)
	)
) @definition.class

(interface_declaration
	name: (identifier) @definition.interface.name
) @definition.interface

(enum_declaration
	name: (identifier) @definition.enum.name
) @definition.enum

(enum_constant
	name: (identifier) @definition.enumMember.name
) @definition.enumMember

(constructor_declaration
	name: (identifier) @definition.constructor.name
) @definition.constructor

(method_declaration
	name: (identifier) @definition.method.name
) @definition.method

(field_declaration
	declarator: ((variable_declarator
		name: (identifier) @definition.field.name)
	) @definition.field
)

(module_declaration
	[
		(scoped_identifier) @definition.module.name
		(identifier) @definition.module.name
	]
) @definition.module
`;
  var usages = `
(field_access field: (identifier) @usage.field)
(identifier) @usage.variable
`;
  var scopes2 = `
[(class_body) (interface_body) (enum_body)] @scope
(method_declaration (formal_parameters) @scope)
(method_declaration (block) @scope.merge)
(constructor_declaration (formal_parameters) @scope)
(constructor_declaration (constructor_body) @scope.merge)
(for_statement) @scope
(if_statement consequence: (_) @scope)
(if_statement alternative: (_) @scope)
(while_statement body: (_) @scope)
(try_statement (block) @scope)
(catch_clause) @scope
(block) @scope
`;
  var locals2 = `
;; definitions
(formal_parameter name: (identifier) @definition)
(local_variable_declaration declarator: (variable_declarator name: (identifier) @definition))
(catch_formal_parameter name: (identifier) @definition)

;; usages
(field_access field: (identifier) @usage.void)
(identifier) @usage

;; scopes
${scopes2}
`;
  var comments5 = `
(comment) @comment
`;
  var folding2 = `
${scopes2}
${comments5}
(
	(import_declaration)
	(import_declaration)*
) @import`;
  var mod5 = {
    outline: outline5,
    usages,
    scopes: scopes2,
    comments: comments5,
    folding: folding2,
    locals: locals2
  };
  var java_default = mod5;

  // src/queries/php.ts
  var outline6 = `(class_declaration
	name: (name) @definition.class.name
) @definition.class

(method_declaration
  name: (name) @definition.method.name
) @definition.method

(property_element
	(variable_name) @definition.property.name
) @definition.property

(function_definition
	name: (name) @definition.function.name
) @definition.function

(trait_declaration
	name: (name) @definition.property.name
) @definition.property`;
  var comments6 = `
(comment) @comment
`;
  var mod6 = {
    outline: outline6,
    comments: comments6
  };
  var php_default = mod6;

  // src/queries/python.ts
  var outline7 = `(class_definition
	name: (identifier) @definition.class.name
) @definition.class

(function_definition
	name: (identifier) @definition.function.name
) @definition.function`;
  var comments7 = `
(comment) @comment
`;
  var mod7 = {
    outline: outline7,
    comments: comments7
  };
  var python_default = mod7;

  // src/queries/rust.ts
  var outline8 = `
(mod_item
	name: (identifier) @definition.module.name
) @definition.module

(function_item
	name: (identifier) @definition.function.name
) @definition.function

(union_item
	name: (type_identifier) @definition.struct.name
) @definition.struct

(field_declaration
	name: (field_identifier) @definition.field.name
) @definition.field

(struct_item
	name: (type_identifier) @definition.struct.name
) @definition.struct

(enum_item
	name: (type_identifier) @definition.enum.name
) @definition.enum

(enum_variant
	name: (identifier) @definition.enumMember.name
) @definition.enumMember

(trait_item
	name: (type_identifier) @definition.interface.name
) @definition.interface

(function_signature_item
	name: (identifier) @definition.function.name
) @definition.function

(const_item
	name: (identifier) @definition.constant.name
) @definition.constant

(static_item
	name: (identifier) @definition.constant.name
) @definition.constant

(type_item
	name: (type_identifier) @definition.interface.name
) @definition.interface

(impl_item type: (type_identifier) @definition.class.name) @definition.class
(impl_item trait: (type_identifier) @definition.class.name) @definition.class

(foreign_mod_item
	[
		(extern_modifier (string_literal) @definition.namespace.name)
		(extern_modifier) @definition.namespace.name
	]
) @definition.namespace
`;
  var scopes3 = `
(function_item (parameters) @scope)
(function_item (block) @scope.merge)
(for_expression) @scope
(block) @scope
`;
  var locals3 = `
(let_declaration pattern: (identifier) @definition)
(parameter pattern: (identifier) @definition)
(for_expression pattern: (identifier) @definition)
(reference_pattern (identifier) @definition)

(scoped_identifier name: (identifier) @usage.void)
(identifier) @usage

${scopes3}
`;
  var comments8 = `
(line_comment) @comment
(block_comment) @comment
`;
  var folding3 = `
${comments8}
${scopes3}
(_) body: (_) @fold
`;
  var mod8 = {
    outline: outline8,
    locals: locals3,
    scopes: scopes3,
    comments: comments8,
    folding: folding3
  };
  var rust_default = mod8;

  // src/queries/typescript.ts
  var outline9 = `
(interface_declaration
	name: (type_identifier) @definition.interface.name
) @definition.interface

(property_signature
	name: (property_identifier) @definition.field.name
) @definition.field

(method_signature
	name: (property_identifier) @definition.method.name
) @definition.method

(class_declaration
	name: (type_identifier) @definition.class.name
) @definition.class

(new_expression
	constructor: (class
		body: (class_body)
	) @definition.class
)

(method_definition
	name: [
		(property_identifier) @definition.method.name
		(computed_property_name (string) @definition.method.name)
	]
) @definition.method

(public_field_definition
	name: [
		(property_identifier) @definition.field.name
		(computed_property_name (string) @definition.field.name)
	]
) @definition.field

(enum_declaration
	name: (identifier) @definition.enum.name
) @definition.enum

(enum_body [
	(property_identifier) @definition.enumMember
	(enum_assignment (property_identifier) @definition.enumMember)
])

(function_declaration
	name: (identifier) @definition.function.name
) @definition.function

(variable_declarator
	name: (identifier) @definition.variable.name
) @definition.variable

(module
	name: [(identifier)@definition.module.name (string) @definition.module.name]
) @definition.module
`;
  var mod9 = {
    outline: outline9
  };
  var typescript_default = mod9;

  // src/languages.ts
  var import_tree_sitter = __toModule(require_tree_sitter());
  var Languages = class {
    static async init(langInfo) {
      for (let entry of langInfo) {
        const lang = await import_tree_sitter.default.Language.load(entry.wasmUri);
        this._languages.set(entry.languageId, lang);
      }
    }
    static get(languageId) {
      let result = this._languages.get(languageId);
      if (!result) {
        console.warn(`UNKNOWN languages: '${languageId}'`);
        return void 0;
      }
      return result;
    }
  };
  Languages._languages = new Map();

  // src/queries.ts
  var Queries = class {
    static get(languageId, type, ...more) {
      const module = this._queryModules.get(languageId);
      if (!module) {
        return Languages.get(languageId).query("");
      }
      const source = [type, ...more].map((type2) => module[type2] ?? "").join("\n").trim();
      const key = `${languageId}/${source}`;
      let query = this._queryInstances.get(key);
      if (!query) {
        try {
          query = Languages.get(languageId).query(source);
        } catch (e) {
          query = Languages.get(languageId).query("");
          console.warn(languageId, e);
        }
      }
      this._queryInstances.set(key, query);
      return query;
    }
  };
  Queries._queryModules = new Map([
    ["csharp", c_sharp_default],
    ["c", c_default],
    ["cpp", cpp_default],
    ["go", go_default],
    ["java", java_default],
    ["php", php_default],
    ["python", python_default],
    ["rust", rust_default],
    ["typescript", typescript_default]
  ]);
  Queries._queryInstances = new Map();

  // src/features/fileInfo.ts
  var Locals = class {
    constructor(document2, root) {
      this.document = document2;
      this.root = root;
    }
    static create(document2, trees) {
      const root = new Scope(lsp3.Range.create(0, 0, document2.lineCount, 0));
      const tree = trees.getParseTree(document2);
      if (!tree) {
        return new Locals(document2, root);
      }
      const all = [];
      const query = Queries.get(document2.languageId, "locals");
      const captures = query.captures(tree.rootNode).sort(this._compareCaptures);
      const scopeCaptures = captures.filter((capture) => capture.name.startsWith("scope"));
      for (let i = 0; i < scopeCaptures.length; i++) {
        const capture = scopeCaptures[i];
        const range = asLspRange(capture.node);
        if (capture.name.endsWith(".merge")) {
          all[all.length - 1].range.end = range.end;
        } else {
          all.push(new Scope(range));
        }
      }
      this._fillInDefinitionsAndUsages(all, captures);
      this._constructTree(root, all);
      const info = new Locals(document2, root);
      return info;
    }
    static _fillInDefinitionsAndUsages(bucket, captures) {
      for (const capture of captures) {
        if (capture.name.startsWith("definition")) {
          bucket.push(new Definition(capture.node.text, asLspRange(capture.node)));
        } else if (capture.name.startsWith("usage")) {
          bucket.push(new Usage(capture.node.text, asLspRange(capture.node), capture.name.endsWith(".void")));
        }
      }
    }
    static _constructTree(root, nodes) {
      const stack = [];
      for (const thing of nodes.sort(this._compareByRange)) {
        while (true) {
          let parent = stack.pop() ?? root;
          if (containsRange(parent.range, thing.range)) {
            parent.appendChild(thing);
            stack.push(parent);
            stack.push(thing);
            break;
          }
          if (parent === root) {
            break;
          }
        }
      }
      stack.length = 0;
      stack.push(root);
      while (stack.length > 0) {
        let n = stack.pop();
        if (n instanceof Usage && n.isHelper) {
          n.remove();
        } else {
          stack.push(...n.children());
        }
      }
    }
    static _compareCaptures(a, b) {
      return a.node.startIndex - b.node.startIndex;
    }
    static _compareByRange(a, b) {
      return compareRangeByStart(a.range, b.range);
    }
    debugPrint() {
      console.log(this.root.toString());
    }
  };
  var NodeType;
  (function(NodeType2) {
    NodeType2[NodeType2["Scope"] = 0] = "Scope";
    NodeType2[NodeType2["Definition"] = 1] = "Definition";
    NodeType2[NodeType2["Usage"] = 2] = "Usage";
  })(NodeType || (NodeType = {}));
  var Node = class {
    constructor(range, type) {
      this.range = range;
      this.type = type;
      this._children = [];
    }
    children() {
      return this._children;
    }
    remove() {
      if (!this._parent) {
        return false;
      }
      const idx = this._parent._children.indexOf(this);
      if (idx < 0) {
        return false;
      }
      this._parent._children.splice(idx, 1);
      return true;
    }
    appendChild(node) {
      this._children.push(node);
      node._parent = this;
    }
    toString() {
      return `${this.type}@${this.range.start.line},${this.range.start.character}-${this.range.end.line},${this.range.end.character}`;
    }
  };
  var Usage = class extends Node {
    constructor(name, range, isHelper) {
      super(range, 2);
      this.name = name;
      this.range = range;
      this.isHelper = isHelper;
    }
    appendChild(_node) {
    }
    toString() {
      return `use:${this.name}`;
    }
  };
  var Definition = class extends Node {
    constructor(name, range) {
      super(range, 1);
      this.name = name;
      this.range = range;
    }
    appendChild(_node) {
    }
    toString() {
      return `def:${this.name}`;
    }
  };
  var Scope = class extends Node {
    constructor(range) {
      super(range, 0);
    }
    *definitions() {
      for (let item of this._children) {
        if (item instanceof Definition) {
          yield item;
        }
      }
    }
    *usages() {
      for (let item of this._children) {
        if (item instanceof Usage) {
          yield item;
        }
      }
    }
    *scopes() {
      for (let item of this._children) {
        if (item instanceof Scope) {
          yield item;
        }
      }
    }
    findScope(position) {
      for (let scope of this.scopes()) {
        if (containsPosition(scope.range, position)) {
          return scope.findScope(position);
        }
      }
      return this;
    }
    findDefinitionOrUsage(position) {
      for (let child of this._children) {
        if ((child instanceof Definition || child instanceof Usage) && containsPosition(child.range, position)) {
          return child;
        }
      }
    }
    findDefinitions(text) {
      const result = [];
      for (let child of this.definitions()) {
        if (child.name === text) {
          result.push(child);
        }
      }
      if (result.length > 0) {
        return result;
      }
      if (!(this._parent instanceof Scope)) {
        return [];
      }
      return this._parent.findDefinitions(text);
    }
    findUsages(text) {
      const bucket = [];
      let scope = this;
      while (!scope._defines(text)) {
        if (scope._parent instanceof Scope) {
          scope = scope._parent;
        } else {
          break;
        }
      }
      scope._findUsagesDown(text, bucket);
      return bucket.flat();
    }
    _findUsagesDown(text, bucket) {
      const result = [];
      for (let child of this.usages()) {
        if (child.name === text) {
          result.push(child);
        }
      }
      bucket.push(result);
      for (let child of this.scopes()) {
        if (!child._defines(text)) {
          child._findUsagesDown(text, bucket);
        }
      }
    }
    _defines(text) {
      for (let child of this.definitions()) {
        if (child.name === text) {
          return true;
        }
      }
      return false;
    }
    toString(depth = 0) {
      let scopes4 = [];
      let parts = [];
      this._children.slice(0).forEach((child) => {
        if (child instanceof Scope) {
          scopes4.push(child.toString(depth + 2));
        } else {
          parts.push(child.toString());
        }
      });
      let indent = " ".repeat(depth);
      let res = `${indent}Scope@${this.range.start.line},${this.range.start.character}-${this.range.end.line},${this.range.end.character}`;
      res += `
${indent + indent}${parts.join(`, `)}`;
      res += `
${indent}${scopes4.join(`
${indent}`)}`;
      return res;
    }
  };

  // src/features/documentHighlights.ts
  var DocumentHighlightsProvider = class {
    constructor(_documents, _trees) {
      this._documents = _documents;
      this._trees = _trees;
    }
    register(connection) {
      connection.onDocumentHighlight(this.provideDocumentHighlights.bind(this));
    }
    async provideDocumentHighlights(params) {
      const document2 = await this._documents.retrieve(params.textDocument.uri);
      const info = Locals.create(document2, this._trees);
      const scope = info.root.findScope(params.position);
      const anchor = scope.findDefinitionOrUsage(params.position);
      if (!anchor) {
        return [];
      }
      const result = [];
      for (let def of scope.findDefinitions(anchor.name)) {
        result.push(lsp4.DocumentHighlight.create(def.range, lsp4.DocumentHighlightKind.Write));
      }
      if (result.length === 0) {
        return [];
      }
      for (let usage of scope.findUsages(anchor.name)) {
        result.push(lsp4.DocumentHighlight.create(usage.range, lsp4.DocumentHighlightKind.Read));
      }
      return result;
    }
  };

  // src/trees.ts
  var import_tree_sitter2 = __toModule(require_tree_sitter());
  var Entry = class {
    constructor(version, tree, edits) {
      this.version = version;
      this.tree = tree;
      this.edits = edits;
    }
  };
  var Trees = class {
    constructor(_documents) {
      this._documents = _documents;
      this._cache = new LRUMap({
        size: 100,
        dispose(entries) {
          for (let [, value] of entries) {
            value.tree.delete();
          }
        }
      });
      this._listener = [];
      this._parser = new import_tree_sitter2.default();
      this._listener.push(_documents.onDidChangeContent2((e) => {
        const info = this._cache.get(e.document.uri);
        if (info) {
          info.edits.push(Trees._asEdits(e));
        }
      }));
    }
    dispose() {
      this._parser.delete();
      for (let item of this._cache.values()) {
        item.tree.delete();
      }
      for (let item of this._listener) {
        item.dispose();
      }
    }
    getParseTree(documentOrUri) {
      if (typeof documentOrUri === "string") {
        return this._documents.retrieve(documentOrUri).then((doc) => this._parse(doc));
      } else {
        return this._parse(documentOrUri);
      }
    }
    _parse(documentOrUri) {
      let info = this._cache.get(documentOrUri.uri);
      if (info?.version === documentOrUri.version) {
        return info.tree;
      }
      const language = Languages.get(documentOrUri.languageId);
      if (!language) {
        return void 0;
      }
      this._parser.setLanguage(language);
      this._parser.setTimeoutMicros(1e3 * 1e3);
      try {
        const version = documentOrUri.version;
        const text = documentOrUri.getText();
        if (!info) {
          const tree = this._parser.parse(text);
          info = new Entry(version, tree, []);
          this._cache.set(documentOrUri.uri, info);
        } else {
          const oldTree = info.tree;
          const deltas = info.edits.flat();
          deltas.forEach((delta) => oldTree.edit(delta));
          info.edits.length = 0;
          info.tree = this._parser.parse(text, oldTree);
          info.version = version;
          oldTree.delete();
        }
        return info.tree;
      } catch (e) {
        this._cache.delete(documentOrUri.uri);
        return void 0;
      }
    }
    static _asEdits(event) {
      return event.changes.map((change) => ({
        startPosition: this._asTsPoint(change.range.start),
        oldEndPosition: this._asTsPoint(change.range.end),
        newEndPosition: this._asTsPoint(event.document.positionAt(change.rangeOffset + change.text.length)),
        startIndex: change.rangeOffset,
        oldEndIndex: change.rangeOffset + change.rangeLength,
        newEndIndex: change.rangeOffset + change.text.length
      }));
    }
    static _asTsPoint(position) {
      const { line: row, character: column } = position;
      return { row, column };
    }
  };

  // src/test/documentHighlights/documentHighlights.ts
  function mock() {
    return function() {
    };
  }
  var TestDocumentStore = class extends DocumentStore {
    constructor(...docs) {
      super(new class extends mock() {
        onDidOpenTextDocument(handler) {
          for (let doc of docs) {
            handler({ textDocument: doc });
          }
        }
        onDidChangeTextDocument() {
        }
        onDidCloseTextDocument() {
        }
        onWillSaveTextDocument() {
        }
        onWillSaveTextDocumentWaitUntil() {
        }
        onDidSaveTextDocument() {
        }
        onNotification() {
        }
      }());
    }
  };
  function fetch2(url) {
    return new Promise((resolve) => {
      const r = new XMLHttpRequest();
      r.open("GET", url, true);
      r.responseType = "arraybuffer";
      r.onload = () => {
        resolve(new Uint8Array(r.response));
      };
      r.send(null);
    });
  }
  async function assertFixture(item) {
    const parts = item.text.split("---").filter((s) => Boolean(s));
    const result = [];
    try {
      for (const text of parts) {
        await assertOneFixture(item.uri, item.languageId, text, result);
      }
    } catch (e) {
      result.unshift({ err: String(e) });
    }
    globalThis.report_result(item.uri, result);
  }
  async function assertOneFixture(uri, languageId, text, messages) {
    const r = /\[[^\]]+\]/g;
    const expected = [];
    const parts = text.split(r);
    const idents = text.match(r);
    text = "";
    for (let i = 0; i < parts.length; i++) {
      text += parts[i];
      let ident = idents[i];
      if (ident) {
        let name = ident.slice(1, -1);
        expected.push({
          start: text.length,
          name
        });
        text += name;
      }
    }
    const store = new TestDocumentStore({ uri, languageId, text, version: 1 });
    const trees = new Trees(store);
    const highlights = new DocumentHighlightsProvider(store, trees);
    const textDocument = store.get(uri);
    const result = await highlights.provideDocumentHighlights({ textDocument: { uri }, position: textDocument.positionAt(expected[0].start) });
    if (result.length !== expected.length) {
      messages.push({ err: "  WRONG number of highlights" });
    }
    result.sort((a, b) => compareRangeByStart(a.range, b.range));
    for (let highlight of result) {
      const prefix = " ".repeat(2);
      const e = expected.shift();
      if (!e) {
        messages.push({ err: `${prefix}highlight NOT expected: ${highlight.range.start.line},${highlight.range.start.character}` });
      } else if (textDocument.offsetAt(highlight.range.start) !== e.start) {
        messages.push({ err: `${prefix}BAD offset for ${e.name} expected ${e.start}, actual: ${textDocument.offsetAt(highlight.range.start)}` });
      } else {
        messages.push({ ok: `${prefix}\u2713 ${highlight.range.start.line},${highlight.range.start.character}-${highlight.range.end.line},${highlight.range.end.character}` });
      }
    }
    if (expected.length > 0) {
      messages.push({ err: `also EXPECTED ${expected.map((e) => e.name)}` });
    }
  }
  (async function() {
    const data = await window.tree_sitter_bootstrap();
    const fixtures = await window.document_highlights_fixtures();
    console.log("data RECEIVED", data);
    await import_tree_sitter3.default.init({
      locateFile() {
        return data.treeSitterWasmUri;
      }
    });
    for (let item of data.languages) {
      item.wasmUri = await fetch2(item.wasmUri);
    }
    await Languages.init(data.languages);
    console.log("INIT done");
    fixtures.forEach(assertFixture);
  })();
})();