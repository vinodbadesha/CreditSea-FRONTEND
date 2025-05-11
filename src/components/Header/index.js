import {useHistory, Link} from "react-router-dom"
import "./index.css"

const Header = () => {
    const history = useHistory()
    const onChangeHandler = (event) => {
        let dir = "/" + event.target.value
        history.push(dir)
    }

    return (
        <div className="header">
            <Link to="/" className="logo-link">
                <h1 className="logo">CREDIT APP</h1>
            </Link>
            <div className="nav-items-container">
                <button className="active-button" type="button">
                    <img className="button-img" src="https://res.cloudinary.com/diaakrqlt/image/upload/v1746788756/Vector_pf3huv.png" alt="home" />
                    <p>Home</p>
                </button>
                <button className="header-button" type="button">
                    <img className="button-img" src="https://res.cloudinary.com/diaakrqlt/image/upload/v1746789223/tabler_currency-naira_aourmt.png" alt="payments" />
                    <p>Payments</p>
                </button>
                <button className="header-button" type="button">
                    <img className="button-img" src="https://res.cloudinary.com/diaakrqlt/image/upload/v1746789223/Vector-2_jltfg6.png" alt="budget" />
                    <p>Budget</p>
                </button>
                <button className="header-button" type="button">
                    <img className="button-img" src="https://res.cloudinary.com/diaakrqlt/image/upload/v1746789223/Vector-3_fwqmll.png" alt="card" />
                    <p>Card</p>
                </button>
            </div>
            <div className="nav-items-container">
                <img className="nav-icons" src="https://res.cloudinary.com/diaakrqlt/image/upload/v1746789223/Vector-4_ey3gbw.png" alt="notifications" />
                <img className="nav-icons" src="https://res.cloudinary.com/diaakrqlt/image/upload/v1746789223/Vector-5_cihq4k.png" alt="chats" />
                <img className="nav-icons" src="https://res.cloudinary.com/diaakrqlt/image/upload/v1746789223/account_circle_kx2w5e.png" alt="profile" />
                <select defaultValue="user" onChange={onChangeHandler}>
                    <option value="user">User</option>
                    <option value="verifier">Verifier</option>
                    <option value="admin">Admin</option>
            </select>
            </div>
        </div>
    )
}

export default Header