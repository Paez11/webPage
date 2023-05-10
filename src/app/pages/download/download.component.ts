import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0}),
        animate(300, style({ opacity: 1}))
      ]),
      transition(':leave', [
        animate(100, style({ opacity: 0}))
      ])
    ])
  ]
})
export class DownloadComponent {
  private dbPath = '/Downloads';
  downloadRef!: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore){
    this.downloadRef = db.collection(this.dbPath);
  }

  downloadFile() {
    const fileUrl = 'assets/img/profile.jpg';
    fetch(fileUrl)
    .then(response => response.blob())
    .then(blob => {
      const downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(blob);
      downloadLink.download = 'hola.jpg';
      downloadLink.click();

      // Update download count in Firebase
      this.downloadRef.doc('count').get().toPromise().then(docSnapshot => {
        if (docSnapshot.exists) {
          // Document exists, update count
          const count = docSnapshot.data().count + 1;
          this.downloadRef.doc('count').update({count});
        } else {
          // Document does not exist, create it with count = 1
          this.downloadRef.doc('count').set({count: 1});
        }
      });
    });
  }
  
}
