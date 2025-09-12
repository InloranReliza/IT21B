class Person{
name;
age;
occupation;
message;

constructor(name,age,occupation,message){
this.name = name;
this.age = age;
this.occupation = occupation;
this.message = message;
}

displayinfo(){
     console.log("Name: " + this.name);
     console.log ("Age: " + this.age);
     console.log ("Occupation : " + this.occupation);
     console.log ("Message: "+ this.message);
     console.log ("-------------------");

    }

    showName() {
  console.log(this.name);
    }
     showMessage() {
            console.log(this.message);

    }
}

const person1 = new person("Coco Martin",24,"Masahista","Ser, Tapos na po");
const person2 = new person("Victor Magtanggol",24,"Superhero","Arjoooooo,");


person1.displayInfo();
person2.displayInfo();

