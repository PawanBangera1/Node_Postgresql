import Joi from "joi";
import pool from "../config/db.js";

const userSchema = Joi.object({
    name:Joi.string().min(3).max(100).required(),
    email:Joi.string().email().required()
})

const validateUserInput = (req, res, next) => {
    const {error} = userSchema.validate(req.body);
    if(error) {
        return res.status(400).json({
            status: 400,
            message: error.details[0].message,
        });
    }
    next();
};

export default validateUserInput;