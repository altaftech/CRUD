import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DisplayData from './DisplayData';
import AddData from './AddData';
import EditData from './EditData';

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" style={{padding:0,margin:0}}>
          <div className="container-fluid">
            <Link className="navbar-brand" style={{fontSize:'30px',color:'orange',display:'flex',alignItems:'center',justifyContent:'center'}} to="#"><img src="logo.gif" width={40} /> CRUD</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link active" style={{fontSize:'20px'}} aria-current="page" to="/add">ADD</Link>
                <Link className="nav-link active" style={{fontSize:'20px'}} to="/">DISPLAY</Link>
              </div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<DisplayData />} />
          <Route path='/add' element={<AddData />} />
          <Route path='/edit/:id' element={<EditData />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;