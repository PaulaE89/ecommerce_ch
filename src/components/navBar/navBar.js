import './navBar.css'
import hammy from '../../assets/hammy.png'
import hammyTitle from '../../assets/hammyTitle.png'
import { CartWidget } from '../CartWidget/CartWidget'


export const NavBar = () => {

    const alarm = () => {
        alert('there is no information at the moment')
    }

    return ( 
    <nav className ="navBar"> 
       <div className ="left-navBar"> 
            <img src = {hammyTitle} className ='hammyTitle' alt='hammyimage'/>
       </div>      
     
      <ul className="listItems" >               
         <li onClick={alarm}>Category 1</li> 
         <li onClick={alarm}>Category 2</li>
         <li onClick={alarm}>Category 3</li>
        </ul> 
        <CartWidget></CartWidget>
    </nav> )

    }