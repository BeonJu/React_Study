import Topbar from './component/topbar/Topbar';
import Sidebar from './component/sidebar/Sidebar';
import Home from '../src/pages/home/Home';
import './App.css';
function App() {
  return (
    <div>
      <div className="App">
        <Topbar />
        <div className="container">
          <Sidebar />
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
