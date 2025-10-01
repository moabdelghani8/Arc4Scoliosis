import React from 'react';
import { TeamMember } from '../../types';
import './TeamSection.css';

interface TeamSectionProps {
  teamMembers: TeamMember[];
}

// Sub-component for section header
function SectionHeader() {
  return (
    <div className="team-header">
      <h2 className="team-header-title">
        Meet Our Expert Team
      </h2>
      <p className="team-header-subtitle">
        Our experienced physical therapists are dedicated to providing you with the highest quality care and personalized treatment.
      </p>
    </div>
  );
}

// Sub-component for team member image
function MemberImage({ image, name }: { image: string; name: string }) {
  return (
    <div className="team-member-image-container">
      <img
        src={image}
        alt={name}
        className="team-member-image"
      />
    </div>
  );
}

// Sub-component for team member content
function MemberContent({ member }: { member: TeamMember }) {
  return (
    <div className="team-member-content">
      <h3 className="team-member-name">
        {member.name}
      </h3>
      
      <div className="team-member-title">
        {member.title}
      </div>
      
      <div className="team-member-credentials">
        {member.credentials}
      </div>
      
      <p className="team-member-bio">
        {member.bio}
      </p>
    </div>
  );
}

// Sub-component for individual team member card
function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="team-member-card">
      <MemberImage image={member.image} name={member.name} />
      <MemberContent member={member} />
    </div>
  );
}

// Main component
export function TeamSection({ teamMembers }: TeamSectionProps) {
  return (
    <section id="team" className="team-section">
      <div className="team-container">
        <SectionHeader />

        <div className="team-grid">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}