function addNumbers(a: number, b: number) {
	return a + b;
}

function multiplyNumbers(a: number, b: number) {
	return a * b;
}

function findLargest(numbers: number[]) {
	let largest = -Infinity;

	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] > largest) {
			largest = numbers[i];
		}
	}

	return largest;
}

//TODO: ask if its possible to throw error on e.g. str.a when fn is called with hello
type LetterCount<T extends string> = Record<T[number], number>;

function getLetterCount<T extends string>(str: T): LetterCount<T> {
	let letterCount = <LetterCount<T>>{};

	for (let i = 0; i < str.length; i++) {
		let letter = str[i].toLowerCase();
		if (letterCount[letter]) {
			letterCount[letter]++;
		} else {
			letterCount[letter] = 1;
		}
	}

	return letterCount;
}

const str = getLetterCount('hello');

console.log(str.a); // should throw an error

const myNumber = 42;
const myString = 'Hello, TypeScript!';
const myBoolean = true;
const myArray = [1, 2, 3, 4, 5];
const myObject = { name: 'John Doe', age: 30 };

// in this case could also be of type number | string | Record<string, string | number>
let myAny: any = 42;
myAny = 'Hello, TypeScript!';
myAny = { name: 'Jane Doe', age: 25 };
/* ******************************************************************************************************************************** */

//TODO: ask if is there a way for the return type to be either -1 or a valid index of array based on its length

type SearchFn<T> = (array: T[], target: T) => number;

function linearSearch<T>(array: T[], target: T): number {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === target) {
			return i;
		}
	}
	return -1;
}

const lsearch = linearSearch([1, 2, 3], 1); // so e.g. it'd be 0 (index), or a range of 0 to 2 (afaik this one is impossible)

//TODO same as above, also if there is a way to intergace SearchFn here, i've tried with arrow fns too but couldnt get it working
function binarySearch<T>(array: T[], target: T): number {
	let left = 0;
	let right = array.length - 1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (array[mid] === target) {
			return mid;
		} else if (array[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	return -1;
}

class Node2<T> {
	value: T;
	children: Node2<T>[];

	constructor(value: T) {
		this.value = value;
		this.children = [];
	}

	addChild(node: Node2<T>) {
		this.children.push(node);
	}
}

function depthFirstSearch<T>(root: Node2<T>, target: T): Node2<T> | null {
	let stack = [root];

	while (stack.length > 0) {
		let node = stack.pop();

		if (!node) continue;

		if (node.value === target) {
			return node;
		}

		for (let i = node.children.length - 1; i >= 0; i--) {
			stack.push(node.children[i]);
		}
	}

	return null;
}

let root = new Node2(1);
let child1 = new Node2(2);
let child2 = new Node2(3);
let grandchild1 = new Node2(4);
let grandchild2 = new Node2(5);
