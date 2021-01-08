import { db } from '../database';

export const getAllListingRoute = {
    method: 'GET',
    path: '/api/listings',
    handler: async (req, h) => {
        const { results } = await db.query(
            'SELECT * FROM listings'
        );
        return results;
    }
}