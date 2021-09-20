// logic function 
function getValues() {
   let fizzValue = document.getElementById("fizzValue").value;
   let buzzValue = document.getElementById("buzzValue").value;
   let numbers = [];

   fizzValue = parseInt(fizzValue);
   buzzValue = parseInt(buzzValue);

   if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
       numbers = generateFizzBuzzC(fizzValue, buzzValue);
       console.log("2", numbers);

       viewData(numbers);
   } else {
       alert("You must only enter numbers");
   }
}

// controller function 
function generateFizzBuzz(fizzValue, buzzValue) {
    let numbers = []

    for(let i = 1; i <= 100; i++) {
        if (i % fizzValue == 0 && i % buzzValue == 0) {
            numbers.push("FizzBuzz");
        }
        else if (i % fizzValue == 0) {
            numbers.push("Fizz");
        }
        else if (i % buzzValue == 0) {
            numbers.push("Buzz");
        }
        else {
            numbers.push(i);
        }
    }
    return numbers;
}

function generateFizzBuzzB(fizzValue, buzzValue) {
    let returnArray = [];
    let Fizz  = false;
    let Buzz = false;

    for (let index = 1; index <= 100; index++) {
        
        Fizz = index % fizzValue == 0;
        Buzz = index % buzzValue == 0;

        switch(true) {
            case Fizz && Buzz: {
                returnArray.push('FizzBuzz');
                break;
            }
            case Fizz: {
                returnArray.push('Fizz');
                break;
            }
            case Buzz: {
                returnArray.push('Buzz');
                break;
            }
            default: {
                returnArray.push(index);
                break;
            }
        }
    }
    return returnArray;
}

function generateFizzBuzzC(fizzValue, buzzValue) {
    let returnArray = [];

    for (let index = 1; index <= 100; index++) {
        let value = ((index % fizzValue == 0 ? 'Fizz' : '') + (index % buzzValue == 0 ? 'Buzz' : '') || index);
        returnArray.push(value);
    }

    return returnArray;
}

// view function 
function viewData(numbers) {

    let tableBody = document.getElementById("results");
    let templateRow = document.getElementById("fizzBuzzTemplate")

    // clear the table first
    tableBody.innerHTML = "";

    for(let i = 0; i < numbers.length; i+=5) {
        const tableRow = document.importNode(templateRow.content, true);

        rowCols = tableRow.querySelectorAll("td");
        
        rowCols[0].classList.add(numbers[i]);
        rowCols[0].textContent = numbers[i];
        
        rowCols[1].classList.add(numbers[i+1]);
        rowCols[1].textContent = numbers[i + 1];
        
        rowCols[2].classList.add(numbers[i+2]);
        rowCols[2].textContent = numbers[i + 2];
        
        rowCols[3].classList.add(numbers[i+3]);
        rowCols[3].textContent = numbers[i + 3];
        
        rowCols[4].classList.add(numbers[i+4]);
        rowCols[4].textContent = numbers[i + 4];
        
        tableBody.appendChild(tableRow);
    }
}