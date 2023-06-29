import React from "react";
import "./PlansScreen.css";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
function PlansScreen() {
  const navigate = useNavigate();
  return (
    <div className="planScreen_plan">
      <Helmet>
        <title>NETFLIX | Plans </title>
      </Helmet>
      <div className="planScreen_info">
        <div className="planScreen_info_l">
          <h5>luxury</h5>
          <h6>4K +Hd</h6>
          <button onClick={() => navigate("/")}>Subscribe</button>
        </div>
        <div className="planScreen_info_p">
          <h5>Premium</h5>
          <h6> Ultra Hd</h6>
          <button onClick={() => navigate("/")}>Subscribe</button>
        </div>
        <div className="planScreen_info_b">
          <h5>Basic</h5>
          <h6>Hd</h6>
          <button onClick={() => navigate("/")}>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default PlansScreen;
