import { getAllListingRoute } from './getAllListings';
import { getListingRoute } from './getListing';
import { addViewToListingRoute } from './addViewToListing';
import { getUserListingsRoute } from './getUserListings';
import { createNewListingRoute } from './createNewListing';
import { updateListingRoute } from './updateListing';
import { deleteLisitngRoute } from './deleteListing';


export default [
    addViewToListingRoute,
    getAllListingRoute,
    getListingRoute,
    getUserListingsRoute,
    createNewListingRoute,
    updateListingRoute,
    deleteLisitngRoute,
];