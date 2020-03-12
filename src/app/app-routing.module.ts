import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterpolationDemoComponent } from './01componentanddatabinding/interpolation-demo/interpolation-demo.component';
import { PropertybindingDemoComponent } from './01componentanddatabinding/propertybinding-demo/propertybinding-demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { EventbindingComponent } from './01componentanddatabinding/eventbinding/eventbinding.component';

const routes: Routes = [
  { path: 'interpolation', component: InterpolationDemoComponent },
  { path : 'propertybinding', component : PropertybindingDemoComponent},
  { path : 'eventbinding', component: EventbindingComponent},
  { path : 'home', component : HomeComponent },
  { path : '', redirectTo: 'home', pathMatch: 'full'},
  { path : '**', component : PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
