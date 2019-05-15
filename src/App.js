import React from 'react';
import logo from './logo.svg';
import './App.css';

import Customer from './components/Customer'

const customers = [
{
  'id' : 1 ,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '송제길',
  'birthday' : '791205',
  'gender' : '남자',
  'job' : '회사원'
},
{
  'id' : 2 ,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '한효주',
  'birthday' : '791205',
  'gender' : '여자',
  'job' : '연예인'
},
{
  'id' : 3 ,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '홍길동',
  'birthday' : '791205',
  'gender' : '남자',
  'job' : '백수'
}
]
function App() {
  return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer  
              key = {c.id}     
              id = { c.id}
              image = {c.image}
              name = {c.name}
              birthday={c.birthday}        
              gender={c.gender}
              job={c.job}
            />
            );
          })
        }
      </div>        
  );
}

export default App;
