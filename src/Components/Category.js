import React, { useState } from "react"
import Categories from "./Categories"


const Category = () => {
    const [data,setData]=useState(Categories)
    const filterResult=(catItem)=>{
const result=Categories.filter((curData)=>{
    return curData.payment===catItem;
});
setData(result)
    }
    const filterResult1=(catItem1)=>{
        const result1=Categories.filter((curData)=>{
            return curData.rating===catItem1;
        });
        setData(result1)
            }

    return (
        <>
            <h1 className="text-center text-info">Restaurant menu</h1>
            <div className="container-fluid mx-2">
                <div className="row mt-5 mx-2">
                    <div className="col-md-3">
                        <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult("cash")}>CASH</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult("card")}>CARD</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult1("4")}>Rating-4</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult1("3")}>Rating-3</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult1("2")}>Rating-2</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={()=>setData(Categories)}>All</button>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            {data.map((values)=>{
                                const{id,title,price,image,payment,rating}=values;
                                return (
                                    <>
                                      <div className="col-md-4 mb-4" key={id}>
                                <div className="card" >
                                    <img src={image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{title}</h5>
                                        <p>Price:{price}</p>
                                        <p>payment:{payment}</p>
                                        <p>Rating:{rating}</p>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <button className="btn btn-dark">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                                    </>
                                )
                            })}
                          
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Category