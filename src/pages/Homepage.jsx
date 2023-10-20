import React from 'react'
import { Navbar , Blogs } from '../components'
export function Homepage({blogs}) {
    
    console.log("hi")

    return (
        <>
            <Navbar/>
            <Blogs blogs={blogs?blogs:""}/>
      
        </>
    )
}
