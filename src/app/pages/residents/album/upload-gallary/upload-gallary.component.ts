import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import {  FileUploader } from 'ng2-file-upload';
import { AlbumUploadService } from '../../../../services/album-upload.service';
@Component({
  selector: 'app-upload-gallary',
  templateUrl: './upload-gallary.component.html',
  styleUrls: ['./upload-gallary.component.css']
})
export class UploadGallaryComponent implements OnInit {

  @ViewChild("fileInput", {static: false}) fileInput: ElementRef;
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
 
  public uploader: FileUploader = new FileUploader({
    isHTML5: true
  });

  constructor(private uploadService: AlbumUploadService) { }
 
  ngOnInit() {
  }
 
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  OpenFileSelector()
  {
    const fileInput = this.fileInput.nativeElement;
    fileInput.click();  
  }

  RemoveImage(item)
  {
    this.uploader.queue.splice(this.uploader.queue.indexOf(item),1);
  }

 
   upload() {

    // ha function use karteys ka..ho..
    this.progress.percentage = 0;
 
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
 
    this.selectedFiles = undefined;
  } 


   UploadGalleryImages()
   {
  
    // ...hyat kay error yetoy...me yat kahi chi nahji kel..upload wal funcyion ahe amaz
    /* let data = new FormData();
    if (this.uploader.queue.length > 0) {
      this.uploader.queue.map((value, index)=>{
        data.append('file'+index, value._file);
      });
 */

      if (this.uploader.queue.length > 0) {
        this.uploader.queue.map((value, index)=>{
          this.progress.percentage = 0;
        this.uploadService.pushFileToStorage(value._file).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress.percentage = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              console.log('File is completely uploaded!');
            }
          });
        });
      

      

    }

  }

}

