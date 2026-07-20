const objectA = {
letraA: "A"


}


const objectB = {

letraB: "B"

}

Object.setPrototypeOf(objectB,objectA);



console.log(objectB.letraB);



function CaracterPerson (name,age) {

this.name = name;
this.age = age;



}

const testandoprototype = new CaracterPerson ("anderson","20");

CaracterPerson.prototype.height = 1.75;

console.log(testandoprototype.height,testandoprototype.name,testandoprototype.age);