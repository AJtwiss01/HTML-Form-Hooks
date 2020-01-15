import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

export const InputForm = ({ updateLeaderboardArray }) => {
  const initialInputState = { player: "", score: "" };

  const [eachEntry, setEachEntry] = useState(initialInputState);

  const handleInputChange = e => {
    setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
  };
  const handleFinalSubmit = e => {
    console.log("submit click = ", eachEntry);
    updateLeaderboardArray(eachEntry);
  };
  return (
    <>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center">
          <h2>Leaderboard</h2>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Form>
            <FormGroup>
              <Label for="player">Player</Label>
              <Input
                name="player"
                placeholder="Ex: Player 1"
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="score">Score</Label>
              <Input
                name="score"
                placeholder="Ex: 2345"
                onChange={handleInputChange}
              />
            </FormGroup>
            <Button onClick={handleFinalSubmit}>Submit</Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};
