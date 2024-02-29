import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div >
      <Card  style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://www.sosfactory.com/wp-content/uploads/2018/06/cristiano-ronaldo.png"
        />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text> {user.username} </Card.Text>
          <Card.Text> {user.email} </Card.Text>
          <Button variant="primary">
            <Link to={`/user/${user.id}`}>
              {" "}
              <b style={{color:"white"}}>Check My Profile</b>
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>


  );
};

export default UserCard;
