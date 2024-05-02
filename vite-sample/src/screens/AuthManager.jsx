import classes from './AuthManager.module.css';
import ListScreen from './ListScreen';
import SignInScreen from './SignInScreen';
import { useAuthContext } from '../contexts/AuthContext';

function AuthManager() {
  const { auth } = useAuthContext();

  return (
    <div className={classes.container}>
      {auth ? <ListScreen /> : <SignInScreen />}
    </div>
  );
}

export default AuthManager;
