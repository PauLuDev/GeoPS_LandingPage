const fs = require('fs');

const parts = [
  'layout_top.html',
  'nav.html',
  'hero.html',
  'marquee.html',
  'how_it_works.html',
  'features.html',
  'problem_stats.html',
  'testimonials.html',
  'differentiators.html',
  'pricing.html',
  'team.html',
  'faq.html',
  'cta.html',
  'footer.html',
  'modal.html',
  'layout_bottom.html'
];

let finalHtml = '';
for (const part of parts) {
  if (fs.existsSync(`html/${part}`)) {
    finalHtml += fs.readFileSync(`html/${part}`, 'utf8');
  }
}

fs.writeFileSync('index.html', finalHtml, 'utf8');
console.log('index.html built successfully!');
