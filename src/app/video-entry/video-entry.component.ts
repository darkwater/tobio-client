import { Component, OnInit, Input } from '@angular/core';
import { VideoEntry } from 'src/app/video-entry';

@Component({
    selector: 'app-video-entry',
    templateUrl: './video-entry.component.html',
    styleUrls: ['./video-entry.component.scss']
})
export class VideoEntryComponent implements OnInit {

    @Input() entry: VideoEntry;

    constructor() { }

    ngOnInit() {
        console.log(this.entry);
    }

}
