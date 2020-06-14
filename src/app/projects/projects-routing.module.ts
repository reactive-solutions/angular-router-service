import { NgModule }                 from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';
import { ProjectsAllComponent }     from 'src/app/projects/projects-all/projects-all.component';
import { ProjectsContentComponent } from 'src/app/projects/projects-content/projects-content.component';
import { ProjectsDetailComponent }  from 'src/app/projects/projects-detail/projects-detail.component';
import { ProjectsComponent }        from 'src/app/projects/projects.component';
import { ProjectRoute }             from 'src/app/utils/routes/project.routes';


const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path:        ProjectRoute.All,
        component:   ProjectsAllComponent
      },
      {
        path:      ':id',
        component: ProjectsDetailComponent,
        children: [
          {
            path:        'content',
            component:   ProjectsContentComponent
          },
          {
            path: '**',
            redirectTo: ''
          }
        ]
      },
      {
        path: '**',
        redirectTo: ProjectRoute.All
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
