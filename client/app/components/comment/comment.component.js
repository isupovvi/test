import template from './comment.component.html';
import controller from './comment.controller.js';
import './comment.component.css';

let commentComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'commentController'
};
export default commentComponent;