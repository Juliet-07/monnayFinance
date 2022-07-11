export const createNewUser = `
    #graphql
    mutation createNewUser($data:create_monnayfinance_users_input!){
        create_users_item(data:$data)
    }
`;

export const getCurrentUser = `
    #graphql
    query{
        users_me{
            id
            username
        }
    }
`;
