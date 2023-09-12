const userModel = require("../models/User");

exports.createUser = async (user) => {
    console.log("requested to create user", user);
    return await userModel.create(user);
};

exports.findAllUsers = async () => {
    console.log("requested to find all users");
    return await userModel.find();
};

exports.findUserById = async (id) => {
    console.log("requested to find user with id ", id);
    return await userModel.findById(id);
};

exports.updateUser = async (id, user) => {
    console.log("requested to update the user with id", id, user);
    return await userModel.findByIdAndUpdate(id, user);
};

exports.deleteUserById = async (id) => {
    console.log("requested to delete the user by id ", id);
    return await userModel.findByIdAndDelete(id);
};