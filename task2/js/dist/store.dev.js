"use strict";

var form = document.querySelector('.main_body-main form');

form.onsubmit = function (e) {
  e.preventDefault();
  var school_name = document.querySelector(".main_body-main form .item:nth-child(1) input").value;
  var level = document.querySelector(".main_body-main form .item:nth-child(2) select").value;
  var grade = document.querySelector(".main_body-main form .item:nth-child(3) select").value;
  var class_name = document.querySelector(".main_body-main form .item:nth-child(4) input").value;
  var type = document.querySelectorAll(".main_body-main form .item:nth-child(5) label input");
  var jurisdiction = document.querySelectorAll(".main_body-main form .item:nth-child(6) label input");
  var $type;
  var $jurisdiction;

  for (var i = 0; i < type.length; i++) {
    if (type[i].checked) {
      $type = type[i].value;
      break;
    }
  }

  for (var _i = 0; _i < jurisdiction.length; _i++) {
    if (jurisdiction[_i].checked) {
      $jurisdiction = jurisdiction[_i].value;
      break;
    }
  }

  console.log(school_name, level, grade, class_name, $type, $jurisdiction);

  if (localStorage.getItem("classMessage") == null) {
    var classObj = [];
    classObj.push({
      school_name: school_name,
      level: level,
      grade: grade,
      class_name: class_name,
      type: $type,
      jurisdiction: $jurisdiction
    });
    localStorage.setItem("classMessage", JSON.stringify(classObj));
  } else {
    var _classObj = JSON.parse(localStorage.getItem("classMessage"));

    console.log(_classObj);

    _classObj.push({
      school_name: school_name,
      level: level,
      grade: grade,
      class_name: class_name,
      type: $type,
      jurisdiction: $jurisdiction
    });

    localStorage.setItem("classMessage", JSON.stringify(_classObj));
  } // localStorage.setItem("school_name", school_name);
  // localStorage.setItem("level",level)
  // localStorage.setItem("grade",grade)
  // localStorage.setItem("class_name",class_name)
  // localStorage.setItem("type",$type)
  // localStorage.setItem("jurisdiction",$jurisdiction)


  location.href = "./myclass.html";
};