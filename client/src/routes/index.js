import { Switch, Route } from 'react-router-dom'
import FormContact from '../pages/FormContact'
import FormClient from '../components/FormClient'

export const Routes = () =>{
    return(
        <Switch>
            <Route exact="/">
                <FormClient/>
            </Route>
            
            <Route exact="/contact">
                <FormContact/>
            </Route>
        </Switch>
    )
}