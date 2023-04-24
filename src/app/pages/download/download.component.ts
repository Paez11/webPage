import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
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
  downloadFile() {
    const fileUrl = 'assets/img/profile.jpg';
    fetch(fileUrl)
      .then(response => response.blob())
      .then(blob => {
        const downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(blob);
        downloadLink.download = 'hola.jpg';
        downloadLink.click();
      });
  }
  
}
