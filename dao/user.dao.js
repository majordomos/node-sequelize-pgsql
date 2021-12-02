const User = require("../models/User");
const userDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateUser: updateUser
};

function findAll(){
    return User.findAll();
}
function findById(id) {
    return User.findByPk(id);
}

function deleteById(id) {
    return User.destroy({ where: { id: id } });
}

function create(user) {
    var newUser = new User(user);
    return newUser.save();
}

function updateUser(user, id) {
    var updateUser = {
        email: user.email,
        firstName: user.firstName,
        secondName: user.secondName,
        image: user.image,
        pdf: user.pdf,

    };
    return User.update(updateUser, { where: { id: id } });
}

module.exports = userDao;