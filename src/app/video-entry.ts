export class VideoEntry {
    crumbs?:  string[];
    entries?: VideoEntry[];

    key:   string;
    label: string;

    folderType?: string;
    numEntries?: number;

    fileType?: string;
    url?:      string;
}
