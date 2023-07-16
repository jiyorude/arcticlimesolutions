import React, { useEffect } from 'react'
import "./css/404.min.css";
import { useState } from "react";

const NotFound = () => {
  const [countdown, setCountdown] = useState(4);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
        window.location.href = "/"
    }
  }, [countdown]);
 
  return (
    <main className="flexcontainer">
      <div className="error">
        <p className='page'>404 - PAGE NOT FOUND</p>
        <p className='direct'>You will be redirected to the homepage in {countdown} seconds.</p>
        </div>
    </main>
  )
}

export default NotFound