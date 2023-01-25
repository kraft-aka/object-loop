// factory functions for populating objects
const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log("Beep Boop");
    },
  };
};

const tinCan = robotFactory("P-500", true);
tinCan.beep();

const getProps = (obj) => {
  for (let item in obj) {
    console.log(`${item}: ${obj[item]}`);
  }
};

getProps(tinCan);

// with ES6
const employeeFactory = (name, age, position, email) => {
  return {
    name,
    age,
    position,
    email,
    getFullInfo() {
      console.log(`name:${this.name}, age:${this.age} position:${this.position}, email:${this.email}`)
    }
  }
}

const newEmp1 = employeeFactory('John Doe', 35, 'Sales Manager','johndoe@mail.com')
getProps(newEmp1)
newEmp1.getFullInfo()
