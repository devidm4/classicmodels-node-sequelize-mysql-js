const officesModel = require('../models/officesModel');

const getAllOffices = async () => {
    const offices = await officesModel.findAll();
    return offices;
};

const getOfficeByOfficeCode = async (officecode) => {
    const office = await officesModel.findByPk(officecode);
    return office;
};

const createOffice = async (office) => {
    const newOffice = await officesModel.create(office);
    return newOffice;
};

const updateOffice = async (officecode, office) => {
    const updateOffice = await officesModel.update(office, {
        where: {officecode: officecode}
    });
    return updateOffice;
};

const deleteOffice = async (officecode) => {
        await officesModel.destroy({
        where: {officecode: officecode}
    });
};

module.exports = {
    getAllOffices,
    getOfficeByOfficeCode,
    createOffice,
    updateOffice,
    deleteOffice
}