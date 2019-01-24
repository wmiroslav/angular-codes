
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './index';
import { AboutComponent } from './index';
// import { RootComponent } from './index';
import { RouteShell } from './routeShell';



const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];
const routesWithShell = RouteShell.withShell(routes);


@NgModule({
  imports: [RouterModule.forChild(routesWithShell)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }

// standard way:
// const routes: Routes = [
//   {
//     path: '',
//     component: RootComponent,
//     children: [
//       {
//         path: '',
//         component: HomepageComponent
//       },
//       {
//         path: 'about',
//         component: AboutComponent
//       }
//     ]
//   },
//   {
//     path: '**',
//     redirectTo: ''
//   }
// ];