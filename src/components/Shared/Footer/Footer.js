
const Footer = () => {
  return (
    <footer className="py-5 bg-dark">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center text-white">
          <div className="col-md-12">
            <h4>To Get All Our Offers</h4>
            <p>
              Enter Your Email  To get All Our  News And recent Updates
            </p>
            <div>
              <input
                className="mb-2 p-1"
                type="email"
                placeholder="Enter your email"
              />
              <button className="ms-1 fw-bold p-1 bg-danger text-white border-0 px-3">
                Subscribe
              </button>
            </div>
            <div>
              <p className='text-center'>© 2022 <span className='text-danger'>Jubair Zaman</span> All right reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
