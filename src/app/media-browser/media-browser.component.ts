import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepoService } from 'src/app/repo.service';
import { MediaEntry, Crumb } from 'src/app/media-entry';

@Component({
    selector:    'app-media-browser',
    templateUrl: './media-browser.component.html',
    styleUrls:   ['./media-browser.component.scss']
})
export class MediaBrowserComponent implements OnInit {

    path:        string;
    // entry:       VideoEntry;
    crumbs:      Crumb[];
    crumbsEmpty: boolean;
    children:    MediaEntry[];

    constructor(
        private repoService: RepoService,
        private route:       ActivatedRoute,
    ) {}

    ngOnInit() {
        this.route.url.subscribe(_ => this.getListing());
    }

    getListing() {
        this.path = this.route.snapshot.url.join('/');
        this.repoService.browse(this.path)
            .subscribe(folder => {
                this.crumbsEmpty = folder.crumbs.length == 0;
                this.crumbs      = folder.crumbs.map(c => {
                    return {
                        path: "/browse" + c.path,
                        label: c.label,
                    }
                });

                this.children = folder.children.sort((a, b) => {
                    if (a.folder != b.folder) {
                        return -a.folder - -b.folder;
                    }

                    return a.filename.localeCompare(b.filename);
                });
            });
    }

}
