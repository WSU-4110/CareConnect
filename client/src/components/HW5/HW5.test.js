/******************************Function#1 for Firstname and Last name entry*****************/
function Profilename(FirstName, LastName) {
    //check if First name field is empty
    if (!FirstName && LastName) {
      throw new Error('FirstName is required');
    }
    //check if Last name field is empty
    if(FirstName && !LastName){
        throw new Error('LastName is required');
    }
    //check if both First and Last name fields are empty
    if(!LastName && !FirstName){
        throw new Error('FirstName and LastName are required');
    }
    
    // First and Last name fields are filled
    return `FirstName ${FirstName} and lastname ${LastName} filled`;
  }
  
/*************************TEST Function#1 for Firstname and Last name entry*****************/
   
   describe('Profilename function', () => {
    test('Enetered first and Last names', () => {
      const FirstName = 'Mohan';
      const LastName = 'Sreeramulu';
      // Both First and Last names filled
      const result = Profilename(FirstName, LastName);
  
      expect(result).toEqual(`FirstName ${FirstName} and lastname ${LastName} filled`);
    });
  
    test('throws an error if FirstName is missing', () => {

      // First name empty and Last name filled
      expect(() => Profilename('', 'xyz123')).toThrow('FirstName is required');
  
    });
    test('throws an error if LastName is missing', () => {

      // First name filled and Last name empty
        expect(() => Profilename('Mohan', '')).toThrow('LastName is required');
    });
    test('throws an error if FirstName and LastName are missing', () => {
        // First name empty and Last name empty
        expect(() => Profilename('', '')).toThrow('FirstName and LastName are required');
    });
});

/*************Function#2 for checking if profile exists based on user email****************/ 

function Profilecheck(emailid) {
  //check if login email id profile exists
  if (emailid !== 'mohanbabu.sreeramulu@gmail.com') {
    throw new Error('Profile does not exist');
  }
   
  return `Profile for ${emailid} exists`;
}

/******************************TEST Function#2 for Profilecheck*****************************/

describe('Profilecheck function', () => {
  test('Profile  exists', () => {
    const login_email = 'mohanbabu.sreeramulu@gmail.com';
    
    const result = Profilecheck(login_email);
    //login email id valid
    expect(result).toEqual(`Profile for ${login_email} exists`);
  });

  test('Profile doesnot exists', () => {
    const login_email = 'mohan.sreeramulu@gmail.com';
    //login email id not valid
    expect(() => Profilecheck(login_email)).toThrow('Profile does not exist');

      });

});


/****************************Function#3 for profile update status****************************/

function Profileupdate(choice, login_email) {
  //check if user wants to update or cancel profile update
  if (choice == 'cancel') {
    throw new Error('Profile update canceled');
  }
   
  return `Profile for ${login_email} updated successfully`;
}


/*******************TEST Function#3 for Profileupdate status based on user choice**************/

describe('Profileupdate function', () => {
  test('Profile  updated successfully', () => {
    const login_email = 'mohanbabu.sreeramulu@gmail.com';
    const choice = 'update'
    
    const result = Profileupdate(choice, login_email);
    // User has chosen to update the profile
    expect(result).toEqual(`Profile for ${login_email} updated successfully`);
  });

  test('Profile doesnot exists', () => {
    const login_email = 'mohanbabu.sreeramulu@gmail.com';
    const choice = 'cancel'
    // User has chosen to cancel the profile update
    expect(() => Profileupdate(choice, login_email)).toThrow('Profile update canceled');

      });

});

/****************************Function#4 for change Password****************************/

function changepassword(oldpswd, newpswd, cnfrmpswd) {
  //check if user wants to update or cancel profile update
  if (oldpswd != 'defualtpswd') {
    throw new Error('Wrong Old Password entered');
  }
  else{
    if(newpswd != cnfrmpswd)
    throw new Error('Passwords did not match');
   
  }
     
  return `Password updated successfully`;
} 

/*******************TEST Function#4 for changepassword ******************************/

describe('changepassword function', () => {
  test('Password  updated successfully', () => {
    const oldpswd = 'defualtpswd';
    const newpswd = 'updatepswd'
    const cnfrmpswd = 'updatepswd'
    
    const result = changepassword(oldpswd, newpswd,cnfrmpswd);
    // User has chosen to update the profile
    expect(result).toEqual(`Password updated successfully`);
  });

  test('Passwords did not match', () => {
    const oldpswd = 'defualtpswd';
    const newpswd = 'updatepswd'
    const cnfrmpswd = 'updatepswd2'
    // User has chosen to cancel the profile update
    expect(() => changepassword(oldpswd, newpswd,cnfrmpswd)).toThrow('Passwords did not match');

      });
  test('Wrong Old Password', () => {
    const oldpswd = 'defualtpsws';
    const newpswd = 'updatepswd'
    const cnfrmpswd = 'updatepswd'
    // User has chosen to cancel the profile update
    expect(() => changepassword(oldpswd, newpswd,cnfrmpswd)).toThrow('Wrong Old Password entered');

      });


});