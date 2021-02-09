"use strict";

function myclass(result) {
  console.log(result);
  var classMessage = JSON.parse(localStorage.getItem("classMessage"));
  console.log(classMessage);

  for (var i = 0; i < classMessage.length; i++) {
    if (classMessage[i].type == "行政班") {
      result.adminClass.push({
        "title": classMessage[i].school_name,
        "class": classMessage[i].class_name,
        "teacher": "田小雨",
        "number": "33人"
      });
    } else if (classMessage[i].type == "教学班") {
      result.sectionClass.push({
        "title": classMessage[i].school_name,
        "class": classMessage[i].class_name,
        "teacher": "田小雨",
        "number": "33人"
      });
    }
  }

  var adminClass = document.querySelector('.main_body .main_body-header .container');
  var html = '';

  for (var _i = 0; _i < result.adminClass.length; _i++) {
    html += "<a href=\"./class.html\" class=\"item\">\n        <div class=\"left\">\n            <img src=\"./static/img/\u73ED\u7EA7.png\" alt=\"\">\n        </div>\n        <div class=\"right\">\n            <p><span>".concat(result.adminClass[_i].title, "</span></p>\n            <p><span>\u73ED\u7EA7\uFF1A</span>").concat(result.adminClass[_i]["class"], "</p>\n            <p><span>\u73ED\u4E3B\u4EFB\uFF1A</span>").concat(result.adminClass[_i].teacher, "</p>\n            <p><span>\u5B66\u751F\uFF1A</span>").concat(result.adminClass[_i].number, "</p>\n        </div>  \n        <div class=\"tag\">\n            \u884C\u653F\u73ED\n        </div>\n    </a>");
  }

  adminClass.innerHTML = html;
  var teaching = document.querySelector('.main_body .main_body-main .container');
  html = '';

  for (var _i2 = 0; _i2 < result.sectionClass.length; _i2++) {
    html += "\n        <a href=\"./class.html\" class=\"item\">\n                            <div class=\"left\">\n                                <img src=\"./static/img/\u73ED\u7EA7.png\" alt=\"\">\n                            </div>\n                            <div class=\"right\">\n                            <p><span>".concat(result.sectionClass[_i2].title, "</span></p>\n                            <p><span>\u73ED\u7EA7\uFF1A</span>").concat(result.sectionClass[_i2]["class"], "</p>\n                            <p><span>\u73ED\u4E3B\u4EFB\uFF1A</span>").concat(result.sectionClass[_i2].teacher, "</p>\n                            <p><span>\u5B66\u751F\uFF1A</span>").concat(result.sectionClass[_i2].number, "</p>\n                            </div>\n                        </a>\n        ");
  }

  teaching.innerHTML = html;
}