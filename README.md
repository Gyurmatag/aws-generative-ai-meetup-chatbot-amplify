# AWS Generative AI Meetup Chatbot

A modern chatbot application built with Next.js that demonstrates the integration of various AI models including Amazon Bedrock and Groq. This project was created for the AWS Generative AI Meetup to showcase how to build and deploy AI-powered chat applications.

## Features

- 🤖 Multi-model chat interface supporting:
  - Amazon Bedrock integration
  - Groq API integration
- 💨 Built with Next.js 15 and TypeScript for optimal performance
- 🎨 Modern UI with Tailwind CSS and Radix UI components
- ⚡ Real-time streaming responses
- 📱 Responsive design for all devices

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (LTS version recommended)
- npm or yarn
- AWS account with Bedrock access (for Amazon Bedrock features)
- Groq API key (for Groq integration)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/aws-generative-ai-meetup-chatbot-amplify.git
cd aws-generative-ai-meetup-chatbot-amplify
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up your environment variables:
Create a `.env` file in the root directory and add your API keys:
```env
GROQ_API_KEY=your_groq_api_key
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=your_aws_region
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```
├── app/                # Next.js app directory
│   ├── api/           # API routes
│   ├── components/    # React components
│   └── lib/          # Utility functions and configurations
├── public/           # Static assets
└── components/       # Shared components
```

## Technologies Used

- [Next.js 15](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Radix UI](https://www.radix-ui.com/) - UI components
- [Amazon Bedrock](https://aws.amazon.com/bedrock/) - AI model integration
- [Groq](https://groq.com/) - AI model integration

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT license.

## Acknowledgments

- AWS Generative AI Community
- Next.js team for the excellent framework
- All contributors and participants of the AWS Generative AI Meetup
