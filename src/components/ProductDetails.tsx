import { ProductDetailsProps } from '../interfaces/interfaces';

const ProductDetails = ({ product }: ProductDetailsProps) => {
  if (!product) {
    return null;
  }

  return (
    <div className="flex flex-col z-40">
      <h3 className=" mb-2 mt-10 self-center font-bold text-2xl text-indigo-900">
        {product.title}
      </h3>
      <img
        src={product.images[0]}
        alt={product.title}
        className="my-4 w-44 h-44 object-contain self-center"
      />
      <p className="mt-2 self-center font-bold text-2xl text-indigo-600">
        {product.price}
      </p>
      <p>
        <strong>Category: </strong>
        {product.category}
      </p>
      <p>
        <strong>Brand: </strong>
        {product.brand ?? 'N/A'}
      </p>
      <p>
        <strong>Rating: </strong>
        {product.rating}
      </p>
      <p>
        <strong>Dimensions: </strong>
        Depth: {product?.dimensions?.depth ?? 'N/A'}, Height:{' '}
        {product?.dimensions?.height ?? 'N/A'}, Width:{' '}
        {product?.dimensions?.width ?? 'N/A'}
      </p>
      <p>
        <strong>Shipping Information: </strong>
        {product.shippingInformation}
      </p>
      <p>
        <strong>Warranty Information: </strong>
        {product.warrantyInformation}
      </p>
    </div>
  );
};

export default ProductDetails;
