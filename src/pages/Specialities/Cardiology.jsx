import SpecialityBase from "../../pages/Specialities/SpecialityBase";
import cardiologyImg from "../../assets/images/specialities-offer/Cardiology-about.jpg";
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

export default function Cardiology() {
  return (
    <SpecialityBase
      title="Cardiology"
      aboutTitle="Cardiology Department"
      aboutDescription="This department specializes in the diagnosis, treatment, and management of heart-related conditions. It provides a wide range of services including ECG, echocardiography, stress tests, management of hypertension, coronary artery disease, heart failure, and interventional procedures. The focus is on early detection, personalized treatment plans, and comprehensive cardiac care to improve heart health and overall quality of life."
      aboutImage={cardiologyImg}
      slides={slides}
      backseat={backseat}
      backseatBg={backseatBg}
      img="https://images.unsplash.com/photo-1628348070889-cb656235b4eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2FyZGlvbG9neXxlbnwwfHwwfHx8MA%3D%3D"
    />
  );
}