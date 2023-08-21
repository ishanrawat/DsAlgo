const {core} = require('@hdworks/dynamo-db-wrapper')

const transactGetItems = async () => {
  let decoded = {_id:'wbuns5j7nr8jqbzi'}
  const params = {
    RequestItems: {
      users: {
        Keys: [
          { _id: decoded._id },
          
        ],
      },
      ace_config: {
        Keys: [
          { _id: 'pf-redeem-global-config',
          s_key:'redeemaddcash'
         },
      
        ],
      },
      
      ace_level_changes: {
        Keys: [
          {userId: decoded._id,},
          
        ],
      },
    },
    
  };
  

  try {
    const response = await core('batchGet',params)
    console.log(response.Responses);
  } catch (error) {
    console.error('Error occurred:', error);
  }
};

transactGetItems();
  //  { _id: 'pf-redeem-channel-config'},
        //  { _id: 'pf-redeem-amount-limits'},
        //  {_id: 'pf-redeem-limit-acelevel-config'},
          

// TransactItems: [
//   
//   {
//     Get: {
//       TableName: 'ace_config',
//       Key: {
//         _id: 'pf-redeem-global-config',
//         s_key:'redeemaddcash'
//       },
//     },
//   },
//   {
//     Get: {
//       TableName: 'ace_level_changes',
//       Key: {
//         userID: decoded._id,
       
//       },
//     },
//   },
//   {
//     Get: {
//       TableName: 'ace_config',
//       Key: {
//         _id: 'pf-redeem-limit-acelevel-config'
//       },
//     },
//   },
//   {
//     Get: {
//       TableName: 'ace_config',
//       Key: {
//         _id: 'pf-redeem-channel-config'
//       },
//     },
//   },
//   {
//     Get: {
//       TableName: 'ace_config',
//       Key: {
//         _id: 'pf-redeem-amount-limits'
//       },
//     },
//   }
// ]}