const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.get('Authorization');
  if(!authHeader){
    const error = new Error('Not authenticated');
    error.statusCode = 401;
    throw error;
  }
  const token = req.get('Authorization'); //this will need to jive with front-end
  let decodedToken;
  try{
    decodedToken = jwt.verify(token, 'supersecretsecret');
  } catch (err) {
    err.statusCode = 500;
    throw err;
  }
  if (!decodedToken) {
    const error = new Error('Not Authenticated.');
    error.statusCode = 401;
    throw error;
  }
  req.userId = decodedToken.userId;
  next();
;}