$(function() {
  function buildHTML(message){
    var addImage = (message.image) ? `<img class="chat-content__image" src="${message.image}">` : '';
    var html = `<div class="chat-content" data-message-id="${message.id}">
                  <div class="chat-content__header">
                    <div class="chat-content__name">
                      ${ message.user_name }
                    </div>
                    <div class="chat-content__time">
                      ${ message.date }
                    </div>
                  </div>
                  <div class="chat-content__message">
                    ${ message.content }<br/><br/>
                    ${ addImage }
                  </div>
                </div>`;
    return html;
  }

  //メッセージ非同期通信
  $('.msg_form').on('submit', function(e){
    //フォームのsubmitイベントを中止
    e.preventDefault();
    //ajaxでリクエストを送る際のパスを取得
    var url = $(this).attr('action');
    //フォームに入力された値を取得
    var formData = new FormData($(this).get()[0]);

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      console.log(message);
      //保存したデータをview画面に表示
      var html = buildHTML(message);
      $('.chat-contents').append(html);
      //画面スクロール
      $('.chat-body').animate({scrollTop: $(".chat-body")[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      alert('自動送信でエラーが発生しました。');
    })
    .always(function(){
      //フォームの初期化
      $('.chat-footer__text').val('');
      $('.hidden').val('');
      //submitボタンの有効化
      $('.send').prop('disabled', false);
    })
  })

  //自動更新
  function update() {
    //更新されたメッセージID取得
    var lastMessageId = ($('.chat-content')[0]) ? $('.chat-content:last').data('message-id') : 0;
    $.ajax({
      url: location.href,
      data: { id : lastMessageId },
      dataType: 'json'
    })
    .done(function(messages) {
      if (messages.length){
        $.each(messages, function(i, messages){
          var html = buildHTML(messages);
          $('.chat-contents').append(html)
        })
      }
    })
    .fail(function() {
      alert('自動更新に失敗しました');
    });
  };

  //5秒ごとに自動更新を行う
  setInterval(update, 5000);
});
