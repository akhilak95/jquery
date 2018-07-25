$(document).ready( () => {


    $(".button").click(() =>{
       $(".con1").addClass("con");
       $(".mess1").addClass("mess");
       $(".mescont1").addClass("mescont").prepend("message");
       $(".cross1").addClass("cross").prepend("x");
       $(".line1").addClass("line")
       $(".content1").addClass("content").prepend("Are you sure?");
       $(".but1").addClass("but")
       $(".yes1").addClass("yes").prepend("Submit");
       $(".no1").addClass("no").prepend("Close");
       $('#button').attr('disabled',true);
    })
    $(".cross1").hover(()=>{
       $('.cross1').addClass("crossbac");
       $(".yes1").removeClass("butback")
       $(".no1").removeClass("butback")
    })
    $(".yes1").hover(()=>{
       $(".yes1").addClass("butback")
       $(".no1").removeClass("butback")
       $('.cross1').removeClass("crossbac");
    })
    $(".no1").hover(()=>{
       $(".no1").addClass("butback")
       $(".yes1").removeClass("butback")
       $('.cross1').removeClass("crossbac");
    })
    $(".cross1").click(()=>{
       $(".con1").removeClass("con");
       $(".mess1").removeClass("mess");
       $(".mescont1").removeClass("mescont").empty();
       $(".cross1").removeClass("cross").empty();
       $(".line1").removeClass("line")
       $(".content1").removeClass("content").empty();
       $(".but1").removeClass("but")
       $(".yes1").removeClass("yes").empty();
       $(".no1").removeClass("no").empty();
       $("#button").removeClass("formfocus")
       $('#button').attr('disabled',false);

    })
    $(".no1").click(() =>{
       $(".con1").removeClass("con");
       $(".mess1").removeClass("mess");
       $(".mescont1").removeClass("mescont").empty();
       $(".cross1").removeClass("cross").empty();
       $(".line1").removeClass("line")
       $(".content1").removeClass("content").empty();
       $(".but1").removeClass("but")
       $(".yes1").removeClass("yes").empty();
       $(".no1").removeClass("no").empty();
       $("#button").removeClass("formfocus")
       $('#button').attr('disabled',false);
    })
    $(".yes1").click(() =>{
       alert("you can login now")
       $(".con1").removeClass("con");
       $(".mess1").removeClass("mess");
       $(".mescont1").removeClass("mescont").empty();
       $(".cross1").removeClass("cross").empty();
       $(".line1").removeClass("line")
       $(".content1").removeClass("content").empty();
       $(".but1").removeClass("but")
       $(".yes1").removeClass("yes").empty();
       $(".no1").removeClass("no").empty();
       $("#button").removeClass("formfocus")
       $('#button').attr('disabled',false);
    })
    $(".first").focus(() =>{
	   $(".first").addClass("formfocus")
	   $(".last").removeClass("formfocus")
	   $(".email").removeClass("formfocus")
	   $(".password").removeClass("formfocus")
	   $("#button").removeClass("formfocus")
       $id= $("#firstname");
	   $id.val("");
    })
    $(".last").focus(() =>{
	   $(".last").addClass("formfocus")
	   $(".first").removeClass("formfocus")
	   $(".email").removeClass("formfocus")
	   $(".password").removeClass("formfocus")
	   $("#button").removeClass("formfocus")
       $id= $("#lastname");
	   $id.val("");
	})
    $(".email").focus(() =>{
	   $(".email").addClass("formfocus")
	   $(".last").removeClass("formfocus")
	   $(".first").removeClass("formfocus")
	   $(".password").removeClass("formfocus")
	   $("#button").removeClass("formfocus")
       $id= $("#email");
	   $id.val("");
    })
    $(".password").focus(() =>{
	   $(".password").addClass("formfocus")
	   $(".last").removeClass("formfocus")
	   $(".email").removeClass("formfocus")
	   $(".first").removeClass("formfocus")
	   $("#button").removeClass("formfocus")
       $id= $("#password");
	   $id.val("");
	})
    $("#button").focus(() =>{
	   $("#button").addClass("formfocus")
	   $(".last").removeClass("formfocus")
	   $(".email").removeClass("formfocus")
	   $(".password").removeClass("formfocus")
	   $(".first").removeClass("formfocus")
    })
    $("form").submit((e)=>{
	   e.preventDefault();
	   
    })
})
