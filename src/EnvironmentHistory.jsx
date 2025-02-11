import React, { useState } from 'react';

import imageSrc from './Screenshot 2024-04-18 000902.png';
import imageSrc1 from './india-map-2019.jpg';
import imageSrc2 from './india-collage-photo.jpg';
import imageSrc3 from './Screenshot 2024-04-17 191248.png';
import imageSrc4 from './Screenshot 2024-04-18 192924.png';
import imageSrc5 from './Screenshot 2024-04-18 192354.png';

function EnvirnmentHistory() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const [selectedContent, setSelectedContent] = useState('Ancient Views of Nature and the Environment: Throughout history, humans have interacted with the natural world in diverse ways, shaping and being shaped by their environments. From hunter-gatherer societies to early agricultural civilizations, ancient peoples developed a range of beliefs, practices, and technologies to adapt to and exploit their surroundings, leaving traces of their interactions in the archaeological record.Medieval Landscapes and Human Impact: The Middle Ages witnessed a dynamic interplay between humans and the environment, as medieval societies transformed landscapes through agriculture, deforestation, and urbanization. From the manorial system of feudal estates to the rise of medieval cities and trade networks, human activities left indelible marks on the natural world, shaping ecosystems and altering the course of rivers and forests.<br/>Early Modern Encounters and Environmental Consequences: The early modern period brought profound changes to the natural environment through exploration, colonization, and the spread of capitalism. From the Columbian Exchange to the global trade in commodities like sugar, spices, and timber, European expansion had far-reaching ecological consequences, leading to deforestation, species extinction, and the disruption of indigenous lifeways.<br/> Industrialization and the Anthropocene: The Industrial Revolution of the 18th and 19th centuries marked a watershed moment in human history, as mechanization, urbanization, and the burning of fossil fuels unleashed unprecedented levels of pollution and environmental degradation. From the smog-choked cities of the Industrial Age to the ravaged landscapes of coal mines and factory towns, industrialization transformed the planet and heralded the onset of the Anthropocene epoch.Environmental Movements and Conservation Efforts: The 20th century witnessed the emergence of environmental movements and conservation efforts aimed at protecting natural resources, preserving biodiversity, and mitigating the impacts of human activity on the planet. From the establishment of national parks and wildlife reserves to the rise of grassroots activism and global campaigns for sustainability, environmentalism became a defining feature of modern society.Globalization and Ecological Crisis: The process of globalization in the 21st century has intensified environmental challenges on a global scale, from climate change and habitat destruction to pollution and resource depletion. As human populations grow and economies expand, the pressures on natural ecosystems and the climate continue to escalate, raising urgent questions about the future of life on Earth and the need for sustainable development.<br/> Indigenous Knowledge and Environmental Stewardship: Indigenous peoples around the world have long been stewards of the land, drawing on traditional knowledge and cultural practices to sustainably manage natural resources and maintain ecological balance. From indigenous land rights and conservation initiatives to indigenous-led movements for environmental justice and climate action, indigenous voices play a vital role in shaping the discourse on environmental protection and sustainability.<br/>Technological Solutions and Green Innovations: As we confront the challenges of climate change and environmental degradation, technological solutions and green innovations offer promising avenues for addressing the root causes of environmental crisis and transitioning to a more sustainable future. From renewable energy technologies and green infrastructure to sustainable agriculture and circular economy initiatives, innovation and ingenuity hold the key to mitigating the impacts of human activity on the planet.Policy Responses and International Cooperation: Addressing global environmental challenges requires coordinated action and international cooperation at the highest levels of government and society. From international agreements like the Paris Agreement on climate change to regional initiatives and multilateral partnerships, policymakers, scientists, and activists are working together to forge consensus on environmental protection and sustainable development goals.<br/>The Future of Environmental Sustainability: As we stand at a critical juncture in human history, the future of environmental sustainability hinges on our ability to reconcile human needs with the health of the planet and its ecosystems. From adopting sustainable lifestyles and promoting green technologies to fostering resilience and adaptation in the face of climate change, the choices we make today will shape the fate of future generations and the health of the Earth for centuries to come.')
  const topics = [
    { id: 1, title: 'BY Time Period', subtopics: ['Geological Time Periods', 'Human Historical Periods','Ecological Paradigms'] },
    { id: 2, title: 'Interaction', subtopics: ['Urbanization and Industrialization', 'Colonialism and Imperialism', 'Climate Change and Globalization'] },
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
      case 'Geological Time Periods':
        content = (
          '<span style="font-size: 22px; color: darkblue; margin-left: 30px;">Geological Time Periods <br /></span>' +
          'Geological time periods represent significant divisions in Earth’s history, characterized by major geological and biological events. Here are 10 subtopics within geological time periods:' +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Precambrian Eon</span>' +
          "<br/>The Precambrian spans from Earth's formation about 4.5 billion years ago to the start of the Cambrian Period. It includes the Hadean, Archean, and Proterozoic eons, marking the development of early life and the formation of Earth's crust." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Paleozoic Era</span>' +
          "<br/>The Paleozoic Era (541–252 million years ago) encompasses major periods like the Cambrian, Ordovician, Silurian, Devonian, Carboniferous, and Permian. It saw the development of early life forms, plants, fish, and amphibians." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Mesozoic Era</span>' +
          "<br/>The Mesozoic Era (252–66 million years ago) is known as the Age of Dinosaurs. It includes the Triassic, Jurassic, and Cretaceous periods, marked by the dominance of reptiles and the emergence of birds and flowering plants." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Cenozoic Era</span>' +
          "<br/>The Cenozoic Era (66 million years ago to present) is known as the Age of Mammals. It includes periods like the Paleogene, Neogene, and Quaternary, seeing the rise of mammals, primates, and eventually humans." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Cambrian Period</span>' +
          "<br/>The Cambrian Period is notable for the Cambrian Explosion, a rapid diversification of life forms. It marks the start of the Phanerozoic Eon, with significant development in marine life." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Permian Period</span>' +
          "<br/>The Permian Period ends the Paleozoic Era, with a diverse range of reptiles and the first conifers. It concludes with the largest mass extinction in Earth's history, paving the way for the Mesozoic Era." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Cretaceous Period</span>' +
          "<br/>The Cretaceous Period is the final period of the Mesozoic Era. It saw the diversification of dinosaurs and the emergence of flowering plants, concluding with the mass extinction that ended the age of dinosaurs." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Quaternary Period</span>' +
          "<br/>The Quaternary Period is the final period of the Cenozoic Era, marked by the development of humans and the last Ice Age. It includes epochs like the Pleistocene and Holocene, representing the recent history of Earth." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Holocene Epoch</span>' +
          "<br/>The Holocene Epoch is the current geological epoch, starting about 11,700 years ago. It encompasses the rise of human civilizations and modern history, with significant environmental changes due to human activity." 
        );
        break;
    
      case 'Human Historical Periods':
        content = (
          '<span style="font-size: 22px; color: darkgreen; margin-left: 30px;">Human Historical Periods <br /></span>' +
          'Human historical periods represent significant divisions in human history, marked by major cultural, social, and technological changes. Here are 10 subtopics that explore human historical periods:' +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Stone Age</span>' +
          "<br/>The Stone Age represents the earliest period of human history, characterized by the use of stone tools. It includes the Paleolithic, Mesolithic, and Neolithic periods, with the development of early human societies." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Bronze Age</span>' +
          "<br/>The Bronze Age is marked by the development of bronze tools and the emergence of early civilizations. It includes the rise of ancient Mesopotamia, Egypt, and the Indus Valley Civilization." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Iron Age</span>' +
          "<br/>The Iron Age represents the period when iron tools and weapons became widespread. It includes the development of ancient Greece and Rome, leading to significant cultural and technological advancements." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Classical Period</span>' +
          "<br/>The Classical Period encompasses ancient Greek and Roman civilizations, characterized by major contributions to philosophy, science, and governance. It was a time of significant cultural achievements." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Medieval Period</span>' +
          "<br/>The Medieval Period spans from the fall of the Roman Empire to the beginning of the Renaissance. It is marked by the rise of feudalism, the spread of Christianity, and significant cultural developments in Europe." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Renaissance Period</span>' +
          "<br/>The Renaissance Period marks a revival of interest in classical learning and art. It was a time of significant cultural and intellectual advancements, leading to the Age of Exploration." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Enlightenment Period</span>' +
          "<br/>The Enlightenment Period emphasized reason and scientific inquiry, leading to significant developments in philosophy, science, and governance. It influenced the formation of modern democratic ideals." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Industrial Revolution</span>' +
          "<br/>The Industrial Revolution transformed societies with technological advancements and industrialization. It led to the growth of factories, urbanization, and significant social changes." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Modern Period</span>' +
          "<br/>The Modern Period spans from the late 19th century to the present, characterized by rapid technological advancements and significant cultural changes. It includes major events like the World Wars and the rise of globalization." 
        );
        break;
    
      case 'Ecological Paradigms':
        content = (
          '<span style="font-size: 22px; color: darkpurple; margin-left: 30px;">Ecological Paradigms <br /></span>' +
          'Ecological paradigms represent key shifts in ecological thinking and the study of ecosystems, biodiversity, and sustainability. Here are 10 subtopics that explore ecological paradigms:' +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Ecosystem Dynamics</span>' +
          "<br/>Ecosystem dynamics focus on the study of interactions among organisms and their environment, exploring concepts like food webs, trophic levels, and nutrient cycling." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Biodiversity and Conservation</span>' +
          "<br/>Biodiversity refers to the variety of life within ecosystems, while conservation involves efforts to protect and preserve it. It includes the study of endangered species and habitat conservation." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Sustainability and Ecology</span>' +
          "<br/>Sustainability in ecology emphasizes balancing human activities with environmental health. It includes practices like sustainable agriculture, renewable energy, and ecological restoration." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Population Ecology</span>' +
          "<br/>Population ecology studies the dynamics of species populations within ecosystems, exploring concepts like population growth, carrying capacity, and predator-prey relationships." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Ecological Succession</span>' +
          "<br/>Ecological succession describes how ecosystems change over time, leading to different stages of development. It includes primary succession and secondary succession." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Invasive Species</span>' +
          "<br/>Invasive species are non-native organisms that disrupt ecosystems by outcompeting native species. This topic explores the impact of invasive species on biodiversity and ecosystem stability." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Climate Change and Ecology</span>' +
          "<br/>Climate change has a significant impact on ecosystems, affecting species distributions, weather patterns, and ocean temperatures. Ecological paradigms address these changes and their implications for biodiversity." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Human Impact on Ecosystems</span>' +
          "<br/>Human activities have a profound impact on ecosystems, leading to habitat destruction, pollution, and resource depletion. This topic explores the consequences of human impact and the need for sustainable practices." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Ecological Restoration</span>' +
          "<br/>Ecological restoration involves efforts to restore damaged or degraded ecosystems, with practices like reforestation, wetland restoration, and reintroducing native species." 
        );
        break;
    
      case 'Urbanization and Industrialization':
        content = (
          '<span style="font-size: 22px; color:red; margin-left: 30px;">Urbanization and Industrialization <br /></span>' +
          'Urbanization and industrialization have transformed societies, leading to significant technological advancements and social changes. Here are 10 subtopics related to urbanization and industrialization:' +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Industrial Revolution</span>' +
          "<br/>The Industrial Revolution marks the transition to industrialized societies, with significant technological advancements in manufacturing, transportation, and industry. It had a profound impact on modern history." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Urbanization and the Growth of Cities</span>' +
          "<br/>Urbanization refers to the growth and expansion of cities, closely tied to industrialization. It involves increased population density, new infrastructure, and changing social dynamics." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Impact of Urbanization</span>' +
          "<br/>Urbanization has both positive and negative effects. While it contributes to economic growth and cultural development, it also creates challenges like overcrowding, pollution, and resource depletion." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Transportation and Infrastructure</span>' +
          "<br/>Transportation and infrastructure are key elements of industrialization and urbanization. It involves the development of railroads, bridges, and roads to support urban growth." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Environmental Impact of Industrialization</span>' +
          "<br/>Industrialization has a significant environmental impact, leading to pollution, deforestation, and resource depletion. Addressing these issues requires sustainable practices and environmental regulations." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Industrialization and Labor</span>' +
          "<br/>Industrialization transformed labor, leading to the growth of factories and new working conditions. It also contributed to the rise of labor movements and efforts to improve worker rights." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Cultural Impact of Urbanization</span>' +
          "<br/>Urbanization has a significant cultural impact, leading to the rise of multicultural cities and new forms of art, music, and entertainment. It also contributes to the blending of different cultures." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Urban Planning and Sustainable Development</span>' +
          "<br/>Urban planning focuses on creating sustainable and livable cities, addressing transportation, housing, and environmental sustainability. It seeks to ensure a high quality of life for urban residents." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">The Future of Urbanization</span>' +
          "<br/>The future of urbanization explores emerging trends like smart cities, advanced infrastructure, and the integration of technology into urban environments. It involves balancing urban growth with sustainability and social needs." 
        );
        break;
    
      case 'Colonialism and Imperialism':
        content = (
          '<span style="font-size: 22px; color: darkorange; margin-left: 30px;">Colonialism and Imperialism <br /></span>' +
          'Colonialism and imperialism represent key historical processes that have significantly shaped societies and cultures. Here are 10 subtopics related to colonialism and imperialism:' +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">European Colonialism</span>' +
          "<br/>European colonialism refers to the expansion of European powers into other regions, leading to the establishment of colonies. This period had a significant impact on global history, often involving exploitation and cultural suppression." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">British Empire</span>' +
          "<br/>The British Empire was one of the largest empires in history, with colonies spanning the globe. It had a profound impact on the cultures and societies it colonized, leading to significant changes in governance and social structures." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">French Colonialism</span>' +
          "<br/>French colonialism played a significant role in European expansion, with colonies in Africa, Asia, and the Americas. It contributed to the spread of French culture and language but also led to exploitation and cultural suppression." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Spanish and Portuguese Colonization</span>' +
          "<br/>The Spanish and Portuguese empires were among the first to establish colonies in the Americas and other regions. They had a significant impact on the cultures and societies they colonized, often leading to cultural suppression and exploitation." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Dutch and Belgian Colonialism</span>' +
          "<br/>The Dutch and Belgian empires also established colonies, particularly in Asia and Africa. Dutch colonialism played a key role in Southeast Asia, while Belgian colonialism had a significant impact in Central Africa." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Effects of Colonialism</span>' +
          "<br/>The effects of colonialism include both positive and negative impacts. While it contributed to economic development and cultural exchange, it also led to exploitation, cultural suppression, and lasting inequalities." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Decolonization</span>' +
          "<br/>Decolonization refers to the process by which colonies gained independence from colonial powers. It involved significant struggles for independence and the establishment of new nations and governments." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Neo-colonialism</span>' +
          "<br/>Neo-colonialism refers to modern forms of colonialism, where former colonial powers maintain influence over former colonies through economic or political means. This topic explores the ongoing impact of colonialism in modern times." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Postcolonial Studies</span>' +
          "<br/>Postcolonial studies explore the impact of colonialism on literature, art, and culture. It involves the examination of colonial narratives and the exploration of cultural identities in the postcolonial context." 
        );
        break;
    
      case 'Climate Change and Globalization':
        content = (
          '<span style="font-size: 22px; color: darkred; margin-left: 30px;">Climate Change and Globalization <br /></span>' +
          'Climate change and globalization are significant factors influencing modern societies and the environment. Here are 10 subtopics related to climate change and globalization:' +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Climate Change Causes</span>' +
          "<br/>Climate change is driven by factors like greenhouse gas emissions, deforestation, and industrialization. It explores the primary causes and their impact on the environment." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Climate Change Effects</span>' +
          "<br/>The effects of climate change include rising temperatures, changing weather patterns, and the melting of polar ice. It has significant impacts on ecosystems and human societies." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Globalization and Trade</span>' +
          "<br/>Globalization involves the increased interconnectedness of global markets and trade. It has led to the expansion of international commerce and cultural exchange, but also contributes to environmental challenges." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Climate Change Mitigation</span>' +
          "<br/>Climate change mitigation involves efforts to reduce greenhouse gas emissions and transition to sustainable practices. It includes renewable energy, reforestation, and carbon capture." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Globalization and Culture</span>' +
          "<br/>Globalization has a significant impact on culture, leading to the blending of different traditions and the spread of global cultural influences. It contributes to multiculturalism and the rise of global pop culture." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Climate Adaptation</span>' +
          "<br/>Climate adaptation involves efforts to adapt to changing environmental conditions due to climate change. It includes developing resilient infrastructure and implementing sustainable practices." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Globalization and Technology</span>' +
          "<br/>Globalization has led to significant technological advancements and the global spread of technology. It involves the interconnectedness of information, communication, and business on a global scale." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Climate Change and Public Policy</span>' +
          "<br/>Public policy plays a crucial role in addressing climate change, focusing on environmental regulations, international agreements, and sustainability initiatives. It involves efforts to mitigate climate change and promote environmental protection." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Social Impact of Globalization</span>' +
          "<br/>Globalization has a significant social impact, affecting labor markets, cultural identities, and social structures. It has led to both positive and negative effects, influencing how societies interact and evolve." 
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
        <h1 className="page-title">Environment History</h1>
        <div className="content">
          
        <div dangerouslySetInnerHTML={{ __html: selectedContent }} />
        </div>
      </div>
    </div>
  );
}

export default EnvirnmentHistory;




