import UnderConstruction from './components/underConstruction';

const MainApp = () =>{
  return(
    <div>
      <h1>Main Site</h1>
    </div>
  );
};

const App = () => {
  // Set this to 'false' to show your main site
  const isUnderConstruction= false;
  if (isUnderConstruction) {
    return <UnderConstruction />;
  }
    return <MainApp />;
};

export default App;