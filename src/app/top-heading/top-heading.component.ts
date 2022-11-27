import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-top-heading',
  templateUrl: './top-heading.component.html',
  styleUrls: ['./top-heading.component.css']
})
export class TopHeadingComponent implements OnInit {

  // properti
  judul = "Top Heading";

  constructor(private _service:NewsapiservicesService) {}

  // display data
  topheadingDisplay:any = [];

  ngOnInit(): void {
    
    this._service.topHeading().subscribe((result)=>{
      console.log(result);
      this.topheadingDisplay = result.articles;
    })

  }

}
