var loading_list = document.querySelector(".main_body-main ul");
$.ajax({
    method: 'get',
    dataType: 'json',
    url: './data/class.json',
    success: function (res) {
        let result = res;
        console.log(result);
        let li = "";
        for (let i = 0; i < 3; i++) {
            if (i == 0) {
                li += `<li class="btn-commit" onclick="change(1);">所有老师(${result.allTeacher.length})</li>`;
            } else if (i == 1) {
                li += `<li class="btn-commit" onclick="change(2);">所有学生(${result.allStudent.length})</li>`;
            } else if (i == 2) {
                li += `<li class="btn-commit" onclick="change(3);">所有家长(${result.allParents.length})</li>`;
            }
        }
        loading_list.innerHTML = li;
        document.querySelectorAll(".btn-commit")[0].click()

    }
})
function change(index) {

    var loading_list_item = document.querySelectorAll(".main_body-main ul li");
    for (let i = 0; i < loading_list_item.length; i++) {
        loading_list_item[i].classList.remove("active");
    }
    loading_list_item[index - 1].classList.add("active");
    let teacher_list = document.querySelector(".main_body-main .container");
    let item = '';
    $.ajax({
        url: './data/class.json',
        method: 'get',
        dataType: 'json',
        success: function (res) {
            let result = res;
            switch (index) {
                case 1:
                    for (let i = 0; i < result.allTeacher.length; i++) {
                        item += `                        <div class="item">
                        <div class="teacher_img">
                            <img src="./static/img/teacher.png" alt="">
                            <div class="tag">
                                <span>${result.allTeacher[i].Type}</span>`
                        if (result.allTeacher[i].Admin) {
                            item += `<span class="admin">管理员</span>`
                        }
                        item += `
                            </div>
                        </div>
                        <div class="teacher_name">
                        ${result.allTeacher[i].Name}
                        </div>
                    </div>`
                    }
                    break;
                case 2:
                    for (let i = 0; i < result.allStudent.length; i++) {
                        item += `                        <div class="item">
                            <div class="teacher_img">
                                <img src="./static/img/teacher.png" alt="">
                                <div class="tag">
                                    <span>${result.allStudent[i].Type}</span>`
                                    if (result.allStudent[i].Admin) {
                                        item += `<span class="admin">管理员</span>`
                                    }
                                    item += `
                                </div>
                            </div>
                            <div class="teacher_name">
                            ${result.allStudent[i].Name}
                            </div>
                        </div>`
                    }
                    break;
                case 3:
                    for (let i = 0; i < result.allParents.length; i++) {
                        item += `                        <div class="item">
                                <div class="teacher_img">
                                    <img src="./static/img/teacher.png" alt="">
                                    <div class="tag">
                                        <span>${result.allParents[i].Type}</span>`
                                        if (result.allParents[i].Admin) {
                                            item += `<span class="admin">管理员</span>`
                                        }
                                        item += `
                                    </div>
                                </div>
                                <div class="teacher_name">
                                ${result.allParents[i].Name}
                                </div>
                            </div>`
                    }
                    break;
            }
            console.log(item);
            teacher_list.innerHTML = item;

        }
    })

}
// document.querySelectorAll("")
// $.ajax({
//     method: 'get',
//     dataType: 'json',
//     url: './data/class.json',
//     success: function (res) {
//         let result = res;
//         console.log(result);
//     }
// })

