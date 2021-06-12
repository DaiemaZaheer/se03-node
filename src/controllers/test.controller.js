const catchAsync = require('../utils/catchAsync');
const {httpStatus, message} = require('../utils/constant');
const ApiResponse = require('../utils/ApiResponse');
const {getIP, getAgent} = require('../utils/userOriginUtil');

const connection = catchAsync(async (req, res) => {
    res.json(new ApiResponse(httpStatus.OK, message.SUCCESS, { message: 'connection Successful' }));
});

const auth = catchAsync(async (req, res) => {
    res.json(new ApiResponse(httpStatus.OK, message.SUCCESS, { message: 'Access granted' }));
});

const requestInfo = catchAsync(async (req, res) => {
    res.json(new ApiResponse(httpStatus.OK, message.SUCCESS, { ip: getIP(req), agent: getAgent(req) }));
});

module.exports = {
    connection,
    auth,
    requestInfo
};
