import React  from "react";
import Slider from "./Slider.jsx";
import Productitem from "./Productitem.jsx";
export default function Home(){
    return(
        <>
        <Slider></Slider>
        <div className="container-fluid pt-3 pb-3 text-center top-c-head">
            <p>top collections</p>
        </div>
        <div className="container" >
            <div className="row">
                <div className="d-none d-sm-block col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div className="card">
                        <div className="card-body">
                            <img width={'100%'} src="topcltion1.jpg" alt="top cllections" />
                        </div>
                    </div>
                </div>
                <div className="d-none d-md-block  col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div className="card">
                        <div className="card-body">
                            <img width={'100%'} src="topcoll2.jpg" alt="top cllections" />
                        </div>
                    </div>
                </div>
                <div className="d-none d-lg-block col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div className="card">
                        <div className="card-body">
                            <img width={'100%'} src="topcoll3.jpg" alt="top cllections" />
                        </div>
                    </div>
                </div>
                <div className="d-none d-xl-block col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div className="card">
                        <div className="card-body">
                            <img width={'100%'} src="topcoll4.jpg" alt="top cllections" />
                        </div>
                    </div>
                </div>
                <div className="d-none d-xl-block col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div className="card">
                        <div className="card-body">
                            <img width={'100%'} src="topcoll5.jpg" alt="top cllections" />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div className="card">
                        <div className="card-body">
                            <img width={'100%'} src="topcoll2.jpg" alt="top cllections" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid pt-3 pb-3 text-center top-c-head">
            <p>recent top seller</p>
        </div>
        <div className="container">
            <div className="row">
                    <Productitem></Productitem>
            </div>
        </div>
        
        </>
    )
}