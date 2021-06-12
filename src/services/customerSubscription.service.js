const {httpStatus, message} = require('../utils/constant');
const {CustomerSubscription} = require('../models');
const ApiError = require('../utils/ApiError');
const {Op} = require("sequelize");
const {packageService} = require('../services');
const moment = require('moment');

const createCustomerSubscription = async (customerSubscriptionBody, nasRef) => {
    const {customerId, packageId} = customerSubscriptionBody;
    const package = await packageService.getPackageById(packageId);
    if (!package) {
        throw new ApiError(httpStatus.NOT_FOUND, message.NOT_FOUND);
    }
    const subscriptionTimeStart = moment().toDate();
    const subscriptionTimeExpire = moment().add(Number(package.duration), package.durationType.toLowerCase()).toDate();
    let customerSubscription = await CustomerSubscription.create({customerId: customerId, packageId: package.id, startAt: subscriptionTimeStart, endAt: subscriptionTimeExpire, payable: package.charges, paid: package.charges, nasRef: nasRef});
    return customerSubscription;
};

const queryCustomerSubscriptions = async (filter, options) => {
    const customerSubscriptions = await CustomerSubscription.findAll();
    return customerSubscriptions;
};

const getCustomerSubscriptionById = async (customerSubscriptionId) => {
    let customerSubscription = await CustomerSubscription.findOne(
        {
            where: {
                id: customerSubscriptionId
            }
        }
    );
    return customerSubscription;
};

const getCustomerSubscriptionsByCustomerId = async (customerId) => {
    let customerSubscriptions = await CustomerSubscription.findAll(
        {
            where: {
                customerId: customerId
            }
        }
    );
    return customerSubscriptions;
};

const deleteCustomerSubscriptionsById = async (customerSubscriptionId) => {
    const customerSubscription = await getCustomerSubscriptionById(customerSubscriptionId);
    if (!customerSubscription) {
        throw new ApiError(httpStatus.NOT_FOUND, message.NOT_FOUND);
    }
    await customerSubscription.destroy();
    return customerSubscription;
};

module.exports = {
    createCustomerSubscription,
    queryCustomerSubscriptions,
    getCustomerSubscriptionById,
    getCustomerSubscriptionsByCustomerId,
    deleteCustomerSubscriptionsById
};
