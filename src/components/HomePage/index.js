import LoanForm from "../LoanForm"
import "./index.css"

const HomePage = () => {
    return (
        <div className="home-container">
            <div className="welcome-section">
                <h1>Welcome to CreditSea</h1>
                <p>Your trusted loan tracker for shopkeepers and small businesses.</p>
                <div className="cta-buttons">
                    <LoanForm />
                </div>
            </div>

            <div className="features-section">
                <h2>Why Choose CreditSea?</h2>
                <div className="features">
                    <div className="feature-item">
                        <img
                        src="https://res.cloudinary.com/diaakrqlt/image/upload/v1746788756/Vector_pf3huv.png"
                        alt="Loan Tracker"
                        className="feature-icon"
                        />
                        <h3>Easy Loan Tracking</h3>
                        <p>Keep track of your loan amounts, tenure, repayments, and overdue alerts all in one place.</p>
                    </div>
                    <div className="feature-item">
                        <img
                        src="https://res.cloudinary.com/diaakrqlt/image/upload/v1746789223/tabler_currency-naira_aourmt.png"
                        alt="Payments"
                        className="feature-icon"
                        />
                        <h3>Seamless Payments</h3>
                        <p>Make loan payments through various secure channels and stay up-to-date with your balance.</p>
                    </div>
                    <div className="feature-item">
                        <img
                        src="https://res.cloudinary.com/diaakrqlt/image/upload/v1746789223/Vector-2_jltfg6.png"
                        alt="Budget"
                        className="feature-icon"
                        />
                        <h3>Manage Your Budget</h3>
                        <p>Plan and manage your budget around loan repayments to ensure smooth operations for your business.</p>
                    </div>
                </div>
            </div>
      
            <div className="testimonial-section">
                <h2>What Our Users Are Saying</h2>
                <div className="testimonial">
                    <p>"CreditSea has helped me stay on top of my loan repayments and grow my business!" - John, Shopkeeper</p>
                </div>
                <div className="testimonial">
                    <p>"The easy-to-use interface made managing my finances a breeze. Highly recommend!" - Sarah, Small Business Owner</p>
                </div>
            </div>
    </div>
    )
}

export default HomePage