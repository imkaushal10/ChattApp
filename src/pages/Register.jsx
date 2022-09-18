import Avatar from "../images/addava.png"

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
                <input style={{display:"none"}} type="file" id="file"/>
                <label htmlFor="file">
                    <img src= {Avatar} alt="add avatar" />
                    <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p> Already have an account? Login</p> 
            
        </div>
      </div>
    );
  }
  
  export default Register
  