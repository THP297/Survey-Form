import React from 'react';
import { Form } from 'react-bootstrap';
import SurveyAnswer from './SurveyAnswer';

interface SurveyQuestionProps {
  question: string;
  answers: Array<{
    type: string;
    label?: string;
    name?: string;
    placeholder?: string;
  }>;
}

const SurveyQuestion: React.FC<SurveyQuestionProps> = ({ question, answers }) => {
  return (
    <Form.Group>
      <Form.Label style={{ fontWeight: 'bold' }}>{question}</Form.Label>
      {answers.map((answer, index) => (
        <SurveyAnswer key={index} {...answer} />
      ))}
    </Form.Group>
  );
}

export default SurveyQuestion;
