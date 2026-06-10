function toggleMobileNav() {
  const nav = document.getElementById('mainNav');
  const btn = document.getElementById('navHamburger');
  const isOpen = nav.classList.toggle('mobile-open');
  btn.setAttribute('aria-expanded', isOpen);
}

// Close mobile menu when a nav link is clicked
document.addEventListener('click', e => {
  const link = e.target.closest('#navLinks .nav-link, #navLinks .btn');
  if (link) {
    document.getElementById('mainNav').classList.remove('mobile-open');
    document.getElementById('navHamburger').setAttribute('aria-expanded', 'false');
  }
});

const scrollBar = document.getElementById('scrollBar');

window.addEventListener('scroll', () => {
  const progress = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  scrollBar.style.transform = `scaleX(${progress})`;
  document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });


const orb = document.getElementById('cursorOrb');
let mx = window.innerWidth / 2;
let my = window.innerHeight / 2;

window.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
}, { passive: true });

(function tickOrb() {
  orb.style.left = mx + 'px';
  orb.style.top  = my + 'px';
  requestAnimationFrame(tickOrb);
})();


function switchTab(mode, btn) {
  document.querySelectorAll('.hiw-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const customerSteps = document.getElementById('steps-cliente');
  const merchantSteps = document.getElementById('steps-negocio');

  customerSteps.style.display = mode === 'cliente' ? 'grid' : 'none';
  merchantSteps.style.display = mode === 'negocio' ? 'grid' : 'none';

  const target = mode === 'cliente' ? customerSteps : merchantSteps;
  target.classList.remove('visible');
  setTimeout(() => target.classList.add('visible'), 10);
}


function toggleFaq(btn) {
  const item   = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}


const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.07 });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));


document.querySelectorAll('.hiw-steps, .team-grid, .pricing-grid, .testimonials-grid').forEach(grid => {
  Array.from(grid.children).forEach((child, i) => {
    child.style.transitionDelay = `${i * 90}ms`;
  });
});


document.querySelectorAll('[data-count]').forEach(el => {
  new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    const target = +el.dataset.count;
    const suffix = el.dataset.suffix || '';
    const t0     = performance.now();

    (function tick(now) {
      const prog = Math.min((now - t0) / 1400, 1);
      el.textContent = Math.round((1 - Math.pow(1 - prog, 3)) * target) + suffix;
      if (prog < 1) requestAnimationFrame(tick);
    })(t0);
  }, { threshold: 0.5 }).observe(el);
});


document.querySelectorAll('.team-card, .feat-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const rx = -((e.clientY - r.top)  / r.height - 0.5) * 5;
    const ry =  ((e.clientX - r.left) / r.width  - 0.5) * 5;
    card.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-3px)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});


window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero-right');
  if (hero) hero.style.transform = `translateY(${window.scrollY * 0.07}px)`;
}, { passive: true });


(function initWebGL() {
  const canvas = document.getElementById('ctaCanvas');
  if (!canvas) return;

  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  if (!gl) return;

  const resize = () => {
    const r = canvas.parentElement.getBoundingClientRect();
    canvas.width  = r.width;
    canvas.height = r.height;
    gl.viewport(0, 0, canvas.width, canvas.height);
  };

  const vs = `attribute vec2 a;varying vec2 v;void main(){v=a*.5+.5;gl_Position=vec4(a,0.,1.);}`;
  const fs = `precision mediump float;uniform float t;uniform float ar;varying vec2 v;
    float b(vec2 p,vec2 c,float s){vec2 d=p-c;return exp(-(d.x*d.x+d.y*d.y)*s);}
    void main(){vec2 p=v;p.x*=ar;float k=t*.32;
      vec3 bg=vec3(.05,.05,.08),g=vec3(.38,.78,.14),vi=vec3(.40,.24,.70);
      vec3 col=bg;
      col+=g*b(p,vec2((.16+sin(k*1.1)*.13)*ar,.55+cos(k*.8)*.2),.3.2)*36.;
      col+=g*b(p,vec2((.40+cos(k*.72)*.11)*ar,.38+sin(k*1.3)*.16),5.5)*.22;
      col+=vi*b(p,vec2((.80+cos(k*.88)*.12)*ar,.44+sin(k*1.12)*.22),3.8)*.3;
      col+=vi*b(p,vec2((.60+sin(k*1.2)*.09)*ar,.62+cos(k*.64)*.14),6.2)*.2;
      float n=fract(sin(dot(v*800.+t,vec2(12.9898,78.233)))*43758.5);
      col+=(n-.5)*.018;col=clamp(col,0.,.68);
      float vg=1.-length(v-.5)*.9;col*=max(vg,.25);gl_FragColor=vec4(col,1.);}`;

  function compileShader(type, src) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, src);
    gl.compileShader(shader);
    return shader;
  }

  const prog = gl.createProgram();
  gl.attachShader(prog, compileShader(gl.VERTEX_SHADER, vs));
  gl.attachShader(prog, compileShader(gl.FRAGMENT_SHADER, fs));
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
  gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

  const aLoc = gl.getAttribLocation(prog, 'a');
  gl.enableVertexAttribArray(aLoc);
  gl.vertexAttribPointer(aLoc, 2, gl.FLOAT, false, 0, 0);

  const uTime   = gl.getUniformLocation(prog, 't');
  const uAspect = gl.getUniformLocation(prog, 'ar');

  resize();
  window.addEventListener('resize', resize);

  const t0 = performance.now();
  let active = true;
  new IntersectionObserver(([e]) => { active = e.isIntersecting; }).observe(canvas);

  (function render() {
    if (active) {
      const t = (performance.now() - t0) / 1000;
      gl.uniform1f(uTime, t);
      gl.uniform1f(uAspect, canvas.width / Math.max(canvas.height, 1));
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
    requestAnimationFrame(render);
  })();
})();

