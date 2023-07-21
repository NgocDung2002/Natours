module.exports = (funtion) => {
  return (req, res, next) => {
    funtion(req, res, next).catch(next);
  };
};
