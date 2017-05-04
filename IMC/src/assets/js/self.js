$(function(){
  $('#marsignin').click(function(){
    $('#marketermodal').modal('hide');
  });
  $('#vensignin').click(function(){
    $('#vendormodal').modal('hide');
  });
});

$(document).ready(function () {
    //Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();

    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

        var $target = $(e.target);

        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    $(".prev-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);

    });
});

$(function(){
	$('div.product-chooser').not('.disabled').find('div.product-chooser-item').on('click', function(){
		//$(this).parent().parent().find('div.product-chooser-item').removeClass('selected');
		if(!$(this).hasClass('selected')){
      $(this).addClass('selected');

    }
    else{
      $(this).removeClass('selected');
      $(this).find('input[type="checkbox"]').prop("checked", false);
    }


	});
});



function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}
