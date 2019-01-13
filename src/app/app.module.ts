import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SourcesComponent } from './sources/sources.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { VideoBrowserComponent } from './video-browser/video-browser.component';
import { VideoEntryComponent } from './video-entry/video-entry.component';

@NgModule({
    declarations: [
        AppComponent,
        SourcesComponent,
        NavComponent,
        VideoBrowserComponent,
        VideoEntryComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        LayoutModule,
        HttpClientModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
