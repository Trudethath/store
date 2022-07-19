import { Link, useLocation } from "react-router-dom"
import { BsCheckCircle, BsXCircle } from "react-icons/bs"
import { IoPrint } from "react-icons/io5"

function Invoice() {
  const location = useLocation()
  const { total } = location.state.invoiceData.price_summary
  const { isOk } = location.state
  console.log("isok", isOk)

  return (
    <div className='invoice-container'>
      {isOk ? (
        <>
          <div className='green'>
            <i>
              <BsCheckCircle />
            </i>
            <h2>Thank you for your payment! :)</h2>
          </div>

          <h3>A receipt for this transaction has been sent via email</h3>
          <span className='link'>
            <IoPrint />
            Click here to Print a receipt with additional details
          </span>

          <h3>Total Payment Amount</h3>
          <h1>${total}</h1>
        </>
      ) : (
        <>
          <div className='red'>
            <i>
              <BsXCircle />
            </i>
            <h2>Something went wrong with your payment! :(</h2>
          </div>
        </>
      )}

      <h4>Payment Method</h4>
      <span>XXXXXXXXX</span>
      <Link to='/'>
        <span className='return link'>Return to Home</span>
      </Link>
    </div>
  )
}

export default Invoice
