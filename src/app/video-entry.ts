export class VideoEntry {
    entryType: string;
    key:       string;
    label:     string;
    url?:      string;
    extra?:    VideoEntryExtra;
}

export class VideoEntryExtra {
    progress: number;
}
