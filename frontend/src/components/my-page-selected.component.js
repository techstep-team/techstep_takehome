import React from "react";
import { Row } from "antd";

const UserCardRow = ({ label, content }) => {
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
    { label: "ID", content: selected.id },
    { label: "Age", content: selected.age },
    { label: "Email", content: selected.email },
    { label: "Location", content: selected.location },
  ];

  return (
    <div className="selected-user-card">
      <Row className="selected-user-card__row-head">{selected.name}</Row>
      {userContent.map((item) => UserCardRow(item))}
    </div>
  );
};

export default SelectedUser;
