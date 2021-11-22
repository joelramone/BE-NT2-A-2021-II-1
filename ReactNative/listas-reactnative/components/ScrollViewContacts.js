import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import Row from "./Row";

export default ({ contacts }) => (
    <ScrollView>
        {
          contacts.map((contact, index) => <Row key={index} contact={contact} />)
        }
      </ScrollView>
)
