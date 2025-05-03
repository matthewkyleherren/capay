import { _ as e, a as t } from "./Bodm0WSp.js";
import {
  d as o,
  i as a,
  r as s,
  p as r,
  v as n,
  o as l,
  c as i,
  e as u,
  t as c,
  P as p,
  E as d,
  _ as m,
  x as v,
  A as _,
  Q as g,
  R as b,
  g as f,
  T as y,
  s as w,
  u as h,
  n as x,
  S as L,
  a as T,
  b as $,
  j as k,
  h as M,
  y as j,
  U as S,
  z as E,
  M as H,
} from "./CK6MPfMQ.js";
import { _ as q } from "./2MH4pIEG.js";
import { u as C } from "./BDSKvS5I.js";
import { u as A, D as P, a as I, c as X, b as z } from "./DTAS521G.js";
import "./B82mXJoM.js";
const B = { class: "about-point__number" },
  O = { class: "about-point__content" },
  V = ["innerHTML"],
  F = { class: "about-point__text" },
  G = m(
    o({
      __name: "Point",
      props: { number: {}, title: {} },
      setup(e) {
        const { $gsap: t } = a(),
          o = s();
        let m = null;
        return (
          r(() => {
            m = t.context((e) => {
              if (e && e.selector) {
                e.selector(".image").forEach((e) => {
                  const o = e.querySelector("img");
                  t.set(o, { scale: 1.2, transformOrigin: "center bottom" }),
                    t.to(o, {
                      yPercent: 20,
                      ease: "none",
                      scrollTrigger: {
                        trigger: e,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 0.1,
                      },
                    });
                });
              }
            }, o.value);
          }),
          n(() => {
            null == m || m.revert();
          }),
          (e, t) => (
            l(),
            i(
              "div",
              {
                ref_key: "main",
                ref: o,
                class: d(["about-point", "about-point--" + e.number]),
              },
              [
                u("div", B, c(e.number), 1),
                u("div", O, [
                  u(
                    "div",
                    { class: "about-point__title", innerHTML: e.title },
                    null,
                    8,
                    V
                  ),
                  u("div", F, [p(e.$slots, "default", {}, void 0, !0)]),
                ]),
              ],
              2
            )
          )
        );
      },
    }),
    [["__scopeId", "data-v-fc5bbf19"]]
  ),
  R = { class: "cursor" },
  D = m(
    o({
      __name: "Cursor",
      setup(e) {
        const t = s("");
        s({ x: 0, y: 0 });
        const o = s(!1),
          { $gsap: i } = a();
        function p(e) {
          i.to(".cursor", {
            top: e.clientY,
            left: e.clientX,
            duration: 0.2,
            ease: "none",
          });
        }
        function d(e) {
          const a = e.target;
          a &&
            a.dataset &&
            a.dataset.cursor &&
            ((t.value = a.dataset.cursor), (o.value = !0));
        }
        function m() {
          o.value = !1;
        }
        return (
          r(() => {
            document.addEventListener("mousemove", p, !0),
              document.addEventListener("mouseenter", d, !0),
              document.addEventListener("mouseleave", m, !0);
          }),
          n(() => {
            document.removeEventListener("mousemove", p, !0),
              document.removeEventListener("mouseenter", d, !0),
              document.removeEventListener("mouseleave", m, !0);
          }),
          (e, a) => (
            l(),
            v(
              y,
              { name: "fade" },
              {
                default: _(() => [
                  g(
                    u(
                      "div",
                      R,
                      [
                        a[0] ||
                          (a[0] = u(
                            "div",
                            { class: "cursor__play" },
                            [
                              u(
                                "svg",
                                {
                                  viewBox: "0 0 32 33",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                },
                                [
                                  u("rect", {
                                    y: "0.261475",
                                    width: "32",
                                    height: "32",
                                    rx: "16",
                                    fill: "#FF6A41",
                                  }),
                                  u("path", {
                                    d: "M20.3745 16.2615L12.8745 20.5916L12.8745 11.9313L20.3745 16.2615Z",
                                    fill: "white",
                                  }),
                                ]
                              ),
                            ],
                            -1
                          )),
                        u("span", null, c(f(t)), 1),
                      ],
                      512
                    ),
                    [[b, f(o)]]
                  ),
                ]),
                _: 1,
              }
            )
          )
        );
      },
    }),
    [["__scopeId", "data-v-d2b81d5b"]]
  ),
  Q = { class: "modal-video__wrapper" },
  U = ["src"],
  Y = m(
    o({
      __name: "ModalVideo",
      props: { video: {} },
      emits: ["close"],
      setup(e, { emit: t }) {
        const o = e,
          c = C(),
          { scrollLenis: p } = w(c),
          d = t,
          { locale: m } = h(),
          v = s(),
          _ = s(),
          { $gsap: g } = a();
        let b = null;
        r(() => {
          b = g.context((e) => {
            var t;
            e &&
              e.selector &&
              ((v.value = g
                .timeline({
                  paused: !0,
                  onReverseComplete: () => {
                    var e;
                    null == (e = p.value) || e.start(), d("close");
                  },
                })
                .fromTo(
                  _.value,
                  { opacity: 0 },
                  { opacity: 1, duration: 0.6, ease: "power2.inOut" }
                )),
              null == (t = p.value) || t.stop(),
              v.value.play());
          }, _.value);
        }),
          n(() => {
            null == b || b.revert();
          });
        const y = x(() => {
            const e = "en" === m.value ? "77607f8e90" : "1cf258bd35";
            return `https://player.vimeo.com/video/${o.video}?h=${e}&badge=0&autopause=1&autoplay=1&controls=1&title=0&byline=0&portrait=0&byline=0&muted=0&player_id=0&app_id=58479/embed`;
          }),
          L = () => {
            var e;
            null == (e = v.value) || e.reverse();
          };
        return (e, t) => (
          l(),
          i(
            "div",
            { ref_key: "main", ref: _, class: "modal-video" },
            [
              t[1] || (t[1] = u("div", { class: "modal-video__bg" }, null, -1)),
              u("div", Q, [
                u(
                  "iframe",
                  {
                    src: f(y),
                    allow: "autoplay; fullscreen; picture-in-picture",
                    allowfullscreen: "",
                    frameborder: "0",
                  },
                  null,
                  8,
                  U
                ),
              ]),
              u(
                "button",
                { class: "modal-video__close", onClick: L },
                t[0] ||
                  (t[0] = [
                    u(
                      "svg",
                      {
                        width: "15",
                        height: "15",
                        viewBox: "0 0 15 15",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      [
                        u("path", {
                          d: "M11.3157 4.17773L4.31567 11.1777",
                          stroke: "currentColor",
                          "stroke-linecap": "square",
                          "stroke-linejoin": "round",
                        }),
                        u("path", {
                          d: "M4.31567 4.17773L11.3157 11.1777",
                          stroke: "currentColor",
                          "stroke-linecap": "square",
                          "stroke-linejoin": "round",
                        }),
                      ],
                      -1
                    ),
                  ])
              ),
            ],
            512
          )
        );
      },
    }),
    [["__scopeId", "data-v-0a381a20"]]
  ),
  Z = L("/assets/images/about/right.mp4"),
  J = { class: "about-page__wrapper" },
  K = { class: "about-page__content" },
  N = ["innerHTML"],
  W = ["innerHTML"],
  ee = ["innerHTML"],
  te = { class: "about-page__button" },
  oe = ["innerHTML"],
  ae = { class: "about-page__button" },
  se = { class: "about-page__right" },
  re = m(
    o({
      __name: "the-facts",
      setup(o) {
        const { t: p, locale: d } = h();
        T({ title: p("nav.theProject") }), $();
        const m = k(),
          { mixBlend: g, color: b } = w(m),
          y = s(null),
          x = s(!1),
          { $gsap: L, $SplitText: C } = a(),
          B = s();
        let O = null;
        return (
          r(() => {
            (O = L.context((e) => {
              if (e && e.selector) {
                const t = e.selector(".about-page__overlay")[0],
                  o = e.selector(".about-page__point--1")[0],
                  a = new C(o.querySelectorAll("p, h3, video"), {
                    type: "lines",
                  }),
                  s = L.timeline();
                t &&
                  "none" !== window.getComputedStyle(t).display &&
                  (s.addLabel("initial", "+=0.3"),
                  s.fromTo(
                    t,
                    { scaleX: 1 },
                    {
                      scaleX: 0.666501976284585,
                      duration: 0.8,
                      ease: "power2.out",
                      onComplete: () => {
                        t.style.transform = "scaleX(0)";
                      },
                    },
                    "initial"
                  ),
                  s
                    .from(
                      e.selector(".about-page__right >div img"),
                      { xPercent: 50, duration: 0.8, ease: "power2.out" },
                      "initial"
                    )
                    .addLabel("content")
                    .from(
                      o.querySelector(".about-point__number"),
                      { opacity: 0, duration: 0.6, ease: "power2.out" },
                      "content"
                    )
                    .from(
                      [o.querySelector(".about-point__title"), a.lines],
                      {
                        opacity: 0,
                        y: (80 / 2024) * 100 + "vh",
                        stagger: 0.05,
                        duration: 0.8,
                        ease: "power2.out",
                      },
                      "content"
                    ));
                const r = e.selector(
                  ".about-page__content .texture1, .about-page__content .texture2"
                );
                r.length &&
                  r.forEach((e) => {
                    L.fromTo(
                      e,
                      { y: () => 0.1 * innerHeight },
                      {
                        y: () => 0,
                        ease: "none",
                        scrollTrigger: {
                          trigger: e,
                          start: "top bottom",
                          end: "bottom top",
                          scrub: 0.1,
                        },
                      }
                    );
                  });
                const n = L.utils.toArray(".draw4, .draw1, .draw2, .draw3");
                n.length &&
                  n.forEach((e) => {
                    const t = L.timeline({
                      scrollTrigger: {
                        trigger: e,
                        start: "top 70%",
                        toggleActions: "play none none reverse",
                      },
                    }).from(e.querySelector("path"), {
                      drawSVG: 0,
                      duration: A(0.9, 0.4),
                      ease: "power4.inOut",
                      onComplete: () => {
                        L.set(e.querySelector("path"), { drawSVG: 0 }),
                          setTimeout(() => {
                            t.restart();
                          }, 1e3 * A(2, 1));
                      },
                    });
                    L.fromTo(
                      e,
                      { y: () => 0.1 * innerHeight },
                      {
                        y: () => 0,
                        ease: "none",
                        scrollTrigger: {
                          trigger: e,
                          start: "top bottom",
                          end: "bottom top",
                          scrub: 0.1,
                        },
                      }
                    );
                  });
              }
            }, B.value)),
              (b.value = "black"),
              (g.value = !1);
            document.querySelectorAll("[data-video]").forEach((e) => {
              e.addEventListener("click", (e) =>
                ((e) => {
                  const t = e.target;
                  t &&
                    t.dataset &&
                    t.dataset.video &&
                    ((y.value = t.dataset.video), (x.value = !0));
                })(e)
              );
            });
          }),
          n(() => {
            O && O.revert();
          }),
          (o, a) => {
            const s = e,
              r = G,
              n = H,
              p = t,
              m = q,
              g = D,
              b = Y;
            return (
              l(),
              i(
                "div",
                { ref_key: "main", ref: B, class: "about-page" },
                [
                  M(s, { color: "black", class: "about-page__vertical-lines" }),
                  u("div", J, [
                    u("div", K, [
                      M(
                        r,
                        {
                          number: 1,
                          title: o.$t("about.point1.title"),
                          class: "about-page__point about-page__point--1",
                        },
                        {
                          default: _(() => [
                            u(
                              "div",
                              { innerHTML: o.$t("about.point1.text") },
                              null,
                              8,
                              N
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ["title"]
                      ),
                      M(
                        r,
                        {
                          number: 2,
                          title: o.$t("about.point2.title"),
                          class: "about-page__point about-page__point--2",
                        },
                        {
                          default: _(() => [
                            u(
                              "div",
                              { innerHTML: o.$t("about.point2.text") },
                              null,
                              8,
                              W
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ["title"]
                      ),
                      M(
                        r,
                        {
                          number: 3,
                          title: o.$t("about.point3.title"),
                          class: "about-page__point about-page__point--3",
                        },
                        {
                          default: _(() => [
                            u(
                              "div",
                              { innerHTML: o.$t("about.point3.text") },
                              null,
                              8,
                              ee
                            ),
                            u("div", te, [
                              M(
                                n,
                                { type: "spotify", icon: !1, size: "s" },
                                {
                                  default: _(() => [
                                    E(c(o.$t("comingSoon")), 1),
                                  ]),
                                  _: 1,
                                }
                              ),
                            ]),
                            u(
                              "div",
                              { innerHTML: o.$t("about.point3.text2") },
                              null,
                              8,
                              oe
                            ),
                            u("div", ae, [
                              M(
                                n,
                                {
                                  type: "projects",
                                  size: "s",
                                  target: "_blank",
                                  href: `https://www.verkami.com/locale/${f(
                                    d
                                  )}/projects/40111-iceberg-proyecto-transmedia`,
                                },
                                {
                                  default: _(() => [
                                    E(c(o.$t("homePodcast.viewMore")), 1),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["href"]
                              ),
                            ]),
                          ]),
                          _: 1,
                        },
                        8,
                        ["title"]
                      ),
                      M(p, {
                        src: "/assets/images/texture.png",
                        alt: "",
                        class: "texture1",
                      }),
                      M(p, {
                        src: "/assets/images/texture.png",
                        alt: "",
                        class: "texture2",
                      }),
                      M(f(P), { class: "draw4" }),
                      M(f(I), { class: "draw1" }),
                      M(f(X), { class: "draw2" }),
                      M(f(z), { class: "draw3" }),
                    ]),
                    u("div", se, [
                      a[1] ||
                        (a[1] = u(
                          "div",
                          null,
                          [
                            u(
                              "video",
                              {
                                playsinline: "",
                                autoplay: "",
                                muted: "",
                                loop: "",
                              },
                              [u("source", { src: Z, type: "video/mp4" })]
                            ),
                          ],
                          -1
                        )),
                      u("div", null, [u("p", null, c(o.$t("about.right")), 1)]),
                      M(p, {
                        src: "/assets/images/texture.png",
                        alt: "texture",
                        class: "about-page__texture",
                      }),
                    ]),
                  ]),
                  M(m),
                  a[2] ||
                    (a[2] = u(
                      "div",
                      { class: "about-page__overlay" },
                      null,
                      -1
                    )),
                  M(g),
                  (l(),
                  v(S, { to: "body" }, [
                    f(x) && f(y)
                      ? (l(),
                        v(
                          b,
                          {
                            key: 0,
                            video: f(y),
                            onClose: a[0] || (a[0] = (e) => (x.value = !1)),
                          },
                          null,
                          8,
                          ["video"]
                        ))
                      : j("", !0),
                  ])),
                ],
                512
              )
            );
          }
        );
      },
    }),
    [["__scopeId", "data-v-848706cc"]]
  );
export { re as default };
