import React from "react";



let item =[
    {
        'img' : 'topcoll4.jpg',
        'name':'diy multilayer kingfisher layer',
        'dprice': 298,
        'price':400

    },
    {
        'img' : 'topcoll4.jpg',
        'name':'diy multilayer kingfisher layer',
        'dprice': 298,
        'price':400

    },
    {
        'img' : 'topcoll4.jpg',
        'name':'diy multilayer kingfisher layer',
        'dprice': 298,
        'price':400

    },
    {
        'img' : 'topcoll4.jpg',
        'name':'diy multilayer kingfisher layer',
        'dprice': 298,
        'price':400

    },
    {
        'img' : 'topcoll4.jpg',
        'name':'diy multilayer kingfisher layer',
        'dprice': 298,
        'price':400

    },
    {
        'img' : 'topcoll4.jpg',
        'name':'diy multilayer kingfisher layer',
        'dprice': 298,
        'price':400

    },
    {
        'img' : 'topcoll4.jpg',
        'name':'diy multilayer kingfisher layer',
        'dprice': 298,
        'price':400

    },
    {
        'img' : 'topcoll4.jpg',
        'name':'diy multilayer kingfisher layer',
        'dprice': 298,
        'price':400

    }
]

export default function TraditionalRP()
{
    return(
        <>
            {
                item.map((val)=>{
                    return(
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-item">
                            <div className="card">
                                <div className="card-body">
                                    <img src={val.img} width={'100%'} alt="productitem" />
                                </div>
                                <div className="card-footer">
                                    <p>{val.name}</p>
                                    <p className="p-item-text text-danger fw-bold">rs{val.dprice}</p>
                                    <p className="p-item-text"><del>{val.price}</del></p>
                                </div>
                            </div>
                        </div>
                    )
                })
            
            }
        </>
    )
}