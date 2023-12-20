import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            'blueDark': '#1E6F9F',
            'blue': '#4EA8DE',
            'purpleDark': '#5E60CE',
            'purple': '#8284FA',
            'gray-700': '#0D0D0D',
            'gray-600': '#1A1A1A',
            'gray-500': '#262626',
            'gray-400': '#333333',
            'gray-300': '#808080',
            'gray-200': '#D9D9D9',
            'gray-100': '#F2F2F2',
            'danger': '#E25858',
            'white': 'white',
        }
    },
    plugins: [],
}
export default config
