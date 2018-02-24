/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
var year = new Date().getFullYear();
console.log(year);
console.log("The leap years are \n");

var leaps=0;
while(leaps!=40){
  if( year%4 === 0 && (year%100!==0 || year%400===0)) {
      console.log(year);
      leaps++;
   }
   year++;
  
}