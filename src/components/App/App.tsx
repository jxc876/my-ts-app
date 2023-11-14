import './App.css';

// 3rd party components
import Button from '@mui/material/Button';

// My Components
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";


type ActiveOrPending = {
  isActive: boolean,
  isPending: boolean
}

function App() {

  return (
    <div className="App">
      <header className="App-header">

        <p>Main App</p>

        <div className="nav">

          <NavLink to="/helloworld">
            <Button variant="outlined">Hello World</Button>
          </NavLink>

          <NavLink to="/component3">
            <Button variant="outlined">Component 3</Button>
          </NavLink>
        </div>

        <Outlet />

      </header>
    </div>
  );
}

export default App;
