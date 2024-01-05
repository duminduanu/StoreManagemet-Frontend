import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StoreServiceService } from '../store-service.service';

@Component({
  selector: 'app-adminitem',
  templateUrl: './adminitem.component.html',
  styleUrls: ['./adminitem.component.scss']
})
export class AdminitemComponent implements OnInit {

  storeList: any[] = [];

  id: String = "";
  name: String = "";
  description: String = "";
  emailAddress: String = "";
  category: String = "";
  address: String = "";
  latitude: String = "";
  longitude: String = "";
  uploadImage: File | undefined;

  searchText: String = "";


  constructor(private storeService: StoreServiceService) { }

  ngOnInit(): void {

    this.getAllStores();

  }

  submitData() {

    if (this.id == '') {
      this.saveData();

    } else {
      this.updateData();
    }



  }


  saveData() {

    let bodyData = {
      "name": this.name,
      "description": this.description,
      "emailAddress": this.emailAddress,
      "category": this.category,
      "address": this.address,
      "latitude": this.latitude,
      "longitude": this.longitude
    }

    const formData = new FormData();
    formData.append('storeDto', JSON.stringify(bodyData));
    if (this.uploadImage) {
      formData.append('uploadImage', this.uploadImage);
    }


    this.storeService.saveStore(formData).subscribe({
      next: (resultData: any) => {
      console.log(resultData);
      alert("Store Saved Successfully");

      this.id = '';
      this.name = '';
      this.description = '';
      this.emailAddress = '';
      this.category = '';
      this.address = '';
      this.latitude = '';
      this.longitude = '';
      this.uploadImage = undefined;
      

      this.getAllStores();

    },
    error: (error)=>{
      alert(error);
    }
  });



  }

  editData(store: any) {


    this.id = store.id;
    this.name = store.name;
    this.description = store.description,
      this.emailAddress = store.emailAddress,
      this.category = store.category,
      this.address = store.address,
      this.latitude = store.latitude,
      this.longitude = store.longitude

  }

  updateData() {

    let bodyData = {
      "id": this.id,
      "name": this.name,
      "description": this.description,
      "emailAddress": this.emailAddress,
      "category": this.category,
      "address": this.address,
      "latitude": this.latitude,
      "longitude": this.longitude
    }

    const formData = new FormData();
    formData.append('storeDto', JSON.stringify(bodyData));
    if (this.uploadImage) {
      formData.append('uploadImage', this.uploadImage);
    }

    this.storeService.editStore(formData).subscribe({
      next:(resultData: any) => {
      console.log(resultData);
      alert("Store Updated Successfully");

      this.id = '';
      this.name = '';
      this.description = '';
      this.emailAddress = '';
      this.category = '';
      this.address = '';
      this.latitude = '';
      this.longitude = '';
      this.uploadImage = undefined;
      

      this.getAllStores();

    },
    error: (error)=>{
      alert(error);
    }
  });


  }

  deleteData(store: any) {

    this.storeService.deleteStore(store).subscribe({
      next: (resultData: any) => {
      console.log(resultData);
      alert("Store Deleted Successfully");

      this.getAllStores();

    },
    error: (error: any) => {

      alert(error);

    }
  });


  }

  getAllStores() {

    this.storeService.getAllStore().subscribe({
      next:(resultData: any) => {

      console.log(resultData);

      this.storeList = resultData;

    },
    error: (error: any) => {

      alert(error);

    }
  })

  }

  searchByNameOrCategory(event: any){

    this.storeService.searchByNameOrCat(this.searchText).subscribe({
      next: (resultData: any) => {

      console.log(resultData);
      console.log("-----------------------------");
      this.storeList = [];
      this.storeList = resultData;

    },
    error: (error: any) => {

      alert(error);

    }
  })


  }


  onFileUpload(event: any) {

    this.uploadImage = event.target.files[0];
    
    console.log(this.uploadImage);

  }


  convertBase64Image(buffer: ArrayBuffer): string {
    // const binary = String.fromCharCode(...new Uint8Array(buffer));
    return 'data:image/jpeg;base64,'+buffer;

    // let binary = '';
    // const bytes = new Uint8Array(buffer);
    // const len = bytes.byteLength;
    // for (let i = 0; i < len; i++) {
    //   binary += String.fromCharCode(bytes[i]);
    // }

    // console.log('data:image/jpeg;base64,'+window.btoa(binary));

    // return 'data:image/jpeg;base64,'+window.btoa(binary);



  }

}
