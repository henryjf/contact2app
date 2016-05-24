import angular from 'angular';
import 'angular-ui-router';

//import controllers
import { ListController } from './controllers/list.controller';
import { SingleController } from './controllers/single.controller';
import { AddController } from './controllers/add.controller';

//import config
import { config } from './config';

const url = 'https://secret-forest-21470.herokuapp.com/collections/3r45tf/';

angular
  .module('app', ['ui.router'])

  .config(config)//register configuration

  .constant('URL', url)

//register controllers
.controller('ListController', ListController)
.controller('SingleController', SingleController)
.controller('AddController', AddController)
;
