import jsonPlaceholder from '../apis/jsonPlacehold'

export const fetchPosts = () => {
    return function (dispatch, getState) {
        const promise = jsonPlaceholder.get('/posts')

        return {
            type: 'FETCH_POSTS',
            payload: promise
        }
    }
}
