import { SnowtypeConfig } from "@snowplow/snowtype/types";
const config: SnowtypeConfig = {
  igluCentralSchemas: [],
  dataStructures: [],
  repositories: [],
  eventSpecificationIds: [],
  dataProductIds: ['abecc3d9-dab3-4500-a1b8-d4db8854b0c9'],
  organizationId: 'b12539df-a711-42bd-bdfa-175308c55fd5',
  tracker: '@snowplow/browser-tracker',
  language: 'typescript',
  outpath: './src/snowtype'
}

export default config;