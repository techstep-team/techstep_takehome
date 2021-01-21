
export const getData = () => {
    const url = `http://localhost:5000/`
    const requestOptions = {
      method: "GET",
    };
    return fetch(url, requestOptions)
    .then((res) => {
      if (res.status === 200){
        return res.json();
      }
      else{
        throw res;
      }
    }).catch((error) => {
      if (error.status === 404){
        return "404"
      }
      return "500"
    })
  };