import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color='red' onClick={() => console.log('clicked')}>
     afsdfadsf 
    </ChildAsFC>
  );
};
export default Parent;
