// frontend/src/pages/services/DevOps.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Cloud, Server, Shield, GitBranch, Zap, Database, Globe, Sparkles, ArrowRight, Clock, Award, TrendingUp, Rocket, DollarSign, Layers, Code, RefreshCw, Activity, Cpu, Terminal } from "lucide-react";

const DevOps = () => {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm">Automate • Deploy • Scale</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            DevOps <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Streamline your development pipeline with automated deployment, continuous integration, and scalable cloud infrastructure.
          </p>
        </motion.div>

        {/* Why Choose Us & Tools */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-3 py-1 mb-4">
              <Award className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-xs">Why Choose Us</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Why Choose Our DevOps Services?</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We help businesses automate their software delivery process, improve deployment frequency, and reduce failure rates with industry-standard DevOps practices and tools.
            </p>
            <div className="space-y-3">
              {[
                "CI/CD pipeline automation",
                "Infrastructure as Code (IaC)",
                "24/7 monitoring & alerting",
                "Cloud cost optimization",
                "Security & compliance",
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-2 group cursor-pointer"
                >
                  <CheckCircle className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-blue-300 transition-colors">{item}</span>
                </motion.div>
              ))}
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">10x</div>
                <div className="text-xs text-gray-400">Faster Deployments</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">99.99%</div>
                <div className="text-xs text-gray-400">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">30%</div>
                <div className="text-xs text-gray-400">Cost Reduction</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl p-8 border border-blue-500/20"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Terminal className="w-6 h-6 text-blue-400" />
              Tools & Technologies
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: GitBranch, name: "GitHub Actions", color: "from-gray-500 to-gray-700" },
                { icon: RefreshCw, name: "Jenkins", color: "from-red-500 to-rose-500" },
                { icon: Cloud, name: "Docker", color: "from-blue-500 to-cyan-500" },
                { icon: Server, name: "Kubernetes", color: "from-blue-600 to-indigo-600" },
                { icon: Shield, name: "Terraform", color: "from-blue-500 to-indigo-500" },
                { icon: Activity, name: "Prometheus", color: "from-orange-500 to-red-500" },
                { icon: Globe, name: "AWS/Azure/GCP", color: "from-yellow-500 to-orange-500" },
                { icon: Database, name: "Ansible", color: "from-green-500 to-emerald-500" },
              ].map((tool, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ scale: 1.02, x: 5 }}
                  className={`flex items-center gap-2 p-3 bg-gradient-to-r ${tool.color} rounded-lg shadow-lg`}
                >
                  <tool.icon className="w-4 h-4 text-white" />
                  <span className="text-white font-medium text-sm">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Services We Offer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-3 py-1 mb-4">
              <Layers className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-xs">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">DevOps Services We Offer</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">End-to-end DevOps solutions for modern software delivery</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: GitBranch, title: "CI/CD Pipeline", desc: "Automated build, test & deployment", color: "from-blue-500 to-cyan-500" },
              { icon: Cloud, title: "Cloud Infrastructure", desc: "AWS, Azure, GCP setup & management", color: "from-blue-500 to-indigo-500" },
              { icon: Server, title: "Container Orchestration", desc: "Docker & Kubernetes", color: "from-green-500 to-emerald-500" },
              { icon: Shield, title: "Infrastructure Security", desc: "Security scanning & compliance", color: "from-red-500 to-rose-500" },
              { icon: Activity, title: "Monitoring & Logging", desc: "Prometheus, Grafana, ELK stack", color: "from-orange-500 to-yellow-500" },
              { icon: RefreshCw, title: "Disaster Recovery", desc: "Backup & recovery solutions", color: "from-indigo-500 to-blue-500" },
            ].map((service, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all group"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* DevOps Pipeline */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-3 py-1 mb-4">
              <GitBranch className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-xs">Our Pipeline</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">CI/CD Pipeline</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">From code commit to production deployment</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Code", desc: "Version control & code review", icon: Code },
              { step: "02", title: "Build", desc: "Automated compilation & testing", icon: Cpu },
              { step: "03", title: "Deploy", desc: "Containerization & deployment", icon: Rocket },
              { step: "04", title: "Monitor", desc: "Performance & error tracking", icon: Activity },
            ].map((step, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-2xl font-bold mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <step.icon className="w-8 h-8 mx-auto mb-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-3 py-1 mb-4">
              <TrendingUp className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-xs">Benefits</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Adopt DevOps?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Transform your software delivery with DevOps practices</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Faster Delivery", desc: "200x more frequent deployments", color: "from-yellow-500 to-orange-500" },
              { icon: Shield, title: "Lower Failure Rate", desc: "3x less deployment failures", color: "from-green-500 to-emerald-500" },
              { icon: RefreshCw, title: "Quick Recovery", desc: "24x faster recovery time", color: "from-blue-500 to-cyan-500" },
              { icon: Clock, title: "Reduced Lead Time", desc: "Hours vs days/weeks", color: "from-blue-500 to-indigo-500" },
            ].map((benefit, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-blue-500 transition-all"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold mb-1">{benefit.title}</h3>
                <p className="text-gray-400 text-xs">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cloud Providers */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-3 py-1 mb-4">
              <Cloud className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-xs">Cloud Partners</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cloud Providers We Work With</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Multi-cloud expertise for maximum flexibility</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "AWS", icon: Globe, desc: "Amazon Web Services" },
              { name: "Azure", icon: Cloud, desc: "Microsoft Azure" },
              { name: "GCP", icon: Database, desc: "Google Cloud" },
              { name: "DigitalOcean", icon: Server, desc: "Simple cloud hosting" },
            ].map((provider, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/30 rounded-xl p-4 text-center border border-gray-700 hover:border-blue-500 transition-all"
              >
                <provider.icon className="w-10 h-10 mx-auto mb-2 text-blue-400" />
                <h3 className="font-semibold">{provider.name}</h3>
                <p className="text-xs text-gray-400 mt-1">{provider.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Plans */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-3 py-1 mb-4">
              <DollarSign className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-xs">Investment</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">DevOps Packages</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Flexible engagement models for your infrastructure needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Starter", price: "$149", priceLabel: "month", features: ["CI/CD Setup", "Basic Monitoring", "Infrastructure as Code", "1 Cloud Provider", "Email Support"], popular: false, color: "from-blue-500 to-cyan-500" },
              { name: "Professional", price: "$299", priceLabel: "month", features: ["Full CI/CD Pipeline", "Advanced Monitoring", "Kubernetes Setup", "Multi-cloud", "24/7 Support", "Security Scanning"], popular: true, color: "from-blue-500 to-indigo-500" },
              { name: "Enterprise", price: "Custom", priceLabel: "quote", features: ["Custom Infrastructure", "Dedicated DevOps Team", "Disaster Recovery", "Compliance & Audits", "SLA Agreement", "24/7 Dedicated Support"], popular: false, color: "from-orange-500 to-red-500" },
            ].map((plan, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -8 }}
                className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border ${
                  plan.popular ? "border-blue-500 shadow-xl shadow-blue-500/10" : "border-gray-700"
                } relative overflow-hidden group`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-600 to-indigo-600 px-4 py-1 rounded-bl-xl text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
                  <span className="text-gray-400 text-sm ml-1">/{plan.priceLabel}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`block text-center py-3 rounded-xl font-semibold transition-all ${
                    plan.popular 
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg hover:shadow-blue-500/25" 
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                >
                  Get Started <ArrowRight className="inline w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Case Study */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-2xl p-8 border border-blue-500/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-2">5x Faster Deployments</h3>
                <p className="text-gray-300 mb-4">Reduced deployment time from 4 hours to 15 minutes for a SaaS platform serving 1M+ users.</p>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-blue-400 font-bold text-xl">4hrs → 15min</div>
                    <div className="text-xs text-gray-400">Deployment Time</div>
                  </div>
                  <div>
                    <div className="text-blue-400 font-bold text-xl">99.99%</div>
                    <div className="text-xs text-gray-400">Uptime Achieved</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <p className="text-gray-300 italic">"CodeNagar transformed our infrastructure. Deployments are now effortless and our team can focus on building features instead of managing servers."</p>
                  <div className="mt-4">
                    <p className="font-semibold">Bilal Ahmed</p>
                    <p className="text-sm text-gray-400">CTO, TechFlow.ai</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl p-12 border border-blue-500/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Modernize Your Infrastructure?</h2>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Let's automate your deployment pipeline and scale your infrastructure with confidence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all group"
            >
              Get Free Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </Link>
            <Link 
              to="/portfolio" 
              className="inline-flex items-center gap-2 px-8 py-3 border border-gray-600 rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              View Case Studies
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DevOps;