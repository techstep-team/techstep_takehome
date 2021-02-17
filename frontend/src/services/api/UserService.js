import axios from 'axios';

function get(user) {
  return axios({
    method: 'get',
    url: 'api/users',
    params: {
      searchQuery: user,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then((response) => {
    return response.data;
    // setSearchResults(response.data);
  });
}

const UserService = {
  get,
};

export default UserService;
