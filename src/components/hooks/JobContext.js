import createDataContext from './createDataContext'

const jobTypes = {
    ADD_NEW_JOB: 'ADD_NEW_JOB',
    CREATE_A_NEW_JOB: 'CREATE_A_NEW_JOB',
    APPROVE_NEW_JOB: 'APPROVE_NEW_JOB',
    RESET_JOB_CREATE: 'RESET_JOB_CREATE',
    ADD_ERROR_ON_CREATE_JOB: 'ADD_ERROR_ON_CREATE_JOB',
    PUSH_NEW_JOB: 'PUSH_NEW_JOB',
    CLEAR_ALL_JOB_DATA: 'CLEAR_ALL_JOB_DATA'
}

const initialState = {
    errorMessage: '', name: '', floor: '', isWorkingProperly: false, jobs: []
}

const jobReducer = (state, action) => {
    switch (action.type) {
        case jobTypes.CREATE_A_NEW_JOB:
            return { ...state, name: action.payload.name, floor: action.payload.floor }
        case jobTypes.APPROVE_NEW_JOB:
            return { ...state, isWorkingProperly: action.payload }
        case jobTypes.PUSH_NEW_JOB:
            const newJob = { isWorkingProperly: state.isWorkingProperly, name: state.name, floor: state.floor }
            return { ...state, jobs: [...state.jobs, newJob] }
        case jobTypes.RESET_JOB_CREATE:
            const jobs = state.jobs;
            return { jobs }
        case jobTypes.ADD_ERROR_ON_CREATE_JOB:
            return { ...state, errorMessage: action.payload }
        case jobTypes.CLEAR_ALL_JOB_DATA:
            return { ...initialState };
        default:
            return state;
    }
};

const createNewJob = (dispatch) => {
    return (data) => {
        dispatch({
            type: jobTypes.CREATE_A_NEW_JOB,
            payload: data
        });
    }
}

const approveNewJob = (dispatch) => {
    return (data) => {
        dispatch({
            type: jobTypes.APPROVE_NEW_JOB,
            payload: data
        });
        dispatch({
            type: jobTypes.PUSH_NEW_JOB
        })
        dispatch({
            type: jobTypes.RESET_JOB_CREATE
        })
    }
}

const errorOnCreateJob = (dispatch) => {
    return (err) => {
        dispatch({
            type: jobTypes.ADD_ERROR_ON_CREATE_JOB,
            payload: err
        });
    }
}

const resetCreateJob = dispatch => () => {
    dispatch({ type: jobTypes.RESET_JOB_CREATE })
}

const clearJob = dispatch => () => {
    dispatch({ type: jobTypes.CLEAR_ALL_JOB_DATA })
}

export const { Provider, Context } = createDataContext(
    jobReducer,
    { approveNewJob, createNewJob, errorOnCreateJob, resetCreateJob, clearJob },
    initialState
);