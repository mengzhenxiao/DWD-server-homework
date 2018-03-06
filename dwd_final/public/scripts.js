
$('document').ready(
  function() {
    var now = new Date();
    $('#todayDate').html(now.getFullYear() +"_"+(now.getMonth() + 1)  +"_" + now.getDate() );

  })
