/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
var n= prompt("enter your num");

var temp = Number(n);

if(isNaN(temp))
{
console.log("Enter a number");
}
else {

	if(temp<0)
		{
	console.log("Please enter a positive number");
	}

	else {
		console.log("The sum of your desired series is-:");
		var s=0;
		var p=-1;
		var i=1;
		for (i=1;i<=n;i++)
		  {
		      
		     if(i%2 !=0)
		       {
			 p=-1;
		       }
		    else if(i%2==0)
			{
		      p=1;
		    }
		    s=s+ (1*p);
		  }
		console.log(s);
		}
	}
