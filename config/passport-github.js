const passport = require('passport')
const GitHubStrategy = require('passport-github').Strategy

const callbackURL = process.env.NODE_ENV === 'production' ? `${process.env.SERVER_URL}/login/github/callback` : 'http://localhost:8000/login/github/callback'

const clientSecret = process.env.NODE_ENV === 'production' ? process.env.GH_CLIENT_SECRET : process.env.GH_LOCAL_CLIENT_SECRET
const clientID = process.env.NODE_ENV === 'production' ? process.env.GH_CLIENT_ID : process.env.GH_LOCAL_CLIENT_ID

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})

passport.use(new GitHubStrategy({
    clientID,
    clientSecret,
    callbackURL
},
    (accessToken, refreshToken, profile, done) => {
        const user = {
            profile
        }
        done(null, user)
    }
))
