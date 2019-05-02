import { Component, OnInit, Input } from '@angular/core';
import { MediaEntry } from 'src/app/media-entry';

@Component({
    selector: 'app-media-entry',
    templateUrl: './media-entry.component.html',
    styleUrls: ['./media-entry.component.scss']
})
export class MediaEntryComponent implements OnInit {

    @Input() entry: MediaEntry;

    constructor() { }

    ngOnInit() {
        console.log(this.entry);
    }

}
