import { Firestore, QuerySnapshot, addDoc, and, collection, collectionData, getDocs, query, updateDoc, where } from '@angular/fire/firestore';
import { Observable, first, from, map } from "rxjs";
import { Injectable, inject } from "@angular/core";
import { Metrics } from '../../app.types';
import { DocumentData, getDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  firestore = inject(Firestore);
  metricsCollection = collection(this.firestore, "metrics")

  getMetrics = (): Observable<Metrics[]> => {
    return collectionData(this.metricsCollection) as Observable<Metrics[]>;
  }

  async getUserMetricsByYear(userId: string, year: number): Promise<{ id: string, metrics: Metrics } | undefined> {
    const q = query(this.metricsCollection, where("userId", "==", userId), where("year", "==", year));

    const querySnapshot = await getDocs(q);

    const doc = querySnapshot.docs[0];

    if (doc) {
      console.log(doc.id, " => ", doc.data());

      return { id: doc.id, metrics: doc.data() as Metrics };
    }

    return undefined;
  }

  addMetrics(metricsToCreate: Metrics): Observable<string> {
    const promise = addDoc(this.metricsCollection, metricsToCreate).then(response => response.id)

    return from(promise)
  }

  // updateMetrics(): any {
  //   updateDoc(this.metricsCollection,)
  //     return {}
  // }
}
