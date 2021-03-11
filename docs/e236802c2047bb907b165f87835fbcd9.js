// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = "MODULE_NOT_FOUND";
        throw err;
      }

      localRequire.resolve = resolve;

      var module = (cache[name] = new newRequire.Module());

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports
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

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})(
  {
    12: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 });
        const t = (exports.fetchAddCharacter = async (t) => {
          try {
            const e = await fetch(
              "https://character-database.becode.xyz/characters",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(t),
              }
            );
            await e.json();
          } catch (t) {}
        });
      },
      {},
    ],
    13: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 });
        const e = (e) => {
          document.getElementById("output").src = URL.createObjectURL(
            e.target.files[0]
          );
        };
        exports.uploadAvatar = e;
      },
      {},
    ],
    7: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.modal = void 0);
        var e = require("./fetchAddCharacter.js"),
          t = require("./uploadAvatar.js");
        let a = "";
        const r = (exports.modal = () => {
          document
            .getElementById("file")
            .addEventListener("change", t.uploadAvatar),
            document
              .querySelector("#create-button")
              .addEventListener("click", async () => {
                const t = {
                  name: document.getElementById("name").value,
                  shortDescription: document.getElementById("shortDescription")
                    .value,
                  description: document.getElementById("description").value,
                  image: a,
                };
                (0, e.fetchAddCharacter)(t);
              }),
            document.querySelector("#file").addEventListener("change", (e) => {
              const t = e.target.files[0],
                r = new FileReader();
              (r.onloadend = () => {
                a = r.result.replace("data:", "").replace(/^.+,/, "");
              }),
                r.readAsDataURL(t);
            });
        });
      },
      { "./fetchAddCharacter.js": 12, "./uploadAvatar.js": 13 },
    ],
    8: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 });
        const e = (exports.fetchDelete = async (e) => {
          try {
            await fetch(
              `https://character-database.becode.xyz/characters/${e}`,
              {
                method: "DELETE",
                header: { "content-Type": "application/json" },
              }
            ),
              alert("DELETE!");
          } catch (e) {}
        });
      },
      {},
    ],
    9: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 });
        const e = (exports.fetchEdit = async (e) => {
          try {
            (editName = document.querySelector("#name2").input),
              await fetch(
                `https://character-database.becode.xyz/characters/${e}`,
                {
                  method: "PUT",
                  header: { "content-Type": "application/json" },
                }
              );
          } catch (e) {}
        });
      },
      {},
    ],
    10: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 });
        const e = (exports.setModal2Value = (e, t, o) => {
          const n = document.getElementById("name2"),
            s = document.getElementById("shortDescription2"),
            d = document.getElementById("description2");
          (n.value = e), (s.value = t), (d.value = o);
        });
      },
      {},
    ],
    11: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 });
        const e = (exports.closeModal = (e) => {
          Array.from(document.getElementsByClassName("pop-up")).forEach((t) => {
            e.target == t && (t.style.display = "none");
          });
        });
      },
      {},
    ],
    5: [
      function (require, module, exports) {
        "use strict";
        var e = require("../module/modal.js"),
          t = require("../module/fetchDelete.js"),
          r = require("../module/fetchEdit.js"),
          c = require("../module/modal2Value.js"),
          o = require("../module/closeModal.js");
        const n = document.querySelector("#tpl"),
          d = document.querySelector("#target");
        let a = [];
        document.querySelector(".btn").addEventListener("click", async () => {
          const e = await fetch(
            "https://character-database.becode.xyz/characters"
          );
          (await e.json()).forEach(
            (
              { name: e, shortDescription: o, image: i, description: l, id: s },
              u
            ) => {
              const m = n.cloneNode(!0).content;
              (m.querySelector(".card-name").innerHTML = e),
                m
                  .querySelector(".card-img")
                  .setAttribute("src", "data:image/png;base64," + i),
                (m.querySelector(".card-shortDescription").innerHTML = o),
                (m.querySelector(".card-description").innerHTML = l);
              const q = m.querySelector(".button-edit");
              q.setAttribute("id", `button-${u}`),
                d.appendChild(m),
                a.push(s),
                Array.from(document.querySelectorAll(".button-delete")).forEach(
                  (e, r) => {
                    e.addEventListener("click", async () => {
                      const e = a[r];
                      (0, t.fetchDelete)(e);
                    });
                  }
                ),
                q.addEventListener("click", () => {
                  (0, c.setModal2Value)(e, o, l), (0, r.fetchEdit)(s);
                });
            }
          );
        }),
          document
            .querySelector("#openModalButton")
            .addEventListener("click", (0, e.modal)()),
          window.addEventListener("click", o.closeModal);
      },
      {
        "../module/modal.js": 7,
        "../module/fetchDelete.js": 8,
        "../module/fetchEdit.js": 9,
        "../module/modal2Value.js": 10,
        "../module/closeModal.js": 11,
      },
    ],
  },
  {},
  [5]
);
