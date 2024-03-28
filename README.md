# ngMaterialThemer for v17.1

This is a simple Angular Material theme generator. It's a POC for now, but the goal is to be able to fully customize your theme with ease, and to understand every step of the customization process in order to embrace the Angular Material philosophy.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Roadmap

- Fix marks

- Make density work dynamicly in preview panel by overriding components vars

- Clean up & use tests to facilitate open source support

- Advanced customization based on components (and their variables) rather than palettes

- Add a list of Material components to check/uncheck depending on whether they are used in the application to optimize theming and builds.

- Add a tutorial/cheatsheet or lexical tab to explain how each Material component uses palettes

- Improve the preview panel :

  - Add an error input in the preview panel
  - Expansion panel with main components for quick visualization

- State handling in url (for sharing, saving purposes)
