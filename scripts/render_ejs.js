const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

async function renderTemplates() {
  // Paths
  const dataPath = path.resolve(__dirname, '../ejs/data.json');
  const templates = [
    {
      template: path.resolve(__dirname, '../ejs/templates/work-cards.ejs'),
      output: path.resolve(__dirname, '../src/index.html'),
    },
    {
      template: path.resolve(__dirname, '../ejs/templates/contacts.ejs'),
      output: path.resolve(__dirname, '../src/contacts.html'),
    },
  ];

  // Load data
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

  // Render and write each template
  for (const { template, output } of templates) {
    const templateStr = fs.readFileSync(template, 'utf-8');
    const html = ejs.render(templateStr, data, { filename: template });
    fs.writeFileSync(output, html, 'utf-8');
    console.log(`Rendered ${output}`);
  }
}

// To use as a script:
if (require.main === module) {
  renderTemplates().catch(err => {
    console.error(err);
    process.exit(1);
  });
}

module.exports = renderTemplates;