import React from 'react';
import { StyleSheet, FlatList, View, Text } from "react-native";
import { useTheme } from '@react-navigation/native';
import { AuthContext } from '../contexts/AuthContext';
import { HeaderIconsContainer } from '../components/HeaderIconsContainer';
import { NativeIcon } from '../components/NativeIcon';
import { Product } from '../components/Product';

export function ProductScreen({ navigation }) {
    const { colors } = useTheme();
    const { logout } = React.useContext(AuthContext);
    const [products, setProducts] = React.useState([]);
    console.log('navigation', navigation)
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                <HeaderIconsContainer>
                    <NativeIcon iconLib={'AntDesign'} iconName={'logout'} iconColor={colors.primary} onPress={() => logout} />
                </HeaderIconsContainer>
            }
        })
    }, [])

    React.useEffect(() => {
        setProducts([
            {
                imageUrl: 'https://rukminim1.flixcart.com/image/312/312/kb1470w0/computer/z/5/f/msi-na-gaming-laptop-original-imafsh7ahbgkmvtm.jpeg?q=70',
                name: 'Laptop',
                price: '90000',
                description: 'Gaming laptop',
                id: 1
            },
            {
                imageUrl: 'https://rukminim1.flixcart.com/image/312/312/kb1470w0/computer/z/5/f/msi-na-gaming-laptop-original-imafsh7ahbgkmvtm.jpeg?q=70',
                name: 'Laptop',
                price: '90000',
                description: 'Gaming laptop',
                id: 2
            },
            {
                imageUrl: 'https://rukminim1.flixcart.com/image/312/312/kb1470w0/computer/z/5/f/msi-na-gaming-laptop-original-imafsh7ahbgkmvtm.jpeg?q=70',
                name: 'Laptop',
                price: '90000',
                description: 'Gaming laptop',
                id: 3
            },
            {
                imageUrl: 'https://rukminim1.flixcart.com/image/312/312/kb1470w0/computer/z/5/f/msi-na-gaming-laptop-original-imafsh7ahbgkmvtm.jpeg?q=70',
                name: 'Laptop',
                price: '90000',
                description: 'Gaming laptop',
                id: 4
            }
        ])
    }, [])


    const renderItem = ({ item: product }) => {
        return (
            <Product product={product} />
        );
    };

    return (
        <FlatList
            contentContainerStyle={styles.productListContainer}
            data={products}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    )
}

const styles = StyleSheet.create({
    productListContainer: {
        paddingVertical: 8,
        marginHorizontal: 8
    },
})