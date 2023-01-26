import "./App.css";

import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Navbar from "./Componant/Navbar";
import News from "./Componant/News";
import NewsItem from "./Componant/NewsItem";

export class App extends Component {
  static propTypes = {}

  render() {
    return (
      <div><Navbar/>
        <News pageSize ={5} />
        </div>
    )
  }
}

export default App