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
  console.log(addressBook.deleteContact("Prayagrao"));
  console.log("All Contacts After Deleting:", addressBook.getAllContacts());
  console.log("Total Contacts:", addressBook.countContacts());
  const duplicateContact = new Contact(
    "Pragya",
    "Sable",
    "Bhopal",
    "India",
    "In",
    "100001",
    "9876543210",
    "sablepragya@gmail.com"
  );
  console.log(addressBook.addContact(duplicateContact));

  console.log("Contacts in India:");
  console.log(addressBook.searchByCityOrState("India"));

  console.log("Viewing Persons by City or State:");
  console.log(addressBook.viewPersonsByCityOrState());
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
