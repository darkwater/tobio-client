export class BrowseResponse {
    crumbs:   Crumb[];
    children: MediaEntry[];
}

export class Crumb {
    label: string;
    path:  string;
}

export class MediaEntry {
    crumbs:   string;
    filename: string;
}
