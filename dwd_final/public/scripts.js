$('document').ready(
  function() {
    $.ajax({
      url: "",
      data: {},
      success: function(data) {
        var scr = data.urls.raw;
        console.log(scr);
        $(".backgroundImg").attr('src', scr);
        console.log("successapi");

      },
      error: function(err) {
        alert(err);
      }
    });

    var now = new Date();
    $('#todayDate').html(now.getFullYear() + "_" + (now.getMonth() + 1) + "_" + now.getDate());




  })
