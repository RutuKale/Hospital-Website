import DepartmentTemplate from "./DepartmentTemplate";
import pharmacyImage from "../../assets/images/departments/pharmacy.jpg";

function Pharmacy() {

  return (
    <DepartmentTemplate
      title="Pharmacy Department"
      breadcrumb="Pharmacy"
      image={pharmacyImage}
      heading="24x7 In-house Pharmacy Services"
      paragraphs={[
        "Pacific Institute of Medical Sciences (PIMS), Udaipur offers a well-stocked and reliable pharmacy that ensures patients have easy access to genuine medicines and healthcare products under one roof. The pharmacy operates with a commitment to quality, safety, and affordability, providing prescribed medicines and essential health supplies without hassle.",
        "At PIMS Pharmacy, patients benefit from a convenient, hygienic, and patient-friendly environment, where trained pharmacists guide them with proper dosage, usage, and medicine safety. From life-saving drugs to daily health essentials, everything is available with a focus on timely service and patient care.",
        "Backed by medical expertise and modern systems, the PIMS Pharmacy is dedicated to delivering trustworthy, accessible, and patient-centered pharmaceutical services, ensuring that healthcare continues seamlessly beyond the doctor’s consultation."
      ]}
      img="https://plus.unsplash.com/premium_photo-1661755326555-cbc48e2e4dbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhhcm1hY3klMjBkZXBhcnRtZW50JTIwaG9zcGl0YWx8ZW58MHx8MHx8fDA%3D"
    />
  );
}

export default Pharmacy;
