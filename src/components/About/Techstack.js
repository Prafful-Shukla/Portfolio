import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiRedis,
  DiJava,
  DiGithubFull,
} from "react-icons/di";
import {
  SiMysql,
  SiExpress,
  SiJava,
  SiBlockchaindotcom,
  SiSpringboot,
  SiApachekafka,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiApachekafka/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBlockchaindotcom />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubFull />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiRedis />
      </Col>
    </Row>
  );
}

export default Techstack;
// export declare const DiGithubAlt: IconType;
// export declare const DiGithubBadge: IconType;
// export declare const DiGithubFull: IconType;
// export declare const DiGithub: IconType;
// DiJava: IconType;
// DiIntellij: IconType;
// DiJsBadge: IconType;
// DiMysql: IconType;
// DiReact: IconType;
// DiRedis: IconType;
// 
// 
// 
