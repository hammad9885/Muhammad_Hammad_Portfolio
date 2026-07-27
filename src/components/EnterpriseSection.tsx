import { Shield, Database, Building2, CircleCheck } from 'lucide-react';
import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import '../assets/css/Enterprise.css';

export default function EnterpriseSection() {
  return (
    <section id="enterprise" className="enterprise">
      <div className="container">
        <SectionHeader
          tag="// enterprise & government"
          title="Real-World Systems."
        />

        <div className="enterprise-grid">
          <FadeIn delay={0.05} y={20}>
            <div className="enterprise-card">
              <div className="enterprise-card-header">
                <div className="enterprise-card-icon">
                  <Shield size={20} />
                </div>
                <span className="enterprise-card-badge">Government Digital Project</span>
              </div>
              <h3 className="enterprise-card-title">NCCIA — Digital Operations System</h3>
              <p className="enterprise-card-sub">National Cyber Crime Investigation Agency, Pakistan</p>
              <p className="enterprise-card-desc">
                Contributed to the development of a government digital system supporting complex
                operational workflows and case management processes. Worked as part of the development
                team to build and improve enterprise-grade software for public sector operations.
              </p>
              <ul className="enterprise-card-list">
                <li><CircleCheck size={14} /> Enterprise-grade software development for government operations</li>
                <li><CircleCheck size={14} /> Complex workflow and case management implementation</li>
                <li><CircleCheck size={14} /> Database-driven application with full stack architecture</li>
                <li><CircleCheck size={14} /> Secure and maintainable software following best practices</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} y={20}>
            <div className="enterprise-card">
              <div className="enterprise-card-header">
                <div className="enterprise-card-icon">
                  <Database size={20} />
                </div>
                <span className="enterprise-card-badge">Enterprise Software</span>
              </div>
              <h3 className="enterprise-card-title">ERP Systems</h3>
              <p className="enterprise-card-sub">Business Management & Operations</p>
              <p className="enterprise-card-desc">
                Worked on multiple ERP systems handling real business operations, data management,
                and process automation. Built features for inventory, sales, purchasing, reporting,
                and user management.
              </p>
              <ul className="enterprise-card-list">
                <li><CircleCheck size={14} /> Inventory and stock management modules</li>
                <li><CircleCheck size={14} /> Sales and purchase workflow automation</li>
                <li><CircleCheck size={14} /> Business reporting and dashboard systems</li>
                <li><CircleCheck size={14} /> User roles, permissions, and access control</li>
              </ul>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          <div className="enterprise-note">
            <Building2 size={14} style={{ verticalAlign: 'middle', marginRight: 6, color: 'var(--accent)' }} />
            Focused on building maintainable, scalable enterprise solutions for real-world business and government requirements.
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
