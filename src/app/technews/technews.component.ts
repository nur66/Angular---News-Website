import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent {

  judul = "Top Technology";

  constructor(private _service:NewsapiservicesService){}

  technewsDisplay:any = [];
  ngOnInit(): void{
    this._service.techNews().subscribe((result)=>{
      this.technewsDisplay = result.articles;
    });
  }

}
