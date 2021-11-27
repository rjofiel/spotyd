import { Inject } from '@angular/core';
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
import { environment as dev } from 'src/environments/environment';
import { environment as prod } from 'src/environments/environment';
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
    let config = null;
    if (prod?.production) {
      config = prod?.FIREBASE_API_CONFIG;
      const app = initializeApp(config);
      const db = getFirestore(app);
    } else {
      config = dev?.FIREBASE_API_CONFIG
      const app = initializeApp(config);
      const db = getFirestore(app);
    }
  }
}
