$(function() {
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
      console.log(message);
      $('.chat-footer__text').add('.hidden').val('');
      $('.send').prop('disabled', false);
    })
    .fail(function(){
      console.log("error");
      $('.chat-footer__text').add('.hidden').val('');
    })
  })
})
