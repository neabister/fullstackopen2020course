// variables
const x = 1
let y = 5

console.log(x,y)
y += 10
console.log(x,y)

// arrays

const t = [1, -1, 3]

t.push(5)
console.log(t.length)
console.log(t)

t.forEach(value => {
    console.log(`This is for loop for array:${value}`)
})

// concat preferred over push, doesnt change existing array

const t2 = t.concat(5)
console.log(t)
console.log(t2)

// map replaces all array values with specified function

const m1 = t.map(value => '<li>' +  value * 2 + '</li>')
console.log(m1)

// destructing assignment

const [var1, var2, ...other] = t
console.log(var1, var2)
console.log(other)

// object literals

const object1 = {
    name: 'Nea',
    age: 20,
    education: 'MSc',
}

const object2 = {
    name: 'Course',
    level: 'Intermed',
    size: 5,
}

const object3 = {
    name: {
        first: 'Matti',
        last: 'Meikäläinen',
    },
    grades: [2, 4, 5, 3],
    department: 'Data Science', 
}

console.log(object1.name)
const fieldName = 'age'
console.log(object3.grades[0])
object1.address = 'Kuopio'
object1['mood'] = 'happy'
object1.test_not = 34

console.log(object1)

// arrow functions

const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}

const result_sum = sum(1, 6)
console.log(result_sum)

// arrow function with only one parameter and expression can be shortened

const square = p => p * p

// with map function

const tSquared = t.map(p => p * p)
console.log(t)
console.log(tSquared)

