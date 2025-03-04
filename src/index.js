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
  const contact2 = new Contact(
    "Prayagrao",
    "Sable",
    "Bhopal",
    "India",
    "In",
    "1000000",
    "9197979988",
    "prayagsable@gmail.com"
  );
  console.log(addressBook.addContact(contact2));
  console.log("All Contacts Before editing", addressBook.getAllContacts());
  console.log(
    addressBook.editContact("Prayagrao", {
      address: "Betul",
      city: "Multai",
      phone: "9234567890",
    })
  );
  console.log("All Contacts After editing", addressBook.getAllContacts());
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
