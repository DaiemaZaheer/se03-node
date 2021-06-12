const {httpStatus, message} = require('../utils/constant');
const {Customer} = require('../models');
const ApiError = require('../utils/ApiError');
const {Op} = require("sequelize");

const createCustomer = async (customerBody) => {
    let customer = await Customer.create(customerBody);
    return customer;
};

const queryCustomers = async (filter, options) => {
    const customers = await Customer.findAll();
    return customers;
};

const getCustomerById = async (customerId) => {
    let customer = await Customer.findOne(
        {
            where: {
                id: customerId
            }
        }
    );
    return customer;
};


const getCustomerByDealerId = async (id) => {
    let customers = await Customer.findAll(
        {
            where: {
                dealerId: id
            }
        }
    );
    return customers;
};

const updateCustomerById = async (customerId, updateCustomerBody) => {
    const customer = await getCustomerById(customerId);
    if (!customer) {
        throw new ApiError(httpStatus.NOT_FOUND, message.NOT_FOUND);
    }
    Object.assign(customer, updateCustomerBody);
    await customer.save();
    return customer;
};

const deleteCustomerById = async (customerId) => {
    const customer = await getCustomerById(customerId);
    if (!customer) {
        throw new ApiError(httpStatus.NOT_FOUND, message.NOT_FOUND);
    }
    await customer.destroy();
    return customer;
};


module.exports = {
    createCustomer,
    queryCustomers,
    getCustomerById,
    getCustomerByDealerId,
    updateCustomerById,
    deleteCustomerById,
};

