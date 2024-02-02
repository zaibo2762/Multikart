import { Component,ViewChild } from '@angular/core';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [],
  templateUrl: './media.component.html',
  styleUrl: './media.component.css'
})
export class MediaComponent {
  @ViewChild('fileInput') fileInputRef: any;
  selectedFile: File | null = null;
  selectedFileURL: string | null = null;

  triggerFileUpload() {
    this.fileInputRef.nativeElement.click();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.selectedFile = file;

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedFileURL = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
