import { Inject } from '@angular/core';
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
import { environment } from 'src/environments/environment';
import firebaseConfig from '../assets/config/firebaseConfig';
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
    const config = firebaseConfig;
    if (environment.production) {
      config.apiKey = environment.FIREBASE_API_KEY;
      const app = initializeApp(config);
      const db = getFirestore(app);
    } else {
      config.apiKey = environment.FIREBASE_API_KEY;
      const app = initializeApp(config);
      const db = getFirestore(app);
    }
  }
}
