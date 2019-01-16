import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VideoEntry } from 'src/app/video-entry';

@Injectable({
    providedIn: 'root'
})
export class RepoService {

    private repoUrl = "http://localhost:5958";

    constructor(private http: HttpClient) { }

    browseVideo(path: string): Observable<BrowseVideoResponse> {
        let url = `${this.repoUrl}/video/${path}`;
        return this.http.get<BrowseVideoResponse>(url);
    }
}

export class BrowseVideoResponse {
    entry?:   VideoEntry;
    crumbs:   string[];
    children: VideoEntry[];
}
