function fn(){
    var a=document.getElementById("uname");
    var b=document.getElementById("pass");
   
    if(a.value.trim()=="" && b.value.trim()==""){
        // alert("Username and Password is required");
        document.getElementById("unameh6").innerHTML="Username is required";
        document.getElementById("passh6").innerHTML="Password is required";
        a.style.border="1px solid red";
        b.style.border="1px solid red";
        return false;
    }
    else if(b.value.trim()==""){
        // alert("Password is required");
        document.getElementById("passh6").innerHTML="Password is required";
        b.style.border="1px solid red";
        return false;
    }
    else if(a.value.trim()==""){
        // alert("Username is required");
        document.getElementById("unameh6").innerHTML="Username is required";
        a.style.border="1px solid red";
        return false;
    }
    else if(a.value.trim()=="vinay" && b.value.trim()=="krishna"){
        alert("Username and Password is Matching");
        return true;
    }
    else if(a.value.trim()=="virat" && b.value.trim()=="kohli"){
       alert("Username and Password is Matching");
        return true;
    }
    else{
        document.getElementById("btnh6").innerHTML="Username and Password is not Matching";
        a.style.border="1px solid red";
        b.style.border="1px solid red";
        document.getElementById("btn").style.display="none";
        return false;
       
    }
   
}
