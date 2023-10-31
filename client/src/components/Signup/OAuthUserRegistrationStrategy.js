// OAuthUserRegistrationStrategy.js
import UserRegistrationStrategy from "./UserRegistrationStrategy";

class OAuthUserRegistrationStrategy extends UserRegistrationStrategy {
  register(data) {
    return axios.post("http://localhost:8080/api/users/oauth", data);
  }
}

export default OAuthUserRegistrationStrategy;
