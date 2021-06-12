const express = require('express');
const validate = require('../middlewares/validate');
const {areaValidation} = require('../validations');
const {areaController} = require('../controllers');

const router = express.Router();

router.route('/region/')
    .post(validate(areaValidation.createRegion), areaController.createRegion)
    .get(validate(areaValidation.getRegions), areaController.getRegions);

router.route('/region/:regionId')
    .get(validate(areaValidation.getRegion), areaController.getRegion)
    .put(validate(areaValidation.updateRegion), areaController.updateRegion)
    .delete(validate(areaValidation.deleteRegion), areaController.deleteRegion);


router.route('/sub-region/')
    .post(validate(areaValidation.createSubRegion), areaController.createSubRegion)
    .get(validate(areaValidation.getSubRegions), areaController.getSubRegions);

router.route('/sub-region/:subRegionId')
    .get(validate(areaValidation.getSubRegion), areaController.getSubRegion)
    .put(validate(areaValidation.updateSubRegion), areaController.updateSubRegion)
    .delete(validate(areaValidation.deleteSubRegion), areaController.deleteSubRegion);


router.route('/country/')
    .post(validate(areaValidation.createCountry), areaController.createCountry)
    .get(validate(areaValidation.getCountries), areaController.getCountries);

router.route('/country/:countryId')
    .get(validate(areaValidation.getCountry), areaController.getCountry)
    .put(validate(areaValidation.updateCountry), areaController.updateCountry)
    .delete(validate(areaValidation.deleteCountry), areaController.deleteCountry);


router.route('/state/')
    .post(validate(areaValidation.createState), areaController.createState)
    .get(validate(areaValidation.getStates), areaController.getStates);

router.route('/state/:stateId')
    .get(validate(areaValidation.getState), areaController.getState)
    .put(validate(areaValidation.updateState), areaController.updateState)
    .delete(validate(areaValidation.deleteState), areaController.deleteState);


router.route('/city/')
    .post(validate(areaValidation.createCity), areaController.createCity)
    .get(validate(areaValidation.getCities), areaController.getCities);

router.route('/city/:cityId')
    .get(validate(areaValidation.getCity), areaController.getCity)
    .put(validate(areaValidation.updateCity), areaController.updateCity)
    .delete(validate(areaValidation.deleteCity), areaController.deleteCity);

router.route('/')
    .get(validate(areaValidation.getAreas), areaController.getAreas)


module.exports = router;
