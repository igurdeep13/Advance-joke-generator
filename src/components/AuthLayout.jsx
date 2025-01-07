import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Protected({ Children, authentication = true }) {
  const navigate = useState();
  const [loader, setLoader] = useState(true);
  return <div>AuthLayout</div>;
}

export default AuthLayout;
