import React from 'react'
import { Navbar , BlogContent} from '../components'
export function BlogContentPage({blogs}) {
    
    console.log(blogs)

    return (
        <>
        
                  <Navbar />
                <BlogContent blogs={blogs}/>   
        </>
    )
}




