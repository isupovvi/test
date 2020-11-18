import 'bootstrap-css-only';
import 'normalize.css';
import angular from 'angular';
import appComponent from './app.component';

import { postComponent } from './components/post.js';
import { commentComponent } from './components/comment.js';

angular.module('app', [])
  .component('app', appComponent)
  .component('post', postComponent)
  .component('comment', commentComponent)
;
