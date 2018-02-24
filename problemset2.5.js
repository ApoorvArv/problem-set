/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var str = prompt("enter the string");
var str2 = prompt("enter the word");

if(isNaN(str)&&isNaN(str2))
{

	if(str2.length<4)
		{
		console.log("Please enter the required word to be of 4 letters");
		}
	else {
	
		if(str.includes(str2))
		  {
		    console.log("true");
		  }
		else{
		  console.log("false");
		}
  	}
}

else {
console.log("Please enter a string without numbers");
}
/*
Exception: SyntaxError: expected expression, got keyword 'else'
@Scratchpad/15:34
*/
/*
Exception: SyntaxError: expected expression, got keyword 'else'
@Scratchpad/15:31
*/
/*
Exception: ReferenceError: word is not defined
@Scratchpad/15:16:1
*/
/*
Exception: ReferenceError: word is not defined
@Scratchpad/15:16:1
*/
