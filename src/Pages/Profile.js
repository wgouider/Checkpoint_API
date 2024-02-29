import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Profile = () => {
  const { id } = useParams(); //resposnable de l'ID
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/?id=${id}`)
      .then((res) => setUser(res.data[0]))
      .catch((err) => console.log(err));
  });
  console.log("user:", user);
  return (
    <div>
        <h2>User Profile </h2>  
        <Card style={{ width: "18rem" }}>

        <Card.Img variant="top" src="https://www.sosfactory.com/wp-content/uploads/2018/06/cristiano-ronaldo.png" />
        <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text> {user.phone} </Card.Text>
        <Card.Text> {user.email} </Card.Text>
        <Button variant="primary" >
        <Link to={`/users/`}> <b style={{color:"white"}}>Goto Users List</b> </Link>
        </Button>
        </Card.Body>
    </Card>

        
    </div>
  );
};

export default Profile;
