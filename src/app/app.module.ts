import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationDemoComponent } from './01componentanddatabinding/interpolation-demo/interpolation-demo.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PropertybindingDemoComponent } from './01componentanddatabinding/propertybinding-demo/propertybinding-demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { PageHeaderComponent } from './core/page-header/page-header.component';
import { PageFooterComponent } from './core/page-footer/page-footer.component';
import { EventbindingComponent } from './01componentanddatabinding/eventbinding/eventbinding.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationDemoComponent,
    PropertybindingDemoComponent,
    PageNotFoundComponent,
    HomeComponent,
    PageHeaderComponent,
    PageFooterComponent,
    EventbindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
