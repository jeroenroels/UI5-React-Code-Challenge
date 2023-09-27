import { ThemeProvider, ShellBar } from "@ui5/webcomponents-react";
import { ColoredTitle } from "./Components/ColoredTitle";
import Solution from "./Solution";

function App() {
  return (
    <ThemeProvider>
      <ShellBar primaryTitle="UI5 Web Components for React Developer Challenge" />
      {/* Add your name and change title based on Week */}
      <ColoredTitle title="<Jeroen Roels> Week 3 – Infinite Scroll" />
      <Solution />
    </ThemeProvider>
  );
}

export default App;
