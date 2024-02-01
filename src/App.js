import logo from './logo.svg';
import './App.css';
import { ThinBackend, useCurrentUser } from 'thin-backend-react';
import { ensureIsUser, initThinBackend, logout } from 'thin-backend';

function App() {
  initThinBackend({
    // This url is different for each backend, this one points to 'testcra'
    host: 'https://testcra.thinbackend.app'
  });
  function UserStatus() {
    // Use the `useCurrentUser()` react hook to access the current logged in user
    // Returns `null` while the user is being fetched
    const user = useCurrentUser();

    return <div>
        {user?.email}

        <button onClick={logout}>Logout</button>
    </div>
  
  }
  
  return (
    <ThinBackend requireLogin>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <UserStatus />
        </header>
      </div>
    </ThinBackend>
  );
}

export default App;
