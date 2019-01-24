import { Routes } from '@angular/router';
import { RootComponent } from '.';

export class RouteShell {
    static withShell(routes: Routes): Routes {
      return [{
        path: '',
        component: RootComponent, // AuthComponent etc...
        children: routes,
        // canActivate: [AuthGuard],
        // ReuseStrategy
        data: { reuse: true }
      }];
    }
}
