'use strict';
 const uuid = require('uuid');
 const AWS = require('aws-sdk');
 const dynamodb = new AWS.DynamoDB.DocumentClient();
 
module.exports.createData = async (event, context, callback) => {
  const body = JSON.parse(event.body);
    const id = uuid()
    const {Title, Body} = body;
    const TableName = process.env.TABLE_NAME
    const items = {
      TableName,
      Item: {
        id, Title, Body
      }
    };
    await dynamodb.put(items).promise()
    return{
      statusCode: 201,
      body: JSON.stringify(items)
    }
};

module.exports.getItems = (event)=> {
  const id = event.pathParameters?.id
  
 const output = await dynamodb
  .get({
    TableName: "CrudTable",
    Key: {
      id: id
    }
  })
  .promise();

  if(!output.Item){
    return {
      statusCode: 400,
      body: JSON.stringify({error: "not found"})
    }
  }

    return{
      statusCode: 200,
      body: JSON.stringify(output.Item)
    }

}
