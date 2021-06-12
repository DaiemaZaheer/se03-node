const {httpStatus, message} = require('../utils/constant');
const {NetworkServer} = require('../models');
const ApiError = require('../utils/ApiError');

const createNetworkServer = async (userBody) => {
    let networkServer = await NetworkServer.create(userBody);
    return networkServer;
};

const queryNetworkServers = async (filter, options) => {
    const networkServers = await NetworkServer.findAll();
    return networkServers;
};

const getNetworkServerById = async (id) => {
    let networkServer = await NetworkServer.findOne(
        {
            where: {
                id: id
            }
        }
    );
    return networkServer;
};

const getNetworkServerByTenantId = async (id) => {
    let networkServer = await NetworkServer.findAll(
        {
            where: {
                tenantId: id
            }
        }
    );
    return networkServer;
};

const updateNetworkServerById = async (networkServerId, updateBody) => {
    const networkServer = await getNetworkServerById(networkServerId);
    if (!networkServer) {
        throw new ApiError(httpStatus.NOT_FOUND, message.NOT_FOUND);
    }
    Object.assign(networkServer, updateBody);
    await networkServer.save();
    return networkServer;
};

const deleteNetworkServerById = async (networkServerId) => {
    const networkServer = await getNetworkServerById(networkServerId);
    if (!networkServer) {
        throw new ApiError(httpStatus.NOT_FOUND, message.NOT_FOUND);
    }
    await networkServer.destroy();
    return networkServer;
};

module.exports = {
    createNetworkServer,
    queryNetworkServers,
    getNetworkServerById,
    getNetworkServerByTenantId,
    updateNetworkServerById,
    deleteNetworkServerById,
};
