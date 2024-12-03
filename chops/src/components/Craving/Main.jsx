import React from 'react'
import './Main.css'


const Main = () => {

    const BakeryItems = [
        { 
            title: "Donut.....   N1000", 
            desc: "oreo & cream & cramed. cocunut & cream, strawberry & cream" 
        },
        {
            title: "Cupcakes..... N1000",
            desc: "Plain vanilla froasting, chocklate froasting, banana froasting"
        },
        {
            title: "Cookies.....  N1000",
            desc: "Plain cookie, chocklate chip cookie"
        },
        {
            title: "Cakes.....  N1000",
            desc: "Ice cream, birthday cake slice cake"
        }
    ]

    const SnacksItems = [
        {
            title: "Spring rolls.......  N1000",
        },
        {
            title: "Samosa......  N1000",
        },
        {
            title: "Shawarma......  N1000"
        },
        {
            title: "Meatpie......  N1000"
        }
    ]

    return (
        <div className='main'>

            <h1 className="main_title">satisfy your cravings</h1>
            <h1>OUR MENU</h1>    

             <div className="bakes">
             <div className="bakery_container">
                <h2 className="title">BAKERY</h2>
                <div className="items_1">
                    {BakeryItems.map((item,index)=> {
                        return <div className="bakery_item" key={index}>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    })}
                </div>
            </div>

            <div className="snacks_container">
                <h2 className="title">SNACKS</h2>
                <div className="items_2">
                    {SnacksItems.map((item,index)=> {
                        return <div className="snacks_item" key={index}>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    })}
                </div>
            </div>
             </div>

        </div>
    )
}

export default Main