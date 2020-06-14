import { AnotherFeatureRoute } from 'src/app/utils/routes/another-feature.route';
import { ProjectRoute }        from './project.routes';

export type AppRoute =
  ProjectRoute |
  AnotherFeatureRoute;
