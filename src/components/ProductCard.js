import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./ProductCard.style";

const ProductCard = ({product}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: product.imgURL}} />
            <View style={styles.product_details}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>{product.price}</Text>
                {!product.inStock && <Text style={styles.notInStock}>STOKTA YOK</Text>}
            </View>
            
        </View>
    );
};




export default ProductCard;