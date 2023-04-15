const names = ["Guadalupe", "Ollie", "Aki"];
let emptyArray = [];
function eventName() {

}
function writeCards(names, eventName) {
for (let i = 0; i < names.length; i++){
 emptyArray.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
 debugger;
}
return emptyArray;
}

function countDown(a = 10) {
 
    while (a > 0 -1){
      console.log(a);
   a--;
    }
  return a;
 }
countDown(10);
