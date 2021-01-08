import { db } from '../database';

export const deleteLisitngRoute = {
    method: 'DELETE',
    path: '/api/listings/{id}',
    handler: async (req, h) => {
        const { id } = req.params;
        await db.query(
            'DELETE FROM listings WHERE id=?',
            [id],

        );

        return { message: 'Success!' };
    }
}