import petriImage from "../../assets/images/petri3.png";
import { Button } from "../ui/button";
const LandingContent = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <img src={petriImage} alt="Petri Nykänen" className="w-1/2" />
        <div className="w-full text-center bg-white rounded-md border-6 p-6 border-indigo-400">
          <p>
            petri.nykaenen@gmail.com
            <br />
            +358505355193
            <br />
            <Button variant={"destructive"}  className="">
              Contact
            </Button>
          </p>
        </div>
      </div>
    </>
  );
};

export default LandingContent;
