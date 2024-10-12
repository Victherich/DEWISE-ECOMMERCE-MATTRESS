// import React from 'react';
// import PercentOff from './PercentOff';
// import SideCategoryMenu from './SideCategoryMenu';
// import calciumSupplements from "../Images/calcium supplements.png";
// import alphalipoicacid from "../Images/alpha lipoic acid.png";
// import cinnamonsupplements from "../Images/cinnamon supplements.png";
// import coq from "../Images/coq-10.png";
// import flaxseed from "../Images/flaxseed products.png";
// import ginkgo from "../Images/ginkgo biloba.png";
// import carnitine from "../Images/L-carnitine.png";
// import omega3 from "../Images/omega-3.png";
// import homeopathic from "../Images/homeopathic.png";
// import eyeproducts from "../Images/eye products.png";
// import "../CSS/SubCategoryPage.css"
// import { useNavigate } from 'react-router-dom';

// const SubCategoryPage = () => {
//   const navigate = useNavigate();

//   // Array of subcategories with image paths
//   const subCategories = [
//     { id: 1, image: calciumSupplements, name: 'Calcium Supplements' },
//     { id: 2, image: alphalipoicacid, name: 'Alpha Lipoic Acid' },
//     { id: 3, image: cinnamonsupplements, name: 'Cinnamon Supplements' },
//     { id: 4, image: coq, name: 'CoQ-10' },
//     { id: 5, image: flaxseed, name: 'Flaxseed Products' },
//     { id: 6, image: ginkgo, name: 'Ginkgo Biloba' },
//     { id: 7, image: carnitine, name: 'L-Carnitine' },
//     { id: 8, image: omega3, name: 'Omega-3' },
//     { id: 9, image: homeopathic, name: 'Homeopathic' },
//     { id: 10, image: eyeproducts, name: 'Eye Products' }
//   ];

//   return (
//     <div>
//       <div className='LandingPageDash'>
//         <SideCategoryMenu />
//         <div className="LandingPageContentWrap">
//           <PercentOff/>
//           <div className='LandingPageContentWrapLower' >
//             {/* Rendering the subcategories using map */}
//             <div className='subCategoryGrid'>
//               {subCategories.map(subCategory => (
//                 <div key={subCategory.id} className='subCategoryItem' onClick={()=>navigate("/productlistpage")}>
//                   <img src={subCategory.image} alt={subCategory.name} />
//                   {/* <p>{subCategory.name}</p> */}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubCategoryPage;



import React from 'react';
import PercentOff from './PercentOff';
import SideCategoryMenu from './SideCategoryMenu';
import calciumSupplements from "../Images/calcium supplements.png";
import alphalipoicacid from "../Images/alpha lipoic acid.png";
import cinnamonsupplements from "../Images/cinnamon supplements.png";
import coq from "../Images/coq-10.png";
import flaxseed from "../Images/flaxseed products.png";
import ginkgo from "../Images/ginkgo biloba.png";
import carnitine from "../Images/L-carnitine.png";
import omega3 from "../Images/omega-3.png";
import homeopathic from "../Images/homeopathic.png";
import eyeproducts from "../Images/eye products.png";
import "../CSS/SubCategoryPage.css"
import { useNavigate } from 'react-router-dom';

const SubCategoryPage = () => {
  const navigate = useNavigate();

  // Array of subcategories with image paths and category names
  const subCategories = [
    { id: 1, image: calciumSupplements, name: 'Calcium Supplements' },
    { id: 2, image: alphalipoicacid, name: 'Alpha Lipoic Acid' },
    { id: 3, image: cinnamonsupplements, name: 'Cinnamon Supplements' },
    { id: 4, image: coq, name: 'CoQ-10' },
    { id: 5, image: flaxseed, name: 'Flaxseed Products' },
    { id: 6, image: ginkgo, name: 'Ginkgo Biloba' },
    { id: 7, image: carnitine, name: 'L-Carnitine' },
    { id: 8, image: omega3, name: 'Omega-3' },
    { id: 9, image: homeopathic, name: 'Homeopathic' },
    { id: 10, image: eyeproducts, name: 'Eye Products' }
  ];

  return (
    <div>
      <div className='LandingPageDash'>
        <SideCategoryMenu />
        <div className="LandingPageContentWrap">
          <PercentOff/>
          <div className='LandingPageContentWrapLower' >
            {/* Rendering the subcategories using map */}
            <div className='subCategoryGrid'>
              {subCategories.map(subCategory => (
                <div key={subCategory.id} className='subCategoryItem' onClick={() => navigate("/productlistpage", { state: { category: subCategory.name } })}>
                  <img src={subCategory.image} alt={subCategory.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCategoryPage;

