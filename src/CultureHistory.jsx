import React, { useState } from 'react';

import imageSrc from './Screenshot 2024-04-18 000902.png';
import imageSrc1 from './india-map-2019.jpg';
import imageSrc2 from './india-collage-photo.jpg';
import imageSrc3 from './Screenshot 2024-04-17 191248.png';
import imageSrc4 from './Screenshot 2024-04-18 192924.png';
import imageSrc5 from './Screenshot 2024-04-18 192354.png';

function CultureHistory() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const [selectedContent, setSelectedContent] = useState('Origins of Human Culture: The history of human culture stretches back tens of thousands of years to the dawn of civilization, when early humans began to develop language, art, music, and social customs. From the cave paintings of Lascaux to the monumental architecture of ancient civilizations, cultural artifacts provide insights into the beliefs, values, and aspirations of our ancestors.<br/>Ancient Civilizations and Cultural Exchange: The rise of ancient civilizations such as Mesopotamia, Egypt, Greece, and Rome laid the foundation for the development of complex societies and cultural traditions. Through trade, conquest, and migration, these civilizations exchanged ideas, technologies, and cultural practices, shaping the rich tapestry of human civilization.Medieval Europe and the Age of Faith: The Middle Ages saw the flowering of medieval culture, characterized by feudalism, chivalry, and the dominance of the Catholic Church. From the epic poems of chivalric romance to the soaring cathedrals of Gothic architecture, medieval Europe produced enduring works of art, literature, and philosophy that reflected the spiritual and social values of the age.The Renaissance and Cultural Rebirth: The Renaissance era witnessed a revival of classical learning and the rebirth of humanism, leading to a flowering of artistic, scientific, and intellectual achievement. From the masterpieces of Michelangelo and Leonardo da Vinci to the scientific discoveries of Copernicus and Galileo, the Renaissance marked a transformative period in the history of culture and civilization.<br/>The Age of Exploration and Global Exchange: The Age of Exploration in the 15th and 16th centuries opened up new worlds and facilitated the exchange of goods, ideas, and cultures across continents. From the spice trade routes of the Indian Ocean to the encounter between European explorers and indigenous peoples of the Americas, cultural exchange and cross-fertilization reshaped the global landscape.<br/>Enlightenment and the Age of Reason: The Enlightenment era of the 18th century championed reason, science, and individual liberty as the guiding principles of human society. Philosophers such as Voltaire, Rousseau, and Montesquieu promoted critical thinking and the pursuit of knowledge, laying the groundwork for political revolutions and social reform movements that transformed the world.<br/>19th Century Romanticism and National Identity: The 19th century witnessed the rise of Romanticism, a cultural movement that celebrated nature, emotion, and the individual imagination. From the poetry of Wordsworth and Keats to the paintings of Turner and Delacroix, Romantic artists and writers expressed a deep sense of national identity and cultural belonging that resonated with audiences across Europe and beyond.Modernism and the Avant-Garde: The modernist movement of the early 20th century challenged traditional conventions of art, literature, and culture, embracing experimentation, abstraction, and innovation. From the cubist paintings of Picasso to the stream-of-consciousness novels of Joyce and Woolf, modernist artists and writers shattered boundaries and pushed the limits of creative expression. Globalization and Cultural Diversity: The 21st century is characterized by unprecedented interconnectedness and cultural exchange on a global scale. From the spread of digital technology and social media to the rise of multiculturalism and globalization, contemporary culture reflects a rich tapestry of diversity and hybridity that transcends national borders and traditional boundaries.<br/>Cultural Heritage and Identity: As we navigate the complexities of modern life, cultural heritage plays a crucial role in shaping our sense of identity, belonging, and shared humanity. From UNESCO World Heritage sites to intangible cultural practices and traditions passed down through generations, cultural heritage reminds us of our common heritage and the enduring power of human creativity, resilience, and imagination.')
  const topics = [
    { id: 1, title: 'By Time Period', subtopics: ['Ancient Culture', 'Medieval Culture','Modern Culture'] },
    { id: 2, title: 'World Culture', subtopics: ['European Culture', 'Asian Culture', 'Middle Eastern Culture:'] },
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
      case 'Ancient Culture':
        content = (
          '<span style="font-size: 22px; color: darkblue; margin-left: 30px;">Ancient Culture <br /></span>' +
          'Ancient culture encompasses early human civilizations and their contributions to art, religion, literature, and governance. Here are 10 subtopics for this category:' +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Ancient Mesopotamia</span>' +
          "<br/>Mesopotamia is considered the cradle of civilization, known for its early city-states like Sumer and Babylon, cuneiform writing, and monumental architecture." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Ancient Egypt</span>' +
          "<br/>Ancient Egypt is renowned for its pyramids, pharaohs, and complex religious beliefs. It also developed hieroglyphics and made significant contributions to art and architecture." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Ancient Greece</span>' +
          "<br/>Ancient Greece is famous for its philosophy, democracy, and classical art and literature. It was the birthplace of Western thought and the Olympic Games." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Ancient Rome</span>' +
          "<br/>Ancient Rome built a vast empire, known for its engineering achievements, legal system, and military prowess. It played a significant role in spreading Christianity." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Indus Valley Civilization</span>' +
          "<br/>The Indus Valley Civilization, located in present-day Pakistan and northwest India, was one of the earliest urban cultures, with advanced city planning and undeciphered script." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Ancient China</span>' +
          "<br/>Ancient China developed early dynasties like the Shang and Zhou, with significant contributions to metallurgy, silk production, and pottery. It was also the birthplace of Confucianism and Taoism." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Mesoamerican Civilizations</span>' +
          "<br/>Mesoamerica includes the Maya, Aztec, and Olmec civilizations, known for their impressive architecture, complex calendars, and social structures. These cultures made significant contributions to astronomy and mathematics." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Ancient India</span>' +
          "<br/>Ancient India is home to significant developments in religion and philosophy, including Hinduism and Buddhism. The Maurya and Gupta empires contributed to art and science." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Polynesian Civilizations</span>' +
          "<br/>Polynesian civilizations were known for their seafaring and navigation skills, creating extensive trade routes across the Pacific. These cultures had unique traditions, art, and social structures."
        );
        break;
    
      case 'Medieval Culture':
        content = (
          '<span style="font-size: 22px; color: darkgreen; margin-left: 30px;">Medieval Culture <br /></span>' +
          'Medieval culture spans roughly from the 5th to the late 15th century, encompassing significant developments in Europe, Asia, and the Middle East. Here are 10 subtopics for this category:' +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Feudalism in Europe</span>' +
          "<br/>Feudalism was the dominant social system in medieval Europe, where lords granted land to vassals in exchange for military service. This system defined medieval society and governance." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Byzantine Empire</span>' +
          "<br/>The Byzantine Empire was the continuation of the Roman Empire in the East, known for its rich culture, religious iconography, and significant role in preserving ancient texts." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Islamic Caliphates</span>' +
          "<br/>The Islamic Caliphates, including the Rashidun, Umayyad, and Abbasid, were major cultural centers that contributed to science, mathematics, and philosophy. They played a key role in preserving ancient knowledge." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">The Crusades</span>' +
          "<br/>The Crusades were a series of religiously motivated military campaigns between European Christians and Muslims in the Middle East. These wars had a lasting impact on European and Middle Eastern culture." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Medieval China</span>' +
          "<br/>Medieval China saw significant dynasties like the Tang and Song, known for advancements in art, science, and technology. Inventions like gunpowder and the printing press originated during this period." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Medieval Japan</span>' +
          "<br/>Medieval Japan witnessed the rise of the samurai class and the establishment of the shogunate, characterized by feudalism and traditional Japanese arts like the tea ceremony and Zen Buddhism." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Medieval India</span>' +
          "<br/>Medieval India included the Gupta and Mughal Empires, which contributed to art, architecture, and religion. The Mughal Empire, in particular, left a lasting mark with its magnificent structures like the Taj Mahal." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">West African Empires</span>' +
          "<br/>West African empires like Mali and Songhai were known for their wealth, driven by the trans-Saharan trade. These empires had powerful leaders like Mansa Musa and Askia the Great." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Medieval Europe</span>' +
          "<br/>Medieval Europe saw the spread of Christianity, the establishment of medieval kingdoms, and significant cultural developments, including the Gothic architecture of cathedrals and the emergence of universities."
        );
        break;
    
      case 'Modern Culture':
        content = (
          '<span style="font-size: 22px; color: darkred; margin-left: 30px;">Modern Culture <br /></span>' +
          'Modern culture spans from the late 19th century to the present, characterized by significant changes in technology, society, and art. Here are 10 subtopics that explore modern culture:' +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Industrial Revolution</span>' +
          "<br/>The Industrial Revolution marked a significant transformation in society, with advancements in technology, transportation, and industry. It led to the rise of urbanization and had a profound impact on culture." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Modern Art</span>' +
          "<br/>Modern art includes movements like Impressionism, Cubism, and Surrealism, with artists like Claude Monet, Pablo Picasso, and Salvador Dalí. It represents a shift towards abstraction and experimentation in art." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">World War I</span>' +
          "<br/>World War I (1914–1918) was a global conflict that had a significant impact on modern culture, influencing literature, poetry, and art. The war marked a major shift in societal values and attitudes." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">World War II</span>' +
          "<br/>World War II (1939–1945) was a transformative event in modern history, shaping global politics and culture. It led to significant changes in art, literature, and society, with a focus on post-war reconstruction and reconciliation." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Cold War Culture</span>' +
          "<br/>The Cold War era (mid-20th century to 1991) influenced modern culture through political rivalry between the United States and the Soviet Union. It had an impact on film, literature, and music, reflecting the tensions and ideologies of the time." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Digital Revolution</span>' +
          "<br/>The digital revolution has transformed modern culture, with advancements in computing, the internet, and communication technologies. It has led to the rise of social media, online platforms, and digital art forms." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Contemporary Pop Culture</span>' +
          "<br/>Contemporary pop culture is characterized by the globalization of entertainment, with movies, music, and television shows reaching audiences worldwide. This has led to a blending of cultural influences and the rise of global icons." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Environmentalism</span>' +
          "<br/>Environmentalism has become a significant aspect of modern culture, with movements advocating for sustainability and climate action. This has influenced contemporary art, literature, and political discourse." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Social Justice and Inclusivity</span>' +
          "<br/>Modern culture has seen a growing focus on social justice and inclusivity, with movements advocating for gender equality, LGBTQ+ rights, and racial justice. These movements have influenced contemporary culture and societal values." 
        );
        break;
    
      case 'European Culture':
        content = (
          '<span style="font-size: 22px; color: darkred; margin-left: 30px;">European Culture <br /></span>' +
          'European culture has a rich history that spans ancient Greece and Rome, medieval Europe, the Renaissance, and the Enlightenment. Here are 10 subtopics that explore different aspects of European culture:' +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Ancient Greece</span>' +
          "<br/>Ancient Greece contributed to philosophy, democracy, and classical art and literature. It was also the birthplace of the Olympic Games and had a significant influence on Western thought." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Ancient Rome</span>' +
          "<br/>Ancient Rome built a vast empire, known for its engineering achievements, legal system, and military prowess. It played a significant role in spreading Christianity across Europe." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Medieval Europe</span>' +
          "<br/>Medieval Europe was characterized by feudalism, the spread of Christianity, and the establishment of medieval kingdoms and empires. The Crusades and the Black Death were significant events that shaped the Middle Ages." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">The Renaissance</span>' +
          "<br/>The Renaissance was a period of cultural revival in Europe, characterized by a renewed interest in classical learning and humanism. It had a significant impact on art, science, and architecture, with key figures like Leonardo da Vinci and Michelangelo." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">The Reformation</span>' +
          "<br/>The Reformation was a religious movement that challenged the Catholic Church's authority, leading to the rise of Protestantism. This period had a profound impact on European religious and political structures." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">The Enlightenment</span>' +
          "<br/>The Enlightenment was an intellectual movement that emphasized reason, science, and individualism. It influenced European societies and contributed to the development of modern political systems." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">The Industrial Revolution</span>' +
          "<br/>The Industrial Revolution transformed Europe through rapid industrialization and technological advancements. This period marked the rise of factories, steam power, and urbanization, leading to significant social and economic changes." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">World War I and World War II</span>' +
          "<br/>World War I and World War II were major global conflicts that reshaped Europe and the world. These wars had a profound impact on European culture, influencing literature, art, and societal values." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Contemporary European Culture</span>' +
          "<br/>Contemporary European culture reflects a diverse and dynamic landscape, with a focus on multiculturalism and the integration of different cultures. It includes modern art, literature, and the influence of the European Union on European politics and society." 
        );
        break;
    
      case 'Asian Culture':
        content = (
          '<span style="font-size: 22px; color: darkpurple; margin-left: 30px;">Asian Culture <br /></span>' +
          'Asian culture encompasses a vast range of regions and historical periods, with significant contributions to art, religion, and philosophy. Here are 10 subtopics for Asian culture:' +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Ancient China</span>' +
          "<br/>Ancient China developed early dynasties like the Shang and Zhou, contributing to metallurgy, silk production, and pottery. This period marked the emergence of Confucianism and Taoism, with significant advancements in art and architecture." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Medieval China</span>' +
          "<br/>Medieval China included the Tang and Song dynasties, known for advancements in art, science, and technology. This period saw the invention of gunpowder and the printing press." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">The Mongol Empire</span>' +
          "<br/>The Mongol Empire, established by Genghis Khan, was the largest contiguous empire in history. It connected Asia and Europe through the Silk Road, facilitating trade and cultural exchange." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Ancient India</span>' +
          "<br/>Ancient India is known for its contributions to religion and philosophy, including Hinduism and Buddhism. The Maurya and Gupta empires had sophisticated administrative systems and played significant roles in the spread of Buddhism." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Medieval India</span>' +
          "<br/>Medieval India included the Gupta and Mughal empires, which made significant contributions to art and architecture. The Mughal Empire is renowned for its magnificent structures, like the Taj Mahal." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Japanese Culture</span>' +
          "<br/>Japanese culture encompasses traditional arts like tea ceremonies and calligraphy, as well as the rise of the samurai class and the shogunate during the medieval period." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">South Asian Culture</span>' +
          "<br/>South Asian culture includes the cultural diversity of the Indian subcontinent, with significant contributions to music, dance, and religious practices. It reflects a rich tapestry of languages and traditions." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Southeast Asian Culture</span>' +
          "<br/>Southeast Asian culture is known for its maritime traditions, unique art forms, and significant influences from India and China. It includes cultures from countries like Thailand, Indonesia, and Vietnam." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Contemporary Asian Culture</span>' +
          "<br/>Contemporary Asian culture reflects a dynamic and rapidly changing landscape. It includes the rise of technology, globalization, and the growing influence of Asian cultures in global entertainment and business." 
        );
        break;
    
      case 'Middle Eastern Culture:':
        content = (
          '<span style="font-size: 22px; color: darkorange; margin-left: 30px;">Middle Eastern Culture <br /></span>' +
          'Middle Eastern culture has ancient roots and has significantly influenced religion, philosophy, and art. Here are 10 subtopics that explore this rich and diverse region:' +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Ancient Mesopotamia</span>' +
          "<br/>Ancient Mesopotamia is considered the cradle of civilization, known for its early city-states and cuneiform writing. It played a crucial role in the development of religion, governance, and culture." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Ancient Egypt</span>' +
          "<br/>Ancient Egypt is renowned for its pyramids, pharaohs, and complex religious beliefs. The Nile River played a crucial role in Egypt's development, leading to significant contributions to art and architecture." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Byzantine Empire</span>' +
          "<br/>The Byzantine Empire, centered in Constantinople, was the continuation of the Roman Empire in the East. It had a rich religious culture, with significant contributions to art and architecture." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Islamic Caliphates</span>' +
          "<br/>The Islamic Caliphates, including the Rashidun, Umayyad, and Abbasid, played a central role in spreading Islam and advancing science, mathematics, and philosophy. They were significant cultural centers in the Middle East." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Ottoman Empire</span>' +
          "<br/>The Ottoman Empire was a major political and cultural force in the Middle East, spanning from Southeast Europe to the Middle East. It had a significant impact on art, architecture, and religion." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Judaism</span>' +
          "<br/>Judaism is one of the major world religions that originated in the Middle East. It has a rich tradition of religious texts and practices, with significant cultural contributions to art and philosophy." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Christianity</span>' +
          "<br/>Christianity also originated in the Middle East, with significant cultural influences on Western and Middle Eastern societies. The spread of Christianity has played a central role in shaping global culture." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Islam</span>' +
          "<br/>Islam is another major world religion that originated in the Middle East. It has a significant influence on Middle Eastern culture, with notable religious texts and traditions, and has shaped art, architecture, and society." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Contemporary Middle Eastern Culture</span>' +
          "<br/>Contemporary Middle Eastern culture reflects a diverse and evolving landscape, with significant influences from historical roots and modern globalization. It includes ongoing political changes, cultural blending, and modern artistic expressions."
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
        <h1 className="page-title">Culture History</h1>
        <div className="content">
          
        <div dangerouslySetInnerHTML={{ __html: selectedContent }} />
        </div>
      </div>
    </div>
  );
}

export default CultureHistory;




