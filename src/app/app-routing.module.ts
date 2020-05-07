import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterpolationDemoComponent } from './01componentanddatabinding/interpolation-demo/interpolation-demo.component';
import { PropertybindingDemoComponent } from './01componentanddatabinding/propertybinding-demo/propertybinding-demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { EventbindingComponent } from './01componentanddatabinding/eventbinding/eventbinding.component';
import { TwowaydatabindingComponent } from './01componentanddatabinding/twowaydatabinding/twowaydatabinding.component';
import { TwowaydatabindingwithoutngModelComponent } from './01componentanddatabinding/twowaydatabindingwithoutng-model/twowaydatabindingwithoutng-model.component';
import { InputDecoratorComponent } from './03ComponetsCommunications/input-decorator/input-decorator.component'
import { NgifstructuraldirectiveComponent } from './04Directive/ngifstructuraldirective/ngifstructuraldirective.component';
import { NgforstructuraldirectiveComponent } from './04Directive/ngforstructuraldirective/ngforstructuraldirective.component';
import { CustomattributecontainerComponent } from './04Directive/customattributecontainer/customattributecontainer.component';
import { NodemodeComponent } from './05ViewEncapsulation/nodemode/nodemode.component';
import { ShadowDomModeComponent } from './05ViewEncapsulation/shadow-dom-mode/shadow-dom-mode.component';
import { EmulatedmodeComponent } from './05ViewEncapsulation/emulatedmode/emulatedmode.component';
const routes: Routes = [
  { path: 'interpolation', component: InterpolationDemoComponent },
  { path : 'propertybinding', component : PropertybindingDemoComponent},
  { path : 'eventbinding', component: EventbindingComponent},
  { path : 'twowaydatabinding', component : TwowaydatabindingComponent},
  { path : 'twowaydatabindingwithoutNgmodel', component: TwowaydatabindingwithoutngModelComponent },
  { path : 'inputDecorator', component: InputDecoratorComponent},
  { path : 'ngifStdirective', component : NgifstructuraldirectiveComponent },
  { path : 'ngforStdirective', component : NgforstructuraldirectiveComponent },
  { path : 'Customattributedirective', component : CustomattributecontainerComponent},
  { path : 'Nonemode', component: NodemodeComponent },
  { path : 'shadowmode', component: ShadowDomModeComponent},
  {path  :  'emulatedmode', component: EmulatedmodeComponent},
  { path : 'home', component : HomeComponent },
  { path : '', redirectTo: 'home', pathMatch: 'full'},
  { path : '**', component : PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
