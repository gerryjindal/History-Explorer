import React, { useState } from 'react';

import imageSrc from './Screenshot 2024-04-18 000902.png';
import imageSrc1 from './india-map-2019.jpg';
import imageSrc2 from './india-collage-photo.jpg';
import imageSrc3 from './Screenshot 2024-04-17 191248.png';
import imageSrc4 from './Screenshot 2024-04-18 192924.png';
import imageSrc5 from './Screenshot 2024-04-18 192354.png';

function GlobalHistory1() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const [selectedContent, setSelectedContent] = useState('Global history offers a panoramic view of human civilization, tracing the intricate tapestry of events, interactions, and transformations that have shaped societies across continents and epochs. From the emergence of early civilizations to the complexities of the modern world, the story of humanity unfolds through a rich mosaic of cultures, ideas, and achievements. Here, we delve into ten expansive paragraphs, each exploring different facets of global history.Origins of Civilization: The roots of human civilization stretch back thousands of years, marked by the rise of ancient cultures such as Mesopotamia, Egypt, the Indus Valley, and China. These early societies laid the groundwork for complex social structures, agricultural innovation, monumental architecture, and written language, setting the stage for the development of urban centers and centralized states.<br/>Ancient Empires and Trade Networks: The ancient world witnessed the emergence of vast empires like Rome, Persia, and Han China, which expanded their influence through conquest and diplomacy. Alongside imperial power, extensive trade networks flourished, connecting distant regions and facilitating the exchange of goods, ideas, and technologies along the Silk Road, Indian Ocean, and Mediterranean Sea.Medieval Europe and the Islamic Golden Age: The Middle Ages saw the flowering of medieval Europe\'s feudal order, characterized by the feudal system, chivalry, and the dominance of the Catholic Church. Concurrently, the Islamic world experienced its own Golden Age, marked by advancements in science, mathematics, medicine, and philosophy, as well as the preservation and translation of ancient texts.The Age of Exploration and Colonialism: The dawn of the modern era was ushered in by the Age of Exploration, as European powers embarked on ambitious voyages of discovery in search of new trade routes and territories. This era of exploration paved the way for the era of colonialism, during which European nations established vast overseas empires, exploiting resources, and reshaping societies across Africa, Asia, and the Americas.<br/>The Enlightenment and the Age of Revolutions: The Enlightenment brought forth a wave of intellectual ferment, challenging traditional authority and promoting ideas of reason, liberty, and progress. This era of enlightenment fueled revolutions in America, France, and Haiti, ushering in an era of political upheaval, nationalism, and the spread of democratic ideals.Industrialization and Global Transformation: The 19th century witnessed the onset of industrialization, as mechanization, urbanization, and capitalist enterprise transformed economies and societies worldwide. The Industrial Revolution fueled unprecedented economic growth, technological innovation, and social change, while also giving rise to new forms of inequality and exploitation. Imperialism, World Wars, and the Cold War: The 20th century was marked by the tumult of imperialism, two devastating world wars, and the ideological conflict of the Cold War. Imperial powers clashed over colonial possessions, leading to global conflicts that reshaped political boundaries, unleashed mass violence, and redefined international relations.<br/>Decolonization and the Emergence of New Nations: The post-World War II era witnessed the unraveling of European empires as colonies across Asia, Africa, and the Caribbean gained independence. This wave of decolonization heralded the emergence of new nation-states, as formerly colonized peoples sought self-determination and freedom from foreign rule.Globalization and the Information Age: The late 20th and early 21st centuries saw the acceleration of globalization, as advances in technology, transportation, and communication knit the world into a tightly interconnected global community. The Information Age brought forth unprecedented access to information, the rise of digital networks, and the proliferation of global media and culture.<br/>Challenges and Opportunities in the 21st Century: As we navigate the complexities of the 21st century, we confront a myriad of challenges, including environmental degradation, economic inequality, political instability, and the rise of new forms of conflict and extremism. Yet, amidst these challenges lie opportunities for collaboration, innovation, and progress, as we strive to build a more equitable, sustainable, and peaceful world for future generations.' ) ;

  const topics = [
    { id: 1, title: 'Foundation', subtopics: ['Ancient Period', 'Medieval Period','Modern Period'] },
    { id: 2, title: 'Area Wise', subtopics: ['Europe', 'Asia', 'Africa','Americas'] },
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
      case 'Ancient Period':
        content = (
          '<span style="font-size: 22px; color: darkblue; margin-left: 30px;">Ancient Period of Global History <br /></span>' +
          'The ancient period represents the earliest stages of human civilization. Here are some key subtopics:' +
          '<br/><span style="font-size: 19px; margin-left:250px;display:block; margin-top:10px; font-weight:bolder;">Ancient Mesopotamia</span>' +
          "<br/>Mesopotamia, located between the Tigris and Euphrates rivers, is often considered the 'cradle of civilization.' It featured the earliest city-states like Sumer, Akkad, and Babylon, along with cuneiform writing and the earliest known legal code, Hammurabi's Code." +
          '<br/><span style="font-size: 19px; margin-left:250px;display:block; margin-top:10px; font-weight:bolder;">Ancient Egypt</span>' +
          "<br/>Ancient Egypt is known for its monumental architecture, such as the pyramids and temples, as well as its complex religion and pharaohs. The Nile River played a crucial role in Egypt's agriculture and culture, and hieroglyphics were developed as a writing system." +
          '<br/><span style="font-size: 19px; margin-left:250px;display:block; margin-top:10px; font-weight:bolder;">Ancient Greece</span>' +
          "<br/>Ancient Greece contributed significantly to philosophy, democracy, and classical literature. It was also the birthplace of the Olympic Games and had a substantial impact on art, architecture, and theater." +
          '<br/><span style="font-size: 19px; margin-left:250px;display:block; margin-top:10px; font-weight:bolder;">Ancient Rome</span>' +
          "<br/>Ancient Rome was a vast empire spreading across Europe, North Africa, and the Middle East. It is known for its engineering achievements like roads and aqueducts, as well as its legal system, which influenced modern law." +
          '<br/><span style="font-size: 19px; margin-left:250px;display:block; margin-top:10px; font-weight:bolder;">Indus Valley Civilization</span>' +
          "<br/>The Indus Valley Civilization, located in present-day Pakistan and northwest India, was one of the world's earliest urban cultures. It featured well-planned cities, advanced drainage systems, and an undeciphered script." +
          '<br/><span style="font-size: 19px; margin-left:250px;display:block; margin-top:10px; font-weight:bolder;">Ancient China</span>' +
          "<br/>Ancient China saw the development of early dynasties like the Shang and Zhou, the creation of Confucianism and Taoism, and significant advancements in metallurgy, silk production, and pottery." +
          '<br/><span style="font-size: 19px; margin-left:250px;display:block; margin-top:10px; font-weight:bolder;">Mesoamerican Civilizations</span>' +
          "<br/>Mesoamerica includes the Maya, Aztec, and Olmec civilizations, known for their impressive architecture, complex calendars, and social structures. The Aztecs and Maya developed writing systems and elaborate religious ceremonies." +
          '<br/><span style="font-size: 19px; margin-left:250px;display:block; margin-top:10px; font-weight:bolder;">Ancient India</span>' +
          "<br/>Ancient India is home to significant developments in religion and philosophy, including Hinduism and Buddhism. Empires like the Maurya and Gupta had sophisticated administrative systems and contributed to art and science." +
          '<br/><span style="font-size: 19px; margin-left:250px;display:block; margin-top:10px; font-weight:bolder;">Ancient Africa</span>' +
          "<br/>Ancient Africa includes ancient Egypt, Nubia, and the Kingdom of Kush. These societies were known for their architectural achievements and advanced knowledge in metallurgy and engineering." +
          '<br/><span style="font-size: 19px; margin-left:250px;display:block; margin-top:10px; font-weight:bolder;">Polynesian Civilizations</span>' +
          "<br/>Polynesian civilizations were skilled navigators and seafarers, creating extensive trade routes across the Pacific. These societies had unique traditions, art, and social structures."
        );
        break;
    
      case 'Medieval Period':
        content = (
          '<span style="font-size: 22px; color: darkgreen; margin-left: 30px;">Medieval Period of Global History <br /></span>' +
          'The medieval period, roughly from the 5th to the late 15th century, includes significant developments across different regions. Here are 10 subtopics to explore:' +
          '<br/><span style="font-size: 19px; margin-left:250px;display:block; margin-top:10px; font-weight:bolder;">Feudalism in Europe</span>' +
          "<br/>Feudalism was the dominant social system in medieval Europe, with lords granting land to vassals in exchange for military service. This structure defined medieval society and governance." +
          '<br/><span style="font-size: 19px; margin-left:250px;display:block; margin-top:10px; font-weight:bolder;">The Byzantine Empire</span>' +
          "<br/>The Byzantine Empire, centered in Constantinople, was the continuation of the Roman Empire in the East. It was known for its rich culture, religious iconography, and significant role in preserving ancient texts." +
          '<br/><span style="font-size: 19px; margin-left:250px;display:block; margin-top:10px; font-weight:bolder;">The Islamic Caliphates</span>' +
          "<br/>The Islamic Caliphates, including the Rashidun, Umayyad, and Abbasid, had a profound impact on the Middle East and North Africa. They were centers of learning and contributed to science, mathematics, and philosophy." +
          '<br/><span style="font-size: 19px; margin-left:250px;display:block; margin-top:10px; font-weight:bolder;">The Crusades</span>' +
          "<br/>The Crusades were a series of religiously motivated military campaigns in the 11th to 13th centuries. They had a lasting impact on Europe and the Middle East, influencing religious and political dynamics." +
          '<br/><span style="font-size: 19px; margin-left:250px;display:block; margin-top:10px; font-weight:bolder;">Medieval China</span>' +
          "<br/>Medieval China included significant dynasties like the Tang and Song. This period was characterized by advancements in art, science, and technology, with inventions like gunpowder and the printing press." +
          '<br/><span style="font-size: 19px; margin-left:250px;display:block; margin-top:10px; font-weight:bolder;">The Mongol Empire</span>' +
          "<br/>The Mongol Empire, established by Genghis Khan, was the largest contiguous empire in history. It connected Asia and Europe through the Silk Road, facilitating trade and cultural exchange." +
          '<br/><span style="font-size: 19px; margin-left:250px;display:block; margin-top:10px; font-weight:bolder;">Medieval India</span>' +
          "<br/>Medieval India included empires like the Gupta and Mughal. This period saw significant developments in art, architecture, and religion, with the spread of Hinduism and Buddhism." +
          '<br/><span style="font-size: 19px; margin-left:250px;display:block; margin-top:10px; font-weight:bolder;">West African Empires</span>' +
          "<br/>West African empires like Mali and Songhai were known for their wealth, driven by the trans-Saharan trade. They had powerful leaders like Mansa Musa and developed advanced systems of governance." +
          '<br/><span style="font-size: 19px; margin-left:250px;display:block; margin-top:10px; font-weight:bolder;">Medieval Japan</span>' +
          "<br/>Medieval Japan saw the rise of the samurai class and the establishment of the shogunate. This period was characterized by feudalism and the spread of Buddhism." +
          '<br/><span style="font-size: 19px; margin-left:250px;display:block; margin-top:10px; font-weight:bolder;">Medieval Europe</span>' +
          "<br/>Medieval Europe was defined by the spread of Christianity, the establishment of medieval kingdoms, and significant cultural and architectural developments. It also saw the emergence of universities and the beginning of the Renaissance."
        );
        break;
    
      case 'Modern Period':
        content = (
          '<span style="font-size: 22px; color:red; margin-left: 30px;">Modern Period of Global History <br /></span>' +
          'The modern period represents a time of significant change, from the late 19th century to the present. Here are 10 key subtopics:');
    
        break;
        case 'Europe':
    content = (
      '<span style="font-size: 22px; color: darkred; margin-left: 30px;">Europe in Global History <br /></span>' +
      'Europe has a rich history that has significantly influenced global development. Here are 10 key subtopics:' +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Ancient Greece</span>' +
      "<br/>Ancient Greece contributed to philosophy, democracy, and classical literature, with notable figures like Socrates, Plato, and Aristotle. It was also the birthplace of the Olympic Games and influenced European art and architecture." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Ancient Rome</span>' +
      "<br/>Ancient Rome built a vast empire, influencing European law, governance, and engineering. Rome's legacy includes roads, aqueducts, and the spread of Christianity, which played a key role in medieval Europe." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Medieval Europe</span>' +
      "<br/>Medieval Europe was characterized by feudalism, the spread of Christianity, and the formation of kingdoms and empires. The Crusades and the Black Death were significant events that shaped the Middle Ages." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">The Renaissance</span>' +
      "<br/>The Renaissance was a period of cultural and intellectual revival in Europe. It saw the emergence of humanism, advancements in art and science, and the exploration of new territories during the Age of Exploration." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">The Reformation</span>' +
      "<br/>The Reformation was a religious movement that challenged the Catholic Church's authority, leading to the rise of Protestantism. This period had a profound impact on European religious and political structures." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">The Enlightenment</span>' +
      "<br/>The Enlightenment was an intellectual movement that emphasized reason and individualism. Thinkers like Voltaire and John Locke advocated for human rights, democracy, and religious freedom, influencing European societies." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">The Industrial Revolution</span>' +
      "<br/>The Industrial Revolution transformed Europe through rapid industrialization and technological advancements. This period marked the rise of factories, steam power, and urbanization, leading to significant social and economic changes." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">World War I</span>' +
      "<br/>World War I (1914–1918) was a major global conflict centered in Europe, leading to significant geopolitical changes and the establishment of the League of Nations. It marked a turning point in European and global history." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">World War II</span>' +
      "<br/>World War II (1939–1945) was a pivotal event that reshaped Europe and the world. It led to the rise and fall of totalitarian regimes, the Holocaust, and the creation of the United Nations to promote peace and cooperation." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">The Cold War</span>' +
      "<br/>The Cold War (mid-20th century to 1991) divided Europe into Eastern and Western blocs, characterized by ideological rivalry between the United States and the Soviet Union. It influenced global politics, leading to significant events like the fall of the Berlin Wall." 
    );
    break;

  case 'Asia':
    content = (
      '<span style="font-size: 22px; color: darkpurple; margin-left: 30px;">Asia in Global History <br /></span>' +
      'Asia is a diverse and expansive region with a rich history. Here are 10 key subtopics that explore Asia\'s global impact:' +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Indus Valley Civilization</span>' +
      "<br/>The Indus Valley Civilization was one of the earliest urban cultures, located in what is now Pakistan and northwest India. It featured well-planned cities, advanced drainage systems, and a script that remains undeciphered." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Ancient China</span>' +
      "<br/>Ancient China saw the development of early dynasties like the Shang and Zhou, with significant advancements in metallurgy, silk production, and pottery. This period also marked the emergence of Confucianism and Taoism." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Medieval China</span>' +
      "<br/>Medieval China included significant dynasties like the Tang and Song, characterized by advancements in art, science, and technology. Innovations like gunpowder and the printing press originated during this period." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">The Mongol Empire</span>' +
      "<br/>The Mongol Empire, established by Genghis Khan, was the largest contiguous empire in history, connecting Asia and Europe through the Silk Road. This empire facilitated cultural exchange and expanded trade networks." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Medieval India</span>' +
      "<br/>Medieval India included the Gupta and Mughal Empires, known for significant contributions to art and architecture. The Mughal Empire was notable for its magnificent structures like the Taj Mahal and its rich cultural heritage." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">The Ottoman Empire</span>' +
      "<br/>The Ottoman Empire, spanning from Southeast Europe to the Middle East, was a major political and cultural force. It influenced regions across Asia and Europe, with a significant impact on global trade and cultural exchange." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Japan\'s Feudal Period</span>' +
      "<br/>Japan's feudal period saw the rise of the samurai class and the establishment of the shogunate. This period was marked by significant cultural developments, such as the spread of Zen Buddhism and the creation of traditional Japanese arts." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Modern China</span>' +
      "<br/>Modern China began with the fall of the Qing Dynasty and the establishment of the People's Republic of China in 1949. It has since become a significant global economic power, playing a crucial role in world politics and trade." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Modern India</span>' +
      "<br/>Modern India gained independence from British rule in 1947, establishing itself as a democratic republic. It has since become a major player in global economics and technology, with a rich cultural and artistic heritage." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">The Middle East</span>' +
      "<br/>The Middle East has a complex history, with ancient civilizations and significant religious developments. It has also experienced major political and social changes, particularly during the 20th century, with events like the Arab Spring and ongoing conflicts."
    );
    break;

  case 'Africa':
    content = (
      '<span style="font-size: 22px; color: darkorange; margin-left: 30px;">Africa in Global History <br /></span>' +
      'Africa is a continent with a rich and diverse history. Here are 10 key subtopics to explore:' +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Ancient Egypt</span>' +
      "<br/>Ancient Egypt is renowned for its monumental architecture, complex religion, and pharaohs. The Nile River played a crucial role in Egypt's development, leading to the construction of pyramids and temples." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">The Kingdom of Kush</span>' +
      "<br/>The Kingdom of Kush, located in what is now Sudan, was a significant ancient African civilization known for its close ties with Egypt and its unique culture and architecture." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Great Zimbabwe</span>' +
      "<br/>Great Zimbabwe was a medieval African city known for its impressive stone structures and complex society. It played a central role in the gold trade and had extensive trade networks." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">West African Empires</span>' +
      "<br/>West African empires like Mali and Songhai were known for their wealth and power, driven by the trans-Saharan trade in gold and salt. Leaders like Mansa Musa and Askia the Great were significant figures in these empires." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">The Swahili Coast</span>' +
      "<br/>The Swahili Coast, located in East Africa, was a hub for trade and cultural exchange. It had a vibrant maritime culture, with cities like Mombasa and Zanzibar serving as key trading centers." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">European Colonization of Africa</span>' +
      "<br/>The European colonization of Africa, known as the Scramble for Africa, dramatically altered the continent's history. It led to the establishment of European colonies and had a significant impact on African societies." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">The Transatlantic Slave Trade</span>' +
      "<br/>The transatlantic slave trade was a dark period in Africa's history, involving the forced transportation of millions of Africans to the Americas. This trade had a profound impact on African societies and shaped global history." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Decolonization of Africa</span>' +
      "<br/>The decolonization of Africa occurred in the mid-20th century, leading to the emergence of independent African nations. This period marked the end of European colonial rule and the beginning of a new era in African history." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Modern Africa</span>' +
      "<br/>Modern Africa is a diverse continent with a growing economy and a rich cultural heritage. Despite ongoing challenges, African nations are playing an increasingly significant role in global politics and economics."
    );
    break;

  case 'Americas':
    content = (
      '<span style="font-size: 22px; color: teal; margin-left: 30px;">The Americas in Global History <br /></span>' +
      'The Americas encompass North and South America, with a diverse range of cultures and historical developments. Here are 10 key subtopics to explore:' +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Mesoamerican Civilizations</span>' +
      "<br/>Mesoamerica includes the Maya, Aztec, and Olmec civilizations, known for their impressive architecture, complex calendars, and social structures. The Aztecs and Maya had elaborate religious ceremonies and writing systems." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Ancient Inca Empire</span>' +
      "<br/>The Inca Empire, located in the Andes region, was the largest empire in pre-Columbian America. It was known for its advanced engineering, with a network of roads and impressive structures like Machu Picchu." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">European Colonization of the Americas</span>' +
      "<br/>European colonization dramatically altered the Americas. Spanish and Portuguese explorers established colonies, leading to significant cultural changes and the decline of indigenous populations due to disease and conflict." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">The American Revolution</span>' +
      "<br/>The American Revolution (1775-1783) marked the beginning of the United States' journey to independence from British rule. It had a profound impact on modern political systems, emphasizing democratic ideals and individual rights." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">The Formation of the United States</span>' +
      "<br/>Following the American Revolution, the United States formed its government with the Constitution, establishing a democratic republic. This period laid the groundwork for the expansion and development of the United States." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Westward Expansion in the United States</span>' +
      "<br/>Westward expansion in the United States during the 19th century led to the displacement of indigenous populations and the growth of American territories. This period also saw the Civil War and the end of slavery." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Latin American Independence Movements</span>' +
      "<br/>Latin America experienced independence movements during the early 19th century, leading to the formation of new nations like Mexico, Brazil, and Argentina. This period marked the end of Spanish and Portuguese colonial rule." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">The Great Depression</span>' +
      "<br/>The Great Depression of the 1930s had a significant impact on the Americas, causing widespread economic hardship and social unrest. This event shaped modern economic policies and influenced global history." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">World War II in the Americas</span>' +
      "<br/>World War II had a significant impact on the Americas, with the United States playing a crucial role in the Allied victory. This period also led to the rise of the United States as a global superpower." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Modern Americas</span>' +
      "<br/>Modern Americas reflect the diverse and dynamic nature of the region. It includes the rise of multiculturalism, technological advancements, and the ongoing influence of the United States in global politics and economics."
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
        <h1 className="page-title">Global History</h1>
        <div className="content">
          
        <div dangerouslySetInnerHTML={{ __html: selectedContent }} />
        </div>
      </div>
    </div>
  );
}

export default GlobalHistory1;



