import React, { PropTypes } from 'react';
import Header from './components/header';
import Footer from './components/footer';

const DefaultLayout = props => {
    return (
        <section>
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
