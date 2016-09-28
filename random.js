$(function () {
  var run = 0,
      heading = $("h1"),
      timer;

  var list = localStorage.getItem("list");
  list = list ? list: localStorage.setItem("list", "可乐 雪碧 王老吉 加多宝 红牛 醋 酱油 芥末 苦瓜水 墨鱼汁 白开水");
  list = localStorage.getItem("list");
  $("#list").text(list);


  var detail = localStorage.getItem("detail");
  detail = detail ? detail: localStorage.setItem("detail", "一路琼浆 翻将倒嗨 一味深长 ");
  detail = localStorage.getItem("detail");
  $("#detail").text(detail);


  $("#start").click(function () {
      var list = $("#list").val().replace(/ +/g, " ").replace(/^ | $/g, "").split(" ");
      if (!run) {
          heading.html(heading.html().replace("喝这个！", "喝什么？"));
          $(this).val("停止");
          timer = setInterval(function () {
              var r = Math.ceil(Math.random() * list.length),
                  food = list[r - 1];
              $("#what").html(food);
              var rTop = Math.ceil(Math.random() * $(document).height()),
                  rLeft = Math.ceil(Math.random() * ($(document).width() - 50)),
                  rSize = Math.ceil(Math.random() * (37 - 14) + 14);
              $("<span class='temp'></span>").html(food).hide().css({
                  "top": rTop,
                  "left": rLeft,
                  "color": "rgba(0,0,0,." + Math.random() + ")",
                  "fontSize": rSize + "px"
              }).appendTo("body").fadeIn("slow", function () {
                  $(this).fadeOut("slow", function () {
                      $(this).remove();
                  });
              });
          }, 50);
          run = 1;
      } else {
         heading.html(heading.html().replace("喝什么？", "喝这个！"));
          $(this).val("不行，换一个");
          clearInterval(timer);
          run = 0;
      };
  });

  document.onkeydown = function enter(e) {
      var e = e || event;
      if (e.keyCode == 13) $("#start").trigger("click");
  };
});
