# Dev Installation

## Install Vite 
Terminal session:
```
npm install --save-dev vite
```

## Install EJS
Terminal session:
```
npm install --save-dev ejs
```

# Run development
Terminal session:
```
npm run dev
```

# Deployment
Terminal session:
```
npm run build
```

# Preview production
Terminal session:
```
npm run preview
```

# Generate work cards
Edit `data.json` file.
The `image` field contains the image path WITHOUT the file extension!
For each image there must be a `jpg` and `avif` image in the folder `./scr/public`.

Terminal session:
```
npx ejs ./ejs/templates/work-cards.ejs -f ./ejs/data.json -o ./src/index.html
```

## Tips & Recommendations
1. Keep image files under 50Kb.
2. Use [Squoosh](https://squoosh.app/) to optimize the image file size.
3. Resize or crop images with [iloveimg](https://www.iloveimg.com/).

# Design
Images for the projects and work experiences must have an aspect ration of 3:2.
It automatically switched to dark mode depending on your local system settings.

# Tips and Recommendations
1. If you use VSCode install this [EJS support plugin](https://marketplace.visualstudio.com/items/?itemName=DigitalBrainstem.javascript-ejs-support) for the EJS templates.
