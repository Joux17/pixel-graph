import { Firestore, QuerySnapshot, collection, collectionData, getDocs } from '@angular/fire/firestore';
import { Observable } from "rxjs";
import { Injectable, inject } from "@angular/core";
import { Metrics } from '../../app.types';

@Injectable({
    providedIn: 'root',
})
export class FirebaseService {
    firestore = inject(Firestore);
    metricsCollection = collection(this.firestore, "metrics")

    getMetrics = (): Observable<Metrics[]> => {
        return collectionData(this.metricsCollection) as Observable<any>;
    }


    addMetrics = (): any => {
        return {}
    }

    updateMetrics = (): any => {
        return {}
    }
}