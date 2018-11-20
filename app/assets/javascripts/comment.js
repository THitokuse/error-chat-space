$(function() {
  function buildHTML(message){
    var addimage = '';
    if(message.image) {
      addimage = `<img class="chat-content__image" src="${message.image}">`
    }
    var html = `<li class="chat-content">
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
                    ${ addimage }
                  </div>
                </li>`;
    return html;
  }

  $('.msg_form').on('submit', function(e){
    //フォームのsubmitイベントを中止
    e.preventDefault();
    //ajaxでリクエストを送る際のパスを取得
    var url = window.location.pathname;
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
      var html = buildHTML(message);
      $('.chat-contents').append(html);
      $('.chat-body').animate({scrollTop: $(".chat-body")[0].scrollHeight}, 'fast');
      $('.chat-footer__text').add('.hidden').val('');
      $('.send').prop('disabled', false);
    })
    .fail(function(){
      alert('自動送信でエラーが発生しました。');
      $('.chat-footer__text').add('.hidden').val('');
    })
  })
})
