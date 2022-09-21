
const Login = () => {
    return (
      <div className="form-container">
        <div className="form-wrapper">
            <span className="logo">LIve Chat</span>
            <span className="title">Login</span>
            <form>
                <input type="text" placeholder="display name"/>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
            
                <button>Sign In</button>
            </form>
            <p> Don't have an account? Register</p> 
            
        </div>
      </div>
    );
  }
  
  export default Login
  