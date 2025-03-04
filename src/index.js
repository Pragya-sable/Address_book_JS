const AddressBook = require("./services/AddressBook");
const Contact = require("./models/Contact");

const addressBook = new AddressBook();

const contact1 = new Contact(
  "Pragya",
  "Sable",
  "Bhopal",
  "India",
  "In",
  "10001",
  "1234567890",
  "sablepragya@gmail.com"
);
console.log(addressBook.addContact(contact1));
console.log(addressBook.getAllContacts());
