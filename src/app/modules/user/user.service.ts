import User from "./user.model";

export const createUserToDb = async () => {
    const user = await new User({
        id: '5',
        role: 'student',
        password: 'dipra1212',
        name: {
            firstName: 'Test',
            middleName: '',
            lastName: 'Das'
        },
        dateOfBirth: '19/09/1999',
        gender: 'male',
        email: 'dip@gmail.com',
        contactNo: '01876704498',
        emergencyContactNo: '01876704498',
        presentAddress: 'my Addrtess',
        permanentAddress: 'address'
    })
    console.log('UserInfo', user);
    await user.save();
    return user;
}