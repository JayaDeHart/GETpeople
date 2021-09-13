const dynamoose = require('dynamoose');

const personSchema = new dynamoose.Schema({
  primarykey: String,
  name: String,
  age: Number,
  nickName: String,
});

const Person = dynamoose.model('lab-18-people', personSchema);

exports.handler = async (event) => {
  console.log(event);
  let id = event.pathParameters.id;
  if (!id) {
    //return all
    let response = Person.query().exec();
    return {
      message: 'found',
      person: JSON.stringify(response),
    };
  } else {
    let response = Person.query({ primarykey: id }).exec();
    return {
      message: 'found',
      person: JSON.stringify(response),
    };
  }
};
