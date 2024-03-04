import type { Config } from 'tailwindcss';

const config: Config = {
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic':
               'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
         },
         colors: {
            blue: {
               '50': '#DBE3F5',
               '100': '#BCC9EC',
               '200': '#7894D8',
               '300': '#385FC2',
               '400': '#243E7F',
               '500': '#111D3B',
               '600': '#0E1730',
               '700': '#0A1124',
               '800': '#070C18',
               '900': '#03060C',
               '950': '#010204',
            },
            white: {
               '50': '#FCFCFC',
               '100': '#FCFCFC',
               '200': '#F7F7F7',
               '300': '#F5F5F5',
               '400': '#F2F2F2',
               '500': '#EEEEEE',
               '600': '#BFBFBF',
               '700': '#8F8F8F',
               '800': '#5E5E5E',
               '900': '#303030',
               '950': '#171717',
            },
            'light-blue': {
               '50': '#E7F8F8',
               '100': '#CFF1F2',
               '200': '#9BE2E4',
               '300': '#6BD5D7',
               '400': '#37C6C8',
               '500': '#299496',
               '600': '#217778',
               '700': '#195B5C',
               '800': '#103B3C',
               '900': '#092020',
               '950': '#041010',
            },
            'teal': {
               '50': '#E7F8F5',
               '100': '#CFF2EB',
               '200': '#9BE4D6',
               '300': '#6BD7C3',
               '400': '#37C8AE',
               '500': '#299682',
               '600': '#217868',
               '700': '#195C50',
               '800': '#103C34',
               '900': '#09201C',
               '950': '#04100E',
            },
         },
      },
   },
   plugins: [],
};
export default config;
