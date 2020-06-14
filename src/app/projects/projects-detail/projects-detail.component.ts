import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { RouterService }     from 'src/app/utils/router.service';
import { ProjectRoute }      from 'src/app/utils/routes/project.routes';

@Component({
  selector: 'app-projects-detail',
  templateUrl: './projects-detail.component.html',
  styleUrls: ['./projects-detail.component.scss']
})
export class ProjectsDetailComponent implements OnInit {
  public id: string;

  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly routerService: RouterService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  public revealContent(): void {
    this.routerService.navigateRelative(ProjectRoute.Content, this.activatedRoute);
  }
}
