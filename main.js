'use strict';

const T = {
  en: {
    // Nav
    'nav.how': 'How it works',
    'nav.biz': 'For businesses',
    'nav.pricing': 'Pricing',
    'nav.team': 'Team',
    'nav.login': 'Log in',
    'nav.signup': 'Sign up',
    'nav.merchant': "I'm a business",

    // Hero
    'hero.location': 'Peru · launching soon nationwide',
    'hero.w1': 'The best',
    'hero.w2': 'coupons,',
    'hero.w3': '<em>meters</em>',
    'hero.w4': 'away.',
    'hero.sub': 'GeoPS shows real-time active deals from the businesses closest to your position, on a real map. No download, no irrelevant ads — just what\'s available <em style="font-style:normal;font-weight:600;color:var(--ink);">now and nearby</em>.',
    'hero.cta1': 'Find deals near me',
    'hero.cta2': 'For businesses',
    'hero.trust1': 'Free for customers',
    'hero.trust2': 'No background tracking',

    // How it works
    'hiw.title': 'As simple as walking',
    'hiw.sub': 'Two flows designed from scratch: one for customers looking for nearby discounts, one for businesses that want to attract the people already close to their door.',
    'hiw.tab1': 'For customers',
    'hiw.tab2': 'For businesses',
    'c.s1.h': 'Enable your location',
    'c.s1.p': 'GeoPS accesses your GPS once per session to center the map. No background tracking, no stored history — you stay in control.',
    'c.s2.h': 'Discover on the map',
    'c.s2.p': 'Interactive pins show nearby businesses with active coupons. Filter by food, café, health, shops, or services — only what you need right now.',
    'c.s3.h': 'Reserve and redeem',
    'c.s3.p': 'Claim the coupon with a tap. Show the screen when you arrive at the store. Stock is real and live — if it shows available, it is.',
    'b.s1.h': 'Register your business',
    'b.s1.p': 'Create your profile in minutes, pin your store on the real map of Lima via OpenStreetMap, and set the impact radius you want to cover.',
    'b.s2.h': 'Launch your campaign',
    'b.s2.p': 'Set discount, stock, duration, and radius. Your offer goes live on your customers\' map immediately — no middlemen, no waiting days.',
    'b.s3.h': 'Measure in real time',
    'b.s3.p': 'Your dashboard shows the full funnel from map views to in-store redemptions, with an hourly chart and customer origin heatmap.',

    // Features
    'feat.title': 'Everything you need, nothing you don\'t',
    'feat.sub': 'Every feature was built to solve a real local commerce problem — not to fill a feature checklist.',
    'feat.main.h': 'Real-time interactive map',
    'feat.main.p': 'OpenStreetMap tiles with CARTO layers. Custom pins showing live discounts, pulsing halo on the selected pin, user radar. The map always reflects real stock of every active campaign.',
    'feat.c1.h': 'Metrics dashboard',
    'feat.c1.p': 'Full conversion funnel, hourly activity chart, and customer origin heatmap to optimize every campaign in real time.',
    'feat.c2.h': 'Seasonal campaigns',
    'feat.c2.p': 'Ready templates for key commerce dates. Configure, publish, and manage coupon stock in under five minutes.',
    'feat.c3.h': 'Category filters',
    'feat.c3.p': 'Users see only what they\'re looking for. Less visual noise means higher purchase intent on every result.',
    'feat.c4.h': 'Real stock, no surprises',
    'feat.c4.p': 'Each pin shows coupons remaining. When stock runs out it disappears automatically, creating genuine urgency.',

    // Problem
    'prob.eyebrow': 'The gap we close',
    'prob.title': 'Local advertising is <em style="font-style:normal;color:var(--brand-strong);">broken</em>',
    'prob.p1': 'Thousands of small businesses in Lima offer incredible discounts every day — and their potential customers never hear about them. Meanwhile users suffer from ad fatigue: bombarded with irrelevant content, they ignore anything that doesn\'t respond to where they are right now.',
    'prob.p2': 'GeoPS closes that gap by connecting in real time those who offer value with those who are meters away from receiving it.',
    'prob.cta': 'Explore the map',

    // Stats
    'stat1.label': 'of micro and small businesses in Latin America lack the digital tools to improve their competitiveness',
    'stat1.src': 'Inter-American Development Bank, 2020',
    'stat2.label': 'of users consider online ads excessive or irrelevant',
    'stat3.label': 'of potential sales lost due to lack of geolocation tools in SMEs',

    // Testimonials
    'test.title': 'Validated by real users',
    'test.sub': 'Before building, we interviewed business owners and local customers in Lima to deeply understand their reality.',
    'test.q1': '"People walking past my store don\'t know I exist. I put up signs but nobody sees them. I need something that reaches the people who are already close and ready to buy."',
    'test.q2': '"I always find out about discounts after they\'ve expired or the place is 5 km away. A platform that filters by what\'s available close to me right now would change how I decide where to eat."',
    'test.q3': '"I\'m afraid to invest in digital advertising because I don\'t know if it actually brings customers. I need one clear number: how many people came to my store because of my promotion."',
    'test.r1': 'Food entrepreneur · Lima',
    'test.r2': 'Young professional · Miraflores',
    'test.r3': 'Shop owner · San Isidro',

    // Differentiators
    'diff.title': 'Built different from the ground up',
    'diff.sub': 'Every decision was made with one question in mind: what does a local business or a nearby customer actually need?',
    'diff.1.h': 'Real-time, always',
    'diff.1.p': 'Live stock and active offers update instantly. What you see is exactly what is available at this moment.',
    'diff.2.h': 'Map-first',
    'diff.2.p': 'The map is not a feature. Every interaction is anchored to your physical location and what is reachable right now.',
    'diff.3.h': 'Built for small business',
    'diff.3.p': 'No enterprise contracts, no agencies, no commissions. You own the campaign and the results.',
    'diff.4.h': 'Zero friction',
    'diff.4.p': 'A PWA means no download, no app store. Open any browser, enable location, done.',
    'diff.5.h': 'Full-funnel analytics',
    'diff.5.p': 'Not just views. Reservations, redemptions, peak hours, and a customer origin heatmap.',
    'diff.6.h': 'Privacy by design',
    'diff.6.p': 'GPS accessed once per session. No tracking, no history stored, no data sold.',

    // Pricing
    'price.title': 'Start free, scale when you\'re ready',
    'price.sub': 'Always free for customers. For businesses, a Freemium model that scales with the real results of your campaigns.',
    't1.name': 'For customers',
    't1.freq': '/ always',
    't1.sub': 'Full map access, no restrictions.',
    't1.cta': 'Explore free',
    't2.name': 'Business · Freemium',
    't2.freq': '/ month',
    't2.sub': 'Start digitalizing your business today.',
    't2.cta': 'Get started free',
    't3.name': 'Business · Premium',
    't3.amount': 'Custom <span style="font-size:13px;">/mo</span>',
    't3.sub': 'For businesses that want to stand out and scale.',
    't3.cta': 'Contact us',
    'popular': 'Most popular',
    'f1.1': 'Unlimited interactive map',
    'f1.2': 'Category filters',
    'f1.3': 'Coupon reservations',
    'f1.4': 'Saved coupons',
    'f1.5': 'Activity history',
    'f2.1': '1 simultaneous active campaign',
    'f2.2': 'Basic metrics dashboard',
    'f2.3': 'Map radius up to 500m',
    'f2.4': 'Coupon stock management',
    'f2.5': 'Email support',
    'f3.1': 'Unlimited simultaneous campaigns',
    'f3.2': 'Featured pin on the map',
    'f3.3': 'Impact radius up to 2km',
    'f3.4': 'Advanced analytics and heatmap',
    'f3.5': 'Seasonal campaign templates',

    // Story & team
    'story.eyebrow': 'Who we are',
    'story.title': 'Built by students with a product mindset',
    'story.p1': 'GeoPS was born from a simple observation: thousands of small businesses in Lima offer incredible discounts, but their potential customers never hear about them. At the same time, millions of people walk past those businesses every day without knowing what they\'re missing.',
    'story.p2': 'We are <strong>PauLuDev</strong>, a team of five software engineers from Universidad Peruana de Ciencias Aplicadas. We believe technology should democratize access to local commerce, not concentrate it in big chains.',
    'story.p3': 'Our vision is to become the reference platform for geolocated coupons in Latin America, transforming how local businesses manage their campaigns and how people discover savings along their daily route.',
    'story.stat': 'people in the impact radius · Miraflores',
    'team.title': 'The team behind GeoPS',

    // FAQ
    'faq.title': 'Frequently asked questions',
    'faq.sub': 'Everything you need to know before getting started, whether you\'re a customer or a business owner.',
    'faq.q1': 'Does GeoPS track my location all the time?',
    'faq.a1': 'No. GeoPS accesses your GPS once per session to center the map. We don\'t store location history, don\'t track your movements, and don\'t share your position with any third party.',
    'faq.q2': 'Do I need to download an app?',
    'faq.a2': 'No. GeoPS is a Progressive Web App that works directly from your browser on any device. Just open the URL, enable your location, and you\'re in — no downloads, no app store.',
    'faq.q3': 'How do I redeem a coupon at the store?',
    'faq.a3': 'Reserve the coupon with a tap. A validation code appears on screen. Show the screen to the cashier when you arrive — no printing, no physical QR needed.',
    'faq.q4': 'How much does it cost to list my business?',
    'faq.a4': 'The Freemium plan is completely free and includes one active campaign with basic metrics. Premium adds unlimited campaigns, featured map pin, and advanced analytics. Contact us for pricing.',
    'faq.q5': 'Where in Peru is GeoPS available?',
    'faq.a5': 'Currently in beta focused on Miraflores, Lima. The OpenStreetMap layer covers all of metropolitan Lima and businesses can register from any district. Expansion to other cities across Peru is on the roadmap for H2 2026.',
    'faq.q6': 'Does GeoPS process payments?',
    'faq.a6': 'No. GeoPS is a geolocated advertising catalog. Payment for the discounted product happens directly at the physical store, keeping the system simple and friction-free.',

    // CTA & footer
    'cta.em1': 'Save',
    'cta.em2': 'grow',
    'cta.sub': 'GeoPS is free for customers. For businesses, start with Freemium and scale when your campaigns prove themselves.',
    'cta.t1': 'For customers',
    'cta.h1': 'Discover what\'s nearby',
    'cta.p1': 'Enable your location and explore the best deals from businesses in your area. Completely free, forever.',
    'cta.btn1': 'Explore the map',
    'cta.t2': 'For businesses',
    'cta.h2': 'Reach customers already close',
    'cta.p2': 'Create your first campaign in 5 minutes. No sales commission. Measure every redemption from day one.',
    'cta.btn2': 'Register my business',
    'footer.tag': 'The geolocated coupon platform connecting customers with local businesses in real time.',
    'footer.c1': 'Product',
    'footer.c2': 'Company',
    'footer.c3': 'Technology',
    'footer.p1': 'Coupon app',
    'footer.p2': 'Business dashboard',
    'footer.p3': 'Pricing',
    'footer.p4': 'How it works',
    'footer.p5': 'The team',
    'footer.p6': 'For businesses',
    'footer.p7': 'Contact',
  },

  es: {
    // Nav
    'nav.how': 'Cómo funciona',
    'nav.biz': 'Para negocios',
    'nav.pricing': 'Precios',
    'nav.team': 'Equipo',
    'nav.login': 'Iniciar sesión',
    'nav.signup': 'Registrarse',
    'nav.merchant': 'Soy un negocio',

    // Hero
    'hero.location': 'Perú · pronto en todo el país',
    'hero.w1': 'Los mejores',
    'hero.w2': 'cupones,',
    'hero.w3': '<em>a metros</em>',
    'hero.w4': 'de ti.',
    'hero.sub': 'GeoPS muestra en tiempo real las ofertas activas de los negocios más cercanos a tu posición, sobre un mapa real. Sin instalar nada, sin publicidad irrelevante — solo lo que está disponible <em style="font-style:normal;font-weight:600;color:var(--ink);">ahora y cerca</em>.',
    'hero.cta1': 'Ver cupones cerca de mí',
    'hero.cta2': 'Para negocios',
    'hero.trust1': 'Gratis para clientes',
    'hero.trust2': 'Sin rastreo en segundo plano',

    // How it works
    'hiw.title': 'Tan simple como caminar',
    'hiw.sub': 'Dos flujos diseñados desde cero: uno para clientes que buscan descuentos cercanos, otro para negocios que quieren atraer a las personas que ya están cerca de su puerta.',
    'hiw.tab1': 'Para clientes',
    'hiw.tab2': 'Para negocios',
    'c.s1.h': 'Activa tu ubicación',
    'c.s1.p': 'GeoPS accede a tu GPS una sola vez por sesión para centrar el mapa. Sin rastreo en segundo plano, sin historial guardado — tú tienes el control.',
    'c.s2.h': 'Descubre en el mapa',
    'c.s2.p': 'Pines interactivos muestran establecimientos cercanos con cupones activos. Filtra por comida, café, salud, tiendas o servicios — solo lo que necesitas ahora mismo.',
    'c.s3.h': 'Reserva y canjea',
    'c.s3.p': 'Aparta el cupón con un toque. Muestra la pantalla al llegar al local. El stock es real y en tiempo real — si aparece disponible, está disponible.',
    'b.s1.h': 'Registra tu negocio',
    'b.s1.p': 'Crea tu perfil en minutos, geolocaliza tu local en el mapa real de Lima con OpenStreetMap y define el radio de impacto que quieres cubrir.',
    'b.s2.h': 'Crea tu campaña',
    'b.s2.p': 'Define descuento, stock, vigencia y radio. Tu oferta se publica de inmediato en el mapa de tus clientes potenciales, sin intermediarios ni días de espera.',
    'b.s3.h': 'Mide en tiempo real',
    'b.s3.p': 'Tu dashboard muestra el funnel completo desde las vistas en el mapa hasta los canjes en el local, con un gráfico por hora y mapa de calor de origen de clientes.',

    // Features
    'feat.title': 'Todo lo que necesitas, nada que no necesitas',
    'feat.sub': 'Cada funcionalidad fue diseñada para resolver un problema real de comercio local, no para impresionar en una demo.',
    'feat.main.h': 'Mapa interactivo en tiempo real',
    'feat.main.p': 'Tiles de OpenStreetMap con capas de CARTO. Pines custom con descuento visible, halo pulsante para el pin seleccionado y radar de geolocalización. El mapa siempre refleja el stock real de cada campaña activa.',
    'feat.c1.h': 'Dashboard de métricas',
    'feat.c1.p': 'Funnel de conversión completo, gráfico de actividad por hora y mapa de calor de origen de clientes para optimizar cada campaña.',
    'feat.c2.h': 'Campañas estacionales',
    'feat.c2.p': 'Plantillas listas para fechas clave. Configura, publica y gestiona el stock de cupones en menos de cinco minutos.',
    'feat.c3.h': 'Filtros por categoría',
    'feat.c3.p': 'El usuario ve exactamente lo que busca. Menos ruido visual significa mayor intención de compra en cada resultado.',
    'feat.c4.h': 'Stock real, sin sorpresas',
    'feat.c4.p': 'Cada pin muestra cuántos cupones quedan. Cuando el stock se agota desaparece automáticamente, generando urgencia genuina.',

    // Problem
    'prob.eyebrow': 'La brecha que cerramos',
    'prob.title': 'La publicidad local está <em style="font-style:normal;color:var(--brand-strong);">rota</em>',
    'prob.p1': 'Miles de pequeños negocios en Lima ofrecen descuentos increíbles todos los días y sus clientes potenciales nunca se enteran. Al mismo tiempo los usuarios sufren fatiga publicitaria: bombardeados de anuncios irrelevantes, ignoran todo lo que no responde a dónde están ahora mismo.',
    'prob.p2': 'GeoPS cierra esa brecha conectando en tiempo real a quienes ofrecen valor con quienes están a metros de distancia de recibirlo.',
    'prob.cta': 'Explorar el mapa',

    // Stats
    'stat1.label': 'de las micro y pequeñas empresas de Latinoamérica carece de herramientas digitales que mejoren su competitividad',
    'stat1.src': 'Banco Interamericano de Desarrollo, 2020',
    'stat2.label': 'de usuarios considera los anuncios en línea excesivos o irrelevantes',
    'stat3.label': 'de ventas potenciales perdidas por falta de herramientas de geolocalización en PyMEs',

    // Testimonials
    'test.title': 'Validado por usuarios reales',
    'test.sub': 'Antes de construir, entrevistamos a propietarios de negocios y clientes locales en Lima para entender su realidad con profundidad.',
    'test.q1': '"Las personas que pasan frente a mi local no saben que existo. Pongo carteles, pero nadie los ve. Necesito algo que llegue directamente a quien ya está cerca y tiene intención de comprar."',
    'test.q2': '"Siempre me entero de los descuentos cuando ya vencieron o el local está a 5 kilómetros. Una plataforma que filtre por lo que tengo disponible cerca ahora mismo cambiaría cómo decido dónde comer."',
    'test.q3': '"Tengo miedo de invertir en publicidad digital porque no sé si realmente me trae clientes. Necesito ver un número claro: cuántas personas vinieron al local gracias a mi promoción."',
    'test.r1': 'Emprendedor gastronómico · Lima',
    'test.r2': 'Joven profesional · Miraflores',
    'test.r3': 'Propietaria de tienda · San Isidro',

    // Differentiators
    'diff.title': 'Construido diferente desde la base',
    'diff.sub': 'Cada decisión en GeoPS fue tomada con una sola pregunta: ¿qué necesita realmente un negocio local o un cliente cercano?',
    'diff.1.h': 'Tiempo real, siempre',
    'diff.1.p': 'El stock y las ofertas activas se actualizan al instante en el mapa. Lo que ves es exactamente lo que hay disponible en este momento.',
    'diff.2.h': 'El mapa como producto',
    'diff.2.p': 'El mapa no es una funcionalidad. Cada interacción en GeoPS está anclada a tu ubicación física y lo que es alcanzable ahora mismo.',
    'diff.3.h': 'Hecho para pequeños negocios',
    'diff.3.p': 'Sin contratos enterprise, sin agencias, sin comisiones. Tú configuras tu campaña, controlas el stock y eres dueño de los resultados.',
    'diff.4.h': 'Cero fricción',
    'diff.4.p': 'GeoPS es una PWA. Sin descarga, sin tienda de apps. Abre cualquier navegador, activa la ubicación y listo.',
    'diff.5.h': 'Analytics de funnel completo',
    'diff.5.p': 'No solo vistas. Ves reservas, canjes, pico horario y un mapa de calor del origen de tus clientes.',
    'diff.6.h': 'Privacidad por diseño',
    'diff.6.p': 'El GPS se accede una vez por sesión. Sin rastreo, sin historial guardado, sin datos vendidos.',

    // Pricing
    'price.title': 'Empieza gratis, crece cuando estés listo',
    'price.sub': 'Para clientes es y será siempre gratuito. Para negocios, un modelo Freemium que escala con los resultados reales de tus campañas.',
    't1.name': 'Para clientes',
    't1.freq': '/ siempre',
    't1.sub': 'Acceso completo al mapa sin restricciones.',
    't1.cta': 'Explorar gratis',
    't2.name': 'Negocio · Freemium',
    't2.freq': '/ mes',
    't2.sub': 'Para empezar a digitalizar tu negocio hoy mismo.',
    't2.cta': 'Empezar gratis',
    't3.name': 'Negocio · Premium',
    't3.amount': 'A consultar <span style="font-size:13px;">/ mes</span>',
    't3.sub': 'Para negocios que quieren destacar y escalar su impacto.',
    't3.cta': 'Contactar',
    'popular': 'Más popular',
    'f1.1': 'Mapa interactivo ilimitado',
    'f1.2': 'Filtros por categoría',
    'f1.3': 'Reserva de cupones',
    'f1.4': 'Cupones guardados',
    'f1.5': 'Historial de actividad',
    'f2.1': '1 campaña activa simultánea',
    'f2.2': 'Dashboard de métricas básico',
    'f2.3': 'Radio en el mapa hasta 500m',
    'f2.4': 'Gestión de stock de cupones',
    'f2.5': 'Soporte por email',
    'f3.1': 'Campañas ilimitadas simultáneas',
    'f3.2': 'Pin destacado en el mapa',
    'f3.3': 'Radio de impacto hasta 2km',
    'f3.4': 'Analytics avanzado y mapa de calor',
    'f3.5': 'Plantillas de campañas estacionales',

    // Story & team
    'story.eyebrow': 'Quiénes somos',
    'story.title': 'Construido por estudiantes con mentalidad de producto',
    'story.p1': 'GeoPS nació de una observación simple: miles de pequeños negocios en Lima ofrecen descuentos increíbles, pero sus clientes potenciales nunca se enteran. Al mismo tiempo, millones de personas pasan frente a esos negocios cada día sin saber lo que se están perdiendo.',
    'story.p2': 'Somos <strong>PauLuDev</strong>, un equipo de cinco ingenieros de software de la Universidad Peruana de Ciencias Aplicadas. Creemos que la tecnología debe democratizar el acceso al comercio local, no concentrarlo en las grandes cadenas.',
    'story.p3': 'Nuestra visión es convertirnos en la plataforma web de referencia en cupones geolocalizados de Latinoamérica, transformando cómo los negocios locales gestionan sus campañas y cómo las personas descubren oportunidades de ahorro en su trayectoria diaria.',
    'story.stat': 'personas en radio de impacto · Miraflores',
    'team.title': 'El equipo detrás de GeoPS',

    // FAQ
    'faq.title': 'Preguntas frecuentes',
    'faq.sub': 'Todo lo que necesitas saber antes de empezar, tanto si eres cliente como si eres propietario de un negocio.',
    'faq.q1': '¿GeoPS rastrea mi ubicación todo el tiempo?',
    'faq.a1': 'No. GeoPS accede a tu GPS una sola vez por sesión para centrar el mapa. No guardamos historial de ubicación, no rastreamos movimientos y no compartimos tu posición con ningún tercero.',
    'faq.q2': '¿Necesito descargar una aplicación?',
    'faq.a2': 'No. GeoPS es una Progressive Web App que funciona directamente desde el navegador de cualquier dispositivo. Solo entra a la URL, activa tu ubicación y listo — sin descargas, sin tienda de apps.',
    'faq.q3': '¿Cómo canjeo un cupón en el local?',
    'faq.a3': 'Reserva el cupón con un toque. Se genera un código de validación en pantalla. Muestra la pantalla al cajero cuando llegues — sin imprimir nada, sin QR físico.',
    'faq.q4': '¿Cuánto cuesta publicar mi negocio en GeoPS?',
    'faq.a4': 'El plan Freemium es completamente gratuito e incluye una campaña activa con métricas básicas. El Premium agrega campañas ilimitadas, pin destacado y analytics avanzado. Contáctanos para el precio.',
    'faq.q5': '¿En qué zonas de Perú está disponible GeoPS?',
    'faq.a5': 'Actualmente en beta con foco en Miraflores, Lima. El mapa de OpenStreetMap cubre toda Lima Metropolitana y los negocios pueden registrarse desde cualquier distrito. La expansión a otras ciudades está en el roadmap para el segundo semestre de 2026.',
    'faq.q6': '¿GeoPS procesa pagos dentro de la plataforma?',
    'faq.a6': 'No. GeoPS actúa como catálogo publicitario geolocalizados. El pago del producto con descuento se realiza directamente en el local físico, manteniendo el sistema simple y sin fricciones.',

    // CTA & footer
    'cta.em1': 'Ahorrar',
    'cta.em2': 'crecer',
    'cta.sub': 'GeoPS es gratuito para clientes. Para negocios, empieza con Freemium y escala cuando tus campañas hablen por sí solas.',
    'cta.t1': 'Para clientes',
    'cta.h1': 'Descubre lo que hay cerca',
    'cta.p1': 'Activa tu ubicación y explora los cupones de los mejores negocios de tu zona. Completamente gratuito, para siempre.',
    'cta.btn1': 'Explorar el mapa',
    'cta.t2': 'Para negocios',
    'cta.h2': 'Llega a los clientes que ya están cerca',
    'cta.p2': 'Crea tu primera campaña en 5 minutos sin comisiones por venta y mide cada canjeo desde el primer día.',
    'cta.btn2': 'Registrar mi negocio',
    'footer.tag': 'La plataforma de cupones geolocalizados que conecta clientes con negocios locales en tiempo real.',
    'footer.c1': 'Producto',
    'footer.c2': 'Empresa',
    'footer.c3': 'Tecnología',
    'footer.p1': 'App de cupones',
    'footer.p2': 'Dashboard negocio',
    'footer.p3': 'Precios',
    'footer.p4': 'Cómo funciona',
    'footer.p5': 'El equipo',
    'footer.p6': 'Para negocios',
    'footer.p7': 'Contacto',
  },
};


let currentLang = localStorage.getItem('geops_lang') || 'en';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('geops_lang', lang);
  document.documentElement.lang = lang;
  document.getElementById('langEn').classList.toggle('active', lang === 'en');
  document.getElementById('langEs').classList.toggle('active', lang === 'es');

  const d = T[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (d[key] !== undefined) el.innerHTML = d[key];
  });
}


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

setLang(currentLang);