$(function() { // 보이기 | 숨기기
	$(window).scroll(function() {
    if ($(this).scrollTop() > 250) { //250 넘으면 버튼이 보여짐니다. 
      $('#topBtn').fadeIn();
    } else {
      $('#topBtn').fadeOut();
    }
  }); // 버튼 클릭시 
  $("#topBtn").click(function() { 
  	$('html, body').animate({ scrollTop : 0 // 0 까지 animation 이동합니다. 
  	}, 400); // 속도 400 
    return false; 
  });

  //연락처 복사설정
  //contact me-copied 복사하기
  function copyToClipboard(val) {
      var t = document.createElement("textarea");
      document.body.appendChild(t);
      t.value = val;
      t.select();
      document.execCommand('copy');
      document.body.removeChild(t);
  }
  $('.contact').find("#emailAddress").on("click",function () {
      $(".copied").fadeIn().promise().done(function(){
          this.fadeOut();
      })
      copyToClipboard('harteh31@gmail.com')
      
  });
  

  // 모달 설정
/*   var sjModal = function(){
    $body = $('body');
    $modalWrap = $('.modal_wrap');

    $('.open_modal').on('click',function(){
      $body.addClass('modal_in');
      $modalWrap.fadeIn(300);
      $body.css('padding-right',getScrollWidth());
    });

    $('.close_btn, .modal_dim').on('click',function(){
      var speed = 300;
      $modalWrap.fadeOut(speed);
      setTimeout(function(){
        $body.removeClass('modal_in');
        $body.css('padding-right',0)
      },speed)
    });

    function getScrollWidth(){
      var body = document.querySelector('body');
        var scrollDiv = document.createElement('div');
          scrollDiv.className = 'fake_sjwidth';
          body.appendChild(scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

          body.removeChild(scrollDiv);
          return scrollbarWidth;
    }
  }(); */
  //모달 설정 End


});