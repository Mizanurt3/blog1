import React from 'react'
import { Link } from 'react-router-dom'

export function Blogs({blogs}) {

   
    
    const blogs1=[
        {
            "id":1,
            'title':'Blog 1',
            'desc':"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            'coverImg':'vite.svg',

            'authorName' : 'Mizanur Tech',
            'authorImg':'src/assets/IMG_20230716_165408.jpg',
            'authorDesc':'I am developer'

        },{
            "id":2,
            'title':'Blog 2',
            'desc':"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            'coverImg':'vite.svg',

            'authorName' : 'Mizanur Tech',
            'authorImg':'src/assets/IMG_20230716_165408.jpg',
            'authorDesc':'I am developer'

        },{
            "id":3,
            'title':'Blog 3',
            'desc':"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            'coverImg':'vite.svg',

            'authorName' : 'Mizanur Tech',
            'authorImg':'src/assets/IMG_20230716_165408.jpg',
            'authorDesc':'I am developer'

        },
        
    ]


    

    return (
        <>
        <div className='w-full bg-[#f9f9f9] py-[50px]'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2      sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black'>

                    {blogs.data.map((blog)=>

                        <Link to={`/blog/${blog.id}`}>
                        <div  className='bg-white rounded-xl overflow-hidden drop-shadow-md ss:z-0 sm:z'>
                        <img className='h-56 w-full object-cover' src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`} />
                        <div className='p-8'>
                            <h3 className='font-bold text-2xl my-1'>{blog.attributes.blogTitle}</h3>
                            <p className='text-gray-600 text-xl'>{blog.attributes.blogDesc}</p>
                        </div>
                        </div>
                        </Link>
                    )}

                    

                    

                </div>
            </div>

        </div>


        </>
    )
}
