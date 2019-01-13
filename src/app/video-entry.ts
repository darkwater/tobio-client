export class VideoEntry {
    crumbs?:  string[];
    entries?: VideoEntry[];

    label: string;

    folderType?: string;
    numEntries?: number;

    fileType?: string;
    url?:      string;
}
