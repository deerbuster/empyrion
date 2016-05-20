import { Component } from '@angular/core';
import {SectorComponent} from './sector/sector.component';
import 'rxjs/Rx';

@Component({
    selector: 'my-app',
    directives:[SectorComponent],
    template: `
        <h1>Empyrion Editor</h1>
        <sector-component>Loading component...</sector-component>
    `
})
export class AppComponent { }