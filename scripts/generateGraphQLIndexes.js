const fs = require('fs').promises

const path = __dirname + '/../src/features'

async function main() {
  const features = await fs.readdir(path)

  for (const feature of features) {
    const featurePath = path + '/' + feature + '/graphql'

    const content = await Promise.all([
      fs.readFile(featurePath + '/fragments.ts').catch(() => ''),
      fs.readFile(featurePath + '/mutations.ts').catch(() => ''),
      fs.readFile(featurePath + '/subscriptions.ts').catch(() => ''),
      fs.readFile(featurePath + '/queries.ts').catch(() => ''),
    ]).then(files => files.reduce((a, b) => a + b, ''))

    const documents = Array.from(
      content.matchAll(
        /export\s+.*?\s+(\w+)\s+=\s+gql`\s*\r?\n?\s*(\w+)\s+(\w+)([ ({].*){/g,
      ),
    ).map(m => ({
      exportName: m[1],
      operation: m[2],
      operationName: m[3],
      vars: m[2] !== 'fragment' && !!m[4].trim(),
    }))

    if (documents.length)
      await fs.writeFile(featurePath + '/index.ts', generate(documents))
  }
}

const generate = documents =>
  `/* eslint-disable */
/* tslint:disable */
// @generated
// This file was automatically generated and should not be edited.

import {TypedDocumentNode} from '@apollo/client'
${
  documents.some(d => d.operation === 'query')
    ? "import * as Q from './queries'\r\n"
    : ''
}${
    documents.some(d => d.operation === 'mutation')
      ? "import * as M from './mutations'\r\n"
      : ''
  }${
    documents.some(d => d.operation === 'subscription')
      ? "import * as S from './subscriptions'\r\n"
      : ''
  }${
    documents.some(d => d.operation === 'fragment')
      ? "import * as F from './fragments'\r\n"
      : ''
  }
${documents
  .map(
    ({operationName, vars}) =>
      `import {${operationName}${
        vars ? `, ${operationName}Variables` : ''
      }} from './types/${operationName}'`,
  )
  .join('\r\n')}

${documents
  .map(({operationName}) => `export * from './types/${operationName}'`)
  .join('\r\n')}

${documents
  .map(
    ({exportName, operationName, operation, vars}) =>
      `export const ${exportName}: TypedDocumentNode<${operationName}${
        vars ? `, ${operationName}Variables` : ''
      }> = ${letter(operation)}.${exportName}`,
  )
  .join('\r\n')}
`

const letter = operation =>
  operation === 'mutation'
    ? 'M'
    : operation === 'fragment'
    ? 'F'
    : operation === 'query'
    ? 'Q'
    : 'S'

main()
