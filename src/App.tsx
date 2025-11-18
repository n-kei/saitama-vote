import { Routes, Route, HashRouter as Router, BrowserRouter } from 'react-router-dom';
import { CommonLayout } from './components/layout';
import { Welcome } from './pages/welcome';
import { CouncillorList } from './pages/councillor';
import { AgendaList } from './pages/agenda';
import './App.css';

function App() {
  return (
    <Router basename='/saitama-vote'>
      <Routes>
        <Route path="/" element={<CommonLayout/>}>
          <Route index element={<Welcome />} />
          <Route path="/councillor">
            <Route index element={<CouncillorList />} />
          </Route>
          <Route path="/agenda">
            <Route index element={<AgendaList />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
