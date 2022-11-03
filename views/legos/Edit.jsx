const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
    render () {
        const { name, _id, set, comment } = this.props.lego
        return (
            <Default title={`${set} Edit Page`} lego={this.props.lego}>
                <form method='POST' action={`/legos/${_id}?_method=PUT`}>
                    Email: <input type='text' name="name" defaultValue={name} /><br />
                    Set: <input type='text' name='set' defaultValue={set} /><br />
                    Comment: <input type='text' name='comment' defaultValue={comment} /><br />
                    <input type='submit' value='Edit Lego' />
                </form>
            </Default>
        )
    }
}

module.exports = Edit