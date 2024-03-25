//  ### Exercise: Level 1
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

// 1. Declare an _empty_ array;
const ar = Array()

// 2. Declare an array with more than 5 number of elements;
const arr = [1, 2, 3, 4, 5, 6, 7]

// 3. Find the length of your array;
console.log(arr.length)

// 4. Get the first item, the middle item and the last item of the array;
console.log(arr[0])
console.log(arr[3])
console.log(arr[6])

// 5. Declare an array called _mixedDataTypes_, 
// put different data types in the array and find the length of the array. 
// The array size should  be greater than 5
const _mixedDataTypes_ = [1, "a", "aya", [3, 54], 32, "hag"]
console.log(arr.length)

// 6. Declare an array variable name itCompanies and assign initial values 
// Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

// 7. Print the array using _console.log()_
console.log(itCompanies)

// 8. Print the number of companies in the array
console.log(itCompanies.length)

// 9. Print the first company, middle and last company
console.log(itCompanies[0])
console.log(itCompanies[4])
console.log(itCompanies[6])

// 10. Print out each company
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])

// 11. Change each company name  to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies[0],itCompanies[1],itCompanies[2],itCompanies[3],itCompanies[4],itCompanies[5], "and",itCompanies[6], "are big IT companies")

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is _not found_
const sCompany = "Microsoft"
if (itCompanies.includes(sCompany)) {
    console.log(sCompany)
}
else{
    console.log("company is _not found_")
}

// 14. Filter out companies which have more than one 'o' without the filter method
for (i in itCompanies) {
    if (itCompanies[i].includes("o")) {
        if (itCompanies[i].split("o").length >= 3) {
            console.log(itCompanies[i])
        }
    }
}

// 15. Sort the array using _sort()_ method
console.log(itCompanies.sort())

// 16. Reverse the array using _reverse()_ method
console.log(itCompanies.reverse())

// 17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3))

// 18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(4,7))

// 19. Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3,4))

// 20. Remove the first IT company from the array
console.log(itCompanies.splice(0,1))

// 21. Remove the middle IT company or companies from the array
console.log(itCompanies.splice(2,2))

// 22. Remove the last IT company from the array
console.log(itCompanies.splice(3))

// 23. Remove all IT companies
console.log(itCompanies.splice())



// ### Exercise: Level 3

// 1. The following is an array of 10 students ages:

// - Sort the array and find the min and max age
 const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
 const min = Math.min(...ages)
 const max = Math.max(...ages)
 console.log(ages.sort())
 console.log(min)
 console.log(max)

// - Find the median age(one middle item or two middle items divided by two)
console.log(ages)
// - Find the average age(all items divided by number of items)
// - Find the range of the ages(max minus min)
// - Compare the value of (min - average) and (max - average), use _abs()_ method
// 1.Slice the first ten countries from the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
// 1. Find the middle country(ies) in the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
// 2. Divide the countries array into two equal arrays if it is even.  If countries array is not even , one more country for the first half.

// 🎉 CONGRATULATIONS ! 🎉