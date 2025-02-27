import React from "react";
import { Container } from "react-bootstrap";

const NavBar = ({ search }) => {
  const onSearch = (e) => {
    search(e);
  };
  return (
    <div className="nav">
      <Container>
        <div>
          <input
            type="text"
            className="form-control my-2"
            onChange={(e) => onSearch(e.target.value)}
            placeholder="ابحث"
          />
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
