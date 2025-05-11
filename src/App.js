import { Component } from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import HomePage from "./components/HomePage";
import Verifier from "./components/Verifier";
import Admin from "./components/Admin";
import Header from './components/Header';
import User from './components/User';
import './App.css';

class App extends Component{
  state = {
    loansData: [],
  }

componentDidMount(){
  this.getLoansData()
}

getLoansData = async () => {
  const url = "https://creditsea-backend-ktfz.onrender.com/"

  const response = await fetch(url)

  if (response.ok === true){
    const data = await response.json()
    const updatedData = data.map(each => ({
      id: each.id,
      fullName: each.full_name,
      loanAmount: each.loan_amount,
      loanTenureInMonths: each.loan_tenure_in_months,
      employmentStatus: each.employment_status,
      reasonForLoan: each.reason_for_loan,
      employmentAddress: each.employment_address,
      finalApproval: each.final_approval,
      dateApplied: each.date_applied
    }))

    this.setState({
      loansData: updatedData
    })}
  }

  render(){
    const {loansData} = this.state
    return (
      <BrowserRouter>
        <div className='app-container'>
          <Header />
            <Switch>
              <Route exact component={HomePage} path="/" />
              <Route exact render={(props) => <User {...props} data={loansData} refreshData={this.getLoansData} />} path="/user" />
              <Route exact render={(props) => <Verifier {...props} loansData={loansData} />} path="/verifier" />
              <Route exact render={(props) => <Admin {...props} loansData={loansData} />} path="/admin" />
            </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
