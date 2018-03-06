$('document').ready(
  function() {
    $.ajax({
      url: "https://api.unsplash.com/photos/random/?client_id=3089df3f93c3f7fb7da82fbba9824b6bea081430bfbb1b4ec53839413e71be0a&per_page=5&query=motivation",
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
