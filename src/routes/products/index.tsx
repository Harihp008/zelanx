import Products, { loader as productsLoader } from "./Products";
import ProductDetail, { loader as productDetailLoader } from "./ProductDetail";

export const productRoutes = [
  {
    path: "products",
    element: <Products />,
    loader: productsLoader,
  },
  {
    path: "products/:id",
    element: <ProductDetail />,
    loader: productDetailLoader,
  },
];