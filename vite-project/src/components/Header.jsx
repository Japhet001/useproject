import { Link } from "react-router-dom"
function Header() {
  return (
    
    <div>
        <Link to='/about'>About page</Link>
        <Link to='/blogs'>Blogs page</Link>
        <Link to='/homePage'>Home page</Link>
        <Link to='/notFound'>notFound page</Link>
        
    </div>
  )
}

export default Header