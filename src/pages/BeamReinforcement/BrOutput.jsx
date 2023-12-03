import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import { MathJax } from "better-react-mathjax";
import PropTypes from "prop-types";

export function BrOutput(props) {
  console.log(props.data.data.b);

  return (
    <>
      <Accordion className="mt-3 mb-3" style={{ width: "100%" }}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Bemessungsprotokoll</Accordion.Header>
          <Accordion.Body className="d-flex align-items-center justify-content-center flex-column p-0">
            <ListGroup style={{ width: "100%" }} as="ol">
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto d-flex">
                  <MathJax>
                    <div className="fw-bold">Randbedingungen</div>
                    {"\\(b \\)"}&nbsp;{"\\(= \\)"}&nbsp;
                    {/* {`\\(${props.data.data.b} \\)`} */}
                    {props.data.data.b}
                    &nbsp;{"\\(cm,\\)"}&emsp;{"\\(c_{nom,a} \\)"}&nbsp;
                    {"\\(= \\)"}&nbsp;
                    {props.data.data.cNomA}
                    &nbsp;{"\\(cm,\\)"} &emsp;{"\\(c_{nom,i} \\)"}&nbsp;
                    {"\\(= \\)"}&nbsp;
                    {/* {`\\(${props.data.data.cNomI} \\)`} */}
                    {props.data.data.cNomI}
                    &nbsp;{"\\(cm,\\)"}&nbsp;
                  </MathJax>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto d-flex">
                  <MathJax>
                    {"\\(\\theta_{Bü} \\)"}&nbsp;
                    {"\\(= \\)"}&nbsp;
                    {props.data.data.thetaBügel}
                    &nbsp;{"\\(cm,\\)"}&emsp;
                    {"\\(\\theta \\)"}&nbsp;
                    {"\\(= \\)"}&nbsp;
                    {props.data.data.theta}
                    &nbsp;{"\\(cm,\\)"}
                  </MathJax>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <MathJax>
                    <div className="fw-bold">Zwischenergebnisse</div>
                    {"\\(D_{Bü} \\)"}&nbsp;
                    {"\\(= \\)"}&nbsp; {props.data.data.dMin}
                    &nbsp;{"\\(cm,\\)"}&emsp;
                    {"\\(s_{min} \\)"}&nbsp;
                    {"\\(= \\)"}&nbsp; {props.data.data.sMin}
                    &nbsp;{"\\(cm,\\)"}
                  </MathJax>
                </div>
              </ListGroup.Item>

              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start flex-column"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    Maximalen Zahl &rdquo;n&rdquo; der Stäbe im
                    Balkenquerschnitt
                  </div>
                  {/*                   <MathJax>
                    {`\\(n=Ganzzahl \\left[ \\frac{b \\ - \\ c_{nom,a} \\ - \\ c_{nom,i} \\ - \\ 2 \\ \\cdot \\ \\theta_{Bü} \\ - \\ (1-\\frac{1}{\\sqrt{2}}) \\cdot D_{Bü}\\ - \\ \\frac{1}{\\sqrt{2}} \\cdot \\ \\theta \\ - \\ \\theta \\ - \\ s_{min} }{\\theta \\ + \\ s_{min}}  \\right] \\ + \\ 2 =  \\)`}
                    {`\\(Term \\ 1 = b \\ - \\ c_{nom,a} \\ - \\ c_{nom,i} \\ - \\ 2 \\ \\cdot \\ \\theta_{Bü} \\ - \\ (1-\\frac{1}{\\sqrt{2}}) \\cdot D_{Bü}\\ - \\ \\frac{1}{\\sqrt{2}} \\cdot \\ \\theta \\ - \\ \\theta \\ - \\ s_{min}\\)`}
                    {`\\(Term \\ 2 = - \\ 2 \\ \\cdot \\ \\theta_{Bü} \\)`}
                    {`\\(n=Ganzzahl \\left[ \\frac{Term \\ 1 \\ - \\ Term \\ 2}{Term 3}  \\right] \\ + \\ 2 =  \\)`}
                    &nbsp; {props.data.data.n}
                  </MathJax> */}
                  <MathJax>
                    {`\\(Term \\ 1 = b \\ - \\ c_{nom,a} \\ - \\ c_{nom,i} \\)`}
                  </MathJax>
                  <MathJax>
                    {`\\(Term \\ 2 = - \\ 2 \\ \\cdot \\ \\theta_{Bü} \\ - \\ (1-\\frac{1}{\\sqrt{2}}) \\cdot D_{Bü}\\)`}
                  </MathJax>
                  <MathJax>
                    {`\\(Term \\ 3 =  - \\ \\frac{1}{\\sqrt{2}} \\cdot \\ \\theta \\ - \\ \\theta \\ - \\ s_{min}\\)`}
                  </MathJax>
                  <MathJax>
                    {`\\(Term \\ 4 = \\theta \\ + \\ s_{min}\\)`}
                  </MathJax>
                  <MathJax>
                    {`\\(n=Ganzzahl\\left[ \\frac{Term \\ 1 + Term \\ 2 + Term \\ 3 }{Term \\ 4}  \\right]+2\\)`}{" "}
                  </MathJax>
                  <MathJax>
                    {`\\(n=\\)`}&nbsp; {props.data.data.n}
                  </MathJax>
                </div>
                <div className="mt-2">
                  {/* <MathJax hideUntilTypeset={"first"} inline dynamic>
                    <mrow>
                      <mi>x</mi>
                      <mo>=</mo>
                      <mi>{props.data.data.n}</mi>
                    </mrow>
                  </MathJax> */}
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

BrOutput.propTypes = {
  data: PropTypes.object,
  b: PropTypes.number,
  cNomA: PropTypes.number,
  cNomI: PropTypes.number,
  thetaBügel: PropTypes.number,
  theta: PropTypes.number,
  dMin: PropTypes.number,
  sMin: PropTypes.number,
  n: PropTypes.number,
};
