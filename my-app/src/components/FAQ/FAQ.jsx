import React from 'react';
import './FAQ.css'
const FAQ = () => {
  return (
    <div className='container'>
      <div class="final__accordion shadow-lg">
    <div class="accordion__item">    
      <a href="#final__tab1" class="accordion__trigger accordion__title"> <i class="bi bi-lightbulb"></i> What is DNA testing? <i class="bi bi-plus-lg"></i></a>
      <div id="final__tab1" class="accordion__content"><p>A: DNA testing is a technique used to analyze an individual's DNA sequence for various purposes, such as ancestry determination, paternity testing, health screening, and genealogy research.</p></div>
    </div>
    
    <div class="accordion__item">   
      <a href="#final__tab2" class="accordion__trigger accordion__title"><i class="bi bi-lightbulb"></i> How accurate is DNA testing? <i class="bi bi-plus-lg"></i></a>   
      <div id="final__tab2" class="accordion__content">
        <p>A: DNA testing is highly accurate, but the accuracy can vary depending on the type of test and the quality of the sample provided. Most reputable DNA testing companies provide results with a high level of accuracy.</p></div>
    </div>
    
    <div class="accordion__item">  
      <a href="#final__tab3" class="accordion__trigger accordion__title"><i class="bi bi-lightbulb"></i> What can DNA testing reveal about my ancestry? <i class="bi bi-plus-lg"></i></a>    
      <div id="final__tab3" class="accordion__content"><p>A: DNA testing can provide insights into your genetic ancestry, showing your ethnicity estimates, migration patterns of your ancestors, and potential relatives within the testing company's database.</p></div>
    </div>
    <div class="accordion__item">  
      <a href="#final__tab4" class="accordion__trigger accordion__title"><i class="bi bi-lightbulb"></i> Can DNA testing determine paternity? <i class="bi bi-plus-lg"></i></a>    
      <div id="final__tab4" class="accordion__content"><p>A: Yes, DNA testing can accurately determine biological relationships, such as paternity, and sibling relationships, with a high degree of certainty.</p></div>
    </div>
    <div class="accordion__item">  
      <a href="#final__tab5" class="accordion__trigger accordion__title"><i class="bi bi-lightbulb"></i> Is DNA testing confidential and secure? <i class="bi bi-plus-lg"></i></a>    
      <div id="final__tab5" class="accordion__content"><p>A: Reputable DNA testing companies have strict privacy policies to ensure the confidentiality and security of your genetic data. However, it's essential to read the company's privacy policy and terms of service before undergoing testing.</p></div>
    </div>
    <div class="accordion__item">  
      <a href="#final__tab6" class="accordion__trigger accordion__title"><i class="bi bi-lightbulb"></i> Can DNA testing be used for criminal investigations? <i class="bi bi-plus-lg"></i></a>    
      <div id="final__tab6" class="accordion__content"><p>A: DNA testing is a powerful tool in criminal investigations and can be used to identify suspects, exonerate innocent individuals, and help solve cold cases. Law enforcement agencies often use DNA databases to match crime scene evidence with known individuals.</p></div>
    </div>
  </div>
  </div>
  );
}

export default FAQ;
