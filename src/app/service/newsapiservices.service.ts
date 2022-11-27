import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // baru


@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  // news api url
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=44071eb9502e4f20afac64142d37cd26";
  
  // tech news api
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=44071eb9502e4f20afac64142d37cd26"

  // headline / business
  businessApiUrl = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=44071eb9502e4f20afac64142d37cd26"

  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }

  techNews():Observable<any>
  {
    return this._http.get(this.techApiUrl);
  }

  businessNews():Observable<any>
  {
    return this._http.get(this.businessApiUrl);
  }

  
}
