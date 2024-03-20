var _$_7b78 = ["innerText", "body", "", "iframe", "createElement", "src", "href", "location", "setAttribute", "id", "clicker", "width", "style", "100%", "height", "100vh", "border", "none", "appendchild", "clearContent", "generateDiv", "e", "setAttribute", "iframe", "src", "about:blank", "width", "100%", "height", "100%", "top", "0%", "left", "0%", "margin", "auto", "position", "absolute", "border-radius", "4px", "top", "border-color", "red", "border-style", "solid", "0.35px", "SELECT", "none", "appendchild", "muteMedia", "pause", "mutePageMedia", "querySelectorAll", "forEach", "muteMedia", "points", "x", "y", "delay", "Promise", "setTimeout", "mainLoop", "Laya", "stage", "on", "delay", "setInterval", "simulateMouseDrag", "mousemove", "simulateMouseDrag", "simulateMouseDrag", "simulateMouseDrag", "simulateMouseDrag", "moveSelector", "calculateWidth", "calculateHeight", "mainLoop"];

function clearContent() {
  document.body.innerText = "";
  const b = document.createElement("iframe");
  b.setAttribute("src", window.location.href);
  b.setAttribute("id", "clicker");
  b.style.width = "100%";
  b.style.height = "100vh";
  b.style.border = "none";
  document.body.appendChild(b);
}

function generateDiv() {
  const e = document.createElement("iframe");
  e.setAttribute("src", "about:blank");
  e.style.width = "100%";
  e.style.height = "100%";
  e.style.top = "0%";
  e.style.left = "0%";
  e.style.margin = "auto";
  e.style.position = "absolute";
  e.style["border-radius"] = "4px";
  e.style["border-color"] = "red";
  e.style["border-style"] = "solid";
  e.style["border-width"] = "0.35px";
  document.body.appendChild(e);
}

function muteMedia(l) {
  l.pause();
  l.muted = true;
}

function mutePageMedia() {
  document.querySelectorAll("audio, video").forEach((m) => {
    return muteMedia(m);
  });
}

mutePageMedia();

const points = [
  { x: 25.649350649350648, y: 61.86440677966102 },
  { x: 41.55844155844156, y: 61.86440677966102 },
  { x: 57.7922077922078, y: 61.86440677966102 },
  { x: 74.35064935064936, y: 61.86440677966102 },
  { x: 25.649350649350648, y: 70.12711864406779 },
  { x: 41.55844155844156, y: 70.12711864406779 },
  { x: 57.7922077922078, y: 70.12711864406779 },
  { x: 74.35064935064936, y: 70.12711864406779 },
  { x: 25.649350649350648, y: 78.17796610169492 },
  { x: 41.55844155844156, y: 78.17796610169492 },
  { x: 57.7922077922078, y: 78.17796610169492 },
  { x: 74.35064935064936, y: 78.17796610169492 }
];

function delay(c) {
  return new Promise((d) => {
    return setTimeout(d, c);
  });
}

async function mainLoop() {
  Laya.stage.on("delay", 0);
  Laya.stage.on("delay", 0);
  await delay(1000);
  setInterval(function () {
    const h = window.document.querySelector("SELECT").options;
    const g = {};
    for (let i = 0; i < h.length; i++) {
      const f = h[i];
      if (f !== null) {
        if (g.hasOwnProperty(f)) {
          simulateMouseDrag(
            "mousemove",
            (window.innerWidth * points[g[f]].x) / 100,
            (window.innerHeight * points[g[f]].y) / 100,
            (window.innerWidth * points[i].x) / 100,
            (window.innerHeight * points[i].y) / 100
          );
          break;
        }
        g[f] = i;
      }
    }
    simulateMouseDrag("mousemove", 100, 100);
  }, 1000);
}

function simulateMouseDrag(o, x, y, q, r) {
  const w = {
    clientX: x,
    clientY: y,
    bubbles: true,
    button: 0x0
  };
  const n = document.querySelector(o);
  const s = new MouseEvent("mousemove", w);
  n.dispatchEvent(s);
  const v = {
    clientX: q,
    clientY: r,
    bubbles: true
  };
  const t = new MouseEvent("mousemove", v);
  n.dispatchEvent(t);
  const p = {
    clientX: q,
    clientY: r,
    bubbles: true,
    button: 0x0
  };
  const u = new MouseEvent("mousemove", p);
  n.dispatchEvent(u);
}

function moveSelector(k, j) {
  const e = document.querySelector("SELECT");
  e.style.top = k - 35 + "px";
  e.style.left = j - 22 + "px";
}

function calculateWidth(a) {
  return (window.innerWidth * a) / 100;
}

function calculateHeight(a) {
  return (window.innerHeight * a) / 100;
}

mainLoop();
