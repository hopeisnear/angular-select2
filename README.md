# Select2 support for angular js
This project is a simple standalone module that provides support for select 2 with native angular js implementation for
dropdowns. Uses ng-model with ng-options. Can be  

## Key features
* Uses ng-model with ng-options angular js implementation <a href="https://docs.angularjs.org/api/ng/directive/select">angular select 2 doc</a>
* Requires only to add "jq-select2" directive to select declaration
* Fast and lightweight

## Getting Started
To get you started you can simply clone the angular-select2 repository and install the dependencies:
Clone the angular-seed repository using [git][git]:

```
git clone https://github.com/Hopeisnear/angular-select2.git
```

## Install via [Bower](http://bower.io/)
- `bower install jq-select2`
- Include select2 lib with select2 styles or bootstrap styles
  - select.js: `<script src="bower_components/select2/select2.min.js"></script>`
  - select.css: `<link rel="stylesheet" href="bower_components/select2/select2.css">`
  - or select2-bootstrap.css: `<link rel="stylesheet" href="bower_components/select2-bootstrap-css/select2-bootstrap.css">`
- Add the `jq.select2` module as a dependency: `angular.module("myApp", ["jq.select2"]);`

## Demo 
Live examples available under at http://hopeisnear.github.io

## Development
* Install [Node.js](http://nodejs.org/) and NPM (should come with)
* Run: `npm install`

## Running tests
* `gulp test`

## License
There is none, use as you wish