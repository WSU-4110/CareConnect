import AuthStrategy from "./AuthStrategy";

class LocalAuthStrategy extends AuthStrategy {
  authenticate(data) {
    // Implement local authentication logic here
    return axios.post("http://localhost:8080/api/auth/local", data);
  }
}

export default LocalAuthStrategy;
