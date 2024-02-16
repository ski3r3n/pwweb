import type { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

import CredentailsProvider from 'next-auth/providers//credentials'
export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentailsProvider({
            name: "Credentials",
            credentials:{
                username:{
                    label: "Username",
                    type: "text",
                    placeholder: "your-cool-username"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "SECRETPASS"
                }

            },
            async authorize(credentials) {
                const user = { id: "42", name: "ahbeng", password: "PLEASE" }
                
                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user;
                }
                else {
                    return null;
                }
            }
        })
        
    ]
}