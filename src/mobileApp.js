import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { styles } from './styles/styles';
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
            <ResponsiveHeader />
            <h1>Hardcore Only!!!!!</h1>
            <ResponsiveFooter />
        </div>
    )
  }
}


