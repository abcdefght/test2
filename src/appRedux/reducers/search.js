const search = (state = {
    isLoading: false,
    productList: []
}, action) => {
    switch (action.type) {
        case 'SEARCH_SET_PRODUCT_LIST': {
            const {productList} = action
            return {
                ...state,
                productList
            }
        }
        case 'SEARCH_SET_IS_LOADING': {
            const {isLoading} = action;

            return {
                ...state,
                isLoading,
            };
        }
        default:
            return state
    }
};


export default search;
