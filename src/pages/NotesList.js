import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";

function NotesList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("/notes")
      .then((r) => r.json())
      .then(setNotes);
  }, []);

  return (
 <div>
     <Wrapper>
      {notes.length > 0 ? (
        notes.map((note) => (
          <Note key={note.id}>
            <Box>
              <h2>{note.title}</h2>
              <ReactMarkdown>{note.content}</ReactMarkdown>
              <p>
                <em>Author:</em>
                &nbsp;·&nbsp;
                <cite>{note.user.username}</cite>
              </p>
            </Box>
          </Note>
        ))
      ) : (
        <>
          <h2>No Notes Found</h2>
          <Button as={Link} to="/new">
            Form a new note content.
          </Button>
        </>
      )}
    </Wrapper>
 </div>
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const Note = styled.article`
  margin-bottom: 24px;
`;

export default NotesList;
