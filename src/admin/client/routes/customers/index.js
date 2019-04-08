import React from 'react';
import CustomersList from 'modules/customers/list';

export default () => (
	<div className="row row--no-gutter col-full-height">
		<div className="col-xs-12 col-sm-8 col-md-9 col--no-gutter scroll col-full-height">
			<CustomersList />
		</div>
	</div>
);
