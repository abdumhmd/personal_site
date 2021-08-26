import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Abdurahman A. Mohammed', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'AI and Machine Learning Engineer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, I am ',
  name: 'Abdu.',
  subtitle: 'I am a graduate student and work on Machine learning and AI.',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: '2+++.png',
  paragraphOne: 'An Artificial Intelligence enthusiast with a demonstrated history of working in the computer software industry. Skilled in Python, SQL, Web Programming, Analytical thinking, and comprehensive reporting. Strong engineering professional with a bachelor’s degree focused on Computer Software Engineering. Equipped with excellent communication skills both written and spoken.',
  paragraphTwo: 'Currently pursuing PhD degree at Iowa State University. Working on the area of Machine Learning, specifically Deep Neural Networks.',
  
  resume: 'https://1drv.ms/b/s!AtoSxRMcVXuHjRLqdyI-xqFPL2IO', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'waste.jpg',
    title: 'Waste Material Classification with Deep Learning',
    info: 'A Deep Convolutional Neural Network to classify waste materials into organic and recyclable waste. Concepts of computer vision were applied build a deep neural network that extracts features and performs classification based on the Image data provided.  ',
    info2: 'Python programming language and Tensorflow was used to build the classifier.',
    
    repo: 'https://www.kaggle.com/aaabduali/87-accuracy-with-tensorflow', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '42298.jpg',
    title: 'Pneumonia Detection with Deep Learning',
    info: 'Another Deep learning model built to classify X-Ray images into Pneumonic and Non-pnueumonic. The model identifies the X-Ray Images by extracting areas of abnormal opacification in the image. ',
    info2: 'Python programming language and Tensorflow was used to build the classifier.',
    
    repo: 'https://colab.research.google.com/drive/1AXYm0lq8jUUXQ_Yf9PRwtLnn3ORWMY8h?authuser=1#scrollTo=0r0Sg02p5OVh', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'izmir.jpg',
    title: 'Clustering of Izmir\'s districts.',
    info: 'To identify a convenient place to set up a shared workspace rental in the city of Izmir, the districts of then city were clustered based on the venues that are located inside them. The required data has been scraped and obtained from Foursquare API.',
    info2: 'Python programming language and Scikit library were used.',
    
    repo: 'https://github.com/aaabduali/Coursera_Capstone', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Let\'s connect!',
  btn: 'Contact me',
  email: 'abdurahmanali.mohammed@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/_aaabduali',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/aaabduali/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/aaabduali',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/abdu._.rahman/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
