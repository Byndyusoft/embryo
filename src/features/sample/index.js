import React, { PropTypes } from 'react';
import styles from './index.scss';

const Sample = props => (
    <div>
        <h1 className={styles.hello}>Sample</h1>
        <p>Persistent parameter: {props.params.id}</p>
        <p>Optional parameter: {props.params.optional}</p>
    </div>
);

Sample.propTypes = {
    params: PropTypes.shape({
        id: PropTypes.string,
        optional: PropTypes.string
    })
};

export default Sample;
