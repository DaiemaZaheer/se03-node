const {httpStatus, message} = require('../utils/constant');
const {Package} = require('../models');
const ApiError = require('../utils/ApiError');
const {Op} = require("sequelize");

const createPackage = async (packageBody) => {
    let package = await Package.create(packageBody);
    return package;
};

const queryPackages = async (filter, options) => {
    const packages = await Package.findAll();
    return packages;
};

const getPackageById = async (packageId) => {
    let package = await Package.findOne(
        {
            where: {
                id: packageId
            }
        }
    );
    return package;
};

const getPackageByTenantId = async (id) => {
    let packages = await Package.findAll(
        {
            where: {
                tenantId: id
            }
        }
    );
    return packages;
};

const updatePackageById = async (packageId, updatePackageBody) => {
    const package = await getPackageById(packageId);
    if (!package) {
        throw new ApiError(httpStatus.NOT_FOUND, message.NOT_FOUND);
    }
    Object.assign(package, updatePackageBody);
    await package.save();
    return package;
};

const deletePackageById = async (packageId) => {
    const package = await getPackageById(packageId);
    if (!package) {
        throw new ApiError(httpStatus.NOT_FOUND, message.NOT_FOUND);
    }
    await package.destroy();
    return package;
};


module.exports = {
    createPackage,
    queryPackages,
    getPackageById,
    getPackageByTenantId,
    updatePackageById,
    deletePackageById,
};

