import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class BestStoriesService {
  public id:any;
  public hackers:object[];
  
  constructor(
    private http: HttpClient
  ) {


  }

  //Looping through each id to pull specific properties
  public pullData(array:object[]){
    this.getAllIds().then(
      (Ids)=>{
        _.forEach(Ids,(id) => {
          this.getDataSets(id).then((response)=>{
            array.push(response);
          });
        });
      }
    );
  }

//Pulling all the id's that have best stories  
public async getAllIds(){
    let url= 'https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty';
    return await this.http.get(url).toPromise();
}

//Getting the properties for each id
public async getDataSets(id:number) {
    let url=`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;


    return await this.http.get(url).toPromise();

  }
}
