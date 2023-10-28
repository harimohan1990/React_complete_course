
import './App.css';

import EventHandlingClass from './components/EventHandling/EventhandlingClassBased';

import EventHandlingFunction from './components/EventHandling/EventhandlingFunctionalBased'
function App() {
  return (
    <div className="App">
       <EventHandlingClass/>
       <EventHandlingFunction/>
    </div>
  );
}

export default App;
