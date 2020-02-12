import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController, TestRequest} from '@angular/common/http/testing';
import { BestStoriesService } from './best-stories.service';
import {ActivatedRoute, Router} from '@angular/router';



describe('BestStoriesService', () => {
let service:BestStoriesService;
let httpMock: HttpTestingController;
let request: TestRequest;

const expectedIdResponse =[
    22276184,
    22288599,
    22280753,
    22296659,
    22284232,
    22297963,
    22286111,
    22275550,
    22294841
];
const expectedDatasets={
    "by" : "joshuafkon",
    "descendants" : 42,
    "id" : 22294841,
    "kids" : [ 22296186, 22295361, 22295492, 22296013, 22295970, 22296194, 22295360, 22295248, 22295326, 22297196, 22297057 ],
    "score" : 63,
    "time" : 1581380326,
    "title" : "Coronavirus – The Status of the Outbreak and 4 Possible Scenarios",
    "type" : "story",
    "url" : "https://www.cassandracapital.net/post/coronavirus-the-status-of-the-outbreak-and-4-possible-scenarios"
  }


  beforeEach(() => {

    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [
            BestStoriesService,
        ]
    });
    httpMock = TestBed.get(HttpTestingController);
        service = TestBed.get(BestStoriesService);
    });


     it('should be created', () => {
        expect(service).toBeTruthy();
    });
    
    it('call return ids', async () => {
        setTimeout(()=>{
            request=httpMock.expectOne('https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty');
            expect(request.request.method).toBe('GET');
            request.flush(expectedIdResponse);
            httpMock.verify();
        });
        const response = await service.getAllIds();
        expect(response).toEqual(expectedIdResponse);

    });
    it('call return dataset details',async ()=>{
        setTimeout(()=>{
            request=httpMock.expectOne('https://hacker-news.firebaseio.com/v0/item/22294841.json?print=pretty');
            expect(request.request.method).toBe('GET');
            request.flush(expectedDatasets);
            httpMock.verify();
        });
        const response = await service.getDataSets(expectedIdResponse[8]);
        expect(response).toEqual(expectedDatasets);
    })
    
});