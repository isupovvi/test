import angular from 'angular';

let postComponent = {
  restrict: 'E',
  bindings: {},
  template: `
  <div style="text-align: center;">
    <p style="font-size: 24px;">{{post.title}}</p>
    <p style="font-size: 14px;">{{post.value}}</p>
    <div>
      <comment></comment>
    </div>
  </div>`,
  controller: PostController,
  controllerAs: 'postCtrl',
};

PostController.$inject = ["$scope"];
function PostController ($scope) {
  $scope.post = {title: 'guest', value: 'visitor'};
}

export {
  postComponent,
  PostController,
}
