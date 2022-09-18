
const Register = () => {
    return (
      <div className="form-container">
        <div className="form-wrapper">
            <span className="logo">LIve Chat</span>
            <span className="title">Register</span>
            <form>
                <input type="text" placeholder="display name"/>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <input type="file" id="file"/>
                <label htmlFor="file">
                    add avatar
                </label>
                <button>Sign Up</button>
            </form>
            <p> Already have an account? Login</p> 
            
        </div>
      </div>
    );
  }
  
  export default Register
  