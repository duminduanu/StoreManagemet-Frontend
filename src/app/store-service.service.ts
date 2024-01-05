import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreServiceService {
  private baseUrl: string;

  constructor(private http : HttpClient) {
    this.baseUrl = "http://localhost:8086/api/store";
   }

   saveStore(data : any){

    return this.http.post(`${this.baseUrl}/save`, data, {responseType:'text'});

   } 
   
   editStore(data : any){

    return this.http.put(`${this.baseUrl}/editStore`, data, {responseType:'text'});

   }
   
   deleteStore(data : any){

    return this.http.delete(`${this.baseUrl}/deleteStore/${data.id}`,{responseType:'text'});

   }
   
   getAllStore(){

    return this.http.get(`${this.baseUrl}/getAllStore`);

   }
   
   searchByNameOrCat(data : any){

    return this.http.get(`${this.baseUrl}/searchByNameOrCategory?name=${data}`);

   }
   

}
