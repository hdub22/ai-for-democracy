/**
 * Project Spotlight cards — shared by index.html (shuffle preview) and project-spotlight.html.
 * Edit this file to update spotlight content everywhere.
 */
var SPOTLIGHT_CARDS = [
  {
    tag: 'Election Integrity',
    tagClass: 'tag-p2',
    name: 'AI-Assisted Election Audit Tool',
    org: 'Placeholder Organization',
    desc: 'Uses machine learning to flag statistical anomalies in reported vote tallies, supporting post-election audits at the county level.',
    long: 'This tool applies machine learning models trained on historical election data to surface irregularities in reported vote tallies that warrant closer human review. Rather than replacing auditors, it prioritizes their attention — dramatically reducing the time required to identify races where a hand recount may be warranted. The project was piloted in three counties during the 2024 cycle and is currently being adapted for broader state-level deployment. Placeholder details to be replaced with real project information.'
  },
  {
    tag: 'Information Environment',
    tagClass: 'tag-p4',
    name: 'Synthetic Media Detection Project',
    org: 'Placeholder Organization',
    desc: 'Develops open-source classifiers to identify AI-generated audio and video circulating in political contexts ahead of major elections.',
    long: 'As AI-generated audio and video become increasingly indistinguishable from authentic media, this project maintains a suite of open-source detection classifiers updated on a rolling basis. The models are trained on labeled synthetic media samples and made freely available to newsrooms, election officials, and researchers. A browser extension allows journalists to run quick checks on suspect clips directly in their workflow. Placeholder details to be replaced with real project information.'
  },
  {
    tag: 'Civic Participation',
    tagClass: 'tag-p1',
    name: 'AI-Powered Constituent Listening',
    org: 'Placeholder Organization',
    desc: 'Aggregates and clusters constituent feedback at scale, helping legislative offices identify emerging concerns without losing individual voices.',
    long: 'Legislative offices receive tens of thousands of constituent messages annually but lack the capacity to meaningfully engage with them at scale. This platform uses NLP to cluster incoming messages by topic and sentiment, presenting staff with a structured map of constituent concerns rather than an overwhelming inbox. Crucially, it preserves links to individual messages so that specific voices are never fully abstracted away. Placeholder details to be replaced with real project information.'
  },
  {
    tag: 'Accountability & Transparency',
    tagClass: 'tag-p3',
    name: 'Automated Legislative Tracker',
    org: 'Placeholder Organization',
    desc: 'Monitors thousands of state and federal bill updates in real time, surfacing policy changes relevant to civil liberties and voting rights.',
    long: 'Tracking legislation across 50 state legislatures and the federal government has historically required enormous human bandwidth. This system monitors bill text and status changes in real time, applying a classifier trained on civil liberties and voting rights precedents to flag high-priority developments for advocates and journalists. Subscribers receive daily digests filtered to their areas of focus. Placeholder details to be replaced with real project information.'
  },
  {
    tag: 'Governance & Policy',
    tagClass: 'tag-p7',
    name: 'AI Regulatory Impact Simulator',
    org: 'Placeholder Organization',
    desc: 'Models the downstream effects of proposed AI governance frameworks on marginalized communities, informing federal comment processes.',
    long: 'When regulatory agencies solicit public comment on proposed AI rules, advocacy organizations often lack the technical capacity to model second-order effects. This simulator allows policy teams to stress-test draft frameworks against a range of community impact scenarios, generating structured analysis that can be submitted directly into federal comment processes. The tool has been used to inform comment filings with the FTC and NIST. Placeholder details to be replaced with real project information.'
  },
  {
    tag: 'Resilience Monitoring',
    tagClass: 'tag-p6',
    name: 'Democratic Backsliding Index',
    org: 'Placeholder Organization',
    desc: 'Applies NLP to news corpora and legal filings across 40 countries to produce a continuously updated index of democratic health indicators.',
    long: 'Traditional democratic health indices are updated annually by expert panels — too slow to capture fast-moving threats to institutions. This index applies NLP to a continuously ingested corpus of news reporting and legal filings across 40 countries, updating scores weekly across indicators like judicial independence, press freedom, and electoral fairness. The methodology and underlying data are fully open, allowing researchers to build on or challenge the findings. Placeholder details to be replaced with real project information.'
  }
];
