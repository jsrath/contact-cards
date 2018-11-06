import React, { Component } from 'react';
import './App.css';
import { Col, Container, Row } from 'mdbreact';
import data from './assets/data.json';
import NavBar from './components/NavBar';
import CardFront from './components/CardFront';
import CardBack from './components/CardBack';
import ContactForm from './components/ContactForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: data,
      modal: false,
      editing: {
        address: {
          house: '',
          city: '',
          zipcode: '',
        },
      },
      copied: false,
      search: '',
    };
  }

  /* Adding, Updating, Saving and Deleting Contacts
  --------------------------------------------------- */
  handleDelete = event => {
    if (window.confirm(`Delete ${this.state.editing.name}?`)) {
      const idToDelete = Number(event.target.dataset.id);
      const duplicate = [...this.state.contacts].filter(contact => contact.id !== idToDelete);
      this.setState({ contacts: duplicate }, () => this.toggleModal());
    }
  };

  handleSave = async () => {
    if (!this.state.editing.name) {
      return alert('Please enter a name');
    }

    if (!this.state.editing.id) {
      const newId = Math.max(...this.state.contacts.map(contact => contact.id)) + 1;
      let editing = { ...this.state.editing };
      editing.id = newId;
      editing.photo = `https://randomuser.me/api/portraits/men/${newId}.jpg`;
      await this.setState({ editing });
    }
    const idToUpdate = this.state.editing.id;
    const duplicate = [...this.state.contacts].filter(contact => contact.id !== idToUpdate);
    this.setState({ contacts: [...duplicate, this.state.editing] }, () => this.toggleModal());
  };

  handleFormChanges = event => {
    let detail = event.target.dataset.detail;
    let editing = { ...this.state.editing };

    switch (detail) {
      case 'name':
        editing.name = event.target.value;
        this.setState({ editing });
        break;
      case 'email':
        editing.email = event.target.value;
        this.setState({ editing });
        break;
      case 'phone':
        editing.phone = event.target.value;
        this.setState({ editing });
        break;
      case 'facebook':
        editing.facebook = event.target.value;
        this.setState({ editing });
        break;
      case 'linkedin':
        editing.linkedin = event.target.value;
        this.setState({ editing });
        break;
      case 'house':
        editing.address.house = event.target.value;
        this.setState({ editing });
        break;
      case 'city':
        editing.address.city = event.target.value;
        this.setState({ editing });
        break;
      case 'zipcode':
        editing.address.zipcode = event.target.value;
        this.setState({ editing });
        break;
      default:
        break;
    }
  };

  /* Search
  --------------------------------------------------- */
  handleSearch = event => {
    this.setState({ search: event.target.value });
  };

  clearSearch = () => {
    this.setState({ search: '' });
  };

  /* UI Events
  --------------------------------------------------- */
  handleCardFlip = event => {
    let cardId = event.target.dataset.card;
    if (this.state[cardId]) {
      this.setState({ [cardId]: false });
    } else {
      this.setState({ [cardId]: true });
    }
  };

  toggleModal = event => {
    if (event) {
      let cardId = event.target.dataset.card;
      this.state.contacts.forEach(contact => {
        Number(cardId) === contact.id && this.setState({ editing: contact });
      });
    }
    const reset = {
      address: {
        house: '',
        city: '',
        zipcode: '',
      },
    };
    this.setState({ modal: !this.state.modal }, () => this.state.modal === false && this.setState({ editing: reset }));
  };

  render() {
    return (
      <div className="App">
        <NavBar toggleModal={this.toggleModal} search={this.state.search} clearSearch={this.clearSearch} handleSearch={this.handleSearch} />
        <ContactForm
          modal={this.state.modal}
          handleSave={this.handleSave}
          handleDelete={this.handleDelete}
          toggleModal={this.toggleModal}
          contact={this.state.editing}
          handleFormChanges={this.handleFormChanges}
        />
        <Container className="py-5">
          <Row>
            {this.state.contacts
              .sort((a, b) => a.name.localeCompare(b.name))
              .filter(contact => contact.name.toLowerCase().includes(this.state.search.toLowerCase()))
              .map(contact => (
                <Col className="d-flex justify-content-center col-lg-4 col-md-12 mb-4" key={contact.id}>
                  {this.state[contact.id] === undefined || this.state[contact.id] === false ? (
                    <CardFront contact={contact} handleCardFlip={this.handleCardFlip} toggleModal={this.toggleModal} />
                  ) : (
                    <CardBack contact={contact} handleCardFlip={this.handleCardFlip} toggleModal={this.toggleModal} />
                  )}
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
