import { Component } from '@angular/core';
import { HttpClient , HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :String;
  products : any ;
  results : any ;
  constructor(private http: HttpClient) {
    
  }
  ngOnInit(): void {
    // Making the HTTP Request
    this.http
     .get('http://35.232.17.236:8088/users/4')
     .subscribe(data => {
       this.title = data['nom'];
        this.getProducts();
     })
  }
  getProducts() {
    this.http
    .get('http://35.232.17.236:8888/products')
    .subscribe(data => {
      
      this.products = data['_embedded']['products'];
       console.log(this.products);
      
    })
 }
 send()
 {
    

   const body = new HttpParams()
  .set('libelle', 'foo')
  .set('prix', '100')
    this.http.post('http://35.232.17.236:8888/products',FormData).subscribe((res) => {
      console.log(res);
     });
 }

}
