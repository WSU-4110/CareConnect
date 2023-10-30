class ProfilePicUploadStrategy {
    upload(data) {
      throw new Error("Method must be implemented.");
    }
  }
  
  class LocalDeviceUploadStrategy extends ProfilePicUploadStrategy {
    upload(file) {
      console.log("Uploading from device...");
      setTimeout(() => {
          console.log("Profile Pic ${file} uploaded from device.");
      }, 1000);
    }
  }
  
  class CloudUploadStrategy extends ProfilePicUploadStrategy {
    upload(file) {
      console.log("Uploading from Cloud...");
      setTimeout(() => {
          console.log("Profile Pic ${file} fetched and uploaded from cloud..");
      }, 1000);
    }
  }
  
  class URLUploadStrategy extends ProfilePicUploadStrategy {
    upload(url) {
     console.log("Uploading from URL...");
      fetch(url) 
      .then(response => {
          console.log("Profile Pic from ${url} fetched and uploaded.");
      })
      .catch(error => {
          console.log("Error while fetching Profile Pic from ${url}: ${error.message}");
      });
    }
  }
  
  export { LocalDeviceUploadStrategy, CloudUploadStrategy, URLUploadStrategy };
  