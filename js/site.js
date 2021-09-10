// logic function 
function getValues() {
   let fizzValue = document.getElementById("fizzValue").value;
   let buzzValue = document.getElementById("buzzValue").value;
   let numbers = [];

   fizzValue = parseInt(fizzValue);
   buzzValue = parseInt(buzzValue);

   if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
       numbers = generateFizzBuzz(fizzValue, buzzValue);

       viewData(numbers)
   } else {
       alert("You must only enter numbers");
   }
}

// controller function 
function generateFizzBuzz(fizzValue, buzzValue) {
    let numbers = []

    // for(let i = 1; i = 100; i++) {
    //     if(startValue) {

    //     }
    // }

    // return numbers;
}

// view function 
function viewData() {

}