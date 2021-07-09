import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation(){

    return (
        <header className={classes.header}>
            <div className={classes.logo}>System Controller</div>

            <nav>
                <ul>
                    <li>
                        <Link to='/'>Status</Link>
                    </li>
                    <li>
                        <Link to='/launch'>Launch</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>

        </header>
    );
}

export default MainNavigation;