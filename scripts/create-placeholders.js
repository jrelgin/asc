// This script creates placeholder images for development purposes
const fs = require('fs');
const path = require('path');

// Ensure the directory exists
const uploadsDir = path.join(__dirname, '../public');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Create an HTML file with colored placeholders
const createPlaceholder = (filename, width, height, bgColor, text) => {
  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Placeholder Image</title>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${bgColor};
      color: white;
      font-family: sans-serif;
      text-align: center;
    }
  </style>
</head>
<body>
  <div>${text}</div>
</body>
</html>
  `;
  
  fs.writeFileSync(path.join(uploadsDir, filename), html);
  console.log(`Created placeholder: ${filename}`);
};

// Gallery placeholders
for (let i = 1; i <= 6; i++) {
  createPlaceholder(
    `placeholder-${i}.jpg.html`,
    400,
    300,
    ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'][i-1],
    `Gallery Image ${i}`
  );
}

// Why Join image
createPlaceholder(
  'placeholder-why-join.jpg.html',
  600,
  400,
  '#0EA5E9',
  'Why Join Section Image'
);

// Person placeholders
for (let i = 1; i <= 4; i++) {
  createPlaceholder(
    `placeholder-person-${i}.jpg.html`,
    200,
    200,
    ['#4F46E5', '#0EA5E9', '#10B981', '#F59E0B'][i-1],
    `Person ${i}`
  );
}

// Create icons folder and placeholders
const iconsDir = path.join(uploadsDir, 'icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Icons for the process steps
['newsletter', 'slack', 'meetup'].forEach((icon, i) => {
  createPlaceholder(
    `icons/${icon}.svg.html`,
    64,
    64,
    ['#3B82F6', '#10B981', '#F59E0B'][i],
    icon
  );
});

console.log('All placeholders created successfully!');
