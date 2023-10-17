export default function Nav() {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'> 
            <div className='d-flex'>
                <a className='navbar-brand' href='/'>Energy Setting</a>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <a className='nav-link vt323-font' href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link vt323-font' href='/'>Rooms</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link vt323-font' href='/'>Preferences</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link vt323-font' href='/'>Contact</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link vt323-font' href='/'>Sign Up</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link vt323-font' href='/'>Log In</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}