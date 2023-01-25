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
