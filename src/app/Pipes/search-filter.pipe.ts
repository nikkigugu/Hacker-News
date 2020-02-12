import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name:'searchFilter',
    pure: false
  })
export class SearchFilter implements PipeTransform {
//filter data according to search input for authors
    transform(authors:any[],searchText: string) : any[] {

        if(!authors) return [];
        if(!searchText) return authors;
        return authors.filter(author =>{
          console.log('Text :', searchText);
          return author.by.toLowerCase().includes(searchText);
        });
}
}