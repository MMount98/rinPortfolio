import homepageImage from "../Images/homepagePhoto.jpg";

const Home = () => {
  return (
    <div class="ml-24">
      <div className="ml-8 relative w-full h-96 overflow-ellipsis">
        <img src={homepageImage} alt="image of Ash in Car" />
        <div className="absolute top-14 right-14 font-tinos text-white drop-shadow-xl text-right">
          Ash is an author of memoir, essay and poetry. Born and raised in
          Berkeley, CA, the open road is now their closest approximation to
          home. Ash’s work is inspired by their (mis)adventures in fringe
          living, efforts to balance disparate identities, and love of
          psychoanalysis. Their writing has appeared in Cipher Magazine,
          Psychoanalytic Inquiry, and Boulder Poetry Scene. Their essay Healing
          the Healer’s Art received the American Psychoanalytic Association’s
          Undergraduate Essay of the Year Award.
        </div>
        <div className="absolute bottom-14 right-14 font-tinos text-white drop-shadow-xl text-right">
          Ash is also an audio-literary and visual artist. Their first album
          combining spoken word with music and soundscape was released through
          Hello, America Stereo Cassette. They do original pen and watercolor
          illustrations by commission.
        </div>
      </div>
    </div>
  );
};

export default Home;
