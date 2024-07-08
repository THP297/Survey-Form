import React from 'react';

interface SurveyCategoryProps {
  title: string;
}

const SurveyCategory: React.FC<SurveyCategoryProps> = ({ title }) => {
  return (
    <div>
      <strong>{title}</strong>
    </div>
  );
}

export default SurveyCategory;
