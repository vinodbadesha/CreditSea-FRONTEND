
import { useState, useEffect } from "react";
import { ThreeDots } from 'react-loader-spinner'
import Sidebar from "../Sidebar";
import "./index.css"

const apiStatusConstants = {
    initial: "INITIAL",
    success: "SUCCESS",
    failure: "FAILURE",
    inProgress: "IN_PROGRESS"
}

const Verifier = ({ loansData }) => {
    const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);
    console.log(loansData.length)
  
    useEffect(() => {
        setApiStatus(apiStatusConstants.inProgress);
      
        const timeout = setTimeout(() => {
          if (Array.isArray(loansData) && loansData.length > 0) {
            setApiStatus(apiStatusConstants.success);
          } else {
            setApiStatus(apiStatusConstants.failure);
          }
        }, 300);
      
        return () => clearTimeout(timeout);
    }, [loansData]);
    
    const renderLoadingView = () => (
        <div className="loader-container" data-testid="loader">
            <ThreeDots type="ThreeDots" color="black" height="50" width="50" />
        </div>
    )
    
    const renderSuccessView = () => {
        return (
            <>
                <ul className="column-names">
                    <li>Purpose For Loan</li>
                    <div>
                        <li>Amount</li>
                        <li>Date Applied</li>
                        <li>Status</li>
                    </div>
                        
                </ul>
                <hr />
                <ul className="column-values">
                    {loansData.map(each => (
                        <li key={each.id} className="each-column-value">
                            <p className="value">{each.reasonForLoan}</p>
                            <div>
                                <p className="value">{each.loanAmount}</p>
                                <p className="value">{each.dateApplied}</p>
                                <p className="verifier-loan-status">{each.finalApproval}</p>
                                <img src="https://res.cloudinary.com/diaakrqlt/image/upload/v1746872715/Vector_tuhomt.png" alt="dots" />
                            </div>
                        </li>
                    ))}
                </ul>
            </>
        )
    }
    
    const renderFailureView = () => (
        <div className="loader-container">
            <h1>No data is available</h1>
        </div>
    )
    
    const renderResultsView = () => {
        switch (apiStatus){
            case apiStatusConstants.success:
                return renderSuccessView()
            case apiStatusConstants.failure:
                return renderFailureView()
            case apiStatusConstants.inProgress:
                return renderLoadingView()
            default:
                return null
        }
    }

    let totalCashDisbursed = 0
    for (let i of loansData){
        totalCashDisbursed += i.loanAmount
    }
    console.log(totalCashDisbursed)

    return (
        <div className="verifier-container">
            <Sidebar />
            <div className="verifier-main-container">
                <p className="verifier-dashboard">Dashboard > <span>Loans</span></p>
                <div className="all-stats-container">
                    <div className="each-stat-container">
                        <div className="stat-img-container">
                            <img src="https://res.cloudinary.com/diaakrqlt/image/upload/v1746789222/Vector-11_dfliv5.png" alt="loans" />
                        </div>
                        <div className="stat-info-container">
                            <p>{loansData.length}</p>
                            <p>LOANS</p>
                        </div>
                    </div>
                    <div className="each-stat-container">
                        <div className="stat-img-container">
                            <img src="https://res.cloudinary.com/diaakrqlt/image/upload/v1746789223/Vector-7_yj9jew.png" alt="borrowers" />
                        </div>
                        <div className="stat-info-container">
                            <p>{loansData.length}</p>
                            <p>BORROWERS</p>
                        </div>
                    </div>
                    <div className="each-stat-container">
                        <div className="stat-img-container">
                            <img src="https://res.cloudinary.com/diaakrqlt/image/upload/v1746789223/cash-multiple_dwf2af.png" alt="cash disbursed" />
                        </div>
                        <div className="stat-info-container">
                            <p>{totalCashDisbursed}</p>
                            <p>CASH DISBURSED</p>
                        </div>
                    </div>
                    <div className="each-stat-container">
                        <div className="stat-img-container">
                            <img src="https://res.cloudinary.com/diaakrqlt/image/upload/v1746789222/Vector-8_m7lfko.png" alt="savings" />
                        </div>
                        <div className="stat-info-container">
                            <p>450,000</p>
                            <p>SAVINGS</p>
                        </div>
                    </div>
                    <div className="each-stat-container">
                        <div className="stat-img-container">
                            <img src="https://res.cloudinary.com/diaakrqlt/image/upload/v1746789222/Vector-9_ikurp3.png" alt="repaid loans" />
                        </div>
                        <div className="stat-info-container">
                            <p>30</p>
                            <p>REPAID LOANS</p>
                        </div>
                    </div>
                    <div className="each-stat-container">
                        <div className="stat-img-container">
                            <img src="https://res.cloudinary.com/diaakrqlt/image/upload/v1746892637/tabler_currency-naira-2_b3pt0f.png" alt="cash received" />
                        </div>
                        <div className="stat-info-container">
                            <p>1,000,000</p>
                            <p>CASH RECEIVED</p>
                        </div>
                    </div>
                </div>
                    <div className="verifier-applied-loans-container">
                        <div className="heading-sort-filter-container">
                            <h1>Applied Loans</h1>
                            <div className="sort-filter-buttons-container">
                                <button type="button">Sort</button>
                                <button type="button">Filter</button>
                            </div>
                        </div>
                    {renderResultsView()}
                </div>
            </div>
        </div>
    )
    
}

export default Verifier