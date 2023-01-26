import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mesh-converter',
  templateUrl: './mesh-converter.component.html',
  styleUrls: ['./mesh-converter.component.css']
})
export class MeshConverterComponent implements OnInit {
  meshFile: File;
  convertedSTL: string;

  constructor(private http: HttpClient) {
    this.meshFile=null;
    this.convertedSTL="";
   }

  ngOnInit() {
  }

  uploadMesh(event) {
    this.meshFile = event.target.files[0];
  }

  convertToSTL() {
    const formData = new FormData();
    formData.append('mesh', this.meshFile);

    this.http.post('/convert', formData)
      .subscribe(res => {
        this.convertedSTL = res.file;
      });
  }
}