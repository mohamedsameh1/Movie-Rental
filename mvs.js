var x = 100	;
function cps() {
    x = parseInt(x);
    x--;
    document.getElementById('cpscnt').innerHTML = "Availabe Copies ="+x;
    if(x<0){
        window.alert("there is  no copies available");
    }
    }
	function fightclub()
	{
		var movie="fight club";
		var price=30;
		var rent=document.getElementById("fightc").value;
	}
	function legend()
	{
		var movie="legend";
		var price=35;
		var rent=document.getElementById("legend").value;
	}
	function inception()
	{
		var movie="inception";
		var price=28;
		var rent=document.getElementById("inc").value;
	}
	function lac()
	{
		var movie="lac";
		var price=15;
		var rent=document.getElementById("lac").value;
	}
	function godfather()
	{
		var movie="godfather";
		var price=50;
		var rent=document.getElementById("gff").value;
	}