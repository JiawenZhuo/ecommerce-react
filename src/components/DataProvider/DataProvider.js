import React, { createContext, useState } from 'react';


export const DataContext = createContext();

export const DataProvider = (props) =>{
    const [products, setProducts] = useState([
        {
            "id": 0 ,
            "name": "Fall Limited Edition Sneakers",
            "company": "SNEAKER COMPANY",
            "des":"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
            "price":"125.00",
            "gender": "F",
            "discount":"50%",
            "original_price":"250",
            "pictures":[
                "https://www.converse.com.au/media/catalog/product/cache/506b4e978a2aaf2437105399caeb33bd/u/n/unisex_converse_chuck_taylor_all_star_classic_colour_high_top_black_19160_0.jpg",
                "https://www.converse.com.au/media/catalog/product/cache/122ed3c57cbb9e5a97d45d900d4f4066/u/n/unisex_converse_chuck_taylor_all_star_classic_colour_high_top_black_19160_7.jpg",
                "https://www.converse.com.au/media/catalog/product/cache/122ed3c57cbb9e5a97d45d900d4f4066/u/n/unisex_converse_chuck_taylor_all_star_classic_colour_high_top_black_19160_2.jpg",
                "https://www.converse.com.au/media/catalog/product/cache/506b4e978a2aaf2437105399caeb33bd/u/n/unisex_converse_chuck_taylor_all_star_classic_colour_high_top_black_19160_5.jpg"
                
            ]
        },
        {
            "id": 1 ,
            "name": "WOMENS CT ALL STAR LIFT HI",
            "company": "CONVERSE",
            "des":"Created in 1917, the Chuck Taylor All Star sneaker was the original basketball shoe. Its use has changed over the years, but it’s still perfect in its simplicity. With its timeless silhouette, vulcanized rubber sole and unmistakable ankle patch, the Chuck is ready for you to make it your own.",
            "price":"130.00",
            "gender": "F",
            "discount":"0%",
            "original_price":"$130",
            "pictures":[
                "https://www.platypusshoes.com.au/media/catalog/product/5/7/571880_neut_01.jpg?auto=webp&quality=85&format=pjpg&width=100%25&fit=cover",
                "https://www.platypusshoes.com.au/media/catalog/product/5/7/571880_neut_02.jpg?auto=webp&quality=85&format=pjpg&width=100%25&fit=cover",
                "https://www.platypusshoes.com.au/media/catalog/product/5/7/571880_neut_03.jpg?auto=webp&quality=85&format=pjpg&width=100%25&fit=cover",
                "https://www.platypusshoes.com.au/media/catalog/product/5/7/571880_neut_05.jpg?auto=webp&quality=85&format=pjpg&width=100%25&fit=cover"
            ]
        },
        {
            "id": 2 ,
            "name": "WOMENS CALI STAR",
            "company": "PUMA",
            "des":"Elevate your street style from casual to cool in these retro, '80s-inspired Puma sneakers. With a perforated forefoot, long, clean lines and a thick, textured midsole, you’ll catch every onlooker’s eye.",
            "price":"140.00",
            "gender": "F",
            "discount":"0%",
            "original_price":"$140.00",
            "pictures":[
                "https://www.platypusshoes.com.au/media/catalog/product/2/2/22209001_blk_01.jpg?auto=webp&quality=85&format=pjpg&width=100%25&fit=cover",
                "https://www.platypusshoes.com.au/media/catalog/product/2/2/22209001_blk_02.jpg?auto=webp&quality=85&format=pjpg&width=100%25&fit=cover",
                "https://www.platypusshoes.com.au/media/catalog/product/2/2/22209001_blk_03.jpg?auto=webp&quality=85&format=pjpg&width=100%25&fit=cover",
                "https://www.platypusshoes.com.au/media/catalog/product/2/2/22209001_blk_07.jpg?auto=webp&quality=85&format=pjpg&width=100%25&fit=cover"               
            ]
        },
        {
            "id": 3 ,
            "name": "MENS AIR MAX INFINITY 2",
            "company": "NIKE",
            "des":"With its futuristic look, accentuated heel and mixed-material upper, the Nike Air Max Infinity 2 brings you a textured, fashion-forward look you can wear day in and day out. The wavy design lines add an organic element to balance the modern aesthetic while the Max Air cushioning adds comfort to your day.",
            "price":"160.00",
            "gender": "M",
            "discount":"0%",
            "original_price":"$160.00",
            "pictures":[
                "https://www.platypusshoes.com.au/media/catalog/product/2/0/202a024102_wht_01.jpeg?auto=webp&quality=85&format=pjpg&width=100%25&fit=cover",
                "https://www.platypusshoes.com.au/media/catalog/product/2/0/202a024102_wht_02.jpeg?auto=webp&quality=85&format=pjpg&width=100%25&fit=cover",
                "https://www.platypusshoes.com.au/media/catalog/product/2/0/202a024102_wht_03.jpeg?auto=webp&quality=85&format=pjpg&width=100%25&fit=cover",
                "https://www.platypusshoes.com.au/media/catalog/product/2/0/202a024102_wht_05.jpeg?auto=webp&quality=85&format=pjpg&width=100%25&fit=cover"
            ]
        },
        {
            "id": 4 ,
            "name": "SID SUEDE",
            "company": "VANS",
            "des":"New to the Anaheim Factory pack, the SID DX features high-gloss, heritage-inspired color palettes, our iconic flying-V logo, and sturdy suede uppers for a unique look, feel, and construction. Paying tribute to our first Vans factory in Anaheim, California, it also includes throwback details, cotton laces, striped sidewalls, and the modernized comfort of upgraded Ortholite® sockliners.",
            "price":"70.00",
            "gender": "M",
            "discount":"50%",
            "original_price":"$140",
            "pictures":[
                "https://www.platypusshoes.com.au/media/catalog/product/f/m/fm0fm03997_ybr_wht_02.jpeg?auto=webp&quality=85&format=pjpg&width=100%25&fit=cover",
                "https://www.platypusshoes.com.au/media/catalog/product/f/m/fm0fm03997_ybr_wht_01.jpeg?auto=webp&quality=85&format=pjpg&width=100%25&fit=cover",
                "https://www.platypusshoes.com.au/media/catalog/product/f/m/fm0fm03997_ybr_wht_03.jpeg?auto=webp&quality=85&format=pjpg&width=100%25&fit=coverr",
                "https://www.platypusshoes.com.au/media/catalog/product/f/m/fm0fm03997_ybr_wht_04.jpeg?auto=webp&quality=85&format=pjpg&width=100%25&fit=cover"
            ]
        },
        {
            "id": 5 ,
            "name": "TJM LEATHER",
            "company": "TOMMY HILFIGER",
            "des":"A staple sneaker from Tommy Hilfiger in a classic low-top profile with rubber sole. Leather upper construction wth branding logo detail on the side.",
            "price":"169.00",
            "gender": "M",
            "discount":"0%",
            "original_price":"$169",
            "pictures":[
                "https://www.platypusshoes.com.au/media/catalog/product/g/x/gx8765_neut_02.jpeg?auto=webp&quality=85&format=pjpg&width=100%25&fit=cover",
                "https://www.platypusshoes.com.au/media/catalog/product/g/x/gx8765_neut_03.jpeg?auto=webp&quality=85&format=pjpg&width=100%25&fit=cover",
                "https://www.platypusshoes.com.au/media/catalog/product/g/x/gx8765_neut_04.jpeg?auto=webp&quality=85&format=pjpg&width=100%25&fit=cover",
                "https://www.platypusshoes.com.au/media/catalog/product/g/x/gx8765_neut_07.jpeg?auto=webp&quality=85&format=pjpg&width=100%25&fit=cover" 
            ]
        }
    ])

    const value = {
        products, 
        setProducts,
    }
    return(
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}