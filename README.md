# ng2-workshop-at-cern

## Requirements

- Knowledge of html, css, javascript, typescript is nice to have.
- `node>=6.9.0` with `npm` and latest [`angular-cli`](https://github.com/angular/angular-cli) should be installed.


## Workshop Schedule

- Explain `angular` and `typescript` and `@angular/cli`
  - Explain `@angular/cli`: helper tool to build (standard) angular2 apps easily
- `ng new ng2-workshop-at-cern`
- Run `ng serve` and show the app
- Explain files in `./src/app`
  - What is a module?
    - helps to organize code structure, imports, exports etc.
  - What is a component?
    - ViewController, it has both template and logic to control it.
    - They can be used in html with their own tags.
    - They can interact with each other.
- Change `title` in `app.component` and see it changes on the page.
- Create SWAPI service 
   - Explain `@angular/http` and `Observable`
    - `http` is a very simple but powerful module to handle http request inside angular app.
    - `Obsersable` or `rxjs` is async programming library around observable pattern
      - `http` module always returns an `Observable`.
      - It is more powerful than `Promise`, retying, cancelling, throttling, debouncing requests
        - also handles stream of requests.
- Use SWAPI service with a button click
  - Explain `@Injectable` and angular's DI.
    - Only single instance will be created for each injectable in a module and will be injected wherever you require.
  - Explain event binding `()`
    - Any function can be binded to any HTMLElement's event by its name.
- Remove subscribe and use async pipe, fetch in `ngOnInit`
- Iterate over response and create a simple `ul` `li`
  - Explain `ngFor`
    - repeater directive (same as `ng-repeat`)
- Create PersonComponent, `ng generate component person`
  - To display couple of attributes from data
- Install `material UI`
  - `npm install --save @angular/material`
  - `import { MaterialModule } from '@angular/material'`
  - `...imports: [... MaterialModule.forRoot() ...]...`
  - `@import '~@angular/material/core/theming/prebuilt/deeppurple-amber.css';` in `style.css`
- Add Card to PersonComponent
- Create filter pipe with test
  - Explain `@Pipe`
    - A pipe does a small transformation on given data, useful in templates (same as `filter`)
  - Write a test for the Pipe
- Create search box that set filter expression for filter pipe
- Use `ngClass` for Starships button.
- Use `ngIf` for `'n/a'` gender.
- Use `@Output`for `BUTTON` and show a snackbar `import { MdSnackBar } from '@angular/material';`



