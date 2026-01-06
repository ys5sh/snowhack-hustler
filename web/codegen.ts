import type { CodegenConfig } from "@graphql-codegen/cli";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

const config: CodegenConfig = {
  schema: `${API_URL}/graphql`,
  documents: "src/graphql/**/*.graphql",
  generates: {
    "src/generated/graphql.tsx": {
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
      config: {
        avoidOptionals: {
          field: true,
          inputValue: false,
        },
        defaultScalarType: "unknown",
        nonOptionalTypename: true,
        skipTypeNameForRoot: true,
      },
    },
  },
};

export default config;
