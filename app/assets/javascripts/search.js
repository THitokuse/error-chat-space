
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
      console.log("成功");
       })
    .fail(function() {
      console.log('ユーザー検索に失敗しました');
    });
  });
});
