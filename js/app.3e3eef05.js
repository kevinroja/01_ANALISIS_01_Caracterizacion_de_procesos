(function (modules) {
  // ===== FUNCION DE REGISTRO DE CHUNKS =====
  function webpackJsonpCallback(data) {
    var chunkIds = data[0];
    var moreModules = data[1];
    var executeModules = data[2];

    var moduleId, chunkId, i = 0;
    var resolves = [];

    for (; i < chunkIds.length; i++) {
      chunkId = chunkIds[i];

      if (installedChunks[chunkId]) {
        resolves.push(installedChunks[chunkId][0]);
      }

      installedChunks[chunkId] = 0;
    }

    for (moduleId in moreModules) {
      if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
        modules[moduleId] = moreModules[moduleId];
      }
    }

    if (parentJsonpFunction) parentJsonpFunction(data);

    while (resolves.length) resolves.shift()();

    return deferredModules.push.apply(deferredModules, executeModules || []), checkDeferredModules();
  }

  // ===== EJECUCIÓN DE MÓDULOS =====
  function checkDeferredModules() {
    var result;

    for (var i = 0; i < deferredModules.length; i++) {
      var deferred = deferredModules[i];
      var fulfilled = true;

      for (var j = 1; j < deferred.length; j++) {
        var depId = deferred[j];
        if (installedChunks[depId] !== 0) fulfilled = false;
      }

      if (fulfilled) {
        deferredModules.splice(i--, 1);
        result = __webpack_require__((__webpack_require__.s = deferred[0]));
      }
    }

    return result;
  }

  // ===== VARIABLES BASE =====
  var installedModules = {};
  var installedChunks = { app: 0 };
  var deferredModules = [];

  // ===== RESOLVER PATH DE CHUNKS =====
  function getChunkScriptSrc(chunkId) {
    return (
      __webpack_require__.p +
      "js/" +
      ({
        actividad: "actividad",
        comple: "comple",
        creditos: "creditos",
        glosario: "glosario",
        intro: "intro",
        referencias: "referencias",
        tema1: "tema1",
        tema2: "tema2",
        tema3: "tema3",
        tema4: "tema4",
      }[chunkId] || chunkId) +
      "." +
      {
        actividad: "6ed24873",
        comple: "613bcae8",
        creditos: "4a62dcbd",
        glosario: "8bd8b042",
        intro: "76c47e08",
        referencias: "a568b5d4",
        tema1: "37e3f6c8",
        tema2: "c573457f",
        tema3: "046fe5d9",
        tema4: "682a7349",
      }[chunkId] +
      ".js"
    );
  }

  // ===== REQUIRE =====
  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }

    var module = (installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {},
    });

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

    module.l = true;
    return module.exports;
  }

  // ===== CARGA DINÁMICA =====
  __webpack_require__.e = function (chunkId) {
    var promises = [];

    if (installedChunks[chunkId] !== 0) {
      var promise = new Promise(function (resolve, reject) {
        installedChunks[chunkId] = [resolve, reject];
      });

      promises.push((installedChunks[chunkId][2] = promise));

      var script = document.createElement("script");
      script.src = getChunkScriptSrc(chunkId);
      document.head.appendChild(script);
    }

    return Promise.all(promises);
  };

  // ===== HELPERS =====
  __webpack_require__.m = modules;
  __webpack_require__.c = installedModules;

  __webpack_require__.d = function (exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
    }
  };

  __webpack_require__.r = function (exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
  };

  __webpack_require__.o = function (obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  };

  __webpack_require__.p = "";

  // ===== JSONP SETUP =====
  var jsonpArray = (window["webpackJsonp"] = window["webpackJsonp"] || []);
  var oldPush = jsonpArray.push.bind(jsonpArray);

  jsonpArray.push = webpackJsonpCallback;
  jsonpArray = jsonpArray.slice();

  for (var i = 0; i < jsonpArray.length; i++) {
    webpackJsonpCallback(jsonpArray[i]);
  }

  var parentJsonpFunction = oldPush;

  deferredModules.push([0, "chunk-vendors"]);
  return checkDeferredModules();
})({
  // ===== ENTRY =====
  0: function (module, exports, __webpack_require__) {
    module.exports = __webpack_require__("56d7");
  },

  // ===== APP PRINCIPAL =====
  "56d7": function (module, exports, __webpack_require__) {
    "use strict";

    __webpack_require__.r(exports);

    var Vue = __webpack_require__("2b0e");
    var Router = __webpack_require__("8c4f");

    Vue.use(Router);

    var router = new Router({
      routes: [
        { path: "/", name: "inicio" },
        {
          path: "/actividad",
          name: "actividad",
          component: function () {
            return __webpack_require__.e("actividad").then(
              __webpack_require__.bind(null, "4298")
            );
          },
        },
      ],
    });

    new Vue({
      router: router,
      render: function (h) {
        return h("div", "App");
      },
    }).$mount("#app");
  },
});
