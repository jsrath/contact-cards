import React from 'react';
import { Button, Container, Input, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';

const ContactForm = props => {
  return (
    <Container>
      <Modal isOpen={props.modal} toggle={props.toggleModal}>
        <ModalHeader toggle={props.toggleModal}>{props.contact.id ? <span id="form-header">Edit Contact</span> : <span>Add Contact</span>}</ModalHeader>
        <ModalBody>
          <form
            className="m-0 p-0"
            onSubmit={event => {
              event.preventDefault();
            }}
          >
            <div className="grey-text">
              <Input label="Name" data-detail="name" icon="user" group type="text" value={props.contact.name} onChange={props.handleFormChanges} />
              <Input label="Email" data-detail="email" icon="envelope" group type="text" value={props.contact.email} onChange={props.handleFormChanges} />
              <Input label="Phone" data-detail="phone" icon="phone" group type="text" value={props.contact.phone} onChange={props.handleFormChanges} />
              <Input label="Facebook" data-detail="facebook" icon="facebook" group type="text" value={props.contact.facebook} onChange={props.handleFormChanges} />
              <Input label="LinkedIn" data-detail="linkedin" icon="linkedin" group type="text" value={props.contact.linkedin} onChange={props.handleFormChanges} />
              <Input label="House Number" data-detail="house" icon="home" group type="text" value={props.contact.address.house} onChange={props.handleFormChanges} />
              <Input label="City" data-detail="city" icon="building" group type="text" value={props.contact.address.city} onChange={props.handleFormChanges} />
              <Input label="Zip Code" data-detail="zipcode" icon="map" group type="text" value={props.contact.address.zipcode} required onChange={props.handleFormChanges} />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button id="delete-button" data-id={props.contact.id} onClick={props.handleDelete}>
            Delete Contact
          </Button>
          <Button id="save-button" data-id={props.contact.id} onClick={props.handleSave}>
            Save Contact
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default ContactForm;
