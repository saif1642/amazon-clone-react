import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt=""
                className="home__image"
            />
            <div className="home__row">
                <Product 
                    id="1"
                    title="Finding Freedom: Harry and Meghan and the Making of a Modern Royal Family"
                    price={11.66}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/417wTmjOxAL._SX329_BO1,204,203,200_.jpg"
                />
                 <Product 
                    id="2"
                    title="Meghan and Harry: The Real Story"
                    price={11.66}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41Hyg5+PKfL._SX336_BO1,204,203,200_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="3"
                    title="Royals at War: The Untold Story of Harry and Meghan's Shocking Split with the House of Windsor"
                    price={11.66}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51zjJQV1pvL._SX332_BO1,204,203,200_.jpg"
                />
                 <Product 
                    id="4"
                    title="Wild Game: My Mother, Her Secret, and Me"
                    price={11.66}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/41t1ivNydsL.jpg"
                />
                <Product 
                    id="5"
                    title="Saint X: A Novel"
                    price={11.66}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/51Ys5yejqML.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="6"
                    title="Clean Code: A Handbook of Agile Software Craftsmanship"
                    price={11.66}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg"
                />
            </div>
           
        </div>
    )
}

export default Home
