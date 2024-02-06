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

  Media=[
    {
      icon1:"/assets/pen-to-square-solid.svg",
      icon2:"/assets/trash-solid.svg",
      img:"/assets/m1.jpg",
      name:"Honor_Mobile.jpg",
      url:"http://www.assets/images/product/product/13.jpg"
    },
    {
      icon1:"/assets/pen-to-square-solid.svg",
      icon2:"/assets/trash-solid.svg",
      img:"/assets/m2.jpg",
      name:"Samsung_LED_TV.jpeg",
      url:"http://www.assets/images/electronics/product/12.jpg"
    },
    {
      icon1:"/assets/pen-to-square-solid.svg",
      icon2:"/assets/trash-solid.svg",
      img:"/assets/m3.jpg",
      name:"Motorola_Bluetooth.jpg",
      url:"http://www.assets/images/product/product/25.jpg"
    },
    {
      icon1:"/assets/pen-to-square-solid.svg",
      icon2:"/assets/trash-solid.svg",
      img:"/assets/m4.jpg",
      name:"headphones.jpg",
      url:"http://www.assets/images/product/product/20.jpg"
    },
    {
      icon1:"/assets/pen-to-square-solid.svg",
      icon2:"/assets/trash-solid.svg",
      img:"/assets/m5.jpg",
      name:"Apple_6s.jpeg",
      url:"http://www.assets/images/product/product/3.jpg"
    },
    {
      icon1:"/assets/pen-to-square-solid.svg",
      icon2:"/assets/trash-solid.svg",
      img:"/assets/m6.jpg",
      name:"Printer.jpeg",
      url:"http://www.assets/images/product/product/5.jpg"
    },
    {
      icon1:"/assets/pen-to-square-solid.svg",
      icon2:"/assets/trash-solid.svg",
      img:"/assets/m7.jpg",
      name:"Canon_Camera.jpg",
      url:"http://www.assets/images/product/product/7.jpg"
    },
    {
      icon1:"/assets/pen-to-square-solid.svg",
      icon2:"/assets/trash-solid.svg",
      img:"/assets/m8.jpg",
      name:"High_Quality_Headphones.jpg",
      url:"http://www.assets/images/product/product/18.jpg"
    },
    {
      icon1:"/assets/pen-to-square-solid.svg",
      icon2:"/assets/trash-solid.svg",
      img:"/assets/m9.jpg",
      name:"Home_Theater_Speakers.jpg",
      url:"http://www.assets/images/product/product/1.jpg"
    },
  ]
}
