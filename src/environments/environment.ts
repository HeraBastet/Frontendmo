// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'frondendmo',
    appId: '1:345982934458:web:9e227f4c35329c2c805183',
    storageBucket: 'frondendmo.appspot.com',
    locationId: 'southamerica-east1',
    apiKey: 'AIzaSyC1ydT001DY6FjBNf6ww_Q8gC7z4J7UCw8',
    authDomain: 'frondendmo.firebaseapp.com',
    messagingSenderId: '345982934458',
  },
  production: true,

  //URL: 'http://localhost:8080/',
  //URL: 'https://backendmo.herokuapp.com/'
  URL: 'https://backendmo.onrender.com'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
