import { Routes, Route, BrowserRouter as Router, BrowserRouter } from 'react-router-dom';
import { CommonLayout } from './components/layout';
import { Welcome } from './pages/welcome';
import { CouncillorList } from './pages/councillor';
import { AgendaList } from './pages/agenda';
import './App.css';

function App() {
  return (
    <BrowserRouter basename='https://n-kei.github.io/saitama-vote/'>
      <Router>
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
    </BrowserRouter>
  );
}

export default App;
