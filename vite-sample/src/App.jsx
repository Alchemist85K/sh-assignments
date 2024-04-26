import { useState } from 'react';
import classes from './App.module.css';
import Background from './components/Background';
import SignInScreen from './screens/SignInScreen';
import ListScreen from './screens/ListScreen';

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <>
      <Background />

      <div className={classes.container}>
        {auth ? <ListScreen /> : <SignInScreen setAuth={setAuth} />}
      </div>
    </>
  );
}

export default App;
