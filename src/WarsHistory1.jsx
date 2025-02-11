import React, { useState } from 'react';

import imageSrc from './Screenshot 2024-04-18 000902.png';
import imageSrc1 from './india-map-2019.jpg';
import imageSrc2 from './india-collage-photo.jpg';
import imageSrc3 from './Screenshot 2024-04-17 191248.png';
import imageSrc4 from './Screenshot 2024-04-18 192924.png';
import imageSrc5 from './Screenshot 2024-04-18 192354.png';

function WarsHistory1() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const [selectedContent, setSelectedContent] = useState('The history of warfare is a testament to humanit\'s capacity for both innovation and destruction, with conflicts shaping the course of nations, cultures, and civilizations throughout the ages. From ancient battles fought with spears and swords to modern conflicts waged with advanced technology and global alliances, the story of wars is a complex tapestry of strategy, sacrifice, and consequences. Here, we explore ten expansive paragraphs delving into different aspects of wars history.<br/>Ancient Warfare and Empires: The annals of ancient warfare are replete with legendary battles and conquests that laid the foundation for the rise and fall of empires. From the epic clashes of ancient Mesopotamia and Egypt to the conquests of Alexander the Great and the Roman legions, warfare played a central role in shaping the geopolitical landscape of the ancient world. Armies marched across vast expanses, sieging cities, and engaging in decisive encounters that determined the fate of kingdoms and civilizations.Medieval Conflict and Feudal Warfare: The Middle Ages witnessed a tumultuous era of feudal warfare, characterized by knights, castles, and feudal lords vying for power and territory. From the Crusades to the Hundred Years War, medieval Europe was engulfed in a series of conflicts driven by religious fervor, dynastic ambitions, and territorial disputes. Siege warfare, cavalry charges, and the code of chivalry defined the tactics and culture of medieval warfare.<br/>Renaissance Warfare and Gunpowder Empires: The Renaissance brought forth a revolution in military technology with the advent of gunpowder weapons, transforming the nature of warfare and the balance of power in Europe and beyond. The rise of gunpowder empires like the Ottomans, Safavids, and Mughals heralded a new era of imperial expansion and conflict, as muskets, cannons, and artillery reshaped the battlefield and strategies of warfare.<br/>Early Modern Wars and Colonial Expansion: The early modern period witnessed the rise of colonial powers and the spread of European imperialism through conquest and colonization. Wars of succession, religious conflicts, and colonial rivalries engulfed Europe, culminating in global conflicts like the Seven Years\' War and the Napoleonic Wars, which reshaped political boundaries and fueled the rise of empires.The Age of Revolutions and Nationalism: The 19th century was marked by the spread of revolutionary ideals and the rise of nationalism, leading to a series of conflicts that redrew the map of Europe and beyond. The French Revolution, American Civil War, and the unification of Italy and Germany were pivotal moments in the history of warfare, as armies mobilized in the name of liberty, equality, and national identity. World War I and the Dawn of Modern Warfare: The 20th century ushered in a new era of total war with the outbreak of World War I, a catastrophic conflict that engulfed the world in unprecedented violence and destruction. Trench warfare, chemical weapons, and industrialized warfare defined the brutal nature of the conflict, leading to millions of casualties and the collapse of empires.World War II and the Global Conflagration: The Second World War emerged as the deadliest conflict in human history, engulfing the world in a global conflagration that reshaped the geopolitical landscape and unleashed mass devastation. From the battlefields of Europe to the Pacific theater, armies clashed in a titanic struggle between the forces of democracy and totalitarianism, leading to the horrors of genocide, atomic warfare, and the rise of the Cold War.<br/>The Cold War and Proxy Conflicts: The post-World War II era was characterized by the ideological confrontation of the Cold War, as the United States and the Soviet Union competed for global supremacy through proxy conflicts and strategic alliances. The Korean War, Vietnam War, and numerous other conflicts served as battlegrounds for superpower rivalry, shaping the course of global politics and international relations. Modern Warfare and Asymmetric Conflict: The 21st century has witnessed the evolution of warfare into new forms, characterized by asymmetric conflicts, terrorism, and the proliferation of unconventional weapons. From the War on Terror to cyber warfare and hybrid warfare, modern conflicts are fought on multiple fronts, blurring the lines between state and non-state actors and challenging traditional notions of warfare and security.<br/>Challenges and Prospects for Peace: As we confront the complexities of modern warfare and its human toll, there is an urgent need for global cooperation, diplomacy, and conflict resolution to address the root causes of conflict and promote lasting peace. From disarmament and arms control to peacekeeping and reconciliation, the quest for peace requires concerted efforts to build bridges, foster dialogue, and uphold the principles of justice, equality, and human rights in a world striving for a future free from the ravages of war.')
  const topics = [
    { id: 1, title: 'BY Time Period', subtopics: ['Ancient Wars', 'Medieval Wars','Modern Wars'] },
    { id: 2, title: 'World Wars', subtopics: ['World War I', 'World War II', 'World War III'] },
    // Add more topics as needed
  ];

  const handleTopicClick = (topicId) => {
    setSelectedTopic(topicId);
    setSelectedSubtopic(null); // Reset selectedSubtopic when a new topic is clicked
  };

  const handleSubtopicClick = (subtopic) => {
    setSelectedSubtopic(subtopic);
    let content;
    switch (subtopic) {
      case 'Ancient Wars':
        content = (
          '<span style="font-size: 22px; color: darkblue; margin-left: 30px;">Ancient Wars <br /></span>' +
          'Ancient wars represent some of the earliest large-scale conflicts in history, often involving early civilizations and empires. Here are some notable ancient wars:' +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Trojan War</span>' +
          "<br/>The Trojan War is a legendary conflict between the Greeks and the city of Troy, famously chronicled in Homer's 'Iliad.' Though its historicity is debated, it remains a foundational story in Western culture." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Greco-Persian Wars</span>' +
          "<br/>The Greco-Persian Wars were a series of conflicts between Greek city-states and the Persian Empire, including significant battles like Marathon and Thermopylae. These wars established Greek dominance in the region." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Peloponnesian War</span>' +
          "<br/>The Peloponnesian War was a major conflict between Athens and Sparta, lasting over two decades. It led to significant shifts in Greek politics and weakened Greek city-states, paving the way for Macedonian dominance." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Punic Wars</span>' +
          "<br/>The Punic Wars were a series of three wars between Rome and Carthage, with battles across the Mediterranean. They ended with the destruction of Carthage and the expansion of the Roman Empire."
        );
        break;
    
      case 'Medieval Wars':
        content = (
          '<span style="font-size: 22px; color: darkgreen; margin-left: 30px;">Medieval Wars <br /></span>' +
          'Medieval wars span from the 5th to the late 15th century, involving conflicts between kingdoms, empires, and religious groups. Here are some key medieval wars:' +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Crusades</span>' +
          "<br/>The Crusades were a series of religious wars initiated by European Christians to reclaim the Holy Land from Muslim rule. They had a significant impact on Europe and the Middle East, influencing religious and political dynamics." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Hundred Years\' War</span>' +
          "<br/>The Hundred Years' War was a prolonged conflict between England and France over control of the French crown. It is known for notable battles like Agincourt and the role of Joan of Arc." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Wars of the Roses</span>' +
          "<br/>The Wars of the Roses were civil wars in England between the houses of Lancaster and York. These wars resulted in the establishment of the Tudor dynasty and significantly influenced English history." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Byzantine-Sassanid Wars</span>' +
          "<br/>The Byzantine-Sassanid Wars were a series of conflicts between the Byzantine Empire and the Sassanid Persian Empire. They significantly affected the Mediterranean region and weakened both empires." 
        );
        break;
    
      case 'Modern Wars':
        content = (
          '<span style="font-size: 22px; color:red; margin-left: 30px;">Modern Wars <br /></span>' +
          'Modern wars span from the late 19th century to the present, reflecting significant changes in technology, politics, and global dynamics. Here are some notable modern wars:' +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">World War I</span>' +
          "<br/>World War I (1914–1918) was a global conflict involving European powers and other nations. Known for trench warfare and significant casualties, it led to major political changes and the Treaty of Versailles." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">World War II</span>' +
          "<br/>World War II (1939–1945) was the largest conflict in history, involving the Axis and Allied powers. It resulted in profound changes in world politics, leading to the establishment of the United Nations." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Korean War</span>' +
          "<br/>The Korean War (1950–1953) was a conflict between North Korea and South Korea, with significant involvement from the United States and China. It resulted in a divided Korean Peninsula." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Vietnam War</span>' +
          "<br/>The Vietnam War (1955–1975) was a protracted conflict involving the United States and other nations in Vietnam, with significant political and social repercussions." 
        );
        break;
    
      case 'World War I':
        content = (
          '<span style="font-size: 22px; color: blue; margin-left: 30px;">World War I <br /></span>' +
          'World War I, also known as the Great War, was a global conflict from 1914 to 1918. It involved major European powers and other nations, with significant political and social changes. The war was characterized by trench warfare, high casualties, and new technologies like tanks and aircraft.' +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Causes of World War I</span>' +
          "<br/>World War I was caused by a complex mix of factors, including militarism, alliances, imperialism, and nationalism. The assassination of Archduke Franz Ferdinand of Austria in 1914 triggered the conflict, leading to a rapid escalation." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Major Battles of World War I</span>' +
          "<br/>World War I saw significant battles like the Battle of the Somme, Verdun, and Gallipoli. These battles were marked by heavy casualties and strategic importance, shaping the course of the war." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">End of World War I</span>' +
          "<br/>The war ended in 1918 with the signing of the Armistice, leading to the Treaty of Versailles in 1919. The treaty imposed harsh terms on Germany and contributed to future geopolitical tensions." 
        );
        break;
    
      case 'World War II':
        content = (
          '<span style="font-size: 22px; color: darkgreen; margin-left: 30px;">World War II <br /></span>' +
          'World War II (1939–1945) was the most extensive and destructive conflict in history, involving the Axis and Allied powers. It had profound consequences for global politics, leading to the emergence of the Cold War and the creation of the United Nations.' +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Causes of World War II</span>' +
          "<br/>World War II was caused by unresolved tensions from World War I, the rise of totalitarian regimes in Germany and Italy, and expansionist policies. The war began with Germany's invasion of Poland in 1939." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Major Battles of World War II</span>' +
          "<br/>World War II featured significant battles like the Battle of Stalingrad, D-Day, and the Battle of Midway. These battles were turning points in the war, with a lasting impact on global politics." +
          '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">End of World War II</span>' +
          "<br/>World War II ended in 1945 with the unconditional surrender of Germany and Japan. The dropping of atomic bombs on Hiroshima ")
break;    
case 'World War III':
  content = (
      '<span style="font-size: 22px; color: darkred; margin-left: 30px;">World War III <br /></span>' +
      'World War III is a term used to describe a hypothetical global conflict that could involve major world powers and result in widespread devastation. Although there has never been a World War III, the concept has been explored in literature, movies, and speculative scenarios. Here are some key considerations when discussing the possibility of a future global war:' +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Potential Causes of World War III</span>' +
      "<br/>The causes of a potential World War III could be similar to those of previous world wars, including geopolitical tensions, territorial disputes, economic competition, or ideological conflicts. In a modern context, factors like cyberwarfare, nuclear proliferation, and resource scarcity could also play significant roles." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Impact of World War III</span>' +
      "<br/>A hypothetical World War III would likely have a devastating impact on the global population and environment. With the potential use of nuclear weapons and other advanced technologies, the consequences could be catastrophic, affecting large populations and leading to long-term environmental damage." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Efforts to Prevent World War III</span>' +
      "<br/>Many international efforts aim to prevent a future global conflict, including diplomacy, international treaties, and conflict resolution mechanisms. Organizations like the United Nations work to maintain global peace and security, with the goal of avoiding large-scale wars." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Popular Culture and World War III</span>' +
      "<br/>World War III has been a popular subject in science fiction, dystopian literature, and movies. These portrayals often explore the potential outcomes of a future global conflict and the impact on human society, serving as cautionary tales." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">The Role of Technology in World War III</span>' +
      "<br/>Technological advancements, such as artificial intelligence, cyberwarfare, and autonomous weapons, could play significant roles in a future global conflict. The use of these technologies could change the nature of warfare, making it more complex and difficult to control." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Humanitarian Impact of World War III</span>' +
      "<br/>The humanitarian impact of a hypothetical World War III could be immense, with significant loss of life, mass displacement, and widespread suffering. International humanitarian organizations would play a crucial role in addressing the aftermath of such a conflict." +
      '<br/><span style="font-size: 19px; margin-left:250px; display:block; margin-top:10px; font-weight:bolder;">Global Diplomacy and World War III</span>' +
      "<br/>Diplomatic efforts and international agreements are crucial in preventing large-scale conflicts. The role of global diplomacy in preventing a World War III involves addressing underlying causes, promoting dialogue, and building international coalitions for peace."
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
        <h1 className="page-title">Wars History</h1>
        <div className="content">
          
        <div dangerouslySetInnerHTML={{ __html: selectedContent }} />
        </div>
      </div>
    </div>
  );
}

export default WarsHistory1;



