

// Generates the correct FizzBuzz up to 101 using functional programming which does not alter states

const generateFizzBuzz = () => {
	let arr = [];

	for (let i = 1; i <= 101; i++) {
		if (i % 15 === 0) arr.push('Fizzbuzz');
		else if (i % 3 === 0) arr.push('Fizz');
		else if (i % 5 === 0) arr.push('Buzz');
		else arr.push(i);
	}

	return arr;
};

const isNumber = (number) => {
	if (number % 15 === 0) return 'Fizzbuzz';
	else if (number % 3 === 0) return 'Fizz';
	else if (number % 5 === 0) return 'Buzz';
	else return number;
};

// I created a test with a helper function to test each value if its a correct FizzBuzz

const testFizzBuzz = (arr) => {

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== isNumber(arr[i]))
			return false;
	}

	return true;

};

// console.log(generateFizzBuzz());

console.log(testFizzBuzz(generateFizzBuzz())); // => true
// console.log(testFizzBuzz([1, 2, 3]));