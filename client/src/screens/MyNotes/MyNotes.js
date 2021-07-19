import React, { useEffect } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listNotes } from "../../actions/notesActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

const MyNotes = () => {
  //GRAB NOTES
  const dispatch = useDispatch();
  const noteList = useSelector((state) => state.noteList);
  const { loading, notes, error } = noteList;

  //GRAB USERINFO
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const history = useHistory();

  useEffect(() => {
    dispatch(listNotes());

    if (!userInfo) {
      history.push("/");
    }
  }, [dispatch]);

  console.log(notes);

  // Delete Note Handler
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };
  return (
    <MainScreen title={`Welcome back ${userInfo.name}...`}>
      <Link to="createNote">
        <Button size="lg" style={{ marginBottom: "10px" }}>
          Create New Note
        </Button>
      </Link>
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {loading && <Loading />}
      {notes?.map((note) => (
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
