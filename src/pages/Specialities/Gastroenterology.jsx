import SpecialityBase from "../../pages/Specialities/SpecialityBase";
import gastroenterologyImg from "../../assets/images/specialities-offer/Gastroenterology-about.jpg";
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

export default function Gastroenterology() {
  return (
    <SpecialityBase
      title="Gastroenterology"
      aboutTitle="Gastroenterology Department"
      aboutDescription="This department specializes in the diagnosis and treatment of disorders related to the digestive system, including the esophagus, stomach, intestines, liver, pancreas, and gallbladder. It provides a wide range of services such as endoscopic procedures, management of gastrointestinal diseases, liver disease care, and treatment for conditions like acid reflux, ulcers, hepatitis, and inflammatory bowel disease. The focus is on accurate diagnosis, advanced treatment options, and improving patients’ digestive health and quality of life."
      aboutImage={gastroenterologyImg}
      slides={slides}
      backseat={backseat}
      backseatBg={backseatBg}
      img="https://plus.unsplash.com/premium_photo-1723108858066-66b1bd834675?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R2FzdHJvZW50ZXJvbG9neXxlbnwwfHwwfHx8MA%3D%3D"
    />
  );
}