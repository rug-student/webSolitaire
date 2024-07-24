import { Link } from 'react-router-dom';
import './index.css';

function HomePage() {
  return (
    <>
      <header className="header">
          <h1>Home Page</h1>
          <p>A small page by Leo</p>
      </header>
      <div className='page'>
        <div className="homepage">
          <div className="text-container">
            <div className="title-home">Malfunction Report System</div>
            <div className="subtitle-home">Easily submit a report on any malfunctions so that it gets fixed as soon as possible!</div>
          </div>
            
            <div className="home-container">
              <div className="box">
                <h1>Create a New Report</h1>
                <Link to="/report">Report</Link>
              </div>
              { 
              <>
                <div className="box">
                  <h1>View Dashboard</h1>
                  <Link to="/dashboard">Dashboard</Link>
                </div>
              </>
              }
              
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;