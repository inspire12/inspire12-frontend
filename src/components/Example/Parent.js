import React from 'react'
import Child from './Child';
import { Button } from 'semantic-ui-react';
import { useState } from 'react';


export default function Parent() {
    const [data, setData] = useState('');

    const parentToChild = () => {
        setData("This is data from Parent Component to the Child Component.");
    }
    return (
        <div className="App">
            <Child parentToChild={data}/>

            <div>
                <Button primary onClick={() => parentToChild()}>Click Parent</Button>
            </div>
        </div>
    )
}