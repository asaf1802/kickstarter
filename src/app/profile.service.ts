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
  userCollection:AngularFirestoreCollection = this.db.collection('users')

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

  addProject(userId:string,name:string, main_category:string,sub_category:string,currency:string,country:string,duration:string,goal:string,result:string){
    const project = {name:name,main:main_category,sub:sub_category,currency:currency,country:country,duration:duration,goal:goal,result:result};
    this.userCollection.doc(userId).collection('projects').add(project);
  }


  constructor(private db:AngularFirestore) { }
}
