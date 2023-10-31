// UserRegistrationStrategyFactory.js
import LocalUserRegistrationStrategy from "./LocalUserRegistrationStrategy";
import OAuthUserRegistrationStrategy from "./OAuthUserRegistrationStrategy";

class UserRegistrationStrategyFactory {
  createRegistrationStrategy(strategyType) {
    if (strategyType === "local") {
      return new LocalUserRegistrationStrategy();
    } else if (strategyType === "oauth") {
      return new OAuthUserRegistrationStrategy();
    } else {
      throw new Error("Invalid strategy type");
    }
  }
}

export default UserRegistrationStrategyFactory;
