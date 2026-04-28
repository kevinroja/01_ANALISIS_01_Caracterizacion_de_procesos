(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-0206bfa0"],
  {
    // =========================
    // MIXIN (ab14)
    // =========================
    ab14: function (t, e, i) {
      "use strict";

      e["a"] = {
        data: () => ({
          mainId: Math.floor(1e7 * Math.random()),
          selected: 0,
          elements: [],
          stateStr: "",
          rendered: false,
          firstSelection: true,
        }),

        watch: {
          menuState() {
            this.domUpdated();
          },
        },

        created() {
          window.addEventListener("resize", this.domUpdated);
        },

        mounted() {
          this.$nextTick(() => {
            this.crearElementos();
          });
        },

        computed: {
          menuState() {
            return this.$store.getters.isMenuOpen;
          },

          navObj() {
            if (!this.elements.length || !this.secuencial) return {};

            const ids = this.elements.map(el => el.id);
            const index = ids.indexOf(this.selected);

            if (index < 0) return {};

            const nav = {};

            if (index === 0) {
              nav.next = ids[index + 1];
            } else {
              if (index + 1 !== ids.length) {
                nav.next = ids[index + 1];
              }
              nav.back = ids[index - 1];
            }

            return nav;
          },
        },

        beforeDestroy() {
          window.removeEventListener("resize", this.domUpdated);
        },

        updated() {
          this.$nextTick(() => {
            if (this.getStateStr() !== this.stateStr) {
              this.crearElementos();
            }
          });
        },

        methods: {
          crearElementos() {
            if (!this.$slots.default || !this.$slots.default.length) return [];

            this.domUpdated();

            this.elements = this.$slots.default.map((slot, index) => {
              const attrs = slot.data && slot.data.attrs ? slot.data.attrs : [];
              return {
                id: this.mainId + index + 1,
                elm: slot.elm,
                ...attrs,
              };
            });

            if (this.firstSelection) {
              this.selected = this.selected > 0
                ? this.selected
                : this.elements[0].id;
            }

            this.stateStr = this.getStateStr();
          },

          getActiveHeight(id) {
            return this.$refs[id][0].scrollHeight + "px";
          },

          getStateStr() {
            return this.$slots.default
              .map(slot => slot.elm.outerHTML)
              .join("");
          },

          domUpdated() {
            this.rendered = false;
            setTimeout(() => {
              this.rendered = true;
            }, 100);
          },
        },
      };
    },

    // =========================
    // COMPONENTE ACORDEÓN
    // =========================
    e0a3: function (t, e, i) {
      "use strict";

      i.r(e);

      // TEMPLATE RENDER
      var render = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;

        return i("div", { staticClass: "acordion" }, [
          t._l(t.elements, function (el, index) {
            return i(
              "div",
              {
                key: el.id,
                staticClass: "p-3 pb-0 p-md-4 pb-md-0",
                class: [t.cardClass, "mb-3"],
              },
              [
                // HEADER
                i(
                  "div",
                  {
                    staticClass: "acordion__header mb-3 mb-md-4",
                    on: {
                      click: function () {
                        t.selected = t.selected != el.id ? el.id : 0;
                      },
                    },
                  },
                  [
                    i("div", { staticClass: "d-flex align-items-center" }, [
                      i("div", { staticClass: "acordion__titulo" }, [
                        i("h3", {
                          staticClass: "mb-0",
                          domProps: { innerHTML: t._s(el.titulo) },
                        }),
                      ]),
                    ]),
                  ]
                ),

                // CONTENIDO
                i(
                  "div",
                  {
                    staticClass: "acordion__contenido",
                    style: {
                      height:
                        t.rendered && t.selected === el.id
                          ? t.getActiveHeight(el.id)
                          : 0,
                    },
                  },
                  [
                    i("div", {
                      directives: [
                        {
                          name: "child",
                          value: el.elm,
                        },
                      ],
                      ref: el.id,
                      refInFor: true,
                      staticClass: "acordion__contenido__item",
                    }),
                  ]
                ),
              ]
            );
          }),

          // SLOT OCULTO
          i("div", { staticClass: "hidden-slot" }, [t._t("default")], 2),
        ]);
      };

      var staticRenderFns = [];

      // IMPORT MIXIN
      var mixin = i("ab14");

      // COMPONENTE
      var component = {
        name: "AcordionA",
        mixins: [mixin["a"]],

        props: {
          claseTarjeta: {
            type: String,
            default: "",
          },
          tipo: {
            type: String,
            default: "a",
          },
        },

        data() {
          return {
            mostrarIndicador: true,
          };
        },

        computed: {
          cardClass() {
            return this.claseTarjeta.length
              ? this.claseTarjeta
              : "tarjeta tarjeta--blanca mb-3";
          },
        },

        mounted() {
          this.$nextTick(() => {
            setTimeout(() => {
              this.domUpdated();
            }, 5000);
          });
        },
      };

      // EXPORT
      var normalizer = i("2877");
      var finalComponent = Object(normalizer["a"])(
        component,
        render,
        staticRenderFns,
        false,
        null,
        null,
        null
      );

      e["default"] = finalComponent.exports;
    },
  },
]);
