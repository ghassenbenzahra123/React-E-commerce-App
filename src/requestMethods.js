import axios from "axios";

const BASE_URL = "http://localhost:4545/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWYxZWE3NjcwYTMxZjc0MDM2OWJhOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzA2MDk4MywiZXhwIjoxNjQzMzIwMTgzfQ.SNEIrkVoTDw-qO912_bbL3oa4fFqKwxSVHOSwLa19AQ"


export const publicRequest = axios.create({
    baseURL: BASE_URL,

});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
});