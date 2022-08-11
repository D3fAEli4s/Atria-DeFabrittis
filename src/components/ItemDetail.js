const ItemDetail = ({listProduct}) => {

  console.log(listProduct)

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="card w-25 my-5">
          <img src={listProduct.image} alt="" className="card-img-top"/>
          <div className="card-body text-center">
            <h5>{listProduct.product}</h5>
            <p>{listProduct.description}</p>
            <p>${listProduct.price}</p>
            <p>Stock: {listProduct.stock}</p>
            <a href="#" className="btn btn-primary w-25 my-2">Comprar</a>
          </div>
        </div>
      </div>
    </>
  )
}

export  { ItemDetail }