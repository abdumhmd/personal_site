import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description,keywords } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Gatsby Simplefolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Abdurahman Ali Mohammed | Graduate student,Machine Learning, Cloud Enthusiast and Python Developer'} />
        <meta name="keywords" content={keywords || 'https://github.com/aaabduali, Abdurahman, Python, Ethiopia, Turkey, Machine Learning, Deep Learning, CLoud Computing, IoT, Data Analytics, Digital Image Processing MLops, C/C++, MATLAB, Arduino '} />
        
      </Helmet>
      <App />
    </>
  );
};
