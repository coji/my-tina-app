import { Link, useLoaderData } from '@remix-run/react'
import { useTina } from 'tinacms/dist/react'

import type { LoaderFunctionArgs } from '@remix-run/node'
import { client } from 'tina/__generated__/client'
import { Layout } from '~/components/Layout'

export default function PostList() {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { props } = useLoaderData<typeof loader>()
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })
  const postsList = data.postConnection.edges
  return (
    <Layout>
      <h1>Posts</h1>
      <div>
        {postsList &&
          postsList.length > 0 &&
          postsList.map((post) => (
            <div key={post?.node?.id}>
              <Link to={`/posts/${post?.node?._sys.filename}`}>
                {post?.node?._sys.filename}
              </Link>
            </div>
          ))}
      </div>
    </Layout>
  )
}

export const loader = async (args: LoaderFunctionArgs) => {
  const { data, query, variables } = await client.queries.postConnection()

  return {
    props: {
      data,
      query,
      variables,
      //myOtherProp: 'some-other-data',
    },
  }
}
