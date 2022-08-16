import './App.css';

function App() {
  return (
    <nav className="navbar">
        <ul className='menu'>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Services</a>
              <ul>
                  <li><a href="">Development</a>
                      <ul>
                          <li><a href="">App Development</a></li>
                          <li><a href="">Web Development</a></li>
                          <li><a href="">Desktop App </a></li>
                      </ul>
                  </li>
                  <li><a href="">Graphics Design</a>
                      <ul>
                          <li><a href="">Logo Design</a></li>
                          <li><a href="">Banner Design</a></li>
                          <li><a href="">Poster Design</a></li>
                          <li><a href="">Template Design</a></li>
                      </ul>
                  </li>
                  <li><a href="">Marketing</a>
                      <ul>
                          <li><a href="">Email Marketing</a></li>
                          <li><a href="">Contet Marketing</a></li>
                          <li><a href="">Online Marketing</a></li>
                          <li><a href="">Affiliate Marketing</a></li>
                      </ul>
                  </li>
              </ul>
          </li>
          <li><a href="">Others</a></li>
        </ul>
    </nav>
  );
}

export default App;


