import { Navigation } from "./components/Navigation";
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
      <MathJaxContext version={3} config={config}>
        <Navigation />
        <AnchorageLength />
      </MathJaxContext>
    </>
  );
}

export default App;
