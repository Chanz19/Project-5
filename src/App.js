
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';

// React Slicks:
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Routes
import {Routes, Route} from "react-router-dom"
import MoviePage from './components/pages/Movie.Page';
import HomePage from './components/pages/Home.Page';
import PlayPage from './components/pages/Play.Page';


function App() {
    return <Routes>
    <Route path='/' element={<Homepage />} />
    <Route path='/movie/:id' element={<MoviePage />} />
    <Route path='/plays' element={<PlayPage />} />
  </Routes>
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">

//         <h1>Hello World!</h1>
//         {/* <ClassComponent />
//         <ClassComponent />
//         <ClassComponent />
//         <h2>FunctionalComponent</h2>} */}
//       </header>
//     </div>
//   );
// }

export default App;
