import { Inject } from '@angular/core';
declare global {
  interface Window {
    config: any
  }
}

@Inject({
  provideIn: 'root'
})

export class AppInitService {

  init(): void {
    // let config = null;
    // if (prod?.production) {
    //   config = prod?.FIREBASE_API_CONFIG;
    //   const app = initializeApp(config);
    //   const db = getFirestore(app);
    // } else {
    //   config = dev?.FIREBASE_API_CONFIG
    //   const app = initializeApp(config);
    //   const db = getFirestore(app);
    // }
  }
}
