const officesRepository = require('../repositoreis/officesRepository');

const getAllOffices = async (req, res) => {
    const offices = await officesRepository.getAllOffices();
    res.json(offices);
}

const getOfficesByOfficeCode = async (req, res) => {
    const office = await officesRepository.getOfficeByOfficeCode(req.params.officecode);
    res.json(office);
}

const createOffice = async (req, res) => {
    const office = await officesRepository.createOffice(req.body);
    res.json(office);
}

const updateOffice = async (req, res) => {
    const office = await officesRepository.updateOffice(req.params.officecode, req.body);
    res.json({success: true});
} 

const deleteOffice = async (req, res) => {
    await officesRepository.deleteOffice(req.params.officecode);
    res.json({success: true});
}

module.exports = {
    getAllOffices,
    getOfficesByOfficeCode,
    createOffice,
    updateOffice,
    deleteOffice
}