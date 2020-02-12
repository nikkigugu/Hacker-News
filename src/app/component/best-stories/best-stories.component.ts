import { Component, OnInit } from '@angular/core';
import {BestStoriesService} from "./best-stories.service";
import _ from 'lodash';

@Component({
  
  selector: 'app-best-stories',
  templateUrl: './best-stories.component.html',
  styleUrls: ['./best-stories.component.css']
})

export class BestStoriesComponent implements OnInit {

  public response:object[]= new Array;
  public searchText: string;


  constructor(public bestStoriesService:BestStoriesService){}

  ngOnInit(): void {
  this.getAllId();
  }
 
   getAllId(){
     this.bestStoriesService.pullData(this.response);
     console.log("response from ", this.response);
    
  }

}
