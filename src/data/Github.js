import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { themeData } from "./themeData";

function Github() {
  return (
    <Row
      className="github_Activity"
      style={{ justifyContent: "center", paddingBottom: "10px", color:themeData.theme.primary }}
    >
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="moinakram1234"
        blockSize={15}
        blockMargin={5}
        color="rgb(130 58 224) "
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
