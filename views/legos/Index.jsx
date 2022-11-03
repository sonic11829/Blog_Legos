const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
    render () {
        const { legos } = this.props
        return (
            <Default title='Legos Index Page'>
                <ul>
                    {
                        legos.map((lego) => {
                            const { name, set, comment } = lego
                            return (
                                <li key={lego._id}>
                                    <a href={`/legos/${lego._id}`}>
                                        {set}
                                    </a> Started by {name}

                                    <br />
                                    <form method='POST' action={`/legos/${lego._id}?_method=DELETE`}>
                                        <input className='delete' type='submit' value={`Delete`} />
                                    </form>
                                </li>
                            )
                        })
                    }
                </ul>
            </Default>
        )
    }
}

module.exports = Index