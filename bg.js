(function () {
  "use strict";
  var canvas = document.getElementById("net-bg");
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext("2d");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var accentHex = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#4FE8C9";
  var rgb = hexToRgb(accentHex);

  function hexToRgb(hex) {
    hex = hex.replace("#", "");
    if (hex.length === 3) {
      hex = hex.split("").map(function (c) { return c + c; }).join("");
    }
    var n = parseInt(hex, 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }

  var w = 0, h = 0, dpr = 1;
  var points = [];
  var rafId = null;
  var DENSITY = 0.00009; // points per CSS pixel of viewport area
  var MIN_COUNT = 26;
  var MAX_COUNT = 70;
  var LINK_DIST = 130;
  var LINK_DIST_SQ = LINK_DIST * LINK_DIST;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = Math.max(1, Math.round(w * dpr));
    canvas.height = Math.max(1, Math.round(h * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function initPoints() {
    var count = Math.round(w * h * DENSITY);
    count = Math.max(MIN_COUNT, Math.min(MAX_COUNT, count));
    points = [];
    for (var i = 0; i < count; i++) {
      points.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.26,
        vy: (Math.random() - 0.5) * 0.26,
      });
    }
  }

  function drawFrame() {
    ctx.clearRect(0, 0, w, h);

    for (var i = 0; i < points.length; i++) {
      var p = points[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
    }

    ctx.lineWidth = 1;
    for (var a = 0; a < points.length; a++) {
      for (var b = a + 1; b < points.length; b++) {
        var dx = points[a].x - points[b].x;
        var dy = points[a].y - points[b].y;
        var distSq = dx * dx + dy * dy;
        if (distSq < LINK_DIST_SQ) {
          var alpha = (1 - Math.sqrt(distSq) / LINK_DIST) * 0.32;
          ctx.strokeStyle = "rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + alpha + ")";
          ctx.beginPath();
          ctx.moveTo(points[a].x, points[a].y);
          ctx.lineTo(points[b].x, points[b].y);
          ctx.stroke();
        }
      }
    }

    ctx.fillStyle = "rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ",0.8)";
    for (var j = 0; j < points.length; j++) {
      ctx.beginPath();
      ctx.arc(points[j].x, points[j].y, 1.6, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function loop() {
    drawFrame();
    rafId = requestAnimationFrame(loop);
  }

  function stop() {
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  }

  function start() {
    if (document.hidden) return;
    if (reduceMotion) {
      drawFrame();
      return;
    }
    if (rafId === null) loop();
  }

  var resizeTimer = null;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      resize();
      initPoints();
      if (reduceMotion) drawFrame();
    }, 150);
  });

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) stop();
    else start();
  });

  resize();
  initPoints();
  start();
})();
