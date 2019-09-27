import React, { Component } from 'react';
import {Footer, FooterSection, FooterDropDownSection, FooterLinkList} from 'react-mdl';

class Footer_section extends Component {
  render() {
    return(
      <div class="footer">
          <Footer size="mega">
        <FooterSection type="middle">
            <FooterDropDownSection title="Contact">
                <FooterLinkList>
                    <span>moonjae@umich.edu</span>
                    <a href="https://www.linkedin.com/in/jae-hyun-moon-427923101/">Linkedin</a>
                    <a href="https://github.com/moonjae">Github</a>
                </FooterLinkList>
            </FooterDropDownSection>
            <FooterDropDownSection title="Details">
                <FooterLinkList>
                    <a href="#">Specs</a>
                    <a href="#">Tools</a>
                    <a href="#">Resources</a>
                </FooterLinkList>
            </FooterDropDownSection>
            <FooterDropDownSection title="Technology">
                <FooterLinkList>
                    <a href="#">How it works</a>
                    <a href="#">Patterns</a>
                    <a href="#">Usage</a>
                    <a href="#">Products</a>
                    <a href="#">Contracts</a>
                </FooterLinkList>
            </FooterDropDownSection>
            <FooterDropDownSection title="FAQ">
                <FooterLinkList>
                    <a href="#">Questions</a>
                    <a href="#">Answers</a>
                    <a href="#">Contact Us</a>
                </FooterLinkList>
            </FooterDropDownSection>
        </FooterSection>
        <FooterSection type="bottom" logo="DAIMŌ">
            <FooterLinkList>
                <a href="#">Help</a>
                <a href="#">Privacy & Terms</a>
            </FooterLinkList>
        </FooterSection>
    </Footer>
      </div>
    )
  }
}


export default Footer_section;
