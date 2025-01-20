import React from "react";

let aboutinfo =[
    {
        'title': 'about us',
        'desc' : "Established in the year 2015,Marikripa furniture private limited has been consistently creating and delivering creative space saving furniture designs in Gujarat. We have been constantly working on the principle of “customer focus” since our establishment which has become the foundation stone of our journey.We always make sure that our products are designed as per specific customer requirements making us achieve super customer delight. With the huge support received. We have moved one step further and launched – MK WALL ART a subunit of  Marikripa Furniture Private Limited in 2018.  MK WALL ART manufactures wide range of 3D WALL PANELS and WALL ART that gives classy look to your walls.We manufacture decorative wall art products and deliver online all over India.We manufacture them in various designs giving you a wide variety of options to choose from for your homes, office or hotels. Our 3D WALL PANELS and WALL ART are perfect for enhancing the ambience, encouraging dwell time and footfall and consequently adding value to the interior and its performance. "
    }
]

export default function About()
{
    return(
        <>
            {
                aboutinfo.map((val)=>{
                    return(
                        
                        <>
                            <div className="container text-center about-container">
                                <h1>{val.title}</h1>
                                <p>{val.desc}</p>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}