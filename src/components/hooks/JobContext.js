import createDataContext from './createDataContext'

const jobTypes = {
    ADD_NEW_JOB: 'ADD_NEW_JOB',
    CREATE_A_NEW_JOB: 'CREATE_A_NEW_JOB',
    APPROVE_NEW_JOB: 'APPROVE_NEW_JOB',
    // ADD_ERROR: 'ADD_ERROR',
    // LOGIN_OR_SIGNIN_START: "LOGIN_OR_SIGNIN_START",
    // LOGIN_OR_SIGNIN_SUCCES: "LOGIN_OR_SIGNIN_SUCCES",
    CLEAR_ERR: 'CLEAR_ERR'
}

const jobReducer = (state, action) => {
    switch (action.type) {
        case jobTypes.ADD_NEW_JOB:
            return { ...state, errorMessage: null, loading: 'false' }
        case jobTypes.CREATE_A_NEW_JOB:
            return {...state, newJob: action.payload}
        //     case authTypes.LOGIN_OR_SIGNIN_SUCCES:
        //         return { errorMessage: '', token: action.payload, loading: 'false' }
        //     case authTypes.CLEAR_ERR:
        //         return { ...state, errorMessage: '', loading: 'false'  }
        default:
            return state;
    }
};

const createNewJob = (dispatch) => {
    return ({ job }) => {
        dispatch({
            type: jobTypes.CREATE_A_NEW_JOB,
            payload: job
        });
        console.log({job})
    }
}

const addNewJob = (dispatch) => {
    return ({ job }) => {
        dispatch({
            type: jobTypes.ADD_NEW_JOB,
            payload: {job}
        });
        const data = { job }
        console.log(data)
    }
}

// return ({ email, password }) => {
//     dispatch({ type: authTypes.LOGIN_OR_SIGNIN_START });
//     const data = { email, password }
//     _storeData("user", JSON.stringify(data)).then(() => {
//         // setUser(data);
//     })
//     auth().signInWithEmailAndPassword(email, password).then((response) => {
//         // console.log(response.uid)
//         dispatch({ type: authTypes.LOGIN_OR_SIGNIN_SUCCES, payload: response.user });
//         // callback();
//     }).catch(err => {
//         auth().createUserWithEmailAndPassword(email, password)
//             .then((response) => {
//                 dispatch({ type: authTypes.LOGIN_OR_SIGNIN_SUCCES, payload: response.user });
//                 console.log('User account created & signed in!');
//             }).catch(error => {
//                 // console.error(error);
//                 dispatch({ type: authTypes.ADD_ERROR, payload: error.nativeErrorMessage });
//             })
//     })
// }
// }

const clearErrorMsg = dispatch => () => {
    console.log(dispatch);
    // dispatch({ type: jobTypes.CLEAR_ERR })
}

export const { Provider, Context } = createDataContext(
    jobReducer,
    { addNewJob, clearErrorMsg, createNewJob },
    { jobs: [], errorMessage: '', newJob: {} }
);