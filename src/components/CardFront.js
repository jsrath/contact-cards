import React from 'react';
import { Card, CardBody, Fa, Tooltip } from 'mdbreact';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const CardFront = props => {
  return (
    <Card className="testimonial-card">
      <div className="card-up blue-gradient" />
      <div className="avatar mx-auto white">
        <img src={props.contact.photo} alt="avatar" className="rounded-circle img-fluid" />
      </div>
      <CardBody className="text-center">
        <h4 className="mt-1">
          <strong>{props.contact.name}</strong>
        </h4>
        <hr />
        <ul className="list-inline m-0 p-0">
          <li className="list-inline-item email">
            <Tooltip className="px-3 fa-lg" placement="bottom" tooltipContent={props.contact.email}>
              <CopyToClipboard text={props.contact.email} onCopy={() => (document.querySelector('.tooltip-inner').innerText = 'Copied!')}>
                <Fa icon="envelope" />
              </CopyToClipboard>
            </Tooltip>
          </li>
          <li className="list-inline-item phone">
            <Tooltip className="px-3 fa-lg" placement="bottom" tooltipContent={props.contact.phone}>
              <CopyToClipboard text={props.contact.phone} onCopy={() => (document.querySelector('.tooltip-inner').innerText = 'Copied!')}>
                <Fa icon="phone" />
              </CopyToClipboard>
            </Tooltip>
          </li>
          <li className="list-inline-item facebook">
            <Tooltip className="px-3 fa-lg" placement="bottom" tooltipContent={props.contact.facebook}>
              <CopyToClipboard text={props.contact.facebook} onCopy={() => (document.querySelector('.tooltip-inner').innerText = 'Copied!')}>
                <Fa icon="facebook" />
              </CopyToClipboard>
            </Tooltip>
          </li>
          <li className="list-inline-item linkedin">
            <Tooltip className="px-3 fa-lg" placement="bottom" tooltipContent={props.contact.linkedin}>
              <CopyToClipboard text={props.contact.linkedin} onCopy={() => (document.querySelector('.tooltip-inner').innerText = 'Copied!')}>
                <Fa icon="linkedin" />
              </CopyToClipboard>
            </Tooltip>
          </li>
        </ul>
        <Fa icon="repeat" size="2x" id="rotate" data-card={props.contact.id} onClick={props.handleCardFlip} />
        <Fa icon="edit" size="2x" id="edit" data-card={props.contact.id} onClick={props.toggleModal} />
      </CardBody>
    </Card>
  );
};

export default CardFront;
