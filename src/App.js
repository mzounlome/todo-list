import "./App.scss";

import Header from "./components/Nav/Header";
import Input from "./components/Input/Input";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Nav />
      </div>
      <div>
        <Input />
      </div>
    </div>
  );
}

export default App;
