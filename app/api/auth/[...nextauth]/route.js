import NextAuth from 'next-auth/next';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
    providers : [
        GithubProvider({
            clientId : "f31eb7165d40f5b8d4e0",
            clientSecret : "8dd1a04264e78837049fc7fc96775f1a610c1013"
        }),

        GoogleProvider({
            clientId : "787178406737-joslb7rn42tneg3f4uj92kc1b5qdknim.apps.googleusercontent.com",
            clientSecret : "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"
        })
    ]
    
})


export {handler as GET, handler as POST};
