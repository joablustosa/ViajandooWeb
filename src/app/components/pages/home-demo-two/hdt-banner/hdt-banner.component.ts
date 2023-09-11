import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hdt-banner',
    templateUrl: './hdt-banner.component.html',
    styleUrls: ['./hdt-banner.component.scss']
})
export class HdtBannerComponent implements OnInit {

    datePickerConfig = {
        format: 'YYYY-MM-DD'
    };

    constructor() { }

    ngOnInit(): void {}

}