import gql from 'graphql-tag';

const clientSchemaExtensions = gql`
    directive @model on OBJECT
    directive @index on FIELD_DEFINITION
    directive @hasMany on FIELD_DEFINITION 
    directive @belongsTo on FIELD_DEFINITION
    
    scalar Int
    scalar AWSDateTime
    scalar String
    scalar ID
`;
