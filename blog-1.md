1. Any disables type checking in typescript, that can crash at runtime.
   Unknown is safer because it forces type checks before usage.

let value:any=40;
value.toUpperCase(); //runtime error

let value:unknown=40;
if(typeof value ==="string"){
value.toUpperCase(); //safer
}

Narrowing reduces a broad type to a specific one using typeof, instanceof

function printLength(input: string | string[]) {
  if (typeof input === "string" || Array.isArray(input)) {
    console.log(input.length);
  }
}
