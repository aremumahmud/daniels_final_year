import '../styles/header.css'
import Logo from './logo'
import Nav from './nav'
import UserBar from './user_bar'

function Header() {
    return <div className="header">
        <Logo size={'7rem'} />
        <Nav />
        <UserBar />
    </div>
}

export default Header