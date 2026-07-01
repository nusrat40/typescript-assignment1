//problem1

function filterEvenNumbers(arr: number[]): number[] {
  return arr.filter((num) => num % 2 === 0);
}

//problem2

function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

//problem3

type StringOrNumber = string | number;

function checkType(input: StringOrNumber): "String" | "Number" {
  return typeof input === "string" ? "String" : "Number";
}

//problem4

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

//problem5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}

//problem6

class Person {
  public name: string;
  public age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  public grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name ${this.name} Age: ${this.age} Grade: ${this.grade}`;
  }
}

//problem7

function getIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter((num) => arr2.includes(num));
}

