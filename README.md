# PillAssist App 💊
## Running the Application
### First time
Install the latest LTS version of Node.js from https://nodejs.org. IMPORTANT: The server uses ES2015 features AND the Angular CLI so you need a current version of Node.js.

Find a place to put your app in, then go there with your terminal

Run `git clone https://github.com/roundpixel/app_pillassist.git`

Run `npm install` to install app dependencies

Run `npm start` to build the TypeScript, watch for changes and launch the web server.
After compiling, it should automatically take you to http://localhost:8000 in your browser.

### Development

During development, you should be fine to just run `npm install` after pulling, then `npm start` to start developing.

#### Code scaffolding

Run `ng generate component -is --flat folder-name/component-name --module=module-name.module` to generate a new component.
- `-is` means you don't create a separate scss file;
- `--flat` means it won't create a subfolder;
- you have to fill in `component-name` yourself;
- you have to fill in `folder-name` and `module-name` yourself, to match the submodule and folder in which the component is put.

You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests'

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

#### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Production
Run ng build --watch to build and bundle the code


