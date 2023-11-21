import React from "react";
import homepageImage from "../Images/homepagePhoto.jpg";

const Home = () => {
  return (
    <div className="ml-24">
      <div className="relative w-full h-96 overflow-hidden">
        <img src={homepageImage} alt="image of Ash in Car" className="w-full h-full object-cover" />

        <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 flex justify-between">
          <p className="font-tinos text-white drop-shadow-xl flex-1 mr-2">
            Ash is an author of memoir, essay and poetry. Born and raised in
            Berkeley, CA, the open road is now their closest approximation to
            home. Ash’s work is inspired by their (mis)adventures in fringe
            living, efforts to balance disparate identities, and love of
            psychoanalysis. Their writing has appeared in Cipher Magazine,
            Psychoanalytic Inquiry, and Boulder Poetry Scene. Their essay Healing
            the Healer’s Art received the American Psychoanalytic Association’s
            Undergraduate Essay of the Year Award.
          </p>
          <p className="font-tinos text-white drop-shadow-xl flex-1 ml-2">
            Ash is also an audio-literary and visual artist. Their first album
            combining spoken word with music and soundscape was released through
            Hello, America Stereo Cassette. They do original pen and watercolor
            illustrations by commission.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;