import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import productCategories from 'modules/productCategories/reducer';
import products from 'modules/products/reducer';
import customers from 'modules/customers/reducer';
import orders from 'modules/orders/reducer';
import orderStatuses from 'modules/orderStatuses/reducer';
import pages from 'modules/pages/reducer';
import settings from 'modules/settings/reducer';

export default combineReducers({
	form: formReducer,
	productCategories,
	products,
	settings,
	customers,
	orders,
	orderStatuses,
	pages
});
