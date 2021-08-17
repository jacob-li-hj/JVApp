import React from 'react'
import { View, Button } from 'react-native'
import { appConfig } from '@configuration';
import useInfo from '@rest/mock/use-info'

const HomeScreen: React.FC<any> = ({ navigation }) => {
    useInfo()
    console.log('111111', appConfig)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title={`Go to notifications ${appConfig}`}
            />
        </View>
    );
};

export default HomeScreen