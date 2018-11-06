import React from 'react';
import { Card, CardBody, Fa } from 'mdbreact';

const CardBack = props => {
  return (
    <Card className="testimonial-card">
      <CardBody className="text-center">
        <h4 className="mt-5">
          <strong>Address</strong>
        </h4>
        <hr />
        <p className="dark-grey-text">{props.contact.address.house}</p>
        <p className="dark-grey-text">{props.contact.address.city}</p>
        <p className="dark-grey-text">{props.contact.address.zipcode}</p>
        <Fa icon="undo" size="2x" id="rotate-back" data-card={props.contact.id} onClick={props.handleCardFlip} />
        <Fa icon="edit" size="2x" id="edit-back" data-card={props.contact.id} onClick={props.toggleModal} />
      </CardBody>
    </Card>
  );
};
export default CardBack;
