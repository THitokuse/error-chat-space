$(function() {
  function appendUsers(user) {
    var html = `<div class="chat-group-user">
                  <p class="chat-group-user__name">
                    ${ user.name }
                  </p>
                  <p class="chat-group-user__btn chat-group-user__btn--add" data-id = ${ user.id } data-name = ${ user.name }>
                    追加
                  </p>
                </div>`;
    $('#user-search-result').append(html);
  }

  function notUser() {
    var html = `<div class="chat-group-user">
                  <p class="chat-group-user__name">
                    検索結果はありません。
                  </p>
                </div>`;
    $('#user-search-result').append(html);
  }

  function appendMembers(user_name, user_id) {
    var html = `<div class="chat-group-user">
                  <input type = "hidden", value = ${ user_id }, name = "group[user_ids][]", id ="group_user_ids_${user_id}">
                  <p class="chat-group-user__name">
                    ${user_name}
                  </p>
                  <p class="chat-group-user__btn chat-group-user__btn--remove">
                    削除
                  </p>
                </div>`;
    $('#chat-group-users').append(html);
  }

  //インクリメンタルサーチ開始
  $(function() {
    $(".chat-group-form__input").on("keyup", function() {
      $("#user-search-result").children().remove();
      var user = $("#user-search-field").val();
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
              })
            } else {
              var html = notUser();
            }
         })
      .fail(function() {
        alert('ユーザー検索に失敗しました');
      });
    });
  });

  // ユーザーを追加
  $(function() {
    $("#user-search-result").on("click", ".chat-group-user__btn--add", function() {
      var user_name = $(this).data('name');
      var user_id = $(this).data('id');
      $(this).parent().remove();
      var html = appendMembers(user_name, user_id);
    });

    // ユーザーを削除
    $("#chat-group-users").on("click", ".chat-group-user__btn--remove", function(){
      $(this).parent().remove();
    });
  });
});
