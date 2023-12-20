import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='navbar'>

      <Link to="/">
        image
      </Link>

      <nav>
        <ul  className='navchild1'>
            <li className='list'>
                <Link to="/">Home</Link>
            </li>
            <li className='list'>
                <Link to="/">About</Link>
            </li>
            <li className='list'>
                <Link to="/">Contact</Link>
            </li>
        </ul>
      </nav>

      {/* Login - Signup - logout - dashboard */}
      <div>

        {!isLoggedIn && 
            <Link to="/login">
                <button>
                    LogIn
                </button>
            </Link>
        }
        {!isLoggedIn && 
            <Link to="/signup">
                <button>
                    SignUp
                </button>
            </Link>
        }
        {isLoggedIn && 
            <Link to="/">
                <button onClick={()=>{
                    setIsLoggedIn(false);
                    toast.success("Logged Out");
                }}>
                    Log Out
                </button>
            </Link>
        }
        {isLoggedIn && 
            <Link to="/dashboard">
                <button>
                    DashBoard
                </button>
            </Link>
        }

      </div>

    </div>
  )
}

export default Navbar
