import React, { useState } from 'react';
import { FlatList } from 'react-native';

import Row from "./Row";

export default ({ contacts }) => {
    const [refreshing, setRefreshing] = useState(false)
    return (

        <FlatList
            data={contacts}
            renderItem={({ item }) => {
                // console.log(item)
                return <Row contact={item} />
            }}
            keyExtractor={item => item.id}
            // onRefresh={() => { 
            //     setRefreshing(true) 
            //     setconsole.log('refreshing') }}
            // refreshing={refreshing}


        />
    )

}

