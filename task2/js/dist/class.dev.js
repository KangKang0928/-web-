"use strict";

var loading_list = document.querySelector(".main_body-main ul");
$.ajax({
  method: 'get',
  dataType: 'json',
  url: './data/class.json',
  success: function success(res) {
    var result = res;
    console.log(result);
    var li = "";

    for (var i = 0; i < 3; i++) {
      if (i == 0) {
        li += "<li class=\"btn-commit\" onclick=\"change(1);\">\u6240\u6709\u8001\u5E08(".concat(result.allTeacher.length, ")</li>");
      } else if (i == 1) {
        li += "<li class=\"btn-commit\" onclick=\"change(2);\">\u6240\u6709\u5B66\u751F(".concat(result.allStudent.length, ")</li>");
      } else if (i == 2) {
        li += "<li class=\"btn-commit\" onclick=\"change(3);\">\u6240\u6709\u5BB6\u957F(".concat(result.allParents.length, ")</li>");
      }
    }

    loading_list.innerHTML = li;
    document.querySelectorAll(".btn-commit")[0].click();
  }
});

function change(index) {
  var loading_list_item = document.querySelectorAll(".main_body-main ul li");

  for (var i = 0; i < loading_list_item.length; i++) {
    loading_list_item[i].classList.remove("active");
  }

  loading_list_item[index - 1].classList.add("active");
  var teacher_list = document.querySelector(".main_body-main .container");
  var item = '';
  $.ajax({
    url: './data/class.json',
    method: 'get',
    dataType: 'json',
    success: function success(res) {
      var result = res;

      switch (index) {
        case 1:
          for (var _i = 0; _i < result.allTeacher.length; _i++) {
            item += "                        <div class=\"item\">\n                        <div class=\"teacher_img\">\n                            <img src=\"./static/img/teacher.png\" alt=\"\">\n                            <div class=\"tag\">\n                                <span>".concat(result.allTeacher[_i].Type, "</span>");

            if (result.allTeacher[_i].Admin) {
              item += "<span class=\"admin\">\u7BA1\u7406\u5458</span>";
            }

            item += "\n                            </div>\n                        </div>\n                        <div class=\"teacher_name\">\n                        ".concat(result.allTeacher[_i].Name, "\n                        </div>\n                    </div>");
          }

          break;

        case 2:
          for (var _i2 = 0; _i2 < result.allStudent.length; _i2++) {
            item += "                        <div class=\"item\">\n                            <div class=\"teacher_img\">\n                                <img src=\"./static/img/teacher.png\" alt=\"\">\n                                <div class=\"tag\">\n                                    <span>".concat(result.allStudent[_i2].Type, "</span>");

            if (result.allStudent[_i2].Admin) {
              item += "<span class=\"admin\">\u7BA1\u7406\u5458</span>";
            }

            item += "\n                                </div>\n                            </div>\n                            <div class=\"teacher_name\">\n                            ".concat(result.allStudent[_i2].Name, "\n                            </div>\n                        </div>");
          }

          break;

        case 3:
          for (var _i3 = 0; _i3 < result.allParents.length; _i3++) {
            item += "                        <div class=\"item\">\n                                <div class=\"teacher_img\">\n                                    <img src=\"./static/img/teacher.png\" alt=\"\">\n                                    <div class=\"tag\">\n                                        <span>".concat(result.allParents[_i3].Type, "</span>");

            if (result.allParents[_i3].Admin) {
              item += "<span class=\"admin\">\u7BA1\u7406\u5458</span>";
            }

            item += "\n                                    </div>\n                                </div>\n                                <div class=\"teacher_name\">\n                                ".concat(result.allParents[_i3].Name, "\n                                </div>\n                            </div>");
          }

          break;
      }

      console.log(item);
      teacher_list.innerHTML = item;
    }
  });
} // document.querySelectorAll("")
// $.ajax({
//     method: 'get',
//     dataType: 'json',
//     url: './data/class.json',
//     success: function (res) {
//         let result = res;
//         console.log(result);
//     }
// })