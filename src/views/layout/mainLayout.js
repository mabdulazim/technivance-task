import React, { Component, Fragment } from 'react';

import Nav from './nav';
import Header from './header';
import Footer from './footer';

class MainLayout extends Component 
{
    render()
    {
        return (
            <Fragment>

                <Nav />
                <Header />
                
                <section>
                    <div className="container">
                        {this.props.children}
                    </div>
                </section>
                
                <Footer />

	        </Fragment>	
    	);
  	}
}
export default MainLayout;