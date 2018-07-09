// @flow
import * as d3 from 'd3'

export type TrackId = 'LEADERSHIP' | 'MENTORSHIP' | 'TECHNICAL SKILLS' | 'DELIVERY' | 'BUSINESS KNOWLEDGE' | 'COMMUNICATION' | 'EMONTIONAL INTELLIGENCE'
export type Milestone = 0 | 1 | 2 | 3 | 4 | 5

export type MilestoneMap = {
  'LEADERSHIP': Milestone,
  'MENTORSHIP': Milestone,
  'TECHNICAL SKILLS': Milestone,
  'DELIVERY': Milestone,
  'BUSINESS KNOWLEDGE': Milestone,
  'COMMUNICATION': Milestone,
  'EMONTIONAL INTELLIGENCE': Milestone,
}
export const milestones = [0, 1, 2, 3, 4, 5]

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0: return 0
    case 1: return 1
    case 2: return 3
    case 3: return 6
    case 4: return 12
    case 5: return 20
    default: return 0
  }
}

export const pointsToLevels = {
  '0': '1.1',
  '5': '1.2',
  '11': '1.3',
  '17': '2.1',
  '23': '2.2',
  '29': '2.3',
  '36': '3.1',
  '43': '3.2',
  '50': '3.3',
  '58': '4.1',
  '66': '4.2',
  '74': '4.3',
  '90': '5.1',
  '110': '5.2',
  '135': '5.3',
}

export const maxLevel = 135

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }[]
}

type Tracks = {|
  'LEADERSHIP': Track,
  'MENTORSHIP': Track,
  'TECHNICAL SKILLS': Track,
  'DELIVERY': Track,
  'BUSINESS KNOWLEDGE': Track,
  'COMMUNICATION': Track,
  'EMONTIONAL INTELLIGENCE': Track,
|}

