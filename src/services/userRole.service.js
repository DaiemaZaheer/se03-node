const {httpStatus, message} = require('../utils/constant');
const {UserRole} = require('../models');
const ApiError = require('../utils/ApiError');
const {Op} = require("sequelize");

const createUserRole = async (userRoleBody) => {
    let userRole = await UserRole.create(userRoleBody);
    return userRole;
};

const getUserRoleById = async (userRoleId) => {
    let userRole = await UserRole.findOne(
        {
            where: {
                id: userRoleId
            }
        }
    );
    return userRole;
};

const getUserByRole = async (roleId, role) => {
    let user = await UserRole.findAll(
        {
            where: {
                roleId: roleId,
                role: role
            }
        }
    );
    return user;
};

const getUserRole = async (userId) => {
    let user = await UserRole.findAll(
        {
            where: {
                userId: userId,
            }
        }
    );
    return user;
};

const deleteUserRoleById = async (userRoleId) => {
    const userRole = await getUserRoleById(userRoleId);
    if (!userRole) {
        throw new ApiError(httpStatus.NOT_FOUND, message.NOT_FOUND);
    }
    await userRole.destroy();
    return userRole;
};

module.exports = {
    createUserRole,
    getUserRoleById,
    getUserRole,
    getUserByRole,
    deleteUserRoleById,
};

