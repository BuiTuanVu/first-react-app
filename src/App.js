import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { firNumber: '', secNumber: '', sum: '' };

    this.handleChangeFirstNumber = this.handleChangeFirstNumber.bind(this);
    this.handleChangeSecondNumber = this.handleChangeSecondNumber.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }



  handleChangeFirstNumber(event) {
    this.setState({ firNumber: event.target.value },
      () => { this.setState({ sum: Number(this.state.firNumber) + Number(this.state.secNumber) }) }
    );
  }

  handleChangeSecondNumber(event) {
    this.setState({ secNumber: event.target.value },
      () => { this.setState({ sum: Number(this.state.firNumber) + Number(this.state.secNumber) }) }
    );

  }

  handleRefresh() {
    this.setState({ firNumber: '' },
      () => { this.setState({ secNumber: '' }, 
        () => { this.setState( {sum: ''})}) }
    );
  }
  render() {
    return (
      <div className="App">
        <div className="card">
          <h5 className="card-header">Sample Calculator</h5>
          <div className="card-body">
            <h5 className="card-title">1612825-BTCN01</h5>
            <p className="card-text">Enter the two numbers and automatically display the sum of the entered numbers. </p>
            <p className="card-text">You can use the bellow button to refresh the form.</p>
            <form onSubmit={this.handleSubmit}>
              <div className="form-row">
                <div className="col-3">
                  <input type="text" className="form-control" placeholder="First Number" value={this.state.firNumber} onChange={this.handleChangeFirstNumber} onBlur={this.handleCheck}/>
                </div>
                <div className="col-1">
                  <label>+</label>
                </div>
                <div className="col-3">
                  <input type="text" className="form-control" placeholder="Second Number" value={this.state.secNumber} onChange={this.handleChangeSecondNumber} />
                </div>
                <div className="col-1">
                  <label>=</label>
                </div>
                <div className="col-3">
                  <input type="text" className="form-control" placeholder="Result" value={this.state.sum} />
                </div>
                <div className="col-1">
                <button type="button" className="btn btn-success" onClick={this.handleRefresh}><i class="fas fa-sync-alt"></i></button>
                </div>
                
              </div>
            </form>
          </div>
        </div>



      </div>
    );
  }
}




export default App;