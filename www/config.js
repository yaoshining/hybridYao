System.config({
  "baseURL": "./",
  "transpiler": "traceur",
  "paths": {
    "*": "*.js",
    "github:*": "lib/github/*.js",
    "*@app": "js/*.js"
  }
});

System.config({
  "map": {
    "ng-cordova": "github:driftyco/ng-cordova@0.1.17-alpha",
    "jquery": "github:components/jquery@2.1.4",
    "traceur": "github:jmcriffey/bower-traceur@0.0.88",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88"
  }
});

