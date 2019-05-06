export class BrowseResponse {
    crumbs:   Crumb[];
    children: MediaEntry[];
}

export class Crumb {
    label: string;
    path:  string;
}

export class MediaEntry {
    folder:   boolean;
    crumbs:   string;
    filename: string;
}
