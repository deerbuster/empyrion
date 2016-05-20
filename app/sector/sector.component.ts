import { Component,OnInit }        from '@angular/core';
import { SectorService }    from './sector.service';

@Component({
    selector:       'sector-component',
    providers:      [SectorService],
    templateUrl:    'app/sector/sector.component.html'
})
export class SectorComponent implements OnInit{
    sectorData;
    errorMessage:string;
    
    constructor(private sectorService:SectorService){}
    
    ngOnInit(){
        this.sectorService.getSectors()
            .subscribe(
                results => this.sectorData = results,
                error => this.errorMessage = <any>error,
                () => {
                    
                }
            )
    }
}