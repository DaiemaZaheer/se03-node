const {httpStatus, message} = require('../utils/constant');
const {Region, SubRegion, Country, State, City} = require('../models');
const ApiError = require('../utils/ApiError');
const {Op} = require("sequelize");

const createRegion = async (regionBody) => {
    let region = await Region.create(regionBody);
    return region;
};

const queryRegions = async (filter, options) => {
    const regions = await Region.findAll();
    return regions;
};

const getRegionById = async (regionId) => {
    let region = await Region.findOne(
        {
            where: {
                id: regionId
            }
        }
    );
    return region;
};

const updateRegionById = async (regionId, updateRegionBody) => {
    const region = await getRegionById(regionId);
    if (!region) {
        throw new ApiError(httpStatus.NOT_FOUND, message.NOT_FOUND);
    }
    Object.assign(region, updateRegionBody);
    await region.save();
    return region;
};

const deleteRegionById = async (regionId) => {
    const region = await getRegionById(regionId);
    if (!region) {
        throw new ApiError(httpStatus.NOT_FOUND, message.NOT_FOUND);
    }
    await region.destroy();
    return region;
};


const createSubRegion = async (subRegionBody) => {
    let subRegion = await SubRegion.create(subRegionBody);
    return subRegion;
};

const querySubRegions = async (filter, options) => {
    const subRegions = await SubRegion.findAll();
    return subRegions;
};

const getSubRegionById = async (subRegionId) => {
    let subRegion = await SubRegion.findOne(
        {
            where: {
                id: subRegionId
            }
        }
    );
    return subRegion;
};

const updateSubRegionById = async (subRegionId, updateSubRegionBody) => {
    const subRegion = await getSubRegionById(subRegionId);
    if (!subRegion) {
        throw new ApiError(httpStatus.NOT_FOUND, message.NOT_FOUND);
    }
    Object.assign(subRegion, updateSubRegionBody);
    await subRegion.save();
    return subRegion;
};

const deleteSubRegionById = async (subRegionId) => {
    const subRegion = await getSubRegionById(subRegionId);
    if (!subRegion) {
        throw new ApiError(httpStatus.NOT_FOUND, message.NOT_FOUND);
    }
    await subRegion.destroy();
    return subRegion;
};


const createCountry = async (countryBody) => {
    let country = await Country.create(countryBody);
    return country;
};

const queryCountries = async (filter, options) => {
    const countries = await Country.findAll();
    return countries;
};

const getCountryById = async (countryId) => {
    let country = await Country.findOne(
        {
            where: {
                id: countryId
            }
        }
    );
    return country;
};

const updateCountryById = async (countryId, updateCountryBody) => {
    const country = await getCountryById(countryId);
    if (!country) {
        throw new ApiError(httpStatus.NOT_FOUND, message.NOT_FOUND);
    }
    Object.assign(country, updateCountryBody);
    await country.save();
    return country;
};

const deleteCountryById = async (countryId) => {
    const country = await getCountryById(countryId);
    if (!country) {
        throw new ApiError(httpStatus.NOT_FOUND, message.NOT_FOUND);
    }
    await country.destroy();
    return country;
};


const createState = async (stateBody) => {
    let state = await State.create(stateBody);
    return state;
};

const queryStates = async (filter, options) => {
    const states = await State.findAll();
    return states;
};

const getStateById = async (stateId) => {
    let state = await State.findOne(
        {
            where: {
                id: stateId
            }
        }
    );
    return state;
};

const updateStateById = async (stateId, updateStateBody) => {
    const state = await getStateById(stateId);
    if (!state) {
        throw new ApiError(httpStatus.NOT_FOUND, message.NOT_FOUND);
    }
    Object.assign(state, updateStateBody);
    await state.save();
    return state;
};

const deleteStateById = async (stateId) => {
    const state = await getStateById(stateId);
    if (!state) {
        throw new ApiError(httpStatus.NOT_FOUND, message.NOT_FOUND);
    }
    await state.destroy();
    return state;
};


const createCity = async (cityBody) => {
    let city = await City.create(cityBody);
    return city;
};

const queryCities = async (filter, options) => {
    const cities = await City.findAll();
    return cities;
};

const getCityById = async (cityId) => {
    let city = await City.findOne(
        {
            where: {
                id: cityId
            }
        }
    );
    return city;
};

const updateCityById = async (cityId, updateCityBody) => {
    const city = await getCityById(cityId);
    if (!city) {
        throw new ApiError(httpStatus.NOT_FOUND, message.NOT_FOUND);
    }
    Object.assign(city, updateCityBody);
    await city.save();
    return city;
};

const deleteCityById = async (cityId) => {
    const city = await getCityById(cityId);
    if (!city) {
        throw new ApiError(httpStatus.NOT_FOUND, message.NOT_FOUND);
    }
    await city.destroy();
    return city;
};

const queryAreas = async (filter, options) => {
    const regions = await Country.findAll(
        {
            include: [
                {
                    model: State ,
                    include: [
                        {
                            model: City
                        },
                    ]
                },
                {
                    model: SubRegion ,
                    include: [
                        {
                            model: Region
                        },
                    ]
                },

            ]
        }
    );
    return regions;
};



module.exports = {

    createRegion,
    queryRegions,
    getRegionById,
    updateRegionById,
    deleteRegionById,

    createSubRegion,
    querySubRegions,
    getSubRegionById,
    updateSubRegionById,
    deleteSubRegionById,

    createCountry,
    queryCountries,
    getCountryById,
    updateCountryById,
    deleteCountryById,

    createState,
    queryStates,
    getStateById,
    updateStateById,
    deleteStateById,

    createCity,
    queryCities,
    getCityById,
    updateCityById,
    deleteCityById,

    queryAreas

};

