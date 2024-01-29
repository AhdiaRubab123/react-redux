import React from "react";

const Home = () => {
  return (
    <div>
      <div>
        <img
          style={{
            width: "50px",
            float: "right",
            margin: "-30px 30px 0 0",
          }}
          src=" https://e7.pngegg.com/pngimages/317/428/png-clipart-shopping-cart-computer-icons-add-to-cart-button-angle-text-thumbnail.png"
          alt=""
        />
      </div>
      <div className="items" style={{ marginLeft: "40px", display: "flex" }}>
        <div>
          <img
            style={{ width: "200px" }}
            src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/uk/advisor/wp-content/uploads/2020/11/phones-switch-apps.jpg"
            alt=""
          />
        </div>
        <div style={{ margin: "50px 0 0 20px" }}>
          <span>RealMe</span>
          <span>Rs: 40,000/-</span>
        </div>
        <div>
          <button
            style={{
              margin: "50px 0 0 10px",
              color: "white",
              backgroundColor: "red",
              border: "none",
              padding: "8px",
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
