export enum ProjectRoute {
  Projects     = 'projects',
  ProjectsAll  = 'projects/all',
  ProjectsDetail = 'projects/:id',
  ProjectsContent = 'projects/:id/content',

  // TODO: split absolute and relative routes
  All  = 'all',
  Content = 'content'
}
