import React from "react";
import Card from "../writingPortfolio";
import inntymd from "../Images/Inntymd.jpg"
import forVictoria from "../Images/forVictoria.jpg"
import healing from "../Images/healingTheHealersHeart.jpg"
import thearpy from "../Images/thisIsMyTherapy.png"

const writingData = [
  {
    id: 1,
    imageUrl: inntymd,
    link: "https://helloamerica.bandcamp.com/album/ill-never-not-tell-you-my-dreams",
    linkTitle: "Hello America Lit",
    title: "ill never not tell you my dreams",
  },
  {
    id: 2,
    imageUrl: forVictoria,
    link: "https://www.ciphermagazine.com/articles/2016/10/29/for-victoria",
    linkTitle: "Cipher Magazine",
    title: "For Victoria",
  },
  {
    id: 3,
    imageUrl: healing,
    link: "https://www.tandfonline.com/doi/abs/10.1080/07351690.2019.1637666?journalCode=hpsi20",
    linkTitle: "Psychoanalytuc Inquiry",
    title: "Healing the Healer's Art",
  },
  {
    id: 4,
    imageUrl: thearpy,
    link: "https://boulderpoetryscene.com/2022/09/19/this-is-my-therapy-by-rin-hart/",
    linkTitle: "Boulder Poetry Scene",
    title: "This IS My Therapy",
  },
];

const WritingPortfolio = () => {
  return (
    <div className="flex justify-center items-center min-h-screen my-24">
      <div className="grid grid-cols-2  items-center gap-4">
        {writingData.map((cardData) => (
          <Card
            key={cardData.id}
            imageUrl={cardData.imageUrl}
            link={cardData.link}
            linkTitle={cardData.linkTitle}
            title={cardData.title}
          />
        ))}
      </div>
     
    </div>
  );
};

export default WritingPortfolio;
