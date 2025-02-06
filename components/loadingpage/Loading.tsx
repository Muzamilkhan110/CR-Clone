// 'use client' directive ensures this component runs only on the client
'use client'

import React, { useState, useEffect } from 'react';
import  useRouter  from 'next/router';

const Loading: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false); // Track if the component is mounted

  useEffect(() => {
    setMounted(true); // Set mounted to true once the component is mounted

    const router = useRouter; // Move useRouter here to run on client side

    const handleRouteChange = () => setLoading(true);
    const handleRouteComplete = () => setLoading(false);
    const handleRouteError = () => setLoading(false);

    // Only run this on the client
    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteComplete);
    router.events.on("routeChangeError", handleRouteError);

    // Cleanup on unmount
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteComplete);
      router.events.off("routeChangeError", handleRouteError);
    };
  }, []); // Empty dependency array ensures this runs once when component mounts

  if (!mounted) return null; // Render nothing until client-side mount

  return loading ? (
    <div className="loading-screen">
      <div className="spinner">Loading...</div>
    </div>
  ) : null;
};

export default Loading;
