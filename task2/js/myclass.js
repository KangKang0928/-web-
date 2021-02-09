$.ajax({
    method: 'get',
    data: {},
    dataType: 'json',
    url: './data/myclass.json',
    success: function (res) {
        let result = res;
        var classMessage = JSON.parse(localStorage.getItem("classMessage"));
        console.log(classMessage);
        for (let i = 0; i < classMessage.length; i++) {
            if (classMessage[i].type == "行政班") {
                result.adminClass.push({
                    "title": classMessage[i].school_name,
                    "class": classMessage[i].class_name,
                    "teacher": "田小雨",
                    "number": "33人"
                })
            } else if (classMessage[i].type == "教学班") {
                result.sectionClass.push({
                    "title": classMessage[i].school_name,
                    "class": classMessage[i].class_name,
                    "teacher": "田小雨",
                    "number": "33人"
                })
            }
        }

        let adminClass = document.querySelector('.main_body .main_body-header .container');
        let html = '';
        for (let i = 0; i < result.adminClass.length; i++) {
            html += `<a href="./class.html" class="item">
        <div class="left">
            <img src="./static/img/班级.png" alt="">
        </div>
        <div class="right">
            <p><span>${result.adminClass[i].title}</span></p>
            <p><span>班级：</span>${result.adminClass[i].class}</p>
            <p><span>班主任：</span>${result.adminClass[i].teacher}</p>
            <p><span>学生：</span>${result.adminClass[i].number}</p>
        </div>  
        <div class="tag">
            行政班
        </div>
    </a>`
        }
        adminClass.innerHTML = html;
        let teaching = document.querySelector('.main_body .main_body-main .container');
        html = '';
        for (let i = 0; i < result.sectionClass.length; i++) {
            html += `
        <a href="./class.html" class="item">
                            <div class="left">
                                <img src="./static/img/班级.png" alt="">
                            </div>
                            <div class="right">
                            <p><span>${result.sectionClass[i].title}</span></p>
                            <p><span>班级：</span>${result.sectionClass[i].class}</p>
                            <p><span>班主任：</span>${result.sectionClass[i].teacher}</p>
                            <p><span>学生：</span>${result.sectionClass[i].number}</p>
                            </div>
                        </a>
        `
        }
        teaching.innerHTML = html;
    },
    error: function (err) {
        console.log(err);
    }
})

