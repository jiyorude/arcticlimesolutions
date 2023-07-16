import React, { useEffect } from 'react'
import "./css/404.min.css";
import { useState } from "react";

const NotFound = () => {
  const [countdown, setCountdown] = useState(999);

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
    <main className="flex">
      <div className="error">
        <h1 className='page'>404 - PAGE NOT FOUND</h1>
        <p className='direct'>You will be redirected to the homepage in {countdown} seconds.</p>
        </div>
    </main>
  )
}

export default NotFound