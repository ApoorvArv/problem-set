/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var num= prompt("enter your num");
var j;
var temp = Number(num);

if(isNaN(temp))
{
console.log("Enter a number");
}
else {

	if(temp<0)
		{
	console.log("Please enter a positive number");
	}


	else
	 {
	for (j=1;j<=10;j++)
	  {
	    p=j*temp;
	    console.log(" " + p + " ");
	  }
	}
}

