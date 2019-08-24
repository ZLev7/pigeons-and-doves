import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { styles } from './styles/styles';
import ResponsiveAbout from './responsive-components/ResponsiveAbout';
import ResponsiveBreedsOfPigeons from './responsive-components/ResponsiveBreedsOfPigeons';
import ResponsiveDovesAsPets from './responsive-components/ResponsiveDovesAsPets';
import ResponsiveHome from './responsive-components/ResponsiveHome';
import ResponsivePigeonOrDove from './responsive-components/ResponsivePigeonOrDove';
import ResponsiveNone from './responsive-components/ResponsiveNone';
import ResponsiveHeader from './responsive-components/ResponsiveHeader';
import ResponsiveFooter from './responsive-components/ResponsiveFooter';

export class MobileApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
            active: window.location.pathname
        }
  }
  changePath = (val) => {
        this.setState({
            active: val
        });
    }
  render(){
    return(
        <div>
            <ResponsiveHeader changePath={this.changePath} active={this.state.active}/>
            <Switch>
              <Route exact path="/Home" render={(props) =>
              <ResponsiveAbout {...props} changePath={this.changePath} active={this.state.active} />}/>
              <Route exact path="/Content/Breeds_Of_Pigeons" 
              component={ResponsiveBreedsOfPigeons}/>
              <Route exact path="/Content/Doves_As_Pets" 
              component={ResponsiveDovesAsPets}/>
              <Route exact path="/Content/Pigeon_Or_Dove" 
              component={ResponsiveHome}/>
              <Route exact path="/About" component={ResponsivePigeonOrDove}/>
              <Route exact path="/">
                <Redirect to="/Home" />
              </Route>
              <Route component={ResponsiveNone} />
            </Switch>
            <ResponsiveFooter />
        </div>
    )
  }
}


