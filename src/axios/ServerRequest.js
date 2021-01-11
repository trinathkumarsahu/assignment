import API from "./API";
import Auth from "../modules/Auth";

export const getAllMovieList = async () => {
    return await API({
        method: "GET",
        url: `?i=tt3896198&apikey=f51c6ce3`,
    }).then((res) => {
        return res;
    });
};
