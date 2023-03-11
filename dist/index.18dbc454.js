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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
})({"9tRox":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0bcb44a518dbc454";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
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
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1SICI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "studentList", ()=>studentList);
parcelHelpers.export(exports, "employeeList", ()=>employeeList);
parcelHelpers.export(exports, "customerList", ()=>customerList);
parcelHelpers.export(exports, "listPersons", ()=>listPersons);
var _helpersJs = require("./helpers.js");
var _renderJs = require("./render.js");
var _studentfuncJs = require("./studentfunc.js");
var _employeefunc = require("./employeefunc");
var _customerfunc = require("./customerfunc");
let studentList = (0, _helpersJs.getStoreStudent)("studentList");
let employeeList = (0, _helpersJs.getStoreEmployee)("employeeList");
let customerList = (0, _helpersJs.getStoreCustomer)("customerList");
let listPersons = (0, _helpersJs.getStore)("listPersons");
(0, _renderJs.renderStudent)(studentList);
(0, _renderJs.renderEmployee)(employeeList);
(0, _renderJs.renderCustomer)(customerList);
(0, _renderJs.renderListPersons)(listPersons);
// =================== Student =========================
// DOM Created Student
(0, _helpersJs.getEle)("#btnAddStudent").addEventListener("click", ()=>{
    let html = `
    <button class="btn btn-secondary" data-dismiss="modal" id="cancle" >Cancle</button>
    <button class="btn btn-success ml-2" >Created</button>
    `;
    (0, _helpersJs.getEle)(".modal-footer-Student").innerHTML = html;
});
(0, _helpersJs.getEle)(".modal-footer-Student").addEventListener("click", (evt)=>{
    // Created Student
    if (evt.target.innerHTML === "Created") {
        (0, _studentfuncJs.addStudent)();
        (0, _renderJs.renderStudent)(studentList);
        (0, _renderJs.renderListPersons)(listPersons);
    }
    // Update Student
    if (evt.target.innerHTML === "Update") {
        (0, _studentfuncJs.updateStudent)();
        (0, _renderJs.renderStudent)(studentList);
        (0, _renderJs.renderListPersons)(listPersons);
    }
    if (evt.target.innerHTML === "Cancle") (0, _studentfuncJs.resetFormStudent)();
});
// delete Student
(0, _helpersJs.getEle)("#tblStudentList").addEventListener("click", (evt)=>{
    if (evt.target.innerHTML === "Delete") {
        (0, _studentfuncJs.deleteStudent)(evt.target.getAttribute("data-id"));
        (0, _renderJs.renderStudent)(studentList);
        (0, _renderJs.renderListPersons)(listPersons);
    } else if (evt.target.innerHTML === "Update") (0, _studentfuncJs.selectStudent)(evt.target.getAttribute("data-id"));
});
// search
(0, _helpersJs.getEle)("#txtSearchStudent").addEventListener("keydown", (evt)=>{
    setTimeout(()=>{
        const searchValue = evt.target.value;
        (0, _renderJs.renderStudent)((0, _helpersJs.search)(searchValue, studentList));
    }, 1000);
});
// arrange A-Z or Z-A
(0, _helpersJs.getEle)("#studentSort").addEventListener("change", (evt)=>{
    if (evt.target.value == 1) {
        let sort = (0, _helpersJs.sortdUp)(studentList);
        (0, _renderJs.renderStudent)(sort);
    }
    if (evt.target.value == 2) {
        let sort = (0, _helpersJs.sortDown)(studentList);
        (0, _renderJs.renderStudent)(sort);
    }
});
// =================== Employee =========================
// DOM Created Employee
(0, _helpersJs.getEle)("#btnAddEmployee").addEventListener("click", ()=>{
    console.log("click employee");
    let html = `
    <button class="btn btn-secondary" data-dismiss="modal" id="cancle" >Cancle</button>
    <button class="btn btn-success ml-2" >Created</button>
    `;
    (0, _helpersJs.getEle)(".modal-footer-Employee").innerHTML = html;
});
(0, _helpersJs.getEle)(".modal-footer-Employee").addEventListener("click", (evt)=>{
    // Created Employee
    if (evt.target.innerHTML === "Created") {
        (0, _employeefunc.addEmployee)();
        (0, _renderJs.renderEmployee)(employeeList);
        (0, _renderJs.renderListPersons)(listPersons);
    }
    // Update Student
    if (evt.target.innerHTML === "Update") {
        (0, _employeefunc.updateEmployee)();
        (0, _renderJs.renderEmployee)(employeeList);
        (0, _renderJs.renderListPersons)(listPersons);
    }
    if (evt.target.innerHTML === "Cancle") (0, _employeefunc.resetFormEmployee)();
});
// // delete Employee and select Employee
(0, _helpersJs.getEle)("#tblEmployeeList").addEventListener("click", (evt)=>{
    if (evt.target.innerHTML === "Delete") {
        (0, _employeefunc.deleteEmployee)(evt.target.getAttribute("data-id"));
        (0, _renderJs.renderEmployee)(employeeList);
        (0, _renderJs.renderListPersons)(listPersons);
    } else if (evt.target.innerHTML === "Update") (0, _employeefunc.selectEmployee)(evt.target.getAttribute("data-id"));
});
// // search
(0, _helpersJs.getEle)("#txtSearchEmployee").addEventListener("keydown", (evt)=>{
    setTimeout(()=>{
        const searchValue = evt.target.value;
        (0, _renderJs.renderEmployee)((0, _helpersJs.search)(searchValue, employeeList));
    }, 1000);
});
// // arrange A-Z or Z-A
(0, _helpersJs.getEle)("#employeeSort").addEventListener("change", (evt)=>{
    if (evt.target.value == 1) {
        let sort = (0, _helpersJs.sortdUp)(employeeList);
        (0, _renderJs.renderEmployee)(sort);
    }
    if (evt.target.value == 2) {
        let sort = (0, _helpersJs.sortDown)(employeeList);
        (0, _renderJs.renderEmployee)(sort);
    }
});
// =================== Customer =========================
// DOM Created Customer
(0, _helpersJs.getEle)("#btnAddCustomer").addEventListener("click", ()=>{
    let html = `
    <button class="btn btn-secondary" data-dismiss="modal" id="cancle" >Cancle</button>
    <button class="btn btn-success ml-2" >Created</button>
    `;
    (0, _helpersJs.getEle)(".modal-footer-Customer").innerHTML = html;
});
(0, _helpersJs.getEle)(".modal-footer-Customer").addEventListener("click", (evt)=>{
    // Created Customer
    if (evt.target.innerHTML === "Created") {
        (0, _customerfunc.addCustomer)();
        (0, _renderJs.renderCustomer)(customerList);
        (0, _renderJs.renderListPersons)(listPersons);
    }
    // Update Student
    if (evt.target.innerHTML === "Update") {
        (0, _customerfunc.updateCustomer)();
        (0, _renderJs.renderCustomer)(customerList);
        (0, _renderJs.renderListPersons)(listPersons);
    }
    if (evt.target.innerHTML === "Cancle") (0, _customerfunc.resetFormCustomer)();
});
// // // delete Customer and select Customer
(0, _helpersJs.getEle)("#tblCustomerList").addEventListener("click", (evt)=>{
    if (evt.target.innerHTML === "Delete") {
        (0, _customerfunc.deleteCustomer)(evt.target.getAttribute("data-id"));
        (0, _renderJs.renderCustomer)(customerList);
        (0, _renderJs.renderListPersons)(listPersons);
    } else if (evt.target.innerHTML === "Update") (0, _customerfunc.selectCustomer)(evt.target.getAttribute("data-id"));
});
// // // search
(0, _helpersJs.getEle)("#txtSearchCustomer").addEventListener("keydown", (evt)=>{
    setTimeout(()=>{
        const searchValue = evt.target.value;
        (0, _renderJs.renderCustomer)((0, _helpersJs.search)(searchValue, customerList));
    }, 1000);
});
// // // arrange A-Z or Z-A
(0, _helpersJs.getEle)("#customerSort").addEventListener("change", (evt)=>{
    if (evt.target.value == 1) {
        let sort = (0, _helpersJs.sortdUp)(customerList);
        (0, _renderJs.renderCustomer)(sort);
    }
    if (evt.target.value == 2) {
        let sort = (0, _helpersJs.sortDown)(customerList);
        (0, _renderJs.renderCustomer)(sort);
    }
});
// =================== ListPeron =========================
// // search
(0, _helpersJs.getEle)("#txtSearchListPerson").addEventListener("keydown", (evt)=>{
    setTimeout(()=>{
        const searchValue = evt.target.value;
        (0, _renderJs.renderListPersons)((0, _helpersJs.search)(searchValue, listPersons));
    }, 1000);
});
// // arrange A-Z or Z-A
(0, _helpersJs.getEle)("#listPersonSort").addEventListener("change", (evt)=>{
    if (evt.target.value == 1) {
        let sort = (0, _helpersJs.sortdUp)(listPersons);
        (0, _renderJs.renderListPersons)(sort);
    }
    if (evt.target.value == 2) {
        let sort = (0, _helpersJs.sortDown)(listPersons);
        (0, _renderJs.renderListPersons)(sort);
    }
});

},{"./helpers.js":"hGI1E","./render.js":"6Nkx6","./studentfunc.js":"kwUO3","./employeefunc":"jtQCe","./customerfunc":"hpm2F","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hGI1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// ================ Helpers ===================
parcelHelpers.export(exports, "getEle", ()=>getEle);
// lưu localstory
parcelHelpers.export(exports, "store", ()=>store);
// lấy thông tin giỏ hàng từ local
parcelHelpers.export(exports, "getStore", ()=>getStore);
parcelHelpers.export(exports, "getStoreStudent", ()=>getStoreStudent);
parcelHelpers.export(exports, "getStoreEmployee", ()=>getStoreEmployee);
parcelHelpers.export(exports, "getStoreCustomer", ()=>getStoreCustomer);
parcelHelpers.export(exports, "findI", ()=>findI);
parcelHelpers.export(exports, "searchStudent", ()=>searchStudent);
parcelHelpers.export(exports, "search", ()=>search);
parcelHelpers.export(exports, "sortdUp", ()=>sortdUp);
parcelHelpers.export(exports, "sortDown", ()=>sortDown);
var _constructorJs = require("./constructor.js");
function getEle(selector) {
    return document.querySelector(selector);
}
function store(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
}
function getStore(key) {
    const json = localStorage.getItem(key);
    if (!json) return [];
    // chuyển Json -> Array
    const personList = JSON.parse(json);
    for(let i = 0; i < personList.length; i++){
        const person = personList[i];
        personList[i] = new (0, _constructorJs.Person)(person.code, person.fullname, person.address, person.email, person.type);
    }
    return personList;
}
function getStoreStudent(key) {
    const json = localStorage.getItem(key);
    if (!json) return [];
    // chuyển Json -> Array
    const studentList1 = JSON.parse(json);
    for(let i = 0; i < studentList1.length; i++){
        const student = studentList1[i];
        studentList1[i] = new (0, _constructorJs.Student)(student.code, student.fullname, student.address, student.email, +student.math, +student.physical, +student.chemistry, student.type);
    }
    return studentList1;
}
function getStoreEmployee(key) {
    const json = localStorage.getItem(key);
    if (!json) return [];
    // chuyển Json -> Array
    const employeeList = JSON.parse(json);
    for(let i = 0; i < employeeList.length; i++){
        const employee = employeeList[i];
        employeeList[i] = new (0, _constructorJs.Employee)(employee.code, employee.fullname, employee.address, employee.email, +employee.workingday, +employee.dailywage, employee.type);
    }
    return employeeList;
}
function getStoreCustomer(key) {
    const json = localStorage.getItem(key);
    if (!json) return [];
    // chuyển Json -> Array
    const customerList = JSON.parse(json);
    for(let i = 0; i < customerList.length; i++){
        const customer = customerList[i];
        customerList[i] = new (0, _constructorJs.Customer)(customer.code, customer.fullname, customer.address, customer.email, customer.companyname, +customer.totalinvoice, +customer.rank, customer.type);
    }
    return customerList;
}
function findI(code, List) {
    let index = List.findIndex((student)=>{
        return student.code === code;
    });
    return index;
}
function searchStudent(searchName) {
    let newStudent = studentList.filter((student)=>{
        let nameStudent = student.fullname.toLowerCase();
        searchName = searchName.toLowerCase();
        return nameStudent.indexOf(searchName) !== -1;
    });
    return newStudent;
}
function search(name, list) {
    let newList = list.filter((li)=>{
        let nameli = li.fullname.toLowerCase();
        name = name.toLowerCase();
        return nameli.indexOf(name) !== -1;
    });
    return newList;
}
let sortArray;
function sortdUp(list) {
    sortArray = list.sort((a, b)=>{
        const nameA = a.fullname.toLowerCase();
        const nameB = b.fullname.toLowerCase();
        if (nameA < nameB) return -1;
        else if (nameA > nameB) return 1;
        else return 0;
    });
    return sortArray;
}
function sortDown(list) {
    sortArray = list.sort((a, b)=>{
        const nameA = a.fullname.toLowerCase();
        const nameB = b.fullname.toLowerCase();
        if (nameA > nameB) return -1;
        else if (nameA < nameB) return 1;
        else return 0;
    });
    return sortArray;
}

},{"./constructor.js":"ln1nT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ln1nT":[function(require,module,exports) {
// class cha
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Person", ()=>Person);
parcelHelpers.export(exports, "Student", ()=>Student);
parcelHelpers.export(exports, "Employee", ()=>Employee);
parcelHelpers.export(exports, "Customer", ()=>Customer);
class Person {
    constructor(code, fullname, address, email, type){
        this.code = code;
        this.fullname = fullname;
        this.address = address;
        this.email = email;
        this.type = type;
    }
}
class Student extends Person {
    constructor(code, fullname, address, email, math, physical, chemistry, type){
        super(code, fullname, address, email, type);
        this.math = +math;
        this.physical = +physical;
        this.chemistry = +chemistry;
    }
    calcMedium() {
        return (this.math + this.physical + this.chemistry) / 3;
    }
}
class Employee extends Person {
    constructor(code, fullname, address, email, workingday, dailywage, type){
        super(code, fullname, address, email, type);
        this.workingday = +workingday;
        this.dailywage = +dailywage;
    }
    calcSalary() {
        return this.workingday * this.dailywage;
    }
}
class Customer extends Person {
    constructor(code, fullname, address, email, companyname, totalinvoice, rank, type){
        super(code, fullname, address, email, type);
        this.companyname = companyname;
        this.totalinvoice = +totalinvoice;
        this.rank = rank;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"6Nkx6":[function(require,module,exports) {
// SpeechSynthesisUtterance
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Student
parcelHelpers.export(exports, "renderStudent", ()=>renderStudent);
// Employee
parcelHelpers.export(exports, "renderEmployee", ()=>renderEmployee);
// Customer
parcelHelpers.export(exports, "renderCustomer", ()=>renderCustomer);
// ListPerson
parcelHelpers.export(exports, "renderListPersons", ()=>renderListPersons);
var _helpersJs = require("./helpers.js");
function renderStudent(studentList) {
    let html = studentList.reduce((output, student, index)=>{
        return output + `
            <tr>
                <td>${index + 1}</td>
                <td>${student.fullname}</td>
                <td>${student.address}</td>
                <td>${student.code}</td>
                <td>${student.email}</td>
                <td>${student.math}</td>
                <td>${student.physical}</td>
                <td>${student.chemistry}</td>
                <td>${student.calcMedium()}</td>
                <td>
                    <button class="btn btn-primary" data-toggle="modal"
                    data-target="#StudentModal" data-id="${student.code}">Update</button>
                    <button class="btn btn-danger" data-id="${student.code}">Delete</button>
                </td>
            </tr>
            `;
    }, "");
    (0, _helpersJs.getEle)("#tblStudentList").innerHTML = html;
}
function renderEmployee(employeeList) {
    let html = employeeList.reduce((output, employee, index)=>{
        return output + `
            <tr>
                <td>${index + 1}</td>
                <td>${employee.fullname}</td>
                <td>${employee.address}</td>
                <td>${employee.code}</td>
                <td>${employee.email}</td>
                <td>${employee.workingday}</td>
                <td>${employee.dailywage}</td>
                <td>${employee.calcSalary()}</td>
                <td>
                    <button class="btn btn-primary" data-toggle="modal"
                    data-target="#EmployeeModal" data-id="${employee.code}">Update</button>
                    <button class="btn btn-danger" data-id="${employee.code}">Delete</button>
                </td>
            </tr>
            `;
    }, "");
    (0, _helpersJs.getEle)("#tblEmployeeList").innerHTML = html;
}
function renderCustomer(CustomerList) {
    let html = CustomerList.reduce((output, Customer, index)=>{
        return output + `
            <tr>
                <td>${index + 1}</td>
                <td>${Customer.fullname}</td>
                <td>${Customer.address}</td>
                <td>${Customer.code}</td>
                <td>${Customer.email}</td>
                <td>${Customer.companyname}</td>
                <td>${Customer.totalinvoice}</td>
                <td>${Customer.rank}</td>
                <td>
                    <button class="btn btn-primary" data-toggle="modal"
                    data-target="#CustomerModal" data-id="${Customer.code}">Update</button>
                    <button class="btn btn-danger" data-id="${Customer.code}">Delete</button>
                </td>
            </tr>
            `;
    }, "");
    (0, _helpersJs.getEle)("#tblCustomerList").innerHTML = html;
}
function renderListPersons(listPersons) {
    let html = listPersons.reduce((output, person, index)=>{
        return output + `
            <tr>
                <td>${index + 1}</td>
                <td>${person.fullname}</td>
                <td>${person.address}</td>
                <td>${person.code}</td>
                <td>${person.email}</td>
                <td>${person.type}</td>
            </tr>
            `;
    }, "");
    (0, _helpersJs.getEle)("#tblListPersons").innerHTML = html;
}

},{"./helpers.js":"hGI1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kwUO3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// add student
parcelHelpers.export(exports, "addStudent", ()=>addStudent);
// delete student
parcelHelpers.export(exports, "deleteStudent", ()=>deleteStudent);
// select student
parcelHelpers.export(exports, "selectStudent", ()=>selectStudent);
// update student
parcelHelpers.export(exports, "updateStudent", ()=>updateStudent);
// reset form student
parcelHelpers.export(exports, "resetFormStudent", ()=>resetFormStudent);
var _helpersJs = require("./helpers.js");
var _constructorJs = require("./constructor.js");
var _mainJs = require("./main.js");
var _validateJs = require("./validate.js");
function addStudent() {
    // DOM
    let code = (0, _helpersJs.getEle)("#CodeStudent").value;
    let fullname = (0, _helpersJs.getEle)("#FullNameStudent").value;
    let address = (0, _helpersJs.getEle)("#AddressStudent").value;
    let email = (0, _helpersJs.getEle)("#EmailStudent").value;
    let math = (0, _helpersJs.getEle)("#Math").value;
    let physical = (0, _helpersJs.getEle)("#Physical").value;
    let chemistry = (0, _helpersJs.getEle)("#Chemistry").value;
    let type = "Student";
    // check validate
    if (!(0, _validateJs.valStu)()) return;
    const studentAdd = new (0, _constructorJs.Student)(code, fullname, address, email, math, physical, chemistry, type);
    const personAdd = new (0, _constructorJs.Person)(code, fullname, address, email, type);
    (0, _mainJs.listPersons).push(personAdd);
    (0, _mainJs.studentList).push(studentAdd);
    alert(`Successful created new Student :${fullname}`);
    (0, _helpersJs.store)("studentList", (0, _mainJs.studentList));
    (0, _helpersJs.store)("listPersons", (0, _mainJs.listPersons));
    resetFormStudent();
}
function deleteStudent(code) {
    let iS = (0, _helpersJs.findI)(code, (0, _mainJs.studentList));
    alert(`Successful delete Student :${(0, _mainJs.studentList)[iS].fullname}`);
    (0, _mainJs.studentList).splice(iS, 1);
    (0, _mainJs.listPersons).splice((0, _helpersJs.findI)(code, (0, _mainJs.listPersons)), 1);
    (0, _helpersJs.store)("studentList", (0, _mainJs.studentList));
    (0, _helpersJs.store)("listPersons", (0, _mainJs.listPersons));
}
function selectStudent(code) {
    (0, _helpersJs.getEle)("#CodeStudent").value = (0, _mainJs.studentList)[(0, _helpersJs.findI)(code, (0, _mainJs.studentList))].code;
    (0, _helpersJs.getEle)("#FullNameStudent").value = (0, _mainJs.studentList)[(0, _helpersJs.findI)(code, (0, _mainJs.studentList))].fullname;
    (0, _helpersJs.getEle)("#AddressStudent").value = (0, _mainJs.studentList)[(0, _helpersJs.findI)(code, (0, _mainJs.studentList))].address;
    (0, _helpersJs.getEle)("#EmailStudent").value = (0, _mainJs.studentList)[(0, _helpersJs.findI)(code, (0, _mainJs.studentList))].email;
    (0, _helpersJs.getEle)("#Math").value = (0, _mainJs.studentList)[(0, _helpersJs.findI)(code, (0, _mainJs.studentList))].math;
    (0, _helpersJs.getEle)("#Physical").value = (0, _mainJs.studentList)[(0, _helpersJs.findI)(code, (0, _mainJs.studentList))].physical;
    (0, _helpersJs.getEle)("#Chemistry").value = (0, _mainJs.studentList)[(0, _helpersJs.findI)(code, (0, _mainJs.studentList))].chemistry;
    let html = `
        <button class="btn btn-secondary" data-dismiss="modal" id="cancle" >Cancle</button>
        <button class="btn btn-success ml-2" id="updateStudent" >Update</button>
    `;
    (0, _helpersJs.getEle)(".modal-footer-Student").innerHTML = html;
}
function updateStudent() {
    let code = (0, _helpersJs.getEle)("#CodeStudent").value;
    let fullname = (0, _helpersJs.getEle)("#FullNameStudent").value;
    let address = (0, _helpersJs.getEle)("#AddressStudent").value;
    let email = (0, _helpersJs.getEle)("#EmailStudent").value;
    let math = (0, _helpersJs.getEle)("#Math").value;
    let physical = (0, _helpersJs.getEle)("#Physical").value;
    let chemistry = (0, _helpersJs.getEle)("#Chemistry").value;
    let type = "Student";
    // check validate
    if (!(0, _validateJs.valStu)()) return;
    const studentUpdate = new (0, _constructorJs.Student)(code, fullname, address, email, math, physical, chemistry, type);
    const personAdd = new (0, _constructorJs.Person)(code, fullname, address, email, type);
    (0, _mainJs.studentList)[(0, _helpersJs.findI)(code, (0, _mainJs.studentList))] = studentUpdate;
    (0, _mainJs.listPersons)[(0, _helpersJs.findI)(code, (0, _mainJs.listPersons))] = personAdd;
    (0, _helpersJs.store)("studentList", (0, _mainJs.studentList));
    (0, _helpersJs.store)("listPersons", (0, _mainJs.listPersons));
    alert(`Successful update Student :${fullname}`);
    resetFormStudent();
}
function resetFormStudent() {
    (0, _helpersJs.getEle)("#CodeStudent").value = "";
    (0, _helpersJs.getEle)("#FullNameStudent").value = "";
    (0, _helpersJs.getEle)("#AddressStudent").value = "";
    (0, _helpersJs.getEle)("#EmailStudent").value = "";
    (0, _helpersJs.getEle)("#Math").value = "";
    (0, _helpersJs.getEle)("#Physical").value = "";
    (0, _helpersJs.getEle)("#Chemistry").value = "";
}

},{"./helpers.js":"hGI1E","./constructor.js":"ln1nT","./main.js":"1SICI","./validate.js":"gAU40","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gAU40":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// check student ================================
parcelHelpers.export(exports, "valStu", ()=>valStu);
// check Employee ================================
parcelHelpers.export(exports, "valEmp", ()=>valEmp);
// check Customer ================================
parcelHelpers.export(exports, "valCus", ()=>valCus);
var _helpersJs = require("./helpers.js");
var _mainJs = require("./main.js");
let arrCharCode = /^[A-Za-z0-9]+$/;
let arrNum = /^[0-9]/;
// check empty : empty -> 0
function checkEmpty(id) {
    let isValid = false;
    (0, _helpersJs.getEle)(id).value ? isValid = false : isValid = true;
    return isValid;
}
// check Exist
function checkExist(id) {
    let isValid = false;
    let value = (0, _helpersJs.getEle)(id).value;
    let isElement = (0, _mainJs.listPersons).some((obj)=>obj.code === value);
    !isElement ? isValid = false : isValid = true;
    return isValid;
}
function valStu(evt) {
    let isValid = true;
    // check code
    if (checkEmpty("#CodeStudent")) {
        isValid = false;
        (0, _helpersJs.getEle)("#tbCodeStudent").style.display = "block";
        (0, _helpersJs.getEle)("#tbCodeStudent").innerHTML = "not Empty!";
    } else if (checkExist("#CodeStudent")) {
        isValid = false;
        (0, _helpersJs.getEle)("#tbCodeStudent").style.display = "block";
        (0, _helpersJs.getEle)("#tbCodeStudent").innerHTML = "already exists!";
    } else if (!(0, _helpersJs.getEle)("#CodeStudent").value.match(arrCharCode) || (0, _helpersJs.getEle)("#CodeStudent").value.length < 4 || (0, _helpersJs.getEle)("#CodeStudent").value.length > 6) {
        isValid = false;
        (0, _helpersJs.getEle)("#tbCodeStudent").style.display = "block";
        (0, _helpersJs.getEle)("#tbCodeStudent").innerHTML = "from 4-6 characters and no special characters!";
    } else (0, _helpersJs.getEle)("#tbCodeStudent").style.display = "none";
    // fullname
    if (checkEmpty("#FullNameStudent")) {
        isValid = false;
        (0, _helpersJs.getEle)("#tbFullNameStudent").style.display = "block";
        (0, _helpersJs.getEle)("#tbFullNameStudent").innerHTML = "not Empty!";
    } else (0, _helpersJs.getEle)("#tbFullNameStudent").style.display = "none";
    // address
    if (checkEmpty("#AddressStudent")) {
        isValid = false;
        (0, _helpersJs.getEle)("#tbAddressStudent").style.display = "block";
        (0, _helpersJs.getEle)("#tbAddressStudent").innerHTML = "not Empty!";
    } else (0, _helpersJs.getEle)("#tbAddressStudent").style.display = "none";
    // math
    if (checkEmpty("#Math")) {
        isValid = false;
        (0, _helpersJs.getEle)("#tbMath").style.display = "block";
        (0, _helpersJs.getEle)("#tbMath").innerHTML = "not Empty!";
    } else if (!(0, _helpersJs.getEle)("#Math").value.match(arrNum) || (0, _helpersJs.getEle)("#Math").value < 0 || (0, _helpersJs.getEle)("#Math").value > 10) {
        isValid = false;
        (0, _helpersJs.getEle)("#tbMath").style.display = "block";
        (0, _helpersJs.getEle)("#tbMath").innerHTML = "score is Number from 0-10";
    } else (0, _helpersJs.getEle)("#tbMath").style.display = "none";
    // physical
    if (checkEmpty("#Physical")) {
        isValid = false;
        (0, _helpersJs.getEle)("#tbPhysical").style.display = "block";
        (0, _helpersJs.getEle)("#tbPhysical").innerHTML = "not Empty!";
    } else if (!(0, _helpersJs.getEle)("#Physical").value.match(arrNum) || (0, _helpersJs.getEle)("#Physical").value < 0 || (0, _helpersJs.getEle)("#Physical").value > 10) {
        isValid = false;
        (0, _helpersJs.getEle)("#tbPhysical").style.display = "block";
        (0, _helpersJs.getEle)("#tbPhysical").innerHTML = "score is Number from 0-10";
    } else (0, _helpersJs.getEle)("#tbPhysical").style.display = "none";
    // chemistry
    if (checkEmpty("#Chemistry")) {
        isValid = false;
        (0, _helpersJs.getEle)("#tbChemistry").style.display = "block";
        (0, _helpersJs.getEle)("#tbChemistry").innerHTML = "not Empty!";
    } else if (!(0, _helpersJs.getEle)("#Chemistry").value.match(arrNum) || (0, _helpersJs.getEle)("#Chemistry").value < 0 || (0, _helpersJs.getEle)("#Chemistry").value > 10) {
        isValid = false;
        (0, _helpersJs.getEle)("#tbChemistry").style.display = "block";
        (0, _helpersJs.getEle)("#tbChemistry").innerHTML = "score is Number from 0-10";
    } else (0, _helpersJs.getEle)("#tbChemistry").style.display = "none";
    return isValid;
}
function valEmp(evt) {
    let isValid = true;
    // check code
    if (checkEmpty("#CodeEmployee")) {
        isValid = false;
        (0, _helpersJs.getEle)("#tbCodeEmployee").style.display = "block";
        (0, _helpersJs.getEle)("#tbCodeEmployee").innerHTML = "not Empty!";
    } else if (checkExist("#CodeEmployee")) {
        isValid = false;
        (0, _helpersJs.getEle)("#tbCodeEmployee").style.display = "block";
        (0, _helpersJs.getEle)("#tbCodeEmployee").innerHTML = "already exists!";
    } else if (!(0, _helpersJs.getEle)("#CodeEmployee").value.match(arrCharCode) || (0, _helpersJs.getEle)("#CodeEmployee").value.length < 4 || (0, _helpersJs.getEle)("#CodeEmployee").value.length > 6) {
        isValid = false;
        (0, _helpersJs.getEle)("#tbCodeEmployee").style.display = "block";
        (0, _helpersJs.getEle)("#tbCodeEmployee").innerHTML = "from 4-6 characters and no special characters!";
    } else (0, _helpersJs.getEle)("#tbCodeEmployee").style.display = "none";
    // fullname
    if (checkEmpty("#FullNameEmployee")) {
        isValid = false;
        (0, _helpersJs.getEle)("#tbFullNameEmployee").style.display = "block";
        (0, _helpersJs.getEle)("#tbFullNameEmployee").innerHTML = "not Empty!";
    } else (0, _helpersJs.getEle)("#tbFullNameEmployee").style.display = "none";
    // address
    if (checkEmpty("#AddressEmployee")) {
        isValid = false;
        (0, _helpersJs.getEle)("#tbAddressEmployee").style.display = "block";
        (0, _helpersJs.getEle)("#tbAddressEmployee").innerHTML = "not Empty!";
    } else (0, _helpersJs.getEle)("#tbAddressEmployee").style.display = "none";
    // Workingday
    if (checkEmpty("#Workingday")) {
        isValid = false;
        (0, _helpersJs.getEle)("#tbWorkingday").style.display = "block";
        (0, _helpersJs.getEle)("#tbWorkingday").innerHTML = "not Empty!";
    } else if (!(0, _helpersJs.getEle)("#Workingday").value.match(arrNum) || (0, _helpersJs.getEle)("#Workingday").value < 0) {
        isValid = false;
        (0, _helpersJs.getEle)("#tbWorkingday").style.display = "block";
        (0, _helpersJs.getEle)("#tbWorkingday").innerHTML = "is Number";
    } else (0, _helpersJs.getEle)("#tbWorkingday").style.display = "none";
    // Workingday
    if (checkEmpty("#Dailywage")) {
        isValid = false;
        (0, _helpersJs.getEle)("#tbDailywage").style.display = "block";
        (0, _helpersJs.getEle)("#tbDailywage").innerHTML = "not Empty!";
    } else if (!(0, _helpersJs.getEle)("#Dailywage").value.match(arrNum) || (0, _helpersJs.getEle)("#Dailywage").value < 0) {
        isValid = false;
        (0, _helpersJs.getEle)("#tbDailywage").style.display = "block";
        (0, _helpersJs.getEle)("#tbDailywage").innerHTML = "is Number";
    } else (0, _helpersJs.getEle)("#tbDailywage").style.display = "none";
    return isValid;
}
function valCus(evt) {
    let isValid = true;
    // check code
    if (checkEmpty("#CodeCustomer")) {
        isValid = false;
        (0, _helpersJs.getEle)("#tbCodeCustomer").style.display = "block";
        (0, _helpersJs.getEle)("#tbCodeCustomer").innerHTML = "not Empty!";
    } else if (checkExist("#CodeCustomer")) {
        isValid = false;
        (0, _helpersJs.getEle)("#tbCodeCustomer").style.display = "block";
        (0, _helpersJs.getEle)("#tbCodeCustomer").innerHTML = "already exists!";
    } else if (!(0, _helpersJs.getEle)("#CodeCustomer").value.match(arrCharCode) || (0, _helpersJs.getEle)("#CodeCustomer").value.length < 4 || (0, _helpersJs.getEle)("#CodeCustomer").value.length > 6) {
        isValid = false;
        (0, _helpersJs.getEle)("#tbCodeCustomer").style.display = "block";
        (0, _helpersJs.getEle)("#tbCodeCustomer").innerHTML = "from 4-6 characters and no special characters!";
    } else (0, _helpersJs.getEle)("#tbCodeCustomer").style.display = "none";
    // fullname
    if (checkEmpty("#FullNameCustomer")) {
        isValid = false;
        (0, _helpersJs.getEle)("#tbFullNameCustomer").style.display = "block";
        (0, _helpersJs.getEle)("#tbFullNameCustomer").innerHTML = "not Empty!";
    } else (0, _helpersJs.getEle)("#tbFullNameCustomer").style.display = "none";
    // address
    if (checkEmpty("#AddressCustomer")) {
        isValid = false;
        (0, _helpersJs.getEle)("#tbAddressCustomer").style.display = "block";
        (0, _helpersJs.getEle)("#tbAddressCustomer").innerHTML = "not Empty!";
    } else (0, _helpersJs.getEle)("#tbAddressCustomer").style.display = "none";
    // Companyname
    if (checkEmpty("#Companyname")) {
        isValid = false;
        (0, _helpersJs.getEle)("#tbCompanyname").style.display = "block";
        (0, _helpersJs.getEle)("#tbCompanyname").innerHTML = "not Empty!";
    } else (0, _helpersJs.getEle)("#tbCompanyname").style.display = "none";
    return isValid;
}

},{"./helpers.js":"hGI1E","./main.js":"1SICI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jtQCe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addEmployee", ()=>addEmployee);
parcelHelpers.export(exports, "resetFormEmployee", ()=>resetFormEmployee);
// delete 
parcelHelpers.export(exports, "deleteEmployee", ()=>deleteEmployee);
// select
parcelHelpers.export(exports, "selectEmployee", ()=>selectEmployee);
// update 
parcelHelpers.export(exports, "updateEmployee", ()=>updateEmployee);
var _helpersJs = require("./helpers.js");
var _constructorJs = require("./constructor.js");
var _mainJs = require("./main.js");
var _validateJs = require("./validate.js");
function addEmployee() {
    // DOM
    let code = (0, _helpersJs.getEle)("#CodeEmployee").value;
    let fullname = (0, _helpersJs.getEle)("#FullNameEmployee").value;
    let address = (0, _helpersJs.getEle)("#AddressEmployee").value;
    let email = (0, _helpersJs.getEle)("#EmailEmployee").value;
    let workingday = (0, _helpersJs.getEle)("#Workingday").value;
    let dailywage = (0, _helpersJs.getEle)("#Dailywage").value;
    let type = "Employee";
    // check validate
    if (!(0, _validateJs.valEmp)()) return;
    const EmployeeAdd = new (0, _constructorJs.Employee)(code, fullname, address, email, workingday, dailywage, type);
    const personAdd = new (0, _constructorJs.Person)(code, fullname, address, email, type);
    (0, _mainJs.listPersons).push(personAdd);
    (0, _mainJs.employeeList).push(EmployeeAdd);
    alert(`Successful created new Employee :${fullname}`);
    (0, _helpersJs.store)("employeeList", (0, _mainJs.employeeList));
    (0, _helpersJs.store)("listPersons", (0, _mainJs.listPersons));
    resetFormEmployee();
}
function resetFormEmployee() {
    (0, _helpersJs.getEle)("#CodeEmployee").value = "";
    (0, _helpersJs.getEle)("#FullNameEmployee").value = "";
    (0, _helpersJs.getEle)("#AddressEmployee").value = "";
    (0, _helpersJs.getEle)("#EmailEmployee").value = "";
    (0, _helpersJs.getEle)("#Workingday").value = "";
    (0, _helpersJs.getEle)("#Dailywage").value = "";
}
function deleteEmployee(code) {
    let eS = (0, _helpersJs.findI)(code, (0, _mainJs.employeeList));
    alert(`Successful delete Employee :${(0, _mainJs.employeeList)[eS].fullname}`);
    (0, _mainJs.employeeList).splice(eS, 1);
    (0, _mainJs.listPersons).splice((0, _helpersJs.findI)(code, (0, _mainJs.listPersons)), 1);
    (0, _helpersJs.store)("employeeList", (0, _mainJs.employeeList));
    (0, _helpersJs.store)("listPersons", (0, _mainJs.listPersons));
}
function selectEmployee(code) {
    (0, _helpersJs.getEle)("#CodeEmployee").value = (0, _mainJs.employeeList)[(0, _helpersJs.findI)(code, (0, _mainJs.employeeList))].code;
    (0, _helpersJs.getEle)("#FullNameEmployee").value = (0, _mainJs.employeeList)[(0, _helpersJs.findI)(code, (0, _mainJs.employeeList))].fullname;
    (0, _helpersJs.getEle)("#AddressEmployee").value = (0, _mainJs.employeeList)[(0, _helpersJs.findI)(code, (0, _mainJs.employeeList))].address;
    (0, _helpersJs.getEle)("#EmailEmployee").value = (0, _mainJs.employeeList)[(0, _helpersJs.findI)(code, (0, _mainJs.employeeList))].email;
    (0, _helpersJs.getEle)("#Workingday").value = (0, _mainJs.employeeList)[(0, _helpersJs.findI)(code, (0, _mainJs.employeeList))].workingday;
    (0, _helpersJs.getEle)("#Dailywage").value = (0, _mainJs.employeeList)[(0, _helpersJs.findI)(code, (0, _mainJs.employeeList))].dailywage;
    let html = `
        <button class="btn btn-secondary" data-dismiss="modal" id="cancle" >Cancle</button>
        <button class="btn btn-success ml-2" id="updateEmployee" >Update</button>
    `;
    (0, _helpersJs.getEle)(".modal-footer-Employee").innerHTML = html;
}
function updateEmployee() {
    let code = (0, _helpersJs.getEle)("#CodeEmployee").value;
    let fullname = (0, _helpersJs.getEle)("#FullNameEmployee").value;
    let address = (0, _helpersJs.getEle)("#AddressEmployee").value;
    let email = (0, _helpersJs.getEle)("#EmailEmployee").value;
    let workingday = (0, _helpersJs.getEle)("#Workingday").value;
    let dailywage = (0, _helpersJs.getEle)("#Dailywage").value;
    let type = "Employee";
    // check validate
    if (!(0, _validateJs.valEmp)()) return;
    const employeeUpdate = new (0, _constructorJs.Employee)(code, fullname, address, email, workingday, dailywage, type);
    const personUpdate = new (0, _constructorJs.Person)(code, fullname, address, email, type);
    (0, _mainJs.employeeList)[(0, _helpersJs.findI)(code, (0, _mainJs.employeeList))] = employeeUpdate;
    (0, _mainJs.listPersons)[(0, _helpersJs.findI)(code, (0, _mainJs.listPersons))] = personUpdate;
    (0, _helpersJs.store)("employeeList", (0, _mainJs.employeeList));
    (0, _helpersJs.store)("listPersons", (0, _mainJs.listPersons));
    alert(`Successful update Employee :${fullname}`);
    resetFormEmployee();
}

},{"./helpers.js":"hGI1E","./constructor.js":"ln1nT","./main.js":"1SICI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./validate.js":"gAU40"}],"hpm2F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addCustomer", ()=>addCustomer);
// delete 
parcelHelpers.export(exports, "deleteCustomer", ()=>deleteCustomer);
// select
parcelHelpers.export(exports, "selectCustomer", ()=>selectCustomer);
// update 
parcelHelpers.export(exports, "updateCustomer", ()=>updateCustomer);
parcelHelpers.export(exports, "resetFormCustomer", ()=>resetFormCustomer);
var _helpersJs = require("./helpers.js");
var _constructorJs = require("./constructor.js");
var _mainJs = require("./main.js");
var _validateJs = require("./validate.js");
function addCustomer() {
    // DOM
    console.log("đ\xe3 add cus");
    let code = (0, _helpersJs.getEle)("#CodeCustomer").value;
    let fullname = (0, _helpersJs.getEle)("#FullNameCustomer").value;
    let address = (0, _helpersJs.getEle)("#AddressCustomer").value;
    let email = (0, _helpersJs.getEle)("#EmailCustomer").value;
    let companyName = (0, _helpersJs.getEle)("#Companyname").value;
    let totalInvoice = (0, _helpersJs.getEle)("#Totalinvoice").value;
    let rank = (0, _helpersJs.getEle)("#Rank").value;
    let type = "Customer";
    // check validate
    if (!(0, _validateJs.valCus)()) return;
    console.log("đ\xe3 chcek vali");
    const customerAdd = new (0, _constructorJs.Customer)(code, fullname, address, email, companyName, totalInvoice, rank, type);
    const personAdd = new (0, _constructorJs.Person)(code, fullname, address, email, type);
    (0, _mainJs.listPersons).push(personAdd);
    (0, _mainJs.customerList).push(customerAdd);
    alert(`Successful created new Customer :${fullname}`);
    (0, _helpersJs.store)("listPersons", (0, _mainJs.listPersons));
    (0, _helpersJs.store)("customerList", (0, _mainJs.customerList));
    resetFormCustomer();
}
function deleteCustomer(code) {
    let eS = (0, _helpersJs.findI)(code, (0, _mainJs.customerList));
    alert(`Successful delete Customer :${(0, _mainJs.customerList)[eS].fullname}`);
    (0, _mainJs.customerList).splice(eS, 1);
    (0, _mainJs.listPersons).splice((0, _helpersJs.findI)(code, (0, _mainJs.listPersons)), 1);
    (0, _helpersJs.store)("listPersons", (0, _mainJs.listPersons));
    (0, _helpersJs.store)("customerList", (0, _mainJs.customerList));
}
function selectCustomer(code) {
    (0, _helpersJs.getEle)("#CodeCustomer").value = (0, _mainJs.customerList)[(0, _helpersJs.findI)(code, (0, _mainJs.customerList))].code;
    (0, _helpersJs.getEle)("#FullNameCustomer").value = (0, _mainJs.customerList)[(0, _helpersJs.findI)(code, (0, _mainJs.customerList))].fullname;
    (0, _helpersJs.getEle)("#AddressCustomer").value = (0, _mainJs.customerList)[(0, _helpersJs.findI)(code, (0, _mainJs.customerList))].address;
    (0, _helpersJs.getEle)("#EmailCustomer").value = (0, _mainJs.customerList)[(0, _helpersJs.findI)(code, (0, _mainJs.customerList))].email;
    (0, _helpersJs.getEle)("#Companyname").value = (0, _mainJs.customerList)[(0, _helpersJs.findI)(code, (0, _mainJs.customerList))].companyname;
    (0, _helpersJs.getEle)("#Totalinvoice").value = (0, _mainJs.customerList)[(0, _helpersJs.findI)(code, (0, _mainJs.customerList))].totalinvoice;
    (0, _helpersJs.getEle)("#Rank").value = (0, _mainJs.customerList)[(0, _helpersJs.findI)(code, (0, _mainJs.customerList))].rank;
    let html = `
        <button class="btn btn-secondary" data-dismiss="modal" id="cancle" >Cancle</button>
        <button class="btn btn-success ml-2" id="updateCustomer" >Update</button>
    `;
    (0, _helpersJs.getEle)(".modal-footer-Customer").innerHTML = html;
}
function updateCustomer() {
    let code = (0, _helpersJs.getEle)("#CodeCustomer").value;
    let fullname = (0, _helpersJs.getEle)("#FullNameCustomer").value;
    let address = (0, _helpersJs.getEle)("#AddressCustomer").value;
    let email = (0, _helpersJs.getEle)("#EmailCustomer").value;
    let companyName = (0, _helpersJs.getEle)("#Companyname").value;
    let totalInvoice = (0, _helpersJs.getEle)("#Totalinvoice").value;
    let rank = (0, _helpersJs.getEle)("#Rank").value;
    let type = "Customer";
    // check validate
    if (!(0, _validateJs.valCus)()) return;
    const CustomerUpdate = new (0, _constructorJs.Customer)(code, fullname, address, email, companyName, totalInvoice, rank, type);
    const personUpdate = new (0, _constructorJs.Person)(code, fullname, address, email, type);
    (0, _mainJs.customerList)[(0, _helpersJs.findI)(code, (0, _mainJs.customerList))] = CustomerUpdate;
    (0, _mainJs.listPersons)[(0, _helpersJs.findI)(code, (0, _mainJs.listPersons))] = personUpdate;
    (0, _helpersJs.store)("customerList", (0, _mainJs.customerList));
    (0, _helpersJs.store)("listPersons", (0, _mainJs.listPersons));
    alert(`Successful update Customer :${fullname}`);
    resetFormCustomer();
}
function resetFormCustomer() {
    (0, _helpersJs.getEle)("#CodeCustomer").value = "";
    (0, _helpersJs.getEle)("#FullNameCustomer").value = "";
    (0, _helpersJs.getEle)("#AddressCustomer").value = "";
    (0, _helpersJs.getEle)("#EmailCustomer").value = "";
    (0, _helpersJs.getEle)("#Companyname").value = "";
    (0, _helpersJs.getEle)("#Totalinvoice").value = "";
    (0, _helpersJs.getEle)("#Rank").value = "";
}

},{"./helpers.js":"hGI1E","./constructor.js":"ln1nT","./main.js":"1SICI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./validate.js":"gAU40"}]},["9tRox","1SICI"], "1SICI", "parcelRequirebf8c")

//# sourceMappingURL=index.18dbc454.js.map
