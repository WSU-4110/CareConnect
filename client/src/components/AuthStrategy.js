class AuthStrategy {
    authenticate(data) {
      throw new Error("authenticate method must be implemented by concrete strategy");
    }
  }
  
  export default AuthStrategy;
  