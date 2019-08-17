import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './components/about';
import BreedsOfPigeons from './components/breedsOfPigeons';
import DovesAsPets from './components/dovesAsPets';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import PigeonOrDove from './components/pigeonOrDove';
import None from './components/none';
import { styles } from './styles/styles';

export class App extends React.Component {
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
      <styles.Body theme={this.props.theme.body}>
        <styles.Content theme={this.props.theme.content}>
          <styles.Main>
            <Header changePath={this.changePath} active={this.state.active}/>
            <Switch>
              <Route exact path="/Home" component={Home}/>
              <Route exact path="/Content/Breeds_Of_Pigeons" 
              component={BreedsOfPigeons}/>
              <Route exact path="/Content/Doves_As_Pets" 
              component={DovesAsPets}/>
              <Route exact path="/Content/Pigeon_Or_Dove" 
              component={PigeonOrDove}/>
              <Route exact path="/About" component={About}/>
              <Route exact path="/">
                <Redirect to="/Home" />
              </Route>
              <Route component={None} />
            </Switch>
          </styles.Main>
          <Footer changePath={this.changePath} active={this.state.active}/>
        </styles.Content>
      </styles.Body>
    )
  }
}


