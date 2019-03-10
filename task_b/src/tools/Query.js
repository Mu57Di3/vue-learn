import axios from "axios";
import uid from "uid";

export default axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
        Authorization: `${uid(4)}-${uid(4)}-${uid(4)}`,
    },
});
