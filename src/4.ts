// Key Class
class Key {
    private signature: number;
  
    constructor() {
      this.signature = Math.random();
    }
    getSignature(): number {
      return this.signature;
    }
  }
  
  // Person Class
  class Person {
    private key: Key;
  
    constructor(key: Key) {
      this.key = key;
    }
    getKey(): Key {
      return this.key;
    }
  }
  
  // Abstract House class
  abstract class House {
    protected door: boolean = false;
    protected key: Key;
    private tenants: Person[] = [];
  
    constructor(key: Key) {
      this.key = key;
    }
    abstract openDoor(key: Key): void;
  
    comeIn(person: Person): void {
      if (this.door) {
        this.tenants.push(person);
        console.log("The person entered the house.");
      } else {
        console.log("The door is closed. The person cannot enter.");
      }
    }
  }
  
  class MyHouse extends House {
    openDoor(key: Key): void {
      if (key.getSignature() === this.key.getSignature()) {
        this.door = true;
        console.log("The door is unlocked");
      } else {
        this.door = false;
        console.log("The door is locked");
      }
    }
  }
  
  const key = new Key();
  
  const house = new MyHouse(key);
  const person = new Person(key);
  
  house.openDoor(person.getKey());
  
  house.comeIn(person);
  
  export {};
  