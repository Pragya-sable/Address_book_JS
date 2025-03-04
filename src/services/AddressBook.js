const Contact = require("../models/Contact");

class AddressBook {
  constructor() {
    this.contacts = [];
  }

  addContact(contact) {
    if (
      this.contacts.some(
        (c) => c.phone === contact.phone || c.email === contact.email
      )
    ) {
      throw new Error(
        "Duplicate Contact! Phone number or Email already exists."
      );
    }
    this.contacts.push(contact);
    return "Contact added successfully!";
  }

  getAllContacts() {
    return this.contacts;
  }

  findContactByName(name) {
    return this.contacts.find(
      (c) => c.firstName.toLowerCase() === name.toLowerCase()
    );
  }

  editContact(name, updatedDetails) {
    let contact = this.findContactByName(name);
    if (!contact) {
      throw new Error("Contact not found!");
    }

    Object.keys(updatedDetails).forEach((key) => {
      if (updatedDetails[key]) {
        contact[key] = updatedDetails[key];
      }
    });

    return "Contact updated successfully!";
  }
  deleteContact(name) {
    const index = this.contacts.findIndex(
      (c) => c.firstName.toLowerCase() === name.toLowerCase()
    );
    if (index === -1) {
      throw new Error("Contact not found!");
    }
    this.contacts.splice(index, 1);
    return "Contact deleted successfully!";
  }
}

module.exports = AddressBook;
