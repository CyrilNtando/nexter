class Person {
  constructor(name, surname) {
    (this.name = name), (this.surname = surname);
  }

  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }

  getSurname() {
    return this.surname;
  }
}

export default Person;
