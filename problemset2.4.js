/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var str = prompt("enter the sentence");

var word = str.split(" ");
var largest=0;
var i;
for(i=0;i<word.length;i++)
  {
    if(word[i].length>=largest )
      {
        largest=word[i].length;
      }
    else 
      {
        largest=largest;
      }
  }