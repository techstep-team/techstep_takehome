import React from "react";
import { Row } from "antd";

const UserCardRow = (props) => {
  const { label, content } = props.item;
  return (
    <Row>
      <span className="selected-user-card__row-label">{label}:</span>
      <span className="selected-user-card__row-content">
        {content ? content : "Oops, not specified"}
      </span>
    </Row>
  );
};

const SelectedUser = (props) => {
  const { selected } = props;
  const userContent = [
    { label: "ID", content: selected.id, key: 1 },
    { label: "Age", content: selected.age, key: 2 },
    { label: "Email", content: selected.email, key: 3 },
    { label: "Location", content: selected.location, key: 4 },
  ];

  return (
    <div className="selected-user-card">
      <Row className="selected-user-card__row-head">{selected.name}</Row>
      {userContent.map((item, key) => (
        <UserCardRow item={item} key={key} />
      ))}
    </div>
  );
};

export default SelectedUser;
