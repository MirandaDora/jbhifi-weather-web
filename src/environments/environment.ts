// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   production: false,
//   authenticationOption: {
//     domain: 'seek-iam.au.auth0.com',
//     clientId: '1OiPCLcPd5hGyU936WUbeRUfE5htTua1', // localhost app
//     responseType: 'token',
//     redirect_uri: 'https://d3s9f57rt2kh5z.cloudfront.net/auth/callback',
//     audience: 'https://seek-iam.au.auth0.com/api/v2/'
//   },
//   authenticationLogOutOption: {
//     returnTo: 'https://d3s9f57rt2kh5z.cloudfront.net/app',
//     client_id: '1OiPCLcPd5hGyU936WUbeRUfE5htTua1'
//   }
// };

export const environment = {
  production: false,
  weatherApiKeys: [
    {}
  ],
  authenticationOption: {
    domain: 'seek-iam.au.auth0.com',
    clientId: '1OiPCLcPd5hGyU936WUbeRUfE5htTua1', // localhost app
    responseType: 'token',
    redirect_uri: 'http://localhost:4200/auth/callback',
    audience: 'https://seek-iam.au.auth0.com/api/v2/'
  },
  authenticationLogOutOption: {
    returnTo: 'http://localhost:4200/app',
    client_id: '1OiPCLcPd5hGyU936WUbeRUfE5htTua1'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
