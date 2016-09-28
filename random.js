$(function () {
  var run = 0,
      heading = $("h1"),
      timer;

  var title = localStorage.getItem("title");
  title = title ? title: localStorage.setItem("title", "中午我要吃");
  title = localStorage.getItem("title");
  $("#title").text(title);

  var list = localStorage.getItem("list");
  list = list ? list: localStorage.setItem("list", "食堂走起 食堂走起 食堂走起 今天减肥 今天减肥 便利店盒饭 便利店饭团 便利店寿司 点外卖 咖喱饭 味千拉面 龙虾盖饭 咬不得 甘其食 老娘舅 外婆家 潮虾 牛肉火锅 台湾锅 麻辣烫 肯德基 麦当劳 鲈鱼 烤鱼 伊川寿司 东北水饺 凉皮 必胜客 沙县小吃 小杨生煎 吉火冷面石锅拌饭 刘一手火锅 兰州拉面 泡面 ");
  list = localStorage.getItem("list");
  $("#list").text(list);


  var detail = localStorage.getItem("detail");
  detail = detail ? detail: localStorage.setItem("detail", "午饭选择困难户们的必备利器");
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
