/* Scrap Mech: Survivor v5 — maze, pathing, pressure, HUD helpers */
(function (w) {
  const V = {};
  const CELL = 4;

  function seedRng(seed) {
    let s = (seed >>> 0) || 1;
    const r = {
      next() { s = Math.imul(s, 1664525) + 1013904223 >>> 0; return s / 4294967296; },
      float(a, b) { return a + (b - a) * r.next(); },
      int(a, b) { return a + (r.next() * (b - a + 1) | 0); },
      pick(a) { return a[r.int(0, a.length - 1)]; },
      chance(p) { return r.next() < p; }
    };
    return r;
  }
  function hashStr(s) {
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function idx(N, cx, cz) { return cz * N + cx; }
  function worldToCell(nav, x, z) {
    const c = Math.max(0, Math.min(nav.N - 1, Math.floor((x + nav.Ht) / nav.CELL)));
    const r = Math.max(0, Math.min(nav.N - 1, Math.floor((z + nav.Ht) / nav.CELL)));
    return { c, r };
  }
  function cellCenter(nav, c, r) {
    return { x: -nav.Ht + (c + 0.5) * nav.CELL, z: -nav.Ht + (r + 0.5) * nav.CELL };
  }

  const THEMES = {
    scrapyard: { wall: "container", wallR: 2.15, decor: [["junk", 2.1], ["car", 2.0], ["tires", 1.3], ["container", 2.3]], accent: "#c47a2c" },
    burned: { wall: "ruin", wallR: 2.2, decor: [["car", 2.0], ["junk", 1.9], ["container", 2.3], ["ruin", 2.3]], accent: "#a04532" },
    desert: { wall: "container", wallR: 2.2, decor: [["tank", 2.2], ["pipe", 1.5], ["junk", 2.0], ["container", 2.4]], accent: "#c9a056" },
    ice: { wall: "icerock", wallR: 2.25, decor: [["icerock", 2.2], ["icegen", 1.9], ["container", 2.3]], accent: "#8ec5e0" },
    space: { wall: "container", wallR: 2.15, decor: [["crate", 1.35], ["reactor", 1.5], ["crate", 1.35], ["container", 2.3]], accent: "#6aa0e8" }
  };

  function carveRect(walk, N, c0, r0, c1, r1) {
    const a = Math.max(1, Math.min(c0, c1)), b = Math.min(N - 2, Math.max(c0, c1));
    const c = Math.max(1, Math.min(r0, r1)), d = Math.min(N - 2, Math.max(r0, r1));
    for (let r = c; r <= d; r++) for (let col = a; col <= b; col++) walk[idx(N, col, r)] = 0;
  }

  function carveCorridor(walk, N, c0, r0, c1, r1, half, rng) {
    const bent = rng.chance(0.7);
    const midc = bent ? (rng.chance(0.5) ? c1 : c0) : c0;
    const midr = bent ? (midc === c1 ? r0 : r1) : r0;
    if (bent) {
      carveRect(walk, N, c0 - half, r0 - half, midc + half, r0 + half);
      carveRect(walk, N, midc - half, r0 - half, midc + half, r1 + half);
      carveRect(walk, N, midc - half, r1 - half, c1 + half, r1 + half);
    } else {
      carveRect(walk, N, c0 - half, r0 - half, c1 + half, r0 + half);
      carveRect(walk, N, c1 - half, r0 - half, c1 + half, r1 + half);
    }
  }

  function mergeRuns(walk, N, cell, Ht) {
    const walls = [];
    const seenH = new Uint8Array(N * N);
    const seenV = new Uint8Array(N * N);
    const edge = (c, r) => {
      if (walk[idx(N, c, r)]) {
        for (const [dc, dr] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
          const cc = c + dc, rr = r + dr;
          if (cc < 0 || rr < 0 || cc >= N || rr >= N || walk[idx(N, cc, rr)] === 0) return true;
        }
      }
      return false;
    };
    for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) {
      if (!edge(c, r) || seenH[idx(N, c, r)]) continue;
      let c2 = c;
      while (c2 + 1 < N && edge(c2 + 1, r) && !seenH[idx(N, c2 + 1, r)]) c2++;
      if (c2 > c) {
        for (let cc = c; cc <= c2; cc++) seenH[idx(N, cc, r)] = 1;
        const x0 = -Ht + c * cell, x1 = -Ht + (c2 + 1) * cell, z0 = -Ht + r * cell, z1 = -Ht + (r + 1) * cell;
        walls.push({ x: (x0 + x1) / 2, z: (z0 + z1) / 2, hx: (x1 - x0) / 2, hz: (z1 - z0) / 2 });
      }
    }
    for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) {
      if (!edge(c, r) || seenV[idx(N, c, r)] || seenH[idx(N, c, r)]) continue;
      let r2 = r;
      while (r2 + 1 < N && edge(c, r2 + 1) && !seenV[idx(N, c, r2 + 1)] && !seenH[idx(N, c, r2 + 1)]) r2++;
      if (r2 >= r) {
        for (let rr = r; rr <= r2; rr++) seenV[idx(N, c, rr)] = 1;
        const x0 = -Ht + c * cell, x1 = -Ht + (c + 1) * cell, z0 = -Ht + r * cell, z1 = -Ht + (r2 + 1) * cell;
        walls.push({ x: (x0 + x1) / 2, z: (z0 + z1) / 2, hx: (x1 - x0) / 2, hz: (z1 - z0) / 2 });
      }
    }
    return walls;
  }

  V.buildMaze = function (sim) {
    const Ht = 68;
    const mid = (sim.map && sim.map.id) || "scrapyard";
    const theme = THEMES[mid] || THEMES.scrapyard;
    const rng = seedRng(((sim.cfg && sim.cfg.seed) || 1) * 9 + hashStr(mid) + 17);
    const N = Math.round(2 * Ht / CELL);
    const cell = 2 * Ht / N;
    const walk = new Uint8Array(N * N);
    walk.fill(1);

    const rooms = [];
    function addRoom(cc, rr, w, h) {
      const c0 = Math.max(2, cc - (w >> 1)), r0 = Math.max(2, rr - (h >> 1));
      const c1 = Math.min(N - 3, c0 + w - 1), r1 = Math.min(N - 3, r0 + h - 1);
      if (c1 - c0 < 3 || r1 - r0 < 3) return null;
      carveRect(walk, N, c0, r0, c1, r1);
      const room = { c0, r0, c1, r1, cc: (c0 + c1) >> 1, rr: (r0 + r1) >> 1 };
      rooms.push(room);
      return room;
    }
    const midC = N >> 1;
    addRoom(midC, midC, 5, 5);
    const want = mid === "space" ? 10 : mid === "burned" ? 9 : mid === "ice" ? 8 : 8;
    let tries = 0;
    while (rooms.length < want && tries++ < 90) {
      const ang = rng.float(0, Math.PI * 2);
      const dist = rng.float(N * 0.18, N * 0.38);
      const cc = midC + Math.round(Math.cos(ang) * dist);
      const rr = midC + Math.round(Math.sin(ang) * dist);
      const w = rng.int(4, mid === "desert" || mid === "ice" ? 7 : 6);
      const h = rng.int(4, 6);
      const overlaps = rooms.some(R =>
        !(cc + w / 2 < R.c0 - 1 || cc - w / 2 > R.c1 + 1 || rr + h / 2 < R.r0 - 1 || rr - h / 2 > R.r1 + 1)
      );
      if (!overlaps) addRoom(cc, rr, w, h);
    }

    const parent = rooms.map((_, i) => i);
    const find = a => (parent[a] === a ? a : (parent[a] = find(parent[a])));
    const edges = [];
    for (let i = 0; i < rooms.length; i++) for (let j = i + 1; j < rooms.length; j++) {
      edges.push({ i, j, d: Math.abs(rooms[i].cc - rooms[j].cc) + Math.abs(rooms[i].rr - rooms[j].rr) });
    }
    edges.sort((a, b) => a.d - b.d);
    let used = 0;
    for (const e of edges) {
      const a = find(e.i), b = find(e.j);
      const extra = used >= rooms.length - 1 && rng.chance(0.28);
      if (a !== b || extra) {
        if (a !== b) { parent[a] = b; used++; }
        carveCorridor(walk, N, rooms[e.i].cc, rooms[e.i].rr, rooms[e.j].cc, rooms[e.j].rr, 1, rng); // half=1 => width 3 cells
        if (used >= rooms.length - 1 && !extra && used > rooms.length + 3) break;
      }
    }
    // a few extra loops + dead-end alleys
    for (let k = 0; k < 3; k++) {
      if (rooms.length < 2) break;
      const A = rng.pick(rooms), B = rng.pick(rooms);
      if (A !== B) carveCorridor(walk, N, A.cc, A.rr, B.cc, B.rr, 1, rng);
    }
    for (let k = 0; k < 6; k++) {
      const A = rng.pick(rooms);
      const len = rng.int(3, 6);
      const dir = rng.pick([[1, 0], [-1, 0], [0, 1], [0, -1]]);
      carveRect(walk, N, A.cc, A.rr, A.cc + dir[0] * len, A.rr + dir[1] * len);
      // keep alleys at least 2 cells wide
      carveRect(walk, N, A.cc - (dir[1] ? 1 : 0), A.rr - (dir[0] ? 1 : 0), A.cc + dir[0] * len + (dir[1] ? 1 : 0), A.rr + dir[1] * len + (dir[0] ? 1 : 0));
    }

    // Keep a clear spawn plaza
    carveRect(walk, N, midC - 2, midC - 2, midC + 2, midC + 2);

    // Visual obst: one instance per visible wall cell (adjacent to floor)
    const obst = [];
    for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) {
      if (!walk[idx(N, c, r)]) continue;
      let vis = false;
      for (const [dc, dr] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const cc = c + dc, rr = r + dr;
        if (cc < 0 || rr < 0 || cc >= N || rr >= N || walk[idx(N, cc, rr)] === 0) { vis = true; break; }
      }
      if (!vis) continue;
      const p = cellCenter({ N, CELL: cell, Ht }, c, r);
      if (p.x * p.x + p.z * p.z > (Ht - 1.2) * (Ht - 1.2)) continue;
      obst.push({ x: p.x, z: p.z, r: theme.wallR, type: theme.wall, rot: 0, s: 1, wall: 1 });
    }

    const walls = mergeRuns(walk, N, cell, Ht);

    // Decorative props in rooms (not the exact center)
    function roomPoint(R, inset) {
      const c = rng.float(R.c0 + inset, R.c1 - inset);
      const r = rng.float(R.r0 + inset, R.r1 - inset);
      return cellCenter({ N, CELL: cell, Ht }, c, r);
    }
    for (const R of rooms) {
      const nDecor = mid === "space" ? rng.int(1, 2) : rng.int(1, 3);
      for (let i = 0; i < nDecor; i++) {
        const [type, rad] = rng.pick(theme.decor);
        const p = roomPoint(R, 0.8);
        const cx = -Ht + midC * cell;
        if ((p.x - 0) * (p.x - 0) + (p.z - 0) * (p.z - 0) < 64) continue;
        if (obst.some(o => (o.x - p.x) ** 2 + (o.z - p.z) ** 2 < (o.r + rad + 1.2) ** 2)) continue;
        obst.push({ x: p.x, z: p.z, r: rad, type, rot: rng.float(0, Math.PI * 2), s: rng.float(0.9, 1.15) });
      }
    }

    sim.obst = obst;
    sim.walls = walls;
    sim.barrels = sim.barrels || [];
    sim.vents = [];
    if (sim.map.hazard === "blast") {
      for (const R of rooms.slice(1, 6)) {
        const p = roomPoint(R, 1);
        if (p.x * p.x + p.z * p.z < 64) continue;
        sim.barrels.push({ x: p.x, z: p.z, hp: 30, a: true, respawn: 0 });
      }
    }
    if (sim.map.hazard === "fire") {
      for (const R of rooms) {
        const p = roomPoint(R, 1);
        sim.vents.push({ x: p.x, z: p.z });
      }
    }

    sim.nav = {
      N, CELL: cell, Ht, walk,
      dirX: new Float32Array(N * N),
      dirZ: new Float32Array(N * N),
      dist: new Int16Array(N * N),
      t: -99, pc: -1, pr: -1
    };
    sim._rushT = 0;
    sim._v5theme = theme.accent;
  };

  function blockedAt(sim, x, z, r) {
    const walls = sim.walls;
    if (walls) {
      for (let i = 0; i < walls.length; i++) {
        const w = walls[i];
        const qx = Math.max(w.x - w.hx, Math.min(x, w.x + w.hx));
        const qz = Math.max(w.z - w.hz, Math.min(z, w.z + w.hz));
        const ex = x - qx, ez = z - qz;
        if (ex * ex + ez * ez < r * r) return true;
      }
    }
    return false;
  }

  V.isOpen = function (sim, x, z, r) {
    r = r || 1;
    if (x * x + z * z > ((sim.nav && sim.nav.Ht) || 68) - 1.6) return false;
    return !blockedAt(sim, x, z, r);
  };

  V.resolve = function (ent, rad, sim) {
    const walls = sim.walls;
    if (!walls) return;
    for (let i = 0; i < walls.length; i++) {
      const w = walls[i];
      const qx = Math.max(w.x - w.hx, Math.min(ent.x, w.x + w.hx));
      const qz = Math.max(w.z - w.hz, Math.min(ent.z, w.z + w.hz));
      let ex = ent.x - qx, ez = ent.z - qz;
      const d2 = ex * ex + ez * ez;
      if (d2 < rad * rad) {
        if (d2 > 1e-8) {
          const d = Math.sqrt(d2);
          ent.x = qx + ex / d * rad;
          ent.z = qz + ez / d * rad;
        } else {
          const dxL = ent.x - (w.x - w.hx), dxR = (w.x + w.hx) - ent.x;
          const dzB = ent.z - (w.z - w.hz), dzT = (w.z + w.hz) - ent.z;
          const m = Math.min(dxL, dxR, dzB, dzT);
          if (m === dxL) ent.x = w.x - w.hx - rad;
          else if (m === dxR) ent.x = w.x + w.hx + rad;
          else if (m === dzB) ent.z = w.z - w.hz - rad;
          else ent.z = w.z + w.hz + rad;
        }
      }
    }
  };

  V.hitWall = function (sim, x, z, r) {
    return blockedAt(sim, x, z, r || 0.25);
  };

  V.refreshNav = function (sim) {
    const nav = sim.nav, p = sim.p;
    if (!nav || !p) return;
    const cell = worldToCell(nav, p.x, p.z);
    if (sim.t - nav.t < 0.2 && cell.c === nav.pc && cell.r === nav.pr) return;
    nav.t = sim.t; nav.pc = cell.c; nav.pr = cell.r;
    const N = nav.N, walk = nav.walk, dist = nav.dist, dirX = nav.dirX, dirZ = nav.dirZ;
    dist.fill(32767);
    const q = new Int32Array(N * N);
    let qs = 0, qe = 0;
    let sc = cell.c, sr = cell.r;
    if (walk[idx(N, sc, sr)]) {
      let found = false;
      for (let rad = 1; rad <= 4 && !found; rad++) {
        for (let dc = -rad; dc <= rad && !found; dc++) for (let dr = -rad; dr <= rad; dr++) {
          const cc = sc + dc, rr = sr + dr;
          if (cc >= 0 && rr >= 0 && cc < N && rr < N && !walk[idx(N, cc, rr)]) { sc = cc; sr = rr; found = true; break; }
        }
      }
    }
    dist[idx(N, sc, sr)] = 0;
    q[qe++] = sc | (sr << 16);
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    while (qs < qe) {
      const v = q[qs++];
      const c = v & 65535, r = v >>> 16;
      const d0 = dist[idx(N, c, r)];
      for (let k = 0; k < 4; k++) {
        const cc = c + dirs[k][0], rr = r + dirs[k][1];
        if (cc < 0 || rr < 0 || cc >= N || rr >= N) continue;
        const i = idx(N, cc, rr);
        if (walk[i] || dist[i] <= d0 + 1) continue;
        dist[i] = d0 + 1;
        q[qe++] = cc | (rr << 16);
      }
    }
    for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) {
      const i = idx(N, c, r);
      if (walk[i]) { dirX[i] = 0; dirZ[i] = 0; continue; }
      let best = dist[i], bc = 0, br = 0;
      for (let k = 0; k < 4; k++) {
        const cc = c + dirs[k][0], rr = r + dirs[k][1];
        if (cc < 0 || rr < 0 || cc >= N || rr >= N) continue;
        const d = dist[idx(N, cc, rr)];
        if (d < best) { best = d; bc = dirs[k][0]; br = dirs[k][1]; }
      }
      // slight diagonal if both axes improve
      dirX[i] = bc; dirZ[i] = br;
    }
  };

  function los(sim, x0, z0, x1, z1) {
    const dx = x1 - x0, dz = z1 - z0, len = Math.hypot(dx, dz);
    if (len < 1) return true;
    const s = 1.6, n = Math.ceil(len / s);
    for (let i = 1; i <= n; i++) {
      const u = i / n;
      if (blockedAt(sim, x0 + dx * u, z0 + dz * u, 0.7)) return false;
    }
    return true;
  }

  V.steer = function (sim, t, seekAng) {
    if (!t) return seekAng;
    const flying = t.k === "drone" || t.k === "warden" || (t.k === "charger" && t.st === 2);
    if (flying) return seekAng;
    if (los(sim, t.x, t.z, sim.p.x, sim.p.z)) return seekAng;
    const nav = sim.nav;
    if (!nav) return seekAng;
    const cell = worldToCell(nav, t.x, t.z);
    const i = idx(nav.N, cell.c, cell.r);
    const fx = nav.dirX[i], fz = nav.dirZ[i];
    if (fx === 0 && fz === 0) return seekAng;
    return Math.atan2(fx, fz);
  };

  V.spawnDmin = function (sim) { return (sim.t < 12 ? 10 : sim.t < 40 ? 11 : 12); };
  V.spawnDmax = function (sim) { return (sim.t < 12 ? 15 : sim.t < 40 ? 17 : 20); };

  V.fitOpen = function (sim, x, z, r) {
    if (V.isOpen(sim, x, z, r)) return { x, z, ok: true };
    const nav = sim.nav;
    if (!nav) return { x, z, ok: false };
    const cell = worldToCell(nav, x, z);
    for (let rad = 1; rad <= 6; rad++) {
      for (let dc = -rad; dc <= rad; dc++) for (let dr = -rad; dr <= rad; dr++) {
        const cc = cell.c + dc, rr = cell.r + dr;
        if (cc < 1 || rr < 1 || cc >= nav.N - 1 || rr >= nav.N - 1) continue;
        if (nav.walk[idx(nav.N, cc, rr)]) continue;
        const p = cellCenter(nav, cc, rr);
        if (V.isOpen(sim, p.x, p.z, r)) return { x: p.x, z: p.z, ok: true };
      }
    }
    return { x, z, ok: false };
  };

  V.tickWaves = function (sim, dt) {
    if (!sim || sim.state !== "run") return;
    if (sim.t > 55 && !sim.boss && sim.t - (sim._rushT || 0) > (sim.t > 240 ? 32 : 42)) {
      sim._rushT = sim.t;
      const p = sim.p;
      const sides = [0, Math.PI * 0.66, Math.PI * 1.33];
      for (let s = 0; s < 3; s++) {
        const ang = sides[s] + (Math.random() - 0.5) * 0.4;
        const d = 13 + Math.random() * 4;
        let x = p.x + Math.cos(ang) * d, z = p.z + Math.sin(ang) * d;
        const fit = V.fitOpen(sim, x, z, 1.4);
        x = fit.x; z = fit.z;
        if (s === 0) sim.spawns.push({ kind: "elite", x, z, t: 0.7 });
        for (let k = 0; k < 3; k++) {
          sim.spawns.push({ kind: "drone", x: x + Math.cos(ang + 1.2) * (k - 1) * 1.4, z: z + Math.sin(ang + 1.2) * (k - 1) * 1.4, t: 0.55 + k * 0.1 });
        }
        sim.ev && sim.ev.push({ k: "warn", x, z, kind: s === 0 ? "elite" : "drone", t: 0.7 });
      }
      if (typeof w.Pi === "function") { /* Pi may be in bundle later */ }
      sim._rushToast = sim.t + 0.05;
    }
    if (sim._rushToast && sim.t >= sim._rushToast) {
      sim._rushToast = 0;
      const toast = document.getElementById("toast");
      if (toast) { toast.textContent = "ELITE RUSH"; toast.classList.remove("on"); void toast.offsetWidth; toast.classList.add("on"); }
    }
  };

  V.onOverlay = function () {
    const joy = document.getElementById("joy");
    if (joy) joy.style.display = "none";
    // cancel virtual stick if the game exposed it later; also via body class
    document.body.classList.add("overlay-open");
  };
  V.onRunStart = function () {
    document.body.classList.remove("overlay-open");
    const toast = document.getElementById("toast");
    if (toast) toast.classList.remove("on");
    const joy = document.getElementById("joy");
    if (joy) joy.style.display = "none";
  };
  V.onResume = function () { document.body.classList.remove("overlay-open"); };

  /* ----- minimap + edge arrows ----- */
  function ensureHud() {
    if (document.getElementById("minimap")) return;
    const hud = document.getElementById("hud");
    if (!hud) return;
    const wrap = document.createElement("div");
    wrap.id = "minimap";
    wrap.innerHTML = '<canvas id="mmapc" width="192" height="192"></canvas>';
    hud.appendChild(wrap);
    const arrows = document.createElement("div");
    arrows.id = "earrows";
    hud.appendChild(arrows);
    // scroll cues
    for (const id of ["garage", "maps", "daily"]) {
      const panel = document.querySelector("#" + id + " .panel");
      if (panel && !panel.querySelector(".scrollcue")) {
        const cue = document.createElement("div");
        cue.className = "scrollcue";
        cue.textContent = "SCROLL";
        panel.appendChild(cue);
        const sync = () => {
          const slop = 8;
          const more = panel.scrollHeight > panel.clientHeight + slop && panel.scrollTop + panel.clientHeight < panel.scrollHeight - slop;
          cue.classList.toggle("on", more);
        };
        panel.addEventListener("scroll", sync, { passive: true });
        new MutationObserver(sync).observe(panel, { childList: true, subtree: true });
        setTimeout(sync, 50);
      }
    }
  }

  function drawMinimap() {
    const sm = w.__sm;
    const cv = document.getElementById("mmapc");
    const arrows = document.getElementById("earrows");
    if (!cv) return;
    const playing = sm && sm.mode === "play" && sm.sim;
    const overlay = sm && (sm.mode === "cards" || sm.mode === "paused" || sm.mode === "result");
    cv.parentElement.style.display = (playing || (sm && sm.mode === "paused" && sm.sim)) ? "block" : "none";
    if (arrows) arrows.style.display = playing ? "block" : "none";
    if (!sm || !sm.sim || (sm.mode !== "play" && sm.mode !== "paused")) return;
    const sim = sm.sim, p = sim.p, nav = sim.nav;
    const Ht = (nav && nav.Ht) || 68;
    const ctx = cv.getContext("2d");
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "#0c0a08";
    ctx.fillRect(0, 0, W, H);
    if (nav && nav.walk) {
      const N = nav.N, cw = W / N, ch = H / N;
      const walk = nav.walk;
      ctx.fillStyle = "#2a241c";
      for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) {
        if (!walk[r * N + c]) ctx.fillRect(c * cw, r * ch, cw + 0.5, ch + 0.5);
      }
      ctx.fillStyle = sim._v5theme || "#d08a3a";
      for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) {
        if (!walk[r * N + c]) continue;
        let vis = false;
        if (c===0||r===0||c===N-1||r===N-1) vis = true;
        else if (!walk[r*N+c-1]||!walk[r*N+c+1]||!walk[(r-1)*N+c]||!walk[(r+1)*N+c]) vis = true;
        if (vis) ctx.fillRect(c * cw, r * ch, cw + 0.5, ch + 0.5);
      }
    } else if (sim.walls) {
      const sx = W / (Ht * 2), sz = H / (Ht * 2);
      ctx.fillStyle = sim._v5theme || "#d08a3a";
      for (const wall of sim.walls) {
        ctx.fillRect((wall.x - wall.hx + Ht) * sx, (wall.z - wall.hz + Ht) * sz, wall.hx * 2 * sx, wall.hz * 2 * sz);
      }
    }
    const sx = W / (Ht * 2), sz = H / (Ht * 2);
    const tx = x => (x + Ht) * sx, tz = z => (z + Ht) * sz;
    if (sim.E) {
      for (const e of sim.E) if (e.a) {
        ctx.fillStyle = e.boss ? "#ffd24a" : "#ff5a4a";
        const s = e.boss ? 5 : 2.4;
        ctx.fillRect(tx(e.x) - s, tz(e.z) - s, s * 2, s * 2);
      }
    }
    if (p) {
      ctx.fillStyle = "#7aeeff";
      ctx.beginPath();
      ctx.arc(tx(p.x), tz(p.z), 4, 0, 6.28);
      ctx.fill();
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
    ctx.strokeStyle = "rgba(255,184,74,0.7)";
    ctx.lineWidth = 4;
    ctx.strokeRect(2, 2, W - 4, H - 4);

    if (!playing || !arrows) { if (arrows && overlay) arrows.innerHTML = ""; return; }
    const vw = innerWidth, vh = innerHeight;
    const viewR = 16;
    let html = "", n = 0;
    if (sim.E) for (const e of sim.E) {
      if (!e.a || n >= 4) continue;
      const dx = e.x - p.x, dz = e.z - p.z;
      const d = Math.hypot(dx, dz);
      if (d < viewR) continue;
      const ang = Math.atan2(dx, -dz);
      const pad = 28, ax = vw / 2, ay = vh / 2 * 0.92;
      const rx = ax - pad, ry = ay - pad - 10, ca = Math.cos(ang), sa = Math.sin(ang);
      let tt = 1e9;
      if (ca > 0.05) tt = Math.min(tt, rx / ca);
      if (ca < -0.05) tt = Math.min(tt, -rx / ca);
      if (sa > 0.05) tt = Math.min(tt, ry / sa);
      if (sa < -0.05) tt = Math.min(tt, -ry / sa);
      if (!isFinite(tt)) continue;
      const col = e.boss ? "#ffd24a" : "#ff6a5a";
      html += `<i style="left:${ax+ca*tt}px;top:${ay+sa*tt}px;color:${col};transform:translate(-50%,-50%) rotate(${ang}rad)"></i>`;
      n++;
    }
    arrows.innerHTML = html;
  }

function tickHud() {
    ensureHud();
    try { drawMinimap(); } catch (e) {}
    requestAnimationFrame(tickHud);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => requestAnimationFrame(tickHud));
  else requestAnimationFrame(tickHud);

  document.addEventListener("click", ev => {
    if (ev.target && ev.target.closest && ev.target.closest("#presume")) V.onResume();
  }, true);
  w.__v5 = V;
})(window);
