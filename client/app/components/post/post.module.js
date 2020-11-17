import angular from 'angular';
import postComponent from './post.component';

const postModule = angular.module('post', [])
  .component('post', postComponent);
export default postModule;