import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  private image:ImageSelected =  null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onUploadFinish(event) {
    console.log(event);
    this.image = new ImageSelected;
    this.image.image = event.src;
    this.image.name = event.file.name;
  }

  sendImage(){    
    if(this.image != null){
      console.log('send image');
      this.http.post('http://localhost:3000/upload', {
        file: this.image.image,
        name: this.image.name
      }).subscribe((d) => {
        console.log(d);
      })
    }
  }
}

class ImageSelected {
  public name: String;
  public image: String;
}