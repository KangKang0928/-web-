let form=document.querySelector('.main_body-main form');
form.onsubmit=function(e){
    e.preventDefault();
    let school_name=document.querySelector(".main_body-main form .item:nth-child(1) input").value;
    let level=document.querySelector(".main_body-main form .item:nth-child(2) select").value;
    let grade=document.querySelector(".main_body-main form .item:nth-child(3) select").value;
    let class_name=document.querySelector(".main_body-main form .item:nth-child(4) input").value;
    let type=document.querySelectorAll(".main_body-main form .item:nth-child(5) label input");
    let jurisdiction=document.querySelectorAll(".main_body-main form .item:nth-child(6) label input");
    let $type;
    let $jurisdiction;
    for(let i=0;i<type.length;i++){
        if(type[i].checked){
            $type=type[i].value;
            break;
        }
    }
    for(let i=0;i<jurisdiction.length;i++){
        if(jurisdiction[i].checked){
            $jurisdiction=jurisdiction[i].value;
            break;
        }
    }
    console.log(school_name,level,grade,class_name,$type,$jurisdiction);
    if(localStorage.getItem("classMessage")==null){
        let classObj=[]
        classObj.push({
            school_name:school_name,
            level:level,
            grade:grade,
            class_name:class_name,
            type:$type,
            jurisdiction:$jurisdiction
    
        })
        localStorage.setItem("classMessage",JSON.stringify(classObj))
    }else{
        let classObj=JSON.parse(localStorage.getItem("classMessage"))
        console.log(classObj);
        classObj.push({
            school_name:school_name,
            level:level,
            grade:grade,
            class_name:class_name,
            type:$type,
            jurisdiction:$jurisdiction
    
        })
        localStorage.setItem("classMessage",JSON.stringify(classObj))
    }

    // localStorage.setItem("school_name", school_name);
    // localStorage.setItem("level",level)
    // localStorage.setItem("grade",grade)
    // localStorage.setItem("class_name",class_name)
    // localStorage.setItem("type",$type)
    // localStorage.setItem("jurisdiction",$jurisdiction)
    location.href="./myclass.html"
}