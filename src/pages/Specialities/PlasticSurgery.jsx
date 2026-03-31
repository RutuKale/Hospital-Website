import SpecialityBase from "../../pages/Specialities/SpecialityBase";
import plasticSurgeryImg from "../../assets/images/specialities-offer/Plastic-Surgery-about.jpg";
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

export default function PlasticSurgery() {
  return (
    <SpecialityBase
      title="Plastic Surgery"
      aboutTitle="Plastic Surgery Department"
      aboutDescription="This department specializes in reconstructive and cosmetic procedures aimed at restoring form and function. It provides a wide range of services including corrective surgeries for congenital conditions, trauma and burn reconstruction, post-cancer reconstructive procedures, as well as aesthetic treatments such as rhinoplasty, facelifts, and body contouring. The focus is on combining medical expertise with precision and care to enhance both physical appearance and overall well-being."
      aboutImage={plasticSurgeryImg}
      slides={slides}
      backseat={backseat}
      backseatBg={backseatBg}
      img="https://plus.unsplash.com/premium_photo-1682096547754-b2bb5151211a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UGxhc3RpYyUyMFN1cmdlcnl8ZW58MHx8MHx8fDA%3D"
    />
  );
}