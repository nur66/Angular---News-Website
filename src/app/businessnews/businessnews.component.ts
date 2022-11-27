import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent implements OnInit {

  judul = "Top Bussiness";

  constructor(private _service:NewsapiservicesService){}

  businessDisplay:any = [];
  ngOnInit(): void{
    // sesuai nama yang ada di service
    this._service.businessNews().subscribe((result)=>{
      this.businessDisplay = result.articles;
    });
  }

}
