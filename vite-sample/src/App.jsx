import Background from './components/Background';
import { AuthProvider } from './contexts/AuthContext';
import AuthManager from './screens/AuthManager';

function App() {
  return (
    <AuthProvider>
      <Background />

      <AuthManager />
    </AuthProvider>
  );
}

export default App;
