
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage'
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import ArticlesListPage from './pages/ArticlesListPage';
import NavBar from './NavBar';

function App() {
  return (
    <Router>
    
    <div className='App'>
      <NavBar />
      <Switch>
      <Route path="/" component={HomePage} exact />,
      <Route path="/AboutPage" component={AboutPage } />,
      <Route path="/Articles-List" component={ArticlesListPage } />,
      <Route path="/ArticlePage/:name" component={ArticlePage} />,
      <Route component={NotFoundPage} />
      </Switch>
    </div>
    
    </Router>
  );
}

export default App;
