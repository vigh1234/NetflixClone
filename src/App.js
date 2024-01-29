import React from 'react';
import NavBar from './Components/navBar/navBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { Originals,Action, Horror } from './Urls';



function App() {
  return (
   <>
   <NavBar/>
   <Banner/>
   <RowPost url={Originals} title='Netflix Originals'/>
   <RowPost url={Action} title='Action' isSmall/>
   <RowPost url={Horror} title='Horror' isSmall/>
   </>
  );
}

export default App;
