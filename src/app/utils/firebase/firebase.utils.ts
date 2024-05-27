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

    getMetrics2(userId: string, year: number): Observable<Metrics> {
      const q = query(this.metricsCollection, where("userId", "==", userId), where("year", "==", year));
      return collectionData(q).pipe(
        first() // ça marche pas ça, j'ai un tableau
      ) as Observable<Metrics>

      //return ( getDocs(q)).docs[0]
      // querySnapshot.forEach((doc) => {
      //   // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      // });
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
