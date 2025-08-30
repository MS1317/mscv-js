import React,{useState} from 'react';
import Loader from './components/loader';

const MainApp = () =>{
  return(
    <>  
      <Loader/>
    </>
  );
};

const App = () => {
  // Set this to 'false' to show your main site

  if (isUnderConstruction) {
    return <Loader />;
  }
    return <MainApp />;
};

export default App;