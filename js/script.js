var  map  =  new  google.maps.Map(document.getElementById('map'),  {  
    center:  new  google.maps.LatLng([15.35041,108.16041]),  
    mapTypeId:  google.maps.MapTypeId.ROADMAP,  
    zoom:  11  
});  

var  t  =  new  Date().getTime();  
var  waqiMapOverlay  =  new  google.maps.ImageMapType({  
    getTileUrl:  function  (coord,  zoom)  {  
            return  'https://tiles.aqicn.org/tiles/usepa-aqi/'  +  zoom  +  "/"  +  coord.x  +  "/"  +  coord.y  +  ".png?token=10eff006ec31b515737b4e48647a0d535de258a8";  
    },  
    name:  "Air  Quality",  
});  

function openNav() {
    document.getElementById("mySidenav").classList.add("open");
}
function closeNav() {
    document.getElementById("mySidenav").classList.remove("open");
}
map.overlayMapTypes.insertAt(0,  waqiMapOverlay);   

import {T as Rr, s as At, x as tt, n as $, i as td, w as ed, r as jt, t as Ft} from "./chunks/iFRUXW4k.min.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const oc = (o,i,n)=>(n.configurable = !0,
n.enumerable = !0,
Reflect.decorate && typeof i != "object" && Object.defineProperty(o, i, n),
n);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function py(o, i) {
    return (n,r,l)=>{
        const d = f=>f.renderRoot?.querySelector(o) ?? null;
        if (i) {
            const {get: f, set: S} = typeof r == "object" ? n : l ?? (()=>{
                const C = Symbol();
                return {
                    get() {
                        return this[C]
                    },
                    set(F) {
                        this[C] = F
                    }
                }
            }
            )();
            return oc(n, r, {
                get() {
                    if (i) {
                        let C = f.call(this);
                        return C === void 0 && (C = d(this),
                        S.call(this, C)),
                        C
                    }
                    return d(this)
                }
            })
        }
        return oc(n, r, {
            get() {
                return d(this)
            }
        })
    }
}
const id = "data-close-dialog"
  , lc = `[${id}]`;
function nd(o) {
    let i = Array.from(o.querySelectorAll("[autofocus]")).filter(rd)[0];
    i || (i = o,
    o.setAttribute("tabindex", "-1")),
    i.focus()
}
function cc(o) {
    const i = o.currentTarget;
    i instanceof Element && (o.key === "Escape" || o.key === "Esc" ? (ya(i, !1),
    o.stopPropagation()) : o.key === "Tab" && my(o))
}
function rd(o) {
    return o.tabIndex >= 0 && !o.disabled && gy(o)
}
function gy(o) {
    return !o.hidden && (!o.type || o.type !== "hidden") && (o.offsetWidth > 0 || o.offsetHeight > 0)
}
function my(o) {
    if (!(o.currentTarget instanceof Element))
        return;
    const i = o.currentTarget.querySelector("details-dialog");
    if (!i)
        return;
    o.preventDefault();
    const n = Array.from(i.querySelectorAll("*")).filter(rd);
    if (n.length === 0)
        return;
    const r = o.shiftKey ? -1 : 1
      , l = i.getRootNode()
      , d = i.contains(l.activeElement) ? l.activeElement : null;
    let f = r === -1 ? -1 : 0;
    if (d instanceof HTMLElement) {
        const S = n.indexOf(d);
        S !== -1 && (f = S + r)
    }
    f < 0 ? f = n.length - 1 : f = f % n.length,
    n[f].focus()
}
function sd(o) {
    const i = o.querySelector("details-dialog");
    return i instanceof vn ? i.dispatchEvent(new CustomEvent("details-dialog-close",{
        bubbles: !0,
        cancelable: !0
    })) : !0
}
function dc(o) {
    if (!(o.currentTarget instanceof Element))
        return;
    const i = o.currentTarget.closest("details");
    !i || !i.hasAttribute("open") || sd(i) || (o.preventDefault(),
    o.stopPropagation())
}
function uc(o) {
    const i = o.currentTarget;
    if (!(i instanceof Element))
        return;
    const n = i.querySelector("details-dialog");
    if (n instanceof vn)
        if (i.hasAttribute("open")) {
            const r = "getRootNode"in n ? n.getRootNode() : document;
            r.activeElement instanceof HTMLElement && si.set(n, {
                details: i,
                activeElement: r.activeElement
            }),
            nd(n),
            i.addEventListener("keydown", cc)
        } else {
            for (const l of n.querySelectorAll("form"))
                l.reset();
            const r = vy(i, n);
            r && r.focus(),
            i.removeEventListener("keydown", cc)
        }
}
function vy(o, i) {
    const n = si.get(i);
    return n && n.activeElement instanceof HTMLElement ? n.activeElement : o.querySelector("summary")
}
function ya(o, i) {
    i !== o.hasAttribute("open") && (i ? o.setAttribute("open", "") : sd(o) && o.removeAttribute("open"))
}
function Pr(o) {
    const i = o.currentTarget;
    if (!(i instanceof Element))
        return;
    const n = i.querySelector("details-dialog");
    if (!(n instanceof vn))
        return;
    const r = n.querySelector("include-fragment:not([src])");
    if (!r)
        return;
    const l = n.src;
    l !== null && (r.addEventListener("loadend", ()=>{
        i.hasAttribute("open") && nd(n)
    }
    ),
    r.setAttribute("src", l),
    xa(i))
}
function hc(o, i, n) {
    xa(o),
    i && o.addEventListener("toggle", Pr, {
        once: !0
    }),
    i && n && o.addEventListener("mouseover", Pr, {
        once: !0
    })
}
function xa(o) {
    o.removeEventListener("toggle", Pr),
    o.removeEventListener("mouseover", Pr)
}
const si = new WeakMap;
class vn extends HTMLElement {
    static get CLOSE_ATTR() {
        return id
    }
    static get CLOSE_SELECTOR() {
        return lc
    }
    constructor() {
        super(),
        si.set(this, {
            details: null,
            activeElement: null
        }),
        this.addEventListener("click", function({target: i}) {
            if (!(i instanceof Element))
                return;
            const n = i.closest("details");
            n && i.closest(lc) && ya(n, !1)
        })
    }
    get src() {
        return this.getAttribute("src")
    }
    set src(i) {
        this.setAttribute("src", i || "")
    }
    get preload() {
        return this.hasAttribute("preload")
    }
    set preload(i) {
        i ? this.setAttribute("preload", "") : this.removeAttribute("preload")
    }
    connectedCallback() {
        this.setAttribute("role", "dialog"),
        this.setAttribute("aria-modal", "true");
        const i = si.get(this);
        if (!i)
            return;
        const n = this.parentElement;
        if (!n)
            return;
        const r = n.querySelector("summary");
        r && (r.hasAttribute("role") || r.setAttribute("role", "button"),
        r.addEventListener("click", dc, {
            capture: !0
        })),
        n.addEventListener("toggle", uc),
        i.details = n,
        hc(n, this.src, this.preload)
    }
    disconnectedCallback() {
        const i = si.get(this);
        if (!i)
            return;
        const {details: n} = i;
        if (!n)
            return;
        n.removeEventListener("toggle", uc),
        xa(n);
        const r = n.querySelector("summary");
        r && r.removeEventListener("click", dc, {
            capture: !0
        }),
        i.details = null
    }
    toggle(i) {
        const n = si.get(this);
        if (!n)
            return;
        const {details: r} = n;
        r && ya(r, i)
    }
    static get observedAttributes() {
        return ["src", "preload"]
    }
    attributeChangedCallback() {
        const i = si.get(this);
        if (!i)
            return;
        const {details: n} = i;
        n && hc(n, this.src, this.preload)
    }
}
window.customElements.get("details-dialog") || (window.DetailsDialogElement = vn,
window.customElements.define("details-dialog", vn));
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const na = o=>o ?? Rr;
var yy = Object.defineProperty
  , _y = Object.getOwnPropertyDescriptor
  , de = (o,i,n,r)=>{
    for (var l = r > 1 ? void 0 : r ? _y(i, n) : i, d = o.length - 1, f; d >= 0; d--)
        (f = o[d]) && (l = (r ? f(i, n, l) : f(l)) || l);
    return r && l && yy(i, n, l),
    l
}
;
function by() {
    return wy() || Ey()
}
function wy() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent) || xy()
}
function Ey() {
    return /Android/i.test(navigator.userAgent)
}
function xy() {
    return navigator.userAgent.toLowerCase().indexOf("macintosh") !== -1 && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 2
}
function Sy(o, i) {
    let n = 0;
    const r = l=>{
        const d = window.innerWidth;
        (!by() || n !== d) && (o(l),
        n = d)
    }
    ;
    return window.addEventListener("resize", r, i),
    ()=>{
        window.removeEventListener("resize", r)
    }
}
var Cy = class {
    constructor() {
        this.watcherConfigs = []
    }
    add(i) {
        Array.isArray(i.on) ? i.on.forEach(r=>{
            const l = Object.assign({}, i);
            l.on = r,
            this.addSingleEvent(l)
        }
        ) : this.addSingleEvent(i)
    }
    addSingleEvent(i) {
        const n = r=>{
            i.runWhen ? i.runWhen() && i.callback(r) : i.callback(r)
        }
        ;
        if (i.listener = n,
        i.on === "smartResize")
            i.remover = Sy(n, i.eventOptions || {});
        else if (i.on === "resize" && i.element !== window) {
            const r = new ResizeObserver(l=>{
                n(l)
            }
            );
            r.observe(i.element),
            i.remover = ()=>{
                r.unobserve(i.element)
            }
        } else if (i.on === "mutation") {
            const r = new MutationObserver(l=>{
                n(l)
            }
            );
            r.observe(i.element, i.eventOptions),
            i.remover = ()=>{
                r.disconnect()
            }
        } else
            i.element instanceof MediaQueryList ? (i.element.addEventListener(i.on, n, i.eventOptions || {}),
            i.remover = ()=>{
                i.element.removeEventListener(i.on, n, i.eventOptions || {})
            }
            ) : (i.element.addEventListener(i.on, n, i.eventOptions || {}),
            i.remover = ()=>{
                i.element.removeEventListener(i.on, n, i.eventOptions || {})
            }
            );
        this.watcherConfigs.push(i)
    }
    removeById(i) {
        this.watcherConfigs = this.watcherConfigs.filter(n=>{
            if (n.id && n.id === i) {
                const r = n.remover;
                return r && r(),
                !1
            }
            return n
        }
        )
    }
    removeAll() {
        this.watcherConfigs.forEach(i=>{
            const n = i.remover;
            n && n()
        }
        ),
        this.watcherConfigs = []
    }
    run(i) {
        this.watcherConfigs.filter(r=>r.id && r.id === i).forEach(r=>{
            r.callback() && r.callback()
        }
        )
    }
    dispose() {
        this.removeAll()
    }
}
;
function Ay(o, i, n) {
    let r;
    return function(...l) {
        const d = this
          , f = ()=>{
            r = void 0,
            o.apply(d, l)
        }
          , S = ()=>{
            r = void 0
        }
        ;
        n || (clearTimeout(r),
        r = +setTimeout(f, i)),
        n && r === void 0 && (o.apply(d, l),
        r = +setTimeout(S, i))
    }
}
var Ly = class {
    constructor() {
        this.resolve = ()=>{}
        ,
        this.reject = ()=>{}
        ,
        this.complete = !1,
        this.promise = new Promise((i,n)=>{
            this.resolve = r=>(this.complete = !0,
            i(r)),
            this.reject = r=>(this.complete = !0,
            n(r))
        }
        )
    }
    getPromise() {
        return this.complete ? new Promise(i=>{
            i()
        }
        ) : this.promise
    }
}
;
function ky(o) {
    return window.getComputedStyle(o).display === "none"
}
function ad(o) {
    return ky(o) ? !0 : o.parentElement ? ad(o.parentElement) : !1
}
var Iy = class {
    static inview(i, n={}, r) {
        let l = null
          , d = null
          , f = null
          , S = !1;
        const C = new Ly
          , F = ()=>({
            changes: l,
            lastChange: d,
            inview: f,
            ready: S
        })
          , U = z=>{
            z.length >= 1 && (l = z,
            d = z.slice(-1)[0],
            f = d.isIntersecting,
            S = !0,
            C.resolve()),
            r && r(i, z.slice(-1)[0], L)
        }
        ;
        let B = window.location.search.split("evBypass=")[1];
        if (B = B && B.split("&")[0],
        B === "true")
            return window.setTimeout(()=>{
                r && r(i, {
                    isIntersecting: !0,
                    isVisible: !0
                }, ()=>{}
                ),
                C.resolve()
            }
            ),
            {
                observer: null,
                dispose: ()=>{}
                ,
                state: ()=>({
                    ready: !0,
                    inview: !0
                }),
                readyPromise: C.getPromise()
            };
        const L = ()=>{
            R && R.unobserve(i),
            R && R.disconnect(),
            l = [],
            d = null
        }
          , R = new IntersectionObserver(U,n);
        return R.observe(i),
        {
            observer: R,
            dispose: L,
            state: F,
            readyPromise: C.getPromise()
        }
    }
}
  , te = class extends At {
    constructor() {
        super(),
        this.disableEager = !1,
        this.maxDpr = window.devicePixelRatio,
        this.autoRenderWidth = 0,
        this.loading = "lazy"
    }
    connectedCallback() {
        super.connectedCallback(),
        this.watcher = new Cy,
        this.googleParams = this.googleParams ? "-" + this.googleParams : "",
        this.disableEager = this.getAttribute("disable-eager") === "true",
        this.isGoogleImage = this.src && !this.src.includes(".svg") && this.src.startsWith("https://lh3.googleusercontent.com") && !this.src.includes("="),
        this.isGoogleImage && (this.watcher.add({
            element: this,
            on: "resize",
            callback: Ay(this.onResize.bind(this), 100)
        }),
        this.onResize()),
        Iy.inview(this, {
            threshold: 0
        }, (o,i,n)=>{
            i.isIntersecting && !ad(this) && !this.disableEager && (this.loading = "eager"),
            n()
        }
        )
    }
    onResize() {
        const o = this.querySelector("img")
          , i = Math.ceil(Math.max(this.offsetWidth, o ? o.offsetWidth : 0) / 50) * 50
          , n = Math.ceil(Math.max(this.offsetHeight, o ? o.offsetHeight : 0) / 50) * 50;
        this.autoRenderWidth = Math.max(this.autoRenderWidth, Math.ceil(Math.max(i, n) * (this.googleImageScalar || 1) * Math.min(window.devicePixelRatio, this.maxDpr)))
    }
    disconnectedCallback() {
        super.disconnectedCallback(),
        this.watcher && this.watcher.dispose()
    }
    createRenderRoot() {
        return this
    }
    renderImage(o) {
        return tt`
      <img 
        loading="${this.loading}"
        fetchPriority=${na(this.fetchPriority ? this.fetchPriority : null)}
        width=${na(this.aspectRatioWidth ? this.aspectRatioWidth : null)}
        height=${na(this.aspectRatioHeight ? this.aspectRatioHeight : null)}
        src="${o}"
        alt="${this.alt}"
      />
    `
    }
    render() {
        return tt`
      ${this.isGoogleImage ? this.autoRenderWidth === 0 ? Rr : this.renderImage(this.src + `=rw-e365-w${this.autoRenderWidth}${this.googleParams}`) : this.renderImage(this.src)}
    `
    }
}
;
de([$({
    type: String,
    attribute: "src"
})], te.prototype, "src", 2);
de([$({
    type: String,
    attribute: "alt"
})], te.prototype, "alt", 2);
de([$({
    type: String,
    attribute: "loading"
})], te.prototype, "loading", 2);
de([$({
    type: String,
    attribute: "width"
})], te.prototype, "aspectRatioWidth", 2);
de([$({
    type: String,
    attribute: "height"
})], te.prototype, "aspectRatioHeight", 2);
de([$({
    type: String,
    attribute: "google-params"
})], te.prototype, "googleParams", 2);
de([$({
    type: Boolean,
    attribute: "disable-eager"
})], te.prototype, "disableEager", 2);
de([$({
    type: Number,
    attribute: "max-dpr"
})], te.prototype, "maxDpr", 2);
de([$({
    type: String,
    attribute: "fetch-priority"
})], te.prototype, "fetchPriority", 2);
de([$()], te.prototype, "autoRenderWidth", 2);
de([$({
    type: String,
    attribute: "google-image-scalar"
})], te.prototype, "googleImageScalar", 2);
var Ty = Object.defineProperty
  , Ry = Object.getOwnPropertyDescriptor
  , Sa = (o,i,n,r)=>{
    for (var l = r > 1 ? void 0 : r ? Ry(i, n) : i, d = o.length - 1, f; d >= 0; d--)
        (f = o[d]) && (l = (r ? f(i, n, l) : f(l)) || l);
    return r && l && Ty(i, n, l),
    l
}
  , Py = class {
    constructor() {
        this.loadedScripts = {},
        this.disposed = !1
    }
    load(i, n) {
        const r = this.loadedScripts[i];
        if (r)
            return r;
        const l = new Promise((d,f)=>{
            if (n.test()) {
                d();
                return
            }
            this.renderScriptTag(i, n);
            const S = Date.now()
              , C = n.timeout || 5e3
              , F = ()=>{
                if (this.disposed) {
                    f("script loader is disposed");
                    return
                }
                if (n.test()) {
                    d();
                    return
                }
                if (Date.now() - S > C) {
                    f(`failed to load ${i} due to timeout`);
                    return
                }
                window.requestAnimationFrame(F)
            }
            ;
            window.requestAnimationFrame(F)
        }
        );
        return this.loadedScripts[i] = l,
        l.catch(d=>{
            console.error(`failed to load ${i}`),
            console.error(d),
            delete this.loadedScripts[i]
        }
        ),
        l
    }
    renderScriptTag(i, n) {
        const r = document.createElement("script");
        if (n?.attrs)
            for (const l in n.attrs) {
                const d = n.attrs[l];
                r.setAttribute(l, d)
            }
        r.src = i,
        document.body.appendChild(r)
    }
    renderDom(i) {
        this.renderScriptTag(i)
    }
    dispose() {
        this.loadedScripts = {},
        this.disposed = !0
    }
}
  , Oy = "https://www.youtube.com/iframe_api?trustedtypes=1"
  , od = class extends At {
    constructor() {
        super(...arguments),
        this.enableJsApi = !1
    }
    connectedCallback() {
        super.connectedCallback()
    }
    pause() {
        this.player && this.player.pauseVideo && this.player.pauseVideo()
    }
    play() {
        this.player && this.player.playVideo && this.player.playVideo()
    }
    async load(o, i=!1) {
        if (this.videoId = o,
        this.player) {
            this.player.loadVideoById(this.videoId),
            i ? this.play() : this.pause();
            return
        }
        await od.scriptLoader.load(Oy + `&origin=${location.href}`, {
            test: ()=>!!window.YT && window.YT.loaded === 1
        });
        const n = {
            autohide: 1,
            autoplay: 0,
            fs: 1,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3,
            enablejsapi: this.enableJsApi ? 1 : 0,
            origin: location.href
        }
          , r = Object.assign({}, n)
          , l = {
            videoId: this.videoId,
            playerVars: r,
            events: {
                onReady: d=>{
                    this.player = d.target,
                    i ? (d.target.playVideo(),
                    this.play()) : this.pause()
                }
                ,
                onStateChange: d=>{
                    const f = new CustomEvent("stateChange",{
                        detail: {
                            event: d
                        },
                        bubbles: !0,
                        composed: !0
                    });
                    this.dispatchEvent(f)
                }
            }
        };
        new YT.Player(this.playerElement,l)
    }
    render() {
        return this.videoId && this.load(this.videoId),
        tt`<div class="container">
      <div class="container__player"></div>
    </div>`
    }
}
  , Di = od;
Di.scriptLoader = new Py;
Di.styles = td`
    :host {
      height: 100%;
      width: 100%;
      display: block;
    }
    .container {
      align-items: center;
      cursor: pointer;
      display: inline-flex;
      justify-content: center;
      position: relative;
      width: 100%;
      height: 100%;
    }
    .container__player {
      bottom: 0;
      height: 100%;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
      z-index: 1;
    }
  `;
Sa([$({
    type: String,
    attribute: "video-id",
    reflect: !0
})], Di.prototype, "videoId", 2);
Sa([$({
    type: Boolean,
    attribute: "enable-js-api",
    reflect: !0
})], Di.prototype, "enableJsApi", 2);
Sa([py(".container__player")], Di.prototype, "playerElement", 2);
function Dy() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent) || Fy()
}
function $y() {
    return /Android/i.test(navigator.userAgent)
}
function Fy() {
    return navigator.userAgent.toLowerCase().indexOf("macintosh") !== -1 && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 2
}
var By = class {
    constructor() {
        this.loadedScripts = {},
        this.disposed = !1
    }
    load(o, i) {
        const n = this.loadedScripts[o];
        if (n)
            return n;
        const r = new Promise((l,d)=>{
            if (i.test()) {
                l();
                return
            }
            this.renderScriptTag(o, i);
            const f = Date.now()
              , S = i.timeout || 5e3
              , C = ()=>{
                if (this.disposed) {
                    d("script loader is disposed");
                    return
                }
                if (i.test()) {
                    l();
                    return
                }
                if (Date.now() - f > S) {
                    d(`failed to load ${o} due to timeout`);
                    return
                }
                window.requestAnimationFrame(C)
            }
            ;
            window.requestAnimationFrame(C)
        }
        );
        return this.loadedScripts[o] = r,
        r.catch(l=>{
            console.error(`failed to load ${o}`),
            console.error(l),
            delete this.loadedScripts[o]
        }
        ),
        r
    }
    renderScriptTag(o, i) {
        const n = document.createElement("script");
        if (i?.attrs)
            for (const r in i.attrs) {
                const l = i.attrs[r];
                n.setAttribute(r, l)
            }
        n.src = o,
        document.body.appendChild(n)
    }
    renderDom(o) {
        this.renderScriptTag(o)
    }
    dispose() {
        this.loadedScripts = {},
        this.disposed = !0
    }
}
  , Wy = "https://www.youtube.com/iframe_api?trustedtypes=1"
  , My = {
    namespace: "degu-youtube-modal",
    useHandlerOnMobile: !0,
    transitionDuration: 300,
    parentSelector: "body",
    playerVars: {
        autohide: 1,
        autoplay: 1,
        fs: 1,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        iv_load_policy: 3
    },
    scriptLoader: new By
}
  , br = {
    ENTER: "Enter",
    ESC: "Escape",
    SPACE: " "
}
  , qy = class {
    constructor(o) {
        this.isVisible = !1,
        this.config = Object.assign({}, My, o),
        this.container = document.querySelector(this.config.parentSelector);
        const i = this.createDom("div", this.config.namespace);
        i.setAttribute("aria-modal", "true"),
        i.setAttribute("role", "dialog");
        const n = this.createDom("button", `${this.config.namespace}__x`);
        n.setAttribute("aria-label", "Close video player"),
        n.setAttribute("tabindex", "0"),
        n.addEventListener("click", ()=>{
            this.setActive(!1)
        }
        ),
        this.closeEl = n;
        const r = this.createDom("div", `${this.config.namespace}__attribution`);
        this.attributionEl = r;
        const l = this.createDom("div", `${this.config.namespace}__player`);
        this.playerEl = l;
        const d = this.createDom("div", `${this.config.namespace}__mask`);
        i.appendChild(n),
        i.appendChild(r),
        i.appendChild(l),
        i.appendChild(d),
        this.modalEl = i,
        this.container.appendChild(i),
        document.addEventListener("click", this.handleEvent.bind(this)),
        document.addEventListener("keydown", this.handleKeyboardEvent.bind(this))
    }
    async play(o, i) {
        const n = i || {};
        if (this.config.useHandlerOnMobile && (Dy() || $y())) {
            let l = `https://m.youtube.com/watch?v=${o}`;
            n.startTime && (l = `${l}&t=${n.startTime}s`),
            window.location.href = l;
            return
        }
        await this.config.scriptLoader.load(Wy, {
            test: ()=>window.YT && window.YT.loaded === 1
        }),
        n.attribution && (this.attributionEl.textContent = n.attribution);
        const r = n.orientation || "landscape";
        if (this.modalEl.setAttribute("data-orientation", r),
        this.setActive(!0),
        this.player) {
            if (o === this.activeVideoId)
                return;
            this.player.loadVideoById(o, n.startTime || 0, "large"),
            this.activeVideoId = o
        } else {
            const l = Object.assign({}, this.config.playerVars);
            n.startTime && (l.start = n.startTime),
            l.origin = location.protocol + "//" + location.host;
            const d = {
                videoId: o,
                playerVars: l,
                events: {
                    onReady: f=>{
                        f.target.playVideo()
                    }
                }
            };
            this.player = new YT.Player(this.playerEl,d)
        }
    }
    getPlayOptionsFromAttrs(o) {
        const i = {}
          , n = +(o.getAttribute(`data-${this.config.namespace}-video-start-seconds`) || 0);
        n > 0 && (i.startTime = n);
        const r = o.getAttribute(`data-${this.config.namespace}-attribution`);
        r && (i.attribution = r);
        const l = o.getAttribute(`data-${this.config.namespace}-orientation`);
        return l && (i.orientation = l),
        i
    }
    setActive(o) {
        o ? (this.lastScrollY = window.pageYOffset,
        this.lastFocusedEl = document.activeElement,
        window.setTimeout(()=>{
            this.closeEl.focus(),
            this.config.onModalOpen && this.config.onModalOpen(this)
        }
        , this.config.transitionDuration + 100)) : window.setTimeout(()=>{
            this.lastFocusedEl && (this.lastFocusedEl.focus(),
            this.lastFocusedEl = void 0),
            window.scrollTo({
                left: 0,
                top: this.lastScrollY
            }),
            this.config.onModalClose && this.config.onModalClose(this)
        }
        , this.config.transitionDuration + 100),
        this.setVisible(o)
    }
    getPlayer() {
        return this.player
    }
    dispose() {
        document.removeEventListener("click", this.handleEvent.bind(this)),
        document.removeEventListener("keydown", this.handleKeyboardEvent.bind(this)),
        this.modalEl && this.container.removeChild(this.modalEl)
    }
    createDom(o, i, ...n) {
        const r = document.createElement(o);
        return r.className = i,
        n && n.length && n.forEach(l=>r.appendChild(l)),
        r
    }
    handleEvent(o) {
        let i = o.target;
        for (; i; ) {
            const n = `data-${this.config.namespace}-video-id`
              , r = i.getAttribute(n);
            if (r) {
                o.preventDefault();
                const l = this.getPlayOptionsFromAttrs(i);
                this.play(r, l);
                return
            }
            i = i.parentElement
        }
    }
    handleKeyboardEvent(o) {
        if (this.isVisible) {
            if (!this.player)
                return;
            o.key === br.ESC ? this.setActive(!1) : o.key === br.SPACE && (this.player.getPlayerState() === YT.PlayerState.PLAYING ? this.player.pauseVideo() : this.player.playVideo())
        } else
            (o.key === br.ENTER || o.key === br.SPACE) && this.handleEvent(o)
    }
    setVisible(o) {
        window.setTimeout(()=>{
            this.player && (o ? this.player.getPlayerState() !== YT.PlayerState.PLAYING && this.player.playVideo() : this.player.pauseVideo())
        }
        , 100),
        window.setTimeout(()=>{
            this.modalEl.classList.toggle(`${this.config.namespace}--enabled`, o)
        }
        , o ? 0 : this.config.transitionDuration),
        window.setTimeout(()=>{
            this.modalEl.classList.toggle(`${this.config.namespace}--visible`, o),
            this.isVisible = o
        }
        , o ? this.config.transitionDuration : 0)
    }
}
  , Pi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ny(o) {
    return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o
}
(function(o, i) {
    (function(n, r) {
        r()
    }
    )(Pi, function() {
        function n(l) {
            var d = !0
              , f = !1
              , S = null
              , C = {
                text: !0,
                search: !0,
                url: !0,
                tel: !0,
                email: !0,
                password: !0,
                number: !0,
                date: !0,
                month: !0,
                week: !0,
                time: !0,
                datetime: !0,
                "datetime-local": !0
            };
            function F(w) {
                return !!(w && w !== document && w.nodeName !== "HTML" && w.nodeName !== "BODY" && "classList"in w && "contains"in w.classList)
            }
            function U(w) {
                var O = w.type
                  , M = w.tagName;
                return !!(M === "INPUT" && C[O] && !w.readOnly || M === "TEXTAREA" && !w.readOnly || w.isContentEditable)
            }
            function B(w) {
                w.classList.contains("focus-visible") || (w.classList.add("focus-visible"),
                w.setAttribute("data-focus-visible-added", ""))
            }
            function L(w) {
                w.hasAttribute("data-focus-visible-added") && (w.classList.remove("focus-visible"),
                w.removeAttribute("data-focus-visible-added"))
            }
            function R(w) {
                w.metaKey || w.altKey || w.ctrlKey || (F(l.activeElement) && B(l.activeElement),
                d = !0)
            }
            function z(w) {
                d = !1
            }
            function K(w) {
                F(w.target) && (d || U(w.target)) && B(w.target)
            }
            function q(w) {
                F(w.target) && (w.target.classList.contains("focus-visible") || w.target.hasAttribute("data-focus-visible-added")) && (f = !0,
                window.clearTimeout(S),
                S = window.setTimeout(function() {
                    f = !1
                }, 100),
                L(w.target))
            }
            function T(w) {
                document.visibilityState === "hidden" && (f && (d = !0),
                g())
            }
            function g() {
                document.addEventListener("mousemove", m),
                document.addEventListener("mousedown", m),
                document.addEventListener("mouseup", m),
                document.addEventListener("pointermove", m),
                document.addEventListener("pointerdown", m),
                document.addEventListener("pointerup", m),
                document.addEventListener("touchmove", m),
                document.addEventListener("touchstart", m),
                document.addEventListener("touchend", m)
            }
            function y() {
                document.removeEventListener("mousemove", m),
                document.removeEventListener("mousedown", m),
                document.removeEventListener("mouseup", m),
                document.removeEventListener("pointermove", m),
                document.removeEventListener("pointerdown", m),
                document.removeEventListener("pointerup", m),
                document.removeEventListener("touchmove", m),
                document.removeEventListener("touchstart", m),
                document.removeEventListener("touchend", m)
            }
            function m(w) {
                w.target.nodeName && w.target.nodeName.toLowerCase() === "html" || (d = !1,
                y())
            }
            document.addEventListener("keydown", R, !0),
            document.addEventListener("mousedown", z, !0),
            document.addEventListener("pointerdown", z, !0),
            document.addEventListener("touchstart", z, !0),
            document.addEventListener("visibilitychange", T, !0),
            g(),
            l.addEventListener("focus", K, !0),
            l.addEventListener("blur", q, !0),
            l.nodeType === Node.DOCUMENT_FRAGMENT_NODE && l.host ? l.host.setAttribute("data-js-focus-visible", "") : l.nodeType === Node.DOCUMENT_NODE && (document.documentElement.classList.add("js-focus-visible"),
            document.documentElement.setAttribute("data-js-focus-visible", ""))
        }
        if (typeof window < "u" && typeof document < "u") {
            window.applyFocusVisiblePolyfill = n;
            var r;
            try {
                r = new CustomEvent("focus-visible-polyfill-ready")
            } catch {
                r = document.createEvent("CustomEvent"),
                r.initCustomEvent("focus-visible-polyfill-ready", !1, !1, {})
            }
            window.dispatchEvent(r)
        }
        typeof document < "u" && n(document)
    })
}
)();
function Uy() {
    return zy() || Gy()
}
function zy() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent) || Hy()
}
function Gy() {
    return /Android/i.test(navigator.userAgent)
}
function Hy() {
    return navigator.userAgent.toLowerCase().indexOf("macintosh") !== -1 && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 2
}
function Vy(o, i) {
    let n = 0;
    const r = l=>{
        const d = window.innerWidth;
        (!Uy() || n !== d) && (o(l),
        n = d)
    }
    ;
    return window.addEventListener("resize", r, i),
    ()=>{
        window.removeEventListener("resize", r)
    }
}
var ct = class {
    constructor() {
        this.watcherConfigs = []
    }
    add(o) {
        Array.isArray(o.on) ? o.on.forEach(n=>{
            const r = Object.assign({}, o);
            r.on = n,
            this.addSingleEvent(r)
        }
        ) : this.addSingleEvent(o)
    }
    addSingleEvent(o) {
        const i = n=>{
            o.runWhen ? o.runWhen() && o.callback(n) : o.callback(n)
        }
        ;
        if (o.listener = i,
        o.on === "smartResize")
            o.remover = Vy(i, o.eventOptions || {});
        else if (o.on === "resize" && o.element !== window) {
            const n = new ResizeObserver(r=>{
                i(r)
            }
            );
            n.observe(o.element),
            o.remover = ()=>{
                n.unobserve(o.element)
            }
        } else if (o.on === "mutation") {
            const n = new MutationObserver(r=>{
                i(r)
            }
            );
            n.observe(o.element, o.eventOptions),
            o.remover = ()=>{
                n.disconnect()
            }
        } else
            o.element instanceof MediaQueryList ? (o.element.addEventListener(o.on, i, o.eventOptions || {}),
            o.remover = ()=>{
                o.element.removeEventListener(o.on, i, o.eventOptions || {})
            }
            ) : (o.element.addEventListener(o.on, i, o.eventOptions || {}),
            o.remover = ()=>{
                o.element.removeEventListener(o.on, i, o.eventOptions || {})
            }
            );
        this.watcherConfigs.push(o)
    }
    removeById(o) {
        this.watcherConfigs = this.watcherConfigs.filter(i=>{
            if (i.id && i.id === o) {
                const n = i.remover;
                return n && n(),
                !1
            }
            return i
        }
        )
    }
    removeAll() {
        this.watcherConfigs.forEach(o=>{
            const i = o.remover;
            i && i()
        }
        ),
        this.watcherConfigs = []
    }
    run(o) {
        this.watcherConfigs.filter(n=>n.id && n.id === o).forEach(n=>{
            n.callback() && n.callback()
        }
        )
    }
    dispose() {
        this.removeAll()
    }
}
;
const Ge = (o,i,n,r="trackEvent")=>{
    window.dataLayer = window.dataLayer || [];
    const l = {
        event: r,
        eventCategory: o,
        eventAction: i,
        eventLabel: n
    };
    window.dataLayer.push(l)
}
;
function Ky() {
    document.querySelector("iframe[data-iframe-embed]") && window.addEventListener("message", i=>{
        const n = {
            category: i.data?.eventCategory,
            action: i.data?.eventAction,
            label: i.data?.eventLabel
        };
        n.category && n.action && n.label && Ge(n.category, n.action, n.label)
    }
    )
}
const ra = "banner--scroll-up"
  , wr = "banner--scroll-down"
  , fc = "banner--below-fold";
class Yy {
    constructor(i) {
        this.domWatcher = new ct,
        this.el = i,
        this.bannerElements = this.el.querySelectorAll(".banner__body"),
        this.lastScroll = 0,
        this.close = this.el.querySelector(".banner__close"),
        this.viewportHeight = window.innerHeight,
        this.events = {
            "event-category": this.el.getAttribute("data-category"),
            "event-action": this.el.getAttribute("data-action"),
            "event-label": this.el.getAttribute("data-label")
        };
        const n = this.el.id;
        this.sessionKey = n ? `visited-${n}` : "visited",
        this.init()
    }
    init() {
        sessionStorage.getItem(this.sessionKey) !== "closed" && (this.el.classList.add("banner--show"),
        this.domWatcher.add({
            element: window,
            on: "scroll",
            callback: ()=>this.onPageScroll(),
            eventOptions: {
                passive: !1
            }
        }),
        this.domWatcher.add({
            element: this.close,
            on: ["click"],
            callback: i=>{
                this.onClickOrEnterKey(i, ()=>{
                    this.removeBanner()
                }
                )
            }
        }),
        this.initLocalizedBody(),
        this.initClientSideBanner(),
        this.trackEvents(this.events))
    }
    trackEvents(i) {
        const n = i?.["event-category"]
          , r = i?.["event-action"]
          , l = i?.["event-label"];
        n && r && l && Ge(n, r, l)
    }
    initLocalizedBody() {
        let i = [...window.navigator.languages]
          , n = !1;
        if (i?.length) {
            i.includes("en") && (i = i.filter(r=>r !== "en"),
            i.push("en"));
            for (const r of i)
                if (n = this.updateNavigatorLanguage(r),
                n)
                    return
        }
        n || this.updateNavigatorLanguage("en")
    }
    async getClientSideBannerData() {
        try {
            const i = await fetch("/banner.json");
            return i ? await i.json() : void 0
        } catch {
            return
        }
    }
    initClientSideBanner() {
        this.getClientSideBannerData().then(i=>{
            const n = this.el.querySelector(".banner__content");
            if (i?.banner) {
                this.bannerElements.forEach(l=>l.remove());
                const r = document.createElement("div");
                r.classList.add("banner__body"),
                r.innerHTML = i.banner,
                n.appendChild(r),
                i?.bannerEvents && (this.events = i?.bannerEvents)
            }
        }
        )
    }
    updateNavigatorLanguage(i) {
        let n = !1;
        const r = Array.from(this.el.querySelectorAll("[if-navigator-language]"));
        for (const l of r)
            l.getAttribute("if-navigator-language")?.toLowerCase() === i.toLowerCase() && (l.removeAttribute("if-navigator-language"),
            this.events = {
                "event-category": l.getAttribute("data-category"),
                "event-action": l.getAttribute("data-action"),
                "event-label": l.getAttribute("data-label")
            },
            n = !0);
        return n
    }
    onClickOrEnterKey(i, n) {
        i.preventDefault();
        const r = i.type === "click"
          , l = i.type === "keyup" && i.key === "Enter";
        (r || l) && n()
    }
    removeBanner() {
        sessionStorage.setItem(this.sessionKey, "closed"),
        this.el.classList.remove("banner--show")
    }
    onPageScroll() {
        const i = window.pageYOffset || document.documentElement.scrollTop;
        if (i <= 0) {
            this.el.classList.remove(ra);
            return
        }
        i > this.lastScroll && !this.el.classList.contains(wr) ? (this.el.classList.remove(ra),
        this.el.classList.add(wr)) : i < this.lastScroll && this.el.classList.contains(wr) && (this.el.classList.remove(wr),
        this.el.classList.add(ra)),
        i > this.viewportHeight ? this.el.classList.add(fc) : this.el.classList.remove(fc),
        this.lastScroll = i
    }
}
function Zy(o, i, n) {
    if (!o)
        throw new Error("You need specificy a valid element to apply a css variable");
    o.style.setProperty(i, String(n))
}
function oe(o, i) {
    for (const n in i)
        o.style.setProperty(n, String(i[n]))
}
function pc(o, i) {
    for (const n in i)
        n.startsWith("--") && Zy(o, n, i[n]);
    Object.assign(o.style, i)
}
function ld(o, i, n) {
    const r = new CustomEvent(i,{
        detail: n
    });
    o.dispatchEvent(r)
}
/*! js-cookie v3.0.1 | MIT */
function Er(o) {
    for (var i = 1; i < arguments.length; i++) {
        var n = arguments[i];
        for (var r in n)
            o[r] = n[r]
    }
    return o
}
var Qy = {
    read: function(o) {
        return o[0] === '"' && (o = o.slice(1, -1)),
        o.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    },
    write: function(o) {
        return encodeURIComponent(o).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
    }
};
function _a(o, i) {
    function n(l, d, f) {
        if (!(typeof document > "u")) {
            f = Er({}, i, f),
            typeof f.expires == "number" && (f.expires = new Date(Date.now() + f.expires * 864e5)),
            f.expires && (f.expires = f.expires.toUTCString()),
            l = encodeURIComponent(l).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var S = "";
            for (var C in f)
                f[C] && (S += "; " + C,
                f[C] !== !0 && (S += "=" + f[C].split(";")[0]));
            return document.cookie = l + "=" + o.write(d, l) + S
        }
    }
    function r(l) {
        if (!(typeof document > "u" || arguments.length && !l)) {
            for (var d = document.cookie ? document.cookie.split("; ") : [], f = {}, S = 0; S < d.length; S++) {
                var C = d[S].split("=")
                  , F = C.slice(1).join("=");
                try {
                    var U = decodeURIComponent(C[0]);
                    if (f[U] = o.read(F, U),
                    l === U)
                        break
                } catch {}
            }
            return l ? f[l] : f
        }
    }
    return Object.create({
        set: n,
        get: r,
        remove: function(l, d) {
            n(l, "", Er({}, d, {
                expires: -1
            }))
        },
        withAttributes: function(l) {
            return _a(this.converter, Er({}, this.attributes, l))
        },
        withConverter: function(l) {
            return _a(Er({}, this.converter, l), this.attributes)
        }
    }, {
        attributes: {
            value: Object.freeze(i)
        },
        converter: {
            value: Object.freeze(o)
        }
    })
}
var yn = _a(Qy, {
    path: "/"
});
const cd = (o=document)=>{
    const i = o.querySelectorAll(".stat-figure");
    i && i.forEach(n=>{
        const r = n.textContent;
        if (r) {
            const l = parseInt(r).toString();
            n.textContent = r.replace(l, "");
            const d = document.createElement("span");
            d.textContent = l,
            d.textContent !== "NaN" && n.prepend(d)
        }
    }
    )
}
  , ba = "gmp_utm"
  , Xy = {
    domain: window.location.hostname,
    expires: 30,
    path: "/"
}
  , Jy = ["utm_medium", "utm_source", "utm_campaign", "utm_content", "utm_term"]
  , jy = ()=>{
    const o = new URLSearchParams(window.location.search)
      , i = {};
    if (o.get("utm_source"))
        for (const [n,r] of o)
            Jy.includes(n) && (i[n] = r);
    else
        document.referrer && new URL(document.referrer).hostname !== window.location.hostname && (i.utm_referrer = document.referrer);
    if (Object.keys(i).length > 0) {
        const n = new URLSearchParams(i).toString();
        yn.set(ba, n, Xy)
    }
}
  , t_ = (o,i=!0)=>{
    setTimeout(()=>{
        if (yn.get(ba)) {
            const n = new URL(o.href);
            new URLSearchParams(`?${yn.get(ba)}`).forEach((l,d)=>{
                d === "utm_referrer" ? i && n.searchParams.set(d, l) : n.searchParams.set(d, l)
            }
            ),
            o.href = n.toString()
        }
    }
    , 500)
}
  , e_ = o=>{
    o.querySelectorAll("a[href]").forEach(n=>{
        const r = n.getAttribute("href");
        r && r.startsWith("http") && (n.setAttribute("target", "_blank"),
        n.setAttribute("rel", "noopener"))
    }
    )
}
  , i_ = ()=>{
    document.querySelectorAll("a[href]").forEach(i=>{
        const n = i;
        if (n.hasAttribute("data-append-utm")) {
            const d = n.href
              , S = o_(d, document.location.href) && d.includes("/contact-us");
            t_(n, !S)
        }
        const r = ["accounts.google.com", "console.cloud.google.com", "developers.google.com", "policies.google.com", "support.google.com"]
          , l = new URL(n.href);
        if (r.includes(l.hostname)) {
            const d = new URL(n.href)
              , f = document.documentElement.lang;
            d.searchParams.set("hl", f),
            n.setAttribute("href", d.toString())
        }
    }
    )
}
  , n_ = ()=>{
    const o = "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA=="
      , i = new Image;
    i.onload = ()=>{
        i.width > 0 && i.height > 0 ? document.body.classList.add("webp") : document.body.classList.add("no-webp")
    }
    ,
    i.onerror = function() {
        document.body.classList.add("no-webp")
    }
    ,
    i.src = "data:image/webp;base64," + o
}
  , r_ = ()=>{
    document.addEventListener("keypress", ()=>{
        document.body.classList.remove("swiping")
    }
    ),
    document.addEventListener("click", ()=>{
        document.body.classList.remove("swiping")
    }
    ),
    document.addEventListener("touchstart", ()=>{
        document.body.classList.add("swiping")
    }
    )
}
  , s_ = o=>{
    const i = o.getBoundingClientRect();
    return i.top >= 0 && i.left >= 0 && i.bottom <= (window.innerHeight || document.documentElement.clientHeight) && i.right <= (window.innerWidth || document.documentElement.clientWidth)
}
;
function a_(o) {
    window.requestIdleCallback ? window.requestIdleCallback(o) : function(i) {
        const n = Date.now();
        return setTimeout(()=>{
            i({
                didTimeout: !1,
                timeRemaining: function() {
                    return Math.max(0, 50 - (Date.now() - n))
                }
            })
        }
        , 1)
    }(o)
}
function o_(o, i) {
    const n = new URL(o)
      , r = new URL(i);
    return n.hostname === r.hostname
}
const l_ = " "
  , gc = "Enter"
  , on = "ArrowDown"
  , ln = "ArrowUp"
  , mc = "Escape";
let Li = ""
  , ki = "";
const $r = {
    CHANGE: "sf-selector-change"
};
class c_ {
    constructor(i) {
        this.domWatcher = new ct,
        this.el = i,
        this.listEl = this.el.querySelector("[list]"),
        this.listContainer = this.el.querySelector("[list-container]"),
        this.listItems = this.el.querySelectorAll("[list-item]"),
        this.selected = this.el.querySelector("[selected]"),
        this.listItemIds = [],
        this.id = this.el.id,
        this.filter = this.selected.getAttribute("data-value"),
        this.type = this.el.getAttribute("data-type"),
        this.init()
    }
    init() {
        const n = new URLSearchParams(window.location.search).get(this.id);
        this.setSelectedListItem(this.listContainer.querySelector(`[data-value='${n || this.filter}']`), !0),
        this.type === "trust-center" && this.hideEmptyListItem(),
        this.domWatcher.add({
            element: window,
            on: "click",
            callback: ()=>this.closeSelectItem()
        }),
        this.domWatcher.add({
            element: this.selected,
            on: ["click"],
            callback: r=>{
                this.toggleListVisibilityClick(r)
            }
        }),
        this.domWatcher.add({
            element: this.selected,
            on: ["keydown"],
            callback: r=>{
                this.toggleListVisibilityKey(r)
            }
        });
        for (const r of this.listItems)
            this.listItemIds = [...this.listItemIds, `${r.getAttribute("data-value")}`],
            this.domWatcher.add({
                element: r,
                on: ["click"],
                callback: l=>{
                    this.setSelectedListItem(l.target)
                }
            }),
            this.domWatcher.add({
                element: r,
                on: ["keydown"],
                callback: l=>{
                    switch (l.key) {
                    case gc:
                        this.setSelectedListItem(l.target),
                        this.closeList();
                        return;
                    case on:
                        this.focusNextListItem(on);
                        return;
                    case ln:
                        this.focusNextListItem(ln);
                        return;
                    case mc:
                        this.closeList();
                        return;
                    default:
                        return
                    }
                }
            })
    }
    hideEmptyListItem() {
        const i = document.querySelectorAll(".sf-resource-card");
        Array.from(this.listItems).forEach(n=>{
            let r = !1;
            const l = n.getAttribute("data-value");
            Array.from(i).forEach(d=>{
                d.getAttribute("data-keys")?.includes(l) && (r = !0)
            }
            ),
            r || (n.style.display = "none")
        }
        )
    }
    closeSelectItem() {
        this.el.classList.contains("sf-select--open") && this.closeList()
    }
    setScrollPosition() {
        if (window.matchMedia("(max-width: 600px)").matches) {
            const n = document.body
              , r = document.documentElement
              , l = window.pageYOffset || r.scrollTop || n.scrollTop
              , d = r.clientTop || n.clientTop || 0;
            window.scrollTo({
                top: this.el.getBoundingClientRect().top + l - d - 180,
                behavior: "smooth"
            })
        }
    }
    setCSSVariables() {
        oe(this.el, {
            "--select-max-width": "initial",
            "--select-max-height": "initial"
        });
        const i = this.el.getBoundingClientRect().width;
        let n = 0;
        Array.from(this.listItems).map(S=>{
            const C = S.children[0].getBoundingClientRect().width;
            C > n && (n = C + 48)
        }
        ),
        i > n && (n = i),
        window.innerWidth < 480 && (n = 300),
        oe(this.el, {
            "--select-max-width": `${n}px`
        });
        const r = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        let l = this.listEl.getBoundingClientRect().height;
        document.querySelector("header"),
        l > r - 192 && (l = r - 280);
        const f = l;
        oe(this.el, {
            "--select-max-height": `${f}px`
        })
    }
    setFilterValues(i, n) {
        let r;
        switch (this.type) {
        case "sf":
        case "sf-card":
            r = {
                usecase: i,
                industry: i
            }[n];
            break;
        default:
            r = {
                filterBy: i,
                industry: i
            }[n];
            break
        }
        n === "industry" ? ki = r || "" : Li = r || "",
        this.type !== "sf-card" && this.setCardVisibility(),
        this.updateParams()
    }
    updateParams() {
        const i = document.querySelector(".sf-sort__cta")
          , n = new URLSearchParams(window.location.search);
        switch (this.type) {
        case "sf":
        case "sf-card":
            Li && n.set("usecase", Li),
            ki && n.set("industry", ki);
            break;
        default:
            Li && n.set("filterBy", Li),
            ki && n.set("industry", ki);
            break
        }
        i ? i.href = decodeURIComponent(`${i.href.split("?")[0]}?${n}`) : [...n].length && window.history.replaceState({}, "", decodeURIComponent(`${window.location.pathname}?${n}${window.location.hash}`))
    }
    setCardVisibility() {
        let i = 0;
        const n = document.querySelectorAll(".sf-full-card")
          , r = document.querySelectorAll(".sf-expandable-card__grid__card")
          , l = document.querySelectorAll(".sf-resource-card")
          , d = document.querySelectorAll(".sf-demo-card")
          , f = document.querySelectorAll(".sf-product-card")
          , S = [...n, ...r, ...l, ...d, ...f];
        for (const C of S)
            C.classList.add("sf-cards--filtered"),
            C.classList.remove("sf-cards--show"),
            C.classList.remove("sf-cards--hide"),
            C.querySelectorAll("a, button").forEach(U=>{
                U.setAttribute("tabindex", "-1")
            }
            );
        for (const C of S) {
            let F = C.getAttribute("data-keys");
            if (F = F?.split(","),
            F?.length) {
                let U = F.filter(B=>B === Li || B === ki);
                U = U.length > 0,
                U && (C.classList.remove("sf-cards--filtered"),
                C.style.setProperty("transition-delay", `${i * 50}ms`, "important"),
                C.classList.add("sf-cards--show"),
                C.addEventListener("transitionend", ()=>{
                    C.classList.remove("sf-cards--show"),
                    C.style.transitionDelay = ""
                }
                ),
                C.querySelectorAll("a, button").forEach(L=>{
                    const R = L.closest(".sf-expandable-card__grid__card") || L.closest(".demo-cards__grid__card")
                      , z = L.closest("[expandable-card-expand]") || L.closest("[expand]");
                    (!R || z) && L.setAttribute("tabindex", "0")
                }
                ),
                i++)
            }
        }
        setTimeout(()=>{
            ld(document.documentElement, $r.CHANGE, {})
        }
        , 0)
    }
    clearActiveState() {
        for (const i of this.listItems)
            i.classList.contains("sf-select__list-item--active") && i.classList.remove("sf-select__list-item--active")
    }
    setSelectedListItem(i, n) {
        if (!i)
            return;
        const r = i.closest("[list-item]")
          , l = r.getAttribute("data-value") || ""
          , d = r.getAttribute("data-label") || ""
          , f = this.el.getAttribute("data-prefix") || ""
          , S = r.getAttribute("data-selected-label") || r.innerText;
        this.updateSelectedText(f ? `${f} ${S}` : S, l, d, n),
        this.setFilterValues(l, this.id),
        this.closeList(),
        this.clearActiveState(),
        r.classList.add("sf-select__list-item--active")
    }
    updateSelectedText(i, n, r, l) {
        const d = document.createTextNode(i);
        this.selected.innerHTML = null,
        this.selected.appendChild(d),
        this.selected.setAttribute("data-value", n),
        this.selected.setAttribute("data-label", r),
        !l && this.el.classList.add("sf-select--active")
    }
    closeList() {
        this.listEl.classList.remove("sf-select__list--open"),
        this.el.classList.remove("sf-select--open"),
        this.listContainer.setAttribute("aria-expanded", !1),
        this.listItems.forEach(i=>{
            i.classList.contains("sf-select__selected") || i.setAttribute("tabindex", "-1")
        }
        )
    }
    focusNextListItem(i) {
        const n = document.activeElement
          , r = `${n.getAttribute("data-value")}`;
        if (n.hasAttribute("selected"))
            this.el.querySelector(`[data-value='${this.listItemIds[0]}']`).focus();
        else {
            const l = this.listItemIds.indexOf(r);
            if (i === on) {
                if (l < this.listItemIds.length - 1) {
                    const f = this.listItemIds[l + 1];
                    document.querySelector(`[data-value='${f}'`).focus()
                }
            } else if (i === ln && l > 0) {
                const f = this.listItemIds[l - 1];
                document.querySelector(`[data-value='${f}'`).focus()
            }
        }
    }
    toggleListVisibilityClick(i) {
        i?.stopPropagation(),
        this.listEl.classList.toggle("sf-select__list--open"),
        this.listContainer.setAttribute("aria-expanded", this.listEl.classList.contains("sf-select__list--open")),
        this.el.classList.toggle("sf-select--open"),
        this.setCSSVariables(),
        this.setScrollPosition(),
        this.listItems.forEach(n=>{
            n.hasAttribute("aria-disabled") || n.setAttribute("tabindex", "0")
        }
        ),
        s_(this.listEl) ? this.el.classList.remove("sf-select--overflow") : this.el.classList.add("sf-select--overflow")
    }
    toggleListVisibilityKey(i) {
        const n = i.key === l_ || i.key === gc;
        i.key === mc && this.closeList(),
        n && this.toggleListVisibilityClick(),
        i.key === on && this.focusNextListItem(on),
        i.key === ln && this.focusNextListItem(ln)
    }
}
const vc = "--selected"
  , sa = "--filtered-tags"
  , aa = "--filtered-year"
  , cn = "--hidden"
  , yc = "--hidden"
  , _c = "--visible"
  , oa = 10;
class d_ {
    constructor(i) {
        this.domWatcher = new ct,
        this.el = i,
        this.filterByTagEl = this.el.querySelector("[filter-tags]"),
        this.filterByYearEl = this.el.querySelector("[filter-year]"),
        this.tagEls = Array.from(this.el.querySelectorAll("[tag]")),
        this.listingsEl = this.el.querySelector("[listings]"),
        this.listingEls = Array.from(this.listingsEl.querySelectorAll("[listing]")),
        this.moreEl = this.el.querySelector("[more]"),
        this.clearEl = this.el.querySelector("[clear]");
        const n = new URLSearchParams(window.location.search);
        this.tagFiltersParams = n.get("tags"),
        this.tagFilters = this.tagFiltersParams ? this.tagFiltersParams?.split(",") : [],
        this.yearFilter = n.get("year"),
        this.init()
    }
    init() {
        this.filterByTagEl && this.domWatcher.add({
            element: this.filterByTagEl,
            on: "click",
            callback: i=>{
                i.target && i.target.matches("input[type='checkbox']") && this.updateTagFilters(i.target.value, i.target.checked)
            }
        }),
        this.filterByYearEl && this.domWatcher.add({
            element: document.documentElement,
            on: $r.CHANGE,
            callback: i=>{
                const n = this.filterByYearEl.querySelector("[selected]");
                this.updateYearFilter(n?.getAttribute("data-value"))
            }
            ,
            eventOptions: {
                passive: !0
            }
        }),
        this.tagEls?.map(i=>{
            this.domWatcher.add({
                element: i,
                on: "click",
                callback: ()=>{
                    const n = i.getAttribute("for");
                    n && this.updateTagFilters(n, !1)
                }
            })
        }
        ),
        this.clearEl && this.domWatcher.add({
            element: this.clearEl,
            on: "click",
            callback: ()=>{
                this.clearTagFilters()
            }
        }),
        this.moreEl && this.domWatcher.add({
            element: this.moreEl,
            on: "click",
            callback: ()=>{
                this.showMoreListings()
            }
        }),
        this.applyFilters()
    }
    updateTagFilters(i, n) {
        n ? this.tagFilters.push(i) : this.tagFilters = this.tagFilters.filter(r=>r !== i),
        this.applyFilters()
    }
    clearTagFilters() {
        this.tagFilters = [],
        this.applyFilters()
    }
    updateYearFilter(i) {
        this.yearFilter = i,
        this.applyFilters()
    }
    filterListingsByTag() {
        this.listingEls.map(i=>{
            const n = i.getAttribute("data-tags")
              , r = n ? JSON.parse(n) : [];
            let l = !1;
            this.tagFilters.length === 0 ? l = !0 : r.forEach(d=>{
                this.tagFilters.includes(d) && (l = !0)
            }
            ),
            l ? i.classList.remove(sa) : i.classList.add(sa)
        }
        )
    }
    filterListingsByYear() {
        const i = isNaN(parseInt(this.yearFilter));
        this.listingEls.map(n=>{
            n.getAttribute("data-year") === this.yearFilter || i ? n.classList.remove(aa) : n.classList.add(aa)
        }
        )
    }
    applyFilters() {
        this.syncTagFilters(),
        this.updateSelectedTags(),
        this.filterListingsByTag(),
        this.filterListingsByYear(),
        this.hideListings(),
        this.updateParams()
    }
    syncTagFilters() {
        Array.from(this.filterByTagEl.querySelectorAll("input[type='checkbox']")).forEach(n=>{
            n.checked = this.tagFilters.includes(n.value)
        }
        )
    }
    hideListings() {
        this.listingEls.forEach(n=>{
            n.classList.remove(cn)
        }
        ),
        Array.from(this.listingsEl.querySelectorAll(`[listing]:not(.${sa}):not(.${aa})`)).forEach((n,r)=>{
            r > oa - 1 && n.classList.add(cn)
        }
        ),
        this.hideMoreButton()
    }
    showMoreListings() {
        Array.from(this.listingsEl.querySelectorAll(`[listing].${cn}`)).slice(0, oa).forEach((n,r)=>{
            window.setTimeout(()=>{
                n.classList.remove(cn)
            }
            , r * 100)
        }
        ),
        this.hideMoreButton()
    }
    hideMoreButton() {
        this.moreEl.classList.remove(yc),
        this.el.querySelectorAll(`[listing].${cn}`).length - oa <= 0 && this.moreEl.classList.add(yc)
    }
    updateSelectedTags() {
        this.tagEls?.map(i=>{
            const n = i.getAttribute("for");
            this.tagFilters.includes(n) ? i.classList.add(vc) : i.classList.remove(vc)
        }
        ),
        this.tagFilters.length ? this.clearEl.classList.add(_c) : this.clearEl.classList.remove(_c)
    }
    updateParams() {
        const i = new URLSearchParams(window.location.search);
        i.set("tags", this.tagFilters.join(",")),
        i.set("year", this.yearFilter),
        window.history.replaceState({}, "", decodeURIComponent(`${window.location.pathname}?${i}${window.location.hash}`))
    }
}
const la = "--copied";
class u_ {
    constructor(i) {
        this.el = i,
        this.domWatcher = new ct,
        this.bodyEl = this.el.querySelector("[body]"),
        this.codeEls = Array.from(this.el.querySelectorAll("[code]")),
        this.init()
    }
    init() {
        this.formatBoldText(),
        this.addLineBreaks("i, em, b"),
        this.codeEls.map(i=>{
            this.domWatcher.add({
                element: i.querySelector("button"),
                on: "click",
                callback: n=>{
                    this.copyCodeBlock(i)
                }
            })
        }
        ),
        this.domWatcher.add({
            element: document,
            on: "click",
            callback: i=>{
                i.target.closest("[code]") || this.hideAllCodeAlerts()
            }
        })
    }
    formatBoldText() {
        this.bodyEl && Array.from(this.bodyEl.children).forEach(i=>{
            ["P", "UL", "OL"].includes(i.tagName) && (i.innerHTML = i.innerHTML.replace(/\*\*(.*?)\*\*/gm, "<b>$1</b>"))
        }
        )
    }
    addLineBreaks(i) {
        this.el.querySelectorAll(i).forEach(r=>{
            const l = r.parentNode
              , d = l?.querySelectorAll(i).length === 1
              , f = [...l.childNodes].indexOf(r) === 0
              , S = d && f;
            let C = !1;
            l && S && l.childNodes.forEach((F,U)=>{
                if (F.nodeType === Node.TEXT_NODE && F.nodeValue && U === 1) {
                    const R = F.nodeValue?.trim() == "";
                    !(Array.from(F.nodeValue)[0]?.trim() == "") && !R && (C = !0)
                }
            }
            ),
            S && C && r.appendChild(document.createElement("br"))
        }
        )
    }
    async hideAllCodeAlerts(i) {
        this.codeEls.forEach(n=>{
            n.classList.remove(la)
        }
        ),
        this.codeCopiedEl = void 0
    }
    async hideCodeAlert(i) {
        i?.classList.remove(la)
    }
    async showAlert(i) {
        i?.classList.add(la)
    }
    async copyCodeBlock(i) {
        const n = i?.querySelector("code");
        if (i !== this.codeCopiedEl)
            try {
                await navigator.clipboard.writeText(n.innerHTML),
                this.hideCodeAlert(this.codeCopiedEl),
                setTimeout(()=>{
                    this.showAlert(i),
                    this.codeCopiedEl = i
                }
                , this.codeCopiedEl ? 100 : 0)
            } catch (r) {
                console.error("Failed to copy: ", r)
            }
    }
}
var dd = {
    exports: {}
};
(function(o, i) {
    (function() {
        function n() {
            var r = window
              , l = document;
            if ("scrollBehavior"in l.documentElement.style && r.__forceSmoothScrollPolyfill__ !== !0)
                return;
            var d = r.HTMLElement || r.Element
              , f = 468
              , S = {
                scroll: r.scroll || r.scrollTo,
                scrollBy: r.scrollBy,
                elementScroll: d.prototype.scroll || B,
                scrollIntoView: d.prototype.scrollIntoView
            }
              , C = r.performance && r.performance.now ? r.performance.now.bind(r.performance) : Date.now;
            function F(m) {
                var w = ["MSIE ", "Trident/", "Edge/"];
                return new RegExp(w.join("|")).test(m)
            }
            var U = F(r.navigator.userAgent) ? 1 : 0;
            function B(m, w) {
                this.scrollLeft = m,
                this.scrollTop = w
            }
            function L(m) {
                return .5 * (1 - Math.cos(Math.PI * m))
            }
            function R(m) {
                if (m === null || typeof m != "object" || m.behavior === void 0 || m.behavior === "auto" || m.behavior === "instant")
                    return !0;
                if (typeof m == "object" && m.behavior === "smooth")
                    return !1;
                throw new TypeError("behavior member of ScrollOptions " + m.behavior + " is not a valid value for enumeration ScrollBehavior.")
            }
            function z(m, w) {
                if (w === "Y")
                    return m.clientHeight + U < m.scrollHeight;
                if (w === "X")
                    return m.clientWidth + U < m.scrollWidth
            }
            function K(m, w) {
                var O = r.getComputedStyle(m, null)["overflow" + w];
                return O === "auto" || O === "scroll"
            }
            function q(m) {
                var w = z(m, "Y") && K(m, "Y")
                  , O = z(m, "X") && K(m, "X");
                return w || O
            }
            function T(m) {
                for (; m !== l.body && q(m) === !1; )
                    m = m.parentNode || m.host;
                return m
            }
            function g(m) {
                var w = C(), O, M, Q, rt = (w - m.startTime) / f;
                rt = rt > 1 ? 1 : rt,
                O = L(rt),
                M = m.startX + (m.x - m.startX) * O,
                Q = m.startY + (m.y - m.startY) * O,
                m.method.call(m.scrollable, M, Q),
                (M !== m.x || Q !== m.y) && r.requestAnimationFrame(g.bind(r, m))
            }
            function y(m, w, O) {
                var M, Q, rt, xt, me = C();
                m === l.body ? (M = r,
                Q = r.scrollX || r.pageXOffset,
                rt = r.scrollY || r.pageYOffset,
                xt = S.scroll) : (M = m,
                Q = m.scrollLeft,
                rt = m.scrollTop,
                xt = B),
                g({
                    scrollable: M,
                    method: xt,
                    startTime: me,
                    startX: Q,
                    startY: rt,
                    x: w,
                    y: O
                })
            }
            r.scroll = r.scrollTo = function() {
                if (arguments[0] !== void 0) {
                    if (R(arguments[0]) === !0) {
                        S.scroll.call(r, arguments[0].left !== void 0 ? arguments[0].left : typeof arguments[0] != "object" ? arguments[0] : r.scrollX || r.pageXOffset, arguments[0].top !== void 0 ? arguments[0].top : arguments[1] !== void 0 ? arguments[1] : r.scrollY || r.pageYOffset);
                        return
                    }
                    y.call(r, l.body, arguments[0].left !== void 0 ? ~~arguments[0].left : r.scrollX || r.pageXOffset, arguments[0].top !== void 0 ? ~~arguments[0].top : r.scrollY || r.pageYOffset)
                }
            }
            ,
            r.scrollBy = function() {
                if (arguments[0] !== void 0) {
                    if (R(arguments[0])) {
                        S.scrollBy.call(r, arguments[0].left !== void 0 ? arguments[0].left : typeof arguments[0] != "object" ? arguments[0] : 0, arguments[0].top !== void 0 ? arguments[0].top : arguments[1] !== void 0 ? arguments[1] : 0);
                        return
                    }
                    y.call(r, l.body, ~~arguments[0].left + (r.scrollX || r.pageXOffset), ~~arguments[0].top + (r.scrollY || r.pageYOffset))
                }
            }
            ,
            d.prototype.scroll = d.prototype.scrollTo = function() {
                if (arguments[0] !== void 0) {
                    if (R(arguments[0]) === !0) {
                        if (typeof arguments[0] == "number" && arguments[1] === void 0)
                            throw new SyntaxError("Value could not be converted");
                        S.elementScroll.call(this, arguments[0].left !== void 0 ? ~~arguments[0].left : typeof arguments[0] != "object" ? ~~arguments[0] : this.scrollLeft, arguments[0].top !== void 0 ? ~~arguments[0].top : arguments[1] !== void 0 ? ~~arguments[1] : this.scrollTop);
                        return
                    }
                    var m = arguments[0].left
                      , w = arguments[0].top;
                    y.call(this, this, typeof m > "u" ? this.scrollLeft : ~~m, typeof w > "u" ? this.scrollTop : ~~w)
                }
            }
            ,
            d.prototype.scrollBy = function() {
                if (arguments[0] !== void 0) {
                    if (R(arguments[0]) === !0) {
                        S.elementScroll.call(this, arguments[0].left !== void 0 ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== void 0 ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
                        return
                    }
                    this.scroll({
                        left: ~~arguments[0].left + this.scrollLeft,
                        top: ~~arguments[0].top + this.scrollTop,
                        behavior: arguments[0].behavior
                    })
                }
            }
            ,
            d.prototype.scrollIntoView = function() {
                if (R(arguments[0]) === !0) {
                    S.scrollIntoView.call(this, arguments[0] === void 0 ? !0 : arguments[0]);
                    return
                }
                var m = T(this)
                  , w = m.getBoundingClientRect()
                  , O = this.getBoundingClientRect();
                m !== l.body ? (y.call(this, m, m.scrollLeft + O.left - w.left, m.scrollTop + O.top - w.top),
                r.getComputedStyle(m).position !== "fixed" && r.scrollBy({
                    left: w.left,
                    top: w.top,
                    behavior: "smooth"
                })) : r.scrollBy({
                    left: O.left,
                    top: O.top,
                    behavior: "smooth"
                })
            }
        }
        o.exports = {
            polyfill: n
        }
    }
    )()
}
)(dd);
var h_ = dd.exports;
const f_ = "carousel__controls__dots__dot--active";
class ud {
    constructor(i, n=f_) {
        h_.polyfill(),
        this.domWatcher = new ct,
        this.el = i,
        this.slidesEl = this.el.querySelector("[slides]"),
        this.slideEls = Array.from(this.el.querySelectorAll("[slide]")),
        this.prevEl = this.el.querySelector("[prev]"),
        this.nextEl = this.el.querySelector("[next]"),
        this.dotEls = Array.from(this.el.querySelectorAll("[dot]")),
        this.activeDotClass = n,
        this.index = 0,
        this.slideBounds = this.slideEls[0].getBoundingClientRect(),
        this.init()
    }
    init() {
        this.domWatcher.add({
            element: window,
            on: "smartResize",
            callback: ()=>this.onWindowResize()
        }),
        this.domWatcher.add({
            element: this.slidesEl,
            on: "scroll",
            callback: ()=>{
                this.index = Math.round(this.slidesEl.scrollLeft / this.slideBounds.width)
            }
        }),
        this.prevEl && this.domWatcher.add({
            element: this.prevEl,
            on: ["click", "keyup"],
            callback: i=>{
                this.onClickOrEnterKey(i, ()=>{
                    this.prevSlide()
                }
                )
            }
        }),
        this.nextEl && this.domWatcher.add({
            element: this.nextEl,
            on: ["click", "keyup"],
            callback: i=>{
                this.onClickOrEnterKey(i, ()=>{
                    this.nextSlide()
                }
                )
            }
        }),
        this.dotEls && this.dotEls.length && this.dotEls.forEach((i,n)=>{
            this.domWatcher.add({
                element: i,
                on: ["click", "keyup"],
                callback: r=>{
                    this.onClickOrEnterKey(r, ()=>{
                        this.goToSlide(n)
                    }
                    )
                }
            })
        }
        ),
        this.goToSlide(0),
        setTimeout(()=>{
            this.onWindowResize()
        }
        , 500)
    }
    onClickOrEnterKey(i, n) {
        i.preventDefault();
        const r = i.type === "click"
          , l = i.type === "keyup" && i.key === "Enter";
        (r || l) && n()
    }
    onWindowResize() {
        this.slideBounds = this.slideEls[0].getBoundingClientRect(),
        this.goToSlide(0)
    }
    prevSlide() {
        this.index > 0 ? this.goToSlide(this.index - 1) : this.goToSlide(this.slideEls.length - 1)
    }
    nextSlide() {
        this.index < this.slideEls.length - 1 ? this.goToSlide(this.index + 1) : this.goToSlide(0)
    }
    goToSlide(i) {
        this.index = i,
        this.slidesEl.scrollTo({
            top: 0,
            left: this.slideBounds.width * i,
            behavior: "smooth"
        }),
        this.updateActiveDot()
    }
    updateActiveDot() {
        !this.dotEls || !this.dotEls.length || (this.dotEls.map(i=>{
            i.classList.remove(this.activeDotClass)
        }
        ),
        this.dotEls[this.index].classList.add(this.activeDotClass))
    }
}
function p_() {
    return navigator.userAgent.indexOf("Chrome") !== -1 && !fd()
}
function hd() {
    return !p_() && navigator.userAgent.indexOf("Safari") !== -1 && !fd()
}
function fd() {
    return navigator.userAgent.indexOf("Edge") !== -1
}
class bc {
    constructor(i, n) {
        this.domWatcher = new ct,
        this.el = i,
        this.body = document.body,
        this.cardEls = Array.from(this.el.querySelectorAll("[card]")),
        this.closeEls = Array.from(this.el.querySelectorAll("[close]")),
        this.closeModalEls = Array.from(this.el.querySelectorAll("[modal-close]")),
        this.detailsEl = this.el.querySelector("[details]"),
        this.overlayEl = this.el.querySelector("[overlay]"),
        this.plusEls = Array.from(this.el.querySelectorAll("[expand] button")),
        this.summaryEl = this.el.querySelector("[summary-container]"),
        this.animation = n || "expand",
        this.activeCardClass = "demo-cards__grid__card--expanded",
        this.slidesEl = this.el.querySelector("[slides]"),
        this.slideEls = this.slidesEl && Array.from(this.el.querySelectorAll("[slide]")),
        this.slideBounds = this.slideEls && this.slideEls[0].getBoundingClientRect(),
        this.prevEl = this.el.querySelector("[prev]"),
        this.nextEl = this.el.querySelector("[next]"),
        this.activeCarouselClass = "demo-cards__carousel__slides__slide--active",
        this.index = 0,
        this.init()
    }
    init() {
        this.domWatcher.add({
            element: window,
            on: "smartResize",
            callback: ()=>this.onWindowResize()
        }),
        this.summaryEl && this.domWatcher.add({
            element: this.summaryEl,
            on: ["click", "keyup"],
            callback: i=>{
                i.target.closest("a") || i.preventDefault()
            }
        }),
        this.detailsEl && this.domWatcher.add({
            element: this.detailsEl,
            on: ["keyup"],
            callback: i=>{
                i.key === "Escape" && this.closeModal()
            }
        });
        for (const [i,n] of this.plusEls.entries())
            this.domWatcher.add({
                element: n,
                on: ["click", "keyup"],
                callback: r=>{
                    this.onClickOrEnterKey(r, ()=>{
                        const l = window.matchMedia("(min-width: 1024px)").matches
                          , d = r.target.closest(".demo-cards__grid__card ");
                        this.animation === "modal" ? l ? this.openModal(d) : this.expand(d) : this.expand(d)
                    }
                    )
                }
            });
        for (const i of this.closeEls)
            this.domWatcher.add({
                element: i,
                on: ["click"],
                callback: n=>{
                    this.onClickOrEnterKey(n, ()=>{
                        this.removeActive()
                    }
                    )
                }
            });
        if (this.slidesEl) {
            for (const [i,n] of this.closeModalEls.entries())
                this.domWatcher.add({
                    element: n,
                    on: ["click", "keyup"],
                    callback: r=>{
                        this.onClickOrEnterKey(r, ()=>{
                            this.closeModal()
                        }
                        )
                    }
                });
            this.domWatcher.add({
                element: this.overlayEl,
                on: ["click"],
                callback: i=>{
                    this.onClickOrEnterKey(i, ()=>{
                        this.closeModal()
                    }
                    )
                }
            }),
            this.prevEl && this.domWatcher.add({
                element: this.prevEl,
                on: ["click", "keyup"],
                callback: i=>{
                    this.onClickOrEnterKey(i, ()=>{
                        this.prevSlide()
                    }
                    )
                }
            }),
            this.nextEl && this.domWatcher.add({
                element: this.nextEl,
                on: ["click", "keyup"],
                callback: i=>{
                    this.onClickOrEnterKey(i, ()=>{
                        this.nextSlide()
                    }
                    )
                }
            })
        }
        setTimeout(()=>{
            this.onWindowResize()
        }
        , 500)
    }
    setActiveSlide() {
        for (const [i,n] of this.slideEls.entries())
            n.setAttribute("aria-hidden", i !== this.index)
    }
    openModal(i) {
        const n = [...i.parentElement.children].indexOf(i);
        this.detailsEl.setAttribute("open", !0),
        this.goToSlide(n, !0),
        this.setActiveSlide(),
        this.body.classList.add("no-scroll"),
        this.detailsEl.removeAttribute("aria-hidden")
    }
    closeModal() {
        this.body.classList.remove("no-scroll"),
        this.detailsEl.removeAttribute("open"),
        this.detailsEl.setAttribute("aria-hidden", !0)
    }
    onWindowResize() {
        const i = window.matchMedia("(min-width: 1024px)").matches;
        this.slideBounds = this.slideEls && this.slideEls[0].getBoundingClientRect(),
        this.removeActive(),
        this.slidesEl && this.cardEls.map(()=>{
            this.closeModal()
        }
        ),
        !i && hd() ? this.summaryEl.setAttribute("tabindex", "-1") : this.summaryEl.removeAttribute("tabindex")
    }
    onClickOrEnterKey(i, n) {
        i.preventDefault();
        const r = i.type === "click"
          , l = i.type === "keyup" && i.key === "Enter";
        (r || l) && n()
    }
    removeActive() {
        this.cardEls.map(i=>{
            i.classList.remove(this.activeCardClass),
            i.querySelectorAll("a, button").forEach(r=>{
                r.closest(".demo-cards__grid__card") && (r.closest("[expand]") && !r.closest(".sf-cards--filtered") ? r.setAttribute("tabindex", "0") : r.setAttribute("tabindex", "-1"))
            }
            )
        }
        )
    }
    expand(i) {
        this.removeActive(),
        i.classList.add(this.activeCardClass);
        const n = i.querySelector("[close]");
        n && n.focus(),
        i.querySelectorAll("a, button").forEach(l=>{
            l.closest(".demo-cards__grid__card") && (l.closest("[expand]") ? l.setAttribute("tabindex", "-1") : l.setAttribute("tabindex", "0"))
        }
        )
    }
    prevSlide() {
        this.index > 0 ? this.goToSlide(this.index - 1) : this.goToSlide(this.slideEls.length - 1)
    }
    nextSlide() {
        this.index < this.slideEls.length - 1 ? this.goToSlide(this.index + 1) : this.goToSlide(0)
    }
    goToSlide(i, n) {
        this.slideBounds = this.slideEls[0].getBoundingClientRect(),
        this.index = i,
        n ? this.slidesEl.scrollLeft = this.slideBounds.width * i : this.slidesEl.scrollTo({
            top: 0,
            left: this.slideBounds.width * i,
            behavior: "smooth"
        })
    }
}
const pd = {
    FORCE_LABEL_UPDATE: "dropdown-label-update"
}
  , g_ = "Escape";
class m_ {
    constructor(i) {
        this.domWatcher = new ct,
        this.el = i,
        this.inputEls = Array.from(this.el.querySelectorAll("input")),
        this.labelEl = this.el.querySelector("[label]"),
        this.menuEl = this.el.querySelector("[menu]"),
        this.init()
    }
    init() {
        this.domWatcher.add({
            element: document,
            on: "click",
            callback: i=>{
                const n = i.target.closest(".dropdown")
                  , r = i.target.closest("[apply]");
                (n !== this.el || r) && this.closeDropdown()
            }
        }),
        this.domWatcher.add({
            element: this.el,
            on: "toggle",
            callback: i=>{
                this.openDropdown()
            }
        }),
        this.domWatcher.add({
            element: this.el,
            on: ["keydown"],
            callback: i=>{
                switch (i.key) {
                case g_:
                    this.closeDropdown();
                    return;
                default:
                    return
                }
            }
        }),
        this.inputEls.forEach(i=>{
            this.domWatcher.add({
                element: i,
                on: "change",
                callback: n=>{
                    this.updateLabel(i)
                }
            })
        }
        ),
        this.domWatcher.add({
            element: document.documentElement,
            on: pd.FORCE_LABEL_UPDATE,
            callback: i=>{
                this.updateLabel(this.menuEl.querySelector("input"))
            }
            ,
            eventOptions: {
                passive: !0
            }
        }),
        this.updateLabel(this.menuEl.querySelector("input")),
        this.setCSSVariables()
    }
    updateLabel(i) {
        if (!i)
            return;
        oe(this.el, {
            "--dropdown-label-width": "initial"
        });
        const n = i.type === "radio"
          , r = i.type === "checkbox"
          , l = this.labelEl.getAttribute("data-prefix")
          , d = this.labelEl.getAttribute("data-all-label")
          , f = this.labelEl.getAttribute("data-selected-label")
          , S = this.el.querySelector("[dropdown]")?.hasAttribute("useLabel")
          , C = !!l;
        let F = "";
        if (n)
            F = S ? i.closest("label")?.querySelector("span")?.textContent || "" : i.value;
        else if (r) {
            const L = document.querySelectorAll(`input[name=${i.name}]:checked`).length;
            d && !L && (F = `${d} ${F} `),
            f && L && (F = `${f} ${F}`)
        }
        C && (F = `${l} ${F}`),
        this.labelEl.innerHTML = `<span>${F.trim()}</span>` || "";
        let U = this.labelEl.querySelector("span")
          , B = 0;
        U && (B = U.getBoundingClientRect().width + 48 + 24),
        oe(this.el, {
            "--dropdown-label-width": `${B}px`
        })
    }
    setCSSVariables() {
        oe(this.el, {
            "--dropdown-menu-width": "999px",
            "--dropdown-max-height": "initial"
        });
        let i = 0
          , n = 0;
        this.labelEl,
        this.inputEls.map(S=>{
            const C = S.parentNode.querySelector("span")
              , F = 34
              , U = 48;
            C && (n = C?.getBoundingClientRect().width + F + U),
            n > i && (i = n)
        }
        ),
        oe(this.el, {
            "--dropdown-menu-width": `${i}px`
        });
        const r = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        let l = this.menuEl?.getBoundingClientRect().height;
        l > r - 65 && (l = r - 280);
        const f = l;
        oe(this.el, {
            "--dropdown-max-height": `${f}px`
        })
    }
    openDropdown() {
        this.el.getAttribute("open") || (this.setCSSVariables(),
        this.setScrollPosition())
    }
    closeDropdown() {
        this.el.removeAttribute("open")
    }
    setScrollPosition() {
        if (window.matchMedia("(max-width: 600px)").matches) {
            const n = document.body
              , r = document.documentElement
              , l = window.pageYOffset || r.scrollTop || n.scrollTop
              , d = r.clientTop || n.clientTop || 0;
            window.scrollTo({
                top: this.el.getBoundingClientRect().top + l - d - 180,
                behavior: "smooth"
            })
        }
    }
}
const wc = "--selected"
  , xr = "--filtered-products"
  , Sr = "--filtered-category"
  , Ii = "sf-cards--hide"
  , ca = "sf-cards--show"
  , Ec = "sf-cards--filtered"
  , xc = "--visible"
  , Sc = "--visible"
  , Cc = "--expanded"
  , da = 12;
class v_ {
    constructor(i) {
        this.domWatcher = new ct,
        this.el = i,
        this.filterByProductEl = this.el.querySelector("[filter-products]"),
        this.filterByCategoryEl = this.el.querySelector("[filter-category]"),
        this.cardsEl = this.el.querySelector("[cards]"),
        this.cardEls = Array.from(this.cardsEl.querySelectorAll("[card]")),
        this.visibleCardEls = [],
        this.tagsEl = this.el.querySelector("[tags]"),
        this.tagEls = Array.from(this.tagsEl.querySelectorAll("[tag]")),
        this.clearTagsEl = this.el.querySelector("[clear]"),
        this.emptyEl = this.el.querySelector("[empty]"),
        this.toggleEl = this.el.querySelector("[toggle]");
        const n = new URLSearchParams(window.location.search);
        this.productFiltersParams = n.get("products"),
        this.productFilters = this.productFiltersParams ? this.productFiltersParams?.split(",") : [],
        this.categoryFilter = n.get("category"),
        this.isExpanded = !1,
        this.init()
    }
    init() {
        this.filterByProductEl && this.domWatcher.add({
            element: this.filterByProductEl,
            on: "click",
            callback: i=>{
                i.target && i.target.matches("input[type='checkbox']") && this.updateproductFilters(i.target.value, i.target.checked)
            }
        }),
        this.filterByCategoryEl && this.domWatcher.add({
            element: document.documentElement,
            on: $r.CHANGE,
            callback: i=>{
                const n = this.filterByCategoryEl.querySelector("[selected]");
                this.updateCategoryFilter(n?.getAttribute("data-value"))
            }
            ,
            eventOptions: {
                passive: !0
            }
        }),
        this.tagEls?.map(i=>{
            this.domWatcher.add({
                element: i,
                on: "click",
                callback: ()=>{
                    const n = i.getAttribute("for");
                    n && this.updateproductFilters(n, !1)
                }
            })
        }
        ),
        this.clearTagsEl && this.domWatcher.add({
            element: this.clearTagsEl,
            on: "click",
            callback: ()=>{
                this.clearProductFilters()
            }
        }),
        this.toggleEl && this.domWatcher.add({
            element: this.toggleEl,
            on: "click",
            callback: i=>{
                this.toggleCards()
            }
        }),
        this.applyFilters()
    }
    updateproductFilters(i, n) {
        n ? this.productFilters.push(i) : this.productFilters = this.productFilters.filter(r=>r !== i),
        this.applyFilters()
    }
    clearProductFilters() {
        this.productFilters = [],
        this.applyFilters()
    }
    updateCategoryFilter(i) {
        this.categoryFilter = i,
        this.applyFilters()
    }
    filterCardsByProduct() {
        this.cardEls.map(i=>{
            const n = i.getAttribute("data-products")
              , r = n ? JSON.parse(n) : [];
            let l = !1;
            this.productFilters.length === 0 ? l = !0 : r.forEach(d=>{
                this.productFilters.includes(d) && (l = !0)
            }
            ),
            l ? i.classList.remove(xr) : i.classList.add(xr)
        }
        )
    }
    filterCardsByCategory() {
        this.cardEls.map(i=>{
            const n = i.getAttribute("data-categories");
            (n ? JSON.parse(n) : []).includes(this.categoryFilter) ? i.classList.remove(Sr) : i.classList.add(Sr)
        }
        )
    }
    updateVisibleCards() {
        this.visibleCardEls = Array.from(this.cardsEl.querySelectorAll(`[card]:not(.${xr}):not(.${Sr})`))
    }
    animateVisibleCards() {
        let i = 0;
        this.cardEls.forEach(n=>{
            n.classList.add(Ec),
            n.classList.remove(ca),
            n.classList.remove(Ii);
            const r = n.classList.contains(xr)
              , l = n.classList.contains(Sr);
            r || l || (this.animateCardVisiblity(n, Ec, i * 50),
            i++)
        }
        )
    }
    animateCardVisiblity(i, n, r=50) {
        i.classList.remove(n),
        i.style.setProperty("transition-delay", `${r}ms`, "important"),
        i.classList.add(ca),
        i.addEventListener("transitionend", ()=>{
            i.classList.remove(ca),
            i.style.transitionDelay = ""
        }
        )
    }
    applyFilters() {
        this.syncProductFilters(),
        this.updateSelectedTags(),
        this.filterCardsByProduct(),
        this.filterCardsByCategory(),
        this.updateVisibleCards(),
        this.animateVisibleCards(),
        this.hideToggleCards(),
        this.showToggle(),
        this.showEmptyMessage(),
        this.updateParams(),
        ld(document.documentElement, pd.FORCE_LABEL_UPDATE, {})
    }
    syncProductFilters() {
        Array.from(this.filterByProductEl.querySelectorAll("input[type='checkbox']")).forEach(n=>{
            n.checked = this.productFilters.includes(n.value)
        }
        )
    }
    hideToggleCards() {
        this.cardEls.forEach(i=>{
            i.classList.remove(Ii)
        }
        ),
        this.visibleCardEls.forEach((i,n)=>{
            n > da - 1 && i.classList.add(Ii)
        }
        )
    }
    showToggle() {
        this.toggleEl.style.display = this.visibleCardEls.length <= da ? "none" : ""
    }
    toggleCards() {
        this.isExpanded ? (this.showLessCards(),
        this.el.scrollIntoView({
            behavior: "auto",
            block: "end"
        })) : this.showMoreCards()
    }
    showMoreCards() {
        let i = 0;
        this.toggleEl.classList.add(Cc),
        this.visibleCardEls.map((n,r)=>{
            n.classList.contains(Ii) && (this.animateCardVisiblity(n, Ii, i * 50),
            i++)
        }
        ),
        this.isExpanded = !0
    }
    showLessCards() {
        this.toggleEl.classList.remove(Cc),
        this.visibleCardEls.map((i,n)=>{
            n > da - 1 && i.classList.add(Ii)
        }
        ),
        this.isExpanded = !1
    }
    showEmptyMessage() {
        this.visibleCardEls.length ? this.emptyEl.classList.remove(Sc) : this.emptyEl.classList.add(Sc)
    }
    updateSelectedTags() {
        this.tagEls?.map(i=>{
            const n = i.getAttribute("for");
            this.productFilters.includes(n) ? i.classList.add(wc) : i.classList.remove(wc)
        }
        ),
        this.productFilters.length ? this.tagsEl?.classList.add(xc) : this.tagsEl?.classList.remove(xc)
    }
    updateParams() {
        const i = new URLSearchParams(window.location.search);
        i.set("products", this.productFilters.join(",")),
        i.set("category", this.categoryFilter),
        window.history.replaceState({}, "", decodeURIComponent(`${window.location.pathname}?${i}`))
    }
}
class Ac {
    constructor(i, n) {
        this.domWatcher = new ct,
        this.el = i,
        this.cardEls = Array.from(this.el.querySelectorAll("[expandable-card]")),
        this.closeEls = Array.from(this.el.querySelectorAll("[expandable-card-close]")),
        this.plusEls = Array.from(this.el.querySelectorAll("[expandable-card-expand] a")),
        this.cardType = n,
        this.activeCardClass = `${this.cardType}__grid__card--expanded`,
        this.init()
    }
    init() {
        const i = new URLSearchParams(window.location.search);
        i.get("card") && this.scrollCardIntoView(i.get("card"));
        for (let n = 0; n < this.plusEls.length; n++)
            this.domWatcher.add({
                element: this.plusEls[n],
                on: ["click", "keyup"],
                callback: r=>{
                    this.onClickOrEnterKey(r, ()=>{
                        this.expand(r.target, n)
                    }
                    )
                }
            });
        for (let n = 0; n < this.closeEls.length; n++)
            this.domWatcher.add({
                element: this.closeEls[n],
                on: ["click"],
                callback: r=>{
                    this.onClickOrEnterKey(r, ()=>{
                        this.removeActive()
                    }
                    )
                }
            });
        this.domWatcher.add({
            element: window,
            on: "smartResize",
            callback: ()=>this.onWindowResize()
        }),
        this.onWindowResize()
    }
    onWindowResize() {
        this.removeActive()
    }
    scrollCardIntoView(i) {
        const n = document.getElementById(i)
          , r = this.cardEls.indexOf(n);
        n?.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        }),
        setTimeout(()=>{
            this.expand(n, r)
        }
        , 1e3)
    }
    onClickOrEnterKey(i, n) {
        i.preventDefault();
        const r = i.type === "click"
          , l = i.type === "keyup" && i.key === "Enter";
        (r || l) && n()
    }
    removeActive() {
        this.cardEls.map(i=>{
            i.classList.remove(this.activeCardClass),
            i.querySelectorAll("a, button").forEach(r=>{
                r.closest("[expandable-card-expand]") && !r.closest(".sf-cards--filtered") ? r.setAttribute("tabindex", "0") : r.setAttribute("tabindex", "-1")
            }
            )
        }
        )
    }
    expand(i, n) {
        this.removeActive();
        const r = this.cardEls[n];
        r.classList.add(this.activeCardClass);
        const l = r.querySelector("[expandable-card-close]");
        l && l.focus(),
        r.querySelectorAll("a, button").forEach(f=>{
            f.closest("[expandable-card-expand]") ? f.setAttribute("tabindex", "-1") : f.setAttribute("tabindex", "0")
        }
        )
    }
}
const y_ = "open";
class __ {
    constructor(i) {
        this.domWatcher = new ct,
        this.el = i,
        this.init()
    }
    init() {
        this.el.querySelectorAll("[accordion]").forEach(n=>{
            const r = n.querySelector("[accordion-toggle]");
            r && this.domWatcher.add({
                element: r,
                on: "click",
                callback: l=>this.toggleAccordion(l)
            })
        }
        )
    }
    toggleAccordion(i) {
        if (i.target) {
            const r = i.target.closest("[accordion]");
            r && r.classList.toggle(y_)
        }
    }
}
var gd = {
    exports: {}
};
(function(o) {
    (function(i) {
        o.exports ? o.exports = i() : window.intlTelInput = i()
    }
    )(function(i) {
        return function() {
            for (var n = [["Afghanistan (\u202B\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646\u202C\u200E)", "af", "93"], ["Albania (Shqip\xEBri)", "al", "355"], ["Algeria (\u202B\u0627\u0644\u062C\u0632\u0627\u0626\u0631\u202C\u200E)", "dz", "213"], ["American Samoa", "as", "1", 5, ["684"]], ["Andorra", "ad", "376"], ["Angola", "ao", "244"], ["Anguilla", "ai", "1", 6, ["264"]], ["Antigua and Barbuda", "ag", "1", 7, ["268"]], ["Argentina", "ar", "54"], ["Armenia (\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576)", "am", "374"], ["Aruba", "aw", "297"], ["Ascension Island", "ac", "247"], ["Australia", "au", "61", 0], ["Austria (\xD6sterreich)", "at", "43"], ["Azerbaijan (Az\u0259rbaycan)", "az", "994"], ["Bahamas", "bs", "1", 8, ["242"]], ["Bahrain (\u202B\u0627\u0644\u0628\u062D\u0631\u064A\u0646\u202C\u200E)", "bh", "973"], ["Bangladesh (\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6)", "bd", "880"], ["Barbados", "bb", "1", 9, ["246"]], ["Belarus (\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C)", "by", "375"], ["Belgium (Belgi\xEB)", "be", "32"], ["Belize", "bz", "501"], ["Benin (B\xE9nin)", "bj", "229"], ["Bermuda", "bm", "1", 10, ["441"]], ["Bhutan (\u0F60\u0F56\u0FB2\u0F74\u0F42)", "bt", "975"], ["Bolivia", "bo", "591"], ["Bosnia and Herzegovina (\u0411\u043E\u0441\u043D\u0430 \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043E\u0432\u0438\u043D\u0430)", "ba", "387"], ["Botswana", "bw", "267"], ["Brazil (Brasil)", "br", "55"], ["British Indian Ocean Territory", "io", "246"], ["British Virgin Islands", "vg", "1", 11, ["284"]], ["Brunei", "bn", "673"], ["Bulgaria (\u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F)", "bg", "359"], ["Burkina Faso", "bf", "226"], ["Burundi (Uburundi)", "bi", "257"], ["Cambodia (\u1780\u1798\u17D2\u1796\u17BB\u1787\u17B6)", "kh", "855"], ["Cameroon (Cameroun)", "cm", "237"], ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde (Kabu Verdi)", "cv", "238"], ["Caribbean Netherlands", "bq", "599", 1, ["3", "4", "7"]], ["Cayman Islands", "ky", "1", 12, ["345"]], ["Central African Republic (R\xE9publique centrafricaine)", "cf", "236"], ["Chad (Tchad)", "td", "235"], ["Chile", "cl", "56"], ["China (\u4E2D\u56FD)", "cn", "86"], ["Christmas Island", "cx", "61", 2, ["89164"]], ["Cocos (Keeling) Islands", "cc", "61", 1, ["89162"]], ["Colombia", "co", "57"], ["Comoros (\u202B\u062C\u0632\u0631 \u0627\u0644\u0642\u0645\u0631\u202C\u200E)", "km", "269"], ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"], ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"], ["Cook Islands", "ck", "682"], ["Costa Rica", "cr", "506"], ["C\xF4te d\u2019Ivoire", "ci", "225"], ["Croatia (Hrvatska)", "hr", "385"], ["Cuba", "cu", "53"], ["Cura\xE7ao", "cw", "599", 0], ["Cyprus (\u039A\u03CD\u03C0\u03C1\u03BF\u03C2)", "cy", "357"], ["Czech Republic (\u010Cesk\xE1 republika)", "cz", "420"], ["Denmark (Danmark)", "dk", "45"], ["Djibouti", "dj", "253"], ["Dominica", "dm", "1", 13, ["767"]], ["Dominican Republic (Rep\xFAblica Dominicana)", "do", "1", 2, ["809", "829", "849"]], ["Ecuador", "ec", "593"], ["Egypt (\u202B\u0645\u0635\u0631\u202C\u200E)", "eg", "20"], ["El Salvador", "sv", "503"], ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"], ["Eritrea", "er", "291"], ["Estonia (Eesti)", "ee", "372"], ["Eswatini", "sz", "268"], ["Ethiopia", "et", "251"], ["Falkland Islands (Islas Malvinas)", "fk", "500"], ["Faroe Islands (F\xF8royar)", "fo", "298"], ["Fiji", "fj", "679"], ["Finland (Suomi)", "fi", "358", 0], ["France", "fr", "33"], ["French Guiana (Guyane fran\xE7aise)", "gf", "594"], ["French Polynesia (Polyn\xE9sie fran\xE7aise)", "pf", "689"], ["Gabon", "ga", "241"], ["Gambia", "gm", "220"], ["Georgia (\u10E1\u10D0\u10E5\u10D0\u10E0\u10D7\u10D5\u10D4\u10DA\u10DD)", "ge", "995"], ["Germany (Deutschland)", "de", "49"], ["Ghana (Gaana)", "gh", "233"], ["Gibraltar", "gi", "350"], ["Greece (\u0395\u03BB\u03BB\u03AC\u03B4\u03B1)", "gr", "30"], ["Greenland (Kalaallit Nunaat)", "gl", "299"], ["Grenada", "gd", "1", 14, ["473"]], ["Guadeloupe", "gp", "590", 0], ["Guam", "gu", "1", 15, ["671"]], ["Guatemala", "gt", "502"], ["Guernsey", "gg", "44", 1, ["1481", "7781", "7839", "7911"]], ["Guinea (Guin\xE9e)", "gn", "224"], ["Guinea-Bissau (Guin\xE9 Bissau)", "gw", "245"], ["Guyana", "gy", "592"], ["Haiti", "ht", "509"], ["Honduras", "hn", "504"], ["Hong Kong (\u9999\u6E2F)", "hk", "852"], ["Hungary (Magyarorsz\xE1g)", "hu", "36"], ["Iceland (\xCDsland)", "is", "354"], ["India (\u092D\u093E\u0930\u0924)", "in", "91"], ["Indonesia", "id", "62"], ["Iran (\u202B\u0627\u06CC\u0631\u0627\u0646\u202C\u200E)", "ir", "98"], ["Iraq (\u202B\u0627\u0644\u0639\u0631\u0627\u0642\u202C\u200E)", "iq", "964"], ["Ireland", "ie", "353"], ["Isle of Man", "im", "44", 2, ["1624", "74576", "7524", "7924", "7624"]], ["Israel (\u202B\u05D9\u05E9\u05E8\u05D0\u05DC\u202C\u200E)", "il", "972"], ["Italy (Italia)", "it", "39", 0], ["Jamaica", "jm", "1", 4, ["876", "658"]], ["Japan (\u65E5\u672C)", "jp", "81"], ["Jersey", "je", "44", 3, ["1534", "7509", "7700", "7797", "7829", "7937"]], ["Jordan (\u202B\u0627\u0644\u0623\u0631\u062F\u0646\u202C\u200E)", "jo", "962"], ["Kazakhstan (\u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D)", "kz", "7", 1, ["33", "7"]], ["Kenya", "ke", "254"], ["Kiribati", "ki", "686"], ["Kosovo", "xk", "383"], ["Kuwait (\u202B\u0627\u0644\u0643\u0648\u064A\u062A\u202C\u200E)", "kw", "965"], ["Kyrgyzstan (\u041A\u044B\u0440\u0433\u044B\u0437\u0441\u0442\u0430\u043D)", "kg", "996"], ["Laos (\u0EA5\u0EB2\u0EA7)", "la", "856"], ["Latvia (Latvija)", "lv", "371"], ["Lebanon (\u202B\u0644\u0628\u0646\u0627\u0646\u202C\u200E)", "lb", "961"], ["Lesotho", "ls", "266"], ["Liberia", "lr", "231"], ["Libya (\u202B\u0644\u064A\u0628\u064A\u0627\u202C\u200E)", "ly", "218"], ["Liechtenstein", "li", "423"], ["Lithuania (Lietuva)", "lt", "370"], ["Luxembourg", "lu", "352"], ["Macau (\u6FB3\u9580)", "mo", "853"], ["Macedonia (FYROM) (\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0438\u0458\u0430)", "mk", "389"], ["Madagascar (Madagasikara)", "mg", "261"], ["Malawi", "mw", "265"], ["Malaysia", "my", "60"], ["Maldives", "mv", "960"], ["Mali", "ml", "223"], ["Malta", "mt", "356"], ["Marshall Islands", "mh", "692"], ["Martinique", "mq", "596"], ["Mauritania (\u202B\u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0627\u202C\u200E)", "mr", "222"], ["Mauritius (Moris)", "mu", "230"], ["Mayotte", "yt", "262", 1, ["269", "639"]], ["Mexico (M\xE9xico)", "mx", "52"], ["Micronesia", "fm", "691"], ["Moldova (Republica Moldova)", "md", "373"], ["Monaco", "mc", "377"], ["Mongolia (\u041C\u043E\u043D\u0433\u043E\u043B)", "mn", "976"], ["Montenegro (Crna Gora)", "me", "382"], ["Montserrat", "ms", "1", 16, ["664"]], ["Morocco (\u202B\u0627\u0644\u0645\u063A\u0631\u0628\u202C\u200E)", "ma", "212", 0], ["Mozambique (Mo\xE7ambique)", "mz", "258"], ["Myanmar (Burma) (\u1019\u103C\u1014\u103A\u1019\u102C)", "mm", "95"], ["Namibia (Namibi\xEB)", "na", "264"], ["Nauru", "nr", "674"], ["Nepal (\u0928\u0947\u092A\u093E\u0932)", "np", "977"], ["Netherlands (Nederland)", "nl", "31"], ["New Caledonia (Nouvelle-Cal\xE9donie)", "nc", "687"], ["New Zealand", "nz", "64"], ["Nicaragua", "ni", "505"], ["Niger (Nijar)", "ne", "227"], ["Nigeria", "ng", "234"], ["Niue", "nu", "683"], ["Norfolk Island", "nf", "672"], ["North Korea (\uC870\uC120 \uBBFC\uC8FC\uC8FC\uC758 \uC778\uBBFC \uACF5\uD654\uAD6D)", "kp", "850"], ["Northern Mariana Islands", "mp", "1", 17, ["670"]], ["Norway (Norge)", "no", "47", 0], ["Oman (\u202B\u0639\u064F\u0645\u0627\u0646\u202C\u200E)", "om", "968"], ["Pakistan (\u202B\u067E\u0627\u06A9\u0633\u062A\u0627\u0646\u202C\u200E)", "pk", "92"], ["Palau", "pw", "680"], ["Palestine (\u202B\u0641\u0644\u0633\u0637\u064A\u0646\u202C\u200E)", "ps", "970"], ["Panama (Panam\xE1)", "pa", "507"], ["Papua New Guinea", "pg", "675"], ["Paraguay", "py", "595"], ["Peru (Per\xFA)", "pe", "51"], ["Philippines", "ph", "63"], ["Poland (Polska)", "pl", "48"], ["Portugal", "pt", "351"], ["Puerto Rico", "pr", "1", 3, ["787", "939"]], ["Qatar (\u202B\u0642\u0637\u0631\u202C\u200E)", "qa", "974"], ["R\xE9union (La R\xE9union)", "re", "262", 0], ["Romania (Rom\xE2nia)", "ro", "40"], ["Russia (\u0420\u043E\u0441\u0441\u0438\u044F)", "ru", "7", 0], ["Rwanda", "rw", "250"], ["Saint Barth\xE9lemy", "bl", "590", 1], ["Saint Helena", "sh", "290"], ["Saint Kitts and Nevis", "kn", "1", 18, ["869"]], ["Saint Lucia", "lc", "1", 19, ["758"]], ["Saint Martin (Saint-Martin (partie fran\xE7aise))", "mf", "590", 2], ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"], ["Saint Vincent and the Grenadines", "vc", "1", 20, ["784"]], ["Samoa", "ws", "685"], ["San Marino", "sm", "378"], ["S\xE3o Tom\xE9 and Pr\xEDncipe (S\xE3o Tom\xE9 e Pr\xEDncipe)", "st", "239"], ["Saudi Arabia (\u202B\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629\u202C\u200E)", "sa", "966"], ["Senegal (S\xE9n\xE9gal)", "sn", "221"], ["Serbia (\u0421\u0440\u0431\u0438\u0458\u0430)", "rs", "381"], ["Seychelles", "sc", "248"], ["Sierra Leone", "sl", "232"], ["Singapore", "sg", "65"], ["Sint Maarten", "sx", "1", 21, ["721"]], ["Slovakia (Slovensko)", "sk", "421"], ["Slovenia (Slovenija)", "si", "386"], ["Solomon Islands", "sb", "677"], ["Somalia (Soomaaliya)", "so", "252"], ["South Africa", "za", "27"], ["South Korea (\uB300\uD55C\uBBFC\uAD6D)", "kr", "82"], ["South Sudan (\u202B\u062C\u0646\u0648\u0628 \u0627\u0644\u0633\u0648\u062F\u0627\u0646\u202C\u200E)", "ss", "211"], ["Spain (Espa\xF1a)", "es", "34"], ["Sri Lanka (\u0DC1\u0DCA\u200D\u0DBB\u0DD3 \u0DBD\u0D82\u0D9A\u0DCF\u0DC0)", "lk", "94"], ["Sudan (\u202B\u0627\u0644\u0633\u0648\u062F\u0627\u0646\u202C\u200E)", "sd", "249"], ["Suriname", "sr", "597"], ["Svalbard and Jan Mayen", "sj", "47", 1, ["79"]], ["Sweden (Sverige)", "se", "46"], ["Switzerland (Schweiz)", "ch", "41"], ["Syria (\u202B\u0633\u0648\u0631\u064A\u0627\u202C\u200E)", "sy", "963"], ["Taiwan (\u53F0\u7063)", "tw", "886"], ["Tajikistan", "tj", "992"], ["Tanzania", "tz", "255"], ["Thailand (\u0E44\u0E17\u0E22)", "th", "66"], ["Timor-Leste", "tl", "670"], ["Togo", "tg", "228"], ["Tokelau", "tk", "690"], ["Tonga", "to", "676"], ["Trinidad and Tobago", "tt", "1", 22, ["868"]], ["Tunisia (\u202B\u062A\u0648\u0646\u0633\u202C\u200E)", "tn", "216"], ["Turkey (T\xFCrkiye)", "tr", "90"], ["Turkmenistan", "tm", "993"], ["Turks and Caicos Islands", "tc", "1", 23, ["649"]], ["Tuvalu", "tv", "688"], ["U.S. Virgin Islands", "vi", "1", 24, ["340"]], ["Uganda", "ug", "256"], ["Ukraine (\u0423\u043A\u0440\u0430\u0457\u043D\u0430)", "ua", "380"], ["United Arab Emirates (\u202B\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0645\u062A\u062D\u062F\u0629\u202C\u200E)", "ae", "971"], ["United Kingdom", "gb", "44", 0], ["United States", "us", "1", 0], ["Uruguay", "uy", "598"], ["Uzbekistan (O\u02BBzbekiston)", "uz", "998"], ["Vanuatu", "vu", "678"], ["Vatican City (Citt\xE0 del Vaticano)", "va", "39", 1, ["06698"]], ["Venezuela", "ve", "58"], ["Vietnam (Vi\u1EC7t Nam)", "vn", "84"], ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"], ["Western Sahara (\u202B\u0627\u0644\u0635\u062D\u0631\u0627\u0621 \u0627\u0644\u063A\u0631\u0628\u064A\u0629\u202C\u200E)", "eh", "212", 1, ["5288", "5289"]], ["Yemen (\u202B\u0627\u0644\u064A\u0645\u0646\u202C\u200E)", "ye", "967"], ["Zambia", "zm", "260"], ["Zimbabwe", "zw", "263"], ["\xC5land Islands", "ax", "358", 1, ["18"]]], r = 0; r < n.length; r++) {
                var l = n[r];
                n[r] = {
                    name: l[0],
                    iso2: l[1],
                    dialCode: l[2],
                    priority: l[3] || 0,
                    areaCodes: l[4] || null
                }
            }
            function d(q, T) {
                if (!(q instanceof T))
                    throw new TypeError("Cannot call a class as a function")
            }
            function f(q, T) {
                for (var g = 0; g < T.length; g++) {
                    var y = T[g];
                    y.enumerable = y.enumerable || !1,
                    y.configurable = !0,
                    "value"in y && (y.writable = !0),
                    Object.defineProperty(q, y.key, y)
                }
            }
            function S(q, T, g) {
                return T && f(q.prototype, T),
                g && f(q, g),
                q
            }
            var C = {
                getInstance: function(T) {
                    var g = T.getAttribute("data-intl-tel-input-id");
                    return window.intlTelInputGlobals.instances[g]
                },
                instances: {},
                documentReady: function() {
                    return document.readyState === "complete"
                }
            };
            typeof window == "object" && (window.intlTelInputGlobals = C);
            var F = 0
              , U = {
                allowDropdown: !0,
                autoHideDialCode: !0,
                autoPlaceholder: "polite",
                customContainer: "",
                customPlaceholder: null,
                dropdownContainer: null,
                excludeCountries: [],
                formatOnDisplay: !0,
                geoIpLookup: null,
                hiddenInput: "",
                initialCountry: "",
                localizedCountries: null,
                nationalMode: !0,
                onlyCountries: [],
                placeholderNumberType: "MOBILE",
                preferredCountries: ["us", "gb"],
                separateDialCode: !1,
                utilsScript: ""
            }
              , B = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"]
              , L = function(T, g) {
                for (var y = Object.keys(T), m = 0; m < y.length; m++)
                    g(y[m], T[y[m]])
            }
              , R = function(T) {
                L(window.intlTelInputGlobals.instances, function(g) {
                    window.intlTelInputGlobals.instances[g][T]()
                })
            }
              , z = function() {
                function q(T, g) {
                    var y = this;
                    d(this, q),
                    this.id = F++,
                    this.telInput = T,
                    this.activeItem = null,
                    this.highlightedItem = null;
                    var m = g || {};
                    this.options = {},
                    L(U, function(w, O) {
                        y.options[w] = m.hasOwnProperty(w) ? m[w] : O
                    }),
                    this.hadInitialPlaceholder = !!T.getAttribute("placeholder")
                }
                return S(q, [{
                    key: "_init",
                    value: function() {
                        var g = this;
                        if (this.options.nationalMode && (this.options.autoHideDialCode = !1),
                        this.options.separateDialCode && (this.options.autoHideDialCode = this.options.nationalMode = !1),
                        this.isMobile = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                        this.isMobile && (document.body.classList.add("iti-mobile"),
                        this.options.dropdownContainer || (this.options.dropdownContainer = document.body)),
                        typeof Promise < "u") {
                            var y = new Promise(function(w, O) {
                                g.resolveAutoCountryPromise = w,
                                g.rejectAutoCountryPromise = O
                            }
                            )
                              , m = new Promise(function(w, O) {
                                g.resolveUtilsScriptPromise = w,
                                g.rejectUtilsScriptPromise = O
                            }
                            );
                            this.promise = Promise.all([y, m])
                        } else
                            this.resolveAutoCountryPromise = this.rejectAutoCountryPromise = function() {}
                            ,
                            this.resolveUtilsScriptPromise = this.rejectUtilsScriptPromise = function() {}
                            ;
                        this.selectedCountryData = {},
                        this._processCountryData(),
                        this._generateMarkup(),
                        this._setInitialState(),
                        this._initListeners(),
                        this._initRequests()
                    }
                }, {
                    key: "_processCountryData",
                    value: function() {
                        this._processAllCountries(),
                        this._processCountryCodes(),
                        this._processPreferredCountries(),
                        this.options.localizedCountries && this._translateCountriesByLocale(),
                        (this.options.onlyCountries.length || this.options.localizedCountries) && this.countries.sort(this._countryNameSort)
                    }
                }, {
                    key: "_addCountryCode",
                    value: function(g, y, m) {
                        y.length > this.countryCodeMaxLen && (this.countryCodeMaxLen = y.length),
                        this.countryCodes.hasOwnProperty(y) || (this.countryCodes[y] = []);
                        for (var w = 0; w < this.countryCodes[y].length; w++)
                            if (this.countryCodes[y][w] === g)
                                return;
                        var O = m !== i ? m : this.countryCodes[y].length;
                        this.countryCodes[y][O] = g
                    }
                }, {
                    key: "_processAllCountries",
                    value: function() {
                        if (this.options.onlyCountries.length) {
                            var g = this.options.onlyCountries.map(function(m) {
                                return m.toLowerCase()
                            });
                            this.countries = n.filter(function(m) {
                                return g.indexOf(m.iso2) > -1
                            })
                        } else if (this.options.excludeCountries.length) {
                            var y = this.options.excludeCountries.map(function(m) {
                                return m.toLowerCase()
                            });
                            this.countries = n.filter(function(m) {
                                return y.indexOf(m.iso2) === -1
                            })
                        } else
                            this.countries = n
                    }
                }, {
                    key: "_translateCountriesByLocale",
                    value: function() {
                        for (var g = 0; g < this.countries.length; g++) {
                            var y = this.countries[g].iso2.toLowerCase();
                            this.options.localizedCountries.hasOwnProperty(y) && (this.countries[g].name = this.options.localizedCountries[y])
                        }
                    }
                }, {
                    key: "_countryNameSort",
                    value: function(g, y) {
                        return g.name.localeCompare(y.name)
                    }
                }, {
                    key: "_processCountryCodes",
                    value: function() {
                        this.countryCodeMaxLen = 0,
                        this.dialCodes = {},
                        this.countryCodes = {};
                        for (var g = 0; g < this.countries.length; g++) {
                            var y = this.countries[g];
                            this.dialCodes[y.dialCode] || (this.dialCodes[y.dialCode] = !0),
                            this._addCountryCode(y.iso2, y.dialCode, y.priority)
                        }
                        for (var m = 0; m < this.countries.length; m++) {
                            var w = this.countries[m];
                            if (w.areaCodes)
                                for (var O = this.countryCodes[w.dialCode][0], M = 0; M < w.areaCodes.length; M++) {
                                    for (var Q = w.areaCodes[M], rt = 1; rt < Q.length; rt++) {
                                        var xt = w.dialCode + Q.substr(0, rt);
                                        this._addCountryCode(O, xt),
                                        this._addCountryCode(w.iso2, xt)
                                    }
                                    this._addCountryCode(w.iso2, w.dialCode + Q)
                                }
                        }
                    }
                }, {
                    key: "_processPreferredCountries",
                    value: function() {
                        this.preferredCountries = [];
                        for (var g = 0; g < this.options.preferredCountries.length; g++) {
                            var y = this.options.preferredCountries[g].toLowerCase()
                              , m = this._getCountryData(y, !1, !0);
                            m && this.preferredCountries.push(m)
                        }
                    }
                }, {
                    key: "_createEl",
                    value: function(g, y, m) {
                        var w = document.createElement(g);
                        return y && L(y, function(O, M) {
                            return w.setAttribute(O, M)
                        }),
                        m && m.appendChild(w),
                        w
                    }
                }, {
                    key: "_generateMarkup",
                    value: function() {
                        !this.telInput.hasAttribute("autocomplete") && !(this.telInput.form && this.telInput.form.hasAttribute("autocomplete")) && this.telInput.setAttribute("autocomplete", "off");
                        var g = "iti";
                        this.options.allowDropdown && (g += " iti--allow-dropdown"),
                        this.options.separateDialCode && (g += " iti--separate-dial-code"),
                        this.options.customContainer && (g += " ",
                        g += this.options.customContainer);
                        var y = this._createEl("div", {
                            class: g
                        });
                        if (this.telInput.parentNode.insertBefore(y, this.telInput),
                        this.flagsContainer = this._createEl("div", {
                            class: "iti__flag-container"
                        }, y),
                        y.appendChild(this.telInput),
                        this.selectedFlag = this._createEl("div", {
                            class: "iti__selected-flag",
                            role: "combobox",
                            "aria-controls": "iti-".concat(this.id, "__country-listbox"),
                            "aria-owns": "iti-".concat(this.id, "__country-listbox"),
                            "aria-expanded": "false"
                        }, this.flagsContainer),
                        this.selectedFlagInner = this._createEl("div", {
                            class: "iti__flag"
                        }, this.selectedFlag),
                        this.options.separateDialCode && (this.selectedDialCode = this._createEl("div", {
                            class: "iti__selected-dial-code"
                        }, this.selectedFlag)),
                        this.options.allowDropdown && (this.selectedFlag.setAttribute("tabindex", "0"),
                        this.dropdownArrow = this._createEl("div", {
                            class: "iti__arrow"
                        }, this.selectedFlag),
                        this.countryList = this._createEl("ul", {
                            class: "iti__country-list iti__hide",
                            id: "iti-".concat(this.id, "__country-listbox"),
                            role: "listbox",
                            "aria-label": "List of countries"
                        }),
                        this.preferredCountries.length && (this._appendListItems(this.preferredCountries, "iti__preferred", !0),
                        this._createEl("li", {
                            class: "iti__divider",
                            role: "separator",
                            "aria-disabled": "true"
                        }, this.countryList)),
                        this._appendListItems(this.countries, "iti__standard"),
                        this.options.dropdownContainer ? (this.dropdown = this._createEl("div", {
                            class: "iti iti--container"
                        }),
                        this.dropdown.appendChild(this.countryList)) : this.flagsContainer.appendChild(this.countryList)),
                        this.options.hiddenInput) {
                            var m = this.options.hiddenInput
                              , w = this.telInput.getAttribute("name");
                            if (w) {
                                var O = w.lastIndexOf("[");
                                O !== -1 && (m = "".concat(w.substr(0, O), "[").concat(m, "]"))
                            }
                            this.hiddenInput = this._createEl("input", {
                                type: "hidden",
                                name: m
                            }),
                            y.appendChild(this.hiddenInput)
                        }
                    }
                }, {
                    key: "_appendListItems",
                    value: function(g, y, m) {
                        for (var w = "", O = 0; O < g.length; O++) {
                            var M = g[O]
                              , Q = m ? "-preferred" : "";
                            w += "<li class='iti__country ".concat(y, "' tabIndex='-1' id='iti-").concat(this.id, "__item-").concat(M.iso2).concat(Q, "' role='option' data-dial-code='").concat(M.dialCode, "' data-country-code='").concat(M.iso2, "' aria-selected='false'>"),
                            w += "<div class='iti__flag-box'><div class='iti__flag iti__".concat(M.iso2, "'></div></div>"),
                            w += "<span class='iti__country-name'>".concat(M.name, "</span>"),
                            w += "<span class='iti__dial-code'>+".concat(M.dialCode, "</span>"),
                            w += "</li>"
                        }
                        this.countryList.insertAdjacentHTML("beforeend", w)
                    }
                }, {
                    key: "_setInitialState",
                    value: function() {
                        var g = this.telInput.getAttribute("value")
                          , y = this.telInput.value
                          , m = g && g.charAt(0) === "+" && (!y || y.charAt(0) !== "+")
                          , w = m ? g : y
                          , O = this._getDialCode(w)
                          , M = this._isRegionlessNanp(w)
                          , Q = this.options
                          , rt = Q.initialCountry
                          , xt = Q.nationalMode
                          , me = Q.autoHideDialCode
                          , Bt = Q.separateDialCode;
                        O && !M ? this._updateFlagFromNumber(w) : rt !== "auto" && (rt ? this._setFlag(rt.toLowerCase()) : O && M ? this._setFlag("us") : (this.defaultCountry = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.countries[0].iso2,
                        w || this._setFlag(this.defaultCountry)),
                        !w && !xt && !me && !Bt && (this.telInput.value = "+".concat(this.selectedCountryData.dialCode))),
                        w && this._updateValFromNumber(w)
                    }
                }, {
                    key: "_initListeners",
                    value: function() {
                        this._initKeyListeners(),
                        this.options.autoHideDialCode && this._initBlurListeners(),
                        this.options.allowDropdown && this._initDropdownListeners(),
                        this.hiddenInput && this._initHiddenInputListener()
                    }
                }, {
                    key: "_initHiddenInputListener",
                    value: function() {
                        var g = this;
                        this._handleHiddenInputSubmit = function() {
                            g.hiddenInput.value = g.getNumber()
                        }
                        ,
                        this.telInput.form && this.telInput.form.addEventListener("submit", this._handleHiddenInputSubmit)
                    }
                }, {
                    key: "_getClosestLabel",
                    value: function() {
                        for (var g = this.telInput; g && g.tagName !== "LABEL"; )
                            g = g.parentNode;
                        return g
                    }
                }, {
                    key: "_initDropdownListeners",
                    value: function() {
                        var g = this;
                        this._handleLabelClick = function(m) {
                            g.countryList.classList.contains("iti__hide") ? g.telInput.focus() : m.preventDefault()
                        }
                        ;
                        var y = this._getClosestLabel();
                        y && y.addEventListener("click", this._handleLabelClick),
                        this._handleClickSelectedFlag = function() {
                            g.countryList.classList.contains("iti__hide") && !g.telInput.disabled && !g.telInput.readOnly && g._showDropdown()
                        }
                        ,
                        this.selectedFlag.addEventListener("click", this._handleClickSelectedFlag),
                        this._handleFlagsContainerKeydown = function(m) {
                            var w = g.countryList.classList.contains("iti__hide");
                            w && ["ArrowUp", "Up", "ArrowDown", "Down", " ", "Enter"].indexOf(m.key) !== -1 && (m.preventDefault(),
                            m.stopPropagation(),
                            g._showDropdown()),
                            m.key === "Tab" && g._closeDropdown()
                        }
                        ,
                        this.flagsContainer.addEventListener("keydown", this._handleFlagsContainerKeydown)
                    }
                }, {
                    key: "_initRequests",
                    value: function() {
                        var g = this;
                        this.options.utilsScript && !window.intlTelInputUtils ? window.intlTelInputGlobals.documentReady() ? window.intlTelInputGlobals.loadUtils(this.options.utilsScript) : window.addEventListener("load", function() {
                            window.intlTelInputGlobals.loadUtils(g.options.utilsScript)
                        }) : this.resolveUtilsScriptPromise(),
                        this.options.initialCountry === "auto" ? this._loadAutoCountry() : this.resolveAutoCountryPromise()
                    }
                }, {
                    key: "_loadAutoCountry",
                    value: function() {
                        window.intlTelInputGlobals.autoCountry ? this.handleAutoCountry() : window.intlTelInputGlobals.startedLoadingAutoCountry || (window.intlTelInputGlobals.startedLoadingAutoCountry = !0,
                        typeof this.options.geoIpLookup == "function" && this.options.geoIpLookup(function(g) {
                            window.intlTelInputGlobals.autoCountry = g.toLowerCase(),
                            setTimeout(function() {
                                return R("handleAutoCountry")
                            })
                        }, function() {
                            return R("rejectAutoCountryPromise")
                        }))
                    }
                }, {
                    key: "_initKeyListeners",
                    value: function() {
                        var g = this;
                        this._handleKeyupEvent = function() {
                            g._updateFlagFromNumber(g.telInput.value) && g._triggerCountryChange()
                        }
                        ,
                        this.telInput.addEventListener("keyup", this._handleKeyupEvent),
                        this._handleClipboardEvent = function() {
                            setTimeout(g._handleKeyupEvent)
                        }
                        ,
                        this.telInput.addEventListener("cut", this._handleClipboardEvent),
                        this.telInput.addEventListener("paste", this._handleClipboardEvent)
                    }
                }, {
                    key: "_cap",
                    value: function(g) {
                        var y = this.telInput.getAttribute("maxlength");
                        return y && g.length > y ? g.substr(0, y) : g
                    }
                }, {
                    key: "_initBlurListeners",
                    value: function() {
                        var g = this;
                        this._handleSubmitOrBlurEvent = function() {
                            g._removeEmptyDialCode()
                        }
                        ,
                        this.telInput.form && this.telInput.form.addEventListener("submit", this._handleSubmitOrBlurEvent),
                        this.telInput.addEventListener("blur", this._handleSubmitOrBlurEvent)
                    }
                }, {
                    key: "_removeEmptyDialCode",
                    value: function() {
                        if (this.telInput.value.charAt(0) === "+") {
                            var g = this._getNumeric(this.telInput.value);
                            (!g || this.selectedCountryData.dialCode === g) && (this.telInput.value = "")
                        }
                    }
                }, {
                    key: "_getNumeric",
                    value: function(g) {
                        return g.replace(/\D/g, "")
                    }
                }, {
                    key: "_trigger",
                    value: function(g) {
                        var y = document.createEvent("Event");
                        y.initEvent(g, !0, !0),
                        this.telInput.dispatchEvent(y)
                    }
                }, {
                    key: "_showDropdown",
                    value: function() {
                        this.countryList.classList.remove("iti__hide"),
                        this.selectedFlag.setAttribute("aria-expanded", "true"),
                        this._setDropdownPosition(),
                        this.activeItem && (this._highlightListItem(this.activeItem, !1),
                        this._scrollTo(this.activeItem, !0)),
                        this._bindDropdownListeners(),
                        this.dropdownArrow.classList.add("iti__arrow--up"),
                        this._trigger("open:countrydropdown")
                    }
                }, {
                    key: "_toggleClass",
                    value: function(g, y, m) {
                        m && !g.classList.contains(y) ? g.classList.add(y) : !m && g.classList.contains(y) && g.classList.remove(y)
                    }
                }, {
                    key: "_setDropdownPosition",
                    value: function() {
                        var g = this;
                        if (this.options.dropdownContainer && this.options.dropdownContainer.appendChild(this.dropdown),
                        !this.isMobile) {
                            var y = this.telInput.getBoundingClientRect()
                              , m = window.pageYOffset || document.documentElement.scrollTop
                              , w = y.top + m
                              , O = this.countryList.offsetHeight
                              , M = w + this.telInput.offsetHeight + O < m + window.innerHeight
                              , Q = w - O > m;
                            if (this._toggleClass(this.countryList, "iti__country-list--dropup", !M && Q),
                            this.options.dropdownContainer) {
                                var rt = !M && Q ? 0 : this.telInput.offsetHeight;
                                this.dropdown.style.top = "".concat(w + rt, "px"),
                                this.dropdown.style.left = "".concat(y.left + document.body.scrollLeft, "px"),
                                this._handleWindowScroll = function() {
                                    return g._closeDropdown()
                                }
                                ,
                                window.addEventListener("scroll", this._handleWindowScroll)
                            }
                        }
                    }
                }, {
                    key: "_getClosestListItem",
                    value: function(g) {
                        for (var y = g; y && y !== this.countryList && !y.classList.contains("iti__country"); )
                            y = y.parentNode;
                        return y === this.countryList ? null : y
                    }
                }, {
                    key: "_bindDropdownListeners",
                    value: function() {
                        var g = this;
                        this._handleMouseoverCountryList = function(O) {
                            var M = g._getClosestListItem(O.target);
                            M && g._highlightListItem(M, !1)
                        }
                        ,
                        this.countryList.addEventListener("mouseover", this._handleMouseoverCountryList),
                        this._handleClickCountryList = function(O) {
                            var M = g._getClosestListItem(O.target);
                            M && g._selectListItem(M)
                        }
                        ,
                        this.countryList.addEventListener("click", this._handleClickCountryList);
                        var y = !0;
                        this._handleClickOffToClose = function() {
                            y || g._closeDropdown(),
                            y = !1
                        }
                        ,
                        document.documentElement.addEventListener("click", this._handleClickOffToClose);
                        var m = ""
                          , w = null;
                        this._handleKeydownOnDropdown = function(O) {
                            O.preventDefault(),
                            O.key === "ArrowUp" || O.key === "Up" || O.key === "ArrowDown" || O.key === "Down" ? g._handleUpDownKey(O.key) : O.key === "Enter" ? g._handleEnterKey() : O.key === "Escape" ? g._closeDropdown() : /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(O.key) && (w && clearTimeout(w),
                            m += O.key.toLowerCase(),
                            g._searchForCountry(m),
                            w = setTimeout(function() {
                                m = ""
                            }, 1e3))
                        }
                        ,
                        document.addEventListener("keydown", this._handleKeydownOnDropdown)
                    }
                }, {
                    key: "_handleUpDownKey",
                    value: function(g) {
                        var y = g === "ArrowUp" || g === "Up" ? this.highlightedItem.previousElementSibling : this.highlightedItem.nextElementSibling;
                        y && (y.classList.contains("iti__divider") && (y = g === "ArrowUp" || g === "Up" ? y.previousElementSibling : y.nextElementSibling),
                        this._highlightListItem(y, !0))
                    }
                }, {
                    key: "_handleEnterKey",
                    value: function() {
                        this.highlightedItem && this._selectListItem(this.highlightedItem)
                    }
                }, {
                    key: "_searchForCountry",
                    value: function(g) {
                        for (var y = 0; y < this.countries.length; y++)
                            if (this._startsWith(this.countries[y].name, g)) {
                                var m = this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(this.countries[y].iso2));
                                this._highlightListItem(m, !1),
                                this._scrollTo(m, !0);
                                break
                            }
                    }
                }, {
                    key: "_startsWith",
                    value: function(g, y) {
                        return g.substr(0, y.length).toLowerCase() === y
                    }
                }, {
                    key: "_updateValFromNumber",
                    value: function(g) {
                        var y = g;
                        if (this.options.formatOnDisplay && window.intlTelInputUtils && this.selectedCountryData) {
                            var m = !this.options.separateDialCode && (this.options.nationalMode || y.charAt(0) !== "+")
                              , w = intlTelInputUtils.numberFormat
                              , O = w.NATIONAL
                              , M = w.INTERNATIONAL
                              , Q = m ? O : M;
                            y = intlTelInputUtils.formatNumber(y, this.selectedCountryData.iso2, Q)
                        }
                        y = this._beforeSetNumber(y),
                        this.telInput.value = y
                    }
                }, {
                    key: "_updateFlagFromNumber",
                    value: function(g) {
                        var y = g
                          , m = this.selectedCountryData.dialCode
                          , w = m === "1";
                        y && this.options.nationalMode && w && y.charAt(0) !== "+" && (y.charAt(0) !== "1" && (y = "1".concat(y)),
                        y = "+".concat(y)),
                        this.options.separateDialCode && m && y.charAt(0) !== "+" && (y = "+".concat(m).concat(y));
                        var O = this._getDialCode(y, !0)
                          , M = this._getNumeric(y)
                          , Q = null;
                        if (O) {
                            var rt = this.countryCodes[this._getNumeric(O)]
                              , xt = rt.indexOf(this.selectedCountryData.iso2) !== -1 && M.length <= O.length - 1
                              , me = m === "1" && this._isRegionlessNanp(M);
                            if (!me && !xt) {
                                for (var Bt = 0; Bt < rt.length; Bt++)
                                    if (rt[Bt]) {
                                        Q = rt[Bt];
                                        break
                                    }
                            }
                        } else
                            y.charAt(0) === "+" && M.length ? Q = "" : (!y || y === "+") && (Q = this.defaultCountry);
                        return Q !== null ? this._setFlag(Q) : !1
                    }
                }, {
                    key: "_isRegionlessNanp",
                    value: function(g) {
                        var y = this._getNumeric(g);
                        if (y.charAt(0) === "1") {
                            var m = y.substr(1, 3);
                            return B.indexOf(m) !== -1
                        }
                        return !1
                    }
                }, {
                    key: "_highlightListItem",
                    value: function(g, y) {
                        var m = this.highlightedItem;
                        m && m.classList.remove("iti__highlight"),
                        this.highlightedItem = g,
                        this.highlightedItem.classList.add("iti__highlight"),
                        y && this.highlightedItem.focus()
                    }
                }, {
                    key: "_getCountryData",
                    value: function(g, y, m) {
                        for (var w = y ? n : this.countries, O = 0; O < w.length; O++)
                            if (w[O].iso2 === g)
                                return w[O];
                        if (m)
                            return null;
                        throw new Error("No country data for '".concat(g, "'"))
                    }
                }, {
                    key: "_setFlag",
                    value: function(g) {
                        var y = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
                        this.selectedCountryData = g ? this._getCountryData(g, !1, !1) : {},
                        this.selectedCountryData.iso2 && (this.defaultCountry = this.selectedCountryData.iso2),
                        this.selectedFlagInner.setAttribute("class", "iti__flag iti__".concat(g));
                        var m = g ? "".concat(this.selectedCountryData.name, ": +").concat(this.selectedCountryData.dialCode) : "Unknown";
                        if (this.selectedFlag.setAttribute("title", m),
                        this.options.separateDialCode) {
                            var w = this.selectedCountryData.dialCode ? "+".concat(this.selectedCountryData.dialCode) : "";
                            this.selectedDialCode.innerHTML = w;
                            var O = this.selectedFlag.offsetWidth || this._getHiddenSelectedFlagWidth();
                            this.telInput.style.paddingLeft = "".concat(O + 6, "px")
                        }
                        if (this._updatePlaceholder(),
                        this.options.allowDropdown) {
                            var M = this.activeItem;
                            if (M && (M.classList.remove("iti__active"),
                            M.setAttribute("aria-selected", "false")),
                            g) {
                                var Q = this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(g, "-preferred")) || this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(g));
                                Q.setAttribute("aria-selected", "true"),
                                Q.classList.add("iti__active"),
                                this.activeItem = Q,
                                this.selectedFlag.setAttribute("aria-activedescendant", Q.getAttribute("id"))
                            }
                        }
                        return y.iso2 !== g
                    }
                }, {
                    key: "_getHiddenSelectedFlagWidth",
                    value: function() {
                        var g = this.telInput.parentNode.cloneNode();
                        g.style.visibility = "hidden",
                        document.body.appendChild(g);
                        var y = this.flagsContainer.cloneNode();
                        g.appendChild(y);
                        var m = this.selectedFlag.cloneNode(!0);
                        y.appendChild(m);
                        var w = m.offsetWidth;
                        return g.parentNode.removeChild(g),
                        w
                    }
                }, {
                    key: "_updatePlaceholder",
                    value: function() {
                        var g = this.options.autoPlaceholder === "aggressive" || !this.hadInitialPlaceholder && this.options.autoPlaceholder === "polite";
                        if (window.intlTelInputUtils && g) {
                            var y = intlTelInputUtils.numberType[this.options.placeholderNumberType]
                              , m = this.selectedCountryData.iso2 ? intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2, this.options.nationalMode, y) : "";
                            m = this._beforeSetNumber(m),
                            typeof this.options.customPlaceholder == "function" && (m = this.options.customPlaceholder(m, this.selectedCountryData)),
                            this.telInput.setAttribute("placeholder", m)
                        }
                    }
                }, {
                    key: "_selectListItem",
                    value: function(g) {
                        var y = this._setFlag(g.getAttribute("data-country-code"));
                        this._closeDropdown(),
                        this._updateDialCode(g.getAttribute("data-dial-code"), !0),
                        this.telInput.focus();
                        var m = this.telInput.value.length;
                        this.telInput.setSelectionRange(m, m),
                        y && this._triggerCountryChange()
                    }
                }, {
                    key: "_closeDropdown",
                    value: function() {
                        this.countryList.classList.add("iti__hide"),
                        this.selectedFlag.setAttribute("aria-expanded", "false"),
                        this.dropdownArrow.classList.remove("iti__arrow--up"),
                        document.removeEventListener("keydown", this._handleKeydownOnDropdown),
                        document.documentElement.removeEventListener("click", this._handleClickOffToClose),
                        this.countryList.removeEventListener("mouseover", this._handleMouseoverCountryList),
                        this.countryList.removeEventListener("click", this._handleClickCountryList),
                        this.options.dropdownContainer && (this.isMobile || window.removeEventListener("scroll", this._handleWindowScroll),
                        this.dropdown.parentNode && this.dropdown.parentNode.removeChild(this.dropdown)),
                        this._trigger("close:countrydropdown")
                    }
                }, {
                    key: "_scrollTo",
                    value: function(g, y) {
                        var m = this.countryList
                          , w = window.pageYOffset || document.documentElement.scrollTop
                          , O = m.offsetHeight
                          , M = m.getBoundingClientRect().top + w
                          , Q = M + O
                          , rt = g.offsetHeight
                          , xt = g.getBoundingClientRect().top + w
                          , me = xt + rt
                          , Bt = xt - M + m.scrollTop
                          , Cn = O / 2 - rt / 2;
                        if (xt < M)
                            y && (Bt -= Cn),
                            m.scrollTop = Bt;
                        else if (me > Q) {
                            y && (Bt += Cn);
                            var An = O - rt;
                            m.scrollTop = Bt - An
                        }
                    }
                }, {
                    key: "_updateDialCode",
                    value: function(g, y) {
                        var m = this.telInput.value, w = "+".concat(g), O;
                        if (m.charAt(0) === "+") {
                            var M = this._getDialCode(m);
                            M ? O = m.replace(M, w) : O = w
                        } else {
                            if (this.options.nationalMode || this.options.separateDialCode)
                                return;
                            if (m)
                                O = w + m;
                            else if (y || !this.options.autoHideDialCode)
                                O = w;
                            else
                                return
                        }
                        this.telInput.value = O
                    }
                }, {
                    key: "_getDialCode",
                    value: function(g, y) {
                        var m = "";
                        if (g.charAt(0) === "+")
                            for (var w = "", O = 0; O < g.length; O++) {
                                var M = g.charAt(O);
                                if (!isNaN(parseInt(M, 10))) {
                                    if (w += M,
                                    y)
                                        this.countryCodes[w] && (m = g.substr(0, O + 1));
                                    else if (this.dialCodes[w]) {
                                        m = g.substr(0, O + 1);
                                        break
                                    }
                                    if (w.length === this.countryCodeMaxLen)
                                        break
                                }
                            }
                        return m
                    }
                }, {
                    key: "_getFullNumber",
                    value: function() {
                        var g = this.telInput.value.trim(), y = this.selectedCountryData.dialCode, m, w = this._getNumeric(g);
                        return this.options.separateDialCode && g.charAt(0) !== "+" && y && w ? m = "+".concat(y) : m = "",
                        m + g
                    }
                }, {
                    key: "_beforeSetNumber",
                    value: function(g) {
                        var y = g;
                        if (this.options.separateDialCode) {
                            var m = this._getDialCode(y);
                            if (m) {
                                m = "+".concat(this.selectedCountryData.dialCode);
                                var w = y[m.length] === " " || y[m.length] === "-" ? m.length + 1 : m.length;
                                y = y.substr(w)
                            }
                        }
                        return this._cap(y)
                    }
                }, {
                    key: "_triggerCountryChange",
                    value: function() {
                        this._trigger("countrychange")
                    }
                }, {
                    key: "handleAutoCountry",
                    value: function() {
                        this.options.initialCountry === "auto" && (this.defaultCountry = window.intlTelInputGlobals.autoCountry,
                        this.telInput.value || this.setCountry(this.defaultCountry),
                        this.resolveAutoCountryPromise())
                    }
                }, {
                    key: "handleUtils",
                    value: function() {
                        window.intlTelInputUtils && (this.telInput.value && this._updateValFromNumber(this.telInput.value),
                        this._updatePlaceholder()),
                        this.resolveUtilsScriptPromise()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var g = this.telInput.form;
                        if (this.options.allowDropdown) {
                            this._closeDropdown(),
                            this.selectedFlag.removeEventListener("click", this._handleClickSelectedFlag),
                            this.flagsContainer.removeEventListener("keydown", this._handleFlagsContainerKeydown);
                            var y = this._getClosestLabel();
                            y && y.removeEventListener("click", this._handleLabelClick)
                        }
                        this.hiddenInput && g && g.removeEventListener("submit", this._handleHiddenInputSubmit),
                        this.options.autoHideDialCode && (g && g.removeEventListener("submit", this._handleSubmitOrBlurEvent),
                        this.telInput.removeEventListener("blur", this._handleSubmitOrBlurEvent)),
                        this.telInput.removeEventListener("keyup", this._handleKeyupEvent),
                        this.telInput.removeEventListener("cut", this._handleClipboardEvent),
                        this.telInput.removeEventListener("paste", this._handleClipboardEvent),
                        this.telInput.removeAttribute("data-intl-tel-input-id");
                        var m = this.telInput.parentNode;
                        m.parentNode.insertBefore(this.telInput, m),
                        m.parentNode.removeChild(m),
                        delete window.intlTelInputGlobals.instances[this.id]
                    }
                }, {
                    key: "getExtension",
                    value: function() {
                        return window.intlTelInputUtils ? intlTelInputUtils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2) : ""
                    }
                }, {
                    key: "getNumber",
                    value: function(g) {
                        if (window.intlTelInputUtils) {
                            var y = this.selectedCountryData.iso2;
                            return intlTelInputUtils.formatNumber(this._getFullNumber(), y, g)
                        }
                        return ""
                    }
                }, {
                    key: "getNumberType",
                    value: function() {
                        return window.intlTelInputUtils ? intlTelInputUtils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2) : -99
                    }
                }, {
                    key: "getSelectedCountryData",
                    value: function() {
                        return this.selectedCountryData
                    }
                }, {
                    key: "getValidationError",
                    value: function() {
                        if (window.intlTelInputUtils) {
                            var g = this.selectedCountryData.iso2;
                            return intlTelInputUtils.getValidationError(this._getFullNumber(), g)
                        }
                        return -99
                    }
                }, {
                    key: "isValidNumber",
                    value: function() {
                        var g = this._getFullNumber().trim()
                          , y = this.options.nationalMode ? this.selectedCountryData.iso2 : "";
                        return window.intlTelInputUtils ? intlTelInputUtils.isValidNumber(g, y) : null
                    }
                }, {
                    key: "setCountry",
                    value: function(g) {
                        var y = g.toLowerCase();
                        this.selectedFlagInner.classList.contains("iti__".concat(y)) || (this._setFlag(y),
                        this._updateDialCode(this.selectedCountryData.dialCode, !1),
                        this._triggerCountryChange())
                    }
                }, {
                    key: "setNumber",
                    value: function(g) {
                        var y = this._updateFlagFromNumber(g);
                        this._updateValFromNumber(g),
                        y && this._triggerCountryChange()
                    }
                }, {
                    key: "setPlaceholderNumberType",
                    value: function(g) {
                        this.options.placeholderNumberType = g,
                        this._updatePlaceholder()
                    }
                }]),
                q
            }();
            C.getCountryData = function() {
                return n
            }
            ;
            var K = function(T, g, y) {
                var m = document.createElement("script");
                m.onload = function() {
                    R("handleUtils"),
                    g && g()
                }
                ,
                m.onerror = function() {
                    R("rejectUtilsScriptPromise"),
                    y && y()
                }
                ,
                m.className = "iti-load-utils",
                m.async = !0,
                m.src = T,
                document.body.appendChild(m)
            };
            return C.loadUtils = function(q) {
                if (!window.intlTelInputUtils && !window.intlTelInputGlobals.startedLoadingUtilsScript) {
                    if (window.intlTelInputGlobals.startedLoadingUtilsScript = !0,
                    typeof Promise < "u")
                        return new Promise(function(T, g) {
                            return K(q, T, g)
                        }
                        );
                    K(q)
                }
                return null
            }
            ,
            C.defaults = U,
            C.version = "17.0.13",
            function(q, T) {
                var g = new z(q,T);
                return g._init(),
                q.setAttribute("data-intl-tel-input-id", g.id),
                window.intlTelInputGlobals.instances[g.id] = g,
                g
            }
        }()
    })
}
)(gd);
var b_ = gd.exports
  , w_ = b_;
const E_ = Ny(w_)
  , x_ = "form__form"
  , S_ = "success"
  , dn = "form__field"
  , Ti = "invalid"
  , Lc = "valid"
  , Cr = "pristine"
  , kc = "gmp_utm";
class Ic {
    constructor(i, n) {
        this.domWatcher = new ct,
        this.el = i,
        this.formEl = i.querySelector(`.${x_}`),
        this.events = {
            "event-category": this.formEl.getAttribute("data-category"),
            "event-action": this.formEl.getAttribute("data-action"),
            "event-label": this.formEl.getAttribute("data-label")
        },
        this.onSuccess = n,
        this.init()
    }
    init() {
        if (this.formEl) {
            this.formEl.classList.add(Ti),
            this.domWatcher.add({
                element: this.formEl,
                on: "submit",
                callback: n=>this.onSubmit(n)
            });
            for (const n of this.formEl) {
                const r = n.closest(`.${dn}`) || n;
                if (n.value || r.classList.add(Cr),
                this.domWatcher.add({
                    element: n,
                    on: "change",
                    callback: ()=>{
                        r.classList.remove(Cr),
                        this.checkFormValidity()
                    }
                }),
                this.domWatcher.add({
                    element: n,
                    on: "keypress",
                    callback: ()=>{
                        r.classList.remove(Cr)
                    }
                }),
                this.domWatcher.add({
                    element: n,
                    on: "focus",
                    callback: ()=>{
                        r.classList.remove(Ti)
                    }
                }),
                n.name === "CountryCode" && this.domWatcher.add({
                    element: n,
                    on: "change",
                    callback: l=>{
                        this.updateOptin(l.target.value),
                        this.updateStates(l.target.value)
                    }
                }),
                n.name === "Rental_EMEA_18__c") {
                    const d = window.location.href.replace("/registration", "/results");
                    n.value = d
                }
                if (n.type === "hidden" && n.getAttribute("data-cookie-variable") && yn.get(kc)) {
                    const l = new URLSearchParams(`?${yn.get(kc)}`)
                      , d = n.getAttribute("data-cookie-variable")
                      , f = l.get(d);
                    f && (n.value = f)
                }
            }
            const i = document.querySelectorAll('[data-type="phone"]');
            i && i.forEach(n=>{
                E_(n, {
                    nationalMode: !0,
                    autoPlaceholder: "off",
                    initialCountry: n.getAttribute("data-country"),
                    utilsScript: "/static/intl-tel-input-utils.min.js"
                })
            }
            ),
            this.updateOptin(),
            this.updateStates(),
            this.updateReferrer()
        }
    }
    updateReferrer() {
        const i = document.querySelector('[name="Facet_Referrer_Url__c"]');
        i && (i.value = document.referrer || window.location.href)
    }
    updateStates(i) {
        const n = document.querySelector("#StateCode-id")
          , r = n?.closest(`.${dn}`) || n
          , d = JSON.parse(n?.getAttribute("data-state-options") || "[]")?.find(f=>f.code === i);
        if (d) {
            const f = d.label?.val
              , S = d.states;
            for (; n.options.length > 0; )
                n.remove(0);
            n.disabled = !1,
            r.style.display = "block";
            const C = new Option(f,"");
            n?.add(C, void 0),
            S.forEach(F=>{
                const U = new Option(F.state,F.code);
                n?.add(U, void 0)
            }
            )
        } else
            n && (n.disabled = !0,
            r.style.display = "none")
    }
    trackEvents(i) {
        const n = i?.["event-category"]
          , r = i?.["event-action"]
          , l = i?.["event-label"];
        n && r && l && Ge(n, r, l)
    }
    updateOptin(i) {
        document.querySelector("#Opt_In__c-id")?.querySelectorAll("input[type=radio]")?.forEach(l=>{
            const d = l
              , f = !(i && ["IN", "US"].includes(i))
              , S = d.value === "Yes";
            d.checked = !1,
            !f && S && (d.checked = !0)
        }
        )
    }
    checkFieldValidity(i) {
        let n = !0;
        if (i.getAttribute("data-type") === "phone") {
            const r = window.intlTelInputGlobals.getInstance(i);
            r ? r.isValidNumber() ? (n = !0,
            this.markFieldValid(i)) : (n = !1,
            this.markFieldInvalid(i)) : (n = !0,
            this.markFieldValid(i))
        } else
            i.checkValidity() ? (n = !0,
            this.markFieldValid(i)) : (n = !1,
            this.markFieldInvalid(i));
        return n
    }
    markFieldValid(i) {
        const n = i.closest(`.${dn}`) || i;
        n && (n.classList.add(Lc),
        n.classList.remove(Ti)),
        i && i.setAttribute("aria-invalid", "false")
    }
    markFieldInvalid(i) {
        const n = i.closest(`.${dn}`) || i;
        n && (n.classList.add(Ti),
        n.classList.remove(Lc)),
        i && i.setAttribute("aria-invalid", "true")
    }
    checkFormValidity() {
        let i = !0;
        for (const n of this.formEl)
            this.checkFieldValidity(n) === !1 && (i = !1);
        return i ? this.formEl.classList.remove(Ti) : this.formEl.classList.add(Ti),
        i
    }
    onSubmit(i) {
        i.preventDefault();
        for (const n of this.formEl)
            (n.closest(`.${dn}`) || n).classList.remove(Cr);
        if (this.checkFormValidity()) {
            const n = [...this.formEl]
              , r = []
              , l = ["submit", "fieldset"]
              , d = !!document.querySelector("#Opt_In__c-id");
            let f = !1;
            const S = (B=[],L="",R="")=>{
                B.push(encodeURIComponent(L) + "=" + encodeURIComponent(R))
            }
            ;
            for (const B of n)
                if (!l.includes(B.type))
                    if (B.type === "radio") {
                        const L = B.name === "Opt_In__c";
                        B.checked && (S(r, B.name, B.value),
                        L && (f = !0))
                    } else
                        S(r, B.name, B.value);
            d && !f && S(r, "Opt_In__c", "");
            const C = r.join("&")
              , F = this.formEl.getAttribute("action")
              , U = new Request(F,{
                method: "POST",
                mode: "no-cors",
                redirect: "follow",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                },
                body: C
            });
            fetch(U).then(B=>B).then(()=>{
                this.onSuccess ? this.onSuccess() : this.showSuccess(),
                this.trackEvents(this.events)
            }
            ).catch(B=>{
                console.error("Error:", B),
                this.trackEvents({
                    ...this.events,
                    "event-label": B
                })
            }
            )
        }
    }
    showSuccess() {
        this.el.classList.add(S_)
    }
}
const Tc = "fullbleed-5050__controls__dots__dot--active"
  , C_ = "fullbleed-5050__slide__feature__chapter";
class A_ {
    constructor(i) {
        this.domWatcher = new ct,
        this.el = i,
        this.randomBackgroundsEl = this.el.querySelector("[data-random-backgrounds]"),
        this.slidesEl = this.el.querySelector("[slides]"),
        this.slideEls = Array.from(this.el.querySelectorAll("[slide]")),
        this.prevEl = this.el.querySelector("[prev]"),
        this.nextEl = this.el.querySelector("[next]"),
        this.dotEls = Array.from(this.el.querySelectorAll("[dot]")),
        this.index = 0,
        this.slideBounds = this.slideEls[0].getBoundingClientRect(),
        this.init()
    }
    init() {
        this.domWatcher.add({
            element: window,
            on: "smartResize",
            callback: ()=>this.onWindowResize()
        }),
        this.prevEl && this.domWatcher.add({
            element: this.prevEl,
            on: ["click", "keyup"],
            callback: i=>{
                this.onClickOrEnterKey(i, ()=>{
                    this.prevSlide()
                }
                )
            }
        }),
        this.nextEl && this.domWatcher.add({
            element: this.nextEl,
            on: ["click", "keyup"],
            callback: i=>{
                this.onClickOrEnterKey(i, ()=>{
                    this.nextSlide()
                }
                )
            }
        }),
        this.dotEls && this.dotEls.length && this.dotEls.forEach((i,n)=>{
            this.domWatcher.add({
                element: i,
                on: ["click", "keyup"],
                callback: r=>{
                    this.onClickOrEnterKey(r, ()=>{
                        this.goToSlide(n)
                    }
                    )
                }
            })
        }
        ),
        this.randomBackgroundsEl && this.setRandomBackground(),
        this.setTheme(),
        this.updateActiveDot(),
        setTimeout(()=>{
            this.onWindowResize()
        }
        , 500)
    }
    setRandomBackground() {
        const i = this.randomBackgroundsEl;
        i.style.setProperty("display", "none");
        const n = i.getAttribute("data-random-backgrounds");
        if (i && n) {
            const r = JSON.parse(n)
              , l = Math.floor(Math.random() * r.length)
              , d = r[l];
            this.setSlideTextColor(d.textColor);
            const f = i.querySelector(`[data-random-backgrounds-index='${l}']`);
            if (f) {
                const S = f.querySelector("img");
                S && S.style.setProperty("display", "block")
            }
            i.style.setProperty("display", "block")
        }
    }
    onClickOrEnterKey(i, n) {
        i.preventDefault();
        const r = i.type === "click"
          , l = i.type === "keyup" && i.key === "Enter";
        (r || l) && n()
    }
    onWindowResize() {
        this.slideBounds = this.slideEls[0].getBoundingClientRect();
        const i = this.slideEls[this.index];
        if (i) {
            const n = i.getBoundingClientRect().top
              , r = this.slideEls[this.index].querySelector(`.${C_}`);
            if (r) {
                const l = r.getBoundingClientRect().top;
                this.el.style.setProperty("--chapter-offset", l - n)
            }
        }
    }
    prevSlide() {
        this.index > 0 ? this.goToSlide(this.index - 1) : this.goToSlide(this.slideEls.length - 1)
    }
    nextSlide() {
        this.index < this.slideEls.length - 1 ? this.goToSlide(this.index + 1) : this.goToSlide(0)
    }
    goToSlide(i) {
        this.index = i,
        this.slidesEl.scrollTo({
            top: 0,
            left: this.slideBounds.width * i,
            behavior: "smooth"
        }),
        this.updateActiveDot()
    }
    setTheme() {
        const i = this.slideEls[this.index];
        if (i) {
            const n = i.getAttribute("theme") || "";
            this.el.setAttribute("theme", n)
        }
    }
    setSlideTextColor(i) {
        const n = this.slideEls[this.index];
        n && n.setAttribute("text-color", i)
    }
    updateActiveDot() {
        !this.dotEls || !this.dotEls.length || (this.dotEls.map(i=>{
            i.classList.remove(Tc)
        }
        ),
        this.dotEls[this.index].classList.add(Tc))
    }
}
var L_ = class {
    constructor() {
        this.resolve = ()=>{}
        ,
        this.reject = ()=>{}
        ,
        this.complete = !1,
        this.promise = new Promise((i,n)=>{
            this.resolve = r=>(this.complete = !0,
            i(r)),
            this.reject = r=>(this.complete = !0,
            n(r))
        }
        )
    }
    getPromise() {
        return this.complete ? new Promise(i=>{
            i()
        }
        ) : this.promise
    }
}
  , md = class {
    static inview(i, n={}, r) {
        let l = null
          , d = null
          , f = null
          , S = !1;
        const C = new L_
          , F = ()=>({
            changes: l,
            lastChange: d,
            inview: f,
            ready: S
        })
          , U = z=>{
            z.length >= 1 && (l = z,
            d = z.slice(-1)[0],
            f = d.isIntersecting,
            S = !0,
            C.resolve()),
            r && r(i, z.slice(-1)[0], L)
        }
        ;
        let B = window.location.search.split("evBypass=")[1];
        if (B = B && B.split("&")[0],
        B === "true")
            return window.setTimeout(()=>{
                r && r(i, {
                    isIntersecting: !0,
                    isVisible: !0
                }, ()=>{}
                ),
                C.resolve()
            }
            ),
            {
                observer: null,
                dispose: ()=>{}
                ,
                state: ()=>({
                    ready: !0,
                    inview: !0
                }),
                readyPromise: C.getPromise()
            };
        const L = ()=>{
            R && R.unobserve(i),
            R && R.disconnect(),
            l = [],
            d = null
        }
          , R = new IntersectionObserver(U,n);
        return R.observe(i),
        {
            observer: R,
            dispose: L,
            state: F,
            readyPromise: C.getPromise()
        }
    }
}
;
const Ar = "fullwidth-cards__cards__card__video-background--active"
  , k_ = "fullwidth-cards__cards__card__video-background--intro"
  , I_ = "fullwidth-cards__cards__card__video-background--loop";
class T_ {
    constructor(i) {
        this.domWatcher = new ct,
        this.el = i,
        this.introVideoEl = this.el.querySelector(`.${k_}`),
        this.loopVideoEl = this.el.querySelector(`.${I_}`),
        this.init()
    }
    init() {
        this.introVideoEl && this.loopVideoEl && md.inview(this.el, {
            threshold: .3
        }, (i,n,r)=>{
            n.isIntersecting && (this._playIntroVideo(),
            r())
        }
        )
    }
    _playIntroVideo() {
        const i = this.introVideoEl.querySelector("video");
        this.introVideoEl.classList.add(Ar),
        this.loopVideoEl.classList.remove(Ar),
        i && (i.addEventListener("ended", ()=>{
            i.setAttribute("intro-video-ended", "true"),
            this._playLoopVideo()
        }
        ),
        i.play())
    }
    _playLoopVideo() {
        const i = this.loopVideoEl.querySelector("video");
        this.loopVideoEl.classList.add(Ar),
        this.introVideoEl.classList.remove(Ar),
        i && i.play()
    }
}
const Rc = "header--scrollup"
  , Pc = "header--scrolldown"
  , ua = "header--sticky"
  , Oc = "header--below-fold"
  , Dc = "open"
  , $c = "open";
class R_ {
    constructor(i) {
        this.domWatcher = new ct,
        this.el = i,
        this.menuEl = document.querySelector(".header__mobile__nav"),
        this.desktopMenuEl = document.querySelector(".header__nav"),
        this.submenuEls = this.menuEl.querySelectorAll("[subnav-id]"),
        this.desktopHasSubnav = this.desktopMenuEl.querySelectorAll(".header__nav__item--has-subnav"),
        this.openSubmenus = [],
        this.scrollTop = 0,
        this.headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-height")),
        this.viewportHeight = window.innerHeight,
        this.init()
    }
    init() {
        this.domWatcher.add({
            element: window,
            on: "smartResize",
            callback: ()=>this.onWindowResize()
        }),
        this.domWatcher.add({
            element: window,
            on: "scroll",
            callback: ()=>this.onPageScroll(),
            eventOptions: {
                passive: !1
            }
        }),
        this.el.querySelectorAll("[menu-open]").forEach(f=>{
            this.domWatcher.add({
                element: f,
                on: "click",
                callback: ()=>this.openMenu()
            })
        }
        ),
        this.menuEl.querySelectorAll("[menu-close]").forEach(f=>{
            this.domWatcher.add({
                element: f,
                on: "click",
                callback: ()=>this.closeMenu()
            })
        }
        ),
        this.menuEl.querySelectorAll(".link").forEach(f=>{
            this.domWatcher.add({
                element: f,
                on: "click",
                callback: ()=>this.closeMenu()
            })
        }
        ),
        this.menuEl.querySelectorAll("[opens-subnav]").forEach(f=>{
            const S = f.getAttribute("opens-subnav");
            this.domWatcher.add({
                element: f,
                on: "click",
                callback: C=>this.openSubmenu(C, S)
            })
        }
        ),
        this.menuEl.querySelectorAll("[closes-subnav]").forEach(f=>{
            const S = f.getAttribute("closes-subnav");
            this.domWatcher.add({
                element: f,
                on: "click",
                callback: C=>this.closeSubmenu(C, S)
            })
        }
        ),
        this.desktopHasSubnav && this.desktopHasSubnav.forEach(f=>{
            const S = f.querySelectorAll(".link");
            this.domWatcher.add({
                element: f,
                on: "mouseenter",
                callback: ()=>this.openDesktopMenu(f)
            }),
            this.domWatcher.add({
                element: f,
                on: "mouseleave",
                callback: ()=>this.closeDesktopMenu(f)
            }),
            S.forEach(C=>{
                this.domWatcher.add({
                    element: C,
                    on: "click",
                    callback: ()=>this.closeDesktopMenu(f)
                })
            }
            )
        }
        )
    }
    openMenu() {
        this.menuEl && this.menuEl.classList.add(Dc)
    }
    openDesktopMenu(i) {
        i.setAttribute("open", !0),
        i.removeAttribute("aria-hidden")
    }
    closeDesktopMenu(i) {
        i.removeAttribute("open"),
        i.setAttribute("aria-hidden", !0)
    }
    closeMenu() {
        this.menuEl && this.menuEl.classList.remove(Dc)
    }
    openSubmenu(i, n) {
        i.stopPropagation(),
        this.openSubmenus.includes(n) || this.openSubmenus.push(n),
        this.setSubmenuVisibility()
    }
    closeSubmenu(i, n) {
        i.stopPropagation(),
        this.openSubmenus = this.openSubmenus.filter(r=>r !== n),
        this.setSubmenuVisibility()
    }
    setSubmenuVisibility() {
        this.submenuEls.forEach(i=>{
            const n = i.getAttribute("subnav-id");
            this.openSubmenus.includes(n) ? i.classList.add($c) : i.classList.remove($c)
        }
        )
    }
    onWindowResize() {
        this.closeMenu(),
        this.viewportHeight = window.innerHeight
    }
    onPageScroll() {
        const i = window.pageYOffset || document.documentElement.scrollTop;
        i > this.scrollTop ? (i > this.headerHeight ? this.el.classList.add(ua) : this.el.classList.remove(ua),
        this.el.classList.add(Pc),
        this.el.classList.remove(Rc)) : (this.el.classList.remove(ua),
        this.el.classList.remove(Pc),
        this.el.classList.add(Rc)),
        this.scrollTop = i <= 0 ? 0 : i,
        i > this.viewportHeight ? this.el.classList.add(Oc) : this.el.classList.remove(Oc)
    }
}
class P_ {
    constructor(i) {
        this.domWatcher = new ct,
        this.el = i,
        this.init()
    }
    init() {
        this.domWatcher.add({
            element: this.el,
            on: "mousedown",
            callback: ()=>{
                this.el.innerText = this.el.getAttribute("data-copy-link-success") || "Link copied"
            }
            ,
            eventOptions: {
                passive: !1
            }
        }),
        this.domWatcher.add({
            element: this.el,
            on: "click",
            callback: ()=>{
                this.el.innerText = this.el.getAttribute("data-copy-link-success") || "Link copied",
                this.copyPageUrl(window.location.href),
                setTimeout(()=>{
                    this.el.innerText = this.el.getAttribute("data-copy-link-label") || "Copy link",
                    this.el.blur()
                }
                , 500)
            }
            ,
            eventOptions: {
                passive: !1
            }
        })
    }
    copyPageUrl(i) {
        navigator.clipboard.writeText(i)
    }
}
class O_ {
    constructor(i) {
        this.el = i,
        this.formData = new FormData,
        this.checkboxes = [],
        this.init()
    }
    init() {
        this.submitButton = this.el.querySelector("[view-results]"),
        this.checkboxes = this.el.querySelectorAll('[type="checkbox"]'),
        this.submitButton?.addEventListener("click", this.submit.bind(this)),
        Array.from(this.checkboxes).map(i=>{
            i.addEventListener("keypress", this.checkboxPress.bind(this)),
            i.addEventListener("click", this.checkboxClick.bind(this))
        }
        ),
        this.initInviewObserver()
    }
    initInviewObserver() {
        const i = document.querySelector("stacked-cardslider");
        if (i) {
            const n = new IntersectionObserver(r=>{
                r.forEach(l=>{
                    l.isIntersecting && (l.target.setAttribute("inview", "true"),
                    n?.disconnect())
                }
                )
            }
            ,{
                rootMargin: "0px 0px -25% 0px",
                threshold: .5
            });
            n.observe(i)
        }
    }
    checkboxPress(i) {
        i.preventDefault(),
        Array.from(this.checkboxes).forEach(n=>n.checked = !1),
        i.target.checked = !0
    }
    checkboxClick(i) {
        const n = i.target.value;
        Array.from(this.checkboxes).forEach(r=>r.checked = r.value === n)
    }
    submit(i) {
        i.preventDefault();
        const n = Object.fromEntries(new FormData(this.el))
          , {sustainability: r, usecase: l} = n
          , d = new URLSearchParams("")
          , S = this.el.querySelector('[data-type="industry"] [selected]').getAttribute("data-value")
          , F = this.el.querySelector('[data-type="headquarters"] [selected]').getAttribute("data-value");
        S && d.set("industry", S.toString()),
        F && d.set("headquarters", F.toString()),
        r && d.set("sustainability", r.toString()),
        l && d.set("usecase", l.toString()),
        l ? window.location.href = `/resources/impact-calculator/registration/?${d.toString()}` : console.log("error: form not valid.")
    }
}
var Or = {
    exports: {}
};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Or.exports;
(function(o, i) {
    (function() {
        var n, r = "4.17.21", l = 200, d = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", f = "Expected a function", S = "Invalid `variable` option passed into `_.template`", C = "__lodash_hash_undefined__", F = 500, U = "__lodash_placeholder__", B = 1, L = 2, R = 4, z = 1, K = 2, q = 1, T = 2, g = 4, y = 8, m = 16, w = 32, O = 64, M = 128, Q = 256, rt = 512, xt = 30, me = "...", Bt = 800, Cn = 16, An = 1, Ed = 2, xd = 3, Ze = 1 / 0, Pe = 9007199254740991, Sd = 17976931348623157e292, Ln = NaN, ue = 4294967295, Cd = ue - 1, Ad = ue >>> 1, Ld = [["ary", M], ["bind", q], ["bindKey", T], ["curry", y], ["curryRight", m], ["flip", rt], ["partial", w], ["partialRight", O], ["rearg", Q]], ui = "[object Arguments]", kn = "[object Array]", kd = "[object AsyncFunction]", Wi = "[object Boolean]", Mi = "[object Date]", Id = "[object DOMException]", In = "[object Error]", Tn = "[object Function]", Ia = "[object GeneratorFunction]", ee = "[object Map]", qi = "[object Number]", Td = "[object Null]", ve = "[object Object]", Ta = "[object Promise]", Rd = "[object Proxy]", Ni = "[object RegExp]", ie = "[object Set]", Ui = "[object String]", Rn = "[object Symbol]", Pd = "[object Undefined]", zi = "[object WeakMap]", Od = "[object WeakSet]", Gi = "[object ArrayBuffer]", hi = "[object DataView]", Fr = "[object Float32Array]", Br = "[object Float64Array]", Wr = "[object Int8Array]", Mr = "[object Int16Array]", qr = "[object Int32Array]", Nr = "[object Uint8Array]", Ur = "[object Uint8ClampedArray]", zr = "[object Uint16Array]", Gr = "[object Uint32Array]", Dd = /\b__p \+= '';/g, $d = /\b(__p \+=) '' \+/g, Fd = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Ra = /&(?:amp|lt|gt|quot|#39);/g, Pa = /[&<>"']/g, Bd = RegExp(Ra.source), Wd = RegExp(Pa.source), Md = /<%-([\s\S]+?)%>/g, qd = /<%([\s\S]+?)%>/g, Oa = /<%=([\s\S]+?)%>/g, Nd = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ud = /^\w*$/, zd = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Hr = /[\\^$.*+?()[\]{}|]/g, Gd = RegExp(Hr.source), Vr = /^\s+/, Hd = /\s/, Vd = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Kd = /\{\n\/\* \[wrapped with (.+)\] \*/, Yd = /,? & /, Zd = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Qd = /[()=,{}\[\]\/\s]/, Xd = /\\(\\)?/g, Jd = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Da = /\w*$/, jd = /^[-+]0x[0-9a-f]+$/i, tu = /^0b[01]+$/i, eu = /^\[object .+?Constructor\]$/, iu = /^0o[0-7]+$/i, nu = /^(?:0|[1-9]\d*)$/, ru = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Pn = /($^)/, su = /['\n\r\u2028\u2029\\]/g, On = "\\ud800-\\udfff", au = "\\u0300-\\u036f", ou = "\\ufe20-\\ufe2f", lu = "\\u20d0-\\u20ff", $a = au + ou + lu, Fa = "\\u2700-\\u27bf", Ba = "a-z\\xdf-\\xf6\\xf8-\\xff", cu = "\\xac\\xb1\\xd7\\xf7", du = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", uu = "\\u2000-\\u206f", hu = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Wa = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ma = "\\ufe0e\\ufe0f", qa = cu + du + uu + hu, Kr = "['\u2019]", fu = "[" + On + "]", Na = "[" + qa + "]", Dn = "[" + $a + "]", Ua = "\\d+", pu = "[" + Fa + "]", za = "[" + Ba + "]", Ga = "[^" + On + qa + Ua + Fa + Ba + Wa + "]", Yr = "\\ud83c[\\udffb-\\udfff]", gu = "(?:" + Dn + "|" + Yr + ")", Ha = "[^" + On + "]", Zr = "(?:\\ud83c[\\udde6-\\uddff]){2}", Qr = "[\\ud800-\\udbff][\\udc00-\\udfff]", fi = "[" + Wa + "]", Va = "\\u200d", Ka = "(?:" + za + "|" + Ga + ")", mu = "(?:" + fi + "|" + Ga + ")", Ya = "(?:" + Kr + "(?:d|ll|m|re|s|t|ve))?", Za = "(?:" + Kr + "(?:D|LL|M|RE|S|T|VE))?", Qa = gu + "?", Xa = "[" + Ma + "]?", vu = "(?:" + Va + "(?:" + [Ha, Zr, Qr].join("|") + ")" + Xa + Qa + ")*", yu = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", _u = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ja = Xa + Qa + vu, bu = "(?:" + [pu, Zr, Qr].join("|") + ")" + Ja, wu = "(?:" + [Ha + Dn + "?", Dn, Zr, Qr, fu].join("|") + ")", Eu = RegExp(Kr, "g"), xu = RegExp(Dn, "g"), Xr = RegExp(Yr + "(?=" + Yr + ")|" + wu + Ja, "g"), Su = RegExp([fi + "?" + za + "+" + Ya + "(?=" + [Na, fi, "$"].join("|") + ")", mu + "+" + Za + "(?=" + [Na, fi + Ka, "$"].join("|") + ")", fi + "?" + Ka + "+" + Ya, fi + "+" + Za, _u, yu, Ua, bu].join("|"), "g"), Cu = RegExp("[" + Va + On + $a + Ma + "]"), Au = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Lu = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], ku = -1, ut = {};
        ut[Fr] = ut[Br] = ut[Wr] = ut[Mr] = ut[qr] = ut[Nr] = ut[Ur] = ut[zr] = ut[Gr] = !0,
        ut[ui] = ut[kn] = ut[Gi] = ut[Wi] = ut[hi] = ut[Mi] = ut[In] = ut[Tn] = ut[ee] = ut[qi] = ut[ve] = ut[Ni] = ut[ie] = ut[Ui] = ut[zi] = !1;
        var dt = {};
        dt[ui] = dt[kn] = dt[Gi] = dt[hi] = dt[Wi] = dt[Mi] = dt[Fr] = dt[Br] = dt[Wr] = dt[Mr] = dt[qr] = dt[ee] = dt[qi] = dt[ve] = dt[Ni] = dt[ie] = dt[Ui] = dt[Rn] = dt[Nr] = dt[Ur] = dt[zr] = dt[Gr] = !0,
        dt[In] = dt[Tn] = dt[zi] = !1;
        var Iu = {
            \u00C0: "A",
            \u00C1: "A",
            \u00C2: "A",
            \u00C3: "A",
            \u00C4: "A",
            \u00C5: "A",
            \u00E0: "a",
            \u00E1: "a",
            \u00E2: "a",
            \u00E3: "a",
            \u00E4: "a",
            \u00E5: "a",
            \u00C7: "C",
            \u00E7: "c",
            \u00D0: "D",
            \u00F0: "d",
            \u00C8: "E",
            \u00C9: "E",
            \u00CA: "E",
            \u00CB: "E",
            \u00E8: "e",
            \u00E9: "e",
            \u00EA: "e",
            \u00EB: "e",
            \u00CC: "I",
            \u00CD: "I",
            \u00CE: "I",
            \u00CF: "I",
            \u00EC: "i",
            \u00ED: "i",
            \u00EE: "i",
            \u00EF: "i",
            \u00D1: "N",
            \u00F1: "n",
            \u00D2: "O",
            \u00D3: "O",
            \u00D4: "O",
            \u00D5: "O",
            \u00D6: "O",
            \u00D8: "O",
            \u00F2: "o",
            \u00F3: "o",
            \u00F4: "o",
            \u00F5: "o",
            \u00F6: "o",
            \u00F8: "o",
            \u00D9: "U",
            \u00DA: "U",
            \u00DB: "U",
            \u00DC: "U",
            \u00F9: "u",
            \u00FA: "u",
            \u00FB: "u",
            \u00FC: "u",
            \u00DD: "Y",
            \u00FD: "y",
            \u00FF: "y",
            \u00C6: "Ae",
            \u00E6: "ae",
            \u00DE: "Th",
            \u00FE: "th",
            \u00DF: "ss",
            \u0100: "A",
            \u0102: "A",
            \u0104: "A",
            \u0101: "a",
            \u0103: "a",
            \u0105: "a",
            \u0106: "C",
            \u0108: "C",
            \u010A: "C",
            \u010C: "C",
            \u0107: "c",
            \u0109: "c",
            \u010B: "c",
            \u010D: "c",
            \u010E: "D",
            \u0110: "D",
            \u010F: "d",
            \u0111: "d",
            \u0112: "E",
            \u0114: "E",
            \u0116: "E",
            \u0118: "E",
            \u011A: "E",
            \u0113: "e",
            \u0115: "e",
            \u0117: "e",
            \u0119: "e",
            \u011B: "e",
            \u011C: "G",
            \u011E: "G",
            \u0120: "G",
            \u0122: "G",
            \u011D: "g",
            \u011F: "g",
            \u0121: "g",
            \u0123: "g",
            \u0124: "H",
            \u0126: "H",
            \u0125: "h",
            \u0127: "h",
            \u0128: "I",
            \u012A: "I",
            \u012C: "I",
            \u012E: "I",
            \u0130: "I",
            \u0129: "i",
            \u012B: "i",
            \u012D: "i",
            \u012F: "i",
            \u0131: "i",
            \u0134: "J",
            \u0135: "j",
            \u0136: "K",
            \u0137: "k",
            \u0138: "k",
            \u0139: "L",
            \u013B: "L",
            \u013D: "L",
            \u013F: "L",
            \u0141: "L",
            \u013A: "l",
            \u013C: "l",
            \u013E: "l",
            \u0140: "l",
            \u0142: "l",
            \u0143: "N",
            \u0145: "N",
            \u0147: "N",
            \u014A: "N",
            \u0144: "n",
            \u0146: "n",
            \u0148: "n",
            \u014B: "n",
            \u014C: "O",
            \u014E: "O",
            \u0150: "O",
            \u014D: "o",
            \u014F: "o",
            \u0151: "o",
            \u0154: "R",
            \u0156: "R",
            \u0158: "R",
            \u0155: "r",
            \u0157: "r",
            \u0159: "r",
            \u015A: "S",
            \u015C: "S",
            \u015E: "S",
            \u0160: "S",
            \u015B: "s",
            \u015D: "s",
            \u015F: "s",
            \u0161: "s",
            \u0162: "T",
            \u0164: "T",
            \u0166: "T",
            \u0163: "t",
            \u0165: "t",
            \u0167: "t",
            \u0168: "U",
            \u016A: "U",
            \u016C: "U",
            \u016E: "U",
            \u0170: "U",
            \u0172: "U",
            \u0169: "u",
            \u016B: "u",
            \u016D: "u",
            \u016F: "u",
            \u0171: "u",
            \u0173: "u",
            \u0174: "W",
            \u0175: "w",
            \u0176: "Y",
            \u0177: "y",
            \u0178: "Y",
            \u0179: "Z",
            \u017B: "Z",
            \u017D: "Z",
            \u017A: "z",
            \u017C: "z",
            \u017E: "z",
            \u0132: "IJ",
            \u0133: "ij",
            \u0152: "Oe",
            \u0153: "oe",
            \u0149: "'n",
            \u017F: "s"
        }
          , Tu = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }
          , Ru = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'"
        }
          , Pu = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }
          , Ou = parseFloat
          , Du = parseInt
          , ja = typeof Pi == "object" && Pi && Pi.Object === Object && Pi
          , $u = typeof self == "object" && self && self.Object === Object && self
          , wt = ja || $u || Function("return this")()
          , Jr = i && !i.nodeType && i
          , Qe = Jr && !0 && o && !o.nodeType && o
          , to = Qe && Qe.exports === Jr
          , jr = to && ja.process
          , Gt = function() {
            try {
                var _ = Qe && Qe.require && Qe.require("util").types;
                return _ || jr && jr.binding && jr.binding("util")
            } catch {}
        }()
          , eo = Gt && Gt.isArrayBuffer
          , io = Gt && Gt.isDate
          , no = Gt && Gt.isMap
          , ro = Gt && Gt.isRegExp
          , so = Gt && Gt.isSet
          , ao = Gt && Gt.isTypedArray;
        function Wt(_, x, E) {
            switch (E.length) {
            case 0:
                return _.call(x);
            case 1:
                return _.call(x, E[0]);
            case 2:
                return _.call(x, E[0], E[1]);
            case 3:
                return _.call(x, E[0], E[1], E[2])
            }
            return _.apply(x, E)
        }
        function Fu(_, x, E, W) {
            for (var Y = -1, st = _ == null ? 0 : _.length; ++Y < st; ) {
                var vt = _[Y];
                x(W, vt, E(vt), _)
            }
            return W
        }
        function Ht(_, x) {
            for (var E = -1, W = _ == null ? 0 : _.length; ++E < W && x(_[E], E, _) !== !1; )
                ;
            return _
        }
        function Bu(_, x) {
            for (var E = _ == null ? 0 : _.length; E-- && x(_[E], E, _) !== !1; )
                ;
            return _
        }
        function oo(_, x) {
            for (var E = -1, W = _ == null ? 0 : _.length; ++E < W; )
                if (!x(_[E], E, _))
                    return !1;
            return !0
        }
        function Oe(_, x) {
            for (var E = -1, W = _ == null ? 0 : _.length, Y = 0, st = []; ++E < W; ) {
                var vt = _[E];
                x(vt, E, _) && (st[Y++] = vt)
            }
            return st
        }
        function $n(_, x) {
            var E = _ == null ? 0 : _.length;
            return !!E && pi(_, x, 0) > -1
        }
        function ts(_, x, E) {
            for (var W = -1, Y = _ == null ? 0 : _.length; ++W < Y; )
                if (E(x, _[W]))
                    return !0;
            return !1
        }
        function ht(_, x) {
            for (var E = -1, W = _ == null ? 0 : _.length, Y = Array(W); ++E < W; )
                Y[E] = x(_[E], E, _);
            return Y
        }
        function De(_, x) {
            for (var E = -1, W = x.length, Y = _.length; ++E < W; )
                _[Y + E] = x[E];
            return _
        }
        function es(_, x, E, W) {
            var Y = -1
              , st = _ == null ? 0 : _.length;
            for (W && st && (E = _[++Y]); ++Y < st; )
                E = x(E, _[Y], Y, _);
            return E
        }
        function Wu(_, x, E, W) {
            var Y = _ == null ? 0 : _.length;
            for (W && Y && (E = _[--Y]); Y--; )
                E = x(E, _[Y], Y, _);
            return E
        }
        function is(_, x) {
            for (var E = -1, W = _ == null ? 0 : _.length; ++E < W; )
                if (x(_[E], E, _))
                    return !0;
            return !1
        }
        var Mu = ns("length");
        function qu(_) {
            return _.split("")
        }
        function Nu(_) {
            return _.match(Zd) || []
        }
        function lo(_, x, E) {
            var W;
            return E(_, function(Y, st, vt) {
                if (x(Y, st, vt))
                    return W = st,
                    !1
            }),
            W
        }
        function Fn(_, x, E, W) {
            for (var Y = _.length, st = E + (W ? 1 : -1); W ? st-- : ++st < Y; )
                if (x(_[st], st, _))
                    return st;
            return -1
        }
        function pi(_, x, E) {
            return x === x ? ju(_, x, E) : Fn(_, co, E)
        }
        function Uu(_, x, E, W) {
            for (var Y = E - 1, st = _.length; ++Y < st; )
                if (W(_[Y], x))
                    return Y;
            return -1
        }
        function co(_) {
            return _ !== _
        }
        function uo(_, x) {
            var E = _ == null ? 0 : _.length;
            return E ? ss(_, x) / E : Ln
        }
        function ns(_) {
            return function(x) {
                return x == null ? n : x[_]
            }
        }
        function rs(_) {
            return function(x) {
                return _ == null ? n : _[x]
            }
        }
        function ho(_, x, E, W, Y) {
            return Y(_, function(st, vt, lt) {
                E = W ? (W = !1,
                st) : x(E, st, vt, lt)
            }),
            E
        }
        function zu(_, x) {
            var E = _.length;
            for (_.sort(x); E--; )
                _[E] = _[E].value;
            return _
        }
        function ss(_, x) {
            for (var E, W = -1, Y = _.length; ++W < Y; ) {
                var st = x(_[W]);
                st !== n && (E = E === n ? st : E + st)
            }
            return E
        }
        function as(_, x) {
            for (var E = -1, W = Array(_); ++E < _; )
                W[E] = x(E);
            return W
        }
        function Gu(_, x) {
            return ht(x, function(E) {
                return [E, _[E]]
            })
        }
        function fo(_) {
            return _ && _.slice(0, vo(_) + 1).replace(Vr, "")
        }
        function Mt(_) {
            return function(x) {
                return _(x)
            }
        }
        function os(_, x) {
            return ht(x, function(E) {
                return _[E]
            })
        }
        function Hi(_, x) {
            return _.has(x)
        }
        function po(_, x) {
            for (var E = -1, W = _.length; ++E < W && pi(x, _[E], 0) > -1; )
                ;
            return E
        }
        function go(_, x) {
            for (var E = _.length; E-- && pi(x, _[E], 0) > -1; )
                ;
            return E
        }
        function Hu(_, x) {
            for (var E = _.length, W = 0; E--; )
                _[E] === x && ++W;
            return W
        }
        var Vu = rs(Iu)
          , Ku = rs(Tu);
        function Yu(_) {
            return "\\" + Pu[_]
        }
        function Zu(_, x) {
            return _ == null ? n : _[x]
        }
        function gi(_) {
            return Cu.test(_)
        }
        function Qu(_) {
            return Au.test(_)
        }
        function Xu(_) {
            for (var x, E = []; !(x = _.next()).done; )
                E.push(x.value);
            return E
        }
        function ls(_) {
            var x = -1
              , E = Array(_.size);
            return _.forEach(function(W, Y) {
                E[++x] = [Y, W]
            }),
            E
        }
        function mo(_, x) {
            return function(E) {
                return _(x(E))
            }
        }
        function $e(_, x) {
            for (var E = -1, W = _.length, Y = 0, st = []; ++E < W; ) {
                var vt = _[E];
                (vt === x || vt === U) && (_[E] = U,
                st[Y++] = E)
            }
            return st
        }
        function Bn(_) {
            var x = -1
              , E = Array(_.size);
            return _.forEach(function(W) {
                E[++x] = W
            }),
            E
        }
        function Ju(_) {
            var x = -1
              , E = Array(_.size);
            return _.forEach(function(W) {
                E[++x] = [W, W]
            }),
            E
        }
        function ju(_, x, E) {
            for (var W = E - 1, Y = _.length; ++W < Y; )
                if (_[W] === x)
                    return W;
            return -1
        }
        function th(_, x, E) {
            for (var W = E + 1; W--; )
                if (_[W] === x)
                    return W;
            return W
        }
        function mi(_) {
            return gi(_) ? ih(_) : Mu(_)
        }
        function ne(_) {
            return gi(_) ? nh(_) : qu(_)
        }
        function vo(_) {
            for (var x = _.length; x-- && Hd.test(_.charAt(x)); )
                ;
            return x
        }
        var eh = rs(Ru);
        function ih(_) {
            for (var x = Xr.lastIndex = 0; Xr.test(_); )
                ++x;
            return x
        }
        function nh(_) {
            return _.match(Xr) || []
        }
        function rh(_) {
            return _.match(Su) || []
        }
        var sh = function _(x) {
            x = x == null ? wt : vi.defaults(wt.Object(), x, vi.pick(wt, Lu));
            var E = x.Array
              , W = x.Date
              , Y = x.Error
              , st = x.Function
              , vt = x.Math
              , lt = x.Object
              , cs = x.RegExp
              , ah = x.String
              , Vt = x.TypeError
              , Wn = E.prototype
              , oh = st.prototype
              , yi = lt.prototype
              , Mn = x["__core-js_shared__"]
              , qn = oh.toString
              , ot = yi.hasOwnProperty
              , lh = 0
              , yo = function() {
                var t = /[^.]+$/.exec(Mn && Mn.keys && Mn.keys.IE_PROTO || "");
                return t ? "Symbol(src)_1." + t : ""
            }()
              , Nn = yi.toString
              , ch = qn.call(lt)
              , dh = wt._
              , uh = cs("^" + qn.call(ot).replace(Hr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
              , Un = to ? x.Buffer : n
              , Fe = x.Symbol
              , zn = x.Uint8Array
              , _o = Un ? Un.allocUnsafe : n
              , Gn = mo(lt.getPrototypeOf, lt)
              , bo = lt.create
              , wo = yi.propertyIsEnumerable
              , Hn = Wn.splice
              , Eo = Fe ? Fe.isConcatSpreadable : n
              , Vi = Fe ? Fe.iterator : n
              , Xe = Fe ? Fe.toStringTag : n
              , Vn = function() {
                try {
                    var t = ii(lt, "defineProperty");
                    return t({}, "", {}),
                    t
                } catch {}
            }()
              , hh = x.clearTimeout !== wt.clearTimeout && x.clearTimeout
              , fh = W && W.now !== wt.Date.now && W.now
              , ph = x.setTimeout !== wt.setTimeout && x.setTimeout
              , Kn = vt.ceil
              , Yn = vt.floor
              , ds = lt.getOwnPropertySymbols
              , gh = Un ? Un.isBuffer : n
              , xo = x.isFinite
              , mh = Wn.join
              , vh = mo(lt.keys, lt)
              , yt = vt.max
              , St = vt.min
              , yh = W.now
              , _h = x.parseInt
              , So = vt.random
              , bh = Wn.reverse
              , us = ii(x, "DataView")
              , Ki = ii(x, "Map")
              , hs = ii(x, "Promise")
              , _i = ii(x, "Set")
              , Yi = ii(x, "WeakMap")
              , Zi = ii(lt, "create")
              , Zn = Yi && new Yi
              , bi = {}
              , wh = ni(us)
              , Eh = ni(Ki)
              , xh = ni(hs)
              , Sh = ni(_i)
              , Ch = ni(Yi)
              , Qn = Fe ? Fe.prototype : n
              , Qi = Qn ? Qn.valueOf : n
              , Co = Qn ? Qn.toString : n;
            function u(t) {
                if (pt(t) && !Z(t) && !(t instanceof it)) {
                    if (t instanceof Kt)
                        return t;
                    if (ot.call(t, "__wrapped__"))
                        return Al(t)
                }
                return new Kt(t)
            }
            var wi = function() {
                function t() {}
                return function(e) {
                    if (!ft(e))
                        return {};
                    if (bo)
                        return bo(e);
                    t.prototype = e;
                    var s = new t;
                    return t.prototype = n,
                    s
                }
            }();
            function Xn() {}
            function Kt(t, e) {
                this.__wrapped__ = t,
                this.__actions__ = [],
                this.__chain__ = !!e,
                this.__index__ = 0,
                this.__values__ = n
            }
            u.templateSettings = {
                escape: Md,
                evaluate: qd,
                interpolate: Oa,
                variable: "",
                imports: {
                    _: u
                }
            },
            u.prototype = Xn.prototype,
            u.prototype.constructor = u,
            Kt.prototype = wi(Xn.prototype),
            Kt.prototype.constructor = Kt;
            function it(t) {
                this.__wrapped__ = t,
                this.__actions__ = [],
                this.__dir__ = 1,
                this.__filtered__ = !1,
                this.__iteratees__ = [],
                this.__takeCount__ = ue,
                this.__views__ = []
            }
            function Ah() {
                var t = new it(this.__wrapped__);
                return t.__actions__ = Tt(this.__actions__),
                t.__dir__ = this.__dir__,
                t.__filtered__ = this.__filtered__,
                t.__iteratees__ = Tt(this.__iteratees__),
                t.__takeCount__ = this.__takeCount__,
                t.__views__ = Tt(this.__views__),
                t
            }
            function Lh() {
                if (this.__filtered__) {
                    var t = new it(this);
                    t.__dir__ = -1,
                    t.__filtered__ = !0
                } else
                    t = this.clone(),
                    t.__dir__ *= -1;
                return t
            }
            function kh() {
                var t = this.__wrapped__.value()
                  , e = this.__dir__
                  , s = Z(t)
                  , a = e < 0
                  , c = s ? t.length : 0
                  , h = Nf(0, c, this.__views__)
                  , p = h.start
                  , v = h.end
                  , b = v - p
                  , A = a ? v : p - 1
                  , k = this.__iteratees__
                  , P = k.length
                  , D = 0
                  , N = St(b, this.__takeCount__);
                if (!s || !a && c == b && N == b)
                    return Zo(t, this.__actions__);
                var H = [];
                t: for (; b-- && D < N; ) {
                    A += e;
                    for (var J = -1, V = t[A]; ++J < P; ) {
                        var et = k[J]
                          , nt = et.iteratee
                          , Ut = et.type
                          , It = nt(V);
                        if (Ut == Ed)
                            V = It;
                        else if (!It) {
                            if (Ut == An)
                                continue t;
                            break t
                        }
                    }
                    H[D++] = V
                }
                return H
            }
            it.prototype = wi(Xn.prototype),
            it.prototype.constructor = it;
            function Je(t) {
                var e = -1
                  , s = t == null ? 0 : t.length;
                for (this.clear(); ++e < s; ) {
                    var a = t[e];
                    this.set(a[0], a[1])
                }
            }
            function Ih() {
                this.__data__ = Zi ? Zi(null) : {},
                this.size = 0
            }
            function Th(t) {
                var e = this.has(t) && delete this.__data__[t];
                return this.size -= e ? 1 : 0,
                e
            }
            function Rh(t) {
                var e = this.__data__;
                if (Zi) {
                    var s = e[t];
                    return s === C ? n : s
                }
                return ot.call(e, t) ? e[t] : n
            }
            function Ph(t) {
                var e = this.__data__;
                return Zi ? e[t] !== n : ot.call(e, t)
            }
            function Oh(t, e) {
                var s = this.__data__;
                return this.size += this.has(t) ? 0 : 1,
                s[t] = Zi && e === n ? C : e,
                this
            }
            Je.prototype.clear = Ih,
            Je.prototype.delete = Th,
            Je.prototype.get = Rh,
            Je.prototype.has = Ph,
            Je.prototype.set = Oh;
            function ye(t) {
                var e = -1
                  , s = t == null ? 0 : t.length;
                for (this.clear(); ++e < s; ) {
                    var a = t[e];
                    this.set(a[0], a[1])
                }
            }
            function Dh() {
                this.__data__ = [],
                this.size = 0
            }
            function $h(t) {
                var e = this.__data__
                  , s = Jn(e, t);
                if (s < 0)
                    return !1;
                var a = e.length - 1;
                return s == a ? e.pop() : Hn.call(e, s, 1),
                --this.size,
                !0
            }
            function Fh(t) {
                var e = this.__data__
                  , s = Jn(e, t);
                return s < 0 ? n : e[s][1]
            }
            function Bh(t) {
                return Jn(this.__data__, t) > -1
            }
            function Wh(t, e) {
                var s = this.__data__
                  , a = Jn(s, t);
                return a < 0 ? (++this.size,
                s.push([t, e])) : s[a][1] = e,
                this
            }
            ye.prototype.clear = Dh,
            ye.prototype.delete = $h,
            ye.prototype.get = Fh,
            ye.prototype.has = Bh,
            ye.prototype.set = Wh;
            function _e(t) {
                var e = -1
                  , s = t == null ? 0 : t.length;
                for (this.clear(); ++e < s; ) {
                    var a = t[e];
                    this.set(a[0], a[1])
                }
            }
            function Mh() {
                this.size = 0,
                this.__data__ = {
                    hash: new Je,
                    map: new (Ki || ye),
                    string: new Je
                }
            }
            function qh(t) {
                var e = dr(this, t).delete(t);
                return this.size -= e ? 1 : 0,
                e
            }
            function Nh(t) {
                return dr(this, t).get(t)
            }
            function Uh(t) {
                return dr(this, t).has(t)
            }
            function zh(t, e) {
                var s = dr(this, t)
                  , a = s.size;
                return s.set(t, e),
                this.size += s.size == a ? 0 : 1,
                this
            }
            _e.prototype.clear = Mh,
            _e.prototype.delete = qh,
            _e.prototype.get = Nh,
            _e.prototype.has = Uh,
            _e.prototype.set = zh;
            function je(t) {
                var e = -1
                  , s = t == null ? 0 : t.length;
                for (this.__data__ = new _e; ++e < s; )
                    this.add(t[e])
            }
            function Gh(t) {
                return this.__data__.set(t, C),
                this
            }
            function Hh(t) {
                return this.__data__.has(t)
            }
            je.prototype.add = je.prototype.push = Gh,
            je.prototype.has = Hh;
            function re(t) {
                var e = this.__data__ = new ye(t);
                this.size = e.size
            }
            function Vh() {
                this.__data__ = new ye,
                this.size = 0
            }
            function Kh(t) {
                var e = this.__data__
                  , s = e.delete(t);
                return this.size = e.size,
                s
            }
            function Yh(t) {
                return this.__data__.get(t)
            }
            function Zh(t) {
                return this.__data__.has(t)
            }
            function Qh(t, e) {
                var s = this.__data__;
                if (s instanceof ye) {
                    var a = s.__data__;
                    if (!Ki || a.length < l - 1)
                        return a.push([t, e]),
                        this.size = ++s.size,
                        this;
                    s = this.__data__ = new _e(a)
                }
                return s.set(t, e),
                this.size = s.size,
                this
            }
            re.prototype.clear = Vh,
            re.prototype.delete = Kh,
            re.prototype.get = Yh,
            re.prototype.has = Zh,
            re.prototype.set = Qh;
            function Ao(t, e) {
                var s = Z(t)
                  , a = !s && ri(t)
                  , c = !s && !a && Ne(t)
                  , h = !s && !a && !c && Ci(t)
                  , p = s || a || c || h
                  , v = p ? as(t.length, ah) : []
                  , b = v.length;
                for (var A in t)
                    (e || ot.call(t, A)) && !(p && (A == "length" || c && (A == "offset" || A == "parent") || h && (A == "buffer" || A == "byteLength" || A == "byteOffset") || xe(A, b))) && v.push(A);
                return v
            }
            function Lo(t) {
                var e = t.length;
                return e ? t[xs(0, e - 1)] : n
            }
            function Xh(t, e) {
                return ur(Tt(t), ti(e, 0, t.length))
            }
            function Jh(t) {
                return ur(Tt(t))
            }
            function fs(t, e, s) {
                (s !== n && !se(t[e], s) || s === n && !(e in t)) && be(t, e, s)
            }
            function Xi(t, e, s) {
                var a = t[e];
                (!(ot.call(t, e) && se(a, s)) || s === n && !(e in t)) && be(t, e, s)
            }
            function Jn(t, e) {
                for (var s = t.length; s--; )
                    if (se(t[s][0], e))
                        return s;
                return -1
            }
            function jh(t, e, s, a) {
                return Be(t, function(c, h, p) {
                    e(a, c, s(c), p)
                }),
                a
            }
            function ko(t, e) {
                return t && fe(e, _t(e), t)
            }
            function tf(t, e) {
                return t && fe(e, Pt(e), t)
            }
            function be(t, e, s) {
                e == "__proto__" && Vn ? Vn(t, e, {
                    configurable: !0,
                    enumerable: !0,
                    value: s,
                    writable: !0
                }) : t[e] = s
            }
            function ps(t, e) {
                for (var s = -1, a = e.length, c = E(a), h = t == null; ++s < a; )
                    c[s] = h ? n : Ys(t, e[s]);
                return c
            }
            function ti(t, e, s) {
                return t === t && (s !== n && (t = t <= s ? t : s),
                e !== n && (t = t >= e ? t : e)),
                t
            }
            function Yt(t, e, s, a, c, h) {
                var p, v = e & B, b = e & L, A = e & R;
                if (s && (p = c ? s(t, a, c, h) : s(t)),
                p !== n)
                    return p;
                if (!ft(t))
                    return t;
                var k = Z(t);
                if (k) {
                    if (p = zf(t),
                    !v)
                        return Tt(t, p)
                } else {
                    var P = Ct(t)
                      , D = P == Tn || P == Ia;
                    if (Ne(t))
                        return Jo(t, v);
                    if (P == ve || P == ui || D && !c) {
                        if (p = b || D ? {} : vl(t),
                        !v)
                            return b ? Pf(t, tf(p, t)) : Rf(t, ko(p, t))
                    } else {
                        if (!dt[P])
                            return c ? t : {};
                        p = Gf(t, P, v)
                    }
                }
                h || (h = new re);
                var N = h.get(t);
                if (N)
                    return N;
                h.set(t, p),
                Vl(t) ? t.forEach(function(V) {
                    p.add(Yt(V, e, s, V, t, h))
                }) : Gl(t) && t.forEach(function(V, et) {
                    p.set(et, Yt(V, e, s, et, t, h))
                });
                var H = A ? b ? Ds : Os : b ? Pt : _t
                  , J = k ? n : H(t);
                return Ht(J || t, function(V, et) {
                    J && (et = V,
                    V = t[et]),
                    Xi(p, et, Yt(V, e, s, et, t, h))
                }),
                p
            }
            function ef(t) {
                var e = _t(t);
                return function(s) {
                    return Io(s, t, e)
                }
            }
            function Io(t, e, s) {
                var a = s.length;
                if (t == null)
                    return !a;
                for (t = lt(t); a--; ) {
                    var c = s[a]
                      , h = e[c]
                      , p = t[c];
                    if (p === n && !(c in t) || !h(p))
                        return !1
                }
                return !0
            }
            function To(t, e, s) {
                if (typeof t != "function")
                    throw new Vt(f);
                return sn(function() {
                    t.apply(n, s)
                }, e)
            }
            function Ji(t, e, s, a) {
                var c = -1
                  , h = $n
                  , p = !0
                  , v = t.length
                  , b = []
                  , A = e.length;
                if (!v)
                    return b;
                s && (e = ht(e, Mt(s))),
                a ? (h = ts,
                p = !1) : e.length >= l && (h = Hi,
                p = !1,
                e = new je(e));
                t: for (; ++c < v; ) {
                    var k = t[c]
                      , P = s == null ? k : s(k);
                    if (k = a || k !== 0 ? k : 0,
                    p && P === P) {
                        for (var D = A; D--; )
                            if (e[D] === P)
                                continue t;
                        b.push(k)
                    } else
                        h(e, P, a) || b.push(k)
                }
                return b
            }
            var Be = nl(he)
              , Ro = nl(ms, !0);
            function nf(t, e) {
                var s = !0;
                return Be(t, function(a, c, h) {
                    return s = !!e(a, c, h),
                    s
                }),
                s
            }
            function jn(t, e, s) {
                for (var a = -1, c = t.length; ++a < c; ) {
                    var h = t[a]
                      , p = e(h);
                    if (p != null && (v === n ? p === p && !Nt(p) : s(p, v)))
                        var v = p
                          , b = h
                }
                return b
            }
            function rf(t, e, s, a) {
                var c = t.length;
                for (s = X(s),
                s < 0 && (s = -s > c ? 0 : c + s),
                a = a === n || a > c ? c : X(a),
                a < 0 && (a += c),
                a = s > a ? 0 : Yl(a); s < a; )
                    t[s++] = e;
                return t
            }
            function Po(t, e) {
                var s = [];
                return Be(t, function(a, c, h) {
                    e(a, c, h) && s.push(a)
                }),
                s
            }
            function Et(t, e, s, a, c) {
                var h = -1
                  , p = t.length;
                for (s || (s = Vf),
                c || (c = []); ++h < p; ) {
                    var v = t[h];
                    e > 0 && s(v) ? e > 1 ? Et(v, e - 1, s, a, c) : De(c, v) : a || (c[c.length] = v)
                }
                return c
            }
            var gs = rl()
              , Oo = rl(!0);
            function he(t, e) {
                return t && gs(t, e, _t)
            }
            function ms(t, e) {
                return t && Oo(t, e, _t)
            }
            function tr(t, e) {
                return Oe(e, function(s) {
                    return Se(t[s])
                })
            }
            function ei(t, e) {
                e = Me(e, t);
                for (var s = 0, a = e.length; t != null && s < a; )
                    t = t[pe(e[s++])];
                return s && s == a ? t : n
            }
            function Do(t, e, s) {
                var a = e(t);
                return Z(t) ? a : De(a, s(t))
            }
            function Lt(t) {
                return t == null ? t === n ? Pd : Td : Xe && Xe in lt(t) ? qf(t) : jf(t)
            }
            function vs(t, e) {
                return t > e
            }
            function sf(t, e) {
                return t != null && ot.call(t, e)
            }
            function af(t, e) {
                return t != null && e in lt(t)
            }
            function of(t, e, s) {
                return t >= St(e, s) && t < yt(e, s)
            }
            function ys(t, e, s) {
                for (var a = s ? ts : $n, c = t[0].length, h = t.length, p = h, v = E(h), b = 1 / 0, A = []; p--; ) {
                    var k = t[p];
                    p && e && (k = ht(k, Mt(e))),
                    b = St(k.length, b),
                    v[p] = !s && (e || c >= 120 && k.length >= 120) ? new je(p && k) : n
                }
                k = t[0];
                var P = -1
                  , D = v[0];
                t: for (; ++P < c && A.length < b; ) {
                    var N = k[P]
                      , H = e ? e(N) : N;
                    if (N = s || N !== 0 ? N : 0,
                    !(D ? Hi(D, H) : a(A, H, s))) {
                        for (p = h; --p; ) {
                            var J = v[p];
                            if (!(J ? Hi(J, H) : a(t[p], H, s)))
                                continue t
                        }
                        D && D.push(H),
                        A.push(N)
                    }
                }
                return A
            }
            function lf(t, e, s, a) {
                return he(t, function(c, h, p) {
                    e(a, s(c), h, p)
                }),
                a
            }
            function ji(t, e, s) {
                e = Me(e, t),
                t = wl(t, e);
                var a = t == null ? t : t[pe(Qt(e))];
                return a == null ? n : Wt(a, t, s)
            }
            function $o(t) {
                return pt(t) && Lt(t) == ui
            }
            function cf(t) {
                return pt(t) && Lt(t) == Gi
            }
            function df(t) {
                return pt(t) && Lt(t) == Mi
            }
            function tn(t, e, s, a, c) {
                return t === e ? !0 : t == null || e == null || !pt(t) && !pt(e) ? t !== t && e !== e : uf(t, e, s, a, tn, c)
            }
            function uf(t, e, s, a, c, h) {
                var p = Z(t)
                  , v = Z(e)
                  , b = p ? kn : Ct(t)
                  , A = v ? kn : Ct(e);
                b = b == ui ? ve : b,
                A = A == ui ? ve : A;
                var k = b == ve
                  , P = A == ve
                  , D = b == A;
                if (D && Ne(t)) {
                    if (!Ne(e))
                        return !1;
                    p = !0,
                    k = !1
                }
                if (D && !k)
                    return h || (h = new re),
                    p || Ci(t) ? pl(t, e, s, a, c, h) : Wf(t, e, b, s, a, c, h);
                if (!(s & z)) {
                    var N = k && ot.call(t, "__wrapped__")
                      , H = P && ot.call(e, "__wrapped__");
                    if (N || H) {
                        var J = N ? t.value() : t
                          , V = H ? e.value() : e;
                        return h || (h = new re),
                        c(J, V, s, a, h)
                    }
                }
                return D ? (h || (h = new re),
                Mf(t, e, s, a, c, h)) : !1
            }
            function hf(t) {
                return pt(t) && Ct(t) == ee
            }
            function _s(t, e, s, a) {
                var c = s.length
                  , h = c
                  , p = !a;
                if (t == null)
                    return !h;
                for (t = lt(t); c--; ) {
                    var v = s[c];
                    if (p && v[2] ? v[1] !== t[v[0]] : !(v[0]in t))
                        return !1
                }
                for (; ++c < h; ) {
                    v = s[c];
                    var b = v[0]
                      , A = t[b]
                      , k = v[1];
                    if (p && v[2]) {
                        if (A === n && !(b in t))
                            return !1
                    } else {
                        var P = new re;
                        if (a)
                            var D = a(A, k, b, t, e, P);
                        if (!(D === n ? tn(k, A, z | K, a, P) : D))
                            return !1
                    }
                }
                return !0
            }
            function Fo(t) {
                if (!ft(t) || Yf(t))
                    return !1;
                var e = Se(t) ? uh : eu;
                return e.test(ni(t))
            }
            function ff(t) {
                return pt(t) && Lt(t) == Ni
            }
            function pf(t) {
                return pt(t) && Ct(t) == ie
            }
            function gf(t) {
                return pt(t) && vr(t.length) && !!ut[Lt(t)]
            }
            function Bo(t) {
                return typeof t == "function" ? t : t == null ? Ot : typeof t == "object" ? Z(t) ? qo(t[0], t[1]) : Mo(t) : sc(t)
            }
            function bs(t) {
                if (!rn(t))
                    return vh(t);
                var e = [];
                for (var s in lt(t))
                    ot.call(t, s) && s != "constructor" && e.push(s);
                return e
            }
            function mf(t) {
                if (!ft(t))
                    return Jf(t);
                var e = rn(t)
                  , s = [];
                for (var a in t)
                    a == "constructor" && (e || !ot.call(t, a)) || s.push(a);
                return s
            }
            function ws(t, e) {
                return t < e
            }
            function Wo(t, e) {
                var s = -1
                  , a = Rt(t) ? E(t.length) : [];
                return Be(t, function(c, h, p) {
                    a[++s] = e(c, h, p)
                }),
                a
            }
            function Mo(t) {
                var e = Fs(t);
                return e.length == 1 && e[0][2] ? _l(e[0][0], e[0][1]) : function(s) {
                    return s === t || _s(s, t, e)
                }
            }
            function qo(t, e) {
                return Ws(t) && yl(e) ? _l(pe(t), e) : function(s) {
                    var a = Ys(s, t);
                    return a === n && a === e ? Zs(s, t) : tn(e, a, z | K)
                }
            }
            function er(t, e, s, a, c) {
                t !== e && gs(e, function(h, p) {
                    if (c || (c = new re),
                    ft(h))
                        vf(t, e, p, s, er, a, c);
                    else {
                        var v = a ? a(qs(t, p), h, p + "", t, e, c) : n;
                        v === n && (v = h),
                        fs(t, p, v)
                    }
                }, Pt)
            }
            function vf(t, e, s, a, c, h, p) {
                var v = qs(t, s)
                  , b = qs(e, s)
                  , A = p.get(b);
                if (A) {
                    fs(t, s, A);
                    return
                }
                var k = h ? h(v, b, s + "", t, e, p) : n
                  , P = k === n;
                if (P) {
                    var D = Z(b)
                      , N = !D && Ne(b)
                      , H = !D && !N && Ci(b);
                    k = b,
                    D || N || H ? Z(v) ? k = v : gt(v) ? k = Tt(v) : N ? (P = !1,
                    k = Jo(b, !0)) : H ? (P = !1,
                    k = jo(b, !0)) : k = [] : an(b) || ri(b) ? (k = v,
                    ri(v) ? k = Zl(v) : (!ft(v) || Se(v)) && (k = vl(b))) : P = !1
                }
                P && (p.set(b, k),
                c(k, b, a, h, p),
                p.delete(b)),
                fs(t, s, k)
            }
            function No(t, e) {
                var s = t.length;
                if (s)
                    return e += e < 0 ? s : 0,
                    xe(e, s) ? t[e] : n
            }
            function Uo(t, e, s) {
                e.length ? e = ht(e, function(h) {
                    return Z(h) ? function(p) {
                        return ei(p, h.length === 1 ? h[0] : h)
                    }
                    : h
                }) : e = [Ot];
                var a = -1;
                e = ht(e, Mt(G()));
                var c = Wo(t, function(h, p, v) {
                    var b = ht(e, function(A) {
                        return A(h)
                    });
                    return {
                        criteria: b,
                        index: ++a,
                        value: h
                    }
                });
                return zu(c, function(h, p) {
                    return Tf(h, p, s)
                })
            }
            function yf(t, e) {
                return zo(t, e, function(s, a) {
                    return Zs(t, a)
                })
            }
            function zo(t, e, s) {
                for (var a = -1, c = e.length, h = {}; ++a < c; ) {
                    var p = e[a]
                      , v = ei(t, p);
                    s(v, p) && en(h, Me(p, t), v)
                }
                return h
            }
            function _f(t) {
                return function(e) {
                    return ei(e, t)
                }
            }
            function Es(t, e, s, a) {
                var c = a ? Uu : pi
                  , h = -1
                  , p = e.length
                  , v = t;
                for (t === e && (e = Tt(e)),
                s && (v = ht(t, Mt(s))); ++h < p; )
                    for (var b = 0, A = e[h], k = s ? s(A) : A; (b = c(v, k, b, a)) > -1; )
                        v !== t && Hn.call(v, b, 1),
                        Hn.call(t, b, 1);
                return t
            }
            function Go(t, e) {
                for (var s = t ? e.length : 0, a = s - 1; s--; ) {
                    var c = e[s];
                    if (s == a || c !== h) {
                        var h = c;
                        xe(c) ? Hn.call(t, c, 1) : As(t, c)
                    }
                }
                return t
            }
            function xs(t, e) {
                return t + Yn(So() * (e - t + 1))
            }
            function bf(t, e, s, a) {
                for (var c = -1, h = yt(Kn((e - t) / (s || 1)), 0), p = E(h); h--; )
                    p[a ? h : ++c] = t,
                    t += s;
                return p
            }
            function Ss(t, e) {
                var s = "";
                if (!t || e < 1 || e > Pe)
                    return s;
                do
                    e % 2 && (s += t),
                    e = Yn(e / 2),
                    e && (t += t);
                while (e);
                return s
            }
            function j(t, e) {
                return Ns(bl(t, e, Ot), t + "")
            }
            function wf(t) {
                return Lo(Ai(t))
            }
            function Ef(t, e) {
                var s = Ai(t);
                return ur(s, ti(e, 0, s.length))
            }
            function en(t, e, s, a) {
                if (!ft(t))
                    return t;
                e = Me(e, t);
                for (var c = -1, h = e.length, p = h - 1, v = t; v != null && ++c < h; ) {
                    var b = pe(e[c])
                      , A = s;
                    if (b === "__proto__" || b === "constructor" || b === "prototype")
                        return t;
                    if (c != p) {
                        var k = v[b];
                        A = a ? a(k, b, v) : n,
                        A === n && (A = ft(k) ? k : xe(e[c + 1]) ? [] : {})
                    }
                    Xi(v, b, A),
                    v = v[b]
                }
                return t
            }
            var Ho = Zn ? function(t, e) {
                return Zn.set(t, e),
                t
            }
            : Ot
              , xf = Vn ? function(t, e) {
                return Vn(t, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: Xs(e),
                    writable: !0
                })
            }
            : Ot;
            function Sf(t) {
                return ur(Ai(t))
            }
            function Zt(t, e, s) {
                var a = -1
                  , c = t.length;
                e < 0 && (e = -e > c ? 0 : c + e),
                s = s > c ? c : s,
                s < 0 && (s += c),
                c = e > s ? 0 : s - e >>> 0,
                e >>>= 0;
                for (var h = E(c); ++a < c; )
                    h[a] = t[a + e];
                return h
            }
            function Cf(t, e) {
                var s;
                return Be(t, function(a, c, h) {
                    return s = e(a, c, h),
                    !s
                }),
                !!s
            }
            function ir(t, e, s) {
                var a = 0
                  , c = t == null ? a : t.length;
                if (typeof e == "number" && e === e && c <= Ad) {
                    for (; a < c; ) {
                        var h = a + c >>> 1
                          , p = t[h];
                        p !== null && !Nt(p) && (s ? p <= e : p < e) ? a = h + 1 : c = h
                    }
                    return c
                }
                return Cs(t, e, Ot, s)
            }
            function Cs(t, e, s, a) {
                var c = 0
                  , h = t == null ? 0 : t.length;
                if (h === 0)
                    return 0;
                e = s(e);
                for (var p = e !== e, v = e === null, b = Nt(e), A = e === n; c < h; ) {
                    var k = Yn((c + h) / 2)
                      , P = s(t[k])
                      , D = P !== n
                      , N = P === null
                      , H = P === P
                      , J = Nt(P);
                    if (p)
                        var V = a || H;
                    else
                        A ? V = H && (a || D) : v ? V = H && D && (a || !N) : b ? V = H && D && !N && (a || !J) : N || J ? V = !1 : V = a ? P <= e : P < e;
                    V ? c = k + 1 : h = k
                }
                return St(h, Cd)
            }
            function Vo(t, e) {
                for (var s = -1, a = t.length, c = 0, h = []; ++s < a; ) {
                    var p = t[s]
                      , v = e ? e(p) : p;
                    if (!s || !se(v, b)) {
                        var b = v;
                        h[c++] = p === 0 ? 0 : p
                    }
                }
                return h
            }
            function Ko(t) {
                return typeof t == "number" ? t : Nt(t) ? Ln : +t
            }
            function qt(t) {
                if (typeof t == "string")
                    return t;
                if (Z(t))
                    return ht(t, qt) + "";
                if (Nt(t))
                    return Co ? Co.call(t) : "";
                var e = t + "";
                return e == "0" && 1 / t == -Ze ? "-0" : e
            }
            function We(t, e, s) {
                var a = -1
                  , c = $n
                  , h = t.length
                  , p = !0
                  , v = []
                  , b = v;
                if (s)
                    p = !1,
                    c = ts;
                else if (h >= l) {
                    var A = e ? null : Ff(t);
                    if (A)
                        return Bn(A);
                    p = !1,
                    c = Hi,
                    b = new je
                } else
                    b = e ? [] : v;
                t: for (; ++a < h; ) {
                    var k = t[a]
                      , P = e ? e(k) : k;
                    if (k = s || k !== 0 ? k : 0,
                    p && P === P) {
                        for (var D = b.length; D--; )
                            if (b[D] === P)
                                continue t;
                        e && b.push(P),
                        v.push(k)
                    } else
                        c(b, P, s) || (b !== v && b.push(P),
                        v.push(k))
                }
                return v
            }
            function As(t, e) {
                return e = Me(e, t),
                t = wl(t, e),
                t == null || delete t[pe(Qt(e))]
            }
            function Yo(t, e, s, a) {
                return en(t, e, s(ei(t, e)), a)
            }
            function nr(t, e, s, a) {
                for (var c = t.length, h = a ? c : -1; (a ? h-- : ++h < c) && e(t[h], h, t); )
                    ;
                return s ? Zt(t, a ? 0 : h, a ? h + 1 : c) : Zt(t, a ? h + 1 : 0, a ? c : h)
            }
            function Zo(t, e) {
                var s = t;
                return s instanceof it && (s = s.value()),
                es(e, function(a, c) {
                    return c.func.apply(c.thisArg, De([a], c.args))
                }, s)
            }
            function Ls(t, e, s) {
                var a = t.length;
                if (a < 2)
                    return a ? We(t[0]) : [];
                for (var c = -1, h = E(a); ++c < a; )
                    for (var p = t[c], v = -1; ++v < a; )
                        v != c && (h[c] = Ji(h[c] || p, t[v], e, s));
                return We(Et(h, 1), e, s)
            }
            function Qo(t, e, s) {
                for (var a = -1, c = t.length, h = e.length, p = {}; ++a < c; ) {
                    var v = a < h ? e[a] : n;
                    s(p, t[a], v)
                }
                return p
            }
            function ks(t) {
                return gt(t) ? t : []
            }
            function Is(t) {
                return typeof t == "function" ? t : Ot
            }
            function Me(t, e) {
                return Z(t) ? t : Ws(t, e) ? [t] : Cl(at(t))
            }
            var Af = j;
            function qe(t, e, s) {
                var a = t.length;
                return s = s === n ? a : s,
                !e && s >= a ? t : Zt(t, e, s)
            }
            var Xo = hh || function(t) {
                return wt.clearTimeout(t)
            }
            ;
            function Jo(t, e) {
                if (e)
                    return t.slice();
                var s = t.length
                  , a = _o ? _o(s) : new t.constructor(s);
                return t.copy(a),
                a
            }
            function Ts(t) {
                var e = new t.constructor(t.byteLength);
                return new zn(e).set(new zn(t)),
                e
            }
            function Lf(t, e) {
                var s = e ? Ts(t.buffer) : t.buffer;
                return new t.constructor(s,t.byteOffset,t.byteLength)
            }
            function kf(t) {
                var e = new t.constructor(t.source,Da.exec(t));
                return e.lastIndex = t.lastIndex,
                e
            }
            function If(t) {
                return Qi ? lt(Qi.call(t)) : {}
            }
            function jo(t, e) {
                var s = e ? Ts(t.buffer) : t.buffer;
                return new t.constructor(s,t.byteOffset,t.length)
            }
            function tl(t, e) {
                if (t !== e) {
                    var s = t !== n
                      , a = t === null
                      , c = t === t
                      , h = Nt(t)
                      , p = e !== n
                      , v = e === null
                      , b = e === e
                      , A = Nt(e);
                    if (!v && !A && !h && t > e || h && p && b && !v && !A || a && p && b || !s && b || !c)
                        return 1;
                    if (!a && !h && !A && t < e || A && s && c && !a && !h || v && s && c || !p && c || !b)
                        return -1
                }
                return 0
            }
            function Tf(t, e, s) {
                for (var a = -1, c = t.criteria, h = e.criteria, p = c.length, v = s.length; ++a < p; ) {
                    var b = tl(c[a], h[a]);
                    if (b) {
                        if (a >= v)
                            return b;
                        var A = s[a];
                        return b * (A == "desc" ? -1 : 1)
                    }
                }
                return t.index - e.index
            }
            function el(t, e, s, a) {
                for (var c = -1, h = t.length, p = s.length, v = -1, b = e.length, A = yt(h - p, 0), k = E(b + A), P = !a; ++v < b; )
                    k[v] = e[v];
                for (; ++c < p; )
                    (P || c < h) && (k[s[c]] = t[c]);
                for (; A--; )
                    k[v++] = t[c++];
                return k
            }
            function il(t, e, s, a) {
                for (var c = -1, h = t.length, p = -1, v = s.length, b = -1, A = e.length, k = yt(h - v, 0), P = E(k + A), D = !a; ++c < k; )
                    P[c] = t[c];
                for (var N = c; ++b < A; )
                    P[N + b] = e[b];
                for (; ++p < v; )
                    (D || c < h) && (P[N + s[p]] = t[c++]);
                return P
            }
            function Tt(t, e) {
                var s = -1
                  , a = t.length;
                for (e || (e = E(a)); ++s < a; )
                    e[s] = t[s];
                return e
            }
            function fe(t, e, s, a) {
                var c = !s;
                s || (s = {});
                for (var h = -1, p = e.length; ++h < p; ) {
                    var v = e[h]
                      , b = a ? a(s[v], t[v], v, s, t) : n;
                    b === n && (b = t[v]),
                    c ? be(s, v, b) : Xi(s, v, b)
                }
                return s
            }
            function Rf(t, e) {
                return fe(t, Bs(t), e)
            }
            function Pf(t, e) {
                return fe(t, gl(t), e)
            }
            function rr(t, e) {
                return function(s, a) {
                    var c = Z(s) ? Fu : jh
                      , h = e ? e() : {};
                    return c(s, t, G(a, 2), h)
                }
            }
            function Ei(t) {
                return j(function(e, s) {
                    var a = -1
                      , c = s.length
                      , h = c > 1 ? s[c - 1] : n
                      , p = c > 2 ? s[2] : n;
                    for (h = t.length > 3 && typeof h == "function" ? (c--,
                    h) : n,
                    p && kt(s[0], s[1], p) && (h = c < 3 ? n : h,
                    c = 1),
                    e = lt(e); ++a < c; ) {
                        var v = s[a];
                        v && t(e, v, a, h)
                    }
                    return e
                })
            }
            function nl(t, e) {
                return function(s, a) {
                    if (s == null)
                        return s;
                    if (!Rt(s))
                        return t(s, a);
                    for (var c = s.length, h = e ? c : -1, p = lt(s); (e ? h-- : ++h < c) && a(p[h], h, p) !== !1; )
                        ;
                    return s
                }
            }
            function rl(t) {
                return function(e, s, a) {
                    for (var c = -1, h = lt(e), p = a(e), v = p.length; v--; ) {
                        var b = p[t ? v : ++c];
                        if (s(h[b], b, h) === !1)
                            break
                    }
                    return e
                }
            }
            function Of(t, e, s) {
                var a = e & q
                  , c = nn(t);
                function h() {
                    var p = this && this !== wt && this instanceof h ? c : t;
                    return p.apply(a ? s : this, arguments)
                }
                return h
            }
            function sl(t) {
                return function(e) {
                    e = at(e);
                    var s = gi(e) ? ne(e) : n
                      , a = s ? s[0] : e.charAt(0)
                      , c = s ? qe(s, 1).join("") : e.slice(1);
                    return a[t]() + c
                }
            }
            function xi(t) {
                return function(e) {
                    return es(nc(ic(e).replace(Eu, "")), t, "")
                }
            }
            function nn(t) {
                return function() {
                    var e = arguments;
                    switch (e.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(e[0]);
                    case 2:
                        return new t(e[0],e[1]);
                    case 3:
                        return new t(e[0],e[1],e[2]);
                    case 4:
                        return new t(e[0],e[1],e[2],e[3]);
                    case 5:
                        return new t(e[0],e[1],e[2],e[3],e[4]);
                    case 6:
                        return new t(e[0],e[1],e[2],e[3],e[4],e[5]);
                    case 7:
                        return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])
                    }
                    var s = wi(t.prototype)
                      , a = t.apply(s, e);
                    return ft(a) ? a : s
                }
            }
            function Df(t, e, s) {
                var a = nn(t);
                function c() {
                    for (var h = arguments.length, p = E(h), v = h, b = Si(c); v--; )
                        p[v] = arguments[v];
                    var A = h < 3 && p[0] !== b && p[h - 1] !== b ? [] : $e(p, b);
                    if (h -= A.length,
                    h < s)
                        return dl(t, e, sr, c.placeholder, n, p, A, n, n, s - h);
                    var k = this && this !== wt && this instanceof c ? a : t;
                    return Wt(k, this, p)
                }
                return c
            }
            function al(t) {
                return function(e, s, a) {
                    var c = lt(e);
                    if (!Rt(e)) {
                        var h = G(s, 3);
                        e = _t(e),
                        s = function(v) {
                            return h(c[v], v, c)
                        }
                    }
                    var p = t(e, s, a);
                    return p > -1 ? c[h ? e[p] : p] : n
                }
            }
            function ol(t) {
                return Ee(function(e) {
                    var s = e.length
                      , a = s
                      , c = Kt.prototype.thru;
                    for (t && e.reverse(); a--; ) {
                        var h = e[a];
                        if (typeof h != "function")
                            throw new Vt(f);
                        if (c && !p && cr(h) == "wrapper")
                            var p = new Kt([],!0)
                    }
                    for (a = p ? a : s; ++a < s; ) {
                        h = e[a];
                        var v = cr(h)
                          , b = v == "wrapper" ? $s(h) : n;
                        b && Ms(b[0]) && b[1] == (M | y | w | Q) && !b[4].length && b[9] == 1 ? p = p[cr(b[0])].apply(p, b[3]) : p = h.length == 1 && Ms(h) ? p[v]() : p.thru(h)
                    }
                    return function() {
                        var A = arguments
                          , k = A[0];
                        if (p && A.length == 1 && Z(k))
                            return p.plant(k).value();
                        for (var P = 0, D = s ? e[P].apply(this, A) : k; ++P < s; )
                            D = e[P].call(this, D);
                        return D
                    }
                })
            }
            function sr(t, e, s, a, c, h, p, v, b, A) {
                var k = e & M
                  , P = e & q
                  , D = e & T
                  , N = e & (y | m)
                  , H = e & rt
                  , J = D ? n : nn(t);
                function V() {
                    for (var et = arguments.length, nt = E(et), Ut = et; Ut--; )
                        nt[Ut] = arguments[Ut];
                    if (N)
                        var It = Si(V)
                          , zt = Hu(nt, It);
                    if (a && (nt = el(nt, a, c, N)),
                    h && (nt = il(nt, h, p, N)),
                    et -= zt,
                    N && et < A) {
                        var mt = $e(nt, It);
                        return dl(t, e, sr, V.placeholder, s, nt, mt, v, b, A - et)
                    }
                    var ae = P ? s : this
                      , Ae = D ? ae[t] : t;
                    return et = nt.length,
                    v ? nt = tp(nt, v) : H && et > 1 && nt.reverse(),
                    k && b < et && (nt.length = b),
                    this && this !== wt && this instanceof V && (Ae = J || nn(Ae)),
                    Ae.apply(ae, nt)
                }
                return V
            }
            function ll(t, e) {
                return function(s, a) {
                    return lf(s, t, e(a), {})
                }
            }
            function ar(t, e) {
                return function(s, a) {
                    var c;
                    if (s === n && a === n)
                        return e;
                    if (s !== n && (c = s),
                    a !== n) {
                        if (c === n)
                            return a;
                        typeof s == "string" || typeof a == "string" ? (s = qt(s),
                        a = qt(a)) : (s = Ko(s),
                        a = Ko(a)),
                        c = t(s, a)
                    }
                    return c
                }
            }
            function Rs(t) {
                return Ee(function(e) {
                    return e = ht(e, Mt(G())),
                    j(function(s) {
                        var a = this;
                        return t(e, function(c) {
                            return Wt(c, a, s)
                        })
                    })
                })
            }
            function or(t, e) {
                e = e === n ? " " : qt(e);
                var s = e.length;
                if (s < 2)
                    return s ? Ss(e, t) : e;
                var a = Ss(e, Kn(t / mi(e)));
                return gi(e) ? qe(ne(a), 0, t).join("") : a.slice(0, t)
            }
            function $f(t, e, s, a) {
                var c = e & q
                  , h = nn(t);
                function p() {
                    for (var v = -1, b = arguments.length, A = -1, k = a.length, P = E(k + b), D = this && this !== wt && this instanceof p ? h : t; ++A < k; )
                        P[A] = a[A];
                    for (; b--; )
                        P[A++] = arguments[++v];
                    return Wt(D, c ? s : this, P)
                }
                return p
            }
            function cl(t) {
                return function(e, s, a) {
                    return a && typeof a != "number" && kt(e, s, a) && (s = a = n),
                    e = Ce(e),
                    s === n ? (s = e,
                    e = 0) : s = Ce(s),
                    a = a === n ? e < s ? 1 : -1 : Ce(a),
                    bf(e, s, a, t)
                }
            }
            function lr(t) {
                return function(e, s) {
                    return typeof e == "string" && typeof s == "string" || (e = Xt(e),
                    s = Xt(s)),
                    t(e, s)
                }
            }
            function dl(t, e, s, a, c, h, p, v, b, A) {
                var k = e & y
                  , P = k ? p : n
                  , D = k ? n : p
                  , N = k ? h : n
                  , H = k ? n : h;
                e |= k ? w : O,
                e &= ~(k ? O : w),
                e & g || (e &= ~(q | T));
                var J = [t, e, c, N, P, H, D, v, b, A]
                  , V = s.apply(n, J);
                return Ms(t) && El(V, J),
                V.placeholder = a,
                xl(V, t, e)
            }
            function Ps(t) {
                var e = vt[t];
                return function(s, a) {
                    if (s = Xt(s),
                    a = a == null ? 0 : St(X(a), 292),
                    a && xo(s)) {
                        var c = (at(s) + "e").split("e")
                          , h = e(c[0] + "e" + (+c[1] + a));
                        return c = (at(h) + "e").split("e"),
                        +(c[0] + "e" + (+c[1] - a))
                    }
                    return e(s)
                }
            }
            var Ff = _i && 1 / Bn(new _i([, -0]))[1] == Ze ? function(t) {
                return new _i(t)
            }
            : ta;
            function ul(t) {
                return function(e) {
                    var s = Ct(e);
                    return s == ee ? ls(e) : s == ie ? Ju(e) : Gu(e, t(e))
                }
            }
            function we(t, e, s, a, c, h, p, v) {
                var b = e & T;
                if (!b && typeof t != "function")
                    throw new Vt(f);
                var A = a ? a.length : 0;
                if (A || (e &= ~(w | O),
                a = c = n),
                p = p === n ? p : yt(X(p), 0),
                v = v === n ? v : X(v),
                A -= c ? c.length : 0,
                e & O) {
                    var k = a
                      , P = c;
                    a = c = n
                }
                var D = b ? n : $s(t)
                  , N = [t, e, s, a, c, k, P, h, p, v];
                if (D && Xf(N, D),
                t = N[0],
                e = N[1],
                s = N[2],
                a = N[3],
                c = N[4],
                v = N[9] = N[9] === n ? b ? 0 : t.length : yt(N[9] - A, 0),
                !v && e & (y | m) && (e &= ~(y | m)),
                !e || e == q)
                    var H = Of(t, e, s);
                else
                    e == y || e == m ? H = Df(t, e, v) : (e == w || e == (q | w)) && !c.length ? H = $f(t, e, s, a) : H = sr.apply(n, N);
                var J = D ? Ho : El;
                return xl(J(H, N), t, e)
            }
            function hl(t, e, s, a) {
                return t === n || se(t, yi[s]) && !ot.call(a, s) ? e : t
            }
            function fl(t, e, s, a, c, h) {
                return ft(t) && ft(e) && (h.set(e, t),
                er(t, e, n, fl, h),
                h.delete(e)),
                t
            }
            function Bf(t) {
                return an(t) ? n : t
            }
            function pl(t, e, s, a, c, h) {
                var p = s & z
                  , v = t.length
                  , b = e.length;
                if (v != b && !(p && b > v))
                    return !1;
                var A = h.get(t)
                  , k = h.get(e);
                if (A && k)
                    return A == e && k == t;
                var P = -1
                  , D = !0
                  , N = s & K ? new je : n;
                for (h.set(t, e),
                h.set(e, t); ++P < v; ) {
                    var H = t[P]
                      , J = e[P];
                    if (a)
                        var V = p ? a(J, H, P, e, t, h) : a(H, J, P, t, e, h);
                    if (V !== n) {
                        if (V)
                            continue;
                        D = !1;
                        break
                    }
                    if (N) {
                        if (!is(e, function(et, nt) {
                            if (!Hi(N, nt) && (H === et || c(H, et, s, a, h)))
                                return N.push(nt)
                        })) {
                            D = !1;
                            break
                        }
                    } else if (!(H === J || c(H, J, s, a, h))) {
                        D = !1;
                        break
                    }
                }
                return h.delete(t),
                h.delete(e),
                D
            }
            function Wf(t, e, s, a, c, h, p) {
                switch (s) {
                case hi:
                    if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
                        return !1;
                    t = t.buffer,
                    e = e.buffer;
                case Gi:
                    return !(t.byteLength != e.byteLength || !h(new zn(t), new zn(e)));
                case Wi:
                case Mi:
                case qi:
                    return se(+t, +e);
                case In:
                    return t.name == e.name && t.message == e.message;
                case Ni:
                case Ui:
                    return t == e + "";
                case ee:
                    var v = ls;
                case ie:
                    var b = a & z;
                    if (v || (v = Bn),
                    t.size != e.size && !b)
                        return !1;
                    var A = p.get(t);
                    if (A)
                        return A == e;
                    a |= K,
                    p.set(t, e);
                    var k = pl(v(t), v(e), a, c, h, p);
                    return p.delete(t),
                    k;
                case Rn:
                    if (Qi)
                        return Qi.call(t) == Qi.call(e)
                }
                return !1
            }
            function Mf(t, e, s, a, c, h) {
                var p = s & z
                  , v = Os(t)
                  , b = v.length
                  , A = Os(e)
                  , k = A.length;
                if (b != k && !p)
                    return !1;
                for (var P = b; P--; ) {
                    var D = v[P];
                    if (!(p ? D in e : ot.call(e, D)))
                        return !1
                }
                var N = h.get(t)
                  , H = h.get(e);
                if (N && H)
                    return N == e && H == t;
                var J = !0;
                h.set(t, e),
                h.set(e, t);
                for (var V = p; ++P < b; ) {
                    D = v[P];
                    var et = t[D]
                      , nt = e[D];
                    if (a)
                        var Ut = p ? a(nt, et, D, e, t, h) : a(et, nt, D, t, e, h);
                    if (!(Ut === n ? et === nt || c(et, nt, s, a, h) : Ut)) {
                        J = !1;
                        break
                    }
                    V || (V = D == "constructor")
                }
                if (J && !V) {
                    var It = t.constructor
                      , zt = e.constructor;
                    It != zt && "constructor"in t && "constructor"in e && !(typeof It == "function" && It instanceof It && typeof zt == "function" && zt instanceof zt) && (J = !1)
                }
                return h.delete(t),
                h.delete(e),
                J
            }
            function Ee(t) {
                return Ns(bl(t, n, Il), t + "")
            }
            function Os(t) {
                return Do(t, _t, Bs)
            }
            function Ds(t) {
                return Do(t, Pt, gl)
            }
            var $s = Zn ? function(t) {
                return Zn.get(t)
            }
            : ta;
            function cr(t) {
                for (var e = t.name + "", s = bi[e], a = ot.call(bi, e) ? s.length : 0; a--; ) {
                    var c = s[a]
                      , h = c.func;
                    if (h == null || h == t)
                        return c.name
                }
                return e
            }
            function Si(t) {
                var e = ot.call(u, "placeholder") ? u : t;
                return e.placeholder
            }
            function G() {
                var t = u.iteratee || Js;
                return t = t === Js ? Bo : t,
                arguments.length ? t(arguments[0], arguments[1]) : t
            }
            function dr(t, e) {
                var s = t.__data__;
                return Kf(e) ? s[typeof e == "string" ? "string" : "hash"] : s.map
            }
            function Fs(t) {
                for (var e = _t(t), s = e.length; s--; ) {
                    var a = e[s]
                      , c = t[a];
                    e[s] = [a, c, yl(c)]
                }
                return e
            }
            function ii(t, e) {
                var s = Zu(t, e);
                return Fo(s) ? s : n
            }
            function qf(t) {
                var e = ot.call(t, Xe)
                  , s = t[Xe];
                try {
                    t[Xe] = n;
                    var a = !0
                } catch {}
                var c = Nn.call(t);
                return a && (e ? t[Xe] = s : delete t[Xe]),
                c
            }
            var Bs = ds ? function(t) {
                return t == null ? [] : (t = lt(t),
                Oe(ds(t), function(e) {
                    return wo.call(t, e)
                }))
            }
            : ea
              , gl = ds ? function(t) {
                for (var e = []; t; )
                    De(e, Bs(t)),
                    t = Gn(t);
                return e
            }
            : ea
              , Ct = Lt;
            (us && Ct(new us(new ArrayBuffer(1))) != hi || Ki && Ct(new Ki) != ee || hs && Ct(hs.resolve()) != Ta || _i && Ct(new _i) != ie || Yi && Ct(new Yi) != zi) && (Ct = function(t) {
                var e = Lt(t)
                  , s = e == ve ? t.constructor : n
                  , a = s ? ni(s) : "";
                if (a)
                    switch (a) {
                    case wh:
                        return hi;
                    case Eh:
                        return ee;
                    case xh:
                        return Ta;
                    case Sh:
                        return ie;
                    case Ch:
                        return zi
                    }
                return e
            }
            );
            function Nf(t, e, s) {
                for (var a = -1, c = s.length; ++a < c; ) {
                    var h = s[a]
                      , p = h.size;
                    switch (h.type) {
                    case "drop":
                        t += p;
                        break;
                    case "dropRight":
                        e -= p;
                        break;
                    case "take":
                        e = St(e, t + p);
                        break;
                    case "takeRight":
                        t = yt(t, e - p);
                        break
                    }
                }
                return {
                    start: t,
                    end: e
                }
            }
            function Uf(t) {
                var e = t.match(Kd);
                return e ? e[1].split(Yd) : []
            }
            function ml(t, e, s) {
                e = Me(e, t);
                for (var a = -1, c = e.length, h = !1; ++a < c; ) {
                    var p = pe(e[a]);
                    if (!(h = t != null && s(t, p)))
                        break;
                    t = t[p]
                }
                return h || ++a != c ? h : (c = t == null ? 0 : t.length,
                !!c && vr(c) && xe(p, c) && (Z(t) || ri(t)))
            }
            function zf(t) {
                var e = t.length
                  , s = new t.constructor(e);
                return e && typeof t[0] == "string" && ot.call(t, "index") && (s.index = t.index,
                s.input = t.input),
                s
            }
            function vl(t) {
                return typeof t.constructor == "function" && !rn(t) ? wi(Gn(t)) : {}
            }
            function Gf(t, e, s) {
                var a = t.constructor;
                switch (e) {
                case Gi:
                    return Ts(t);
                case Wi:
                case Mi:
                    return new a(+t);
                case hi:
                    return Lf(t, s);
                case Fr:
                case Br:
                case Wr:
                case Mr:
                case qr:
                case Nr:
                case Ur:
                case zr:
                case Gr:
                    return jo(t, s);
                case ee:
                    return new a;
                case qi:
                case Ui:
                    return new a(t);
                case Ni:
                    return kf(t);
                case ie:
                    return new a;
                case Rn:
                    return If(t)
                }
            }
            function Hf(t, e) {
                var s = e.length;
                if (!s)
                    return t;
                var a = s - 1;
                return e[a] = (s > 1 ? "& " : "") + e[a],
                e = e.join(s > 2 ? ", " : " "),
                t.replace(Vd, `{
/* [wrapped with ` + e + `] */
`)
            }
            function Vf(t) {
                return Z(t) || ri(t) || !!(Eo && t && t[Eo])
            }
            function xe(t, e) {
                var s = typeof t;
                return e = e ?? Pe,
                !!e && (s == "number" || s != "symbol" && nu.test(t)) && t > -1 && t % 1 == 0 && t < e
            }
            function kt(t, e, s) {
                if (!ft(s))
                    return !1;
                var a = typeof e;
                return (a == "number" ? Rt(s) && xe(e, s.length) : a == "string" && e in s) ? se(s[e], t) : !1
            }
            function Ws(t, e) {
                if (Z(t))
                    return !1;
                var s = typeof t;
                return s == "number" || s == "symbol" || s == "boolean" || t == null || Nt(t) ? !0 : Ud.test(t) || !Nd.test(t) || e != null && t in lt(e)
            }
            function Kf(t) {
                var e = typeof t;
                return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null
            }
            function Ms(t) {
                var e = cr(t)
                  , s = u[e];
                if (typeof s != "function" || !(e in it.prototype))
                    return !1;
                if (t === s)
                    return !0;
                var a = $s(s);
                return !!a && t === a[0]
            }
            function Yf(t) {
                return !!yo && yo in t
            }
            var Zf = Mn ? Se : ia;
            function rn(t) {
                var e = t && t.constructor
                  , s = typeof e == "function" && e.prototype || yi;
                return t === s
            }
            function yl(t) {
                return t === t && !ft(t)
            }
            function _l(t, e) {
                return function(s) {
                    return s == null ? !1 : s[t] === e && (e !== n || t in lt(s))
                }
            }
            function Qf(t) {
                var e = gr(t, function(a) {
                    return s.size === F && s.clear(),
                    a
                })
                  , s = e.cache;
                return e
            }
            function Xf(t, e) {
                var s = t[1]
                  , a = e[1]
                  , c = s | a
                  , h = c < (q | T | M)
                  , p = a == M && s == y || a == M && s == Q && t[7].length <= e[8] || a == (M | Q) && e[7].length <= e[8] && s == y;
                if (!(h || p))
                    return t;
                a & q && (t[2] = e[2],
                c |= s & q ? 0 : g);
                var v = e[3];
                if (v) {
                    var b = t[3];
                    t[3] = b ? el(b, v, e[4]) : v,
                    t[4] = b ? $e(t[3], U) : e[4]
                }
                return v = e[5],
                v && (b = t[5],
                t[5] = b ? il(b, v, e[6]) : v,
                t[6] = b ? $e(t[5], U) : e[6]),
                v = e[7],
                v && (t[7] = v),
                a & M && (t[8] = t[8] == null ? e[8] : St(t[8], e[8])),
                t[9] == null && (t[9] = e[9]),
                t[0] = e[0],
                t[1] = c,
                t
            }
            function Jf(t) {
                var e = [];
                if (t != null)
                    for (var s in lt(t))
                        e.push(s);
                return e
            }
            function jf(t) {
                return Nn.call(t)
            }
            function bl(t, e, s) {
                return e = yt(e === n ? t.length - 1 : e, 0),
                function() {
                    for (var a = arguments, c = -1, h = yt(a.length - e, 0), p = E(h); ++c < h; )
                        p[c] = a[e + c];
                    c = -1;
                    for (var v = E(e + 1); ++c < e; )
                        v[c] = a[c];
                    return v[e] = s(p),
                    Wt(t, this, v)
                }
            }
            function wl(t, e) {
                return e.length < 2 ? t : ei(t, Zt(e, 0, -1))
            }
            function tp(t, e) {
                for (var s = t.length, a = St(e.length, s), c = Tt(t); a--; ) {
                    var h = e[a];
                    t[a] = xe(h, s) ? c[h] : n
                }
                return t
            }
            function qs(t, e) {
                if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__")
                    return t[e]
            }
            var El = Sl(Ho)
              , sn = ph || function(t, e) {
                return wt.setTimeout(t, e)
            }
              , Ns = Sl(xf);
            function xl(t, e, s) {
                var a = e + "";
                return Ns(t, Hf(a, ep(Uf(a), s)))
            }
            function Sl(t) {
                var e = 0
                  , s = 0;
                return function() {
                    var a = yh()
                      , c = Cn - (a - s);
                    if (s = a,
                    c > 0) {
                        if (++e >= Bt)
                            return arguments[0]
                    } else
                        e = 0;
                    return t.apply(n, arguments)
                }
            }
            function ur(t, e) {
                var s = -1
                  , a = t.length
                  , c = a - 1;
                for (e = e === n ? a : e; ++s < e; ) {
                    var h = xs(s, c)
                      , p = t[h];
                    t[h] = t[s],
                    t[s] = p
                }
                return t.length = e,
                t
            }
            var Cl = Qf(function(t) {
                var e = [];
                return t.charCodeAt(0) === 46 && e.push(""),
                t.replace(zd, function(s, a, c, h) {
                    e.push(c ? h.replace(Xd, "$1") : a || s)
                }),
                e
            });
            function pe(t) {
                if (typeof t == "string" || Nt(t))
                    return t;
                var e = t + "";
                return e == "0" && 1 / t == -Ze ? "-0" : e
            }
            function ni(t) {
                if (t != null) {
                    try {
                        return qn.call(t)
                    } catch {}
                    try {
                        return t + ""
                    } catch {}
                }
                return ""
            }
            function ep(t, e) {
                return Ht(Ld, function(s) {
                    var a = "_." + s[0];
                    e & s[1] && !$n(t, a) && t.push(a)
                }),
                t.sort()
            }
            function Al(t) {
                if (t instanceof it)
                    return t.clone();
                var e = new Kt(t.__wrapped__,t.__chain__);
                return e.__actions__ = Tt(t.__actions__),
                e.__index__ = t.__index__,
                e.__values__ = t.__values__,
                e
            }
            function ip(t, e, s) {
                (s ? kt(t, e, s) : e === n) ? e = 1 : e = yt(X(e), 0);
                var a = t == null ? 0 : t.length;
                if (!a || e < 1)
                    return [];
                for (var c = 0, h = 0, p = E(Kn(a / e)); c < a; )
                    p[h++] = Zt(t, c, c += e);
                return p
            }
            function np(t) {
                for (var e = -1, s = t == null ? 0 : t.length, a = 0, c = []; ++e < s; ) {
                    var h = t[e];
                    h && (c[a++] = h)
                }
                return c
            }
            function rp() {
                var t = arguments.length;
                if (!t)
                    return [];
                for (var e = E(t - 1), s = arguments[0], a = t; a--; )
                    e[a - 1] = arguments[a];
                return De(Z(s) ? Tt(s) : [s], Et(e, 1))
            }
            var sp = j(function(t, e) {
                return gt(t) ? Ji(t, Et(e, 1, gt, !0)) : []
            })
              , ap = j(function(t, e) {
                var s = Qt(e);
                return gt(s) && (s = n),
                gt(t) ? Ji(t, Et(e, 1, gt, !0), G(s, 2)) : []
            })
              , op = j(function(t, e) {
                var s = Qt(e);
                return gt(s) && (s = n),
                gt(t) ? Ji(t, Et(e, 1, gt, !0), n, s) : []
            });
            function lp(t, e, s) {
                var a = t == null ? 0 : t.length;
                return a ? (e = s || e === n ? 1 : X(e),
                Zt(t, e < 0 ? 0 : e, a)) : []
            }
            function cp(t, e, s) {
                var a = t == null ? 0 : t.length;
                return a ? (e = s || e === n ? 1 : X(e),
                e = a - e,
                Zt(t, 0, e < 0 ? 0 : e)) : []
            }
            function dp(t, e) {
                return t && t.length ? nr(t, G(e, 3), !0, !0) : []
            }
            function up(t, e) {
                return t && t.length ? nr(t, G(e, 3), !0) : []
            }
            function hp(t, e, s, a) {
                var c = t == null ? 0 : t.length;
                return c ? (s && typeof s != "number" && kt(t, e, s) && (s = 0,
                a = c),
                rf(t, e, s, a)) : []
            }
            function Ll(t, e, s) {
                var a = t == null ? 0 : t.length;
                if (!a)
                    return -1;
                var c = s == null ? 0 : X(s);
                return c < 0 && (c = yt(a + c, 0)),
                Fn(t, G(e, 3), c)
            }
            function kl(t, e, s) {
                var a = t == null ? 0 : t.length;
                if (!a)
                    return -1;
                var c = a - 1;
                return s !== n && (c = X(s),
                c = s < 0 ? yt(a + c, 0) : St(c, a - 1)),
                Fn(t, G(e, 3), c, !0)
            }
            function Il(t) {
                var e = t == null ? 0 : t.length;
                return e ? Et(t, 1) : []
            }
            function fp(t) {
                var e = t == null ? 0 : t.length;
                return e ? Et(t, Ze) : []
            }
            function pp(t, e) {
                var s = t == null ? 0 : t.length;
                return s ? (e = e === n ? 1 : X(e),
                Et(t, e)) : []
            }
            function gp(t) {
                for (var e = -1, s = t == null ? 0 : t.length, a = {}; ++e < s; ) {
                    var c = t[e];
                    a[c[0]] = c[1]
                }
                return a
            }
            function Tl(t) {
                return t && t.length ? t[0] : n
            }
            function mp(t, e, s) {
                var a = t == null ? 0 : t.length;
                if (!a)
                    return -1;
                var c = s == null ? 0 : X(s);
                return c < 0 && (c = yt(a + c, 0)),
                pi(t, e, c)
            }
            function vp(t) {
                var e = t == null ? 0 : t.length;
                return e ? Zt(t, 0, -1) : []
            }
            var yp = j(function(t) {
                var e = ht(t, ks);
                return e.length && e[0] === t[0] ? ys(e) : []
            })
              , _p = j(function(t) {
                var e = Qt(t)
                  , s = ht(t, ks);
                return e === Qt(s) ? e = n : s.pop(),
                s.length && s[0] === t[0] ? ys(s, G(e, 2)) : []
            })
              , bp = j(function(t) {
                var e = Qt(t)
                  , s = ht(t, ks);
                return e = typeof e == "function" ? e : n,
                e && s.pop(),
                s.length && s[0] === t[0] ? ys(s, n, e) : []
            });
            function wp(t, e) {
                return t == null ? "" : mh.call(t, e)
            }
            function Qt(t) {
                var e = t == null ? 0 : t.length;
                return e ? t[e - 1] : n
            }
            function Ep(t, e, s) {
                var a = t == null ? 0 : t.length;
                if (!a)
                    return -1;
                var c = a;
                return s !== n && (c = X(s),
                c = c < 0 ? yt(a + c, 0) : St(c, a - 1)),
                e === e ? th(t, e, c) : Fn(t, co, c, !0)
            }
            function xp(t, e) {
                return t && t.length ? No(t, X(e)) : n
            }
            var Sp = j(Rl);
            function Rl(t, e) {
                return t && t.length && e && e.length ? Es(t, e) : t
            }
            function Cp(t, e, s) {
                return t && t.length && e && e.length ? Es(t, e, G(s, 2)) : t
            }
            function Ap(t, e, s) {
                return t && t.length && e && e.length ? Es(t, e, n, s) : t
            }
            var Lp = Ee(function(t, e) {
                var s = t == null ? 0 : t.length
                  , a = ps(t, e);
                return Go(t, ht(e, function(c) {
                    return xe(c, s) ? +c : c
                }).sort(tl)),
                a
            });
            function kp(t, e) {
                var s = [];
                if (!(t && t.length))
                    return s;
                var a = -1
                  , c = []
                  , h = t.length;
                for (e = G(e, 3); ++a < h; ) {
                    var p = t[a];
                    e(p, a, t) && (s.push(p),
                    c.push(a))
                }
                return Go(t, c),
                s
            }
            function Us(t) {
                return t == null ? t : bh.call(t)
            }
            function Ip(t, e, s) {
                var a = t == null ? 0 : t.length;
                return a ? (s && typeof s != "number" && kt(t, e, s) ? (e = 0,
                s = a) : (e = e == null ? 0 : X(e),
                s = s === n ? a : X(s)),
                Zt(t, e, s)) : []
            }
            function Tp(t, e) {
                return ir(t, e)
            }
            function Rp(t, e, s) {
                return Cs(t, e, G(s, 2))
            }
            function Pp(t, e) {
                var s = t == null ? 0 : t.length;
                if (s) {
                    var a = ir(t, e);
                    if (a < s && se(t[a], e))
                        return a
                }
                return -1
            }
            function Op(t, e) {
                return ir(t, e, !0)
            }
            function Dp(t, e, s) {
                return Cs(t, e, G(s, 2), !0)
            }
            function $p(t, e) {
                var s = t == null ? 0 : t.length;
                if (s) {
                    var a = ir(t, e, !0) - 1;
                    if (se(t[a], e))
                        return a
                }
                return -1
            }
            function Fp(t) {
                return t && t.length ? Vo(t) : []
            }
            function Bp(t, e) {
                return t && t.length ? Vo(t, G(e, 2)) : []
            }
            function Wp(t) {
                var e = t == null ? 0 : t.length;
                return e ? Zt(t, 1, e) : []
            }
            function Mp(t, e, s) {
                return t && t.length ? (e = s || e === n ? 1 : X(e),
                Zt(t, 0, e < 0 ? 0 : e)) : []
            }
            function qp(t, e, s) {
                var a = t == null ? 0 : t.length;
                return a ? (e = s || e === n ? 1 : X(e),
                e = a - e,
                Zt(t, e < 0 ? 0 : e, a)) : []
            }
            function Np(t, e) {
                return t && t.length ? nr(t, G(e, 3), !1, !0) : []
            }
            function Up(t, e) {
                return t && t.length ? nr(t, G(e, 3)) : []
            }
            var zp = j(function(t) {
                return We(Et(t, 1, gt, !0))
            })
              , Gp = j(function(t) {
                var e = Qt(t);
                return gt(e) && (e = n),
                We(Et(t, 1, gt, !0), G(e, 2))
            })
              , Hp = j(function(t) {
                var e = Qt(t);
                return e = typeof e == "function" ? e : n,
                We(Et(t, 1, gt, !0), n, e)
            });
            function Vp(t) {
                return t && t.length ? We(t) : []
            }
            function Kp(t, e) {
                return t && t.length ? We(t, G(e, 2)) : []
            }
            function Yp(t, e) {
                return e = typeof e == "function" ? e : n,
                t && t.length ? We(t, n, e) : []
            }
            function zs(t) {
                if (!(t && t.length))
                    return [];
                var e = 0;
                return t = Oe(t, function(s) {
                    if (gt(s))
                        return e = yt(s.length, e),
                        !0
                }),
                as(e, function(s) {
                    return ht(t, ns(s))
                })
            }
            function Pl(t, e) {
                if (!(t && t.length))
                    return [];
                var s = zs(t);
                return e == null ? s : ht(s, function(a) {
                    return Wt(e, n, a)
                })
            }
            var Zp = j(function(t, e) {
                return gt(t) ? Ji(t, e) : []
            })
              , Qp = j(function(t) {
                return Ls(Oe(t, gt))
            })
              , Xp = j(function(t) {
                var e = Qt(t);
                return gt(e) && (e = n),
                Ls(Oe(t, gt), G(e, 2))
            })
              , Jp = j(function(t) {
                var e = Qt(t);
                return e = typeof e == "function" ? e : n,
                Ls(Oe(t, gt), n, e)
            })
              , jp = j(zs);
            function tg(t, e) {
                return Qo(t || [], e || [], Xi)
            }
            function eg(t, e) {
                return Qo(t || [], e || [], en)
            }
            var ig = j(function(t) {
                var e = t.length
                  , s = e > 1 ? t[e - 1] : n;
                return s = typeof s == "function" ? (t.pop(),
                s) : n,
                Pl(t, s)
            });
            function Ol(t) {
                var e = u(t);
                return e.__chain__ = !0,
                e
            }
            function ng(t, e) {
                return e(t),
                t
            }
            function hr(t, e) {
                return e(t)
            }
            var rg = Ee(function(t) {
                var e = t.length
                  , s = e ? t[0] : 0
                  , a = this.__wrapped__
                  , c = function(h) {
                    return ps(h, t)
                };
                return e > 1 || this.__actions__.length || !(a instanceof it) || !xe(s) ? this.thru(c) : (a = a.slice(s, +s + (e ? 1 : 0)),
                a.__actions__.push({
                    func: hr,
                    args: [c],
                    thisArg: n
                }),
                new Kt(a,this.__chain__).thru(function(h) {
                    return e && !h.length && h.push(n),
                    h
                }))
            });
            function sg() {
                return Ol(this)
            }
            function ag() {
                return new Kt(this.value(),this.__chain__)
            }
            function og() {
                this.__values__ === n && (this.__values__ = Kl(this.value()));
                var t = this.__index__ >= this.__values__.length
                  , e = t ? n : this.__values__[this.__index__++];
                return {
                    done: t,
                    value: e
                }
            }
            function lg() {
                return this
            }
            function cg(t) {
                for (var e, s = this; s instanceof Xn; ) {
                    var a = Al(s);
                    a.__index__ = 0,
                    a.__values__ = n,
                    e ? c.__wrapped__ = a : e = a;
                    var c = a;
                    s = s.__wrapped__
                }
                return c.__wrapped__ = t,
                e
            }
            function dg() {
                var t = this.__wrapped__;
                if (t instanceof it) {
                    var e = t;
                    return this.__actions__.length && (e = new it(this)),
                    e = e.reverse(),
                    e.__actions__.push({
                        func: hr,
                        args: [Us],
                        thisArg: n
                    }),
                    new Kt(e,this.__chain__)
                }
                return this.thru(Us)
            }
            function ug() {
                return Zo(this.__wrapped__, this.__actions__)
            }
            var hg = rr(function(t, e, s) {
                ot.call(t, s) ? ++t[s] : be(t, s, 1)
            });
            function fg(t, e, s) {
                var a = Z(t) ? oo : nf;
                return s && kt(t, e, s) && (e = n),
                a(t, G(e, 3))
            }
            function pg(t, e) {
                var s = Z(t) ? Oe : Po;
                return s(t, G(e, 3))
            }
            var gg = al(Ll)
              , mg = al(kl);
            function vg(t, e) {
                return Et(fr(t, e), 1)
            }
            function yg(t, e) {
                return Et(fr(t, e), Ze)
            }
            function _g(t, e, s) {
                return s = s === n ? 1 : X(s),
                Et(fr(t, e), s)
            }
            function Dl(t, e) {
                var s = Z(t) ? Ht : Be;
                return s(t, G(e, 3))
            }
            function $l(t, e) {
                var s = Z(t) ? Bu : Ro;
                return s(t, G(e, 3))
            }
            var bg = rr(function(t, e, s) {
                ot.call(t, s) ? t[s].push(e) : be(t, s, [e])
            });
            function wg(t, e, s, a) {
                t = Rt(t) ? t : Ai(t),
                s = s && !a ? X(s) : 0;
                var c = t.length;
                return s < 0 && (s = yt(c + s, 0)),
                yr(t) ? s <= c && t.indexOf(e, s) > -1 : !!c && pi(t, e, s) > -1
            }
            var Eg = j(function(t, e, s) {
                var a = -1
                  , c = typeof e == "function"
                  , h = Rt(t) ? E(t.length) : [];
                return Be(t, function(p) {
                    h[++a] = c ? Wt(e, p, s) : ji(p, e, s)
                }),
                h
            })
              , xg = rr(function(t, e, s) {
                be(t, s, e)
            });
            function fr(t, e) {
                var s = Z(t) ? ht : Wo;
                return s(t, G(e, 3))
            }
            function Sg(t, e, s, a) {
                return t == null ? [] : (Z(e) || (e = e == null ? [] : [e]),
                s = a ? n : s,
                Z(s) || (s = s == null ? [] : [s]),
                Uo(t, e, s))
            }
            var Cg = rr(function(t, e, s) {
                t[s ? 0 : 1].push(e)
            }, function() {
                return [[], []]
            });
            function Ag(t, e, s) {
                var a = Z(t) ? es : ho
                  , c = arguments.length < 3;
                return a(t, G(e, 4), s, c, Be)
            }
            function Lg(t, e, s) {
                var a = Z(t) ? Wu : ho
                  , c = arguments.length < 3;
                return a(t, G(e, 4), s, c, Ro)
            }
            function kg(t, e) {
                var s = Z(t) ? Oe : Po;
                return s(t, mr(G(e, 3)))
            }
            function Ig(t) {
                var e = Z(t) ? Lo : wf;
                return e(t)
            }
            function Tg(t, e, s) {
                (s ? kt(t, e, s) : e === n) ? e = 1 : e = X(e);
                var a = Z(t) ? Xh : Ef;
                return a(t, e)
            }
            function Rg(t) {
                var e = Z(t) ? Jh : Sf;
                return e(t)
            }
            function Pg(t) {
                if (t == null)
                    return 0;
                if (Rt(t))
                    return yr(t) ? mi(t) : t.length;
                var e = Ct(t);
                return e == ee || e == ie ? t.size : bs(t).length
            }
            function Og(t, e, s) {
                var a = Z(t) ? is : Cf;
                return s && kt(t, e, s) && (e = n),
                a(t, G(e, 3))
            }
            var Dg = j(function(t, e) {
                if (t == null)
                    return [];
                var s = e.length;
                return s > 1 && kt(t, e[0], e[1]) ? e = [] : s > 2 && kt(e[0], e[1], e[2]) && (e = [e[0]]),
                Uo(t, Et(e, 1), [])
            })
              , pr = fh || function() {
                return wt.Date.now()
            }
            ;
            function $g(t, e) {
                if (typeof e != "function")
                    throw new Vt(f);
                return t = X(t),
                function() {
                    if (--t < 1)
                        return e.apply(this, arguments)
                }
            }
            function Fl(t, e, s) {
                return e = s ? n : e,
                e = t && e == null ? t.length : e,
                we(t, M, n, n, n, n, e)
            }
            function Bl(t, e) {
                var s;
                if (typeof e != "function")
                    throw new Vt(f);
                return t = X(t),
                function() {
                    return --t > 0 && (s = e.apply(this, arguments)),
                    t <= 1 && (e = n),
                    s
                }
            }
            var Gs = j(function(t, e, s) {
                var a = q;
                if (s.length) {
                    var c = $e(s, Si(Gs));
                    a |= w
                }
                return we(t, a, e, s, c)
            })
              , Wl = j(function(t, e, s) {
                var a = q | T;
                if (s.length) {
                    var c = $e(s, Si(Wl));
                    a |= w
                }
                return we(e, a, t, s, c)
            });
            function Ml(t, e, s) {
                e = s ? n : e;
                var a = we(t, y, n, n, n, n, n, e);
                return a.placeholder = Ml.placeholder,
                a
            }
            function ql(t, e, s) {
                e = s ? n : e;
                var a = we(t, m, n, n, n, n, n, e);
                return a.placeholder = ql.placeholder,
                a
            }
            function Nl(t, e, s) {
                var a, c, h, p, v, b, A = 0, k = !1, P = !1, D = !0;
                if (typeof t != "function")
                    throw new Vt(f);
                e = Xt(e) || 0,
                ft(s) && (k = !!s.leading,
                P = "maxWait"in s,
                h = P ? yt(Xt(s.maxWait) || 0, e) : h,
                D = "trailing"in s ? !!s.trailing : D);
                function N(mt) {
                    var ae = a
                      , Ae = c;
                    return a = c = n,
                    A = mt,
                    p = t.apply(Ae, ae),
                    p
                }
                function H(mt) {
                    return A = mt,
                    v = sn(et, e),
                    k ? N(mt) : p
                }
                function J(mt) {
                    var ae = mt - b
                      , Ae = mt - A
                      , ac = e - ae;
                    return P ? St(ac, h - Ae) : ac
                }
                function V(mt) {
                    var ae = mt - b
                      , Ae = mt - A;
                    return b === n || ae >= e || ae < 0 || P && Ae >= h
                }
                function et() {
                    var mt = pr();
                    if (V(mt))
                        return nt(mt);
                    v = sn(et, J(mt))
                }
                function nt(mt) {
                    return v = n,
                    D && a ? N(mt) : (a = c = n,
                    p)
                }
                function Ut() {
                    v !== n && Xo(v),
                    A = 0,
                    a = b = c = v = n
                }
                function It() {
                    return v === n ? p : nt(pr())
                }
                function zt() {
                    var mt = pr()
                      , ae = V(mt);
                    if (a = arguments,
                    c = this,
                    b = mt,
                    ae) {
                        if (v === n)
                            return H(b);
                        if (P)
                            return Xo(v),
                            v = sn(et, e),
                            N(b)
                    }
                    return v === n && (v = sn(et, e)),
                    p
                }
                return zt.cancel = Ut,
                zt.flush = It,
                zt
            }
            var Fg = j(function(t, e) {
                return To(t, 1, e)
            })
              , Bg = j(function(t, e, s) {
                return To(t, Xt(e) || 0, s)
            });
            function Wg(t) {
                return we(t, rt)
            }
            function gr(t, e) {
                if (typeof t != "function" || e != null && typeof e != "function")
                    throw new Vt(f);
                var s = function() {
                    var a = arguments
                      , c = e ? e.apply(this, a) : a[0]
                      , h = s.cache;
                    if (h.has(c))
                        return h.get(c);
                    var p = t.apply(this, a);
                    return s.cache = h.set(c, p) || h,
                    p
                };
                return s.cache = new (gr.Cache || _e),
                s
            }
            gr.Cache = _e;
            function mr(t) {
                if (typeof t != "function")
                    throw new Vt(f);
                return function() {
                    var e = arguments;
                    switch (e.length) {
                    case 0:
                        return !t.call(this);
                    case 1:
                        return !t.call(this, e[0]);
                    case 2:
                        return !t.call(this, e[0], e[1]);
                    case 3:
                        return !t.call(this, e[0], e[1], e[2])
                    }
                    return !t.apply(this, e)
                }
            }
            function Mg(t) {
                return Bl(2, t)
            }
            var qg = Af(function(t, e) {
                e = e.length == 1 && Z(e[0]) ? ht(e[0], Mt(G())) : ht(Et(e, 1), Mt(G()));
                var s = e.length;
                return j(function(a) {
                    for (var c = -1, h = St(a.length, s); ++c < h; )
                        a[c] = e[c].call(this, a[c]);
                    return Wt(t, this, a)
                })
            })
              , Hs = j(function(t, e) {
                var s = $e(e, Si(Hs));
                return we(t, w, n, e, s)
            })
              , Ul = j(function(t, e) {
                var s = $e(e, Si(Ul));
                return we(t, O, n, e, s)
            })
              , Ng = Ee(function(t, e) {
                return we(t, Q, n, n, n, e)
            });
            function Ug(t, e) {
                if (typeof t != "function")
                    throw new Vt(f);
                return e = e === n ? e : X(e),
                j(t, e)
            }
            function zg(t, e) {
                if (typeof t != "function")
                    throw new Vt(f);
                return e = e == null ? 0 : yt(X(e), 0),
                j(function(s) {
                    var a = s[e]
                      , c = qe(s, 0, e);
                    return a && De(c, a),
                    Wt(t, this, c)
                })
            }
            function Gg(t, e, s) {
                var a = !0
                  , c = !0;
                if (typeof t != "function")
                    throw new Vt(f);
                return ft(s) && (a = "leading"in s ? !!s.leading : a,
                c = "trailing"in s ? !!s.trailing : c),
                Nl(t, e, {
                    leading: a,
                    maxWait: e,
                    trailing: c
                })
            }
            function Hg(t) {
                return Fl(t, 1)
            }
            function Vg(t, e) {
                return Hs(Is(e), t)
            }
            function Kg() {
                if (!arguments.length)
                    return [];
                var t = arguments[0];
                return Z(t) ? t : [t]
            }
            function Yg(t) {
                return Yt(t, R)
            }
            function Zg(t, e) {
                return e = typeof e == "function" ? e : n,
                Yt(t, R, e)
            }
            function Qg(t) {
                return Yt(t, B | R)
            }
            function Xg(t, e) {
                return e = typeof e == "function" ? e : n,
                Yt(t, B | R, e)
            }
            function Jg(t, e) {
                return e == null || Io(t, e, _t(e))
            }
            function se(t, e) {
                return t === e || t !== t && e !== e
            }
            var jg = lr(vs)
              , tm = lr(function(t, e) {
                return t >= e
            })
              , ri = $o(function() {
                return arguments
            }()) ? $o : function(t) {
                return pt(t) && ot.call(t, "callee") && !wo.call(t, "callee")
            }
              , Z = E.isArray
              , em = eo ? Mt(eo) : cf;
            function Rt(t) {
                return t != null && vr(t.length) && !Se(t)
            }
            function gt(t) {
                return pt(t) && Rt(t)
            }
            function im(t) {
                return t === !0 || t === !1 || pt(t) && Lt(t) == Wi
            }
            var Ne = gh || ia
              , nm = io ? Mt(io) : df;
            function rm(t) {
                return pt(t) && t.nodeType === 1 && !an(t)
            }
            function sm(t) {
                if (t == null)
                    return !0;
                if (Rt(t) && (Z(t) || typeof t == "string" || typeof t.splice == "function" || Ne(t) || Ci(t) || ri(t)))
                    return !t.length;
                var e = Ct(t);
                if (e == ee || e == ie)
                    return !t.size;
                if (rn(t))
                    return !bs(t).length;
                for (var s in t)
                    if (ot.call(t, s))
                        return !1;
                return !0
            }
            function am(t, e) {
                return tn(t, e)
            }
            function om(t, e, s) {
                s = typeof s == "function" ? s : n;
                var a = s ? s(t, e) : n;
                return a === n ? tn(t, e, n, s) : !!a
            }
            function Vs(t) {
                if (!pt(t))
                    return !1;
                var e = Lt(t);
                return e == In || e == Id || typeof t.message == "string" && typeof t.name == "string" && !an(t)
            }
            function lm(t) {
                return typeof t == "number" && xo(t)
            }
            function Se(t) {
                if (!ft(t))
                    return !1;
                var e = Lt(t);
                return e == Tn || e == Ia || e == kd || e == Rd
            }
            function zl(t) {
                return typeof t == "number" && t == X(t)
            }
            function vr(t) {
                return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Pe
            }
            function ft(t) {
                var e = typeof t;
                return t != null && (e == "object" || e == "function")
            }
            function pt(t) {
                return t != null && typeof t == "object"
            }
            var Gl = no ? Mt(no) : hf;
            function cm(t, e) {
                return t === e || _s(t, e, Fs(e))
            }
            function dm(t, e, s) {
                return s = typeof s == "function" ? s : n,
                _s(t, e, Fs(e), s)
            }
            function um(t) {
                return Hl(t) && t != +t
            }
            function hm(t) {
                if (Zf(t))
                    throw new Y(d);
                return Fo(t)
            }
            function fm(t) {
                return t === null
            }
            function pm(t) {
                return t == null
            }
            function Hl(t) {
                return typeof t == "number" || pt(t) && Lt(t) == qi
            }
            function an(t) {
                if (!pt(t) || Lt(t) != ve)
                    return !1;
                var e = Gn(t);
                if (e === null)
                    return !0;
                var s = ot.call(e, "constructor") && e.constructor;
                return typeof s == "function" && s instanceof s && qn.call(s) == ch
            }
            var Ks = ro ? Mt(ro) : ff;
            function gm(t) {
                return zl(t) && t >= -Pe && t <= Pe
            }
            var Vl = so ? Mt(so) : pf;
            function yr(t) {
                return typeof t == "string" || !Z(t) && pt(t) && Lt(t) == Ui
            }
            function Nt(t) {
                return typeof t == "symbol" || pt(t) && Lt(t) == Rn
            }
            var Ci = ao ? Mt(ao) : gf;
            function mm(t) {
                return t === n
            }
            function vm(t) {
                return pt(t) && Ct(t) == zi
            }
            function ym(t) {
                return pt(t) && Lt(t) == Od
            }
            var _m = lr(ws)
              , bm = lr(function(t, e) {
                return t <= e
            });
            function Kl(t) {
                if (!t)
                    return [];
                if (Rt(t))
                    return yr(t) ? ne(t) : Tt(t);
                if (Vi && t[Vi])
                    return Xu(t[Vi]());
                var e = Ct(t)
                  , s = e == ee ? ls : e == ie ? Bn : Ai;
                return s(t)
            }
            function Ce(t) {
                if (!t)
                    return t === 0 ? t : 0;
                if (t = Xt(t),
                t === Ze || t === -Ze) {
                    var e = t < 0 ? -1 : 1;
                    return e * Sd
                }
                return t === t ? t : 0
            }
            function X(t) {
                var e = Ce(t)
                  , s = e % 1;
                return e === e ? s ? e - s : e : 0
            }
            function Yl(t) {
                return t ? ti(X(t), 0, ue) : 0
            }
            function Xt(t) {
                if (typeof t == "number")
                    return t;
                if (Nt(t))
                    return Ln;
                if (ft(t)) {
                    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
                    t = ft(e) ? e + "" : e
                }
                if (typeof t != "string")
                    return t === 0 ? t : +t;
                t = fo(t);
                var s = tu.test(t);
                return s || iu.test(t) ? Du(t.slice(2), s ? 2 : 8) : jd.test(t) ? Ln : +t
            }
            function Zl(t) {
                return fe(t, Pt(t))
            }
            function wm(t) {
                return t ? ti(X(t), -Pe, Pe) : t === 0 ? t : 0
            }
            function at(t) {
                return t == null ? "" : qt(t)
            }
            var Em = Ei(function(t, e) {
                if (rn(e) || Rt(e)) {
                    fe(e, _t(e), t);
                    return
                }
                for (var s in e)
                    ot.call(e, s) && Xi(t, s, e[s])
            })
              , Ql = Ei(function(t, e) {
                fe(e, Pt(e), t)
            })
              , _r = Ei(function(t, e, s, a) {
                fe(e, Pt(e), t, a)
            })
              , xm = Ei(function(t, e, s, a) {
                fe(e, _t(e), t, a)
            })
              , Sm = Ee(ps);
            function Cm(t, e) {
                var s = wi(t);
                return e == null ? s : ko(s, e)
            }
            var Am = j(function(t, e) {
                t = lt(t);
                var s = -1
                  , a = e.length
                  , c = a > 2 ? e[2] : n;
                for (c && kt(e[0], e[1], c) && (a = 1); ++s < a; )
                    for (var h = e[s], p = Pt(h), v = -1, b = p.length; ++v < b; ) {
                        var A = p[v]
                          , k = t[A];
                        (k === n || se(k, yi[A]) && !ot.call(t, A)) && (t[A] = h[A])
                    }
                return t
            })
              , Lm = j(function(t) {
                return t.push(n, fl),
                Wt(Xl, n, t)
            });
            function km(t, e) {
                return lo(t, G(e, 3), he)
            }
            function Im(t, e) {
                return lo(t, G(e, 3), ms)
            }
            function Tm(t, e) {
                return t == null ? t : gs(t, G(e, 3), Pt)
            }
            function Rm(t, e) {
                return t == null ? t : Oo(t, G(e, 3), Pt)
            }
            function Pm(t, e) {
                return t && he(t, G(e, 3))
            }
            function Om(t, e) {
                return t && ms(t, G(e, 3))
            }
            function Dm(t) {
                return t == null ? [] : tr(t, _t(t))
            }
            function $m(t) {
                return t == null ? [] : tr(t, Pt(t))
            }
            function Ys(t, e, s) {
                var a = t == null ? n : ei(t, e);
                return a === n ? s : a
            }
            function Fm(t, e) {
                return t != null && ml(t, e, sf)
            }
            function Zs(t, e) {
                return t != null && ml(t, e, af)
            }
            var Bm = ll(function(t, e, s) {
                e != null && typeof e.toString != "function" && (e = Nn.call(e)),
                t[e] = s
            }, Xs(Ot))
              , Wm = ll(function(t, e, s) {
                e != null && typeof e.toString != "function" && (e = Nn.call(e)),
                ot.call(t, e) ? t[e].push(s) : t[e] = [s]
            }, G)
              , Mm = j(ji);
            function _t(t) {
                return Rt(t) ? Ao(t) : bs(t)
            }
            function Pt(t) {
                return Rt(t) ? Ao(t, !0) : mf(t)
            }
            function qm(t, e) {
                var s = {};
                return e = G(e, 3),
                he(t, function(a, c, h) {
                    be(s, e(a, c, h), a)
                }),
                s
            }
            function Nm(t, e) {
                var s = {};
                return e = G(e, 3),
                he(t, function(a, c, h) {
                    be(s, c, e(a, c, h))
                }),
                s
            }
            var Um = Ei(function(t, e, s) {
                er(t, e, s)
            })
              , Xl = Ei(function(t, e, s, a) {
                er(t, e, s, a)
            })
              , zm = Ee(function(t, e) {
                var s = {};
                if (t == null)
                    return s;
                var a = !1;
                e = ht(e, function(h) {
                    return h = Me(h, t),
                    a || (a = h.length > 1),
                    h
                }),
                fe(t, Ds(t), s),
                a && (s = Yt(s, B | L | R, Bf));
                for (var c = e.length; c--; )
                    As(s, e[c]);
                return s
            });
            function Gm(t, e) {
                return Jl(t, mr(G(e)))
            }
            var Hm = Ee(function(t, e) {
                return t == null ? {} : yf(t, e)
            });
            function Jl(t, e) {
                if (t == null)
                    return {};
                var s = ht(Ds(t), function(a) {
                    return [a]
                });
                return e = G(e),
                zo(t, s, function(a, c) {
                    return e(a, c[0])
                })
            }
            function Vm(t, e, s) {
                e = Me(e, t);
                var a = -1
                  , c = e.length;
                for (c || (c = 1,
                t = n); ++a < c; ) {
                    var h = t == null ? n : t[pe(e[a])];
                    h === n && (a = c,
                    h = s),
                    t = Se(h) ? h.call(t) : h
                }
                return t
            }
            function Km(t, e, s) {
                return t == null ? t : en(t, e, s)
            }
            function Ym(t, e, s, a) {
                return a = typeof a == "function" ? a : n,
                t == null ? t : en(t, e, s, a)
            }
            var jl = ul(_t)
              , tc = ul(Pt);
            function Zm(t, e, s) {
                var a = Z(t)
                  , c = a || Ne(t) || Ci(t);
                if (e = G(e, 4),
                s == null) {
                    var h = t && t.constructor;
                    c ? s = a ? new h : [] : ft(t) ? s = Se(h) ? wi(Gn(t)) : {} : s = {}
                }
                return (c ? Ht : he)(t, function(p, v, b) {
                    return e(s, p, v, b)
                }),
                s
            }
            function Qm(t, e) {
                return t == null ? !0 : As(t, e)
            }
            function Xm(t, e, s) {
                return t == null ? t : Yo(t, e, Is(s))
            }
            function Jm(t, e, s, a) {
                return a = typeof a == "function" ? a : n,
                t == null ? t : Yo(t, e, Is(s), a)
            }
            function Ai(t) {
                return t == null ? [] : os(t, _t(t))
            }
            function jm(t) {
                return t == null ? [] : os(t, Pt(t))
            }
            function tv(t, e, s) {
                return s === n && (s = e,
                e = n),
                s !== n && (s = Xt(s),
                s = s === s ? s : 0),
                e !== n && (e = Xt(e),
                e = e === e ? e : 0),
                ti(Xt(t), e, s)
            }
            function ev(t, e, s) {
                return e = Ce(e),
                s === n ? (s = e,
                e = 0) : s = Ce(s),
                t = Xt(t),
                of(t, e, s)
            }
            function iv(t, e, s) {
                if (s && typeof s != "boolean" && kt(t, e, s) && (e = s = n),
                s === n && (typeof e == "boolean" ? (s = e,
                e = n) : typeof t == "boolean" && (s = t,
                t = n)),
                t === n && e === n ? (t = 0,
                e = 1) : (t = Ce(t),
                e === n ? (e = t,
                t = 0) : e = Ce(e)),
                t > e) {
                    var a = t;
                    t = e,
                    e = a
                }
                if (s || t % 1 || e % 1) {
                    var c = So();
                    return St(t + c * (e - t + Ou("1e-" + ((c + "").length - 1))), e)
                }
                return xs(t, e)
            }
            var nv = xi(function(t, e, s) {
                return e = e.toLowerCase(),
                t + (s ? ec(e) : e)
            });
            function ec(t) {
                return Qs(at(t).toLowerCase())
            }
            function ic(t) {
                return t = at(t),
                t && t.replace(ru, Vu).replace(xu, "")
            }
            function rv(t, e, s) {
                t = at(t),
                e = qt(e);
                var a = t.length;
                s = s === n ? a : ti(X(s), 0, a);
                var c = s;
                return s -= e.length,
                s >= 0 && t.slice(s, c) == e
            }
            function sv(t) {
                return t = at(t),
                t && Wd.test(t) ? t.replace(Pa, Ku) : t
            }
            function av(t) {
                return t = at(t),
                t && Gd.test(t) ? t.replace(Hr, "\\$&") : t
            }
            var ov = xi(function(t, e, s) {
                return t + (s ? "-" : "") + e.toLowerCase()
            })
              , lv = xi(function(t, e, s) {
                return t + (s ? " " : "") + e.toLowerCase()
            })
              , cv = sl("toLowerCase");
            function dv(t, e, s) {
                t = at(t),
                e = X(e);
                var a = e ? mi(t) : 0;
                if (!e || a >= e)
                    return t;
                var c = (e - a) / 2;
                return or(Yn(c), s) + t + or(Kn(c), s)
            }
            function uv(t, e, s) {
                t = at(t),
                e = X(e);
                var a = e ? mi(t) : 0;
                return e && a < e ? t + or(e - a, s) : t
            }
            function hv(t, e, s) {
                t = at(t),
                e = X(e);
                var a = e ? mi(t) : 0;
                return e && a < e ? or(e - a, s) + t : t
            }
            function fv(t, e, s) {
                return s || e == null ? e = 0 : e && (e = +e),
                _h(at(t).replace(Vr, ""), e || 0)
            }
            function pv(t, e, s) {
                return (s ? kt(t, e, s) : e === n) ? e = 1 : e = X(e),
                Ss(at(t), e)
            }
            function gv() {
                var t = arguments
                  , e = at(t[0]);
                return t.length < 3 ? e : e.replace(t[1], t[2])
            }
            var mv = xi(function(t, e, s) {
                return t + (s ? "_" : "") + e.toLowerCase()
            });
            function vv(t, e, s) {
                return s && typeof s != "number" && kt(t, e, s) && (e = s = n),
                s = s === n ? ue : s >>> 0,
                s ? (t = at(t),
                t && (typeof e == "string" || e != null && !Ks(e)) && (e = qt(e),
                !e && gi(t)) ? qe(ne(t), 0, s) : t.split(e, s)) : []
            }
            var yv = xi(function(t, e, s) {
                return t + (s ? " " : "") + Qs(e)
            });
            function _v(t, e, s) {
                return t = at(t),
                s = s == null ? 0 : ti(X(s), 0, t.length),
                e = qt(e),
                t.slice(s, s + e.length) == e
            }
            function bv(t, e, s) {
                var a = u.templateSettings;
                s && kt(t, e, s) && (e = n),
                t = at(t),
                e = _r({}, e, a, hl);
                var c = _r({}, e.imports, a.imports, hl), h = _t(c), p = os(c, h), v, b, A = 0, k = e.interpolate || Pn, P = "__p += '", D = cs((e.escape || Pn).source + "|" + k.source + "|" + (k === Oa ? Jd : Pn).source + "|" + (e.evaluate || Pn).source + "|$", "g"), N = "//# sourceURL=" + (ot.call(e, "sourceURL") ? (e.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++ku + "]") + `
`;
                t.replace(D, function(V, et, nt, Ut, It, zt) {
                    return nt || (nt = Ut),
                    P += t.slice(A, zt).replace(su, Yu),
                    et && (v = !0,
                    P += `' +
__e(` + et + `) +
'`),
                    It && (b = !0,
                    P += `';
` + It + `;
__p += '`),
                    nt && (P += `' +
((__t = (` + nt + `)) == null ? '' : __t) +
'`),
                    A = zt + V.length,
                    V
                }),
                P += `';
`;
                var H = ot.call(e, "variable") && e.variable;
                if (!H)
                    P = `with (obj) {
` + P + `
}
`;
                else if (Qd.test(H))
                    throw new Y(S);
                P = (b ? P.replace(Dd, "") : P).replace($d, "$1").replace(Fd, "$1;"),
                P = "function(" + (H || "obj") + `) {
` + (H ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (v ? ", __e = _.escape" : "") + (b ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + P + `return __p
}`;
                var J = rc(function() {
                    return st(h, N + "return " + P).apply(n, p)
                });
                if (J.source = P,
                Vs(J))
                    throw J;
                return J
            }
            function wv(t) {
                return at(t).toLowerCase()
            }
            function Ev(t) {
                return at(t).toUpperCase()
            }
            function xv(t, e, s) {
                if (t = at(t),
                t && (s || e === n))
                    return fo(t);
                if (!t || !(e = qt(e)))
                    return t;
                var a = ne(t)
                  , c = ne(e)
                  , h = po(a, c)
                  , p = go(a, c) + 1;
                return qe(a, h, p).join("")
            }
            function Sv(t, e, s) {
                if (t = at(t),
                t && (s || e === n))
                    return t.slice(0, vo(t) + 1);
                if (!t || !(e = qt(e)))
                    return t;
                var a = ne(t)
                  , c = go(a, ne(e)) + 1;
                return qe(a, 0, c).join("")
            }
            function Cv(t, e, s) {
                if (t = at(t),
                t && (s || e === n))
                    return t.replace(Vr, "");
                if (!t || !(e = qt(e)))
                    return t;
                var a = ne(t)
                  , c = po(a, ne(e));
                return qe(a, c).join("")
            }
            function Av(t, e) {
                var s = xt
                  , a = me;
                if (ft(e)) {
                    var c = "separator"in e ? e.separator : c;
                    s = "length"in e ? X(e.length) : s,
                    a = "omission"in e ? qt(e.omission) : a
                }
                t = at(t);
                var h = t.length;
                if (gi(t)) {
                    var p = ne(t);
                    h = p.length
                }
                if (s >= h)
                    return t;
                var v = s - mi(a);
                if (v < 1)
                    return a;
                var b = p ? qe(p, 0, v).join("") : t.slice(0, v);
                if (c === n)
                    return b + a;
                if (p && (v += b.length - v),
                Ks(c)) {
                    if (t.slice(v).search(c)) {
                        var A, k = b;
                        for (c.global || (c = cs(c.source, at(Da.exec(c)) + "g")),
                        c.lastIndex = 0; A = c.exec(k); )
                            var P = A.index;
                        b = b.slice(0, P === n ? v : P)
                    }
                } else if (t.indexOf(qt(c), v) != v) {
                    var D = b.lastIndexOf(c);
                    D > -1 && (b = b.slice(0, D))
                }
                return b + a
            }
            function Lv(t) {
                return t = at(t),
                t && Bd.test(t) ? t.replace(Ra, eh) : t
            }
            var kv = xi(function(t, e, s) {
                return t + (s ? " " : "") + e.toUpperCase()
            })
              , Qs = sl("toUpperCase");
            function nc(t, e, s) {
                return t = at(t),
                e = s ? n : e,
                e === n ? Qu(t) ? rh(t) : Nu(t) : t.match(e) || []
            }
            var rc = j(function(t, e) {
                try {
                    return Wt(t, n, e)
                } catch (s) {
                    return Vs(s) ? s : new Y(s)
                }
            })
              , Iv = Ee(function(t, e) {
                return Ht(e, function(s) {
                    s = pe(s),
                    be(t, s, Gs(t[s], t))
                }),
                t
            });
            function Tv(t) {
                var e = t == null ? 0 : t.length
                  , s = G();
                return t = e ? ht(t, function(a) {
                    if (typeof a[1] != "function")
                        throw new Vt(f);
                    return [s(a[0]), a[1]]
                }) : [],
                j(function(a) {
                    for (var c = -1; ++c < e; ) {
                        var h = t[c];
                        if (Wt(h[0], this, a))
                            return Wt(h[1], this, a)
                    }
                })
            }
            function Rv(t) {
                return ef(Yt(t, B))
            }
            function Xs(t) {
                return function() {
                    return t
                }
            }
            function Pv(t, e) {
                return t == null || t !== t ? e : t
            }
            var Ov = ol()
              , Dv = ol(!0);
            function Ot(t) {
                return t
            }
            function Js(t) {
                return Bo(typeof t == "function" ? t : Yt(t, B))
            }
            function $v(t) {
                return Mo(Yt(t, B))
            }
            function Fv(t, e) {
                return qo(t, Yt(e, B))
            }
            var Bv = j(function(t, e) {
                return function(s) {
                    return ji(s, t, e)
                }
            })
              , Wv = j(function(t, e) {
                return function(s) {
                    return ji(t, s, e)
                }
            });
            function js(t, e, s) {
                var a = _t(e)
                  , c = tr(e, a);
                s == null && !(ft(e) && (c.length || !a.length)) && (s = e,
                e = t,
                t = this,
                c = tr(e, _t(e)));
                var h = !(ft(s) && "chain"in s) || !!s.chain
                  , p = Se(t);
                return Ht(c, function(v) {
                    var b = e[v];
                    t[v] = b,
                    p && (t.prototype[v] = function() {
                        var A = this.__chain__;
                        if (h || A) {
                            var k = t(this.__wrapped__)
                              , P = k.__actions__ = Tt(this.__actions__);
                            return P.push({
                                func: b,
                                args: arguments,
                                thisArg: t
                            }),
                            k.__chain__ = A,
                            k
                        }
                        return b.apply(t, De([this.value()], arguments))
                    }
                    )
                }),
                t
            }
            function Mv() {
                return wt._ === this && (wt._ = dh),
                this
            }
            function ta() {}
            function qv(t) {
                return t = X(t),
                j(function(e) {
                    return No(e, t)
                })
            }
            var Nv = Rs(ht)
              , Uv = Rs(oo)
              , zv = Rs(is);
            function sc(t) {
                return Ws(t) ? ns(pe(t)) : _f(t)
            }
            function Gv(t) {
                return function(e) {
                    return t == null ? n : ei(t, e)
                }
            }
            var Hv = cl()
              , Vv = cl(!0);
            function ea() {
                return []
            }
            function ia() {
                return !1
            }
            function Kv() {
                return {}
            }
            function Yv() {
                return ""
            }
            function Zv() {
                return !0
            }
            function Qv(t, e) {
                if (t = X(t),
                t < 1 || t > Pe)
                    return [];
                var s = ue
                  , a = St(t, ue);
                e = G(e),
                t -= ue;
                for (var c = as(a, e); ++s < t; )
                    e(s);
                return c
            }
            function Xv(t) {
                return Z(t) ? ht(t, pe) : Nt(t) ? [t] : Tt(Cl(at(t)))
            }
            function Jv(t) {
                var e = ++lh;
                return at(t) + e
            }
            var jv = ar(function(t, e) {
                return t + e
            }, 0)
              , ty = Ps("ceil")
              , ey = ar(function(t, e) {
                return t / e
            }, 1)
              , iy = Ps("floor");
            function ny(t) {
                return t && t.length ? jn(t, Ot, vs) : n
            }
            function ry(t, e) {
                return t && t.length ? jn(t, G(e, 2), vs) : n
            }
            function sy(t) {
                return uo(t, Ot)
            }
            function ay(t, e) {
                return uo(t, G(e, 2))
            }
            function oy(t) {
                return t && t.length ? jn(t, Ot, ws) : n
            }
            function ly(t, e) {
                return t && t.length ? jn(t, G(e, 2), ws) : n
            }
            var cy = ar(function(t, e) {
                return t * e
            }, 1)
              , dy = Ps("round")
              , uy = ar(function(t, e) {
                return t - e
            }, 0);
            function hy(t) {
                return t && t.length ? ss(t, Ot) : 0
            }
            function fy(t, e) {
                return t && t.length ? ss(t, G(e, 2)) : 0
            }
            return u.after = $g,
            u.ary = Fl,
            u.assign = Em,
            u.assignIn = Ql,
            u.assignInWith = _r,
            u.assignWith = xm,
            u.at = Sm,
            u.before = Bl,
            u.bind = Gs,
            u.bindAll = Iv,
            u.bindKey = Wl,
            u.castArray = Kg,
            u.chain = Ol,
            u.chunk = ip,
            u.compact = np,
            u.concat = rp,
            u.cond = Tv,
            u.conforms = Rv,
            u.constant = Xs,
            u.countBy = hg,
            u.create = Cm,
            u.curry = Ml,
            u.curryRight = ql,
            u.debounce = Nl,
            u.defaults = Am,
            u.defaultsDeep = Lm,
            u.defer = Fg,
            u.delay = Bg,
            u.difference = sp,
            u.differenceBy = ap,
            u.differenceWith = op,
            u.drop = lp,
            u.dropRight = cp,
            u.dropRightWhile = dp,
            u.dropWhile = up,
            u.fill = hp,
            u.filter = pg,
            u.flatMap = vg,
            u.flatMapDeep = yg,
            u.flatMapDepth = _g,
            u.flatten = Il,
            u.flattenDeep = fp,
            u.flattenDepth = pp,
            u.flip = Wg,
            u.flow = Ov,
            u.flowRight = Dv,
            u.fromPairs = gp,
            u.functions = Dm,
            u.functionsIn = $m,
            u.groupBy = bg,
            u.initial = vp,
            u.intersection = yp,
            u.intersectionBy = _p,
            u.intersectionWith = bp,
            u.invert = Bm,
            u.invertBy = Wm,
            u.invokeMap = Eg,
            u.iteratee = Js,
            u.keyBy = xg,
            u.keys = _t,
            u.keysIn = Pt,
            u.map = fr,
            u.mapKeys = qm,
            u.mapValues = Nm,
            u.matches = $v,
            u.matchesProperty = Fv,
            u.memoize = gr,
            u.merge = Um,
            u.mergeWith = Xl,
            u.method = Bv,
            u.methodOf = Wv,
            u.mixin = js,
            u.negate = mr,
            u.nthArg = qv,
            u.omit = zm,
            u.omitBy = Gm,
            u.once = Mg,
            u.orderBy = Sg,
            u.over = Nv,
            u.overArgs = qg,
            u.overEvery = Uv,
            u.overSome = zv,
            u.partial = Hs,
            u.partialRight = Ul,
            u.partition = Cg,
            u.pick = Hm,
            u.pickBy = Jl,
            u.property = sc,
            u.propertyOf = Gv,
            u.pull = Sp,
            u.pullAll = Rl,
            u.pullAllBy = Cp,
            u.pullAllWith = Ap,
            u.pullAt = Lp,
            u.range = Hv,
            u.rangeRight = Vv,
            u.rearg = Ng,
            u.reject = kg,
            u.remove = kp,
            u.rest = Ug,
            u.reverse = Us,
            u.sampleSize = Tg,
            u.set = Km,
            u.setWith = Ym,
            u.shuffle = Rg,
            u.slice = Ip,
            u.sortBy = Dg,
            u.sortedUniq = Fp,
            u.sortedUniqBy = Bp,
            u.split = vv,
            u.spread = zg,
            u.tail = Wp,
            u.take = Mp,
            u.takeRight = qp,
            u.takeRightWhile = Np,
            u.takeWhile = Up,
            u.tap = ng,
            u.throttle = Gg,
            u.thru = hr,
            u.toArray = Kl,
            u.toPairs = jl,
            u.toPairsIn = tc,
            u.toPath = Xv,
            u.toPlainObject = Zl,
            u.transform = Zm,
            u.unary = Hg,
            u.union = zp,
            u.unionBy = Gp,
            u.unionWith = Hp,
            u.uniq = Vp,
            u.uniqBy = Kp,
            u.uniqWith = Yp,
            u.unset = Qm,
            u.unzip = zs,
            u.unzipWith = Pl,
            u.update = Xm,
            u.updateWith = Jm,
            u.values = Ai,
            u.valuesIn = jm,
            u.without = Zp,
            u.words = nc,
            u.wrap = Vg,
            u.xor = Qp,
            u.xorBy = Xp,
            u.xorWith = Jp,
            u.zip = jp,
            u.zipObject = tg,
            u.zipObjectDeep = eg,
            u.zipWith = ig,
            u.entries = jl,
            u.entriesIn = tc,
            u.extend = Ql,
            u.extendWith = _r,
            js(u, u),
            u.add = jv,
            u.attempt = rc,
            u.camelCase = nv,
            u.capitalize = ec,
            u.ceil = ty,
            u.clamp = tv,
            u.clone = Yg,
            u.cloneDeep = Qg,
            u.cloneDeepWith = Xg,
            u.cloneWith = Zg,
            u.conformsTo = Jg,
            u.deburr = ic,
            u.defaultTo = Pv,
            u.divide = ey,
            u.endsWith = rv,
            u.eq = se,
            u.escape = sv,
            u.escapeRegExp = av,
            u.every = fg,
            u.find = gg,
            u.findIndex = Ll,
            u.findKey = km,
            u.findLast = mg,
            u.findLastIndex = kl,
            u.findLastKey = Im,
            u.floor = iy,
            u.forEach = Dl,
            u.forEachRight = $l,
            u.forIn = Tm,
            u.forInRight = Rm,
            u.forOwn = Pm,
            u.forOwnRight = Om,
            u.get = Ys,
            u.gt = jg,
            u.gte = tm,
            u.has = Fm,
            u.hasIn = Zs,
            u.head = Tl,
            u.identity = Ot,
            u.includes = wg,
            u.indexOf = mp,
            u.inRange = ev,
            u.invoke = Mm,
            u.isArguments = ri,
            u.isArray = Z,
            u.isArrayBuffer = em,
            u.isArrayLike = Rt,
            u.isArrayLikeObject = gt,
            u.isBoolean = im,
            u.isBuffer = Ne,
            u.isDate = nm,
            u.isElement = rm,
            u.isEmpty = sm,
            u.isEqual = am,
            u.isEqualWith = om,
            u.isError = Vs,
            u.isFinite = lm,
            u.isFunction = Se,
            u.isInteger = zl,
            u.isLength = vr,
            u.isMap = Gl,
            u.isMatch = cm,
            u.isMatchWith = dm,
            u.isNaN = um,
            u.isNative = hm,
            u.isNil = pm,
            u.isNull = fm,
            u.isNumber = Hl,
            u.isObject = ft,
            u.isObjectLike = pt,
            u.isPlainObject = an,
            u.isRegExp = Ks,
            u.isSafeInteger = gm,
            u.isSet = Vl,
            u.isString = yr,
            u.isSymbol = Nt,
            u.isTypedArray = Ci,
            u.isUndefined = mm,
            u.isWeakMap = vm,
            u.isWeakSet = ym,
            u.join = wp,
            u.kebabCase = ov,
            u.last = Qt,
            u.lastIndexOf = Ep,
            u.lowerCase = lv,
            u.lowerFirst = cv,
            u.lt = _m,
            u.lte = bm,
            u.max = ny,
            u.maxBy = ry,
            u.mean = sy,
            u.meanBy = ay,
            u.min = oy,
            u.minBy = ly,
            u.stubArray = ea,
            u.stubFalse = ia,
            u.stubObject = Kv,
            u.stubString = Yv,
            u.stubTrue = Zv,
            u.multiply = cy,
            u.nth = xp,
            u.noConflict = Mv,
            u.noop = ta,
            u.now = pr,
            u.pad = dv,
            u.padEnd = uv,
            u.padStart = hv,
            u.parseInt = fv,
            u.random = iv,
            u.reduce = Ag,
            u.reduceRight = Lg,
            u.repeat = pv,
            u.replace = gv,
            u.result = Vm,
            u.round = dy,
            u.runInContext = _,
            u.sample = Ig,
            u.size = Pg,
            u.snakeCase = mv,
            u.some = Og,
            u.sortedIndex = Tp,
            u.sortedIndexBy = Rp,
            u.sortedIndexOf = Pp,
            u.sortedLastIndex = Op,
            u.sortedLastIndexBy = Dp,
            u.sortedLastIndexOf = $p,
            u.startCase = yv,
            u.startsWith = _v,
            u.subtract = uy,
            u.sum = hy,
            u.sumBy = fy,
            u.template = bv,
            u.times = Qv,
            u.toFinite = Ce,
            u.toInteger = X,
            u.toLength = Yl,
            u.toLower = wv,
            u.toNumber = Xt,
            u.toSafeInteger = wm,
            u.toString = at,
            u.toUpper = Ev,
            u.trim = xv,
            u.trimEnd = Sv,
            u.trimStart = Cv,
            u.truncate = Av,
            u.unescape = Lv,
            u.uniqueId = Jv,
            u.upperCase = kv,
            u.upperFirst = Qs,
            u.each = Dl,
            u.eachRight = $l,
            u.first = Tl,
            js(u, function() {
                var t = {};
                return he(u, function(e, s) {
                    ot.call(u.prototype, s) || (t[s] = e)
                }),
                t
            }(), {
                chain: !1
            }),
            u.VERSION = r,
            Ht(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
                u[t].placeholder = u
            }),
            Ht(["drop", "take"], function(t, e) {
                it.prototype[t] = function(s) {
                    s = s === n ? 1 : yt(X(s), 0);
                    var a = this.__filtered__ && !e ? new it(this) : this.clone();
                    return a.__filtered__ ? a.__takeCount__ = St(s, a.__takeCount__) : a.__views__.push({
                        size: St(s, ue),
                        type: t + (a.__dir__ < 0 ? "Right" : "")
                    }),
                    a
                }
                ,
                it.prototype[t + "Right"] = function(s) {
                    return this.reverse()[t](s).reverse()
                }
            }),
            Ht(["filter", "map", "takeWhile"], function(t, e) {
                var s = e + 1
                  , a = s == An || s == xd;
                it.prototype[t] = function(c) {
                    var h = this.clone();
                    return h.__iteratees__.push({
                        iteratee: G(c, 3),
                        type: s
                    }),
                    h.__filtered__ = h.__filtered__ || a,
                    h
                }
            }),
            Ht(["head", "last"], function(t, e) {
                var s = "take" + (e ? "Right" : "");
                it.prototype[t] = function() {
                    return this[s](1).value()[0]
                }
            }),
            Ht(["initial", "tail"], function(t, e) {
                var s = "drop" + (e ? "" : "Right");
                it.prototype[t] = function() {
                    return this.__filtered__ ? new it(this) : this[s](1)
                }
            }),
            it.prototype.compact = function() {
                return this.filter(Ot)
            }
            ,
            it.prototype.find = function(t) {
                return this.filter(t).head()
            }
            ,
            it.prototype.findLast = function(t) {
                return this.reverse().find(t)
            }
            ,
            it.prototype.invokeMap = j(function(t, e) {
                return typeof t == "function" ? new it(this) : this.map(function(s) {
                    return ji(s, t, e)
                })
            }),
            it.prototype.reject = function(t) {
                return this.filter(mr(G(t)))
            }
            ,
            it.prototype.slice = function(t, e) {
                t = X(t);
                var s = this;
                return s.__filtered__ && (t > 0 || e < 0) ? new it(s) : (t < 0 ? s = s.takeRight(-t) : t && (s = s.drop(t)),
                e !== n && (e = X(e),
                s = e < 0 ? s.dropRight(-e) : s.take(e - t)),
                s)
            }
            ,
            it.prototype.takeRightWhile = function(t) {
                return this.reverse().takeWhile(t).reverse()
            }
            ,
            it.prototype.toArray = function() {
                return this.take(ue)
            }
            ,
            he(it.prototype, function(t, e) {
                var s = /^(?:filter|find|map|reject)|While$/.test(e)
                  , a = /^(?:head|last)$/.test(e)
                  , c = u[a ? "take" + (e == "last" ? "Right" : "") : e]
                  , h = a || /^find/.test(e);
                c && (u.prototype[e] = function() {
                    var p = this.__wrapped__
                      , v = a ? [1] : arguments
                      , b = p instanceof it
                      , A = v[0]
                      , k = b || Z(p)
                      , P = function(et) {
                        var nt = c.apply(u, De([et], v));
                        return a && D ? nt[0] : nt
                    };
                    k && s && typeof A == "function" && A.length != 1 && (b = k = !1);
                    var D = this.__chain__
                      , N = !!this.__actions__.length
                      , H = h && !D
                      , J = b && !N;
                    if (!h && k) {
                        p = J ? p : new it(this);
                        var V = t.apply(p, v);
                        return V.__actions__.push({
                            func: hr,
                            args: [P],
                            thisArg: n
                        }),
                        new Kt(V,D)
                    }
                    return H && J ? t.apply(this, v) : (V = this.thru(P),
                    H ? a ? V.value()[0] : V.value() : V)
                }
                )
            }),
            Ht(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
                var e = Wn[t]
                  , s = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru"
                  , a = /^(?:pop|shift)$/.test(t);
                u.prototype[t] = function() {
                    var c = arguments;
                    if (a && !this.__chain__) {
                        var h = this.value();
                        return e.apply(Z(h) ? h : [], c)
                    }
                    return this[s](function(p) {
                        return e.apply(Z(p) ? p : [], c)
                    })
                }
            }),
            he(it.prototype, function(t, e) {
                var s = u[e];
                if (s) {
                    var a = s.name + "";
                    ot.call(bi, a) || (bi[a] = []),
                    bi[a].push({
                        name: e,
                        func: s
                    })
                }
            }),
            bi[sr(n, T).name] = [{
                name: "wrapper",
                func: n
            }],
            it.prototype.clone = Ah,
            it.prototype.reverse = Lh,
            it.prototype.value = kh,
            u.prototype.at = rg,
            u.prototype.chain = sg,
            u.prototype.commit = ag,
            u.prototype.next = og,
            u.prototype.plant = cg,
            u.prototype.reverse = dg,
            u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = ug,
            u.prototype.first = u.prototype.head,
            Vi && (u.prototype[Vi] = lg),
            u
        }
          , vi = sh();
        Qe ? ((Qe.exports = vi)._ = vi,
        Jr._ = vi) : wt._ = vi
    }
    ).call(Pi)
}
)(Or, Or.exports);
var ha = Or.exports;
const D_ = "https://storage.googleapis.com/gweb-earth-maps-platform/impact-calculator";
class $_ {
    constructor(i) {
        this.el = i;
        const n = new URLSearchParams(window.location.search)
          , r = ha.snakeCase(n.get("industry") || "")
          , l = ha.snakeCase(n.get("headquarters") || "")
          , d = ha.snakeCase(n.get("usecase") || "");
        this.el.href = `${D_}/${r}_${l}_${d}.pdf`
    }
}
function Oi(o) {
    return (Oi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
        return typeof i
    }
    : function(i) {
        return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i
    }
    )(o)
}
function F_(o, i) {
    if (!(o instanceof i))
        throw new TypeError("Cannot call a class as a function")
}
function B_(o, i) {
    for (var n = 0; n < i.length; n++) {
        var r = i[n];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value"in r && (r.writable = !0),
        Object.defineProperty(o, r.key, r)
    }
}
function Fc(o, i, n) {
    return i in o ? Object.defineProperty(o, i, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : o[i] = n,
    o
}
function Bc(o, i) {
    if (o == null)
        return {};
    var n, r, l = function(f, S) {
        if (f == null)
            return {};
        var C, F, U = {}, B = Object.keys(f);
        for (F = 0; F < B.length; F++)
            C = B[F],
            S.indexOf(C) >= 0 || (U[C] = f[C]);
        return U
    }(o, i);
    if (Object.getOwnPropertySymbols) {
        var d = Object.getOwnPropertySymbols(o);
        for (r = 0; r < d.length; r++)
            n = d[r],
            i.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(o, n) && (l[n] = o[n])
    }
    return l
}
function I(o, i) {
    var n = i.get(o);
    if (!n)
        throw new TypeError("attempted to get private field on non-instance");
    return n.get ? n.get.call(o) : n.value
}
var W_ = {
    player: "lottie-player"
}
  , Lr = "[lottieInteractivity]:"
  , M_ = function() {
    function o() {
        var r = this
          , l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : W_
          , d = l.actions
          , f = l.container
          , S = l.mode
          , C = l.player
          , F = Bc(l, ["actions", "container", "mode", "player"]);
        if (F_(this, o),
        Wc.set(this, {
            writable: !0,
            value: function() {
                if (r.player) {
                    var L = function() {
                        r.player.addEventListener("enterFrame", I(r, hn)),
                        r.container.addEventListener("mouseenter", I(r, Dt)),
                        r.container.addEventListener("mouseleave", I(r, $t)),
                        r.container.addEventListener("touchstart", I(r, Dt), {
                            passive: !0
                        }),
                        r.container.addEventListener("touchend", I(r, $t), {
                            passive: !0
                        })
                    }
                      , R = function() {
                        r.container.addEventListener("mouseenter", I(r, Dt)),
                        r.container.addEventListener("mouseleave", I(r, $t)),
                        r.container.addEventListener("touchstart", I(r, Dt), {
                            passive: !0
                        }),
                        r.container.addEventListener("touchend", I(r, $t), {
                            passive: !0
                        })
                    };
                    r.stateHandler.set("loop", function() {
                        r.actions[r.interactionIdx].loop ? r.player.loop = parseInt(r.actions[r.interactionIdx].loop) - 1 : r.player.loop = !0,
                        r.player.autoplay = !0
                    }),
                    r.stateHandler.set("autoplay", function() {
                        r.player.loop = !1,
                        r.player.autoplay = !0
                    }),
                    r.stateHandler.set("click", function() {
                        r.player.loop = !1,
                        r.player.autoplay = !1,
                        r.container.addEventListener("click", I(r, ge))
                    }),
                    r.stateHandler.set("hover", function() {
                        r.player.loop = !1,
                        r.player.autoplay = !1,
                        r.container.addEventListener("mouseenter", I(r, ge)),
                        r.container.addEventListener("touchstart", I(r, ge), {
                            passive: !0
                        })
                    }),
                    r.stateHandler.set("hold", R),
                    r.stateHandler.set("pauseHold", R),
                    r.transitionHandler.set("click", function() {
                        r.container.addEventListener("click", I(r, bt))
                    }),
                    r.transitionHandler.set("hover", function() {
                        r.container.addEventListener("mouseenter", I(r, bt)),
                        r.container.addEventListener("touchstart", I(r, bt), {
                            passive: !0
                        })
                    }),
                    r.transitionHandler.set("hold", L),
                    r.transitionHandler.set("pauseHold", L),
                    r.transitionHandler.set("repeat", function() {
                        r.player.loop = !0,
                        r.player.autoplay = !0,
                        r.player.addEventListener("loopComplete", function z() {
                            I(r, Mc).call(r, {
                                handler: z
                            })
                        })
                    }),
                    r.transitionHandler.set("onComplete", function() {
                        r.actions[r.interactionIdx].state === "loop" ? r.player.addEventListener("loopComplete", I(r, Le)) : r.player.addEventListener("complete", I(r, Le))
                    }),
                    r.transitionHandler.set("seek", function() {
                        r.player.stop(),
                        r.player.addEventListener("enterFrame", I(r, un)),
                        r.container.addEventListener("mousemove", I(r, Ue)),
                        r.container.addEventListener("touchmove", I(r, Ri), {
                            passive: !1
                        }),
                        r.container.addEventListener("mouseout", I(r, ze))
                    })
                }
            }
        }),
        ge.set(this, {
            writable: !0,
            value: function() {
                var L = r.actions[r.interactionIdx].forceFlag;
                L || r.player.isPaused !== !0 ? L && I(r, kr).call(r, !0) : I(r, kr).call(r, !0)
            }
        }),
        fa.set(this, {
            writable: !0,
            value: function() {
                r.clickCounter === 0 ? (r.player.play(),
                r.clickCounter++) : (r.clickCounter++,
                r.player.setDirection(-1 * r.player.playDirection),
                r.player.play())
            }
        }),
        bt.set(this, {
            writable: !0,
            value: function() {
                var L = r.actions[r.interactionIdx].forceFlag
                  , R = r.actions[r.interactionIdx].state
                  , z = r.actions[r.interactionIdx].transition;
                if (r.mode === "chain") {
                    if (r.actions[r.interactionIdx].count) {
                        var K = parseInt(r.actions[r.interactionIdx].count);
                        if (r.clickCounter < K - 1)
                            return void (r.clickCounter += 1)
                    }
                    return r.clickCounter = 0,
                    !L && z === "click" && R === "click" || z === "hover" && R === "hover" ? r.transitionHandler.get("onComplete").call() : r.nextInteraction(),
                    r.container.removeEventListener("click", I(r, bt)),
                    void r.container.removeEventListener("mouseenter", I(r, bt))
                }
                L || r.player.isPaused !== !0 ? L && r.player.goToAndPlay(0, !0) : r.player.goToAndPlay(0, !0)
            }
        }),
        Ue.set(this, {
            writable: !0,
            value: function(L) {
                I(r, fn).call(r, L.clientX, L.clientY)
            }
        }),
        Ri.set(this, {
            writable: !0,
            value: function(L) {
                L.cancelable && L.preventDefault(),
                I(r, fn).call(r, L.touches[0].clientX, L.touches[0].clientY)
            }
        }),
        ze.set(this, {
            writable: !0,
            value: function() {
                I(r, fn).call(r, -1, -1)
            }
        }),
        Le.set(this, {
            writable: !0,
            value: function() {
                r.actions[r.interactionIdx].state === "loop" ? r.player.removeEventListener("loopComplete", I(r, Le)) : r.player.removeEventListener("complete", I(r, Le)),
                r.nextInteraction()
            }
        }),
        Mc.set(this, {
            writable: !0,
            value: function(L) {
                var R = L.handler
                  , z = 1;
                r.actions[r.interactionIdx].repeat && (z = r.actions[r.interactionIdx].repeat),
                r.playCounter >= z - 1 ? (r.playCounter = 0,
                r.player.removeEventListener("loopComplete", R),
                r.player.loop = !1,
                r.player.autoplay = !1,
                r.nextInteraction()) : r.playCounter += 1
            }
        }),
        un.set(this, {
            writable: !0,
            value: function() {
                var L = r.actions[r.interactionIdx].frames;
                L && r.player.currentFrame >= parseInt(L[1]) - 1 && (r.player.removeEventListener("enterFrame", I(r, un)),
                r.container.removeEventListener("mousemove", I(r, Ue)),
                r.container.removeEventListener("mouseout", I(r, ze)),
                setTimeout(r.nextInteraction, 0))
            }
        }),
        hn.set(this, {
            writable: !0,
            value: function() {
                var L = r.actions[r.interactionIdx].frames;
                (L && r.player.currentFrame >= L[1] || r.player.currentFrame >= r.player.totalFrames - 1) && (r.player.removeEventListener("enterFrame", I(r, hn)),
                r.container.removeEventListener("mouseenter", I(r, Dt)),
                r.container.removeEventListener("mouseleave", I(r, $t)),
                r.container.removeEventListener("touchstart", I(r, Dt), {
                    passive: !0
                }),
                r.container.removeEventListener("touchend", I(r, $t), {
                    passive: !0
                }),
                r.player.pause(),
                r.holdStatus = !1,
                r.nextInteraction()),
                r.player.playDirection === -1 && L && r.player.currentFrame < L[0] && r.player.pause()
            }
        }),
        Dt.set(this, {
            writable: !0,
            value: function() {
                r.player.playDirection !== -1 && r.holdStatus !== null && r.holdStatus || (r.player.setDirection(1),
                r.player.play(),
                r.holdStatus = !0)
            }
        }),
        $t.set(this, {
            writable: !0,
            value: function() {
                r.actions[r.interactionIdx].transition === "hold" || r.actions[r.interactionIdx].state === "hold" || r.actions[0].type === "hold" ? (r.player.setDirection(-1),
                r.player.play()) : r.actions[r.interactionIdx].transition !== "pauseHold" && r.actions[r.interactionIdx].state !== "pauseHold" && r.actions[0].type !== "pauseHold" || r.player.pause(),
                r.holdStatus = !1
            }
        }),
        pa.set(this, {
            writable: !0,
            value: function() {
                if (r.container.removeEventListener("click", I(r, bt)),
                r.container.removeEventListener("click", I(r, ge)),
                r.container.removeEventListener("mouseenter", I(r, bt)),
                r.container.removeEventListener("touchstart", I(r, bt)),
                r.container.removeEventListener("touchmove", I(r, Ri)),
                r.container.removeEventListener("mouseenter", I(r, ge)),
                r.container.removeEventListener("touchstart", I(r, ge)),
                r.container.removeEventListener("mouseenter", I(r, Dt)),
                r.container.removeEventListener("touchstart", I(r, Dt)),
                r.container.removeEventListener("mouseleave", I(r, $t)),
                r.container.removeEventListener("mousemove", I(r, Ue)),
                r.container.removeEventListener("mouseout", I(r, ze)),
                r.container.removeEventListener("touchend", I(r, $t)),
                r.player)
                    try {
                        r.player.removeEventListener("loopComplete", I(r, Le)),
                        r.player.removeEventListener("complete", I(r, Le)),
                        r.player.removeEventListener("enterFrame", I(r, un)),
                        r.player.removeEventListener("enterFrame", I(r, hn))
                    } catch {}
            }
        }),
        Fc(this, "jumpToInteraction", function(L) {
            I(r, pa).call(r),
            r.interactionIdx = L,
            r.interactionIdx < 0 ? r.interactionIdx = 0 : r.interactionIdx,
            r.nextInteraction(!1)
        }),
        Fc(this, "nextInteraction", function() {
            var L = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
            r.oldInterctionIdx = r.interactionIdx,
            I(r, pa).call(r),
            r.player.loop = !1;
            var R = r.actions[r.interactionIdx].jumpTo;
            R ? R >= 0 && R < r.actions.length ? (r.interactionIdx = R,
            I(r, Jt).call(r, {
                ignorePath: !1
            })) : (r.interactionIdx = 0,
            r.player.goToAndStop(0, !0),
            I(r, Jt).call(r, {
                ignorePath: !1
            })) : (L && r.interactionIdx++,
            r.interactionIdx >= r.actions.length ? r.actions[r.actions.length - 1].reset ? (r.interactionIdx = 0,
            r.player.resetSegments(!0),
            r.actions[r.interactionIdx].frames ? r.player.goToAndStop(r.actions[r.interactionIdx].frames, !0) : r.player.goToAndStop(0, !0),
            I(r, Jt).call(r, {
                ignorePath: !1
            })) : (r.interactionIdx = r.actions.length - 1,
            I(r, Jt).call(r, {
                ignorePath: !1
            })) : I(r, Jt).call(r, {
                ignorePath: !1
            })),
            r.container.dispatchEvent(new CustomEvent("transition",{
                bubbles: !0,
                composed: !0,
                detail: {
                    oldIndex: r.oldInterctionIdx,
                    newIndex: r.interactionIdx
                }
            }))
        }),
        kr.set(this, {
            writable: !0,
            value: function(L) {
                var R = r.actions[r.interactionIdx].frames;
                if (!R)
                    return r.player.resetSegments(!0),
                    void r.player.goToAndPlay(0, !0);
                typeof R == "string" ? r.player.goToAndPlay(R, L) : r.player.playSegments(R, L)
            }
        }),
        qc.set(this, {
            writable: !0,
            value: function() {
                var L = r.actions[r.interactionIdx].path;
                if (!L)
                    if (Oi(r.enteredPlayer) === "object" && r.enteredPlayer.constructor.name === "AnimationItem") {
                        if (L = r.enteredPlayer,
                        r.player === L)
                            return void I(r, Jt).call(r, {
                                ignorePath: !0
                            })
                    } else {
                        var R = (L = r.loadedAnimation).substr(L.lastIndexOf("/") + 1);
                        if (R = R.substr(0, R.lastIndexOf(".json")),
                        r.player.fileName === R)
                            return void I(r, Jt).call(r, {
                                ignorePath: !0
                            })
                    }
                var z = r.container.getBoundingClientRect()
                  , K = "width: " + z.width + "px !important; height: " + z.height + "px !important; background: " + r.container.style.background;
                if (r.container.setAttribute("style", K),
                Oi(r.enteredPlayer) !== "object" || r.enteredPlayer.constructor.name !== "AnimationItem") {
                    if (typeof r.enteredPlayer == "string") {
                        var q = document.querySelector(r.enteredPlayer);
                        q && q.nodeName === "LOTTIE-PLAYER" && (r.attachedListeners || (q.addEventListener("ready", function() {
                            r.container.style.width = "",
                            r.container.style.height = ""
                        }),
                        q.addEventListener("load", function() {
                            r.player = q.getLottie(),
                            I(r, Jt).call(r, {
                                ignorePath: !0
                            })
                        }),
                        r.attachedListeners = !0),
                        q.load(L))
                    } else
                        r.enteredPlayer instanceof HTMLElement && r.enteredPlayer.nodeName === "LOTTIE-PLAYER" && (r.attachedListeners || (r.enteredPlayer.addEventListener("ready", function() {
                            r.container.style.width = "",
                            r.container.style.height = ""
                        }),
                        r.enteredPlayer.addEventListener("load", function() {
                            r.player = r.enteredPlayer.getLottie(),
                            I(r, Jt).call(r, {
                                ignorePath: !0
                            })
                        }),
                        r.attachedListeners = !0),
                        r.enteredPlayer.load(L));
                    if (!r.player)
                        throw new Error("".concat(Lr, " Specified player is invalid."),r.enteredPlayer)
                } else {
                    if (!window.lottie)
                        throw new Error("".concat(Lr, " A Lottie player is required."));
                    r.stop(),
                    r.container.innerHTML = "",
                    Oi(L) === "object" && L.constructor.name === "AnimationItem" ? r.player = window.lottie.loadAnimation({
                        loop: !1,
                        autoplay: !1,
                        animationData: L.animationData,
                        container: r.container
                    }) : r.player = window.lottie.loadAnimation({
                        loop: !1,
                        autoplay: !1,
                        path: L,
                        container: r.container
                    }),
                    r.player.addEventListener("DOMLoaded", function() {
                        r.container.style.width = "",
                        r.container.style.height = "",
                        I(r, Jt).call(r, {
                            ignorePath: !0
                        })
                    })
                }
                r.clickCounter = 0,
                r.playCounter = 0
            }
        }),
        Jt.set(this, {
            writable: !0,
            value: function(L) {
                var R = L.ignorePath
                  , z = r.actions[r.interactionIdx].frames
                  , K = r.actions[r.interactionIdx].state
                  , q = r.actions[r.interactionIdx].transition
                  , T = r.actions[r.interactionIdx].path
                  , g = r.stateHandler.get(K)
                  , y = r.transitionHandler.get(q)
                  , m = r.actions[r.interactionIdx].speed ? r.actions[r.interactionIdx].speed : 1
                  , w = r.actions[r.interactionIdx].delay ? r.actions[r.interactionIdx].delay : 0;
                R || !(T || r.actions[r.actions.length - 1].reset && r.interactionIdx === 0) ? setTimeout(function() {
                    z && (r.player.autoplay = !1,
                    r.player.resetSegments(!0),
                    r.player.goToAndStop(z[0], !0)),
                    g ? g.call() : K === "none" && (r.player.loop = !1,
                    r.player.autoplay = !1),
                    y && y.call(),
                    r.player.autoplay && (r.player.resetSegments(!0),
                    I(r, kr).call(r, !0)),
                    r.player.setSpeed(m)
                }, w) : I(r, qc).call(r)
            }
        }),
        fn.set(this, {
            writable: !0,
            value: function(L, R) {
                if (L !== -1 && R !== -1) {
                    var z = r.getContainerCursorPosition(L, R);
                    L = z.x,
                    R = z.y
                }
                var K = r.actions.find(function(g) {
                    var y = g.position;
                    if (y) {
                        if (Array.isArray(y.x) && Array.isArray(y.y))
                            return L >= y.x[0] && L <= y.x[1] && R >= y.y[0] && R <= y.y[1];
                        if (!Number.isNaN(y.x) && !Number.isNaN(y.y))
                            return L === y.x && R === y.y
                    }
                    return !1
                });
                if (K)
                    if (K.type === "seek" || K.transition === "seek") {
                        var q = (L - K.position.x[0]) / (K.position.x[1] - K.position.x[0])
                          , T = (R - K.position.y[0]) / (K.position.y[1] - K.position.y[0]);
                        r.player.playSegments(K.frames, !0),
                        K.position.y[0] < 0 && K.position.y[1] > 1 ? r.player.goToAndStop(Math.floor(q * r.player.totalFrames), !0) : r.player.goToAndStop(Math.ceil((q + T) / 2 * r.player.totalFrames), !0)
                    } else
                        K.type === "loop" ? r.player.playSegments(K.frames, !0) : K.type === "play" ? (r.player.isPaused === !0 && r.player.resetSegments(),
                        r.player.playSegments(K.frames)) : K.type === "stop" && (r.player.resetSegments(!0),
                        r.player.goToAndStop(K.frames[0], !0))
            }
        }),
        ga.set(this, {
            writable: !0,
            value: function() {
                var L = r.getContainerVisibility()
                  , R = r.actions.find(function(q) {
                    var T = q.visibility;
                    return L >= T[0] && L <= T[1]
                });
                if (R)
                    if (R.type === "seek") {
                        var z = R.frames[0]
                          , K = R.frames.length == 2 ? R.frames[1] : r.player.totalFrames - 1;
                        r.assignedSegment !== null && (r.player.resetSegments(!0),
                        r.assignedSegment = null),
                        r.player.goToAndStop(z + Math.round((L - R.visibility[0]) / (R.visibility[1] - R.visibility[0]) * (K - z)), !0)
                    } else if (R.type === "loop")
                        r.player.loop = !0,
                        (r.assignedSegment === null || r.assignedSegment !== R.frames || r.player.isPaused === !0) && (r.player.playSegments(R.frames, !0),
                        r.assignedSegment = R.frames);
                    else if (R.type === "play" || R.type === "playOnce") {
                        if (R.type === "playOnce" && !r.scrolledAndPlayed)
                            return r.scrolledAndPlayed = !0,
                            r.player.resetSegments(!0),
                            void (R.frames ? r.player.playSegments(R.frames, !0) : r.player.play());
                        R.type === "play" && r.player.isPaused && (r.player.resetSegments(!0),
                        R.frames ? r.player.playSegments(R.frames, !0) : r.player.play())
                    } else
                        R.type === "stop" && r.player.goToAndStop(R.frames[0], !0)
            }
        }),
        this.enteredPlayer = C,
        Oi(C) !== "object" || C.constructor.name !== "AnimationItem") {
            if (typeof C == "string") {
                var U = document.querySelector(C);
                U && U.nodeName === "LOTTIE-PLAYER" && (C = U.getLottie())
            } else
                C instanceof HTMLElement && C.nodeName === "LOTTIE-PLAYER" && (C = C.getLottie());
            if (!C) {
                var B = Lr + "Specified player:" + C + " is invalid.";
                throw new Error(B)
            }
        }
        typeof f == "string" && (f = document.querySelector(f)),
        f || (f = C.wrapper),
        this.player = C,
        this.loadedAnimation = this.player.path + this.player.fileName + ".json",
        this.attachedListeners = !1,
        this.container = f,
        this.mode = S,
        this.actions = d,
        this.options = F,
        this.assignedSegment = null,
        this.scrolledAndPlayed = !1,
        this.interactionIdx = 0,
        this.oldInterctionIdx = 0,
        this.clickCounter = 0,
        this.playCounter = 0,
        this.stateHandler = new Map,
        this.transitionHandler = new Map
    }
    var i, n;
    return i = o,
    (n = [{
        key: "getContainerVisibility",
        value: function() {
            var r = this.container.getBoundingClientRect()
              , l = r.top
              , d = r.height;
            return (window.innerHeight - l) / (window.innerHeight + d)
        }
    }, {
        key: "getContainerCursorPosition",
        value: function(r, l) {
            var d = this.container.getBoundingClientRect()
              , f = d.top;
            return {
                x: (r - d.left) / d.width,
                y: (l - f) / d.height
            }
        }
    }, {
        key: "initScrollMode",
        value: function() {
            this.player.stop(),
            window.addEventListener("scroll", I(this, ga), !0)
        }
    }, {
        key: "initCursorMode",
        value: function() {
            this.actions && this.actions.length === 1 ? this.actions[0].type === "click" ? (this.player.loop = !1,
            this.player.stop(),
            this.container.addEventListener("click", I(this, bt))) : this.actions[0].type === "hover" ? (this.player.loop = !1,
            this.player.stop(),
            this.container.addEventListener("mouseenter", I(this, bt)),
            this.container.addEventListener("touchstart", I(this, bt), {
                passive: !0
            })) : this.actions[0].type === "toggle" ? (this.player.loop = !1,
            this.player.stop(),
            this.container.addEventListener("click", I(this, fa))) : this.actions[0].type === "hold" || this.actions[0].type === "pauseHold" ? (this.container.addEventListener("mouseenter", I(this, Dt)),
            this.container.addEventListener("mouseleave", I(this, $t)),
            this.container.addEventListener("touchstart", I(this, Dt), {
                passive: !0
            }),
            this.container.addEventListener("touchend", I(this, $t), {
                passive: !0
            })) : this.actions[0].type === "seek" && (this.player.loop = !0,
            this.player.stop(),
            this.container.addEventListener("mousemove", I(this, Ue)),
            this.container.addEventListener("touchmove", I(this, Ri), {
                passive: !1
            }),
            this.container.addEventListener("mouseout", I(this, ze))) : (this.player.loop = !0,
            this.player.stop(),
            this.container.addEventListener("mousemove", I(this, Ue)),
            this.container.addEventListener("mouseleave", I(this, ze)),
            I(this, fn).call(this, -1, -1))
        }
    }, {
        key: "initChainMode",
        value: function() {
            I(this, Wc).call(this),
            this.player.loop = !1,
            this.player.stop(),
            I(this, Jt).call(this, {
                ignorePath: !1
            })
        }
    }, {
        key: "start",
        value: function() {
            var r = this;
            this.mode === "scroll" ? this.player.isLoaded ? this.initScrollMode() : this.player.addEventListener("DOMLoaded", function() {
                r.initScrollMode()
            }) : this.mode === "cursor" ? this.player.isLoaded ? this.initCursorMode() : this.player.addEventListener("DOMLoaded", function() {
                r.initCursorMode()
            }) : this.mode === "chain" && (this.player.isLoaded ? this.initChainMode() : this.player.addEventListener("DOMLoaded", function() {
                r.initChainMode()
            }))
        }
    }, {
        key: "redefineOptions",
        value: function(r) {
            var l = r.actions
              , d = r.container
              , f = r.mode
              , S = r.player
              , C = Bc(r, ["actions", "container", "mode", "player"]);
            if (this.stop(),
            this.enteredPlayer = S,
            Oi(S) !== "object" || S.constructor.name !== "AnimationItem") {
                if (typeof S == "string") {
                    var F = document.querySelector(S);
                    F && F.nodeName === "LOTTIE-PLAYER" && (S = F.getLottie())
                } else
                    S instanceof HTMLElement && S.nodeName === "LOTTIE-PLAYER" && (S = S.getLottie());
                if (!S)
                    throw new Error(Lr + "Specified player:" + S + " is invalid.",S)
            }
            typeof d == "string" && (d = document.querySelector(d)),
            d || (d = S.wrapper),
            this.player = S,
            this.loadedAnimation = this.player.path + this.player.fileName + ".json",
            this.attachedListeners = !1,
            this.container = d,
            this.mode = f,
            this.actions = l,
            this.options = C,
            this.assignedSegment = null,
            this.scrolledAndPlayed = !1,
            this.interactionIdx = 0,
            this.clickCounter = 0,
            this.playCounter = 0,
            this.holdStatus = null,
            this.stateHandler = new Map,
            this.transitionHandler = new Map,
            this.start()
        }
    }, {
        key: "stop",
        value: function() {
            if (this.mode === "scroll" && window.removeEventListener("scroll", I(this, ga), !0),
            this.mode === "cursor" && (this.container.removeEventListener("click", I(this, bt)),
            this.container.removeEventListener("click", I(this, fa)),
            this.container.removeEventListener("mouseenter", I(this, bt)),
            this.container.removeEventListener("touchstart", I(this, bt)),
            this.container.removeEventListener("touchmove", I(this, Ri)),
            this.container.removeEventListener("mousemove", I(this, Ue)),
            this.container.removeEventListener("mouseleave", I(this, ze)),
            this.container.removeEventListener("touchstart", I(this, Dt)),
            this.container.removeEventListener("touchend", I(this, $t))),
            this.mode === "chain" && (this.container.removeEventListener("click", I(this, bt)),
            this.container.removeEventListener("click", I(this, ge)),
            this.container.removeEventListener("mouseenter", I(this, bt)),
            this.container.removeEventListener("touchstart", I(this, bt)),
            this.container.removeEventListener("touchmove", I(this, Ri)),
            this.container.removeEventListener("mouseenter", I(this, ge)),
            this.container.removeEventListener("touchstart", I(this, ge)),
            this.container.removeEventListener("mouseenter", I(this, Dt)),
            this.container.removeEventListener("touchstart", I(this, Dt)),
            this.container.removeEventListener("mouseleave", I(this, $t)),
            this.container.removeEventListener("mousemove", I(this, Ue)),
            this.container.removeEventListener("mouseout", I(this, ze)),
            this.container.removeEventListener("touchend", I(this, $t)),
            this.player))
                try {
                    this.player.removeEventListener("loopComplete", I(this, Le)),
                    this.player.removeEventListener("complete", I(this, Le)),
                    this.player.removeEventListener("enterFrame", I(this, un)),
                    this.player.removeEventListener("enterFrame", I(this, hn))
                } catch {}
            this.player && (this.player.destroy(),
            this.player = null)
        }
    }]) && B_(i.prototype, n),
    o
}()
  , Wc = new WeakMap
  , ge = new WeakMap
  , fa = new WeakMap
  , bt = new WeakMap
  , Ue = new WeakMap
  , Ri = new WeakMap
  , ze = new WeakMap
  , Le = new WeakMap
  , Mc = new WeakMap
  , un = new WeakMap
  , hn = new WeakMap
  , Dt = new WeakMap
  , $t = new WeakMap
  , pa = new WeakMap
  , kr = new WeakMap
  , qc = new WeakMap
  , Jt = new WeakMap
  , fn = new WeakMap
  , ga = new WeakMap
  , q_ = function(o) {
    var i = new M_(o);
    return i.start(),
    i
};
class N_ {
    constructor(i) {
        this.el = i,
        this.init()
    }
    init() {
        q_({
            player: `#${this.el.id}`,
            mode: "scroll",
            actions: [{
                visibility: [0, .725],
                type: "playOnce"
            }]
        })
    }
}
const ma = "industry-hero__controls__rings__ring--active-autoplay"
  , Nc = "industry-hero__controls__rings__ring--active"
  , Uc = "industry-hero__slide--active"
  , zc = "industry-hero__slides__foreground__image--active";
class U_ {
    constructor(i, n=ma) {
        this.domWatcher = new ct,
        this.el = i,
        this.auto = !0,
        this.foregroundEls = Array.from(this.el.querySelectorAll("[foreground-image]")),
        this.slidesEl = this.el.querySelector("[slides]"),
        this.slideEls = Array.from(this.el.querySelectorAll("[slide]")),
        this.prevEls = Array.from(this.el.querySelectorAll("[prev]")),
        this.nextEls = Array.from(this.el.querySelectorAll("[next]")),
        this.dotEls = Array.from(this.el.querySelectorAll("[dot]")),
        this.animationEnd = this.el.querySelectorAll("[animation-end]"),
        this.activeDotClass = n,
        this.index = 0,
        this.init()
    }
    init() {
        this.addDefaultListeners(),
        this.updateActiveDot()
    }
    addDefaultListeners() {
        this.prevEls.forEach(i=>{
            this.domWatcher.add({
                element: i,
                on: ["click", "keyup"],
                callback: n=>{
                    this.onClickOrEnterKey(n, ()=>{
                        const r = this.index - 1 < 0 ? this.slideEls.length - 1 : this.index - 1;
                        this.removeAuto(),
                        this.goToSlide(r)
                    }
                    )
                }
            })
        }
        ),
        this.nextEls.forEach(i=>{
            this.domWatcher.add({
                element: i,
                on: ["click", "keyup"],
                callback: n=>{
                    this.onClickOrEnterKey(n, ()=>{
                        const r = this.index + 1 > this.slideEls.length - 1 ? 0 : this.index + 1;
                        this.removeAuto(),
                        this.goToSlide(r)
                    }
                    )
                }
            })
        }
        ),
        this.dotEls && this.dotEls.length && this.dotEls.forEach((i,n)=>{
            this.domWatcher.add({
                element: i,
                on: ["click", "keyup"],
                callback: r=>{
                    this.onClickOrEnterKey(r, ()=>{
                        this.removeAuto(),
                        this.goToSlide(n)
                    }
                    )
                }
            })
        }
        ),
        this.animationEnd && this.animationEnd.length && this.animationEnd.forEach((i,n)=>{
            this.domWatcher.add({
                element: i,
                on: "animationend",
                callback: ()=>this.autoSlide()
            })
        }
        )
    }
    removeAuto() {
        this.auto = !1
    }
    autoSlide() {
        const i = this.index + 1
          , n = i > this.slideEls.length - 1 ? 0 : i;
        this.goToSlide(n)
    }
    onClickOrEnterKey(i, n) {
        i.preventDefault();
        const r = i.type === "click"
          , l = i.type === "keyup" && i.key === "Enter";
        (r || l) && n()
    }
    goToSlide(i) {
        this.index = i,
        this.slideEls.map(n=>{
            n.classList.remove(Uc),
            n.setAttribute("aria-hidden", "true")
        }
        ),
        this.foregroundEls.map(n=>{
            n.classList.remove(zc),
            n.setAttribute("aria-hidden", "true")
        }
        ),
        this.foregroundEls[i]?.classList.add(zc),
        this.slideEls[i].classList.add(Uc),
        this.slideEls[i].removeAttribute("aria-hidden"),
        this.foregroundEls[i]?.removeAttribute("aria-hidden"),
        this.updateActiveDot()
    }
    updateActiveDot() {
        if (!this.dotEls || !this.dotEls.length)
            return;
        const i = this.auto ? ma : Nc;
        this.dotEls.map(n=>{
            n.classList.remove(ma),
            n.classList.remove(Nc)
        }
        ),
        this.dotEls[this.index].classList.add(i)
    }
}
class z_ {
    constructor(i) {
        this.domWatcher = new ct,
        this.element = i,
        this.events = {
            "event-category": this.element.getAttribute("data-category"),
            "event-action": this.element.getAttribute("data-action"),
            "event-label": this.element.getAttribute("data-label")
        },
        this.clickTargetElement = this.element.querySelector("[click-target]"),
        this.iframeVideo = this.element.querySelector("[iframe-video]"),
        this.domWatcher.add({
            element: this.clickTargetElement,
            on: "click",
            callback: this.onClick.bind(this),
            eventOptions: {
                passive: !0
            }
        })
    }
    trackEvents(i) {
        const n = i?.["event-category"]
          , r = i?.["event-action"]
          , l = i?.["event-label"];
        n && r && l && Ge(n, r, l)
    }
    onClick() {
        const i = this.iframeVideo.getAttribute("data-src");
        this.iframeVideo.src = i,
        this.clickTargetElement.classList.add("industry-video__media--video-active"),
        this.trackEvents(this.events)
    }
}
const G_ = " "
  , Gc = "Enter"
  , pn = "ArrowDown"
  , gn = "ArrowUp"
  , Hc = "Escape";
class H_ {
    constructor(i) {
        this.domWatcher = new ct,
        this.el = i,
        this.list = this.el.querySelector("[list]"),
        this.listContainer = this.el.querySelector("[list-container]"),
        this.arrow = this.el.querySelector("[arrow]"),
        this.listItems = this.el.querySelectorAll("[list-item]"),
        this.selected = this.el.querySelector("[selected]"),
        this.listItemIds = [],
        this.init()
    }
    init() {
        this.domWatcher.add({
            element: window,
            on: ["click"],
            callback: ()=>this.closeSelectItem()
        }),
        this.domWatcher.add({
            element: this.selected,
            on: ["click"],
            callback: i=>this.toggleListVisibilityClick(i)
        }),
        this.domWatcher.add({
            element: this.selected,
            on: ["keydown"],
            callback: i=>{
                this.toggleListVisibilityKey(i)
            }
        });
        for (const i of this.listItems)
            this.listItemIds = [...this.listItemIds, `${i.getAttribute("data-locale")}`],
            this.domWatcher.add({
                element: i,
                on: ["click"],
                callback: n=>{
                    this.setSelectedListItem(n)
                }
            }),
            this.domWatcher.add({
                element: i,
                on: ["keydown"],
                callback: n=>{
                    switch (n.key) {
                    case Gc:
                        this.setSelectedListItem(n),
                        this.closeList();
                        return;
                    case pn:
                        this.focusNextListItem(pn);
                        return;
                    case gn:
                        this.focusNextListItem(gn);
                        return;
                    case Hc:
                        this.closeList();
                        return;
                    default:
                        return
                    }
                }
            })
    }
    closeSelectItem() {
        this.list.classList.contains("language-selector__list--open") && this.closeList()
    }
    setSelectedListItem(i) {
        const n = i.target
          , r = document.createTextNode(n.innerText);
        this.selected.innerHTML = null,
        this.selected.appendChild(r),
        this.closeList(),
        window.location.href = `${n.getAttribute("data-link")}`
    }
    closeList() {
        this.list.classList.remove("language-selector__list--open"),
        this.arrow.classList.remove("expanded"),
        this.listContainer.setAttribute("aria-expanded", !1)
    }
    focusNextListItem(i) {
        const n = document.activeElement
          , r = `${n.getAttribute("data-locale")}`;
        if (n.hasAttribute("selected"))
            this.el.querySelector(`[data-locale='${this.listItemIds[0]}']`).focus();
        else {
            const l = this.listItemIds.indexOf(r);
            if (i === pn) {
                if (l < this.listItemIds.length - 1) {
                    const f = this.listItemIds[l + 1];
                    document.querySelector(`[data-locale='${f}'`).focus()
                }
            } else if (i === gn && l > 0) {
                const f = this.listItemIds[l - 1];
                document.querySelector(`[data-locale='${f}'`).focus()
            }
        }
    }
    toggleListVisibilityClick(i) {
        i?.stopPropagation(),
        this.list.classList.toggle("language-selector__list--open"),
        this.arrow.classList.toggle("expanded"),
        this.listContainer.setAttribute("aria-expanded", this.list.classList.contains("language-selector__list--open"))
    }
    toggleListVisibilityKey(i) {
        const n = i.key === G_ || i.key === Gc;
        i.key === Hc && this.closeList(),
        n && this.toggleListVisibilityClick(),
        i.key === pn && this.focusNextListItem(pn),
        i.key === gn && this.focusNextListItem(gn)
    }
}
class V_ {
    constructor(i) {
        this.domWatcher = new ct,
        this.el = i,
        this.isLoaded = !1,
        this.observer = new IntersectionObserver(([n])=>{
            if (n.isIntersecting)
                if (this.isLoaded)
                    this.el.getAttribute("userPaused") !== "true" && this.el.play();
                else {
                    for (var r in n.target.children) {
                        var l = n.target.children[r];
                        typeof l.tagName == "string" && l.tagName === "SOURCE" && (this.el.src = l.getAttribute("data-src") || "")
                    }
                    this.el.load(),
                    this.isLoaded = !0
                }
        }
        ),
        this.init()
    }
    init() {
        this.observer.observe(this.el)
    }
}
class K_ {
    constructor(i) {
        this.domWatcher = new ct,
        this.el = i,
        this.activeGridEl = this.el.querySelector('.pricing-grid__category[tab="1"]'),
        this.tabEls = this.el.querySelectorAll(".pricing-grid__tab"),
        this.categoryEls = this.el.querySelectorAll(".pricing-grid__category"),
        this.categoriesEl = this.el.querySelector(".pricing-grid__categories"),
        this.init()
    }
    init() {
        this.domWatcher.add({
            element: window,
            on: "smartResize",
            callback: ()=>this.onWindowResize()
        }),
        this.tabEls.forEach(n=>{
            this.domWatcher.add({
                element: n,
                on: "click",
                callback: ()=>{
                    const r = n.getAttribute("data-category")
                      , l = n.getAttribute("data-action")
                      , d = n.getAttribute("data-label");
                    r && l && d && Ge(r, l, d),
                    this._setActiveTab(n)
                }
                ,
                eventOptions: {
                    passive: !1
                }
            }),
            n.getAttribute("tab") === "1" && setTimeout(()=>{
                this._setActiveTab(n)
            }
            , 100)
        }
        ),
        this.el.querySelectorAll(".pricing-grid__api--range").forEach(n=>{
            this.initSlider(n)
        }
        )
    }
    onWindowResize() {
        this._setGridHeight()
    }
    initSlider(i) {
        this._updateCost(i),
        this.domWatcher.add({
            element: i.querySelector(".pricing-grid__api__usage__amount"),
            on: "input",
            callback: ()=>this._updateCost(i),
            eventOptions: {
                passive: !1
            }
        }),
        this.domWatcher.add({
            element: i.querySelector(".pricing-grid__api__usage__amount"),
            on: "change",
            callback: n=>{
                const r = n.target;
                if (r) {
                    const l = r.getAttribute("data-category")
                      , d = r.getAttribute("data-action")
                      , f = r.getAttribute("data-label");
                    l && d && f && Ge(l, d, f)
                }
            }
            ,
            eventOptions: {
                passive: !1
            }
        })
    }
    _setActiveTab(i) {
        this.tabEls.forEach(r=>{
            r !== i && r.classList.remove("pricing-grid__tab--active")
        }
        ),
        i.classList.add("pricing-grid__tab--active");
        const n = i.getAttribute("tab");
        n && this.categoryEls.forEach(r=>{
            r.getAttribute("tab") === n ? (r.classList.add("pricing-grid__category--active"),
            this.activeGridEl = r,
            this._setGridHeight(),
            this._toggleKeyboardNav(r, !0)) : (r.classList.remove("pricing-grid__category--active"),
            this._toggleKeyboardNav(r, !1))
        }
        )
    }
    _setGridHeight() {
        const i = this.activeGridEl.querySelector(".pricing-grid__category__wrap");
        i && (this.categoriesEl.style.height = `${i.scrollHeight}px`)
    }
    _updateCost(i) {
        const n = i.querySelector(".pricing-grid__api__usage__amount")
          , r = i.querySelector(".pricing-grid__api__usage__amount__value")
          , l = i.querySelector(".pricing-grid__api__cost");
        if (n && l) {
            const d = JSON.parse(l.getAttribute("costs") || "{}")
              , f = parseInt(l.getAttribute("tier-1-max")) || 1e5
              , S = f + 1
              , C = parseFloat(d.unitCost1 || "")
              , F = parseFloat(d.unitSize1 || "")
              , U = parseFloat(d.unitCost2 || "")
              , B = parseFloat(d.unitSize2 || "")
              , L = parseFloat(n.value) || 0
              , R = document.documentElement.lang;
            r && (r.textContent = new Intl.NumberFormat(R).format(L));
            let z = 0;
            L > S ? z = C / F * f + U / B * (L - f) : z = C / F * L;
            const K = l.querySelector("localized-price");
            K && K.setAttribute("amount", z.toFixed(3));
            const q = n.getAttribute("max");
            if (q) {
                const T = parseFloat(q);
                L === T ? i.classList.add("pricing-grid__api--max") : i.classList.remove("pricing-grid__api--max")
            }
        }
    }
    _toggleKeyboardNav(i, n) {
        i.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])').forEach(l=>{
            n ? l.setAttribute("tabindex", "0") : l.setAttribute("tabindex", "-1")
        }
        )
    }
}
const Vc = "resource-cards__toggle--expanded"
  , Y_ = 9;
class Kc {
    constructor(i, n) {
        this.domWatcher = new ct,
        this.el = i,
        this.toggleEl = document.querySelector("[resources-toggle]"),
        this.maxVisibleCards = n || Y_,
        this.isExpanded = !1,
        this.visibleCards = [],
        this.init()
    }
    init() {
        this.toggleEl && (this.domWatcher.add({
            element: document.documentElement,
            on: $r.CHANGE,
            callback: i=>{
                this.visibleCards = Array.from(document.querySelectorAll(".sf-resource-card:not(.sf-cards--filtered)")),
                this.showLessCards(),
                this.hideOrShowToggle()
            }
            ,
            eventOptions: {
                passive: !0
            }
        }),
        this.domWatcher.add({
            element: this.toggleEl,
            on: "click",
            callback: i=>{
                this.toggleCards()
            }
        }))
    }
    hideOrShowToggle() {
        this.toggleEl.style.display = this.visibleCards.length <= this.maxVisibleCards ? "none" : ""
    }
    toggleCards() {
        this.isExpanded ? (this.showLessCards(),
        this.el.scrollIntoView({
            behavior: "auto",
            block: "end"
        })) : this.showMoreCards()
    }
    showMoreCards() {
        let i = 0;
        this.toggleEl.classList.add(Vc),
        this.visibleCards.map((n,r)=>{
            n.classList.contains("sf-cards--hide") && (n.classList.remove("sf-cards--hide"),
            n.style.setProperty("transition-delay", `${i * 50}ms`, "important"),
            n.classList.add("sf-cards--show"),
            n.addEventListener("transitionend", ()=>{
                n.classList.remove("sf-cards--show"),
                n.style.transitionDelay = ""
            }
            ),
            i++)
        }
        ),
        this.isExpanded = !0
    }
    showLessCards() {
        this.toggleEl.classList.remove(Vc),
        this.visibleCards.map((i,n)=>{
            n > this.maxVisibleCards - 1 && i.classList.add("sf-cards--hide")
        }
        ),
        this.isExpanded = !1
    }
}
const Z_ = ".share-facebook"
  , Q_ = ".share-twitter"
  , X_ = ".share-linkedin"
  , J_ = ".share-email";
class j_ {
    constructor(i) {
        this.el = i,
        this.shareTitle = this.el.dataset.shareTitle,
        this.shareDescription = this.el.dataset.shareDescription,
        a_(()=>{
            this.setUpFacebook(),
            this.setUpTwitter(),
            this.setUpLinkedin(),
            this.setUpEmail()
        }
        )
    }
    trackEvents(i) {
        Ge("social", "click to share", i)
    }
    setUpFacebook() {
        const i = this.el.querySelector(Z_)
          , n = ()=>{
            const r = this.getEncodedShareUrl();
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${r}`, "pop", "width=600, height=400, scrollbars=no"),
            this.trackEvents("facebook")
        }
        ;
        i.addEventListener("click", n)
    }
    setUpTwitter() {
        const i = this.el.querySelector(Q_)
          , n = ()=>{
            const r = this.getShareMessageBody();
            window.open(`https://twitter.com/intent/tweet?text=${r}`, "pop", "width=600, height=400, scrollbars=no"),
            this.trackEvents("twitter")
        }
        ;
        i.addEventListener("click", n)
    }
    setUpLinkedin() {
        const i = this.el.querySelector(X_)
          , n = ()=>{
            const r = this.getEncodedShareUrl();
            window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${r}`, "pop", "width=600, height=400, scrollbars=no"),
            this.trackEvents("linkedin")
        }
        ;
        i.addEventListener("click", n)
    }
    setUpEmail() {
        const i = this.el.querySelector(J_);
        i.target = "_blank",
        i.href = `mailto:?subject=${this.shareTitle}&body=${this.shareDescription} ${this.getShareUrl()}`
    }
    getShareUrl() {
        return location.protocol + "//" + location.host + location.pathname
    }
    getEncodedShareUrl() {
        return encodeURIComponent(this.getShareUrl())
    }
    getShareMessageBody() {
        const i = this.getShareUrl();
        return encodeURIComponent(`${this.shareTitle} ${i}`)
    }
}
class tb {
    constructor(i) {
        this.el = i,
        this.init()
    }
    init() {
        cd(this.el)
    }
}
function va() {
    return Date.now()
}
function eb(o, i) {
    return i - o
}
function ib(o) {
    return Object.is(o, -0) ? 0 : o
}
function nb(o, i, n) {
    return Math.min(Math.max(n, o), i)
}
function rb(o) {
    return nb(0, 1, ib(o))
}
var sb = class {
    constructor() {
        this.resolve = ()=>{}
        ,
        this.reject = ()=>{}
        ,
        this.complete = !1,
        this.promise = new Promise((o,i)=>{
            this.resolve = n=>(this.complete = !0,
            o(n)),
            this.reject = n=>(this.complete = !0,
            i(n))
        }
        )
    }
    getPromise() {
        return this.complete ? new Promise(o=>{
            o()
        }
        ) : this.promise
    }
}
  , ab = class {
    static inview(o, i={}, n) {
        let r = null
          , l = null
          , d = null
          , f = !1;
        const S = new sb
          , C = ()=>({
            changes: r,
            lastChange: l,
            inview: d,
            ready: f
        })
          , F = R=>{
            R.length >= 1 && (r = R,
            l = R.slice(-1)[0],
            d = l.isIntersecting,
            f = !0,
            S.resolve()),
            n && n(o, R.slice(-1)[0], B)
        }
        ;
        let U = window.location.search.split("evBypass=")[1];
        if (U = U && U.split("&")[0],
        U === "true")
            return window.setTimeout(()=>{
                n && n(o, {
                    isIntersecting: !0,
                    isVisible: !0
                }, ()=>{}
                ),
                S.resolve()
            }
            ),
            {
                observer: null,
                dispose: ()=>{}
                ,
                state: ()=>({
                    ready: !0,
                    inview: !0
                }),
                readyPromise: S.getPromise()
            };
        const B = ()=>{
            L && L.unobserve(o),
            L && L.disconnect(),
            r = [],
            l = null
        }
          , L = new IntersectionObserver(F,i);
        return L.observe(o),
        {
            observer: L,
            dispose: B,
            state: C,
            readyPromise: S.getPromise()
        }
    }
}
  , ob = class {
    constructor(o) {
        this.isReadWriteOnly = !1,
        this.callbacks = [],
        this.isDisposed = !1,
        this.raf_ = null,
        this.frame = null,
        this.lastUpdateTime = 0,
        this.fps = 0,
        this.currentFps = 0,
        this.isPlaying = !1,
        this.isRunningRaf = !1,
        this.callbacks = [],
        this.runCondition = null,
        this.delta = 0,
        this.elaspedTime = 0,
        this.startTime = 0,
        o ? this.watch(o) : this.isReadWriteOnly = !0,
        window.DEGU_RAF_REGISTRY && window.DEGU_RAF_REGISTRY.register(this)
    }
    watch(o) {
        this.callbacks.push(o)
    }
    setReadWriteMode(o) {
        this.isReadWriteOnly = o
    }
    preRead(o) {
        window.DEGU_RAF_REGISTRY && window.DEGU_RAF_REGISTRY.addOneTimePreRead({
            callback: o,
            raf: this
        })
    }
    read(o) {
        window.DEGU_RAF_REGISTRY && window.DEGU_RAF_REGISTRY.addOneTimeRead({
            callback: o,
            raf: this
        })
    }
    waitRead() {
        return new Promise(o=>{
            window.DEGU_RAF_REGISTRY && window.DEGU_RAF_REGISTRY.addOneTimeRead({
                callback: ()=>{
                    o()
                }
                ,
                raf: this
            })
        }
        )
    }
    write(o) {
        window.DEGU_RAF_REGISTRY && window.DEGU_RAF_REGISTRY.addOneTimeWrite({
            callback: o,
            raf: this
        })
    }
    waitWrite() {
        return new Promise(o=>{
            window.DEGU_RAF_REGISTRY && window.DEGU_RAF_REGISTRY.addOneTimeWrite({
                callback: ()=>{
                    o()
                }
                ,
                raf: this
            })
        }
        )
    }
    postWrite(o) {
        window.DEGU_RAF_REGISTRY && window.DEGU_RAF_REGISTRY.addOneTimePostWrite({
            callback: o,
            raf: this
        })
    }
    unwatch(o) {
        this.callbacks = this.callbacks.filter(i=>i === o)
    }
    runWhen(o) {
        this.runCondition = o
    }
    runWhenElementIsInview(o, i) {
        return this.ev && this.ev.dispose(),
        this.runCondition = null,
        this.ev = ab.inview(o, i || {}),
        this.runWhen(()=>this.ev && this.ev.state().inview),
        this.ev.readyPromise
    }
    setFps(o) {
        this.fps = o
    }
    start(o=!1) {
        !o && this.isPlaying || (this.startTime = (typeof performance > "u" ? Date : performance).now(),
        this.animationLoop_(),
        this.isPlaying = !0)
    }
    stop() {
        this.isPlaying = !1,
        window.cancelAnimationFrame(this.raf_),
        this.isRunningRaf = !1
    }
    dispose() {
        this.ev && this.ev.dispose(),
        this.callbacks = [],
        this.isDisposed = !0,
        this.stop(),
        window.DEGU_RAF_REGISTRY && window.DEGU_RAF_REGISTRY.unregister(this)
    }
    getDelta(o) {
        return o ? this.delta / 1e3 : this.delta
    }
    getElapsedTime() {
        return this.elaspedTime
    }
    getStartTime() {
        return this.startTime
    }
    getCurrentFps() {
        return this.currentFps
    }
    animationLoop_() {
        if (!this.isRunningRaf) {
            if (this.raf_ = window.requestAnimationFrame(o=>{
                this.frame = o,
                this.isRunningRaf = !1,
                this.animationLoop_()
            }
            ),
            this.isRunningRaf = !0,
            this.lastUpdateTime) {
                const i = Date.now() - this.lastUpdateTime;
                this.delta = i,
                this.elaspedTime += i / 1e3;
                const n = this.fps === 0 ? 0 : 1e3 / this.fps;
                this.currentFps = 1e3 / i,
                i > n && (this.callbacks && this.callbacks.forEach(r=>{
                    const l = ()=>{
                        r(this.frame, this.lastUpdateTime, i, ()=>{
                            this.stop()
                        }
                        )
                    }
                    ;
                    this.runCondition ? this.runCondition() && l() : l()
                }
                ),
                this.lastUpdateTime = Date.now())
            }
            this.lastUpdateTime || (this.lastUpdateTime = Date.now())
        }
    }
}
  , mn = class {
    constructor() {
        this.flushScheduled = !1,
        this.preReads = [],
        this.reads = [],
        this.writes = [],
        this.postWrites = [],
        this.rafs = []
    }
    static runRafCallbacks(o) {
        for (; o.length; ) {
            const i = o.splice(0, 1)[0];
            !i.raf.isDisposed && (i.raf.isPlaying || i.raf.isReadWriteOnly) && i.callback()
        }
    }
    start() {
        this.flushScheduled || (this.flushScheduled = !0,
        requestAnimationFrame(()=>{
            this.runRaf()
        }
        ))
    }
    runRaf() {
        window.DEGU_RAF_REGISTRY_DEBUG && console.log("Running raf", this.reads.length, this.writes.length),
        mn.runRafCallbacks(this.preReads),
        mn.runRafCallbacks(this.reads),
        mn.runRafCallbacks(this.writes),
        mn.runRafCallbacks(this.postWrites),
        this.flushScheduled = !1,
        (this.preReads.length || this.reads.length || this.writes.length || this.postWrites.length) && this.start()
    }
    addOneTimePreRead(o) {
        this.preReads.push(o),
        this.start()
    }
    addOneTimeRead(o) {
        this.reads.push(o),
        this.start()
    }
    addOneTimeWrite(o) {
        this.writes.push(o),
        this.start()
    }
    addOneTimePostWrite(o) {
        this.postWrites.push(o),
        this.start()
    }
    getActiveRafCount() {
        return this.rafs.filter(o=>o.isPlaying).length
    }
    getRafCount() {
        return this.rafs.length
    }
    register(o) {
        this.rafs.push(o)
    }
    unregister(o) {
        this.rafs = this.rafs.filter(i=>i === o)
    }
}
;
typeof window < "u" && !window.DEGU_RAF_REGISTRY && (window.DEGU_RAF_REGISTRY = new mn);
var vd = class {
    constructor(o) {
        this.rafLoop = o,
        this.raf = new ob(()=>{
            this.animationLoop_()
        }
        ),
        this.duration = 0,
        this.progress = 0,
        this.timeElapsed = 0,
        this.timeSnapshot = 0,
        this.playing = !1,
        this.completeCallback = null
    }
    animationLoop_() {
        if (!this.playing)
            return;
        const o = eb(this.timeSnapshot, va());
        this.timeElapsed += o,
        this.progress = rb(this.timeElapsed / this.duration),
        this.timeSnapshot = va(),
        this.progress < 1 ? this.rafLoop && this.rafLoop(this.progress) : (this.rafLoop && this.rafLoop(1),
        this.reset(),
        this.raf.stop(),
        this.completeCallback && this.completeCallback(1))
    }
    setDuration(o) {
        this.duration = o
    }
    setFps(o) {
        this.raf.setFps(o)
    }
    onComplete(o) {
        this.completeCallback = o
    }
    play() {
        this.playing || (this.playing = !0,
        this.timeSnapshot = va(),
        this.raf.start())
    }
    reset() {
        this.playing = !1,
        this.raf.stop(),
        this.timeElapsed = 0
    }
    pause() {
        this.raf.stop(),
        this.playing = !1
    }
    dispose() {
        this.raf.dispose()
    }
}
;
const Ir = "--active"
  , Tr = "--inactive";
class lb {
    constructor(i) {
        if (this.domWatcher = new ct,
        this.el = i,
        this.tabEls = Array.from(this.el.querySelectorAll("[tab]")),
        this.tabImageEls = Array.from(this.el.querySelectorAll("[tab-image]")),
        this.index = 0,
        this.count = this.tabEls.length,
        this.duration = 6e3,
        this.isAutoplay = !0,
        !this.el)
            throw new Error("No tabs element defined");
        setTimeout(()=>{
            this.init()
        }
        , hd() ? 500 : 0)
    }
    init() {
        this.domWatcher.add({
            element: window,
            on: "smartResize",
            callback: ()=>this.onWindowResize()
        }),
        this.domWatcher.add({
            element: this.el,
            on: "click",
            callback: i=>{
                this.onTabClick(i)
            }
        }),
        this.rafTimer = new vd(i=>{
            this.updateProgress(this.tabEls[this.index], i)
        }
        ),
        this.rafTimer.onComplete(()=>{
            this.isAutoplay && this.resetProgress()
        }
        ),
        this.rafTimer.setDuration(this.duration),
        this.resetProgress(!0),
        this.pause(),
        md.inview(this.el, {
            threshold: .75
        }, (i,n)=>{
            this.isAutoplay && (n.isIntersecting ? this.play() : this.pause())
        }
        ),
        this.onWindowResize()
    }
    onWindowResize() {
        this.tabEls.forEach(i=>{
            const n = i.querySelector("[tab-content]");
            n && (pc(n, {
                height: "auto"
            }),
            oe(n, {
                "--tab-height": "auto"
            }),
            oe(n, {
                "--tab-height": `${n.getBoundingClientRect().height}px`
            }),
            pc(n, {
                height: "0px"
            }))
        }
        )
    }
    onTabClick(i) {
        const n = i.target.closest("[tab]");
        if (this.isAutoplay = !1,
        n && n.hasAttribute("tab-index")) {
            i.preventDefault();
            const r = parseInt(n.getAttribute("tab-index"));
            isNaN(r) || this.activateTab(r)
        }
    }
    activateTab(i) {
        this.updateProgress(this.tabEls[this.index], 0),
        this.updateActiveTab(i),
        this.isAutoplay ? (this.reset(),
        this.play()) : (this.pause(),
        this.updateProgress(this.tabEls[this.index], 1))
    }
    resetProgress(i) {
        const n = this.index === this.count - 1;
        this.activateTab(n || i ? 0 : this.index + 1)
    }
    updateProgress(i, n) {
        oe(i, {
            "--tab-progress": n,
            "--tab-transition": this.isAutoplay && n ? "none" : "transform 0.5s cubic-bezier(0.65, 0, 0.35, 1)"
        })
    }
    updateActiveTab(i) {
        this.tabEls[this.index].classList.remove(Ir),
        this.tabEls[this.index].classList.add(Tr),
        this.tabImageEls[this.index].classList.remove(Ir),
        this.tabImageEls[this.index].classList.add(Tr),
        this.index = i,
        this.tabEls[this.index].classList.add(Ir),
        this.tabEls[this.index].classList.remove(Tr),
        this.tabImageEls[this.index].classList.add(Ir),
        this.tabImageEls[this.index].classList.remove(Tr)
    }
    reset() {
        this.rafTimer.reset()
    }
    pause() {
        this.rafTimer.pause()
    }
    play() {
        this.rafTimer.play()
    }
}
const Yc = "testimonials-carousel__main__dots__dot--active"
  , Zc = "testimonials-carousel__logos__logo--active"
  , Qc = "testimonials-carousel__main__slides__background--active";
class cb {
    constructor(i) {
        this.domWatcher = new ct,
        this.el = i,
        this.slidesEl = this.el.querySelector("[slides]"),
        this.slideEls = Array.from(this.el.querySelectorAll("[slide]")),
        this.prevEl = this.el.querySelector("[prev]"),
        this.nextEl = this.el.querySelector("[next]"),
        this.dotEls = Array.from(this.el.querySelectorAll("[dot]")),
        this.logosEl = this.el.querySelector("[logos]"),
        this.logoEls = Array.from(this.el.querySelectorAll("[logo]")),
        this.backgrounds = Array.from(this.el.querySelectorAll("[slide-background]")),
        this.index = 0,
        this.logoBounds = this.logosEl && this.logoEls[0].getBoundingClientRect(),
        this.slideBounds = this.slideEls[0].getBoundingClientRect(),
        this.init()
    }
    init() {
        this.domWatcher.add({
            element: window,
            on: "smartResize",
            callback: ()=>this.onWindowResize()
        }),
        this.domWatcher.add({
            element: this.slidesEl,
            on: "keyup",
            callback: i=>this.onKeyUp(i)
        }),
        this.domWatcher.add({
            element: this.slidesEl,
            on: "scroll",
            callback: ()=>{
                this.index = Math.round(this.slidesEl.scrollLeft / this.slideBounds.width),
                this.updateActiveDot(),
                this.updateActiveLogo(),
                this.updateSlideBackground()
            }
        }),
        this.prevEl && this.domWatcher.add({
            element: this.prevEl,
            on: ["click", "keyup"],
            callback: i=>{
                this.onClickOrEnterKey(i, ()=>{
                    this.prevSlide()
                }
                )
            }
        }),
        this.nextEl && this.domWatcher.add({
            element: this.nextEl,
            on: ["click", "keyup"],
            callback: i=>{
                this.onClickOrEnterKey(i, ()=>{
                    this.nextSlide()
                }
                )
            }
        }),
        this.dotEls && this.dotEls.length && this.dotEls.forEach((i,n)=>{
            this.domWatcher.add({
                element: i,
                on: ["click", "keyup"],
                callback: r=>{
                    this.onClickOrEnterKey(r, ()=>{
                        this.goToSlide(n)
                    }
                    )
                }
            })
        }
        ),
        this.logoEls && this.logoEls.length && this.logoEls.forEach((i,n)=>{
            this.domWatcher.add({
                element: i,
                on: ["click", "keyup"],
                callback: r=>{
                    this.onClickOrEnterKey(r, ()=>{
                        this.goToSlide(n)
                    }
                    )
                }
            })
        }
        ),
        this.updateActiveDot(),
        this.goToSlide(0),
        setTimeout(()=>{
            this.onWindowResize()
        }
        , 500)
    }
    onClickOrEnterKey(i, n) {
        i.preventDefault();
        const r = i.type === "click"
          , l = i.type === "keyup" && i.key === "Enter";
        (r || l) && n()
    }
    onKeyUp(i) {
        const n = ["Left", "ArrowLeft"]
          , r = ["Right", "ArrowRight"]
          , l = i.type === "keyup" && n.includes(i.key)
          , d = i.type === "keyup" && r.includes(i.key);
        l ? this.prevSlide() : d && this.nextSlide()
    }
    onWindowResize() {
        this.slideBounds = this.slideEls[0].getBoundingClientRect(),
        this.goToSlide(0)
    }
    prevSlide(i=null) {
        this.index > 0 ? this.goToSlide(this.index - 1, i) : this.goToSlide(this.slideEls.length - 1, i)
    }
    nextSlide(i=null) {
        this.index < this.slideEls.length - 1 ? this.goToSlide(this.index + 1, i) : this.goToSlide(0, i)
    }
    goToLogo(i) {
        if (window.matchMedia("(max-width: 1023px)").matches) {
            const l = this.logoEls[i].getBoundingClientRect()
              , d = this.logosEl.scrollLeft + l.left - .5 * this.logosEl.offsetWidth + .5 * l.width;
            this.logosEl.scrollTo({
                top: 0,
                left: d,
                behavior: "smooth"
            })
        }
    }
    goToSlide(i, n=null) {
        this.index = i,
        this.slidesEl.scrollTo({
            top: 0,
            left: this.slideBounds.width * i,
            behavior: "smooth"
        }),
        this.updateActiveDot(),
        this.updateActiveLogo(),
        this.updateSlideBackground()
    }
    updateSlideBackground() {
        this.backgrounds.forEach(i=>{
            const n = i.getAttribute("data-slide-index");
            n && this.index === parseInt(n) ? i.classList.add(Qc) : i.classList.remove(Qc)
        }
        )
    }
    updateActiveDot() {
        !this.dotEls || !this.dotEls.length || (this.dotEls.map(i=>{
            i.classList.remove(Yc)
        }
        ),
        this.slideEls[this.index].getAttribute("opt-fullbleed") !== null ? this.el.classList.add("dots-theme--dark") : this.el.classList.remove("dots-theme--dark"),
        this.dotEls[this.index].classList.add(Yc))
    }
    updateActiveLogo() {
        !this.logoEls || !this.logoEls.length || (this.logoEls.map(i=>{
            i.classList.remove(Zc)
        }
        ),
        this.logoEls[this.index].classList.add(Zc),
        this.goToLogo(this.index))
    }
}
function yd(o) {
    return o
}
function db(o) {
    return Object.is(o, -0) ? 0 : o
}
function ub(o, i, n) {
    return Math.min(Math.max(n, o), i)
}
function hb(o, i) {
    const n = o / 2
      , r = i / 2;
    return n - r
}
function fb(o) {
    return ub(0, 1, db(o))
}
function pb(o) {
    return fb(o)
}
function Dr(o, i, n) {
    const r = pb(n);
    return (1 - r) * o + r * i
}
function gb(o, i, n, r=yd) {
    return n = r(n),
    Dr(o, i, n)
}
function mb(o, i, n, r=yd) {
    return gb(o, i, n, r)
}
const Xc = "usecase-carousel__controls__links__link--active";
class vb {
    constructor(i) {
        this.domWatcher = new ct,
        this.el = i,
        this.slidesEl = this.el.querySelector("[slides]"),
        this.slideEls = Array.from(this.el.querySelectorAll("[slide]")),
        this.prevEl = this.el.querySelector("[prev]"),
        this.nextEl = this.el.querySelector("[next]"),
        this.linksEl = this.el.querySelector("[links]"),
        this.linkEls = Array.from(this.el.querySelectorAll("[link]")),
        this.index = 0,
        this.linkBounds = this.linkEls[0].getBoundingClientRect(),
        this.slideBounds = this.slideEls[0].getBoundingClientRect(),
        this.init()
    }
    init() {
        this.domWatcher.add({
            element: window,
            on: "smartResize",
            callback: ()=>this.onWindowResize()
        }),
        this.prevEl && this.domWatcher.add({
            element: this.prevEl,
            on: ["click", "keyup"],
            callback: i=>{
                this.onClickOrEnterKey(i, ()=>{
                    this.prevSlide()
                }
                )
            }
        }),
        this.nextEl && this.domWatcher.add({
            element: this.nextEl,
            on: ["click", "keyup"],
            callback: i=>{
                this.onClickOrEnterKey(i, ()=>{
                    this.nextSlide()
                }
                )
            }
        }),
        this.slidesEl && this.detectMobileDrag(),
        this.linkEls && this.linkEls.length && this.linkEls.forEach((i,n)=>{
            this.domWatcher.add({
                element: i,
                on: ["click", "keyup"],
                callback: r=>{
                    this.onClickOrEnterKey(r, ()=>{
                        this.goToSlide(n)
                    }
                    )
                }
            })
        }
        ),
        this.updateActiveDot(),
        this.goToSlide(0),
        setTimeout(()=>{
            this.onWindowResize()
        }
        , 500)
    }
    detectMobileDrag() {
        const i = {
            root: this.slidesEl,
            rootMargin: "0px",
            threshold: .5
        }
          , n = new IntersectionObserver((r,l)=>{
            r.forEach(d=>{
                const f = d.target.getAttribute("data-index");
                d.isIntersecting && (this.goToLink(Number(f)),
                this.index = Number(f),
                this.updateActiveDot())
            }
            )
        }
        ,i);
        this.slideEls.forEach(r=>{
            n.observe(r)
        }
        )
    }
    onClickOrEnterKey(i, n) {
        i.preventDefault();
        const r = i.type === "click"
          , l = i.type === "keyup" && i.key === "Enter";
        (r || l) && n()
    }
    onWindowResize() {
        this.slideBounds = this.slideEls[0].getBoundingClientRect(),
        this.goToSlide(0)
    }
    goToLink(i) {
        if (window.matchMedia("(max-width: 1024px)").matches) {
            const r = this.linkEls[i]
              , l = this.linksEl.offsetWidth
              , d = r.offsetWidth
              , f = hb(l, d);
            let S = this.linkEls[i].offsetLeft;
            S -= f,
            this.linksEl.scrollTo({
                top: 0,
                left: S,
                behavior: "smooth"
            })
        }
    }
    prevSlide() {
        this.index > 0 ? this.goToSlide(this.index - 1) : this.goToSlide(this.slideEls.length - 1)
    }
    nextSlide() {
        this.index < this.slideEls.length - 1 ? this.goToSlide(this.index + 1) : this.goToSlide(0)
    }
    goToSlide(i) {
        this.index = i,
        this.goToLink(i),
        this.slidesEl.scrollTo({
            top: 0,
            left: this.slideBounds.width * i,
            behavior: "smooth"
        }),
        this.updateActiveDot()
    }
    updateActiveDot() {
        !this.linkEls || !this.linkEls.length || (this.linkEls.map(i=>{
            i.classList.remove(Xc)
        }
        ),
        this.linkEls[this.index].classList.add(Xc))
    }
}
class yb {
    constructor(i) {
        this.domWatcher = new ct,
        this.el = i,
        this.videoEls = this.el.querySelectorAll("[video]"),
        this.init()
    }
    init() {
        this.videoEls.length && Array.from(this.videoEls).forEach(i=>{
            this.domWatcher.add({
                element: i,
                on: "ended",
                callback: ()=>{
                    i.src = ""
                }
            })
        }
        )
    }
}
class _b {
    constructor(i) {
        if (this.domWatcher = new ct,
        this.el = i,
        this.video = i.parentElement?.querySelectorAll("video"),
        this.button = i.querySelector(".video-controls__button"),
        this.ariaLabelPlaying = i.querySelector(".video-controls-label--play")?.innerHTML,
        this.ariaLabelPaused = i.querySelector(".video-controls-label--pause")?.innerHTML,
        !this.video || !this.button)
            throw new Error("Video controller must have a video element.");
        this.video?.forEach(n=>{
            this.domWatcher.add({
                element: n,
                on: "play",
                callback: ()=>{
                    this.onPlay()
                }
            })
        }
        ),
        this.video?.forEach(n=>{
            this.domWatcher.add({
                element: n,
                on: "pause",
                callback: ()=>{
                    this.onPause()
                }
            })
        }
        ),
        this.domWatcher.add({
            element: this.el,
            on: "click",
            callback: ()=>{
                this.onClick()
            }
        })
    }
    onPlay() {
        this.button?.classList.add("is-playing"),
        this.ariaLabelPlaying && this.button?.setAttribute("aria-label", this.ariaLabelPlaying)
    }
    onPause() {
        this.button?.classList.remove("is-playing"),
        this.ariaLabelPaused && this.button?.setAttribute("aria-label", this.ariaLabelPaused)
    }
    onClick() {
        this.video?.forEach(i=>{
            const n = getComputedStyle(i.parentElement).display === "none"
              , r = getComputedStyle(i).display === "none";
            !n && !r && (i.paused ? (i.play(),
            i.setAttribute("userPaused", "false")) : (i.pause(),
            i.setAttribute("userPaused", "true")))
        }
        )
    }
}
const bb = "whygoogle-hero__controls__dots__dot--active";
class wb {
    constructor(i) {
        this.el = i,
        this.init()
    }
    init() {
        cd(this.el),
        Array.from(this.el.querySelectorAll("[carousel]")).forEach(i=>{
            new ud(i,bb)
        }
        )
    }
}
const Eb = ".masonry-overlay-cards__card"
  , xb = ".masonry-overlay-cards__card__button button"
  , Sb = ".masonry-overlay-cards__pause-button--pause"
  , Cb = ".masonry-overlay-cards__pause-button--play";
class Ab {
    constructor(i) {
        this.domWatcher = new ct,
        this.el = i,
        this.cardEls = Array.from(this.el.querySelectorAll(`${Eb}`)),
        this.pauseButtonEl = i.querySelector(`${Sb}`),
        this.playButtonEl = i.querySelector(`${Cb}`),
        this.init()
    }
    init() {
        this.cardEls.forEach(i=>{
            const n = i.querySelector(`${xb}`);
            n && this.domWatcher.add({
                element: n,
                on: "click",
                callback: r=>{
                    this.toggleCard(r, i)
                }
            })
        }
        ),
        this.pauseButtonEl && this.playButtonEl && (this.domWatcher.add({
            element: this.pauseButtonEl,
            on: "click",
            callback: ()=>{
                this.pauseVideos()
            }
        }),
        this.playButtonEl?.classList.add("is-hidden"),
        this.domWatcher.add({
            element: this.playButtonEl,
            on: "click",
            callback: ()=>{
                this.playVideos()
            }
        }))
    }
    toggleCard(i, n) {
        const r = i.target;
        if (n.hasAttribute("open")) {
            n.removeAttribute("open");
            const l = r.getAttribute("data-open-aria-label");
            r.setAttribute("aria-label", l || "");
            const d = n.querySelector("video");
            d && d.play()
        } else {
            n.setAttribute("open", "");
            const l = r.getAttribute("data-close-aria-label");
            r.setAttribute("aria-label", l || "");
            const d = n.querySelector("video");
            d && d.pause()
        }
    }
    pauseVideos() {
        this.pauseButtonEl?.classList.add("is-hidden"),
        this.pauseButtonEl?.setAttribute("aria-hidden", "true"),
        this.pauseButtonEl?.setAttribute("tabindex", "-1"),
        this.playButtonEl?.classList.remove("is-hidden"),
        this.playButtonEl?.removeAttribute("aria-hidden"),
        this.playButtonEl?.setAttribute("tabindex", "0"),
        this.playButtonEl?.focus(),
        this.cardEls.forEach(i=>{
            const n = i.querySelector("video");
            n && n.pause()
        }
        )
    }
    playVideos() {
        this.pauseButtonEl?.classList.remove("is-hidden"),
        this.pauseButtonEl?.removeAttribute("aria-hidden"),
        this.pauseButtonEl?.setAttribute("tabindex", "0"),
        this.playButtonEl?.classList.add("is-hidden"),
        this.playButtonEl?.setAttribute("aria-hidden", "true"),
        this.playButtonEl?.setAttribute("tabindex", "-1"),
        this.pauseButtonEl?.focus(),
        this.cardEls.forEach(i=>{
            const n = i.querySelector("video");
            n && n.play()
        }
        )
    }
    closeAllCards() {
        this.cardEls.forEach(i=>{
            i.removeAttribute("open")
        }
        )
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _d = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
}
  , bd = o=>(...i)=>({
    _$litDirective$: o,
    values: i
});
class wd {
    constructor(i) {}
    get _$AU() {
        return this._$AM._$AU
    }
    _$AT(i, n, r) {
        this._$Ct = i,
        this._$AM = n,
        this._$Ci = r
    }
    _$AS(i, n) {
        return this.update(i, n)
    }
    update(i, n) {
        return this.render(...n)
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let wa = class extends wd {
    constructor(i) {
        if (super(i),
        this.it = Rr,
        i.type !== _d.CHILD)
            throw Error(this.constructor.directiveName + "() can only be used in child bindings")
    }
    render(i) {
        if (i === Rr || i == null)
            return this._t = void 0,
            this.it = i;
        if (i === ed)
            return i;
        if (typeof i != "string")
            throw Error(this.constructor.directiveName + "() called with a non-string value");
        if (i === this.it)
            return this._t;
        this.it = i;
        const n = [i];
        return n.raw = n,
        this._t = {
            _$litType$: this.constructor.resultType,
            strings: n,
            values: []
        }
    }
}
;
wa.directiveName = "unsafeHTML",
wa.resultType = 1;
const Ca = bd(wa)
  , Lb = ":host{display:block}.container{margin:0 auto;display:grid;column-gap:var(--grid-column-gap)}@media (max-width: 599px){.container{padding:0 24px;max-width:600px}}@media (min-width: 600px) and (max-width: 1023px){.container{padding:0 min(5vw,72px);max-width:600px}}@media (min-width: 1024px) and (max-width: 1439px){.container{padding:0 min(5vw,72px)}}@media (min-width: 1440px){.container{padding:0 min(5vw,72px);max-width:1440px}}@media (max-width: 599px){.container{--grid-column-gap: 24px}}@media (min-width: 600px) and (max-width: 1023px){.container{--grid-column-gap: 24px}}@media (min-width: 1024px) and (max-width: 1439px){.container{--grid-column-gap: 44px}}@media (min-width: 1440px){.container{--grid-column-gap: 64px}}@media (max-width: 599px){.container{grid-template-columns:repeat(4,1fr)}}@media (min-width: 600px) and (max-width: 1023px){.container{grid-template-columns:repeat(4,1fr)}}@media (min-width: 1024px) and (max-width: 1439px){.container{grid-template-columns:repeat(12,1fr)}}@media (min-width: 1440px){.container{grid-template-columns:repeat(12,1fr)}}@media (min-width: 600px){.container{max-width:1298px}}";
var kb = Object.defineProperty
  , Ib = Object.getOwnPropertyDescriptor
  , Tb = (o,i,n,r)=>{
    for (var l = r > 1 ? void 0 : r ? Ib(i, n) : i, d = o.length - 1, f; d >= 0; d--)
        (f = o[d]) && (l = (r ? f(i, n, l) : f(l)) || l);
    return r && l && kb(i, n, l),
    l
}
;
let Ea = class extends At {
    constructor() {
        super()
    }
    render() {
        return tt`
      <div class="container" part="container">
        <slot></slot>
      </div>
    `
    }
}
;
Ea.styles = jt(Lb);
Ea = Tb([Ft("container-grid")], Ea);
const Rb = ':host{display:block}.card{--card-padding: 40px 20px;display:flex;flex-direction:column;padding:var(--card-padding);gap:40px;color:#202124;background-color:#fff;box-shadow:0 12px 34px #20345926;border-radius:8px;overflow:hidden}@media (min-width: 600px){.card{--card-padding: 40px}}@media (min-width: 1440px){.card{--card-padding: 70px 80px}}@media (min-width: 1024px){.card{flex-direction:row;gap:120px}}@media (min-width: 1440px){.card{gap:160px}}.card__chapter{position:relative}.card__chapter:after{content:"";display:block;position:absolute;bottom:-20px;right:0;width:100%;height:1px;background-color:#9aa0a6}@media (min-width: 1024px){.card__chapter:after{position:absolute;top:0;right:-55px;height:100%;width:1px}}@media (min-width: 1440px){.card__chapter:after{right:-75px}}.card__chapter__eyebrow{color:#202124;font-family:Google Sans,Roboto,Arial,sans-serif;font-size:14px;font-weight:500;letter-spacing:.25px;line-height:20px;margin-bottom:16px;text-transform:uppercase}.card__chapter__heading{font-family:Google Sans,Roboto,Arial,sans-serif;font-size:24px;line-height:32px;font-weight:400;font-style:normal;margin-bottom:16px;color:#202124}@media (min-width: 600px){.card__chapter__heading{font-size:32px;line-height:40px;letter-spacing:-.25px}}@media (min-width: 1024px){.card__chapter__heading{font-size:36px;line-height:44px}}.card__chapter__heading span{font-weight:700;color:#1967d2}.card__chapter__heading sup{line-height:0;font-size:14px;font-weight:500}@media (min-width: 600px){.card__chapter__heading sup{font-size:18px}}.card__stats{display:flex;flex-direction:column;min-width:220px;gap:20px}@media (min-width: 1024px){.card__stats{gap:40px}}.card__stats__stat__value{font-family:Google Sans,Roboto,Arial,sans-serif;font-weight:700;font-size:36px;line-height:44px;color:#1967d2}@media (min-width: 600px){.card__stats__stat__value{font-size:48px;line-height:56px}}@media (min-width: 1024px){.card__stats__stat__value{font-size:48px;line-height:56px}}.card__stats__disclaimer{font-family:Google Sans Text,Roboto,Arial,sans-serif;font-size:12px;font-weight:400;line-height:24px;color:#3c4043;color:#5f6368}';
var Pb = Object.defineProperty
  , Ob = Object.getOwnPropertyDescriptor
  , $i = (o,i,n,r)=>{
    for (var l = r > 1 ? void 0 : r ? Ob(i, n) : i, d = o.length - 1, f; d >= 0; d--)
        (f = o[d]) && (l = (r ? f(i, n, l) : f(l)) || l);
    return r && l && Pb(i, n, l),
    l
}
;
let He = class extends At {
    constructor() {
        super(),
        this.heading = "",
        this.stats = []
    }
    render() {
        return this.stats?.length ? tt`
          <div class="card" part="container">
            <div class="card__chapter">
              <div class="card__chapter__eyebrow">${this.eyebrow}</div>
              <div class="card__chapter__heading">
                ${Ca(this.heading)}
              </div>
              <div class="card__chapter__subheading">${this.subheading}</div>
            </div>

            <div class="card__stats">
              ${this.stats?.map(({heading: o, value: i})=>tt`
                  <div class="card__stats__stat">
                    <div class="card__stats__stat__value">${i}</div>
                    <div class="card__stats__stat__heading">${o}</div>
                  </div>
                `)}

              <div class="card__stats__disclaimer">${this.disclaimer}</div>
            </div>
          </div>
        ` : null
    }
}
;
He.styles = jt(Rb);
$i([$({
    type: String
})], He.prototype, "eyebrow", 2);
$i([$({
    type: String
})], He.prototype, "heading", 2);
$i([$({
    type: String
})], He.prototype, "subheading", 2);
$i([$({
    type: String
})], He.prototype, "disclaimer", 2);
$i([$({
    type: Array
})], He.prototype, "stats", 2);
He = $i([Ft("results-card")], He);
function Db(o) {
    return o === 0 || o === 1 ? o : o < .5 ? 2 * o * o : -1 + (4 - 2 * o) * o
}
var $b = Object.defineProperty
  , Fb = Object.getOwnPropertyDescriptor
  , Ye = (o,i,n,r)=>{
    for (var l = r > 1 ? void 0 : r ? Fb(i, n) : i, d = o.length - 1, f; d >= 0; d--)
        (f = o[d]) && (l = (r ? f(i, n, l) : f(l)) || l);
    return r && l && $b(i, n, l),
    l
}
;
let ke = class extends At {
    constructor() {
        super(),
        this.progress = 0,
        this.start = 0,
        this.end = 100,
        this.duration = 2e3,
        this.ease = Db,
        this.delay = 0,
        this.showProgress = !1,
        this.trigger = !1,
        this.progress = this.start
    }
    firstUpdated() {
        this.rafTimer = new vd(o=>{
            this.progress = mb(this.progress, this.end, o, this.ease),
            this.requestUpdate()
        }
        ),
        this.rafTimer.onComplete(()=>{
            this.trigger = !1,
            this.rafTimer?.dispose()
        }
        ),
        this.rafTimer.setDuration(this.duration)
    }
    updated(o) {
        o.has("trigger") && this.trigger && (this.delay > 0 ? setTimeout(()=>{
            this.rafTimer?.play()
        }
        , this.delay) : this.rafTimer?.play())
    }
    toFixed(o, i=0) {
        var n = Math.pow(10, Number(i) + 1);
        return (Number(o) + 1 / n).toFixed(i)
    }
    render() {
        const o = this.toFixed(this.progress)
          , i = this.showProgress ? tt`<div class="progress">${o}%</div>` : "";
        return tt`<slot style="--progress: ${o}"></slot>${i}`
    }
}
;
Ye([$({
    type: Number
})], ke.prototype, "start", 2);
Ye([$({
    type: Number
})], ke.prototype, "end", 2);
Ye([$({
    type: Number
})], ke.prototype, "duration", 2);
Ye([$({
    type: Function
})], ke.prototype, "ease", 2);
Ye([$({
    type: Number
})], ke.prototype, "delay", 2);
Ye([$({
    type: Boolean
})], ke.prototype, "showProgress", 2);
Ye([$({
    type: Boolean
})], ke.prototype, "trigger", 2);
ke = Ye([Ft("progress-indicator")], ke);
const Bb = ":host{display:block}.cards{--cards-grid-gap: 20px;--cards-grid-template-columns: 1;display:grid;grid-template-columns:repeat(var(--cards-grid-template-columns),1fr);grid-gap:var(--cards-grid-gap);color:#202124}@media (min-width: 600px){.cards{--cards-grid-gap: 28px}}@media (min-width: 1024px){.cards{--cards-grid-gap: 25px;--cards-grid-template-columns: 3}}.card{display:flex;align-items:center;justify-content:center;flex-direction:column;padding:30px 20px;text-align:center;background-color:#fff;box-shadow:0 12px 34px #20345926;border-radius:8px}.card__heading{font-family:Google Sans Text,Roboto,Arial,sans-serif;font-size:18px;line-height:28px;color:#3c4043;color:#202124}.card__value{font-family:Google Sans,Roboto,Arial,sans-serif;font-weight:700;font-size:36px;line-height:44px;color:#1967d2}@media (min-width: 600px){.card__value{font-size:48px;line-height:56px}}@media (min-width: 1024px){.card__value{font-size:48px;line-height:56px}}@media (min-width: 1440px){.card__value{font-size:60px;margin-bottom:4px}}";
var Wb = Object.defineProperty
  , Mb = Object.getOwnPropertyDescriptor
  , Aa = (o,i,n,r)=>{
    for (var l = r > 1 ? void 0 : r ? Mb(i, n) : i, d = o.length - 1, f; d >= 0; d--)
        (f = o[d]) && (l = (r ? f(i, n, l) : f(l)) || l);
    return r && l && Wb(i, n, l),
    l
}
;
let _n = class extends At {
    constructor() {
        super(),
        this.stats = [],
        this.inview = !1
    }
    render() {
        return this.stats?.length ? tt`
          <div class="stacked-result-cards" part="container">
            <div class="cards">
              ${this.stats?.map(({heading: o, value: i})=>tt`
                  <div class="card">
                    <progress-indicator
                      start="0"
                      end="${i}"
                      duration="3000"
                      ?trigger="${this.inview}"
                      showProgress="true"
                      class="card__value"
                    >
                    </progress-indicator>

                    <div class="card__heading">${o}</div>
                  </div>
                `)}
            </div>
          </div>
        ` : null
    }
}
;
_n.styles = jt(Bb);
Aa([$({
    type: Array
})], _n.prototype, "stats", 2);
Aa([$({
    type: Boolean
})], _n.prototype, "inview", 2);
_n = Aa([Ft("stacked-result-cards")], _n);
const qb = ':host{display:block}.bar{position:relative;width:calc(100% - 24px);height:var(--bar-height);background:var(--bar-background-color, #e8f0fe);border-radius:999px}@media (min-width: 1440px){.bar{width:100%}}.bar:before{content:"";display:block;position:absolute;top:50%;transform:translateY(-50%);height:100%;width:calc(var(--progress) * 1%);background-color:var(--bar-fill-color, #4285f4);border-radius:999px}.bar__value{position:absolute;top:50%;transform:translateY(-50%);font-family:Google Sans,Roboto,Arial,sans-serif;font-size:16px;line-height:24px;font-weight:500;width:100%;padding-left:12px;color:var(--bar-color, #174ea6);font-weight:700}@media (max-width: 1439px){.bar__value{padding-left:8px}}@media (max-width: 1023px){.bar__value{padding-left:4px;font-size:12px}}.bar__value:after{content:"";display:block;transform:translate(calc(var(--progress) * 1%));counter-reset:progress var(--progress);content:counter(progress) "%"}';
var Nb = Object.defineProperty
  , Ub = Object.getOwnPropertyDescriptor
  , En = (o,i,n,r)=>{
    for (var l = r > 1 ? void 0 : r ? Ub(i, n) : i, d = o.length - 1, f; d >= 0; d--)
        (f = o[d]) && (l = (r ? f(i, n, l) : f(l)) || l);
    return r && l && Nb(i, n, l),
    l
}
;
let ai = class extends At {
    constructor() {
        super(),
        this.height = 20,
        this.value = 0,
        this.animationDuration = 1750,
        this.animationDelay = 0,
        this.animationTrigger = !1,
        this.handleResize = ()=>{
            this.height = 20,
            window.innerWidth > 600 && (this.height = 24),
            this.requestUpdate()
        }
    }
    firstUpdated() {
        this.handleResize(),
        this.requestUpdate()
    }
    connectedCallback() {
        super.connectedCallback(),
        window.addEventListener("resize", this.handleResize)
    }
    disconnectedCallback() {
        window.removeEventListener("resize", this.handleResize),
        super.disconnectedCallback()
    }
    render() {
        return tt`
      <progress-indicator
        start="0"
        end="${this.value}"
        duration="${this.animationDuration}"
        delay="${this.animationDelay}"
        ?trigger="${this.animationTrigger}"
      >
        <div class="bar" style="--bar-height: ${this.height}px">
          <div class="bar__value"></div>
        </div>
      </progress-indicator>
    `
    }
}
;
ai.styles = jt(qb);
En([$({
    type: Number
})], ai.prototype, "value", 2);
En([$({
    type: Number
})], ai.prototype, "animationDuration", 2);
En([$({
    type: Number
})], ai.prototype, "animationDelay", 2);
En([$({
    type: Boolean
})], ai.prototype, "animationTrigger", 2);
ai = En([Ft("graph-bar")], ai);
const zb = ":host{display:block}.card{--card-padding: 40px 20px;padding:var(--card-padding);color:#202124;background-color:#fff;box-shadow:0 12px 34px #20345926;border-radius:8px;overflow:hidden}@media (min-width: 600px){.card{--card-padding: 40px}}@media (min-width: 1440px){.card{--card-padding: 80px}}.card__heading{color:#202124;font-family:Google Sans,Roboto,Arial,sans-serif;font-size:24px;line-height:32px;font-weight:400;font-style:normal;margin-bottom:16px;background-color:#fff}@media (min-width: 600px){.card__heading{font-size:32px;line-height:40px;letter-spacing:-.25px}}@media (min-width: 1024px){.card__heading{font-size:36px;line-height:44px}}.card__subheading{font-family:Google Sans Text,Roboto,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px;letter-spacing:.1px;color:#3c4043;color:#202124}.card__graph{display:grid;grid-template-columns:1;gap:8px;margin-top:24px}@media (min-width: 600px){.card__graph{grid-template-columns:auto 1fr;gap:24px}}.card__graph__stat{display:flex;gap:24px}.card__graph__stat__heading{font-family:Google Sans Text,Roboto,Arial,sans-serif;font-size:14px;line-height:24px;letter-spacing:.15px;color:#3c4043;color:#202124}@media (max-width: 599px){.card__graph__stat__heading{font-family:Google Sans Text,Roboto,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px;letter-spacing:.1px;color:#3c4043;margin-top:8px}}";
var Gb = Object.defineProperty
  , Hb = Object.getOwnPropertyDescriptor
  , xn = (o,i,n,r)=>{
    for (var l = r > 1 ? void 0 : r ? Hb(i, n) : i, d = o.length - 1, f; d >= 0; d--)
        (f = o[d]) && (l = (r ? f(i, n, l) : f(l)) || l);
    return r && l && Gb(i, n, l),
    l
}
;
let oi = class extends At {
    constructor() {
        super(),
        this.inview = !1,
        this.stats = []
    }
    render() {
        return this.stats?.length ? tt`
          <div class="card" part="container">
            <div class="card__heading">${this.heading}</div>
            <div class="card__subheading">${this.subheading}</div>

            <div class="card__graph">
              ${this.stats?.map(({heading: o, value: i},n)=>tt`
                  <div class="card__graph__stat__heading">${o}</div>

                  <graph-bar
                    value="${i}"
                    animationDelay="${n * 125}"
                    animationDuration="${Dr(750, 2e3, i / 100)}"
                    ?animationTrigger="${this.inview}"
                  ></graph-bar>
                `)}
            </div>
          </div>
        ` : null
    }
}
;
oi.styles = jt(zb);
xn([$({
    type: String
})], oi.prototype, "heading", 2);
xn([$({
    type: String
})], oi.prototype, "subheading", 2);
xn([$({
    type: Boolean
})], oi.prototype, "inview", 2);
xn([$({
    type: Array
})], oi.prototype, "stats", 2);
oi = xn([Ft("fullwidth-bargraph")], oi);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const le = bd(class extends wd {
    constructor(o) {
        if (super(o),
        o.type !== _d.ATTRIBUTE || o.name !== "class" || o.strings?.length > 2)
            throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")
    }
    render(o) {
        return " " + Object.keys(o).filter(i=>o[i]).join(" ") + " "
    }
    update(o, [i]) {
        if (this.st === void 0) {
            this.st = new Set,
            o.strings !== void 0 && (this.nt = new Set(o.strings.join(" ").split(/\s/).filter(r=>r !== "")));
            for (const r in i)
                i[r] && !this.nt?.has(r) && this.st.add(r);
            return this.render(i)
        }
        const n = o.element.classList;
        for (const r of this.st)
            r in i || (n.remove(r),
            this.st.delete(r));
        for (const r in i) {
            const l = !!i[r];
            l === this.st.has(r) || this.nt?.has(r) || (l ? (n.add(r),
            this.st.add(r)) : (n.remove(r),
            this.st.delete(r)))
        }
        return ed
    }
}
)
  , Vb = ':host{display:block}.donut{display:flex;align-items:center;justify-content:center;position:relative;width:calc(var(--donut-size) * 1px);height:calc(var(--donut-size) * 1px);border-radius:50%;box-shadow:0 0 0 calc(var(--donut-stroke-width) * 1px) var(--donut-ring-color, #c7dbfc) inset}.donut--direction-left circle{transform:rotate(-90deg) scaleY(-1)}svg{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;height:100%}circle{--donut-circumference: calc(2 * 3.14 * var(--donut-radius));stroke:var(--donut-segment-color, #1967d2);stroke-dasharray:calc(var(--donut-circumference) * var(--progress) / 100) var(--donut-circumference);transform-origin:center;transform:rotate(-90deg)}.donut__value{color:#202124;font-family:Google Sans,Roboto,Arial,sans-serif;font-size:16px;font-weight:500;letter-spacing:.1px;line-height:24px;position:relative;font-size:var(--donut-font-size);color:var(--donut-color, #1967d2)}.donut__value:after{content:"";display:block;counter-reset:progress var(--progress);content:counter(progress) "%"}';
var Kb = Object.defineProperty
  , Yb = Object.getOwnPropertyDescriptor
  , Re = (o,i,n,r)=>{
    for (var l = r > 1 ? void 0 : r ? Yb(i, n) : i, d = o.length - 1, f; d >= 0; d--)
        (f = o[d]) && (l = (r ? f(i, n, l) : f(l)) || l);
    return r && l && Kb(i, n, l),
    l
}
;
let ce = class extends At {
    constructor() {
        super(),
        this.size = 80,
        this.fontSize = 26,
        this.strokeWidth = 4,
        this.direction = "right",
        this.value = 0,
        this.animationDuration = 1750,
        this.animationDelay = 0,
        this.animationTrigger = !1
    }
    render() {
        const o = this.size / 2 - this.strokeWidth / 2;
        return tt`
      <progress-indicator
        start="0"
        end="${this.value}"
        duration="${this.animationDuration}"
        delay="${this.animationDelay}"
        ?trigger="${this.animationTrigger}"
      >
        <div
          class="${le({
            donut: !0,
            "donut--direction-left": this.direction === "left"
        })}"
          style="
            --donut-radius: ${o}; 
            --donut-size: ${this.size}; 
            --donut-font-size: ${this.fontSize}px; 
            --donut-stroke-width: ${this.strokeWidth};
          "
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 ${this.size} ${this.size}"
          >
            <circle
              cx="50%"
              cy="50%"
              r="${o}"
              fill="transparent"
              stroke-linecap="round"
              stroke-width="${this.strokeWidth}"
            ></circle>
          </svg>

          <div class="donut__value"></div>
        </div>
      </progress-indicator>
    `
    }
}
;
ce.styles = jt(Vb);
Re([$({
    type: Number
})], ce.prototype, "size", 2);
Re([$({
    type: Number
})], ce.prototype, "fontSize", 2);
Re([$({
    type: Number
})], ce.prototype, "strokeWidth", 2);
Re([$({
    type: String
})], ce.prototype, "direction", 2);
Re([$({
    type: Number
})], ce.prototype, "value", 2);
Re([$({
    type: Number
})], ce.prototype, "animationDuration", 2);
Re([$({
    type: Number
})], ce.prototype, "animationDelay", 2);
Re([$({
    type: Boolean
})], ce.prototype, "animationTrigger", 2);
ce = Re([Ft("graph-donut")], ce);
const Zb = ":host{display:block}.card{--card-padding: 40px 20px;display:flex;box-sizing:border-box;flex-direction:column;padding:var(--card-padding);background-color:#fff;box-shadow:0 12px 34px #20345926;border-radius:8px}@media (min-width: 600px){.card{--card-padding: 40px}}.card__heading{color:#202124;font-family:Google Sans,Roboto,Arial,sans-serif;font-weight:400;font-style:normal;font-size:20px;line-height:28px;margin-bottom:16px}@media (min-width: 600px){.card__heading{font-size:24px;line-height:32px}}@media (min-width: 1024px){.card__heading{font-size:28px;line-height:36px}}.card__subheading{font-family:Google Sans Text,Roboto,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px;letter-spacing:.1px;color:#3c4043;color:#202124}.card__graph{display:flex;flex-direction:column;gap:24px;margin-top:32px;width:100%}.card__graph__stat{display:flex;align-items:center;gap:12px;padding:10px 20px;background:#e8f0fe;border-radius:16px;box-shadow:0 2px 6px 2px #1967d233}.card__graph__stat--1,.card__graph__stat--2{padding:20px 32px;flex-direction:column;justify-content:center;text-align:center}.card__graph__stat--1{gap:20px;padding:80px 32px}.card__graph__stat__heading{color:#202124;font-family:Google Sans,Roboto,Arial,sans-serif;font-size:16px;font-weight:500;letter-spacing:.1px;line-height:24px;color:#1967d2}";
var Qb = Object.defineProperty
  , Xb = Object.getOwnPropertyDescriptor
  , Sn = (o,i,n,r)=>{
    for (var l = r > 1 ? void 0 : r ? Xb(i, n) : i, d = o.length - 1, f; d >= 0; d--)
        (f = o[d]) && (l = (r ? f(i, n, l) : f(l)) || l);
    return r && l && Qb(i, n, l),
    l
}
;
let li = class extends At {
    constructor() {
        super(),
        this.donutSize = 125,
        this.donutStrokeWidth = 10,
        this.donutFontSize = 26,
        this.stats = [],
        this.inview = !1
    }
    render() {
        return this.donutSize = 80,
        this.donutStrokeWidth = 4,
        this.donutFontSize = 26,
        this.stats?.length === 1 ? (this.donutSize = 220,
        this.donutStrokeWidth = 10,
        this.donutFontSize = 60) : this.stats?.length === 2 && (this.donutSize = 120,
        this.donutStrokeWidth = 6,
        this.donutFontSize = 38),
        this.stats?.length ? tt`
          <div class="card" part="container">
            <div class="card__heading">${this.heading}</div>
            <div class="card__subheading">${this.subheading}</div>

            <div class="card__graph">
              ${this.stats?.map(({heading: o, value: i},n)=>tt`
                  <div
                    class="${le({
            card__graph__stat: !0,
            [`card__graph__stat--${this.stats.length}`]: !0
        })}"
                  >
                    <graph-donut
                      size="${this.donutSize}"
                      strokeWidth="${this.donutStrokeWidth}"
                      fontSize="${this.donutFontSize}"
                      direction="left"
                      value="${i}"
                      animationDelay="${n * 250}"
                      ?animationTrigger="${this.inview}"
                    ></graph-donut>
                    <div class="card__graph__stat__heading">${o}</div>
                  </div>
                `)}
            </div>
          </div>
        ` : null
    }
}
;
li.styles = jt(Zb);
Sn([$({
    type: String
})], li.prototype, "heading", 2);
Sn([$({
    type: String
})], li.prototype, "subheading", 2);
Sn([$({
    type: Array
})], li.prototype, "stats", 2);
Sn([$({
    type: Boolean
})], li.prototype, "inview", 2);
li = Sn([Ft("stacked-result-minicards")], li);
const Jb = '@keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-out{0%{opacity:1}to{opacity:0}}@keyframes arrow{0%{transform:translateZ(0)}50%{transform:translate3d(20px,0,0)}to{transform:translateZ(0)}}@keyframes zoom{0%{transform:scale(1)}to{transform:scale(1.1)}}@keyframes fade-up{0%{opacity:0;transform:translate3d(0,35px,0)}to{opacity:1;transform:translateZ(0)}}:host{display:block}.stacked-card-slider{--card-width: 204px;--card-aspect-ratio: 204/230;--card-box-shadow: 0px 12px 34px rgba(32, 52, 89, .15);--card-border-radius: 22px;--card-out-duration: 1s;--card-padding: 40px 20px;--card-transition: cubic-bezier(.22, 1, .36, 1);--card-color-green: #34a853;--card-color-red: #d93025;--card-color-blue: #1967d2}@media (min-width: 1024px){.stacked-card-slider{--card-width: 245px;--card-aspect-ratio: 258/290;--card-border-radius: 28px;--card-padding: 40px}}@media (min-width: 1440px){.stacked-card-slider{--card-width: 296px;--card-aspect-ratio: 296/333;--card-border-radius: 32px}}.stacked-card-slider{box-sizing:border-box;text-align:center}.stacked-card-slider--initialized{--card-out-duration: .4s}.stacked-card-slider--blue-50{padding:var(--card-padding);background-color:#e8f0fe;box-shadow:0 12px 34px #20345926;border-radius:8px}.stacked-card-slider--blue-50 .carousel{margin-top:80px}@media (min-width: 1440px){.stacked-card-slider--blue-50 .carousel{margin-top:110px}}.heading{color:#202124;font-family:Google Sans,Roboto,Arial,sans-serif;font-size:24px;line-height:32px;font-weight:400;font-style:normal;margin-bottom:16px}@media (min-width: 600px){.heading{font-size:32px;line-height:40px;letter-spacing:-.25px}}@media (min-width: 1024px){.heading{font-size:36px;line-height:44px}}.heading sup{line-height:0;font-size:14px;font-weight:500}@media (min-width: 600px){.heading sup{font-size:18px}}.subheading{font-family:Google Sans Text,Roboto,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px;letter-spacing:.1px;color:#3c4043;color:#202124}graph-donut{--donut-color: #fff;--donut-segment-color: #fff;--donut-ring-color: rgba(255, 255, 255, .25)}.carousel{position:relative;margin-top:64px;margin-bottom:64px}.carousel.no-controls{margin-bottom:0}.carousel__slides{display:flex;align-items:center;justify-content:center;position:relative;transform:translate(-32px)}@media (min-width: 1024px) and (max-width: 1439px){.carousel__slides{transform:translate(-40px)}}.carousel__slides__slide{--slide-opacity: 0;--slide-scale: .95;--slide-translate: 0;display:flex;align-items:center;justify-content:center;position:relative;height:100%;width:var(--card-width);aspect-ratio:var(--card-aspect-ratio);border-radius:var(--card-border-radius);color:#fff;opacity:var(--slide-opacity);z-index:1;transform-origin:bottom right;transform:translate(var(--slide-translate, 0),var(--slide-translate, 0)) scale(var(--slide-scale));transition:transform var(--card-out-duration) var(--card-transition),opacity 0ms linear var(--card-out-duration);pointer-events:none}.carousel__slides__slide:not(:first-child){position:absolute;top:50%;left:50%;--slide-scale: .95;--slide-translate: -50%;--slide-opacity: 0}.carousel__slides__slide.ready{--slide-opacity: 1;--slide-scale: 1}.carousel__slides__slide.ready .carousel__slides__slide__stat__heading{background-color:var(--card-color-blue)}.carousel__slides__slide.in{--slide-opacity: 1;transform:scale(1);transition:transform var(--card-out-duration) var(--card-transition);pointer-events:all;z-index:1}.carousel__slides__slide.in:not(:first-child){transform:translate(-50%,-50%)}.carousel__slides__cards{--card-scale: 1;--card-rotation: 20deg;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:var(--card-width);aspect-ratio:var(--card-aspect-ratio);background-color:var(--card-third-color);transform:translate(-50%,-50%) rotate(var(--card-rotation)) scale(var(--card-scale));transition:transform var(--card-out-duration) var(--card-transition);z-index:0}.carousel__slides__cards:before,.carousel__slides__cards:after{content:"";display:block;position:absolute;top:0;left:0;width:100%;height:100%;transform:rotate(var(--card-rotation))}.carousel__slides__cards:before{--card-rotation: -10deg;background-color:var(--card-second-color);z-index:1;transition:transform var(--card-out-duration) var(--card-transition)}.carousel__slides__cards:after{--card-rotation: -20deg;z-index:2;background-color:var(--card-first-color);transition:transform var(--card-out-duration) var(--card-transition),background-color calc(var(--card-out-duration) * 1.5) var(--card-transition)}.carousel__slides__cards,.carousel__slides__cards:before,.carousel__slides__cards:after{transform-origin:bottom right;border-radius:32px;box-shadow:var(--card-box-shadow)}.carousel__slides__cards,.carousel__slides__cards.blue{--card-first-color: var(--card-color-blue);--card-second-color: var(--card-color-red);--card-third-color: var(--card-color-green)}.carousel__slides__cards.red{--card-first-color: var(--card-color-red);--card-second-color: var(--card-color-green);--card-third-color: var(--card-color-blue)}.carousel__slides__cards.green{--card-first-color: var(--card-color-green);--card-second-color: var(--card-color-blue);--card-third-color: var(--card-color-red)}.carousel__slides__cards.ready,.carousel__slides__cards.out{--card-rotation: 0deg;--card-scale: .95}.carousel__slides__cards.ready:before,.carousel__slides__cards.out:before{--card-rotation: 0deg}.carousel__slides__cards.ready:after,.carousel__slides__cards.out:after{--card-rotation: 0deg}.carousel__slides__cards.ready{--card-scale: 1}.carousel__slides__slide__stat{display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%;gap:24px;padding:0 24px;z-index:1}@media (max-width: 599px){.carousel__slides__slide__stat{padding:0 20px}}@media (min-width: 600px){.carousel__slides__slide__stat{gap:20px}}@media (min-width: 1440px){.carousel__slides__slide__stat{gap:28px}}.carousel__slides__slide__stat__heading{color:#202124;font-family:Google Sans Text,Roboto,Arial,sans-serif;font-size:14px;font-weight:400;letter-spacing:.25px;line-height:20px;box-sizing:border-box;display:flex;justify-content:space-between;align-items:flex-end;height:30px;width:100%;gap:16px;text-align:left;color:#fff}@media (max-width: 599px){.carousel__slides__slide__stat__heading{color:#202124;font-family:Google Sans,Roboto,Arial,sans-serif;font-size:14px;font-weight:500;letter-spacing:.25px;line-height:20px;gap:8px;color:#fff}}@media (min-width: 1024px){.carousel__slides__slide__stat__heading{color:#202124;font-family:Google Sans,Roboto,Arial,sans-serif;font-size:20px;line-height:28px;font-size:18px;height:50px;gap:12px;color:#fff}}@media (min-width: 1440px){.carousel__slides__slide__stat__heading{color:#202124;font-family:Google Sans,Roboto,Arial,sans-serif;font-size:20px;line-height:28px;gap:24px;color:#fff}}.carousel__slides__slide__stat__heading__icon{transform:translateY(-40%)}@media (max-width: 1023px){.carousel__slides__slide__stat__heading__icon{height:10px}}.carousel__controls{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;height:100%;pointer-events:none}.carousel__controls__arrows{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;align-items:center;justify-content:center;width:100%;justify-content:space-between}.carousel__controls__arrow,.carousel__controls__dots__arrow{--arrow-size: 64px;display:flex;align-items:center;justify-content:center;width:var(--arrow-size);height:var(--arrow-size);margin:0;padding:0;border:none;border-radius:50%;background-color:#fff;box-shadow:0 2px 4px #0000001f;cursor:pointer;pointer-events:all}.carousel__controls__arrow--right img,.carousel__controls__dots__arrow--right img{transform:scaleX(-1)}.carousel__controls__arrow img,.carousel__controls__dots__arrow img{display:block;width:16px;height:auto}@media (max-width: 1439px){.carousel__controls__arrow{display:none}}.carousel__controls__dots__arrow{--arrow-size: 40px;display:none}.carousel__controls__dots__arrow img{width:10px}@media (min-width: 1024px) and (max-width: 1439px){.carousel__controls__dots__arrow{display:flex}}@media (min-width: 1440px){.carousel__controls__dots__arrow{display:none}}.carousel__controls__dots__arrow--left{transform:translate(-24px)}.carousel__controls__dots__arrow--right{transform:translate(24px)}.carousel__controls__dots{transform:translate(-50%);position:absolute;bottom:-64px;left:50%;display:flex;align-items:center;justify-content:center;height:10px;width:100%;gap:10px}.carousel__controls__dots__dot{display:block;padding:0;width:10px;height:10px;border-radius:50%;border:1px solid #202124;pointer-events:all;cursor:pointer;transition:background-color .25s}.carousel__controls__dots__dot--active{background-color:#202124}';
var jb = Object.defineProperty
  , t0 = Object.getOwnPropertyDescriptor
  , ci = (o,i,n,r)=>{
    for (var l = r > 1 ? void 0 : r ? t0(i, n) : i, d = o.length - 1, f; d >= 0; d--)
        (f = o[d]) && (l = (r ? f(i, n, l) : f(l)) || l);
    return r && l && jb(i, n, l),
    l
}
;
let Ie = class extends At {
    constructor() {
        super(),
        this.initialized = !1,
        this.index = 0,
        this.isTransitioning = !1,
        this.donutSize = 125,
        this.donutStrokeWidth = 10,
        this.donutFontSize = 26,
        this.color = "blue-50",
        this.stats = [],
        this.ariaLabels = {},
        this.inview = !1,
        this.handleResize = ()=>{
            this.donutSize = 135,
            this.donutFontSize = 26,
            this.donutStrokeWidth = 10,
            window.innerWidth > 1440 ? (this.donutSize = 196,
            this.donutStrokeWidth = 15,
            this.donutFontSize = 40) : window.innerWidth > 1023 && (this.donutSize = 160,
            this.donutStrokeWidth = 10,
            this.donutFontSize = 34),
            this.requestUpdate()
        }
    }
    goToSlide(o) {
        if (this.isTransitioning || !this.initialized)
            return;
        this.isTransitioning = !0,
        this.prevIndex = this.index,
        this.requestUpdate();
        let i = this.shadowRoot?.querySelector(`.carousel__slides__slide:nth-child(${this.prevIndex + 1})`);
        const n = this.shadowRoot?.querySelector(".carousel__slides__cards")
          , r = l=>{
            if (l.propertyName === "transform") {
                n?.classList.remove("out"),
                i?.classList.remove("out"),
                this.index = o,
                this.requestUpdate(),
                n?.removeEventListener("transitionend", r);
                const d = S=>{
                    this.isTransitioning = !1,
                    this.requestUpdate(),
                    i?.removeEventListener("transitionend", d)
                }
                ;
                i = this.shadowRoot?.querySelector(`.carousel__slides__slide:nth-child(${o + 1})`),
                i?.querySelector("graph-donut")?.setAttribute("animationtrigger", "true"),
                i?.addEventListener("transitionend", d)
            }
        }
        ;
        i?.classList.add("out"),
        n?.classList.add("out"),
        n?.addEventListener("transitionend", r),
        this.trackEvents(this.stats[o].events)
    }
    trackEvents(o) {
        const i = o?.["event-category"]
          , n = o?.["event-action"]
          , r = o?.["event-label"];
        i && n && r && Ge(i, n, r)
    }
    nextSlide() {
        this.index < this.stats?.length - 1 ? this.goToSlide(this.index + 1) : this.goToSlide(0)
    }
    prevSlide() {
        this.index > 0 ? this.goToSlide(this.index - 1) : this.goToSlide(this.stats?.length - 1)
    }
    firstUpdated() {
        this.handleResize(),
        this.requestUpdate()
    }
    updated(o) {
        if (o.has("inview") && this.inview) {
            this.shadowRoot?.querySelector(".carousel__slides__slide")?.querySelector("graph-donut")?.setAttribute("animationtrigger", "true");
            const r = this.shadowRoot?.querySelector(".carousel__slides__cards")
              , l = d=>{
                d.propertyName === "transform" && (this.initialized = !0,
                this.requestUpdate(),
                r?.removeEventListener("transitionend", l))
            }
            ;
            r?.addEventListener("transitionend", l),
            this.trackEvents(this.stats[0].events)
        }
    }
    connectedCallback() {
        super.connectedCallback(),
        window.addEventListener("resize", this.handleResize)
    }
    disconnectedCallback() {
        window.removeEventListener("resize", this.handleResize),
        super.disconnectedCallback()
    }
    renderControls() {
        return tt`<div class="carousel__controls">
      <div class="carousel__controls__arrows">
        <button
          class="carousel__controls__arrow carousel__controls__arrow--left"
          @click="${this.prevSlide}"
          ?disabled="${this.isTransitioning}"
          aria-label="${this.ariaLabels.carouselLeft_AltText}"
        >
          <img
            alt="${this.ariaLabels.carouselLeft_AltText}"
            loading="lazy"
            src="/static/images/icons/impact-calculator/arrow.svg"
          />
        </button>

        <button
          class="carousel__controls__arrow carousel__controls__arrow--right"
          @click="${this.nextSlide}"
          ?disabled="${this.isTransitioning}"
          aria-label="${this.ariaLabels.carouselRight_AltText}"
        >
          <img
            loading="lazy"
            src="/static/images/icons/impact-calculator/arrow.svg"
            alt="${this.ariaLabels.carouselRight_AltText}"
          />
        </button>
      </div>

      <div class="carousel__controls__dots">
        <button
          class="carousel__controls__dots__arrow carousel__controls__dots__arrow--left"
          @click="${this.prevSlide}"
          ?disabled="${this.isTransitioning}"
          aria-label="${this.ariaLabels.carouselLeft_AltText}"
        >
          <img
            loading="lazy"
            src="/static/images/icons/impact-calculator/arrow.svg"
          />
        </button>

        ${this.stats?.map((o,i)=>tt`
            <button
              class="${le({
            carousel__controls__dots__dot: !0,
            "carousel__controls__dots__dot--active": i === this.index
        })}"
              @click="${()=>{
            this.goToSlide(i)
        }
        }"
              aria-label="${this.ariaLabels.carousel_navigateToSlide.replace("[x]", i + 1).replace("[y]", this.stats.length)}"
            ></button>
          `)}

        <button
          class="carousel__controls__dots__arrow carousel__controls__dots__arrow--right"
          @click="${this.nextSlide}"
          ?disabled="${this.isTransitioning}"
          aria-label="${this.ariaLabels.carouselRight_AltText}"
        >
          <img
            loading="lazy"
            src="/static/images/icons/impact-calculator/arrow.svg"
          />
        </button>
      </div>
    </div>`
    }
    render() {
        return this.stats?.length ? tt`
          <div
            class="${le({
            "stacked-card-slider": !0,
            "stacked-card-slider--initialized": this.initialized,
            [`stacked-card-slider--${this.color}`]: !!this.color
        })}"
            part="container"
          >
            ${this.heading && tt`<div class="heading">${Ca(this.heading)}</div> `}
            ${this.subheading && tt`<div class="subheading">${this.subheading}</div> `}

            <div
              class="${le({
            carousel: !0,
            "no-controls": this.stats?.length < 2
        })}"
            >
              <div class="carousel__slides">
                ${this.stats?.map(({heading: o, value: i},n)=>tt`
                    <div
                      class="${le({
            carousel__slides__slide: !0,
            ready: !this.inview && n === this.index && n !== this.prevIndex,
            in: this.inview && n === this.index && n !== this.prevIndex
        })}"
                    >
                      <div class="carousel__slides__slide__stat">
                        <graph-donut
                          size="${this.donutSize}"
                          fontSize="${this.donutFontSize}"
                          strokeWidth="${this.donutStrokeWidth}"
                          value="${i}"
                        ></graph-donut>

                        <div class="carousel__slides__slide__stat__heading">
                          ${o}
                          <img
                            role="presentation"
                            class="carousel__slides__slide__stat__heading__icon"
                            loading="lazy"
                            src="/static/images/icons/impact-calculator/competitive_advantage.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  `)}

                <div
                  class="${le({
            carousel__slides__cards: !0,
            ready: !this.inview,
            blue: this.index % 3 == 0,
            red: this.index % 3 == 1,
            green: this.index % 3 == 2
        })}"
                ></div>
              </div>

              ${this.stats?.length > 1 ? this.renderControls() : null}
            </div>
          </div>
        ` : null
    }
}
;
Ie.styles = jt(Jb);
ci([$({
    type: String
})], Ie.prototype, "heading", 2);
ci([$({
    type: String
})], Ie.prototype, "subheading", 2);
ci([$({
    type: String
})], Ie.prototype, "color", 2);
ci([$({
    type: Array
})], Ie.prototype, "stats", 2);
ci([$({
    type: Object
})], Ie.prototype, "ariaLabels", 2);
ci([$({
    type: Boolean
})], Ie.prototype, "inview", 2);
Ie = ci([Ft("stacked-cardslider")], Ie);
const e0 = "@keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-out{0%{opacity:1}to{opacity:0}}@keyframes arrow{0%{transform:translateZ(0)}50%{transform:translate3d(20px,0,0)}to{transform:translateZ(0)}}@keyframes zoom{0%{transform:scale(1)}to{transform:scale(1.1)}}@keyframes fade-up{0%{opacity:0;transform:translate3d(0,35px,0)}to{opacity:1;transform:translateZ(0)}}:host{display:block}.bargraph-5050{position:relative}.background{position:absolute;top:50%;transform:translateY(-50%);left:128px;width:100%;height:100%;object-fit:contain;object-position:center right;right:0;z-index:0}@media (max-width: 1023px){.background{display:none}}.card{--card-padding: 40px 20px;display:flex;flex-direction:column;position:relative;box-sizing:border-box;padding:var(--card-padding);background-color:#fff;box-shadow:0 12px 34px #20345926;border-radius:8px;overflow:hidden;z-index:1}@media (min-width: 600px){.card{--card-padding: 40px}}@media (min-width: 1440px){.card{--card-padding: 80px}}@media (min-width: 1024px){.card{width:65%}}@media (max-width: 1023px){.card--desktop{display:none}}.card--mobile{margin-bottom:40px}@media (min-width: 1024px){.card--mobile{display:none}}.card__heading{color:#202124;font-family:Google Sans,Roboto,Arial,sans-serif;font-size:24px;line-height:32px;font-weight:400;font-style:normal;margin-bottom:16px}@media (min-width: 600px){.card__heading{font-size:32px;line-height:40px;letter-spacing:-.25px}}@media (min-width: 1024px){.card__heading{font-size:36px;line-height:44px}}.card__subheading{font-family:Google Sans Text,Roboto,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px;letter-spacing:.1px;color:#3c4043;color:#202124}.card__categories{display:flex;gap:16px;margin-top:24px}.card__categories__button{color:#202124;font-family:Google Sans Text,Roboto,Arial,sans-serif;font-weight:500;font-size:16px;line-height:24px;padding:4px 16px;border:1px solid var(--category-button-color);border-radius:999px;color:#5f6368;background-color:transparent;cursor:pointer;transition:background-color .2s,box-shadow .2s,color .2s}.card__categories__button--green{--category-button-color: #188038}.card__categories__button--yellow{--category-button-color: #e37400}.card__categories__button.active,.card__categories__button:hover{background-color:var(--category-button-color);color:#fff;border-color:transparent}.card__graphs{position:relative;margin-top:32px}.card__graphs__graph{display:flex;flex-direction:column;gap:16px;opacity:0;transition:opacity 1s cubic-bezier(.22,1,.36,1)}.card__graphs__graph:not(:first-child){position:absolute;top:0;left:0;width:100%;opacity:0}.card__graphs__graph.visible{opacity:1}.card__graphs__stat{padding-bottom:18px}.card__graphs__stat:not(:last-child){border-bottom:1px solid #d9d9d9}.card__graphs__graph__stat__heading{font-family:Google Sans Text,Roboto,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px;letter-spacing:.1px;color:#3c4043;margin-bottom:4px;color:#202124}graph-bar{--bar-color: color.$grey-900;--bar-background-color: #e6f4ea;--bar-fill-color: #34a853}.card__graphs__graph--yellow graph-bar{--bar-color: color.$grey-900;--bar-background-color: rgba(227, 116, 0, .1);--bar-fill-color: #e37400}";
var i0 = Object.defineProperty
  , n0 = Object.getOwnPropertyDescriptor
  , Fi = (o,i,n,r)=>{
    for (var l = r > 1 ? void 0 : r ? n0(i, n) : i, d = o.length - 1, f; d >= 0; d--)
        (f = o[d]) && (l = (r ? f(i, n, l) : f(l)) || l);
    return r && l && i0(i, n, l),
    l
}
;
let Ve = class extends At {
    constructor() {
        super(),
        this.categoryIndex = 0,
        this.categories = [],
        this.inview = !1
    }
    showCategoryGraph(o) {
        this.categoryIndex = o;
        const n = this.shadowRoot?.querySelector(`.card__graphs__graph:nth-child(${this.categoryIndex + 1})`)?.querySelectorAll("graph-bar") || [];
        Array.from(n).map(r=>{
            r?.setAttribute("animationtrigger", "true")
        }
        ),
        this.requestUpdate()
    }
    render() {
        return !!this.categories?.map(({stats: i})=>i.length).reduce((i,n)=>i + n) ? tt`
          <div class="bargraph-5050" part="container">
            <img
              role="presentation"
              loading="lazy"
              class="background"
              src="${this.imageUrl}"
              alt=""
            />

            ${this.categories?.map(({label: i, stats: n, color: r})=>n?.length ? tt`
                    <div class="card card--mobile" part="container">
                      <div class="card__heading">${i}</div>
                      <div class="card__subheading">${this.subheading}</div>

                      <div class="card__graphs">
                        <div
                          class="${le({
            card__graphs__graph: !0,
            [`card__graphs__graph--${r}`]: !0,
            visible: !0
        })}"
                        >
                          ${n?.map(({heading: l, value: d},f)=>tt`
                              <div class="card__graphs__stat">
                                <div class="card__graphs__graph__stat__heading">
                                  ${l}
                                </div>

                                <graph-bar
                                  value="${d}"
                                  animationDelay="${f * 125}"
                                  animationDuration="${Dr(750, 2e3, d / 100)}"
                                  ?animationTrigger="${this.inview}"
                                ></graph-bar>
                              </div>
                            `)}
                        </div>
                      </div>
                    </div>
                  ` : null)}

            <div class="card card--desktop" part="container">
              <div class="card__heading">${this.heading}</div>
              <div class="card__subheading">${this.subheading}</div>

              <div class="card__categories">
                ${this.categories?.map(({label: i, stats: n, color: r, events: l},d)=>n?.length ? tt`
                          <button
                            class="${le({
            card__categories__button: !0,
            [`card__categories__button--${r}`]: !0,
            active: d === this.categoryIndex
        })}"
                            @click="${()=>{
            this.showCategoryGraph(d)
        }
        }"
                            data-category="${l?.["event-category"]}"
                            data-action="${l?.["event-action"]}"
                            data-label="${l?.["event-label"]}"
                          >
                            ${i}
                          </button>
                        ` : null)}
              </div>

              <div class="card__graphs">
                ${this.categories?.map(({label: i, stats: n, color: r},l)=>n?.length ? tt`
                          <div
                            class="${le({
            card__graphs__graph: !0,
            [`card__graphs__graph--${r}`]: !0,
            visible: l === this.categoryIndex
        })}"
                          >
                            ${n?.map(({heading: d, value: f},S)=>tt`
                                <div class="card__graphs__stat">
                                  <div
                                    class="card__graphs__graph__stat__heading"
                                  >
                                    ${d}
                                  </div>

                                  <graph-bar
                                    value="${f}"
                                    animationDelay="${S * 125}"
                                    animationDuration="${Dr(750, 2e3, f / 100)}"
                                    ?animationTrigger="${this.inview && l === this.categoryIndex}"
                                  ></graph-bar>
                                </div>
                              `)}
                          </div>
                        ` : null)}
              </div>
            </div>
          </div>
        ` : null
    }
}
;
Ve.styles = jt(e0);
Fi([$({
    type: String
})], Ve.prototype, "heading", 2);
Fi([$({
    type: String
})], Ve.prototype, "subheading", 2);
Fi([$({
    type: String
})], Ve.prototype, "imageUrl", 2);
Fi([$({
    type: Array
})], Ve.prototype, "categories", 2);
Fi([$({
    type: Boolean
})], Ve.prototype, "inview", 2);
Ve = Fi([Ft("bargraph-5050")], Ve);
const r0 = ':host{display:block}.bar{display:flex;position:relative;height:var(--bar-height);border-radius:999px;clip-path:inset(0 0 0 0 round 999px)}.bar__value{position:relative;width:var(--bar-value);color:#fff;font-weight:700;text-align:center;min-width:32px}@media (max-width: 599px){.bar__value{min-width:25px}}.bar__value:before{content:"";display:block;position:absolute;top:0;right:0;height:100%;width:calc(100% + 24px);background-color:var(--bar-fill-color, #4285f4);border-radius:999px}.bar__value:nth-child(1){z-index:4}.bar__value:nth-child(2){z-index:3}.bar__value:nth-child(3){z-index:2}.bar__value:nth-child(4){z-index:1}.bar__label{font-family:Google Sans,Roboto,Arial,sans-serif;font-size:16px;line-height:24px;font-weight:500;position:relative;z-index:1;line-height:var(--bar-height)}@media (max-width: 599px){.bar__label{font-size:12px}}';
var s0 = Object.defineProperty
  , a0 = Object.getOwnPropertyDescriptor
  , La = (o,i,n,r)=>{
    for (var l = r > 1 ? void 0 : r ? a0(i, n) : i, d = o.length - 1, f; d >= 0; d--)
        (f = o[d]) && (l = (r ? f(i, n, l) : f(l)) || l);
    return r && l && s0(i, n, l),
    l
}
;
let bn = class extends At {
    constructor() {
        super(),
        this.colorMap = {},
        this.height = 20,
        this.legend = [],
        this.values = [],
        this.handleResize = ()=>{
            this.height = 20,
            window.innerWidth > 600 && (this.height = 24),
            this.requestUpdate()
        }
    }
    toFixed(o, i=0) {
        const n = Math.pow(10, Number(i) + 1);
        return (Number(o) + 1 / n).toFixed(i)
    }
    firstUpdated() {
        this.legend.forEach(({key: o, color: i})=>{
            this.colorMap[o] = i
        }
        ),
        this.handleResize(),
        this.requestUpdate()
    }
    connectedCallback() {
        super.connectedCallback(),
        window.addEventListener("resize", this.handleResize)
    }
    disconnectedCallback() {
        window.removeEventListener("resize", this.handleResize),
        super.disconnectedCallback()
    }
    render() {
        let o = 0;
        return tt`
      <div class="bar" style="--bar-height: ${this.height}px;">
        ${this.values?.map(({key: i, value: n})=>{
            const r = tt`<div
            class="bar__value"
            style="
            --bar-value: ${n}%; 
            --bar-progress: ${o}%; 
            --bar-fill-color: ${this.colorMap[i]}"
          >
            <div class="bar__label">${this.toFixed(n)}%</div>
          </div>`;
            return o = o + n,
            r
        }
        )}
      </div>
    `
    }
}
;
bn.styles = jt(r0);
La([$({
    type: Array
})], bn.prototype, "legend", 2);
La([$({
    type: Array
})], bn.prototype, "values", 2);
bn = La([Ft("graph-bar-stacked")], bn);
const o0 = '@keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-out{0%{opacity:1}to{opacity:0}}@keyframes arrow{0%{transform:translateZ(0)}50%{transform:translate3d(20px,0,0)}to{transform:translateZ(0)}}@keyframes zoom{0%{transform:scale(1)}to{transform:scale(1.1)}}@keyframes fade-up{0%{opacity:0;transform:translate3d(0,35px,0)}to{opacity:1;transform:translateZ(0)}}:host{display:block}.card{--card-padding: 40px 20px;padding:var(--card-padding);background-color:#fff;box-shadow:0 12px 34px #20345926;border-radius:8px;overflow:hidden}@media (min-width: 600px){.card{--card-padding: 40px}}@media (min-width: 1440px){.card{--card-padding: 80px}}.card.visible .card__graph__stat{opacity:1;transform:none}.card__heading{color:#202124;font-family:Google Sans,Roboto,Arial,sans-serif;font-size:24px;line-height:32px;font-weight:400;font-style:normal;margin-bottom:16px}@media (min-width: 600px){.card__heading{font-size:32px;line-height:40px;letter-spacing:-.25px}}@media (min-width: 1024px){.card__heading{font-size:36px;line-height:44px}}.card__subheading{font-family:Google Sans Text,Roboto,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px;letter-spacing:.1px;color:#3c4043;color:#202124}.card__legend{display:flex;flex-wrap:wrap;gap:20px;margin-top:20px}.card__legend__category{font-family:Google Sans Text,Roboto,Arial,sans-serif;font-size:14px;line-height:24px;letter-spacing:.15px;color:#3c4043;display:flex;align-items:center;justify-content:center;position:relative;gap:10px;color:#202124}.card__legend__category:before{content:"";display:block;width:14px;height:14px;background:var(--category-color);border-radius:50%}.card__graph{margin-top:24px}@media (max-width: 599px){.card__graph{display:flex;flex-direction:column;gap:24px}}.card__graph__stat{display:flex;flex-direction:column;justify-content:space-between;gap:6px;opacity:0;transform:translateY(-16px);transition:all .5s cubic-bezier(.22,1,.36,1)}@media (min-width: 600px){.card__graph__stat{height:64px;flex-direction:row;align-items:center}}.card__graph__stat:nth-child(0){transition-delay:0ms}.card__graph__stat:nth-child(1){transition-delay:.1s}.card__graph__stat:nth-child(2){transition-delay:.2s}.card__graph__stat:nth-child(3){transition-delay:.3s}.card__graph__stat:nth-child(4){transition-delay:.4s}.card__graph__stat:nth-child(5){transition-delay:.5s}.card__graph__stat:nth-child(6){transition-delay:.6s}.card__graph__stat:nth-child(7){transition-delay:.7s}.card__graph__stat:nth-child(8){transition-delay:.8s}.card__graph__stat:nth-child(9){transition-delay:.9s}.card__graph__stat:nth-child(10){transition-delay:1s}@media (min-width: 600px){.card__graph__stat{border-top:1px solid #d9d9d9}}.card__graph__stat__heading{display:flex;align-items:center;font-family:Google Sans Text,Roboto,Arial,sans-serif;font-size:14px;line-height:24px;letter-spacing:.15px;color:#3c4043;gap:12px;min-width:220px;color:#202124}@media (min-width: 600px){.card__graph__stat__heading{gap:16px}}.card__graph__stat__heading__icon{width:20px;height:20px;object-fit:contain}graph-bar-stacked{width:100%}';
var l0 = Object.defineProperty
  , c0 = Object.getOwnPropertyDescriptor
  , Bi = (o,i,n,r)=>{
    for (var l = r > 1 ? void 0 : r ? c0(i, n) : i, d = o.length - 1, f; d >= 0; d--)
        (f = o[d]) && (l = (r ? f(i, n, l) : f(l)) || l);
    return r && l && l0(i, n, l),
    l
}
;
let Ke = class extends At {
    constructor() {
        super(),
        this.legend = [],
        this.stats = [],
        this.inview = !1
    }
    render() {
        return this.stats?.length ? tt`
          <div
            class="card"
            class="${le({
            card: !0,
            visible: this.inview
        })}"
            part="container"
          >
            <div class="card__heading">${this.heading}</div>
            <div class="card__subheading">${this.subheading}</div>

            <div class="card__legend">
              ${this.legend?.map(({label: o, color: i})=>tt`
                  <div
                    class="card__legend__category"
                    style="--category-color: ${i}"
                  >
                    ${o}
                  </div>
                `)}
            </div>

            <div class="card__graph">
              ${this.stats?.map(({heading: o, icon: i, values: n},r)=>tt`
                  <div class="card__graph__stat">
                    <div class="card__graph__stat__heading">
                      <img
                        role="presentation"
                        class="card__graph__stat__heading__icon"
                        loading="lazy"
                        src="/static/images/icons/impact-calculator/${i}.svg"
                        alt=""
                      />
                      ${o}
                    </div>

                    <graph-bar-stacked
                      .legend="${this.legend}"
                      .values="${n}"
                    ></graph-bar-stacked>
                  </div>
                `)}
            </div>
          </div>
        ` : null
    }
}
;
Ke.styles = jt(o0);
Bi([$({
    type: String
})], Ke.prototype, "heading", 2);
Bi([$({
    type: String
})], Ke.prototype, "subheading", 2);
Bi([$({
    type: Array
})], Ke.prototype, "legend", 2);
Bi([$({
    type: Array
})], Ke.prototype, "stats", 2);
Bi([$({
    type: Boolean
})], Ke.prototype, "inview", 2);
Ke = Bi([Ft("fullwidth-bargraph-icons")], Ke);
const d0 = ":host{display:block}.impact-calculator-statement span{color:#1967d2;font-weight:700}.impact-calculator-heading{color:#202124;font-family:Google Sans,Roboto,Arial,sans-serif;font-size:24px;line-height:32px;font-weight:400;font-style:normal;grid-column:1/-1;margin-bottom:20px;text-align:center}@media (min-width: 600px){.impact-calculator-heading{font-size:32px;line-height:40px;letter-spacing:-.25px}}@media (min-width: 1024px){.impact-calculator-heading{font-size:36px;line-height:44px}}@media (min-width: 600px){.impact-calculator-heading{margin-bottom:40px}}results-card,stacked-result-cards,fullwidth-bargraph,.two-column,bargraph-5050,fullwidth-bargraph-icons{grid-column:1/-1}@media (min-width: 1024px){results-card,stacked-result-cards,fullwidth-bargraph,.two-column,bargraph-5050,fullwidth-bargraph-icons{grid-column:2/-2}}results-card::part(container){transform:translateY(-32px);margin-bottom:32px}@media (min-width: 600px){results-card::part(container){transform:translateY(-48px);margin-bottom:48px}}stacked-result-cards::part(container),fullwidth-bargraph::part(container){margin-bottom:40px}.two-column{display:flex;flex-direction:column;gap:40px}@media (min-width: 1024px){.two-column{flex-direction:row;gap:26px}}@media (min-width: 1440px){.two-column{gap:40px}}stacked-result-minicards,stacked-cardslider{flex:1}@media (min-width: 1440px){stacked-result-minicards{flex:0 0 35%}}stacked-result-minicards::part(container),stacked-cardslider::part(container){height:100%}bargraph-5050::part(container){margin-top:40px;margin-bottom:40px}";
var u0 = Object.defineProperty
  , h0 = Object.getOwnPropertyDescriptor
  , di = (o,i,n,r)=>{
    for (var l = r > 1 ? void 0 : r ? h0(i, n) : i, d = o.length - 1, f; d >= 0; d--)
        (f = o[d]) && (l = (r ? f(i, n, l) : f(l)) || l);
    return r && l && u0(i, n, l),
    l
}
;
let Te = class extends At {
    constructor() {
        super(),
        this.showHiddenGraphs = !1,
        this.showAllLocations = !1,
        this.inviewIds = [],
        this.layout = "statement",
        this.data = [],
        this.dataSustainability = [],
        this.content = {},
        this.ariaLabels = {},
        this.events = {},
        this.getMatchedmatchedProfileCount = o=>{
            const i = this.data.find(n=>n && n.new_industry === o.new_industry && n.new_location === o.new_location && n.usecase === o.usecase);
            if (i) {
                const {match_your_profile: n} = i;
                if (n)
                    return parseInt(n)
            }
        }
        ,
        this.getFilteredResult = (o,i)=>{
            const {new_industry: n, usecase: r} = o
              , l = this.showAllLocations ? "____" : o.new_location;
            return i.find(d=>d && d.new_industry === n && d.new_location === l && d.usecase === r)
        }
        ,
        this.getFilteredResults = (o,i)=>{
            const {new_industry: n, usecase: r} = o
              , l = this.showAllLocations ? "____" : o.new_location;
            return i.filter(d=>d && d.new_industry === n && d.new_location === l && d.usecase === r)
        }
        ,
        this.generateStat = (o,i,n={},r,l)=>({
            heading: this.content[o],
            value: this.convertUnit(n[i], r),
            events: l
        }),
        this.generateStats = (o,i={},n=!1)=>o.map(([r,l,d])=>this.generateStat(r, l, i, n, d)),
        this.data = [],
        this.dataSustainability = []
    }
    getUserInput() {
        const o = new URLSearchParams(window.location.search);
        this.showHiddenGraphs = o.get("show_hidden_graphs") === "1";
        const i = o.get("industry")
          , n = o.get("headquarters")
          , r = o.get("usecase");
        return {
            new_industry: i,
            new_location: n,
            usecase: r
        }
    }
    firstUpdated() {
        const o = this.getUserInput()
          , i = this.getMatchedmatchedProfileCount(o);
        this.showAllLocations = !!(i && i < 20),
        this.showAllLocations || this.removeBanner();
        const n = this.getFilteredResult(o, this.data)
          , r = this.getFilteredResults(o, this.dataSustainability);
        this.companiesLikeYours = this.buildCompaniesLikeYours(n),
        this.businessLikeYours = this.buildBusinessLikeYours(n),
        this.improvedOperations = this.buildImprovedOperations(n),
        this.customerBenefits = this.buildCustomerBenefits(n),
        this.competitiveAdvantage = this.buildCompetitiveAdvantage(n),
        this.increasingVisibility = this.buildIncreasingVisibility(n),
        this.sustainabilityImpact = this.buildSustainabilityImpact(r),
        this.initInviewObserver(),
        this.requestUpdate()
    }
    removeBanner() {
        document.querySelector(".banner")?.remove()
    }
    initInviewObserver() {
        const o = new IntersectionObserver(i=>{
            i.forEach(n=>{
                if (n.isIntersecting) {
                    const r = n.target?.id;
                    this.inviewIds?.includes(r) || (n.target.setAttribute("inview", "true"),
                    this.inviewIds?.push(r),
                    this.requestUpdate()),
                    this.inviewEls?.length === this.inviewIds.length && o?.disconnect()
                }
            }
            )
        }
        ,{
            rootMargin: "0px 0px -25% 0px",
            threshold: .5
        });
        this.inviewEls = this.shadowRoot?.querySelectorAll("[id]"),
        this.inviewEls?.forEach(i=>{
            o.observe(i)
        }
        )
    }
    filterFavorableStats(o) {
        return o.filter(({value: i})=>i > 1)
    }
    convertUnit(o, i) {
        if (!o)
            return 0;
        const n = parseFloat(o);
        return i ? o ? n * 100 : 0 : o ? n : 0
    }
    buildResultsStatement(o={}) {
        const {highlightedKPI: i} = o;
        return (l=>{
            const f = {
                Increasedoperationaleffic: "summaryCardCategoryOperationalEfficiency",
                Optimizedsupplychainop: "summaryCardCategorySupplyChain",
                Increasedproductivecapaci: "summaryCardCategoryProductiveCapacity",
                ch_mh_per_trans: "summaryCardCategoryEmployeeTransaction",
                ch_mh_per_del: "summaryCardCategoryEmployeeDelivery",
                ch_manf_costs: "summaryCardCategoryManufacturingCost",
                ch_fleetsize_cost: "summaryCardCategoryFleetSize",
                ch_fuel_cost: "summaryCardCategoryFuelCosts",
                ch_cust_serv_cost: "summaryCardCategoryCustomerServiceCosts",
                Q12profitgrowth_delta: "summaryCardCategoryProfitRate",
                Q10customergrowth_delta: "summaryCardCategoryProfitRate",
                Transactionsperyear: "summaryCardCategoryTransactionsPerYear",
                Customerretention: "summaryCardCategoryCustomerRetention",
                Newbusinessopportunities: "summaryCardCategoryNewBusinessOpportunities"
            }[l]
              , S = this.convertUnit(o[l], l === "Z_Q29Myorganizationhasbecome")
              , {summaryCardTitleChange: C, summaryCardTitleProfitability: F, summaryCardChangeIncrease: U, summaryCardChangeDecrease: B} = this.content;
            if (l === "Z_Q29Myorganizationhasbecome") {
                const L = document.querySelector(".footer--ic-registration .footer__footnotes");
                return L && (L.style.display = "block"),
                F.replace(/{percentage}/g, `<span>${S.toFixed(1)}%</span>`)
            }
            return C.replace(/{percentage}/g, `<span>${Math.abs(S).toFixed(1)}%</span>`).replace(/{change}/g, S > 0 ? U : B).replace(/{category}/g, this.content[f])
        }
        )(i)
    }
    buildCompaniesLikeYours(o={}) {
        const {summaryCardEyebrow: i, summaryCardBody: n, summaryCardBusinessesValue: r, summaryCardDisclaimer: l, summaryCardMatchesValue: d} = this.content
          , {match_your_profile: f} = o;
        return {
            eyebrow: i,
            heading: this.buildResultsStatement(o),
            subheading: n,
            disclaimer: l,
            stats: [{
                heading: r,
                value: 1e3
            }, {
                heading: d,
                value: this.convertUnit(f)
            }]
        }
    }
    buildBusinessLikeYours(o={}) {
        const {competitionSectionTitle: i} = this.content
          , n = this.generateStats([["competitionCategoryOperations", "Increasedoperationaleffic"], ["competitionCategoryProductivity", "Increasedproductivecapaci"], ["competitionCategoryRetention", "Customerretention"], ["competitionCategorySupply", "Optimizedsupplychainop"], ["competitionCategoryTransactions", "Transactionsperyear"], ["competitionCategoryBusiness", "Newbusinessopportunities"]], o);
        return {
            heading: i,
            stats: this.showHiddenGraphs ? n : this.filterFavorableStats(n)
        }
    }
    buildImprovedOperations(o={}) {
        const {operationsTitle: i, operationsBody: n} = this.content
          , r = this.generateStats([["operationsCategoryVisibility", "Q21Greatervisibilityintoope"], ["operationsCategoryBehaviors", "Q21Greatervisibilityintocus"], ["operationsCategoryCosts", "Q21ReducedoperatingcostsW"], ["operationsCategoryEfficiency", "Q21Improvedoperationaleffici"], ["operationsCategoryAcquisition", "Q21Increasedcustomeracquisit"], ["operationsCategoryRepeat", "Q21Increasedcustomerretentio"], ["operationsCategoryRetention", "Q21Increasedrateofrepeatbu"]], o, !0);
        return {
            heading: i,
            subheading: n,
            stats: this.showHiddenGraphs ? r : this.filterFavorableStats(r)
        }
    }
    buildCustomerBenefits(o={}) {
        const {benefitsTitle: i, benefitsBody: n} = this.content
          , r = this.generateStats([["benefitsCategoryPlanning", "Z_Q31Geospatialservicesallowo"], ["benefitsCategoryRealTime", "Z_Q31Realtimeupdatesviageosp"], ["benefitsCategoryPerception", "Z_Q31Geospatialservicesareac"], ["benefitsCategorySeamless", "Z_Q31Geospatialservicescreate"]], o, !0);
        return {
            heading: i,
            subheading: n,
            stats: this.showHiddenGraphs ? r : this.filterFavorableStats(r)
        }
    }
    buildCompetitiveAdvantage(o={}) {
        const {advantagesTitle: i, advantagesBody: n} = this.content
          , r = this.generateStats([["advantagesCarouselProfits", "Z_Q29Myorganizationhasbecome", this.events.ROICompetitiveAdvantageProfits], ["advantagesCarouselDifferentiated", "Z_Q29Geospatialservicesareac", this.events.ROICompetitiveAdvantageDifferentiated], ["advantagesCarouselOptimized", "Z_Q29Geospatialserviceshelpmy", this.events.ROICompetitiveAdvantageOptimized], ["advantagesCarouselEfficiency", "Z_Q29Geospatialservicesmakemy", this.events.ROICompetitiveAdvantageEfficiency], ["advantagesCarouselStrategy", "Z_Q29Geosbetterstrat", this.events.ROICompetitiveAdvantageStrategy], ["advantagesCarouselExperiences", "Z_Q29Geospatialservicesimprove", this.events.ROICompetitiveAdvantageExperiences], ["advantagesCarouselLoyalty", "Z_Q29Geospatialservicesarean", this.events.ROICompetitiveAdvantageLoyalty], ["advantagesCarouselBehaviors", "Z_Q29Myorganizationsanalytics", this.events.ROICompetitiveAdvantageBehaviors], ["advantagesCarouselSustainable", "Z_Q29Geosmoresustain", this.events.ROICompetitiveAdvantageSustainable]], o, !0);
        return {
            heading: i,
            subheading: n,
            stats: this.showHiddenGraphs ? r : this.filterFavorableStats(r)
        }
    }
    buildIncreasingVisibility(o={}) {
        const {visibilityTitle: i, visibilityBody: n, visibilityCustomerTabLabel: r, visibilityCompanyTabLabel: l} = this.content
          , d = this.generateStats([["visibilityCustomerTabCategoryAreas", "Z_Q21eHotspotsegareasti"], ["visibilityCustomerTabCategoryRequests", "Z_Q21eCustomerservicerequests"], ["visibilityCustomerTabCategoryDeliveries", "Z_Q21eDeliveryserviceoptimizat"], ["visibilityCustomerTabCategoryOnsite", "Z_Q21eMeasuringcustomertimeon"], ["visibilityCustomerTabCategoryErrors", "Z_Q21eUnderstandingcheckoutor"], ["visibilityCustomerTabCategoryApp", "Z_Q21eMeasuringinteractionswit"]], o, !0)
          , f = this.generateStats([["visibilityCompanyTabCategoryDelivery", "Z_Q21dDeliverytrackingTowha"], ["visibilityCompanyTabCategoryInventory", "Z_Q21dInventorymanagementTo"], ["visibilityCompanyTabCategoryManufacturing", "Z_Q21dProductmanufacturingTo"], ["visibilityCompanyTabCategoryEnergy", "Z_Q21dEnergyuseTowhatexten"], ["visibilityCompanyTabCategoryLabor", "Z_Q21dLaborallocationTowhat"], ["visibilityCompanyTabCategoryPartners", "Z_Q21dIntegrationwithbusiness"]], o, !0);
        let C = window.matchMedia("(max-width: 600px)").matches ? 640 : 1080;
        return C = C * Math.min(window.devicePixelRatio, 2),
        {
            heading: i,
            subheading: n,
            imageUrl: `https://lh3.googleusercontent.com/7YX9TOnWTxA7FnDxYcBXcEhpjuad0Jsg1ZeF9yFuxzeS9aJFfYcxlIbPpY-E73Plile3XCZI5ZWkSrmhB9G5RnEblmnUszZ6pqUHoQ=rw-e365-w${C}`,
            categories: [{
                label: r,
                stats: this.showHiddenGraphs ? d : this.filterFavorableStats(d),
                color: "green",
                events: this.events.ROICompanyVisibility
            }, {
                label: l,
                stats: this.showHiddenGraphs ? f : this.filterFavorableStats(f),
                color: "yellow",
                events: this.events.ROICustomerVisibility
            }]
        }
    }
    buildSustainabilityImpact(o=[]) {
        const {sustainabilityTitle: i, sustainabilityBody: n, sustainabilityKeyYellow: r, sustainabilityKeyBlue: l, sustainabilityKeyGreenLight: d, sustainabilityKeyGreenDark: f} = this.content
          , S = (B,L,R,z=[],K)=>{
            const q = z.flatMap(T=>{
                if (T[R]) {
                    const g = this.convertUnit(T[R], K);
                    if (g > 0)
                        return {
                            key: T.response_level,
                            value: g
                        }
                }
                return []
            }
            );
            return {
                icon: B,
                heading: this.content[L],
                values: q
            }
        }
          , F = ((B,L=[],R=!1)=>B.map(([z,K,q])=>S(z, K, q, L, R)))([["fuel_use", "sustainabilityCategoryFuel", "Q26EnergyfueluseTowhate"], ["packaging_waste", "sustainabilityCategoryCarbon", "Q26CarbonoutputsTowhatex"], ["vendor_sustainability", "sustainabilityCategoryPackaging", "Q26PackagingwasteTowhate"], ["sustainable_sourcing", "sustainabilityCategoryVendor", "Q26Partnervendorsustainabili"], ["fuel_use", "sustainabilityCategorySourcing", "Q26SustainablesourcingTow"], ["conservation_efforts", "sustainabilityCategoryConservation", "Q26ConservationeffortsTow"], ["renewable_energy", "sustainabilityCategoryRenewables", "Q26RenewableenergyTowhat"]], o, !0)
          , U = B=>B.filter(({values: L})=>L.length !== 0);
        return {
            heading: i,
            subheading: n,
            legend: [{
                label: r,
                key: r,
                color: "#e37400"
            }, {
                label: l,
                key: l,
                color: "#4285f4"
            }, {
                label: d,
                key: d,
                color: "#34a853"
            }, {
                label: f,
                key: f,
                color: "#0d652d"
            }],
            stats: this.showHiddenGraphs ? F : U(F)
        }
    }
    render() {
        return this.layout === "graphs" ? tt`
          <container-grid>
            <results-card
              eyebrow="${this.companiesLikeYours?.eyebrow}"
              heading="${this.companiesLikeYours?.heading}"
              subheading="${this.companiesLikeYours?.subheading}"
              .stats="${this.companiesLikeYours?.stats}"
              disclaimer="${this.companiesLikeYours?.disclaimer}"
            ></results-card>

            <div class="impact-calculator-heading">
              ${this.businessLikeYours?.heading}
            </div>

            <stacked-result-cards
              id="businesses-like-yours"
              .stats="${this.businessLikeYours?.stats}"
            >
            </stacked-result-cards>

            <fullwidth-bargraph
              id="improved-operations"
              heading="${this.improvedOperations?.heading}"
              subheading="${this.improvedOperations?.subheading}"
              .stats="${this.improvedOperations?.stats}"
            >
            </fullwidth-bargraph>
          </container-grid>

          <container-grid>
            <div class="two-column">
              <stacked-result-minicards
                id="customer-benefits"
                heading="${this.customerBenefits?.heading}"
                subheading="${this.customerBenefits?.subheading}"
                .stats="${this.customerBenefits?.stats}"
              ></stacked-result-minicards>

              <stacked-cardslider
                id="competitive-advantages"
                heading="${this.competitiveAdvantage?.heading}"
                subheading="${this.competitiveAdvantage?.subheading}"
                .stats="${this.competitiveAdvantage?.stats}"
                .ariaLabels="${{
            carouselLeft_AltText: this.ariaLabels.carouselLeft_AltText,
            carouselRight_AltText: this.ariaLabels.carouselRight_AltText,
            carousel_navigateToSlide: this.ariaLabels.carousel_navigateToSlide
        }}"
              >
              </stacked-cardslider>
            </div>
          </container-grid>

          <container-grid>
            <bargraph-5050
              id="increasing-visibility"
              imageUrl="${this.increasingVisibility?.imageUrl}"
              heading="${this.increasingVisibility?.heading}"
              subheading="${this.increasingVisibility?.subheading}"
              .categories="${this.increasingVisibility?.categories}"
            ></bargraph-5050>

            <fullwidth-bargraph-icons
              id="sustainability-impact"
              heading="${this.sustainabilityImpact?.heading}"
              subheading="${this.sustainabilityImpact?.subheading}"
              .legend="${this.sustainabilityImpact?.legend}"
              .stats="${this.sustainabilityImpact?.stats}"
            >
            </fullwidth-bargraph-icons>
          </container-grid>
        ` : tt`<div class="impact-calculator-statement">
          ${Ca(this.companiesLikeYours?.heading || "")}
        </div>`
    }
}
;
Te.styles = jt(d0);
di([$({
    type: String
})], Te.prototype, "layout", 2);
di([$({
    type: Array
})], Te.prototype, "data", 2);
di([$({
    type: Array
})], Te.prototype, "dataSustainability", 2);
di([$({
    type: Object
})], Te.prototype, "content", 2);
di([$({
    type: Object
})], Te.prototype, "ariaLabels", 2);
di([$({
    type: Object
})], Te.prototype, "events", 2);
Te = di([Ft("impact-calculator-results")], Te);
var f0 = Object.defineProperty
  , p0 = Object.getOwnPropertyDescriptor
  , ka = (o,i,n,r)=>{
    for (var l = r > 1 ? void 0 : r ? p0(i, n) : i, d = o.length - 1, f; d >= 0; d--)
        (f = o[d]) && (l = (r ? f(i, n, l) : f(l)) || l);
    return r && l && f0(i, n, l),
    l
}
;
const Jc = {
    ru: tt`На&nbsp;`
}
  , jc = {
    fr: "narrowSymbol",
    it: "narrowSymbol"
};
let wn = class extends At {
    constructor() {
        super(...arguments),
        this.amount = "",
        this.currency = "USD",
        this.locale = document.documentElement.lang
    }
    render() {
        if (this.amount) {
            this.amount = parseFloat(this.amount.replace(/[$]/g, ""));
            let o = 2;
            this.amount % 1 === 0 && (o = 0);
            const i = {
                style: "currency",
                currency: this.currency,
                minimumFractionDigits: o
            };
            jc[this.locale] && (i.currencyDisplay = jc[this.locale]);
            const r = new Intl.NumberFormat(this.locale,i).formatToParts(this.amount);
            return this.locale in Jc && r.unshift({
                type: "literal",
                value: Jc[this.locale]
            }),
            tt`
        ${r.map(l=>tt`<span class="${l.type}">${l.value}</span>`)}
      `
        }
        return tt``
    }
}
;
wn.styles = td`
    :host {
      color: var(--localized-price-color);
      font-size: var(--localized-price-font-size);
      font-weight: var(--localized-price-font-weight);
      line-height: var(--localized-price-line-height);
      letter-spacing: var(--localized-price-letter-spacing);
      white-space: nowrap;
    }
    .currency {
      display: inline-block;
      font-size: var(--localized-price-currency-font-size);
    }
    .literal {
      font-size: var(--localized-price-literal-font-size);
    }
  `;
ka([$()], wn.prototype, "amount", 2);
ka([$()], wn.prototype, "currency", 2);
wn = ka([Ft("localized-price")], wn);
class g0 {
    constructor(i) {
        this.el = i,
        this.trackPlayerStatus()
    }
    trackPlayerStatus() {
        this.el.addEventListener("stateChange", i=>{
            window.dataLayer = window.dataLayer || [];
            const n = i.detail.event.data
              , r = i.detail.event.target.videoTitle
              , l = i.detail.event.target.getDuration()
              , d = i.detail.event.target.getVideoData().video_id;
            let f;
            n === -1 ? f = "video_start" : n === 0 && (f = "video_complete"),
            f && window.dataLayer.push({
                event: f,
                eventParams: {
                    videoTitle: r,
                    videoProvider: "Google Maps Platform",
                    videoUrl: `https://youtu.be/${d}`,
                    videoDuration: l
                }
            })
        }
        )
    }
}
window.customElements.define("degu-image", te);
window.customElements.define("degu-youtube-inline", Di);
class m0 {
    constructor() {
        jy(),
        r_(),
        n_(),
        Ky(),
        document.addEventListener("DOMContentLoaded", ()=>{
            this.init()
        }
        )
    }
    init() {
        this.checkIfPageIs404(),
        this.scrollBookmarkIntoView(),
        i_(),
        Array.from(document.querySelectorAll("[data-external-links]")).forEach(d=>{
            e_(d)
        }
        ),
        new qy({
            useHandlerOnMobile: !0,
            playerVars: {
                cc_load_policy: 1
            }
        });
        const i = document.querySelector("div.banner");
        i && new Yy(i);
        const n = document.querySelector("header.header");
        n && new R_(n);
        const r = document.querySelector("footer.footer");
        r && new __(r),
        Array.from(document.querySelectorAll("[lazyload]")).forEach(d=>{
            new V_(d)
        }
        ),
        Array.from(document.querySelectorAll(".video-controls")).forEach(d=>{
            new _b(d)
        }
        ),
        Array.from(document.querySelectorAll(".sf-select")).forEach(d=>{
            new c_(d)
        }
        ),
        Array.from(document.querySelectorAll(".usecase-hero")).forEach(d=>{
            new yb(d)
        }
        ),
        Array.from(document.querySelectorAll(".language-selector")).forEach(d=>{
            new H_(d)
        }
        ),
        Array.from(document.querySelectorAll(".demo-carousel, .fullwidth-cards-carousel, .media-carousel")).forEach(d=>{
            new ud(d)
        }
        ),
        Array.from(document.querySelectorAll(".industry-hero")).forEach(d=>{
            new U_(d)
        }
        ),
        Array.from(document.querySelectorAll(".fullbleed-5050")).forEach(d=>{
            new A_(d)
        }
        ),
        Array.from(document.querySelectorAll(".fullwidth-cards")).forEach(d=>{
            new T_(d)
        }
        ),
        Array.from(document.querySelectorAll(".usecase-carousel, .image-tabs-carousel")).forEach(d=>{
            new vb(d)
        }
        ),
        Array.from(document.querySelectorAll(".demo-cards")).forEach(d=>{
            new v_(d)
        }
        ),
        Array.from(document.querySelectorAll(".demo-cards")).forEach(d=>{
            new bc(d,"modal"),
            new Kc(d,12)
        }
        ),
        Array.from(document.querySelectorAll(".resource-cards")).forEach(d=>{
            new bc(d,"expand"),
            new Kc(d)
        }
        ),
        Array.from(document.querySelectorAll(".industry-cards")).forEach(d=>{
            new Ac(d,"industry-cards")
        }
        ),
        Array.from(document.querySelectorAll(".sf-hero")).forEach(d=>{
            new Ac(d,"sf-expandable-card")
        }
        ),
        Array.from(document.querySelectorAll(".pricing-grid")).forEach(d=>{
            new K_(d)
        }
        ),
        Array.from(document.querySelectorAll(".form:not(.form--ic-registration)")).forEach(d=>{
            new Ic(d)
        }
        ),
        Array.from(document.querySelectorAll(".form--ic-registration")).forEach(d=>{
            new Ic(d,()=>{
                window.location.href = `/resources/impact-calculator/results/${window.location.search}`
            }
            )
        }
        ),
        Array.from(document.querySelectorAll("[tabs]")).forEach(d=>{
            new lb(d)
        }
        ),
        Array.from(document.querySelectorAll(".testimonials-carousel")).forEach(d=>{
            new cb(d)
        }
        ),
        Array.from(document.querySelectorAll(".whygoogle-hero")).forEach(d=>{
            new wb(d)
        }
        ),
        Array.from(document.querySelectorAll(".stats")).forEach(d=>{
            new tb(d)
        }
        ),
        Array.from(document.querySelectorAll(".industry-video")).forEach(d=>{
            new z_(d)
        }
        ),
        Array.from(document.querySelectorAll("#ic-form")).forEach(d=>{
            new O_(d)
        }
        ),
        Array.from(document.querySelectorAll(".ic-save-pdf")).forEach(d=>{
            new $_(d)
        }
        ),
        Array.from(document.querySelectorAll(".ic-copy-link")).forEach(d=>{
            new P_(d)
        }
        ),
        Array.from(document.querySelectorAll(".masonry-overlay-cards")).forEach(d=>{
            new Ab(d)
        }
        );
        const l = document.querySelectorAll("lottie-player[play-on-idle]");
        Array.from(l).forEach(d=>d.addEventListener("ready", ()=>new N_(d))),
        Array.from(document.querySelectorAll(".dropdown")).forEach(d=>{
            new m_(d)
        }
        ),
        Array.from(document.querySelectorAll(".blog-listing")).forEach(d=>new d_(d)),
        Array.from(document.querySelectorAll(".blog-post")).forEach(d=>new u_(d)),
        Array.from(document.querySelectorAll("degu-youtube-inline")).forEach(d=>new g0(d)),
        Array.from(document.querySelectorAll(".share")).forEach(d=>{
            new j_(d)
        }
        )
    }
    checkIfPageIs404() {
        const i = document.querySelector('meta[name="page-id"]');
        i && i.getAttribute("content") === "404" && Array.from(document.querySelectorAll("a")).forEach(n=>{
            n.setAttribute("target", "_top")
        }
        )
    }
    scrollBookmarkIntoView() {
        const i = window.location.hash.substring(1)
          , n = document.getElementById(i);
        n && window.setTimeout(()=>{
            n.scrollIntoView()
        }
        , 100)
    }
}
new m0;
