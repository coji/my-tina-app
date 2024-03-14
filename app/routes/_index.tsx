import { useLoaderData } from '@remix-run/react'
import { useTina } from 'tinacms/dist/react'

import { client } from 'tina/__generated__/client'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { Layout } from '~/components/Layout'

export default function Home() {
  const { props } = useLoaderData<typeof loader>()
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

  const content = data.page.body
  return (
    <Layout>
      <TinaMarkdown content={content} />
    </Layout>
  )
}

export const loader = async () => {
  const { data, query, variables } = await client.queries.page({
    relativePath: 'home.mdx',
  })

  return {
    props: {
      data,
      query,
      variables,
    },
  }
}
