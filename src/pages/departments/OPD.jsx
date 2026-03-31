import DepartmentTemplate from "./DepartmentTemplate";
import opdImage from "../../assets/images/departments/opd.jpg";

function OPD() {

  return (
    <DepartmentTemplate
      title="Outpatient Department"
      breadcrumb="OPD"
      image={opdImage}
      img="https://plus.unsplash.com/premium_photo-1764687892536-2239d267cc7f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      heading="One Stop Solution for All Healthcare Needs"
      paragraphs={[
        "Pacific Institute of Medical Sciences (PIMS), Udaipur is a leading multi-super specialty hospital committed to delivering world-class healthcare under one roof. With advanced OPD facilities, diagnostic labs, physiotherapy, pharmacy, and super-specialty departments, PIMS serves as a one-stop destination for both outpatient and inpatient care.",
        "At PIMS, patients are treated with personalized attention and compassion in a comfortable environment equipped with modern infrastructure and supportive amenities. From preventive check-ups to advanced treatments, every individual receives care focused on precision and comfort.",
        "Our team of highly qualified doctors across diverse specialties ensures holistic healthcare solutions tailored to patient needs. With a strong focus on quality, technology, and compassionate service, PIMS stands dedicated to guiding patients toward better health and healing."
      ]}
    />
  );
}

export default OPD;
