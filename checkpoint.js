let  pets =  [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
];
  
  let  getAge = (pet) => new Date().getFullYear() - pet.bornOn;
  
  let petsWithAge = pets.map(el=> el.age = getAge(el))
  
  console.log(petsWithAge);
  
 let dogs =pets.filter(el=>el.type==='dog')
  
  console.log(dogs);
  
  let jasper =pets.find(el=>el.name==='Jasper')
  console.log(`Jasper is ${jasper.name} years old`);