const catchAsync = require('../utils/catchAsync');
const {httpStatus, message} = require('../utils/constant');
const ApiResponse = require("../utils/ApiResponse");
const ApiError = require("../utils/ApiError");
const {areaService} = require('../services');
const objectUtil = require('../utils/objectUtil');


const createRegion = catchAsync(async (req, res) => {
  const region = await areaService.createRegion(req.body);
  res.json(new ApiResponse(httpStatus.CREATED, message.SUCCESS, { region: region }));
});


const getRegions = catchAsync(async (req, res) => {
  const filter = objectUtil.pick(req.query, ['filter']);
  const options = objectUtil.pick(req.query, ['sortBy', 'limit', 'page']);
  const regions = await areaService.queryRegions(filter, options);
  res.json(new ApiResponse(httpStatus.OK, message.SUCCESS, { regions: regions }));
});

const getRegion = catchAsync(async (req, res) => {
  const region = await areaService.getRegionById(req.params.regionId);
  if (!region) {
    throw new ApiError(httpStatus.NOT_FOUND, message.NOT_FOUND);
  }
  res.json(new ApiResponse(httpStatus.OK, message.SUCCESS, { region: region }));
});


const updateRegion = catchAsync(async (req, res) => {
  const region = await areaService.updateRegionById(req.params.regionId, req.body);
  res.json(new ApiResponse(httpStatus.ACCEPTED, message.SUCCESS, { region: region }));
});

const deleteRegion = catchAsync(async (req, res) => {
  const tenant = await areaService.deleteRegionById(req.params.regionId);
  res.json(new ApiResponse(httpStatus.ACCEPTED, message.SUCCESS, { tenant: tenant }));
});


const createSubRegion = catchAsync(async (req, res) => {
  const subRegion = await areaService.createSubRegion(req.body);
  res.json(new ApiResponse(httpStatus.CREATED, message.SUCCESS, { subRegion: subRegion }));
});

const getSubRegions = catchAsync(async (req, res) => {
  const filter = objectUtil.pick(req.query, ['filter']);
  const options = objectUtil.pick(req.query, ['sortBy', 'limit', 'page']);
  const subRegions = await areaService.querySubRegions(filter, options);
  res.json(new ApiResponse(httpStatus.OK, message.SUCCESS, { subRegions: subRegions }));
});

const getSubRegion = catchAsync(async (req, res) => {
  const subRegion = await areaService.getSubRegionById(req.params.subRegionId);
  if (!subRegion) {
    throw new ApiError(httpStatus.NOT_FOUND, message.NOT_FOUND);
  }
  res.json(new ApiResponse(httpStatus.OK, message.SUCCESS, { subRegion: subRegion }));
});


const updateSubRegion = catchAsync(async (req, res) => {
  const subRegion = await areaService.updateSubRegionById(req.params.subRegionId, req.body);
  res.json(new ApiResponse(httpStatus.ACCEPTED, message.SUCCESS, { subRegion: subRegion }));
});

const deleteSubRegion = catchAsync(async (req, res) => {
  const subRegion = await areaService.deleteSubRegionById(req.params.subRegionId);
  res.json(new ApiResponse(httpStatus.ACCEPTED, message.SUCCESS, { subRegion: subRegion }));
});


const createCountry = catchAsync(async (req, res) => {
  const country = await areaService.createCountry(req.body);
  res.json(new ApiResponse(httpStatus.CREATED, message.SUCCESS, { Country: country }));
});

const getCountries = catchAsync(async (req, res) => {
  const filter = objectUtil.pick(req.query, ['filter']);
  const options = objectUtil.pick(req.query, ['sortBy', 'limit', 'page']);
  const country = await areaService.queryCountries(filter, options);
  res.json(new ApiResponse(httpStatus.OK, message.SUCCESS, { country: country }));
});

const getCountry = catchAsync(async (req, res) => {
  const country = await areaService.getCountryById(req.params.countryId);
  if (!country) {
    throw new ApiError(httpStatus.NOT_FOUND, message.NOT_FOUND);
  }
  res.json(new ApiResponse(httpStatus.OK, message.SUCCESS, { country: country }));
});


