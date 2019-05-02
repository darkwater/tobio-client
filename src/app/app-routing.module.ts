import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MediaBrowserComponent } from 'src/app/media-browser/media-browser.component';

const routes: Routes = [
    { path: "browse", children: [
        { path: "**", component: MediaBrowserComponent },
    ]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
