/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: '16px',
  			md: 'calc(var(--radius) - 2px)',
  			sm: '6px'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'Dhsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
			  primaryBlue: 'rgba(29, 78, 216, 1)',
			  primaryBlueHover: 'rgba(25, 66, 184, 1)',
			  Secondary: '#0d1117',
			  lightBlue: 'rgba(0, 122, 255, 0.1)',
			  Grey: '#8C8E90',
			  darkGrey: '#4A4A4A',
			  mediumGrey: 'rgba(65, 65, 65, 1)',
			  lightGrey: '#D2D5DA',
			  blueBorder: '#93C5FD',
			  blueBorderFocus: '#9747FF',
			  lightGreyBorder: '#B0B0B0',
			  greyBorder: '#D9D9D9',
			  disable: 'rgba(0, 0, 0, 0.3)',
			  blueDisable: 'rgba(191, 219, 254, 1)',
  		},
		  fontFamily: {
			sans: ['Open Sans', 'sans-serif'],
		  },
		  backgroundImage: {
        'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))', // Default gradient direction
      },
		  fontWeight: {
			light: 300,
			normal: 400,
			medium: 500,
			bold: 600,
			heavy: 800,
		  },
		  fontSize: {
			xs: '10px',
			sm: '12px',
			md: '14px',
			lg: '16px'
		  }

  	}
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
}