const updateCountry = catchAsync(async (req, res) => {
  const country = await areaService.updateCountryById(req.params.countryId, req.body);
  res.json(new ApiResponse(httpStatus.ACCEPTED, message.SUCCESS, { country: country }));
});

const deleteCountry = catchAsync(async (req, res) => {
  const country = await areaService.deleteCountryById(req.params.countryId);
  res.json(new ApiResponse(httpStatus.ACCEPTED, message.SUCCESS, { country: country }));
});


const createState = catchAsync(async (req, res) => {
  const state = await areaService.createState(req.body);
  res.json(new ApiResponse(httpStatus.CREATED, message.SUCCESS, { state: state }));
});

const getStates = catchAsync(async (req, res) => {
  const filter = objectUtil.pick(req.query, ['filter']);
  const options = objectUtil.pick(req.query, ['sortBy', 'limit', 'page']);
  const states = await areaService.queryStates(filter, options);
  res.json(new ApiResponse(httpStatus.OK, message.SUCCESS, { states: states }));
});

const getState = catchAsync(async (req, res) => {
  const state = await areaService.getStateById(req.params.stateId);
  if (!state) {
    throw new ApiError(httpStatus.NOT_FOUND, message.NOT_FOUND);
  }
  res.json(new ApiResponse(httpStatus.OK, message.SUCCESS, { state: state }));
});


const updateState = catchAsync(async (req, res) => {
  const state = await areaService.updateStateById(req.params.stateId, req.body);
  res.json(new ApiResponse(httpStatus.ACCEPTED, message.SUCCESS, { state: state }));
});

const deleteState = catchAsync(async (req, res) => {
  const state = await areaService.deleteStateById(req.params.stateId);
  res.json(new ApiResponse(httpStatus.ACCEPTED, message.SUCCESS, { state: state }));
});


const createCity = catchAsync(async (req, res) => {
  const city = await areaService.createCity(req.body);
  res.json(new ApiResponse(httpStatus.CREATED, message.SUCCESS, { city: city }));
});

const getCities = catchAsync(async (req, res) => {
  const filter = objectUtil.pick(req.query, ['filter']);
  const options = objectUtil.pick(req.query, ['sortBy', 'limit', 'page']);
  const cities = await areaService.queryCities(filter, options);
  res.json(new ApiResponse(httpStatus.OK, message.SUCCESS, { cities: cities }));
});

const getCity = catchAsync(async (req, res) => {
  const city = await areaService.getCityById(req.params.cityId);
  if (!city) {
    throw new ApiError(httpStatus.NOT_FOUND, message.NOT_FOUND);
  }
  res.json(new ApiResponse(httpStatus.OK, message.SUCCESS, { city: city }));
});

const updateCity = catchAsync(async (req, res) => {
  const city = await areaService.updateStateById(req.params.cityId, req.body);
  res.json(new ApiResponse(httpStatus.ACCEPTED, message.SUCCESS, { city: city }));
});

const deleteCity = catchAsync(async (req, res) => {
  const city = await areaService.deleteCityById(req.params.cityId);
  res.json(new ApiResponse(httpStatus.ACCEPTED, message.SUCCESS, { city: city }));
});

const getAreas = catchAsync(async (req, res) => {
  const filter = objectUtil.pick(req.query, ['filter']);
  const options = objectUtil.pick(req.query, ['sortBy', 'limit', 'page']);
  const cities = await areaService.queryAreas(filter, options);
  res.json(new ApiResponse(httpStatus.OK, message.SUCCESS, { cities: cities }));
});


module.exports = {

  createRegion,
  getRegions,
  getRegion,
  updateRegion,
  deleteRegion,

  createSubRegion,
  getSubRegions,
  getSubRegion,
  updateSubRegion,
  deleteSubRegion,

  createCountry,
  getCountries,
  getCountry,
  updateCountry,
  deleteCountry,

  createState,
  getStates,
  getState,
  updateState,
  deleteState,

  createCity,
  getCities,
  getCity,
  updateCity,
  deleteCity,

  getAreas

};
