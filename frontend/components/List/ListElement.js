import styled from "styled-components";
import { useState } from "react";
import ListElementContainer from "./ListElementContainer";
import ListElementHeader from "./ListElementHeader";
import Subtitle from "../Text/Subtitle";
import Audio from "../Audio/Audio";
import Paragraph from "../Text/Paragraph";
import Button from "../Form/Button";

function ListElement(props) {
  const { song, light } = props;
  const [maximize, setMaximize] = useState(false);
  // if (light === true) {
  //   return (
  //     <ListElementContainer>
  //       <ListElementHeader target="_blank" href={song[1]}>
  //         {song[0]}
  //       </ListElementHeader>
  //     </ListElementContainer>
  //   );
  // }

  return (
    <ListElementContainer>
      <ListElementHeader target="_blank" href={song[1]}>
        {song[0]}
      </ListElementHeader>
      <Paragraph>{`${song[3]}, ${song[4]}, ${
        song[5] ? song[5] : "Encoder: unknown"
      }`}</Paragraph>
      <Paragraph italic>{song[2]}</Paragraph>
      <Button onClick={() => setMaximize(!maximize)}>
        {maximize ? "noaudio" : "audio"}
      </Button>
      {maximize ? <Audio src={song[1]} /> : null}
    </ListElementContainer>
  );
}

export default ListElement;
