// @flow
import * as d3 from 'd3'

export type TrackId = 'LEADERSHIP' | 'MENTORSHIP' | 'TECHNICAL SKILLS' | 'COMMUNICATION' | 'EMONTIONAL INTELLIGENCE' | 'DELIVERY' | 'BUSINESS KNOWLEDGE'
export type Milestone = 0 | 1 | 2 | 3 | 4 | 5

export type MilestoneMap = {
  'LEADERSHIP': Milestone,
  'MENTORSHIP': Milestone,
  'TECHNICAL SKILLS': Milestone,
  'COMMUNICATION': Milestone,
  'EMONTIONAL INTELLIGENCE': Milestone,
  'DELIVERY': Milestone,
  'BUSINESS KNOWLEDGE': Milestone,
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
|}

export const tracks: Tracks = {
  "LEADERSHIP": {
    "displayName": "Leadership",
    "category": "A",
    "description": "Description",
    "milestones": [{
      "summary": "Level 1",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "Level 2",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "Level 3",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "Level 4",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "Level 5",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }],
  },
  "MENTORSHIP": {
    "displayName": "Mentorship",
    "category": "B",
    "description": "Description",
    "milestones": [{
      "summary": "Level 1",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "Level 2",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "Level 3",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "Level 4",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "Level 5",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }],
  },
  "TECHNICAL SKILLS": {
    "displayName": "Technical skills",
    "category": "C",
    "description": "Description",
    "milestones": [{
      "summary": "Level 1",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "Level 2",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "Level 3",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "Level 4",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "Level 5",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }],
  },
  "COMMUNICATION": {
    "displayName": "Communication",
    "category": "D",
    "description": "Description",
    "milestones": [{
      "summary": "Level 1",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "Level 2",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "Level 3",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "Level 4",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "Level 5",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }],
  },
  "EMOTIONAL INTELLIGENCE": {
    "displayName": "Emotional intelligence",
    "category": "E",
    "description": "Description",
    "milestones": [{
      "summary": "Level 1",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "Level 2",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "Level 3",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "Level 4",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "Level 5",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }],
  },
  "DELIVERY": {
    "displayName": "Delivery",
    "category": "F",
    "description": "Description",
    "milestones": [{
      "summary": "Level 1",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "Level 2",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "Level 3",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "Level 4",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "Level 5",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }],
  },
  "BUSINESS KNOWLEDGE": {
    "displayName": "Business knowledge",
    "category": "G",
    "description": "Description",
    "milestones": [{
      "summary": "Level 1",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "Level 2",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "Level 3",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "Level 4",
      "signals": [
        "",
      ],
      "examples": [
        "",
      ],
    }, {
      "summary": "Level 5",
      "signals": [
        "",
      ],
      "examples": [
        "",
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
