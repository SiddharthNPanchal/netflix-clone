import logo from './logo.svg';
import './App.css';
import Row from './row';
import Banner from './Banner';
import requests from './requests';
import Nav from './Nav';
function App() {
  return (
    <div className="app">
      {/* <header className="App-header">
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
      </header> */}
      <Nav />
      <Banner/>
      
      {/*<Row title="NETFLIX ORIGINALS" fetchUrl={}/>*/}
      <Row className="row" title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow={true}/>
      <Row className="row" title="Trending" fetchUrl={requests.fetchTrending}/>
      <Row className="row" title="Popular" fetchUrl={requests.fetchPopular}/>
      <Row className="row" title="Upcoming" fetchUrl={requests.fetchUpcoming}/>
    </div>
  );
}

export default App;
