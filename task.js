///reverse a word in a string////

// function reverse(str){
//     let newstring = [];
//     for (i=str.length-1; i>=0 ; i--){
//         newstring+=str[i]

//     }
//     return newstring;
// }
// let call = reverse (["Abhi"," ","Ajay"," ","Traun"," "," Raman"])
//  console.log(call)



///// reverse a string/////

// function reverse (str){

//     let newstring = "" ;
//     for (i=str.length -1 ; i>=0; i--){
//         newstring+=str[i]
//     }
//     return newstring
// }
//     let call = reverse ("Abhishek","Ajay")
//     console.log(call)
  

 
////remove duplicate function/////


 function removeDuplicate(array){
    const result = [];


   for(let i= 0; i<=array.length;  i++){
        let isDuplicate = false;

        for(let j = 0; j<= result.length; j++ ){
            if (array [i] === result [j]){
               isDuplicate = true;
                 break;
            }
         }
        if (!isDuplicate){
            result.push(array[i]);
        }
    }
     return result; 
 }
 const numbers = [11,12,13,14,11,15,7,78,13,12,34,56,34];
 const callFunction = removeDuplicate(numbers);
 console.log(callFunction);



