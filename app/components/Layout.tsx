import { Link } from '@remix-run/react'

export const Layout = (props: React.ComponentProps<'div'>) => {
  return (
    <div className="m-12">
      <header>
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/posts">Posts</Link>
      </header>
      <main>{props.children}</main>
    </div>
  )
}
