import NextAuth from 'next-auth/next';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
    providers : [
        GithubProvider({
            clientId : "YOUR ID",
            clientSecret : "YOUR SECRET_KEY"
        }),

        GoogleProvider({
            clientId : "YOUR ID",
            clientSecret : "YOUR SECRET_KEY"
        })
    ]
    
})


export {handler as GET, handler as POST};
