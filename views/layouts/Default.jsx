const React = require('react')

class Default extends React.Component {
    render () {
        const { lego, title } = this.props
        return(
            <html>
                <head>
                    <link rel='stylesheet' href='/css/app.css' />
                    <title>{title}</title>
                </head>
                <body>
                    <nav>
                        <a className='route' href='/legos'>Home</a>
                        <a className='route' href='/legos/new'>New Blog</a>
                        {lego ? <a className='route' href={`/legos/${lego._id}/edit`}> Edit </a> : ''}
                        {lego ? <a className='route' href={`/legos/${lego._id}`}> Show Set </a> : ''}
                    </nav>
                    <h1>
                        {title}
                    </h1>

                    {this.props.children}
                </body>
            </html>
        )
    }
}
// things
module.exports = Default