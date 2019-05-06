import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrowseResponse } from 'src/app/media-entry';

@Injectable({
    providedIn: 'root'
})
export class RepoService {

    private repoUrl = "http://172.24.0.3:5958";

    constructor(private http: HttpClient) { }

    browse(path: string): Observable<BrowseResponse> {
        let url = `${this.repoUrl}/browse/${path}`;
        return this.http.get<BrowseResponse>(url);
    }
}
