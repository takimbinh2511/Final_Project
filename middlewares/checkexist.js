const checkExist = (Model) => async(req, res, next) => {
    const {id} = req.params;
    const user = await Model.findByPk(id);
    if(user){
        next();
    }
    else {
        res.status(404).send({
            message :"Id not exist",
        });
    }
};


module.exports = {
    checkExist,
};