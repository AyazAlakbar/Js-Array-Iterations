//alert("salam")


let arr=[2,5,9,3,4,1]
arr.sort();
arr.reverse();
console.log(arr);



function String(str) {
    let reverse = "";
    str.split("").forEach(function(char) {
      reverse = char + reverse;
    });
    return reverse;
  }

  
let str = "Cavid";
let reverseStr = String(str);
console.log(reverseStr); 