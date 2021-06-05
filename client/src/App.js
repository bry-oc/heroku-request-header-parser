import Title from './components/title.js';
import Welcome from './components/welcome.js';
import Explanation from './components/explanation.js';
import Display from './components/display.js';

function App() {
  return (
    <div className="App container">
      <Title />
      <Welcome />
      <Explanation />
      <Display />
    </div>
  );
}

export default App;
