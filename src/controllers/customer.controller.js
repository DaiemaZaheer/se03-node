const {httpStatus, message} = require('../utils/constant');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const objectUtil = require('../utils/objectUtil');
const ApiResponse = require("../utils/ApiResponse");
const { customerService, userService, userRoleService, packageService, customerSubscriptionService,  mikrotikService } = require('../services');

const createCustomer = catchAsync(async (req, res) => {
  const customer = await customerService.createCustomer(req.body);
  res.json(new ApiResponse(httpStatus.CREATED, message.SUCCESS, { customer: customer }));
});

const getCustomers = catchAsync(async (req, res) => {
  const filter = objectUtil.pick(req.query, ['filter']);
  const options = objectUtil.pick(req.query, ['sortBy', 'limit', 'page']);
  const customers = await customerService.queryCustomers(filter, options);
  res.json(new ApiResponse(httpStatus.OK, message.SUCCESS, { customers: customers }));
});

const getCustomer = catchAsync(async (req, res) => {
  const customer = await customerService.getCustomerById(req.params.customerId);
  if (!customer) {
    throw new ApiError(httpStatus.NOT_FOUND, message.NOT_FOUND);
  }
  res.json(new ApiResponse(httpStatus.OK, message.SUCCESS, { customer: customer }));
});

const updateCustomer = catchAsync(async (req, res) => {
  const customer = await customerService.updateCustomerById(req.params.customerId, req.body);
  res.json(new ApiResponse(httpStatus.ACCEPTED, message.SUCCESS, { customer: customer }));
});

const deleteCustomer = catchAsync(async (req, res) => {
  const customer = await customerService.deleteCustomerById(req.params.customerId);
  res.json(new ApiResponse(httpStatus.ACCEPTED, message.SUCCESS, { customer: customer }));
});

const addCustomerUser = catchAsync(async (req, res) => {
  const customer = await customerService.getCustomerById(req.params.customerId);
  if (!customer) {
    throw new ApiError(httpStatus.NOT_FOUND, message.NOT_FOUND);
  }
  const user = await userService.gatUserByUsernameOrEmail(req.body.userName);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, message.NOT_FOUND);
  }
  const userRole = await userRoleService.createUserRole({userId: user.id, roleId: customer.id, role: 'customer'});
  res.json(new ApiResponse(httpStatus.OK, message.SUCCESS, { customer: customer, user: user, userRole: userRole}));
});

const getCustomerUsers = catchAsync(async (req, res) => {
  const customer = await customerService.getCustomerById(req.params.customerId);
  if (!customer) {
    throw new ApiError(httpStatus.NOT_FOUND, message.NOT_FOUND);
  }
  const users = await userRoleService.getUserByRole(customer.id, 'customer');
  res.json(new ApiResponse(httpStatus.OK, message.SUCCESS, { customer: customer, users: users}));
});

const deleteCustomerUser = catchAsync(async (req, res) => {
  const customer = await customerService.getCustomerById(req.params.customerId);
  if (!customer) {
    throw new ApiError(httpStatus.NOT_FOUND, message.NOT_FOUND);
  }
  const user = await userRoleService.deleteUserRoleById(req.params.userRoleId);
  res.json(new ApiResponse(httpStatus.OK, message.SUCCESS, { customer: customer, user: user}));
});

const addCustomerSubscription = catchAsync(async (req, res) => {
  const customer = await customerService.getCustomerById(req.params.customerId);
  if (!customer) {
    throw new ApiError(httpStatus.NOT_FOUND, message.NOT_FOUND);
  }
  const package = await packageService.getPackageById(customer.packageId);
  if (!package) {
    throw new ApiError(httpStatus.NOT_FOUND, message.NOT_FOUND);
  }
  const pppoe = {name: customer.userName, password: customer.secret, profile: package.profileName};
  console.log(nas);
  console.log(pppoe)
  // let pppoeUser = await mikrotikService.addMikrotikApiUser(nas, pppoe);
  // if(pppoeUser && pppoeUser.ref) {
    const customerSubscription = await customerSubscriptionService.createCustomerSubscription({packageId: package.id, customerId: customer.id});
    res.json(new ApiResponse(httpStatus.OK, message.SUCCESS, { customer: customer, package: package, customerSubscription: customerSubscription}));
  // }
  // res.json(new ApiResponse(httpStatus.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR, { data: "NAS ERROR"}));
});

const getCustomerSubscriptions = catchAsync(async (req, res) => {
  const customer = await customerService.getCustomerById(req.params.customerId);
  if (!customer) {
    throw new ApiError(httpStatus.NOT_FOUND, message.NOT_FOUND);
  }
  const customerSubscription = await customerSubscriptionService.getCustomerSubscriptionsByCustomerId(customer.id);
  res.json(new ApiResponse(httpStatus.OK, message.SUCCESS, { customer: customer, customerSubscription: customerSubscription}));
});

const deleteCustomerSubscription = catchAsync(async (req, res) => {
  const customer = await customerService.getCustomerById(req.params.customerId);
  if (!customer) {
    throw new ApiError(httpStatus.NOT_FOUND, message.NOT_FOUND);
  }

  const pppoe = {name: customer.userName};
  console.log(nas);
  console.log(pppoe)
  // let pppoeUser = await mikrotikService.removeMikrotikApiUser(nas, pppoe);
  // const customerSubscription = await customerSubscriptionService.deleteCustomerSubscriptionsById(req.params.customerSubscriptionId);
  res.json(new ApiResponse(httpStatus.OK, message.SUCCESS, { customer: customer, /*customerSubscription: customerSubscription*/}));
});

module.exports = {
  createCustomer,
  getCustomers,
  getCustomer,
  updateCustomer,
  deleteCustomer,
  addCustomerUser,
  getCustomerUsers,
  deleteCustomerUser,
  addCustomerSubscription,
  getCustomerSubscriptions,
  deleteCustomerSubscription
};
