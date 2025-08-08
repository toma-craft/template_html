// fadein
function showElementAnimation() {

  var element = document.getElementsByClassName('fadein');
  if(!element) return;
  
  var showTiming = window.innerHeight > 768 ? 200 : 40;
  var scrollY = window.pageYOffset;
  var windowH = window.innerHeight;

  for(var i=0;i<element.length;i++) { var elemClientRect = element[i].getBoundingClientRect(); var elemY = scrollY + elemClientRect.top; if(scrollY + windowH - showTiming > elemY) {
      element[i].classList.add('is-show');
    } else if(scrollY + windowH < elemY) {
      element[i].classList.remove('is-show');
    }
  }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);

//ドロワーメニュー展開
jQuery(function ($) {
    var state = false;
    var scrollpos;
   
    $('#menu').on('click', function(){
      if(state == false) {
        scrollpos = $(window).scrollTop();
        $('body').addClass('fixed').css({'top': -scrollpos});
        $('header').addClass('open');
        state = true;
      } else {
        $('body').removeClass('fixed').css({'top': 0});
        window.scrollTo( 0 , scrollpos );
        $('header').removeClass('open');
        state = false;
      }
    });
    $(".main_nav li a").click(function () {
        $('body').removeClass('fixed').css({'top': 0});
        window.scrollTo( 0 , scrollpos );
        $("header").removeClass("open");
        state = false;
    });
});

//スクロールが600に達したらボタン表示
jQuery(function ($) {
    var topBtn = $('.page_top'); 
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});
// アコーディオンのクリックイベント
jQuery(function ($) { 
    $(".list_qa ul li dl dt").on("click", function() {
        $(this).next().slideToggle('fast');
        $(this).toggleClass("open");
    });
});

// スクロールしたらヘッダーのスタイル変更
jQuery(function ($) { 
    var $header = $('.header'); 
    $(window).scroll(function() { 
        if ($(window).scrollTop() >  0) { 
            $header.addClass('scroll'); 
        } else { 
            $header.removeClass('scroll'); 
        } 
    }); 
});

//固定ヘッダー時アンカーリンクの位置を調整＆スムーズスクロール
jQuery(function ($) {
    var windowWidth = $(window).width();
    var spHeaerHeight = (windowWidth / 750)*100;//base_sp: 750
    var pcHeaerHeight = (windowWidth / 1300)*100;//base_pc: 1300
    if (window.matchMedia('(max-width: 750px)').matches) {
        var headerHight = spHeaerHeight;
    } else if (window.matchMedia('(min-width:751px) and (max-width: 1300px)').matches) {
        var headerHight = pcHeaerHeight;
    } else {
        var headerHight = 100;
    }
    $('a[href^="#"]').click(function () {
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? "html" : href);
      var position = target.offset().top - headerHight;
      $("html, body").animate({ scrollTop: position }, 550, "swing");
      return false;
    });
});

//ページ内リンクをスムーズスクロール
/*jQuery(function ($) { 
  $('a[href^="#"]').click(function() {
      var speed = 400;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});
*/

//スマホのホーバーを有効にする
jQuery(function ($) { 
 
    var linkTouchStart = function(){
        thisAnchor = $(this);
        touchPos = thisAnchor.offset().top;
        moveCheck = function(){
            nowPos = thisAnchor.offset().top;
            if(touchPos == nowPos){
                thisAnchor.addClass("hover");
            }
        }
        setTimeout(moveCheck,100);
    }
 
    var linkTouchEnd = function(){
        thisAnchor = $(this);
        hoverRemove = function(){
            thisAnchor.removeClass("hover");
        }
        setTimeout(hoverRemove,500);
    }
 
    $(document).on('touchstart mousedown','a',linkTouchStart);
    $(document).on('touchend mouseup','a',linkTouchEnd);
 
})(jQuery);