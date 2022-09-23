let people = [
    {
        name:"Med",age:25
    },
    {
        name:"slh",age:"29"
    },
    {
        name:"imen",age:19
    },
    {
        name:"firas",age:7
    }
]

let ageSum = people
.filter((person)=>person.age >=25 && person.age <30)
.filter((person)=>person.name ==="Med")
.map((person)=>person.age)
console.log(ageSum)