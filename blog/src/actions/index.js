import jsonPlaceholder from '../apis/jsonPlacehold'

export const fetchPosts = async () => {
    // Bad approach
    const response = await jsonPlaceholder.get('/posts')

    return {
        type: 'FETCH_POSTS',
        payload: response
    }
}
