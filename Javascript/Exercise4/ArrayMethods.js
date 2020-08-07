function myFunction()
{
    //*** Delete
    
    let arr = ["I", "go", "home"];
    delete arr[1]; // to remove an element of the array
    console.log(arr[1]);
    // however the size of the array is set once it's defined
    console.log(arr.legth); // 3

    //*** Splice
        
    // splice is a special method that can be used in this case(like the swiss army knife of arrays)
    arr.splice(1,1);
    console.log(arr.length); // 2

    // splice allows you to replace elements of the array with other elements
    let arr1 = ["I", "study","Javascript","right","now"];
    arr1.splice(0,3,"Let's", "dance");
    console.log(arr1);

    // splice is like the cut function in windows
    let removed = arr1.splice(0,2);
    console.log(removed); // returns elements removed
    
    // splice can also insert without removing any elements
    let arr2 = ["I", "study", "Javascript"];
    arr2.splice(2,0,"complex","language") // by setting deleteCount, splice works as insert

    // negative indexes allowed, similar to python: specifies from the end of array.
    
    //*** Slice

    // much simpler than splice, only returns a new array copying to it all items from index start to end
    // basic syntax: arr.slice(start, end)
   
    let arr3 = ["t", "e", "s", "t"];
    alert(arr3.slice(1,3));
    alert(arr3.slice(-2)); // if no end index specified, it'll go to the end by default

    //*** Concat
    let arr = [1,2];
    alert(arr.concat([3,4]));
    let arrayLike = {0 : "something", length: 1};

    alert(arr.concat(arrayLike)); // 1, 2, [object Object]
    
    // however if the array-like object has a isConcatSpreadable property
    let arrayLike = 
    {
        0: "something",
        1: "else",
        [Symbol.isConcatSpreadable] : true, length: 2
    }; // 1,2, something, else


    //*** forEach 
    //arr.forEach(function(item, index, array)){}
    ["Bilbo","Gandalf", "Nazgul"].forEach((item, index, array)) => {alert('${item} is at index ${index} in ${array}')}
    
    
}

