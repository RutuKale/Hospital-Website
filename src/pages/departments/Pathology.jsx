import DepartmentTemplate from "./DepartmentTemplate";
import pathology from "../../assets/images/departments/pathology.jpg";

function Pathology() {

  return (
    <DepartmentTemplate
      title="Pathology Department"
      breadcrumb="Pathology"
      image={pathology}
      heading="One Stop Solution for All Healthcare Needs"
      paragraphs={[
        "Pacific Institute of Medical Sciences (PIMS), Udaipur offers reliable and advanced blood test and pathology services, ensuring accurate and timely reports for patients. With state-of-the-art diagnostic equipment and experienced laboratory professionals, PIMS provides a wide range of tests covering routine checkups, specialized investigations, and preventive health screenings — all under one roof.",
        "Patients benefit from a safe, hygienic, and patient-friendly environment with quick turnaround times and expert guidance. Backed by our team of skilled doctors and advanced technology, PIMS is dedicated to delivering trustworthy, affordable, and patient-centered blood test services where accuracy, safety, and care come first.",
      ]}
      img="https://plus.unsplash.com/premium_photo-1723489280523-db34efc5fb35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFBhdGhvbG9neSUyMGhvc3BpdGFsfGVufDB8fDB8fHww"
    />
  );
}

export default Pathology;
