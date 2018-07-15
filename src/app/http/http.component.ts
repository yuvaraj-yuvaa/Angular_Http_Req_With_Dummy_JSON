import { Component, OnInit } from '@angular/core';
import { HttpServiceService} from '../http-service.service'

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  postData: any;
  constructor(private httpService: HttpServiceService) { }
    getHttpservice(dummmyValue):void {
      this.httpService.getTestPost(dummmyValue)
        .subscribe(
          resultData => {
            this.postData = resultData;
            this.postData.forEach((element,index) => {
              //console.log(element);
              //console.log(index);
            });
            console.log(this.postData);
          },
          error => console.log("Error ::" + error)
        )
    }

  ngOnInit(): void {
    this.getHttpservice("/posts");
    this.getHttpservice("/comments")
  }

}
