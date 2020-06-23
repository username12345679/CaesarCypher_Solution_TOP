const caesar = function(a,b) {
    // // create array1. This is going to hold the charCode Integers in this array.
let arr1 = [];
// // create array2
let arr2 = [];

// // Create string2 which we dump the arr1
let string2 = '';

// if shiftNumber is Greater than 26.
if (b > 26)
{
    let var2 = Math.floor(b/26);
    b = b - (var2 * 26) - 26;
}
else if (b < -26)
{
    let var2 = Math.floor(Math.abs(b)/26);
    b = b + (var2 * 26) ;
}
// console.log("Shiftnum is now finally: " + b);


// make the thing into an array that holds the string --> integer charCodes()
for (let i = 0; i < a.length; i++)
{
    arr1.push(a.charCodeAt(i));  // note the 4 here we can shift    
}

// console.log("Before Shifting: ")
// console.log(arr1);

// Iterate through the arr1 which holds the integer of char code of each letter
for (let i = 0; i < arr1.length; i++)
{
    // 1st check for banned characters. Blank spaces or other things
    if (a[i] == '!' || a[i] == ',' || a[i] == ' ')
    {
        // add the blank space to arr2
        arr2.push(arr1[i])
    }

    // SCENERIO IF UPPER CASE A ... Z if arr1[i] is UPPER so between 65 and 90
    if ( (arr1[i] >= 65) && (arr1[i] <= 90) )
    {
        // check if RIGHT SHIFT goes past RIGHT LIMIT
        if ( (arr1[i] + b) > 90 )
        {
            arr1[i] = (arr1[i] + b) - 90 + 64;
            arr2.push(arr1[i]);
        }
        // check if LEFT SHIFT goes past LEFT LIMIT 
        else if ( (arr1[i] + b) < 65 )
        {
            let var1 = 64 - (arr1[i] + b);
            arr1[i] = 90 - var1;
            arr2.push(arr1[i]);
        }
        // else if LEFT SHIFT and RIGHT SHIFT is within limits
        else if ( (arr1[i] + b) >=65 && (arr1[i] + b) <= 90)
        {
            arr1[i] = arr1[i] + b;
            arr2.push(arr1[i]);
        } 
    }
    
    // SCENERIO IF LOWER CASE... a... z
    if ( (arr1[i] >= 97) && (arr1[i] <= 122) )
    {
        // Check if RIGHT SHIFT is OUT of Limits
        if ( (arr1[i] + b) > 122 )
        {
            arr1[i] = (arr1[i] + b) - 122 + 66;
            arr2.push(arr1[i]);
        }
        // Check if LEFT SHIFT goes OUT of LIMITS
        else if ( (arr1[i] + b) < 97 )
        {
            let var1 = 96 - (arr1[i] + b);
            arr1[i] = 122 - var1;
            arr2.push(arr1[i]);
        }
        else if ( (arr1[i] + b) >= 97 && (arr1[i] + b) <= 122 )
        {
            arr1[i] = arr1[i] + b;
            arr2.push(arr1[i]);
        } 
    }    
}

// var testvar = String.fromCharCode(122);
// console.log(testvar);


    for (let i = 0; i <= arr2.length; i++)
    {
        string2 = string2 + (String.fromCharCode(arr2[i]));
    }

    return string2;

}

console.log(typeof(caesar('A',1)));

module.exports = caesar


