
const validation = [{ condition:> 30, message: "Age should be greater than 30" }, { condition:> 50, message: "Age should be greater than 50" }]
const data = [{ name: "John", age: 25 }, { name: "Jane", age: 35 }, { name: "Doe", age: 45 }]

const validateData = (item) => {
    const error = validation.filter(val => val.condition(item.age))
    return error.message ? error.message : "No error"
}
const result = validateData(data[0])
console.log(result) 