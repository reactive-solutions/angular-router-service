import { Injectable }             from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppRoute }               from 'src/app/utils/routes/app.routes';
import { environment }            from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private readonly router: Router) {
  }

  // TODO: enable multiple params

  public navigateTo(route: AppRoute, param: string | number = null): void {
    const targetRoute: string[] = this.buildRouteWithParam(route, param);
    if (targetRoute === undefined) {
      this.navigateToNotFound();
      return;
    }

    this.routeToTarget(targetRoute);
  }

  public navigateRelative(route: AppRoute, activatedRoute: ActivatedRoute): void {
    this.routeRelativeToTarget(route, activatedRoute);
  }

  private routeToTarget(route: string[]): void {
    this.router
        .navigate(route)
      // tslint:disable-next-line:no-any
        .catch((e: any) => {
          // tslint:disable-next-line:no-console

          if (!environment.production) {
            console.log(e);
          }

          this.navigateToNotFound();
        });
  }

  private routeRelativeToTarget(route: string, activatedRoute: ActivatedRoute): void {

    this.router
        .navigate([`./${ route }`], {
          relativeTo: activatedRoute
        })
      // tslint:disable-next-line:no-any
        .catch((e: any) => {
          // tslint:disable-next-line:no-console

          if (!environment.production) {
            console.log(e);
          }

          this.navigateToNotFound();
        });
  }

  private navigateToNotFound(): void {
    this.router.navigate(['/page-not-found']).catch(() => { /* TODO: handle */ });
  }

  private buildRouteWithParam(routeSelector: AppRoute, param: string | number): string[] {
    const route = routeSelector?.toString()
                               ?.replace(':id', param?.toString());

    return route?.split('/');
  }
}
