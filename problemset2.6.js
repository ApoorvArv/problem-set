/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
prompt("please enter valid positive numbers");
var a= prompt("enter a");
var r=prompt("enter common ratio except number 1");
var n=prompt("enter number of terms");
var term;

var atemp = Number(a);
var rtemp = Number(r);
var ntemp = Number(n);

for(i=1;i<=ntemp;i++)
  {
    
    term= atemp* Math.pow(rtemp,i-1);
    console.log(term);
  }
