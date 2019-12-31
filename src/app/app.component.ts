import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
  results : any ;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    // Making the HTTP Request
    this.http
     .get('http://35.194.28.13:8088/users/1')
     .subscribe(data => {
       this.title = data['nom'];
      // this.title=data['results']['nom'];
       console.log(data);
     })
  }
 
}
