import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SectorService{
    private serviceUrl:string = '/Sectors.yaml';

    constructor(private http:Http){}
    
    set sectorFileName(newValue:string){
        this.serviceUrl = newValue;
    }
    get sectorFileName(){
        return this.serviceUrl;
    }
    
    getSectors(){
        return this.http.get(this.serviceUrl)
            .do(data => console.log(data));
    }
    
}