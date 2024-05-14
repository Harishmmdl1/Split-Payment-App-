
// creating DOB by get elementID
var input_amount = document.getElementById("amount");
var noOfPerson = document.getElementById("persons");
var splitted_amount = document.getElementById("splitted_amount");
var split = document.getElementById("split");
var increment = document.getElementById("increment");
var decrement = document.getElementById("decrement");
var calculateBillAgain = document.getElementById("calculateBillAgain");

// split calculation function
var value = 0;
console.log(value);
function splitting ( event )
{
    event.preventDefault();
    
    let input_amount_value =  parseFloat(input_amount.value);
    let no_persons =  parseInt(noOfPerson.value);
    
    console.log(input_amount_value);
    console.log(no_persons);
    
    if(isNaN(input_amount_value) || isNaN(no_persons) )
        {
            alert("Enter a valid Number");
            return;
        }
        
        value = (input_amount_value / no_persons);
        console.log(value);
        
        splitted_amount.innerHTML = `₹ ${value.toFixed(2)} `;
        
        document.querySelector('.result').style.display = 'flex';
        
    }
    
    //adding event to split button
    split.addEventListener("click", splitting);
    
    
    // adding events to increment decrement buttons
    increment.addEventListener("click", function (event)
    {
        event.preventDefault();
        noOfPerson.value = parseInt(noOfPerson.value) + 1;
        
    });
    decrement.addEventListener("click", function (event)
    {
        event.preventDefault();
    let currentValue = parseInt(noOfPerson.value);
    if(currentValue > 1)
        {

            noOfPerson.value = noOfPerson.value - 1;
        }
});


// creating calculating again function
function calculateagain( e )
{
    input_amount.value = "";
    noOfPerson.value = "";
    splitted_amount.innerHTML = "";


    document.querySelector('.result').style.display = 'none';
}

//adding event to calculating again button
calculateBillAgain.addEventListener("click", calculateagain);





