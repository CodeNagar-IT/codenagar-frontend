// frontend/src/pages/Documentation.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, Search, Code, 
  Sparkles, ChevronRight, FileText, Terminal, Menu, X
} from "lucide-react";

const Documentation = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState({
    category: "getting-started",
    doc: "introduction"
  });

  const documentation = {
    "getting-started": {
      title: "Getting Started",
      icon: Sparkles,
      docs: [
        { id: "introduction", title: "Introduction to CodeNagar", content: `
# Introduction to CodeNagar

Welcome to CodeNagar's official documentation. This guide will help you understand how to leverage our services and integrate with our platform.

## What is CodeNagar?

CodeNagar is a comprehensive technology solutions provider offering software development, IT training, and hardware solutions. Our mission is to transform businesses through innovative technology.

## Key Features

- **Full-stack development** services for web and mobile
- **AI/ML integration** for intelligent applications
- **Cloud solutions** for scalable infrastructure
- **IT training** for skill development
- **Hardware store** for quality equipment

## Who Should Use This Documentation?

- Developers integrating with our services
- Business owners exploring our solutions
- Students in our training programs
- Partners collaborating with us

## Getting Help

If you need assistance, contact our support team at \`support@codenagar.com\` or visit our [contact page](/contact).
        `},
        { id: "quick-start", title: "Quick Start Guide", content: `
# Quick Start Guide

This guide will help you get started with CodeNagar's core services.

## Prerequisites

- Basic understanding of web technologies
- A registered account (if applicable)
- API access credentials

## Step 1: Choose Your Service

CodeNagar offers multiple services:

1. **Web Development** - Build modern responsive websites
2. **App Development** - Create iOS/Android applications
3. **ML Integration** - Add AI capabilities to your products

## Step 2: Set Up Your Environment

For API integration:

\`\`\`bash
# Install our SDK
npm install codenagar-sdk

# Initialize the client
const CodeNagar = require('codenagar-sdk');
const client = new CodeNagar({
  apiKey: 'your-api-key'
});
\`\`\`

## Step 3: Make Your First Request

\`\`\`javascript
// Example API call
const response = await client.getServices();
console.log(response.data);
\`\`\`

## Step 4: Next Steps

Explore the rest of our documentation for detailed guides on specific services.
        `}
      ]
    },
    "api-reference": {
      title: "API Reference",
      icon: Code,
      docs: [
        { id: "authentication", title: "Authentication", content: `
# Authentication

All API requests require authentication using API keys.

## Obtaining an API Key

1. Log into your CodeNagar account
2. Navigate to Developer Settings
3. Click "Generate API Key"
4. Copy your API key

## Using Your API Key

Include your API key in the request headers:

\`\`\`bash
curl -X GET "https://api.codenagar.com/v1/services" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"
\`\`\`

## Rate Limits

- Free tier: 100 requests per hour
- Pro tier: 1,000 requests per hour
- Enterprise: Custom limits

## Error Responses

| Status Code | Meaning |
|-------------|---------|
| 200 | Success |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 429 | Too Many Requests |
| 500 | Server Error |
        `},
        { id: "endpoints", title: "API Endpoints", content: `
# API Endpoints

## Core Endpoints

### Get All Services

\`\`\`
GET /api/services
\`\`\`

**Response:**
\`\`\`json
{
  "services": [
    {
      "id": 1,
      "name": "Web Development",
      "description": "Modern web applications",
      "price": "$499+"
    }
  ]
}
\`\`\`

### Get Service Details

\`\`\`
GET /api/services/:id
\`\`\`

### Submit Contact Form

\`\`\`
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I need help with..."
}
\`\`\`

### Apply for Course

\`\`\`
POST /api/courses/apply
Content-Type: application/json

{
  "fullName": "John Doe",
  "email": "john@example.com",
  "course": "Web Development"
}
\`\`\`
        `}
      ]
    },
    "sdks": {
      title: "SDKs & Libraries",
      icon: Terminal,
      docs: [
        { id: "javascript", title: "JavaScript SDK", content: `
# JavaScript SDK

Official JavaScript SDK for integrating CodeNagar services into your Node.js or browser applications.

## Installation

\`\`\`bash
npm install codenagar-sdk
# or
yarn add codenagar-sdk
\`\`\`

## Usage

\`\`\`javascript
import CodeNagar from 'codenagar-sdk';

const client = new CodeNagar({
  apiKey: 'your-api-key',
  environment: 'production' // or 'sandbox'
});

// Get services
const services = await client.services.list();

// Submit contact form
await client.contact.submit({
  name: 'John Doe',
  email: 'john@example.com',
  message: 'Hello!'
});
\`\`\`

## Browser Usage

\`\`\`html
<script src="https://cdn.codenagar.com/sdk/v1/codenagar.js"></script>
<script>
  const client = new CodeNagar({ apiKey: 'your-key' });
</script>
\`\`\`
        `},
        { id: "python", title: "Python SDK", content: `
# Python SDK

Python library for CodeNagar API integration.

## Installation

\`\`\`bash
pip install codenagar-sdk
\`\`\`

## Usage

\`\`\`python
from codenagar import CodeNagar

client = CodeNagar(api_key='your-api-key')

# Get services
services = client.services.list()

# Submit contact form
client.contact.submit(
    name="John Doe",
    email="john@example.com",
    message="Hello!"
)
\`\`\`
        `}
      ]
    },
    "guides": {
      title: "Integration Guides",
      icon: BookOpen,
      docs: [
        { id: "web-integration", title: "Web Integration", content: `
# Web Integration Guide

Learn how to integrate CodeNagar services into your website.

## Adding the Script

Add our script tag to your HTML:

\`\`\`html
<script src="https://cdn.codenagar.com/widget/latest.js" defer></script>
\`\`\`

## Embedding Services

### Contact Form Widget

\`\`\`html
<div data-codenagar-widget="contact-form"></div>
\`\`\`

### Service Listings

\`\`\`html
<div data-codenagar-widget="services" data-category="web"></div>
\`\`\`

## Custom Styling

Override default styles with CSS:

\`\`\`css
.codenagar-widget {
  --primary-color: #0891b2;
  --border-radius: 8px;
}
\`\`\`
        `},
        { id: "mobile-integration", title: "Mobile Integration", content: `
# Mobile Integration Guide

Integrate CodeNagar services into your iOS and Android apps.

## React Native

\`\`\`javascript
import { CodeNagarWidget } from 'codenagar-react-native';

function App() {
  return (
    <CodeNagarWidget 
      type="contact-form"
      apiKey="your-key"
    />
  );
}
\`\`\`

## Flutter

\`\`\`dart
import 'package:codenagar_flutter/codenagar_flutter.dart';

CodeNagarWidget(
  type: WidgetType.contactForm,
  apiKey: 'your-key',
)
\`\`\`

## Native iOS

\`\`\`swift
import CodeNagarSDK

let widget = CodeNagarWidget(frame: .zero)
widget.configure(type: .contactForm, apiKey: "your-key")
\`\`\`
        `}
      ]
    },
    "faq": {
      title: "FAQ",
      icon: FileText,
      docs: [
        { id: "general", title: "General Questions", content: `
# Frequently Asked Questions

## General Questions

### What services does CodeNagar offer?

We offer web development, mobile app development, ML/AI integration, cloud solutions, IT training, and hardware sales.

### How do I get a quote?

Contact us via our [contact form](/contact) or email \`sales@codenagar.com\`.

### What are your payment terms?

We accept payments via bank transfer, credit card, and PayPal. Terms vary by project scope.

## Technical Questions

### Do you provide API documentation?

Yes, full API documentation is available in this documentation portal.

### Can I integrate your services with my existing system?

Yes, our APIs are designed for easy integration with any existing infrastructure.

### What is your uptime guarantee?

We guarantee 99.9% uptime for all production services.

## Support Questions

### How do I get technical support?

Email \`support@codenagar.com\` or call our 24/7 support line.

### Do you offer training?

Yes, we offer comprehensive training programs for all our services.
        `}
      ]
    }
  };

  const categories = Object.keys(documentation);
  const currentCategory = documentation[selectedDoc.category];
  const currentDoc = currentCategory?.docs.find(doc => doc.id === selectedDoc.doc);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Search logic would go here
  };

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm">Documentation</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Documentation</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about integrating and using CodeNagar's services.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full pl-10 pr-4 py-3 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
            />
          </div>
        </div>

        <div className="flex gap-6">
          {/* Mobile Sidebar Toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden fixed bottom-4 right-4 z-40 p-3 bg-cyan-600 rounded-full shadow-lg"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Sidebar */}
          <div className={`
            fixed lg:relative inset-y-0 left-0 z-30 w-80 bg-dark-300 border-r border-white/10 transform transition-transform duration-300
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            lg:block overflow-y-auto
          `}>
            <div className="p-4">
              <div className="flex justify-between items-center mb-4 lg:hidden">
                <h2 className="text-lg font-bold">Documentation</h2>
                <button onClick={() => setSidebarOpen(false)} className="p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>
              {categories.map((category) => {
                const cat = documentation[category];
                const Icon = cat.icon;
                return (
                  <div key={category} className="mb-6">
                    <h3 className="flex items-center gap-2 text-sm font-semibold text-cyan-400 mb-2">
                      <Icon className="w-4 h-4" /> {cat.title}
                    </h3>
                    <ul className="space-y-1">
                      {cat.docs.map((doc) => (
                        <li key={doc.id}>
                          <button
                            onClick={() => {
                              setSelectedDoc({ category, doc: doc.id });
                              setSidebarOpen(false);
                            }}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                              selectedDoc.category === category && selectedDoc.doc === doc.id
                                ? "bg-cyan-600 text-white"
                                : "text-gray-400 hover:bg-dark-400 hover:text-white"
                            }`}
                          >
                            {doc.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            {currentDoc ? (
              <motion.div
                key={`${selectedDoc.category}-${selectedDoc.doc}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card p-6 md:p-8"
              >
                <div className="prose prose-invert max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: currentDoc.content.replace(/```(\w+)\n([\s\S]*?)```/g, (match, lang, code) => {
                    return `<pre class="bg-dark-400 p-4 rounded-lg overflow-x-auto"><code class="text-gray-300">${code}</code></pre>`;
                  }).replace(/\n/g, '<br>').replace(/# (.*?)(?=<br>|$)/g, '<h1 class="text-3xl font-bold mt-6 mb-4 gradient-text">$1</h1>')
                  .replace(/## (.*?)(?=<br>|$)/g, '<h2 class="text-2xl font-bold mt-5 mb-3">$1</h2>')
                  .replace(/### (.*?)(?=<br>|$)/g, '<h3 class="text-xl font-semibold mt-4 mb-2">$1</h3>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-cyan-400">$1</strong>')
                  .replace(/`(.*?)`/g, '<code class="bg-dark-400 px-1 py-0.5 rounded text-cyan-400">$1</code>')
                  .replace(/\|/g, '<span class="text-gray-500">|</span>') }} />
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 flex justify-between">
                  <button className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-1">
                    <ChevronRight className="w-4 h-4 rotate-180" /> Previous
                  </button>
                  <button className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-1">
                    Next <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ) : (
              <div className="glass-card p-8 text-center">
                <BookOpen className="w-16 h-16 mx-auto text-gray-600 mb-4" />
                <p className="text-gray-400">Select a topic from the sidebar to view documentation.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;