import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepoService } from 'src/app/repo.service';
import { VideoEntry } from 'src/app/video-entry';

class Crumb {
    label: string;
    path:  string;
}

@Component({
    selector:    'app-video-browser',
    templateUrl: './video-browser.component.html',
    styleUrls:   ['./video-browser.component.scss']
})
export class VideoBrowserComponent implements OnInit {

    path:    string;
    entries: VideoEntry[];
    crumbs:  Crumb[];

    constructor(
        private repoService: RepoService,
        private route:       ActivatedRoute,
    ) {}

    ngOnInit() {
        this.route.url.subscribe(_ => this.getListing());
    }

    getListing() {
        this.path = this.route.snapshot.url.join('/');
        this.repoService.browseVideo(this.path)
            .subscribe(folder => {
                this.entries = folder.entries;

                let crumbs = [];
                var path = '.';
                for(let k in folder.crumbs.reverse()) {
                    let label = folder.crumbs[k];
                    crumbs.unshift({ label, path });
                    path += '/..';
                }

                this.crumbs = crumbs;
            });
    }

}
