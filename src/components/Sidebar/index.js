import "./index.css"

const sidebar_content = [
    {"id": "Dashboard", "img_url": "https://res.cloudinary.com/diaakrqlt/image/upload/v1746885732/dashicons_dashboard_vy5ekw.png"},
    {"id": "Borrowers", "img_url": "https://res.cloudinary.com/diaakrqlt/image/upload/v1746789223/Vector-7_yj9jew.png"},
    {"id": "Loans", "img_url": "https://res.cloudinary.com/diaakrqlt/image/upload/v1746789222/Vector-11_dfliv5.png"},
    {"id": "Repayments", "img_url": "https://res.cloudinary.com/diaakrqlt/image/upload/v1746789222/Vector-9_ikurp3.png"},
    {"id": "Loan Parameters", "img_url": "https://res.cloudinary.com/diaakrqlt/image/upload/v1746789222/Vector-12_ndiyhr.png"},
    {"id": "Accounting", "img_url": "https://res.cloudinary.com/diaakrqlt/image/upload/v1746885672/Vector-22_xehdhb.png"},
    {"id": "Reports", "img_url": "https://res.cloudinary.com/diaakrqlt/image/upload/v1746789222/Vector-13_slihyo.png"},
    {"id": "Collateral", "img_url": "https://res.cloudinary.com/diaakrqlt/image/upload/v1746789222/Vector-14_nbuy1k.png"},
    {"id": "Access Configuration", "img_url": "https://res.cloudinary.com/diaakrqlt/image/upload/v1746789221/Vector-15_r2w6ad.png"},
    {"id": "Savings", "img_url": "https://res.cloudinary.com/diaakrqlt/image/upload/v1746789222/Vector-8_m7lfko.png"},
    {"id": "Expenses", "img_url": "https://res.cloudinary.com/diaakrqlt/image/upload/v1746789221/Vector-16_h7qb4z.png"},
    {"id": "E-Signature", "img_url": "https://res.cloudinary.com/diaakrqlt/image/upload/v1746789221/Vector-17_szemgb.png"},
    {"id": "Investor Accounts", "img_url": "https://res.cloudinary.com/diaakrqlt/image/upload/v1746789221/Vector-18_j6lxcm.png"},
    {"id": "Calender", "img_url": "https://res.cloudinary.com/diaakrqlt/image/upload/v1746789221/Vector-19_bg01ej.png"},
    {"id": "Settings", "img_url": "https://res.cloudinary.com/diaakrqlt/image/upload/v1746789221/Vector-20_rq4gix.png"},
    {"id": "Sign Out", "img_url": "https://res.cloudinary.com/diaakrqlt/image/upload/v1746789221/Vector-21_fquyty.png"}
]

const Sidebar = () => (
    <div className="sidebar">
        <div className="profile-box">
            <img src="https://res.cloudinary.com/diaakrqlt/image/upload/v1746789223/account_circle_kx2w5e.png" alt="verifier-profile" />
            <p>John Okoh</p>
        </div>
        <ul className="sidebar-list">
            {sidebar_content.map(each => (
                <li key={each.id} className="each-sidebar-item">
                    <img src={each.img_url} alt={each.id} />
                    <p>{each.id}</p>
                </li>
            ))}
        </ul>

    </div>
)

export default Sidebar