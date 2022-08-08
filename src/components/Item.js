const Item = ({ product }) => {

  return (
    <>
    <div className="d-flex justify-content-center">
        <div className="card w-50 my-5">
            <img src={product.image} className="card-img-top" />
            <div className="card-body text-center">
                {product.product} 
                <br />
                <a href="#" class="btn btn-primary w-25 my-3">Ver Detalle Del Producto</a>
                <br />
                <p>Stock: {product.stock}</p> 
            </div>
        </div>
    </div>
    </>
  )
}

export { Item }