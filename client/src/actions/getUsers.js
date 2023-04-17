import axios from "axios";


axios.defaults.baseURL = "https://oyster-app-hahsr.ondigitalocean.app/";
// axios.defaults.baseURL = "http://localhost:5000";


export const getUsers = () => {
    axios.get("api/users/fetchusers")
        // .then(response => console.log(response))
        .then((response) => {
            const allRegistered = response.data
        })
};


