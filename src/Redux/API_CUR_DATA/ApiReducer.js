import { FETCH_CUR_API_FAILURE, FETCH_CUR_API_REQUEST, FETCH_CUR_API_SUCCESS } from "./ApiActionTy";


const initialState={
    data:[],
    loading:false,
    error:'error plz check the Ap'
}

const curApiRed=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_CUR_API_REQUEST:return {
            ...state,loading:true,error:''
        }
        case FETCH_CUR_API_SUCCESS:return{
            ...state,loading:false,data:action.payload,error:''
        }
        case FETCH_CUR_API_FAILURE:return{
            ...state,loading:false , error:action.payload,data:[]
        }
        default : return state
    }
}

export default curApiRed