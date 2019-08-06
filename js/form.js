function validate()
{
	var username, password;
	username=document.login.username.value;
	password=document.login.password.value;


	
	if(username=='' && password=='')
	{
		document.getElementById('errormsg').innerHTML="All fields are Required";
		return false;
	}
	else if(username=='')
	{
		document.getElementById('errormsg').innerHTML="Username is Required";
		return false;

	}

	else if(password=='')
	{
		document.getElementById('errormsg').innerHTML="Password is Required";
		return false;
	}

	else if(username.length<6 || password.length<6)
	{
		document.getElementById('errormsg').innerHTML="username or Password length should be min 6";
		return false;
	}

	else if(username=='admin1' && password=='admin1')
	{
		document.getElementById('errormsg').innerHTML="Valid username and password";
		return false;
	}
	else
	{
		document.getElementById('errormsg').innerHTML="Invalid username and password";
		return false;

	}
	
	return true;

	
}


function currentDate()
{
	var d;
	d=new Date();
	yr=d.getFullYear();  // return 9999
	mt=d.getMonth(); //retrun 0-11
	dat=d.getDate(); //return 1-31
	day=d.getDay(); //return 0-6


	if(mt==0) { mt="January";}
	else if(mt==1) { mt="February";}
	else if(mt==2) { mt="March";}
	else if(mt==3) { mt="April";}
	else if(mt==4) { mt="May";}
	else if(mt==5) { mt="June";}
	else if(mt==6) { mt="July";}
	else if(mt==7) { mt="August";}
	else if(mt==8) { mt="September";}
	else if(mt==9) { mt="October";}
	else if(mt==10) { mt="November";}
	else { mt="December";}

	if(day==0) { day="Sunday"; }
	else if(day==1) { day="Monday"; }
	else if(day==2) { day="Tuesday"; }
	else if(day==3) { day="Wednesday"; }
	else if(day==4) { day="Thursday"; }
	else if(day==5) { day="Friday"; }
	else  { day="Saturday"; }
 
	document.getElementById('date').innerHTML=day+ ", "+ dat + " " + mt+ " " + yr;
	chTime();

	return true;
}

function curTime()
			{
			var t;
			t=new Date;
			hh=t.getHours()+1;
			mm=t.getMinutes();
			ss=t.getSeconds();

			document.getElementById('hh').innerHTML=hh;
			document.getElementById('mm').innerHTML=mm;
			document.getElementById('ss').innerHTML=ss;
		}

function chTime()
	{
		setInterval(curTime, 1000);
	}
