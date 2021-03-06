import axios from 'axios'
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SET_DATA = "SET_DATA"
export const GET_AXIOS_DATA = "GET_AXIOS_DATA"
export const POST_AXIOS_DATA = "POST_AXIOS_DATA"

export const login = (data) => {
    return {
        type: LOGIN
    }
  }

  export function logout(){
    return{
        type:LOGOUT
    }
}

export function setData(data){
    return{
        type:SET_DATA,
        data
    }
}

  export const getAxiosData = (data) => {
    return {
        type: GET_AXIOS_DATA,
        data
    }
  }

  export const getAxiosAction = () => {
    console.log("액션 실행")
  return (dispatch) => {
      return axios.get(`http://localhost:3000/articles`)
          .then(response => {
              console.log("엑시오스 실행", response.data)
              dispatch(getAxiosData(response.data))
          })
          .catch(error => {
              throw(error);
          });
  }
}

  export const postAxiosData = (data) => {
      return{
          type: POST_AXIOS_DATA,
          data
      }
  }

  export const postAxiosAction = () => {
    console.log("액션 실행")
  return (dispatch) => {
      return axios.post(`http://localhost:3000/login`,{mem_id:"abcde", mem_pw:"1234"})
          .then(response => {
              console.log("엑시오스 실행", response.data)
              dispatch(postAxiosData(response.data))
          })
          .catch(error => {
              throw(error);
          });
  }
}


  


