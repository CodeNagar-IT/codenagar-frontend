// frontend/src/pages/Documentation.jsx
import { useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, Search, Code, Sparkles, ChevronRight, 
  FileText, Terminal, Menu, X, ChevronLeft, 
  Home,Link, Copy, Check, MessageCircle
} from "lucide-react";

const Documentation = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState({
    category: "getting-started",
    doc: "introduction"
  });

  const documentation = {
    "getting-started": {
      title: "Getting Started",
      icon: Sparkles,
      description: "Learn the basics of CodeNagar platform and services",
      docs: [
        { 
          id: "introduction", 
          title: "Introduction to CodeNagar", 
          content: `
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

If you need assistance, contact our support team at **support@codenagar.com** or visit our [contact page](/contact).

## Quick Links

- [API Reference](#api-reference)
- [SDKs & Libraries](#sdks-libraries)
- [Support](#faq)
          `
        },
        { 
          id: "quick-start", 
          title: "Quick Start Guide", 
          content: `
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
4. **Cloud Solutions** - Scalable infrastructure
5. **IT Training** - Skill development programs

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

## Need Help?

Contact our support team at **support@codenagar.com**
          `
        }
      ]
    },
    "api-reference": {
      title: "API Reference",
      icon: Code,
      description: "Complete API documentation for developers",
      docs: [
        { 
          id: "authentication", 
          title: "Authentication", 
          content: `
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

| Tier | Requests per Hour |
|------|-------------------|
| Free | 100 |
| Pro | 1,000 |
| Enterprise | Custom |

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

## Best Practices

- Store API keys securely, never in client-side code
- Rotate keys periodically
- Use environment variables for configuration
- Implement retry logic with exponential backoff
          `
        },
        { 
          id: "endpoints", 
          title: "API Endpoints", 
          content: `
# API Endpoints

Complete reference for all available API endpoints.

## Base URL

All endpoints are relative to:

\`\`\`
https://api.codenagar.com/v1
\`\`\`

## Services Endpoints

### Get All Services

\`\`\`http
GET /services
\`\`\`

**Response:**

\`\`\`json
{
  "success": true,
  "data": {
    "services": [
      {
        "id": "web-dev",
        "name": "Web Development",
        "description": "Modern web applications",
        "price": "Contact for pricing",
        "features": ["React", "Node.js", "MongoDB"]
      }
    ]
  }
}
\`\`\`

### Get Service Details

\`\`\`http
GET /services/{id}
\`\`\`

## Contact Endpoints

### Submit Contact Form

\`\`\`http
POST /contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+92 300 1234567",
  "message": "I need help with web development"
}
\`\`\`

## Course Endpoints

### Apply for Course

\`\`\`http
POST /courses/apply
Content-Type: application/json

{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "+92 300 1234567",
  "course": "Web Development",
  "education": "BS Computer Science",
  "experience": "2 years"
}
\`\`\`

### Get Available Courses

\`\`\`http
GET /courses
\`\`\`

## Product Endpoints

### Get Products

\`\`\`http
GET /products
\`\`\`

### Get Product Details

\`\`\`http
GET /products/{id}
\`\`\`

## Reservation Endpoints

### Create Reservation

\`\`\`http
POST /reservations
Authorization: Bearer {token}
Content-Type: application/json

{
  "items": [
    {
      "productId": "product_id",
      "quantity": 1
    }
  ],
  "customerInfo": {
    "fullName": "John Doe",
    "email": "john@example.com",
    "phone": "+92 300 1234567"
  }
}
\`\`\`

### Get My Reservations

\`\`\`http
GET /reservations/my
Authorization: Bearer {token}
\`\`\`
          `
        }
      ]
    },
    "sdks": {
      title: "SDKs & Libraries",
      icon: Terminal,
      description: "Official SDKs for popular programming languages",
      docs: [
        { 
          id: "javascript", 
          title: "JavaScript SDK", 
          content: `
# JavaScript SDK

Official JavaScript SDK for integrating CodeNagar services into your Node.js or browser applications.

## Installation

Using npm:

\`\`\`bash
npm install codenagar-sdk
\`\`\`

Using yarn:

\`\`\`bash
yarn add codenagar-sdk
\`\`\`

Using CDN (browser):

\`\`\`html
<script src="https://cdn.codenagar.com/sdk/v1/codenagar.js"></script>
\`\`\`

## Initialization

\`\`\`javascript
import CodeNagar from 'codenagar-sdk';

const client = new CodeNagar({
  apiKey: 'your-api-key',
  environment: 'production' // or 'sandbox'
});
\`\`\`

## Usage Examples

### Get Services

\`\`\`javascript
const services = await client.services.list();
console.log(services);
\`\`\`

### Submit Contact Form

\`\`\`javascript
await client.contact.submit({
  name: 'John Doe',
  email: 'john@example.com',
  message: 'Hello!'
});
\`\`\`

### Apply for Course

\`\`\`javascript
await client.courses.apply({
  fullName: 'John Doe',
  email: 'john@example.com',
  phone: '+92 300 1234567',
  course: 'Web Development'
});
\`\`\`

### Create Reservation

\`\`\`javascript
await client.reservations.create({
  items: [{ productId: 'prod_123', quantity: 1 }],
  customerInfo: {
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '+92 300 1234567'
  }
});
\`\`\`

## Error Handling

\`\`\`javascript
try {
  const result = await client.services.list();
} catch (error) {
  if (error.status === 401) {
    console.error('Invalid API key');
  } else if (error.status === 429) {
    console.error('Rate limit exceeded');
  } else {
    console.error('API error:', error.message);
  }
}
\`\`\`
          `
        },
        { 
          id: "python", 
          title: "Python SDK", 
          content: `
# Python SDK

Python library for CodeNagar API integration.

## Installation

\`\`\`bash
pip install codenagar-sdk
\`\`\`

## Initialization

\`\`\`python
from codenagar import CodeNagar

client = CodeNagar(
    api_key='your-api-key',
    environment='production'
)
\`\`\`

## Usage Examples

### Get Services

\`\`\`python
services = client.services.list()
for service in services:
    print(f"{service['name']}: {service['description']}")
\`\`\`

### Submit Contact Form

\`\`\`python
client.contact.submit(
    name="John Doe",
    email="john@example.com",
    message="Hello from Python!"
)
\`\`\`

### Apply for Course

\`\`\`python
client.courses.apply(
    full_name="John Doe",
    email="john@example.com",
    phone="+92 300 1234567",
    course="Web Development"
)
\`\`\`

## Async Support

\`\`\`python
import asyncio
from codenagar import AsyncCodeNagar

async def main():
    client = AsyncCodeNagar(api_key='your-key')
    services = await client.services.list()
    print(services)

asyncio.run(main())
\`\`\`
          `
        },
        { 
          id: "react", 
          title: "React Hooks", 
          content: `
# React Hooks

Custom React hooks for integrating CodeNagar services.

## Installation

\`\`\`bash
npm install codenagar-react
\`\`\`

## useCodeNagar Hook

\`\`\`javascript
import { useCodeNagar } from 'codenagar-react';

function App() {
  const { client, loading, error } = useCodeNagar({
    apiKey: 'your-api-key'
  });

  const [services, setServices] = useState([]);

  useEffect(() => {
    if (client) {
      client.services.list().then(setServices);
    }
  }, [client]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {services.map(service => (
        <div key={service.id}>{service.name}</div>
      ))}
    </div>
  );
}
\`\`\`

## useContactForm Hook

\`\`\`javascript
import { useContactForm } from 'codenagar-react';

function ContactForm() {
  const { submit, loading, success, error } = useContactForm();

  const handleSubmit = async (data) => {
    await submit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      {success && <p>Message sent!</p>}
      {error && <p>Error: {error.message}</p>}
    </form>
  );
}
\`\`\`
          `
        }
      ]
    },
    "guides": {
      title: "Integration Guides",
      icon: BookOpen,
      description: "Step-by-step integration guides for various platforms",
      docs: [
        { 
          id: "web-integration", 
          title: "Web Integration", 
          content: `
# Web Integration Guide

Learn how to integrate CodeNagar services into your website.

## Adding the Script

Add our script tag to your HTML:

\`\`\`html
<script src="https://cdn.codenagar.com/widget/latest.js" defer></script>
\`\`\`

## Embedding Widgets

### Contact Form Widget

\`\`\`html
<div 
  data-codenagar-widget="contact-form"
  data-api-key="your-api-key"
></div>
\`\`\`

### Service Listings

\`\`\`html
<div 
  data-codenagar-widget="services"
  data-category="web"
  data-limit="6"
></div>
\`\`\`

### Course Listings

\`\`\`html
<div 
  data-codenagar-widget="courses"
  data-featured="true"
></div>
\`\`\`

## Custom Styling

Override default styles with CSS variables:

\`\`\`css
.codenagar-widget {
  --primary-color: #0891b2;
  --secondary-color: #4f46e5;
  --border-radius: 8px;
  --font-family: 'Inter', sans-serif;
}
\`\`\`

## Event Handling

\`\`\`javascript
window.addEventListener('codenagar:ready', () => {
  console.log('Widgets loaded');
});

window.addEventListener('codenagar:submit', (event) => {
  console.log('Form submitted:', event.detail);
});
\`\`\`
          `
        },
        { 
          id: "mobile-integration", 
          title: "Mobile Integration", 
          content: `
# Mobile Integration Guide

Integrate CodeNagar services into your iOS and Android apps.

## React Native

### Installation

\`\`\`bash
npm install codenagar-react-native
\`\`\`

### Usage

\`\`\`javascript
import { CodeNagarWidget, useCodeNagar } from 'codenagar-react-native';

function App() {
  const { client } = useCodeNagar({ apiKey: 'your-key' });

  return (
    <View>
      <CodeNagarWidget 
        type="contact-form"
        apiKey="your-key"
        onSuccess={() => console.log('Form submitted')}
      />
    </View>
  );
}
\`\`\`

## Flutter

### Installation

\`\`\`yaml
dependencies:
  codenagar_flutter: ^1.0.0
\`\`\`

### Usage

\`\`\`dart
import 'package:codenagar_flutter/codenagar_flutter.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return CodeNagarWidget(
      type: WidgetType.contactForm,
      apiKey: 'your-api-key',
      onSuccess: () => print('Success'),
    );
  }
}
\`\`\`

## iOS Native (Swift)

\`\`\`swift
import CodeNagarSDK

class ViewController: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let widget = CodeNagarWidget(frame: .zero)
        widget.configure(
            type: .contactForm,
            apiKey: "your-api-key"
        )
        view.addSubview(widget)
    }
}
\`\`\`

## Android Native (Kotlin)

\`\`\`kotlin
import com.codenagar.sdk.CodeNagarWidget

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        val widget = CodeNagarWidget(this)
        widget.configure(
            type = WidgetType.CONTACT_FORM,
            apiKey = "your-api-key"
        )
        setContentView(widget)
    }
}
\`\`\`
          `
        }
      ]
    },
    "faq": {
      title: "FAQ & Support",
      icon: MessageCircle,
      description: "Frequently asked questions and support resources",
      docs: [
        { 
          id: "general", 
          title: "General Questions", 
          content: `
# Frequently Asked Questions

## General Questions

### What services does CodeNagar offer?

We offer a comprehensive range of technology services including:

- **Web Development** - Modern responsive websites and web applications
- **Mobile App Development** - iOS and Android applications
- **ML/AI Integration** - Machine learning and artificial intelligence solutions
- **Cloud Solutions** - Scalable cloud infrastructure
- **IT Training** - Professional development programs
- **Hardware Store** - Quality computer and mobile accessories

### How do I get a quote?

Contact us through our [contact form](/contact) or email us directly at **sales@codenagar.com**. We'll respond within 24 hours.

### What are your payment terms?

We accept payments via:
- Bank transfer
- Credit card
- Cash (in-store pickup only)

Payment terms vary by project scope. Generally, we require 50% upfront for custom development projects.

## Technical Questions

### Do you provide API documentation?

Yes! You're currently viewing our complete API documentation. Check the [API Reference](#api-reference) section for detailed endpoint documentation.

### Can I integrate your services with my existing system?

Absolutely. Our APIs are designed for seamless integration with any existing infrastructure. We provide SDKs for JavaScript, Python, React Native, Flutter, iOS, and Android.

### What is your uptime guarantee?

We guarantee 99.9% uptime for all production services. Our infrastructure is distributed across multiple regions with automatic failover.

### Is there a free tier?

Yes, we offer a free tier for developers to test our APIs:
- 100 requests per hour
- Access to all endpoints
- Community support

## Support Questions

### How do I get technical support?

- Email: **support@codenagar.com**
- Phone: **+92 5822 123456**
- Live chat available on our website
- Response time: Within 2 hours for Pro and Enterprise plans

### Do you offer training?

Yes, we offer comprehensive training programs:
- Self-paced online courses
- Instructor-led workshops
- Corporate training programs
- One-on-one mentoring

### What is your refund policy?

For digital products and services:
- 30-day money-back guarantee for courses
- Satisfaction guarantee for development projects
- Return policy for hardware items (in-store only)

## Account Management

### How do I reset my password?

1. Go to the [login page](/login)
2. Click "Forgot Password"
3. Enter your email address
4. Follow the instructions sent to your email

### How do I update my billing information?

Log into your account dashboard and navigate to **Settings > Billing** to update your payment information.

### Can I upgrade or downgrade my plan?

Yes, you can change your subscription plan at any time from your account dashboard. Changes take effect immediately.
          `
        },
        { 
          id: "billing", 
          title: "Billing & Payments", 
          content: `
# Billing & Payments

Information about billing, payments, and subscriptions.

## Accepted Payment Methods

We accept the following payment methods:

- **Credit/Debit Cards** - Visa, Mastercard, American Express
- **Bank Transfer** - Local and international transfers
- **Cash** - For in-store pickup only

## Billing Cycle

- Monthly plans are billed on the same date each month
- Annual plans are billed once per year
- Custom projects are billed according to agreement

## Invoices

Invoices are generated automatically and sent to your registered email address. You can also download invoices from your account dashboard.

## Subscription Management

### Upgrade Plan

1. Log into your dashboard
2. Navigate to Settings > Subscription
3. Select your new plan
4. Confirm the upgrade

### Cancel Subscription

1. Log into your dashboard
2. Navigate to Settings > Subscription
3. Click "Cancel Subscription"
4. Confirm cancellation

## Refund Policy

### Courses
- Full refund within 30 days of purchase
- Must not have completed more than 25% of course content

### Services
- Satisfaction guarantee for development projects
- Refunds processed on a case-by-case basis

### Hardware
- 7-day return policy for unopened items
- 30-day warranty for defective products
- Returns only accepted in-store

## Contact Billing Support

For billing inquiries:
- Email: **billing@codenagar.com**
- Phone: **+92 5822 123456**
- Hours: Monday-Friday, 9AM-5PM
          `
        }
      ]
    }
  };

  // Search function
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    if (term.length < 2) {
      setSearchResults([]);
      return;
    }
    
    const results = [];
    Object.keys(documentation).forEach(categoryKey => {
      const category = documentation[categoryKey];
      category.docs.forEach(doc => {
        if (doc.title.toLowerCase().includes(term) || 
            doc.content.toLowerCase().includes(term)) {
          results.push({
            category: categoryKey,
            categoryTitle: category.title,
            docId: doc.id,
            title: doc.title,
            excerpt: doc.content.substring(0, 150).replace(/#/g, '').trim()
          });
        }
      });
    });
    setSearchResults(results.slice(0, 10));
  };

  // Render markdown content to HTML
  const renderMarkdown = (content) => {
    let html = content;
    
    // Replace headers
    html = html.replace(/^# (.*?)$/gm, '<h1 class="text-3xl font-bold mt-8 mb-4 gradient-text">$1</h1>');
    html = html.replace(/^## (.*?)$/gm, '<h2 class="text-2xl font-bold mt-6 mb-3 text-cyan-400">$1</h2>');
    html = html.replace(/^### (.*?)$/gm, '<h3 class="text-xl font-semibold mt-5 mb-2">$1</h3>');
    
    // Replace bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="text-cyan-400">$1</strong>');
    
    // Replace inline code
    html = html.replace(/`(.*?)`/g, '<code class="bg-dark-400 px-1.5 py-0.5 rounded text-cyan-400 font-mono text-sm">$1</code>');
    
    // Replace code blocks
    html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (match, lang, code) => {
      return `<pre class="bg-dark-400 p-4 rounded-lg overflow-x-auto my-4"><code class="text-gray-300 font-mono text-sm">${code.trim()}</code></pre>`;
    });
    
    // Replace lists
    html = html.replace(/^- (.*?)$/gm, '<li class="ml-4 mb-1 text-gray-300">$1</li>');
    html = html.replace(/<li/g, '<ul class="list-disc my-2"><li');
    html = html.replace(/<\/li>\n(?!<li)/g, '</li></ul>');
    
    // Replace tables
    html = html.replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(cell => cell.trim());
      return `<tr class="border-b border-white/10">${cells.map(cell => `<td class="px-4 py-2">${cell.trim()}</td>`).join('')}</tr>`;
    });
    
    // Replace regular paragraphs
    html = html.replace(/^(?!<[hl]|<\/?[ul]|<\/?li|<\/?pre|<\/?code)(.*?)$/gm, (match) => {
      if (match.trim() && !match.startsWith('<')) {
        return `<p class="text-gray-300 leading-relaxed my-3">${match}</p>`;
      }
      return match;
    });
    
    // Replace line breaks
    html = html.replace(/\n/g, '<br>');
    
    return html;
  };

  const currentCategory = documentation[selectedDoc.category];
  const currentDoc = currentCategory?.docs.find(doc => doc.id === selectedDoc.doc);

  const copyCurrentURL = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getNextPrevDoc = () => {
    const categories = Object.keys(documentation);
    let allDocs = [];
    categories.forEach(catKey => {
      documentation[catKey].docs.forEach(doc => {
        allDocs.push({
          category: catKey,
          docId: doc.id,
          title: doc.title
        });
      });
    });
    
    const currentIndex = allDocs.findIndex(d => 
      d.category === selectedDoc.category && d.docId === selectedDoc.doc
    );
    
    return {
      prev: currentIndex > 0 ? allDocs[currentIndex - 1] : null,
      next: currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null
    };
  };

  const { prev, next } = getNextPrevDoc();

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
          
          {/* Search Results */}
          <AnimatePresence>
            {searchResults.length > 0 && searchTerm.length >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute z-20 mt-2 w-full max-w-2xl bg-dark-300 rounded-lg border border-white/10 shadow-xl overflow-hidden"
              >
                {searchResults.map((result, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedDoc({ category: result.category, doc: result.docId });
                      setSearchTerm("");
                      setSearchResults([]);
                      setSidebarOpen(false);
                    }}
                    className="w-full text-left p-3 hover:bg-dark-400 transition border-b border-white/5 last:border-0"
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-cyan-400" />
                      <span className="font-medium">{result.title}</span>
                      <span className="text-xs text-gray-500">in {result.categoryTitle}</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1 line-clamp-1">{result.excerpt}</p>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
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
            lg:block overflow-y-auto h-[calc(100vh-120px)] lg:h-auto
          `}>
            <div className="p-4">
              <div className="flex justify-between items-center mb-4 lg:hidden">
                <h2 className="text-lg font-bold">Documentation</h2>
                <button onClick={() => setSidebarOpen(false)} className="p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <Link to="/" className="flex items-center gap-2 p-3 rounded-lg hover:bg-dark-400 transition mb-4 text-gray-400 hover:text-white">
                <Home className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
              
              {Object.keys(documentation).map((category) => {
                const cat = documentation[category];
                const Icon = cat.icon;
                return (
                  <div key={category} className="mb-6">
                    <h3 className="flex items-center gap-2 text-sm font-semibold text-cyan-400 mb-2 px-3">
                      <Icon className="w-4 h-4" /> {cat.title}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2 px-3">{cat.description}</p>
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
          <div className="flex-1 min-w-0">
            {currentDoc ? (
              <motion.div
                key={`${selectedDoc.category}-${selectedDoc.doc}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card p-6 md:p-8"
              >
                {/* Copy URL Button */}
                <div className="flex justify-end mb-4">
                  <button
                    onClick={copyCurrentURL}
                    className="flex items-center gap-2 px-3 py-1.5 text-sm bg-dark-400 rounded-lg hover:bg-dark-300 transition"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    {copied ? "Copied!" : "Copy URL"}
                  </button>
                </div>
                
                {/* Content */}
                <div 
                  className="prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: renderMarkdown(currentDoc.content) }}
                />
                
                {/* Navigation */}
                <div className="mt-8 pt-6 border-t border-white/10 flex justify-between">
                  {prev ? (
                    <button
                      onClick={() => setSelectedDoc({ category: prev.category, doc: prev.docId })}
                      className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-1 transition"
                    >
                      <ChevronLeft className="w-4 h-4" /> {prev.title}
                    </button>
                  ) : (
                    <div></div>
                  )}
                  {next ? (
                    <button
                      onClick={() => setSelectedDoc({ category: next.category, doc: next.docId })}
                      className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-1 transition"
                    >
                      {next.title} <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <div></div>
                  )}
                </div>

                {/* Help Section */}
                <div className="mt-8 p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-cyan-400" />
                    Need more help?
                  </h3>
                  <p className="text-sm text-gray-400">
                    Can't find what you're looking for? Contact our support team at <strong className="text-cyan-400">support@codenagar.com</strong>
                  </p>
                </div>
              </motion.div>
            ) : (
              <div className="glass-card p-8 text-center">
                <BookOpen className="w-16 h-16 mx-auto text-gray-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Select a Topic</h3>
                <p className="text-gray-400">Choose a topic from the sidebar to view documentation.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;