import { Component } from '@angular/core';
import { Firestore,collection,addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ang-fire';

  constructor(private firestore:Firestore){

  }

  addData(f: any){
  const collectionInstance =  collection(this.firestore,'users');
  addDoc(collectionInstance,f.value).then(()=>{
    console.log('Data Saved');

  }).catch((err)=>{
    console.log(err);
  })

  }
}
