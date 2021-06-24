import {
  HeadStyled,
  Header,
  Nav,
  NavItem,
  Backdrop,
  HeadDescription,
} from './styled';

import Button from '../common/button';

const Head = () => (
  <HeadStyled>
    <Backdrop />
    <Header>
      <img src="/images/logo.png" alt="logo" />
      <Nav>
        <NavItem>Courses</NavItem>
        <NavItem>Corporate training</NavItem>
        <NavItem>Referral Bonus</NavItem>
        <NavItem>About Us</NavItem>
        <NavItem>Log out</NavItem>
      </Nav>
    </Header>
    <HeadDescription>
      <div>
        Fully remote instructor-led <br />
        Corporate Training in <span className="head-description__border">Test Automation for QA teams</span><br />
        <span className="head-description__small">
          CypressIO, CucumberJS, Puppeteer, Selenium, Robot & more ...
        </span>
      </div>
      <Button title="Learn more" style={{ marginTop: '20px' }} />
    </HeadDescription>
  </HeadStyled>
);

export default Head;
