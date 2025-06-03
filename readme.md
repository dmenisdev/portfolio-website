# Installation

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

## Init data file
Rename example file `./ejs/example_data.json` to `./ejs/data.json`.

# How to use

## Run in development
Terminal session:
```
npm run dev
```

## Deployment
Generate files for production in folder `dist`.
You can upload the content of the `dist` folder to any webserver there are no dependencies.

Terminal session:
```
npm run build
```

## Preview production
Terminal session:
```
npm run preview
```

## Update content
Data for the `work-cards` is stored in the `./ejs/data.json` file.
To update the content of the portfolio website edit the `data.json` file.

The `image` field contains the image path WITHOUT the file extension!
For each image there must be a `jpg` and `avif` image in the folder `./scr/public`.
Images must have an aspect ration of 3:2.

After the update use the `ejs` command to update the index.html file.

Terminal session:
```
npx ejs ./ejs/templates/work-cards.ejs -f ./ejs/data.json -o ./src/index.html
```

# Design guide
Webpage automatically switched to dark mode depending on your local system settings.

# Tips and Recommendations
1. If you use VSCode install this [EJS support plugin](https://marketplace.visualstudio.com/items/?itemName=DigitalBrainstem.javascript-ejs-support) for the EJS templates.
2. Keep image files under 50Kb.
3. Use [Squoosh](https://squoosh.app/) to optimize the image file size.
4. Resize or crop images with [iloveimg](https://www.iloveimg.com/).
5. For easy JSON editing check out the [JSON editor online](https://jsoneditoronline.org/). 
