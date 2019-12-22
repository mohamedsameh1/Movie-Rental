var x = 3;
function cps() {
    x = parseInt(x);
    x--;
    document.getElementById('cpscnt').innerHTML = "Availabe Copies ="+x;
    if(x<0){
        window.alert("there is  no copies available");
        x=1;
    }
    }
function search(){
    
}
