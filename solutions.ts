// Problem 1
const filterEvenNumbers = (numbers: number[]): number[] => {
  return numbers.filter((num: number) => num % 2 === 0);
};

// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); 

// Problem 2
const reverseString = (text: string): string => {
  let reversed = "";

  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }

  return reversed;
}

// console.log(reverseString("typescript"));


// Problem 3
type StringOrNumber = string | number;

const checkType = (value : StringOrNumber): string => {
    if (typeof value === "string") {
        return "String";
    }
    else {
        return "Number";
    }
}

// console.log(checkType("Hello"));
// console.log(checkType(42));

// Problem 4
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
}

// const user = { id: 1, name: "John Doe", age: 21 };
// console.log(getProperty(user, "name"));


// Problem 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book) => {
  return {
    ...book,
    isRead: true,
  };
};

// Sample Input:
// const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
// console.log(toggleReadStatus(myBook));



// Problem 6
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// Sample Input:
// const student = new Student("Alice", 20, "A");
// console.log(student.getDetails());



// Problem 7
const getIntersection = (first: number[], second: number[]): number[] => {
  const result: number[] = [];

  for (let i = 0; i < first.length; i++) {
    const value = first[i];

    if (second.includes(value)) {
      result.push(value);
    }
  }

  return result;
}

// console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

