import 'bootstrap-css-only';
import 'normalize.css';
import angular from 'angular';
import appComponent from './app.component';
import ComponentsModule from './components/components';

import {
  postComponent,
} from './components/post/index.js';

angular.module('app', [
  ComponentsModule.name
]).component('app', appComponent)
  .component('post', postComponent)
;
