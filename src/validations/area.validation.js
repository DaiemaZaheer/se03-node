const Joi = require('joi');
const {objectId} = require('./custom.validation');

const createRegion = {
    body: Joi.object().keys({
        name: Joi.string().required(),
    }),
};

const getRegions = {
    query: Joi.object().keys({
        filter: Joi.string(),
        sortBy: Joi.string(),
        limit: Joi.number().integer(),
        page: Joi.number().integer(),
    }),
};

const getRegion = {
    params: Joi.object().keys({
        regionId: Joi.string().custom(objectId),
    }),
};

const updateRegion = {
    params: Joi.object().keys({
        regionId: Joi.string().custom(objectId),
    }),
    body: Joi.object().keys({
        name: Joi.string(),
    })
        .min(1)
};

const deleteRegion = {
    params: Joi.object().keys({
        regionId: Joi.string().custom(objectId),
    }),
};


const createSubRegion = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        regionId: Joi.string().required().custom(objectId),
    }),
};

const getSubRegions = {
    query: Joi.object().keys({
        filter: Joi.string(),
        sortBy: Joi.string(),
        limit: Joi.number().integer(),
        page: Joi.number().integer(),
    }),
};

const getSubRegion = {
    params: Joi.object().keys({
        subRegionId: Joi.string().custom(objectId),
    }),
};

const updateSubRegion = {
    params: Joi.object().keys({
        subRegionId: Joi.string().custom(objectId),
    }),
    body: Joi.object().keys({
        name: Joi.string(),
        regionId: Joi.string().custom(objectId),
    })
        .min(1)
};

const deleteSubRegion = {
    params: Joi.object().keys({
        subRegionId: Joi.string().custom(objectId),
    }),
};


const createCountry = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        nativeName:  Joi.string().required(),
        code:  Joi.string().required(),
        standardCode:  Joi.string().required(),
        subRegionId: Joi.string().required().custom(objectId),
    }),
};

const getCountries = {
    query: Joi.object().keys({
        filter: Joi.string(),
        sortBy: Joi.string(),
        limit: Joi.number().integer(),
        page: Joi.number().integer(),
    }),
};

const getCountry = {
    params: Joi.object().keys({
        countryId: Joi.string().custom(objectId),
    }),
};

const updateCountry = {
    params: Joi.object().keys({
        countryId: Joi.string().custom(objectId),
    }),
    body: Joi.object().keys({
        name: Joi.string(),
        nativeName:  Joi.string(),
        code:  Joi.string(),
        standardCode:  Joi.string(),
        subRegionId: Joi.string().custom(objectId),
    })
        .min(1)
};

const deleteCountry = {
    params: Joi.object().keys({
        countryId: Joi.string().custom(objectId),
    }),
};


const createState = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        code:  Joi.string().required(),
        countryId: Joi.string().required().custom(objectId),
    }),
};

const getStates = {
    query: Joi.object().keys({
        filter: Joi.string(),
        sortBy: Joi.string(),
        limit: Joi.number().integer(),
        page: Joi.number().integer(),
    }),
};

const getState = {
    params: Joi.object().keys({
        stateId: Joi.string().custom(objectId),
    }),
};

const updateState = {
    params: Joi.object().keys({
        stateId: Joi.string().custom(objectId),
    }),
    body: Joi.object().keys({
        name: Joi.string(),
        code:  Joi.string(),
        countryId: Joi.string().custom(objectId),
    })
        .min(1)
};

const deleteState = {
    params: Joi.object().keys({
        stateId: Joi.string().custom(objectId),
    }),
};


const createCity = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        stateId: Joi.string().required().custom(objectId),
    }),
};

const getCities = {
    query: Joi.object().keys({
        filter: Joi.string(),
        sortBy: Joi.string(),
        limit: Joi.number().integer(),
        page: Joi.number().integer(),
    }),
};

const getCity = {
    params: Joi.object().keys({
        cityId: Joi.string().custom(objectId),
    }),
};

const updateCity = {
    params: Joi.object().keys({
        cityId: Joi.string().custom(objectId),
    }),
    body: Joi.object().keys({
        name: Joi.string(),
        stateId: Joi.string().custom(objectId),
    })
        .min(1)
};

const deleteCity = {
    params: Joi.object().keys({
        cityId: Joi.string().custom(objectId),
    }),
};


const getAreas = {
    query: Joi.object().keys({
        filter: Joi.string(),
        sortBy: Joi.string(),
        limit: Joi.number().integer(),
        page: Joi.number().integer(),
    }),
};

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
