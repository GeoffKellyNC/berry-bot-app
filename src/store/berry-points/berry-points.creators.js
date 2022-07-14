import * as types from './berry-points.types';
import axios from 'axios';



const pointEP = process.env.REACT_APP_BERRY_POINTS_EP;



export const getPointsData = () => async (dispatch) => {
    const res = await axios.get(pointEP)
    const pointsData = res.data
    await dispatch({type: types.GET_POINTS_DATA, payload: pointsData})
}