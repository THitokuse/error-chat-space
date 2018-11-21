$(document).on("turbolinks:load", function() {
  function appendUsers(user) {
    var html =
      '<div class="chat-group-user">' +
      '<p class="chat-group-user__name">' +
      user.name +
      '</p>' +
      '<p class="chat-group-user__btn chat-group-user__btn--add" data-id = ' + user.id + '>' +
      '追加' +
      '</p>' +
      '</div>';
    return html;
  }

  $(function() {
    $(".chat-group-form__input").on("keyup", function() {
      $("#user-search-result").children().remove();
      var user = $("#user-search-field").val();
      console.log(user);
        $.ajax({
          type: 'GET',
          url: '/users',
          data: { user: user },
          dataType: 'json'
        })
      .done(function(users) {
          $("#user_search_result").empty();
            if (users.length !== 0) {
              users.forEach(function(user){
                var html = appendUsers(user);
                $('#user-search-result').append(html);
              })
            }
         })
      .fail(function() {
        console.log('ユーザー検索に失敗しました');
      });
    });
  });
});
