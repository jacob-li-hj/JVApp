import React from 'react'
import { View, Button } from 'react-native'

const HomeScreen: React.FC<any> = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        </View>
    );
};

export default HomeScreen