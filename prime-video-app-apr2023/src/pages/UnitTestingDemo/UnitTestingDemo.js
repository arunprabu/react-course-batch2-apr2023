import CompanyInfo from './CompanyInfo/CompanyInfo';
import Counter from './Counter/Counter';
import Posts from './Posts/Posts';
import Users from './Users/Users';

const UnitTestingDemo = () => {
  return (
    <>
      <h1>Unit Testing Examples</h1>
      <CompanyInfo foundedYear="2000"/>

      <hr/>
      <Counter />

      <hr/>
      <h3>For Testing Forms Refer: ContactUsPage.js and ContactUsPage.test.js</h3>

      <hr/>
      <Users />

      <hr/>
      <Posts />
    </>
  );
};

export default UnitTestingDemo;
