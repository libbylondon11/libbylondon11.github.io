$('a.thumb').click(function(event){
  event.preventDefault();
  var content = $('.modal-body');
  content.empty();
    var title = $(this).attr("title");
    $('.modal-title').html(title);
    content.html($(this).html());
    $(".modal-profile").modal({show:true});
});

$(document).ready(function () {

$(function(){
    $('#test').click(function(){
        window.location='tdt.html'
    });
});
$(function(){
    $('.tdtClass2').click(function(){
        window.location='tdt.html'
    });
});
$(function(){
    $('.tdtClass').click(function(){
        window.location='tdt.html'
    });
});
$(function(){
    $('.paper').click(function(){
        window.location='paper.html'
    });
});
$(function(){
    $('.naturalDye').click(function(){
        window.location='naturalDye.html'
    });
});
$(function(){
    $('.dyeFarm').click(function(){
        window.location='dyeFarm.html'
    });
});
$(function(){
    $('.shanty').click(function(){
        window.location='shanty.html'
    });
});
$(function(){
    $('.textiles').click(function(){
        window.location='textiles.html'
    });
});
$(function(){
    $('.woadinpot').click(function(){
        window.location='woadDye.html'
    });
});

//
$('#dream').hide()
$('#dream1').hide()
$('#dream2').hide()

$(".glyphicon-plus").click( function() {
      $('#dream').slideToggle('slow');
      $('#dream1').slideToggle('slow');
      $('#dream2').slideToggle('slow');
      $('#demo').slideToggle('slow');

});
$('#bulk').hide()
$('#bulk1').hide()

$(".glyphicon-plus").click( function() {
      $('#bulk').slideToggle('slow');
      $('#bulk1').slideToggle('slow');
      $('#bulkContent').slideToggle('slow');
})

$('#north').hide()
$('#north2').hide()

$(".glyphicon-plus").click( function() {
      $('#north').slideToggle('slow');
      $('#north2').slideToggle('slow');
      $('#nileContainer').slideToggle('slow');
})

$('#pri').hide()
$('#pri1').hide()

$(".glyphicon-plus").click( function() {
      $('#pri').slideToggle('slow');
      $('#pri1').slideToggle('slow');
      $('#permacultureContent').slideToggle('slow');
})

$('#dyed1').hide()
$('#dyed2').hide()

$(".glyphicon-plus").click( function() {
      $('#dyed1').slideToggle('slow');
      $('#dyed2').slideToggle('slow');
      $('#dyed').slideToggle('slow');
})
$('a.thumb').click(function(event){
  event.preventDefault();
  var content = $('.modal-body');
  content.empty();
    var title = $(this).attr("title");
    $('.modal-title').html(title);
    content.html($(this).html());
    $(".modal-profile").modal({show:true});
});
});
/* show lightbox when clicking a thumbnail */
