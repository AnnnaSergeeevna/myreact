import { profileAPI } from "../API/API";

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    posts: [
        { id: 1, message: <><h3>Looking for a job </h3><li> Residing in Málaga.</li> <li> Valid work permit. </li>  <li> Higher education.</li></> },
        {
            id: 2, message: <><h3>Skills:</h3> <ul></ul>
                <ul>HTML  JavaScript  Cascading Style Sheets (CSS) </ul>
                <ul>React.js, Redux.js, PostgreSQL, Express</ul>
                <ul>Bootstrap, Formik, AgGrid, React Router, Yup, Mapbox GL, Figma, Trello, Swagger</ul>
                <ul>Microsoft Visual Studio Code,  Git,  GitHub,  Node.js, CRA, Webpack</ul>
                <ul>Responsive Web Design; Web Accessibility; Cross-browser Compatibility; </ul>
                <ul>Shadcn, ChatGPT, Deploy: Vercel, GitHub Pages</ul>

            </>
        }],
    profile: null,
    status: ''
}
const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let stateCopy = { ...state }
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push({
                id: 3,
                message: action.values,
                // likesCount: 0
            })
            stateCopy.values = 'newPostText'
            return stateCopy
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        default:
            return state
    }
}
export const addPostActionCreator = (values) => ({ type: ADD_POST, values })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(data => {
        dispatch(setUserProfile(data))
    })
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(data => {
        dispatch(setStatus(data))
    })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(data => {
        if (data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}


export default profileReduser