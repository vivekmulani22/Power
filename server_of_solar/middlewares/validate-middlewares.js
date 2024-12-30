const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        const statusCode = 422;
        const message = "Fill the input properly";
        const extraDatails = err.errors[0].message;
        const error = {
            statusCode,
            message,
            extraDatails
        };
        console.log(error);
        next(error);    
    }
};

const loginValidate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        const statusCode = 422;
        const message = "Invalid login credentials";
        const extraDetails = err.errors[0].message;
        const error = {
            statusCode,
            message,
            extraDetails
        };
        console.log(error);
        next(error);
    }
};

module.exports = { validate, loginValidate };