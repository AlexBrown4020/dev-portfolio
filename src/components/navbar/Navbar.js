import './navbar.css';

function Navbar() {
    return (
      <div id="navbar">
            <a className='navLink' href='#home' sx={{color: 'white', padding: '5px'}} variant='outlined'>
                Top
            </a>
            <a className='navLink' href='#main-container' sx={{color: 'white', padding: '5px'}} variant='outlined'>
                Technologies
            </a>
            <a className='navLink' href='#projects-container' sx={{color: 'white', padding: '5px'}} variant='outlined'>
                Portfolio
            </a>
            <a className='navLink' href='#clients-container' sx={{color: 'white', padding: '5px'}} variant='outlined'>
                Client Projects
            </a>
            <a className='navLink' href='#footer' sx={{color: 'white', padding: '5px'}} variant='outlined'>
                Bottom
            </a>
      </div>
    );
  }
  
  export default Navbar;