# AppWeather

##How to work with project

I generated project with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6. 
but i have few global dependency when i build it. 

/usr/local/lib  
├── @angular/cli@7.3.6 i use it to generate project  
├── angular-cli-ghpages@0.5.3 i use it to generate hosting  
├── firebase-tools@6.9.2 i use it to deploy on fir base  
└── npm@6.7.0 i use it to install package  

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Running deploy on firebase hosting

Run `ng deploy` it will build prod and run deploy on firebase


### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## What need to be done


I didn't have time to program select box "Forecast mode" i had big dream with it but i overestimated my time.  
If I had more time I would have done more tests.  
After time i see that i could add WeatherDetails as more independent component (shared component).  
