import Airtable from 'airtable';

// api keys are confidential
const base = new Airtable({ apiKey: 'put api key here' }).base(
  'app0qYKja2OqJ8RnF'
);

export default base;
