import "./PlacementOfficerLogin.css";
import backimg from "../assets/Vector (1).png"

function PlacementOfficerLogin() {
  return (
    <div className="login-page">

      {/* Navbar */}

      <header className="navbar">
        <div className="logo">EduHire</div>

        <div className="nav-links">
          <a href="#">Support</a>

          <button className="help-btn">
            Help Center
          </button>
        </div>
      </header>

      {/* Back Button */}

      <div className="back-container">
        <button className="back-btn">
       <img src={backimg} alt="backimg" />
          Back
        </button>
      </div>

      {/* Login Form */}

      <div className="login-container">

        <h1>Placement Officer</h1>

        <p>
          Enter your credentials to access the portal.
        </p>

        <form>

          <label>University Email</label>

          <input
            type="email"
            placeholder="name@university.edu"
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="••••••••"
          />

          <button className="login-btn">
            Sign In
          </button>

          <div className="bottom-links">

            <a href="#">
              Forgot Password?
            </a>

            <a href="#">
              Request Access
            </a>

          </div>

        </form>

      </div>

      {/* Footer */}

      <footer className="footer">

        <span>
          © 2026 Placement Platform. All rights reserved.
        </span>

        <div>

          <a href="#">Privacy Policy</a>

          <a href="#">Terms of Service</a>

          <a href="#">Cookie Policy</a>

        </div>

      </footer>

    </div>
  );
}

export default PlacementOfficerLogin;