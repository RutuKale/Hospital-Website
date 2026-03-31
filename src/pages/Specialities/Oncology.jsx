import SpecialityBase from "../../pages/Specialities/SpecialityBase";
import oncologyImg from "../../assets/images/specialities-offer/oncology-about.jpg";
import backseat from "../../assets/images/specialities-offer/backseat-banner.png";
import backseatBg from "../../assets/icons/backseat-banner.svg";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800",
    heading: "Women’s Wellness Care",
    description: "Comprehensive preventive care for women of all ages.",
    name: "Dr. Radhika Jain",
    title: "Senior Consultant",
    specialization: "Gynaecology & Obstetrics",
  },
  {
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800",
    heading: "Pregnancy & Maternity",
    description: "Expert care for prenatal, antenatal and postnatal stages.",
    name: "Dr. Nikhil Pawar",
    title: "Consultant",
    specialization: "High Risk Pregnancy",
  },
  {
    image: "https://images.unsplash.com/photo-1712215544003-af10130f8eb3?w=800",
    heading: "Advanced Gynaecological Care",
    description: "Modern diagnosis and minimally invasive procedures.",
    name: "Dr. Anjali Mehta",
    title: "Lead Specialist",
    specialization: "Minimally Invasive Surgery",
  },
];

export default function Oncology() {
  return (
    <SpecialityBase
      title="Oncology"
      aboutTitle="Oncology Department"
      aboutDescription="This department specializes in the diagnosis, treatment, and management of cancer in patients of all ages. It provides a comprehensive range of services including preventive screenings, advanced diagnostic tests, chemotherapy, radiation therapy, and supportive care for patients undergoing treatment. The focus is on early detection, personalized treatment plans, and holistic support to improve patient outcomes and quality of life."
      aboutImage={oncologyImg}
      slides={slides}
      backseat={backseat}
      backseatBg={backseatBg}
      img="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T25jb2xvZ3l8ZW58MHx8MHx8fDA%3D"
    />
  );
}