import angular from 'angular';
import CommentModule from './comment/comment.module';

const ComponentsModule = angular.module('app.components', [
  CommentModule.name 
]);

export default ComponentsModule;
