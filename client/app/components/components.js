import angular from 'angular';
import PostModule from './post/post.module';
import CommentModule from './comment/comment.module';

const ComponentsModule = angular.module('app.components', [
  PostModule.name, 
  CommentModule.name 
]);

export default ComponentsModule;
