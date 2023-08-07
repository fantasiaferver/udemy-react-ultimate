const myArray = [1, 2, 3, 4, 5];
const arrayList = myArray.map((item) => {
    return item * 2;
})
console.log(arrayList)

const result = arrayList.filter((item) => {
    return item >= 5
})

console.log(result)