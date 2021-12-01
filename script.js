
    var objPeople = [
        {
            username : "sam",
            password : "codify"
        },
        {
            username : "matt",
            password : "academy"
        },
        {
            username : "chris",
            password : "forever"
        }
    ];
    
    function runLog(){
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

       for(i=0; i<objPeople.length; i++){
           if(username == objPeople[i].username && password == objPeople[i].password)
           {
               alert(username+ "is logged in");
               return
           }
       }
       alert("incorrect username or password");
    }

    function register(){
        var registerUser = document.getElementById("newUser").value;
        var registerPassword = document.getElementById("newPassword").value;
    }


