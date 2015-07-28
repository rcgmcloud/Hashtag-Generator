function generateHashtag (str) {
 if(str === ""){
   return false;
 }
 var words = str.split(" ");
 for(var i=0; i<words.length; i++){
   words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1, words[i].length +1);
 }

 if (words.join("").length > 140){
   return false;
 }
 return "#" + words.join("");
}