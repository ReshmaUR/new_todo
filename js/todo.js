// json to table
$(document).ready(function(){
    $("#one").on("click",function(){
        $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos',
        dataType: 'json',
        success: function(todo) {
            for (var i=0; i<todo.length; i++) {
                var row = $("<tr><td>" + todo[i].id+ "</td><td>" + todo[i].title+"</td><td>"+todo[i].completed+"</td><td>"+"<input type='checkbox'>"+"</td></tr>");
                 
                $('#myTable').append(row);
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert('Error: ' + textStatus + ' - ' + errorThrown);
        }
    });
    })
});

// checkbox validation
function valcheck(){
    var promise = new Promise(function(resolve,reject){
        var check = document.querySelectorAll("input[type='checkbox']:checked").length;
        if(check===5){
            resolve("Congrats..You are successfully completed the task..");
        }
        else if(check>5){
            reject("Five tasks are enough for today!!!");
        }
        else if(check<5){
            reject("You should complete atleast five tasks today!!!");
        }
    });
    promise.then(function(p){
        alert(p);
    })
    .catch(function(r){
        alert(r);
    })
}



// login validation
// function validate(){
//     var user = document.getElementById("username").value;
//     var pass = document.getElementById("password").value;
//     var ruser = /^[a][d][m][i][n]$/;
//     var rpass = /^[1][2][3][4][5]$/;
//     if(ruser.test(user)){
//         if(rpass.test(pass)){
//             document.getElementById("err_pass").innerHTML = "";
//             return true;
//         }
//         else{
//             document.getElementById("err_user").innerHTML = "";
//             document.getElementById("err_pass").innerHTML = "Password is incorrect";
//             return false;
//         }
//     }
//     else{
//             document.getElementById("err_user").innerHTML = "Username is incorrect";
//             return false;
//         }
// }

// callback concept
// function validate(callback){

// var user = document.getElementById("username").value;
// var pass = document.getElementById("password").value;
// var ruser = /^[a][d][m][i][n]$/;
// var rpass = /^[1][2][3][4][5]$/;
// if()








// }

















// function validate(callback){
//     var user = document.getElementById("username").value;
//     var pass = document.getElementById("password").value;
//     var ruser = /^[a][d][m][i][n]$/;
//     var rpass = /^[1][2][3][4][5]$/;
//     if(ruser.test(user)){
//         alert("user ok");
//         if(rpass.test(pass)){
//             alert("password ok");
//             // return true;
//             callback();     
//         }
//         else{
//             alert("password not ok"); 
//             return false;
//         }
//     }
//     else{
//         alert("user not ok"); 
//         return false;
//     } 
//     // callback();  
// }
// function callback(){
//     // alert("all ok");
//     return true;
// }
// validate(callback);
