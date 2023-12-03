import { Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Navigation } from "./components/Navigation";
import { BeamReinforcement } from "./pages/BeamReinforcement/BeamReinforcement";
import { AnchorageLength } from "./pages/AnchorageLength/AnchorageLength";
import { MathJaxContext } from "better-react-mathjax";

// defining config for MathJax
// see react-better MathJax documentation
const config = {
  "fast-preview": {
    disabled: true,
  },
  tex2jax: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
  },
  messageStyle: "none",
};

function App() {
  return (
    <>
      {/* test change -> can be deleted any time */}
      <MathJaxContext version={3} config={config}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/balkenBewehrung" element={<BeamReinforcement />} />
          <Route path="/anchorageLength" element={<AnchorageLength />} />
        </Routes>
      </MathJaxContext>
    </>
  );
}

export default App;
