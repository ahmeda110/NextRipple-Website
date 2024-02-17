import React from 'react'
import styles from './About.module.css'
import PageHeader from '../components/PageHeader'
import Headshot from '../assets/placeholder-headshot.png'
import TeamIcon from '../assets/icons/team.svg'
import SolutionIcon from '../assets/icons/solution.svg'
import AccountabilityIcon from '../assets/icons/accountability.svg'
import CommitmentIcon from '../assets/icons/commitment.svg'
import EfficiencyIcon from '../assets/icons/efficiency.svg'

const stats = [
  { value: "100k+", label: "App downloads" },
  { value: "10+", label: "Years of experience" },
  { value: "625k+", label: "Monthly active users" },
  { value: "11", label: "Products built" }
];

const members = [
  { name: "Ahmed Abbas", title: "Lead Engineer", image: Headshot, alt: "Placeholder Headshot" },
  { name: "Ghamdan Alrawhani", title: "Lead Engineer", image: Headshot, alt: "Placeholder Headshot"  }
];

const valuesData = [
  { icon: EfficiencyIcon, highlight: "Efficiency", text: "We build digital solutions that balance optimal performance with maximum impact." },
  { icon: AccountabilityIcon, highlight: "Accountability", text: "We take ownership of our actions with our clients, partners, and team members." },
  { icon: CommitmentIcon, highlight: "Commitment", text: "We are committed to going above and beyond to deliver exceptional digital solutions." }
];

function About() {
  return (
    <div>
      <PageHeader title="About Us" />

      {/* Statistics */}
      <div className={styles.statsContainer}>
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <div>
              <p className={styles.highlightStats}>{stat.value}</p>
              <p className={styles.bodyText}>{stat.label}</p>
            </div>
            {index < stats.length - 1 && <div className={styles.verticalDivider} />}
          </React.Fragment>
        ))}
      </div>

      {/* Introducing the team */}
      <div className={styles.lightContainer}> 
      <div className={styles.rowFlexContainer}>
        <img src={TeamIcon} className={styles.icon} alt="Team Icon"/>
        <p className={styles.highlightSection}> Introducing Our Team</p>
      </div>
        <div className={styles.rowFlexContainer}>
          {members.map((member, index) => (
          <div key={index} className={styles.person}>
            <img src={member.image} className={styles.teamMember} alt={member.alt}/>
            <p className={styles.bodyTextDark}><b>{member.name}</b></p>
            <p className={styles.bodyTextDark}>{member.title}</p>
          </div>
        ))}
        </div>
      </div>

      {/* Who Are We */}
      <div className={styles.darkContainer}>
        <div className={styles.rowFlexContainer}>
          <img src={SolutionIcon} className={styles.icon} alt="Solution Icon"/>
          <p className={styles.sectionTitleSolid}>Who Are We?</p>
        </div>
        <div className={styles.horizontalDivider} />
        <p className={styles.description}>Welcome to NextRipple, where innovation meets ingenuity to shape the digital landscape of 
          tomorrow. We provide cutting-edge, digital solutions that empower businesses and individuals 
          to thrive in an evolving digital era.</p>
          <div className={styles.rowFlexContainer}>
          {valuesData.map((value, index) => (
            <div key={index} className={styles.valueContainer}>
              <img src={value.icon} className={styles.iconBig} alt={`${value.highlight} Icon`} />
              <p className={styles.highlightValues}>{value.highlight}</p>
              <p className={styles.bodyText}>{value.text}</p>
            </div>
          ))}
          </div>
      </div>
      
    </div>
  )
}

export default About