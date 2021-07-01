import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './home/home'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { NavBar } from './components/navBar/navBar'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'


export const Routes = () => {

    return (

        <Router>
            <NavBar />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/categories/:categoryId'>
                    <ItemListContainer />
                </Route>          
                <Route path='/items/:itemId'>
                    <ItemDetailContainer />
                </Route>
            </Switch>
        </Router>
    )
}