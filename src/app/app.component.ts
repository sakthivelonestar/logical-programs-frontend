import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterModule } from '@angular/router'; 
import { DialogModule } from 'primeng/dialog';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,InputTextModule,ButtonModule,PasswordModule,DialogModule,FormsModule,ToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  visible: boolean = false;    
  password: string = '';       
  filename: string = '';       
  correctPassword: string = 'fullstack@123'; 

  constructor(private router: Router,private http: HttpClient,private messageService: MessageService) {
    this.navigateTo("javascript");
  }


  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  // Called when user clicks the download icon
  askPassword(filename: string) {
    this.filename = filename;
    this.password = '';
    this.visible = true;
  }

async confirmDownload() {
  if (this.password === this.correctPassword) {
    this.visible = false;
    try {
      await this.downloadZip(this.filename); 
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'File downloaded successfully!',
      });
    } catch (err) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Download failed!',
      });
    }
  } else {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Incorrect password!',
    });
  }
}


  // Actual download method
 downloadZip(filename: string): Promise<void> {
  const url = `/assets/${filename}.zip`;
  return new Promise((resolve, reject) => {
    this.http.get(url, { responseType: 'blob' }).subscribe({
      next: (blob) => {
        const objectUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = objectUrl;
        a.download = `${filename}.zip`;
        a.click();
        URL.revokeObjectURL(objectUrl);
        resolve(); 
      },
      error: (err) => {
        console.error('Download failed:', err);
        reject(err);
      }
    });
  });
}




}