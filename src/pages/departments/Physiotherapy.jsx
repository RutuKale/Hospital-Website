import DepartmentTemplate from "./DepartmentTemplate";
import physiotherapy from "../../assets/images/departments/Physiotherapy.jpg";

function Physiotherapy() {

  return (
    <DepartmentTemplate
      title="Physiotherapy Department"
      breadcrumb="Physiotherapy"
      image={physiotherapy}
      heading="Physiotherapy centre in mid of Udaipur"
      paragraphs={[
        "Physical therapy is a healthcare profession that includes evaluating, assessing, and treating individuals with limitations in functionality. Physical therapy services are provided by professionals who are licensed by the state in which they work. These professionals are trained to assess the condition and help regain maximal functional mobility and independence. They use a variety of treatment modalities and techniques to help the patient move better and feel better.",
      ]}
      img="https://plus.unsplash.com/premium_photo-1663100613066-1bffba723c08?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGh5c2lvdGhlcmFweSUyMGhvc3BpdGFsfGVufDB8fDB8fHww"
    />
  );
}

export default Physiotherapy;
