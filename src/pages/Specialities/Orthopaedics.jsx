import SpecialityBase from "../../pages/Specialities/SpecialityBase";
import orthopaedicsImg from "../../assets/images/specialities-offer/Orthopaedics-about.jpg";
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

export default function Orthopaedics() {
  return (
    <SpecialityBase
      title="Orthopaedics"
      aboutTitle="Orthopaedics Department"
      aboutDescription="This department specializes in the diagnosis, treatment, and management of musculoskeletal system disorders, including bones, joints, muscles, ligaments, and tendons. It provides a wide range of services such as fracture care, joint replacement, arthroscopy, spine surgery, sports injury management, and rehabilitation. The focus is on accurate diagnosis, advanced surgical and non-surgical treatments, and helping patients restore mobility, strength, and overall quality of life."
      aboutImage={orthopaedicsImg}
      slides={slides}
      backseat={backseat}
      backseatBg={backseatBg}
      img="https://plus.unsplash.com/premium_photo-1661293913008-d45a35affa54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8T3J0aG9wYWVkaWNzfGVufDB8fDB8fHww"
    />
  );
}