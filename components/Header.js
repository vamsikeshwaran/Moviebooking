import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native';

const Header = () => {
    return (
        <View style={{ marginBottom: 55 }}>
            <ImageBackground style={{ height: 200, resizeMode: "contain" }} source={{ uri: "https://i0.wp.com/blog.philo.com/wp-content/uploads/2023/09/John-Wick_Chapter-4.jpg?w=975&ssl=1" }}>
                <Pressable style={{ height: 90, backgroundColor: "white", padding: 10, borderRadius: 5, width: "90%", top: 160, marginLeft: "auto", marginRight: "auto" }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <View>
                            <Text style={{ fontSize: 15, fontWeight: "500" }}>Releasing in 1 Day</Text>
                            <Text style={{ marginVertical: 5, fontSize: 16, fontWeight: "700" }}>JOHN WICK</Text>
                            <Text style={{ fontSize: 15, color: "gray", fontWeight: "500" }}>U.A ENGLISH</Text>
                        </View>
                        <Pressable style={{ backgroundColor: "#ffc40c", padding: 10, borderRadius: 6, marginRight: 10 }}>
                            <Text>BOOK</Text>
                        </Pressable>
                    </View>
                </Pressable>
            </ImageBackground>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})