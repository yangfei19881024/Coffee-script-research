var age, age1, fill, person, sayName;

person = true;

person = true;

age = false;

age1 = false;

this;

sayName = function(name) {
  return alert(name);
};

if (age === true && person !== true) {
  sayName();
}

if (age === true || !age) {
  sayName();
}

fill = function(container, liquid) {
  if (liquid == null) {
    liquid = "coffee";
  }
  return "fill the " + container + " in " + liquid;
};
