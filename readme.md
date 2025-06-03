# Intro
Simple portfolio website that reads the portfolio data from a JSON file.

NOTE:
This git contains the source code of the portfolio website I use however the install instruction have not been tested. 😬
If there are any issue add them to the Github issue list of this project.
Not all data has been made available in the JSON, room for improvement. 😅

# Installation

## Install Vite 
```
npm install --save-dev vite
```

## Install EJS
```
npm install --save-dev ejs
```

## Init files with personal data
Files that contain personal data are not in the git repository.
However for each of those files there is an example file.
Example files have the extenion `.example`, remove the extension and edit the file to include your personal data.

Rename file `./ejs/data.json.example` to `./ejs/data.json`.

Rename file `./sitemap.xml.example` to `./sitemap.xml`.

# How to use

## Run in development
```
npm run dev
```

## Deployment
The build script generates files for production in folder `dist`.
You can upload the content of the `dist` folder to any webserver there are no dependencies.

```
npm run build
```

## Preview production
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

```
npx ejs ./ejs/templates/work-cards.ejs -f ./ejs/data.json -o ./src/index.html
```

# Design guide
Webpage automatically switches to dark mode depending on your local system settings.

# Tips and Recommendations
1. If you use VSCode install this [EJS support plugin](https://marketplace.visualstudio.com/items/?itemName=DigitalBrainstem.javascript-ejs-support) for the EJS templates.
2. Keep image files under 50Kb.
3. Use [Squoosh](https://squoosh.app/) to optimize the image file size.
4. Resize or crop images with [iloveimg](https://www.iloveimg.com/).
5. For easy JSON editing check out the [JSON editor online](https://jsoneditoronline.org/). 
