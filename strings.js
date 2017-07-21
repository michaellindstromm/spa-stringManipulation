let input = document.getElementById("inputArea");
let button = document.getElementById("button");
let postArea = document.getElementById("postArea");
let testString = "";

function reversal(i) { //Reverses i(testString). Have to split to make array before reverse and then join back to turn back into string.
  postArea.innerHTML += i.split("").reverse().join("") + "<br>";
}

function alphabits(i) { //Sorts i(testString) alphabetically. Same thing with bookending splitting and joining.
  postArea.innerHTML += i.split("").sort().join("") + "<br>";
}

function palindrome(i) { //Checks to see if reverse is same as original. Can't just call reversal(i) function because it will post to postArea an additional time.
  if (i === i.split("").reverse().join("")) {
    postArea.innerHTML += "Your string is a palindrome!"
  }
}

function setTestString() { //Because we had to use the testString variable, had to use a function to set value of testString.
  testString = input.value;
  return testString;
}




button.addEventListener("click", function(){
  if(input.validity.patternMismatch === true || input.value === "") { //test whether the validity of the patternMismatch is true(meaning the pattern is NOT matched). If true alerts the inputs title.
    alert(input.title)
  } else { //If false then runs the functions defined and sets a timeout of 3 seconds just so multiple entries are not on the page if user decides to try again.
    setTestString();
    reversal(testString);
    alphabits(testString);
    palindrome(testString);
    setTimeout(function(){
      input.value = "";
      postArea.innerHTML = "";
    }, 3000)
  }
})

input.addEventListener("keyup", function(e){ //Same process as above just for the input area when the enter key is released. (Note the input area cannot be in a form tag with POST, otherwise 405 Method not allowed html error occurs)
  if(e.keyCode === 13) {
    if(input.validity.patternMismatch === true || input.value === "") {
      alert(input.title)
    } else {
      setTestString();
      reversal(testString);
      alphabits(testString);
      palindrome(testString);
      setTimeout(function(){
        input.value = "";
        postArea.innerHTML = "";
      }, 3000)
    }
  }
})
