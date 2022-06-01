import { useState } from "react";
import Form from "../components/Form/Form";
import Input from "../components/Form/Input";
import Button from "../components/Form/Button";
import Header from "../components/Text/Header";
import List from "../components/List/List";
import ListElement from "../components/List/ListElement";

function Index() {
  const [textToSearch, setTextToSearch] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSearch(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const mode = e.target.name;
      if (mode === "phrase") {
        const response = await fetch(
          `${process.env.BACKEND}/findByPhrase?phrase=${textToSearch}`,
          { method: "GET" }
        );
        const data = await response.json();
        setResult(data);
      } else if (mode === "encoder") {
        const response = await fetch(
          `${process.env.BACKEND}/findByEncoder?encoder=${textToSearch}`,
          { method: "GET" }
        );
        const data = await response.json();
        setResult(data);
      }
    } catch (error) {
      setResult([]);
      console.log(error);
    }
    setLoading(false);
  }

  return (
    <>
      <Form>
        <Input
          onChange={(e) => setTextToSearch(e.target.value)}
          type="text"
        ></Input>
        {loading ? null : (
          <>
            <Button name="phrase" onClick={handleSearch}>
              phrase
            </Button>
            <Button name="encoder" onClick={handleSearch}>
              encoder
            </Button>
          </>
        )}
      </Form>
      <Header>Results: {result.length > 0 ? `(${result.length})` : ""}</Header>
      <List>
        {result.length > 0
          ? result.map((song, index) => (
              <ListElement
                light={result.length > 10000}
                key={song[1] + index}
                song={song}
              />
            ))
          : null}
      </List>
    </>
  );
}

export default Index;
