// withLoader.js
import React, { useState, useEffect } from 'react';

const withLoader = (WrappedComponent, data) => {
  return function withLoaderComponents(props) {
    const [isLoading, setIsLoading] = useState(true)
    const [items, setItem] = useState([])

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false)
        setItem(data)
      },2000)
    }, [])
    if (isLoading)
    {
      return <div>Loading...</div>
    }
    return <WrappedComponent items={items}/>
  }

};

export default withLoader;
