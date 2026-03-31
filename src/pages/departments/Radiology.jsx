import DepartmentTemplate from "./DepartmentTemplate";
import radiology from "../../assets/images/departments/Radiology.jpg";

function Radiology() {

    return (
        <DepartmentTemplate
            title="Radiology Department"
            breadcrumb="Radiology"
            image={radiology}
            heading="Digital X-Rays"
            paragraphs={[
                "Our clinic provides high-quality digital X-rays for diagnosing fractures, infections, and abnormalities in bones and soft tissues. Digital technology ensures clearer images and quicker results, enabling precise diagnoses and timely treatment.",
                "We offer ultrasound imaging for detailed examination of internal organs, including the liver, kidneys, and abdomen. It’s also widely used for pregnancy monitoring and detecting soft tissue abnormalities. This non-invasive procedure provides real-time imaging with exceptional accuracy.",
                "Our advanced mammography services assist in early detection of breast cancer and other abnormalities. With high-resolution imaging technology, we ensure reliable results and a comfortable experience for patients undergoing this vital screening."
            ]}
            img="https://images.unsplash.com/photo-1758206523747-69af03fb56e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UmFkaW9sb2d5JTIwaG9zcGl0YWx8ZW58MHx8MHx8fDA%3D"
        />
    );
}

export default Radiology;
