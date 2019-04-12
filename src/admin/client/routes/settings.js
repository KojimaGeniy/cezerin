import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import messages from 'lib/text';

import { List, ListItem } from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';

import General from 'modules/settings/general';
import GeneralLogo from 'modules/settings/generalLogo';
import Theme from 'modules/settings/theme';
import Shipping from 'modules/settings/shipping';
import ShippingEdit from 'modules/settings/shippingEdit';
import Payments from 'modules/settings/payments';
import PaymentsEdit from 'modules/settings/paymentsEdit';
import Email from 'modules/settings/email';
import EmailTemplate from 'modules/settings/emailTemplates';
import Checkout from 'modules/settings/checkout';
import CheckoutFields from 'modules/settings/checkoutFields';

const styles = {
	link: {
		color: 'inherit',
		textDecoration: 'none',
		fontWeight: 'inherit',
		display: 'block'
	},
	linkActive: {
		backgroundColor: 'rgba(0,0,0,0.1)'
	}
};

const SettingsMenu = () => (
	<List>
		<NavLink
			style={styles.link}
			activeStyle={styles.linkActive}
			to="/admin/settings"
			exact={true}
		>
			<ListItem
				primaryText={messages.settings_general}
				leftIcon={<FontIcon className="material-icons">settings</FontIcon>}
			/>
		</NavLink>
		<NavLink
			style={styles.link}
			activeStyle={styles.linkActive}
			to="/admin/settings/shipping"
		>
			<ListItem
				primaryText={messages.settings_shipping}
				leftIcon={
					<FontIcon className="material-icons">local_shipping</FontIcon>
				}
			/>
		</NavLink>
		<NavLink
			style={styles.link}
			activeStyle={styles.linkActive}
			to="/admin/settings/payments"
		>
			<ListItem
				primaryText={messages.settings_payments}
				leftIcon={<FontIcon className="material-icons">payment</FontIcon>}
			/>
		</NavLink>
		<NavLink
			style={styles.link}
			activeStyle={styles.linkActive}
			to="/admin/settings/theme"
		>
			<ListItem
				primaryText={messages.settings_theme}
				leftIcon={<FontIcon className="material-icons">palette</FontIcon>}
			/>
		</NavLink>
		<NavLink
			style={styles.link}
			activeStyle={styles.linkActive}
			to="/admin/settings/checkout"
		>
			<ListItem
				primaryText={messages.settings_checkout}
				leftIcon={<FontIcon className="material-icons">shopping_cart</FontIcon>}
			/>
		</NavLink>
		<NavLink
			style={styles.link}
			activeStyle={styles.linkActive}
			to="/admin/settings/email"
		>
			<ListItem
				primaryText={messages.settings_emails}
				leftIcon={<FontIcon className="material-icons">email</FontIcon>}
			/>
		</NavLink>
	</List>
);

const Settings = ({ match }) => {
	return (
		<div className="row row--no-gutter col-full-height">
			<div className="col-xs-12 col-sm-4 col-md-3 col--no-gutter scroll col-full-height">
				<SettingsMenu />
			</div>
			<div className="col-xs-12 col-sm-8 col-md-9 col--no-gutter scroll col-full-height">
				<Switch>
					<Route path="/admin/settings" exact component={General} />
					<Route path="/admin/settings/general/logo" component={GeneralLogo} />
					<Route path="/admin/settings/theme" component={Theme} />
					<Route path="/admin/settings/shipping" exact component={Shipping} />
					<Route
						path="/admin/settings/shipping/add"
						exact
						component={ShippingEdit}
					/>
					<Route
						path="/admin/settings/shipping/:methodId"
						component={ShippingEdit}
					/>
					<Route path="/admin/settings/payments" exact component={Payments} />
					<Route
						path="/admin/settings/payments/add"
						exact
						component={PaymentsEdit}
					/>
					<Route
						path="/admin/settings/payments/:methodId"
						component={PaymentsEdit}
					/>
					<Route path="/admin/settings/email" exact component={Email} />
					<Route
						path="/admin/settings/email/templates/:templateName"
						component={EmailTemplate}
					/>
					<Route path="/admin/settings/checkout" exact component={Checkout} />
					<Route
						path="/admin/settings/checkout/fields/:fieldName"
						component={CheckoutFields}
					/>
				</Switch>
			</div>
		</div>
	);
};

export default Settings;
