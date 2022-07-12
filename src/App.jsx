import "./App.css"
import Contact from "./components/Contact";
import Card from "./components/ContactCard";

function App() {
  return (
    <div >
      <Card component={<Contact />} backgroundColor="white" />

    </div>
  );
}

export default App;
