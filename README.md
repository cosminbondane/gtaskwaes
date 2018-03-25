# Tasks management (google tasks)

Angular 5 application mirror to the [Google Tasks](https://mail.google.com/tasks/canvas)

You need to create a google application with taks permissions - https://developers.google.com/

## Development server

The project was generated using angular-cli (1.7.3). Start the project by running

```
npm install
npm start
```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Todos / Improvements

* Move google client token to environment variable
* Additional unit tests
* Change store structure for arrays - use {ids: [1, 2, 3], byId: {'1': {}, '2': {}, '3': {}}} (performance)
* Add new functionalities (remove tasks, edit task, move task)
* Supporting big lists / task-lists
