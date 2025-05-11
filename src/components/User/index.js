import { useState, useEffect } from "react"
import { ThreeDots } from 'react-loader-spinner'
import LoanForm from "../LoanForm"
import "./index.css"

const apiStatusConstants = {
    initial: "INITIAL",
    success: "SUCCESS",
    failure: "FAILURE",
    inProgress: "IN_PROGRESS"
}

const User = ({ data }) => {
    const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);
  
    useEffect(() => {
        setApiStatus(apiStatusConstants.inProgress);
      
        const timeout = setTimeout(() => {
          if (Array.isArray(data) && data.length > 0) {
            setApiStatus(apiStatusConstants.success);
          } else {
            setApiStatus(apiStatusConstants.failure);
          }
        }, 300);
      
        return () => clearTimeout(timeout);
    }, [data]);
      

    const renderLoadingView = () => (
        <div className="loader-container" data-testid="loader">
          <ThreeDots type="ThreeDots" color="black" height="50" width="50" />
        </div>
    )

    const renderSuccessView = () => {
        return (
            <>
                <ul className="column-names">
                    <li>Loan Officer</li>
                    <div>
                        <li>Amount</li>
                        <li>Date Applied</li>
                        <li>Status</li>
                    </div>
                    
                </ul>
                <hr />
                <ul className="column-values">
                    {data.map(each => (
                        <li key={each.id} className="each-column-value">
                            <p className="value">John Okoh</p>
                            <div>
                                <p className="value">{each.loanAmount}</p>
                                <p className="value">{each.dateApplied}</p>
                                <p className="loan-status">{each.finalApproval}</p>
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

    return (
        <div className="user-dashboard">
            <div className="deficit-get-loan-container">
                <div className="deficit-container">
                    <div className="deficit-image-container">
                        <img src="https://res.cloudinary.com/diaakrqlt/image/upload/v1746789222/Vector-11_dfliv5.png" alt="deficit" />
                    </div>
                    <div className="deficit-amount-container">
                        <p className="deficit-text">DEFICIT</p>
                        <div className="amount-container">
                            <img src="https://res.cloudinary.com/diaakrqlt/image/upload/v1746789223/tabler_currency-naira_aourmt.png" alt="currency" />
                            <p className="amount">0.0</p>
                        </div>
                    </div>
                </div>
                <LoanForm />
            </div>

            <div className="user-nav-items-container">
                <button>Borrow Cash</button>
                <button>Transact</button>
                <button>Deposit Cash</button>
            </div>

            <div className="search-container">
                <img src="https://res.cloudinary.com/diaakrqlt/image/upload/v1742363029/search_ugaczz.png" alt="search" />
                <input type="search" placeholder="Search for loans" />
            </div>

            <div className="applied-loans-container">
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
    )
}

export default User