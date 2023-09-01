import '../styles/globals.css'
import React from 'react';
const { useEffect } = React;
import type { AppProps } from 'next/app'


function MyApp({ Component, pageProps }: AppProps) {
    const setRem = async ()=>{
        await require('lib-flexible')
    }
    useEffect(()=>{
        setRem()
        window.addEventListener('resize',setRem)
    }, [])
    
  return <Component {...pageProps} />
}

export default MyApp
