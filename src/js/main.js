import angular from 'angular';
import 'angular-ui-router';

//import controllers
import { ListController } from './controllers/list.controller';
import { SingleController } from './controllers/single.controller';
import { AddController } from './controllers/add.controller';

//import config
import { config } from './config';
//assign url to a constant
const url = 'https://secret-forest-21470.herokuapp.com/collections/345ertsdf/';

angular
  .module('app', ['ui.router'])//module setter (register)

  .config(config)//register configuration

  .constant('URL', url)//app URL constant

//register controllers
.controller('ListController', ListController)
.controller('SingleController', SingleController)
.controller('AddController', AddController)
;
