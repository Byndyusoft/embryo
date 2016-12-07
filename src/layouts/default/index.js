import React, { PropTypes } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import styles from './index.scss';

const DefaultLayout = props => {
    return (
        <section className={styles.root}>
            <Header />
            { props.children }
            <Footer />
        </section>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.node
};

export default DefaultLayout;
