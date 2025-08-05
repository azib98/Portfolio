import './App.css';

function App() {
  return (
    <div 
      className="d-flex flex-column vh-100 p-0"
      style={{ margin: 0, overflow: 'hidden' }}
    >
      {/* First row */}
      <div className="d-flex flex-grow-1">
        <div className="flip-container flex-1 p-3 text-white d-flex justify-content-center align-items-center">
          <div className="flip-card bg-success text-white">
          <div className="flip-card-front">Div 1</div>
          <div className="flip-card-back bg-dark">Projects</div>
        </div>
        </div>
        <div className="flip-container flex-1 p-3 text-white d-flex justify-content-center align-items-center">
          <div className="flip-card bg-success text-white">
          <div className="flip-card-front">Div 2</div>
          <div className="flip-card-back bg-dark">Back 2</div>
        </div>
        </div>
        <div className="flip-container flex-1 p-3 text-white d-flex justify-content-center align-items-center">
          <div className="flip-card bg-success text-white">
          <div className="flip-card-front">Div 3</div>
          <div className="flip-card-back bg-dark">Back 3</div>
        </div>
        </div>
      </div>

      {/* Second row */}
      <div className="d-flex flex-grow-1">
        <div className="flip-container flex-1  p-3 text-white d-flex justify-content-center align-items-center">
          <div className="flip-card bg-success text-white">
          <div className="flip-card-front">Div 4</div>
          <div className="flip-card-back bg-dark">Back 4</div>
        </div>
        </div>
        <div className="flip-container flex-1 p-3 text-white d-flex justify-content-center align-items-center">
          <div className="flip-card bg-success text-white">
          <div className="flip-card-front">Div 5</div>
          <div className="flip-card-back bg-dark">Back 5</div>
        </div>
        </div>
        <div className="flip-container flex-1 p-3 text-white d-flex justify-content-center align-items-center">
          <div className="flip-card bg-success text-white">
          <div className="flip-card-front">Div 6</div>
          <div className="flip-card-back bg-dark">Back 6</div>
        </div>
        </div>
      </div>
      <footer className="text-center py-2 text-dark" style={{backgroundColor:'cyan'}}>
        &copy; {new Date().getFullYear()} Azib Tanveer. All rights reserved.
      </footer>

    </div>
    
  );
}

export default App;
