import angular from 'angular';
import 'angular-ui-router';

import { ListController } from './controllers/list.controller';
import { SingleController } from './controllers/single.controller';
import { AddController } from './controllers/add.controller';

import { config } from './config';

angular
  .module('app', [])

  .config(config)


.controller('ListController', ListController)
.controller('SingleController', SingleController)
.controller('AddController', AddController)
;
