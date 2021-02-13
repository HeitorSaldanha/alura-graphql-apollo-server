import { ApolloServer, gql } from 'apollo-server';
import { ApolloServerExpressConfig } from 'apollo-server-express';

const config: ApolloServerExpressConfig = {
  typeDefs: '',
  resolvers: []
};

const users: {nome:string,ativo:boolean}[] = [
  {
    nome: 'Ana',
    ativo: true,
  },
  {
    nome: 'Marcia',
    ativo: false,
  },
];

const typeDefs = gql `
  type User = {
    nome: string,
    ativo: boolean,
    email: string,
  }
`

const server: ApolloServer = new ApolloServer(config);