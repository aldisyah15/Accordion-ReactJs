import React, { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
import AccordionItem from './component/Accordion';

const App = () => {
    const accordionItems = [
      { 
        title: 'Layanan apa yang kami tawarkan?', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book' },

      { title: 'Apakah ada harga dibawah 100 ribu?', content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." },

      { title: 'Apakah mendapatkan garansi?',  content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words," }
    ];

  
  
    return (
       <div className='container mx-auto p-4'>
         <AccordionItem items={accordionItems} />
       </div>
    );
  };
  export default App;
