import { LocalDeviceUploadStrategy, CloudUploadStrategy, URLUploadStrategy } from './uploadStrategies.js';

class UserProfile {
  constructor(strategy) {
    this.ProfilePicUploadStrategy = strategy;
  }
  
  setStrategy(strategy) {
    this.ProfilePicUploadStrategy = strategy;
  }

  uploadData(data) {
    this.ProfilePicUploadStrategy.upload(data);
  }
}

let user = new UserProfile(new LocalDeviceUploadStrategy());

// Local upload
let file = "sample_file.jpg"; 
user.uploadData(file);

// Cloud upload
user.setStrategy(new CloudUploadStrategy());
user.uploadData(file);

// URL upload
let imageURL = "https://sampleurl.com/image.jpg";
user.setStrategy(new URLUploadStrategy());
user.uploadData(imageURL);
