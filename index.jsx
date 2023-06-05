import React from 'react';
import ReactDom from 'react-dom';
import './styles.scss';
import 'bootstrap/dist/css/bootstrap.css';

export const Index = () => {
    return (
        <>
            <h1 className ={'text-warning'}>Bootstrap should not be affected</h1>
            <div className="my-prefix">
                <div>
                <h1 className ={'someClass'}>Internal</h1>
                <h1 className ={'text-warning'}>Bootstrap</h1>
                </div>
            </div>
        </>
    );
}

ReactDom.render(<Index />, document.getElementById('root'));