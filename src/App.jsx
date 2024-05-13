import './App.css'
import Portfolio from './component/Portfolio.jsx'
import Loading from './component/Loading.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect,useState} from 'react';


export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process
    setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Adjust the duration as needed
  }, []);
  
  return (
    <main>
        {isLoading ? <Loading /> : <Portfolio />}

    </main>
  )
}
