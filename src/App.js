import { useEffect, useState } from 'react';
import HeaderLayout from './Layout';
import Platform from './Components/Platform';
import Courses from './Components/Courses';
import About from './Components/About';
import Innovations from './Components/Innovations';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loader from './Components/loader';


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <>
      {
        loading ?
          <div className="flex justify-center items-center h-screen">
            <Loader/>
          </div>
        :
          <Router>            
            <div className="bg-gray-100">
              < HeaderLayout />
              < Platform />
              < Courses />
              < About />
              < Innovations />
              < Testimonials /> 
              < Footer />
            </div>
          </Router>
      }
    </>
  );
}

export default App;
