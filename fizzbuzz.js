exports.count = function(start,end) {
	//create a variable for our output
	var output = start;

	//modify output to look like what we want
	for (var i = start; i < end; i += 1){
		//code to be repeated goes here
		output = output + " " + (i + 1); 
	}
	//return the output; e.g. "1 2 3 4 5"
	return output;
};

exports.fizzer = function(number) {
  if (number % 3 === 0) {
    output = "Fizz";
  }
  else {number}; {}
  return "Fizz";
};

exports.fizzy = function(number) {
  if (number % 5 === 0) {
    output = "Buzz";
  }
  else {number}; {}
  return output;
};

exports.fizzed = function(number) {
  if (number % 15 === 0) {
    output = "Fizzbuzz";
  }
  else {number}; {}
  return output;
};

exports.fizz = function(number) {
  return number;
};