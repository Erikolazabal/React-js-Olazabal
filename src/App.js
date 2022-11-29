import { useContext } from 'react';
import './App.css';
import Router from './routes';
import Footer from './components/Footer/Footer'
import { Theme } from './contexts/Theme';

function App() {
  
  const {themeColor} = useContext(Theme)
  
  return (
    <div className= {themeColor === 'dark' ? 'containterdark' : 'containterlight'}
    >
    <Router/>
    <Footer/>
    </div>
  );
}

export default App;
