import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/const.ts'
  ],
  theme: {
    extend: {
      colors: {
        github: '#333333',
        facebook: '#3b5998',
        x: '#000000',
        instagramPink: '#a62eb9',
        instagramYellow: '#eea34c',
        linkedin: '#0077B5',
        twitch: '#6441A4',
        kick: '#53FC18',
        youtube: '#FF0000',
        telegram: '#0088cc',
        google: '#D44638'
      }
    }
  },
  plugins: []
}
export default config
