import { Link } from "react-router-dom";

const Item = ({ product }) => {

  return (
    <>
      <article className="d-flex justify-content-center">
          <div className="card w-50 my-5">
          <img src={product.image} alt="as" className="card-img-top" />
            <div className="card-body text-center">
                {product.product} 
                <br />
                <Link to={`/detalle/${product.id}`} className="btn btn-primary w-25 my-3">Ver Detalle Del Producto</Link>
                <br />
                <p>Stock: {product.stock}</p> 
            </div>
        </div>
      </article>
    </>
  )
}

export { Item }