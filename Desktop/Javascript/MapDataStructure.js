//store key Value pair

const person =new Map();
person.set('firstName','Ash')
person.set('age','21');
console.log(person);

for (let [key,value]  of person){
    console.log(key,value)
}
