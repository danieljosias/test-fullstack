import { Switch, Route } from 'react-router-dom'
import FormClient from '../pages/FormClient' 
import FormContact from '../pages/FormContact'

export const Routes = () =>{
    return(
        <Switch>
            <Route exact path="/client">
                <FormClient/>
            </Route>

            <Route exact path="/contact">
                <FormContact/>
            </Route>
        </Switch>
    )
}