import Button from './Button';
import { Link } from 'react-router-dom'

import classes from './MainNavigation.module.css'
import logo from '../../img/3035Tech.png'

function MainNavigation() {
    
    //state

    return <>
    <nav className={classes.header}>
        <div >
            <img className={classes.logo} src={logo} alt='Logo'/>
        </div>
            <nav>
            <Button className="btn-header"><Link to='/signup'>Cadastre-se</Link></Button>
            </nav>
    </nav>
    </>
}

export default MainNavigation;