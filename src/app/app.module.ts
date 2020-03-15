import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
import { TwowaydatabindingComponent } from './01componentanddatabinding/twowaydatabinding/twowaydatabinding.component';
import { TwowaydatabindingwithoutngModelComponent } from './01componentanddatabinding/twowaydatabindingwithoutng-model/twowaydatabindingwithoutng-model.component';
import { InputDecoratorComponent } from './03ComponetsCommunications/input-decorator/input-decorator.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationDemoComponent,
    PropertybindingDemoComponent,
    PageNotFoundComponent,
    HomeComponent,
    PageHeaderComponent,
    PageFooterComponent,
    EventbindingComponent,
    TwowaydatabindingComponent,
    TwowaydatabindingwithoutngModelComponent,
    InputDecoratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
