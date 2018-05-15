// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

class FirebaseInfo {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
}

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBW5v9OA_dMIAKbp4q4ihE4H6yRR5RBScM',
    authDomain: 'screen-fleet.firebaseapp.com',
    databaseURL: 'https://screen-fleet.firebaseio.com',
    projectId: 'screen-fleet',
    storageBucket: '',
    messagingSenderId: '885678490253'
  }
};
