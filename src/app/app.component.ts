import { HttpClient } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  a: any = [];
  b: any = [];
  constructor(private http: HttpClient) {
    this.http.get('https://api.publicapis.org/entries').subscribe((data) => {
      this.a = data['entries'];
      console.log(this.a);
      // for (let x of this.a) {
      //   this.b.push(x.Category)
      //   console.log(this.b)
      //   this.b.filter(x=> {

      //   })
      }
    });
  }
}
