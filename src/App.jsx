import Header from './components/Header/Header.jsx';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';

const App = () => {

  const [selectedTopic, setSelectedTopic] = useState('');

  const handleSelect = (value) => {
    console.log(value);
    setSelectedTopic(value);
  }
  return (
    <div>
      <Header />
      <section id="core-concepts">
        <h2 align="center">Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((item) => (
            <CoreConcepts key={item.title} title={item.title} description={item.description} image={item.image} />
          ))}
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
          <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
        </menu>
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
      </section>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