function addCursorGlow(selector, size = 480, color = 'oklch(0.78 0.18 130 / 0.30)') {
  document.querySelectorAll(selector).forEach(el => {
    if (el._glowDone) return;
    el._glowDone = true;
    el.style.position = 'relative';

    const clip = document.createElement('div');
    clip.style.cssText = 'position:absolute;inset:0;overflow:hidden;pointer-events:none;border-radius:inherit;z-index:0;';

    const glow = document.createElement('div');
    glow.style.cssText = `position:absolute;width:${size}px;height:${size}px;border-radius:50%;opacity:0;background:radial-gradient(circle,${color} 0%,transparent 65%);transform:translate(-50%,-50%);transition:opacity 420ms ease;will-change:left,top;`;

    clip.appendChild(glow);
    el.insertBefore(clip, el.firstChild);

    el.addEventListener('mouseenter', () => { glow.style.opacity = '1'; });
    el.addEventListener('mouseleave', () => { glow.style.opacity = '0'; });
    el.addEventListener('mousemove', ev => {
      const r = el.getBoundingClientRect();
      glow.style.left = (ev.clientX - r.left) + 'px';
      glow.style.top  = (ev.clientY - r.top)  + 'px';
    });
  });
}

addCursorGlow('.hero-right',        640, 'oklch(0.78 0.18 130 / 0.22)');
addCursorGlow('.feat-main',         520, 'oklch(0.78 0.18 130 / 0.32)');
addCursorGlow('.stat-card.dark',    380, 'oklch(0.78 0.18 130 / 0.36)');
addCursorGlow('.diff-card.dark',    380, 'oklch(0.78 0.18 130 / 0.34)');
addCursorGlow('.price-card.featured', 460, 'oklch(0.78 0.18 130 / 0.30)');

(function glowTestimonials() {
  document.querySelectorAll('.testimonial-card.dark').forEach(el => {
    el.style.position = 'relative';
    el.style.overflow = 'hidden';

    const glow = document.createElement('div');
    glow.style.cssText = 'position:absolute;width:360px;height:360px;border-radius:50%;pointer-events:none;z-index:0;opacity:0;background:radial-gradient(circle,oklch(0.78 0.18 130/0.26) 0%,transparent 65%);transform:translate(-50%,-50%);transition:opacity 400ms ease;';
    el.insertBefore(glow, el.firstChild);

    el.addEventListener('mouseenter', () => { glow.style.opacity = '1'; });
    el.addEventListener('mouseleave', () => { glow.style.opacity = '0'; });
    el.addEventListener('mousemove', ev => {
      const r = el.getBoundingClientRect();
      glow.style.left = (ev.clientX - r.left) + 'px';
      glow.style.top  = (ev.clientY - r.top)  + 'px';
    });
  });
})();

(function glowCta() {
  const cta = document.querySelector('.cta-section');
  if (!cta || cta._glowDone) return;
  cta._glowDone = true;

  const glow = document.createElement('div');
  glow.style.cssText = 'position:absolute;width:800px;height:800px;border-radius:50%;pointer-events:none;z-index:1;opacity:0;background:radial-gradient(circle,oklch(0.78 0.18 130/0.40) 0%,transparent 55%);transform:translate(-50%,-50%);transition:opacity 600ms ease;will-change:left,top;';
  cta.insertBefore(glow, cta.querySelector('.cta-inner'));

  cta.addEventListener('mouseenter', () => { glow.style.opacity = '1'; });
  cta.addEventListener('mouseleave', () => { glow.style.opacity = '0'; });
  cta.addEventListener('mousemove', ev => {
    const r = cta.getBoundingClientRect();
    glow.style.left = (ev.clientX - r.left) + 'px';
    glow.style.top  = (ev.clientY - r.top)  + 'px';
  });
})();

function openMerchantModal() {
  document.getElementById('merchantModal').style.display = 'grid';
  document.body.style.overflow = 'hidden';
  mmSetTab('sign');
}

function closeMerchantModal() {
  document.getElementById('merchantModal').style.display = 'none';
  document.body.style.overflow = '';
}

let _mmTab = 'sign';

function mmSetTab(tab) {
  _mmTab = tab;
  const isReg = tab === 'reg';

  document.getElementById('mmTitle').textContent     = isReg ? 'Create your account' : 'Welcome back';
  document.getElementById('mmSubmitBtn').textContent = isReg ? 'Create account' : 'Access dashboard';
  document.getElementById('mmNameWrap').style.display = isReg ? 'flex' : 'none';

  const signBtn = document.getElementById('mmTabSign');
  const regBtn  = document.getElementById('mmTabReg');

  signBtn.style.borderBottomColor = isReg ? 'transparent' : 'var(--brand)';
  signBtn.style.color             = isReg ? 'var(--ink-3)' : 'var(--ink)';
  regBtn.style.borderBottomColor  = isReg ? 'var(--brand)' : 'transparent';
  regBtn.style.color              = isReg ? 'var(--ink)' : 'var(--ink-3)';
}

function mmSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('mmSubmitBtn');
  btn.textContent = 'Connecting...';
  btn.disabled    = true;

  setTimeout(() => {
    closeMerchantModal();
    sessionStorage.setItem('geops_start_role', 'merchant');
    sessionStorage.setItem('merchant_authed', '1');
    window.location.href = 'GeoPS.html';
  }, 900);
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMerchantModal(); });

(function initDiffBars() {
  function activate() {
    const el = document.querySelector('.diff-bars');
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect(); }
    }, { threshold: 0.2 });

    obs.observe(el);
    if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('visible');
  }

  if (document.readyState === 'complete') activate();
  else window.addEventListener('load', activate);
})();