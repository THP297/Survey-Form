import React from 'react';
import { Form } from 'react-bootstrap';

interface SurveyAnswerProps {
  type: string;
  label?: string;
  name?: string;
  placeholder?: string;
}

const SurveyAnswer: React.FC<SurveyAnswerProps> = ({ type, label, name, placeholder }) => {
  switch (type) {
    case 'radio':
      return (
        <Form.Check
          type="radio"
          label={label}
          name={name}
          id={`${name}-${label}`}
          className="mb-2"
        />
      );
    case 'text':
      return (
        <Form.Control
          type="text"
          placeholder={placeholder}
          className="mb-2"
        />
      );
    default:
      return null;
  }
}

export default SurveyAnswer;
