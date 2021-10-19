const router = require('express').Router()
const house = require('../controller/houseController')
router.get('/getHouse',house.getHouses)
router.post('/addHouse',house.addHouse)
router.delete('/deleteHouse/:id',house.deleteHouse)
router.put('/updateHouse/:id',house.updateHouse)
router.get('/getHousesById/:id',house.getHousesById)

module.exports = router;
