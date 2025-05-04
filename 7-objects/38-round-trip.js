const departTripTicket = {
  name: "Kacper",
  from: "Warsaw",
  to: "London",
  businessClass: false,
  upgrade() {
    this.businessClass
      ? console.log("Your ticket is already business class!")
      : (this.businessClass = true);
  },
};

const returnTripTicket = {
  name: "Kacper",
  from: "London",
  to: "Warsaw",
  businessClass: true,
  upgrade() {
    this.businessClass
      ? console.log("Your ticket is already business class!")
      : (this.businessClass = true);
  },
};

console.log(departTripTicket);
departTripTicket.upgrade();

console.log(returnTripTicket);
returnTripTicket.upgrade();
