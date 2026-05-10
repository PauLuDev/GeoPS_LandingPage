(function () {
  'use strict';

  const nav = document.querySelector('.nav');
  const onScroll = () => {
    if (window.scrollY > 8) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const navToggle = document.querySelector('.nav__toggle');
  if (navToggle) {
    navToggle.addEventListener('click', () => nav.classList.toggle('open'));
    document.querySelectorAll('.nav__links a').forEach(a =>
      a.addEventListener('click', () => nav.classList.remove('open'))
    );
  }

  const hero = document.querySelector('.hero');
  if (hero) requestAnimationFrame(() => hero.classList.add('loaded'));

  // Cards: shown as 2x2 grid, collapse into stack as you scroll past
  const heroCards = document.getElementById('hero-cards');
  if (heroCards) {
    const hcards    = Array.from(heroCards.querySelectorAll('.hcard'));
    const stackRots = [-8, -4, 2, 6];
    const GAP       = 12;

    function easeInOut(t) {
      return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    }

    function updateCards() {
      const W     = heroCards.offsetWidth;
      const H     = heroCards.offsetHeight;
      const cardW = (W - GAP) / 2;
      const cardH = (H - GAP) / 2;

      const gridLeft = [0, cardW + GAP, 0,          cardW + GAP];
      const gridTop  = [0, 0,           cardH + GAP, cardH + GAP];

      // All cards collapse toward the center of the container
      const stackX = (W - cardW) / 2;
      const stackY = (H - cardH) / 2;

      const rect = heroCards.getBoundingClientRect();
      // t=0: element visible in viewport (grid shown)
      // t=1: element scrolled past top of viewport (collapsed)
      const raw = rect.top <= 0
        ? Math.min(1, Math.abs(rect.top) / (H * 0.55))
        : 0;
      const t = easeInOut(raw);

      hcards.forEach((card, i) => {
        const tx  = (stackX - gridLeft[i]) * t;
        const ty  = (stackY - gridTop[i])  * t;
        const rot = stackRots[i] * t;
        card.style.transform = `translate(${tx}px, ${ty}px) rotate(${rot}deg)`;
      });
    }

    window.addEventListener('scroll', updateCards, { passive: true });
    window.addEventListener('resize', updateCards);
    updateCards();
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => io.observe(el));

  const catsToggle = document.getElementById('cats-toggle');
  const catsExtra  = document.getElementById('cats-extra');
  if (catsToggle && catsExtra) {
    catsToggle.addEventListener('click', () => {
      const isOpen = catsExtra.classList.toggle('open');
      const lang = document.documentElement.lang || 'es';
      const key = isOpen ? 'cats.less' : 'cats.more';
      catsToggle.setAttribute('data-i18n', key);
      catsToggle.textContent = I18N[lang]?.[key] ?? catsToggle.textContent;
    });
  }

  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-item__btn');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Optional: close siblings for cleaner accordion behavior
      document.querySelectorAll('.faq-item.open').forEach(o => {
        if (o !== item) o.classList.remove('open');
      });
      item.classList.toggle('open', !isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
    });
  });

  const cycleWords = {
    es: ['conectamos', 'crecemos', 'impactamos'],
    en: ['connect',   'grow',     'impact']
  };
  const cycleEl = document.querySelector('.cycle__word');
  let cycleIdx = 0;
  if (cycleEl) {
    setInterval(() => {
      const lang = document.documentElement.lang || 'es';
      const words = cycleWords[lang] || cycleWords.es;
      cycleEl.classList.add('out');
      setTimeout(() => {
        cycleIdx = (cycleIdx + 1) % words.length;
        cycleEl.textContent = words[cycleIdx];
        cycleEl.classList.remove('out');
      }, 320);
    }, 2000);
  }

  const I18N = {
    es: {
      'nav.how': 'Cómo funciona',
      'nav.biz': 'Para negocios',
      'nav.pricing': 'Precios',
      'nav.team': 'Equipo',
      'nav.faq': 'FAQ',
      'nav.contact': 'Contáctanos',

      'hero.badge': 'Ya disponible en tu ciudad',
      'hero.h1.a': 'Ofertas locales,',
      'hero.h1.b': 'al alcance de tu mano.',
      'hero.sub': 'Descubre cupones y promociones de negocios cerca de ti en tiempo real. Para clientes que quieren ahorrar y PyMEs que quieren crecer.',
      'hero.cta1': 'Explorar el mapa',
      'hero.cta2': 'Ver demo',

      'logobar.count': '50+ negocios · ★★★★★',
      'logobar.label': 'Confiado por negocios locales',

      'cats.title': 'Categorías destacadas',
      'cats.more': 'Ver todas las categorías →',
      'cats.less': 'Ver menos ↑',
      'cat.1.n': 'Restaurantes', 'cat.1.s': 'Descuentos en comida cerca de ti',
      'cat.2.n': 'Farmacias y Salud', 'cat.2.s': 'Medicamentos y bienestar con descuento',
      'cat.3.n': 'Cafés y Bebidas', 'cat.3.s': 'Tu café favorito más barato',
      'cat.4.n': 'Tiendas y Moda', 'cat.4.s': 'Ropa, accesorios y más',
      'cat.5.n': 'Supermercados', 'cat.5.s': 'Ahorra en tu compra diaria',
      'cat.6.n': 'Entretenimiento', 'cat.6.s': 'Cines, juegos y diversión',
      'cat.7.n': 'Belleza y Cuidado', 'cat.7.s': 'Salones, spas y más',
      'cat.8.n': 'Tecnología', 'cat.8.s': 'Gadgets y accesorios tech',

      'svc.title.a': 'Todo lo que',
      'svc.title.b': 'GeoPS hace por ti.',
      'svc.1': 'Mapa interactivo en tiempo real',
      'svc.2': 'Cupones geolocalizados',
      'svc.3': 'Filtros por categoría',
      'svc.4': 'Dashboard para negocios',
      'svc.5': 'Métricas en tiempo real',
      'svc.6': 'Campañas estacionales',
      'svc.7': 'Reserva y canje de cupones',
      'svc.tech': 'Tech stack',

      'demo.eye': 'Demo interactiva',
      'demo.title': 'Así funciona GeoPS',
      'demo.sub': 'Activa tu ubicación y descubre ofertas a metros de ti.',
      'demo.warn': 'Entorno de prueba — no crea registros reales',
      'demo.cta': 'Probar demo',

      'team.title': 'Conectamos tu negocio, con clientes cercanos.',
      'team.p1': 'GeoPS nació de una observación simple: miles de pequeños negocios en Lima ofrecen descuentos increíbles, pero sus clientes potenciales nunca se enteran.',
      'team.p2': 'Al mismo tiempo, millones de personas pasan frente a esos negocios cada día sin saber lo que se pierden.',
      'team.p3': 'Somos PauLuDev, un equipo de estudiantes de Ingeniería de Software de la UPC, y creamos GeoPS para cerrar esa brecha.',
      'team.p4': 'Creemos que la tecnología debe democratizar el acceso al comercio local, no concentrarlo en las grandes cadenas.',

      'testi.title': 'Lo que dicen los negocios que ya usan GeoPS.',
      'testi.badge': '50+ negocios afiliados',
      'testi.1.t': 'Publicamos nuestro primer cupón un lunes y el miércoles ya teníamos 40 clientes nuevos.',
      'testi.1.a': 'Dueña de Sabor Criollo, La Victoria',
      'testi.2.t': 'Con GeoPS mis campañas llegan exactamente a la gente que pasa por mi tienda.',
      'testi.2.a': 'Propietario de La Italiana, Miraflores',
      'testi.3.t': 'El dashboard es increíblemente fácil de usar. En menos de 10 minutos creé mi primera campaña.',
      'testi.3.a': 'Administradora de FarmaVida, San Isidro',
      'testi.4.t': 'Las ventas del fin de semana subieron un 30%.',
      'testi.4.a': 'Dueño de CaféRun, Barranco',
      'testi.5.t': 'Por fin tengo métricas reales de mi publicidad.',
      'testi.5.a': 'Gerente de TechStore, Surco',
      'testi.6.t': 'Ahora competimos con las grandes cadenas en nuestro barrio.',
      'testi.6.a': 'Propietario de MiniMarket Huanca, Cercado',

      'price.title': 'Planes simples. Resultados reales.',
      'price.sub': 'Sin costos ocultos. Empieza gratis y escala cuando lo necesites.',
      'step.1': 'Regístrate', 'step.2': 'Publica', 'step.3': 'Atrae clientes',
      'plan.free.tag': 'Freemium',
      'plan.free.price': 'Gratis',
      'plan.free.lead': 'Hasta 2 campañas activas sin costo.',
      'plan.free.b1': '2 campañas activas',
      'plan.free.b2': 'Aparece en el mapa',
      'plan.free.b3': 'Métricas básicas',
      'plan.free.b4': 'Sin tarjeta de crédito',
      'plan.free.cta': 'Registrarme gratis',
      'plan.pro.tag': 'Premium',
      'plan.pro.price': 'S/ 79',
      'plan.pro.unit': '/mes',
      'plan.pro.lead': 'Campañas ilimitadas, métricas avanzadas y cupones destacados.',
      'plan.pro.b1': 'Campañas ilimitadas',
      'plan.pro.b2': 'Cancela cuando quieras',
      'plan.pro.b3': 'Cupones destacados',
      'plan.pro.b4': 'Dashboard con métricas reales',
      'plan.pro.b5': 'Upgrade o downgrade al instante',
      'plan.pro.b6': 'Soporte prioritario',
      'plan.pro.cta': 'Empezar ahora',

      'faq.title': 'Tus preguntas respondidas.',
      'faq.1.q': '¿GeoPS es gratis para los clientes?',
      'faq.1.a': 'Sí, GeoPS es completamente gratis para los clientes finales. Solo necesitan registrarse para reservar y canjear cupones.',
      'faq.2.q': '¿Cómo publico mis cupones?',
      'faq.2.a': 'En menos de 10 minutos desde el dashboard de negocios. Diseña tu cupón, define el área de cobertura y publícalo en el mapa.',
      'faq.3.q': '¿Cuál es la diferencia entre Freemium y Premium?',
      'faq.3.a': 'Freemium: hasta 2 campañas activas y métricas básicas, gratis. Premium S/79/mes: campañas ilimitadas, cupones destacados y métricas avanzadas en tiempo real.',
      'faq.4.q': '¿Puedo cancelar cuando quiera?',
      'faq.4.a': 'Sí, puedes cancelar tu plan Premium en cualquier momento desde el dashboard. No hay cobros adicionales ni penalizaciones.',
      'faq.5.q': '¿Los clientes necesitan descargar una app?',
      'faq.5.a': 'No. GeoPS funciona 100% desde el navegador, en móvil o desktop. Sin instalaciones ni descargas.',
      'faq.aside.title': '¿Tienes dudas? Agenda una llamada.',
      'faq.aside.sub': 'Te explicamos cómo GeoPS puede ayudar a tu negocio.',
      'faq.aside.cta': 'Agendar ahora',

      'footer.title.a': 'Juntos',
      'footer.title.b': 'el comercio local.',
      'footer.contact': 'Contáctanos',
      'footer.col.product': 'Producto',
      'footer.col.company': 'Compañía',
      'footer.col.legal': 'Legal',
      'footer.l.cats': 'Categorías',
      'footer.l.how': 'Cómo funciona',
      'footer.l.pricing': 'Precios',
      'footer.l.blog': 'Blog',
      'footer.l.team': 'Equipo',
      'footer.l.contact': 'Contacto',
      'footer.l.terms': 'Términos de servicio',
      'footer.l.privacy': 'Política de privacidad',
      'footer.l.geo': 'Política de geolocalización',
      'footer.copy': '© 2026 PauLuDev. Todos los derechos reservados.',

      'member.role.se': 'Ingeniería de Software'
    },
    en: {
      'nav.how': 'How it works',
      'nav.biz': 'For business',
      'nav.pricing': 'Pricing',
      'nav.team': 'Team',
      'nav.faq': 'FAQ',
      'nav.contact': 'Contact us',

      'hero.badge': 'Now available in your city',
      'hero.h1.a': 'Local deals,',
      'hero.h1.b': 'right at your fingertips.',
      'hero.sub': 'Discover coupons and promotions from businesses near you in real time. For customers who want to save and SMBs that want to grow.',
      'hero.cta1': 'Explore the map',
      'hero.cta2': 'Watch demo',

      'logobar.count': '50+ businesses · ★★★★★',
      'logobar.label': 'Trusted by local businesses',

      'cats.title': 'Featured categories',
      'cats.more': 'See all categories →',
      'cats.less': 'Show less ↑',
      'cat.1.n': 'Restaurants', 'cat.1.s': 'Food deals near you',
      'cat.2.n': 'Pharmacy & Health', 'cat.2.s': 'Medicine and wellness on sale',
      'cat.3.n': 'Cafés & Drinks', 'cat.3.s': 'Your favorite coffee, cheaper',
      'cat.4.n': 'Shops & Fashion', 'cat.4.s': 'Clothing, accessories and more',
      'cat.5.n': 'Supermarkets', 'cat.5.s': 'Save on your weekly shop',
      'cat.6.n': 'Entertainment', 'cat.6.s': 'Cinemas, games and fun',
      'cat.7.n': 'Beauty & Care', 'cat.7.s': 'Salons, spas and more',
      'cat.8.n': 'Technology', 'cat.8.s': 'Gadgets and tech accessories',

      'svc.title.a': 'Everything',
      'svc.title.b': 'GeoPS does for you.',
      'svc.1': 'Real-time interactive map',
      'svc.2': 'Geolocated coupons',
      'svc.3': 'Filter by category',
      'svc.4': 'Business dashboard',
      'svc.5': 'Live metrics',
      'svc.6': 'Seasonal campaigns',
      'svc.7': 'Coupon booking & redemption',
      'svc.tech': 'Tech stack',

      'demo.eye': 'Interactive demo',
      'demo.title': 'How GeoPS works',
      'demo.sub': 'Turn on your location and discover offers a few meters away.',
      'demo.warn': 'Sandbox environment — no real records are created',
      'demo.cta': 'Try demo',

      'team.title': 'We connect your business with nearby customers.',
      'team.p1': 'GeoPS was born from a simple observation: thousands of small businesses in Lima offer amazing discounts, but their potential customers never hear about them.',
      'team.p2': 'At the same time, millions of people walk past those businesses every day without knowing what they’re missing.',
      'team.p3': 'We are PauLuDev, a team of Software Engineering students at UPC, and we built GeoPS to close that gap.',
      'team.p4': 'We believe technology should democratize access to local commerce, not concentrate it in big chains.',

      'testi.title': 'What businesses already using GeoPS say.',
      'testi.badge': '50+ partner businesses',
      'testi.1.t': 'We published our first coupon on a Monday and by Wednesday we already had 40 new customers.',
      'testi.1.a': 'Owner of Sabor Criollo, La Victoria',
      'testi.2.t': 'With GeoPS my campaigns reach exactly the people walking past my store.',
      'testi.2.a': 'Owner of La Italiana, Miraflores',
      'testi.3.t': 'The dashboard is incredibly easy to use. In under 10 minutes I built my first campaign.',
      'testi.3.a': 'Manager of FarmaVida, San Isidro',
      'testi.4.t': 'Weekend sales went up 30%.',
      'testi.4.a': 'Owner of CaféRun, Barranco',
      'testi.5.t': 'I finally have real metrics on my advertising.',
      'testi.5.a': 'Manager of TechStore, Surco',
      'testi.6.t': 'We now compete with the big chains in our neighborhood.',
      'testi.6.a': 'Owner of MiniMarket Huanca, Cercado',

      'price.title': 'Simple plans. Real results.',
      'price.sub': 'No hidden fees. Start free and scale when you need to.',
      'step.1': 'Sign up', 'step.2': 'Publish', 'step.3': 'Attract customers',
      'plan.free.tag': 'Freemium',
      'plan.free.price': 'Free',
      'plan.free.lead': 'Up to 2 active campaigns at no cost.',
      'plan.free.b1': '2 active campaigns',
      'plan.free.b2': 'Appears on the map',
      'plan.free.b3': 'Basic metrics',
      'plan.free.b4': 'No credit card required',
      'plan.free.cta': 'Sign up free',
      'plan.pro.tag': 'Premium',
      'plan.pro.price': 'S/ 79',
      'plan.pro.unit': '/month',
      'plan.pro.lead': 'Unlimited campaigns, advanced metrics and featured coupons.',
      'plan.pro.b1': 'Unlimited campaigns',
      'plan.pro.b2': 'Cancel anytime',
      'plan.pro.b3': 'Featured coupons',
      'plan.pro.b4': 'Dashboard with real metrics',
      'plan.pro.b5': 'Instant upgrade or downgrade',
      'plan.pro.b6': 'Priority support',
      'plan.pro.cta': 'Get started',

      'faq.title': 'Your questions, answered.',
      'faq.1.q': 'Is GeoPS free for customers?',
      'faq.1.a': 'Yes, GeoPS is completely free for end customers. They just need to register to book and redeem coupons.',
      'faq.2.q': 'How do I publish my coupons?',
      'faq.2.a': 'In under 10 minutes from the business dashboard. Design your coupon, set the coverage area and publish it on the map.',
      'faq.3.q': 'What is the difference between Freemium and Premium?',
      'faq.3.a': 'Freemium: up to 2 active campaigns and basic metrics, free. Premium S/79/month: unlimited campaigns, featured coupons and advanced live metrics.',
      'faq.4.q': 'Can I cancel anytime?',
      'faq.4.a': 'Yes, you can cancel your Premium plan at any time from the dashboard. No extra charges or penalties.',
      'faq.5.q': 'Do customers need to download an app?',
      'faq.5.a': 'No. GeoPS works 100% from the browser, on mobile or desktop. No installations, no downloads.',
      'faq.aside.title': 'Have questions? Book a call.',
      'faq.aside.sub': 'We’ll show you how GeoPS can help your business.',
      'faq.aside.cta': 'Book now',

      'footer.title.a': 'Together we',
      'footer.title.b': 'local commerce.',
      'footer.contact': 'Contact us',
      'footer.col.product': 'Product',
      'footer.col.company': 'Company',
      'footer.col.legal': 'Legal',
      'footer.l.cats': 'Categories',
      'footer.l.how': 'How it works',
      'footer.l.pricing': 'Pricing',
      'footer.l.blog': 'Blog',
      'footer.l.team': 'Team',
      'footer.l.contact': 'Contact',
      'footer.l.terms': 'Terms of service',
      'footer.l.privacy': 'Privacy policy',
      'footer.l.geo': 'Geolocation policy',
      'footer.copy': '© 2026 PauLuDev. All rights reserved.',

      'member.role.se': 'Software Engineer'
    }
  };

  const setLang = (lang) => {
    if (!I18N[lang]) lang = 'es';
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (I18N[lang][key] !== undefined) el.textContent = I18N[lang][key];
    });
    document.querySelectorAll('.lang button').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
    const words = cycleWords[lang] || cycleWords.es;
    cycleIdx = 0;
    if (cycleEl) cycleEl.textContent = words[0];
    try { localStorage.setItem('geops-lang', lang); } catch (e) {}
  };

  document.querySelectorAll('.lang button').forEach(b =>
    b.addEventListener('click', () => setLang(b.dataset.lang))
  );

  let initialLang = 'en';
  try { initialLang = localStorage.getItem('geops-lang') || 'en'; } catch (e) {}
  setLang(initialLang);

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 60, behavior: 'smooth' });
      }
    });
  });

})();