import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Footer = () => {
  const data = [
    {
      title: 'Документация',
      listItems: [
        { href: 'https://reactjs.org/', title: 'Учим React' },
        { href: '/getting-started/', title: 'C чего начать?', link: true },
      ],
    },
    {
      title: 'Общество',
      listItems: [
        {
          href: 'https://stackoverflow.com/questions/tagged/create-react-app',
          title: 'Stack Overflow',
        },
        { href: 'https://spectrum.chat/create-react-app', title: 'Spectrum' },
        { href: 'https://twitter.com/reactjs', title: 'Twitter' },
        {
          href:
            'https://www.contributor-covenant.org/version/1/4/code-of-conduct/',
          title: 'Соглашение для авторов',
        },
      ],
    },
    {
      title: 'Социальное',
      listItems: [
        {
          href: 'https://github.com/facebook/create-react-app',
          title: 'Github',
        },
      ],
    },
  ];

  return (
    <FooterStyled>
      <div className='container'>
        <div className='footer-links'>
          {data.map((item, index) => (
            <div className='footer-col' key={index}>
              <h4>{item.title}</h4>
              <ul>
                {item.listItems.map(({ href, title, link }, index) => (
                  <li key={index}>
                    {link ? (
                      <Link to={href}>{title}</Link>
                    ) : (
                      <a target='_blank' rel='noopener noreferrer' href={href}>
                        {title}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <img
            className='footer-logo'
            src='https://create-react-app.dev/img/oss_logo.png'
            alt='Facebook Open Source Logo'
          />
          <small className='footer-copyright'>
            Copyright © 2020 Facebook, Inc.
          </small>
        </div>
      </div>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  padding: 32px;

  color: rgb(235, 237, 240);
  font-size: 17px;
  line-height: 25px;

  background-color: rgb(48, 56, 70);

  .container {
    padding: 0 16px;
    margin: 0 auto;
    width: 1140px;
  }

  .footer-links {
    display: flex;
    flex-wrap: wrap;
  }

  .footer-col {
    width: 33.333333%;
    padding: 0 16px;
    box-sizing: border-box;

    h4 {
      margin-bottom: 16px;
      line-height: 25px;
      font-weight: 700;
    }

    li {
      font-weight: 500;
      padding: 3px 0;

      :hover,
      :focus {
        text-decoration: underline;
        color: ${({ theme }) => theme.defaultColor.green};
      }
    }
  }

  .footer-logo {
    margin: 40px auto 8px;
    display: block;
    width: 160px;
    height: auto;
  }

  .footer-copyright {
    width: 100%;
    text-align: center;
    font-weight: 700;
  }
`;

export default Footer;
