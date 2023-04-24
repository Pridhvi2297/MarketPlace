import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_image' src='https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg' alt='bgimage' />

                <div className='home_row'>
                    <Product
                        id="1237868"
                        title="I Will Teach You to Be Rich, Second Edition"
                        price={129.00}
                        image="https://m.media-amazon.com/images/I/71zwHcw-D7L._AC_UF1000,1000_QL80_FMwebp_.jpg"
                        rating={5}
                    />

                    <Product
                        id="123798989"
                        title="Dog Man"
                        price={129.00}
                        image="https://m.media-amazon.com/images/I/51VyW1qRmSL._SX329_BO1,204,203,200_.jpg"
                        rating={5}
                    />
                </div>

                <div className='home_row'>

                    <Product
                        id="6906676876087"
                        title="SAMSUNG Galaxy S23 Ultra Cell Phone"
                        price={129.00}
                        image="https://m.media-amazon.com/images/I/71nZ4-uixuL._AC_SX679_.jpg"
                        rating={5}
                    />

                    <Product
                        id="876087"
                        title="Apple iPhone 14 Pro Max, 256GB, Space Black"
                        price={129.00}
                        image="https://m.media-amazon.com/images/I/51uD1lmrV8L._AC_SX679_.jpg"
                        rating={5}
                    />

                    <Product
                        id="9806076875"
                        title="Apple 2022 12.9-inch iPad Pro (Wi-Fi, 2TB) - Space Gray (6th Generation)"
                        price={129.00}
                        image="https://m.media-amazon.com/images/I/81c+9BOQNWL._AC_SX679_.jpg"
                        rating={5}
                    />

                </div>

                <div className='home_row'>

                    <Product
                        id="896978860980"
                        title="Dell Alienware X17 R2 Gaming Laptop (2022) | 17.3"
                        price={129.00}
                        image="https://m.media-amazon.com/images/I/51ZO-duhFpL._AC_SX679_.jpg"
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
