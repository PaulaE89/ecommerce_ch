import './navBar.css'
import hammy from '../../assets/hammy.png'
import hammyTitle from '../../assets/hammyTitle.png'
import { CartWidget } from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'


export const NavBar = () => {

    return (
        <nav className="navBar">
            <div className="left-navBar">
                <img src={hammyTitle} className='hammyTitle' alt='hammyimage' href='/' />
            </div>
            <ul className="listItems" >
                <li><NavLink exact to='/categories/category1' activeClassName='link-active' className='link'>Category1</NavLink></li>
                <li><NavLink to='/categories/category2' activeClassName='link-active' className='link'>Category2</NavLink></li>
                <li><NavLink to='/categories/category3' activeClassName='link-active' className='link'>Category3</NavLink></li>
            </ul>
            <CartWidget></CartWidget>
        </nav>)

}