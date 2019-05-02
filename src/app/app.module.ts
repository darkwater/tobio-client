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
import { MediaBrowserComponent } from './media-browser/media-browser.component';
import { MediaEntryComponent } from './media-entry/media-entry.component';

@NgModule({
    declarations: [
        AppComponent,
        SourcesComponent,
        NavComponent,
        MediaBrowserComponent,
        MediaEntryComponent,
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
