import logo from '../assets/TestLogo.svg'

function Logo({size}) {
    return <img src={logo} alt="" style={{width: size || '5rem'}} />
}


export default Logo