const {httpStatus, message} = require('../utils/constant');
const {Franchise} = require('../models');
const ApiError = require('../utils/ApiError');
const {Op} = require("sequelize");

const createFranchise = async (franchiseBody) => {
    let franchise = await Franchise.create(franchiseBody);
    return franchise;
};

const queryFranchises = async (filter, options) => {
    const franchises = await Franchise.findAll();
    return franchises;
};

const getFranchiseById = async (franchiseId) => {
    let franchise = await Franchise.findOne(
        {
            where: {
                id: franchiseId
            }
        }
    );
    return franchise;
};


const getFranchiseByTenantId = async (id) => {
    let franchises = await Franchise.findAll(
        {
            where: {
                tenantId: id
            }
        }
    );
    return franchises;
};

const updateFranchiseById = async (franchiseId, updateFranchiseBody) => {
    const franchise = await getFranchiseById(franchiseId);
    if (!franchise) {
        throw new ApiError(httpStatus.NOT_FOUND, message.NOT_FOUND);
    }
    Object.assign(franchise, updateFranchiseBody);
    await franchise.save();
    return franchise;
};

const deleteFranchiseById = async (franchiseId) => {
    const franchise = await getFranchiseById(franchiseId);
    if (!franchise) {
        throw new ApiError(httpStatus.NOT_FOUND, message.NOT_FOUND);
    }
    await franchise.destroy();
    return franchise;
};


module.exports = {
    createFranchise,
    queryFranchises,
    getFranchiseById,
    getFranchiseByTenantId,
    updateFranchiseById,
    deleteFranchiseById,
};

