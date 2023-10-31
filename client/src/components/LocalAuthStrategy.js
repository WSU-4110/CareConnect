import AuthStrategy from "./AuthStrategy";

class LocalAuthStrategy extends AuthStrategy {
  authenticate(data) {
    return axios.post("http://localhost:8080/api/auth/local", data);
  }
}

export default LocalAuthStrategy;
