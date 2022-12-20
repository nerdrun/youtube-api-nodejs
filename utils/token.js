
const extractToken = (authorization) => {
  const token = authorization;
  if (token.startsWith('Bearer ')) {
    return token.replace('Bearer ', '');
  } else {
    throw new Error('Invalid Token');
  }
};

module.exports = { extractToken };