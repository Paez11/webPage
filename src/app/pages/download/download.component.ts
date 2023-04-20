import { Component } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
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
