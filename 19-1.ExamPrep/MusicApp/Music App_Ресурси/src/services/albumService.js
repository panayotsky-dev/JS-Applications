import * as request from './requester.js'

///data/albums?sortBy=_createdOn%20desc&distinct=name
const baseUrl = 'http://localhost:3030/data/albums';

export const getAll = () =>request.get(`${baseUrl}?sortBy=_createdOn%20desc&distinct=name`);

export const getOne = (albumId) => request.get(`${baseUrl}/${albumId}`);

export const create = (albumData) => request.post(baseUrl,albumData);

export const edit = (albumId,albumData) => request.put(`${baseUrl}/${albumId}`, albumData)

export const remove = (albumId) => request.del(`${baseUrl}/${albumId}`)

export const search = (searchText) => {
    //?where=name%20LIKE%20%22${query}%22
    const query = encodeURIComponent(`name Like "${searchText}"`);
    return request.get(`${baseUrl}?where=${query}`)
}