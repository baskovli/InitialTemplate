import React from "react";
import { Card as CardBoostrap, CardBody, CardHeader } from "reactstrap";

const Card = React.memo((props: any) => {
  return (
    <CardBoostrap>
      {props.title && (
        <CardHeader>
          <i className={props.icon} /> {props.title}
        </CardHeader>
      )}
      <CardBody>{props.children}</CardBody>
    </CardBoostrap>
  );
});

export default Card;
