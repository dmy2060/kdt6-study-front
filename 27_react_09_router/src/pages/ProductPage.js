import ProductItem from "../components/ProductIem";

const ProductPage = (props) => {
  console.log(props);
  const { products } = props;
  console.log(products);

  return (
    <main className="ProductPage">
      <h1>여기는 상품 목록 페이지!</h1>
      <div>
        {products.map((product) => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </div>
    </main>
  );
};

export default ProductPage;
