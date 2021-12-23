// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"NAm6W":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "72da198cbd671c2c";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"ddYv4":[function(require,module,exports) {
const aMarkers = `
[
    {
        "Id": "B090",
        "Nombre": "Puerto de Bilbao",
        "Altitud": 0,
        "Municipio": "Santurtzi",
        "Provincia": "Bizkaia",
        "Observaciones": "Situada en la punta del dique de Punta Lucero",
        "GpxX": -3.08474,
        "GpxY": 43.3774903
    },
    {
        "Id": "B091",
        "Nombre": "Puerto de Armintza",
        "Altitud": 0,
        "Municipio": "Lemoiz",
        "Provincia": "Bizkaia",
        "Observaciones": "Situada en la cofradía del puerto de Armintza",
        "GpxX": -2.89916,
        "GpxY": 43.4357871
    },
    {
        "Id": "B092",
        "Nombre": "Puerto de Bermeo",
        "Altitud": 0,
        "Municipio": "Bermeo",
        "Provincia": "Bizkaia",
        "Observaciones": "Situada en el edificio de Puertos del G.V. En el puerto de Bermeo.",
        "GpxX": -2.70981,
        "GpxY": 43.4223435
    },
    {
        "Id": "B094",
        "Nombre": "Puerto de Getaria",
        "Altitud": 0,
        "Municipio": "Getaria",
        "Provincia": "Gipuzkoa",
        "Observaciones": "Situada en el edificio de Puertos del G.V. en el puerto de Getaria.",
        "GpxX": -2.1968,
        "GpxY": 43.30559
    },
    {
        "Id": "B093",
        "Nombre": "Puerto de Ondarroa",
        "Altitud": 0,
        "Municipio": "Ondarroa",
        "Provincia": "Bizkaia",
        "Observaciones": "Situada en el edificio nuevo del carro de puertos del G.V.",
        "GpxX": -2.4157,
        "GpxY": 43.325
    },
    {
        "Id": "B097",
        "Nombre": "Puerto de Hondarribia",
        "Altitud": 0,
        "Municipio": "Hondarribia",
        "Provincia": "Gipuzkoa",
        "Observaciones": "Situada en el edicio de capitania del puerto deportivo de Hondarribia.",
        "GpxX": -1.78955,
        "GpxY": 43.3882
    },
    {
        "Id": "B096",
        "Nombre": "Puerto de Pasaia",
        "Altitud": 0,
        "Municipio": "Pasaia",
        "Provincia": "Gipuzkoa",
        "Observaciones": "Estructura: Estación montada sobre un poste metálico cimentado a los bajos del Arando Grande\\r\\nSituación: baliza de señalización del Arando Grande frente a la entrada al puerto de Pasaia",
        "GpxX": -1.92752,
        "GpxY": 43.3370283
    },
    {
        "Id": "C005",
        "Nombre": "Gatika",
        "Altitud": 11,
        "Municipio": "Gatika",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -2.90829,
        "GpxY": 43.3723
    },
    {
        "Id": "C004",
        "Nombre": "Bakio",
        "Altitud": 12,
        "Municipio": "Bakio",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -2.8124,
        "GpxY": 43.4168
    },
    {
        "Id": "B098",
        "Nombre": "Mutriku",
        "Altitud": 10,
        "Municipio": "Mutriku",
        "Provincia": "Gipuzkoa",
        "Observaciones": "",
        "GpxX": -2.376872,
        "GpxY": 43.31218
    },
    {
        "Id": "C008",
        "Nombre": "Zeanuri",
        "Altitud": 170,
        "Municipio": "Zeanuri",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -2.74988,
        "GpxY": 43.09858
    },
    {
        "Id": "C006",
        "Nombre": "Markina",
        "Altitud": 83,
        "Municipio": "Markina-Xemein",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -2.49565,
        "GpxY": 43.2655
    },
    {
        "Id": "C001",
        "Nombre": "Arkaute I",
        "Altitud": 517,
        "Municipio": "Vitoria-Gasteiz",
        "Provincia": "Álava",
        "Observaciones": "El 2/2/2005 se coloca el calefactor",
        "GpxX": -2.62701,
        "GpxY": 42.8518
    },
    {
        "Id": "C00B",
        "Nombre": "Tobillas",
        "Altitud": 700,
        "Municipio": "Valdegovía/Gaubea",
        "Provincia": "Álava",
        "Observaciones": "",
        "GpxX": -3.1828,
        "GpxY": 42.8992
    },
    {
        "Id": "C009",
        "Nombre": "Galdakao",
        "Altitud": 30,
        "Municipio": "Galdakao",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -2.870321,
        "GpxY": 43.234234
    },
    {
        "Id": "C003",
        "Nombre": "Derio",
        "Altitud": 30,
        "Municipio": "Derio",
        "Provincia": "Bizkaia",
        "Observaciones": "Control de calefaccion EUITI y transformador TR- 07152-3 el dia 28/05/2009 12:29:04",
        "GpxX": -2.87342,
        "GpxY": 43.2911
    },
    {
        "Id": "C002",
        "Nombre": "Arteaga",
        "Altitud": 19,
        "Municipio": "Gautegiz Arteaga",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -2.65714,
        "GpxY": 43.347
    },
    {
        "Id": "C007",
        "Nombre": "Santa Clara",
        "Altitud": 48,
        "Municipio": "Donostia / San Sebastián",
        "Provincia": "Gipuzkoa",
        "Observaciones": "",
        "GpxX": -1.99834,
        "GpxY": 43.3218
    },
    {
        "Id": "C017",
        "Nombre": "Miramon",
        "Altitud": 113,
        "Municipio": "Donostia / San Sebastián",
        "Provincia": "Gipuzkoa",
        "Observaciones": "",
        "GpxX": -1.97121,
        "GpxY": 43.2868
    },
    {
        "Id": "C012",
        "Nombre": "Zurbano-Alegría-CHE",
        "Altitud": 509,
        "Municipio": "Alegría-Dulantzi",
        "Provincia": "Álava",
        "Observaciones": "",
        "GpxX": -2.6371255,
        "GpxY": 42.8668213
    },
    {
        "Id": "C00A",
        "Nombre": "Kanpezu",
        "Altitud": 550,
        "Municipio": "Campezo/Kanpezu",
        "Provincia": "Álava",
        "Observaciones": "",
        "GpxX": -2.34148,
        "GpxY": 42.6754
    },
    {
        "Id": "C010",
        "Nombre": "Abetxuko-CHE",
        "Altitud": 504,
        "Municipio": "Vitoria-Gasteiz",
        "Provincia": "Álava",
        "Observaciones": "",
        "GpxX": -2.6765434,
        "GpxY": 42.8729023
    },
    {
        "Id": "C011",
        "Nombre": "Mungia-Lauaxeta",
        "Altitud": 23,
        "Municipio": "Mungia",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -2.8499509,
        "GpxY": 43.3561131
    },
    {
        "Id": "C018",
        "Nombre": "Higer",
        "Altitud": 43,
        "Municipio": "Hondarribia",
        "Provincia": "Gipuzkoa",
        "Observaciones": "",
        "GpxX": -1.79615,
        "GpxY": 43.3913
    },
    {
        "Id": "C022",
        "Nombre": "Urkiola",
        "Altitud": 709,
        "Municipio": "Abadiño",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -2.64658,
        "GpxY": 43.1
    },
    {
        "Id": "C021",
        "Nombre": "Roitegi",
        "Altitud": 980,
        "Municipio": "Arraia-Maeztu",
        "Provincia": "Álava",
        "Observaciones": "",
        "GpxX": -2.371,
        "GpxY": 42.7817
    },
    {
        "Id": "C024",
        "Nombre": "Iturrieta",
        "Altitud": 987,
        "Municipio": "Agurain/Salvatierra",
        "Provincia": "Álava",
        "Observaciones": "Transformador de calefaccion EUITI TR-07199-3 el dia 25/11/2005 13:27:08",
        "GpxX": -2.34575,
        "GpxY": 42.7935945
    },
    {
        "Id": "C016",
        "Nombre": "Arkauti",
        "Altitud": 526,
        "Municipio": "Vitoria-Gasteiz",
        "Provincia": "Álava",
        "Observaciones": "",
        "GpxX": -2.621833,
        "GpxY": 42.854275
    },
    {
        "Id": "C025",
        "Nombre": "Beluntza",
        "Altitud": 687,
        "Municipio": "Urkabustaiz",
        "Provincia": "Álava",
        "Observaciones": "Control calefacción EUITI y transformador TR-07191-3 el dia 14/02/2008 15:45:16",
        "GpxX": -2.89361,
        "GpxY": 42.9615782
    },
    {
        "Id": "C020",
        "Nombre": "Trebiño",
        "Altitud": 578,
        "Municipio": "Condado de Treviño",
        "Provincia": "Burgos",
        "Observaciones": "Control calefaccion EUITI y transformador TR-07156-3 el dia 06/07/2007 9:55:37",
        "GpxX": -2.70141,
        "GpxY": 42.7180163
    },
    {
        "Id": "C023",
        "Nombre": "Arrasate",
        "Altitud": 318,
        "Municipio": "Arrasate/Mondragón",
        "Provincia": "Gipuzkoa",
        "Observaciones": "Circuito y transformador de calefaccion EUITI TC-07120-3 el dia 28/11/2005 9:58:38.Localizada en el cementerio Municipal en la torre de comunicaciones del Ayuntamiento",
        "GpxX": -2.49308,
        "GpxY": 43.0695849
    },
    {
        "Id": "C032",
        "Nombre": "Areta",
        "Altitud": 122,
        "Municipio": "Orozko",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -2.93531,
        "GpxY": 43.1394
    },
    {
        "Id": "C030",
        "Nombre": "Salvatierra",
        "Altitud": 589,
        "Municipio": "Agurain/Salvatierra",
        "Provincia": "Álava",
        "Observaciones": "Situada en la E.D.A.R. Del Municipio",
        "GpxX": -2.39538,
        "GpxY": 42.8582
    },
    {
        "Id": "C033",
        "Nombre": "Igorre",
        "Altitud": 150,
        "Municipio": "Igorre",
        "Provincia": "Bizkaia",
        "Observaciones": "Control calefaccion EUITI y transformador TR-07139-3 el dia 13/06/2006 09:39:36 Situada encima del depósito de aguas Municipal",
        "GpxX": -2.7842,
        "GpxY": 43.1686
    },
    {
        "Id": "C026",
        "Nombre": "Berastegi",
        "Altitud": 379,
        "Municipio": "Berastegi",
        "Provincia": "Gipuzkoa",
        "Observaciones": "",
        "GpxX": -1.98168,
        "GpxY": 43.1248
    },
    {
        "Id": "C029",
        "Nombre": "Zizurkil",
        "Altitud": 149,
        "Municipio": "Zizurkil",
        "Provincia": "Gipuzkoa",
        "Observaciones": "",
        "GpxX": -2.06181,
        "GpxY": 43.1901
    },
    {
        "Id": "C034",
        "Nombre": "Espejo",
        "Altitud": 504,
        "Municipio": "Valdegovía/Gaubea",
        "Provincia": "Álava",
        "Observaciones": "Control calefaccion EUITI y transformador el dia 30/03/2006 13:54:09",
        "GpxX": -3.04103,
        "GpxY": 42.8078
    },
    {
        "Id": "C028",
        "Nombre": "Zegama",
        "Altitud": 520,
        "Municipio": "Zegama",
        "Provincia": "Gipuzkoa",
        "Observaciones": "",
        "GpxX": -2.29852,
        "GpxY": 42.9588
    },
    {
        "Id": "C027",
        "Nombre": "Llodio",
        "Altitud": 207,
        "Municipio": "Laudio/Llodio",
        "Provincia": "Álava",
        "Observaciones": "Situada en la E.T.A.P. Del municipio",
        "GpxX": -2.95079,
        "GpxY": 43.1423
    },
    {
        "Id": "C019",
        "Nombre": "Matxitxako",
        "Altitud": 433,
        "Municipio": "Bermeo",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -2.7636,
        "GpxY": 43.4375
    },
    {
        "Id": "C037",
        "Nombre": "Venta Alta",
        "Altitud": 162,
        "Municipio": "Arrigorriaga",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -2.89976,
        "GpxY": 43.2165
    },
    {
        "Id": "C038",
        "Nombre": "Galindo",
        "Altitud": 5,
        "Municipio": "Sestao",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -2.99878,
        "GpxY": 43.3062
    },
    {
        "Id": "C031",
        "Nombre": "Moreda",
        "Altitud": 490,
        "Municipio": "Moreda de Álava/Moreda Araba",
        "Provincia": "Álava",
        "Observaciones": "",
        "GpxX": -2.41023,
        "GpxY": 42.5303
    },
    {
        "Id": "C039",
        "Nombre": "Deusto",
        "Altitud": 3,
        "Municipio": "Bilbao",
        "Provincia": "Bizkaia",
        "Observaciones": "Control calefaccion y transformador EUI- TR07168-3 10/06/2009 06:24:52",
        "GpxX": -2.96791,
        "GpxY": 43.2834
    },
    {
        "Id": "C036",
        "Nombre": "Iurreta",
        "Altitud": 175,
        "Municipio": "Iurreta",
        "Provincia": "Bizkaia",
        "Observaciones": "Circuito y transformador de calefaccion EUITI TC-07124-3 el dia 10/11/2005 13:54:09 mirar",
        "GpxX": -2.622,
        "GpxY": 43.1769
    },
    {
        "Id": "C035",
        "Nombre": "Altube",
        "Altitud": 618,
        "Municipio": "Zuia",
        "Provincia": "Álava",
        "Observaciones": "Situada en el peaje de Altube de la A-68",
        "GpxX": -2.86795,
        "GpxY": 42.9661
    },
    {
        "Id": "C040",
        "Nombre": "Gasteiz",
        "Altitud": 546,
        "Municipio": "Vitoria-Gasteiz",
        "Provincia": "Álava",
        "Observaciones": "",
        "GpxX": -2.68899,
        "GpxY": 42.8604
    },
    {
        "Id": "C043",
        "Nombre": "Ordizia",
        "Altitud": 243,
        "Municipio": "Ordizia",
        "Provincia": "Gipuzkoa",
        "Observaciones": "VTHLI",
        "GpxX": -2.17755,
        "GpxY": 43.0484
    },
    {
        "Id": "C044",
        "Nombre": "Gorbea",
        "Altitud": 662,
        "Municipio": "Zigoitia",
        "Provincia": "Álava",
        "Observaciones": "",
        "GpxX": -2.73515,
        "GpxY": 42.9995
    },
    {
        "Id": "C041",
        "Nombre": "Navarrete",
        "Altitud": 689,
        "Municipio": "Bernedo",
        "Provincia": "Álava",
        "Observaciones": "",
        "GpxX": -2.52321,
        "GpxY": 42.638
    },
    {
        "Id": "C045",
        "Nombre": "La Garbea",
        "Altitud": 717,
        "Municipio": "Balmaseda",
        "Provincia": "Bizkaia",
        "Observaciones": "VTHL",
        "GpxX": -3.19368,
        "GpxY": 43.217
    },
    {
        "Id": "C042",
        "Nombre": "Punta Galea",
        "Altitud": 61,
        "Municipio": "Getxo",
        "Provincia": "Bizkaia",
        "Observaciones": "Control calefaccion EUITI y transformador TR-07196-3 el dia 23/01/2007 12:20:00 (VTHLIP)",
        "GpxX": -3.03608,
        "GpxY": 43.3752
    },
    {
        "Id": "C050",
        "Nombre": "Zambrana",
        "Altitud": 470,
        "Municipio": "Berantevilla",
        "Provincia": "Álava",
        "Observaciones": "Transformador de calefaccion EUITI TR-07198-3 el dia 21/04/2009 10:40:20",
        "GpxX": -2.8869,
        "GpxY": 42.6751
    },
    {
        "Id": "C048",
        "Nombre": "Herrera",
        "Altitud": 1188,
        "Municipio": "Lagrán",
        "Provincia": "Álava",
        "Observaciones": "VTHLI",
        "GpxX": -2.67616,
        "GpxY": 42.5978
    },
    {
        "Id": "C047",
        "Nombre": "Kapildui",
        "Altitud": 1173,
        "Municipio": "Bernedo",
        "Provincia": "Álava",
        "Observaciones": "Control calefaccion EUITI y transformador TR-07198-3 el dia 21/04/2009 10:40:20",
        "GpxX": -2.53785,
        "GpxY": 42.768
    },
    {
        "Id": "C046",
        "Nombre": "Oiz",
        "Altitud": 998,
        "Municipio": "Munitibar-Arbatzegi Gerrikaitz",
        "Provincia": "Bizkaia",
        "Observaciones": "Circuito y transformador de calefaccion EUITI TC-07123-3 el dia 10/11/2005 7:15:57",
        "GpxX": -2.5954,
        "GpxY": 43.2304
    },
    {
        "Id": "C049",
        "Nombre": "Subijana",
        "Altitud": 537,
        "Municipio": "Erriberagoitia/Ribera Alta",
        "Provincia": "Álava",
        "Observaciones": "THL",
        "GpxX": -2.89328,
        "GpxY": 42.8196
    },
    {
        "Id": "C053",
        "Nombre": "Barazar",
        "Altitud": 608,
        "Municipio": "Zeanuri",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -2.71048,
        "GpxY": 43.0703
    },
    {
        "Id": "C057",
        "Nombre": "Mungia",
        "Altitud": 22,
        "Municipio": "Mungia",
        "Provincia": "Bizkaia",
        "Observaciones": "Circuito y transformador de calefaccion EUITI TC-07103-3 el dia 08/06/2005 11:32:06. Pasa a aforo el dia 12-12-2001",
        "GpxX": -2.84702,
        "GpxY": 43.363
    },
    {
        "Id": "C058",
        "Nombre": "Bidania",
        "Altitud": 592,
        "Municipio": "Bidania-Goiatz",
        "Provincia": "Gipuzkoa",
        "Observaciones": "Circuito y transformador de calefaccion EUITI TC-07137-3 el dia 30/05/2006 10:10:30",
        "GpxX": -2.15502,
        "GpxY": 43.146
    },
    {
        "Id": "C052",
        "Nombre": "Ameraun",
        "Altitud": 285,
        "Municipio": "Berastegi",
        "Provincia": "Gipuzkoa",
        "Observaciones": "",
        "GpxX": -1.95085,
        "GpxY": 43.1417
    },
    {
        "Id": "C056",
        "Nombre": "Alegría",
        "Altitud": 545,
        "Municipio": "Alegría-Dulantzi",
        "Provincia": "Álava",
        "Observaciones": "Transformador de calefaccion EUITI TR-07121-3 el dia 12/12/2006 13:10:13",
        "GpxX": -2.52402,
        "GpxY": 42.8447
    },
    {
        "Id": "C054",
        "Nombre": "Otxandio",
        "Altitud": 556,
        "Municipio": "Otxandio",
        "Provincia": "Bizkaia",
        "Observaciones": "Transformador de calefaccion EUITI TR-07159-3 el dia 12/02/2009 16:01:00",
        "GpxX": -2.65763,
        "GpxY": 43.0423
    },
    {
        "Id": "C055",
        "Nombre": "Ozaeta",
        "Altitud": 548,
        "Municipio": "Barrundia",
        "Provincia": "Álava",
        "Observaciones": "Control de calefaccion EUITI y trasformador TR-07173-3 el dia 28/08/2009 12:06:43",
        "GpxX": -2.49313,
        "GpxY": 42.913
    },
    {
        "Id": "C059",
        "Nombre": "Ordunte",
        "Altitud": 300,
        "Municipio": "Valle de Mena",
        "Provincia": "Burgos",
        "Observaciones": "",
        "GpxX": -3.28404,
        "GpxY": 43.1623
    },
    {
        "Id": "C061",
        "Nombre": "Arboleda",
        "Altitud": 329,
        "Municipio": "Valle de Trápaga-Trapagaran",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -3.06747,
        "GpxY": 43.2967
    },
    {
        "Id": "C060",
        "Nombre": "Páganos",
        "Altitud": 577,
        "Municipio": "Laguardia",
        "Provincia": "Álava",
        "Observaciones": "Transformador de calefaccion EUITI TR-07112-3 16/03/2005 9:47:38",
        "GpxX": -2.60055,
        "GpxY": 42.5605
    },
    {
        "Id": "C066",
        "Nombre": "Untzueta",
        "Altitud": 764,
        "Municipio": "Orozko",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -2.9071,
        "GpxY": 43.1392
    },
    {
        "Id": "C067",
        "Nombre": "Gardea",
        "Altitud": 141,
        "Municipio": "Laudio/Llodio",
        "Provincia": "Álava",
        "Observaciones": "Transformador de calefaccion EUITI TR-07115-3 el dia 24/11/2009 09:34:58",
        "GpxX": -2.98025,
        "GpxY": 43.1272
    },
    {
        "Id": "C068",
        "Nombre": "Ilarduia",
        "Altitud": 596,
        "Municipio": "Asparrena",
        "Provincia": "Álava",
        "Observaciones": "",
        "GpxX": -2.28623,
        "GpxY": 42.87395
    },
    {
        "Id": "C069",
        "Nombre": "Almike (Bermeo)",
        "Altitud": 106,
        "Municipio": "Bermeo",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -2.73229,
        "GpxY": 43.4137
    },
    {
        "Id": "C070",
        "Nombre": "Zaldiaran",
        "Altitud": 980,
        "Municipio": "Vitoria-Gasteiz",
        "Provincia": "Álava",
        "Observaciones": "Circuito y transformador de calefaccion EUITI TR-07131-3 el dia 16/03/2006 15:02:08",
        "GpxX": -2.73642,
        "GpxY": 42.7966
    },
    {
        "Id": "C065",
        "Nombre": "Cerroja",
        "Altitud": 677,
        "Municipio": "Karrantza Harana/Valle de Carranza",
        "Provincia": "Bizkaia",
        "Observaciones": "Control calefaccion EUITI y transformador TR-07105-3 el dia 10/01/2008 06:34:43",
        "GpxX": -3.40713,
        "GpxY": 43.2112
    },
    {
        "Id": "C063",
        "Nombre": "Muxika",
        "Altitud": 16,
        "Municipio": "Muxika",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -2.68914,
        "GpxY": 43.2897
    },
    {
        "Id": "C071",
        "Nombre": "Jaizkibel",
        "Altitud": 545,
        "Municipio": "Lezo",
        "Provincia": "Gipuzkoa",
        "Observaciones": "",
        "GpxX": -1.85972,
        "GpxY": 43.3446
    },
    {
        "Id": "C072",
        "Nombre": "Orduña",
        "Altitud": 934,
        "Municipio": "Urduña/Orduña",
        "Provincia": "Bizkaia",
        "Observaciones": "VTHL",
        "GpxX": -3.03726,
        "GpxY": 42.9837
    },
    {
        "Id": "C064",
        "Nombre": "Zarautz",
        "Altitud": 80,
        "Municipio": "Zarautz",
        "Provincia": "Gipuzkoa",
        "Observaciones": "VTHLI",
        "GpxX": -2.14542,
        "GpxY": 43.293
    },
    {
        "Id": "C073",
        "Nombre": "Mallabia",
        "Altitud": 325,
        "Municipio": "Mallabia",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -2.5295246,
        "GpxY": 43.1926263
    },
    {
        "Id": "C074",
        "Nombre": "Elorrio",
        "Altitud": 170,
        "Municipio": "Elorrio",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -2.55853,
        "GpxY": 43.1306
    },
    {
        "Id": "C077",
        "Nombre": "Andoain",
        "Altitud": 52,
        "Municipio": "Andoain",
        "Provincia": "Gipuzkoa",
        "Observaciones": "THLNC",
        "GpxX": -2.01559,
        "GpxY": 43.2109
    },
    {
        "Id": "C079",
        "Nombre": "Amorebieta",
        "Altitud": 65,
        "Municipio": "Amorebieta-Etxano",
        "Provincia": "Bizkaia",
        "Observaciones": "Circuito y transformador de calefaccion EUITI TR-07192-3 el dia 23/02/2006 9:17:34",
        "GpxX": -2.73304,
        "GpxY": 43.2185
    },
    {
        "Id": "C078",
        "Nombre": "Altzola",
        "Altitud": 17,
        "Municipio": "Elgoibar",
        "Provincia": "Gipuzkoa",
        "Observaciones": "",
        "GpxX": -2.39784,
        "GpxY": 43.2419
    },
    {
        "Id": "C076",
        "Nombre": "Abetxuko",
        "Altitud": 510,
        "Municipio": "Vitoria-Gasteiz",
        "Provincia": "Álava",
        "Observaciones": "",
        "GpxX": -2.66879,
        "GpxY": 42.8755
    },
    {
        "Id": "C075",
        "Nombre": "Eitzaga",
        "Altitud": 270,
        "Municipio": "Zaldibar",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -2.50096,
        "GpxY": 43.1761
    },
    {
        "Id": "C080",
        "Nombre": "Añarbe",
        "Altitud": 184,
        "Municipio": "Oiartzun",
        "Provincia": "Gipuzkoa",
        "Observaciones": "",
        "GpxX": -1.84981,
        "GpxY": 43.2276
    },
    {
        "Id": "C082",
        "Nombre": "Txomin Enea",
        "Altitud": 17,
        "Municipio": "Donostia / San Sebastián",
        "Provincia": "Gipuzkoa",
        "Observaciones": "",
        "GpxX": -1.96198,
        "GpxY": 43.3076
    },
    {
        "Id": "C081",
        "Nombre": "Martutene",
        "Altitud": 38,
        "Municipio": "Donostia / San Sebastián",
        "Provincia": "Gipuzkoa",
        "Observaciones": "",
        "GpxX": -1.95634,
        "GpxY": 43.297
    },
    {
        "Id": "C084",
        "Nombre": "Behobia",
        "Altitud": 5,
        "Municipio": "Irun",
        "Provincia": "Gipuzkoa",
        "Observaciones": "",
        "GpxX": -1.76117,
        "GpxY": 43.346
    },
    {
        "Id": "C0A2",
        "Nombre": "Egino",
        "Altitud": 556,
        "Municipio": "Asparrena",
        "Provincia": "Álava",
        "Observaciones": "",
        "GpxX": -2.25319,
        "GpxY": 42.86831
    },
    {
        "Id": "C083",
        "Nombre": "Jaizubia",
        "Altitud": 122,
        "Municipio": "Irun",
        "Provincia": "Gipuzkoa",
        "Observaciones": "",
        "GpxX": -1.82138,
        "GpxY": 43.3402
    },
    {
        "Id": "C0A3",
        "Nombre": "Antoñana",
        "Altitud": 573,
        "Municipio": "Campezo/Kanpezu",
        "Provincia": "Álava",
        "Observaciones": "",
        "GpxX": -2.39017,
        "GpxY": 42.67846
    },
    {
        "Id": "C0A1",
        "Nombre": "Pagoeta",
        "Altitud": 705,
        "Municipio": "Peñacerrada-Urizaharra",
        "Provincia": "Álava",
        "Observaciones": "",
        "GpxX": -2.72441,
        "GpxY": 42.64782
    },
    {
        "Id": "C0AB",
        "Nombre": "Nanclares",
        "Altitud": 472,
        "Municipio": "Iruña Oka/Iruña de Oca",
        "Provincia": "Álava",
        "Observaciones": "",
        "GpxX": -2.8239093,
        "GpxY": 42.7934862
    },
    {
        "Id": "C0AA",
        "Nombre": "Etura",
        "Altitud": 549,
        "Municipio": "Barrundia",
        "Provincia": "Álava",
        "Observaciones": "",
        "GpxX": -2.50361,
        "GpxY": 42.8878
    },
    {
        "Id": "C0B0",
        "Nombre": "La Merced",
        "Altitud": 7,
        "Municipio": "Bilbao",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -2.92679,
        "GpxY": 43.2596
    },
    {
        "Id": "C0A0",
        "Nombre": "Sarria",
        "Altitud": 655,
        "Municipio": "Zuia",
        "Provincia": "Álava",
        "Observaciones": "",
        "GpxX": -2.8302,
        "GpxY": 42.9798
    },
    {
        "Id": "C085",
        "Nombre": "Eibar",
        "Altitud": 106,
        "Municipio": "Eibar",
        "Provincia": "Gipuzkoa",
        "Observaciones": "",
        "GpxX": -2.4542,
        "GpxY": 43.1921
    },
    {
        "Id": "C0B3",
        "Nombre": "Urkizu",
        "Altitud": 75,
        "Municipio": "Igorre",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -2.7721,
        "GpxY": 43.1849
    },
    {
        "Id": "C0A4",
        "Nombre": "Albaina",
        "Altitud": 594,
        "Municipio": "Condado de Treviño",
        "Provincia": "Burgos",
        "Observaciones": "",
        "GpxX": -2.631363,
        "GpxY": 42.692483
    },
    {
        "Id": "C0B1",
        "Nombre": "Abusu",
        "Altitud": 23,
        "Municipio": "Arrigorriaga",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -2.91364,
        "GpxY": 43.2474
    },
    {
        "Id": "C0B2",
        "Nombre": "Zaratamo",
        "Altitud": 65,
        "Municipio": "Zaratamo",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -2.87935,
        "GpxY": 43.22
    },
    {
        "Id": "C0B6",
        "Nombre": "Berna",
        "Altitud": 95,
        "Municipio": "Iurreta",
        "Provincia": "Bizkaia",
        "Observaciones": "THLN",
        "GpxX": -2.67238,
        "GpxY": 43.1871
    },
    {
        "Id": "C0B9",
        "Nombre": "Sangroniz",
        "Altitud": 10,
        "Municipio": "Sondika",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -2.9308,
        "GpxY": 43.2893
    },
    {
        "Id": "C0B8",
        "Nombre": "Larrainazubi",
        "Altitud": 7,
        "Municipio": "Getxo",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -2.99932,
        "GpxY": 43.3463
    },
    {
        "Id": "C0B4",
        "Nombre": "Orozko",
        "Altitud": 200,
        "Municipio": "Orozko",
        "Provincia": "Bizkaia",
        "Observaciones": "VTHLN",
        "GpxX": -2.91543,
        "GpxY": 43.0864
    },
    {
        "Id": "C0B5",
        "Nombre": "Oromino",
        "Altitud": 99,
        "Municipio": "Iurreta",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -2.6767982,
        "GpxY": 43.1920372
    },
    {
        "Id": "C0B7",
        "Nombre": "Mañaria",
        "Altitud": 168,
        "Municipio": "Izurtza",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -2.64657,
        "GpxY": 43.1437
    },
    {
        "Id": "C0BD",
        "Nombre": "Iruzubieta",
        "Altitud": 110,
        "Municipio": "Ziortza-Bolibar",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -2.526,
        "GpxY": 43.2584
    },
    {
        "Id": "C0BA",
        "Nombre": "Oleta",
        "Altitud": 14,
        "Municipio": "Amoroto",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -2.5088,
        "GpxY": 43.3448
    },
    {
        "Id": "C0C3",
        "Nombre": "Sodupe-Cadagua",
        "Altitud": 80,
        "Municipio": "Güeñes",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -3.0493,
        "GpxY": 43.2025
    },
    {
        "Id": "C0C4",
        "Nombre": "Sodupe-Herrerias",
        "Altitud": 70,
        "Municipio": "Güeñes",
        "Provincia": "Bizkaia",
        "Observaciones": "En esta estación el sensor de Ritt-Meyer mide bien entre 0 y 575 cm.",
        "GpxX": -3.04461,
        "GpxY": 43.2024
    },
    {
        "Id": "C0C1",
        "Nombre": "Aranguren",
        "Altitud": 92,
        "Municipio": "Zalla",
        "Provincia": "Bizkaia",
        "Observaciones": "THLN",
        "GpxX": -3.12755,
        "GpxY": 43.2117
    },
    {
        "Id": "C0D0",
        "Nombre": "Urkulu",
        "Altitud": 340,
        "Municipio": "Aretxabaleta",
        "Provincia": "Gipuzkoa",
        "Observaciones": "",
        "GpxX": -2.47239,
        "GpxY": 43.013
    },
    {
        "Id": "C0D2",
        "Nombre": "San Prudentzio",
        "Altitud": 175,
        "Municipio": "Bergara",
        "Provincia": "Gipuzkoa",
        "Observaciones": "TNC",
        "GpxX": -2.44745,
        "GpxY": 43.0835
    },
    {
        "Id": "C051",
        "Nombre": "Saratxo",
        "Altitud": 230,
        "Municipio": "Amurrio",
        "Provincia": "Álava",
        "Observaciones": "Circuito y transformador de calefaccion EUITI TC-07118-3 el dia 12/05/2005 9:56:02",
        "GpxX": -3.00398,
        "GpxY": 43.0342
    },
    {
        "Id": "C0BE",
        "Nombre": "Berriatua",
        "Altitud": 25,
        "Municipio": "Berriatua",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -2.47616,
        "GpxY": 43.3063
    },
    {
        "Id": "C0C2",
        "Nombre": "Balmaseda",
        "Altitud": 178,
        "Municipio": "Balmaseda",
        "Provincia": "Bizkaia",
        "Observaciones": "VTHLNI",
        "GpxX": -3.21913,
        "GpxY": 43.1771
    },
    {
        "Id": "C0D1",
        "Nombre": "Oñati",
        "Altitud": 195,
        "Municipio": "Oñati",
        "Provincia": "Gipuzkoa",
        "Observaciones": "Circuito y transformador de calefaccion EUITI TC-07125-3 el dia 28/11/2005 12:51:25",
        "GpxX": -2.43755,
        "GpxY": 43.0621
    },
    {
        "Id": "C0C0",
        "Nombre": "Zalla",
        "Altitud": 90,
        "Municipio": "Zalla",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -3.13522,
        "GpxY": 43.214
    },
    {
        "Id": "C0C5",
        "Nombre": "Arenao",
        "Altitud": 47,
        "Municipio": "Galdames",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -3.1394712,
        "GpxY": 43.2807248
    },
    {
        "Id": "C0DE",
        "Nombre": "Matxinbenta",
        "Altitud": 250,
        "Municipio": "Beasain",
        "Provincia": "Gipuzkoa",
        "Observaciones": "",
        "GpxX": -2.23513,
        "GpxY": 43.1135
    },
    {
        "Id": "C0E1",
        "Nombre": "Amundarain",
        "Altitud": 111,
        "Municipio": "Zaldibia",
        "Provincia": "Gipuzkoa",
        "Observaciones": "Circuito y transformador de calefaccion EUITI TC-07114-3 el dia 16/05/2005 11:22:01",
        "GpxX": -2.15086,
        "GpxY": 43.0335
    },
    {
        "Id": "C0DD",
        "Nombre": "Aizarnazabal",
        "Altitud": 25,
        "Municipio": "Zestoa",
        "Provincia": "Gipuzkoa",
        "Observaciones": "Solidos en suspension desde el 30/09/05",
        "GpxX": -2.24219,
        "GpxY": 43.2553
    },
    {
        "Id": "C0D3",
        "Nombre": "Aixola",
        "Altitud": 320,
        "Municipio": "Elorrio",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -2.50123,
        "GpxY": 43.1547
    },
    {
        "Id": "C0DC",
        "Nombre": "Ibai Eder",
        "Altitud": 90,
        "Municipio": "Azpeitia",
        "Provincia": "Gipuzkoa",
        "Observaciones": "Transformador de calefaccion EUITI TR-07127-3 el dia 28/12/2005 11:50:17",
        "GpxX": -2.25601,
        "GpxY": 43.1751
    },
    {
        "Id": "C0E5",
        "Nombre": "Agauntza",
        "Altitud": 180,
        "Municipio": "Ataun",
        "Provincia": "Gipuzkoa",
        "Observaciones": "",
        "GpxX": -2.17748,
        "GpxY": 43.0179
    },
    {
        "Id": "C0DB",
        "Nombre": "Aitzu",
        "Altitud": 312,
        "Municipio": "Zumarraga",
        "Provincia": "Gipuzkoa",
        "Observaciones": "Circuito y transformador de calefaccion EUITI TC-07116-3 el dia 10/05/2005 12:27",
        "GpxX": -2.323,
        "GpxY": 43.1141
    },
    {
        "Id": "C0EA",
        "Nombre": "Belauntza",
        "Altitud": 105,
        "Municipio": "Belauntza",
        "Provincia": "Gipuzkoa",
        "Observaciones": "",
        "GpxX": -2.04845,
        "GpxY": 43.1424
    },
    {
        "Id": "C0E7",
        "Nombre": "Estanda",
        "Altitud": 195,
        "Municipio": "Beasain",
        "Provincia": "Gipuzkoa",
        "Observaciones": "THNCL  \\r\\nesto es una prueba",
        "GpxX": -2.21877,
        "GpxY": 43.052
    },
    {
        "Id": "C0E8",
        "Nombre": "Araxes",
        "Altitud": 141,
        "Municipio": "Lizartza",
        "Provincia": "Gipuzkoa",
        "Observaciones": "",
        "GpxX": -2.04772,
        "GpxY": 43.1148
    },
    {
        "Id": "E000",
        "Nombre": "Olabarria",
        "Altitud": 218,
        "Municipio": "Zeanuri",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -2.74107,
        "GpxY": 43.0763
    },
    {
        "Id": "C0EC",
        "Nombre": "Lasarte",
        "Altitud": 18,
        "Municipio": "Lasarte-Oria",
        "Provincia": "Gipuzkoa",
        "Observaciones": "",
        "GpxX": -2.02109,
        "GpxY": 43.2527
    },
    {
        "Id": "C0E9",
        "Nombre": "Alegia",
        "Altitud": 90,
        "Municipio": "Alegia",
        "Provincia": "Gipuzkoa",
        "Observaciones": "Control de calefaccion EUITI y trasformador TR-07149-3 el dia 07/03/2007 11:40:54",
        "GpxX": -2.10488,
        "GpxY": 43.1018
    },
    {
        "Id": "M09A",
        "Nombre": "Mareógrafo Bermeo",
        "Altitud": 5,
        "Municipio": "Bermeo",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -2.7184411,
        "GpxY": 43.4189241
    },
    {
        "Id": "E001",
        "Nombre": "Undurraga",
        "Altitud": 218,
        "Municipio": "Zeanuri",
        "Provincia": "Bizkaia",
        "Observaciones": "",
        "GpxX": -2.747883,
        "GpxY": 43.089022
    },
    {
        "Id": "C0F0",
        "Nombre": "Ereñozu",
        "Altitud": 25,
        "Municipio": "Hernani",
        "Provincia": "Gipuzkoa",
        "Observaciones": "Control de calefaccion EUI TR07170-3",
        "GpxX": -1.93922,
        "GpxY": 43.242
    },
    {
        "Id": "C0F1",
        "Nombre": "Eskas",
        "Altitud": 650,
        "Municipio": "Goizueta",
        "Provincia": "Navarra",
        "Observaciones": "",
        "GpxX": -1.8007078,
        "GpxY": 43.2423581
    },
    {
        "Id": "C0F4",
        "Nombre": "Oiartzun",
        "Altitud": 53,
        "Municipio": "Errenteria",
        "Provincia": "Gipuzkoa",
        "Observaciones": "Solidos en suspension desde el 27/09/05. Tiene una cuenca de 56,54 km2",
        "GpxX": -1.88459,
        "GpxY": 43.3087
    }
]
`;

},{}]},["NAm6W","ddYv4"], "ddYv4", "parcelRequire2d1f")

//# sourceMappingURL=index.bd671c2c.js.map
