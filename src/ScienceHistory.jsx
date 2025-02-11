import React, { useState } from 'react';

import imageSrc from './Screenshot 2024-04-18 000902.png';
import imageSrc1 from './india-map-2019.jpg';
import imageSrc2 from './india-collage-photo.jpg';
import imageSrc3 from './Screenshot 2024-04-17 191248.png';
import imageSrc4 from './Screenshot 2024-04-18 192924.png';
import imageSrc5 from './Screenshot 2024-04-18 192354.png';

function ScienceHistory() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const [selectedContent, setSelectedContent] = useState('Ancient Roots of Science: The history of science traces its origins to ancient civilizations such as Mesopotamia, Egypt, Greece, and China, where scholars laid the groundwork for systematic observation, experimentation, and inquiry. From the mathematical innovations of the Babylonians to the astronomical observations of the Greeks, ancient thinkers made significant contributions to our understanding of the natural world, paving the way for the development of scientific methodology.Medieval Scholars and Islamic Golden Age: The Middle Ages saw the preservation and advancement of scientific knowledge by medieval scholars and Islamic polymaths. The translation of ancient texts, combined with original research in fields like astronomy, medicine, and optics, flourished during the Islamic Golden Age, laying the groundwork for the European Renaissance and the Scientific Revolution.<br/>The Scientific Revolution: The Scientific Revolution of the 16th and 17th centuries marked a transformative period in human history, characterized by the emergence of modern science and the overthrow of traditional scientific paradigms. Visionaries such as Copernicus, Galileo, and Newton challenged prevailing beliefs about the cosmos, leading to profound discoveries in physics, astronomy, and mathematics that reshaped our understanding of the universe.The Age of Enlightenment: The Enlightenment era of the 18th century championed reason, empiricism, and skepticism as the guiding principles of scientific inquiry. Thinkers like Descartes, Bacon, and Voltaire promoted the scientific method and the pursuit of knowledge as essential tools for human progress, sparking intellectual revolutions in fields ranging from biology and chemistry to politics and philosophy.<br/>Industrial Revolution and Technological Innovation: The Industrial Revolution of the 19th century unleashed a wave of technological innovation that transformed society and the way we interact with the world. From steam engines and telegraphs to electricity and the internal combustion engine, inventions fueled unprecedented economic growth and ushered in the modern age of science and technology.20th Century Breakthroughs and Discoveries: The 20th century witnessed a period of unprecedented scientific breakthroughs and discoveries across multiple disciplines. From Einstein\'s theory of relativity to the discovery of the structure of DNA, scientists unlocked the secrets of the atom, the universe, and the building blocks of life, revolutionizing our understanding of nature and the cosmos.<br/>Space Exploration and the Digital Age: The space race of the mid-20th century propelled humanity to new frontiers, as nations competed to reach the moon and explore the outer reaches of our solar system. Advances in computing, telecommunications, and biotechnology further accelerated the pace of innovation, laying the groundwork for the digital age and the Information Revolution.Contemporary Challenges and Future Prospects: In the 21st century, science faces pressing challenges such as climate change, global health crises, and ethical dilemmas posed by advances in biotechnology and artificial intelligence. As we confront these complex issues, interdisciplinary collaboration, evidence-based policymaking, and public engagement are essential for addressing the grand challenges of our time and building a sustainable future.<br/>Science and Society: Science not only expands our knowledge of the natural world but also influences society, culture, and policymaking. From debates over evolution and climate change to the ethical implications of genetic engineering and nuclear technology, scientific discoveries raise profound questions about the intersection of science, ethics, and human values.The Human Quest for Understanding: At its core, the history of science reflects humanity\'s timeless quest for understanding and mastery over the forces of nature. As we continue to explore the mysteries of the universe and push the boundaries of knowledge, science remains a driving force for innovation, progress, and enlightenment, shaping the course of human history and the destiny of our species.')
  const topics = [
    { id: 1, title: 'By Time Period', subtopics: ['Classical Science', 'Medieval Science','Modern and Contemporary Science'] },
    { id: 2, title: 'Famous Scienctists', subtopics: ['Isaac Newton (1643–1727 CE)', 'Marie Curie (1867–1934 CE)', 'Albert Einstein (1879–1955 CE)','Stephen Hawking (1942–2018 CE)'] },
    // Add more topics as needed
  ];

  const handleTopicClick = (topicId) => {
    setSelectedTopic(topicId);
    setSelectedSubtopic(null); // Reset selectedSubtopic when a new topic is clicked
  };

  const handleSubtopicClick = (subtopic) => {
    setSelectedSubtopic(subtopic);
    // Set content based on selected subtopic
    let content;
    switch (subtopic) {
      case 'Classical Science':
        content = (
          '<span style="font-size: 22px; color: darkblue; margin-left: 30px;">Classical Science <br /></span>' +
          'Classical science refers to the scientific knowledge and practices during ancient times, especially among the Greeks and Romans. Here are 10 subtopics within classical science:' +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Thales of Miletus</span>' +
          "<br/>Thales is one of the earliest Greek philosophers and is often considered the first scientist. He proposed theories on natural phenomena and is known for the Thales Theorem in geometry." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Pythagoras</span>' +
          "<br/>Pythagoras is renowned for the Pythagorean Theorem in geometry. He also contributed to music theory and the concept of mathematical harmony in nature." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Aristotle</span>' +
          "<br/>Aristotle was a significant philosopher and scientist. He made contributions to biology, physics, and ethics, and his works influenced science and philosophy for centuries." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Euclid</span>' +
          "<br/>Euclid, known as the 'Father of Geometry,' wrote 'The Elements,' a foundational text in geometry and mathematics. His work laid the groundwork for future mathematical studies." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Archimedes</span>' +
          "<br/>Archimedes was a Greek mathematician and inventor known for his work on hydrostatics, mechanics, and geometry. He made significant contributions to the understanding of levers and pulleys." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Hippocrates</span>' +
          "<br/>Hippocrates is often called the 'Father of Medicine.' He established the Hippocratic Oath and laid the foundations for medical ethics and practices." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Claudius Ptolemy</span>' +
          "<br/>Ptolemy was a Greco-Roman mathematician and astronomer known for his geocentric model of the universe. His work 'Almagest' influenced astronomy for centuries." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Galen</span>' +
          "<br/>Galen was a Roman physician whose medical theories influenced European medicine for centuries. He made significant contributions to anatomy and physiology." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Ancient Rome\'s Engineering</span>' +
          "<br/>Ancient Rome is known for its engineering achievements, such as roads, aqueducts, and architectural marvels like the Colosseum. These advancements laid the groundwork for future engineering practices." 
        );
        break;
    
      case 'Medieval Science':
        content = (
          '<span style="font-size: 22px; color: darkgreen; margin-left: 30px;">Medieval Science <br /></span>' +
          'Medieval science covers the contributions to science during the Middle Ages, with a focus on the Islamic Golden Age and European medieval scholars. Here are 10 subtopics within medieval science:' +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Islamic Golden Age</span>' +
          "<br/>The Islamic Golden Age (circa 8th–13th centuries) was a period of significant scientific advancements in the Islamic world. Scholars like Al-Khwarizmi and Avicenna made contributions to mathematics, astronomy, and medicine." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Al-Khwarizmi</span>' +
          "<br/>Al-Khwarizmi is known as the 'Father of Algebra.' He wrote a treatise on algebra that influenced mathematical thought in the Islamic world and Europe." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Avicenna (Ibn Sina)</span>' +
          "<br/>Avicenna was a Persian polymath who made significant contributions to medicine and philosophy. His book 'The Canon of Medicine' was a standard medical text for centuries." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Alhazen (Ibn al-Haytham)</span>' +
          "<br/>Alhazen was an Arab mathematician and physicist known for his work on optics and the scientific method. He wrote the influential book 'Kitab al-Manazir' (Book of Optics)." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">European Medieval Universities</span>' +
          "<br/>European medieval universities, like the University of Paris and the University of Oxford, played a significant role in advancing knowledge and education during the Middle Ages. They laid the groundwork for modern universities." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Roger Bacon</span>' +
          "<br/>Roger Bacon was an English philosopher and scientist known for his emphasis on empirical observation and experimentation. He is considered one of the early advocates of the scientific method." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">European Alchemy</span>' +
          "<br/>European alchemy during the Middle Ages involved early attempts at chemistry and metallurgy. Alchemists explored concepts like transmutation and the philosopher's stone." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Medieval Astronomy</span>' +
          "<br/>Medieval astronomy in Europe and the Islamic world made significant advancements in understanding celestial bodies and the structure of the universe. Scholars like Ptolemy and Al-Battani contributed to this field." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Translation Movement in Baghdad</span>' +
          "<br/>The translation movement in Baghdad during the Islamic Golden Age played a crucial role in preserving and expanding classical knowledge. It involved the translation of Greek and Roman texts into Arabic, facilitating the exchange of ideas between cultures."
        );
        break;
    
      case 'Modern and Contemporary Science':
        content = (
          '<span style="font-size: 22px; color:red; margin-left: 30px;">Modern and Contemporary Science <br /></span>' +
          'Modern and contemporary science spans from the late 19th century to the present, characterized by rapid advancements in technology and various scientific fields. Here are 10 subtopics for modern and contemporary science:' +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Charles Darwin</span>' +
          "<br/>Charles Darwin is known for his theory of evolution by natural selection, detailed in his book 'On the Origin of Species.' This theory revolutionized the field of biology and our understanding of life." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Albert Einstein</span>' +
          "<br/>Albert Einstein was a theoretical physicist known for his theory of relativity and the famous equation E=mc². His work revolutionized physics and had a significant impact on our understanding of the universe." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Marie Curie</span>' +
          "<br/>Marie Curie was a Polish-French physicist and chemist who discovered radium and polonium. She was the first woman to win a Nobel Prize and the only person to win in two different fields (physics and chemistry)." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Quantum Mechanics</span>' +
          "<br/>Quantum mechanics is a field of physics that studies the behavior of matter and energy at the quantum level. Scientists like Max Planck, Niels Bohr, and Erwin Schrödinger made significant contributions to this field." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Space Exploration</span>' +
          "<br/>Space exploration in the 20th and 21st centuries has revolutionized our understanding of the cosmos. Key events include the moon landing by Apollo 11 and the launch of the Hubble Space Telescope." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Genetic Engineering</span>' +
          "<br/>Genetic engineering involves manipulating an organism's genes to achieve specific outcomes. It has significant applications in medicine, agriculture, and biotechnology, with notable contributions from scientists like Barbara McClintock." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Artificial Intelligence</span>' +
          "<br/>Artificial intelligence (AI) focuses on developing machines and software that can perform tasks typically requiring human intelligence. It has a growing impact on various industries, with applications in robotics, data analysis, and more." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Climate Science</span>' +
          "<br/>Climate science studies the Earth's climate and the factors influencing it. Scientists like James Hansen have contributed to our understanding of climate change and its impact on the planet." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Medical Advancements</span>' +
          "<br/>Modern and contemporary science have seen significant advancements in medicine, with breakthroughs in vaccines, medical imaging, and surgical techniques. These advancements have transformed healthcare and improved quality of life." 
        );
        break;
    
      case 'Isaac Newton (1643–1727 CE)':
        content = (
          '<span style="font-size: 22px; color: darkblue; margin-left: 30px;">Isaac Newton (1643–1727 CE) <br /></span>' +
          'Isaac Newton is considered one of the most influential scientists in history, known for his laws of motion and universal gravitation. Here are 10 subtopics related to Isaac Newton:' +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Newton\'s Laws of Motion</span>' +
          "<br/>Newton's laws of motion describe the relationship between a body's motion and the forces acting upon it. These laws form the foundation of classical physics." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Universal Gravitation</span>' +
          "<br/>Newton's theory of universal gravitation states that every particle in the universe attracts every other particle with a force proportional to their masses and inversely proportional to the square of their distance." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Calculus</span>' +
          "<br/>Newton is credited with co-inventing calculus, a mathematical tool used to study change and motion. His work on calculus revolutionized mathematics and science." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Optics</span>' +
          "<br/>Newton's work on optics involved experiments with prisms and the study of light. He proposed that light is composed of particles and developed the concept of color dispersion." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Principia Mathematica</span>' +
          "<br/>Newton's 'Philosophiæ Naturalis Principia Mathematica' is a foundational work in classical physics, detailing his laws of motion and universal gravitation." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Royal Society</span>' +
          "<br/>Newton was president of the Royal Society, a prestigious scientific institution in Britain. His leadership and contributions to the scientific community were significant." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Alchemy and Theology</span>' +
          "<br/>In addition to his scientific achievements, Newton was interested in alchemy and theology. His studies in these areas reflect a broader range of interests and pursuits." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Newtonian Mechanics</span>' +
          "<br/>Newtonian mechanics refers to the classical physics derived from Newton's laws of motion and universal gravitation. It laid the foundation for future studies in physics and engineering." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Newton\'s Legacy</span>' +
          "<br/>Isaac Newton's legacy in science is profound. His work influenced the development of physics, astronomy, and mathematics, and he is often regarded as one of the greatest scientists in history." 
        );
        break;
    
      case 'Marie Curie (1867–1934 CE)':
        content = (
          '<span style="font-size: 22px; color: darkgreen; margin-left: 30px;">Marie Curie (1867–1934 CE) <br /></span>' +
          'Marie Curie was a pioneering physicist and chemist, known for her work on radioactivity and being the first woman to win a Nobel Prize. Here are 10 subtopics related to Marie Curie:' +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Discovery of Radium and Polonium</span>' +
          "<br/>Marie Curie discovered the radioactive elements radium and polonium, which revolutionized the study of radioactivity and had significant applications in medicine and industry." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Nobel Prizes</span>' +
          "<br/>Marie Curie was the first woman to win a Nobel Prize and the only person to win in two different fields: physics and chemistry. Her Nobel Prizes were for her work on radioactivity and the discovery of radium and polonium." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Radioactivity</span>' +
          "<br/>Curie's work on radioactivity laid the foundation for future studies in nuclear physics and chemistry. She coined the term 'radioactivity' and developed methods for isolating radioactive elements." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Curie Institute</span>' +
          "<br/>Marie Curie founded the Curie Institute in Paris, dedicated to the study of radioactivity and cancer treatment. The institute continues to be a leading research center." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">World War I X-ray Vans</span>' +
          "<br/>During World War I, Curie developed mobile X-ray vans to assist battlefield hospitals in diagnosing and treating injured soldiers. Her work contributed to advancements in medical imaging." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Pierre Curie</span>' +
          "<br/>Marie Curie's husband, Pierre Curie, was also a physicist and chemist who collaborated with her on research into radioactivity. They shared the Nobel Prize in Physics in 1903." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Curie\'s Legacy</span>' +
          "<br/>Marie Curie's legacy is profound, not only in science but also as a role model for women in science. Her achievements paved the way for future generations of scientists and inspired numerous other researchers." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Radium\'s Impact</span>' +
          "<br/>The discovery of radium had a significant impact on medicine, leading to new treatments for cancer and other diseases. However, it also raised concerns about the dangers of radioactivity, leading to safety regulations and further research." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Curie Family\'s Contributions</span>' +
          "<br/>Marie Curie's family continued her scientific legacy, with her daughter Irène Joliot-Curie also winning a Nobel Prize in Chemistry. The Curie family's contributions to science are a testament to their lasting impact." 
        );
        break;
    
      case 'Albert Einstein (1879–1955 CE)':
        content = (
          '<span style="font-size: 22px; color: darkpurple; margin-left: 30px;">Albert Einstein (1879–1955 CE) <br /></span>' +
          'Albert Einstein is one of the most famous theoretical physicists in history, known for his theory of relativity and other groundbreaking contributions. Here are 10 subtopics related to Albert Einstein:' +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Theory of Relativity</span>' +
          "<br/>Einstein's theory of relativity, including special relativity and general relativity, revolutionized the field of physics. It describes the relationship between space, time, and gravity, leading to new insights into the nature of the universe." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">E=mc²</span>' +
          "<br/>Einstein's equation E=mc² describes the equivalence between energy and mass. This equation became a cornerstone of modern physics and had a significant impact on the development of nuclear energy." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Photoelectric Effect</span>' +
          "<br/>Einstein's work on the photoelectric effect demonstrated that light could behave as both a wave and a particle. This discovery contributed to the development of quantum mechanics and earned him the Nobel Prize in Physics in 1921." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Brownian Motion</span>' +
          "<br/>Einstein's study of Brownian motion provided evidence for the existence of atoms and molecules. This work helped establish the field of statistical physics." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Unified Field Theory</span>' +
          "<br/>Einstein spent much of his later career attempting to develop a unified field theory, which aimed to combine the fundamental forces of nature. Although he did not complete this work, his efforts inspired further research in theoretical physics." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Einstein and the Manhattan Project</span>' +
          "<br/>Einstein's letter to President Franklin D. Roosevelt, warning about the potential for nuclear weapons, played a role in the initiation of the Manhattan Project. Although he did not work on the project, his insights influenced its development." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Einstein\'s Humanitarian Work</span>' +
          "<br/>Beyond his scientific achievements, Einstein was an advocate for peace and humanitarian causes. He spoke out against war and supported civil rights and disarmament." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Einstein\'s Influence on Modern Physics</span>' +
          "<br/>Einstein's contributions to physics continue to have a lasting impact on modern science. His theories have influenced the development of quantum mechanics, cosmology, and other fields." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Einstein\'s Legacy</span>' +
          "<br/>Albert Einstein's legacy extends beyond his scientific achievements. He is often regarded as a symbol of intellectual curiosity and creativity, inspiring generations of scientists and thinkers." 
        );
        break;
    
      case 'Stephen Hawking (1942–2018 CE)':
        content = (
          '<span style="font-size: 22px; color: darkorange; margin-left: 30px;">Stephen Hawking (1942–2018 CE) <br /></span>' +
          'Stephen Hawking was a renowned theoretical physicist known for his work on black holes and cosmology. Here are 10 subtopics related to Stephen Hawking:' +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Black Hole Radiation (Hawking Radiation)</span>' +
          "<br/>Hawking's discovery of black hole radiation, known as Hawking radiation, was a groundbreaking finding that showed black holes could emit radiation due to quantum effects. This challenged existing theories about black holes." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Cosmology and the Big Bang Theory</span>' +
          "<br/>Hawking's work in cosmology contributed to our understanding of the Big Bang theory and the early universe. He developed theories about singularities and the origins of the universe." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">A Brief History of Time</span>' +
          "<br/>Hawking's book 'A Brief History of Time' became a best-seller and popularized complex scientific concepts for a general audience. It played a key role in making physics accessible to a broader public." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Stephen Hawking\'s ALS Diagnosis</span>' +
          "<br/>Hawking was diagnosed with amyotrophic lateral sclerosis (ALS) at a young age, which affected his mobility and speech. Despite this, he continued to make significant contributions to physics and became an inspiration for overcoming adversity." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Hawking\'s Work on Quantum Gravity</span>' +
          "<br/>Hawking's research extended into quantum gravity and attempts to unify quantum mechanics with general relativity. His work in this field laid the foundation for further studies in theoretical physics." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Hawking\'s Collaborations with Other Scientists</span>' +
          "<br/>Hawking collaborated with other leading physicists, contributing to the development of theoretical physics. His work with scientists like Roger Penrose and Kip Thorne explored complex concepts in cosmology and black holes." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Hawking\'s Appearances in Popular Culture</span>' +
          "<br/>Hawking's appearance in popular culture, including television shows and movies, made him a recognizable figure. He appeared on shows like 'The Big Bang Theory' and was the subject of the movie 'The Theory of Everything.'" +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Hawking\'s Advocacy for Science and Humanity</span>' +
          "<br/>Hawking was an advocate for science and spoke out on issues like climate change and artificial intelligence. He used his platform to promote scientific understanding and humanitarian causes." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Hawking\'s Legacy</span>' +
          "<br/>Stephen Hawking's legacy extends beyond his scientific achievements. He is remembered as a brilliant mind and an inspiration for his perseverance in the face of adversity. His work continues to influence modern physics and cosmology." 
        );
        break;
    
    

      default:
        content = "Select a subtopic to view content.";
    }
    setSelectedContent(content);
  };

  return (
    <div className="page-container">
      <div className="sidebar">
        <h2 className="sidebar-title">Topics</h2>
        <ul className="topic-list">
          {topics.map(topic => (
            <li key={topic.id} className="topic" onClick={() => handleTopicClick(topic.id)}>
              {topic.title}
              {selectedTopic === topic.id && (
                <ul className="subtopic-list">
                  {topic.subtopics.map(subtopic => (
                    <li key={subtopic} className="subtopic" onClick={() => handleSubtopicClick(subtopic)}>
                      {subtopic}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="main">
        <h1 className="page-title">Science History</h1>
        <div className="content">
          
        <div dangerouslySetInnerHTML={{ __html: selectedContent }} />
        </div>
      </div>
    </div>
  );
}

export default ScienceHistory;




