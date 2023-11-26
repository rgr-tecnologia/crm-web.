import type { NextAuthOptions } from 'next-auth';
import Credential from 'next-auth/providers/credentials';
 
export const authConfig: NextAuthOptions = {
  providers: [
    Credential({
        name: 'Credentials',
        credentials: {
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: {  label: "Password", type: "password" }
        },
         // @ts-ignore
        async authorize(credentials) {
            if (credentials?.username === 'jsmith' && credentials?.password === 'password') {
                return { id: 1, name: 'J Smith', email: 'teste@teste' }
            } else {
                return null
            }
        }
    })
  ]
};