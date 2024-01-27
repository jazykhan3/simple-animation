// App.js
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import './App.css';
import './index.css';

function Section({ title, content, index, setSectionInView }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const spring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
  });

  return (
    <animated.div
      ref={index === 0 ? ref : ref}
      className={`mb-8 h-[20rem] w-full flex items-start py-5 p-10  justify-center gap-10 flex-col ${
        index % 2 !== 0 ? 'bg-[#000000] text-white' : ''
      }`}
      style={spring}
      onAnimationEnd={() => {
        if (index < 5 && inView) {
          setSectionInView(index + 1);
        }
      }}
    >
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p>{content}</p>
    </animated.div>
  );
}

function App() {
  const [sectionInView, setSectionInView] = React.useState(0);

  const sections = [
    {
      title: 'Introduction',
      content:
        'Welcome to the #ForwardFartherFaster initiative, a global movement championed by Jimmi, an inspiring 11-year-old with a vision for a better future. This project is not just about celebrating a birthday; it\'s about igniting a lifelong mission for humanity. Our aim is to create a platform where voices from all walks of life can unite to share stories, ideas, and dreams, leveraging the power of AI to craft a brighter tomorrow.',
    },
    {
      title: 'Mission',
      content:
        'As Jimmi steps into his 11th year, he envisions a world where every individual, regardless of age or background, contributes to shaping our future. This initiative is dedicated to collecting diverse human experiences and ideas, using them as the foundation for building a more hopeful, innovative, and inclusive world.',
    },
    {
      title: 'Our Platform',
      content:
        'We are in the process of building an interactive website – a sanctuary for expression and collaboration. This platform will serve as a space for:\n- Sharing personal stories and experiences.\n- Discussing visions for a better future, especially through AI and technology.\n- Offering unfiltered expressions and thoughts about the world as it is and as it could be.',
    },
    {
      title: 'How to Contribute',
      content:
        'Share Your Story: Your journey, ideas, and dreams are vital. Share them on our platform.\nSpread the Word: Help us grow by telling others about the #ForwardFartherFaster initiative.\nEngage with the Community: Participate in discussions, provide feedback, and collaborate with others.\nSupport the Mission: Any form of support, whether it\'s through ideas, volunteering, or moral support, is invaluable.',
    },
    {
      title: 'Join the Movement',
      content:
        'Your participation is what propels this initiative forward. Whether you share a story, spread the word, or simply embrace our mission, you are a crucial part of #ForwardFartherFaster. Together, we can illuminate the path to a future filled with hope, kindness, and innovation.',
    },
    {
      title: "Jimmi's Wish",
      content:
        "As Jimmi turns 11, his wish extends beyond the celebration of a birthday. It's a call to all of us to unite for a common cause – to move forward, reach farther, and race faster towards a future we all believe in.",
    },
  ];

  return (
    <div className="">
      <div className="p-10">
        {sections.map((section, index) => (
          <Section
            key={index}
            title={section.title}
            content={section.content}
            index={index}
            setSectionInView={setSectionInView}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
