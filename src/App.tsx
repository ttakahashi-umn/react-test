import React, {Component, useState} from 'react'
import {Container} from 'flux/utils'
import logo from './logo.svg';
import './App.css';
import AppAction from './data/AppAction'
import AppStore from './data/AppStore'

interface AppState {
    responseData: string
}

class App extends Component<{}, AppState> {
  constructor(props: {} | Readonly<{}>) {
      super(props)
      AppAction.accessApi()
      this.state = {
          responseData: '',
      }
//      this.setState({ ...this.state, ...AppStore.getState()})
  }
  public  static componentDidMount(){
  }

  public static getStores() {
    return [AppStore]
  }

  public static calculateState() {
      return {
          responseData: AppStore.getState().responseData,
      }
  }
  public render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
                GET DATA {this.state.responseData}
            </p>
          </header>
        </div>
    );
  }
}

export default App
