import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  projectCollection!:AngularFirestoreCollection;

  public getProject(userId:string){
    this.projectCollection = this.db.collection('users').doc(userId).collection('projects')
    return this.projectCollection.snapshotChanges().pipe(map(
      collection =>collection.map(
        document => {
          const data = document.payload.doc.data();
          data['id'] = document.payload.doc.id;
          return data;
        }
      )
    ))
  }

  deleteProject(userId:string ,id:string){
    this.db.collection('users').doc(userId).collection('projects').doc(id).delete();
  }
  constructor(private db:AngularFirestore) { }
}
