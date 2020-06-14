import { Component }     from '@angular/core';
import { RouterService } from 'src/app/utils/router.service';
import { ProjectRoute }  from 'src/app/utils/routes/project.routes';

@Component({
  selector:    'app-projects-all',
  templateUrl: './projects-all.component.html',
  styleUrls:   ['./projects-all.component.scss']
})
export class ProjectsAllComponent {
  displayedColumns: string[] = ['projectId', 'name', 'actions'];
  dataSource: Array<{ projectId: number, name: string }> = [
    { projectId: 1, name: 'Project One' }
  ];

  constructor(private readonly routerService: RouterService) {
  }

  public show(id: number): void {
    this.routerService
        .navigateTo(ProjectRoute.ProjectsDetail, id);
  }
}
