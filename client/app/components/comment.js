import angular from 'angular';

let commentComponent = {
  restrict: 'E',
  bindings: {},
  template: `
    <div style="font-size: 14px;">
        <div style="text-align: left; padding-left: 8px; padding-bottom: 8px;">
            <form name="commentPost">
                <input name="commentValue" type="text" />
                <button onclick=submitComment(comments, commentPost, commentValue)>Отправить</button>
            </form>
        </div>
        <div ng-repeat="comment in comments">
            <div style="border: 0.5px solid black; margin-left: 16px; padding-left: 8px; text-align: left; padding-bottom: 8px;">
                <p>{{comment.title}}</p>
                <div>
                    <form name="answer">
                        <input name="answerValue" type="text" />
                        <button>Отправить</button>
                    </form>
                </div>
                <div ng-if="comment.answers.length !== 0">
                    <comment></comment>
                </div>
            </div>
        </div>
    </div>
    `,
  controller: CommentController,
  controllerAs: 'CommentCtrl',
};

CommentController.$inject = ["$scope"];
function CommentController ($scope) {
    $scope.comments = [
        {
            title: 'guest',
            answers: [],
        },
        {
            title: 'guest2',
            answers: [],
        }
    ];

    $scope.submitComment = function (comments, form, fieldName) {
        comments.push({title: form[fieldName], answers: []})
    }
}

export {
  commentComponent,
  CommentController,
}
