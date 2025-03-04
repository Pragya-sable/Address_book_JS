const AddressBook = require("./services/AddressBook");
const Contact = require("./models/Contact");

const addressBook = new AddressBook();

try {
  const contact1 = new Contact(
    "Pragya",
    "Sable",
    "Bhopal",
    "India",
    "In",
    "100001",
    "9876543210",
    "sablepragya@gmail.com"
  );
  console.log(addressBook.addContact(contact1));
  console.log(addressBook.getAllContacts());
} catch (error) {
  console.error("Error:", error.message);
}

try {
  const invalidContact = new Contact(
    "an",
    "daughter",
    "abc",
    "In",
    "I",
    "100A01",
    "12345",
    "invalid-email"
  );
  console.log(addressBook.addContact(invalidContact));
} catch (error) {
  console.error("Error:", error.message);
}
