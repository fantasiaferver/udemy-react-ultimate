import logo from './logo.svg';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import React from 'react';
import Header from './components/header/Header';
import { Link, Outlet } from "react-router-dom";
// class App extends React.Component {
//   render() {
//     return (
//       <div>Hello world Pham Chinh
//         <MyComponent></MyComponent>
//       </div>
//     )
//   }
// }
// const App = () => {
//   return (
//     <div>Hello world
//       <MyComponent></MyComponent>
//     </div>

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Hello world Chinh Pham
//     </p>
//     <div>Count = {count}</div>
//     <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//     <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//   </header>
// </div>
//   );
// }

const App = () => {

  return (
    <div className="app-container">
      <div className='header-container'>
        <Header />
      </div>

      <div className='main-container'>
        <div className='sidenav-container'></div>
      </div>

      <div className='app-container'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
