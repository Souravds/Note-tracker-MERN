import React, { useState, useEffect } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import MainScreen from "../../components/Header/MainScreen";
import { Link } from "react-router-dom";
import axios from "axios";

const MyNotes = () => {
  const [notes, setnotes] = useState([]);

  const fetchNotes = async () => {
    const { data } = await axios.get("/api/notes");
    setnotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  console.log(notes);

  // Delete Note Handler
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };
  return (
    <MainScreen title="Welcome back Sourav das">
      <Link to="createNote">
        <Button size="lg" style={{ marginBottom: "10px" }}>
          Create New Note
        </Button>
      </Link>

      {notes.map((note) => (
        <Accordion key={note._id}>
          <Card>
            <Card.Header
              style={{
                display: "flex",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
            >
              <span style={{ flex: 1, fontSize: "18px", fontWeight: 700 }}>
                <Accordion.Toggle as={Card.Text} variant="link" eventKey="0">
                  {note.title}
                </Accordion.Toggle>
              </span>
              <div>
                <Button href={`/note/${note._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Badge variant="success">{note.category}</Badge>
                <blockquote className="blockquote mb-0">
                  <p> {note.content} </p>
                  {/* <footer className="blockquote-footer">
                    {note.category}{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer> */}
                </blockquote>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
