import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddrawmatComponent } from './rawmat/addrawmat-component/addrawmat-component';

import { RawmatListComponent } from './rawmat/rawmat-list-component/rawmat-list-component';
import { EditRawmatComponent } from './rawmat/edit-rawmat.component/edit-rawmat.component';

@NgModule({
  declarations: [
    App,
    AddrawmatComponent,
    
    RawmatListComponent,
          EditRawmatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      withFetch()
    )
  ],
  bootstrap: [App]
})
export class AppModule { }
