import Airtable from 'airtable';

// api keys are confidential
const base = new Airtable({ apiKey: 'put api key here' }).base(
  'put base'
);

export default base;
