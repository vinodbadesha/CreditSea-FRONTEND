import Popup from "reactjs-popup"
import { Component } from "react"
import "./index.css"

class LoanForm extends Component{
    state = {
        fullName: "", loanAmount: "", loanTenure: "", status: "",
        reason: "", address: ""
    }

    onChangeName = event => {
        this.setState({fullName: event.target.value,})
    }

    onChangeLoanAmount = event => {
        this.setState({loanAmount: event.target.value})
    }

    onChangeTenure = event => {
        this.setState({loanTenure: event.target.value})
    }

    onChangeStatus = event => {
        this.setState({status: event.target.value})
    }

    onChangeReason = event => {
        this.setState({reason: event.target.value})
    }

    onChangeAddress = event => {
        this.setState({address: event.target.value})
    }


    onSubmitForm = async () => {
        const {fullName, loanAmount, loanTenure, status, reason, address} = this.state
        const loanData = {
            fullName,
            loanAmount: parseFloat(loanAmount),
            loanTenureInMonths: parseInt(loanTenure),
            employmentStatus: status,
            reasonForLoan: reason,
            employmentAddress: address,
            dateApplied: new Date().toISOString().split("T")[0]
        }
        const url = "https://creditsea-backend-ktfz.onrender.com/get-loan"
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loanData)
        }

        const response = await fetch(url, options)
        
        if (response.ok){
            alert("Form Submitted Successfully")
        }
    }

    render(){
        const {loanAmount, loanTenure, fullName, address, reason, status} = this.state
        return (
            <Popup
                modal
                trigger={<button className="cta-button">
                    Apply for Loan
                </button>}

            >
                {(close) => (
                    <form className="popup" onSubmit={async (event) => {
                        event.preventDefault()
                        try{
                            await this.onSubmitForm()
                            close()
                        }
                        catch(error){
                            alert("Submission Failed: ", error)
                        }
                        }} >
                        <h1 className="form-heading">APPLY FOR A LOAN</h1>
                        <div className="inputs-container">
                            <div className="each-input">
                                <label htmlFor="name">Full name as it appears on bank account</label>
                                <input value={fullName} onChange={this.onChangeName} id="name" type="text" placeholder="Full name as it appears on bank account" required />
                            </div>
                            <div className="each-input">
                                <label htmlFor="loan-amount">How much do you need?</label>
                                <input value={loanAmount} onChange={this.onChangeLoanAmount} type="text" id="loan-amount" placeholder="How much do you need?" required />
                            </div>
                            <div className="each-input">
                                <label htmlFor="tenure">Loan tenure (in months)</label>
                                <input value={loanTenure} onChange={this.onChangeTenure} type="text" id="tenure" placeholder="Loan tenure (in months)" required/>
                            </div>
                            <div className="each-input">
                                <label htmlFor="status">Employment status</label>
                                <input value={status} onChange={this.onChangeStatus} type="text" id="status" placeholder="Employment status" required/>
                            </div>
                            <div className="each-input">
                                <label htmlFor="reason">Reason for loan</label>
                                <textarea rows={2} cols={15} value={reason} onChange={this.onChangeReason} type="textarea" id="reason" placeholder="Reason for loan" required/>
                            </div>
                            <div className="each-input">
                                <label htmlFor="address">Employment address</label>
                                <textarea rows={2} cols={15} value={address} onChange={this.onChangeAddress} type="textarea" id="address" placeholder="Employment address" required/>
                            </div>
                        </div>
                        <div className="terms-conditions">
                            <div className="terms-container">
                                <input type="radio" id="radio" required/>
                                <label htmlFor="radio">I have read the important information and accept that by completing the application,
                                    I will be bound by the terms
                                </label>
                            </div>
                            <div className="terms-container">
                                <input type="checkbox" id="checkbox" />
                                <label htmlFor="checkbox">Any personal and credit information obtained may be disclosed from time to time to other lenders, 
                                    credit bureaus and other credit reporting agencies.
                                </label>
                            </div>
                        </div>
                        <button className="submit-button" type="submit">Submit</button>
                    </form>
                    
                    
                )}
                
            </Popup>
        )
    }
}

export default LoanForm