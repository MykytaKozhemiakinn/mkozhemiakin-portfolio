import { inject, Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private readonly firestore: Firestore = inject(Firestore);

  public loadSocials(): Observable<any> {
    return collectionData(collection(this.firestore, 'socials')).pipe(take(1));
  }

  public loadProjects(): Observable<any> {
    return collectionData(collection(this.firestore, 'projects')).pipe(take(1));
  }
}
