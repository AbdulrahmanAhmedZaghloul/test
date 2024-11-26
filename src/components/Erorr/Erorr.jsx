import React from 'react'
import { Helmet } from 'react-helmet-async'
import imageErorr from '../../assets/image/8.png'
import iconimage from '../../assets/image/black.png'

export default function Erorr() {
    return (<React.Fragment>
        <Helmet>
            <link rel="icon" href={iconimage} />

            <title>Erorr</title>
        </Helmet>
        <img className='w-1/3 mx-auto py-16 my-36 shadow-inner rounded-full' src={imageErorr} alt="pageErorr" />
    </React.Fragment>
    )
}
