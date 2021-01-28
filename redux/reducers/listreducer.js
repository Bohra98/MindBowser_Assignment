const initalState = {
    listData:[],
    listLoading:false,
    listerror:''
}

export default (state = initalState, { type, payload }) => {
    switch(type) {
        case 'FETCH_LIST_SUCCESS':
            return {
                ...state,
                listData:payload.data,
                listerror:'',
                listLoading:false
            };
        case  'FETCH_LIST_LOADING':
            return {
                listLoading:true,
                listData:[],
                listerror:''
            }
        case 'FETCH_LIST_ERROR':
            return {
                listLoading:false,
                listData:[],
                listerror:payload
            }    
        default:
            return state;       
    }
}