/**
 * Project Spotlight cards — shared by index.html (shuffle preview) and project-spotlight.html.
 * Edit this file to update spotlight content everywhere.
 * Optional fields per card: url (project link), image (path to header image for modal, e.g. images/foo.png), imageFit: 'contain' (fit whole image without cropping; default is cover), photoBg (e.g. '#fff' for header strip behind image), imagePosition (CSS object-position when using cover, e.g. 'center top').
 * Collapsed cards show spotlightFirstSentence(desc); modal uses long when set, otherwise full desc.
 */
var SPOTLIGHT_CARDS = [
  {
    tag: 'Civic participation & deliberation',
    tagClass: 'tag-p1',
    name: 'Talk to the City',
    org: 'AI Objectives Institute',
    url: 'https://talktothe.city/',
    image: 'images/talktothecity.png',
    desc: 'An open-source AI tool that transforms large-scale public input into structured insights, grounding every summary in direct participant quotes.',
    long: 'An open-source AI tool that transforms large-scale public input into structured insights, grounding every summary in direct participant quotes. Designed for public consultations, civic dialogue, and collaborative problem-solving, it uses large language models to identify themes across thousands of responses while keeping every claim tied to exact participant statements. It has been used by governments, unions, and advocacy groups including the Taiwanese government and the Taiwan AI Assembly.'
  },
  {
    tag: 'Civic participation & deliberation',
    tagClass: 'tag-p1',
    name: 'Engaged California',
    org: 'California Office of Data and Innovation',
    url: 'https://engaged.ca.gov/',
    image: 'images/engaged-california.png',
    desc: 'A state-run platform that invites Californians into structured virtual conversations on policy issues, enabling government to listen to citizens at scale outside of election cycles.',
    long: 'A state-run platform that invites Californians into structured virtual conversations on policy issues, designed to enable government to listen to citizens at scale outside of election cycles. Launched in early 2025 and inspired by deliberative democracy models in Taiwan, it prioritizes accessibility and anonymity to reach people who cannot participate through traditional channels like public meetings or written comment.'
  },
  {
    tag: 'Information environment & epistemics',
    tagClass: 'tag-p4',
    name: 'Documenters.org',
    org: 'City Bureau',
    url: 'https://documenters.org/',
    image: 'images/documenters.png',
    desc: 'A civic platform that trains and pays community members to attend and document local government meetings, making public records more accessible and searchable in one place. Built in response to the near-total absence of media coverage of local government proceedings, it has collected more than 50,000 documents from hundreds of government websites since launching in 2018.'
  },
  {
    tag: 'Information environment & epistemics',
    tagClass: 'tag-p4',
    name: 'Normsy',
    org: 'Civic Health Project',
    url: 'https://normsy.ai/',
    image: 'images/normsy.png',
    desc: 'Combines AI tools with trained human moderators to identify toxic content on social media in real time and intervene in ways that depolarize conversations and reinforce civic norms. It requires no buy-in from social media platforms and works by injecting constructive responses into online threads at a scale no human team could reach alone.'
  },
  {
    tag: 'Civic participation & deliberation',
    tagClass: 'tag-p1',
    name: 'The People\'s Money',
    org: 'Decidim Free Software Association',
    url: 'https://www.participate.nyc.gov/',
    image: 'images/the-peoples-money.png',
    imageFit: 'contain',
    desc: 'A citywide participatory budgeting process that gives New Yorkers direct input into how part of the city\'s budget is spent, open to all residents including youth and immigrants. Since its first cycle in 2022, it has funded 46 projects totaling $5 million, with ideas generated, shaped, and voted on by thousands of New Yorkers across borough-level civic assemblies.'
  },
  {
    tag: 'Election integrity',
    tagClass: 'tag-p2',
    name: 'TurboVote',
    org: 'Democracy Works',
    url: 'https://www.democracy.works/turbovote',
    image: 'images/turbovote.png',
    photoBg: '#ffffff',
    desc: 'A voter engagement platform that provides personalized guidance on registration, absentee voting, upcoming elections, and sample ballots tailored to where a user lives. Organizations embed it directly into their websites and communications to help their audiences navigate the voting process and receive automatic election reminders via SMS and email.'
  },
  {
    tag: 'Election integrity',
    tagClass: 'tag-p2',
    name: 'Power the Polls',
    org: 'Fair Elections Center',
    url: 'https://www.powerthepolls.org/',
    image: 'images/power-the-polls.png',
    desc: 'A nonpartisan initiative that recruits poll workers to ensure elections are adequately staffed, directing sign-ups to their local jurisdiction\'s official application and identifying where workers are most needed. Launched in 2020 in response to a nationwide poll worker shortage, it has recruited over one million prospective poll workers across all 50 states.'
  },
  {
    tag: 'Civic participation & deliberation',
    tagClass: 'tag-p1',
    name: 'Sensemaker',
    org: 'Google Jigsaw',
    url: 'https://jigsaw-code.github.io/sensemaking-tools/',
    image: 'images/sensemaker.png',
    desc: 'An open-source toolkit developed by Google Jigsaw that uses large language models to analyze large-scale online conversations, identifying topics, categorizing statements, and surfacing areas of agreement and disagreement. Designed for participants, facilitators, and decision-makers who need to extract actionable insights from public input too large to review manually.'
  },
  {
    tag: 'Governance & policy',
    tagClass: 'tag-p7',
    name: 'Reboot Democracy',
    org: 'The Governance Lab (GovLab)',
    url: 'https://rebootdemocracy.ai/',
    image: 'images/reboot-democracy.png',
    desc: 'A research blog and knowledge platform exploring how AI can strengthen democratic institutions through timely analysis, case studies, and critical reflection on AI in governance. It publishes practical insights on how governments and communities are experimenting with AI to improve public decision-making, participation, and service delivery.'
  },
  {
    tag: 'Civic participation & deliberation',
    tagClass: 'tag-p1',
    name: 'Polis 2.0',
    org: 'Computational Democracy Project',
    url: 'https://pol.is/home2',
    image: 'images/polis-2.png',
    desc: 'An enhanced version of the open-source Polis platform that uses LLMs and automated clustering to map viewpoints, identify consensus, and generate summaries across conversations with millions of simultaneous participants. Building on a decade of deployment across Taiwan, the UK, Finland, and beyond, Polis 2.0 automates moderation and report generation while preserving the option for human oversight, removing barriers that previously required expert facilitation.'
  },
  {
    tag: 'Information environment & epistemics',
    tagClass: 'tag-p4',
    name: 'PolitiFact',
    org: 'Poynter Institute',
    url: 'https://www.politifact.com/',
    image: 'images/politifact.png',
    imagePosition: 'center top',
    desc: 'A nonpartisan fact-checking outlet that rates the accuracy of statements made by politicians and public figures, giving citizens independently verified information to hold leaders accountable. Founded in 2007 and now owned by the nonprofit Poynter Institute, it covers national politics alongside state-level fact-checking through a network of partner news organizations.'
  }
];

/** First sentence of desc for collapsed cards (grid + home teaser). */
function spotlightFirstSentence(text) {
  if (!text) return '';
  var t = String(text).trim();
  for (var i = 0; i < t.length; i++) {
    var c = t.charAt(i);
    if (c === '.' || c === '!' || c === '?') {
      if (i + 1 >= t.length || /\s/.test(t.charAt(i + 1))) {
        return t.slice(0, i + 1).trim();
      }
    }
  }
  return t;
}

/** Full copy for modal: long is the expanded body when present; otherwise desc. (Desc is the teaser source for collapsed cards.) */
function spotlightModalBody(p) {
  if (!p) return '';
  var d = (p.desc || '').trim();
  var l = (p.long || '').trim();
  if (l) return l;
  return d;
}
