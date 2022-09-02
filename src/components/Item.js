import { Link } from "react-router-dom";

const Item = ({ product }) => {

  return (
    <>
      <article className="d-flex justify-content-center col-sm-6 col-lg-4">
          <div className="card my-5 shadow-lg border-0 mx-5">
          <img src={product.image} alt="as" className="card-img-top" />
            <div className="card-body text-center">
                {product.product} 
                <br />
                <Link to={`/detalle/${product.id}`} className="btn btn-primary my-3">Ver Detalle Del Producto</Link>
                <br />
                <p>Stock: {product.stock}</p> 
            </div>
        </div>
      </article>
    </>
  )
}

export { Item }