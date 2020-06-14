import { NgModule }              from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { ProjectRoute }          from 'src/app/utils/routes/project.routes';


const routes: Routes = [
  {
    path:      'page-not-found',
    component: PageNotFoundComponent
  },
  {
    path:         ProjectRoute.Projects,
    loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
