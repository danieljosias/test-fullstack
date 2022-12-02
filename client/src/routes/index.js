import { Switch, Route } from 'react-router-dom'
import FormClient from '../pages/FormClient' 
import FormContact from '../pages/FormContact'
import SignUp from '../pages/SignUp/'
import SignIn from '../pages/SignIn'

export const Routes = () =>{
    return(
        <Switch>
            <Route exact path="/">
                <SignUp/>
            </Route>

            <Route exact path="/signin">
                <SignIn/>
            </Route>

            <Route exact path="/client">
                <FormClient/>
            </Route>

            <Route exact path="/contact">
                <FormContact/>
            </Route>
        </Switch>
    )
}