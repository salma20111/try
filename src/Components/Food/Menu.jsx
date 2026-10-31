import { products } from "@/data/products";
import Image from "next/image";

export default function Menu () {
    return (
        <div>
            <div>
                {products.map((product, i) => {
                    const {id , name, photo, 
                        category, description,
                         sizes} = product;

                return (
                <div key={id}>
                    <div>
                        <Image src={photo} 
                        width={300} alt={name} 
                        height={200}/>
                    </div>
                    <div>
                        <div>
                            <h3>{name}</h3>
                            <p>{description}</p>
                        </div>
                    <div>
                        {sizes.map((size) => {
                            const {name , price} = size;
                            return (
                            <div key={name}>
                                <h4>{name}</h4>
                               <p>{price}EGP</p>
                            </div>
                            )
                        })}
                    </div>

                    <div>
                        <div>
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>

                        <div>
                            <button>Add To Cart</button>
                        </div>
                    </div>
                    </div>
                </div>
                );
                })}
            </div>
        </div>
    );
}