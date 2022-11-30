import { Switch, Route } from 'react-router-dom'
import FormContact from '../pages/FormContact'

export const Routes = () =>{
    return(
        <Switch>
            <Route exact="/contact">
                <FormContact/>
            </Route>
        </Switch>
    )
}