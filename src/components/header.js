import React from 'react';
import Link from 'gatsby-link';
import './Header.css';
import StripeCheckout from 'react-stripe-checkout';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasScrolled: false
    };
  }

  handlePurchase = (token) => {
    const amount = 5000
    const description = "My awesome product"
  
    const bodyObject = {
      tokenId: token.id,
      email: token.email,
      name: token.name,
      description,
      amount
    }
  
    fetch('http://localhost:9000/stripe-charge', {
      method: 'POST',
      body: JSON.stringify(bodyObject)
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={require('/Users/joshpichardo/Documents/my-app/src/images/images/orionx1.svg')} width="30" /></Link>
          <Link to="/about-us">Genres</Link>
          <Link to="/projects">Hot New Release</Link>
          <Link to="/contact">A-Z</Link>
          <StripeCheckout
            amount={5000}
            token={this.handlePurchase}
             stripeKey={'pk_test_51MjICwDMiDAm4KQ1E79nl91KMEOL6L5kxlw4sNvqoncPcAxdAZKSinUQ4SrYM9jY01Za0YMnWxjMvnaVSfm3NEuZ00pYpdROtY'}>
             <button>Login</button>
          </StripeCheckout>
        </div>
      </div>
    );
  }
}

export default Header;