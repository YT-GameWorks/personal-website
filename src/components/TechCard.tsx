import React from "react";
import CardStyles from "../styles/Card.module.css";

function TechCard({
  data,
}: {
  data: Array<{
    id: number;
    name: string;
    image: string;
    description: string | any;
  }>;
}) {
  const renderTechCard = data.map((language) => {
    return (
      <li key={language.id} className="flex flex-wrap -m-2">
        <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg mr-5 ml-5">
          <img
            alt="Language/Stack/Framework Image"
            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
            src="https://dummyimage.com/80x80"
          />
          <div className="flex-grow">
            <h2 className="text-white title-font font-medium">
              {language.name}
            </h2>
            <p className="text-gray-600">{language.description}</p>
          </div>
        </div>
      </li>
    );
  });

  return (
    <div>
      <ul className={CardStyles.cards}>{renderTechCard}</ul>
    </div>
  );
}

export default TechCard;
