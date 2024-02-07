import React from 'react'
import Header from '../Header/Header'
import Product from '../Product/Product'
import DiscountedProducts from '../Product/DiscountedProducts'
import './Home.css'

export default function Home() {
    return (
        <>
            <div className='home'>
                <Header />
                <div>
                    <img src="" alt="" />
                </div>

                <div className='center_productsDiscount producColor'>
                    <h2>Descubre el encanto rural</h2>
                    <p className='featured_phrase_home'>Encuentra los mercados mas destacados, con productos de calidad</p>

                    <h3 className='title_discount_home'>Descuentos frescos en el Mercado Campesino</h3>
                    <div className='discount_color'>
                        <div className='products_discount'>
                            <DiscountedProducts />
                        </div>
                    </div>

                    <button className='see_more_discount'>Ver más...</button>

                </div>

                <div className='center_products_'>

                    <div className='featured_product'>
                        <h2 className='featured_product_title'>Productos destacados</h2>
                        <p>El alma de la tierra en cada producto</p>
                    </div>

                    <div className='products_'>
                        <Product />
                    </div>

                    <button className='see_more_products'>Ver más...</button>
                </div>

                <div>
                    <h2>Mercados recomendados</h2>
                    <p>Encuentra los mercados mas destacados, con productos de calidad</p>

                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}
