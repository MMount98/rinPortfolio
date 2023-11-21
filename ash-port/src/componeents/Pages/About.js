import react from "react";
import { Link } from "react-router-dom";
import aboutMe from "../Images/aboutMe.jpg";

const About = () => {
  return (
    <div className="ml-36 m-24">
      <div className="flex justify-around">
        <div className="grid grid-cols-2">
          <p className="font-tinos text-white text-lg w-5/6">
            I've been a social worker, circus artist, amateur skateboarder,
            competitive rock climber, professional route setter, avid
            letter-writer, open-mic regular, and that crazy person who finishes
            their runs by cold plunging into the Northern Pacific. I believe
            that living intentionally, adventurously, unconventionally and
            vulnerably is one of the best things I have done and will always do
            for my art. <br></br> My writing complicates the dear and
            desperately-held narratives we inherit and circulate. I hope my work
            exposes ever more intricate archaeologies of the human psyche, our
            relations with each other and the structures we uphold.<br></br>{" "}
            Poetry, watercolor and illustration are meditative and oftentimes
            spiritual mediums for me. Instead of selling prints of my artwork, I
            do one of a kind commissions. This infuses my creative process with
            personal meaning. I love that my art can give form to someone else's
            story. (Please   
            <Link to="/contact" className="underline hover:no-underline"> contact me </Link> if you'd like to request a
            watercolor illustration.)
          </p>
          <img src={aboutMe} alt="image of Ash Avery" className=" rounded" />
        </div>
      </div>
    </div>
  );
};

export default About;
