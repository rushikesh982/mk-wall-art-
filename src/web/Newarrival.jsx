import React from "react";
import Newarriveitem from './Newarriveitem.jsx'
export default function Newarrival()
{
    return(
        <>
            <div className="container-fluid pt-5 pb-5 text-center top-c-head">
                <p>All Products</p>
            </div>
            <div className="container-fluid">
                <div className="row">
                        <Newarriveitem></Newarriveitem>
                </div>
            </div>
        </>

    )
}