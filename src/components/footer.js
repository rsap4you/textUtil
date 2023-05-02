import React from "react";
import SimpleReactFooter from "simple-react-footer";
import logo from '../logo-1.jpg'
import logo1 from '../src1.png'
import logo2 from '../src2.png'
import logo3 from '../src3.png'
import logo4 from '../src4.png'

const Footer = () => {
  // Define the data for the footer
  const description =
    "CEO/Fonder: Kumar Amarjeet RAJ student of Government MCA College,Maninagar(East),Ahmedabad  and Currently Trainee in Hyperlink Infosytem  India's Top app Development Company";
  const title = "RSAP4YOU";

  const columns = [
    
    {
        title: "picture 1",
      resources: [
        {
          name: <img src={logo} alt="Logo" />
         
        },
        
    
      ],
    },
    {
      title: "picture 2",
      resources: [
        {
            name: <img src={logo1} width="100%" height="65%" alt="" />
          },
          
      ],
    },
    {
        title: "picture 3",
      resources: [
        {
            name: <img src={logo2} width="100%" height="65%" alt="" />
           
          },
          
      ],
    },
    {
        title: "picture 4",
      resources: [
        {
            name: <img src={logo3} width="100%" height="65%" alt="" />
           
          },
          
      ],
    },
    {
        title: "picture 5",
      resources: [
        {
            name: <img src={logo4} width="100%" height="65%" alt="" />
           
          },
          
      ],
    },
  ];

  return (
    <SimpleReactFooter
      description={description}
      title={title}
      columns={columns}
      linkedin=""
      facebook="lorem_ipsum_on_fb"
      twitter="lorem_ipsum_on_twitter"
      instagram="lorem_ipsum_live"
      youtube="https://www.youtube.com/channel/UCIUsuwUh5_TtpWCmwMkyXQQ"
      pinterest="lorem_ipsum_collections"
      copyright="@RSAP4YOU 2023"
      iconColor="black"
      backgroundColor="lightgrey"
      fontColor="black"
      copyrightColor="darkgrey"
    />
  );
};

export default Footer;
