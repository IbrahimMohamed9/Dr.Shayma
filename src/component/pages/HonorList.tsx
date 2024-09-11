import SectionHeader from "./../atoms/SectionHeader";
import VolunteerCards from "../organisms/VolunteerCards";

const HonorList = () => {
  const volunteers = [
    {
      name: "سيف الله وائل",
      title: "مصمم",
      image: "https://placehold.co/190x190",
      whatsappNumber: "+387618784",
      mail: "asdf@sdf.sdf",
    },
    {
      name: "سيف الله وائل",
      title: "مصمم",
      image: "https://placehold.co/190x190",
      whatsappNumber: "+387618784",
      mail: "asdf@sdf.sdf",
    },
    {
      name: "سيف الله وائل",
      title: "مصمم",
      image: "https://placehold.co/190x190",
    },
    {
      name: "سيف الله وائل",
      title: "مصمم",
      image: "https://placehold.co/190x190",
      whatsappNumber: "+387618784",
      mail: "asdf@sdf.sdf",
    },
    {
      name: "سيف الله وائل",
      title: "مصمم",
      image: "https://placehold.co/190x190",
      whatsappNumber: "+387618784",
      mail: "asdf@sdf.sdf",
    },
    {
      name: "سيف الله وائل",
      title: "مصمم",
      image: "https://placehold.co/190x190",
      whatsappNumber: "+387618784",
      mail: "asdf@sdf.sdf",
    },
  ];

  return (
    <div className="container my-6">
      <SectionHeader content="لائحة الشرف" className="mr-0 text-center " />
      <p className="text-center text-bold mb-8 text-lg">
        القائمين على هذا العمل مخلصين و لهم جزيل الشكر
      </p>
      <VolunteerCards volunteers={volunteers} />
    </div>
  );
};

export default HonorList;
