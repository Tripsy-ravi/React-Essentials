import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcept/index.jsx";
import Tabs from "./components/Tabs/index.jsx";
import TabButton from "./components/Tabs/TabButton.jsx";
import { EXAMPLES } from "./data.js";
import { useState } from "react";

const App = () => {
  const [selectedTopic, setSelectedTopic] = useState("");

  const handleSelect = (value) => {
    console.log(value);
    setSelectedTopic(value);
  };
  return (
    <div>
      <Header />
      <CoreConcepts />
      <Tabs
        buttonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        <div id="tab-content">
          {!selectedTopic ? <p>Please select a topic</p>
            :
            <>
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </>}
        </div>
      </Tabs>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
};

export default App;
