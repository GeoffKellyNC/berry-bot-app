import * as types from './berry-points.types';
import axios from 'axios';



const pointEP = 'https://62c5c1fc134fa108c25b8929.mockapi.io/userPoints'



export const getPointsData = () => async (dispatch) => {
    const res = await axios.get(pointEP)
    const pointsData = res.data
    await dispatch({type: types.GET_POINTS_DATA, payload: pointsData})
}