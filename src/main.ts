import MyStack from "./MyStack.js";

const testStack = new MyStack<number>(3);
console.log(testStack);

testStack.push(0);
console.log(testStack);