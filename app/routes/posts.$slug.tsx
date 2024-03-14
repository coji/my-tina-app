import { useLoaderData } from '@remix-run/react'
import { useTina } from 'tinacms/dist/react'

import type { LoaderFunctionArgs } from '@remix-run/node'
import { client } from 'tina/__generated__/client'
import { Layout } from '~/components/Layout'

export default function Home() {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { props } = useLoaderData<typeof loader>()
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

  return (
    <Layout>
      <code>
        <pre className="overflow-auto rounded-md bg-slate-200 p-4">
          {JSON.stringify(data.post, null, 2)}
        </pre>
      </code>
    </Layout>
  )
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { data, query, variables } = await client.queries.post({
    relativePath: `${params.slug}.md`,
  })

  return {
    props: {
      data,
      query,
      variables,
    },
  }
}
