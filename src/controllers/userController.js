import { createUserModel, getAllUsersModel, getUserByIdModel, updateUserModel, deleteUserModel } from '../models/userModel.js';

const handleResponse = (res, status, message, data=null) => {
    res.status(status).json({
        status,
        message,
        data
    })
};

export const createUser = async (req, res, next) => {
    const { name, email } = req.body;
    try {
        const newUser = await createUserModel(name, email);
        handleResponse(res, 201, 'User created successfully', newUser);
    } catch (err) {
        next(err);     
    }
};

export  const getAllUsers = async (req, res, next) => {
    try {
        const users = await getAllUsersModel();
        handleResponse(res, 200, 'Users retrieved successfully', users);
    } catch (err) {
        next(err);
    }
};

export const getUserById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = await getUserByIdModel(id);
        if (!user) {
            return handleResponse(res, 404, 'User not found');
        }
        handleResponse(res, 200, 'User retrieved successfully', user);
    } catch (err) {
        next(err);
    }
};

export const updateUser = async (req, res, next) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        const updatedUser = await updateUserModel(id, name, email);
        if (!updatedUser) {
            return handleResponse(res, 404, 'User not found');
        }
        handleResponse(res, 200, 'User updated successfully', updatedUser);
    } catch (err) {
        next(err);
    }
};

export const deleteUser = async (req, res, next) => {
    const { id } = req.params;
    try{
        const deletedUser = await deleteUserModel(id);
        if(!deletedUser) {
            return handleResponse(res, 404, 'User not found');
        }
        handleResponse(res, 200, 'User deleted successfully', deletedUser);
    } catch (err) {
        next(err);
    }
};