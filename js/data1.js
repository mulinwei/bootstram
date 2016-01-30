$(function(){

    //输入框的动画
    //按钮
    var add=$(".add");
    //输入框
    var form=$("form");
    var formClose=$(".formclose");
    var flag=true;
    add.click(function(){
        if(flag){
            form.attr({"data-role":"animate-show"}).css("display","block");
            flag=false;
        }else{
            form.attr({"data-role":"animate-hide"}).css("display","none");
            flag=true;
        }
    })
    formClose.click(function(){
        form.attr({"data-role":"animate-hide"}).css("display","none");
        flag=true;
    })

//    表单的验证
    $(".submitbutton").click(function(){
        if(form.find(":text").val()==""){
            alert("不能为空");
            return;
        }
        if(form.find("textarea").val()==""){
            alert("不能为空");
            return;
        }
        if(form.find("#time").val()==""){
            alert("时间必选");
            return;
        }
        //存储信息
        var oldv=localStorage.message==null?[]:JSON.parse(localStorage.message);
        var obj={title:form.find(":text").val(),con:form.find("textarea").val(),time:form.find("#time").val()};
        oldv.push(obj);
        var str=JSON.stringify(oldv);
        localStorage.message=str;
        form.find(":text").val("");
        form.find("textarea").val("");
        form.find("#time").val("");

        //    显示信息
        var copy=$(".con").clone().appendTo("body").fadeIn(100).css({
            left:($(window).width()-$(".con").outerWidth())*Math.random(),
            top:($(window).height()-$(".con").outerHeight())*Math.random()
        });
    })

})