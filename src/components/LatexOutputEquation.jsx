import { ListGroup } from "react-bootstrap";
import { MathJax } from "better-react-mathjax";

export function LatexOutputEquation(props) {
  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto"></div>
    </ListGroup.Item>
  );
}
