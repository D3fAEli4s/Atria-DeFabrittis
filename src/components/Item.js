import { Link } from "react-router-dom";

const Item = ({ product }) => {

  return (
    <>
      <article className="d-flex justify-content-center col-md-6 col-lg-4">
          <div className="card my-5 shadow-lg border-0 mx-5">
          <img src={product.image} alt="as" className="card-img-top" />
            <div className="card-body text-center">
                <p>{product.product}</p> 
                <Link to={`/detalle/${product.id}`} className="btnColor px-4">Ver Detalle Del Producto</Link>
                <p className="mt-3">Stock: {product.stock}</p> 
            </div>
        </div>
      </article>
    </>
  )
}

export { Item }