export const tracks: Tracks = {
  "LEADERSHIP": {
    "displayName": "Leadership",
    "category": "A",
    "description": "Leading by example, growing teams and understading what drives people",
    "milestones": [{
      "summary": "Level 1",
      "signals": [
        "Able to identify and communicate problems with the product team and process.",
      ],
      "examples": [
        "Raised a concern about inefficient standups at the retro",
      ],
    }, {
      "summary": "Level 2",
      "signals": [
        "Able to identify problems with the product team and process, and investigate potential causes.",
        "Occasionally takes a lead in product team processes."
      ],
      "examples": [
        "Facilitated a product team retrospective",
        "Led a feature kick-off"
      ],
    }, {
      "summary": "Level 3",
      "signals": [
        "Able to identify problems with the product team and process, investigate potential causes, and propose solutions/next steps.",
        "Able to identify product team and process areas that require ownership/improvement."
      ],
      "examples": [
        "Suggested a new standup format",
      ],
    }, {
      "summary": "Level 4",
      "signals": [
        "Able to identify problems with the product team and process, investigate potential causes, implement solutions/next steps, and proactively inform the right people of the change.",
      ],
      "examples": [
        "Implemented a new bug-tracking process",
      ],
    }, {
      "summary": "Level 5",
      "signals": [
        "Able to identify problems with the product team and process, and encourage developers to own investigations and proposals for fixes.",
        "Able to support and lead technical direction in a product team."
      ],
      "examples": [
        "Ran a kick-off meeting",
      ],
    }],
  },
  "MENTORSHIP": {
    "displayName": "Mentorship",
    "category": "A",
    "description": "Mentoring, coaching and identifying areas of improvement and progression",
    "milestones": [{
      "summary": "Level 1",
      "signals": [
        "Pairs effectively with other developers in the team.",
      ],
      "examples": [
        "Paired with a developer on a feature",
      ],
    }, {
      "summary": "Level 2",
      "signals": [
        "Supports new hires, mentors peers in an ad-hoc way.",
        "Able to mentor new hires.",
      ],
      "examples": [
        "Acted as a mentor buddy for a new hire",
        "Helped a developer understand how a system works",
      ],
    }, {
      "summary": "Level 3",
      "signals": [
        "Able to deliver constructive, actionable feedback in an empathetic way.",
      ],
      "examples": [
        "Suggested improvements empathetically during a code review",
        "Shared a blog post with a colleague to help them with a problem",
        "Identified when it would be more valuable for someone else to pick up a task (e.g. for educational purposes) instead of doing it themselves",
      ],
    }, {
      "summary": "Level 4",
      "signals": [
        "Actively coach / mentor junior members of the team.",
        "Actively works to share information with the team, e.g. best practices, technical approaches (avoiding silos).",
      ],
      "examples": [
        "Prepared and delivered a presentation on Git best practices",
        "Introduced a short presentation on Ruby best practices as part of onboarding",
      ],
    }, {
      "summary": "Level 5",
      "signals": [
        "Actively mentors developers, identifying areas for focus and improvement.",
        "Coaches developers to answers for their questions / problems.",
      ],
      "examples": [
        "Did a workshop on how Phoenix works",
        "Worked with a developer to organise a mob programming session to remove an information silo",
      ],
    }],
  },
  "TECHNICAL SKILLS": {
    "displayName": "Technical skills",
    "category": "B",
    "description": "Knowledge on best practices, testing, refactoring and awareness of progress in industry",
    "milestones": [{
      "summary": "Level 1",
      "signals": [
        "Small amount of experience in one area (application, service, domain, technology, stack,etc).",
        "Able to identify and communicate problems with technology; able to suggest improvements to existing technology and tools.",
      ],
      "examples": [
        "Shipped a small feature",
        "Added a test",
        "Found and fixed a bug"
      ],
    }, {
      "summary": "Level 2",
      "signals": [
        "Large amount of experience in one area (application, service, domain, technology, stack, etc).",
        "Able to identify and communicate problems with technology, and investigate potential causes", 
        "Able to suggest improvements to technology and tools and investigate implementations.",
      ],
      "examples": [
        "Investigated flakey tests on Jenkins, and shared output from initial investigation",
        "Extracted functionality shared by several pages into its own component"
      ],
    }, {
      "summary": "Level 3",
      "signals": [
        "Large amount of experience in multiple areas.",
        "Able to identify and communicate problems with technology, investigate potential causes, and propose solutions.", 
        "Able to suggest improvements to technology and tools, investigate implementations",  
        "Able to identify tech areas that require ownership/ improvement.",
      ],
      "examples": [
        "Investigated adding a new library, and shared results with the team",
        "Refactored a module in a service before adding functionality to it to make it more testable",
        "Took ownership of the process inside a system",
      ],
    }, {
      "summary": "Level 4",
      "signals": [
        "Keeps up with industry best practices.",
        "Enables other developers to work more effectively.",
        "Able to investigate improvements to technology and tools and plan implementations.",
      ],
      "examples": [
        "Made a plan to add/modify the behaviour on one of the main systems to skweb, worked with the team to roll-out",
        "Work and published a new library",
      ],
    }, {
      "summary": "Level 5",
      "signals": [
        "Understands the impact of technology choices on the team.",
      ],
      "examples": [
        "Researched and chose a technology",
      ],
    }],
  },
  "DELIVERY": {
    "displayName": "Delivery",
    "category": "B",
    "description": "Showing initiative, estimating effectively, ability to delegate, understanding when to get support and impact on team productivity",
    "milestones": [{
      "summary": "Level 1",
      "signals": [
        "Able to deliver small/medium tasks, working individually or in a pair.",
      ],
      "examples": [
        "Shipped a small feature on time without any support",
        "Added a medium feature, pairing with another developer",
      ],
    }, {
      "summary": "Level 2",
      "signals": [
        "Able to deliver medium/large tasks individually or with support from peers.",
        "Able to estimate delivery of work",
      ],
      "examples": [
        "Shipped a medium skweb feature without any support",
        "Correctly estimated the amount of time a new endpoint would take to implement",
      ],
    }, {
      "summary": "Level 3",
      "signals": [
        "Able to deliver medium/large tasks that span multiple systems with support from peers.",
        "Able to estimate delivery of work, and proactively inform the team when work is likely to be delayed.",
        "Able to question and push back on work that is not valuable for the tech team.",
        "Able to effectively prioritise own workload and focus across.",
      ],
      "examples": [
        "Shipped a new microservice with support from colleagues",
        "Broke a large piece of work into smaller individual units that could be parallelised",
      ],
    }, {
      "summary": "Level 4",
      "signals": [
        "Able to deliver large tasks that touch multiple systems, working individually when required.",
        "Able to estimate delivery of work, proactively inform the team when work is likely to be delayed, and suggest sensible workarounds/next steps to mitigate impact of delayed work.",
      ],
      "examples": [
        "Reduced the scope of a feature in order to cut down development time",
        "Planned and executed a database migration that required downtime, informed the right people about it and sought the right support",
      ],
    }, {
      "summary": "Level 5",
      "signals": [
        "Able to estimate delivery of work across the product team, proactively informing the stakeholders on progress.",
        "Effectively manages deliverables for the team, ensuring the prioritised work is planned and valuable to our goals.",
        "Actively works to remove distractions and lowimpact work from the tech team.",
      ],
      "examples": [
        "Delegated a task in order to focus on unblocking the developers",
      ],
    }],
  },
  "BUSINESS KNOWLEDGE": {
    "displayName": "Business knowledge",
    "category": "B",
    "description": "Understanding how the industry works and its competitors, how value is delivered",
    "milestones": [{
      "summary": "Level 1",
      "signals": [
        "Understands product team’s goals, and how they impact the company.",
        "Understand impact of work on product team and goals.",
      ],
      "examples": [
        "Suggested features during a team thought-shower",
        "Explained product team’s goals to a new starter",
      ],
    }, {
      "summary": "Level 2",
      "signals": [
        "Able to ask questions / seek clarity on what the product team is doing and why.",
      ],
      "examples": [
        "Raised a concern about the team’s goals at a retrospective",
        "Asked the team PM for clarification on why a particular piece of work had been prioritised",
      ],
    }, {
      "summary": "Level 3",
      "signals": [
        "Able to understand company goals, ask questions/challenge company goals/seek clarity on what the company is doing and why.",
      ],
      "examples": [
        " Asked a question about next quarter’s goals at a company meeting",
        "Understand company’s goals in a 1:1 with manager",
        "Able to clearly explain company goals to others in the team",
      ],
    }, {
      "summary": "Level 4",
      "signals": [
        "Able to communicate/explain/advocate product team’s goals to developers in the team.",
      ],
      "examples": [
        "Clarified to a developer on the team why a particular piece of work was valuable",
        "Encouraged developers on the team to think about their work in terms of impact on the product teams goals",
      ],
    }, {
      "summary": "Level 5",
      "signals": [
        "Understand and communicate the goals across product teams, and how they contribute to the company’s success.",
        "Works to make sure developers understand the team and company’s goals.",
        "Help shape product team goals to ensure they’re delivering value for the business.",
      ],
      "examples": [
        "Worked with a Product Owner to pick a feasible metric for the quarter",
        "Had a 1:1 with a developer and gave them the context behind the quarterly goal",
      ],
    }],
  },
  "COMMUNICATION": {
    "displayName": "Communication",
    "category": "D",
    "description": "Explaining work to peers and non-technical stakeholders, proactive communication",
    "milestones": [{
      "summary": "Level 1",
      "signals": [
        "Communicates with peers effectively and in a timely manner.",
      ],
      "examples": [
        "Consistently writes good commit messages and release log emails",
        "Asked for help during standup", 
      ],
    }, {
      "summary": "Level 2",
      "signals": [
        "Communicates effectively with non-technical peers, able to present their work to the wider company.",
      ],
      "examples": [
        "Delivered a Show and Tell presentation",
        "Acted as communicator during a fire and updated appropriate stakeholders in a timely manner",
      ],
    }, {
      "summary": "Level 3",
      "signals": [
        "Able to explain their work to the wider company, including to a nontechnical audience.",
        "Practises active listening.",
      ],
      "examples": [
        "Wrote a companywide email explaining the impact of a technical change",
        "Listened to all points of view during a discussion without interrupting anyone",
      ],
    }, {
      "summary": "Level 4",
      "signals": [
        "Can explain the impact of their product team’s work to non-technical stakeholders",
      ],
      "examples": [
        "Delivered a presentation about a technical migration at a company meeting",
        "Wrote a blog post on the dev blog",
      ],
    }, {
      "summary": "Level 5",
      "signals": [
        "Can explain the impact of their product team’s work to non-technical stakeholders; can explain the team’s goals to their team in an engaging way",
      ],
      "examples": [
        "Delivered a presentation about a technical migration at a company meeting",
      ],
    }],
  },
  "EMOTIONAL INTELLIGENCE": {
    "displayName": "Emotional intelligence",
    "category": "D",
    "description": "Empathy, avoiding blame, awareness of team morale and trying to improve it",
    "milestones": [{
      "summary": "Level 1",
      "signals": [
        "Displays empathy towards colleagues.",
      ],
      "examples": [
        "Gave unprompted positive feedback to a colleague",
        "Checked in with a colleague who is struggling",
      ],
    }, {
      "summary": "Level 2",
      "signals": [
        "Displays empathy towards the users of our products.",
      ],
      "examples": [
        "Voiced a concern about an existing bug that affects a large amount of users",
        "Able to not panic during a user-facing fire and identify the failing part of the stack, working with others to fix it",
      ],
    }, {
      "summary": "Level 3",
      "signals": [
        "Nurtures empathy and no-blame culture in their product team.",
      ],
      "examples": [
        "Suggested how we can improve a process in the aftermath of a fire instead of identifying whose fault it was",
        "Understood the context for a certain piece of tech debt instead of apportioning blame",
      ],
    }, {
      "summary": "Level 4",
      "signals": [
        "Identifies morale issues in product team, and works with team members to address or seeks support in doing so.",
      ],
      "examples": [
        "Diffused tension between two participants in a retrospective",
      ],
    }, {
      "summary": "Level 5",
      "signals": [
        "Able to read the morale of their product team and respond to their needs.",
        "Works to actively improve morale in the product teams.",
      ],
      "examples": [
        "Diffused tension between two participants in a retrospective",
        "Got the engineers in the team excited about a potentially boring piece of work",
      ],
    }],
  },
}

export const trackIds: TrackId[] = Object.keys(tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map()
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone))
  })
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => (sum + addend), 0)

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#00abc2', '#428af6', '#e1439f', '#e54552'])

export const titles = [
  {label: 'Engineer I', minPoints: 0, maxPoints: 16},
  {label: 'Engineer II', minPoints: 17, maxPoints: 35},
  {label: 'Senior Engineer', minPoints: 36, maxPoints: 57},
  {label: 'Group Lead', minPoints: 36, maxPoints: 57},
  {label: 'Staff Engineer', minPoints: 58, maxPoints: 89},
  {label: 'Senior Group Lead', minPoints: 58, maxPoints: 89},
  {label: 'Principal Engineer', minPoints: 90},
  {label: 'Director of Engineering', minPoints: 90}
]

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
    .map(title => title.label)
}
