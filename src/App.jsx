import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcept/index.jsx';
import TabButtons from './components/TabButton/index.jsx';
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
      <CoreConcepts />
      <TabButtons selectedTopic={selectedTopic} handleSelect={handleSelect} />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
