import React from 'react';
import ReactDom from 'react-dom';
import styles from './styles.scss';

export const Index = () => {
    return (
        <div>
        <h1 className ={styles.someClass}>Index</h1>
        </div>
    );
}

ReactDom.render(<Index />, document.getElementById('root'));