import petriImage from "../../assets/images/petri3.png";
const LandingContent = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <img src={petriImage} alt="Petri Nykänen" className="w-full lg:w-1/2" />
        <div className="text-center min-w-full bg-white rounded-md border-6 p-6 border-indigo-400">
          <p>
            petri.nykaenen@gmail.com
            <br />
            +358505355193
            <br />
          </p>
        </div>
      </div>
    </>
  );
};

export default LandingContent;
