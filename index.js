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
  if (event.pathParameters) {
    let id = event.pathParameters.id;
    let response = await Person.query('primarykey')
      .where('primarykey')
      .eq(id)
      .exec();
    return {
      message: 'found',
      person: JSON.stringify(response),
    };
  } else {
    let response = await Person.query('primarykey').exec();
    return {
      message: 'found',
      person: JSON.stringify(response),
    };
  }
};
