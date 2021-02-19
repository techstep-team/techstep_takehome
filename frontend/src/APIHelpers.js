const axios = require('axios');

export const searchUserByName = async term => {
  const results = await axios.get('/api/routes/users', {
    params: { term }
  });

  return results.data;
}