# ng2-workshop-at-cern

## Workshop Schedule

- Explain `angular` and `typescript` and `@angular/cli`
  - Explain br`@angular/cli`
- Generate a new app `ng new`
- Run `ng serve` and show the app
- Explain files in `./src/app`
  - What is a module?
  - What is a component?
- Change `title` in `app.component` and see it changes on the page.
- Introduce SWAPI
- Create SWAPI Service
  - Explain `@angular/http` and `Observable`
  - Explain `@Injectable` and angular's DI.
- Use SWAPI Service
  - Fetch list of objects and show raw response on the UI
- Iterate over response and create a simple `ul`
  - Explain `ngFor`
- Create simple CardComponent to display each object in richer format
- Create search bar component and pipe to filter response list
  - Explain `@Pipe`
  - (Bonus) write a test for the Pipe


## STEPS

- `ng new ng2-workshop-at-cern`
- Create SWAPI service 
- Use SWAPI service with a button click
- Remove subscribe and use async pipe, fetch in `ngOnInit`
- Create PersonComponent, `ng generate component person`
  - To display couple of attributes from data
- Install `material UI`
  - `npm install --save @angular/material`
  - `import { MaterialModule } from '@angular/material'`
  - `...imports: [... MaterialModule.forRoot() ...]...`
  - `@import '~@angular/material/core/theming/prebuilt/deeppurple-amber.css';` in `style.css`
- Add Card to PersonComponent
- Create filter pipe with test
- Create search box that set filter expression for filter pipe
- Use `ngClass` for Starships button.
- Use `ngIf` for `'n/a'` gender.
- TODO: Use `@Output` for `REMOVE` button.


