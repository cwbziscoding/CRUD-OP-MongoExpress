import UserModel from '../models/user.model.js';

export const getAllUsers = async (req, res) => {
    const users = await UserModel.find();
    res.json({ users: users });
}

export const createUser = async (req, res) => {
    const { name } = req.body;
    const newUser = new UserModel({ name });
    await newUser.save();
    res.json({ message: "User created successfully", user: newUser });
}

export const deleteUserById = async (req, res) => {
    const { id } = req.params;
    await UserModel.findByIdAndDelete(id);
    res.json({ message: "User deleted successfully" });
}

export const updateUserById = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const updatedUser = await UserModel.findByIdAndUpdate(id, { name }, { new: true });
    res.json({ message: "User updated successfully", user: updatedUser });
}