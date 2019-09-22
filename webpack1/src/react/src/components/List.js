import React from 'react';

export default class List extends React.Component {
    render() {
        const list = [1, 2, 3, 4, 5, 6].map((item, index) => {
            return <li key={index}>{item}</li>
        })
        return (
            <ul>
                {list}
            </ul>
        );
    }
}