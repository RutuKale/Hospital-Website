import SpecialityBase from "../../pages/Specialities/SpecialityBase";
import nephrologyImg from "../../assets/images/specialities-offer/Nephrology-about.jpg";
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

export default function Nephrology() {
  return (
    <SpecialityBase
      title="Nephrology"
      aboutTitle="Nephrology Department"
      aboutDescription="This department specializes in the diagnosis and treatment of kidney-related diseases and conditions. It provides a wide range of services including management of chronic kidney disease, dialysis support, kidney transplant evaluation, and treatment for conditions such as kidney stones, hypertension, and electrolyte imbalances. The focus is on advanced diagnostics, personalized treatment plans, and improving patients’ kidney health and overall quality of life."
      aboutImage={nephrologyImg}
      slides={slides}
      backseat={backseat}
      backseatBg={backseatBg}
      img="https://images.unsplash.com/photo-1559757175-9e351c9a1301?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE5lcGhyb2xvZ3l8ZW58MHx8MHx8fDA%3D"
    />
  );
}