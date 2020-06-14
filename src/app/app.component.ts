import { Component }            from '@angular/core';
import { RouterService }       from 'src/app/utils/router.service';
import { AnotherFeatureRoute } from 'src/app/utils/routes/another-feature.route';
import { ProjectRoute }        from 'src/app/utils/routes/project.routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'router-service';

  constructor(private readonly routerService: RouterService) {
  }

  public showProjects(): void {
    this.routerService.navigateTo(ProjectRoute.ProjectsAll);
  }

  public showAnotherFeature() {
    this.routerService.navigateTo(AnotherFeatureRoute.AnotherFeatureRoute);
  }
}
