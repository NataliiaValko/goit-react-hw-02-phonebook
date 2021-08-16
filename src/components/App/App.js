import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Section from '../Section';
import Container from '../Container';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

// import s from "./App.module.css";

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  setFilterValue = e => {
    this.setState({ filter: e.currentTarget.value.trim() });
  };

  getResultSearch = () => {
    const { filter, contacts } = this.state;

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter),
    );
  };

  render() {
    const { filter } = this.state;
    const ResultSearch = this.getResultSearch();
    return (
      <>
        <Section>
          <Container>
            <h1>My phonebook</h1>
            <h2>Add new contact</h2>
            <ContactForm onSubmit={this.addContact} />
          </Container>
        </Section>
        <Section>
          <Container>
            <h2>Contacts</h2>
            <Filter name={filter} onChange={this.setFilterValue} />
            <ContactList
              contacts={ResultSearch}
              onDeleteContact={this.deleteContact}
            />
          </Container>
        </Section>
      </>
    );
  }
}

export default App;
