import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import SurveyCategory from './SurveyCategory';
import SurveyQuestion from './SurveyQuestion';

function SurveyForm() {
  const lpBankAccessAnswers = [...Array(7)].map((_, i) => ({
    type: 'radio',
    label: `${i + 1}`,
    name: 'lpBankAccess',
  }));

  const lpBankRecommendationAnswers = [...Array(10)].map((_, i) => ({
    type: 'radio',
    label: `${i + 1}`,
    name: 'lpBankRecommendation',
  }));

  return (
    <Container>
      <Form>
        <h3 className="my-4">Survey Form</h3>
        
        <Row className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
          <Col style={{ flex: '0 0 20%', maxWidth: '20%' }}>
            <SurveyCategory title="C2.4. Thời gian vay vốn" />
          </Col>
          <Col style={{ flex: '0 0 80%', maxWidth: '80%' }}>
            <SurveyQuestion
              question="Anh Chị đánh giá như thế nào về Thời gian vay vốn <tên sản phẩm> a?"
              answers={[
                { type: 'radio', label: 'Vượt quá nhu cầu của KH', name: 'loanTime' },
                { type: 'radio', label: 'Đáp ứng nhu cầu của KH', name: 'loanTime' },
                { type: 'radio', label: 'Đáp ứng tương đối nhu cầu của KH', name: 'loanTime' },
                { type: 'radio', label: 'Không đáp ứng nhu cầu của KH', name: 'loanTime' },
                { type: 'text', placeholder: 'Anh Chị mong muốn thời gian vay là bao lâu?' }
              ]}
            />
          </Col>
        </Row>

        <Row className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
          <Col style={{ flex: '0 0 20%', maxWidth: '20%' }}>
            <SurveyCategory title="C2.5. Phương thức trả nợ" />
          </Col>
          <Col style={{ flex: '0 0 80%', maxWidth: '80%' }}>
            <SurveyQuestion
              question="Trên thang điểm từ 1 đến 7, Anh Chị đánh giá như thế nào về Phương thức trả nợ khoản vay?"
              answers={[
                { type: 'radio', label: '1', name: 'repaymentMethod' },
                { type: 'radio', label: '2', name: 'repaymentMethod' },
                { type: 'radio', label: '3', name: 'repaymentMethod' },
                { type: 'radio', label: '4', name: 'repaymentMethod' },
                { type: 'radio', label: '5', name: 'repaymentMethod' },
                { type: 'radio', label: '6', name: 'repaymentMethod' },
                { type: 'radio', label: '7', name: 'repaymentMethod' },
                { type: 'text', placeholder: 'Điều gì gây bất tiện cho Anh Chị khi trả nợ tiền vay Ngân hàng?' }
              ]}
            />
          </Col>
        </Row>

        <Row className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
          <Col style={{ flex: '0 0 20%', maxWidth: '20%' }}>
            <SurveyCategory title="C3" />
          </Col>
          <Col style={{ flex: '0 0 80%', maxWidth: '80%' }}>
            <SurveyQuestion
              question="Trên thang điểm từ 1 đến 7, Anh Chị đánh giá như thế nào về việc tiếp cận LPBank khi có nhu cầu vay vốn?"
              answers={lpBankAccessAnswers}
            />
          </Col>
        </Row>

        <Row className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
          <Col style={{ flex: '0 0 20%', maxWidth: '20%' }}>
            <SurveyCategory title="C4" />
          </Col>
          <Col style={{ flex: '0 0 80%', maxWidth: '80%' }}>
            <SurveyQuestion
              question="Trên thang điểm từ 1 đến 10, Khả năng Anh/Chị giới thiệu sản phẩm của LPBank cho bạn bè, người thân quen là bao nhiêu?"
              answers={lpBankRecommendationAnswers}
            />
          </Col>
        </Row>

        <Button type="submit" className="mt-4">Submit</Button>
      </Form>
    </Container>
  );
}

export default SurveyForm;
