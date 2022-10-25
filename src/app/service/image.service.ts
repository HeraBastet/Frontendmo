import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytesResumable, list, getDownloadURL} from '@angular/fire/storage'
import { async } from '@firebase/util';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = "";

  constructor(private storage: Storage) { }

  public uploadImage($event: any, name: string) {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `imagen/` + name)
    uploadBytesResumable(imgRef, file)
    .then(response => {this.getImages()})
    .catch(error => console.log(error))
  }

  getImages() {
    const imagesRef = ref(this.storage, 'imagen')
    list(imagesRef)
    .then(async response => {
      for(let item of response.items){
        this.url = await getDownloadURL(item);
      }
    })
    .catch(error => console.log(error))   
 }
}