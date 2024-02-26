import { NavLink } from 'react-router-dom'



function Header() {
  

  return (
    <header className='row justify-between align-center'>
      <h3>Note App</h3>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/noteform">Note Form</NavLink>
      </nav>
    </header>
  )
}


export default Header