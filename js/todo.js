// login form validation callback concept 
function validate(callback){

    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var ruser = /^[a][d][m][i][n]$/;
    var rpass = /^[1][2][3][4][5]$/;
    if(ruser.test(user)){
        if(rpass.test(pass)){
            document.getElementById("err_pass").innerHTML = "";
            // return true;
            callback();
        }
    
        else{
            document.getElementById("err_user").innerHTML = "";
            document.getElementById("err_pass").innerHTML = "Password is incorrect";
            return false;
        }
    }
    else{
            document.getElementById("err_user").innerHTML = "Username is incorrect";
            return false;
        }
    }
    function callback(){
        // return true;
        // location.href = "main.html";
        window.location.href ="main.html";
    }



// json to table
$(document).ready(function(){
    $("#one").on("click",function(){
        $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos',
        dataType: 'json',
        success: function(list) {
            for (var i=0; i<list.length; i++) {
                var row = $("<tr><td>" + list[i].id+ "</td><td>" + list[i].title+"</td><td>"+list[i].completed+"</td><td>"+"<input type='checkbox'>"+"</td></tr>");
                if(list[i].completed==true)
                {
                    row+= "<tr><td>" + list[i].id+ "</td><td>" + list[i].title+"</td><td>"+list[i].completed+"</td><td>"+"<input type='checkbox' disabled>"+"</td></tr>"
                }
                else{
                    row+= "<tr><td>" + list[i].id+ "</td><td>" + list[i].title+"</td><td>"+list[i].completed+"</td><td>"+"<input type='checkbox'>"+"</td></tr>"

                }
                $('#dataTable').append(row);    
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert('Error: ' + textStatus + ' - ' + errorThrown);
        }
    });
    })
});



// checkbox validation by promise
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





