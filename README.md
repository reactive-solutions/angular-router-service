# router-service

Sample for painless routing via a single router service, and the use of enums to prevent repeating route strings cross the whole app.

## Routes
Define your routes per feature

``` typescript
export enum ProjectRoute {
  Projects     = 'projects',
  ProjectsAll  = 'projects/all',
  ProjectsDetail = 'projects/:id',
  ProjectsContent = 'projects/:id/content',

  // TODO: split absolute and relative routes
  All  = 'all',
  Content = 'content'
}

export enum AnotherFeatureRoute {
  AnotherFeatureRoute     = 'another-feature',
}
```

and then export them as type to use in router service.

``` typescript
export type AppRoute =
  ProjectRoute |
  AnotherFeatureRoutes;
```

## Router Service

Now you can call all your feature routes with the router service

``` typescript
public navigateTo(route: AppRoute, param: string | number = null): void {
...
}
```

like this

``` typescript
this.routerService.navigateTo(ProjectRoute.ProjectsAll);
```

The RouterService can be expanded with other functions like multi parameter or other relative routing
