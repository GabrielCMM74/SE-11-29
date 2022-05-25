import React from 'react';
import { Header, Segment } from 'semantic-ui-react';


export default function PageHeader(){
    return (
        <Segment clearing>
            <Header as='h2'>This is the Header</Header>
        </Segment>
    )
}