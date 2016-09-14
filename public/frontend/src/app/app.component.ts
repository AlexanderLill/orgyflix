import { Component } from '@angular/core';

import { CONSTANTS } from './shared';
import { Logger } from './logger.service';

import { ApiService } from './services/api.service';

@Component({
    selector: 'as-main-app',
    templateUrl: 'app/app.html',
    providers: [ApiService],
})
export class AppComponent {
    public appBrand: string;

    constructor(private logger: Logger, public api: ApiService) {
        this.appBrand = CONSTANTS.MAIN.APP.BRAND;
        logger.log('test');
    }
}
