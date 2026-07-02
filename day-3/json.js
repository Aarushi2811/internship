const obj = {
  name: "Rahul",
  age: 21,
  city: "Mumbai"
};

// Convert Object to JSON string
const json = JSON.stringify(obj);

console.log(json);


// Convert JSON string to Object
const obj2 = JSON.parse(json);

console.log(obj2);
console.log(obj2.name);
console.log(obj.age);
console.log(obj2.city);