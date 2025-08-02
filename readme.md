# Intro
Simple portfolio website that reads the portfolio data from a JSON file.

NOTE:
This git contains the source code of the portfolio website I use however the install instruction have not been tested. 😬
If there are any issues add them to the Github issue list of this project.
Not all data has been made available in the JSON, room for improvement. 😅

## Objectives
1. Keeping It Super Simple.
2. Static website with no hosting dependencies.
3. Portfolio data stored and managed separately.
4. Keep dependencies to a minimum.

# Installation

## Install 
```
npm run install
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
npm run start:dev
```

This will run the Vite development server and a watcher for file `ejs/data.json`.

## Update content
Data for the `work-cards` is stored in the `./ejs/data.json` file.
To update the content of the portfolio website edit the `data.json` file.

The `image` field contains the image path WITHOUT the file extension!
For each image there must be a `jpg` and `avif` image in the folder `./scr/public/..`.
Images must have an aspect ration of 3:2.

When you save `data.json` the `index.html` will automatically be updated with the new data.
In case this doesn't happen you can also run the command manually.
```
npx ejs ./ejs/templates/work-cards.ejs -f ./ejs/data.json -o ./src/index.html
```

## Deployment
The build script generates files for production in folder `dist`.
You can upload the content of the `dist` folder to any webserver there are no dependencies.

```
npm run build
```

## Preview production
You can run preview are you done a build.
```
npm run preview
```

## Clean up CSS [Optional]
Remove unused rules from CSS.

IMPORTANT
Make sure you have a folder `purged` in the root of the project.

```
npx purgecss \
  --css src/style.css \
  --content src/**/*.html \
  --output purged/
```

Don't forget to add the `js` files should there be any.

```
npx purgecss \
  --css src/style.css \
  --content src/**/*.html src/**/*.js \
  --output purged/
```

# Design guide
Webpage automatically switches to dark mode depending on your local system settings.

# Tips and Recommendations
1. If you use VSCode install this [EJS support plugin](https://marketplace.visualstudio.com/items/?itemName=DigitalBrainstem.javascript-ejs-support) for the EJS templates.
2. Keep image files under 50Kb.
3. Use [Squoosh](https://squoosh.app/) to optimize the image file size.
4. Resize or crop images with [iloveimg](https://www.iloveimg.com/).
5. For easy JSON editing check out the [JSON editor online](https://jsoneditoronline.org/). 
