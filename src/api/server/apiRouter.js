import express from 'express';
import ProductsRoute from './routes/products';
import ProductCategoriesRoute from './routes/productCategories';
import SitemapRoute from './routes/sitemap';
import ThemeRoute from './routes/theme';
import CustomersRoute from './routes/customers';
import OrdersRoute from './routes/orders';
import OrderStatusesRoute from './routes/orderStatuses';
import ShippingMethodsRoute from './routes/shippingMethods';
import PaymentMethodsRoute from './routes/paymentMethods';
import PaymentGatewaysRoute from './routes/paymentGateways';
import SettingsRoute from './routes/settings';
import PagesRoute from './routes/pages';
import NotificationsRoute from './routes/notifications';
import RedirectsRoute from './routes/redirects';
import FilesRoute from './routes/files';

const apiRouter = express.Router();

new ProductsRoute(apiRouter);
new ProductCategoriesRoute(apiRouter);
new SitemapRoute(apiRouter);
new ThemeRoute(apiRouter);
new CustomersRoute(apiRouter);
new OrdersRoute(apiRouter);
new OrderStatusesRoute(apiRouter);
new ShippingMethodsRoute(apiRouter);
new PaymentMethodsRoute(apiRouter);
new PaymentGatewaysRoute(apiRouter);
new SettingsRoute(apiRouter);
new PagesRoute(apiRouter);
new NotificationsRoute(apiRouter);
new RedirectsRoute(apiRouter);
new FilesRoute(apiRouter);

export default apiRouter;
