# Tasks management (google tasks)

Application mirror to the [Google Tasks](https://mail.google.com/tasks/canvas)

Technologies stack
* [Angular version 5](https://angular.io)
* [Angular material](https://material.angular.io/)
* [Ngrx](https://github.com/ngrx/platform)

## Setup Google credentials

1. Go to https://console.cloud.google.com/apis/credentials/
2. Press `Create credentials` and select `OAuth clientID`
3. Select `Web Application` and complete `Restrictions` with http://localhost:4200
4. Get the client_id and update environmnet/environmnet.dev

## Development server

The project was generated using angular-cli (1.7.3). To start the project open termanial and run

```
npm install
ng serve

# if ng is not found installed it globally
npm install @angular/cli --global
```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

```
# with watch
ng test

# single run
ng test --single-run

# with coverage
ng test --single-run --code-coverage
```

## Todos / Improvements

* Unit tests for HTML
* Change how arrays are stored in store. Use instead something like `{ ids: [1, 2, 3], byId: {'1': {}, '2': {}, '3': {}} }`
* Add new functionalities (edit task, move task)
* Unit tests for google tasks service
* Support for big lists or big task-lists
