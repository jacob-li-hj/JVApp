import React from 'react'
import { View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const NotificationsScreen: React.FC = () => {
    const { goBack } = useNavigation()
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={goBack} title="Go back home" />
        </View>
    );
};

export default NotificationsScreen