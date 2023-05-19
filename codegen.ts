import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: 'http://localhost:4000/graphql',
    documents: ['./src/queries/**/*.ts'],
    ignoreNoDocuments: true, // for better experience with the watcher
    generates: {
        'src/types.ts': { plugins: ['typescript'] },
        'src/': {
            preset: 'near-operation-file',
            presetConfig: {
                extension: '.generated.tsx',
                baseTypesPath: 'types.ts',
            },
            plugins: ['typescript-operations', 'typescript-react-apollo'],
            config: {
                withHooks: true
            }
        },
    },
}

export default config