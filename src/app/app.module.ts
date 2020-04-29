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
import { AppChildwithInputComponent } from './03ComponetsCommunications/app-childwith-input/app-childwith-input.component';
import { ParentComponent } from './03ComponetsCommunications/parent/parent.component';
import { NgifstructuraldirectiveComponent } from './04Directive/ngifstructuraldirective/ngifstructuraldirective.component';
import { NgforstructuraldirectiveComponent } from './04Directive/ngforstructuraldirective/ngforstructuraldirective.component';
import { CustomattributedirectiveDirective } from './04Directive/customattributedirective.directive';
import { CustomattributecontainerComponent } from './04Directive/customattributecontainer/customattributecontainer.component';


@NgModule({
  declarations: [
    AppComponent,
    InterpolationDemoComponent,
    PropertybindingDemoComponent,
    PageNotFoundComponent,
    HomeComponent,
    PageHeaderComponent,
    PageFooterComponent,
    twowaydatabinding,
    EventbindingComponent,
    TwowaydatabindingComponent,
    TwowaydatabindingwithoutngModelComponent,
    InputDecoratorComponent,
    AppChildwithInputComponent,
    ParentComponent,
    NgifstructuraldirectiveComponent,
    NgforstructuraldirectiveComponent,
    CustomattributedirectiveDirective,
    CustomattributecontainerComponent,
    EventbindingComponent
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
