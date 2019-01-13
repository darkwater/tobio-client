import { Component, OnInit } from '@angular/core';
import { RepoService } from 'src/app/repo.service';

@Component({
    selector: 'app-sources',
    templateUrl: './sources.component.html',
    styleUrls: ['./sources.component.scss']
})
export class SourcesComponent implements OnInit {

    sources: string[];

    constructor(private repoService: RepoService) { }

    ngOnInit() {
        // this.getSources();
    }

    getSources() {
        // this.repoService.getSources()
        //     .subscribe(sources => this.sources = sources);
    }
}
