// LocalUserRegistrationStrategy.js
import UserRegistrationStrategy from "./UserRegistrationStrategy";

class LocalUserRegistrationStrategy extends UserRegistrationStrategy {
  register(data) {
    return axios.post("http://localhost:8080/api/users/local", data);
  }
}

export default LocalUserRegistrationStrategy;
