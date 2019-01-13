import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoBrowserComponent } from 'src/app/video-browser/video-browser.component';

const routes: Routes = [
    { path: "video", children: [
        { path: "**", component: VideoBrowserComponent },
    ]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
