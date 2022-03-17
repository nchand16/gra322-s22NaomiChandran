$('header').waypoint(function(direction) {
    if(direction == 'down'){
      $('header').addClass('header-toggle');
      $('div').css('paddingTop','52px');
    }else{
      $('header').removeClass('header-toggle');
      $('div').css('paddingTop','0');
    }
  });